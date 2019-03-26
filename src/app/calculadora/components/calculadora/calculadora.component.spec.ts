import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculadoraComponent } from './calculadora.component';
import { CalculadoraService } from '../../services/calculadora.service';
import { By } from '@angular/platform-browser';

describe('CalculadoraComponent', () => {
  let component: CalculadoraComponent;
  let fixture: ComponentFixture<CalculadoraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        CalculadoraComponent 
      ],
      providers: [
        CalculadoraService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculadoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('deve criar o componente', () => {
    expect(component).toBeTruthy();
  });

  it('deve somar dois elementos 3 + 2 = 5', () => {
    let botaoTres = fixture.debugElement.query(By.css('#btn3'))
    let botaoSoma = fixture.debugElement.query(By.css('#btnSoma'))
    let botaoDois = fixture.debugElement.query(By.css('#btn2'))
    let botaoCalcular = fixture.debugElement.query(By.css('#btnCalcular'))
    let display = fixture.debugElement.query(By.css('#display'))

    botaoTres.triggerEventHandler('click', null)
    fixture.detectChanges()

    botaoSoma.triggerEventHandler('click', null)
    fixture.detectChanges()

    botaoDois.triggerEventHandler('click', null)
    fixture.detectChanges()

    botaoCalcular.triggerEventHandler('click', null)
    fixture.detectChanges()

    expect(display.nativeElement.value).toEqual('5')
  })
});
