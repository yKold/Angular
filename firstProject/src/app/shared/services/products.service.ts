import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  HttpClient = inject(HttpClient)

  getAll(){

  }

  get(id:string){

  }

  post(){

  }

  put(id:string){

  }

  delete(id:string){

  }
  constructor() { }
}
