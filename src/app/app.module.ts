import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './items/menu/menu.component';
import { MatIconModule } from '@angular/material/icon';
import { ManualesComponent } from './manuales/manuales.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ManualesComponent
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
