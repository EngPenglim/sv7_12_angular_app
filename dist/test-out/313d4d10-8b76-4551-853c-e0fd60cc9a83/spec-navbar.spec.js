import {
  Navbar,
  init_navbar
} from "./chunk-D425VVDH.js";
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

// src/app/navbar/navbar.spec.ts
var require_navbar_spec = __commonJS({
  "src/app/navbar/navbar.spec.ts"(exports) {
    init_testing();
    init_navbar();
    describe("Navbar", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [Navbar]
        }).compileComponents();
        fixture = TestBed.createComponent(Navbar);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_navbar_spec();
//# sourceMappingURL=spec-navbar.spec.js.map
