import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  whatsappNumber = '917385706568';
  get whatsappLink() {
    return `https://wa.me/${this.whatsappNumber}?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20your%20travel%20services.`;
  }
}
