import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClinicService } from '../../../../core/services/clinic.service';
import { IconComponent } from '../../../../shared/components/icon/icon.component';

@Component({
  selector: 'app-doctor-section',
  standalone: true,
  imports: [CommonModule, IconComponent],
  templateUrl: './doctor-section.component.html',
  styleUrl: './doctor-section.component.scss'
})
export class DoctorSectionComponent {
  readonly clinicService = inject(ClinicService);
  readonly doctor = this.clinicService.doctor;

  getDoctorBookingLink(): string {
    return this.clinicService.getWhatsAppUrl(
      `Hello Dr. Yewale's Clinic, I would like to book a consultation with Dr. Suraj Yewale.`
    );
  }
}
