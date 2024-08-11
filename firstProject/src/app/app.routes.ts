import { inject } from '@angular/core';
import { Routes } from '@angular/router';
import { ProductsService } from './shared/services/products.service';
import { ListComponent } from './features/list/list.component';

export const routes: Routes = [
    {
        path: "",
        resolve: {
            Products: () => {
                const productsService = inject(ProductsService)

                return productsService.getAll();
            }
        },
        component: ListComponent
    }
];
