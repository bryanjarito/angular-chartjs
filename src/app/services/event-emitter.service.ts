import { Injectable, EventEmitter } from '@angular/core';    
import { Subscription } from 'rxjs/internal/Subscription';    
    
@Injectable({    
  providedIn: 'root'    
})    
export class EventEmitterService {    
    
  invokeButtonComponentFunction = new EventEmitter();    
  subsVar: Subscription;    
    
  constructor() { }    
    
  onClickButtonClick() {    
    this.invokeButtonComponentFunction.emit();    
  }    
}     