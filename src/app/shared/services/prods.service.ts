import {HttpClient} from '@angular/common/http'
import { Injectable } from '@angular/core';
import {Product} from 'src/app/models/product.model'

@Injectable({
  providedIn: 'root'
})
export class ProdsService {

  constructor(private http: HttpClient) { }

  getProducts(){
    return this.http.get("http://localhost:3000/products");
  }

  postProducts(newProduct: Product){
    this.http.post('http://localhost:30000/products', newProduct).subscribe();
  }
}


