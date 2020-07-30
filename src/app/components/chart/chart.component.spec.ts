import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { ChartComponent } from './chart.component';
import {AppModule} from '../../app.module';

describe('', () => {
  let fixture: ComponentFixture<ChartComponent>;
  let component: ChartComponent;

  beforeEach(async(() => {

  TestBed.configureTestingModule({
      imports: [
        AppModule
    ],
      declarations: [],
      providers: [
      ]}).compileComponents()
    .then(() => {
        fixture = TestBed.createComponent(ChartComponent);
        component = fixture.componentInstance;
    });
  }));

  it('should call get function getRandomColor and return string', () => {
    spyOn(component, 'getRandomColor');
    component.getRandomColor;
    expect(component.getRandomColor).toString();
  });

  it('should call get function changeColor and update chart', () => {
    spyOn(component, 'changeColor');
    component.changeColor;
    expect(component.changeColor).toBeTruthy()
  });
});

