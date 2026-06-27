import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { FleetComponent } from '../../components/fleet/fleet.component';

@Component({
  selector: 'app-vehicles',
  standalone: true,
  imports: [CommonModule, FleetComponent],
  templateUrl: './vehicles.component.html',
  styleUrl: './vehicles.component.scss'
})
export class VehiclesComponent implements AfterViewInit {
  filterType = '';

  constructor(private route: ActivatedRoute) {
    this.route.queryParams.subscribe(p => { this.filterType = p['type'] || ''; });
  }

  ngAfterViewInit() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
    }, { threshold: 0.1 });
    setTimeout(() => { document.querySelectorAll('.reveal').forEach(el => observer.observe(el)); }, 100);
  }
}
