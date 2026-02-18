import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeuix/themes/aura'

import { routes } from './app.routes';
import {IMAGE_CONFIG} from '@angular/common';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    providePrimeNG({
      theme: {
        preset: Aura
      }
    }),
    {
      provide: IMAGE_CONFIG,
      useValue: {
        disableImageSizeWarning: false,
        allowNonStandardUrls: true // Erlaubt externe Domains wie IGDB
      }
    }
  ]
};
