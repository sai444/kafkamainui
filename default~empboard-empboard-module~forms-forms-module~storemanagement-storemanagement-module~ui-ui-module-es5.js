(function () {
  function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

  function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~empboard-empboard-module~forms-forms-module~storemanagement-storemanagement-module~ui-ui-module"], {
    /***/
    "/1cH":
    /*!******************************************************************************!*\
      !*** ./node_modules/@angular/material/__ivy_ngcc__/fesm2015/autocomplete.js ***!
      \******************************************************************************/

    /*! exports provided: AUTOCOMPLETE_OPTION_HEIGHT, AUTOCOMPLETE_PANEL_HEIGHT, MAT_AUTOCOMPLETE_DEFAULT_OPTIONS, MAT_AUTOCOMPLETE_DEFAULT_OPTIONS_FACTORY, MAT_AUTOCOMPLETE_SCROLL_STRATEGY, MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY, MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY_PROVIDER, MAT_AUTOCOMPLETE_VALUE_ACCESSOR, MatAutocomplete, MatAutocompleteModule, MatAutocompleteOrigin, MatAutocompleteSelectedEvent, MatAutocompleteTrigger, _MatAutocompleteBase, _MatAutocompleteOriginBase, _MatAutocompleteTriggerBase, getMatAutocompleteMissingPanelError */

    /***/
    function cH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AUTOCOMPLETE_OPTION_HEIGHT", function () {
        return AUTOCOMPLETE_OPTION_HEIGHT;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AUTOCOMPLETE_PANEL_HEIGHT", function () {
        return AUTOCOMPLETE_PANEL_HEIGHT;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_AUTOCOMPLETE_DEFAULT_OPTIONS", function () {
        return MAT_AUTOCOMPLETE_DEFAULT_OPTIONS;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_AUTOCOMPLETE_DEFAULT_OPTIONS_FACTORY", function () {
        return MAT_AUTOCOMPLETE_DEFAULT_OPTIONS_FACTORY;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_AUTOCOMPLETE_SCROLL_STRATEGY", function () {
        return MAT_AUTOCOMPLETE_SCROLL_STRATEGY;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY", function () {
        return MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY_PROVIDER", function () {
        return MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY_PROVIDER;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_AUTOCOMPLETE_VALUE_ACCESSOR", function () {
        return MAT_AUTOCOMPLETE_VALUE_ACCESSOR;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatAutocomplete", function () {
        return MatAutocomplete;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatAutocompleteModule", function () {
        return MatAutocompleteModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatAutocompleteOrigin", function () {
        return MatAutocompleteOrigin;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatAutocompleteSelectedEvent", function () {
        return MatAutocompleteSelectedEvent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatAutocompleteTrigger", function () {
        return MatAutocompleteTrigger;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "_MatAutocompleteBase", function () {
        return _MatAutocompleteBase;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "_MatAutocompleteOriginBase", function () {
        return _MatAutocompleteOriginBase;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "_MatAutocompleteTriggerBase", function () {
        return _MatAutocompleteTriggerBase;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getMatAutocompleteMissingPanelError", function () {
        return getMatAutocompleteMissingPanelError;
      });
      /* harmony import */


      var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/cdk/a11y */
      "u47x");
      /* harmony import */


      var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/cdk/coercion */
      "8LU1");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/cdk/overlay */
      "rDax");
      /* harmony import */


      var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/cdk/scrolling */
      "vxfF");
      /* harmony import */


      var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/cdk/bidi */
      "cH1L");
      /* harmony import */


      var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/cdk/keycodes */
      "FtGj");
      /* harmony import */


      var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/cdk/platform */
      "nLfN");
      /* harmony import */


      var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/cdk/portal */
      "+rOU");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Autocomplete IDs need to be unique across components, so this counter exists outside of
       * the component definition.
       */


      var _c0 = ["panel"];

      function MatAutocomplete_ng_template_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("id", ctx_r0.id)("ngClass", ctx_r0._classList);
        }
      }

      var _c1 = ["*"];
      var _uniqueAutocompleteIdCounter = 0;
      /** Event object that is emitted when an autocomplete option is selected. */

      var MatAutocompleteSelectedEvent = function MatAutocompleteSelectedEvent(
      /** Reference to the autocomplete panel that emitted the event. */
      source,
      /** Option that was selected. */
      option) {
        _classCallCheck(this, MatAutocompleteSelectedEvent);

        this.source = source;
        this.option = option;
      }; // Boilerplate for applying mixins to MatAutocomplete.

      /** @docs-private */


      var MatAutocompleteBase = function MatAutocompleteBase() {
        _classCallCheck(this, MatAutocompleteBase);
      };

      var _MatAutocompleteMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_3__["mixinDisableRipple"])(MatAutocompleteBase);
      /** Injection token to be used to override the default options for `mat-autocomplete`. */


      var MAT_AUTOCOMPLETE_DEFAULT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["InjectionToken"]('mat-autocomplete-default-options', {
        providedIn: 'root',
        factory: MAT_AUTOCOMPLETE_DEFAULT_OPTIONS_FACTORY
      });
      /** @docs-private */

      function MAT_AUTOCOMPLETE_DEFAULT_OPTIONS_FACTORY() {
        return {
          autoActiveFirstOption: false
        };
      }
      /** Base class with all of the `MatAutocomplete` functionality. */


      var _MatAutocompleteBase = /*#__PURE__*/function (_MatAutocompleteMixin) {
        _inherits(_MatAutocompleteBase, _MatAutocompleteMixin);

        var _super = _createSuper(_MatAutocompleteBase);

        function _MatAutocompleteBase(_changeDetectorRef, _elementRef, defaults) {
          var _this;

          _classCallCheck(this, _MatAutocompleteBase);

          _this = _super.call(this);
          _this._changeDetectorRef = _changeDetectorRef;
          _this._elementRef = _elementRef;
          _this._activeOptionChanges = rxjs__WEBPACK_IMPORTED_MODULE_4__["Subscription"].EMPTY;
          /** Whether the autocomplete panel should be visible, depending on option length. */

          _this.showPanel = false;
          _this._isOpen = false;
          /** Function that maps an option's control value to its display value in the trigger. */

          _this.displayWith = null;
          /** Event that is emitted whenever an option from the list is selected. */

          _this.optionSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
          /** Event that is emitted when the autocomplete panel is opened. */

          _this.opened = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
          /** Event that is emitted when the autocomplete panel is closed. */

          _this.closed = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
          /** Emits whenever an option is activated using the keyboard. */

          _this.optionActivated = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
          _this._classList = {};
          /** Unique ID to be used by autocomplete trigger's "aria-owns" property. */

          _this.id = "mat-autocomplete-".concat(_uniqueAutocompleteIdCounter++);
          _this._autoActiveFirstOption = !!defaults.autoActiveFirstOption;
          return _this;
        }
        /** Whether the autocomplete panel is open. */


        _createClass(_MatAutocompleteBase, [{
          key: "ngAfterContentInit",
          value: function ngAfterContentInit() {
            var _this2 = this;

            this._keyManager = new _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["ActiveDescendantKeyManager"](this.options).withWrap();
            this._activeOptionChanges = this._keyManager.change.subscribe(function (index) {
              _this2.optionActivated.emit({
                source: _this2,
                option: _this2.options.toArray()[index] || null
              });
            }); // Set the initial visibility state.

            this._setVisibility();
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._activeOptionChanges.unsubscribe();
          }
          /**
           * Sets the panel scrollTop. This allows us to manually scroll to display options
           * above or below the fold, as they are not actually being focused when active.
           */

        }, {
          key: "_setScrollTop",
          value: function _setScrollTop(scrollTop) {
            if (this.panel) {
              this.panel.nativeElement.scrollTop = scrollTop;
            }
          }
          /** Returns the panel's scrollTop. */

        }, {
          key: "_getScrollTop",
          value: function _getScrollTop() {
            return this.panel ? this.panel.nativeElement.scrollTop : 0;
          }
          /** Panel should hide itself when the option list is empty. */

        }, {
          key: "_setVisibility",
          value: function _setVisibility() {
            this.showPanel = !!this.options.length;

            this._setVisibilityClasses(this._classList);

            this._changeDetectorRef.markForCheck();
          }
          /** Emits the `select` event. */

        }, {
          key: "_emitSelectEvent",
          value: function _emitSelectEvent(option) {
            var event = new MatAutocompleteSelectedEvent(this, option);
            this.optionSelected.emit(event);
          }
          /** Sets the autocomplete visibility classes on a classlist based on the panel is visible. */

        }, {
          key: "_setVisibilityClasses",
          value: function _setVisibilityClasses(classList) {
            classList[this._visibleClass] = this.showPanel;
            classList[this._hiddenClass] = !this.showPanel;
          }
        }, {
          key: "isOpen",
          get: function get() {
            return this._isOpen && this.showPanel;
          }
          /**
           * Whether the first option should be highlighted when the autocomplete panel is opened.
           * Can be configured globally through the `MAT_AUTOCOMPLETE_DEFAULT_OPTIONS` token.
           */

        }, {
          key: "autoActiveFirstOption",
          get: function get() {
            return this._autoActiveFirstOption;
          },
          set: function set(value) {
            this._autoActiveFirstOption = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(value);
          }
          /**
           * Takes classes set on the host mat-autocomplete element and applies them to the panel
           * inside the overlay container to allow for easy styling.
           */

        }, {
          key: "classList",
          set: function set(value) {
            if (value && value.length) {
              this._classList = value.split(' ').reduce(function (classList, className) {
                classList[className.trim()] = true;
                return classList;
              }, {});
            } else {
              this._classList = {};
            }

            this._setVisibilityClasses(this._classList);

            this._elementRef.nativeElement.className = '';
          }
        }]);

        return _MatAutocompleteBase;
      }(_MatAutocompleteMixinBase);

      _MatAutocompleteBase.ɵfac = function _MatAutocompleteBase_Factory(t) {
        return new (t || _MatAutocompleteBase)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](MAT_AUTOCOMPLETE_DEFAULT_OPTIONS));
      };

      _MatAutocompleteBase.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
        type: _MatAutocompleteBase,
        viewQuery: function _MatAutocompleteBase_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstaticViewQuery"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["TemplateRef"], true);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.template = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.panel = _t.first);
          }
        },
        inputs: {
          displayWith: "displayWith",
          autoActiveFirstOption: "autoActiveFirstOption",
          classList: ["class", "classList"],
          panelWidth: "panelWidth"
        },
        outputs: {
          optionSelected: "optionSelected",
          opened: "opened",
          closed: "closed",
          optionActivated: "optionActivated"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]]
      });

      _MatAutocompleteBase.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
            args: [MAT_AUTOCOMPLETE_DEFAULT_OPTIONS]
          }]
        }];
      };

      _MatAutocompleteBase.propDecorators = {
        template: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
          args: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["TemplateRef"], {
            "static": true
          }]
        }],
        panel: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
          args: ['panel']
        }],
        displayWith: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        autoActiveFirstOption: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        panelWidth: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        optionSelected: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }],
        opened: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }],
        closed: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }],
        optionActivated: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }],
        classList: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
          args: ['class']
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](_MatAutocompleteBase, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
              args: [MAT_AUTOCOMPLETE_DEFAULT_OPTIONS]
            }]
          }];
        }, {
          displayWith: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          optionSelected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
          }],
          opened: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
          }],
          closed: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
          }],
          optionActivated: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
          }],
          autoActiveFirstOption: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          classList: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
            args: ['class']
          }],
          template: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
            args: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["TemplateRef"], {
              "static": true
            }]
          }],
          panel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
            args: ['panel']
          }],
          panelWidth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }]
        });
      })();

      var MatAutocomplete = /*#__PURE__*/function (_MatAutocompleteBase2) {
        _inherits(MatAutocomplete, _MatAutocompleteBase2);

        var _super2 = _createSuper(MatAutocomplete);

        function MatAutocomplete() {
          var _this3;

          _classCallCheck(this, MatAutocomplete);

          _this3 = _super2.apply(this, arguments);
          _this3._visibleClass = 'mat-autocomplete-visible';
          _this3._hiddenClass = 'mat-autocomplete-hidden';
          return _this3;
        }

        return MatAutocomplete;
      }(_MatAutocompleteBase);

      MatAutocomplete.ɵfac = function MatAutocomplete_Factory(t) {
        return ɵMatAutocomplete_BaseFactory(t || MatAutocomplete);
      };

      MatAutocomplete.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: MatAutocomplete,
        selectors: [["mat-autocomplete"]],
        contentQueries: function MatAutocomplete_ContentQueries(rf, ctx, dirIndex) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵcontentQuery"](dirIndex, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MAT_OPTGROUP"], true);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵcontentQuery"](dirIndex, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatOption"], true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.optionGroups = _t);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.options = _t);
          }
        },
        hostAttrs: [1, "mat-autocomplete"],
        inputs: {
          disableRipple: "disableRipple"
        },
        exportAs: ["matAutocomplete"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([{
          provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MAT_OPTION_PARENT_COMPONENT"],
          useExisting: MatAutocomplete
        }]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]],
        ngContentSelectors: _c1,
        decls: 1,
        vars: 0,
        consts: [["role", "listbox", 1, "mat-autocomplete-panel", 3, "id", "ngClass"], ["panel", ""]],
        template: function MatAutocomplete_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojectionDef"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, MatAutocomplete_ng_template_0_Template, 3, 2, "ng-template");
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"]],
        styles: [".mat-autocomplete-panel{min-width:112px;max-width:280px;overflow:auto;-webkit-overflow-scrolling:touch;visibility:hidden;max-width:none;max-height:256px;position:relative;width:100%;border-bottom-left-radius:4px;border-bottom-right-radius:4px}.mat-autocomplete-panel.mat-autocomplete-visible{visibility:visible}.mat-autocomplete-panel.mat-autocomplete-hidden{visibility:hidden}.mat-autocomplete-panel-above .mat-autocomplete-panel{border-radius:0;border-top-left-radius:4px;border-top-right-radius:4px}.mat-autocomplete-panel .mat-divider-horizontal{margin-top:-1px}.cdk-high-contrast-active .mat-autocomplete-panel{outline:solid 1px}\n"],
        encapsulation: 2,
        changeDetection: 0
      });
      MatAutocomplete.propDecorators = {
        optionGroups: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChildren"],
          args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MAT_OPTGROUP"], {
            descendants: true
          }]
        }],
        options: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChildren"],
          args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatOption"], {
            descendants: true
          }]
        }]
      };

      var ɵMatAutocomplete_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](MatAutocomplete);
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](MatAutocomplete, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
          args: [{
            selector: 'mat-autocomplete',
            template: "<ng-template>\n  <div class=\"mat-autocomplete-panel\" role=\"listbox\" [id]=\"id\" [ngClass]=\"_classList\" #panel>\n    <ng-content></ng-content>\n  </div>\n</ng-template>\n",
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewEncapsulation"].None,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush,
            exportAs: 'matAutocomplete',
            inputs: ['disableRipple'],
            host: {
              'class': 'mat-autocomplete'
            },
            providers: [{
              provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MAT_OPTION_PARENT_COMPONENT"],
              useExisting: MatAutocomplete
            }],
            styles: [".mat-autocomplete-panel{min-width:112px;max-width:280px;overflow:auto;-webkit-overflow-scrolling:touch;visibility:hidden;max-width:none;max-height:256px;position:relative;width:100%;border-bottom-left-radius:4px;border-bottom-right-radius:4px}.mat-autocomplete-panel.mat-autocomplete-visible{visibility:visible}.mat-autocomplete-panel.mat-autocomplete-hidden{visibility:hidden}.mat-autocomplete-panel-above .mat-autocomplete-panel{border-radius:0;border-top-left-radius:4px;border-top-right-radius:4px}.mat-autocomplete-panel .mat-divider-horizontal{margin-top:-1px}.cdk-high-contrast-active .mat-autocomplete-panel{outline:solid 1px}\n"]
          }]
        }], null, {
          optionGroups: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChildren"],
            args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MAT_OPTGROUP"], {
              descendants: true
            }]
          }],
          options: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChildren"],
            args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatOption"], {
              descendants: true
            }]
          }]
        });
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** Base class containing all of the functionality for `MatAutocompleteOrigin`. */


      var _MatAutocompleteOriginBase = function _MatAutocompleteOriginBase(
      /** Reference to the element on which the directive is applied. */
      elementRef) {
        _classCallCheck(this, _MatAutocompleteOriginBase);

        this.elementRef = elementRef;
      };

      _MatAutocompleteOriginBase.ɵfac = function _MatAutocompleteOriginBase_Factory(t) {
        return new (t || _MatAutocompleteOriginBase)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]));
      };

      _MatAutocompleteOriginBase.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
        type: _MatAutocompleteOriginBase
      });

      _MatAutocompleteOriginBase.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](_MatAutocompleteOriginBase, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]
          }];
        }, null);
      })();
      /**
       * Directive applied to an element to make it usable
       * as a connection point for an autocomplete panel.
       */


      var MatAutocompleteOrigin = /*#__PURE__*/function (_MatAutocompleteOrigi) {
        _inherits(MatAutocompleteOrigin, _MatAutocompleteOrigi);

        var _super3 = _createSuper(MatAutocompleteOrigin);

        function MatAutocompleteOrigin() {
          _classCallCheck(this, MatAutocompleteOrigin);

          return _super3.apply(this, arguments);
        }

        return MatAutocompleteOrigin;
      }(_MatAutocompleteOriginBase);

      MatAutocompleteOrigin.ɵfac = function MatAutocompleteOrigin_Factory(t) {
        return ɵMatAutocompleteOrigin_BaseFactory(t || MatAutocompleteOrigin);
      };

      MatAutocompleteOrigin.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
        type: MatAutocompleteOrigin,
        selectors: [["", "matAutocompleteOrigin", ""]],
        exportAs: ["matAutocompleteOrigin"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]]
      });

      var ɵMatAutocompleteOrigin_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](MatAutocompleteOrigin);
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](MatAutocompleteOrigin, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"],
          args: [{
            selector: '[matAutocompleteOrigin]',
            exportAs: 'matAutocompleteOrigin'
          }]
        }], null, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * The following style constants are necessary to save here in order
       * to properly calculate the scrollTop of the panel. Because we are not
       * actually focusing the active item, scroll must be handled manually.
       */

      /**
       * The height of each autocomplete option.
       * @deprecated No longer being used. To be removed.
       * @breaking-change 11.0.0
       */


      var AUTOCOMPLETE_OPTION_HEIGHT = 48;
      /**
       * The total height of the autocomplete panel.
       * @deprecated No longer being used. To be removed.
       * @breaking-change 11.0.0
       */

      var AUTOCOMPLETE_PANEL_HEIGHT = 256;
      /** Injection token that determines the scroll handling while the autocomplete panel is open. */

      var MAT_AUTOCOMPLETE_SCROLL_STRATEGY = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["InjectionToken"]('mat-autocomplete-scroll-strategy');
      /** @docs-private */

      function MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY(overlay) {
        return function () {
          return overlay.scrollStrategies.reposition();
        };
      }
      /** @docs-private */


      var MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY_PROVIDER = {
        provide: MAT_AUTOCOMPLETE_SCROLL_STRATEGY,
        deps: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__["Overlay"]],
        useFactory: MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY
      };
      /**
       * Provider that allows the autocomplete to register as a ControlValueAccessor.
       * @docs-private
       */

      var MAT_AUTOCOMPLETE_VALUE_ACCESSOR = {
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NG_VALUE_ACCESSOR"],
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["forwardRef"])(function () {
          return MatAutocompleteTrigger;
        }),
        multi: true
      };
      /**
       * Creates an error to be thrown when attempting to use an autocomplete trigger without a panel.
       * @docs-private
       */

      function getMatAutocompleteMissingPanelError() {
        return Error('Attempting to open an undefined instance of `mat-autocomplete`. ' + 'Make sure that the id passed to the `matAutocomplete` is correct and that ' + 'you\'re attempting to open it after the ngAfterContentInit hook.');
      }
      /** Base class with all of the `MatAutocompleteTrigger` functionality. */


      var _MatAutocompleteTriggerBase = /*#__PURE__*/function () {
        function _MatAutocompleteTriggerBase(_element, _overlay, _viewContainerRef, _zone, _changeDetectorRef, scrollStrategy, _dir, _formField, _document, _viewportRuler) {
          var _this4 = this;

          _classCallCheck(this, _MatAutocompleteTriggerBase);

          this._element = _element;
          this._overlay = _overlay;
          this._viewContainerRef = _viewContainerRef;
          this._zone = _zone;
          this._changeDetectorRef = _changeDetectorRef;
          this._dir = _dir;
          this._formField = _formField;
          this._document = _document;
          this._viewportRuler = _viewportRuler;
          this._componentDestroyed = false;
          this._autocompleteDisabled = false;
          /** Whether or not the label state is being overridden. */

          this._manuallyFloatingLabel = false;
          /** Subscription to viewport size changes. */

          this._viewportSubscription = rxjs__WEBPACK_IMPORTED_MODULE_4__["Subscription"].EMPTY;
          /**
           * Whether the autocomplete can open the next time it is focused. Used to prevent a focused,
           * closed autocomplete from being reopened if the user switches to another browser tab and then
           * comes back.
           */

          this._canOpenOnNextFocus = true;
          /** Stream of keyboard events that can close the panel. */

          this._closeKeyEventStream = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
          /**
           * Event handler for when the window is blurred. Needs to be an
           * arrow function in order to preserve the context.
           */

          this._windowBlurHandler = function () {
            // If the user blurred the window while the autocomplete is focused, it means that it'll be
            // refocused when they come back. In this case we want to skip the first focus event, if the
            // pane was closed, in order to avoid reopening it unintentionally.
            _this4._canOpenOnNextFocus = _this4._document.activeElement !== _this4._element.nativeElement || _this4.panelOpen;
          };
          /** `View -> model callback called when value changes` */


          this._onChange = function () {};
          /** `View -> model callback called when autocomplete has been touched` */


          this._onTouched = function () {};
          /**
           * Position of the autocomplete panel relative to the trigger element. A position of `auto`
           * will render the panel underneath the trigger if there is enough space for it to fit in
           * the viewport, otherwise the panel will be shown above it. If the position is set to
           * `above` or `below`, the panel will always be shown above or below the trigger. no matter
           * whether it fits completely in the viewport.
           */


          this.position = 'auto';
          /**
           * `autocomplete` attribute to be set on the input element.
           * @docs-private
           */

          this.autocompleteAttribute = 'off';
          this._overlayAttached = false;
          /** Stream of autocomplete option selections. */

          this.optionSelections = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["defer"])(function () {
            if (_this4.autocomplete && _this4.autocomplete.options) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["merge"]).apply(void 0, _toConsumableArray(_this4.autocomplete.options.map(function (option) {
                return option.onSelectionChange;
              })));
            } // If there are any subscribers before `ngAfterViewInit`, the `autocomplete` will be undefined.
            // Return a stream that we'll replace with the real one once everything is in place.


            return _this4._zone.onStable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["switchMap"])(function () {
              return _this4.optionSelections;
            }));
          });
          this._scrollStrategy = scrollStrategy;
        }
        /**
         * Whether the autocomplete is disabled. When disabled, the element will
         * act as a regular input and the user won't be able to open the panel.
         */


        _createClass(_MatAutocompleteTriggerBase, [{
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            var _this5 = this;

            var window = this._getWindow();

            if (typeof window !== 'undefined') {
              this._zone.runOutsideAngular(function () {
                return window.addEventListener('blur', _this5._windowBlurHandler);
              });
            }
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            if (changes['position'] && this._positionStrategy) {
              this._setStrategyPositions(this._positionStrategy);

              if (this.panelOpen) {
                this._overlayRef.updatePosition();
              }
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            var window = this._getWindow();

            if (typeof window !== 'undefined') {
              window.removeEventListener('blur', this._windowBlurHandler);
            }

            this._viewportSubscription.unsubscribe();

            this._componentDestroyed = true;

            this._destroyPanel();

            this._closeKeyEventStream.complete();
          }
          /** Whether or not the autocomplete panel is open. */

        }, {
          key: "openPanel",

          /** Opens the autocomplete suggestion panel. */
          value: function openPanel() {
            this._attachOverlay();

            this._floatLabel();
          }
          /** Closes the autocomplete suggestion panel. */

        }, {
          key: "closePanel",
          value: function closePanel() {
            this._resetLabel();

            if (!this._overlayAttached) {
              return;
            }

            if (this.panelOpen) {
              // Only emit if the panel was visible.
              this.autocomplete.closed.emit();
            }

            this.autocomplete._isOpen = this._overlayAttached = false;

            if (this._overlayRef && this._overlayRef.hasAttached()) {
              this._overlayRef.detach();

              this._closingActionsSubscription.unsubscribe();
            } // Note that in some cases this can end up being called after the component is destroyed.
            // Add a check to ensure that we don't try to run change detection on a destroyed view.


            if (!this._componentDestroyed) {
              // We need to trigger change detection manually, because
              // `fromEvent` doesn't seem to do it at the proper time.
              // This ensures that the label is reset when the
              // user clicks outside.
              this._changeDetectorRef.detectChanges();
            }
          }
          /**
           * Updates the position of the autocomplete suggestion panel to ensure that it fits all options
           * within the viewport.
           */

        }, {
          key: "updatePosition",
          value: function updatePosition() {
            if (this._overlayAttached) {
              this._overlayRef.updatePosition();
            }
          }
          /**
           * A stream of actions that should close the autocomplete panel, including
           * when an option is selected, on blur, and when TAB is pressed.
           */

        }, {
          key: "_getOutsideClickStream",

          /** Stream of clicks outside of the autocomplete panel. */
          value: function _getOutsideClickStream() {
            var _this6 = this;

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["merge"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["fromEvent"])(this._document, 'click'), Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["fromEvent"])(this._document, 'touchend')).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["filter"])(function (event) {
              // If we're in the Shadow DOM, the event target will be the shadow root, so we have to
              // fall back to check the first element in the path of the click event.
              var clickTarget = _this6._isInsideShadowRoot && event.composedPath ? event.composedPath()[0] : event.target;
              var formField = _this6._formField ? _this6._formField._elementRef.nativeElement : null;
              var customOrigin = _this6.connectedTo ? _this6.connectedTo.elementRef.nativeElement : null;
              return _this6._overlayAttached && clickTarget !== _this6._element.nativeElement && (!formField || !formField.contains(clickTarget)) && (!customOrigin || !customOrigin.contains(clickTarget)) && !!_this6._overlayRef && !_this6._overlayRef.overlayElement.contains(clickTarget);
            }));
          } // Implemented as part of ControlValueAccessor.

        }, {
          key: "writeValue",
          value: function writeValue(value) {
            var _this7 = this;

            Promise.resolve(null).then(function () {
              return _this7._setTriggerValue(value);
            });
          } // Implemented as part of ControlValueAccessor.

        }, {
          key: "registerOnChange",
          value: function registerOnChange(fn) {
            this._onChange = fn;
          } // Implemented as part of ControlValueAccessor.

        }, {
          key: "registerOnTouched",
          value: function registerOnTouched(fn) {
            this._onTouched = fn;
          } // Implemented as part of ControlValueAccessor.

        }, {
          key: "setDisabledState",
          value: function setDisabledState(isDisabled) {
            this._element.nativeElement.disabled = isDisabled;
          }
        }, {
          key: "_handleKeydown",
          value: function _handleKeydown(event) {
            var keyCode = event.keyCode; // Prevent the default action on all escape key presses. This is here primarily to bring IE
            // in line with other browsers. By default, pressing escape on IE will cause it to revert
            // the input value to the one that it had on focus, however it won't dispatch any events
            // which means that the model value will be out of sync with the view.

            if (keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_9__["ESCAPE"] && !Object(_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_9__["hasModifierKey"])(event)) {
              event.preventDefault();
            }

            if (this.activeOption && keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_9__["ENTER"] && this.panelOpen) {
              this.activeOption._selectViaInteraction();

              this._resetActiveItem();

              event.preventDefault();
            } else if (this.autocomplete) {
              var prevActiveItem = this.autocomplete._keyManager.activeItem;
              var isArrowKey = keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_9__["UP_ARROW"] || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_9__["DOWN_ARROW"];

              if (this.panelOpen || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_9__["TAB"]) {
                this.autocomplete._keyManager.onKeydown(event);
              } else if (isArrowKey && this._canOpen()) {
                this.openPanel();
              }

              if (isArrowKey || this.autocomplete._keyManager.activeItem !== prevActiveItem) {
                this._scrollToOption(this.autocomplete._keyManager.activeItemIndex || 0);
              }
            }
          }
        }, {
          key: "_handleInput",
          value: function _handleInput(event) {
            var target = event.target;
            var value = target.value; // Based on `NumberValueAccessor` from forms.

            if (target.type === 'number') {
              value = value == '' ? null : parseFloat(value);
            } // If the input has a placeholder, IE will fire the `input` event on page load,
            // focus and blur, in addition to when the user actually changed the value. To
            // filter out all of the extra events, we save the value on focus and between
            // `input` events, and we check whether it changed.
            // See: https://connect.microsoft.com/IE/feedback/details/885747/


            if (this._previousValue !== value) {
              this._previousValue = value;

              this._onChange(value);

              if (this._canOpen() && this._document.activeElement === event.target) {
                this.openPanel();
              }
            }
          }
        }, {
          key: "_handleFocus",
          value: function _handleFocus() {
            if (!this._canOpenOnNextFocus) {
              this._canOpenOnNextFocus = true;
            } else if (this._canOpen()) {
              this._previousValue = this._element.nativeElement.value;

              this._attachOverlay();

              this._floatLabel(true);
            }
          }
          /**
           * In "auto" mode, the label will animate down as soon as focus is lost.
           * This causes the value to jump when selecting an option with the mouse.
           * This method manually floats the label until the panel can be closed.
           * @param shouldAnimate Whether the label should be animated when it is floated.
           */

        }, {
          key: "_floatLabel",
          value: function _floatLabel() {
            var shouldAnimate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

            if (this._formField && this._formField.floatLabel === 'auto') {
              if (shouldAnimate) {
                this._formField._animateAndLockLabel();
              } else {
                this._formField.floatLabel = 'always';
              }

              this._manuallyFloatingLabel = true;
            }
          }
          /** If the label has been manually elevated, return it to its normal state. */

        }, {
          key: "_resetLabel",
          value: function _resetLabel() {
            if (this._manuallyFloatingLabel) {
              this._formField.floatLabel = 'auto';
              this._manuallyFloatingLabel = false;
            }
          }
          /**
           * This method listens to a stream of panel closing actions and resets the
           * stream every time the option list changes.
           */

        }, {
          key: "_subscribeToClosingActions",
          value: function _subscribeToClosingActions() {
            var _this8 = this;

            var firstStable = this._zone.onStable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["take"])(1));

            var optionChanges = this.autocomplete.options.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["tap"])(function () {
              return _this8._positionStrategy.reapplyLastPosition();
            }), // Defer emitting to the stream until the next tick, because changing
            // bindings in here will cause "changed after checked" errors.
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["delay"])(0)); // When the zone is stable initially, and when the option list changes...

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["merge"])(firstStable, optionChanges).pipe( // create a new stream of panelClosingActions, replacing any previous streams
            // that were created, and flatten it so our stream only emits closing events...
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["switchMap"])(function () {
              var wasOpen = _this8.panelOpen;

              _this8._resetActiveItem();

              _this8.autocomplete._setVisibility();

              if (_this8.panelOpen) {
                _this8._overlayRef.updatePosition(); // If the `panelOpen` state changed, we need to make sure to emit the `opened`
                // event, because we may not have emitted it when the panel was attached. This
                // can happen if the users opens the panel and there are no options, but the
                // options come in slightly later or as a result of the value changing.


                if (wasOpen !== _this8.panelOpen) {
                  _this8.autocomplete.opened.emit();
                }
              }

              return _this8.panelClosingActions;
            }), // when the first closing event occurs...
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["take"])(1)) // set the value, close the panel, and complete.
            .subscribe(function (event) {
              return _this8._setValueAndClose(event);
            });
          }
          /** Destroys the autocomplete suggestion panel. */

        }, {
          key: "_destroyPanel",
          value: function _destroyPanel() {
            if (this._overlayRef) {
              this.closePanel();

              this._overlayRef.dispose();

              this._overlayRef = null;
            }
          }
        }, {
          key: "_setTriggerValue",
          value: function _setTriggerValue(value) {
            var toDisplay = this.autocomplete && this.autocomplete.displayWith ? this.autocomplete.displayWith(value) : value; // Simply falling back to an empty string if the display value is falsy does not work properly.
            // The display value can also be the number zero and shouldn't fall back to an empty string.

            var inputValue = toDisplay != null ? toDisplay : ''; // If it's used within a `MatFormField`, we should set it through the property so it can go
            // through change detection.

            if (this._formField) {
              this._formField._control.value = inputValue;
            } else {
              this._element.nativeElement.value = inputValue;
            }

            this._previousValue = inputValue;
          }
          /**
           * This method closes the panel, and if a value is specified, also sets the associated
           * control to that value. It will also mark the control as dirty if this interaction
           * stemmed from the user.
           */

        }, {
          key: "_setValueAndClose",
          value: function _setValueAndClose(event) {
            if (event && event.source) {
              this._clearPreviousSelectedOption(event.source);

              this._setTriggerValue(event.source.value);

              this._onChange(event.source.value);

              this._element.nativeElement.focus();

              this.autocomplete._emitSelectEvent(event.source);
            }

            this.closePanel();
          }
          /**
           * Clear any previous selected option and emit a selection change event for this option
           */

        }, {
          key: "_clearPreviousSelectedOption",
          value: function _clearPreviousSelectedOption(skip) {
            this.autocomplete.options.forEach(function (option) {
              if (option !== skip && option.selected) {
                option.deselect();
              }
            });
          }
        }, {
          key: "_attachOverlay",
          value: function _attachOverlay() {
            var _this9 = this;

            if (!this.autocomplete && (typeof ngDevMode === 'undefined' || ngDevMode)) {
              throw getMatAutocompleteMissingPanelError();
            } // We want to resolve this once, as late as possible so that we can be
            // sure that the element has been moved into its final place in the DOM.


            if (this._isInsideShadowRoot == null) {
              this._isInsideShadowRoot = !!Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_10__["_getShadowRoot"])(this._element.nativeElement);
            }

            var overlayRef = this._overlayRef;

            if (!overlayRef) {
              this._portal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_11__["TemplatePortal"](this.autocomplete.template, this._viewContainerRef);
              overlayRef = this._overlay.create(this._getOverlayConfig());
              this._overlayRef = overlayRef; // Use the `keydownEvents` in order to take advantage of
              // the overlay event targeting provided by the CDK overlay.

              overlayRef.keydownEvents().subscribe(function (event) {
                // Close when pressing ESCAPE or ALT + UP_ARROW, based on the a11y guidelines.
                // See: https://www.w3.org/TR/wai-aria-practices-1.1/#textbox-keyboard-interaction
                if (event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_9__["ESCAPE"] && !Object(_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_9__["hasModifierKey"])(event) || event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_9__["UP_ARROW"] && Object(_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_9__["hasModifierKey"])(event, 'altKey')) {
                  _this9._resetActiveItem();

                  _this9._closeKeyEventStream.next(); // We need to stop propagation, otherwise the event will eventually
                  // reach the input itself and cause the overlay to be reopened.


                  event.stopPropagation();
                  event.preventDefault();
                }
              });
              this._viewportSubscription = this._viewportRuler.change().subscribe(function () {
                if (_this9.panelOpen && overlayRef) {
                  overlayRef.updateSize({
                    width: _this9._getPanelWidth()
                  });
                }
              });
            } else {
              // Update the trigger, panel width and direction, in case anything has changed.
              this._positionStrategy.setOrigin(this._getConnectedElement());

              overlayRef.updateSize({
                width: this._getPanelWidth()
              });
            }

            if (overlayRef && !overlayRef.hasAttached()) {
              overlayRef.attach(this._portal);
              this._closingActionsSubscription = this._subscribeToClosingActions();
            }

            var wasOpen = this.panelOpen;

            this.autocomplete._setVisibility();

            this.autocomplete._isOpen = this._overlayAttached = true; // We need to do an extra `panelOpen` check in here, because the
            // autocomplete won't be shown if there are no options.

            if (this.panelOpen && wasOpen !== this.panelOpen) {
              this.autocomplete.opened.emit();
            }
          }
        }, {
          key: "_getOverlayConfig",
          value: function _getOverlayConfig() {
            return new _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__["OverlayConfig"]({
              positionStrategy: this._getOverlayPosition(),
              scrollStrategy: this._scrollStrategy(),
              width: this._getPanelWidth(),
              direction: this._dir
            });
          }
        }, {
          key: "_getOverlayPosition",
          value: function _getOverlayPosition() {
            var strategy = this._overlay.position().flexibleConnectedTo(this._getConnectedElement()).withFlexibleDimensions(false).withPush(false);

            this._setStrategyPositions(strategy);

            this._positionStrategy = strategy;
            return strategy;
          }
          /** Sets the positions on a position strategy based on the directive's input state. */

        }, {
          key: "_setStrategyPositions",
          value: function _setStrategyPositions(positionStrategy) {
            // Note that we provide horizontal fallback positions, even though by default the dropdown
            // width matches the input, because consumers can override the width. See #18854.
            var belowPositions = [{
              originX: 'start',
              originY: 'bottom',
              overlayX: 'start',
              overlayY: 'top'
            }, {
              originX: 'end',
              originY: 'bottom',
              overlayX: 'end',
              overlayY: 'top'
            }]; // The overlay edge connected to the trigger should have squared corners, while
            // the opposite end has rounded corners. We apply a CSS class to swap the
            // border-radius based on the overlay position.

            var panelClass = this._aboveClass;
            var abovePositions = [{
              originX: 'start',
              originY: 'top',
              overlayX: 'start',
              overlayY: 'bottom',
              panelClass: panelClass
            }, {
              originX: 'end',
              originY: 'top',
              overlayX: 'end',
              overlayY: 'bottom',
              panelClass: panelClass
            }];
            var positions;

            if (this.position === 'above') {
              positions = abovePositions;
            } else if (this.position === 'below') {
              positions = belowPositions;
            } else {
              positions = [].concat(belowPositions, abovePositions);
            }

            positionStrategy.withPositions(positions);
          }
        }, {
          key: "_getConnectedElement",
          value: function _getConnectedElement() {
            if (this.connectedTo) {
              return this.connectedTo.elementRef;
            }

            return this._formField ? this._formField.getConnectedOverlayOrigin() : this._element;
          }
        }, {
          key: "_getPanelWidth",
          value: function _getPanelWidth() {
            return this.autocomplete.panelWidth || this._getHostWidth();
          }
          /** Returns the width of the input element, so the panel width can match it. */

        }, {
          key: "_getHostWidth",
          value: function _getHostWidth() {
            return this._getConnectedElement().nativeElement.getBoundingClientRect().width;
          }
          /**
           * Resets the active item to -1 so arrow events will activate the
           * correct options, or to 0 if the consumer opted into it.
           */

        }, {
          key: "_resetActiveItem",
          value: function _resetActiveItem() {
            this.autocomplete._keyManager.setActiveItem(this.autocomplete.autoActiveFirstOption ? 0 : -1);
          }
          /** Determines whether the panel can be opened. */

        }, {
          key: "_canOpen",
          value: function _canOpen() {
            var element = this._element.nativeElement;
            return !element.readOnly && !element.disabled && !this._autocompleteDisabled;
          }
          /** Use defaultView of injected document if available or fallback to global window reference */

        }, {
          key: "_getWindow",
          value: function _getWindow() {
            var _a;

            return ((_a = this._document) === null || _a === void 0 ? void 0 : _a.defaultView) || window;
          }
          /** Scrolls to a particular option in the list. */

        }, {
          key: "_scrollToOption",
          value: function _scrollToOption(index) {
            // Given that we are not actually focusing active options, we must manually adjust scroll
            // to reveal options below the fold. First, we find the offset of the option from the top
            // of the panel. If that offset is below the fold, the new scrollTop will be the offset -
            // the panel height + the option height, so the active option will be just visible at the
            // bottom of the panel. If that offset is above the top of the visible panel, the new scrollTop
            // will become the offset. If that offset is visible within the panel already, the scrollTop is
            // not adjusted.
            var autocomplete = this.autocomplete;
            var labelCount = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_3__["_countGroupLabelsBeforeOption"])(index, autocomplete.options, autocomplete.optionGroups);

            if (index === 0 && labelCount === 1) {
              // If we've got one group label before the option and we're at the top option,
              // scroll the list to the top. This is better UX than scrolling the list to the
              // top of the option, because it allows the user to read the top group's label.
              autocomplete._setScrollTop(0);
            } else {
              var option = autocomplete.options.toArray()[index];

              if (option) {
                var element = option._getHostElement();

                var newScrollPosition = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_3__["_getOptionScrollPosition"])(element.offsetTop, element.offsetHeight, autocomplete._getScrollTop(), autocomplete.panel.nativeElement.offsetHeight);

                autocomplete._setScrollTop(newScrollPosition);
              }
            }
          }
        }, {
          key: "autocompleteDisabled",
          get: function get() {
            return this._autocompleteDisabled;
          },
          set: function set(value) {
            this._autocompleteDisabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(value);
          }
        }, {
          key: "panelOpen",
          get: function get() {
            return this._overlayAttached && this.autocomplete.showPanel;
          }
        }, {
          key: "panelClosingActions",
          get: function get() {
            var _this10 = this;

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["merge"])(this.optionSelections, this.autocomplete._keyManager.tabOut.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["filter"])(function () {
              return _this10._overlayAttached;
            })), this._closeKeyEventStream, this._getOutsideClickStream(), this._overlayRef ? this._overlayRef.detachments().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["filter"])(function () {
              return _this10._overlayAttached;
            })) : Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])()).pipe( // Normalize the output so we return a consistent type.
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["map"])(function (event) {
              return event instanceof _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatOptionSelectionChange"] ? event : null;
            }));
          }
          /** The currently active option, coerced to MatOption type. */

        }, {
          key: "activeOption",
          get: function get() {
            if (this.autocomplete && this.autocomplete._keyManager) {
              return this.autocomplete._keyManager.activeItem;
            }

            return null;
          }
        }]);

        return _MatAutocompleteTriggerBase;
      }();

      _MatAutocompleteTriggerBase.ɵfac = function _MatAutocompleteTriggerBase_Factory(t) {
        return new (t || _MatAutocompleteTriggerBase)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__["Overlay"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](MAT_AUTOCOMPLETE_SCROLL_STRATEGY), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__["Directionality"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MAT_FORM_FIELD"], 9), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_7__["ViewportRuler"]));
      };

      _MatAutocompleteTriggerBase.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
        type: _MatAutocompleteTriggerBase,
        inputs: {
          position: ["matAutocompletePosition", "position"],
          autocompleteAttribute: ["autocomplete", "autocompleteAttribute"],
          autocompleteDisabled: ["matAutocompleteDisabled", "autocompleteDisabled"],
          autocomplete: ["matAutocomplete", "autocomplete"],
          connectedTo: ["matAutocompleteConnectedTo", "connectedTo"]
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]]
      });

      _MatAutocompleteTriggerBase.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]
        }, {
          type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__["Overlay"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewContainerRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
            args: [MAT_AUTOCOMPLETE_SCROLL_STRATEGY]
          }]
        }, {
          type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__["Directionality"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
          }]
        }, {
          type: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormField"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
            args: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MAT_FORM_FIELD"]]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Host"]
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"]]
          }]
        }, {
          type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_7__["ViewportRuler"]
        }];
      };

      _MatAutocompleteTriggerBase.propDecorators = {
        autocomplete: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
          args: ['matAutocomplete']
        }],
        position: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
          args: ['matAutocompletePosition']
        }],
        connectedTo: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
          args: ['matAutocompleteConnectedTo']
        }],
        autocompleteAttribute: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
          args: ['autocomplete']
        }],
        autocompleteDisabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
          args: ['matAutocompleteDisabled']
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](_MatAutocompleteTriggerBase, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]
          }, {
            type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__["Overlay"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewContainerRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
              args: [MAT_AUTOCOMPLETE_SCROLL_STRATEGY]
            }]
          }, {
            type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__["Directionality"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
            }]
          }, {
            type: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormField"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
              args: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MAT_FORM_FIELD"]]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Host"]
            }]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
              args: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"]]
            }]
          }, {
            type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_7__["ViewportRuler"]
          }];
        }, {
          position: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
            args: ['matAutocompletePosition']
          }],
          autocompleteAttribute: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
            args: ['autocomplete']
          }],
          autocompleteDisabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
            args: ['matAutocompleteDisabled']
          }],
          autocomplete: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
            args: ['matAutocomplete']
          }],
          connectedTo: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
            args: ['matAutocompleteConnectedTo']
          }]
        });
      })();

      var MatAutocompleteTrigger = /*#__PURE__*/function (_MatAutocompleteTrigg) {
        _inherits(MatAutocompleteTrigger, _MatAutocompleteTrigg);

        var _super4 = _createSuper(MatAutocompleteTrigger);

        function MatAutocompleteTrigger() {
          var _this11;

          _classCallCheck(this, MatAutocompleteTrigger);

          _this11 = _super4.apply(this, arguments);
          _this11._aboveClass = 'mat-autocomplete-panel-above';
          return _this11;
        }

        return MatAutocompleteTrigger;
      }(_MatAutocompleteTriggerBase);

      MatAutocompleteTrigger.ɵfac = function MatAutocompleteTrigger_Factory(t) {
        return ɵMatAutocompleteTrigger_BaseFactory(t || MatAutocompleteTrigger);
      };

      MatAutocompleteTrigger.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
        type: MatAutocompleteTrigger,
        selectors: [["input", "matAutocomplete", ""], ["textarea", "matAutocomplete", ""]],
        hostAttrs: [1, "mat-autocomplete-trigger"],
        hostVars: 7,
        hostBindings: function MatAutocompleteTrigger_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("focusin", function MatAutocompleteTrigger_focusin_HostBindingHandler() {
              return ctx._handleFocus();
            })("blur", function MatAutocompleteTrigger_blur_HostBindingHandler() {
              return ctx._onTouched();
            })("input", function MatAutocompleteTrigger_input_HostBindingHandler($event) {
              return ctx._handleInput($event);
            })("keydown", function MatAutocompleteTrigger_keydown_HostBindingHandler($event) {
              return ctx._handleKeydown($event);
            });
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("autocomplete", ctx.autocompleteAttribute)("role", ctx.autocompleteDisabled ? null : "combobox")("aria-autocomplete", ctx.autocompleteDisabled ? null : "list")("aria-activedescendant", ctx.panelOpen && ctx.activeOption ? ctx.activeOption.id : null)("aria-expanded", ctx.autocompleteDisabled ? null : ctx.panelOpen.toString())("aria-owns", ctx.autocompleteDisabled || !ctx.panelOpen ? null : ctx.autocomplete == null ? null : ctx.autocomplete.id)("aria-haspopup", !ctx.autocompleteDisabled);
          }
        },
        exportAs: ["matAutocompleteTrigger"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([MAT_AUTOCOMPLETE_VALUE_ACCESSOR]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]]
      });

      var ɵMatAutocompleteTrigger_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](MatAutocompleteTrigger);
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](MatAutocompleteTrigger, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"],
          args: [{
            selector: "input[matAutocomplete], textarea[matAutocomplete]",
            host: {
              'class': 'mat-autocomplete-trigger',
              '[attr.autocomplete]': 'autocompleteAttribute',
              '[attr.role]': 'autocompleteDisabled ? null : "combobox"',
              '[attr.aria-autocomplete]': 'autocompleteDisabled ? null : "list"',
              '[attr.aria-activedescendant]': '(panelOpen && activeOption) ? activeOption.id : null',
              '[attr.aria-expanded]': 'autocompleteDisabled ? null : panelOpen.toString()',
              '[attr.aria-owns]': '(autocompleteDisabled || !panelOpen) ? null : autocomplete?.id',
              '[attr.aria-haspopup]': '!autocompleteDisabled',
              // Note: we use `focusin`, as opposed to `focus`, in order to open the panel
              // a little earlier. This avoids issues where IE delays the focusing of the input.
              '(focusin)': '_handleFocus()',
              '(blur)': '_onTouched()',
              '(input)': '_handleInput($event)',
              '(keydown)': '_handleKeydown($event)'
            },
            exportAs: 'matAutocompleteTrigger',
            providers: [MAT_AUTOCOMPLETE_VALUE_ACCESSOR]
          }]
        }], null, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var MatAutocompleteModule = function MatAutocompleteModule() {
        _classCallCheck(this, MatAutocompleteModule);
      };

      MatAutocompleteModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: MatAutocompleteModule
      });
      MatAutocompleteModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        factory: function MatAutocompleteModule_Factory(t) {
          return new (t || MatAutocompleteModule)();
        },
        providers: [MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY_PROVIDER],
        imports: [[_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__["OverlayModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatOptionModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatCommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"]], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_7__["CdkScrollableModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatOptionModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatCommonModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](MatAutocompleteModule, {
          declarations: function declarations() {
            return [MatAutocomplete, MatAutocompleteTrigger, MatAutocompleteOrigin];
          },
          imports: function imports() {
            return [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__["OverlayModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatOptionModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatCommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"]];
          },
          exports: function exports() {
            return [MatAutocomplete, MatAutocompleteTrigger, MatAutocompleteOrigin, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_7__["CdkScrollableModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatOptionModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatCommonModule"]];
          }
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](MatAutocompleteModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
          args: [{
            imports: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__["OverlayModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatOptionModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatCommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"]],
            exports: [MatAutocomplete, MatAutocompleteTrigger, MatAutocompleteOrigin, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_7__["CdkScrollableModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatOptionModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatCommonModule"]],
            declarations: [MatAutocomplete, MatAutocompleteTrigger, MatAutocompleteOrigin],
            providers: [MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY_PROVIDER]
          }]
        }], null, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Generated bundle index. Do not edit.
       */
      //# sourceMappingURL=autocomplete.js.map

      /***/

    },

    /***/
    "5RNC":
    /*!************************************************************************!*\
      !*** ./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slider.js ***!
      \************************************************************************/

    /*! exports provided: MAT_SLIDER_VALUE_ACCESSOR, MatSlider, MatSliderChange, MatSliderModule */

    /***/
    function RNC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_SLIDER_VALUE_ACCESSOR", function () {
        return MAT_SLIDER_VALUE_ACCESSOR;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatSlider", function () {
        return MatSlider;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatSliderChange", function () {
        return MatSliderChange;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatSliderModule", function () {
        return MatSliderModule;
      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");
      /* harmony import */


      var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/cdk/a11y */
      "u47x");
      /* harmony import */


      var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/cdk/bidi */
      "cH1L");
      /* harmony import */


      var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/cdk/coercion */
      "8LU1");
      /* harmony import */


      var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/cdk/keycodes */
      "FtGj");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "R1ws");
      /* harmony import */


      var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/cdk/platform */
      "nLfN");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var _c0 = ["sliderWrapper"];
      var activeEventOptions = Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__["normalizePassiveListenerOptions"])({
        passive: false
      });
      /**
       * Visually, a 30px separation between tick marks looks best. This is very subjective but it is
       * the default separation we chose.
       */

      var MIN_AUTO_TICK_SEPARATION = 30;
      /** The thumb gap size for a disabled slider. */

      var DISABLED_THUMB_GAP = 7;
      /** The thumb gap size for a non-active slider at its minimum value. */

      var MIN_VALUE_NONACTIVE_THUMB_GAP = 7;
      /** The thumb gap size for an active slider at its minimum value. */

      var MIN_VALUE_ACTIVE_THUMB_GAP = 10;
      /**
       * Provider Expression that allows mat-slider to register as a ControlValueAccessor.
       * This allows it to support [(ngModel)] and [formControl].
       * @docs-private
       */

      var MAT_SLIDER_VALUE_ACCESSOR = {
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NG_VALUE_ACCESSOR"],
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () {
          return MatSlider;
        }),
        multi: true
      };
      /** A simple change event emitted by the MatSlider component. */

      var MatSliderChange = function MatSliderChange() {
        _classCallCheck(this, MatSliderChange);
      }; // Boilerplate for applying mixins to MatSlider.

      /** @docs-private */


      var MatSliderBase = function MatSliderBase(_elementRef) {
        _classCallCheck(this, MatSliderBase);

        this._elementRef = _elementRef;
      };

      var _MatSliderMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["mixinTabIndex"])(Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["mixinColor"])(Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["mixinDisabled"])(MatSliderBase), 'accent'));
      /**
       * Allows users to select from a range of values by moving the slider thumb. It is similar in
       * behavior to the native `<input type="range">` element.
       */


      var MatSlider = /*#__PURE__*/function (_MatSliderMixinBase2) {
        _inherits(MatSlider, _MatSliderMixinBase2);

        var _super5 = _createSuper(MatSlider);

        function MatSlider(elementRef, _focusMonitor, _changeDetectorRef, _dir, tabIndex, _ngZone, _document, _animationMode) {
          var _this12;

          _classCallCheck(this, MatSlider);

          _this12 = _super5.call(this, elementRef);
          _this12._focusMonitor = _focusMonitor;
          _this12._changeDetectorRef = _changeDetectorRef;
          _this12._dir = _dir;
          _this12._ngZone = _ngZone;
          _this12._animationMode = _animationMode;
          _this12._invert = false;
          _this12._max = 100;
          _this12._min = 0;
          _this12._step = 1;
          _this12._thumbLabel = false;
          _this12._tickInterval = 0;
          _this12._value = null;
          _this12._vertical = false;
          /** Event emitted when the slider value has changed. */

          _this12.change = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          /** Event emitted when the slider thumb moves. */

          _this12.input = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          /**
           * Emits when the raw value of the slider changes. This is here primarily
           * to facilitate the two-way binding for the `value` input.
           * @docs-private
           */

          _this12.valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          /** onTouch function registered via registerOnTouch (ControlValueAccessor). */

          _this12.onTouched = function () {};

          _this12._percent = 0;
          /**
           * Whether or not the thumb is sliding.
           * Used to determine if there should be a transition for the thumb and fill track.
           */

          _this12._isSliding = false;
          /**
           * Whether or not the slider is active (clicked or sliding).
           * Used to shrink and grow the thumb as according to the Material Design spec.
           */

          _this12._isActive = false;
          /** The size of a tick interval as a percentage of the size of the track. */

          _this12._tickIntervalPercent = 0;
          /** The dimensions of the slider. */

          _this12._sliderDimensions = null;

          _this12._controlValueAccessorChangeFn = function () {};
          /** Subscription to the Directionality change EventEmitter. */


          _this12._dirChangeSubscription = rxjs__WEBPACK_IMPORTED_MODULE_10__["Subscription"].EMPTY;
          /** Called when the user has put their pointer down on the slider. */

          _this12._pointerDown = function (event) {
            // Don't do anything if the slider is disabled or the
            // user is using anything other than the main mouse button.
            if (_this12.disabled || _this12._isSliding || !isTouchEvent(event) && event.button !== 0) {
              return;
            }

            _this12._ngZone.run(function () {
              var oldValue = _this12.value;
              var pointerPosition = getPointerPositionOnPage(event);
              _this12._isSliding = true;
              _this12._lastPointerEvent = event;
              event.preventDefault();

              _this12._focusHostElement();

              _this12._onMouseenter(); // Simulate mouseenter in case this is a mobile device.


              _this12._bindGlobalEvents(event);

              _this12._focusHostElement();

              _this12._updateValueFromPosition(pointerPosition);

              _this12._valueOnSlideStart = oldValue; // Emit a change and input event if the value changed.

              if (oldValue != _this12.value) {
                _this12._emitInputEvent();
              }
            });
          };
          /**
           * Called when the user has moved their pointer after
           * starting to drag. Bound on the document level.
           */


          _this12._pointerMove = function (event) {
            if (_this12._isSliding) {
              // Prevent the slide from selecting anything else.
              event.preventDefault();
              var oldValue = _this12.value;
              _this12._lastPointerEvent = event;

              _this12._updateValueFromPosition(getPointerPositionOnPage(event)); // Native range elements always emit `input` events when the value changed while sliding.


              if (oldValue != _this12.value) {
                _this12._emitInputEvent();
              }
            }
          };
          /** Called when the user has lifted their pointer. Bound on the document level. */


          _this12._pointerUp = function (event) {
            if (_this12._isSliding) {
              event.preventDefault();

              _this12._removeGlobalEvents();

              _this12._isSliding = false;

              if (_this12._valueOnSlideStart != _this12.value && !_this12.disabled) {
                _this12._emitChangeEvent();
              }

              _this12._valueOnSlideStart = _this12._lastPointerEvent = null;
            }
          };
          /** Called when the window has lost focus. */


          _this12._windowBlur = function () {
            // If the window is blurred while dragging we need to stop dragging because the
            // browser won't dispatch the `mouseup` and `touchend` events anymore.
            if (_this12._lastPointerEvent) {
              _this12._pointerUp(_this12._lastPointerEvent);
            }
          };

          _this12._document = _document;
          _this12.tabIndex = parseInt(tabIndex) || 0;

          _ngZone.runOutsideAngular(function () {
            var element = elementRef.nativeElement;
            element.addEventListener('mousedown', _this12._pointerDown, activeEventOptions);
            element.addEventListener('touchstart', _this12._pointerDown, activeEventOptions);
          });

          return _this12;
        }
        /** Whether the slider is inverted. */


        _createClass(MatSlider, [{
          key: "focus",

          /** set focus to the host element */
          value: function focus(options) {
            this._focusHostElement(options);
          }
          /** blur the host element */

        }, {
          key: "blur",
          value: function blur() {
            this._blurHostElement();
          }
          /** The percentage of the slider that coincides with the value. */

        }, {
          key: "_shouldInvertAxis",

          /**
           * Whether the axis of the slider is inverted.
           * (i.e. whether moving the thumb in the positive x or y direction decreases the slider's value).
           */
          value: function _shouldInvertAxis() {
            // Standard non-inverted mode for a vertical slider should be dragging the thumb from bottom to
            // top. However from a y-axis standpoint this is inverted.
            return this.vertical ? !this.invert : this.invert;
          }
          /** Whether the slider is at its minimum value. */

        }, {
          key: "_isMinValue",
          value: function _isMinValue() {
            return this.percent === 0;
          }
          /**
           * The amount of space to leave between the slider thumb and the track fill & track background
           * elements.
           */

        }, {
          key: "_getThumbGap",
          value: function _getThumbGap() {
            if (this.disabled) {
              return DISABLED_THUMB_GAP;
            }

            if (this._isMinValue() && !this.thumbLabel) {
              return this._isActive ? MIN_VALUE_ACTIVE_THUMB_GAP : MIN_VALUE_NONACTIVE_THUMB_GAP;
            }

            return 0;
          }
          /** CSS styles for the track background element. */

        }, {
          key: "_getTrackBackgroundStyles",
          value: function _getTrackBackgroundStyles() {
            var axis = this.vertical ? 'Y' : 'X';
            var scale = this.vertical ? "1, ".concat(1 - this.percent, ", 1") : "".concat(1 - this.percent, ", 1, 1");
            var sign = this._shouldInvertMouseCoords() ? '-' : '';
            return {
              // scale3d avoids some rendering issues in Chrome. See #12071.
              transform: "translate".concat(axis, "(").concat(sign).concat(this._getThumbGap(), "px) scale3d(").concat(scale, ")")
            };
          }
          /** CSS styles for the track fill element. */

        }, {
          key: "_getTrackFillStyles",
          value: function _getTrackFillStyles() {
            var percent = this.percent;
            var axis = this.vertical ? 'Y' : 'X';
            var scale = this.vertical ? "1, ".concat(percent, ", 1") : "".concat(percent, ", 1, 1");
            var sign = this._shouldInvertMouseCoords() ? '' : '-';
            return {
              // scale3d avoids some rendering issues in Chrome. See #12071.
              transform: "translate".concat(axis, "(").concat(sign).concat(this._getThumbGap(), "px) scale3d(").concat(scale, ")"),
              // iOS Safari has a bug where it won't re-render elements which start of as `scale(0)` until
              // something forces a style recalculation on it. Since we'll end up with `scale(0)` when
              // the value of the slider is 0, we can easily get into this situation. We force a
              // recalculation by changing the element's `display` when it goes from 0 to any other value.
              display: percent === 0 ? 'none' : ''
            };
          }
          /** CSS styles for the ticks container element. */

        }, {
          key: "_getTicksContainerStyles",
          value: function _getTicksContainerStyles() {
            var axis = this.vertical ? 'Y' : 'X'; // For a horizontal slider in RTL languages we push the ticks container off the left edge
            // instead of the right edge to avoid causing a horizontal scrollbar to appear.

            var sign = !this.vertical && this._getDirection() == 'rtl' ? '' : '-';
            var offset = this._tickIntervalPercent / 2 * 100;
            return {
              'transform': "translate".concat(axis, "(").concat(sign).concat(offset, "%)")
            };
          }
          /** CSS styles for the ticks element. */

        }, {
          key: "_getTicksStyles",
          value: function _getTicksStyles() {
            var tickSize = this._tickIntervalPercent * 100;
            var backgroundSize = this.vertical ? "2px ".concat(tickSize, "%") : "".concat(tickSize, "% 2px");
            var axis = this.vertical ? 'Y' : 'X'; // Depending on the direction we pushed the ticks container, push the ticks the opposite
            // direction to re-center them but clip off the end edge. In RTL languages we need to flip the
            // ticks 180 degrees so we're really cutting off the end edge abd not the start.

            var sign = !this.vertical && this._getDirection() == 'rtl' ? '-' : '';
            var rotate = !this.vertical && this._getDirection() == 'rtl' ? ' rotate(180deg)' : '';
            var styles = {
              'backgroundSize': backgroundSize,
              // Without translateZ ticks sometimes jitter as the slider moves on Chrome & Firefox.
              'transform': "translateZ(0) translate".concat(axis, "(").concat(sign).concat(tickSize / 2, "%)").concat(rotate)
            };

            if (this._isMinValue() && this._getThumbGap()) {
              var shouldInvertAxis = this._shouldInvertAxis();

              var side;

              if (this.vertical) {
                side = shouldInvertAxis ? 'Bottom' : 'Top';
              } else {
                side = shouldInvertAxis ? 'Right' : 'Left';
              }

              styles["padding".concat(side)] = "".concat(this._getThumbGap(), "px");
            }

            return styles;
          }
        }, {
          key: "_getThumbContainerStyles",
          value: function _getThumbContainerStyles() {
            var shouldInvertAxis = this._shouldInvertAxis();

            var axis = this.vertical ? 'Y' : 'X'; // For a horizontal slider in RTL languages we push the thumb container off the left edge
            // instead of the right edge to avoid causing a horizontal scrollbar to appear.

            var invertOffset = this._getDirection() == 'rtl' && !this.vertical ? !shouldInvertAxis : shouldInvertAxis;
            var offset = (invertOffset ? this.percent : 1 - this.percent) * 100;
            return {
              'transform': "translate".concat(axis, "(-").concat(offset, "%)")
            };
          }
          /**
           * Whether mouse events should be converted to a slider position by calculating their distance
           * from the right or bottom edge of the slider as opposed to the top or left.
           */

        }, {
          key: "_shouldInvertMouseCoords",
          value: function _shouldInvertMouseCoords() {
            var shouldInvertAxis = this._shouldInvertAxis();

            return this._getDirection() == 'rtl' && !this.vertical ? !shouldInvertAxis : shouldInvertAxis;
          }
          /** The language direction for this slider element. */

        }, {
          key: "_getDirection",
          value: function _getDirection() {
            return this._dir && this._dir.value == 'rtl' ? 'rtl' : 'ltr';
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            var _this13 = this;

            this._focusMonitor.monitor(this._elementRef, true).subscribe(function (origin) {
              _this13._isActive = !!origin && origin !== 'keyboard';

              _this13._changeDetectorRef.detectChanges();
            });

            if (this._dir) {
              this._dirChangeSubscription = this._dir.change.subscribe(function () {
                _this13._changeDetectorRef.markForCheck();
              });
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            var element = this._elementRef.nativeElement;
            element.removeEventListener('mousedown', this._pointerDown, activeEventOptions);
            element.removeEventListener('touchstart', this._pointerDown, activeEventOptions);
            this._lastPointerEvent = null;

            this._removeGlobalEvents();

            this._focusMonitor.stopMonitoring(this._elementRef);

            this._dirChangeSubscription.unsubscribe();
          }
        }, {
          key: "_onMouseenter",
          value: function _onMouseenter() {
            if (this.disabled) {
              return;
            } // We save the dimensions of the slider here so we can use them to update the spacing of the
            // ticks and determine where on the slider click and slide events happen.


            this._sliderDimensions = this._getSliderDimensions();

            this._updateTickIntervalPercent();
          }
        }, {
          key: "_onFocus",
          value: function _onFocus() {
            // We save the dimensions of the slider here so we can use them to update the spacing of the
            // ticks and determine where on the slider click and slide events happen.
            this._sliderDimensions = this._getSliderDimensions();

            this._updateTickIntervalPercent();
          }
        }, {
          key: "_onBlur",
          value: function _onBlur() {
            this.onTouched();
          }
        }, {
          key: "_onKeydown",
          value: function _onKeydown(event) {
            if (this.disabled || Object(_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__["hasModifierKey"])(event)) {
              return;
            }

            var oldValue = this.value;

            switch (event.keyCode) {
              case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__["PAGE_UP"]:
                this._increment(10);

                break;

              case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__["PAGE_DOWN"]:
                this._increment(-10);

                break;

              case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__["END"]:
                this.value = this.max;
                break;

              case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__["HOME"]:
                this.value = this.min;
                break;

              case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__["LEFT_ARROW"]:
                // NOTE: For a sighted user it would make more sense that when they press an arrow key on an
                // inverted slider the thumb moves in that direction. However for a blind user, nothing
                // about the slider indicates that it is inverted. They will expect left to be decrement,
                // regardless of how it appears on the screen. For speakers ofRTL languages, they probably
                // expect left to mean increment. Therefore we flip the meaning of the side arrow keys for
                // RTL. For inverted sliders we prefer a good a11y experience to having it "look right" for
                // sighted users, therefore we do not swap the meaning.
                this._increment(this._getDirection() == 'rtl' ? 1 : -1);

                break;

              case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__["UP_ARROW"]:
                this._increment(1);

                break;

              case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__["RIGHT_ARROW"]:
                // See comment on LEFT_ARROW about the conditions under which we flip the meaning.
                this._increment(this._getDirection() == 'rtl' ? -1 : 1);

                break;

              case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__["DOWN_ARROW"]:
                this._increment(-1);

                break;

              default:
                // Return if the key is not one that we explicitly handle to avoid calling preventDefault on
                // it.
                return;
            }

            if (oldValue != this.value) {
              this._emitInputEvent();

              this._emitChangeEvent();
            }

            this._isSliding = true;
            event.preventDefault();
          }
        }, {
          key: "_onKeyup",
          value: function _onKeyup() {
            this._isSliding = false;
          }
          /** Use defaultView of injected document if available or fallback to global window reference */

        }, {
          key: "_getWindow",
          value: function _getWindow() {
            return this._document.defaultView || window;
          }
          /**
           * Binds our global move and end events. They're bound at the document level and only while
           * dragging so that the user doesn't have to keep their pointer exactly over the slider
           * as they're swiping across the screen.
           */

        }, {
          key: "_bindGlobalEvents",
          value: function _bindGlobalEvents(triggerEvent) {
            // Note that we bind the events to the `document`, because it allows us to capture
            // drag cancel events where the user's pointer is outside the browser window.
            var document = this._document;
            var isTouch = isTouchEvent(triggerEvent);
            var moveEventName = isTouch ? 'touchmove' : 'mousemove';
            var endEventName = isTouch ? 'touchend' : 'mouseup';
            document.addEventListener(moveEventName, this._pointerMove, activeEventOptions);
            document.addEventListener(endEventName, this._pointerUp, activeEventOptions);

            if (isTouch) {
              document.addEventListener('touchcancel', this._pointerUp, activeEventOptions);
            }

            var window = this._getWindow();

            if (typeof window !== 'undefined' && window) {
              window.addEventListener('blur', this._windowBlur);
            }
          }
          /** Removes any global event listeners that we may have added. */

        }, {
          key: "_removeGlobalEvents",
          value: function _removeGlobalEvents() {
            var document = this._document;
            document.removeEventListener('mousemove', this._pointerMove, activeEventOptions);
            document.removeEventListener('mouseup', this._pointerUp, activeEventOptions);
            document.removeEventListener('touchmove', this._pointerMove, activeEventOptions);
            document.removeEventListener('touchend', this._pointerUp, activeEventOptions);
            document.removeEventListener('touchcancel', this._pointerUp, activeEventOptions);

            var window = this._getWindow();

            if (typeof window !== 'undefined' && window) {
              window.removeEventListener('blur', this._windowBlur);
            }
          }
          /** Increments the slider by the given number of steps (negative number decrements). */

        }, {
          key: "_increment",
          value: function _increment(numSteps) {
            this.value = this._clamp((this.value || 0) + this.step * numSteps, this.min, this.max);
          }
          /** Calculate the new value from the new physical location. The value will always be snapped. */

        }, {
          key: "_updateValueFromPosition",
          value: function _updateValueFromPosition(pos) {
            if (!this._sliderDimensions) {
              return;
            }

            var offset = this.vertical ? this._sliderDimensions.top : this._sliderDimensions.left;
            var size = this.vertical ? this._sliderDimensions.height : this._sliderDimensions.width;
            var posComponent = this.vertical ? pos.y : pos.x; // The exact value is calculated from the event and used to find the closest snap value.

            var percent = this._clamp((posComponent - offset) / size);

            if (this._shouldInvertMouseCoords()) {
              percent = 1 - percent;
            } // Since the steps may not divide cleanly into the max value, if the user
            // slid to 0 or 100 percent, we jump to the min/max value. This approach
            // is slightly more intuitive than using `Math.ceil` below, because it
            // follows the user's pointer closer.


            if (percent === 0) {
              this.value = this.min;
            } else if (percent === 1) {
              this.value = this.max;
            } else {
              var exactValue = this._calculateValue(percent); // This calculation finds the closest step by finding the closest
              // whole number divisible by the step relative to the min.


              var closestValue = Math.round((exactValue - this.min) / this.step) * this.step + this.min; // The value needs to snap to the min and max.

              this.value = this._clamp(closestValue, this.min, this.max);
            }
          }
          /** Emits a change event if the current value is different from the last emitted value. */

        }, {
          key: "_emitChangeEvent",
          value: function _emitChangeEvent() {
            this._controlValueAccessorChangeFn(this.value);

            this.valueChange.emit(this.value);
            this.change.emit(this._createChangeEvent());
          }
          /** Emits an input event when the current value is different from the last emitted value. */

        }, {
          key: "_emitInputEvent",
          value: function _emitInputEvent() {
            this.input.emit(this._createChangeEvent());
          }
          /** Updates the amount of space between ticks as a percentage of the width of the slider. */

        }, {
          key: "_updateTickIntervalPercent",
          value: function _updateTickIntervalPercent() {
            if (!this.tickInterval || !this._sliderDimensions) {
              return;
            }

            if (this.tickInterval == 'auto') {
              var trackSize = this.vertical ? this._sliderDimensions.height : this._sliderDimensions.width;
              var pixelsPerStep = trackSize * this.step / (this.max - this.min);
              var stepsPerTick = Math.ceil(MIN_AUTO_TICK_SEPARATION / pixelsPerStep);
              var pixelsPerTick = stepsPerTick * this.step;
              this._tickIntervalPercent = pixelsPerTick / trackSize;
            } else {
              this._tickIntervalPercent = this.tickInterval * this.step / (this.max - this.min);
            }
          }
          /** Creates a slider change object from the specified value. */

        }, {
          key: "_createChangeEvent",
          value: function _createChangeEvent() {
            var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.value;
            var event = new MatSliderChange();
            event.source = this;
            event.value = value;
            return event;
          }
          /** Calculates the percentage of the slider that a value is. */

        }, {
          key: "_calculatePercentage",
          value: function _calculatePercentage(value) {
            return ((value || 0) - this.min) / (this.max - this.min);
          }
          /** Calculates the value a percentage of the slider corresponds to. */

        }, {
          key: "_calculateValue",
          value: function _calculateValue(percentage) {
            return this.min + percentage * (this.max - this.min);
          }
          /** Return a number between two numbers. */

        }, {
          key: "_clamp",
          value: function _clamp(value) {
            var min = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
            var max = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
            return Math.max(min, Math.min(value, max));
          }
          /**
           * Get the bounding client rect of the slider track element.
           * The track is used rather than the native element to ignore the extra space that the thumb can
           * take up.
           */

        }, {
          key: "_getSliderDimensions",
          value: function _getSliderDimensions() {
            return this._sliderWrapper ? this._sliderWrapper.nativeElement.getBoundingClientRect() : null;
          }
          /**
           * Focuses the native element.
           * Currently only used to allow a blur event to fire but will be used with keyboard input later.
           */

        }, {
          key: "_focusHostElement",
          value: function _focusHostElement(options) {
            this._elementRef.nativeElement.focus(options);
          }
          /** Blurs the native element. */

        }, {
          key: "_blurHostElement",
          value: function _blurHostElement() {
            this._elementRef.nativeElement.blur();
          }
          /**
           * Sets the model value. Implemented as part of ControlValueAccessor.
           * @param value
           */

        }, {
          key: "writeValue",
          value: function writeValue(value) {
            this.value = value;
          }
          /**
           * Registers a callback to be triggered when the value has changed.
           * Implemented as part of ControlValueAccessor.
           * @param fn Callback to be registered.
           */

        }, {
          key: "registerOnChange",
          value: function registerOnChange(fn) {
            this._controlValueAccessorChangeFn = fn;
          }
          /**
           * Registers a callback to be triggered when the component is touched.
           * Implemented as part of ControlValueAccessor.
           * @param fn Callback to be registered.
           */

        }, {
          key: "registerOnTouched",
          value: function registerOnTouched(fn) {
            this.onTouched = fn;
          }
          /**
           * Sets whether the component should be disabled.
           * Implemented as part of ControlValueAccessor.
           * @param isDisabled
           */

        }, {
          key: "setDisabledState",
          value: function setDisabledState(isDisabled) {
            this.disabled = isDisabled;
          }
        }, {
          key: "invert",
          get: function get() {
            return this._invert;
          },
          set: function set(value) {
            this._invert = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceBooleanProperty"])(value);
          }
          /** The maximum value that the slider can have. */

        }, {
          key: "max",
          get: function get() {
            return this._max;
          },
          set: function set(v) {
            this._max = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceNumberProperty"])(v, this._max);
            this._percent = this._calculatePercentage(this._value); // Since this also modifies the percentage, we need to let the change detection know.

            this._changeDetectorRef.markForCheck();
          }
          /** The minimum value that the slider can have. */

        }, {
          key: "min",
          get: function get() {
            return this._min;
          },
          set: function set(v) {
            this._min = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceNumberProperty"])(v, this._min); // If the value wasn't explicitly set by the user, set it to the min.

            if (this._value === null) {
              this.value = this._min;
            }

            this._percent = this._calculatePercentage(this._value); // Since this also modifies the percentage, we need to let the change detection know.

            this._changeDetectorRef.markForCheck();
          }
          /** The values at which the thumb will snap. */

        }, {
          key: "step",
          get: function get() {
            return this._step;
          },
          set: function set(v) {
            this._step = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceNumberProperty"])(v, this._step);

            if (this._step % 1 !== 0) {
              this._roundToDecimal = this._step.toString().split('.').pop().length;
            } // Since this could modify the label, we need to notify the change detection.


            this._changeDetectorRef.markForCheck();
          }
          /** Whether or not to show the thumb label. */

        }, {
          key: "thumbLabel",
          get: function get() {
            return this._thumbLabel;
          },
          set: function set(value) {
            this._thumbLabel = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceBooleanProperty"])(value);
          }
          /**
           * How often to show ticks. Relative to the step so that a tick always appears on a step.
           * Ex: Tick interval of 4 with a step of 3 will draw a tick every 4 steps (every 12 values).
           */

        }, {
          key: "tickInterval",
          get: function get() {
            return this._tickInterval;
          },
          set: function set(value) {
            if (value === 'auto') {
              this._tickInterval = 'auto';
            } else if (typeof value === 'number' || typeof value === 'string') {
              this._tickInterval = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceNumberProperty"])(value, this._tickInterval);
            } else {
              this._tickInterval = 0;
            }
          }
          /** Value of the slider. */

        }, {
          key: "value",
          get: function get() {
            // If the value needs to be read and it is still uninitialized, initialize it to the min.
            if (this._value === null) {
              this.value = this._min;
            }

            return this._value;
          },
          set: function set(v) {
            if (v !== this._value) {
              var value = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceNumberProperty"])(v); // While incrementing by a decimal we can end up with values like 33.300000000000004.
              // Truncate it to ensure that it matches the label and to make it easier to work with.

              if (this._roundToDecimal) {
                value = parseFloat(value.toFixed(this._roundToDecimal));
              }

              this._value = value;
              this._percent = this._calculatePercentage(this._value); // Since this also modifies the percentage, we need to let the change detection know.

              this._changeDetectorRef.markForCheck();
            }
          }
          /** Whether the slider is vertical. */

        }, {
          key: "vertical",
          get: function get() {
            return this._vertical;
          },
          set: function set(value) {
            this._vertical = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceBooleanProperty"])(value);
          }
          /** The value to be used for display purposes. */

        }, {
          key: "displayValue",
          get: function get() {
            if (this.displayWith) {
              // Value is never null but since setters and getters cannot have
              // different types, the value getter is also typed to return null.
              return this.displayWith(this.value);
            } // Note that this could be improved further by rounding something like 0.999 to 1 or
            // 0.899 to 0.9, however it is very performance sensitive, because it gets called on
            // every change detection cycle.


            if (this._roundToDecimal && this.value && this.value % 1 !== 0) {
              return this.value.toFixed(this._roundToDecimal);
            }

            return this.value || 0;
          }
        }, {
          key: "percent",
          get: function get() {
            return this._clamp(this._percent);
          }
        }]);

        return MatSlider;
      }(_MatSliderMixinBase);

      MatSlider.ɵfac = function MatSlider_Factory(t) {
        return new (t || MatSlider)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__["FocusMonitor"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__["Directionality"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinjectAttribute"]('tabindex'), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["ANIMATION_MODULE_TYPE"], 8));
      };

      MatSlider.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: MatSlider,
        selectors: [["mat-slider"]],
        viewQuery: function MatSlider_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx._sliderWrapper = _t.first);
          }
        },
        hostAttrs: ["role", "slider", 1, "mat-slider", "mat-focus-indicator"],
        hostVars: 28,
        hostBindings: function MatSlider_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("focus", function MatSlider_focus_HostBindingHandler() {
              return ctx._onFocus();
            })("blur", function MatSlider_blur_HostBindingHandler() {
              return ctx._onBlur();
            })("keydown", function MatSlider_keydown_HostBindingHandler($event) {
              return ctx._onKeydown($event);
            })("keyup", function MatSlider_keyup_HostBindingHandler() {
              return ctx._onKeyup();
            })("mouseenter", function MatSlider_mouseenter_HostBindingHandler() {
              return ctx._onMouseenter();
            })("selectstart", function MatSlider_selectstart_HostBindingHandler($event) {
              return $event.preventDefault();
            });
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵhostProperty"]("tabIndex", ctx.tabIndex);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-disabled", ctx.disabled)("aria-valuemax", ctx.max)("aria-valuemin", ctx.min)("aria-valuenow", ctx.value)("aria-orientation", ctx.vertical ? "vertical" : "horizontal");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("mat-slider-disabled", ctx.disabled)("mat-slider-has-ticks", ctx.tickInterval)("mat-slider-horizontal", !ctx.vertical)("mat-slider-axis-inverted", ctx._shouldInvertAxis())("mat-slider-invert-mouse-coords", ctx._shouldInvertMouseCoords())("mat-slider-sliding", ctx._isSliding)("mat-slider-thumb-label-showing", ctx.thumbLabel)("mat-slider-vertical", ctx.vertical)("mat-slider-min-value", ctx._isMinValue())("mat-slider-hide-last-tick", ctx.disabled || ctx._isMinValue() && ctx._getThumbGap() && ctx._shouldInvertAxis())("_mat-animation-noopable", ctx._animationMode === "NoopAnimations");
          }
        },
        inputs: {
          disabled: "disabled",
          color: "color",
          tabIndex: "tabIndex",
          invert: "invert",
          max: "max",
          min: "min",
          value: "value",
          step: "step",
          thumbLabel: "thumbLabel",
          tickInterval: "tickInterval",
          vertical: "vertical",
          displayWith: "displayWith"
        },
        outputs: {
          change: "change",
          input: "input",
          valueChange: "valueChange"
        },
        exportAs: ["matSlider"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([MAT_SLIDER_VALUE_ACCESSOR]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
        decls: 13,
        vars: 6,
        consts: [[1, "mat-slider-wrapper"], ["sliderWrapper", ""], [1, "mat-slider-track-wrapper"], [1, "mat-slider-track-background", 3, "ngStyle"], [1, "mat-slider-track-fill", 3, "ngStyle"], [1, "mat-slider-ticks-container", 3, "ngStyle"], [1, "mat-slider-ticks", 3, "ngStyle"], [1, "mat-slider-thumb-container", 3, "ngStyle"], [1, "mat-slider-focus-ring"], [1, "mat-slider-thumb"], [1, "mat-slider-thumb-label"], [1, "mat-slider-thumb-label-text"]],
        template: function MatSlider_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "span", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", ctx._getTrackBackgroundStyles());

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", ctx._getTrackFillStyles());

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", ctx._getTicksContainerStyles());

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", ctx._getTicksStyles());

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", ctx._getThumbContainerStyles());

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.displayValue);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["NgStyle"]],
        styles: [".mat-slider{display:inline-block;position:relative;box-sizing:border-box;padding:8px;outline:none;vertical-align:middle}.mat-slider:not(.mat-slider-disabled):active,.mat-slider.mat-slider-sliding:not(.mat-slider-disabled){cursor:-webkit-grabbing;cursor:grabbing}.mat-slider-wrapper{position:absolute}.mat-slider-track-wrapper{position:absolute;top:0;left:0;overflow:hidden}.mat-slider-track-fill{position:absolute;transform-origin:0 0;transition:transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1),background-color 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-slider-track-background{position:absolute;transform-origin:100% 100%;transition:transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1),background-color 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-slider-ticks-container{position:absolute;left:0;top:0;overflow:hidden}.mat-slider-ticks{background-repeat:repeat;background-clip:content-box;box-sizing:border-box;opacity:0;transition:opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-slider-thumb-container{position:absolute;z-index:1;transition:transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-slider-focus-ring{position:absolute;width:30px;height:30px;border-radius:50%;transform:scale(0);opacity:0;transition:transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1),background-color 400ms cubic-bezier(0.25, 0.8, 0.25, 1),opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-slider.cdk-keyboard-focused .mat-slider-focus-ring,.mat-slider.cdk-program-focused .mat-slider-focus-ring{transform:scale(1);opacity:1}.mat-slider:not(.mat-slider-disabled):not(.mat-slider-sliding) .mat-slider-thumb-label,.mat-slider:not(.mat-slider-disabled):not(.mat-slider-sliding) .mat-slider-thumb{cursor:-webkit-grab;cursor:grab}.mat-slider-thumb{position:absolute;right:-10px;bottom:-10px;box-sizing:border-box;width:20px;height:20px;border:3px solid transparent;border-radius:50%;transform:scale(0.7);transition:transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1),background-color 400ms cubic-bezier(0.25, 0.8, 0.25, 1),border-color 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-slider-thumb-label{display:none;align-items:center;justify-content:center;position:absolute;width:28px;height:28px;border-radius:50%;transition:transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1),border-radius 400ms cubic-bezier(0.25, 0.8, 0.25, 1),background-color 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}.cdk-high-contrast-active .mat-slider-thumb-label{outline:solid 1px}.mat-slider-thumb-label-text{z-index:1;opacity:0;transition:opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-slider-sliding .mat-slider-track-fill,.mat-slider-sliding .mat-slider-track-background,.mat-slider-sliding .mat-slider-thumb-container{transition-duration:0ms}.mat-slider-has-ticks .mat-slider-wrapper::after{content:\"\";position:absolute;border-width:0;border-style:solid;opacity:0;transition:opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-slider-has-ticks.cdk-focused:not(.mat-slider-hide-last-tick) .mat-slider-wrapper::after,.mat-slider-has-ticks:hover:not(.mat-slider-hide-last-tick) .mat-slider-wrapper::after{opacity:1}.mat-slider-has-ticks.cdk-focused:not(.mat-slider-disabled) .mat-slider-ticks,.mat-slider-has-ticks:hover:not(.mat-slider-disabled) .mat-slider-ticks{opacity:1}.mat-slider-thumb-label-showing .mat-slider-focus-ring{display:none}.mat-slider-thumb-label-showing .mat-slider-thumb-label{display:flex}.mat-slider-axis-inverted .mat-slider-track-fill{transform-origin:100% 100%}.mat-slider-axis-inverted .mat-slider-track-background{transform-origin:0 0}.mat-slider:not(.mat-slider-disabled).cdk-focused.mat-slider-thumb-label-showing .mat-slider-thumb{transform:scale(0)}.mat-slider:not(.mat-slider-disabled).cdk-focused .mat-slider-thumb-label{border-radius:50% 50% 0}.mat-slider:not(.mat-slider-disabled).cdk-focused .mat-slider-thumb-label-text{opacity:1}.mat-slider:not(.mat-slider-disabled).cdk-mouse-focused .mat-slider-thumb,.mat-slider:not(.mat-slider-disabled).cdk-touch-focused .mat-slider-thumb,.mat-slider:not(.mat-slider-disabled).cdk-program-focused .mat-slider-thumb{border-width:2px;transform:scale(1)}.mat-slider-disabled .mat-slider-focus-ring{transform:scale(0);opacity:0}.mat-slider-disabled .mat-slider-thumb{border-width:4px;transform:scale(0.5)}.mat-slider-disabled .mat-slider-thumb-label{display:none}.mat-slider-horizontal{height:48px;min-width:128px}.mat-slider-horizontal .mat-slider-wrapper{height:2px;top:23px;left:8px;right:8px}.mat-slider-horizontal .mat-slider-wrapper::after{height:2px;border-left-width:2px;right:0;top:0}.mat-slider-horizontal .mat-slider-track-wrapper{height:2px;width:100%}.mat-slider-horizontal .mat-slider-track-fill{height:2px;width:100%;transform:scaleX(0)}.mat-slider-horizontal .mat-slider-track-background{height:2px;width:100%;transform:scaleX(1)}.mat-slider-horizontal .mat-slider-ticks-container{height:2px;width:100%}.cdk-high-contrast-active .mat-slider-horizontal .mat-slider-ticks-container{height:0;outline:solid 2px;top:1px}.mat-slider-horizontal .mat-slider-ticks{height:2px;width:100%}.mat-slider-horizontal .mat-slider-thumb-container{width:100%;height:0;top:50%}.mat-slider-horizontal .mat-slider-focus-ring{top:-15px;right:-15px}.mat-slider-horizontal .mat-slider-thumb-label{right:-14px;top:-40px;transform:translateY(26px) scale(0.01) rotate(45deg)}.mat-slider-horizontal .mat-slider-thumb-label-text{transform:rotate(-45deg)}.mat-slider-horizontal.cdk-focused .mat-slider-thumb-label{transform:rotate(45deg)}.cdk-high-contrast-active .mat-slider-horizontal.cdk-focused .mat-slider-thumb-label,.cdk-high-contrast-active .mat-slider-horizontal.cdk-focused .mat-slider-thumb-label-text{transform:none}.mat-slider-vertical{width:48px;min-height:128px}.mat-slider-vertical .mat-slider-wrapper{width:2px;top:8px;bottom:8px;left:23px}.mat-slider-vertical .mat-slider-wrapper::after{width:2px;border-top-width:2px;bottom:0;left:0}.mat-slider-vertical .mat-slider-track-wrapper{height:100%;width:2px}.mat-slider-vertical .mat-slider-track-fill{height:100%;width:2px;transform:scaleY(0)}.mat-slider-vertical .mat-slider-track-background{height:100%;width:2px;transform:scaleY(1)}.mat-slider-vertical .mat-slider-ticks-container{width:2px;height:100%}.cdk-high-contrast-active .mat-slider-vertical .mat-slider-ticks-container{width:0;outline:solid 2px;left:1px}.mat-slider-vertical .mat-slider-focus-ring{bottom:-15px;left:-15px}.mat-slider-vertical .mat-slider-ticks{width:2px;height:100%}.mat-slider-vertical .mat-slider-thumb-container{height:100%;width:0;left:50%}.mat-slider-vertical .mat-slider-thumb{-webkit-backface-visibility:hidden;backface-visibility:hidden}.mat-slider-vertical .mat-slider-thumb-label{bottom:-14px;left:-40px;transform:translateX(26px) scale(0.01) rotate(-45deg)}.mat-slider-vertical .mat-slider-thumb-label-text{transform:rotate(45deg)}.mat-slider-vertical.cdk-focused .mat-slider-thumb-label{transform:rotate(-45deg)}[dir=rtl] .mat-slider-wrapper::after{left:0;right:auto}[dir=rtl] .mat-slider-horizontal .mat-slider-track-fill{transform-origin:100% 100%}[dir=rtl] .mat-slider-horizontal .mat-slider-track-background{transform-origin:0 0}[dir=rtl] .mat-slider-horizontal.mat-slider-axis-inverted .mat-slider-track-fill{transform-origin:0 0}[dir=rtl] .mat-slider-horizontal.mat-slider-axis-inverted .mat-slider-track-background{transform-origin:100% 100%}.mat-slider._mat-animation-noopable .mat-slider-track-fill,.mat-slider._mat-animation-noopable .mat-slider-track-background,.mat-slider._mat-animation-noopable .mat-slider-ticks,.mat-slider._mat-animation-noopable .mat-slider-thumb-container,.mat-slider._mat-animation-noopable .mat-slider-focus-ring,.mat-slider._mat-animation-noopable .mat-slider-thumb,.mat-slider._mat-animation-noopable .mat-slider-thumb-label,.mat-slider._mat-animation-noopable .mat-slider-thumb-label-text,.mat-slider._mat-animation-noopable .mat-slider-has-ticks .mat-slider-wrapper::after{transition:none}\n"],
        encapsulation: 2,
        changeDetection: 0
      });

      MatSlider.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        }, {
          type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__["FocusMonitor"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
        }, {
          type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__["Directionality"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }]
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Attribute"],
            args: ['tabindex']
          }]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]]
          }]
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["ANIMATION_MODULE_TYPE"]]
          }]
        }];
      };

      MatSlider.propDecorators = {
        invert: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        max: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        min: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        step: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        thumbLabel: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        tickInterval: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        value: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        displayWith: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        vertical: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        change: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        input: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        valueChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        _sliderWrapper: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['sliderWrapper']
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatSlider, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'mat-slider',
            exportAs: 'matSlider',
            providers: [MAT_SLIDER_VALUE_ACCESSOR],
            host: {
              '(focus)': '_onFocus()',
              '(blur)': '_onBlur()',
              '(keydown)': '_onKeydown($event)',
              '(keyup)': '_onKeyup()',
              '(mouseenter)': '_onMouseenter()',
              // On Safari starting to slide temporarily triggers text selection mode which
              // show the wrong cursor. We prevent it by stopping the `selectstart` event.
              '(selectstart)': '$event.preventDefault()',
              'class': 'mat-slider mat-focus-indicator',
              'role': 'slider',
              '[tabIndex]': 'tabIndex',
              '[attr.aria-disabled]': 'disabled',
              '[attr.aria-valuemax]': 'max',
              '[attr.aria-valuemin]': 'min',
              '[attr.aria-valuenow]': 'value',
              '[attr.aria-orientation]': 'vertical ? "vertical" : "horizontal"',
              '[class.mat-slider-disabled]': 'disabled',
              '[class.mat-slider-has-ticks]': 'tickInterval',
              '[class.mat-slider-horizontal]': '!vertical',
              '[class.mat-slider-axis-inverted]': '_shouldInvertAxis()',
              // Class binding which is only used by the test harness as there is no other
              // way for the harness to detect if mouse coordinates need to be inverted.
              '[class.mat-slider-invert-mouse-coords]': '_shouldInvertMouseCoords()',
              '[class.mat-slider-sliding]': '_isSliding',
              '[class.mat-slider-thumb-label-showing]': 'thumbLabel',
              '[class.mat-slider-vertical]': 'vertical',
              '[class.mat-slider-min-value]': '_isMinValue()',
              '[class.mat-slider-hide-last-tick]': 'disabled || _isMinValue() && _getThumbGap() && _shouldInvertAxis()',
              '[class._mat-animation-noopable]': '_animationMode === "NoopAnimations"'
            },
            template: "<div class=\"mat-slider-wrapper\" #sliderWrapper>\n  <div class=\"mat-slider-track-wrapper\">\n    <div class=\"mat-slider-track-background\" [ngStyle]=\"_getTrackBackgroundStyles()\"></div>\n    <div class=\"mat-slider-track-fill\" [ngStyle]=\"_getTrackFillStyles()\"></div>\n  </div>\n  <div class=\"mat-slider-ticks-container\" [ngStyle]=\"_getTicksContainerStyles()\">\n    <div class=\"mat-slider-ticks\" [ngStyle]=\"_getTicksStyles()\"></div>\n  </div>\n  <div class=\"mat-slider-thumb-container\" [ngStyle]=\"_getThumbContainerStyles()\">\n    <div class=\"mat-slider-focus-ring\"></div>\n    <div class=\"mat-slider-thumb\"></div>\n    <div class=\"mat-slider-thumb-label\">\n      <span class=\"mat-slider-thumb-label-text\">{{displayValue}}</span>\n    </div>\n  </div>\n</div>\n",
            inputs: ['disabled', 'color', 'tabIndex'],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            styles: [".mat-slider{display:inline-block;position:relative;box-sizing:border-box;padding:8px;outline:none;vertical-align:middle}.mat-slider:not(.mat-slider-disabled):active,.mat-slider.mat-slider-sliding:not(.mat-slider-disabled){cursor:-webkit-grabbing;cursor:grabbing}.mat-slider-wrapper{position:absolute}.mat-slider-track-wrapper{position:absolute;top:0;left:0;overflow:hidden}.mat-slider-track-fill{position:absolute;transform-origin:0 0;transition:transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1),background-color 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-slider-track-background{position:absolute;transform-origin:100% 100%;transition:transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1),background-color 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-slider-ticks-container{position:absolute;left:0;top:0;overflow:hidden}.mat-slider-ticks{background-repeat:repeat;background-clip:content-box;box-sizing:border-box;opacity:0;transition:opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-slider-thumb-container{position:absolute;z-index:1;transition:transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-slider-focus-ring{position:absolute;width:30px;height:30px;border-radius:50%;transform:scale(0);opacity:0;transition:transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1),background-color 400ms cubic-bezier(0.25, 0.8, 0.25, 1),opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-slider.cdk-keyboard-focused .mat-slider-focus-ring,.mat-slider.cdk-program-focused .mat-slider-focus-ring{transform:scale(1);opacity:1}.mat-slider:not(.mat-slider-disabled):not(.mat-slider-sliding) .mat-slider-thumb-label,.mat-slider:not(.mat-slider-disabled):not(.mat-slider-sliding) .mat-slider-thumb{cursor:-webkit-grab;cursor:grab}.mat-slider-thumb{position:absolute;right:-10px;bottom:-10px;box-sizing:border-box;width:20px;height:20px;border:3px solid transparent;border-radius:50%;transform:scale(0.7);transition:transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1),background-color 400ms cubic-bezier(0.25, 0.8, 0.25, 1),border-color 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-slider-thumb-label{display:none;align-items:center;justify-content:center;position:absolute;width:28px;height:28px;border-radius:50%;transition:transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1),border-radius 400ms cubic-bezier(0.25, 0.8, 0.25, 1),background-color 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}.cdk-high-contrast-active .mat-slider-thumb-label{outline:solid 1px}.mat-slider-thumb-label-text{z-index:1;opacity:0;transition:opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-slider-sliding .mat-slider-track-fill,.mat-slider-sliding .mat-slider-track-background,.mat-slider-sliding .mat-slider-thumb-container{transition-duration:0ms}.mat-slider-has-ticks .mat-slider-wrapper::after{content:\"\";position:absolute;border-width:0;border-style:solid;opacity:0;transition:opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-slider-has-ticks.cdk-focused:not(.mat-slider-hide-last-tick) .mat-slider-wrapper::after,.mat-slider-has-ticks:hover:not(.mat-slider-hide-last-tick) .mat-slider-wrapper::after{opacity:1}.mat-slider-has-ticks.cdk-focused:not(.mat-slider-disabled) .mat-slider-ticks,.mat-slider-has-ticks:hover:not(.mat-slider-disabled) .mat-slider-ticks{opacity:1}.mat-slider-thumb-label-showing .mat-slider-focus-ring{display:none}.mat-slider-thumb-label-showing .mat-slider-thumb-label{display:flex}.mat-slider-axis-inverted .mat-slider-track-fill{transform-origin:100% 100%}.mat-slider-axis-inverted .mat-slider-track-background{transform-origin:0 0}.mat-slider:not(.mat-slider-disabled).cdk-focused.mat-slider-thumb-label-showing .mat-slider-thumb{transform:scale(0)}.mat-slider:not(.mat-slider-disabled).cdk-focused .mat-slider-thumb-label{border-radius:50% 50% 0}.mat-slider:not(.mat-slider-disabled).cdk-focused .mat-slider-thumb-label-text{opacity:1}.mat-slider:not(.mat-slider-disabled).cdk-mouse-focused .mat-slider-thumb,.mat-slider:not(.mat-slider-disabled).cdk-touch-focused .mat-slider-thumb,.mat-slider:not(.mat-slider-disabled).cdk-program-focused .mat-slider-thumb{border-width:2px;transform:scale(1)}.mat-slider-disabled .mat-slider-focus-ring{transform:scale(0);opacity:0}.mat-slider-disabled .mat-slider-thumb{border-width:4px;transform:scale(0.5)}.mat-slider-disabled .mat-slider-thumb-label{display:none}.mat-slider-horizontal{height:48px;min-width:128px}.mat-slider-horizontal .mat-slider-wrapper{height:2px;top:23px;left:8px;right:8px}.mat-slider-horizontal .mat-slider-wrapper::after{height:2px;border-left-width:2px;right:0;top:0}.mat-slider-horizontal .mat-slider-track-wrapper{height:2px;width:100%}.mat-slider-horizontal .mat-slider-track-fill{height:2px;width:100%;transform:scaleX(0)}.mat-slider-horizontal .mat-slider-track-background{height:2px;width:100%;transform:scaleX(1)}.mat-slider-horizontal .mat-slider-ticks-container{height:2px;width:100%}.cdk-high-contrast-active .mat-slider-horizontal .mat-slider-ticks-container{height:0;outline:solid 2px;top:1px}.mat-slider-horizontal .mat-slider-ticks{height:2px;width:100%}.mat-slider-horizontal .mat-slider-thumb-container{width:100%;height:0;top:50%}.mat-slider-horizontal .mat-slider-focus-ring{top:-15px;right:-15px}.mat-slider-horizontal .mat-slider-thumb-label{right:-14px;top:-40px;transform:translateY(26px) scale(0.01) rotate(45deg)}.mat-slider-horizontal .mat-slider-thumb-label-text{transform:rotate(-45deg)}.mat-slider-horizontal.cdk-focused .mat-slider-thumb-label{transform:rotate(45deg)}.cdk-high-contrast-active .mat-slider-horizontal.cdk-focused .mat-slider-thumb-label,.cdk-high-contrast-active .mat-slider-horizontal.cdk-focused .mat-slider-thumb-label-text{transform:none}.mat-slider-vertical{width:48px;min-height:128px}.mat-slider-vertical .mat-slider-wrapper{width:2px;top:8px;bottom:8px;left:23px}.mat-slider-vertical .mat-slider-wrapper::after{width:2px;border-top-width:2px;bottom:0;left:0}.mat-slider-vertical .mat-slider-track-wrapper{height:100%;width:2px}.mat-slider-vertical .mat-slider-track-fill{height:100%;width:2px;transform:scaleY(0)}.mat-slider-vertical .mat-slider-track-background{height:100%;width:2px;transform:scaleY(1)}.mat-slider-vertical .mat-slider-ticks-container{width:2px;height:100%}.cdk-high-contrast-active .mat-slider-vertical .mat-slider-ticks-container{width:0;outline:solid 2px;left:1px}.mat-slider-vertical .mat-slider-focus-ring{bottom:-15px;left:-15px}.mat-slider-vertical .mat-slider-ticks{width:2px;height:100%}.mat-slider-vertical .mat-slider-thumb-container{height:100%;width:0;left:50%}.mat-slider-vertical .mat-slider-thumb{-webkit-backface-visibility:hidden;backface-visibility:hidden}.mat-slider-vertical .mat-slider-thumb-label{bottom:-14px;left:-40px;transform:translateX(26px) scale(0.01) rotate(-45deg)}.mat-slider-vertical .mat-slider-thumb-label-text{transform:rotate(45deg)}.mat-slider-vertical.cdk-focused .mat-slider-thumb-label{transform:rotate(-45deg)}[dir=rtl] .mat-slider-wrapper::after{left:0;right:auto}[dir=rtl] .mat-slider-horizontal .mat-slider-track-fill{transform-origin:100% 100%}[dir=rtl] .mat-slider-horizontal .mat-slider-track-background{transform-origin:0 0}[dir=rtl] .mat-slider-horizontal.mat-slider-axis-inverted .mat-slider-track-fill{transform-origin:0 0}[dir=rtl] .mat-slider-horizontal.mat-slider-axis-inverted .mat-slider-track-background{transform-origin:100% 100%}.mat-slider._mat-animation-noopable .mat-slider-track-fill,.mat-slider._mat-animation-noopable .mat-slider-track-background,.mat-slider._mat-animation-noopable .mat-slider-ticks,.mat-slider._mat-animation-noopable .mat-slider-thumb-container,.mat-slider._mat-animation-noopable .mat-slider-focus-ring,.mat-slider._mat-animation-noopable .mat-slider-thumb,.mat-slider._mat-animation-noopable .mat-slider-thumb-label,.mat-slider._mat-animation-noopable .mat-slider-thumb-label-text,.mat-slider._mat-animation-noopable .mat-slider-has-ticks .mat-slider-wrapper::after{transition:none}\n"]
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
          }, {
            type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__["FocusMonitor"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
          }, {
            type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__["Directionality"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
            }]
          }, {
            type: String,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Attribute"],
              args: ['tabindex']
            }]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
              args: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]]
            }]
          }, {
            type: String,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
              args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["ANIMATION_MODULE_TYPE"]]
            }]
          }];
        }, {
          change: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          input: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          valueChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          invert: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          max: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          min: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          value: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          step: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          thumbLabel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          tickInterval: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          vertical: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          displayWith: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          _sliderWrapper: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['sliderWrapper']
          }]
        });
      })();
      /** Returns whether an event is a touch event. */


      function isTouchEvent(event) {
        // This function is called for every pixel that the user has dragged so we need it to be
        // as fast as possible. Since we only bind mouse events and touch events, we can assume
        // that if the event's name starts with `t`, it's a touch event.
        return event.type[0] === 't';
      }
      /** Gets the coordinates of a touch or mouse event relative to the viewport. */


      function getPointerPositionOnPage(event) {
        // `touches` will be empty for start/end events so we have to fall back to `changedTouches`.
        var point = isTouchEvent(event) ? event.touches[0] || event.changedTouches[0] : event;
        return {
          x: point.clientX,
          y: point.clientY
        };
      }
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var MatSliderModule = function MatSliderModule() {
        _classCallCheck(this, MatSliderModule);
      };

      MatSliderModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: MatSliderModule
      });
      MatSliderModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        factory: function MatSliderModule_Factory(t) {
          return new (t || MatSliderModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"]], _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](MatSliderModule, {
          declarations: function declarations() {
            return [MatSlider];
          },
          imports: function imports() {
            return [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"]];
          },
          exports: function exports() {
            return [MatSlider, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"]];
          }
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatSliderModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"]],
            exports: [MatSlider, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"]],
            declarations: [MatSlider]
          }]
        }], null, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Generated bundle index. Do not edit.
       */
      //# sourceMappingURL=slider.js.map

      /***/

    },

    /***/
    "7EHt":
    /*!***************************************************************************!*\
      !*** ./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js ***!
      \***************************************************************************/

    /*! exports provided: EXPANSION_PANEL_ANIMATION_TIMING, MAT_ACCORDION, MAT_EXPANSION_PANEL_DEFAULT_OPTIONS, MatAccordion, MatExpansionModule, MatExpansionPanel, MatExpansionPanelActionRow, MatExpansionPanelContent, MatExpansionPanelDescription, MatExpansionPanelHeader, MatExpansionPanelTitle, matExpansionAnimations, ɵ0 */

    /***/
    function EHt(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EXPANSION_PANEL_ANIMATION_TIMING", function () {
        return EXPANSION_PANEL_ANIMATION_TIMING;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_ACCORDION", function () {
        return MAT_ACCORDION;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_EXPANSION_PANEL_DEFAULT_OPTIONS", function () {
        return MAT_EXPANSION_PANEL_DEFAULT_OPTIONS;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatAccordion", function () {
        return MatAccordion;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatExpansionModule", function () {
        return MatExpansionModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatExpansionPanel", function () {
        return MatExpansionPanel;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatExpansionPanelActionRow", function () {
        return MatExpansionPanelActionRow;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatExpansionPanelContent", function () {
        return MatExpansionPanelContent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatExpansionPanelDescription", function () {
        return MatExpansionPanelDescription;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatExpansionPanelHeader", function () {
        return MatExpansionPanelHeader;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatExpansionPanelTitle", function () {
        return MatExpansionPanelTitle;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "matExpansionAnimations", function () {
        return matExpansionAnimations;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵ0", function () {
        return ɵ0;
      });
      /* harmony import */


      var _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/cdk/accordion */
      "N/qJ");
      /* harmony import */


      var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/cdk/portal */
      "+rOU");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/cdk/coercion */
      "8LU1");
      /* harmony import */


      var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/cdk/a11y */
      "u47x");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/cdk/keycodes */
      "FtGj");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "R1ws");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _angular_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/animations */
      "R0Ic");
      /* harmony import */


      var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/cdk/collections */
      "0EQZ");
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Token used to provide a `MatAccordion` to `MatExpansionPanel`.
       * Used primarily to avoid circular imports between `MatAccordion` and `MatExpansionPanel`.
       */


      var _c0 = ["body"];

      function MatExpansionPanel_ng_template_5_Template(rf, ctx) {}

      var _c1 = [[["mat-expansion-panel-header"]], "*", [["mat-action-row"]]];
      var _c2 = ["mat-expansion-panel-header", "*", "mat-action-row"];

      function MatExpansionPanelHeader_span_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "span", 2);
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("@indicatorRotate", ctx_r0._getExpandedState());
        }
      }

      var _c3 = [[["mat-panel-title"]], [["mat-panel-description"]], "*"];
      var _c4 = ["mat-panel-title", "mat-panel-description", "*"];
      var MAT_ACCORDION = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["InjectionToken"]('MAT_ACCORDION');
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** Time and timing curve for expansion panel animations. */
      // Note: Keep this in sync with the Sass variable for the panel header animation.

      var EXPANSION_PANEL_ANIMATION_TIMING = '225ms cubic-bezier(0.4,0.0,0.2,1)';
      /**
       * Animations used by the Material expansion panel.
       *
       * A bug in angular animation's `state` when ViewContainers are moved using ViewContainerRef.move()
       * causes the animation state of moved components to become `void` upon exit, and not update again
       * upon reentry into the DOM.  This can lead a to situation for the expansion panel where the state
       * of the panel is `expanded` or `collapsed` but the animation state is `void`.
       *
       * To correctly handle animating to the next state, we animate between `void` and `collapsed` which
       * are defined to have the same styles. Since angular animates from the current styles to the
       * destination state's style definition, in situations where we are moving from `void`'s styles to
       * `collapsed` this acts a noop since no style values change.
       *
       * In the case where angular's animation state is out of sync with the expansion panel's state, the
       * expansion panel being `expanded` and angular animations being `void`, the animation from the
       * `expanded`'s effective styles (though in a `void` animation state) to the collapsed state will
       * occur as expected.
       *
       * Angular Bug: https://github.com/angular/angular/issues/18847
       *
       * @docs-private
       */

      var matExpansionAnimations = {
        /** Animation that rotates the indicator arrow. */
        indicatorRotate: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["trigger"])('indicatorRotate', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["state"])('collapsed, void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["style"])({
          transform: 'rotate(0deg)'
        })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["state"])('expanded', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["style"])({
          transform: 'rotate(180deg)'
        })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["transition"])('expanded <=> collapsed, void => collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["animate"])(EXPANSION_PANEL_ANIMATION_TIMING))]),

        /** Animation that expands and collapses the panel content. */
        bodyExpansion: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["trigger"])('bodyExpansion', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["state"])('collapsed, void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["style"])({
          height: '0px',
          visibility: 'hidden'
        })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["state"])('expanded', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["style"])({
          height: '*',
          visibility: 'visible'
        })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["transition"])('expanded <=> collapsed, void => collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["animate"])(EXPANSION_PANEL_ANIMATION_TIMING))])
      };
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Expansion panel content that will be rendered lazily
       * after the panel is opened for the first time.
       */

      var MatExpansionPanelContent = function MatExpansionPanelContent(_template) {
        _classCallCheck(this, MatExpansionPanelContent);

        this._template = _template;
      };

      MatExpansionPanelContent.ɵfac = function MatExpansionPanelContent_Factory(t) {
        return new (t || MatExpansionPanelContent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"]));
      };

      MatExpansionPanelContent.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
        type: MatExpansionPanelContent,
        selectors: [["ng-template", "matExpansionPanelContent", ""]]
      });

      MatExpansionPanelContent.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"]
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](MatExpansionPanelContent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
          args: [{
            selector: 'ng-template[matExpansionPanelContent]'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"]
          }];
        }, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** Counter for generating unique element ids. */


      var uniqueId = 0;
      /**
       * Injection token that can be used to configure the defalt
       * options for the expansion panel component.
       */

      var MAT_EXPANSION_PANEL_DEFAULT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["InjectionToken"]('MAT_EXPANSION_PANEL_DEFAULT_OPTIONS');
      var ɵ0 = undefined;
      /**
       * This component can be used as a single element to show expandable content, or as one of
       * multiple children of an element with the MatAccordion directive attached.
       */

      var MatExpansionPanel = /*#__PURE__*/function (_angular_cdk_accordio) {
        _inherits(MatExpansionPanel, _angular_cdk_accordio);

        var _super6 = _createSuper(MatExpansionPanel);

        function MatExpansionPanel(accordion, _changeDetectorRef, _uniqueSelectionDispatcher, _viewContainerRef, _document, _animationMode, defaultOptions) {
          var _this14;

          _classCallCheck(this, MatExpansionPanel);

          _this14 = _super6.call(this, accordion, _changeDetectorRef, _uniqueSelectionDispatcher);
          _this14._viewContainerRef = _viewContainerRef;
          _this14._animationMode = _animationMode;
          _this14._hideToggle = false;
          /** An event emitted after the body's expansion animation happens. */

          _this14.afterExpand = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
          /** An event emitted after the body's collapse animation happens. */

          _this14.afterCollapse = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
          /** Stream that emits for changes in `@Input` properties. */

          _this14._inputChanges = new rxjs__WEBPACK_IMPORTED_MODULE_9__["Subject"]();
          /** ID for the associated header element. Used for a11y labelling. */

          _this14._headerId = "mat-expansion-panel-header-".concat(uniqueId++);
          /** Stream of body animation done events. */

          _this14._bodyAnimationDone = new rxjs__WEBPACK_IMPORTED_MODULE_9__["Subject"]();
          _this14.accordion = accordion;
          _this14._document = _document; // We need a Subject with distinctUntilChanged, because the `done` event
          // fires twice on some browsers. See https://github.com/angular/angular/issues/24084

          _this14._bodyAnimationDone.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["distinctUntilChanged"])(function (x, y) {
            return x.fromState === y.fromState && x.toState === y.toState;
          })).subscribe(function (event) {
            if (event.fromState !== 'void') {
              if (event.toState === 'expanded') {
                _this14.afterExpand.emit();
              } else if (event.toState === 'collapsed') {
                _this14.afterCollapse.emit();
              }
            }
          });

          if (defaultOptions) {
            _this14.hideToggle = defaultOptions.hideToggle;
          }

          return _this14;
        }
        /** Whether the toggle indicator should be hidden. */


        _createClass(MatExpansionPanel, [{
          key: "_hasSpacing",

          /** Determines whether the expansion panel should have spacing between it and its siblings. */
          value: function _hasSpacing() {
            if (this.accordion) {
              return this.expanded && this.accordion.displayMode === 'default';
            }

            return false;
          }
          /** Gets the expanded state string. */

        }, {
          key: "_getExpandedState",
          value: function _getExpandedState() {
            return this.expanded ? 'expanded' : 'collapsed';
          }
          /** Toggles the expanded state of the expansion panel. */

        }, {
          key: "toggle",
          value: function toggle() {
            this.expanded = !this.expanded;
          }
          /** Sets the expanded state of the expansion panel to false. */

        }, {
          key: "close",
          value: function close() {
            this.expanded = false;
          }
          /** Sets the expanded state of the expansion panel to true. */

        }, {
          key: "open",
          value: function open() {
            this.expanded = true;
          }
        }, {
          key: "ngAfterContentInit",
          value: function ngAfterContentInit() {
            var _this15 = this;

            if (this._lazyContent) {
              // Render the content as soon as the panel becomes open.
              this.opened.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["startWith"])(null), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["filter"])(function () {
                return _this15.expanded && !_this15._portal;
              }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["take"])(1)).subscribe(function () {
                _this15._portal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["TemplatePortal"](_this15._lazyContent._template, _this15._viewContainerRef);
              });
            }
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            this._inputChanges.next(changes);
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            _get(_getPrototypeOf(MatExpansionPanel.prototype), "ngOnDestroy", this).call(this);

            this._bodyAnimationDone.complete();

            this._inputChanges.complete();
          }
          /** Checks whether the expansion panel's content contains the currently-focused element. */

        }, {
          key: "_containsFocus",
          value: function _containsFocus() {
            if (this._body) {
              var focusedElement = this._document.activeElement;
              var bodyElement = this._body.nativeElement;
              return focusedElement === bodyElement || bodyElement.contains(focusedElement);
            }

            return false;
          }
        }, {
          key: "hideToggle",
          get: function get() {
            return this._hideToggle || this.accordion && this.accordion.hideToggle;
          },
          set: function set(value) {
            this._hideToggle = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceBooleanProperty"])(value);
          }
          /** The position of the expansion indicator. */

        }, {
          key: "togglePosition",
          get: function get() {
            return this._togglePosition || this.accordion && this.accordion.togglePosition;
          },
          set: function set(value) {
            this._togglePosition = value;
          }
        }]);

        return MatExpansionPanel;
      }(_angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_0__["CdkAccordionItem"]);

      MatExpansionPanel.ɵfac = function MatExpansionPanel_Factory(t) {
        return new (t || MatExpansionPanel)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](MAT_ACCORDION, 12), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_11__["UniqueSelectionDispatcher"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["ANIMATION_MODULE_TYPE"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](MAT_EXPANSION_PANEL_DEFAULT_OPTIONS, 8));
      };

      MatExpansionPanel.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: MatExpansionPanel,
        selectors: [["mat-expansion-panel"]],
        contentQueries: function MatExpansionPanel_ContentQueries(rf, ctx, dirIndex) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵcontentQuery"](dirIndex, MatExpansionPanelContent, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx._lazyContent = _t.first);
          }
        },
        viewQuery: function MatExpansionPanel_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx._body = _t.first);
          }
        },
        hostAttrs: [1, "mat-expansion-panel"],
        hostVars: 6,
        hostBindings: function MatExpansionPanel_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("mat-expanded", ctx.expanded)("_mat-animation-noopable", ctx._animationMode === "NoopAnimations")("mat-expansion-panel-spacing", ctx._hasSpacing());
          }
        },
        inputs: {
          disabled: "disabled",
          expanded: "expanded",
          hideToggle: "hideToggle",
          togglePosition: "togglePosition"
        },
        outputs: {
          opened: "opened",
          closed: "closed",
          expandedChange: "expandedChange",
          afterExpand: "afterExpand",
          afterCollapse: "afterCollapse"
        },
        exportAs: ["matExpansionPanel"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵProvidersFeature"]([// Provide MatAccordion as undefined to prevent nested expansion panels from registering
        // to the same accordion.
        {
          provide: MAT_ACCORDION,
          useValue: ɵ0
        }]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵNgOnChangesFeature"]],
        ngContentSelectors: _c2,
        decls: 7,
        vars: 4,
        consts: [["role", "region", 1, "mat-expansion-panel-content", 3, "id"], ["body", ""], [1, "mat-expansion-panel-body"], [3, "cdkPortalOutlet"]],
        template: function MatExpansionPanel_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojectionDef"](_c1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojection"](0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 0, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("@bodyExpansion.done", function MatExpansionPanel_Template_div_animation_bodyExpansion_done_1_listener($event) {
              return ctx._bodyAnimationDone.next($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojection"](4, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, MatExpansionPanel_ng_template_5_Template, 0, 0, "ng-template", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojection"](6, 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("@bodyExpansion", ctx._getExpandedState())("id", ctx.id);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("aria-labelledby", ctx._headerId);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("cdkPortalOutlet", ctx._portal);
          }
        },
        directives: [_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["CdkPortalOutlet"]],
        styles: [".mat-expansion-panel{box-sizing:content-box;display:block;margin:0;border-radius:4px;overflow:hidden;transition:margin 225ms cubic-bezier(0.4, 0, 0.2, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);position:relative}.mat-accordion .mat-expansion-panel:not(.mat-expanded),.mat-accordion .mat-expansion-panel:not(.mat-expansion-panel-spacing){border-radius:0}.mat-accordion .mat-expansion-panel:first-of-type{border-top-right-radius:4px;border-top-left-radius:4px}.mat-accordion .mat-expansion-panel:last-of-type{border-bottom-right-radius:4px;border-bottom-left-radius:4px}.cdk-high-contrast-active .mat-expansion-panel{outline:solid 1px}.mat-expansion-panel.ng-animate-disabled,.ng-animate-disabled .mat-expansion-panel,.mat-expansion-panel._mat-animation-noopable{transition:none}.mat-expansion-panel-content{display:flex;flex-direction:column;overflow:visible}.mat-expansion-panel-body{padding:0 24px 16px}.mat-expansion-panel-spacing{margin:16px 0}.mat-accordion>.mat-expansion-panel-spacing:first-child,.mat-accordion>*:first-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing{margin-top:0}.mat-accordion>.mat-expansion-panel-spacing:last-child,.mat-accordion>*:last-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing{margin-bottom:0}.mat-action-row{border-top-style:solid;border-top-width:1px;display:flex;flex-direction:row;justify-content:flex-end;padding:16px 8px 16px 24px}.mat-action-row button.mat-button-base,.mat-action-row button.mat-mdc-button-base{margin-left:8px}[dir=rtl] .mat-action-row button.mat-button-base,[dir=rtl] .mat-action-row button.mat-mdc-button-base{margin-left:0;margin-right:8px}\n"],
        encapsulation: 2,
        data: {
          animation: [matExpansionAnimations.bodyExpansion]
        },
        changeDetection: 0
      });

      MatExpansionPanel.ctorParameters = function () {
        return [{
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["SkipSelf"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
            args: [MAT_ACCORDION]
          }]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]
        }, {
          type: _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_11__["UniqueSelectionDispatcher"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]]
          }]
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
            args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["ANIMATION_MODULE_TYPE"]]
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
            args: [MAT_EXPANSION_PANEL_DEFAULT_OPTIONS]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
          }]
        }];
      };

      MatExpansionPanel.propDecorators = {
        hideToggle: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        togglePosition: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        afterExpand: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }],
        afterCollapse: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }],
        _lazyContent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChild"],
          args: [MatExpansionPanelContent]
        }],
        _body: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['body']
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](MatExpansionPanel, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
          args: [{
            selector: 'mat-expansion-panel',
            exportAs: 'matExpansionPanel',
            template: "<ng-content select=\"mat-expansion-panel-header\"></ng-content>\n<div class=\"mat-expansion-panel-content\"\n     role=\"region\"\n     [@bodyExpansion]=\"_getExpandedState()\"\n     (@bodyExpansion.done)=\"_bodyAnimationDone.next($event)\"\n     [attr.aria-labelledby]=\"_headerId\"\n     [id]=\"id\"\n     #body>\n  <div class=\"mat-expansion-panel-body\">\n    <ng-content></ng-content>\n    <ng-template [cdkPortalOutlet]=\"_portal\"></ng-template>\n  </div>\n  <ng-content select=\"mat-action-row\"></ng-content>\n</div>\n",
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].None,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
            inputs: ['disabled', 'expanded'],
            outputs: ['opened', 'closed', 'expandedChange'],
            animations: [matExpansionAnimations.bodyExpansion],
            providers: [// Provide MatAccordion as undefined to prevent nested expansion panels from registering
            // to the same accordion.
            {
              provide: MAT_ACCORDION,
              useValue: ɵ0
            }],
            host: {
              'class': 'mat-expansion-panel',
              '[class.mat-expanded]': 'expanded',
              '[class._mat-animation-noopable]': '_animationMode === "NoopAnimations"',
              '[class.mat-expansion-panel-spacing]': '_hasSpacing()'
            },
            styles: [".mat-expansion-panel{box-sizing:content-box;display:block;margin:0;border-radius:4px;overflow:hidden;transition:margin 225ms cubic-bezier(0.4, 0, 0.2, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);position:relative}.mat-accordion .mat-expansion-panel:not(.mat-expanded),.mat-accordion .mat-expansion-panel:not(.mat-expansion-panel-spacing){border-radius:0}.mat-accordion .mat-expansion-panel:first-of-type{border-top-right-radius:4px;border-top-left-radius:4px}.mat-accordion .mat-expansion-panel:last-of-type{border-bottom-right-radius:4px;border-bottom-left-radius:4px}.cdk-high-contrast-active .mat-expansion-panel{outline:solid 1px}.mat-expansion-panel.ng-animate-disabled,.ng-animate-disabled .mat-expansion-panel,.mat-expansion-panel._mat-animation-noopable{transition:none}.mat-expansion-panel-content{display:flex;flex-direction:column;overflow:visible}.mat-expansion-panel-body{padding:0 24px 16px}.mat-expansion-panel-spacing{margin:16px 0}.mat-accordion>.mat-expansion-panel-spacing:first-child,.mat-accordion>*:first-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing{margin-top:0}.mat-accordion>.mat-expansion-panel-spacing:last-child,.mat-accordion>*:last-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing{margin-bottom:0}.mat-action-row{border-top-style:solid;border-top-width:1px;display:flex;flex-direction:row;justify-content:flex-end;padding:16px 8px 16px 24px}.mat-action-row button.mat-button-base,.mat-action-row button.mat-mdc-button-base{margin-left:8px}[dir=rtl] .mat-action-row button.mat-button-base,[dir=rtl] .mat-action-row button.mat-mdc-button-base{margin-left:0;margin-right:8px}\n"]
          }]
        }], function () {
          return [{
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["SkipSelf"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
              args: [MAT_ACCORDION]
            }]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]
          }, {
            type: _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_11__["UniqueSelectionDispatcher"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
              args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]]
            }]
          }, {
            type: String,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
              args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["ANIMATION_MODULE_TYPE"]]
            }]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
              args: [MAT_EXPANSION_PANEL_DEFAULT_OPTIONS]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
            }]
          }];
        }, {
          afterExpand: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
          }],
          afterCollapse: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
          }],
          hideToggle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
          }],
          togglePosition: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
          }],
          _lazyContent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChild"],
            args: [MatExpansionPanelContent]
          }],
          _body: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
            args: ['body']
          }]
        });
      })();
      /**
       * Actions of a `<mat-expansion-panel>`.
       */


      var MatExpansionPanelActionRow = function MatExpansionPanelActionRow() {
        _classCallCheck(this, MatExpansionPanelActionRow);
      };

      MatExpansionPanelActionRow.ɵfac = function MatExpansionPanelActionRow_Factory(t) {
        return new (t || MatExpansionPanelActionRow)();
      };

      MatExpansionPanelActionRow.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
        type: MatExpansionPanelActionRow,
        selectors: [["mat-action-row"]],
        hostAttrs: [1, "mat-action-row"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](MatExpansionPanelActionRow, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
          args: [{
            selector: 'mat-action-row',
            host: {
              "class": 'mat-action-row'
            }
          }]
        }], null, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Header element of a `<mat-expansion-panel>`.
       */


      var MatExpansionPanelHeader = /*#__PURE__*/function () {
        function MatExpansionPanelHeader(panel, _element, _focusMonitor, _changeDetectorRef, defaultOptions, _animationMode) {
          var _this16 = this;

          _classCallCheck(this, MatExpansionPanelHeader);

          this.panel = panel;
          this._element = _element;
          this._focusMonitor = _focusMonitor;
          this._changeDetectorRef = _changeDetectorRef;
          this._animationMode = _animationMode;
          this._parentChangeSubscription = rxjs__WEBPACK_IMPORTED_MODULE_9__["Subscription"].EMPTY;
          var accordionHideToggleChange = panel.accordion ? panel.accordion._stateChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["filter"])(function (changes) {
            return !!(changes['hideToggle'] || changes['togglePosition']);
          })) : rxjs__WEBPACK_IMPORTED_MODULE_9__["EMPTY"]; // Since the toggle state depends on an @Input on the panel, we
          // need to subscribe and trigger change detection manually.

          this._parentChangeSubscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["merge"])(panel.opened, panel.closed, accordionHideToggleChange, panel._inputChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["filter"])(function (changes) {
            return !!(changes['hideToggle'] || changes['disabled'] || changes['togglePosition']);
          }))).subscribe(function () {
            return _this16._changeDetectorRef.markForCheck();
          }); // Avoids focus being lost if the panel contained the focused element and was closed.

          panel.closed.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["filter"])(function () {
            return panel._containsFocus();
          })).subscribe(function () {
            return _focusMonitor.focusVia(_element, 'program');
          });

          if (defaultOptions) {
            this.expandedHeight = defaultOptions.expandedHeight;
            this.collapsedHeight = defaultOptions.collapsedHeight;
          }
        }
        /**
         * Whether the associated panel is disabled. Implemented as a part of `FocusableOption`.
         * @docs-private
         */


        _createClass(MatExpansionPanelHeader, [{
          key: "_toggle",

          /** Toggles the expanded state of the panel. */
          value: function _toggle() {
            if (!this.disabled) {
              this.panel.toggle();
            }
          }
          /** Gets whether the panel is expanded. */

        }, {
          key: "_isExpanded",
          value: function _isExpanded() {
            return this.panel.expanded;
          }
          /** Gets the expanded state string of the panel. */

        }, {
          key: "_getExpandedState",
          value: function _getExpandedState() {
            return this.panel._getExpandedState();
          }
          /** Gets the panel id. */

        }, {
          key: "_getPanelId",
          value: function _getPanelId() {
            return this.panel.id;
          }
          /** Gets the toggle position for the header. */

        }, {
          key: "_getTogglePosition",
          value: function _getTogglePosition() {
            return this.panel.togglePosition;
          }
          /** Gets whether the expand indicator should be shown. */

        }, {
          key: "_showToggle",
          value: function _showToggle() {
            return !this.panel.hideToggle && !this.panel.disabled;
          }
          /**
           * Gets the current height of the header. Null if no custom height has been
           * specified, and if the default height from the stylesheet should be used.
           */

        }, {
          key: "_getHeaderHeight",
          value: function _getHeaderHeight() {
            var isExpanded = this._isExpanded();

            if (isExpanded && this.expandedHeight) {
              return this.expandedHeight;
            } else if (!isExpanded && this.collapsedHeight) {
              return this.collapsedHeight;
            }

            return null;
          }
          /** Handle keydown event calling to toggle() if appropriate. */

        }, {
          key: "_keydown",
          value: function _keydown(event) {
            switch (event.keyCode) {
              // Toggle for space and enter keys.
              case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__["SPACE"]:
              case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__["ENTER"]:
                if (!Object(_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__["hasModifierKey"])(event)) {
                  event.preventDefault();

                  this._toggle();
                }

                break;

              default:
                if (this.panel.accordion) {
                  this.panel.accordion._handleHeaderKeydown(event);
                }

                return;
            }
          }
          /**
           * Focuses the panel header. Implemented as a part of `FocusableOption`.
           * @param origin Origin of the action that triggered the focus.
           * @docs-private
           */

        }, {
          key: "focus",
          value: function focus() {
            var origin = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'program';
            var options = arguments.length > 1 ? arguments[1] : undefined;

            this._focusMonitor.focusVia(this._element, origin, options);
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            var _this17 = this;

            this._focusMonitor.monitor(this._element).subscribe(function (origin) {
              if (origin && _this17.panel.accordion) {
                _this17.panel.accordion._handleHeaderFocus(_this17);
              }
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._parentChangeSubscription.unsubscribe();

            this._focusMonitor.stopMonitoring(this._element);
          }
        }, {
          key: "disabled",
          get: function get() {
            return this.panel.disabled;
          }
        }]);

        return MatExpansionPanelHeader;
      }();

      MatExpansionPanelHeader.ɵfac = function MatExpansionPanelHeader_Factory(t) {
        return new (t || MatExpansionPanelHeader)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](MatExpansionPanel, 1), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__["FocusMonitor"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](MAT_EXPANSION_PANEL_DEFAULT_OPTIONS, 8), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["ANIMATION_MODULE_TYPE"], 8));
      };

      MatExpansionPanelHeader.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: MatExpansionPanelHeader,
        selectors: [["mat-expansion-panel-header"]],
        hostAttrs: ["role", "button", 1, "mat-expansion-panel-header", "mat-focus-indicator"],
        hostVars: 15,
        hostBindings: function MatExpansionPanelHeader_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function MatExpansionPanelHeader_click_HostBindingHandler() {
              return ctx._toggle();
            })("keydown", function MatExpansionPanelHeader_keydown_HostBindingHandler($event) {
              return ctx._keydown($event);
            });
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("id", ctx.panel._headerId)("tabindex", ctx.disabled ? -1 : 0)("aria-controls", ctx._getPanelId())("aria-expanded", ctx._isExpanded())("aria-disabled", ctx.panel.disabled);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("height", ctx._getHeaderHeight());

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("mat-expanded", ctx._isExpanded())("mat-expansion-toggle-indicator-after", ctx._getTogglePosition() === "after")("mat-expansion-toggle-indicator-before", ctx._getTogglePosition() === "before")("_mat-animation-noopable", ctx._animationMode === "NoopAnimations");
          }
        },
        inputs: {
          expandedHeight: "expandedHeight",
          collapsedHeight: "collapsedHeight"
        },
        ngContentSelectors: _c4,
        decls: 5,
        vars: 1,
        consts: [[1, "mat-content"], ["class", "mat-expansion-indicator", 4, "ngIf"], [1, "mat-expansion-indicator"]],
        template: function MatExpansionPanelHeader_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojectionDef"](_c3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojection"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojection"](2, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojection"](3, 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, MatExpansionPanelHeader_span_4_Template, 1, 1, "span", 1);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx._showToggle());
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]],
        styles: [".mat-expansion-panel-header{display:flex;flex-direction:row;align-items:center;padding:0 24px;border-radius:inherit;transition:height 225ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-expansion-panel-header._mat-animation-noopable{transition:none}.mat-expansion-panel-header:focus,.mat-expansion-panel-header:hover{outline:none}.mat-expansion-panel-header.mat-expanded:focus,.mat-expansion-panel-header.mat-expanded:hover{background:inherit}.mat-expansion-panel-header:not([aria-disabled=true]){cursor:pointer}.mat-expansion-panel-header.mat-expansion-toggle-indicator-before{flex-direction:row-reverse}.mat-expansion-panel-header.mat-expansion-toggle-indicator-before .mat-expansion-indicator{margin:0 16px 0 0}[dir=rtl] .mat-expansion-panel-header.mat-expansion-toggle-indicator-before .mat-expansion-indicator{margin:0 0 0 16px}.mat-content{display:flex;flex:1;flex-direction:row;overflow:hidden}.mat-expansion-panel-header-title,.mat-expansion-panel-header-description{display:flex;flex-grow:1;margin-right:16px}[dir=rtl] .mat-expansion-panel-header-title,[dir=rtl] .mat-expansion-panel-header-description{margin-right:0;margin-left:16px}.mat-expansion-panel-header-description{flex-grow:2}.mat-expansion-indicator::after{border-style:solid;border-width:0 2px 2px 0;content:\"\";display:inline-block;padding:3px;transform:rotate(45deg);vertical-align:middle}\n"],
        encapsulation: 2,
        data: {
          animation: [matExpansionAnimations.indicatorRotate]
        },
        changeDetection: 0
      });

      MatExpansionPanelHeader.ctorParameters = function () {
        return [{
          type: MatExpansionPanel,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Host"]
          }]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
        }, {
          type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__["FocusMonitor"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
            args: [MAT_EXPANSION_PANEL_DEFAULT_OPTIONS]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
          }]
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
            args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["ANIMATION_MODULE_TYPE"]]
          }]
        }];
      };

      MatExpansionPanelHeader.propDecorators = {
        expandedHeight: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        collapsedHeight: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](MatExpansionPanelHeader, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
          args: [{
            selector: 'mat-expansion-panel-header',
            template: "<span class=\"mat-content\">\n  <ng-content select=\"mat-panel-title\"></ng-content>\n  <ng-content select=\"mat-panel-description\"></ng-content>\n  <ng-content></ng-content>\n</span>\n<span [@indicatorRotate]=\"_getExpandedState()\" *ngIf=\"_showToggle()\"\n      class=\"mat-expansion-indicator\"></span>\n",
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].None,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
            animations: [matExpansionAnimations.indicatorRotate],
            host: {
              'class': 'mat-expansion-panel-header mat-focus-indicator',
              'role': 'button',
              '[attr.id]': 'panel._headerId',
              '[attr.tabindex]': 'disabled ? -1 : 0',
              '[attr.aria-controls]': '_getPanelId()',
              '[attr.aria-expanded]': '_isExpanded()',
              '[attr.aria-disabled]': 'panel.disabled',
              '[class.mat-expanded]': '_isExpanded()',
              '[class.mat-expansion-toggle-indicator-after]': "_getTogglePosition() === 'after'",
              '[class.mat-expansion-toggle-indicator-before]': "_getTogglePosition() === 'before'",
              '[class._mat-animation-noopable]': '_animationMode === "NoopAnimations"',
              '[style.height]': '_getHeaderHeight()',
              '(click)': '_toggle()',
              '(keydown)': '_keydown($event)'
            },
            styles: [".mat-expansion-panel-header{display:flex;flex-direction:row;align-items:center;padding:0 24px;border-radius:inherit;transition:height 225ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-expansion-panel-header._mat-animation-noopable{transition:none}.mat-expansion-panel-header:focus,.mat-expansion-panel-header:hover{outline:none}.mat-expansion-panel-header.mat-expanded:focus,.mat-expansion-panel-header.mat-expanded:hover{background:inherit}.mat-expansion-panel-header:not([aria-disabled=true]){cursor:pointer}.mat-expansion-panel-header.mat-expansion-toggle-indicator-before{flex-direction:row-reverse}.mat-expansion-panel-header.mat-expansion-toggle-indicator-before .mat-expansion-indicator{margin:0 16px 0 0}[dir=rtl] .mat-expansion-panel-header.mat-expansion-toggle-indicator-before .mat-expansion-indicator{margin:0 0 0 16px}.mat-content{display:flex;flex:1;flex-direction:row;overflow:hidden}.mat-expansion-panel-header-title,.mat-expansion-panel-header-description{display:flex;flex-grow:1;margin-right:16px}[dir=rtl] .mat-expansion-panel-header-title,[dir=rtl] .mat-expansion-panel-header-description{margin-right:0;margin-left:16px}.mat-expansion-panel-header-description{flex-grow:2}.mat-expansion-indicator::after{border-style:solid;border-width:0 2px 2px 0;content:\"\";display:inline-block;padding:3px;transform:rotate(45deg);vertical-align:middle}\n"]
          }]
        }], function () {
          return [{
            type: MatExpansionPanel,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Host"]
            }]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
          }, {
            type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__["FocusMonitor"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
              args: [MAT_EXPANSION_PANEL_DEFAULT_OPTIONS]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
            }]
          }, {
            type: String,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
              args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["ANIMATION_MODULE_TYPE"]]
            }]
          }];
        }, {
          expandedHeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
          }],
          collapsedHeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
          }]
        });
      })();
      /**
       * Description element of a `<mat-expansion-panel-header>`.
       */


      var MatExpansionPanelDescription = function MatExpansionPanelDescription() {
        _classCallCheck(this, MatExpansionPanelDescription);
      };

      MatExpansionPanelDescription.ɵfac = function MatExpansionPanelDescription_Factory(t) {
        return new (t || MatExpansionPanelDescription)();
      };

      MatExpansionPanelDescription.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
        type: MatExpansionPanelDescription,
        selectors: [["mat-panel-description"]],
        hostAttrs: [1, "mat-expansion-panel-header-description"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](MatExpansionPanelDescription, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
          args: [{
            selector: 'mat-panel-description',
            host: {
              "class": 'mat-expansion-panel-header-description'
            }
          }]
        }], null, null);
      })();
      /**
       * Title element of a `<mat-expansion-panel-header>`.
       */


      var MatExpansionPanelTitle = function MatExpansionPanelTitle() {
        _classCallCheck(this, MatExpansionPanelTitle);
      };

      MatExpansionPanelTitle.ɵfac = function MatExpansionPanelTitle_Factory(t) {
        return new (t || MatExpansionPanelTitle)();
      };

      MatExpansionPanelTitle.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
        type: MatExpansionPanelTitle,
        selectors: [["mat-panel-title"]],
        hostAttrs: [1, "mat-expansion-panel-header-title"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](MatExpansionPanelTitle, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
          args: [{
            selector: 'mat-panel-title',
            host: {
              "class": 'mat-expansion-panel-header-title'
            }
          }]
        }], null, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Directive for a Material Design Accordion.
       */


      var MatAccordion = /*#__PURE__*/function (_angular_cdk_accordio2) {
        _inherits(MatAccordion, _angular_cdk_accordio2);

        var _super7 = _createSuper(MatAccordion);

        function MatAccordion() {
          var _this18;

          _classCallCheck(this, MatAccordion);

          _this18 = _super7.apply(this, arguments);
          /** Headers belonging to this accordion. */

          _this18._ownHeaders = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["QueryList"]();
          _this18._hideToggle = false;
          /**
           * Display mode used for all expansion panels in the accordion. Currently two display
           * modes exist:
           *  default - a gutter-like spacing is placed around any expanded panel, placing the expanded
           *     panel at a different elevation from the rest of the accordion.
           *  flat - no spacing is placed around expanded panels, showing all panels at the same
           *     elevation.
           */

          _this18.displayMode = 'default';
          /** The position of the expansion indicator. */

          _this18.togglePosition = 'after';
          return _this18;
        }
        /** Whether the expansion indicator should be hidden. */


        _createClass(MatAccordion, [{
          key: "ngAfterContentInit",
          value: function ngAfterContentInit() {
            var _this19 = this;

            this._headers.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["startWith"])(this._headers)).subscribe(function (headers) {
              _this19._ownHeaders.reset(headers.filter(function (header) {
                return header.panel.accordion === _this19;
              }));

              _this19._ownHeaders.notifyOnChanges();
            });

            this._keyManager = new _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__["FocusKeyManager"](this._ownHeaders).withWrap().withHomeAndEnd();
          }
          /** Handles keyboard events coming in from the panel headers. */

        }, {
          key: "_handleHeaderKeydown",
          value: function _handleHeaderKeydown(event) {
            this._keyManager.onKeydown(event);
          }
        }, {
          key: "_handleHeaderFocus",
          value: function _handleHeaderFocus(header) {
            this._keyManager.updateActiveItem(header);
          }
        }, {
          key: "hideToggle",
          get: function get() {
            return this._hideToggle;
          },
          set: function set(show) {
            this._hideToggle = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceBooleanProperty"])(show);
          }
        }]);

        return MatAccordion;
      }(_angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_0__["CdkAccordion"]);

      MatAccordion.ɵfac = function MatAccordion_Factory(t) {
        return ɵMatAccordion_BaseFactory(t || MatAccordion);
      };

      MatAccordion.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
        type: MatAccordion,
        selectors: [["mat-accordion"]],
        contentQueries: function MatAccordion_ContentQueries(rf, ctx, dirIndex) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵcontentQuery"](dirIndex, MatExpansionPanelHeader, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx._headers = _t);
          }
        },
        hostAttrs: [1, "mat-accordion"],
        hostVars: 2,
        hostBindings: function MatAccordion_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("mat-accordion-multi", ctx.multi);
          }
        },
        inputs: {
          multi: "multi",
          displayMode: "displayMode",
          togglePosition: "togglePosition",
          hideToggle: "hideToggle"
        },
        exportAs: ["matAccordion"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵProvidersFeature"]([{
          provide: MAT_ACCORDION,
          useExisting: MatAccordion
        }]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]]
      });
      MatAccordion.propDecorators = {
        _headers: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChildren"],
          args: [MatExpansionPanelHeader, {
            descendants: true
          }]
        }],
        hideToggle: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        displayMode: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        togglePosition: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };

      var ɵMatAccordion_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetInheritedFactory"](MatAccordion);
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](MatAccordion, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
          args: [{
            selector: 'mat-accordion',
            exportAs: 'matAccordion',
            inputs: ['multi'],
            providers: [{
              provide: MAT_ACCORDION,
              useExisting: MatAccordion
            }],
            host: {
              "class": 'mat-accordion',
              // Class binding which is only used by the test harness as there is no other
              // way for the harness to detect if multiple panel support is enabled.
              '[class.mat-accordion-multi]': 'this.multi'
            }
          }]
        }], null, {
          displayMode: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
          }],
          togglePosition: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
          }],
          hideToggle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
          }],
          _headers: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChildren"],
            args: [MatExpansionPanelHeader, {
              descendants: true
            }]
          }]
        });
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var MatExpansionModule = function MatExpansionModule() {
        _classCallCheck(this, MatExpansionModule);
      };

      MatExpansionModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
        type: MatExpansionModule
      });
      MatExpansionModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
        factory: function MatExpansionModule_Factory(t) {
          return new (t || MatExpansionModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_0__["CdkAccordionModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["PortalModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](MatExpansionModule, {
          declarations: function declarations() {
            return [MatAccordion, MatExpansionPanel, MatExpansionPanelActionRow, MatExpansionPanelHeader, MatExpansionPanelTitle, MatExpansionPanelDescription, MatExpansionPanelContent];
          },
          imports: function imports() {
            return [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_0__["CdkAccordionModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["PortalModule"]];
          },
          exports: function exports() {
            return [MatAccordion, MatExpansionPanel, MatExpansionPanelActionRow, MatExpansionPanelHeader, MatExpansionPanelTitle, MatExpansionPanelDescription, MatExpansionPanelContent];
          }
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](MatExpansionModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"],
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_0__["CdkAccordionModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["PortalModule"]],
            exports: [MatAccordion, MatExpansionPanel, MatExpansionPanelActionRow, MatExpansionPanelHeader, MatExpansionPanelTitle, MatExpansionPanelDescription, MatExpansionPanelContent],
            declarations: [MatAccordion, MatExpansionPanel, MatExpansionPanelActionRow, MatExpansionPanelHeader, MatExpansionPanelTitle, MatExpansionPanelDescription, MatExpansionPanelContent]
          }]
        }], null, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Generated bundle index. Do not edit.
       */
      //# sourceMappingURL=expansion.js.map

      /***/

    },

    /***/
    "A5z7":
    /*!***********************************************************************!*\
      !*** ./node_modules/@angular/material/__ivy_ngcc__/fesm2015/chips.js ***!
      \***********************************************************************/

    /*! exports provided: MAT_CHIPS_DEFAULT_OPTIONS, MAT_CHIP_AVATAR, MAT_CHIP_REMOVE, MAT_CHIP_TRAILING_ICON, MatChip, MatChipAvatar, MatChipInput, MatChipList, MatChipListChange, MatChipRemove, MatChipSelectionChange, MatChipTrailingIcon, MatChipsModule, ɵ0 */

    /***/
    function A5z7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_CHIPS_DEFAULT_OPTIONS", function () {
        return MAT_CHIPS_DEFAULT_OPTIONS;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_CHIP_AVATAR", function () {
        return MAT_CHIP_AVATAR;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_CHIP_REMOVE", function () {
        return MAT_CHIP_REMOVE;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_CHIP_TRAILING_ICON", function () {
        return MAT_CHIP_TRAILING_ICON;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatChip", function () {
        return MatChip;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatChipAvatar", function () {
        return MatChipAvatar;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatChipInput", function () {
        return MatChipInput;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatChipList", function () {
        return MatChipList;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatChipListChange", function () {
        return MatChipListChange;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatChipRemove", function () {
        return MatChipRemove;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatChipSelectionChange", function () {
        return MatChipSelectionChange;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatChipTrailingIcon", function () {
        return MatChipTrailingIcon;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatChipsModule", function () {
        return MatChipsModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵ0", function () {
        return ɵ0;
      });
      /* harmony import */


      var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/cdk/keycodes */
      "FtGj");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");
      /* harmony import */


      var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/cdk/coercion */
      "8LU1");
      /* harmony import */


      var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/cdk/platform */
      "nLfN");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "R1ws");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/cdk/a11y */
      "u47x");
      /* harmony import */


      var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/cdk/bidi */
      "cH1L");
      /* harmony import */


      var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/cdk/collections */
      "0EQZ");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** Event object emitted by MatChip when selected or deselected. */


      var _c0 = ["*"];

      var MatChipSelectionChange = function MatChipSelectionChange(
      /** Reference to the chip that emitted the event. */
      source,
      /** Whether the chip that emitted the event is selected. */
      selected) {
        var isUserInput = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

        _classCallCheck(this, MatChipSelectionChange);

        this.source = source;
        this.selected = selected;
        this.isUserInput = isUserInput;
      };
      /**
       * Injection token that can be used to reference instances of `MatChipRemove`. It serves as
       * alternative token to the actual `MatChipRemove` class which could cause unnecessary
       * retention of the class and its directive metadata.
       */


      var MAT_CHIP_REMOVE = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('MatChipRemove');
      /**
       * Injection token that can be used to reference instances of `MatChipAvatar`. It serves as
       * alternative token to the actual `MatChipAvatar` class which could cause unnecessary
       * retention of the class and its directive metadata.
       */

      var MAT_CHIP_AVATAR = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('MatChipAvatar');
      /**
       * Injection token that can be used to reference instances of `MatChipTrailingIcon`. It serves as
       * alternative token to the actual `MatChipTrailingIcon` class which could cause unnecessary
       * retention of the class and its directive metadata.
       */

      var MAT_CHIP_TRAILING_ICON = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('MatChipTrailingIcon'); // Boilerplate for applying mixins to MatChip.

      /** @docs-private */

      var MatChipBase = function MatChipBase(_elementRef) {
        _classCallCheck(this, MatChipBase);

        this._elementRef = _elementRef;
      };

      var _MatChipMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["mixinTabIndex"])(Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["mixinColor"])(Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["mixinDisableRipple"])(MatChipBase), 'primary'), -1);
      /**
       * Dummy directive to add CSS class to chip avatar.
       * @docs-private
       */


      var MatChipAvatar = function MatChipAvatar() {
        _classCallCheck(this, MatChipAvatar);
      };

      MatChipAvatar.ɵfac = function MatChipAvatar_Factory(t) {
        return new (t || MatChipAvatar)();
      };

      MatChipAvatar.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
        type: MatChipAvatar,
        selectors: [["mat-chip-avatar"], ["", "matChipAvatar", ""]],
        hostAttrs: [1, "mat-chip-avatar"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{
          provide: MAT_CHIP_AVATAR,
          useExisting: MatChipAvatar
        }])]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatChipAvatar, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
          args: [{
            selector: 'mat-chip-avatar, [matChipAvatar]',
            host: {
              'class': 'mat-chip-avatar'
            },
            providers: [{
              provide: MAT_CHIP_AVATAR,
              useExisting: MatChipAvatar
            }]
          }]
        }], null, null);
      })();
      /**
       * Dummy directive to add CSS class to chip trailing icon.
       * @docs-private
       */


      var MatChipTrailingIcon = function MatChipTrailingIcon() {
        _classCallCheck(this, MatChipTrailingIcon);
      };

      MatChipTrailingIcon.ɵfac = function MatChipTrailingIcon_Factory(t) {
        return new (t || MatChipTrailingIcon)();
      };

      MatChipTrailingIcon.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
        type: MatChipTrailingIcon,
        selectors: [["mat-chip-trailing-icon"], ["", "matChipTrailingIcon", ""]],
        hostAttrs: [1, "mat-chip-trailing-icon"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{
          provide: MAT_CHIP_TRAILING_ICON,
          useExisting: MatChipTrailingIcon
        }])]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatChipTrailingIcon, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
          args: [{
            selector: 'mat-chip-trailing-icon, [matChipTrailingIcon]',
            host: {
              'class': 'mat-chip-trailing-icon'
            },
            providers: [{
              provide: MAT_CHIP_TRAILING_ICON,
              useExisting: MatChipTrailingIcon
            }]
          }]
        }], null, null);
      })();
      /**
       * Material design styled Chip component. Used inside the MatChipList component.
       */


      var MatChip = /*#__PURE__*/function (_MatChipMixinBase2) {
        _inherits(MatChip, _MatChipMixinBase2);

        var _super8 = _createSuper(MatChip);

        function MatChip(_elementRef, _ngZone, platform, globalRippleOptions, // @breaking-change 8.0.0 `animationMode` parameter to become required.
        animationMode, // @breaking-change 9.0.0 `_changeDetectorRef` parameter to become required.
        _changeDetectorRef, tabIndex, // @breaking-change 11.0.0 `_document` parameter to become required.
        _document) {
          var _this20;

          _classCallCheck(this, MatChip);

          _this20 = _super8.call(this, _elementRef);
          _this20._elementRef = _elementRef;
          _this20._ngZone = _ngZone;
          _this20._changeDetectorRef = _changeDetectorRef;
          /** Whether the chip has focus. */

          _this20._hasFocus = false;
          /** Whether the chip list is selectable */

          _this20.chipListSelectable = true;
          /** Whether the chip list is in multi-selection mode. */

          _this20._chipListMultiple = false;
          /** Whether the chip list as a whole is disabled. */

          _this20._chipListDisabled = false;
          _this20._selected = false;
          _this20._selectable = true;
          _this20._disabled = false;
          _this20._removable = true;
          /** Emits when the chip is focused. */

          _this20._onFocus = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
          /** Emits when the chip is blured. */

          _this20._onBlur = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
          /** Emitted when the chip is selected or deselected. */

          _this20.selectionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          /** Emitted when the chip is destroyed. */

          _this20.destroyed = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          /** Emitted when a chip is to be removed. */

          _this20.removed = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();

          _this20._addHostClassName(); // Dynamically create the ripple target, append it within the chip, and use it as the
          // chip's ripple target. Adding the class '.mat-chip-ripple' ensures that it will have
          // the proper styles.


          _this20._chipRippleTarget = (_document || document).createElement('div');

          _this20._chipRippleTarget.classList.add('mat-chip-ripple');

          _this20._elementRef.nativeElement.appendChild(_this20._chipRippleTarget);

          _this20._chipRipple = new _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["RippleRenderer"](_assertThisInitialized(_this20), _ngZone, _this20._chipRippleTarget, platform);

          _this20._chipRipple.setupTriggerEvents(_elementRef);

          _this20.rippleConfig = globalRippleOptions || {};
          _this20._animationsDisabled = animationMode === 'NoopAnimations';
          _this20.tabIndex = tabIndex != null ? parseInt(tabIndex) || -1 : -1;
          return _this20;
        }
        /**
         * Whether ripples are disabled on interaction
         * @docs-private
         */


        _createClass(MatChip, [{
          key: "_addHostClassName",
          value: function _addHostClassName() {
            var basicChipAttrName = 'mat-basic-chip';
            var element = this._elementRef.nativeElement;

            if (element.hasAttribute(basicChipAttrName) || element.tagName.toLowerCase() === basicChipAttrName) {
              element.classList.add(basicChipAttrName);
              return;
            } else {
              element.classList.add('mat-standard-chip');
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.destroyed.emit({
              chip: this
            });

            this._chipRipple._removeTriggerEvents();
          }
          /** Selects the chip. */

        }, {
          key: "select",
          value: function select() {
            if (!this._selected) {
              this._selected = true;

              this._dispatchSelectionChange();

              this._markForCheck();
            }
          }
          /** Deselects the chip. */

        }, {
          key: "deselect",
          value: function deselect() {
            if (this._selected) {
              this._selected = false;

              this._dispatchSelectionChange();

              this._markForCheck();
            }
          }
          /** Select this chip and emit selected event */

        }, {
          key: "selectViaInteraction",
          value: function selectViaInteraction() {
            if (!this._selected) {
              this._selected = true;

              this._dispatchSelectionChange(true);

              this._markForCheck();
            }
          }
          /** Toggles the current selected state of this chip. */

        }, {
          key: "toggleSelected",
          value: function toggleSelected() {
            var isUserInput = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
            this._selected = !this.selected;

            this._dispatchSelectionChange(isUserInput);

            this._markForCheck();

            return this.selected;
          }
          /** Allows for programmatic focusing of the chip. */

        }, {
          key: "focus",
          value: function focus() {
            if (!this._hasFocus) {
              this._elementRef.nativeElement.focus();

              this._onFocus.next({
                chip: this
              });
            }

            this._hasFocus = true;
          }
          /**
           * Allows for programmatic removal of the chip. Called by the MatChipList when the DELETE or
           * BACKSPACE keys are pressed.
           *
           * Informs any listeners of the removal request. Does not remove the chip from the DOM.
           */

        }, {
          key: "remove",
          value: function remove() {
            if (this.removable) {
              this.removed.emit({
                chip: this
              });
            }
          }
          /** Handles click events on the chip. */

        }, {
          key: "_handleClick",
          value: function _handleClick(event) {
            if (this.disabled) {
              event.preventDefault();
            } else {
              event.stopPropagation();
            }
          }
          /** Handle custom key presses. */

        }, {
          key: "_handleKeydown",
          value: function _handleKeydown(event) {
            if (this.disabled) {
              return;
            }

            switch (event.keyCode) {
              case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_0__["DELETE"]:
              case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_0__["BACKSPACE"]:
                // If we are removable, remove the focused chip
                this.remove(); // Always prevent so page navigation does not occur

                event.preventDefault();
                break;

              case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_0__["SPACE"]:
                // If we are selectable, toggle the focused chip
                if (this.selectable) {
                  this.toggleSelected(true);
                } // Always prevent space from scrolling the page since the list has focus


                event.preventDefault();
                break;
            }
          }
        }, {
          key: "_blur",
          value: function _blur() {
            var _this21 = this;

            // When animations are enabled, Angular may end up removing the chip from the DOM a little
            // earlier than usual, causing it to be blurred and throwing off the logic in the chip list
            // that moves focus not the next item. To work around the issue, we defer marking the chip
            // as not focused until the next time the zone stabilizes.
            this._ngZone.onStable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["take"])(1)).subscribe(function () {
              _this21._ngZone.run(function () {
                _this21._hasFocus = false;

                _this21._onBlur.next({
                  chip: _this21
                });
              });
            });
          }
        }, {
          key: "_dispatchSelectionChange",
          value: function _dispatchSelectionChange() {
            var isUserInput = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
            this.selectionChange.emit({
              source: this,
              isUserInput: isUserInput,
              selected: this._selected
            });
          }
        }, {
          key: "_markForCheck",
          value: function _markForCheck() {
            // @breaking-change 9.0.0 Remove this method once the _changeDetectorRef is a required param.
            if (this._changeDetectorRef) {
              this._changeDetectorRef.markForCheck();
            }
          }
        }, {
          key: "rippleDisabled",
          get: function get() {
            return this.disabled || this.disableRipple || !!this.rippleConfig.disabled;
          }
          /** Whether the chip is selected. */

        }, {
          key: "selected",
          get: function get() {
            return this._selected;
          },
          set: function set(value) {
            var coercedValue = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceBooleanProperty"])(value);

            if (coercedValue !== this._selected) {
              this._selected = coercedValue;

              this._dispatchSelectionChange();
            }
          }
          /** The value of the chip. Defaults to the content inside `<mat-chip>` tags. */

        }, {
          key: "value",
          get: function get() {
            return this._value !== undefined ? this._value : this._elementRef.nativeElement.textContent;
          },
          set: function set(value) {
            this._value = value;
          }
          /**
           * Whether or not the chip is selectable. When a chip is not selectable,
           * changes to its selected state are always ignored. By default a chip is
           * selectable, and it becomes non-selectable if its parent chip list is
           * not selectable.
           */

        }, {
          key: "selectable",
          get: function get() {
            return this._selectable && this.chipListSelectable;
          },
          set: function set(value) {
            this._selectable = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceBooleanProperty"])(value);
          }
          /** Whether the chip is disabled. */

        }, {
          key: "disabled",
          get: function get() {
            return this._chipListDisabled || this._disabled;
          },
          set: function set(value) {
            this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceBooleanProperty"])(value);
          }
          /**
           * Determines whether or not the chip displays the remove styling and emits (removed) events.
           */

        }, {
          key: "removable",
          get: function get() {
            return this._removable;
          },
          set: function set(value) {
            this._removable = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceBooleanProperty"])(value);
          }
          /** The ARIA selected applied to the chip. */

        }, {
          key: "ariaSelected",
          get: function get() {
            // Remove the `aria-selected` when the chip is deselected in single-selection mode, because
            // it adds noise to NVDA users where "not selected" will be read out for each chip.
            return this.selectable && (this._chipListMultiple || this.selected) ? this.selected.toString() : null;
          }
        }]);

        return MatChip;
      }(_MatChipMixinBase);

      MatChip.ɵfac = function MatChip_Factory(t) {
        return new (t || MatChip)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MAT_RIPPLE_GLOBAL_OPTIONS"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinjectAttribute"]('tabindex'), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"], 8));
      };

      MatChip.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
        type: MatChip,
        selectors: [["mat-basic-chip"], ["", "mat-basic-chip", ""], ["mat-chip"], ["", "mat-chip", ""]],
        contentQueries: function MatChip_ContentQueries(rf, ctx, dirIndex) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, MAT_CHIP_AVATAR, true);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, MAT_CHIP_TRAILING_ICON, true);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, MAT_CHIP_REMOVE, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.avatar = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.trailingIcon = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.removeIcon = _t.first);
          }
        },
        hostAttrs: ["role", "option", 1, "mat-chip", "mat-focus-indicator"],
        hostVars: 14,
        hostBindings: function MatChip_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MatChip_click_HostBindingHandler($event) {
              return ctx._handleClick($event);
            })("keydown", function MatChip_keydown_HostBindingHandler($event) {
              return ctx._handleKeydown($event);
            })("focus", function MatChip_focus_HostBindingHandler() {
              return ctx.focus();
            })("blur", function MatChip_blur_HostBindingHandler() {
              return ctx._blur();
            });
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("tabindex", ctx.disabled ? null : ctx.tabIndex)("disabled", ctx.disabled || null)("aria-disabled", ctx.disabled.toString())("aria-selected", ctx.ariaSelected);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("mat-chip-selected", ctx.selected)("mat-chip-with-avatar", ctx.avatar)("mat-chip-with-trailing-icon", ctx.trailingIcon || ctx.removeIcon)("mat-chip-disabled", ctx.disabled)("_mat-animation-noopable", ctx._animationsDisabled);
          }
        },
        inputs: {
          color: "color",
          disableRipple: "disableRipple",
          tabIndex: "tabIndex",
          selected: "selected",
          value: "value",
          selectable: "selectable",
          disabled: "disabled",
          removable: "removable"
        },
        outputs: {
          selectionChange: "selectionChange",
          destroyed: "destroyed",
          removed: "removed"
        },
        exportAs: ["matChip"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]]
      });

      MatChip.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }, {
          type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MAT_RIPPLE_GLOBAL_OPTIONS"]]
          }]
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"]]
          }]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Attribute"],
            args: ['tabindex']
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"]]
          }]
        }];
      };

      MatChip.propDecorators = {
        avatar: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"],
          args: [MAT_CHIP_AVATAR]
        }],
        trailingIcon: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"],
          args: [MAT_CHIP_TRAILING_ICON]
        }],
        removeIcon: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"],
          args: [MAT_CHIP_REMOVE]
        }],
        selected: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        value: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        selectable: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        disabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        removable: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        selectionChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        destroyed: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        removed: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatChip, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
          args: [{
            selector: "mat-basic-chip, [mat-basic-chip], mat-chip, [mat-chip]",
            inputs: ['color', 'disableRipple', 'tabIndex'],
            exportAs: 'matChip',
            host: {
              'class': 'mat-chip mat-focus-indicator',
              '[attr.tabindex]': 'disabled ? null : tabIndex',
              'role': 'option',
              '[class.mat-chip-selected]': 'selected',
              '[class.mat-chip-with-avatar]': 'avatar',
              '[class.mat-chip-with-trailing-icon]': 'trailingIcon || removeIcon',
              '[class.mat-chip-disabled]': 'disabled',
              '[class._mat-animation-noopable]': '_animationsDisabled',
              '[attr.disabled]': 'disabled || null',
              '[attr.aria-disabled]': 'disabled.toString()',
              '[attr.aria-selected]': 'ariaSelected',
              '(click)': '_handleClick($event)',
              '(keydown)': '_handleKeydown($event)',
              '(focus)': 'focus()',
              '(blur)': '_blur()'
            }
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
          }, {
            type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
              args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MAT_RIPPLE_GLOBAL_OPTIONS"]]
            }]
          }, {
            type: String,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
              args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"]]
            }]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
          }, {
            type: String,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Attribute"],
              args: ['tabindex']
            }]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
              args: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"]]
            }]
          }];
        }, {
          selectionChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          destroyed: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          removed: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          selected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          value: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          selectable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          removable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          avatar: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"],
            args: [MAT_CHIP_AVATAR]
          }],
          trailingIcon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"],
            args: [MAT_CHIP_TRAILING_ICON]
          }],
          removeIcon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"],
            args: [MAT_CHIP_REMOVE]
          }]
        });
      })();
      /**
       * Applies proper (click) support and adds styling for use with the Material Design "cancel" icon
       * available at https://material.io/icons/#ic_cancel.
       *
       * Example:
       *
       *     `<mat-chip>
       *       <mat-icon matChipRemove>cancel</mat-icon>
       *     </mat-chip>`
       *
       * You *may* use a custom icon, but you may need to override the `mat-chip-remove` positioning
       * styles to properly center the icon within the chip.
       */


      var MatChipRemove = /*#__PURE__*/function () {
        function MatChipRemove(_parentChip, // @breaking-change 11.0.0 `elementRef` parameter to be made required.
        elementRef) {
          _classCallCheck(this, MatChipRemove);

          this._parentChip = _parentChip; // @breaking-change 11.0.0 Remove null check for `elementRef`.

          if (elementRef && elementRef.nativeElement.nodeName === 'BUTTON') {
            elementRef.nativeElement.setAttribute('type', 'button');
          }
        }
        /** Calls the parent chip's public `remove()` method if applicable. */


        _createClass(MatChipRemove, [{
          key: "_handleClick",
          value: function _handleClick(event) {
            var parentChip = this._parentChip;

            if (parentChip.removable && !parentChip.disabled) {
              parentChip.remove();
            } // We need to stop event propagation because otherwise the event will bubble up to the
            // form field and cause the `onContainerClick` method to be invoked. This method would then
            // reset the focused chip that has been focused after chip removal. Usually the parent
            // the parent click listener of the `MatChip` would prevent propagation, but it can happen
            // that the chip is being removed before the event bubbles up.


            event.stopPropagation();
          }
        }]);

        return MatChipRemove;
      }();

      MatChipRemove.ɵfac = function MatChipRemove_Factory(t) {
        return new (t || MatChipRemove)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](MatChip), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]));
      };

      MatChipRemove.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
        type: MatChipRemove,
        selectors: [["", "matChipRemove", ""]],
        hostAttrs: [1, "mat-chip-remove", "mat-chip-trailing-icon"],
        hostBindings: function MatChipRemove_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MatChipRemove_click_HostBindingHandler($event) {
              return ctx._handleClick($event);
            });
          }
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{
          provide: MAT_CHIP_REMOVE,
          useExisting: MatChipRemove
        }])]
      });

      MatChipRemove.ctorParameters = function () {
        return [{
          type: MatChip
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatChipRemove, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
          args: [{
            selector: '[matChipRemove]',
            host: {
              'class': 'mat-chip-remove mat-chip-trailing-icon',
              '(click)': '_handleClick($event)'
            },
            providers: [{
              provide: MAT_CHIP_REMOVE,
              useExisting: MatChipRemove
            }]
          }]
        }], function () {
          return [{
            type: MatChip
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
          }];
        }, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** Injection token to be used to override the default options for the chips module. */


      var MAT_CHIPS_DEFAULT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('mat-chips-default-options');
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
      // Boilerplate for applying mixins to MatChipList.

      /** @docs-private */

      var MatChipListBase = function MatChipListBase(_defaultErrorStateMatcher, _parentForm, _parentFormGroup,
      /** @docs-private */
      ngControl) {
        _classCallCheck(this, MatChipListBase);

        this._defaultErrorStateMatcher = _defaultErrorStateMatcher;
        this._parentForm = _parentForm;
        this._parentFormGroup = _parentFormGroup;
        this.ngControl = ngControl;
      };

      var _MatChipListMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["mixinErrorState"])(MatChipListBase); // Increasing integer for generating unique ids for chip-list components.


      var nextUniqueId = 0;
      /** Change event object that is emitted when the chip list value has changed. */

      var MatChipListChange = function MatChipListChange(
      /** Chip list that emitted the event. */
      source,
      /** Value of the chip list when the event was emitted. */
      value) {
        _classCallCheck(this, MatChipListChange);

        this.source = source;
        this.value = value;
      };
      /**
       * A material design chips component (named ChipList for its similarity to the List component).
       */


      var MatChipList = /*#__PURE__*/function (_MatChipListMixinBase2) {
        _inherits(MatChipList, _MatChipListMixinBase2);

        var _super9 = _createSuper(MatChipList);

        function MatChipList(_elementRef, _changeDetectorRef, _dir, _parentForm, _parentFormGroup, _defaultErrorStateMatcher,
        /** @docs-private */
        ngControl) {
          var _this22;

          _classCallCheck(this, MatChipList);

          _this22 = _super9.call(this, _defaultErrorStateMatcher, _parentForm, _parentFormGroup, ngControl);
          _this22._elementRef = _elementRef;
          _this22._changeDetectorRef = _changeDetectorRef;
          _this22._dir = _dir;
          _this22.ngControl = ngControl;
          /**
           * Implemented as part of MatFormFieldControl.
           * @docs-private
           */

          _this22.controlType = 'mat-chip-list';
          /**
           * When a chip is destroyed, we store the index of the destroyed chip until the chips
           * query list notifies about the update. This is necessary because we cannot determine an
           * appropriate chip that should receive focus until the array of chips updated completely.
           */

          _this22._lastDestroyedChipIndex = null;
          /** Subject that emits when the component has been destroyed. */

          _this22._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
          /** Uid of the chip list */

          _this22._uid = "mat-chip-list-".concat(nextUniqueId++);
          /** Tab index for the chip list. */

          _this22._tabIndex = 0;
          /**
           * User defined tab index.
           * When it is not null, use user defined tab index. Otherwise use _tabIndex
           */

          _this22._userTabIndex = null;
          /** Function when touched */

          _this22._onTouched = function () {};
          /** Function when changed */


          _this22._onChange = function () {};

          _this22._multiple = false;

          _this22._compareWith = function (o1, o2) {
            return o1 === o2;
          };

          _this22._required = false;
          _this22._disabled = false;
          /** Orientation of the chip list. */

          _this22.ariaOrientation = 'horizontal';
          _this22._selectable = true;
          /** Event emitted when the selected chip list value has been changed by the user. */

          _this22.change = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          /**
           * Event that emits whenever the raw value of the chip-list changes. This is here primarily
           * to facilitate the two-way binding for the `value` input.
           * @docs-private
           */

          _this22.valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();

          if (_this22.ngControl) {
            _this22.ngControl.valueAccessor = _assertThisInitialized(_this22);
          }

          return _this22;
        }
        /** The array of selected chips inside chip list. */


        _createClass(MatChipList, [{
          key: "ngAfterContentInit",
          value: function ngAfterContentInit() {
            var _this23 = this;

            this._keyManager = new _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_9__["FocusKeyManager"](this.chips).withWrap().withVerticalOrientation().withHomeAndEnd().withHorizontalOrientation(this._dir ? this._dir.value : 'ltr');

            if (this._dir) {
              this._dir.change.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["takeUntil"])(this._destroyed)).subscribe(function (dir) {
                return _this23._keyManager.withHorizontalOrientation(dir);
              });
            }

            this._keyManager.tabOut.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["takeUntil"])(this._destroyed)).subscribe(function () {
              _this23._allowFocusEscape();
            }); // When the list changes, re-subscribe


            this.chips.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["startWith"])(null), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["takeUntil"])(this._destroyed)).subscribe(function () {
              if (_this23.disabled) {
                // Since this happens after the content has been
                // checked, we need to defer it to the next tick.
                Promise.resolve().then(function () {
                  _this23._syncChipsState();
                });
              }

              _this23._resetChips(); // Reset chips selected/deselected status


              _this23._initializeSelection(); // Check to see if we need to update our tab index


              _this23._updateTabIndex(); // Check to see if we have a destroyed chip and need to refocus


              _this23._updateFocusForDestroyedChips();

              _this23.stateChanges.next();
            });
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this._selectionModel = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_11__["SelectionModel"](this.multiple, undefined, false);
            this.stateChanges.next();
          }
        }, {
          key: "ngDoCheck",
          value: function ngDoCheck() {
            if (this.ngControl) {
              // We need to re-evaluate this on every change detection cycle, because there are some
              // error triggers that we can't subscribe to (e.g. parent form submissions). This means
              // that whatever logic is in here has to be super lean or we risk destroying the performance.
              this.updateErrorState();

              if (this.ngControl.disabled !== this._disabled) {
                this.disabled = !!this.ngControl.disabled;
              }
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._destroyed.next();

            this._destroyed.complete();

            this.stateChanges.complete();

            this._dropSubscriptions();
          }
          /** Associates an HTML input element with this chip list. */

        }, {
          key: "registerInput",
          value: function registerInput(inputElement) {
            this._chipInput = inputElement; // We use this attribute to match the chip list to its input in test harnesses.
            // Set the attribute directly here to avoid "changed after checked" errors.

            this._elementRef.nativeElement.setAttribute('data-mat-chip-input', inputElement.id);
          }
          /**
           * Implemented as part of MatFormFieldControl.
           * @docs-private
           */

        }, {
          key: "setDescribedByIds",
          value: function setDescribedByIds(ids) {
            this._ariaDescribedby = ids.join(' ');
          } // Implemented as part of ControlValueAccessor.

        }, {
          key: "writeValue",
          value: function writeValue(value) {
            if (this.chips) {
              this._setSelectionByValue(value, false);
            }
          } // Implemented as part of ControlValueAccessor.

        }, {
          key: "registerOnChange",
          value: function registerOnChange(fn) {
            this._onChange = fn;
          } // Implemented as part of ControlValueAccessor.

        }, {
          key: "registerOnTouched",
          value: function registerOnTouched(fn) {
            this._onTouched = fn;
          } // Implemented as part of ControlValueAccessor.

        }, {
          key: "setDisabledState",
          value: function setDisabledState(isDisabled) {
            this.disabled = isDisabled;
            this.stateChanges.next();
          }
          /**
           * Implemented as part of MatFormFieldControl.
           * @docs-private
           */

        }, {
          key: "onContainerClick",
          value: function onContainerClick(event) {
            if (!this._originatesFromChip(event)) {
              this.focus();
            }
          }
          /**
           * Focuses the first non-disabled chip in this chip list, or the associated input when there
           * are no eligible chips.
           */

        }, {
          key: "focus",
          value: function focus(options) {
            if (this.disabled) {
              return;
            } // TODO: ARIA says this should focus the first `selected` chip if any are selected.
            // Focus on first element if there's no chipInput inside chip-list


            if (this._chipInput && this._chipInput.focused) {// do nothing
            } else if (this.chips.length > 0) {
              this._keyManager.setFirstItemActive();

              this.stateChanges.next();
            } else {
              this._focusInput(options);

              this.stateChanges.next();
            }
          }
          /** Attempt to focus an input if we have one. */

        }, {
          key: "_focusInput",
          value: function _focusInput(options) {
            if (this._chipInput) {
              this._chipInput.focus(options);
            }
          }
          /**
           * Pass events to the keyboard manager. Available here for tests.
           */

        }, {
          key: "_keydown",
          value: function _keydown(event) {
            var target = event.target; // If they are on an empty input and hit backspace, focus the last chip

            if (event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_0__["BACKSPACE"] && this._isInputEmpty(target)) {
              this._keyManager.setLastItemActive();

              event.preventDefault();
            } else if (target && target.classList.contains('mat-chip')) {
              this._keyManager.onKeydown(event);

              this.stateChanges.next();
            }
          }
          /**
           * Check the tab index as you should not be allowed to focus an empty list.
           */

        }, {
          key: "_updateTabIndex",
          value: function _updateTabIndex() {
            // If we have 0 chips, we should not allow keyboard focus
            this._tabIndex = this._userTabIndex || (this.chips.length === 0 ? -1 : 0);
          }
          /**
           * If the amount of chips changed, we need to update the
           * key manager state and focus the next closest chip.
           */

        }, {
          key: "_updateFocusForDestroyedChips",
          value: function _updateFocusForDestroyedChips() {
            // Move focus to the closest chip. If no other chips remain, focus the chip-list itself.
            if (this._lastDestroyedChipIndex != null) {
              if (this.chips.length) {
                var newChipIndex = Math.min(this._lastDestroyedChipIndex, this.chips.length - 1);

                this._keyManager.setActiveItem(newChipIndex);
              } else {
                this.focus();
              }
            }

            this._lastDestroyedChipIndex = null;
          }
          /**
           * Utility to ensure all indexes are valid.
           *
           * @param index The index to be checked.
           * @returns True if the index is valid for our list of chips.
           */

        }, {
          key: "_isValidIndex",
          value: function _isValidIndex(index) {
            return index >= 0 && index < this.chips.length;
          }
        }, {
          key: "_isInputEmpty",
          value: function _isInputEmpty(element) {
            if (element && element.nodeName.toLowerCase() === 'input') {
              var input = element;
              return !input.value;
            }

            return false;
          }
        }, {
          key: "_setSelectionByValue",
          value: function _setSelectionByValue(value) {
            var _this24 = this;

            var isUserInput = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

            this._clearSelection();

            this.chips.forEach(function (chip) {
              return chip.deselect();
            });

            if (Array.isArray(value)) {
              value.forEach(function (currentValue) {
                return _this24._selectValue(currentValue, isUserInput);
              });

              this._sortValues();
            } else {
              var correspondingChip = this._selectValue(value, isUserInput); // Shift focus to the active item. Note that we shouldn't do this in multiple
              // mode, because we don't know what chip the user interacted with last.


              if (correspondingChip) {
                if (isUserInput) {
                  this._keyManager.setActiveItem(correspondingChip);
                }
              }
            }
          }
          /**
           * Finds and selects the chip based on its value.
           * @returns Chip that has the corresponding value.
           */

        }, {
          key: "_selectValue",
          value: function _selectValue(value) {
            var _this25 = this;

            var isUserInput = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
            var correspondingChip = this.chips.find(function (chip) {
              return chip.value != null && _this25._compareWith(chip.value, value);
            });

            if (correspondingChip) {
              isUserInput ? correspondingChip.selectViaInteraction() : correspondingChip.select();

              this._selectionModel.select(correspondingChip);
            }

            return correspondingChip;
          }
        }, {
          key: "_initializeSelection",
          value: function _initializeSelection() {
            var _this26 = this;

            // Defer setting the value in order to avoid the "Expression
            // has changed after it was checked" errors from Angular.
            Promise.resolve().then(function () {
              if (_this26.ngControl || _this26._value) {
                _this26._setSelectionByValue(_this26.ngControl ? _this26.ngControl.value : _this26._value, false);

                _this26.stateChanges.next();
              }
            });
          }
          /**
           * Deselects every chip in the list.
           * @param skip Chip that should not be deselected.
           */

        }, {
          key: "_clearSelection",
          value: function _clearSelection(skip) {
            this._selectionModel.clear();

            this.chips.forEach(function (chip) {
              if (chip !== skip) {
                chip.deselect();
              }
            });
            this.stateChanges.next();
          }
          /**
           * Sorts the model values, ensuring that they keep the same
           * order that they have in the panel.
           */

        }, {
          key: "_sortValues",
          value: function _sortValues() {
            var _this27 = this;

            if (this._multiple) {
              this._selectionModel.clear();

              this.chips.forEach(function (chip) {
                if (chip.selected) {
                  _this27._selectionModel.select(chip);
                }
              });
              this.stateChanges.next();
            }
          }
          /** Emits change event to set the model value. */

        }, {
          key: "_propagateChanges",
          value: function _propagateChanges(fallbackValue) {
            var valueToEmit = null;

            if (Array.isArray(this.selected)) {
              valueToEmit = this.selected.map(function (chip) {
                return chip.value;
              });
            } else {
              valueToEmit = this.selected ? this.selected.value : fallbackValue;
            }

            this._value = valueToEmit;
            this.change.emit(new MatChipListChange(this, valueToEmit));
            this.valueChange.emit(valueToEmit);

            this._onChange(valueToEmit);

            this._changeDetectorRef.markForCheck();
          }
          /** When blurred, mark the field as touched when focus moved outside the chip list. */

        }, {
          key: "_blur",
          value: function _blur() {
            var _this28 = this;

            if (!this._hasFocusedChip()) {
              this._keyManager.setActiveItem(-1);
            }

            if (!this.disabled) {
              if (this._chipInput) {
                // If there's a chip input, we should check whether the focus moved to chip input.
                // If the focus is not moved to chip input, mark the field as touched. If the focus moved
                // to chip input, do nothing.
                // Timeout is needed to wait for the focus() event trigger on chip input.
                setTimeout(function () {
                  if (!_this28.focused) {
                    _this28._markAsTouched();
                  }
                });
              } else {
                // If there's no chip input, then mark the field as touched.
                this._markAsTouched();
              }
            }
          }
          /** Mark the field as touched */

        }, {
          key: "_markAsTouched",
          value: function _markAsTouched() {
            this._onTouched();

            this._changeDetectorRef.markForCheck();

            this.stateChanges.next();
          }
          /**
           * Removes the `tabindex` from the chip list and resets it back afterwards, allowing the
           * user to tab out of it. This prevents the list from capturing focus and redirecting
           * it back to the first chip, creating a focus trap, if it user tries to tab away.
           */

        }, {
          key: "_allowFocusEscape",
          value: function _allowFocusEscape() {
            var _this29 = this;

            if (this._tabIndex !== -1) {
              this._tabIndex = -1;
              setTimeout(function () {
                _this29._tabIndex = _this29._userTabIndex || 0;

                _this29._changeDetectorRef.markForCheck();
              });
            }
          }
        }, {
          key: "_resetChips",
          value: function _resetChips() {
            this._dropSubscriptions();

            this._listenToChipsFocus();

            this._listenToChipsSelection();

            this._listenToChipsRemoved();
          }
        }, {
          key: "_dropSubscriptions",
          value: function _dropSubscriptions() {
            if (this._chipFocusSubscription) {
              this._chipFocusSubscription.unsubscribe();

              this._chipFocusSubscription = null;
            }

            if (this._chipBlurSubscription) {
              this._chipBlurSubscription.unsubscribe();

              this._chipBlurSubscription = null;
            }

            if (this._chipSelectionSubscription) {
              this._chipSelectionSubscription.unsubscribe();

              this._chipSelectionSubscription = null;
            }

            if (this._chipRemoveSubscription) {
              this._chipRemoveSubscription.unsubscribe();

              this._chipRemoveSubscription = null;
            }
          }
          /** Listens to user-generated selection events on each chip. */

        }, {
          key: "_listenToChipsSelection",
          value: function _listenToChipsSelection() {
            var _this30 = this;

            this._chipSelectionSubscription = this.chipSelectionChanges.subscribe(function (event) {
              event.source.selected ? _this30._selectionModel.select(event.source) : _this30._selectionModel.deselect(event.source); // For single selection chip list, make sure the deselected value is unselected.

              if (!_this30.multiple) {
                _this30.chips.forEach(function (chip) {
                  if (!_this30._selectionModel.isSelected(chip) && chip.selected) {
                    chip.deselect();
                  }
                });
              }

              if (event.isUserInput) {
                _this30._propagateChanges();
              }
            });
          }
          /** Listens to user-generated selection events on each chip. */

        }, {
          key: "_listenToChipsFocus",
          value: function _listenToChipsFocus() {
            var _this31 = this;

            this._chipFocusSubscription = this.chipFocusChanges.subscribe(function (event) {
              var chipIndex = _this31.chips.toArray().indexOf(event.chip);

              if (_this31._isValidIndex(chipIndex)) {
                _this31._keyManager.updateActiveItem(chipIndex);
              }

              _this31.stateChanges.next();
            });
            this._chipBlurSubscription = this.chipBlurChanges.subscribe(function () {
              _this31._blur();

              _this31.stateChanges.next();
            });
          }
        }, {
          key: "_listenToChipsRemoved",
          value: function _listenToChipsRemoved() {
            var _this32 = this;

            this._chipRemoveSubscription = this.chipRemoveChanges.subscribe(function (event) {
              var chip = event.chip;

              var chipIndex = _this32.chips.toArray().indexOf(event.chip); // In case the chip that will be removed is currently focused, we temporarily store
              // the index in order to be able to determine an appropriate sibling chip that will
              // receive focus.


              if (_this32._isValidIndex(chipIndex) && chip._hasFocus) {
                _this32._lastDestroyedChipIndex = chipIndex;
              }
            });
          }
          /** Checks whether an event comes from inside a chip element. */

        }, {
          key: "_originatesFromChip",
          value: function _originatesFromChip(event) {
            var currentElement = event.target;

            while (currentElement && currentElement !== this._elementRef.nativeElement) {
              if (currentElement.classList.contains('mat-chip')) {
                return true;
              }

              currentElement = currentElement.parentElement;
            }

            return false;
          }
          /** Checks whether any of the chips is focused. */

        }, {
          key: "_hasFocusedChip",
          value: function _hasFocusedChip() {
            return this.chips && this.chips.some(function (chip) {
              return chip._hasFocus;
            });
          }
          /** Syncs the list's state with the individual chips. */

        }, {
          key: "_syncChipsState",
          value: function _syncChipsState() {
            var _this33 = this;

            if (this.chips) {
              this.chips.forEach(function (chip) {
                chip._chipListDisabled = _this33._disabled;
                chip._chipListMultiple = _this33.multiple;
              });
            }
          }
        }, {
          key: "selected",
          get: function get() {
            return this.multiple ? this._selectionModel.selected : this._selectionModel.selected[0];
          }
          /** The ARIA role applied to the chip list. */

        }, {
          key: "role",
          get: function get() {
            return this.empty ? null : 'listbox';
          }
          /** Whether the user should be allowed to select multiple chips. */

        }, {
          key: "multiple",
          get: function get() {
            return this._multiple;
          },
          set: function set(value) {
            this._multiple = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceBooleanProperty"])(value);

            this._syncChipsState();
          }
          /**
           * A function to compare the option values with the selected values. The first argument
           * is a value from an option. The second is a value from the selection. A boolean
           * should be returned.
           */

        }, {
          key: "compareWith",
          get: function get() {
            return this._compareWith;
          },
          set: function set(fn) {
            this._compareWith = fn;

            if (this._selectionModel) {
              // A different comparator means the selection could change.
              this._initializeSelection();
            }
          }
          /**
           * Implemented as part of MatFormFieldControl.
           * @docs-private
           */

        }, {
          key: "value",
          get: function get() {
            return this._value;
          },
          set: function set(value) {
            this.writeValue(value);
            this._value = value;
          }
          /**
           * Implemented as part of MatFormFieldControl.
           * @docs-private
           */

        }, {
          key: "id",
          get: function get() {
            return this._chipInput ? this._chipInput.id : this._uid;
          }
          /**
           * Implemented as part of MatFormFieldControl.
           * @docs-private
           */

        }, {
          key: "required",
          get: function get() {
            return this._required;
          },
          set: function set(value) {
            this._required = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceBooleanProperty"])(value);
            this.stateChanges.next();
          }
          /**
           * Implemented as part of MatFormFieldControl.
           * @docs-private
           */

        }, {
          key: "placeholder",
          get: function get() {
            return this._chipInput ? this._chipInput.placeholder : this._placeholder;
          },
          set: function set(value) {
            this._placeholder = value;
            this.stateChanges.next();
          }
          /** Whether any chips or the matChipInput inside of this chip-list has focus. */

        }, {
          key: "focused",
          get: function get() {
            return this._chipInput && this._chipInput.focused || this._hasFocusedChip();
          }
          /**
           * Implemented as part of MatFormFieldControl.
           * @docs-private
           */

        }, {
          key: "empty",
          get: function get() {
            return (!this._chipInput || this._chipInput.empty) && (!this.chips || this.chips.length === 0);
          }
          /**
           * Implemented as part of MatFormFieldControl.
           * @docs-private
           */

        }, {
          key: "shouldLabelFloat",
          get: function get() {
            return !this.empty || this.focused;
          }
          /**
           * Implemented as part of MatFormFieldControl.
           * @docs-private
           */

        }, {
          key: "disabled",
          get: function get() {
            return this.ngControl ? !!this.ngControl.disabled : this._disabled;
          },
          set: function set(value) {
            this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceBooleanProperty"])(value);

            this._syncChipsState();
          }
          /**
           * Whether or not this chip list is selectable. When a chip list is not selectable,
           * the selected states for all the chips inside the chip list are always ignored.
           */

        }, {
          key: "selectable",
          get: function get() {
            return this._selectable;
          },
          set: function set(value) {
            var _this34 = this;

            this._selectable = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceBooleanProperty"])(value);

            if (this.chips) {
              this.chips.forEach(function (chip) {
                return chip.chipListSelectable = _this34._selectable;
              });
            }
          }
        }, {
          key: "tabIndex",
          set: function set(value) {
            this._userTabIndex = value;
            this._tabIndex = value;
          }
          /** Combined stream of all of the child chips' selection change events. */

        }, {
          key: "chipSelectionChanges",
          get: function get() {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["merge"]).apply(void 0, _toConsumableArray(this.chips.map(function (chip) {
              return chip.selectionChange;
            })));
          }
          /** Combined stream of all of the child chips' focus change events. */

        }, {
          key: "chipFocusChanges",
          get: function get() {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["merge"]).apply(void 0, _toConsumableArray(this.chips.map(function (chip) {
              return chip._onFocus;
            })));
          }
          /** Combined stream of all of the child chips' blur change events. */

        }, {
          key: "chipBlurChanges",
          get: function get() {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["merge"]).apply(void 0, _toConsumableArray(this.chips.map(function (chip) {
              return chip._onBlur;
            })));
          }
          /** Combined stream of all of the child chips' remove change events. */

        }, {
          key: "chipRemoveChanges",
          get: function get() {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["merge"]).apply(void 0, _toConsumableArray(this.chips.map(function (chip) {
              return chip.destroyed;
            })));
          }
        }]);

        return MatChipList;
      }(_MatChipListMixinBase);

      MatChipList.ɵfac = function MatChipList_Factory(t) {
        return new (t || MatChipList)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__["Directionality"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgForm"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormGroupDirective"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["ErrorStateMatcher"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgControl"], 10));
      };

      MatChipList.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: MatChipList,
        selectors: [["mat-chip-list"]],
        contentQueries: function MatChipList_ContentQueries(rf, ctx, dirIndex) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, MatChip, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.chips = _t);
          }
        },
        hostAttrs: [1, "mat-chip-list"],
        hostVars: 15,
        hostBindings: function MatChipList_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("focus", function MatChipList_focus_HostBindingHandler() {
              return ctx.focus();
            })("blur", function MatChipList_blur_HostBindingHandler() {
              return ctx._blur();
            })("keydown", function MatChipList_keydown_HostBindingHandler($event) {
              return ctx._keydown($event);
            });
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵhostProperty"]("id", ctx._uid);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("tabindex", ctx.disabled ? null : ctx._tabIndex)("aria-describedby", ctx._ariaDescribedby || null)("aria-required", ctx.role ? ctx.required : null)("aria-disabled", ctx.disabled.toString())("aria-invalid", ctx.errorState)("aria-multiselectable", ctx.multiple)("role", ctx.role)("aria-orientation", ctx.ariaOrientation);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("mat-chip-list-disabled", ctx.disabled)("mat-chip-list-invalid", ctx.errorState)("mat-chip-list-required", ctx.required);
          }
        },
        inputs: {
          ariaOrientation: ["aria-orientation", "ariaOrientation"],
          multiple: "multiple",
          compareWith: "compareWith",
          value: "value",
          required: "required",
          placeholder: "placeholder",
          disabled: "disabled",
          selectable: "selectable",
          tabIndex: "tabIndex",
          errorStateMatcher: "errorStateMatcher"
        },
        outputs: {
          change: "change",
          valueChange: "valueChange"
        },
        exportAs: ["matChipList"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{
          provide: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormFieldControl"],
          useExisting: MatChipList
        }]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
        ngContentSelectors: _c0,
        decls: 2,
        vars: 0,
        consts: [[1, "mat-chip-list-wrapper"]],
        template: function MatChipList_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }
        },
        styles: [".mat-chip{position:relative;box-sizing:border-box;-webkit-tap-highlight-color:transparent;transform:translateZ(0);border:none;-webkit-appearance:none;-moz-appearance:none}.mat-standard-chip{transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);display:inline-flex;padding:7px 12px;border-radius:16px;align-items:center;cursor:default;min-height:32px;height:1px}._mat-animation-noopable.mat-standard-chip{transition:none;animation:none}.mat-standard-chip .mat-chip-remove.mat-icon{width:18px;height:18px}.mat-standard-chip::after{top:0;left:0;right:0;bottom:0;position:absolute;border-radius:inherit;opacity:0;content:\"\";pointer-events:none;transition:opacity 200ms cubic-bezier(0.35, 0, 0.25, 1)}.mat-standard-chip:hover::after{opacity:.12}.mat-standard-chip:focus{outline:none}.mat-standard-chip:focus::after{opacity:.16}.cdk-high-contrast-active .mat-standard-chip{outline:solid 1px}.cdk-high-contrast-active .mat-standard-chip:focus{outline:dotted 2px}.mat-standard-chip.mat-chip-disabled::after{opacity:0}.mat-standard-chip.mat-chip-disabled .mat-chip-remove,.mat-standard-chip.mat-chip-disabled .mat-chip-trailing-icon{cursor:default}.mat-standard-chip.mat-chip-with-trailing-icon.mat-chip-with-avatar,.mat-standard-chip.mat-chip-with-avatar{padding-top:0;padding-bottom:0}.mat-standard-chip.mat-chip-with-trailing-icon.mat-chip-with-avatar{padding-right:8px;padding-left:0}[dir=rtl] .mat-standard-chip.mat-chip-with-trailing-icon.mat-chip-with-avatar{padding-left:8px;padding-right:0}.mat-standard-chip.mat-chip-with-trailing-icon{padding-top:7px;padding-bottom:7px;padding-right:8px;padding-left:12px}[dir=rtl] .mat-standard-chip.mat-chip-with-trailing-icon{padding-left:8px;padding-right:12px}.mat-standard-chip.mat-chip-with-avatar{padding-left:0;padding-right:12px}[dir=rtl] .mat-standard-chip.mat-chip-with-avatar{padding-right:0;padding-left:12px}.mat-standard-chip .mat-chip-avatar{width:24px;height:24px;margin-right:8px;margin-left:4px}[dir=rtl] .mat-standard-chip .mat-chip-avatar{margin-left:8px;margin-right:4px}.mat-standard-chip .mat-chip-remove,.mat-standard-chip .mat-chip-trailing-icon{width:18px;height:18px;cursor:pointer}.mat-standard-chip .mat-chip-remove,.mat-standard-chip .mat-chip-trailing-icon{margin-left:8px;margin-right:0}[dir=rtl] .mat-standard-chip .mat-chip-remove,[dir=rtl] .mat-standard-chip .mat-chip-trailing-icon{margin-right:8px;margin-left:0}.mat-chip-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;border-radius:inherit;overflow:hidden}.mat-chip-list-wrapper{display:flex;flex-direction:row;flex-wrap:wrap;align-items:center;margin:-4px}.mat-chip-list-wrapper input.mat-input-element,.mat-chip-list-wrapper .mat-standard-chip{margin:4px}.mat-chip-list-stacked .mat-chip-list-wrapper{flex-direction:column;align-items:flex-start}.mat-chip-list-stacked .mat-chip-list-wrapper .mat-standard-chip{width:100%}.mat-chip-avatar{border-radius:50%;justify-content:center;align-items:center;display:flex;overflow:hidden;object-fit:cover}input.mat-chip-input{width:150px;margin:4px;flex:1 0 150px}\n"],
        encapsulation: 2,
        changeDetection: 0
      });

      MatChipList.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
        }, {
          type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__["Directionality"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgForm"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormGroupDirective"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }]
        }, {
          type: _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["ErrorStateMatcher"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgControl"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Self"]
          }]
        }];
      };

      MatChipList.propDecorators = {
        errorStateMatcher: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        multiple: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        compareWith: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        value: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        required: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        placeholder: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        disabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        ariaOrientation: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['aria-orientation']
        }],
        selectable: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        tabIndex: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        change: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        valueChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        chips: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"],
          args: [MatChip, {
            // We need to use `descendants: true`, because Ivy will no longer match
            // indirect descendants if it's left as false.
            descendants: true
          }]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatChipList, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'mat-chip-list',
            template: "<div class=\"mat-chip-list-wrapper\"><ng-content></ng-content></div>",
            exportAs: 'matChipList',
            host: {
              '[attr.tabindex]': 'disabled ? null : _tabIndex',
              '[attr.aria-describedby]': '_ariaDescribedby || null',
              '[attr.aria-required]': 'role ? required : null',
              '[attr.aria-disabled]': 'disabled.toString()',
              '[attr.aria-invalid]': 'errorState',
              '[attr.aria-multiselectable]': 'multiple',
              '[attr.role]': 'role',
              '[class.mat-chip-list-disabled]': 'disabled',
              '[class.mat-chip-list-invalid]': 'errorState',
              '[class.mat-chip-list-required]': 'required',
              '[attr.aria-orientation]': 'ariaOrientation',
              'class': 'mat-chip-list',
              '(focus)': 'focus()',
              '(blur)': '_blur()',
              '(keydown)': '_keydown($event)',
              '[id]': '_uid'
            },
            providers: [{
              provide: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormFieldControl"],
              useExisting: MatChipList
            }],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            styles: [".mat-chip{position:relative;box-sizing:border-box;-webkit-tap-highlight-color:transparent;transform:translateZ(0);border:none;-webkit-appearance:none;-moz-appearance:none}.mat-standard-chip{transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);display:inline-flex;padding:7px 12px;border-radius:16px;align-items:center;cursor:default;min-height:32px;height:1px}._mat-animation-noopable.mat-standard-chip{transition:none;animation:none}.mat-standard-chip .mat-chip-remove.mat-icon{width:18px;height:18px}.mat-standard-chip::after{top:0;left:0;right:0;bottom:0;position:absolute;border-radius:inherit;opacity:0;content:\"\";pointer-events:none;transition:opacity 200ms cubic-bezier(0.35, 0, 0.25, 1)}.mat-standard-chip:hover::after{opacity:.12}.mat-standard-chip:focus{outline:none}.mat-standard-chip:focus::after{opacity:.16}.cdk-high-contrast-active .mat-standard-chip{outline:solid 1px}.cdk-high-contrast-active .mat-standard-chip:focus{outline:dotted 2px}.mat-standard-chip.mat-chip-disabled::after{opacity:0}.mat-standard-chip.mat-chip-disabled .mat-chip-remove,.mat-standard-chip.mat-chip-disabled .mat-chip-trailing-icon{cursor:default}.mat-standard-chip.mat-chip-with-trailing-icon.mat-chip-with-avatar,.mat-standard-chip.mat-chip-with-avatar{padding-top:0;padding-bottom:0}.mat-standard-chip.mat-chip-with-trailing-icon.mat-chip-with-avatar{padding-right:8px;padding-left:0}[dir=rtl] .mat-standard-chip.mat-chip-with-trailing-icon.mat-chip-with-avatar{padding-left:8px;padding-right:0}.mat-standard-chip.mat-chip-with-trailing-icon{padding-top:7px;padding-bottom:7px;padding-right:8px;padding-left:12px}[dir=rtl] .mat-standard-chip.mat-chip-with-trailing-icon{padding-left:8px;padding-right:12px}.mat-standard-chip.mat-chip-with-avatar{padding-left:0;padding-right:12px}[dir=rtl] .mat-standard-chip.mat-chip-with-avatar{padding-right:0;padding-left:12px}.mat-standard-chip .mat-chip-avatar{width:24px;height:24px;margin-right:8px;margin-left:4px}[dir=rtl] .mat-standard-chip .mat-chip-avatar{margin-left:8px;margin-right:4px}.mat-standard-chip .mat-chip-remove,.mat-standard-chip .mat-chip-trailing-icon{width:18px;height:18px;cursor:pointer}.mat-standard-chip .mat-chip-remove,.mat-standard-chip .mat-chip-trailing-icon{margin-left:8px;margin-right:0}[dir=rtl] .mat-standard-chip .mat-chip-remove,[dir=rtl] .mat-standard-chip .mat-chip-trailing-icon{margin-right:8px;margin-left:0}.mat-chip-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;border-radius:inherit;overflow:hidden}.mat-chip-list-wrapper{display:flex;flex-direction:row;flex-wrap:wrap;align-items:center;margin:-4px}.mat-chip-list-wrapper input.mat-input-element,.mat-chip-list-wrapper .mat-standard-chip{margin:4px}.mat-chip-list-stacked .mat-chip-list-wrapper{flex-direction:column;align-items:flex-start}.mat-chip-list-stacked .mat-chip-list-wrapper .mat-standard-chip{width:100%}.mat-chip-avatar{border-radius:50%;justify-content:center;align-items:center;display:flex;overflow:hidden;object-fit:cover}input.mat-chip-input{width:150px;margin:4px;flex:1 0 150px}\n"]
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
          }, {
            type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__["Directionality"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
            }]
          }, {
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgForm"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
            }]
          }, {
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormGroupDirective"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
            }]
          }, {
            type: _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["ErrorStateMatcher"]
          }, {
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgControl"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Self"]
            }]
          }];
        }, {
          ariaOrientation: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['aria-orientation']
          }],
          change: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          valueChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          multiple: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          compareWith: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          value: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          required: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          placeholder: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          selectable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          tabIndex: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          errorStateMatcher: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          chips: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"],
            args: [MatChip, {
              // We need to use `descendants: true`, because Ivy will no longer match
              // indirect descendants if it's left as false.
              descendants: true
            }]
          }]
        });
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
      // Increasing integer for generating unique ids.


      var nextUniqueId$1 = 0;
      /**
       * Directive that adds chip-specific behaviors to an input element inside `<mat-form-field>`.
       * May be placed inside or outside of an `<mat-chip-list>`.
       */

      var MatChipInput = /*#__PURE__*/function () {
        function MatChipInput(_elementRef, _defaultOptions) {
          _classCallCheck(this, MatChipInput);

          this._elementRef = _elementRef;
          this._defaultOptions = _defaultOptions;
          /** Whether the control is focused. */

          this.focused = false;
          this._addOnBlur = false;
          /**
           * The list of key codes that will trigger a chipEnd event.
           *
           * Defaults to `[ENTER]`.
           */

          this.separatorKeyCodes = this._defaultOptions.separatorKeyCodes;
          /** Emitted when a chip is to be added. */

          this.chipEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          /** The input's placeholder text. */

          this.placeholder = '';
          /** Unique id for the input. */

          this.id = "mat-chip-list-input-".concat(nextUniqueId$1++);
          this._disabled = false;
          this._inputElement = this._elementRef.nativeElement;
        }
        /** Register input for chip list */


        _createClass(MatChipInput, [{
          key: "ngOnChanges",
          value: function ngOnChanges() {
            this._chipList.stateChanges.next();
          }
          /** Utility method to make host definition/tests more clear. */

        }, {
          key: "_keydown",
          value: function _keydown(event) {
            // Allow the user's focus to escape when they're tabbing forward. Note that we don't
            // want to do this when going backwards, because focus should go back to the first chip.
            if (event && event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_0__["TAB"] && !Object(_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_0__["hasModifierKey"])(event, 'shiftKey')) {
              this._chipList._allowFocusEscape();
            }

            this._emitChipEnd(event);
          }
          /** Checks to see if the blur should emit the (chipEnd) event. */

        }, {
          key: "_blur",
          value: function _blur() {
            if (this.addOnBlur) {
              this._emitChipEnd();
            }

            this.focused = false; // Blur the chip list if it is not focused

            if (!this._chipList.focused) {
              this._chipList._blur();
            }

            this._chipList.stateChanges.next();
          }
        }, {
          key: "_focus",
          value: function _focus() {
            this.focused = true;

            this._chipList.stateChanges.next();
          }
          /** Checks to see if the (chipEnd) event needs to be emitted. */

        }, {
          key: "_emitChipEnd",
          value: function _emitChipEnd(event) {
            if (!this._inputElement.value && !!event) {
              this._chipList._keydown(event);
            }

            if (!event || this._isSeparatorKey(event)) {
              this.chipEnd.emit({
                input: this._inputElement,
                value: this._inputElement.value
              });

              if (event) {
                event.preventDefault();
              }
            }
          }
        }, {
          key: "_onInput",
          value: function _onInput() {
            // Let chip list know whenever the value changes.
            this._chipList.stateChanges.next();
          }
          /** Focuses the input. */

        }, {
          key: "focus",
          value: function focus(options) {
            this._inputElement.focus(options);
          }
          /** Checks whether a keycode is one of the configured separators. */

        }, {
          key: "_isSeparatorKey",
          value: function _isSeparatorKey(event) {
            return !Object(_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_0__["hasModifierKey"])(event) && new Set(this.separatorKeyCodes).has(event.keyCode);
          }
        }, {
          key: "chipList",
          set: function set(value) {
            if (value) {
              this._chipList = value;

              this._chipList.registerInput(this);
            }
          }
          /**
           * Whether or not the chipEnd event will be emitted when the input is blurred.
           */

        }, {
          key: "addOnBlur",
          get: function get() {
            return this._addOnBlur;
          },
          set: function set(value) {
            this._addOnBlur = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceBooleanProperty"])(value);
          }
          /** Whether the input is disabled. */

        }, {
          key: "disabled",
          get: function get() {
            return this._disabled || this._chipList && this._chipList.disabled;
          },
          set: function set(value) {
            this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceBooleanProperty"])(value);
          }
          /** Whether the input is empty. */

        }, {
          key: "empty",
          get: function get() {
            return !this._inputElement.value;
          }
        }]);

        return MatChipInput;
      }();

      MatChipInput.ɵfac = function MatChipInput_Factory(t) {
        return new (t || MatChipInput)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](MAT_CHIPS_DEFAULT_OPTIONS));
      };

      MatChipInput.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
        type: MatChipInput,
        selectors: [["input", "matChipInputFor", ""]],
        hostAttrs: [1, "mat-chip-input", "mat-input-element"],
        hostVars: 5,
        hostBindings: function MatChipInput_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keydown", function MatChipInput_keydown_HostBindingHandler($event) {
              return ctx._keydown($event);
            })("blur", function MatChipInput_blur_HostBindingHandler() {
              return ctx._blur();
            })("focus", function MatChipInput_focus_HostBindingHandler() {
              return ctx._focus();
            })("input", function MatChipInput_input_HostBindingHandler() {
              return ctx._onInput();
            });
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵhostProperty"]("id", ctx.id);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("disabled", ctx.disabled || null)("placeholder", ctx.placeholder || null)("aria-invalid", ctx._chipList && ctx._chipList.ngControl ? ctx._chipList.ngControl.invalid : null)("aria-required", ctx._chipList && ctx._chipList.required || null);
          }
        },
        inputs: {
          separatorKeyCodes: ["matChipInputSeparatorKeyCodes", "separatorKeyCodes"],
          placeholder: "placeholder",
          id: "id",
          chipList: ["matChipInputFor", "chipList"],
          addOnBlur: ["matChipInputAddOnBlur", "addOnBlur"],
          disabled: "disabled"
        },
        outputs: {
          chipEnd: "matChipInputTokenEnd"
        },
        exportAs: ["matChipInput", "matChipInputFor"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]]
      });

      MatChipInput.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [MAT_CHIPS_DEFAULT_OPTIONS]
          }]
        }];
      };

      MatChipInput.propDecorators = {
        chipList: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['matChipInputFor']
        }],
        addOnBlur: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['matChipInputAddOnBlur']
        }],
        separatorKeyCodes: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['matChipInputSeparatorKeyCodes']
        }],
        chipEnd: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"],
          args: ['matChipInputTokenEnd']
        }],
        placeholder: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        id: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        disabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatChipInput, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
          args: [{
            selector: 'input[matChipInputFor]',
            exportAs: 'matChipInput, matChipInputFor',
            host: {
              'class': 'mat-chip-input mat-input-element',
              '(keydown)': '_keydown($event)',
              '(blur)': '_blur()',
              '(focus)': '_focus()',
              '(input)': '_onInput()',
              '[id]': 'id',
              '[attr.disabled]': 'disabled || null',
              '[attr.placeholder]': 'placeholder || null',
              '[attr.aria-invalid]': '_chipList && _chipList.ngControl ? _chipList.ngControl.invalid : null',
              '[attr.aria-required]': '_chipList && _chipList.required || null'
            }
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
              args: [MAT_CHIPS_DEFAULT_OPTIONS]
            }]
          }];
        }, {
          separatorKeyCodes: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['matChipInputSeparatorKeyCodes']
          }],
          chipEnd: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"],
            args: ['matChipInputTokenEnd']
          }],
          placeholder: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          id: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          chipList: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['matChipInputFor']
          }],
          addOnBlur: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['matChipInputAddOnBlur']
          }],
          disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }]
        });
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var CHIP_DECLARATIONS = [MatChipList, MatChip, MatChipInput, MatChipRemove, MatChipAvatar, MatChipTrailingIcon];
      var ɵ0 = {
        separatorKeyCodes: [_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_0__["ENTER"]]
      };

      var MatChipsModule = function MatChipsModule() {
        _classCallCheck(this, MatChipsModule);
      };

      MatChipsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: MatChipsModule
      });
      MatChipsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        factory: function MatChipsModule_Factory(t) {
          return new (t || MatChipsModule)();
        },
        providers: [_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["ErrorStateMatcher"], {
          provide: MAT_CHIPS_DEFAULT_OPTIONS,
          useValue: ɵ0
        }]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](MatChipsModule, {
          declarations: [MatChipList, MatChip, MatChipInput, MatChipRemove, MatChipAvatar, MatChipTrailingIcon],
          exports: [MatChipList, MatChip, MatChipInput, MatChipRemove, MatChipAvatar, MatChipTrailingIcon]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatChipsModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            exports: CHIP_DECLARATIONS,
            declarations: CHIP_DECLARATIONS,
            providers: [_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["ErrorStateMatcher"], {
              provide: MAT_CHIPS_DEFAULT_OPTIONS,
              useValue: ɵ0
            }]
          }]
        }], null, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Generated bundle index. Do not edit.
       */
      //# sourceMappingURL=chips.js.map

      /***/

    },

    /***/
    "N/qJ":
    /*!**********************************************************************!*\
      !*** ./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/accordion.js ***!
      \**********************************************************************/

    /*! exports provided: CdkAccordion, CdkAccordionItem, CdkAccordionModule, ɵangular_material_src_cdk_accordion_accordion_a */

    /***/
    function NQJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CdkAccordion", function () {
        return CdkAccordion;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CdkAccordionItem", function () {
        return CdkAccordionItem;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CdkAccordionModule", function () {
        return CdkAccordionModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵangular_material_src_cdk_accordion_accordion_a", function () {
        return CDK_ACCORDION;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/cdk/collections */
      "0EQZ");
      /* harmony import */


      var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/cdk/coercion */
      "8LU1");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** Used to generate unique ID for each accordion. */


      var nextId = 0;
      /**
       * Injection token that can be used to reference instances of `CdkAccordion`. It serves
       * as alternative token to the actual `CdkAccordion` class which could cause unnecessary
       * retention of the class and its directive metadata.
       */

      var CDK_ACCORDION = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('CdkAccordion');
      /**
       * Directive whose purpose is to manage the expanded state of CdkAccordionItem children.
       */

      var CdkAccordion = /*#__PURE__*/function () {
        function CdkAccordion() {
          _classCallCheck(this, CdkAccordion);

          /** Emits when the state of the accordion changes */
          this._stateChanges = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
          /** Stream that emits true/false when openAll/closeAll is triggered. */

          this._openCloseAllActions = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
          /** A readonly id value to use for unique selection coordination. */

          this.id = "cdk-accordion-".concat(nextId++);
          this._multi = false;
        }
        /** Whether the accordion should allow multiple expanded accordion items simultaneously. */


        _createClass(CdkAccordion, [{
          key: "openAll",

          /** Opens all enabled accordion items in an accordion where multi is enabled. */
          value: function openAll() {
            this._openCloseAll(true);
          }
          /** Closes all enabled accordion items in an accordion where multi is enabled. */

        }, {
          key: "closeAll",
          value: function closeAll() {
            this._openCloseAll(false);
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            this._stateChanges.next(changes);
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._stateChanges.complete();
          }
        }, {
          key: "_openCloseAll",
          value: function _openCloseAll(expanded) {
            if (this.multi) {
              this._openCloseAllActions.next(expanded);
            }
          }
        }, {
          key: "multi",
          get: function get() {
            return this._multi;
          },
          set: function set(multi) {
            this._multi = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceBooleanProperty"])(multi);
          }
        }]);

        return CdkAccordion;
      }();

      CdkAccordion.ɵfac = function CdkAccordion_Factory(t) {
        return new (t || CdkAccordion)();
      };

      CdkAccordion.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: CdkAccordion,
        selectors: [["cdk-accordion"], ["", "cdkAccordion", ""]],
        inputs: {
          multi: "multi"
        },
        exportAs: ["cdkAccordion"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
          provide: CDK_ACCORDION,
          useExisting: CdkAccordion
        }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]]
      });
      CdkAccordion.propDecorators = {
        multi: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CdkAccordion, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: 'cdk-accordion, [cdkAccordion]',
            exportAs: 'cdkAccordion',
            providers: [{
              provide: CDK_ACCORDION,
              useExisting: CdkAccordion
            }]
          }]
        }], function () {
          return [];
        }, {
          multi: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** Used to generate unique ID for each accordion item. */


      var nextId$1 = 0;
      var ɵ0 = undefined;
      /**
       * An basic directive expected to be extended and decorated as a component.  Sets up all
       * events and attributes needed to be managed by a CdkAccordion parent.
       */

      var CdkAccordionItem = /*#__PURE__*/function () {
        function CdkAccordionItem(accordion, _changeDetectorRef, _expansionDispatcher) {
          var _this35 = this;

          _classCallCheck(this, CdkAccordionItem);

          this.accordion = accordion;
          this._changeDetectorRef = _changeDetectorRef;
          this._expansionDispatcher = _expansionDispatcher;
          /** Subscription to openAll/closeAll events. */

          this._openCloseAllSubscription = rxjs__WEBPACK_IMPORTED_MODULE_3__["Subscription"].EMPTY;
          /** Event emitted every time the AccordionItem is closed. */

          this.closed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          /** Event emitted every time the AccordionItem is opened. */

          this.opened = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          /** Event emitted when the AccordionItem is destroyed. */

          this.destroyed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          /**
           * Emits whenever the expanded state of the accordion changes.
           * Primarily used to facilitate two-way binding.
           * @docs-private
           */

          this.expandedChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          /** The unique AccordionItem id. */

          this.id = "cdk-accordion-child-".concat(nextId$1++);
          this._expanded = false;
          this._disabled = false;
          /** Unregister function for _expansionDispatcher. */

          this._removeUniqueSelectionListener = function () {};

          this._removeUniqueSelectionListener = _expansionDispatcher.listen(function (id, accordionId) {
            if (_this35.accordion && !_this35.accordion.multi && _this35.accordion.id === accordionId && _this35.id !== id) {
              _this35.expanded = false;
            }
          }); // When an accordion item is hosted in an accordion, subscribe to open/close events.

          if (this.accordion) {
            this._openCloseAllSubscription = this._subscribeToOpenCloseAllActions();
          }
        }
        /** Whether the AccordionItem is expanded. */


        _createClass(CdkAccordionItem, [{
          key: "ngOnDestroy",

          /** Emits an event for the accordion item being destroyed. */
          value: function ngOnDestroy() {
            this.opened.complete();
            this.closed.complete();
            this.destroyed.emit();
            this.destroyed.complete();

            this._removeUniqueSelectionListener();

            this._openCloseAllSubscription.unsubscribe();
          }
          /** Toggles the expanded state of the accordion item. */

        }, {
          key: "toggle",
          value: function toggle() {
            if (!this.disabled) {
              this.expanded = !this.expanded;
            }
          }
          /** Sets the expanded state of the accordion item to false. */

        }, {
          key: "close",
          value: function close() {
            if (!this.disabled) {
              this.expanded = false;
            }
          }
          /** Sets the expanded state of the accordion item to true. */

        }, {
          key: "open",
          value: function open() {
            if (!this.disabled) {
              this.expanded = true;
            }
          }
        }, {
          key: "_subscribeToOpenCloseAllActions",
          value: function _subscribeToOpenCloseAllActions() {
            var _this36 = this;

            return this.accordion._openCloseAllActions.subscribe(function (expanded) {
              // Only change expanded state if item is enabled
              if (!_this36.disabled) {
                _this36.expanded = expanded;
              }
            });
          }
        }, {
          key: "expanded",
          get: function get() {
            return this._expanded;
          },
          set: function set(expanded) {
            expanded = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceBooleanProperty"])(expanded); // Only emit events and update the internal value if the value changes.

            if (this._expanded !== expanded) {
              this._expanded = expanded;
              this.expandedChange.emit(expanded);

              if (expanded) {
                this.opened.emit();
                /**
                 * In the unique selection dispatcher, the id parameter is the id of the CdkAccordionItem,
                 * the name value is the id of the accordion.
                 */

                var accordionId = this.accordion ? this.accordion.id : this.id;

                this._expansionDispatcher.notify(this.id, accordionId);
              } else {
                this.closed.emit();
              } // Ensures that the animation will run when the value is set outside of an `@Input`.
              // This includes cases like the open, close and toggle methods.


              this._changeDetectorRef.markForCheck();
            }
          }
          /** Whether the AccordionItem is disabled. */

        }, {
          key: "disabled",
          get: function get() {
            return this._disabled;
          },
          set: function set(disabled) {
            this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceBooleanProperty"])(disabled);
          }
        }]);

        return CdkAccordionItem;
      }();

      CdkAccordionItem.ɵfac = function CdkAccordionItem_Factory(t) {
        return new (t || CdkAccordionItem)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](CDK_ACCORDION, 12), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_1__["UniqueSelectionDispatcher"]));
      };

      CdkAccordionItem.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: CdkAccordionItem,
        selectors: [["cdk-accordion-item"], ["", "cdkAccordionItem", ""]],
        inputs: {
          expanded: "expanded",
          disabled: "disabled"
        },
        outputs: {
          closed: "closed",
          opened: "opened",
          destroyed: "destroyed",
          expandedChange: "expandedChange"
        },
        exportAs: ["cdkAccordionItem"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([// Provide `CDK_ACCORDION` as undefined to prevent nested accordion items from
        // registering to the same accordion.
        {
          provide: CDK_ACCORDION,
          useValue: ɵ0
        }])]
      });

      CdkAccordionItem.ctorParameters = function () {
        return [{
          type: CdkAccordion,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [CDK_ACCORDION]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"]
          }]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
        }, {
          type: _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_1__["UniqueSelectionDispatcher"]
        }];
      };

      CdkAccordionItem.propDecorators = {
        closed: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        opened: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        destroyed: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        expandedChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        expanded: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        disabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CdkAccordionItem, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: 'cdk-accordion-item, [cdkAccordionItem]',
            exportAs: 'cdkAccordionItem',
            providers: [// Provide `CDK_ACCORDION` as undefined to prevent nested accordion items from
            // registering to the same accordion.
            {
              provide: CDK_ACCORDION,
              useValue: ɵ0
            }]
          }]
        }], function () {
          return [{
            type: CdkAccordion,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [CDK_ACCORDION]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"]
            }]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
          }, {
            type: _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_1__["UniqueSelectionDispatcher"]
          }];
        }, {
          closed: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          opened: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          destroyed: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          expandedChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          expanded: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var CdkAccordionModule = function CdkAccordionModule() {
        _classCallCheck(this, CdkAccordionModule);
      };

      CdkAccordionModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: CdkAccordionModule
      });
      CdkAccordionModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function CdkAccordionModule_Factory(t) {
          return new (t || CdkAccordionModule)();
        }
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CdkAccordionModule, {
          declarations: [CdkAccordion, CdkAccordionItem],
          exports: [CdkAccordion, CdkAccordionItem]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CdkAccordionModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            exports: [CdkAccordion, CdkAccordionItem],
            declarations: [CdkAccordion, CdkAccordionItem]
          }]
        }], null, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Generated bundle index. Do not edit.
       */
      //# sourceMappingURL=accordion.js.map

      /***/

    },

    /***/
    "TU8p":
    /*!***********************************************************************!*\
      !*** ./node_modules/@angular/material/__ivy_ngcc__/fesm2015/badge.js ***!
      \***********************************************************************/

    /*! exports provided: MatBadge, MatBadgeModule */

    /***/
    function TU8p(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatBadge", function () {
        return MatBadge;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatBadgeModule", function () {
        return MatBadgeModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");
      /* harmony import */


      var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/cdk/a11y */
      "u47x");
      /* harmony import */


      var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/cdk/coercion */
      "8LU1");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "R1ws");
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var nextId = 0; // Boilerplate for applying mixins to MatBadge.

      /** @docs-private */

      var MatBadgeBase = function MatBadgeBase() {
        _classCallCheck(this, MatBadgeBase);
      };

      var _MatBadgeMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_1__["mixinDisabled"])(MatBadgeBase);
      /** Directive to display a text badge. */


      var MatBadge = /*#__PURE__*/function (_MatBadgeMixinBase2) {
        _inherits(MatBadge, _MatBadgeMixinBase2);

        var _super10 = _createSuper(MatBadge);

        function MatBadge(_ngZone, _elementRef, _ariaDescriber, _renderer, _animationMode) {
          var _this37;

          _classCallCheck(this, MatBadge);

          _this37 = _super10.call(this);
          _this37._ngZone = _ngZone;
          _this37._elementRef = _elementRef;
          _this37._ariaDescriber = _ariaDescriber;
          _this37._renderer = _renderer;
          _this37._animationMode = _animationMode;
          /** Whether the badge has any content. */

          _this37._hasContent = false;
          _this37._color = 'primary';
          _this37._overlap = true;
          /**
           * Position the badge should reside.
           * Accepts any combination of 'above'|'below' and 'before'|'after'
           */

          _this37.position = 'above after';
          /** Size of the badge. Can be 'small', 'medium', or 'large'. */

          _this37.size = 'medium';
          /** Unique id for the badge */

          _this37._id = nextId++;

          if (typeof ngDevMode === 'undefined' || ngDevMode) {
            var nativeElement = _elementRef.nativeElement;

            if (nativeElement.nodeType !== nativeElement.ELEMENT_NODE) {
              throw Error('matBadge must be attached to an element node.');
            }
          }

          return _this37;
        }
        /** The color of the badge. Can be `primary`, `accent`, or `warn`. */


        _createClass(MatBadge, [{
          key: "isAbove",

          /** Whether the badge is above the host or not */
          value: function isAbove() {
            return this.position.indexOf('below') === -1;
          }
          /** Whether the badge is after the host or not */

        }, {
          key: "isAfter",
          value: function isAfter() {
            return this.position.indexOf('before') === -1;
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            var contentChange = changes['content'];

            if (contentChange) {
              var value = contentChange.currentValue;
              this._hasContent = value != null && "".concat(value).trim().length > 0;

              this._updateTextContent();
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            var badgeElement = this._badgeElement;

            if (badgeElement) {
              if (this.description) {
                this._ariaDescriber.removeDescription(badgeElement, this.description);
              } // When creating a badge through the Renderer, Angular will keep it in an index.
              // We have to destroy it ourselves, otherwise it'll be retained in memory.


              if (this._renderer.destroyNode) {
                this._renderer.destroyNode(badgeElement);
              }
            }
          }
          /**
           * Gets the element into which the badge's content is being rendered.
           * Undefined if the element hasn't been created (e.g. if the badge doesn't have content).
           */

        }, {
          key: "getBadgeElement",
          value: function getBadgeElement() {
            return this._badgeElement;
          }
          /** Injects a span element into the DOM with the content. */

        }, {
          key: "_updateTextContent",
          value: function _updateTextContent() {
            if (!this._badgeElement) {
              this._badgeElement = this._createBadgeElement();
            } else {
              this._badgeElement.textContent = this._stringifyContent();
            }

            return this._badgeElement;
          }
          /** Creates the badge element */

        }, {
          key: "_createBadgeElement",
          value: function _createBadgeElement() {
            var badgeElement = this._renderer.createElement('span');

            var activeClass = 'mat-badge-active';
            var contentClass = 'mat-badge-content'; // Clear any existing badges which may have persisted from a server-side render.

            this._clearExistingBadges(contentClass);

            badgeElement.setAttribute('id', "mat-badge-content-".concat(this._id));
            badgeElement.classList.add(contentClass);
            badgeElement.textContent = this._stringifyContent();

            if (this._animationMode === 'NoopAnimations') {
              badgeElement.classList.add('_mat-animation-noopable');
            }

            if (this.description) {
              badgeElement.setAttribute('aria-label', this.description);
            }

            this._elementRef.nativeElement.appendChild(badgeElement); // animate in after insertion


            if (typeof requestAnimationFrame === 'function' && this._animationMode !== 'NoopAnimations') {
              this._ngZone.runOutsideAngular(function () {
                requestAnimationFrame(function () {
                  badgeElement.classList.add(activeClass);
                });
              });
            } else {
              badgeElement.classList.add(activeClass);
            }

            return badgeElement;
          }
          /** Sets the aria-label property on the element */

        }, {
          key: "_updateHostAriaDescription",
          value: function _updateHostAriaDescription(newDescription, oldDescription) {
            // ensure content available before setting label
            var content = this._updateTextContent();

            if (oldDescription) {
              this._ariaDescriber.removeDescription(content, oldDescription);
            }

            if (newDescription) {
              this._ariaDescriber.describe(content, newDescription);
            }
          }
          /** Adds css theme class given the color to the component host */

        }, {
          key: "_setColor",
          value: function _setColor(colorPalette) {
            if (colorPalette !== this._color) {
              var classList = this._elementRef.nativeElement.classList;

              if (this._color) {
                classList.remove("mat-badge-".concat(this._color));
              }

              if (colorPalette) {
                classList.add("mat-badge-".concat(colorPalette));
              }
            }
          }
          /** Clears any existing badges that might be left over from server-side rendering. */

        }, {
          key: "_clearExistingBadges",
          value: function _clearExistingBadges(cssClass) {
            var element = this._elementRef.nativeElement;
            var childCount = element.children.length; // Use a reverse while, because we'll be removing elements from the list as we're iterating.

            while (childCount--) {
              var currentChild = element.children[childCount];

              if (currentChild.classList.contains(cssClass)) {
                element.removeChild(currentChild);
              }
            }
          }
          /** Gets the string representation of the badge content. */

        }, {
          key: "_stringifyContent",
          value: function _stringifyContent() {
            // Convert null and undefined to an empty string which is consistent
            // with how Angular handles them in inside template interpolations.
            var content = this.content;
            return content == null ? '' : "".concat(content);
          }
        }, {
          key: "color",
          get: function get() {
            return this._color;
          },
          set: function set(value) {
            this._setColor(value);

            this._color = value;
          }
          /** Whether the badge should overlap its contents or not */

        }, {
          key: "overlap",
          get: function get() {
            return this._overlap;
          },
          set: function set(val) {
            this._overlap = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceBooleanProperty"])(val);
          }
          /** Message used to describe the decorated element via aria-describedby */

        }, {
          key: "description",
          get: function get() {
            return this._description;
          },
          set: function set(newDescription) {
            if (newDescription !== this._description) {
              var badgeElement = this._badgeElement;

              this._updateHostAriaDescription(newDescription, this._description);

              this._description = newDescription;

              if (badgeElement) {
                newDescription ? badgeElement.setAttribute('aria-label', newDescription) : badgeElement.removeAttribute('aria-label');
              }
            }
          }
          /** Whether the badge is hidden. */

        }, {
          key: "hidden",
          get: function get() {
            return this._hidden;
          },
          set: function set(val) {
            this._hidden = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceBooleanProperty"])(val);
          }
        }]);

        return MatBadge;
      }(_MatBadgeMixinBase);

      MatBadge.ɵfac = function MatBadge_Factory(t) {
        return new (t || MatBadge)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__["AriaDescriber"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["ANIMATION_MODULE_TYPE"], 8));
      };

      MatBadge.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: MatBadge,
        selectors: [["", "matBadge", ""]],
        hostAttrs: [1, "mat-badge"],
        hostVars: 20,
        hostBindings: function MatBadge_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-badge-overlap", ctx.overlap)("mat-badge-above", ctx.isAbove())("mat-badge-below", !ctx.isAbove())("mat-badge-before", !ctx.isAfter())("mat-badge-after", ctx.isAfter())("mat-badge-small", ctx.size === "small")("mat-badge-medium", ctx.size === "medium")("mat-badge-large", ctx.size === "large")("mat-badge-hidden", ctx.hidden || !ctx._hasContent)("mat-badge-disabled", ctx.disabled);
          }
        },
        inputs: {
          disabled: ["matBadgeDisabled", "disabled"],
          position: ["matBadgePosition", "position"],
          size: ["matBadgeSize", "size"],
          color: ["matBadgeColor", "color"],
          overlap: ["matBadgeOverlap", "overlap"],
          description: ["matBadgeDescription", "description"],
          hidden: ["matBadgeHidden", "hidden"],
          content: ["matBadge", "content"]
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]]
      });

      MatBadge.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__["AriaDescriber"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["ANIMATION_MODULE_TYPE"]]
          }]
        }];
      };

      MatBadge.propDecorators = {
        color: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['matBadgeColor']
        }],
        overlap: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['matBadgeOverlap']
        }],
        position: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['matBadgePosition']
        }],
        content: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['matBadge']
        }],
        description: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['matBadgeDescription']
        }],
        size: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['matBadgeSize']
        }],
        hidden: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['matBadgeHidden']
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatBadge, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: '[matBadge]',
            inputs: ['disabled: matBadgeDisabled'],
            host: {
              'class': 'mat-badge',
              '[class.mat-badge-overlap]': 'overlap',
              '[class.mat-badge-above]': 'isAbove()',
              '[class.mat-badge-below]': '!isAbove()',
              '[class.mat-badge-before]': '!isAfter()',
              '[class.mat-badge-after]': 'isAfter()',
              '[class.mat-badge-small]': 'size === "small"',
              '[class.mat-badge-medium]': 'size === "medium"',
              '[class.mat-badge-large]': 'size === "large"',
              '[class.mat-badge-hidden]': 'hidden || !_hasContent',
              '[class.mat-badge-disabled]': 'disabled'
            }
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }, {
            type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__["AriaDescriber"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
          }, {
            type: String,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["ANIMATION_MODULE_TYPE"]]
            }]
          }];
        }, {
          position: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['matBadgePosition']
          }],
          size: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['matBadgeSize']
          }],
          color: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['matBadgeColor']
          }],
          overlap: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['matBadgeOverlap']
          }],
          description: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['matBadgeDescription']
          }],
          hidden: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['matBadgeHidden']
          }],
          content: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['matBadge']
          }]
        });
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var MatBadgeModule = function MatBadgeModule() {
        _classCallCheck(this, MatBadgeModule);
      };

      MatBadgeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: MatBadgeModule
      });
      MatBadgeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function MatBadgeModule_Factory(t) {
          return new (t || MatBadgeModule)();
        },
        imports: [[_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__["A11yModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatCommonModule"]], _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatCommonModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MatBadgeModule, {
          declarations: function declarations() {
            return [MatBadge];
          },
          imports: function imports() {
            return [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__["A11yModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatCommonModule"]];
          },
          exports: function exports() {
            return [MatBadge, _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatCommonModule"]];
          }
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatBadgeModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__["A11yModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatCommonModule"]],
            exports: [MatBadge, _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatCommonModule"]],
            declarations: [MatBadge]
          }]
        }], null, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Generated bundle index. Do not edit.
       */
      //# sourceMappingURL=badge.js.map

      /***/

    },

    /***/
    "Xa2L":
    /*!**********************************************************************************!*\
      !*** ./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js ***!
      \**********************************************************************************/

    /*! exports provided: MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS, MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS_FACTORY, MatProgressSpinner, MatProgressSpinnerModule, MatSpinner */

    /***/
    function Xa2L(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS", function () {
        return MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS_FACTORY", function () {
        return MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS_FACTORY;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatProgressSpinner", function () {
        return MatProgressSpinner;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatProgressSpinnerModule", function () {
        return MatProgressSpinnerModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatSpinner", function () {
        return MatSpinner;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");
      /* harmony import */


      var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/cdk/coercion */
      "8LU1");
      /* harmony import */


      var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/cdk/platform */
      "nLfN");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "R1ws");
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Base reference size of the spinner.
       * @docs-private
       */


      function MatProgressSpinner__svg_circle_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "circle", 3);
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("animation-name", "mat-progress-spinner-stroke-rotate-" + ctx_r0._spinnerAnimationLabel)("stroke-dashoffset", ctx_r0._getStrokeDashOffset(), "px")("stroke-dasharray", ctx_r0._getStrokeCircumference(), "px")("stroke-width", ctx_r0._getCircleStrokeWidth(), "%");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("r", ctx_r0._getCircleRadius());
        }
      }

      function MatProgressSpinner__svg_circle_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "circle", 3);
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("stroke-dashoffset", ctx_r1._getStrokeDashOffset(), "px")("stroke-dasharray", ctx_r1._getStrokeCircumference(), "px")("stroke-width", ctx_r1._getCircleStrokeWidth(), "%");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("r", ctx_r1._getCircleRadius());
        }
      }

      function MatSpinner__svg_circle_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "circle", 3);
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("animation-name", "mat-progress-spinner-stroke-rotate-" + ctx_r0._spinnerAnimationLabel)("stroke-dashoffset", ctx_r0._getStrokeDashOffset(), "px")("stroke-dasharray", ctx_r0._getStrokeCircumference(), "px")("stroke-width", ctx_r0._getCircleStrokeWidth(), "%");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("r", ctx_r0._getCircleRadius());
        }
      }

      function MatSpinner__svg_circle_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "circle", 3);
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("stroke-dashoffset", ctx_r1._getStrokeDashOffset(), "px")("stroke-dasharray", ctx_r1._getStrokeCircumference(), "px")("stroke-width", ctx_r1._getCircleStrokeWidth(), "%");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("r", ctx_r1._getCircleRadius());
        }
      }

      var _c0 = ".mat-progress-spinner{display:block;position:relative}.mat-progress-spinner svg{position:absolute;transform:rotate(-90deg);top:0;left:0;transform-origin:center;overflow:visible}.mat-progress-spinner circle{fill:transparent;transform-origin:center;transition:stroke-dashoffset 225ms linear}._mat-animation-noopable.mat-progress-spinner circle{transition:none;animation:none}.cdk-high-contrast-active .mat-progress-spinner circle{stroke:currentColor}.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate]{animation:mat-progress-spinner-linear-rotate 2000ms linear infinite}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate]{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate] circle{transition-property:stroke;animation-duration:4000ms;animation-timing-function:cubic-bezier(0.35, 0, 0.25, 1);animation-iteration-count:infinite}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate] circle{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate]{animation:mat-progress-spinner-stroke-rotate-fallback 10000ms cubic-bezier(0.87, 0.03, 0.33, 1) infinite}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate]{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate] circle{transition-property:stroke}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate] circle{transition:none;animation:none}@keyframes mat-progress-spinner-linear-rotate{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes mat-progress-spinner-stroke-rotate-100{0%{stroke-dashoffset:268.606171575px;transform:rotate(0)}12.5%{stroke-dashoffset:56.5486677px;transform:rotate(0)}12.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(72.5deg)}25%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(72.5deg)}25.0001%{stroke-dashoffset:268.606171575px;transform:rotate(270deg)}37.5%{stroke-dashoffset:56.5486677px;transform:rotate(270deg)}37.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(161.5deg)}50%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(161.5deg)}50.0001%{stroke-dashoffset:268.606171575px;transform:rotate(180deg)}62.5%{stroke-dashoffset:56.5486677px;transform:rotate(180deg)}62.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(251.5deg)}75%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(251.5deg)}75.0001%{stroke-dashoffset:268.606171575px;transform:rotate(90deg)}87.5%{stroke-dashoffset:56.5486677px;transform:rotate(90deg)}87.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(341.5deg)}100%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(341.5deg)}}@keyframes mat-progress-spinner-stroke-rotate-fallback{0%{transform:rotate(0deg)}25%{transform:rotate(1170deg)}50%{transform:rotate(2340deg)}75%{transform:rotate(3510deg)}100%{transform:rotate(4680deg)}}\n";
      var BASE_SIZE = 100;
      /**
       * Base reference stroke width of the spinner.
       * @docs-private
       */

      var BASE_STROKE_WIDTH = 10; // Boilerplate for applying mixins to MatProgressSpinner.

      /** @docs-private */

      var MatProgressSpinnerBase = function MatProgressSpinnerBase(_elementRef) {
        _classCallCheck(this, MatProgressSpinnerBase);

        this._elementRef = _elementRef;
      };

      var _MatProgressSpinnerMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["mixinColor"])(MatProgressSpinnerBase, 'primary');
      /** Injection token to be used to override the default options for `mat-progress-spinner`. */


      var MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('mat-progress-spinner-default-options', {
        providedIn: 'root',
        factory: MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS_FACTORY
      });
      /** @docs-private */

      function MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS_FACTORY() {
        return {
          diameter: BASE_SIZE
        };
      } // .0001 percentage difference is necessary in order to avoid unwanted animation frames
      // for example because the animation duration is 4 seconds, .1% accounts to 4ms
      // which are enough to see the flicker described in
      // https://github.com/angular/components/issues/8984


      var INDETERMINATE_ANIMATION_TEMPLATE = "\n @keyframes mat-progress-spinner-stroke-rotate-DIAMETER {\n    0%      { stroke-dashoffset: START_VALUE;  transform: rotate(0); }\n    12.5%   { stroke-dashoffset: END_VALUE;    transform: rotate(0); }\n    12.5001%  { stroke-dashoffset: END_VALUE;    transform: rotateX(180deg) rotate(72.5deg); }\n    25%     { stroke-dashoffset: START_VALUE;  transform: rotateX(180deg) rotate(72.5deg); }\n\n    25.0001%   { stroke-dashoffset: START_VALUE;  transform: rotate(270deg); }\n    37.5%   { stroke-dashoffset: END_VALUE;    transform: rotate(270deg); }\n    37.5001%  { stroke-dashoffset: END_VALUE;    transform: rotateX(180deg) rotate(161.5deg); }\n    50%     { stroke-dashoffset: START_VALUE;  transform: rotateX(180deg) rotate(161.5deg); }\n\n    50.0001%  { stroke-dashoffset: START_VALUE;  transform: rotate(180deg); }\n    62.5%   { stroke-dashoffset: END_VALUE;    transform: rotate(180deg); }\n    62.5001%  { stroke-dashoffset: END_VALUE;    transform: rotateX(180deg) rotate(251.5deg); }\n    75%     { stroke-dashoffset: START_VALUE;  transform: rotateX(180deg) rotate(251.5deg); }\n\n    75.0001%  { stroke-dashoffset: START_VALUE;  transform: rotate(90deg); }\n    87.5%   { stroke-dashoffset: END_VALUE;    transform: rotate(90deg); }\n    87.5001%  { stroke-dashoffset: END_VALUE;    transform: rotateX(180deg) rotate(341.5deg); }\n    100%    { stroke-dashoffset: START_VALUE;  transform: rotateX(180deg) rotate(341.5deg); }\n  }\n";
      /**
       * `<mat-progress-spinner>` component.
       */

      var MatProgressSpinner = /*#__PURE__*/function (_MatProgressSpinnerMi) {
        _inherits(MatProgressSpinner, _MatProgressSpinnerMi);

        var _super11 = _createSuper(MatProgressSpinner);

        function MatProgressSpinner(_elementRef, platform, _document, animationMode, defaults) {
          var _this38;

          _classCallCheck(this, MatProgressSpinner);

          _this38 = _super11.call(this, _elementRef);
          _this38._elementRef = _elementRef;
          _this38._document = _document;
          _this38._diameter = BASE_SIZE;
          _this38._value = 0;
          _this38._fallbackAnimation = false;
          /** Mode of the progress circle */

          _this38.mode = 'determinate';
          var trackedDiameters = MatProgressSpinner._diameters;
          _this38._spinnerAnimationLabel = _this38._getSpinnerAnimationLabel(); // The base size is already inserted via the component's structural styles. We still
          // need to track it so we don't end up adding the same styles again.

          if (!trackedDiameters.has(_document.head)) {
            trackedDiameters.set(_document.head, new Set([BASE_SIZE]));
          }

          _this38._fallbackAnimation = platform.EDGE || platform.TRIDENT;
          _this38._noopAnimations = animationMode === 'NoopAnimations' && !!defaults && !defaults._forceAnimations;

          if (defaults) {
            if (defaults.diameter) {
              _this38.diameter = defaults.diameter;
            }

            if (defaults.strokeWidth) {
              _this38.strokeWidth = defaults.strokeWidth;
            }
          }

          return _this38;
        }
        /** The diameter of the progress spinner (will set width and height of svg). */


        _createClass(MatProgressSpinner, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var element = this._elementRef.nativeElement; // Note that we need to look up the root node in ngOnInit, rather than the constructor, because
            // Angular seems to create the element outside the shadow root and then moves it inside, if the
            // node is inside an `ngIf` and a ShadowDom-encapsulated component.

            this._styleRoot = Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["_getShadowRoot"])(element) || this._document.head;

            this._attachStyleNode(); // On IE and Edge, we can't animate the `stroke-dashoffset`
            // reliably so we fall back to a non-spec animation.


            var animationClass = "mat-progress-spinner-indeterminate".concat(this._fallbackAnimation ? '-fallback' : '', "-animation");
            element.classList.add(animationClass);
          }
          /** The radius of the spinner, adjusted for stroke width. */

        }, {
          key: "_getCircleRadius",
          value: function _getCircleRadius() {
            return (this.diameter - BASE_STROKE_WIDTH) / 2;
          }
          /** The view box of the spinner's svg element. */

        }, {
          key: "_getViewBox",
          value: function _getViewBox() {
            var viewBox = this._getCircleRadius() * 2 + this.strokeWidth;
            return "0 0 ".concat(viewBox, " ").concat(viewBox);
          }
          /** The stroke circumference of the svg circle. */

        }, {
          key: "_getStrokeCircumference",
          value: function _getStrokeCircumference() {
            return 2 * Math.PI * this._getCircleRadius();
          }
          /** The dash offset of the svg circle. */

        }, {
          key: "_getStrokeDashOffset",
          value: function _getStrokeDashOffset() {
            if (this.mode === 'determinate') {
              return this._getStrokeCircumference() * (100 - this._value) / 100;
            } // In fallback mode set the circle to 80% and rotate it with CSS.


            if (this._fallbackAnimation && this.mode === 'indeterminate') {
              return this._getStrokeCircumference() * 0.2;
            }

            return null;
          }
          /** Stroke width of the circle in percent. */

        }, {
          key: "_getCircleStrokeWidth",
          value: function _getCircleStrokeWidth() {
            return this.strokeWidth / this.diameter * 100;
          }
          /** Dynamically generates a style tag containing the correct animation for this diameter. */

        }, {
          key: "_attachStyleNode",
          value: function _attachStyleNode() {
            var styleRoot = this._styleRoot;
            var currentDiameter = this._diameter;
            var diameters = MatProgressSpinner._diameters;
            var diametersForElement = diameters.get(styleRoot);

            if (!diametersForElement || !diametersForElement.has(currentDiameter)) {
              var styleTag = this._document.createElement('style');

              styleTag.setAttribute('mat-spinner-animation', this._spinnerAnimationLabel);
              styleTag.textContent = this._getAnimationText();
              styleRoot.appendChild(styleTag);

              if (!diametersForElement) {
                diametersForElement = new Set();
                diameters.set(styleRoot, diametersForElement);
              }

              diametersForElement.add(currentDiameter);
            }
          }
          /** Generates animation styles adjusted for the spinner's diameter. */

        }, {
          key: "_getAnimationText",
          value: function _getAnimationText() {
            var strokeCircumference = this._getStrokeCircumference();

            return INDETERMINATE_ANIMATION_TEMPLATE // Animation should begin at 5% and end at 80%
            .replace(/START_VALUE/g, "".concat(0.95 * strokeCircumference)).replace(/END_VALUE/g, "".concat(0.2 * strokeCircumference)).replace(/DIAMETER/g, "".concat(this._spinnerAnimationLabel));
          }
          /** Returns the circle diameter formatted for use with the animation-name CSS property. */

        }, {
          key: "_getSpinnerAnimationLabel",
          value: function _getSpinnerAnimationLabel() {
            // The string of a float point number will include a period ‘.’ character,
            // which is not valid for a CSS animation-name.
            return this.diameter.toString().replace('.', '_');
          }
        }, {
          key: "diameter",
          get: function get() {
            return this._diameter;
          },
          set: function set(size) {
            this._diameter = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceNumberProperty"])(size);
            this._spinnerAnimationLabel = this._getSpinnerAnimationLabel(); // If this is set before `ngOnInit`, the style root may not have been resolved yet.

            if (!this._fallbackAnimation && this._styleRoot) {
              this._attachStyleNode();
            }
          }
          /** Stroke width of the progress spinner. */

        }, {
          key: "strokeWidth",
          get: function get() {
            return this._strokeWidth || this.diameter / 10;
          },
          set: function set(value) {
            this._strokeWidth = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceNumberProperty"])(value);
          }
          /** Value of the progress circle. */

        }, {
          key: "value",
          get: function get() {
            return this.mode === 'determinate' ? this._value : 0;
          },
          set: function set(newValue) {
            this._value = Math.max(0, Math.min(100, Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceNumberProperty"])(newValue)));
          }
        }]);

        return MatProgressSpinner;
      }(_MatProgressSpinnerMixinBase);

      MatProgressSpinner.ɵfac = function MatProgressSpinner_Factory(t) {
        return new (t || MatProgressSpinner)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["ANIMATION_MODULE_TYPE"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS));
      };

      MatProgressSpinner.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MatProgressSpinner,
        selectors: [["mat-progress-spinner"]],
        hostAttrs: ["role", "progressbar", 1, "mat-progress-spinner"],
        hostVars: 10,
        hostBindings: function MatProgressSpinner_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-valuemin", ctx.mode === "determinate" ? 0 : null)("aria-valuemax", ctx.mode === "determinate" ? 100 : null)("aria-valuenow", ctx.mode === "determinate" ? ctx.value : null)("mode", ctx.mode);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx.diameter, "px")("height", ctx.diameter, "px");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("_mat-animation-noopable", ctx._noopAnimations);
          }
        },
        inputs: {
          color: "color",
          mode: "mode",
          diameter: "diameter",
          strokeWidth: "strokeWidth",
          value: "value"
        },
        exportAs: ["matProgressSpinner"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
        decls: 3,
        vars: 8,
        consts: [["preserveAspectRatio", "xMidYMid meet", "focusable", "false", 3, "ngSwitch"], ["cx", "50%", "cy", "50%", 3, "animation-name", "stroke-dashoffset", "stroke-dasharray", "stroke-width", 4, "ngSwitchCase"], ["cx", "50%", "cy", "50%", 3, "stroke-dashoffset", "stroke-dasharray", "stroke-width", 4, "ngSwitchCase"], ["cx", "50%", "cy", "50%"]],
        template: function MatProgressSpinner_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MatProgressSpinner__svg_circle_1_Template, 1, 9, "circle", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MatProgressSpinner__svg_circle_2_Template, 1, 7, "circle", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx.diameter, "px")("height", ctx.diameter, "px");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", ctx.mode === "indeterminate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("viewBox", ctx._getViewBox());

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", false);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitchCase"]],
        styles: [_c0],
        encapsulation: 2,
        changeDetection: 0
      });
      /**
       * Tracks diameters of existing instances to de-dupe generated styles (default d = 100).
       * We need to keep track of which elements the diameters were attached to, because for
       * elements in the Shadow DOM the style tags are attached to the shadow root, rather
       * than the document head.
       */

      MatProgressSpinner._diameters = new WeakMap();

      MatProgressSpinner.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]]
          }]
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["ANIMATION_MODULE_TYPE"]]
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS]
          }]
        }];
      };

      MatProgressSpinner.propDecorators = {
        diameter: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        strokeWidth: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        mode: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        value: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatProgressSpinner, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'mat-progress-spinner',
            exportAs: 'matProgressSpinner',
            host: {
              'role': 'progressbar',
              'class': 'mat-progress-spinner',
              '[class._mat-animation-noopable]': "_noopAnimations",
              '[style.width.px]': 'diameter',
              '[style.height.px]': 'diameter',
              '[attr.aria-valuemin]': 'mode === "determinate" ? 0 : null',
              '[attr.aria-valuemax]': 'mode === "determinate" ? 100 : null',
              '[attr.aria-valuenow]': 'mode === "determinate" ? value : null',
              '[attr.mode]': 'mode'
            },
            inputs: ['color'],
            template: "<!--\n  preserveAspectRatio of xMidYMid meet as the center of the viewport is the circle's\n  center. The center of the circle will remain at the center of the mat-progress-spinner\n  element containing the SVG. `focusable=\"false\"` prevents IE from allowing the user to\n  tab into the SVG element.\n-->\n\n<svg\n  [style.width.px]=\"diameter\"\n  [style.height.px]=\"diameter\"\n  [attr.viewBox]=\"_getViewBox()\"\n  preserveAspectRatio=\"xMidYMid meet\"\n  focusable=\"false\"\n  [ngSwitch]=\"mode === 'indeterminate'\">\n\n  <!--\n    Technically we can reuse the same `circle` element, however Safari has an issue that breaks\n    the SVG rendering in determinate mode, after switching between indeterminate and determinate.\n    Using a different element avoids the issue. An alternative to this is adding `display: none`\n    for a split second and then removing it when switching between modes, but it's hard to know\n    for how long to hide the element and it can cause the UI to blink.\n  -->\n  <circle\n    *ngSwitchCase=\"true\"\n    cx=\"50%\"\n    cy=\"50%\"\n    [attr.r]=\"_getCircleRadius()\"\n    [style.animation-name]=\"'mat-progress-spinner-stroke-rotate-' + _spinnerAnimationLabel\"\n    [style.stroke-dashoffset.px]=\"_getStrokeDashOffset()\"\n    [style.stroke-dasharray.px]=\"_getStrokeCircumference()\"\n    [style.stroke-width.%]=\"_getCircleStrokeWidth()\"></circle>\n\n  <circle\n    *ngSwitchCase=\"false\"\n    cx=\"50%\"\n    cy=\"50%\"\n    [attr.r]=\"_getCircleRadius()\"\n    [style.stroke-dashoffset.px]=\"_getStrokeDashOffset()\"\n    [style.stroke-dasharray.px]=\"_getStrokeCircumference()\"\n    [style.stroke-width.%]=\"_getCircleStrokeWidth()\"></circle>\n</svg>\n",
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            styles: [".mat-progress-spinner{display:block;position:relative}.mat-progress-spinner svg{position:absolute;transform:rotate(-90deg);top:0;left:0;transform-origin:center;overflow:visible}.mat-progress-spinner circle{fill:transparent;transform-origin:center;transition:stroke-dashoffset 225ms linear}._mat-animation-noopable.mat-progress-spinner circle{transition:none;animation:none}.cdk-high-contrast-active .mat-progress-spinner circle{stroke:currentColor}.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate]{animation:mat-progress-spinner-linear-rotate 2000ms linear infinite}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate]{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate] circle{transition-property:stroke;animation-duration:4000ms;animation-timing-function:cubic-bezier(0.35, 0, 0.25, 1);animation-iteration-count:infinite}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate] circle{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate]{animation:mat-progress-spinner-stroke-rotate-fallback 10000ms cubic-bezier(0.87, 0.03, 0.33, 1) infinite}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate]{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate] circle{transition-property:stroke}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate] circle{transition:none;animation:none}@keyframes mat-progress-spinner-linear-rotate{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes mat-progress-spinner-stroke-rotate-100{0%{stroke-dashoffset:268.606171575px;transform:rotate(0)}12.5%{stroke-dashoffset:56.5486677px;transform:rotate(0)}12.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(72.5deg)}25%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(72.5deg)}25.0001%{stroke-dashoffset:268.606171575px;transform:rotate(270deg)}37.5%{stroke-dashoffset:56.5486677px;transform:rotate(270deg)}37.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(161.5deg)}50%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(161.5deg)}50.0001%{stroke-dashoffset:268.606171575px;transform:rotate(180deg)}62.5%{stroke-dashoffset:56.5486677px;transform:rotate(180deg)}62.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(251.5deg)}75%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(251.5deg)}75.0001%{stroke-dashoffset:268.606171575px;transform:rotate(90deg)}87.5%{stroke-dashoffset:56.5486677px;transform:rotate(90deg)}87.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(341.5deg)}100%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(341.5deg)}}@keyframes mat-progress-spinner-stroke-rotate-fallback{0%{transform:rotate(0deg)}25%{transform:rotate(1170deg)}50%{transform:rotate(2340deg)}75%{transform:rotate(3510deg)}100%{transform:rotate(4680deg)}}\n"]
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }, {
            type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]]
            }]
          }, {
            type: String,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["ANIMATION_MODULE_TYPE"]]
            }]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS]
            }]
          }];
        }, {
          mode: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          diameter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          strokeWidth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          value: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /**
       * `<mat-spinner>` component.
       *
       * This is a component definition to be used as a convenience reference to create an
       * indeterminate `<mat-progress-spinner>` instance.
       */


      var MatSpinner = /*#__PURE__*/function (_MatProgressSpinner) {
        _inherits(MatSpinner, _MatProgressSpinner);

        var _super12 = _createSuper(MatSpinner);

        function MatSpinner(elementRef, platform, document, animationMode, defaults) {
          var _this39;

          _classCallCheck(this, MatSpinner);

          _this39 = _super12.call(this, elementRef, platform, document, animationMode, defaults);
          _this39.mode = 'indeterminate';
          return _this39;
        }

        return MatSpinner;
      }(MatProgressSpinner);

      MatSpinner.ɵfac = function MatSpinner_Factory(t) {
        return new (t || MatSpinner)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["ANIMATION_MODULE_TYPE"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS));
      };

      MatSpinner.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MatSpinner,
        selectors: [["mat-spinner"]],
        hostAttrs: ["role", "progressbar", "mode", "indeterminate", 1, "mat-spinner", "mat-progress-spinner"],
        hostVars: 6,
        hostBindings: function MatSpinner_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx.diameter, "px")("height", ctx.diameter, "px");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("_mat-animation-noopable", ctx._noopAnimations);
          }
        },
        inputs: {
          color: "color"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
        decls: 3,
        vars: 8,
        consts: [["preserveAspectRatio", "xMidYMid meet", "focusable", "false", 3, "ngSwitch"], ["cx", "50%", "cy", "50%", 3, "animation-name", "stroke-dashoffset", "stroke-dasharray", "stroke-width", 4, "ngSwitchCase"], ["cx", "50%", "cy", "50%", 3, "stroke-dashoffset", "stroke-dasharray", "stroke-width", 4, "ngSwitchCase"], ["cx", "50%", "cy", "50%"]],
        template: function MatSpinner_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MatSpinner__svg_circle_1_Template, 1, 9, "circle", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MatSpinner__svg_circle_2_Template, 1, 7, "circle", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx.diameter, "px")("height", ctx.diameter, "px");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", ctx.mode === "indeterminate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("viewBox", ctx._getViewBox());

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", false);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitchCase"]],
        styles: [_c0],
        encapsulation: 2,
        changeDetection: 0
      });

      MatSpinner.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]]
          }]
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["ANIMATION_MODULE_TYPE"]]
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS]
          }]
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatSpinner, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'mat-spinner',
            host: {
              'role': 'progressbar',
              'mode': 'indeterminate',
              'class': 'mat-spinner mat-progress-spinner',
              '[class._mat-animation-noopable]': "_noopAnimations",
              '[style.width.px]': 'diameter',
              '[style.height.px]': 'diameter'
            },
            inputs: ['color'],
            template: "<!--\n  preserveAspectRatio of xMidYMid meet as the center of the viewport is the circle's\n  center. The center of the circle will remain at the center of the mat-progress-spinner\n  element containing the SVG. `focusable=\"false\"` prevents IE from allowing the user to\n  tab into the SVG element.\n-->\n\n<svg\n  [style.width.px]=\"diameter\"\n  [style.height.px]=\"diameter\"\n  [attr.viewBox]=\"_getViewBox()\"\n  preserveAspectRatio=\"xMidYMid meet\"\n  focusable=\"false\"\n  [ngSwitch]=\"mode === 'indeterminate'\">\n\n  <!--\n    Technically we can reuse the same `circle` element, however Safari has an issue that breaks\n    the SVG rendering in determinate mode, after switching between indeterminate and determinate.\n    Using a different element avoids the issue. An alternative to this is adding `display: none`\n    for a split second and then removing it when switching between modes, but it's hard to know\n    for how long to hide the element and it can cause the UI to blink.\n  -->\n  <circle\n    *ngSwitchCase=\"true\"\n    cx=\"50%\"\n    cy=\"50%\"\n    [attr.r]=\"_getCircleRadius()\"\n    [style.animation-name]=\"'mat-progress-spinner-stroke-rotate-' + _spinnerAnimationLabel\"\n    [style.stroke-dashoffset.px]=\"_getStrokeDashOffset()\"\n    [style.stroke-dasharray.px]=\"_getStrokeCircumference()\"\n    [style.stroke-width.%]=\"_getCircleStrokeWidth()\"></circle>\n\n  <circle\n    *ngSwitchCase=\"false\"\n    cx=\"50%\"\n    cy=\"50%\"\n    [attr.r]=\"_getCircleRadius()\"\n    [style.stroke-dashoffset.px]=\"_getStrokeDashOffset()\"\n    [style.stroke-dasharray.px]=\"_getStrokeCircumference()\"\n    [style.stroke-width.%]=\"_getCircleStrokeWidth()\"></circle>\n</svg>\n",
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            styles: [".mat-progress-spinner{display:block;position:relative}.mat-progress-spinner svg{position:absolute;transform:rotate(-90deg);top:0;left:0;transform-origin:center;overflow:visible}.mat-progress-spinner circle{fill:transparent;transform-origin:center;transition:stroke-dashoffset 225ms linear}._mat-animation-noopable.mat-progress-spinner circle{transition:none;animation:none}.cdk-high-contrast-active .mat-progress-spinner circle{stroke:currentColor}.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate]{animation:mat-progress-spinner-linear-rotate 2000ms linear infinite}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate]{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate] circle{transition-property:stroke;animation-duration:4000ms;animation-timing-function:cubic-bezier(0.35, 0, 0.25, 1);animation-iteration-count:infinite}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate] circle{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate]{animation:mat-progress-spinner-stroke-rotate-fallback 10000ms cubic-bezier(0.87, 0.03, 0.33, 1) infinite}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate]{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate] circle{transition-property:stroke}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate] circle{transition:none;animation:none}@keyframes mat-progress-spinner-linear-rotate{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes mat-progress-spinner-stroke-rotate-100{0%{stroke-dashoffset:268.606171575px;transform:rotate(0)}12.5%{stroke-dashoffset:56.5486677px;transform:rotate(0)}12.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(72.5deg)}25%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(72.5deg)}25.0001%{stroke-dashoffset:268.606171575px;transform:rotate(270deg)}37.5%{stroke-dashoffset:56.5486677px;transform:rotate(270deg)}37.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(161.5deg)}50%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(161.5deg)}50.0001%{stroke-dashoffset:268.606171575px;transform:rotate(180deg)}62.5%{stroke-dashoffset:56.5486677px;transform:rotate(180deg)}62.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(251.5deg)}75%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(251.5deg)}75.0001%{stroke-dashoffset:268.606171575px;transform:rotate(90deg)}87.5%{stroke-dashoffset:56.5486677px;transform:rotate(90deg)}87.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(341.5deg)}100%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(341.5deg)}}@keyframes mat-progress-spinner-stroke-rotate-fallback{0%{transform:rotate(0deg)}25%{transform:rotate(1170deg)}50%{transform:rotate(2340deg)}75%{transform:rotate(3510deg)}100%{transform:rotate(4680deg)}}\n"]
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }, {
            type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]]
            }]
          }, {
            type: String,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["ANIMATION_MODULE_TYPE"]]
            }]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS]
            }]
          }];
        }, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var MatProgressSpinnerModule = function MatProgressSpinnerModule() {
        _classCallCheck(this, MatProgressSpinnerModule);
      };

      MatProgressSpinnerModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: MatProgressSpinnerModule
      });
      MatProgressSpinnerModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function MatProgressSpinnerModule_Factory(t) {
          return new (t || MatProgressSpinnerModule)();
        },
        imports: [[_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]], _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MatProgressSpinnerModule, {
          declarations: function declarations() {
            return [MatProgressSpinner, MatSpinner];
          },
          imports: function imports() {
            return [_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]];
          },
          exports: function exports() {
            return [MatProgressSpinner, MatSpinner, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"]];
          }
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatProgressSpinnerModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
            exports: [MatProgressSpinner, MatSpinner, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"]],
            declarations: [MatProgressSpinner, MatSpinner]
          }]
        }], null, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Generated bundle index. Do not edit.
       */
      //# sourceMappingURL=progress-spinner.js.map

      /***/

    }
  }]);
})();
//# sourceMappingURL=default~empboard-empboard-module~forms-forms-module~storemanagement-storemanagement-module~ui-ui-module-es5.js.map