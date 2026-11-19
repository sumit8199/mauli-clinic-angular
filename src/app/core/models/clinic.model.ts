export interface DoctorInfo {
  name: string;
  qualification: string;
  title: string;
  initials: string;
  experienceYears: number;
  rating: number;
  bio: string;
  specializations: string[];
}

export interface ClinicTiming {
  days: string;
  morningSlot: string;
  eveningSlot: string;
  isSunday?: boolean;
}

export interface ClinicContact {
  phone: string;
  phoneFormatted: string;
  whatsappNumber: string;
  email: string;
  address: {
    line1: string;
    area: string;
    city: string;
    pincode: string;
    state: string;
    country: string;
    fullAddress: string;
  };
  coordinates: {
    lat: number;
    lng: number;
  };
  googleMapsUrl: string;
  googleMapsEmbedUrl: string;
}

export interface ClinicStat {
  icon: string;
  value: string;
  label: string;
  sublabel?: string;
}

export interface NavLink {
  label: string;
  href: string;
  isButton?: boolean;
}
