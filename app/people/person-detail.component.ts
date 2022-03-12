import { PeopleService } from '../core/people.service';
import { Component, OnInit } from '@angular/core';
import { Params, ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-person-detail',
  template: `
    <p>
      person-detail Works!
    </p>
    <pre>{{ person | async | json }}<pre>
    <button (click)="goBackToParent()">Back</button>
  `,
  styles: []
})
export class PersonDetailComponent implements OnInit {
  person: Observable<Object>;

  constructor(private route: ActivatedRoute, peopleService: PeopleService, private router: Router) {
    console.log('people/PersonDetailComponent', route);

    const personId = this.route.snapshot.params['id'];
    this.person = peopleService.getPersonById(parseInt(personId, 10));

    // read query param
    const token = this.route.snapshot.queryParams['token'];
    if (token) {
      console.log('Found a token: ', token);
    }

    // read route data
    console.log('Route data', this.route.snapshot.data);
  }

  ngOnInit() {}

  goBackToParent() {
    // this.router.navigate(['../'], { relativeTo: this.route });

    this.router.navigateByUrl('/people');
  }
}
