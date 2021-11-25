import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.page.html',
  styleUrls: ['./card.page.scss'],
})
export class CardPage implements OnInit {
  contenido= [{
    titulo: 'Titulo 1',
    subtitulo: 'Subtitulo 1',
    contenido: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit'
  },{
    titulo: 'Titulo 2',
    subtitulo: 'Subtitulo 2',
    contenido: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit'
  },{
    titulo: 'Titulo 3',
    subtitulo: 'Subtitulo 3',
    contenido: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit'
  }
  ];

  constructor() { }

  ngOnInit() {
  }

}
