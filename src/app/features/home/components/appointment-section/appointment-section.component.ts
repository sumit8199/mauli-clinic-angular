import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { ClinicService } from '../../../../core/services/clinic.service';
import { AppointmentService } from '../../../../core/services/appointment.service';
import { IconComponent } from '../../../../shared/components/icon/icon.component';
import { SectionHeaderComponent } from '../../../../shared/components/section-header/section-header.component';
import { TimeSlot } from '../../../../core/models/appointment.model';

@Component({
  selector: 'app-appointment-section',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, IconComponent],
  templateUrl: './appointment-section.component.html',
  styleUrl: './appointment-section.component.scss'
})
export class AppointmentSectionComponent {
  private readonly fb = inject(FormBuilder);
  readonly clinicService = inject(ClinicService);
  readonly appointmentService = inject(AppointmentService);

  readonly contact = this.clinicService.contact;
  readonly isSubmitting = signal<boolean>(false);
  readonly isSubmitted = signal<boolean>(false);

  readonly timeSlots: TimeSlot[] = [
    'Morning (10 AM – 2 PM)',
    'Evening (6 PM – 9:30 PM, Mon–Sat)'
  ];

  readonly form = this.fb.group({
    parentName: ['', [Validators.required, Validators.minLength(2)]],
    childAge: ['', [Validators.required]],
    phone: ['', [Validators.required, Validators.pattern(/^[0-9+ ]{10,15}$/)]],
    slot: ['Morning (10 AM – 2 PM)' as TimeSlot, [Validators.required]],
    notes: ['']
  });

  onSubmit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.isSubmitting.set(true);

    const formVal = this.form.getRawValue();
    const result = this.appointmentService.bookAppointment({
      parentName: formVal.parentName || '',
      childAge: formVal.childAge || '',
      phone: formVal.phone || '',
      slot: formVal.slot as TimeSlot,
      notes: formVal.notes || ''
    });

    this.isSubmitting.set(false);
    if (result.success) {
      this.isSubmitted.set(true);
    }
  }

  resetForm(): void {
    this.form.reset({
      parentName: '',
      childAge: '',
      phone: '',
      slot: 'Morning (10 AM – 2 PM)',
      notes: ''
    });
    this.isSubmitted.set(false);
  }
}
