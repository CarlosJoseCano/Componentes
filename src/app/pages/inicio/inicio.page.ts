import { Component, OnInit } from '@angular/core';
import {Componente} from '../../interfaces/interface';
import {DataService} from "../../services/data.service";

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  componentes: Componente[]=[];
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getMenuOpts().subscribe(
      res => {
        this.componentes = res;
      }
    );
  }

}
