import { Component, OnInit } from '@angular/core';
import { CalculadoraService } from '../../services/calculadora.service';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {

  private numeroUm: string
  private numeroDois: string
  private resultado: number
  private operacao: string

  constructor(private calculadoraService: CalculadoraService) { }

  ngOnInit() {
    this.limpar();
  }

  limpar(): void {
    this.numeroUm = '0'
    this.numeroDois = null
    this.resultado = null
    this.operacao = null
  }

  adicionarNumero(numero: string): void {

    if (this.operacao === null)
      this.numeroUm = this.concatenarNumero(this.numeroUm, numero)

    else
      this.numeroDois = this.concatenarNumero(this.numeroDois, numero)
  }

  concatenarNumero(atual: string, concatenado: string): string {
    if (atual === '0' || atual === null)
      atual = ''

    if (concatenado === '.' && atual === '')
      return '0.'

    if (concatenado === '.' && atual.indexOf('.') > -1)
      return atual

    return atual + concatenado
  }

  definirOperacao(operacao: string): void {
    if (this.operacao === null) {
      this.operacao = operacao;
      return
    }

    if (this.numeroDois != null) {
      this.resultado = this.calculadoraService.calcular(parseFloat(this.numeroUm), 
                                                        parseFloat(this.numeroDois), 
                                                        this.operacao)

      this.operacao = operacao;
      this.numeroUm = this.resultado.toString()
      this.numeroDois = null
      this.resultado = null
    }
  }

  calcular(): void {
    if (this.numeroDois === null)
      return

      this.resultado = this.calculadoraService.calcular(parseFloat(this.numeroUm), 
                                                        parseFloat(this.numeroDois), 
                                                        this.operacao)
  }

  get display(): string {
    if (this.resultado !== null)
      return this.resultado.toString()

    if (this.numeroDois != null)
      return this.numeroDois

    return this.numeroUm
  }
}
