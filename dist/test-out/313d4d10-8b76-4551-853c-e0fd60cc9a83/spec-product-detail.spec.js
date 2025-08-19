import {
  ProductSer,
  init_product_ser
} from "./chunk-GULJYGED.js";
import {
  ActivatedRoute,
  init_router
} from "./chunk-W3QIJK6B.js";
import {
  HttpClientModule,
  init_http
} from "./chunk-X7DDXPCD.js";
import "./chunk-HNQ5KY3Y.js";
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

// angular:jit:template:src\app\product-list\product-detail\product-detail.html
var product_detail_default;
var init_product_detail = __esm({
  "angular:jit:template:src\\app\\product-list\\product-detail\\product-detail.html"() {
    product_detail_default = '<div *ngIf="loading" class="loading-screen">\r\n  <div class="loading-spinner"></div>\r\n  <p>Loading product details...</p>\r\n</div>\r\n\r\n<div *ngIf="!loading && product" class="product-card">\r\n  <!-- Image with hover zoom -->\r\n  <div class="product-image-wrapper">\r\n    <img [src]="product.image" alt="{{product.title}}" class="product-image" />\r\n    <div class="image-overlay"></div>\r\n  </div>\r\n\r\n  <!-- Product Info -->\r\n  <div class="product-details">\r\n    <div>\r\n      <h1 class="product-title">{{ product.title }}</h1>\r\n      <p class="product-price">{{ product.price | currency }}</p>\r\n      <div class="rating">\r\n        <div class="stars">\u2605\u2605\u2605\u2605\u2605</div>\r\n        <span class="review-count">(42 reviews)</span>\r\n      </div>\r\n      <p class="product-description">{{ product.description }}</p>\r\n      \r\n      <div class="product-meta">\r\n        <span class="tag">Free Shipping</span>\r\n        <span class="tag">In Stock</span>\r\n      </div>\r\n    </div>\r\n\r\n    <!-- Quantity + Add to Cart -->\r\n    <div class="cart-controls">\r\n      <div class="quantity-selector">\r\n        <button (click)="decreaseQuantity()" class="quantity-btn decrease">-</button>\r\n        <span class="quantity-value">{{ quantity }}</span>\r\n        <button (click)="increaseQuantity()" class="quantity-btn increase">+</button>\r\n      </div>\r\n      <button (click)="addToCart()" class="add-to-cart-btn">\r\n        <span class="cart-icon">\u{1F6D2}</span>\r\n        <span>Add to Cart</span>\r\n      </button>\r\n    </div>\r\n  </div>\r\n</div>';
  }
});

