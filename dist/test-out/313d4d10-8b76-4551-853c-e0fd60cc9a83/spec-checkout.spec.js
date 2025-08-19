import {
  CartSer,
  init_cart_ser
} from "./chunk-JXB4A4HJ.js";
import {
  CommonModule,
  CurrencyPipe,
  init_common
} from "./chunk-OUYGEWHZ.js";
import "./chunk-MIZUV7DD.js";
import {
  require_sweetalert2_all
} from "./chunk-T7O4ZBWL.js";
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
  __esm,
  __toESM
} from "./chunk-HBW54YOI.js";

// angular:jit:template:src\app\checkout\checkout.html
var checkout_default;
var init_checkout = __esm({
  "angular:jit:template:src\\app\\checkout\\checkout.html"() {
    checkout_default = '<div class="checkout-container">\r\n  <!-- Progress Steps -->\r\n  <div class="progress-steps">\r\n    <div class="step active">\r\n      <div class="step-number">1</div>\r\n      <div class="step-label">Shipping</div>\r\n    </div>\r\n    <div class="step">\r\n      <div class="step-number">2</div>\r\n      <div class="step-label">Payment</div>\r\n    </div>\r\n    <div class="step">\r\n      <div class="step-number">3</div>\r\n      <div class="step-label">Confirmation</div>\r\n    </div>\r\n  </div>\r\n\r\n  <!-- Main Content -->\r\n  <div class="checkout-content">\r\n    <!-- LEFT: Checkout Form -->\r\n    <div class="checkout-left">\r\n      <!-- Shipping Details -->\r\n      <div class="form-section">\r\n        <h2 class="section-title">\r\n          <span class="title-icon">\u{1F69A}</span>\r\n          Shipping Information\r\n        </h2>\r\n        <form class="form">\r\n          <div class="form-group">\r\n            <label>Full Name</label>\r\n            <input type="text" id="fullName" class="input" placeholder="Enter your full name" required>\r\n          </div>\r\n          <div class="form-row">\r\n            <div class="form-group">\r\n              <label>Email</label>\r\n               <input type="email" id="email" class="input" placeholder="Enter your email" required>\r\n            </div>\r\n            <div class="form-group">\r\n              <label>Phone Number</label>\r\n              <input type="tel" id="phone" class="input" placeholder="Enter your phone number" required>\r\n            </div>\r\n          </div>\r\n          <div class="form-group">\r\n            <label>Address</label>\r\n            <input type="text" id="address" class="input" placeholder="Enter your street address" required>\r\n          </div>\r\n          <div class="form-row">\r\n            <div class="form-group">\r\n              <label>City</label>\r\n              <input type="text" id="city" class="input" placeholder="Enter your city" required>\r\n            </div>\r\n            <div class="form-group">\r\n              <label>ZIP Code</label>\r\n               <input type="text" id="zip" class="input" placeholder="Enter ZIP code" required>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </div>\r\n\r\n      <!-- Payment Method -->\r\n      <div class="form-section">\r\n        <h2 class="section-title">\r\n          <span class="title-icon">\u{1F4B3}</span>\r\n          Payment Method\r\n        </h2>\r\n        <div class="payment-options">\r\n          <label class="payment-option">\r\n            <input type="radio" name="payment" checked />\r\n            <div class="payment-card">\r\n              <div class="payment-icon">\u{1F4B3}</div>\r\n              <div class="payment-details">\r\n                <div class="payment-title">Credit/Debit Card</div>\r\n                <div class="payment-desc">Pay with Visa, Mastercard, etc.</div>\r\n              </div>\r\n            </div>\r\n          </label>\r\n          <label class="payment-option">\r\n            <input type="radio" name="payment" />\r\n            <div class="payment-card">\r\n              <div class="payment-icon">\u{1F3E6}</div>\r\n              <div class="payment-details">\r\n                <div class="payment-title">Bank Transfer</div>\r\n                <div class="payment-desc">Direct bank payment</div>\r\n              </div>\r\n            </div>\r\n          </label>\r\n          <label class="payment-option">\r\n            <input type="radio" name="payment" />\r\n            <div class="payment-card">\r\n              <div class="payment-icon">\u{1F4E6}</div>\r\n              <div class="payment-details">\r\n                <div class="payment-title">Cash on Delivery</div>\r\n                <div class="payment-desc">Pay when you receive</div>\r\n              </div>\r\n            </div>\r\n          </label>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <!-- RIGHT: Order Summary -->\r\n    <div class="checkout-right">\r\n      <div class="summary-card">\r\n        <h2 class="section-title">\r\n          <span class="title-icon">\u{1F6D2}</span>\r\n          Order Summary\r\n        </h2>\r\n        \r\n        <div class="order-items">\r\n          <div *ngFor="let item of cartItems" class="order-item">\r\n            <div class="item-info">\r\n              <img [src]="item.product.image" alt="{{item.product.title}}" class="item-image" />\r\n              <div>\r\n                <p class="item-title">{{item.product.title}}</p>\r\n                <p class="item-qty">Qty: {{item.quantity}}</p>\r\n              </div>\r\n            </div>\r\n            <p class="item-price">{{ (item.product.price * item.quantity) | currency }}</p>\r\n          </div>\r\n        </div>\r\n\r\n        <div class="summary-divider"></div>\r\n\r\n        <!-- Total -->\r\n        <div class="total-section">\r\n          <div class="total-row">\r\n            <span>Subtotal</span>\r\n            <span>{{ getSubtotal() | currency }}</span>\r\n          </div>\r\n          <div class="total-row">\r\n            <span>Shipping</span>\r\n            <span>Free</span>\r\n          </div>\r\n          <div class="total-row">\r\n            <span>Tax</span>\r\n            <span>{{ getTax() | currency }}</span>\r\n          </div>\r\n          <div class="total-row grand-total">\r\n            <span>Total</span>\r\n            <span>{{ getTotal() | currency }}</span>\r\n          </div>\r\n        </div>\r\n\r\n        <!-- Checkout Button -->\r\n        <button (click)="placeOrder()" class="checkout-btn">\r\n          Get Order\r\n          <span class="arrow-icon">\u2192</span>\r\n        </button>\r\n        \r\n        <div class="secure-checkout">\r\n          <div class="lock-icon">\u{1F512}</div>\r\n          <span>Secure checkout</span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>';
  }
});

