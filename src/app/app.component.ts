import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { Resume } from '../pages/resume/resume';
import { Login } from '../pages/login/login';
import { ClientesPage } from '../pages/clientes/clientes';
import { ConsultapasivaPage } from '../pages/consultapasiva/consultapasiva';
import { ConsultaactivaPage } from '../pages/consultaactiva/consultaactiva';
import { ConfiguracionPage } from '../pages/configuracion/configuracion';
import { InformacionPage } from '../pages/informacion/informacion';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = Login;
  activePage: any;

  pages: Array<{title: string, icon: string, component: any}>;
  nameUser: string;
  lastnameUser: string;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();
    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Inicio', icon:'md-home', component: Resume },
      { title: 'Clientes', icon: 'md-people', component: ClientesPage },
      { title: 'Cartera Pasiva', icon: 'md-bookmarks', component: ConsultapasivaPage },
      { title: 'Cartera Activa', icon: 'md-card', component: ConsultaactivaPage },
      { title: 'Configuración', icon: 'md-settings', component: ConfiguracionPage },
      { title: 'Información', icon: 'md-help-circle', component: InformacionPage },
      { title: 'Cerrar sesión', icon:'md-exit', component: Login }

    ];

    this.activePage = this.pages[0];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
    this.activePage = page;
  }

  verActive(page){

    return page == this.activePage;
  }
}
