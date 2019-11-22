import { Component, OnInit } from '@angular/core';
import { FormBuilder } from "@angular/forms";
import { CurriculosService } from "../curriculos.service";
import { ActivatedRoute } from '@angular/router';
import { Curriculo } from '../curriculo';
import { Router } from '@angular/router';

@Component({
  selector: 'app-curriculo-edit',
  templateUrl: './curriculo-edit.component.html',
  styleUrls: ['./curriculo-edit.component.css']
})
export class CurriculoEditComponent implements OnInit {

  curriculoForm;
  curriculoId;
  curriculo;
  edit;

  constructor(
    private curriculosService: CurriculosService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
  ) {
    this.curriculoForm = this.formBuilder.group({
      nome: '',
      contato: '',
      area: '',
      cargaHoraria: '',
      salario: '',
      id: 0
    });
  }

  ngOnInit() {
    this.curriculo = new Curriculo();
    this.edit = false;
    this.curriculoId = this.route.snapshot.paramMap.get('id');
    this.curriculosService.getCurriculo(this.curriculoId).subscribe(response => {
      this.curriculo = response;
      this.curriculoForm = this.formBuilder.group({
        nome: this.curriculo.nome,
        contato: this.curriculo.contato,
        area: this.curriculo.area,
        cargaHoraria: this.curriculo.cargaHoraria,
        salario: this.curriculo.salario,
        id: this.curriculo.id
      });
    });
  }

  onSubmit(data) {
    this.curriculosService.updateCurriculo(data).subscribe(() => this.router.navigateByUrl('/curriculos'));
  }

  toggleEdit() {
    this.edit = !this.edit;
  }

}
