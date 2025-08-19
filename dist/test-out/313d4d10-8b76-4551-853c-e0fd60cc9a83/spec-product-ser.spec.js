import {
  ProductSer,
  init_product_ser
} from "./chunk-GULJYGED.js";
import "./chunk-X7DDXPCD.js";
import "./chunk-MIZUV7DD.js";
import {
  TestBed,
  init_testing
} from "./chunk-2QKALPMJ.js";
import "./chunk-6I5JEFX5.js";
import "./chunk-HBW54YOI.js";

// src/app/service/product-ser.spec.ts
init_testing();
init_product_ser();
describe("ProductSer", () => {
  let service;
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductSer);
  });
  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
//# sourceMappingURL=spec-product-ser.spec.js.map
