(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "1nQK":
/*!**********************************************************************************!*\
  !*** ./node_modules/angular-morris-js/__ivy_ngcc__/esm2015/angular-morris-js.js ***!
  \**********************************************************************************/
/*! exports provided: MorrisChartDirective, MorrisJsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MorrisChartDirective", function() { return MorrisChartDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MorrisJsModule", function() { return MorrisJsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");



class MorrisChartDirective {
    constructor(elementRef, ngZone) {
        this.elementRef = elementRef;
        this.ngZone = ngZone;
        this.window = window;
        this.type = 'Line';
        this.clickChart = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
        this._options = Object.assign({}, this.options);
        this._options.element = this.elementRef.nativeElement;
        this._options.data = this.data;
    }
    ngAfterViewInit() {
        if (!this.window.Morris) {
            throw new Error('Please include node_modules/morris.js/morris.js');
        }
        else {
            this.ngZone.runOutsideAngular(() => {
                this.chartInstance = new this.window.Morris[this.type](this._options);
                this.chartInstance.on('click', (i, row) => {
                    this.clickChart.emit({ event, i, row });
                });
            });
        }
    }
    ngOnChanges(changes) {
        if ((changes["data"] && !changes["data"].firstChange) || (changes["options"] && !changes["options"].firstChange)) {
            Object.assign(this.chartInstance.options, this.options);
            this.chartInstance.setData(this.data);
        }
    }
    ngOnDestroy() {
        if (this.chartInstance.el.empty instanceof Function) {
            this.chartInstance.el.empty();
        }
    }
}
MorrisChartDirective.ɵfac = function MorrisChartDirective_Factory(t) { return new (t || MorrisChartDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"])); };
MorrisChartDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: MorrisChartDirective, selectors: [["", "mk-morris-js", ""]], inputs: { type: "type", options: "options", data: "data" }, outputs: { clickChart: "clickChart" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]] });
MorrisChartDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], },
];
MorrisChartDirective.propDecorators = {
    "type": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    "options": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    "data": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    "clickChart": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MorrisChartDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[mk-morris-js]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }]; }, { type: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], clickChart: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], options: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], data: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();

class MorrisJsModule {
}
MorrisJsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MorrisJsModule });
MorrisJsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MorrisJsModule_Factory(t) { return new (t || MorrisJsModule)(); } });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MorrisJsModule, { declarations: [MorrisChartDirective], exports: [MorrisChartDirective] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MorrisJsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [MorrisChartDirective],
                exports: [MorrisChartDirective]
            }]
    }], null, null); })();



//# sourceMappingURL=angular-morris-js.js.map

/***/ })

}]);
//# sourceMappingURL=common-es2015.js.map