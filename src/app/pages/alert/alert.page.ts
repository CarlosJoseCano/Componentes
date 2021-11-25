import { Component, OnInit } from '@angular/core';
import {AlertController} from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {

  titulo ='Alert';
  nombre: string;
  constructor(private alertCtrl: AlertController) { }

  ngOnInit() {
  }

  async presentAlert() {
    const alert = await this.alertCtrl.create({
      header:this.titulo,
      subHeader:'Subtitulo',
      message: 'Esto es una alerta',
      buttons:[
        {
          text:'Cancel',
          role:'cancel',
          cssClass:'secondary',
          handler:()=>{
            console.log('Cancelar');
          }
        },{
          text:'Ok',
          handler:()=>{
            console.log('OK');
          }
        },
      ]
    });
    await alert.present();
  }

  async presentAlertConNombre() {
    const alert = await this.alertCtrl.create({
      header:'Alert con imput',
      subHeader:'Inserte el nombre',
      message: 'Esto es una alerta',
      inputs:[{
        name:'name',
        type:'text',
        placeholder:'Escribe el nombre...'
      }],
      buttons:[{
        text:'Cancelar',
        role:'cancel',
        handler:() => {
          console.log('Cancelar');
    }},
    {
      text:'OK',
      handler:(data) => {
        console.log('OK',data);
        this.nombre=data.name;
      }
      }]
    });
    await alert.present();
  }
}
