import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManualesComponent } from './manuales/manuales.component';
import { InicioComponent } from './inicio/inicio.component';

const routes: Routes = [
  { path: '**', redirectTo: '/inicio' },
  { path: 'manuales', component: ManualesComponent },
  { path: 'inicio', component: InicioComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
