import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FirstChildComponent } from './first-child/first-child.component';
import { SecondChildComponent } from './second-child/second-child.component';

@NgModule({
   declarations: [
      AppComponent,
      FirstChildComponent,
      SecondChildComponent
   ],
   imports: [
      BrowserModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
