import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManualesComponent } from './manuales/manuales.component';

const routes: Routes = [
  { path: 'manuales', component: ManualesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
