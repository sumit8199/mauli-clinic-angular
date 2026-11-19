import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClinicService } from '../../../../core/services/clinic.service';
import { IconComponent } from '../../../../shared/components/icon/icon.component';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [CommonModule, IconComponent],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.scss'
})
export class HeroSectionComponent {
  readonly clinicService = inject(ClinicService);

  readonly doctor = this.clinicService.doctor;
  readonly stats = this.clinicService.stats;
  readonly contact = this.clinicService.contact;

  getWhatsAppBookingLink(): string {
    return this.clinicService.getWhatsAppUrl(
      `Hello Dr. Yewale's Clinic, I want to book an appointment with Dr. Suraj Yewale.`
    );
  }

  getDirectionsLink(): string {
    return this.clinicService.getMapsUrl();
  }
}
