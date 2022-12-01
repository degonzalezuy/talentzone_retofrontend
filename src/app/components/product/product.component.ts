import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductDTO } from 'src/app/dto/productDTO';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  idProduct: string='';

  products:ProductDTO[];
  constructor(
    private dataService: DataService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.route.params.subscribe((params) => {
      this.idProduct= params['id'];
    })
    
    this.dataService.sendGetRequest().subscribe((data: ProductDTO[]) => {
      console.log(data);
      this.products = data.filter(p => p.id== this.idProduct);

      
    });

    
  }

  ngOnInit(): void {

  }



}
