import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { SortArrayPipe } from '../sort-array.pipe';
import { LimitArrayPipe } from '../limit-array.pipe';

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

  numberArray = [5,3,4,7,8,1,9,2,3,8,9,4]

  constructor() { }

  ngOnInit(): void {

  }



}
