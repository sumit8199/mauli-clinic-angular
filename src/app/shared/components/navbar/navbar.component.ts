import { Component, inject, signal, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClinicService } from '../../../core/services/clinic.service';
import { IconComponent } from '../icon/icon.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, IconComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  readonly clinicService = inject(ClinicService);

  readonly clinicName = this.clinicService.clinicName;
  readonly doctor = this.clinicService.doctor;
  readonly contact = this.clinicService.contact;
  readonly navLinks = this.clinicService.navLinks;
  readonly clinicStatus = this.clinicService.clinicStatus;

  readonly mobileMenuOpen = signal<boolean>(false);
  readonly isScrolled = signal<boolean>(false);

  @HostListener('window:scroll')
  onScroll(): void {
    if (typeof window !== 'undefined') {
      this.isScrolled.set(window.scrollY > 20);
    }
  }

  toggleMobileMenu(): void {
    this.mobileMenuOpen.update(v => !v);
  }

  closeMobileMenu(): void {
    this.mobileMenuOpen.set(false);
  }

  getWhatsAppLink(): string {
    return this.clinicService.getWhatsAppUrl();
  }

  getPhoneLink(): string {
    return this.clinicService.getPhoneUrl();
  }
}
