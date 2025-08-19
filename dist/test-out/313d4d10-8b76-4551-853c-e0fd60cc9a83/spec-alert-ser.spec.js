import {
  require_sweetalert2_all
} from "./chunk-T7O4ZBWL.js";
import {
  TestBed,
  init_testing
} from "./chunk-2QKALPMJ.js";
import {
  Injectable,
  __decorate,
  init_core,
  init_tslib_es6
} from "./chunk-6I5JEFX5.js";
import {
  __toESM
} from "./chunk-HBW54YOI.js";

// src/app/service/alert-ser.spec.ts
init_testing();

// src/app/service/alert-ser.ts
init_tslib_es6();
init_core();
var import_sweetalert2 = __toESM(require_sweetalert2_all());
var AlertService = class AlertService2 {
  // Success Alert
  success(title, message) {
    return import_sweetalert2.default.fire({
      icon: "success",
      title,
      text: message,
      confirmButtonColor: "#3085d6"
    });
  }
  // Error Alert
  error(title, message) {
    return import_sweetalert2.default.fire({
      icon: "error",
      title,
      text: message,
      confirmButtonColor: "#d33"
    });
  }
  // Warning Alert
  warning(title, message) {
    return import_sweetalert2.default.fire({
      icon: "warning",
      title,
      text: message,
      confirmButtonColor: "#ffc107"
    });
  }
};
AlertService = __decorate([
  Injectable({
    providedIn: "root"
    // Makes it available app-wide
  })
], AlertService);

// src/app/service/alert-ser.spec.ts
describe("AlertService", () => {
  let service;
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlertService);
  });
  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
//# sourceMappingURL=spec-alert-ser.spec.js.map
