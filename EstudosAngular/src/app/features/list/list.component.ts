import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { ProductsService } from '../../shared/services/products.service';
import { Product } from '../../shared/interfaces/product.interface';
import { CardComponent } from './components/card/card.component';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { filter } from 'rxjs';


@Component({
  selector: 'app-confirmation-dialog',
  template: `
    <h2 mat-dialog-title>Deletar produto</h2>
    <mat-dialog-content>
      Você gostaria de deletar?
    </mat-dialog-content>
    <mat-dialog-actions align="end">
      <button mat-button (click)="onNo()">Não</button>
      <button mat-button color="accent" (click)="onYes()" cdkFocusInitial>Sim</button>
    </mat-dialog-actions>
  `,
  standalone: true,
  imports: [MatButtonModule, MatDialogModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConfirmationDialogComponent {
  matDialogRef = inject(MatDialogRef);

  onNo() {
    this.matDialogRef.close(false);
  }

  onYes() {
    this.matDialogRef.close(true);
  }
}

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CardComponent, RouterLink, MatButton],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {
  products = signal<Product[]>(inject(ActivatedRoute).snapshot.data["products"]);

  productsService = inject(ProductsService);
  router = inject(Router);
  matDialog = inject(MatDialog)

  onEdit(product:Product ) {
    this.router.navigate(["/edit-product", product.id]);
  }

  onDelete(product:Product) {
    this.matDialog
    .open(ConfirmationDialogComponent)
    .afterClosed()
    .pipe(filter((answer) => answer === true))
    .subscribe(() => {
        this.productsService.delete(product.id).subscribe(() => {
          this.productsService.getAll().subscribe((products) => {
            this.products.set(products)
          })
        })
    })

  }
}
