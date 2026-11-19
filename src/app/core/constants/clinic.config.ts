import { ClinicContact, DoctorInfo, ClinicTiming, ClinicStat, NavLink } from '../models/clinic.model';
import { ClinicServiceItem } from '../models/service.model';
import { PatientReview, FaqItem } from '../models/testimonial.model';

export const CLINIC_CONFIG = {
  name: "Dr. Yewale's Mauli Children and General Clinic",
  shortName: "Mauli Children & General Clinic",
  tagline: "Trusted Pediatric Care & Family Healthcare in Panchavati, Nashik",
  metaDescription: "Trusted pediatric and family healthcare in Panchavati, Nashik by Dr. Suraj Yewale, MD Pediatrics. Book on WhatsApp.",
  foundedYear: 2020,
  experienceYearsText: "6+ Years Experience",
  ratingText: "5.0-Star Patient Rated",

  doctor: {
    name: "Dr. Suraj Yewale",
    qualification: "MD (Pediatrics)",
    title: "Consultant Pediatrician & Child Health Specialist",
    initials: "SY",
    experienceYears: 6,
    rating: 5.0,
    bio: "Dr. Suraj Yewale is known for his clinical dedication and a gentle, reassuring bedside manner that puts even the youngest patients at ease. With over six years of pediatric clinical experience, he combines thorough examination with evidence-based diagnosis to deliver the right treatment — giving parents transparent, trustworthy guidance at every step.",
    specializations: [
      "Newborn & Neonatal Care",
      "Child Immunization & Vaccines",
      "Pediatric Infections & Fever",
      "Growth & Milestone Tracking",
      "Allergic Rhinitis & Asthma",
      "Child Nutrition & Wellness"
    ]
  } as DoctorInfo,

  contact: {
    phone: "919175375189",
    phoneFormatted: "+91 91753 75189",
    whatsappNumber: "919175375189",
    email: "yewalesmauliclinic@gmail.com",
    address: {
      line1: "Dream Aura, Adgaon",
      area: "Jatra-Nandur Road, Panchavati",
      city: "Nashik",
      pincode: "422003",
      state: "Maharashtra",
      country: "India",
      fullAddress: "Dream Aura, Adgaon, Jatra-Nandur Road, Panchavati, Nashik - 422003, Maharashtra, India."
    },
    coordinates: {
      lat: 20.0218991,
      lng: 73.8421614
    },
    googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=20.0218991,73.8421614",
    googleMapsEmbedUrl: "https://maps.google.com/maps?q=20.0218991,73.8421614&z=17&output=embed"
  } as ClinicContact,

  timings: [
    {
      days: "Monday – Saturday",
      morningSlot: "10:00 AM – 02:00 PM",
      eveningSlot: "06:00 PM – 09:30 PM",
      isSunday: false
    },
    {
      days: "Sunday",
      morningSlot: "10:00 AM – 02:00 PM",
      eveningSlot: "Evening Closed",
      isSunday: true
    }
  ] as ClinicTiming[],

  stats: [
    {
      icon: "star",
      value: "5.0 ★",
      label: "Patient Rated",
      sublabel: "Trusted by 5000+ parents"
    },
    {
      icon: "baby",
      value: "Infant Care",
      label: "Child Specialist",
      sublabel: "Newborn to adolescence"
    },
    {
      icon: "award",
      value: "6+ Years",
      label: "Clinical Experience",
      sublabel: "MD (Pediatrics)"
    }
  ] as ClinicStat[],

  navLinks: [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Doctor Profile", href: "#doctor" },
    { label: "Timings", href: "#timings" },
    { label: "Reviews", href: "#reviews" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact & Location", href: "#contact" }
  ] as NavLink[],

  services: [
    {
      id: "newborn-care",
      icon: "baby",
      title: "Newborn & Infant Care",
      description: "Comprehensive neonatal health checkups, monthly physical growth tracking, motor skill milestone monitoring, and breastfeeding guidance for mothers.",
      features: ["Neonatal jaundice check", "Growth & weight monitoring", "Sleep & feeding routines"],
      badge: "Pediatric Speciality"
    },
    {
      id: "vaccination",
      icon: "syringe",
      title: "Child Immunization & Vaccination",
      description: "Scheduled childhood immunizations adhering strictly to IAP (Indian Academy of Pediatrics) guidelines, cold-chain assured vaccines and painless vaccination options.",
      features: ["IAP scheduled vaccines", "Complete digital records", "Flu & booster shots"],
      badge: "Preventive Care"
    },
    {
      id: "fever-infections",
      icon: "thermometer",
      title: "Fever & Infection Management",
      description: "Precise differential diagnosis for viral fevers, seasonal flu, respiratory infections, pediatric asthma, gastrointestinal issues, allergies, and childhood cough.",
      features: ["Rapid clinical evaluation", "Minimal antibiotic reliance", "Nebulization support"],
      badge: "Acute Care"
    },
    {
      id: "nutrition",
      icon: "apple",
      title: "Child Nutrition & Development",
      description: "Personalized nutritional assessment, guidance for picky eaters, anemia screening, puberty growth milestones, and cognitive developmental tracking.",
      features: ["Weaning food plans", "Height/weight percentiles", "Deficiency management"],
      badge: "Wellness"
    },
    {
      id: "family-medicine",
      icon: "users",
      title: "General Family Medicine",
      description: "Primary healthcare consultations, preventive routine health checkups, hypertension/diabetes screening, and holistic medical treatment for family members of all ages.",
      features: ["Whole-family care", "Preventive checkups", "Chronic care advisory"],
      badge: "Family Health"
    },
    {
      id: "emergency-triage",
      icon: "shield-check",
      title: "Pediatric Emergency Guidance",
      description: "Prompt medical assessment for acute high fever, febrile seizures, severe dehydration, accidental injuries, and allergic reactions with quick stabilization.",
      features: ["Immediate triage", "Parent reassurance", "Hospital referral coordination"],
      badge: "Priority Support"
    }
  ] as ClinicServiceItem[],

  pillars: [
    {
      icon: "stethoscope",
      title: "Accurate Diagnosis",
      description: "Evidence-based pediatric medical evaluation avoiding unnecessary medication or tests."
    },
    {
      icon: "shield-check",
      title: "Hygienic & Child-Friendly",
      description: "Sanitized, welcoming clinic designed to keep children cheerful and parents relaxed."
    },
    {
      icon: "heart-pulse",
      title: "Holistic Family Care",
      description: "Continuous medical support spanning infant care, growing teens, and general family wellness."
    }
  ],

  testimonials: [
    {
      id: "1",
      parentName: "Pooja Patil",
      childInfo: "Mother of 2-year-old Reyansh",
      rating: 5,
      comment: "Dr. Suraj Yewale is so gentle with kids! My son usually cries in clinics, but Dr. Suraj made him comfortable immediately. His diagnosis was right on point and gave us immense peace of mind.",
      location: "Panchavati, Nashik",
      verified: true,
      date: "Recent Patient"
    },
    {
      id: "2",
      parentName: "Amit Shinde",
      childInfo: "Father of 6-month-old Ananya",
      rating: 5,
      comment: "We get all of our baby's vaccinations done here. The cold chain management and painless administration is remarkable. Doctor explains every vaccine and post-care in great detail.",
      location: "Adgaon, Nashik",
      verified: true,
      date: "Recent Patient"
    },
    {
      id: "3",
      parentName: "Snehal Deshmukh",
      childInfo: "Mother of 5-year-old Kabir",
      rating: 5,
      comment: "The best pediatrician in Panchavati. Very honest, never prescribes unnecessary medicines or antibiotics. The clinic is spotless and booking through WhatsApp is very convenient.",
      location: "Jatra Hotel Area, Nashik",
      verified: true,
      date: "Recent Patient"
    }
  ] as PatientReview[],

  faqs: [
    {
      id: "faq-1",
      question: "How do I book an appointment with Dr. Suraj Yewale?",
      answer: "You can book directly using the online form on this website or by clicking the WhatsApp button (+91 91753 75189). Walk-in consultations are also welcomed during consultation hours.",
      category: "Appointment"
    },
    {
      id: "faq-2",
      question: "What are the clinic visiting timings?",
      answer: "The clinic is open Monday to Saturday from 10:00 AM to 02:00 PM (Morning session) and 06:00 PM to 09:30 PM (Evening session). On Sundays, the clinic is open only in the morning from 10:00 AM to 02:00 PM.",
      category: "General"
    },
    {
      id: "faq-3",
      question: "Are all government and IAP-recommended vaccines available?",
      answer: "Yes, we provide all mandatory and optional childhood vaccines as per Indian Academy of Pediatrics (IAP) & WHO guidelines under strict temperature-controlled cold chain storage.",
      category: "Vaccination"
    },
    {
      id: "faq-4",
      question: "Do you treat adults and other family members as well?",
      answer: "Yes! While Dr. Suraj Yewale specializes in Pediatrics, Mauli Clinic also offers General Family Medicine consultations for everyday illnesses, health screenings, and primary medical checkups.",
      category: "General"
    },
    {
      id: "faq-5",
      question: "Where is Mauli Clinic located in Nashik?",
      answer: "We are located at Dream Aura, Adgaon, Jatra-Nandur Road, Panchavati, Nashik - 422003 (Maharashtra). You can use Google Maps directly from our contact section for GPS directions.",
      category: "General"
    }
  ] as FaqItem[]
};
