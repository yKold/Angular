import { ActivatedRouteSnapshot, RouterStateSnapshot, Routes } from '@angular/router';
import { ListComponent } from './features/list/list.component';
import { CreateProductsComponent } from './features/create-products/create-products.component';
import { Observable } from 'rxjs';
import { inject } from '@angular/core';
import { ProductsService } from './shared/services/products.service';

export const routes: Routes = [
    {
        path: "",
        component: ListComponent
    },
    {
        path: "create-product",
        loadComponent: () => 
            import("./features/create-products/create-products.component").then(m => m.CreateProductsComponent),
    },
    {
        path: "edit-product/:id",
        resolve: {
            product: (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
                const productsService = inject(ProductsService)

                return productsService.get(route.paramMap.get("id") as string);
            }
        },
        loadComponent: () => import("./features/edit/edit.component").then(m => m.EditComponent)
    }
];
