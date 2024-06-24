import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../interfaces/product.interface';
import { ProductPayload } from '../interfaces/payload-product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  HttpClient = inject(HttpClient)

  getAll(){
    return this.HttpClient.get<Product[]>('/api/products');
  }

  post(payload: ProductPayload) {
    return this.HttpClient.post("/api/products", payload)
  }
  
  constructor() { }
}
