import { Injectable, signal, computed } from '@angular/core';
import { CLINIC_CONFIG } from '../constants/clinic.config';
import { ClinicContact, ClinicTiming, DoctorInfo, ClinicStat, NavLink } from '../models/clinic.model';
import { ClinicServiceItem } from '../models/service.model';
import { PatientReview, FaqItem } from '../models/testimonial.model';

@Injectable({
  providedIn: 'root'
})
export class ClinicService {
  private readonly config = signal(CLINIC_CONFIG);

  // Reactive Signals
  readonly clinicName = computed(() => this.config().name);
  readonly shortName = computed(() => this.config().shortName);
  readonly doctor = computed<DoctorInfo>(() => this.config().doctor);
  readonly contact = computed<ClinicContact>(() => this.config().contact);
  readonly timings = computed<ClinicTiming[]>(() => this.config().timings);
  readonly stats = computed<ClinicStat[]>(() => this.config().stats);
  readonly navLinks = computed<NavLink[]>(() => this.config().navLinks);
  readonly services = computed<ClinicServiceItem[]>(() => this.config().services);
  readonly pillars = computed(() => this.config().pillars);
  readonly testimonials = computed<PatientReview[]>(() => this.config().testimonials);
  readonly faqs = computed<FaqItem[]>(() => this.config().faqs);

  /**
   * Real-time calculation of whether the clinic is currently open or closed
   */
  readonly clinicStatus = computed(() => {
    const now = new Date();
    const day = now.getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const currentMinutes = hours * 60 + minutes;

    // Morning Slot: 10:00 AM (600m) to 2:00 PM (840m)
    const morningOpen = 10 * 60;
    const morningClose = 14 * 60;

    // Evening Slot: 6:00 PM (1080m) to 9:30 PM (1290m)
    const eveningOpen = 18 * 60;
    const eveningClose = 21 * 60 + 30;

    const isSunday = day === 0;

    const inMorningSlot = currentMinutes >= morningOpen && currentMinutes < morningClose;
    const inEveningSlot = !isSunday && currentMinutes >= eveningOpen && currentMinutes < eveningClose;

    if (inMorningSlot || inEveningSlot) {
      return {
        isOpen: true,
        statusText: 'Open Now',
        slotInfo: inMorningSlot ? 'Morning Session (Closes at 2:00 PM)' : 'Evening Session (Closes at 9:30 PM)'
      };
    }

    // Determine next opening slot
    let nextSlot = 'Opens tomorrow at 10:00 AM';
    if (currentMinutes < morningOpen) {
      nextSlot = 'Opens today at 10:00 AM';
    } else if (!isSunday && currentMinutes < eveningOpen) {
      nextSlot = 'Evening session opens today at 6:00 PM';
    }

    return {
      isOpen: false,
      statusText: 'Closed Now',
      slotInfo: nextSlot
    };
  });

  /**
   * Get direct WhatsApp Link
   */
  getWhatsAppUrl(customMessage?: string): string {
    const phone = this.contact().whatsappNumber;
    const defaultMsg = `Hello Dr. Yewale's Clinic, I would like to inquire about consultation.`;
    const message = customMessage || defaultMsg;
    return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  }

  /**
   * Get Call Link
   */
  getPhoneUrl(): string {
    return `tel:+${this.contact().phone}`;
  }

  /**
   * Get Google Maps directions link
   */
  getMapsUrl(): string {
    return this.contact().googleMapsUrl;
  }
}
