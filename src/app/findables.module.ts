import { NgModule } from '@angular/core';
import { Event } from './findables/event';
import { Group } from './findables/group';

@NgModule({
  imports: [],
  declarations: [ Event, Group ],
  providers: [],
  exports: [ Event, Group ],
  bootstrap: [ Event, Group ]
})
export class FindablesModule {
}
