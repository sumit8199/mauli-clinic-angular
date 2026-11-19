import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClinicService } from '../../../../core/services/clinic.service';
import { IconComponent } from '../../../../shared/components/icon/icon.component';
import { SectionHeaderComponent } from '../../../../shared/components/section-header/section-header.component';

@Component({
  selector: 'app-reviews-section',
  standalone: true,
  imports: [CommonModule, IconComponent, SectionHeaderComponent],
  templateUrl: './reviews-section.component.html',
  styleUrl: './reviews-section.component.scss'
})
export class ReviewsSectionComponent {
  readonly clinicService = inject(ClinicService);
  readonly testimonials = this.clinicService.testimonials;
}
