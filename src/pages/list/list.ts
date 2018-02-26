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
  items: Array<{moment: string, title: string, tom: string, arranjo: string, url: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams, musicaService: MusicaService) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

    this.items = [
      {
        moment: 'Entrada',
        title: 'Chuva de graça',
        tom: 'D',
        arranjo: 'CifraClube',
        url: 'https://www.cifraclub.com.br/eliana-ribeiro/chuva-de-graca/',
      },{
        moment: 'Aclamação',
        title: 'Tua palavra é luz para meu caminho (quero fazer valer)',
        tom: 'E',
        arranjo: 'CifraClube',
        url: 'https://www.cifraclub.com.br/aline-barros/tua-palavra-e-luz-para-o-meu-caminho/',
      },{
        moment: 'Comunhão',
        title: 'De coração (tão distante e tão próximo)',
        tom: 'F',
        arranjo: 'CifraClube',
        url: 'https://www.cifraclub.com.br/vida-reluz/de-coracao/#key=1',
      }
    ];

    musicaService.list()
      .subscribe( 
      musicas => {
        console.log(this.musicas);
        this.musicas = musicas
      },
      erro => console.log(erro)
    )
  }

  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(MusicaPage, {
      item: item
    });
  }
}
