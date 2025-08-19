import {Component, NgModule, OnInit} from '@angular/core';
import {CartSer} from '../service/cart-ser';
import {CommonModule, CurrencyPipe} from '@angular/common';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-checkout',
  imports: [
    CurrencyPipe,
    CommonModule
  ],
  templateUrl: './checkout.html',
  styleUrl: './checkout.css'
})
export class Checkout implements OnInit {
  // @ts-ignore
  cartItems: CartItem[] = [];

  constructor(private cartService: CartSer) {}

  ngOnInit() {
    this.cartService.cart$.subscribe(items => {
      this.cartItems = items;
    });
  }

  // For just the sum of items
getSubtotal() {
  return this.cartItems.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
}

// For total with tax
getTotal() {
  const subtotal = this.getSubtotal();
  const tax = subtotal * 0.1; // Example: 10% tax
  return subtotal + tax;
}

getTax() {
  return this.getSubtotal() * 0.1; // Example: 10% tax
}

placeOrder() {
  if (this.cartItems.length === 0) {
    Swal.fire({
      icon: 'warning',
      title: 'Your cart is empty!',
      text: '🛒 Please add some items before placing an order',
      confirmButtonColor: '#3085d6',
    });
    return;
  }
  
  Swal.fire({
    icon: 'success',
    title: 'Order Placed!',
    text: 'Your order has been successfully',
    confirmButtonColor: '#3085d6',
  }).then(() => {
    this.cartService.clearCart();
  });
}
}
