import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PeopleRoutingModule } from './people-routing.module';
import { PeopleListComponent } from './people-list.component';
import { PersonDetailComponent } from './person-detail.component';

@NgModule({
  imports: [CommonModule, PeopleRoutingModule],
  declarations: [PeopleListComponent, PersonDetailComponent]
})
export class PeopleModule {}
