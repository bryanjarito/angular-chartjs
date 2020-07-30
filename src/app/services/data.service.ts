import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class DataService {

  private dataSource = new BehaviorSubject('');
  currentResult = this.dataSource.asObservable();

  private colorpickerSource = new BehaviorSubject('');
  colorpickerResult = this.colorpickerSource.asObservable();

  private chartTypeSource = new BehaviorSubject('');
  chartTypeResult = this.chartTypeSource.asObservable();

  constructor() { }

  changeResult(data: string) {
    this.dataSource.next(data)
  }

  colorpickerChangeResult(data: string) {
    this.colorpickerSource.next(data)
  }

  chartTypeChangeResult(data: any) {
    this.chartTypeSource.next(data)
  }

}