// angular:jit:style:src\app\checkout\checkout.css
var checkout_default2;
var init_checkout2 = __esm({
  "angular:jit:style:src\\app\\checkout\\checkout.css"() {
    checkout_default2 = '/* src/app/checkout/checkout.css */\n:root {\n  --primary: #4f46e5;\n  --primary-light: #6366f1;\n  --primary-dark: #4338ca;\n  --text: #1f2937;\n  --text-light: #6b7280;\n  --border: #e5e7eb;\n  --bg-light: #f9fafb;\n  --success: #10b981;\n  --white: #ffffff;\n  --shadow-sm: 0 1px 3px rgba(0,0,0,0.1);\n  --shadow-md: 0 4px 6px rgba(0,0,0,0.1);\n  --shadow-lg: 0 10px 25px rgba(0,0,0,0.1);\n  --radius-sm: 0.375rem;\n  --radius-md: 0.5rem;\n  --radius-lg: 0.75rem;\n}\n.checkout-container {\n  max-width: 1200px;\n  margin: 2rem auto;\n  padding: 0 1.5rem;\n  font-family:\n    "Inter",\n    -apple-system,\n    BlinkMacSystemFont,\n    sans-serif;\n  color: var(--text);\n}\n.progress-steps {\n  display: flex;\n  justify-content: center;\n  margin-bottom: 3rem;\n  gap: 2rem;\n}\n.step {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  position: relative;\n  color: var(--text-light);\n}\n.step:not(:last-child):after {\n  content: "";\n  position: absolute;\n  top: 1rem;\n  left: calc(100% + 0.5rem);\n  width: 2rem;\n  height: 1px;\n  background: var(--border);\n}\n.step-number {\n  width: 2rem;\n  height: 2rem;\n  border-radius: 50%;\n  background: var(--border);\n  color: var(--text-light);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 600;\n  margin-bottom: 0.5rem;\n}\n.step.active .step-number {\n  background: var(--primary);\n  color: var(--white);\n}\n.step.active .step-label {\n  color: var(--primary);\n  font-weight: 500;\n}\n.step-label {\n  font-size: 0.875rem;\n}\n.checkout-content {\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: 2rem;\n}\n@media (min-width: 1024px) {\n  .checkout-content {\n    grid-template-columns: 1.5fr 1fr;\n  }\n}\n.form-section {\n  background: var(--white);\n  border-radius: var(--radius-md);\n  padding: 1.5rem;\n  margin-bottom: 1.5rem;\n  box-shadow: var(--shadow-sm);\n  border: 1px solid var(--border);\n}\n.section-title {\n  font-size: 1.25rem;\n  font-weight: 600;\n  margin-bottom: 1.5rem;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.title-icon {\n  font-size: 1.1em;\n}\n.input {\n  width: 100%;\n  padding: 0.75rem 1rem;\n  border: 1px solid #ccc;\n  border-radius: 0.5rem;\n  font-size: 0.9rem;\n  transition: all 0.3s ease;\n  outline: none;\n  background-color: #f9f9f9;\n}\n.input:focus {\n  border-color: #3b82f6;\n  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.2);\n  background-color: #fff;\n}\n.form-group {\n  margin-bottom: 1.5rem;\n}\n.form-group label {\n  display: block;\n  margin-bottom: 0.5rem;\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: #333;\n}\n.form-row {\n  display: flex;\n  gap: 1rem;\n  flex-wrap: wrap;\n}\n.form-row .form-group {\n  flex: 1;\n}\n@media (max-width: 640px) {\n  .form-row {\n    flex-direction: column;\n  }\n}\n.input::placeholder {\n  color: #bebebe;\n}\n.input {\n  width: 100%;\n  padding: 0.75rem;\n  border: 1px solid var(--border);\n  border-radius: var(--radius-sm);\n  font-size: 0.9375rem;\n  transition: all 0.2s;\n}\n.input:focus {\n  outline: none;\n  border-color: var(--primary-light);\n  box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.1);\n}\n.form-row {\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: 1rem;\n  margin-bottom: 1rem;\n}\n@media (min-width: 640px) {\n  .form-row {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n.payment-options {\n  display: grid;\n  gap: 0.75rem;\n}\n.payment-option {\n  position: relative;\n}\n.payment-option input {\n  position: absolute;\n  opacity: 0;\n}\n.payment-card {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  padding: 1rem;\n  border: 1px solid var(--border);\n  border-radius: var(--radius-sm);\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.payment-option input:checked + .payment-card {\n  border-color: var(--primary);\n  background-color: rgba(79, 70, 229, 0.05);\n}\n.payment-option:hover .payment-card {\n  border-color: var(--primary-light);\n}\n.payment-icon {\n  font-size: 1.5rem;\n  width: 2.5rem;\n  height: 2.5rem;\n  border-radius: 50%;\n  background: var(--bg-light);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.payment-details {\n  flex: 1;\n}\n.payment-title {\n  font-weight: 600;\n  margin-bottom: 0.25rem;\n}\n.payment-desc {\n  font-size: 0.8125rem;\n  color: var(--text-light);\n}\n.summary-card {\n  background: var(--white);\n  border-radius: var(--radius-md);\n  padding: 1.5rem;\n  box-shadow: var(--shadow-sm);\n  border: 1px solid var(--border);\n  position: sticky;\n  top: 1rem;\n}\n.order-items {\n  max-height: 300px;\n  overflow-y: auto;\n  margin-bottom: 1rem;\n}\n.order-item {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0.75rem 0;\n  border-bottom: 1px solid var(--border);\n}\n.order-item:last-child {\n  border-bottom: none;\n}\n.item-info {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n.item-image {\n  width: 3rem;\n  height: 3rem;\n  object-fit: cover;\n  border-radius: var(--radius-sm);\n}\n.item-title {\n  font-weight: 500;\n  margin-bottom: 0.25rem;\n}\n.item-qty {\n  font-size: 0.8125rem;\n  color: var(--text-light);\n}\n.item-price {\n  font-weight: 600;\n}\n.summary-divider {\n  height: 1px;\n  background: var(--border);\n  margin: 1rem 0;\n}\n.total-section {\n  margin-bottom: 1.5rem;\n}\n.total-row {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 0.75rem;\n  font-size: 0.9375rem;\n}\n.total-row:last-child {\n  margin-bottom: 0;\n}\n.grand-total {\n  font-weight: 600;\n  font-size: 1.125rem;\n  margin-top: 1rem;\n  padding-top: 0.75rem;\n  border-top: 1px solid var(--border);\n}\n.checkout-btn {\n  width: 100%;\n  padding: 1rem;\n  border-radius: 10px;\n  color: rgb(12, 151, 12);\n  background-color: #ffffff;\n  font-weight: 600;\n  font-size: 1rem;\n  transition: all 0.2s;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.checkout-btn:hover {\n  transform: translateY(-3px);\n  box-shadow: var(--shadow-md);\n}\n.secure-checkout {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n  margin-top: 1rem;\n  font-size: 0.8125rem;\n  color: var(--text-light);\n}\n.lock-icon {\n  font-size: 0.9em;\n}\n/*# sourceMappingURL=checkout.css.map */\n';
  }
});

