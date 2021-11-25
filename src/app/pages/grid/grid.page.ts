import { Component, OnInit } from '@angular/core';
import {ApiFalseData} from '../../interfaces/interface';
import {DataService} from '../../services/data.service';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.page.html',
  styleUrls: ['./grid.page.scss'],
})
export class GridPage implements OnInit {

  display: string;
  //Array para guardar los datos de la api
  datos: ApiFalseData[]=[];

  //Inyectamos el servicio
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.saveData();
  }

  cambiarView(dato: string) {
    this.display=dato;
  }

  private saveData() {
    this.dataService.getDataToGrid().subscribe(
      data => {
        this.datos=data;
      }
    );
  }
}
