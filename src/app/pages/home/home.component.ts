import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from '../../components/hero/hero.component';
import { FleetComponent } from '../../components/fleet/fleet.component';
import { ServicesComponent } from '../../components/services/services.component';
import { EnquiryComponent } from '../../components/enquiry/enquiry.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HeroComponent, FleetComponent, ServicesComponent, EnquiryComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements AfterViewInit {

  vehicleStrip = [
    { name: 'Swift Dzire', type: 'Cab', seats: 4, img: 'assets/images/slide-swift-taxi.png' },
    { name: 'Innova Crysta', type: 'Cab', seats: 7, img: 'assets/images/slide-innova-taxi.png' },
    { name: 'Innova Outstation', type: 'Cab', seats: 7, img: 'assets/images/slide-innova-desert.png' },
    { name: 'Maruti Ertiga', type: 'Cab', seats: 7, img: 'assets/images/vehicle-ertiga.png' },
    { name: 'Innova Coastal', type: 'Cab', seats: 7, img: 'assets/images/vehicle-innova-beach.png' },
    { name: 'Tempo Traveller', type: 'Tempo', seats: 17, img: 'assets/images/slide-minibus.png' },
  ];

  whyUs = [
    { icon: '🔒', title: 'Safe & Verified Drivers', desc: 'All drivers are police-verified, trained, and have clean track records. Your safety first.' },
    { icon: '💰', title: 'Best Price Guarantee', desc: 'Transparent pricing, no hidden charges. We match and beat any comparable quote.' },
    { icon: '⏰', title: '24/7 Availability', desc: 'We operate round the clock. Book last-minute or plan ahead — always available.' },
    { icon: '🌍', title: 'All India Permit', desc: 'Valid all-India permits enabling seamless travel across every state border.' },
    { icon: '📱', title: 'Instant WhatsApp Booking', desc: 'Book in seconds via WhatsApp. Instant confirmation, real-time support.' },
    { icon: '⭐', title: 'Highly Rated Service', desc: 'Thousands of satisfied travellers trust us for family, pilgrimages, corporate and more.' },
  ];

  ngAfterViewInit() {
    const observer = new IntersectionObserver(
      (entries) => { entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }); },
      { threshold: 0.08 }
    );
    setTimeout(() => { document.querySelectorAll('.reveal').forEach(el => observer.observe(el)); }, 100);
  }
}
