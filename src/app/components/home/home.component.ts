import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductDTO } from 'src/app/dto/productDTO';
import { DataService } from 'src/app/services/data.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products = [];
  constructor(private dataService: DataService, private router: Router) { 
    this.dataService.sendGetRequest().subscribe((data: any) => {
      console.log(data);
      this.products = data;
    });
  }

  ngOnInit(): void {

  }

  viewProduct(id:string){
    console.log('id=' + id);
    this.router.navigate(['product', id]);
  }

}
