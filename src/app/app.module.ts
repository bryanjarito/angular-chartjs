import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ColorPickerModule } from 'ngx-color-picker';
import { HttpClientModule } from '@angular/common/http';

import { ChartsModule } from 'ng2-charts';

import { EventEmitterService } from './services/event-emitter.service';

import { AppComponent } from './app.component';
import { ButtonComponent } from './components/button/button.component';
import { ColorpickerComponent } from './components/colorpicker/colorpicker.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { HeaderComponent } from './components/header/header.component';
import { ChartComponent } from './components/chart/chart.component';
import { DataService } from './services/data.service';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    ColorpickerComponent,
    DropdownComponent,
    HeaderComponent,
    ChartComponent,
  ],
  imports: [
    BrowserModule,
    ColorPickerModule,
    HttpClientModule,
    ChartsModule
  ],
  providers: [
    EventEmitterService,
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
