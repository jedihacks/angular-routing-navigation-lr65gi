import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PersonDetailComponent } from './person-detail.component';
import { PeopleListComponent } from './people-list.component';

const routes: Routes = [
  {
    path: 'childroutes/people',
    component: PeopleListComponent,
    children: [
      {
        path: ':id',
        component: PersonDetailComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PeopleRoutingModule {}
