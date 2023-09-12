import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalPage } from '../modal/modal.page';

@Component({
  selector: 'app-receitas',
  templateUrl: './receitas.page.html',
  styleUrls: ['./receitas.page.scss'],
})
export class ReceitasPage implements OnInit {

  constructor(private modalControl: ModalController) { }

  ngOnInit() {
  }

  async showModal(){
    console.log('showModal()');
    const modal = await this.modalControl.create({
    component: ModalPage,
    componentProps:{
      
    }  
    });
    await modal.present();

    
  }
}
