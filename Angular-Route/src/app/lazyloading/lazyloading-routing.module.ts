import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LazyloadingListComponent } from './lazyloading-list/lazyloading-list.component';

const routes: Routes = [
{
    path: '',
    component: LazyloadingListComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyloadingRoutingModule { }
