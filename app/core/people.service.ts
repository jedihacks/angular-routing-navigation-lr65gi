import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {
  people = [
    {
      id: 1,
      name: 'Juri'
    },
    {
      id: 2,
      name: 'Steffi'
    },
    {
      id: 3,
      name: 'Dietmar'
    }
  ];

  constructor() {}

  getPersonById(id: number) {
    const person = this.people.filter(entry => entry.id === id);

    if (person) {
      return of(person);
    } else {
      return of({});
    }
  }

  getPeople() {
    return of(this.people);
  }
}
