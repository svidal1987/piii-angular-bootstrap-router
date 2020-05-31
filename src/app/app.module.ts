import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HomeComponent } from './home/home.component';
import { PaginaComponent } from './pagina/pagina.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { PieComponent } from './pie/pie.component';


@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'pagina', component: PaginaComponent },
      ]) ],
  declarations: [ AppComponent, HelloComponent, HomeComponent, PaginaComponent, CabeceraComponent, PieComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
