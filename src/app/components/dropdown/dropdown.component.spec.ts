import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { DropdownComponent } from './dropdown.component';
import {AppModule} from '../../app.module';

describe('', () => {
  let fixture: ComponentFixture<DropdownComponent>;
  let component: DropdownComponent;

  beforeEach(async(() => {

  TestBed.configureTestingModule({
      imports: [
        AppModule
    ],
      declarations: [],
      providers: [
      ]}).compileComponents()
    .then(() => {
        fixture = TestBed.createComponent(DropdownComponent);
        component = fixture.componentInstance;
    });
  }));

  it('should call get function onChange', () => {
    spyOn(component, 'onChange');
    component.onChange;
    expect(component.onChange).toBeTruthy()
  });
});

