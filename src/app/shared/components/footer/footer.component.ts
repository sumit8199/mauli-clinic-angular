import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClinicService } from '../../../core/services/clinic.service';
import { IconComponent } from '../icon/icon.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, IconComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  readonly clinicService = inject(ClinicService);

  readonly clinicName = this.clinicService.clinicName;
  readonly doctor = this.clinicService.doctor;
  readonly contact = this.clinicService.contact;
  readonly navLinks = this.clinicService.navLinks;
  readonly timings = this.clinicService.timings;
  readonly currentYear = new Date().getFullYear();

  getWhatsAppLink(): string {
    return this.clinicService.getWhatsAppUrl();
  }

  getPhoneLink(): string {
    return this.clinicService.getPhoneUrl();
  }
}
