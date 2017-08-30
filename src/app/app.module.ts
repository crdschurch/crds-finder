import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FindablesModule } from './findables.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FindablesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
