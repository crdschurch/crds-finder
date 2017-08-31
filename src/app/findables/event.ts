import { Component } from '@angular/core';
import { Findable } from './findable';
import { Event } from '../models/event';
import { Owner } from '../models/owner';

@Component({
  selector: 'event',
  template: `<p><i class="fa fa-calendar"></i>&nbsp; {{type}}</p><button (click)="contact()">Contact Event</button>`
})
export class EventComponent extends Findable {
  contact() {
    const newEvent = new Event(123, new Owner(1, 'joe'), 'events are cool');
    newEvent.contact('This event is dope');
  }
}
