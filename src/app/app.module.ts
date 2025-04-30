import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './items/menu/menu.component';
import { MatIconModule } from '@angular/material/icon';
import { ManualesComponent } from './manuales/manuales.component';
import { CabeceraComponent } from './items/cabecera/cabecera.component';
import { InicioComponent } from './inicio/inicio.component';
import { StepperComponent } from './inicio/items/stepper/stepper.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ManualesComponent,
    CabeceraComponent,
    InicioComponent,
    StepperComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
