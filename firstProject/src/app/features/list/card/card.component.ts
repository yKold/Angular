import { Component, input, computed, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card'
import { MatButton } from '@angular/material/button';
import { Product } from '../../../shared/interfaces/product';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [ MatCardModule, MatButton ],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  product = input.required<Product>()

  productImg = computed(() => this.product().img)
  productName = computed(() => this.product().name);
  productQtd = computed(() => this.product().quantidade);
  productDesc = computed(() => this.product().description);
  productPreco =  computed(() => this.product().preco);

}
