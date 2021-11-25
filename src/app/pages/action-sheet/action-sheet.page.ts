import {Component, OnInit} from '@angular/core';
import {ActionSheetController} from '@ionic/angular';

@Component({
  selector: 'app-action-sheet',
  templateUrl: './action-sheet.page.html',
  styleUrls: ['./action-sheet.page.scss'],
})
export class ActionSheetPage implements OnInit {

  constructor(private actionSheetCtrl: ActionSheetController) {
  }

  ngOnInit() {
  }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetCtrl.create(
      {
        header: 'Albums',
        backdropDismiss: false,
        buttons: [{
          text: 'Delete',
          role: 'destructive',
          icon: 'trash',
          cssClass: 'rojo',
          handler: () => {
            //logica de ejecucion del boton del boton(que pasaria si pulsamos el boton)
            console.log('Delete clicked');
          }
        }
          ,
          {
            text: 'Share',
            icon: 'share',
            handler: () => {
              console.log('Share clicked');
            }
          }
          ,
          {
            text: 'Play',
            icon: 'arrow-dropright-circle',
            handler: () => {
              console.log('Share clicked');
            }
          },
          {
            text: 'Favorite',
            icon: 'heart',
            handler: () => {
              console.log('SFavorite clicked');
            }
          }
          ,
          {
            text: 'Cancel',
            icon: 'close',
            handler: () => {
              console.log('Cancel clicked');
            }
          }

        ]
      }
    );
    await actionSheet.present();
  }
}
