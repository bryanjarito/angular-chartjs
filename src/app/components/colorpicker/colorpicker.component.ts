import { DataService } from "../../services/data.service";
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-colorpicker',
  templateUrl: './colorpicker.component.html',
  styleUrls: ['./colorpicker.component.css']
})
export class ColorpickerComponent implements OnInit {

  color:string = ""

  constructor(
    private data: DataService   
  ) { }

  ngOnInit() {
    this.data.colorpickerResult.subscribe(result => this.color = result)
  }

  onChange(color) {
    this.color = color
    this.data.colorpickerChangeResult(this.color)
  }  
}
