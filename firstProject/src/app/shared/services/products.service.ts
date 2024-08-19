import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  HttpClient = inject(HttpClient)

  getAll(){
    return this.HttpClient.get<Product[]>('/api/Products');
  }

  // get(id:string){

  // }

  // post(){

  // }

  // put(id:string){

  // }

  // delete(id:string){

  // }
  constructor() { }
}
