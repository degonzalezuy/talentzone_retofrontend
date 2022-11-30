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

  constructor(
    private api: DataService,
    private router: Router,
    private route: ActivatedRoute
  ) {

   }

  ngOnInit(): void {
    
  }

}
