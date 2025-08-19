import {
  Pipe,
  __decorate,
  init_core,
  init_tslib_es6
} from "./chunk-6I5JEFX5.js";
import {
  __esm
} from "./chunk-HBW54YOI.js";

// src/app/custom-pipe/to-khr-pipe.ts
var ToKHRPipe;
var init_to_khr_pipe = __esm({
  "src/app/custom-pipe/to-khr-pipe.ts"() {
    "use strict";
    init_tslib_es6();
    init_core();
    ToKHRPipe = class ToKHRPipe2 {
      transform(amount) {
        let res = amount * 4100;
        let roundPrice = Math.round(res / 100) * 100;
        let local_res = roundPrice.toLocaleString() + " \u17DB";
        return local_res;
      }
    };
    ToKHRPipe = __decorate([
      Pipe({
        name: "toKHR"
      })
    ], ToKHRPipe);
  }
});

export {
  ToKHRPipe,
  init_to_khr_pipe
};
//# sourceMappingURL=chunk-BWLTJUVQ.js.map
