import { inject } from '@angular/core';
import { TestBed } from '@angular/core/testing';

import { CalculadoraService } from './calculadora.service';

describe('CalculadoraService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [ CalculadoraService ]
  }));

  it('should be created', () => {
    const service: CalculadoraService = TestBed.get(CalculadoraService)
    expect(service).toBeTruthy()
  })

  it('deve garantir que 1 + 4 = 5', () => {
    let service: CalculadoraService = TestBed.get(CalculadoraService)
    let resultado = service.calcular(1, 4, CalculadoraService.SOMA)
    expect(resultado).toEqual(5)
  })

  it('deve garantir que 1 - 4 = -3', () => {
    let service: CalculadoraService = TestBed.get(CalculadoraService)
    let resultado = service.calcular(1, 4, CalculadoraService.SUBTRACAO)
    expect(resultado).toEqual(-3)
  })

  it('deve garantir que 1 * 4 = 4', () => {
    let service: CalculadoraService = TestBed.get(CalculadoraService)
    let resultado = service.calcular(1, 4, CalculadoraService.MULTIPLICACAO)
    expect(resultado).toEqual(4)
  })

  it('deve garantir que 1 / 4 = 0.25', () => {
    let service: CalculadoraService = TestBed.get(CalculadoraService)
    let resultado = service.calcular(1, 4, CalculadoraService.DIVISAO)
    expect(resultado).toEqual(0.25)
  })

  it('deve retornar 0', () => {
    let service: CalculadoraService = TestBed.get(CalculadoraService)
    let resultado = service.calcular(1, 4, null)
    expect(resultado).toEqual(0)
  })
});