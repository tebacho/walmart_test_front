import { Component } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'walmartfront';

  baseUrl = 'http://localhost:8080/product';
  key = '';
  products = '';
  constructor(private http: HttpClient) {
    this.products = '';
  }

  find(newKey: HTMLInputElement){

    alert(newKey.value);
    const url = this.baseUrl + '/' + newKey.value;
    this.http.get(url).subscribe( (resp: any) => {
      this.products = resp;
    });
  }
}
