import { createApplication } from '@angular/platform-browser';
import { createCustomElement } from '@angular/elements';
import { GithubLinkComponent } from './githublink/githublink.component';
import { ɵprovideZonelessChangeDetection } from '@angular/core';

createApplication({
  providers: [ɵprovideZonelessChangeDetection()],
})
  .then((app) => {
    const GithubLinkElement = createCustomElement(GithubLinkComponent, { injector: app.injector });
    customElements.define('github-link', GithubLinkElement);
  })
  .catch((err) => console.error(err));