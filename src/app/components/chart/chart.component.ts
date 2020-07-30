import { EventEmitterService } from '../../services/event-emitter.service';   
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from "../../services/data.service";
import { ChartType, ChartOptions } from 'chart.js';
import { HttpClient } from '@angular/common/http';
import { BaseChartDirective } from 'ng2-charts';
import { map } from 'rxjs/operators';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  @ViewChild(BaseChartDirective) chart: BaseChartDirective;

  result: any;
  countPostsUrl: any;
  chartType: any = 'doughnut';
  color: any;
  noColors: boolean;
  pieIndex: any;

  public pieChartOptions: ChartOptions = {
    responsive: true,
    legend: {
      position: 'top',
    },
    plugins: {
      datalabels: {
        formatter: (value, ctx) => {
          if(this.chartType == 'pie') {
            const label = ctx.chart.data.labels[ctx.dataIndex];
            return label;
          } else {
            const label = ctx.chart.data.datasets[0].data[ctx.dataIndex]
            return label; 
          }
        },
      },
    }
  };
  public pieChartLabels: Label[] = [];
  public pieChartData: number[] = [];
  public pieChartType: ChartType = this.chartType;
  public pieChartLegend = true;
  public pieChartPlugins = [pluginDataLabels];
  public pieChartColors = [
    {
      backgroundColor: [],
    },
  ];

  constructor( 
    private http: HttpClient,
    private data: DataService,
    private eventEmitterService: EventEmitterService  
  ) { }

  ngOnInit() {
    this.data.colorpickerResult.subscribe(result => { 
      this.color = result; 
    })

    this.data.chartTypeResult.subscribe(result => { 
      this.chartType = result;
      if(this.chartType == '' || this.chartType == 'doughnut') {
        this.pieChartType = 'doughnut'
      } else if(this.chartType == 'pie') {
        this.pieChartType = this.chartType
      } else if(this.chartType == 'both') {
        this.pieChartType = 'doughnut'
      }
    })
    
    this.data.currentResult.subscribe(result => {
      this.result = result;
      this.pieChartLabels.length = 0;
      this.pieChartData.length = 0;
      this.pieChartColors[0].backgroundColor.length = 0;
      if(this.pieChartColors[0].backgroundColor.length < 2) {
        this.noColors = true;
      }

      for (var key of Object.keys(this.result)) {
        this.pieChartLabels.push(this.result[key]['username']);
        
        let id = this.result[key]['id'];
        this.countPostsUrl = 'https://jsonplaceholder.typicode.com/posts?userId=' + id;
        this.countPostServiceGetCountPosts().subscribe(restItems => {
          this.pieChartData.push(Object.keys(restItems).length);

          if(this.noColors == true) {
            this.pieChartColors[0].backgroundColor.push(this.getRandomColor());
          }
        })
      }
    });
  }

  countPostServiceGetCountPosts() {
    return this.http
      .get<any[]>(this.countPostsUrl)
      .pipe(map(data => data));
  }

  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    this.pieIndex = active[0]['_index']
    this.changeColor()
  }

  getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

  changeColor() {
    this.pieChartColors[0].backgroundColor.splice(this.pieIndex, 1, this.color)
    this.chart.chart.update()
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }
}
