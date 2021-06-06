(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"], {
    /***/
    "1nQK":
    /*!**********************************************************************************!*\
      !*** ./node_modules/angular-morris-js/__ivy_ngcc__/esm2015/angular-morris-js.js ***!
      \**********************************************************************************/

    /*! exports provided: MorrisChartDirective, MorrisJsModule */

    /***/
    function nQK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MorrisChartDirective", function () {
        return MorrisChartDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MorrisJsModule", function () {
        return MorrisJsModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var MorrisChartDirective = /*#__PURE__*/function () {
        function MorrisChartDirective(elementRef, ngZone) {
          _classCallCheck(this, MorrisChartDirective);

          this.elementRef = elementRef;
          this.ngZone = ngZone;
          this.window = window;
          this.type = 'Line';
          this.clickChart = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        }

        _createClass(MorrisChartDirective, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this._options = Object.assign({}, this.options);
            this._options.element = this.elementRef.nativeElement;
            this._options.data = this.data;
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            var _this = this;

            if (!this.window.Morris) {
              throw new Error('Please include node_modules/morris.js/morris.js');
            } else {
              this.ngZone.runOutsideAngular(function () {
                _this.chartInstance = new _this.window.Morris[_this.type](_this._options);

                _this.chartInstance.on('click', function (i, row) {
                  _this.clickChart.emit({
                    event: event,
                    i: i,
                    row: row
                  });
                });
              });
            }
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            if (changes["data"] && !changes["data"].firstChange || changes["options"] && !changes["options"].firstChange) {
              Object.assign(this.chartInstance.options, this.options);
              this.chartInstance.setData(this.data);
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            if (this.chartInstance.el.empty instanceof Function) {
              this.chartInstance.el.empty();
            }
          }
        }]);

        return MorrisChartDirective;
      }();

      MorrisChartDirective.ɵfac = function MorrisChartDirective_Factory(t) {
        return new (t || MorrisChartDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]));
      };

      MorrisChartDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: MorrisChartDirective,
        selectors: [["", "mk-morris-js", ""]],
        inputs: {
          type: "type",
          options: "options",
          data: "data"
        },
        outputs: {
          clickChart: "clickChart"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]]
      });

      MorrisChartDirective.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
        }];
      };

      MorrisChartDirective.propDecorators = {
        "type": [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        "options": [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        "data": [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        "clickChart": [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MorrisChartDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: '[mk-morris-js]'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
          }];
        }, {
          type: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          clickChart: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          options: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          data: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();

      var MorrisJsModule = function MorrisJsModule() {
        _classCallCheck(this, MorrisJsModule);
      };

      MorrisJsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: MorrisJsModule
      });
      MorrisJsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function MorrisJsModule_Factory(t) {
          return new (t || MorrisJsModule)();
        }
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MorrisJsModule, {
          declarations: [MorrisChartDirective],
          exports: [MorrisChartDirective]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MorrisJsModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [MorrisChartDirective],
            exports: [MorrisChartDirective]
          }]
        }], null, null);
      })(); //# sourceMappingURL=angular-morris-js.js.map

      /***/

    }
  }]);
})();
//# sourceMappingURL=common-es5.js.map