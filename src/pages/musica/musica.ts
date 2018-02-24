import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MusicaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-musica',
  templateUrl: 'musica.html',
})
export class MusicaPage {
  musica: { moment: string; title: string; tom: string; arranjo: string; url: string; };

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.musica =  {
      moment: 'Entrada',
      title: 'Chuva de graça',
      tom: 'D',
      arranjo: 'CifraClube',      
      url: 'http://www.cifraclub.com.br/eliana-ribeiro/chuva-de-graca/',
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MusicaPage');
  }

}
