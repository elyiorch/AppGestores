import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import {TranslateService, TranslatePipe} from 'ng2-translate/ng2-translate';
import { Loginservice } from '../providers/loginservice';
import { MyApp } from './app.component';
import { Resume } from '../pages/resume/resume';
import { Login } from '../pages/login/login';
import { ClientesPage } from '../pages/clientes/clientes';
import { ConsultapasivaPage } from '../pages/consultapasiva/consultapasiva';
import { ConsultaactivaPage } from '../pages/consultaactiva/consultaactiva';
import { ConfiguracionPage } from '../pages/configuracion/configuracion';
import { InformacionPage } from '../pages/informacion/informacion';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    Resume,
    Login,
    ClientesPage,
    ConsultapasivaPage,
    ConsultaactivaPage,
    ConfiguracionPage,
    InformacionPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Resume,
    Login,
    ClientesPage,
    ConsultapasivaPage,
    ConsultaactivaPage,
    ConfiguracionPage,
    InformacionPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Loginservice,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
