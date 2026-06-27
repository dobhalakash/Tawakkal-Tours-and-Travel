import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {
  services = [
    { icon: '🏙️', title: 'City Tours', desc: 'Explore any city with our knowledgeable drivers. Mumbai, Delhi, Pune, Bangalore and more.', route: 'City Tours' },
    { icon: '🛣️', title: 'Outstation Trips', desc: 'One-way or round-trip outstation travel across India at the best prices with no hidden charges.', route: 'Outstation Trip' },
    { icon: '✈️', title: 'Airport Transfer', desc: 'Punctual airport pick-up and drop services 24/7. Never miss a flight again.', route: 'Airport Transfer' },
    { icon: '💍', title: 'Wedding Transport', desc: 'Full fleet solutions for wedding processions, guest pickup and barat arrangements.', route: 'Wedding Transport' },
    { icon: '💼', title: 'Corporate Travel', desc: 'Reliable, professional transportation for corporate events, off-sites and daily commutes.', route: 'Corporate Travel' },
    { icon: '🕌', title: 'Pilgrimage Tours', desc: 'Shirdi, Tirupati, Vaishno Devi, Char Dham — safe and comfortable spiritual journeys.', route: 'Pilgrimage Tours' },
    { icon: '⛰️', title: 'Hill Station Tours', desc: 'Lonavala, Mahabaleshwar, Shimla, Manali — scenic routes with experienced mountain drivers.', route: 'Hill Station Tour' },
    { icon: '🏖️', title: 'Beach Tours', desc: 'Goa, Alibaug, Tarkarli, Konkan coast — your perfect beach getaway arranged end-to-end.', route: 'Beach Tour' },
  ];

  destinations = [
    'Mumbai', 'Delhi', 'Pune', 'Goa', 'Bangalore', 'Hyderabad',
    'Jaipur', 'Agra', 'Shirdi', 'Nashik', 'Lonavala', 'Mahabaleshwar',
    'Manali', 'Shimla', 'Ooty', 'Kerala', 'Rajasthan', 'Gujarat'
  ];

  bookService(s: string) {
    const msg = encodeURIComponent(`Hi! I need ${s} service. Please share details and pricing.`);
    window.open(`https://wa.me/917385706568?text=${msg}`, '_blank');
  }
}
