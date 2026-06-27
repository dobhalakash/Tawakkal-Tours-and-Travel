import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { VehiclesComponent } from './pages/vehicles/vehicles.component';
import { ContactComponent } from './pages/contact/contact.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'vehicles', component: VehiclesComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo: '' }
];
