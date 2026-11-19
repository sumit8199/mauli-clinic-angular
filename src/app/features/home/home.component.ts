import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MetaService } from '../../core/services/meta.service';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';
import { AboutSectionComponent } from './components/about-section/about-section.component';
import { ServicesSectionComponent } from './components/services-section/services-section.component';
import { DoctorSectionComponent } from './components/doctor-section/doctor-section.component';
import { TimingsSectionComponent } from './components/timings-section/timings-section.component';
import { ReviewsSectionComponent } from './components/reviews-section/reviews-section.component';
import { FaqSectionComponent } from './components/faq-section/faq-section.component';
import { LocationSectionComponent } from './components/location-section/location-section.component';
import { AppointmentSectionComponent } from './components/appointment-section/appointment-section.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    HeroSectionComponent,
    AboutSectionComponent,
    ServicesSectionComponent,
    DoctorSectionComponent,
    TimingsSectionComponent,
    ReviewsSectionComponent,
    FaqSectionComponent,
    LocationSectionComponent,
    AppointmentSectionComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  private readonly metaService = inject(MetaService);

  ngOnInit(): void {
    this.metaService.updateMeta(
      "Dr. Yewale's Mauli Children & General Clinic | Pediatrician Nashik",
      "Trusted pediatric and family healthcare in Panchavati, Nashik by Dr. Suraj Yewale, MD Pediatrics. Book on WhatsApp."
    );
  }
}
