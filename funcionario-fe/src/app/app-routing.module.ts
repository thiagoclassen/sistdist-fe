import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CurriculosComponent } from './curriculos/curriculos.component';
import { VagasComponent } from './vagas/vagas.component';
import { CurriculoFormComponent } from './curriculos/curriculo-form/curriculo-form.component';
import { CurriculoEditComponent } from './curriculos/curriculo-edit/curriculo-edit.component';
import { VagaEditComponent } from './vagas/vaga-edit/vaga-edit.component';


const routes: Routes = [
  { path: 'curriculos', component: CurriculosComponent },
  { path: 'curriculos/form', component: CurriculoFormComponent },
  { path: 'curriculos/:id', component: CurriculoEditComponent },
  { path: 'vagas', component: VagasComponent },
  { path: 'vagas/:id', component: VagaEditComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
