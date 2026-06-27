import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => {
    console.error('Application initialization error:', err);
    const errorDiv = document.createElement('div');
    errorDiv.style.cssText = 'color: red; padding: 20px; font-family: monospace;';
    errorDiv.innerHTML = `<h2>Application Error</h2><p>${err?.message || 'Unknown error'}</p>`;
    document.body.appendChild(errorDiv);
  });
