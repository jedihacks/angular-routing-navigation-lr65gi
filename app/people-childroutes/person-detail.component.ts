import { PeopleService } from '../core/people.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-person-detail',
  template: `
    <p>
      person-detail Works!
    </p>
    <pre>{{ person | async | json }}<pre>
  `,
  styles: []
})
export class PersonDetailComponent implements OnInit {
  person: Observable<any>;

  constructor(private route: ActivatedRoute, peopleService: PeopleService) {
    this.person = this.route.params.pipe(
      switchMap((params: Params) => {
      return peopleService.getPersonById(parseInt(params['id'], 10));
    }));

    route.params.subscribe(params => console.log('people-childroutes/PersonDetail params', params));
    route.queryParams.subscribe(params =>
      console.log('people-childroutes/PersonDetail Qparams', params)
    );
  }

  ngOnInit() {}
}
