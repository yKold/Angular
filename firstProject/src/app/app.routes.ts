import { inject } from '@angular/core';
import { Routes } from '@angular/router';
import { ProductsService } from './shared/services/products.service';
import { HeaderComponent } from './shared/components/header/header.component';

export const routes: Routes = [
    {
        path: "",
        resolve: () => {
            const productsService = inject(ProductsService)

            return  productsService.getAll();
        },
        component: HeaderComponent
    }
];
