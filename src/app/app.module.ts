import { StatisticComponent } from './components/statistic/statistic';
import { HeaderComponent } from './components/header/header';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PruebaComponent } from './pages/prueba/prueba.component';
import { TabsComponent } from './components/tabs/tabs';
import { SquareComponent } from './components/info-square/info-square';

@NgModule({
  declarations: [
    AppComponent,
    PruebaComponent,
    HeaderComponent,
    TabsComponent,
    SquareComponent,
    StatisticComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
