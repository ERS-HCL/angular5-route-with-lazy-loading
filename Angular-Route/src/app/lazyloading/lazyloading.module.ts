import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyloadingRoutingModule } from './lazyloading-routing.module';
import { LazyloadingListComponent } from './lazyloading-list/lazyloading-list.component';

@NgModule({
  imports: [
    CommonModule,
    LazyloadingRoutingModule
  ],
  declarations: [LazyloadingListComponent]
})
export class LazyloadingModule { }
