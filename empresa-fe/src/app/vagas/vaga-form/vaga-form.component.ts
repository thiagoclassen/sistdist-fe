import { Component, OnInit } from '@angular/core';
import { FormBuilder } from "@angular/forms";
import { VagasService } from "../vagas.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-vaga-form',
  templateUrl: './vaga-form.component.html',
  styleUrls: ['./vaga-form.component.css']
})
export class VagaFormComponent implements OnInit {

  vagaForm;

  constructor(
    private vagasService: VagasService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.vagaForm = this.formBuilder.group({
      empresa: '',
      contato: '',
      area: '',
      cargaHoraria: '',
      salario: '',
    });
  }

  ngOnInit() {
  }

  onSubmit(data){
    
    this.vagasService.createVaga(data).subscribe(()=>this.router.navigateByUrl('/vagas'));
  }

}
