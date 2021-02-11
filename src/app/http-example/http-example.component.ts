import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-http-example',
  templateUrl: './http-example.component.html',
  styleUrls: ['./http-example.component.css']
})
export class HttpExampleComponent implements OnInit {

  products = [];
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    
    this.apiService.getReq().subscribe((data: any[]) => {
      console.log(data);
      this.products = data["products"];
    })
  }

}
