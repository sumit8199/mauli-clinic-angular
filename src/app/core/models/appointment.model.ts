export type TimeSlot = 'Morning (10 AM – 2 PM)' | 'Evening (6 PM – 9:30 PM, Mon–Sat)';

export interface AppointmentRequest {
  parentName: string;
  childAge: string;
  phone: string;
  slot: TimeSlot;
  notes?: string;
  createdAt?: Date;
}

export interface BookingResponse {
  success: boolean;
  message: string;
  whatsappUrl?: string;
}
