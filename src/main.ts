import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

// Bootstrap Angular only when index.html includes the meta tag:
// <meta name="bootstrap-angular" content="true">
const shouldBootstrap = !!document.querySelector('meta[name="bootstrap-angular"]');

if (shouldBootstrap) {
  bootstrapApplication(App, appConfig).catch((err) => console.error(err));
} else {
  // Do not bootstrap. Ensure `app-root` is hidden in index.html to avoid flash.
  console.log('Angular bootstrap skipped — showing static index.html.');
}
