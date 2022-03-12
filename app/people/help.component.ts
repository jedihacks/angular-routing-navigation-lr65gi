import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-help',
  template: `
    <div class="popup">
      <p>
        Hi, need some help?
      </p>
      <a href="javascript:;" (click)="closeOutlet()">Close</a>
    </div>
  `,
  styles: [
    `
    .popup {
      position: absolute;
      bottom: 10px;
      right: 10px;
      border: 1px solid black;d
      height: 250px;
      width: 250px;
    }
  `
  ]
})
export class HelpComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  closeOutlet() {
    this.router.navigate([{ outlets: { help: null } }]);
  }
}
