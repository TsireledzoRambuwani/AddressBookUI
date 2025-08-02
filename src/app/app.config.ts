import { ApplicationConfig, provideZoneChangeDetection, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { AddressBookReducer } from './features/address-books/store/reducers/addressBook.reducer';
import { AddressBooksEffects } from './features/address-books/store/effects/addressBook.effect';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
      provideZoneChangeDetection({ eventCoalescing: true }),
       provideHttpClient(),
      provideRouter(routes),
      provideStore(
        {
          addressbooks: AddressBookReducer
        }), 
      provideEffects(
        AddressBooksEffects
      ), 
      provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() })]
};
