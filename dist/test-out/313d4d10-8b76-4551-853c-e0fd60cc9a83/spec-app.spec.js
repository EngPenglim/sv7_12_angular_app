import {
  Footer,
  init_footer
} from "./chunk-G4I4B5V6.js";
import {
  Navbar,
  init_navbar
} from "./chunk-D425VVDH.js";
import {
  RouterOutlet,
  init_router
} from "./chunk-W3QIJK6B.js";
import {
  HttpClientModule,
  init_http
} from "./chunk-X7DDXPCD.js";
import "./chunk-HNQ5KY3Y.js";
import "./chunk-JXB4A4HJ.js";
import "./chunk-OUYGEWHZ.js";
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

// angular:jit:template:src\app\app.html
var app_default;
var init_app = __esm({
  "angular:jit:template:src\\app\\app.html"() {
    app_default = "<app-navbar/>\r\n<router-outlet/>\r\n<app-footer/>";
  }
});

// angular:jit:style:src\app\app.css
var app_default2;
var init_app2 = __esm({
  "angular:jit:style:src\\app\\app.css"() {
    app_default2 = "/* src/app/app.css */\n* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n/*# sourceMappingURL=app.css.map */\n";
  }
});

// src/app/app.ts
var App;
var init_app3 = __esm({
  "src/app/app.ts"() {
    "use strict";
    init_tslib_es6();
    init_app();
    init_app2();
    init_core();
    init_router();
    init_navbar();
    init_http();
    init_footer();
    App = class App2 {
    };
    App = __decorate([
      Component({
        selector: "app-root",
        imports: [
          RouterOutlet,
          Navbar,
          HttpClientModule,
          Footer
        ],
        template: app_default,
        styles: [app_default2]
      })
    ], App);
  }
});

// src/app/app.spec.ts
var require_app_spec = __commonJS({
  "src/app/app.spec.ts"(exports) {
    init_testing();
    init_app3();
    describe("App", () => {
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [App]
        }).compileComponents();
      }));
      it("should create the app", () => {
        const fixture = TestBed.createComponent(App);
        const app = fixture.componentInstance;
        expect(app).toBeTruthy();
      });
      it("should render title", () => {
        const fixture = TestBed.createComponent(App);
        fixture.detectChanges();
        const compiled = fixture.nativeElement;
        expect(compiled.querySelector("h1")?.textContent).toContain("Hello, inputdata");
      });
    });
  }
});
export default require_app_spec();
//# sourceMappingURL=spec-app.spec.js.map
