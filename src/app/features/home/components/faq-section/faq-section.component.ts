import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClinicService } from '../../../../core/services/clinic.service';
import { IconComponent } from '../../../../shared/components/icon/icon.component';
import { SectionHeaderComponent } from '../../../../shared/components/section-header/section-header.component';

@Component({
  selector: 'app-faq-section',
  standalone: true,
  imports: [CommonModule, IconComponent, SectionHeaderComponent],
  templateUrl: './faq-section.component.html',
  styleUrl: './faq-section.component.scss'
})
export class FaqSectionComponent {
  readonly clinicService = inject(ClinicService);
  readonly faqs = this.clinicService.faqs;

  // Signal to track active open accordion item ID (first open by default)
  readonly activeFaqId = signal<string>('faq-1');

  toggleFaq(id: string): void {
    if (this.activeFaqId() === id) {
      this.activeFaqId.set('');
    } else {
      this.activeFaqId.set(id);
    }
  }

  isOpen(id: string): boolean {
    return this.activeFaqId() === id;
  }
}
