import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ProductDTO } from '../dto/productDTO';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private REST_API_SERVER = 'http://localhost:3000/products';
  constructor(private httpClient: HttpClient) { }

  public sendGetRequest(): Observable<ProductDTO[]> {
    return this.httpClient.get<ProductDTO[]>(this.REST_API_SERVER);
  }

 /*public getProducts(id:string): Observable<ProductDTO>{
  return this.httpClient.get<ProductDTO[]>(environment.REST_API_SERVER)
    .subscribe((products => products.find(product=>product.id==id)));
 }*/
}
