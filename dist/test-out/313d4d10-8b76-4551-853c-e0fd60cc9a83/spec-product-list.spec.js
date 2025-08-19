import {
  ProductCard,
  init_product_card
} from "./chunk-TF5V5Z6V.js";
import {
  ProductSer,
  init_product_ser
} from "./chunk-GULJYGED.js";
import "./chunk-BWLTJUVQ.js";
import "./chunk-W3QIJK6B.js";
import "./chunk-X7DDXPCD.js";
import "./chunk-HNQ5KY3Y.js";
import "./chunk-JXB4A4HJ.js";
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

// angular:jit:template:src\app\product-list\product-list.html
var product_list_default;
var init_product_list = __esm({
  "angular:jit:template:src\\app\\product-list\\product-list.html"() {
    product_list_default = '<div *ngIf="loading">Loading products...</div>\r\n\r\n<div *ngIf="!loading" class="product-grid">\r\n  <app-product-card\r\n    *ngFor="let item of products; trackBy: trackById"\r\n    [product]="item">\r\n  </app-product-card>\r\n</div>\r\n';
  }
});

// angular:jit:style:src\app\product-list\product-list.css
var product_list_default2;
var init_product_list2 = __esm({
  "angular:jit:style:src\\app\\product-list\\product-list.css"() {
    product_list_default2 = '/* src/app/product-list/product-list.css */\n.product-grid {\n  font-family:\n    "Segoe UI",\n    Tahoma,\n    Geneva,\n    Verdana,\n    sans-serif;\n  display: grid;\n  gap: 10px;\n  padding: 16px;\n  justify-items: center;\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n}\n[ngIf=loading] {\n  font-size: 16px;\n  font-weight: 500;\n  text-align: center;\n  margin: 20px 0;\n}\n/*# sourceMappingURL=product-list.css.map */\n';
  }
});

// src/app/product-list/product-list.ts
var ProductList;
var init_product_list3 = __esm({
  "src/app/product-list/product-list.ts"() {
    "use strict";
    init_tslib_es6();
    init_product_list();
    init_product_list2();
    init_core();
    init_product_card();
    init_product_ser();
    init_common();
    ProductList = class ProductList2 {
      productService;
      products = [];
      loading = true;
      constructor(productService) {
        this.productService = productService;
      }
      ngOnInit() {
        this.productService.getProducts().subscribe({
          next: (data) => {
            this.products = data;
            this.loading = false;
          },
          error: (err) => {
            console.error("Error fetching products:", err);
            this.loading = false;
          }
        });
      }
      trackById(index, item) {
        return item.id;
      }
      static ctorParameters = () => [
        { type: ProductSer }
      ];
    };
    ProductList = __decorate([
      Component({
        selector: "app-product-list",
        imports: [
          ProductCard,
          CommonModule
        ],
        template: product_list_default,
        styles: [product_list_default2]
      })
    ], ProductList);
  }
});

// src/app/product-list/product-list.spec.ts
var require_product_list_spec = __commonJS({
  "src/app/product-list/product-list.spec.ts"(exports) {
    init_testing();
    init_product_list3();
    describe("ProductList", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [ProductList]
        }).compileComponents();
        fixture = TestBed.createComponent(ProductList);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_product_list_spec();
//# sourceMappingURL=spec-product-list.spec.js.map