// src/app/checkout/checkout.ts
var import_sweetalert2, Checkout;
var init_checkout3 = __esm({
  "src/app/checkout/checkout.ts"() {
    "use strict";
    init_tslib_es6();
    init_checkout();
    init_checkout2();
    init_core();
    init_cart_ser();
    init_common();
    import_sweetalert2 = __toESM(require_sweetalert2_all());
    Checkout = class Checkout2 {
      cartService;
      // @ts-ignore
      cartItems = [];
      constructor(cartService) {
        this.cartService = cartService;
      }
      ngOnInit() {
        this.cartService.cart$.subscribe((items) => {
          this.cartItems = items;
        });
      }
      // For just the sum of items
      getSubtotal() {
        return this.cartItems.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
      }
      // For total with tax
      getTotal() {
        const subtotal = this.getSubtotal();
        const tax = subtotal * 0.1;
        return subtotal + tax;
      }
      getTax() {
        return this.getSubtotal() * 0.1;
      }
      placeOrder() {
        if (this.cartItems.length === 0) {
          import_sweetalert2.default.fire({
            icon: "warning",
            title: "Your cart is empty!",
            text: "\u{1F6D2} Please add some items before placing an order",
            confirmButtonColor: "#3085d6"
          });
          return;
        }
        import_sweetalert2.default.fire({
          icon: "success",
          title: "Order Placed!",
          text: "Your order has been successfully",
          confirmButtonColor: "#3085d6"
        }).then(() => {
          this.cartService.clearCart();
        });
      }
      static ctorParameters = () => [
        { type: CartSer }
      ];
    };
    Checkout = __decorate([
      Component({
        selector: "app-checkout",
        imports: [
          CurrencyPipe,
          CommonModule
        ],
        template: checkout_default,
        styles: [checkout_default2]
      })
    ], Checkout);
  }
});

// src/app/checkout/checkout.spec.ts
var require_checkout_spec = __commonJS({
  "src/app/checkout/checkout.spec.ts"(exports) {
    init_testing();
    init_checkout3();
    describe("Checkout", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [Checkout]
        }).compileComponents();
        fixture = TestBed.createComponent(Checkout);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_checkout_spec();
//# sourceMappingURL=spec-checkout.spec.js.map
