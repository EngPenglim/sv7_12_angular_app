import {
  ProductCard,
  init_product_card
} from "./chunk-TF5V5Z6V.js";
import "./chunk-BWLTJUVQ.js";
import "./chunk-W3QIJK6B.js";
import "./chunk-X7DDXPCD.js";
import "./chunk-HNQ5KY3Y.js";
import "./chunk-JXB4A4HJ.js";
import "./chunk-OUYGEWHZ.js";
import "./chunk-MIZUV7DD.js";
import {
  TestBed,
  init_testing
} from "./chunk-2QKALPMJ.js";
import "./chunk-6I5JEFX5.js";
import {
  __async,
  __commonJS
} from "./chunk-HBW54YOI.js";

// src/app/product-list/product-card/product-card.spec.ts
var require_product_card_spec = __commonJS({
  "src/app/product-list/product-card/product-card.spec.ts"(exports) {
    init_testing();
    init_product_card();
    describe("ProductCard", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [ProductCard]
        }).compileComponents();
        fixture = TestBed.createComponent(ProductCard);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_product_card_spec();
//# sourceMappingURL=spec-product-card.spec.js.map
