import { Component, EventEmitter, Output, computed, input, output } from '@angular/core';
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

  @Output() edit = new EventEmitter();
  @Output() delete = new EventEmitter();

  productTitle = computed(() => this.product().title);

  onEdit() {
    this.edit.emit()
  }

  onDelete() {
    this.delete.emit()
  }
}
