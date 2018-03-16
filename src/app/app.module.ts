import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';
import { ListPage } from '../pages/list/list';
import { MusicaPage } from '../pages/musica/musica';
import { EventoPage } from '../pages/evento/evento';
import { MusicaService } from '../pages/musica/musica.service';
import { SafeUrlPipe } from '../pipes/safe-url/safe-url';
import { EventoService } from '../pages/evento/evento.service';

@NgModule({
  declarations: [
    MyApp,
    ListPage,
    MusicaPage,
    EventoPage,
    SafeUrlPipe
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    EventoPage,
    ListPage,
    MusicaPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    MusicaService,
    EventoService,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
