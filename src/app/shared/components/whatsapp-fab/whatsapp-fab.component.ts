import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClinicService } from '../../../core/services/clinic.service';
import { IconComponent } from '../icon/icon.component';

@Component({
  selector: 'app-whatsapp-fab',
  standalone: true,
  imports: [CommonModule, IconComponent],
  templateUrl: './whatsapp-fab.component.html',
  styleUrl: './whatsapp-fab.component.scss'
})
export class WhatsappFabComponent {
  readonly clinicService = inject(ClinicService);

  getWhatsAppLink(): string {
    return this.clinicService.getWhatsAppUrl(
      `Hello Dr. Yewale's Clinic, I would like to book a pediatric consultation.`
    );
  }
}
