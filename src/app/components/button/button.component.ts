import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from "../../services/data.service";
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  restItems: any;
  result: string;
  restItemsUrl = 'https://jsonplaceholder.typicode.com/users';

  constructor(
    private http: HttpClient,
    private data: DataService
  ) {}

  ngOnInit() {    
    this.data.currentResult.subscribe(result => this.result = result)   
  }  

  onClickButton() {
    this.restItemsServiceGetRestItems()
      .subscribe(
        restItems => {
          this.restItems = restItems;
          this.data.changeResult(this.restItems)
        }
      )
  }

  restItemsServiceGetRestItems() {
    return this.http
      .get<any[]>(this.restItemsUrl)
      .pipe(map(data => data));
  }
}
