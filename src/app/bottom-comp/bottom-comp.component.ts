import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { SortArrayPipe } from '../sort-array.pipe';

@Component({
  selector: 'app-bottom-comp',
  templateUrl: './bottom-comp.component.html',
  styleUrls: ['./bottom-comp.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class BottomCompComponent implements OnInit {

  users = [
    {name: "aaa", age: 28},
    {name: "nnn", age: 24},
    {name: "sss", age: 26},
    {name: "fff", age: 21},
    {name: "eee", age: 23},
    {name: "vvv", age: 29},
  ];

  constructor() { }

  ngOnInit(): void {

  }



}
