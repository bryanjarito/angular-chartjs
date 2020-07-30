import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { ColorpickerComponent } from './colorpicker.component';
import {AppModule} from '../../app.module';

describe('', () => {
  let fixture: ComponentFixture<ColorpickerComponent>;
  let component: ColorpickerComponent;

  beforeEach(async(() => {

  TestBed.configureTestingModule({
      imports: [
        AppModule
    ],
      declarations: [],
      providers: [
      ]}).compileComponents()
    .then(() => {
        fixture = TestBed.createComponent(ColorpickerComponent);
        component = fixture.componentInstance;
    });
  }));

  it('should call get function onChange', () => {
    spyOn(component, 'onChange');
    component.onChange;
    expect(component.onChange).toBeTruthy()
  });
});

