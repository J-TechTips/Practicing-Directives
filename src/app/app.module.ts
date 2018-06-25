import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Directive } from '@angular/core';

import { AppComponent } from './app.component';

import { FontColorDirective } from './FontColor/FontColor.directive';

@NgModule({
  declarations: [
    AppComponent,
    FontColorDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
