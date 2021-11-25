import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderComponent} from './header/header.component';
import {IonicModule} from '@ionic/angular';
import {MenuComponent} from './menu/menu.component';
import {RouterModule} from '@angular/router';



@NgModule({
  //Declaro y exporto mi header componente al resto de la aplicacion.Hago lo mismo con menu
  declarations: [HeaderComponent,MenuComponent],
  exports:[HeaderComponent,MenuComponent],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule
  ]
})
export class ComponentsModule {}
