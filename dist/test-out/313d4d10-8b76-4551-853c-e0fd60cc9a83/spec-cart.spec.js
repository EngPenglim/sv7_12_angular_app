import {
  RouterLink,
  init_router
} from "./chunk-W3QIJK6B.js";
import "./chunk-X7DDXPCD.js";
import "./chunk-HNQ5KY3Y.js";
import {
  CartSer,
  init_cart_ser
} from "./chunk-JXB4A4HJ.js";
import {
  CommonModule,
  init_common
} from "./chunk-OUYGEWHZ.js";
import "./chunk-MIZUV7DD.js";
import {
  TestBed,
  init_testing
} from "./chunk-2QKALPMJ.js";
import {
  Component,
  __decorate,
  init_core,
  init_tslib_es6
} from "./chunk-6I5JEFX5.js";
import {
  __async,
  __commonJS,
  __esm
} from "./chunk-HBW54YOI.js";

// angular:jit:template:src\app\cart\cart.html
var cart_default;
var init_cart = __esm({
  "angular:jit:template:src\\app\\cart\\cart.html"() {
    cart_default = `<div class="cart-container">\r
  <h1 class="cart-title">\r
    Your Shopping Cart\r
    <span class="cart-count">({{ cartItems.length }} items)</span>\r
  </h1>\r
\r
  <div *ngIf="cartItems.length > 0; else emptyCart">\r
    <div class="cart-items">\r
      <div *ngFor="let item of cartItems" class="cart-item">\r
        <!-- Product Info -->\r
        <div class="product-info">\r
          <img [src]="item.product.image" alt="{{ item.product.title }}" class="product-image" />\r
          <div class="product-details">\r
            <h2 class="product-name">{{ item.product.title }}</h2>\r
            <p class="price">Price: <span class="price-value">{{ item.product.price | currency }}</span></p>\r
            <p class="total">Total: <span class="total-value">{{ item.product.price * item.quantity | currency }}</span></p>\r
          </div>\r
        </div>\r
\r
        <!-- Quantity Controls -->\r
        <div class="quantity-controls">\r
          <button (click)="decreaseQuantity(item.product.id)" class="quantity-btn decrease">-</button>\r
          <span class="quantity-value">{{ item.quantity }}</span>\r
          <button (click)="increaseQuantity(item.product.id)" class="quantity-btn increase">+</button>\r
        </div>\r
\r
        <!-- Delete Button -->\r
        <button (click)="removeItem(item.product.id)" class="delete-btn">\r
          \u{1F5D1}\r
        </button>\r
      </div>\r
    </div>\r
\r
    <!-- Cart Footer -->\r
    <div class="cart-footer">\r
      <h2 class="cart-total">Total: {{ getTotal() | currency }}</h2>\r
      <div class="cart-actions">\r
        <button (click)="clearCart()" class="clear-btn">\r
          \u274CCancel\r
        </button>\r
        <button routerLink="/checkout" class="checkout-btn">\r
           \u{1F6D2}Order\r
        </button>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <!-- Empty Cart State -->\r
  <ng-template #emptyCart>\r
    <div class="empty-cart">\r
      <p class="empty-message">Looks like you haven't added anything yet.</p>\r
      <a routerLink="/" class="continue-shopping">\r
        Continue Shopping\r
      </a>\r
    </div>\r
  </ng-template>\r
</div>`;
  }
});

