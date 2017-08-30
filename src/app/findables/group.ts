import { Component } from '@angular/core';
import { Findable } from './findable';

@Component({
  selector: 'group',
  template: `<p><i class="fa fa-users"></i>&nbsp; {{type}}</p>`
})
export class Group extends Findable {
}