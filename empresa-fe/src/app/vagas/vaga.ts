export class Vaga {
    id: number;
    empresa: string;
    contato: string;
    area: string;
    cargaHoraria: string;
    salario: string;

    constructor(
        empresa?: string,
        contato?: string,
        area?: string,
        cargaHoraria?: string,
        salario?: string) {

        this.empresa = empresa;
        this.contato = contato;
        this.area = area;
        this.cargaHoraria = cargaHoraria;
        this.salario = salario;
    }
}