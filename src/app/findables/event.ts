import { Component } from '@angular/core';
import { Findable } from './findable';

@Component({
  selector: 'event',
  template: `<p><i class="fa fa-calendar"></i>&nbsp; {{type}}</p>`
})
export class Event extends Findable {
}