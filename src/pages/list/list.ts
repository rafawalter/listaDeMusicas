import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MusicaPage } from '../musica/musica';
import { MusicaService } from "../musica/musica.service";
import { Musica } from '../musica/musica.model';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  musicas: Musica[];
  selectedItem: any;
  icons: string[];

  constructor(public navCtrl: NavController, public navParams: NavParams, musicaService: MusicaService) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('musica');

    musicaService.list()
      .subscribe(
        musicas => {
          console.log(this.musicas);
          this.musicas = musicas
        },
        erro => console.log(erro)
      )
  }

  itemTapped(event, musica) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(MusicaPage, {
      musica: musica
    });
  }
}
