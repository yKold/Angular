import { Component, computed, input } from '@angular/core';
import { MatCardModule } from '@angular/material/card'
import { MatButton } from '@angular/material/button';
import { Product } from '../../../../shared/interfaces/product.interface';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [MatCardModule, MatButton],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  product = input.required<Product>()

  productTitle = computed(() => this.product().title)
}
