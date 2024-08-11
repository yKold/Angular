import { Component, inject, signal } from '@angular/core';
import { Product } from '../../shared/interfaces/product';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CardComponent } from './card/card.component';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [ CardComponent, RouterLink ],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {
  products = signal<Product[]>(inject(ActivatedRoute).snapshot.data["Products"]);

  constructor() {
    console.log(this.products()); // Log to check if the products are correctly set
  }
}
