import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClinicService } from '../../../../core/services/clinic.service';
import { IconComponent } from '../../../../shared/components/icon/icon.component';
import { SectionHeaderComponent } from '../../../../shared/components/section-header/section-header.component';
import { ClinicServiceItem } from '../../../../core/models/service.model';

@Component({
  selector: 'app-services-section',
  standalone: true,
  imports: [CommonModule, IconComponent, SectionHeaderComponent],
  templateUrl: './services-section.component.html',
  styleUrl: './services-section.component.scss'
})
export class ServicesSectionComponent {
  readonly clinicService = inject(ClinicService);
  readonly services = this.clinicService.services;

  getServiceEnquiryLink(service: ClinicServiceItem): string {
    return this.clinicService.getWhatsAppUrl(
      `Hello Dr. Yewale's Clinic, I would like to inquire about: ${service.title}.`
    );
  }
}
