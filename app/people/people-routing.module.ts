import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PersonDetailComponent } from './person-detail.component';
import { PeopleListComponent } from './people-list.component';
import { HelpComponent } from './help.component';

// const routes: Routes = [
//   {
//     path: 'people',
//     component: PeopleListComponent
//   },
//   {
//     path: 'people/:id',
//     component: PersonDetailComponent
//   }
// ];

const routes: Routes = [
  {
    path: 'people',
    children: [
      {
        path: '',
        component: PeopleListComponent
      },
      {
        path: ':id',
        component: PersonDetailComponent,
        data: {
          defaultName: 'Juri'
        }
      }
    ]
  },
  {
    path: 'person/detail',
    component: HelpComponent,
    outlet: 'help'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PeopleRoutingModule {}
