import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-top-comp',
  templateUrl: './top-comp.component.html',
  styleUrls: ['./top-comp.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class TopCompComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
