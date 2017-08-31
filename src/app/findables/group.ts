import { Component } from '@angular/core';
import { Findable } from './findable';
import { Group } from '../models/group';
import { Owner } from '../models/owner';

@Component({
  selector: 'group',
  template: `<p><i class="fa fa-users"></i>&nbsp; {{type}}</p><p><button (click)="contact()">Contact</button>`
})
export class GroupComponent extends Findable {
  participants: any;
  owner: any;

  contact() {
    const aGroup = new Group(32, new Owner(1, 'joe'), 'sweet sweet group' );
    aGroup.contact('sups yo');
  }
}
