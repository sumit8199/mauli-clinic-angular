import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-section-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './section-header.component.html',
  styleUrl: './section-header.component.scss'
})
export class SectionHeaderComponent {
  readonly badge = input<string>('');
  readonly title = input.required<string>();
  readonly subtitle = input<string>('');
  readonly centered = input<boolean>(true);
}
