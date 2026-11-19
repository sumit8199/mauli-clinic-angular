import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClinicService } from '../../../../core/services/clinic.service';
import { IconComponent } from '../../../../shared/components/icon/icon.component';
import { SectionHeaderComponent } from '../../../../shared/components/section-header/section-header.component';

@Component({
  selector: 'app-about-section',
  standalone: true,
  imports: [CommonModule, IconComponent, SectionHeaderComponent],
  templateUrl: './about-section.component.html',
  styleUrl: './about-section.component.scss'
})
export class AboutSectionComponent {
  readonly clinicService = inject(ClinicService);
  readonly pillars = this.clinicService.pillars;
}
