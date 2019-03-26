import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculadoraService {

  static readonly SOMA: string = '+'
  static readonly SUBTRACAO: string = '-'
  static readonly DIVISAO: string = '/'
  static readonly MULTIPLICACAO: string = '*'

  constructor() { }

  calcular(numeroUm: number, numeroDois: number, operacao: string): number {
    let resultado: number

    switch(operacao) {
      case CalculadoraService.SOMA:
        return numeroUm + numeroDois

      case CalculadoraService.SUBTRACAO:
        return numeroUm - numeroDois

      case CalculadoraService.MULTIPLICACAO:
        return numeroUm * numeroDois

      case CalculadoraService.DIVISAO:
        return numeroUm / numeroDois

      default:
        return 0;
    }

    return resultado
  }
}
