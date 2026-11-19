import { Injectable, inject, signal } from '@angular/core';
import { AppointmentRequest, BookingResponse } from '../models/appointment.model';
import { ClinicService } from './clinic.service';

export interface ToastMessage {
  id: string;
  type: 'success' | 'info' | 'error';
  title: string;
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  private readonly clinicService = inject(ClinicService);

  // Toast notification state signal
  readonly currentToast = signal<ToastMessage | null>(null);

  /**
   * Format and generate WhatsApp appointment dispatch URL
   */
  generateWhatsAppPayload(appointment: AppointmentRequest): string {
    const contact = this.clinicService.contact();
    const cleanPhone = contact.whatsappNumber;

    const lines = [
      `*New Appointment Request - Dr. Yewale's Mauli Clinic*`,
      `━━━━━━━━━━━━━━━━━━━━`,
      `👤 *Parent / Guardian:* ${appointment.parentName.trim()}`,
      `👶 *Child Age / Patient:* ${appointment.childAge.trim()}`,
      `📱 *Contact Phone:* ${appointment.phone.trim()}`,
      `⏰ *Preferred Slot:* ${appointment.slot}`,
      appointment.notes ? `📝 *Reason/Notes:* ${appointment.notes.trim()}` : null,
      `━━━━━━━━━━━━━━━━━━━━`,
      `_Sent via Mauli Clinic Website Booking Portal_`
    ].filter(Boolean);

    const message = lines.join('\n');
    return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(message)}`;
  }

  /**
   * Submit appointment request and open WhatsApp
   */
  bookAppointment(appointment: AppointmentRequest): BookingResponse {
    try {
      const whatsappUrl = this.generateWhatsAppPayload(appointment);

      // Save to local storage history
      this.saveBookingHistory(appointment);

      // Open WhatsApp in new window
      if (typeof window !== 'undefined') {
        window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
      }

      this.showToast({
        id: Date.now().toString(),
        type: 'success',
        title: 'Opening WhatsApp...',
        message: 'Your appointment details are prepared! Hit send in WhatsApp to confirm.'
      });

      return {
        success: true,
        message: 'Redirecting to WhatsApp to finalize appointment',
        whatsappUrl
      };
    } catch (error) {
      this.showToast({
        id: Date.now().toString(),
        type: 'error',
        title: 'Booking Error',
        message: 'Unable to open WhatsApp. Please call us directly.'
      });

      return {
        success: false,
        message: 'Failed to process booking request'
      };
    }
  }

  private saveBookingHistory(appointment: AppointmentRequest): void {
    try {
      if (typeof localStorage !== 'undefined') {
        const key = 'mauli_clinic_last_booking';
        const payload = {
          ...appointment,
          createdAt: new Date().toISOString()
        };
        localStorage.setItem(key, JSON.stringify(payload));
      }
    } catch {
      // LocalStorage might be restricted
    }
  }

  showToast(toast: ToastMessage, autoDismissMs: number = 5000): void {
    this.currentToast.set(toast);
    setTimeout(() => {
      if (this.currentToast()?.id === toast.id) {
        this.currentToast.set(null);
      }
    }, autoDismissMs);
  }

  dismissToast(): void {
    this.currentToast.set(null);
  }
}
