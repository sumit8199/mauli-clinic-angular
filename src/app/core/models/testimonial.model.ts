export interface PatientReview {
  id: string;
  parentName: string;
  childInfo: string;
  rating: number;
  comment: string;
  location: string;
  verified: boolean;
  date: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'General' | 'Vaccination' | 'Appointment' | 'Emergency';
}
