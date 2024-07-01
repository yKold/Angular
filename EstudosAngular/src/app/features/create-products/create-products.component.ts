import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ProductsService } from '../../shared/services/products.service';

@Component({
  selector: 'app-create-products',
  standalone: true,
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule],
  templateUrl: './create-products.component.html',
  styleUrl: './create-products.component.scss'
})
export class CreateProductsComponent {
  productService = inject(ProductsService);

  form = new FormGroup({
    title: new FormControl<string>("", 
      {nonNullable: true, 
        validators: Validators.required})
  })

  onSubmit(){
    this.productService.post({
      title: this.form.controls.title.value
    })
    .subscribe(() => {
      alert("Sucesso!");
    });
  }
}
