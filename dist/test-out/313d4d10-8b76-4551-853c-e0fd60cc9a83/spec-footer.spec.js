import {
  Footer,
  init_footer
} from "./chunk-G4I4B5V6.js";
import {
  TestBed,
  init_testing
} from "./chunk-2QKALPMJ.js";
import "./chunk-6I5JEFX5.js";
import {
  __async,
  __commonJS
} from "./chunk-HBW54YOI.js";

// src/app/footer/footer.spec.ts
var require_footer_spec = __commonJS({
  "src/app/footer/footer.spec.ts"(exports) {
    init_testing();
    init_footer();
    describe("Footer", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [Footer]
        }).compileComponents();
        fixture = TestBed.createComponent(Footer);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_footer_spec();
//# sourceMappingURL=spec-footer.spec.js.map
