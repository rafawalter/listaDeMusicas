import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { EventoService } from "./evento.service";
import { Evento } from "./evento.model";

/**
 * Generated class for the EventoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-evento',
  templateUrl: 'evento.html',
})
export class EventoPage {

  eventos: Evento[];
  evento: Evento;

  constructor(public navCtrl: NavController, public navParams: NavParams, eventoService: EventoService) {
    eventoService.list()
      .subscribe(
        eventos => {
          this.eventos = eventos;
          this.evento = this.eventos[0];
          console.log('>>>', this.evento);
        },
        erro => console.log(erro)
      )
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EventoPage');
  }

}
