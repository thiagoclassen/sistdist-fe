import { Component, OnInit } from '@angular/core';
import { CurriculosService } from './curriculos.service';

@Component({
  selector: 'app-curriculos',
  templateUrl: './curriculos.component.html',
  styleUrls: ['./curriculos.component.css']
})
export class CurriculosComponent implements OnInit {

  ogCurriculos: any[];
  curriculos: any[];
  salario;
  area;

  constructor(private curriculosService: CurriculosService) { }

  ngOnInit() {
    this.salario = 0;
    this.area = '';
    this.curriculosService
      .listCurriculos()
      .subscribe((response) => {
        this.ogCurriculos = response;
        this.filterCurriculos(this.area, this.salario);
      });
  }


  filterCurriculos(area, salario) {
    this.curriculos = Object.assign([], this.ogCurriculos).filter(
      function (item) {
        if (area !== '' && area.toLowerCase() != item.area.toLowerCase())
          return false;
        else if (salario <= item.salario)
          return false;
        return true;
      }
    );
    console.log(this.curriculos)
  }

}
