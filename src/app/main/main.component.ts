import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  News =  ['1', '2', '3'];

  massage1 = `${_.sample(this.News)}`;
  massage2 = `${_.sample(this.News)}`;
  massage3 = `${_.sample(this.News)}`;
  constructor() { }

  ngOnInit(): void {

  }

}
