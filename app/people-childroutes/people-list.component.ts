import { ActivatedRoute } from '@angular/router';
import { PeopleService } from '../core/people.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-people-list',
  template: `
    <p>
      List of People
    </p>

    <ul>
      <li *ngFor="let person of people$ | async">
        <a [routerLink]="[person.id]">{{ person.name }}</a>
      </li>
    </ul>

    <router-outlet></router-outlet>
  `,
  styles: []
})
export class PeopleListComponent implements OnInit {
  people$;

  constructor(private peopleService: PeopleService, route: ActivatedRoute) {
    console.log('people-childroutes/PeopleListComponent', route);

    route.params.subscribe(params =>
      console.log('people-childroutes/PeopleListComponent params', params)
    );
    route.queryParams.subscribe(params =>
      console.log('people-childroutes/PeopleListComponent Qparams', params)
    );
  }

  ngOnInit() {
    this.people$ = this.peopleService.getPeople();
  }
}
