import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnquiryComponent } from '../../components/enquiry/enquiry.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, EnquiryComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent implements AfterViewInit {
  ngAfterViewInit() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
    }, { threshold: 0.1 });
    setTimeout(() => { document.querySelectorAll('.reveal').forEach(el => observer.observe(el)); }, 100);
  }
}
