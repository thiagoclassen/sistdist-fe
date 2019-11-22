import { Component, OnInit } from '@angular/core';
import { FormBuilder } from "@angular/forms";
import { CurriculosService } from "../curriculos.service";
import {Router} from '@angular/router';

@Component({
  selector: 'app-curriculo-form',
  templateUrl: './curriculo-form.component.html',
  styleUrls: ['./curriculo-form.component.css']
})
export class CurriculoFormComponent implements OnInit {

  curriculoForm;

  constructor(
    private curriculosService: CurriculosService,
    private formBuilder: FormBuilder,
    private router: Router
  ) { 

    this.curriculoForm = this.formBuilder.group({
      nome : '',
      contato : '',
      area : '',
      cargaHoraria : '',
      salario : '',
    });

  }

  ngOnInit() { }
  
  onSubmit(data){
    
    this.curriculosService.createCurriculo(data).subscribe(()=>this.router.navigateByUrl('/curriculos'));
  }

}
