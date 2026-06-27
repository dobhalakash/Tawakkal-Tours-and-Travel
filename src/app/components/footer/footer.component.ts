import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  year = new Date().getFullYear();

  routes = ['Mumbai–Pune', 'Pune–Goa', 'Mumbai–Shirdi', 'Delhi–Agra', 'Pune–Nashik', 'Bangalore–Mysore', 'Hyderabad–Tirupati', 'Jaipur–Udaipur'];
}
