import { Component, OnInit } from '@angular/core';
import {Componente} from '../../interfaces/interface';
import {DataService} from '../../services/data.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

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
