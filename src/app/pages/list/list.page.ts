import {Component, OnInit, ViewChild} from '@angular/core';
import {Usuario} from '../../interfaces/interface';
import {DataService} from '../../services/data.service';
import {IonList, ToastController} from '@ionic/angular';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  @ViewChild('lista',{static: false}) lista: IonList;

  usuarios: Usuario[] = [];
  constructor(private dataService: DataService,
              private toastCtrl: ToastController) { }

  ngOnInit() {
    this.loadUsers();
  }

  async presentToast(message: string){
    const toast = await this.toastCtrl.create(
      {
        color:'tertiary',
        position: 'middle',
        message,
        duration: 2000
      }
    );
    await toast.present();
  }
  favorite(usuario) {
    console.log('favorite',usuario);
    this.presentToast(usuario.name + 'Guardado en favoritos !!');
    this.lista.closeSlidingItems();
  }


  share(usuario) {
    console.log('share',usuario);
    this.presentToast(usuario.name + 'Compartido !!');
    this.lista.closeSlidingItems();
  }

  delete(usuario) {
    console.log('delete',usuario);
    this.presentToast(usuario.name + 'Borrado !!');
    this.lista.closeSlidingItems();
  }

  private loadUsers() {
    this.dataService.getUsers().subscribe(
      data =>{
        this.usuarios= data;
      }
    );
  }


}
