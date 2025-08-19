import {
  ToKHRPipe,
  init_to_khr_pipe
} from "./chunk-BWLTJUVQ.js";
import {
  Router,
  RouterLink,
  init_router
} from "./chunk-W3QIJK6B.js";
import {
  CartSer,
  init_cart_ser
} from "./chunk-JXB4A4HJ.js";
import {
  CurrencyPipe,
  init_common
} from "./chunk-OUYGEWHZ.js";
import {
  Component,
  Input,
  __decorate,
  init_core,
  init_tslib_es6
} from "./chunk-6I5JEFX5.js";
import {
  __esm
} from "./chunk-HBW54YOI.js";

// angular:jit:template:src\app\product-list\product-card\product-card.html
var product_card_default;
var init_product_card = __esm({
  "angular:jit:template:src\\app\\product-list\\product-card\\product-card.html"() {
    product_card_default = `<div class="product-card" [routerLink]="['/product', product.id]">\r
  <div class="category-label">\r
    <span>{{product.category}}</span>\r
  </div>\r
\r
  <div class="image-container">\r
    <img [src]="product.image" class="product-image">\r
  </div>\r
  \r
  <h1 class="product-title">{{product.title}}</h1>\r
  \r
  <div class="price-box">\r
    <p>{{product.price | currency}} or {{product.price | toKHR}}</p>\r
  </div>\r
  \r
  <p class="product-description">{{product.description}}</p>\r
\r
  <button class="add-cart-btn"\r
          (click)="addProductToCart(); $event.stopPropagation()">\r
    Add To Cart\r
  </button>\r
</div>`;
  }
});

// angular:jit:style:src\app\product-list\product-card\product-card.css
var product_card_default2;
var init_product_card2 = __esm({
  "angular:jit:style:src\\app\\product-list\\product-card\\product-card.css"() {
    product_card_default2 = "/* src/app/product-list/product-card/product-card.css */\n.product-card {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background: #ffffff;\n  border-radius: 12px;\n  padding: 24px;\n  margin: 16px;\n  width: 280px;\n  min-height: 420px;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  overflow: hidden;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);\n  border: 1px solid #f0f0f0;\n}\n.product-card:hover {\n  transform: translateY(-4px);\n  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.08);\n}\n.category-label {\n  position: absolute;\n  top: 16px;\n  left: 16px;\n  background: rgba(255, 255, 255, 0.9);\n  -webkit-backdrop-filter: blur(4px);\n  backdrop-filter: blur(4px);\n  padding: 4px 12px;\n  border-radius: 12px;\n  color: #444;\n  font-size: 12px;\n  font-weight: 500;\n  border: 1px solid #f0f0f0;\n}\n.image-container {\n  width: 200px;\n  height: 240px;\n  overflow: hidden;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 16px;\n  background: #fafafa;\n}\n.product-image {\n  width: 100%;\n  height: 100%;\n  object-fit: contain;\n  transition: transform 0.4s ease;\n}\n.product-card:hover .product-image {\n  transform: scale(1.08);\n}\n.product-title {\n  font-size: 15px;\n  font-weight: 600;\n  text-align: center;\n  margin: 8px 0;\n  color: #222;\n  width: 100%;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.price-box p {\n  background: #f8f8f8;\n  padding: 6px 14px;\n  border-radius: 16px;\n  font-weight: 600;\n  font-size: 14px;\n  color: #333;\n  margin: 8px 0;\n}\n.product-description {\n  text-align: center;\n  font-size: 13px;\n  color: #666;\n  line-height: 1.5;\n  margin: 8px 0 16px;\n  display: -webkit-box;\n  -webkit-line-clamp: 3;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n.add-cart-btn {\n  background: #000;\n  border: none;\n  border-radius: 20px;\n  padding: 10px 24px;\n  margin-top: 8px;\n  font-weight: 500;\n  font-size: 14px;\n  color: #fff;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  width: 80%;\n}\n.add-cart-btn:hover {\n  background: #333;\n  transform: translateY(-2px);\n}\n/*# sourceMappingURL=product-card.css.map */\n";
  }
});

// src/app/product-list/product-card/product-card.ts
var ProductCard;
var init_product_card3 = __esm({
  "src/app/product-list/product-card/product-card.ts"() {
    "use strict";
    init_tslib_es6();
    init_product_card();
    init_product_card2();
    init_core();
    init_common();
    init_to_khr_pipe();
    init_cart_ser();
    init_router();
    ProductCard = class ProductCard2 {
      cartService;
      router;
      product;
      constructor(cartService, router) {
        this.cartService = cartService;
        this.router = router;
      }
      addProductToCart() {
        this.cartService.addToCart(this.product);
      }
      goToDetail() {
        this.router.navigate(["/products", this.product.id]);
      }
      static ctorParameters = () => [
        { type: CartSer },
        { type: Router }
      ];
      static propDecorators = {
        product: [{ type: Input }]
      };
    };
    ProductCard = __decorate([
      Component({
        selector: "app-product-card",
        imports: [
          CurrencyPipe,
          ToKHRPipe,
          RouterLink
        ],
        template: product_card_default,
        styles: [product_card_default2]
      })
    ], ProductCard);
  }
});

export {
  ProductCard,
  init_product_card3 as init_product_card
};
//# sourceMappingURL=chunk-TF5V5Z6V.js.map
