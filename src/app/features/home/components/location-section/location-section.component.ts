import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClinicService } from '../../../../core/services/clinic.service';
import { IconComponent } from '../../../../shared/components/icon/icon.component';
import { SectionHeaderComponent } from '../../../../shared/components/section-header/section-header.component';
import { SafeUrlPipe } from '../../../../shared/pipes/safe-url.pipe';

@Component({
  selector: 'app-location-section',
  standalone: true,
  imports: [CommonModule, IconComponent, SectionHeaderComponent, SafeUrlPipe],
  templateUrl: './location-section.component.html',
  styleUrl: './location-section.component.scss'
})
export class LocationSectionComponent {
  readonly clinicService = inject(ClinicService);
  readonly contact = this.clinicService.contact;

  getDirectionsLink(): string {
    return this.clinicService.getMapsUrl();
  }
}
