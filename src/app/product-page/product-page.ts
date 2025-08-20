import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../models/products.model';
import { ProductSer } from '../service/product-ser';
import { ProductCard } from '../product-list/product-card/product-card';

@Component({
  selector: 'app-product-page',
  standalone: true,
  imports: [CommonModule, ProductCard],
  templateUrl: './product-page.html',
  styleUrls: ['./product-page.css']
})
export class ProductPage implements OnInit {
  products: Product[] = [];
  loading = true;

  constructor(private productService: ProductSer) {}

  ngOnInit() {
    this.productService.getProducts().subscribe({
      next: (data) => {
        this.products = data;
        this.loading = false;
      },
      error: (err) => {
        console.error('Error fetching products:', err);
        this.loading = false;
      }
    });
  }
}
