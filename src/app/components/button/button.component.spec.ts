import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { ButtonComponent } from './button.component';
import {AppModule} from '../../app.module';

describe('', () => {
  let fixture: ComponentFixture<ButtonComponent>;
  let component: ButtonComponent;

  beforeEach(async(() => {

    TestBed.configureTestingModule({
       imports: [
         AppModule
      ],
       declarations: [],
       providers: [
       ]}).compileComponents()
      .then(() => {
         fixture = TestBed.createComponent(ButtonComponent);
         component = fixture.componentInstance;
      });
   }));

   it('should', async(() => {
    spyOn(component, 'onClickButton');
 
    let button = fixture.debugElement.nativeElement.querySelector('button');
    button.click();
 
    fixture.whenStable().then(() => {
      expect(component.onClickButton).toHaveBeenCalled();
    })
 }));
});

