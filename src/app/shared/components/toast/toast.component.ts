import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppointmentService } from '../../../core/services/appointment.service';
import { IconComponent } from '../icon/icon.component';

@Component({
  selector: 'app-toast',
  standalone: true,
  imports: [CommonModule, IconComponent],
  templateUrl: './toast.component.html',
  styleUrl: './toast.component.scss'
})
export class ToastComponent {
  readonly appointmentService = inject(AppointmentService);
  readonly currentToast = this.appointmentService.currentToast;

  dismiss(): void {
    this.appointmentService.dismissToast();
  }
}
