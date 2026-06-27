import { Component, HostListener, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit {
  scrolled = false;
  menuOpen = false;
  activeVehicle = '';

  vehicleTypes = [
    { label: 'All', value: '' },
    { label: 'Cabs', value: 'cabs' },
    { label: 'Tempo', value: 'tempo' },
    { label: 'Mini Bus', value: 'minibus' },
    { label: 'Bus', value: 'bus' }
  ];

  services = [
    { label: 'City Tours', icon: '🏙️' },
    { label: 'Outstation', icon: '🛣️' },
    { label: 'Airport Transfer', icon: '✈️' },
    { label: 'Wedding Transport', icon: '💍' },
    { label: 'Corporate Travel', icon: '💼' },
    { label: 'Pilgrimage Tours', icon: '🕌' },
    { label: 'Hill Station Tours', icon: '⛰️' },
    { label: 'Beach Tours', icon: '🏖️' },
  ];

  @HostListener('window:scroll')
  onScroll() {
    this.scrolled = window.scrollY > 50;
  }

  ngOnInit() {}

  toggleMenu() { this.menuOpen = !this.menuOpen; }
  closeMenu() { this.menuOpen = false; }

  setVehicle(v: string) { this.activeVehicle = v; }

  getWhatsApp(service: string) {
    const msg = encodeURIComponent(`Hi! I'm interested in ${service}. Please share details.`);
    return `https://wa.me/917385706568?text=${msg}`;
  }
}
