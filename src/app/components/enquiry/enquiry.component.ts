import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-enquiry',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './enquiry.component.html',
  styleUrl: './enquiry.component.scss'
})
export class EnquiryComponent {
  name = '';
  phone = '';
  email = '';
  from = '';
  to = '';
  date = '';
  passengers = '1';
  service = '';
  message = '';
  submitted = false;

  services = ['City Tour', 'Outstation Trip', 'Airport Transfer', 'Wedding Transport', 'Corporate Travel', 'Pilgrimage Tour', 'Hill Station Tour', 'Beach Tour', 'Other'];

  sendWhatsApp() {
    if (!this.name || !this.phone) { alert('Please fill in your name and phone number.'); return; }
    const msg = encodeURIComponent(
      `📋 *Enquiry from Website*\n\n` +
      `👤 Name: ${this.name}\n` +
      `📞 Phone: ${this.phone}\n` +
      `📧 Email: ${this.email || 'Not provided'}\n\n` +
      `🗺️ From: ${this.from || 'Not specified'}\n` +
      `📍 To: ${this.to || 'Not specified'}\n` +
      `📅 Date: ${this.date || 'Flexible'}\n` +
      `👥 Passengers: ${this.passengers}\n` +
      `🚗 Service: ${this.service || 'Not specified'}\n\n` +
      `💬 Message: ${this.message || 'No additional message'}`
    );
    window.open(`https://wa.me/917385706568?text=${msg}`, '_blank');
    this.submitted = true;
  }

  sendEmail() {
    const subject = encodeURIComponent(`Travel Enquiry from ${this.name}`);
    const body = encodeURIComponent(
      `Name: ${this.name}\nPhone: ${this.phone}\nEmail: ${this.email}\nFrom: ${this.from}\nTo: ${this.to}\nDate: ${this.date}\nPassengers: ${this.passengers}\nService: ${this.service}\nMessage: ${this.message}`
    );
    window.open(`mailto:tawakkaltours@gmail.com?subject=${subject}&body=${body}`, '_blank');
  }

  reset() { this.name=''; this.phone=''; this.email=''; this.from=''; this.to=''; this.date=''; this.passengers='1'; this.service=''; this.message=''; this.submitted=false; }
}
