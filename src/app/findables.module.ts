import { NgModule } from '@angular/core';
import { EventComponent } from './findables/event';
import { GroupComponent } from './findables/group';

@NgModule({
  imports: [],
  declarations: [ EventComponent, GroupComponent ],
  providers: [],
  exports: [ EventComponent, GroupComponent ],
  bootstrap: [ EventComponent, GroupComponent ]
})
export class FindablesModule {
}
