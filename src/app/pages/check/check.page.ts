import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-check',
  templateUrl: './check.page.html',
  styleUrls: ['./check.page.scss'],
})
export class CheckPage implements OnInit {

  data=[{
    name: 'primary',
    selected: false,
  },{
    name: 'success',
    selected: true,
  },{
    name: 'tertiary',
    selected: false,
  }];
  constructor() { }

  ngOnInit() {
  }

  onClick(check: any) {
    console.log(check);
    this.data[0].selected= !this.data[0].selected;
  }
}
