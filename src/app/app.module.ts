import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@angular/material'; 
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule } from '@angular/core';

import 'hammerjs';

import { AppComponent } from './app.component';
//after installation thie menu component is automatically imported into app
import { MenuComponent } from './menu/menu.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent
  ],
  imports: [
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
