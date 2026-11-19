import { Injectable, inject } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class MetaService {
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);

  updateMeta(titleText: string, descriptionText?: string): void {
    this.title.setTitle(titleText);

    if (descriptionText) {
      this.meta.updateTag({ name: 'description', content: descriptionText });
      this.meta.updateTag({ property: 'og:title', content: titleText });
      this.meta.updateTag({ property: 'og:description', content: descriptionText });
      this.meta.updateTag({ name: 'twitter:title', content: titleText });
      this.meta.updateTag({ name: 'twitter:description', content: descriptionText });
    }
  }
}
