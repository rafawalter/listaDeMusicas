import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  selectedItem: any;
  icons: string[];
  items: Array<{moment: string, title: string, tom: string, arranjo: string, url: string, icon: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

    // Let's populate this page with some filler content for funzies
    this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
    'american-football', 'boat', 'bluetooth', 'build'];

    this.items = [];
    for (let i = 1; i < 11; i++) {
      this.items.push({
        moment: 'Momento ' + i,
        title: 'Música ' + i,
        tom: 'D',
        arranjo: 'Arranjo #' + i,
        url: 'http://cifraclub.com.br',
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });
    }

    this.items = [
      {
        moment: 'Entrada',
        title: 'Chuva de graça',
        tom: 'D',
        arranjo: 'CifraClube',
        url: 'https://www.cifraclub.com.br/eliana-ribeiro/chuva-de-graca/',
        icon: this.iconeAleatorio()
      },{
        moment: 'Aclamação',
        title: 'Tua palavra é luz para meu caminho (quero fazer valer)',
        tom: 'E',
        arranjo: 'CifraClube',
        url: 'https://www.cifraclub.com.br/aline-barros/tua-palavra-e-luz-para-o-meu-caminho/',
        icon: this.iconeAleatorio()
      },{
        moment: 'Comunhão',
        title: 'De coração (tào distante e tão próximo',
        tom: 'F',
        arranjo: 'CifraClube',
        url: 'https://www.cifraclub.com.br/vida-reluz/de-coracao/#key=1',
        icon: this.iconeAleatorio()
      }
    ];
  }

  iconeAleatorio(): string {
    return this.icons[Math.floor(Math.random() * this.icons.length)];
  }

  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(ListPage, {
      item: item
    });
  }
}
