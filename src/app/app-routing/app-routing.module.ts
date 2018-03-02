import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';

import {routes} from './routes';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  //we want to use this app routes module in app module so we add a exports decorator to this module
  exports:[RouterModule],
  declarations: []
})
export class AppRoutingModule { }
