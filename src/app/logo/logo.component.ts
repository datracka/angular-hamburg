import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.css'],
  encapsulation: ViewEncapsulation.Native
})
export class LogoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
