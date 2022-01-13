import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progressbar',
  templateUrl: './progressbar.page.html',
  styleUrls: ['./progressbar.page.scss'],
})
export class ProgressbarPage implements OnInit {

  porcentaje = 0.5;
  constructor() { }

  ngOnInit() {
  }

  cambioRango(event: any) {
    this.porcentaje = event.detail.value * 0.01;
  }
}
