import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClinicService } from '../../../../core/services/clinic.service';
import { IconComponent } from '../../../../shared/components/icon/icon.component';
import { SectionHeaderComponent } from '../../../../shared/components/section-header/section-header.component';

@Component({
  selector: 'app-timings-section',
  standalone: true,
  imports: [CommonModule, IconComponent, SectionHeaderComponent],
  templateUrl: './timings-section.component.html',
  styleUrl: './timings-section.component.scss'
})
export class TimingsSectionComponent {
  readonly clinicService = inject(ClinicService);
  readonly timings = this.clinicService.timings;
  readonly clinicStatus = this.clinicService.clinicStatus;

  getWhatsAppLink(): string {
    return this.clinicService.getWhatsAppUrl(
      `Hello Dr. Yewale's Clinic, I would like to check doctor availability for today.`
    );
  }
}
