import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.page.html',
  styleUrls: ['./avatar.page.scss'],
})
export class AvatarPage implements OnInit {

  coleccion =[
    {
      nombre:'Chibi',
      imagen:'assets/images/icons8-enfermera-50.png'
    },{
      nombre:'Alicia',
      imagen:'assets/images/icons8-enfermera-50.png'
    },{
      nombre:'Manolo',
      imagen:'assets/images/icons8-enfermera-50.png'
    }
  ]
  constructor() { }

  ngOnInit() {
  }

  mostrar() {
    console.log('Avatar');
    let variable: string;
  }
}