// angular:jit:style:src\app\product-list\product-detail\product-detail.css
var product_detail_default2;
var init_product_detail2 = __esm({
  "angular:jit:style:src\\app\\product-list\\product-detail\\product-detail.css"() {
    product_detail_default2 = "/* src/app/product-list/product-detail/product-detail.css */\n.loading-screen {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 300px;\n  color: #6b7280;\n  font-size: 1.2rem;\n}\n.loading-spinner {\n  width: 50px;\n  height: 50px;\n  border: 5px solid #f3f3f3;\n  border-top: 5px solid #3b82f6;\n  border-radius: 50%;\n  animation: spin 1s linear infinite;\n  margin-bottom: 1rem;\n}\n@keyframes spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.product-card {\n  max-width: 1200px;\n  margin: 2rem auto;\n  padding: 2rem;\n  background: white;\n  border-radius: 16px;\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: 3rem;\n  transition: transform 0.3s ease, box-shadow 0.3s ease;\n}\n.product-card:hover {\n  transform: translateY(-5px);\n  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.12);\n}\n@media (min-width: 768px) {\n  .product-card {\n    grid-template-columns: 1fr 1fr;\n  }\n}\n.product-image-wrapper {\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  overflow: hidden;\n  border-radius: 12px;\n  background: #f8fafc;\n  height: 400px;\n}\n.product-image {\n  max-width: 100%;\n  max-height: 100%;\n  object-fit: contain;\n  transition: transform 0.5s ease;\n  z-index: 1;\n}\n.image-overlay {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(59, 130, 246, 0.1) 0%,\n      rgba(99, 102, 241, 0.1) 100%);\n  opacity: 0;\n  transition: opacity 0.3s ease;\n}\n.product-image-wrapper:hover .product-image {\n  transform: scale(1.05);\n}\n.product-image-wrapper:hover .image-overlay {\n  opacity: 1;\n}\n.product-details {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n.product-title {\n  font-size: 2rem;\n  font-weight: 800;\n  color: #1e293b;\n  margin-bottom: 1rem;\n  line-height: 1.2;\n}\n.product-price {\n  font-size: 1.75rem;\n  font-weight: 700;\n  color: #3b82f6;\n  margin-bottom: 1.5rem;\n  background:\n    linear-gradient(\n      to right,\n      #3b82f6,\n      #6366f1);\n  -webkit-background-clip: text;\n  background-clip: text;\n  color: transparent;\n  display: inline-block;\n}\n.rating {\n  display: flex;\n  align-items: center;\n  margin-bottom: 1.5rem;\n}\n.stars {\n  color: #f59e0b;\n  font-size: 1.2rem;\n  letter-spacing: 2px;\n}\n.review-count {\n  color: #64748b;\n  font-size: 0.9rem;\n  margin-left: 0.5rem;\n}\n.product-description {\n  color: #475569;\n  line-height: 1.6;\n  margin-bottom: 2rem;\n  font-size: 1.1rem;\n}\n.product-meta {\n  display: flex;\n  gap: 0.5rem;\n  margin-bottom: 2rem;\n}\n.tag {\n  background: #e0e7ff;\n  color: #4f46e5;\n  padding: 0.25rem 0.75rem;\n  border-radius: 9999px;\n  font-size: 0.8rem;\n  font-weight: 600;\n}\n.cart-controls {\n  display: flex;\n  align-items: center;\n  gap: 1.5rem;\n  margin-top: 2rem;\n}\n.quantity-selector {\n  display: flex;\n  align-items: center;\n  border: 1px solid #e2e8f0;\n  border-radius: 12px;\n  overflow: hidden;\n  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);\n}\n.quantity-btn {\n  padding: 0.75rem 1rem;\n  background-color: #f8fafc;\n  border: none;\n  cursor: pointer;\n  font-size: 1.2rem;\n  transition: all 0.2s ease;\n  color: #64748b;\n}\n.quantity-btn:hover {\n  background-color: #e2e8f0;\n  color: #334155;\n}\n.quantity-btn:active {\n  transform: scale(0.95);\n}\n.quantity-value {\n  padding: 0 1.5rem;\n  font-weight: 600;\n  color: #1e293b;\n  min-width: 30px;\n  text-align: center;\n}\n.add-to-cart-btn {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  background:\n    linear-gradient(\n      to right,\n      #10b981,\n      #34d399);\n  color: white;\n  padding: 0.75rem 2rem;\n  border-radius: 12px;\n  border: none;\n  cursor: pointer;\n  font-weight: 600;\n  font-size: 1rem;\n  transition: all 0.3s ease;\n  box-shadow: 0 4px 6px rgba(16, 185, 129, 0.2);\n}\n.add-to-cart-btn:hover {\n  background:\n    linear-gradient(\n      to right,\n      #0ea472,\n      #10b981);\n  transform: translateY(-2px);\n  box-shadow: 0 6px 12px rgba(16, 185, 129, 0.3);\n}\n.add-to-cart-btn:active {\n  transform: translateY(0);\n}\n.cart-icon {\n  font-size: 1.2rem;\n}\n/*# sourceMappingURL=product-detail.css.map */\n";
  }
});

// src/app/product-list/product-detail/product-detail.ts
var ProductDetail;
var init_product_detail3 = __esm({
  "src/app/product-list/product-detail/product-detail.ts"() {
    "use strict";
    init_tslib_es6();
    init_product_detail();
    init_product_detail2();
    init_core();
    init_router();
    init_http();
    init_cart_ser();
    init_common();
    init_product_ser();
    ProductDetail = class ProductDetail2 {
      route;
      productService;
      cartService;
      product;
      quantity = 1;
      loading = true;
      constructor(route, productService, cartService) {
        this.route = route;
        this.productService = productService;
        this.cartService = cartService;
      }
      ngOnInit() {
        const id = this.route.snapshot.paramMap.get("id");
        if (id) {
          this.productService.getProductById(id).subscribe({
            next: (data) => {
              this.product = data;
              this.loading = false;
            },
            error: (err) => {
              console.error("Error loading product", err);
              this.loading = false;
            }
          });
        }
      }
      addToCart() {
        if (this.product) {
          this.cartService.addToCart(this.product, this.quantity);
        }
      }
      increaseQuantity() {
        this.quantity++;
      }
      decreaseQuantity() {
        if (this.quantity > 1) {
          this.quantity--;
        }
      }
      static ctorParameters = () => [
        { type: ActivatedRoute },
        { type: ProductSer },
        { type: CartSer }
      ];
    };
    ProductDetail = __decorate([
      Component({
        selector: "app-product-detail",
        imports: [
          CurrencyPipe,
          HttpClientModule,
          CommonModule
        ],
        template: product_detail_default,
        styles: [product_detail_default2]
      })
    ], ProductDetail);
  }
});

// src/app/product-list/product-detail/product-detail.spec.ts
var require_product_detail_spec = __commonJS({
  "src/app/product-list/product-detail/product-detail.spec.ts"(exports) {
    init_testing();
    init_product_detail3();
    describe("ProductDetail", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [ProductDetail]
        }).compileComponents();
        fixture = TestBed.createComponent(ProductDetail);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_product_detail_spec();
//# sourceMappingURL=spec-product-detail.spec.js.map
