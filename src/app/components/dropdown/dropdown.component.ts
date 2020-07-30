import { Component, OnInit } from '@angular/core';
import { DataService } from "../../services/data.service";

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {

  chartType: any = 'doughnut';

  constructor(
    private data: DataService
  ) { }

  ngOnInit() {
    this.data.chartTypeResult.subscribe(result => this.chartType = result)
  }

  onChange(e) {
    this.chartType = e.target.value
    this.data.chartTypeChangeResult(this.chartType)
  } 
}
