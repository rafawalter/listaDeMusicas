import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MusicaPage } from './musica';
import { Musica } from './musica.model';
import { MusicaService } from "./musica.service";

@NgModule({
  declarations: [
    MusicaPage,
    Musica
  ],
  imports: [
    IonicPageModule.forChild(MusicaPage),
  ],
  exports: [
    MusicaPage, Musica
  ],
  providers: [
    MusicaService
  ]
})
export class MusicaPageModule {}
