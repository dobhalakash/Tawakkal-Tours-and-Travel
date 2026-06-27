import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent implements OnInit, OnDestroy {
  from = '';
  to = '';
  date = '';
  passengers = '1';
  vehicleType = 'cab';
  currentSlide = 0;
  private timer: any;

  slides = [
    {
      bg: 'assets/images/slide-swift-taxi.png',
      label: 'Coastal Journeys',
      sub: 'Suzuki Swift Cab • Compact & Comfortable'
    },
    {
      bg: 'assets/images/slide-innova-taxi.png',
      label: 'Mountain Escapes',
      sub: 'Toyota Innova Crysta • Premium 7-Seater'
    },
    {
      bg: 'assets/images/slide-innova-desert.png',
      label: 'Desert Expeditions',
      sub: 'Toyota Innova • Outstation Specialist'
    },
    {
      bg: 'assets/images/slide-minibus.png',
      label: 'Group Adventures',
      sub: 'Tempo Traveller • Perfect for Groups'
    }
  ];

  ngOnInit() {
    this.timer = setInterval(() => {
      this.currentSlide = (this.currentSlide + 1) % this.slides.length;
    }, 4500);
  }

  ngOnDestroy() { clearInterval(this.timer); }

  goToSlide(i: number) {
    this.currentSlide = i;
    clearInterval(this.timer);
    this.timer = setInterval(() => {
      this.currentSlide = (this.currentSlide + 1) % this.slides.length;
    }, 4500);
  }

  prevSlide() {
    this.goToSlide((this.currentSlide - 1 + this.slides.length) % this.slides.length);
  }

  nextSlide() {
    this.goToSlide((this.currentSlide + 1) % this.slides.length);
  }

  bookNow() {
    if (!this.from || !this.to) { alert('Please enter From and To destinations.'); return; }
    const msg = encodeURIComponent(
      `🚗 *Booking Request - Tawakkal Tours*\n\n` +
      `From: ${this.from}\n` +
      `To: ${this.to}\n` +
      `Date: ${this.date || 'Flexible'}\n` +
      `Passengers: ${this.passengers}\n` +
      `Vehicle: ${this.vehicleType}\n\n` +
      `Please confirm availability and pricing. Thank you!`
    );
    window.open(`https://wa.me/917385706568?text=${msg}`, '_blank');
  }

  stats = [
    { num: '10,000+', label: 'Happy Travellers' },
    { num: '500+', label: 'Routes Covered' },
    { num: '50+', label: 'Fleet Vehicles' },
    { num: '15+', label: 'Years Experience' },
  ];
}
