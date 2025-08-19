import {
  BehaviorSubject,
  Injectable,
  __decorate,
  init_core,
  init_esm,
  init_tslib_es6
} from "./chunk-6I5JEFX5.js";
import {
  __esm
} from "./chunk-HBW54YOI.js";

// src/app/service/cart-ser.ts
var CartSer;
var init_cart_ser = __esm({
  "src/app/service/cart-ser.ts"() {
    "use strict";
    init_tslib_es6();
    init_core();
    init_esm();
    CartSer = class CartSer2 {
      cartKey = "cart_items";
      cartItems = [];
      cartSubject = new BehaviorSubject([]);
      cart$ = this.cartSubject.asObservable();
      constructor() {
        const storedCart = localStorage.getItem(this.cartKey);
        if (storedCart) {
          this.cartItems = JSON.parse(storedCart);
          this.cartSubject.next(this.cartItems);
        }
      }
      addToCart(product, quantity) {
        const index = this.cartItems.findIndex((item) => item.product.id === product.id);
        if (index > -1) {
          this.cartItems[index].quantity += 1;
        } else {
          this.cartItems.push({ product, quantity: 1 });
        }
        this.updateLocalStorage();
      }
      removeFromCart(productId) {
        this.cartItems = this.cartItems.filter((item) => item.product.id !== productId);
        this.updateLocalStorage();
      }
      clearCart() {
        this.cartItems = [];
        this.updateLocalStorage();
      }
      updateLocalStorage() {
        localStorage.setItem(this.cartKey, JSON.stringify(this.cartItems));
        this.cartSubject.next(this.cartItems);
      }
      getCart() {
        return this.cartItems;
      }
      static ctorParameters = () => [];
    };
    CartSer = __decorate([
      Injectable({
        providedIn: "root"
      })
    ], CartSer);
  }
});

export {
  CartSer,
  init_cart_ser
};
//# sourceMappingURL=chunk-JXB4A4HJ.js.map
