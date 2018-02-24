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
  musica: { moment: string; title: string; tom: string; arranjo: string; url: string; cifras: string};

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.musica =  {
      moment: 'Entrada',
      title: 'Chuva de graça',
      tom: 'D',
      arranjo: 'CifraClube',      
      url: 'http://www.cifraclub.com.br/eliana-ribeiro/chuva-de-graca/',
      cifras: `[Intro] C  G  Am  F

C       G       Am      F
Ooohhh  Ooohhh  Ooohhh  Ooohhh
C       G       Am      F
Ooohhh  Ooohhh  Ooohhh  Ooohhh

C                G
Há uma chuva de graça aqui
Am              F
E está chovendo sobre todos nós
C                G                  F     F
E quem mais se entregar mais se molhará
C             G
Há uma semente pra germinar
Am                F
E muitos frutos a se produzir
C                G                  F    F
Na terra do coração derrama Tua graça

          C               G
Chuva de graça pedimos a ti
          Am              F
Chuva de graça derrama em nós
          C/E            G/B     F
Chuva de graça neste lugar, derrama
          C                G
Chuva de graça pedimos a ti
          Am              F
Chuva de graça derrama em nós
        C/E            G/B        F      F
Chuva de graça neste lugar, derrama

C       G       Am      F
Ooohhh  Ooohhh  Ooohhh  Ooohhh
C       G       Am      F
Ooohhh  Ooohhh  Ooohhh  Ooohh`
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MusicaPage');
  }

}
