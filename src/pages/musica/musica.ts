import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Musica } from "./musica.model";

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

  musica: Musica;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.musica = navParams.data.musica;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MusicaPage');
  }

  proxima() {
    console.log('proxima');
  }

  anterior() {
    console.log('anterior');
  }

}
