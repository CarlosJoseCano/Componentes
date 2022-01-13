import {Component, OnInit, ViewChild} from '@angular/core';
import {IonInfiniteScroll} from '@ionic/angular';

@Component({
  selector: 'app-infinite-scroll',
  templateUrl: './infinite-scroll.page.html',
  styleUrls: ['./infinite-scroll.page.scss'],
})
export class InfiniteScrollPage implements OnInit {

  @ViewChild(IonInfiniteScroll,{static:false}) infiniteScroll: IonInfiniteScroll;
  data: any[] = Array(20);
  constructor() { }

  ngOnInit() {
  }

  loadData(event: any) {
    console.log('Cargando siguientes...'+event);

    setTimeout(()=>{

      const nuevoArray=Array(20);
      this.data.push(...nuevoArray);
      event.target.complete();
      if(this.data.length>50){
        this.infiniteScroll.disabled = true;
        return;
      }

    },1000);


  }
}