// angular:jit:style:src\app\cart\cart.css
var cart_default2;
var init_cart2 = __esm({
  "angular:jit:style:src\\app\\cart\\cart.css"() {
    cart_default2 = '/* src/app/cart/cart.css */\n.cart-container {\n  max-width: 1200px;\n  margin: 2rem auto;\n  padding: 2rem;\n  background: #ffffff;\n  border-radius: 16px;\n  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);\n  font-family:\n    "Inter",\n    -apple-system,\n    BlinkMacSystemFont,\n    sans-serif;\n}\n.cart-title {\n  font-size: 1.8rem;\n  font-weight: 700;\n  color: #1a1a1a;\n  margin-bottom: 1.5rem;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.cart-count {\n  font-size: 1rem;\n  font-weight: 500;\n  color: #6b7280;\n  margin-left: 0.5rem;\n}\n.cart-items {\n  margin: 2rem 0;\n}\n.cart-item {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1.5rem 0;\n  border-bottom: 1px solid #f0f0f0;\n  transition: all 0.3s ease;\n}\n.cart-item:hover {\n  background: rgba(249, 250, 251, 0.5);\n}\n.product-info {\n  display: flex;\n  align-items: center;\n  gap: 1.5rem;\n  flex: 1;\n}\n.product-image {\n  width: 80px;\n  height: 80px;\n  object-fit: contain;\n  border-radius: 8px;\n  background: white;\n  padding: 0.5rem;\n  border: 1px solid #e5e7eb;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.03);\n  transition: all 0.3s ease;\n}\n.product-image:hover {\n  transform: scale(1.02);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);\n}\n.product-details {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n.product-name {\n  font-size: 1.1rem;\n  font-weight: 600;\n  color: #1a1a1a;\n  margin: 0;\n  transition: color 0.2s ease;\n}\n.product-name:hover {\n  color: #2563eb;\n}\n.price,\n.total {\n  font-size: 0.95rem;\n  color: #4b5563;\n}\n.price-value,\n.total-value {\n  font-weight: 600;\n  color: #1a1a1a;\n}\n.quantity-controls {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  margin: 0 1.5rem;\n}\n.quantity-btn {\n  width: 32px;\n  height: 32px;\n  border: none;\n  background: #f9fafb;\n  color: #4b5563;\n  border-radius: 6px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  font-size: 1rem;\n  font-weight: 500;\n}\n.quantity-btn:hover {\n  background: #f3f4f6;\n}\n.quantity-btn.decrease:hover {\n  color: #dc2626;\n}\n.quantity-btn.increase:hover {\n  color: #16a34a;\n}\n.quantity-value {\n  min-width: 24px;\n  text-align: center;\n  font-weight: 600;\n  font-size: 0.95rem;\n  color: #1a1a1a;\n}\n.delete-btn {\n  background: none;\n  border: none;\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  color: #9ca3af;\n  font-size: 1.2rem;\n}\n.delete-btn:hover {\n  background: #fef2f2;\n  color: #dc2626;\n}\n.cart-footer {\n  display: flex;\n  flex-direction: column;\n  gap: 1.5rem;\n  padding-top: 2rem;\n  margin-top: 1rem;\n  border-top: 1px solid #e5e7eb;\n}\n.cart-total {\n  font-size: 25px;\n  font-weight: 700;\n  color: #ff0000;\n  text-align: right;\n}\n.cart-actions {\n  display: flex;\n  justify-content: flex-end;\n  gap: 1rem;\n}\n.clear-btn,\n.checkout-btn {\n  border-radius: 10px;\n  padding: 0.8em 1.2em 0.8em 1em;\n  transition: all ease-in-out 0.2s;\n  font-size: 16px;\n}\n.clear-btn {\n  display: flex;\n  background: #e7e7e7;\n  border: white;\n  justify-content: center;\n  align-items: center;\n  color: #ff0000;\n  font-weight: 600;\n}\n.clear-btn:hover {\n  background: #ffffff;\n  border-color: #79797a;\n  transform: translateY(-2px);\n}\n.checkout-btn {\n  background: #04e544;\n  border: white;\n  color: white;\n  border-radius: 10px;\n}\n.checkout-btn:hover {\n  background: #23ff61;\n  transform: translateY(-2px);\n}\n.empty-cart {\n  text-align: center;\n  padding: 3rem 0;\n}\n.empty-message {\n  font-size: 1.2rem;\n  color: #6b7280;\n  margin-bottom: 1.5rem;\n}\n.continue-shopping {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  background: #2563eb;\n  color: white;\n  padding: 0.75rem 1.5rem;\n  border-radius: 8px;\n  text-decoration: none;\n  font-weight: 600;\n  transition: all 0.2s ease;\n}\n.continue-shopping:hover {\n  background: #1d4ed8;\n  transform: translateY(-2px);\n  box-shadow: 0 4px 12px rgba(37, 99, 235, 0.2);\n}\n@media (max-width: 768px) {\n  .cart-container {\n    padding: 1.5rem;\n  }\n  .cart-item {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 1.5rem;\n  }\n  .product-info {\n    width: 100%;\n  }\n  .quantity-controls {\n    margin: 0;\n    align-self: flex-end;\n  }\n  .cart-actions {\n    flex-direction: column;\n  }\n  .clear-btn,\n  .checkout-btn {\n    width: 100%;\n  }\n}\n@media (max-width: 480px) {\n  .cart-title {\n    font-size: 1.5rem;\n  }\n  .product-info {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 1rem;\n  }\n  .product-image {\n    width: 100%;\n    height: auto;\n    max-width: 120px;\n  }\n}\n/*# sourceMappingURL=cart.css.map */\n';
  }
});

// src/app/cart/cart.ts
var Cart;
var init_cart3 = __esm({
  "src/app/cart/cart.ts"() {
    "use strict";
    init_tslib_es6();
    init_cart();
    init_cart2();
    init_core();
    init_common();
    init_cart_ser();
    init_router();
    Cart = class Cart2 {
      cartService;
      cartItems = [];
      constructor(cartService) {
        this.cartService = cartService;
        this.cartService.cart$.subscribe((items) => {
          this.cartItems = items;
        });
      }
      increaseQuantity(productId) {
        const item = this.cartItems.find((i) => i.product.id === productId);
        if (item)
          item.quantity++;
      }
      decreaseQuantity(productId) {
        const item = this.cartItems.find((i) => i.product.id === productId);
        if (item && item.quantity > 1)
          item.quantity--;
      }
      removeItem(id) {
        this.cartService.removeFromCart(id);
      }
      clearCart() {
        this.cartService.clearCart();
      }
      getTotal() {
        return this.cartItems.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
      }
      static ctorParameters = () => [
        { type: CartSer }
      ];
    };
    Cart = __decorate([
      Component({
        selector: "app-cart",
        imports: [CommonModule, RouterLink],
        template: cart_default,
        styles: [cart_default2]
      })
    ], Cart);
  }
});

// src/app/cart/cart.spec.ts
var require_cart_spec = __commonJS({
  "src/app/cart/cart.spec.ts"(exports) {
    init_testing();
    init_cart3();
    describe("Cart", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [Cart]
        }).compileComponents();
        fixture = TestBed.createComponent(Cart);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_cart_spec();
//# sourceMappingURL=spec-cart.spec.js.map
