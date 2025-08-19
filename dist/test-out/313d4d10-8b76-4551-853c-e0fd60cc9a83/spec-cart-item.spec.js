import {
  CartSer,
  init_cart_ser
} from "./chunk-JXB4A4HJ.js";
import {
  TestBed,
  init_testing
} from "./chunk-2QKALPMJ.js";
import "./chunk-6I5JEFX5.js";
import "./chunk-HBW54YOI.js";

// src/app/service/cart-item.spec.ts
init_testing();
init_cart_ser();
describe("CartSer", () => {
  let service;
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CartSer);
  });
  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
//# sourceMappingURL=spec-cart-item.spec.js.map
