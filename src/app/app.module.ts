import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './items/menu/menu.component';
import { MatIconModule } from '@angular/material/icon';
import { ManualesComponent } from './manuales/manuales.component';
import { CabeceraComponent } from './items/cabecera/cabecera.component';
import { MapabolComponent } from './inicio/mapas/mapabol/mapabol.component';

import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ManualesComponent,
    CabeceraComponent,
    MapabolComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    LeafletModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
