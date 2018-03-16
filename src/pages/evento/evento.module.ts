import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EventoPage } from './evento';
import { EventoService } from './evento.service';

@NgModule({
  declarations: [
    EventoPage,
    EventoService
  ],
  imports: [
    IonicPageModule.forChild(EventoPage),
  ],
})
export class EventoPageModule { }
