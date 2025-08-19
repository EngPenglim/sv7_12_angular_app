import {
  HttpClient,
  init_http
} from "./chunk-X7DDXPCD.js";
import {
  Injectable,
  __decorate,
  init_core,
  init_tslib_es6
} from "./chunk-6I5JEFX5.js";
import {
  __esm
} from "./chunk-HBW54YOI.js";

// src/app/service/product-ser.ts
var ProductSer;
var init_product_ser = __esm({
  "src/app/service/product-ser.ts"() {
    "use strict";
    init_tslib_es6();
    init_core();
    init_http();
    ProductSer = class ProductSer2 {
      http;
      apiUrl = "https://fakestoreapi.com/products";
      constructor(http) {
        this.http = http;
      }
      getProducts() {
        return this.http.get(this.apiUrl);
      }
      getProductById(id) {
        return this.http.get(`https://fakestoreapi.com/products/${id}`);
      }
      static ctorParameters = () => [
        { type: HttpClient }
      ];
    };
    ProductSer = __decorate([
      Injectable({
        providedIn: "root"
      })
    ], ProductSer);
  }
});

export {
  ProductSer,
  init_product_ser
};
//# sourceMappingURL=chunk-GULJYGED.js.map
