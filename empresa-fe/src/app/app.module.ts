import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { CurriculosComponent } from './curriculos/curriculos.component';
import { MaterialModule } from "./material.module";
import { VagasComponent } from './vagas/vagas.component';
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CurriculoEditComponent } from './curriculos/curriculo-edit/curriculo-edit.component';
import { VagaEditComponent } from './vagas/vaga-edit/vaga-edit.component';
import { VagaFormComponent } from './vagas/vaga-form/vaga-form.component'

@NgModule({
  declarations: [
    AppComponent,
    VagasComponent,
    CurriculosComponent,
    CurriculoEditComponent,
    VagaEditComponent,
    VagaFormComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
