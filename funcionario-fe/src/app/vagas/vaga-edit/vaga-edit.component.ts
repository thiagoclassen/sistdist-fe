import { Component, OnInit } from '@angular/core';
import { FormBuilder } from "@angular/forms";
import { VagasService } from "../vagas.service";
import { ActivatedRoute } from '@angular/router';
import { Vaga } from '../vaga';

@Component({
  selector: 'app-vaga-edit',
  templateUrl: './vaga-edit.component.html',
  styleUrls: ['./vaga-edit.component.css']
})
export class VagaEditComponent implements OnInit {

  vagaForm;
  vagaId;
  vaga;
  edit;

  constructor(
    private vagasService: VagasService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
  ) {
    this.vagaForm = this.formBuilder.group({
      empresa: '',
      contato: '',
      area: '',
      cargaHoraria: '',
      salario: '',
      id: ''
    });
  }

  ngOnInit() {
    this.vaga = new Vaga();
    this.edit = false;
    this.vagaId = this.route.snapshot.paramMap.get('id');
    this.vagasService.getVaga(this.vagaId).subscribe(response => {
      this.vaga = response;
      this.vagaForm = this.formBuilder.group({
        empresa : this.vaga.empresa,
        contato : this.vaga.contato,
        area : this.vaga.area,
        cargaHoraria : this.vaga.cargaHoraria,
        salario : this.vaga.salario,
        id: this.vaga.id
      });
    });
  }

}
