import { Component, Input, OnChanges } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Vehicle {
  id: number;
  name: string;
  type: 'cab' | 'tempo' | 'minibus' | 'bus';
  seats: number;
  ac: boolean;
  image: string;
  startingPrice: number;
  features: string[];
  badge?: string;
}

@Component({
  selector: 'app-fleet',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './fleet.component.html',
  styleUrl: './fleet.component.scss'
})
export class FleetComponent implements OnChanges {
  @Input() filterType = '';

  activeFilter = 'all';

  filters = [
    { key: 'all', label: 'All Vehicles', icon: '🚗' },
    { key: 'cabs', label: 'Cabs', icon: '🚖' },
    { key: 'tempo', label: 'Tempo', icon: '🚐' },
    { key: 'minibus', label: 'Mini Bus', icon: '🚌' },
    { key: 'bus', label: 'Bus', icon: '🚍' },
  ];

  vehicles: Vehicle[] = [
    { id: 1, name: 'Maruti Swift Dzire', type: 'cab', seats: 4, ac: true, startingPrice: 12,
      image: 'assets/images/slide-swift-taxi.png',
      features: ['AC', '4 Seats', 'Music System', 'GPS Tracked'],
      badge: 'Most Popular' },
    { id: 2, name: 'Toyota Innova Crysta', type: 'cab', seats: 7, ac: true, startingPrice: 16,
      image: 'assets/images/slide-innova-taxi.png',
      features: ['AC', '7 Seats', 'Premium Comfort', 'Luggage Space'] },
    { id: 3, name: 'Toyota Innova (Outstation)', type: 'cab', seats: 7, ac: true, startingPrice: 14,
      image: 'assets/images/slide-innova-desert.png',
      features: ['AC', '7 Seats', 'Long Drive', 'Outstation Expert'],
      badge: 'Best for Tours' },
    { id: 4, name: 'Maruti Ertiga', type: 'cab', seats: 7, ac: true, startingPrice: 13,
      image: 'assets/images/vehicle-ertiga.png',
      features: ['AC', '7 Seats', 'Fuel Efficient', 'Comfortable'] },
    { id: 5, name: 'Innova – Beach & Coastal', type: 'cab', seats: 7, ac: true, startingPrice: 15,
      image: 'assets/images/vehicle-innova-beach.png',
      features: ['AC', '7 Seats', 'All Terrain', 'Goa Specialist'] },
    { id: 6, name: 'Force Tempo Traveller 12', type: 'tempo', seats: 12, ac: true, startingPrice: 18,
      image: 'assets/images/slide-minibus.png',
      features: ['AC', '12 Seats', 'Push-back Seats', 'LCD TV'],
      badge: 'Best Value' },
    { id: 7, name: 'Force Tempo Traveller 17', type: 'tempo', seats: 17, ac: true, startingPrice: 22,
      image: 'assets/images/slide-minibus.png',
      features: ['AC', '17 Seats', 'Luggage Carrier', 'Music System'] },
    { id: 8, name: 'Mini Bus 20 Seater', type: 'minibus', seats: 20, ac: true, startingPrice: 28,
      image: 'assets/images/slide-minibus.png',
      features: ['AC', '20 Seats', 'Large Luggage', 'Group Travel'],
      badge: 'Group Travel' },
    { id: 9, name: 'Mini Bus 26 Seater', type: 'minibus', seats: 26, ac: true, startingPrice: 35,
      image: 'assets/images/slide-minibus.png',
      features: ['AC', '26 Seats', 'Overhead Racks', 'All India Permit'] },
    { id: 10, name: 'Luxury Coach 40 Seater', type: 'bus', seats: 40, ac: true, startingPrice: 55,
      image: 'assets/images/slide-minibus.png',
      features: ['AC', '40 Seats', 'Sleeper Option', 'TV & Music'],
      badge: 'Luxury' },
    { id: 11, name: 'Super Deluxe 50 Seater', type: 'bus', seats: 50, ac: true, startingPrice: 70,
      image: 'assets/images/slide-minibus.png',
      features: ['AC', '50 Seats', 'Conference Setup', 'All India Permit'] },
  ];

  ngOnChanges() {
    if (this.filterType) {
      const map: any = { cab: 'cabs', tempo: 'tempo', minibus: 'minibus', bus: 'bus' };
      this.activeFilter = map[this.filterType] || 'all';
    }
  }

  get filtered() {
    if (this.activeFilter === 'all') return this.vehicles;
    const map: any = { cabs: 'cab', tempo: 'tempo', minibus: 'minibus', bus: 'bus' };
    return this.vehicles.filter(v => v.type === map[this.activeFilter]);
  }

  setFilter(f: string) { this.activeFilter = f; }

  bookVehicle(v: Vehicle) {
    const msg = encodeURIComponent(
      `🚗 *Vehicle Booking - Tawakkal Tours*\n\n` +
      `Vehicle: ${v.name}\n` +
      `Seats: ${v.seats}\n` +
      `Starting: ₹${v.startingPrice}/km\n\n` +
      `Please confirm availability and share detailed pricing.`
    );
    window.open(`https://wa.me/917385706568?text=${msg}`, '_blank');
  }
}
