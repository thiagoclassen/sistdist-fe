import { Component, OnInit } from '@angular/core';
import { VagasService } from './vagas.service';

@Component({
  selector: 'app-vagas',
  templateUrl: './vagas.component.html',
  styleUrls: ['./vagas.component.css']
})
export class VagasComponent implements OnInit {

  ogVagas: any[];
  vagas: any[];
  salario;
  area;

  constructor(private vagasService: VagasService) { }

  ngOnInit() {
    this.salario = 0;
    this.area = '';
    this.vagasService
      .listVagas()
      .subscribe((response) => {
        this.ogVagas = response;
        this.filterVagas(this.area, this.salario);
      });
  }

  filterVagas(area, salario) {
  }

}
