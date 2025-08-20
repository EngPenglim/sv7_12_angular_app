import { Routes } from '@angular/router';
import { ProductList } from './product-list/product-list';
import { Cart } from './cart/cart';
import { Checkout } from './checkout/checkout';
import { ProductDetail } from './product-list/product-detail/product-detail';
import { ProductPage } from './product-page/product-page';
import { Aboutus } from './aboutus/aboutus';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: ProductList
  },
  {
    path: 'product-page',
    component: ProductPage
  },
  {
    path: 'about-us',
    component: Aboutus
  },
  {
    path: 'cart',
    component: Cart
  },
  {
    path: 'checkout',
    component: Checkout
  },
  {
    path: 'product/:id', // dynamic route for product details
    component: ProductDetail
  }
];
