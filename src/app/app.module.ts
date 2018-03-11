import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { ListPage } from '../pages/list/list';
import { MusicaPage } from '../pages/musica/musica';
import { MusicaService } from '../pages/musica/musica.service';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SafeUrlPipe } from '../pipes/safe-url/safe-url';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    MyApp,
    ListPage,
    MusicaPage,
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
    ListPage,
    MusicaPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    MusicaService,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
