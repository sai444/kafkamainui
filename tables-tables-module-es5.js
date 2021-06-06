(function () {
  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tables-tables-module"], {
    /***/
    "LQVm":
    /*!*************************************************************************!*\
      !*** ./src/app/tables/advance-table/dialogs/delete/delete.component.ts ***!
      \*************************************************************************/

    /*! exports provided: DeleteDialogComponent */

    /***/
    function LQVm(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DeleteDialogComponent", function () {
        return DeleteDialogComponent;
      });
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _advance_table_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../advance-table.service */
      "x7eq");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");

      var DeleteDialogComponent = /*#__PURE__*/function () {
        function DeleteDialogComponent(dialogRef, data, advanceTableService) {
          _classCallCheck(this, DeleteDialogComponent);

          this.dialogRef = dialogRef;
          this.data = data;
          this.advanceTableService = advanceTableService;
        }

        _createClass(DeleteDialogComponent, [{
          key: "onNoClick",
          value: function onNoClick() {
            this.dialogRef.close();
          }
        }, {
          key: "confirmDelete",
          value: function confirmDelete() {
            this.advanceTableService.deleteAdvanceTable(this.data.id);
          }
        }]);

        return DeleteDialogComponent;
      }();

      DeleteDialogComponent.ɵfac = function DeleteDialogComponent_Factory(t) {
        return new (t || DeleteDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_advance_table_service__WEBPACK_IMPORTED_MODULE_2__["AdvanceTableService"]));
      };

      DeleteDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: DeleteDialogComponent,
        selectors: [["app-delete"]],
        decls: 25,
        vars: 5,
        consts: [[1, "container"], ["mat-dialog-title", ""], ["mat-dialog-content", ""], [1, "clearfix"], [1, "font-weight-bold"], ["mat-dialog-actions", "", 1, "mb-1"], ["mat-flat-button", "", "color", "warn", 3, "mat-dialog-close", "click"], ["mat-flat-button", "", "tabindex", "-1", 3, "click"]],
        template: function DeleteDialogComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h3", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Are you sure?");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ul", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "span", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, " Name: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "span", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, " Email: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "span", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Mobile: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DeleteDialogComponent_Template_button_click_21_listener() {
              return ctx.confirmDelete();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, " Delete ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "button", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DeleteDialogComponent_Template_button_click_23_listener() {
              return ctx.onNoClick();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Cancel");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", ctx.data.fName, " ", ctx.data.lName, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.data.email);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx.data.mobile, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("mat-dialog-close", 1);
          }
        },
        directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogContent"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogClose"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYmxlcy9hZHZhbmNlLXRhYmxlL2RpYWxvZ3MvZGVsZXRlL2RlbGV0ZS5jb21wb25lbnQuc2FzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DeleteDialogComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'app-delete',
            templateUrl: './delete.component.html',
            styleUrls: ['./delete.component.sass']
          }]
        }], function () {
          return [{
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogRef"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
              args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MAT_DIALOG_DATA"]]
            }]
          }, {
            type: _advance_table_service__WEBPACK_IMPORTED_MODULE_2__["AdvanceTableService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "PRlH":
    /*!*************************************************!*\
      !*** ./src/app/tables/tables-routing.module.ts ***!
      \*************************************************/

    /*! exports provided: TablesRoutingModule */

    /***/
    function PRlH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TablesRoutingModule", function () {
        return TablesRoutingModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _basic_table_basic_table_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./basic-table/basic-table.component */
      "us77");
      /* harmony import */


      var _ngx_datatable_ngx_datatable_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./ngx-datatable/ngx-datatable.component */
      "p95r");
      /* harmony import */


      var _material_table_material_table_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./material-table/material-table.component */
      "vEQH");
      /* harmony import */


      var _advance_table_advance_table_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./advance-table/advance-table.component */
      "QLnP");

      var routes = [{
        path: '',
        redirectTo: 'basic-tables',
        pathMatch: 'full'
      }, {
        path: 'basic-tables',
        component: _basic_table_basic_table_component__WEBPACK_IMPORTED_MODULE_2__["BasicTableComponent"]
      }, {
        path: 'advance-table',
        component: _advance_table_advance_table_component__WEBPACK_IMPORTED_MODULE_5__["AdvanceTableComponent"]
      }, {
        path: 'material-tables',
        component: _material_table_material_table_component__WEBPACK_IMPORTED_MODULE_4__["MaterialTableComponent"]
      }, {
        path: 'ngx-datatable',
        component: _ngx_datatable_ngx_datatable_component__WEBPACK_IMPORTED_MODULE_3__["NgxDatatableComponent"]
      }];

      var TablesRoutingModule = function TablesRoutingModule() {
        _classCallCheck(this, TablesRoutingModule);
      };

      TablesRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: TablesRoutingModule
      });
      TablesRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function TablesRoutingModule_Factory(t) {
          return new (t || TablesRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TablesRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TablesRoutingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "QLnP":
    /*!*****************************************************************!*\
      !*** ./src/app/tables/advance-table/advance-table.component.ts ***!
      \*****************************************************************/

    /*! exports provided: AdvanceTableComponent, ExampleDataSource */

    /***/
    function QLnP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AdvanceTableComponent", function () {
        return AdvanceTableComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ExampleDataSource", function () {
        return ExampleDataSource;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _advance_table_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./advance-table.service */
      "x7eq");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/paginator */
      "M9IT");
      /* harmony import */


      var _angular_material_sort__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/sort */
      "Dh3D");
      /* harmony import */


      var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/cdk/collections */
      "0EQZ");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "dNgK");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _dialogs_form_dialog_form_dialog_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./dialogs/form-dialog/form-dialog.component */
      "tq9x");
      /* harmony import */


      var _dialogs_delete_delete_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./dialogs/delete/delete.component */
      "LQVm");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");
      /* harmony import */


      var _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/menu */
      "STbY");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/material/table */
      "+0xr");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/material/checkbox */
      "bSwM");

      var _c0 = ["filter"];

      function AdvanceTableComponent_mat_header_cell_93_Template(rf, ctx) {
        if (rf & 1) {
          var _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-checkbox", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AdvanceTableComponent_mat_header_cell_93_Template_mat_checkbox_change_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r33);

            var ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return $event ? ctx_r32.masterToggle() : null;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", "tbl-col-width-per-6");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx_r2.selection.hasValue() && ctx_r2.isAllSelected())("indeterminate", ctx_r2.selection.hasValue() && !ctx_r2.isAllSelected())("ngClass", "tbl-checkbox");
        }
      }

      function AdvanceTableComponent_mat_cell_94_Template(rf, ctx) {
        if (rf & 1) {
          var _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-checkbox", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdvanceTableComponent_mat_cell_94_Template_mat_checkbox_click_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r36);

            return $event.stopPropagation();
          })("change", function AdvanceTableComponent_mat_cell_94_Template_mat_checkbox_change_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r36);

            var row_r34 = ctx.$implicit;

            var ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return $event ? ctx_r37.selection.toggle(row_r34) : null;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r34 = ctx.$implicit;

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", "tbl-col-width-per-6");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx_r3.selection.isSelected(row_r34))("ngClass", "tbl-checkbox");
        }
      }

      function AdvanceTableComponent_mat_header_cell_96_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Id");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function AdvanceTableComponent_mat_cell_97_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r38 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](row_r38.id);
        }
      }

      function AdvanceTableComponent_mat_header_cell_99_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Image ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", "tbl-col-width-per-6");
        }
      }

      function AdvanceTableComponent_mat_cell_100_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r39 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", row_r39.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      }

      function AdvanceTableComponent_mat_header_cell_102_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "First Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", "tbl-col-width-per-8");
        }
      }

      function AdvanceTableComponent_mat_cell_103_Template(rf, ctx) {
        if (rf & 1) {
          var _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("contextmenu", function AdvanceTableComponent_mat_cell_103_Template_mat_cell_contextmenu_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r42);

            var row_r40 = ctx.$implicit;

            var ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r41.onContextMenu($event, row_r40);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r40 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", "tbl-col-width-per-8");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r40.fName, "");
        }
      }

      function AdvanceTableComponent_mat_header_cell_105_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Last Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", "tbl-col-width-per-8");
        }
      }

      function AdvanceTableComponent_mat_cell_106_Template(rf, ctx) {
        if (rf & 1) {
          var _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("contextmenu", function AdvanceTableComponent_mat_cell_106_Template_mat_cell_contextmenu_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r45);

            var row_r43 = ctx.$implicit;

            var ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r44.onContextMenu($event, row_r43);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r43 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", "tbl-col-width-per-8");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r43.lName, "");
        }
      }

      function AdvanceTableComponent_mat_header_cell_108_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Email");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function AdvanceTableComponent_mat_cell_109_Template(rf, ctx) {
        if (rf & 1) {
          var _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("contextmenu", function AdvanceTableComponent_mat_cell_109_Template_mat_cell_contextmenu_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r48);

            var row_r46 = ctx.$implicit;

            var ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r47.onContextMenu($event, row_r46);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r46 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r46.email, "");
        }
      }

      function AdvanceTableComponent_mat_header_cell_111_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Gender");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", "tbl-col-width-per-7");
        }
      }

      function AdvanceTableComponent_mat_cell_112_Template(rf, ctx) {
        if (rf & 1) {
          var _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("contextmenu", function AdvanceTableComponent_mat_cell_112_Template_mat_cell_contextmenu_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r51);

            var row_r49 = ctx.$implicit;

            var ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r50.onContextMenu($event, row_r49);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r49 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", "tbl-col-width-per-7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r49.gender, "");
        }
      }

      function AdvanceTableComponent_mat_header_cell_114_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Birth Date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function AdvanceTableComponent_mat_cell_115_Template(rf, ctx) {
        if (rf & 1) {
          var _r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("contextmenu", function AdvanceTableComponent_mat_cell_115_Template_mat_cell_contextmenu_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r54);

            var row_r52 = ctx.$implicit;

            var ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r53.onContextMenu($event, row_r52);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r52 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, row_r52.bDate, "MM/dd/yyyy"), " ");
        }
      }

      function AdvanceTableComponent_mat_header_cell_117_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Mobile");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function AdvanceTableComponent_mat_cell_118_Template(rf, ctx) {
        if (rf & 1) {
          var _r57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("contextmenu", function AdvanceTableComponent_mat_cell_118_Template_mat_cell_contextmenu_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r57);

            var row_r55 = ctx.$implicit;

            var ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r56.onContextMenu($event, row_r55);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r55 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r55.mobile, "");
        }
      }

      function AdvanceTableComponent_mat_header_cell_120_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Address");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", "tbl-col-width-per-20");
        }
      }

      function AdvanceTableComponent_mat_cell_121_Template(rf, ctx) {
        if (rf & 1) {
          var _r60 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("contextmenu", function AdvanceTableComponent_mat_cell_121_Template_mat_cell_contextmenu_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r60);

            var row_r58 = ctx.$implicit;

            var ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r59.onContextMenu($event, row_r58);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r58 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", "tbl-col-width-per-20");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r58.address, "");
        }
      }

      function AdvanceTableComponent_mat_header_cell_123_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Country");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function AdvanceTableComponent_mat_cell_124_Template(rf, ctx) {
        if (rf & 1) {
          var _r63 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("contextmenu", function AdvanceTableComponent_mat_cell_124_Template_mat_cell_contextmenu_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r63);

            var row_r61 = ctx.$implicit;

            var ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r62.onContextMenu($event, row_r61);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r61 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r61.country, "");
        }
      }

      function AdvanceTableComponent_mat_header_cell_126_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Actions");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function AdvanceTableComponent_mat_cell_127_Template(rf, ctx) {
        if (rf & 1) {
          var _r67 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdvanceTableComponent_mat_cell_127_Template_button_click_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r67);

            return $event.stopPropagation();
          })("click", function AdvanceTableComponent_mat_cell_127_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r67);

            var row_r64 = ctx.$implicit;

            var ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r68.editCall(row_r64);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "edit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdvanceTableComponent_mat_cell_127_Template_button_click_4_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r67);

            return $event.stopPropagation();
          })("click", function AdvanceTableComponent_mat_cell_127_Template_button_click_4_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r67);

            var row_r64 = ctx.$implicit;

            var ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r70.deleteItem(row_r64);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-icon", 77);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "delete");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function AdvanceTableComponent_mat_header_row_128_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-header-row");
        }
      }

      function AdvanceTableComponent_mat_row_129_Template(rf, ctx) {
        if (rf & 1) {
          var _r73 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-row", 78);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdvanceTableComponent_mat_row_129_Template_mat_row_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r73);

            var row_r71 = ctx.$implicit;

            var ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r72.editCall(row_r71);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("cursor", "pointer");
        }
      }

      function AdvanceTableComponent_ng_template_133_Template(rf, ctx) {
        if (rf & 1) {
          var _r76 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 79);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdvanceTableComponent_ng_template_133_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r76);

            var ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r75.addNew();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "add_box");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Add Record");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 79);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdvanceTableComponent_ng_template_133_Template_button_click_5_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r76);

            var item_r74 = ctx.item;

            var ctx_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r77.editCall(item_r74);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "create");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Edit Record");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 79);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdvanceTableComponent_ng_template_133_Template_button_click_10_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r76);

            var item_r74 = ctx.item;

            var ctx_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r78.deleteItem(item_r74);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "delete");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Delete Record");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 79);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdvanceTableComponent_ng_template_133_Template_button_click_15_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r76);

            var ctx_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r79.refresh();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "refresh");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Refresh Record");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 80);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "no_encryption");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Disable");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 81);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "list_alt");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " Nested Menu");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](135);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r30);
        }
      }

      var _c1 = function _c1() {
        return [5, 10, 25, 100];
      };

      var AdvanceTableComponent = /*#__PURE__*/function () {
        function AdvanceTableComponent(httpClient, dialog, advanceTableService, snackBar) {
          _classCallCheck(this, AdvanceTableComponent);

          this.httpClient = httpClient;
          this.dialog = dialog;
          this.advanceTableService = advanceTableService;
          this.snackBar = snackBar;
          this.displayedColumns = ['select', 'img', 'fName', 'lName', 'email', 'gender', 'bDate', 'mobile', 'address', 'country', 'actions'];
          this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_6__["SelectionModel"](true, []);
          this.contextMenuPosition = {
            x: '0px',
            y: '0px'
          };
        }

        _createClass(AdvanceTableComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.loadData();
          }
        }, {
          key: "refresh",
          value: function refresh() {
            this.loadData();
          }
        }, {
          key: "addNew",
          value: function addNew() {
            var _this = this;

            var dialogRef = this.dialog.open(_dialogs_form_dialog_form_dialog_component__WEBPACK_IMPORTED_MODULE_10__["FormDialogComponent"], {
              data: {
                advanceTable: this.advanceTable,
                action: 'add'
              }
            });
            dialogRef.afterClosed().subscribe(function (result) {
              if (result === 1) {
                // After dialog is closed we're doing frontend updates
                // For add we're just pushing a new row inside DataService
                _this.exampleDatabase.dataChange.value.unshift(_this.advanceTableService.getDialogData());

                _this.refreshTable();

                _this.showNotification('snackbar-success', 'Add Record Successfully...!!!', 'bottom', 'center');
              }
            });
          }
        }, {
          key: "editCall",
          value: function editCall(row) {
            var _this2 = this;

            this.id = row.id;
            var dialogRef = this.dialog.open(_dialogs_form_dialog_form_dialog_component__WEBPACK_IMPORTED_MODULE_10__["FormDialogComponent"], {
              data: {
                advanceTable: row,
                action: 'edit'
              }
            });
            dialogRef.afterClosed().subscribe(function (result) {
              if (result === 1) {
                // When using an edit things are little different, firstly we find record inside DataService by id
                var foundIndex = _this2.exampleDatabase.dataChange.value.findIndex(function (x) {
                  return x.id === _this2.id;
                }); // Then you update that record using data from dialogData (values you enetered)


                _this2.exampleDatabase.dataChange.value[foundIndex] = _this2.advanceTableService.getDialogData(); // And lastly refresh table

                _this2.refreshTable();

                _this2.showNotification('black', 'Edit Record Successfully...!!!', 'bottom', 'center');
              }
            });
          }
        }, {
          key: "deleteItem",
          value: function deleteItem(row) {
            var _this3 = this;

            this.id = row.id;
            var dialogRef = this.dialog.open(_dialogs_delete_delete_component__WEBPACK_IMPORTED_MODULE_11__["DeleteDialogComponent"], {
              data: row
            });
            dialogRef.afterClosed().subscribe(function (result) {
              if (result === 1) {
                var foundIndex = _this3.exampleDatabase.dataChange.value.findIndex(function (x) {
                  return x.id === _this3.id;
                }); // for delete we use splice in order to remove single object from DataService


                _this3.exampleDatabase.dataChange.value.splice(foundIndex, 1);

                _this3.refreshTable();

                _this3.showNotification('snackbar-danger', 'Delete Record Successfully...!!!', 'bottom', 'center');
              }
            });
          }
        }, {
          key: "refreshTable",
          value: function refreshTable() {
            this.paginator._changePageSize(this.paginator.pageSize);
          }
          /** Whether the number of selected elements matches the total number of rows. */

        }, {
          key: "isAllSelected",
          value: function isAllSelected() {
            var numSelected = this.selection.selected.length;
            var numRows = this.dataSource.renderedData.length;
            return numSelected === numRows;
          }
          /** Selects all rows if they are not all selected; otherwise clear selection. */

        }, {
          key: "masterToggle",
          value: function masterToggle() {
            var _this4 = this;

            this.isAllSelected() ? this.selection.clear() : this.dataSource.renderedData.forEach(function (row) {
              return _this4.selection.select(row);
            });
          }
        }, {
          key: "removeSelectedRows",
          value: function removeSelectedRows() {
            var _this5 = this;

            var totalSelect = this.selection.selected.length;
            this.selection.selected.forEach(function (item) {
              var index = _this5.dataSource.renderedData.findIndex(function (d) {
                return d === item;
              }); // console.log(this.dataSource.renderedData.findIndex((d) => d === item));


              _this5.exampleDatabase.dataChange.value.splice(index, 1);

              _this5.refreshTable();

              _this5.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_6__["SelectionModel"](true, []);
            });
            this.showNotification('snackbar-danger', totalSelect + ' Record Delete Successfully...!!!', 'bottom', 'center');
          }
        }, {
          key: "loadData",
          value: function loadData() {
            var _this6 = this;

            this.exampleDatabase = new _advance_table_service__WEBPACK_IMPORTED_MODULE_1__["AdvanceTableService"](this.httpClient);
            this.dataSource = new ExampleDataSource(this.exampleDatabase, this.paginator, this.sort);
            Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["fromEvent"])(this.filter.nativeElement, 'keyup').subscribe(function () {
              if (!_this6.dataSource) {
                return;
              }

              _this6.dataSource.filter = _this6.filter.nativeElement.value;
            });
          }
        }, {
          key: "showNotification",
          value: function showNotification(colorName, text, placementFrom, placementAlign) {
            this.snackBar.open(text, '', {
              duration: 2000,
              verticalPosition: placementFrom,
              horizontalPosition: placementAlign,
              panelClass: colorName
            });
          } // context menu

        }, {
          key: "onContextMenu",
          value: function onContextMenu(event, item) {
            event.preventDefault();
            this.contextMenuPosition.x = event.clientX + 'px';
            this.contextMenuPosition.y = event.clientY + 'px';
            this.contextMenu.menuData = {
              item: item
            };
            this.contextMenu.menu.focusFirstItem('mouse');
            this.contextMenu.openMenu();
          }
        }]);

        return AdvanceTableComponent;
      }();

      AdvanceTableComponent.ɵfac = function AdvanceTableComponent_Factory(t) {
        return new (t || AdvanceTableComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_advance_table_service__WEBPACK_IMPORTED_MODULE_1__["AdvanceTableService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"]));
      };

      AdvanceTableComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AdvanceTableComponent,
        selectors: [["app-advance-table"]],
        viewQuery: function AdvanceTableComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"], true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_5__["MatSort"], true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_menu__WEBPACK_IMPORTED_MODULE_13__["MatMenuTrigger"], true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.filter = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.contextMenu = _t.first);
          }
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
          provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_12__["MAT_DATE_LOCALE"],
          useValue: 'en-GB'
        }])],
        decls: 155,
        vars: 16,
        consts: [[1, "content"], [1, "container-fluid"], [1, "alert", "alert-dark"], [1, "fa-ul"], [1, "font-15"], [1, "fa-li"], [1, "fas", "fa-angle-double-right"], [1, "row"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12"], [1, "card"], [1, "body"], [1, "responsive_table"], [1, "materialTableHeader"], [1, "col-8"], [1, "header-buttons-left", "ml-0"], [1, "dropdown"], [1, "dropdown", "m-l-20"], ["for", "search-input"], [1, "material-icons", "search-icon"], ["placeholder", "Search", "type", "text", "aria-label", "Search box", 1, "browser-default", "search-field"], ["filter", ""], [1, "icon-button-demo", "m-l-10", 3, "hidden"], ["mat-mini-fab", "", "color", "warn", 3, "click"], [1, "col-white"], [1, "col-4"], [1, "header-buttons"], [1, "icon-button-demo"], ["mat-mini-fab", "", "color", "primary", 3, "click"], ["matSort", "", 1, "mat-cell", 3, "dataSource"], ["table", ""], ["matColumnDef", "select"], [3, "ngClass", 4, "matHeaderCellDef"], [3, "ngClass", 4, "matCellDef"], ["matColumnDef", "id"], ["mat-sort-header", "", 4, "matHeaderCellDef"], [4, "matCellDef"], ["matColumnDef", "img"], ["mat-header-cell", "", 3, "ngClass", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "table-img tbl-col-width-per-6", 4, "matCellDef"], ["matColumnDef", "fName"], ["mat-sort-header", "", 3, "ngClass", 4, "matHeaderCellDef"], [3, "ngClass", "contextmenu", 4, "matCellDef"], ["matColumnDef", "lName"], ["matColumnDef", "email"], [3, "contextmenu", 4, "matCellDef"], ["matColumnDef", "gender"], ["matColumnDef", "bDate"], ["matColumnDef", "mobile"], ["matColumnDef", "address"], ["matColumnDef", "country"], ["matColumnDef", "actions"], ["class", "pr-0", 4, "matHeaderCellDef"], ["class", "pr-0", 4, "matCellDef"], [4, "matHeaderRowDef"], ["matRipple", "", 3, "cursor", "click", 4, "matRowDef", "matRowDefColumns"], [2, "visibility", "hidden", "position", "fixed", 3, "matMenuTriggerFor"], ["contextMenu", "matMenu"], ["matMenuContent", ""], ["nestedmenu", "matMenu"], ["mat-menu-item", ""], [1, "no-results"], [3, "length", "pageIndex", "pageSize", "pageSizeOptions"], ["paginator", ""], [3, "ngClass"], [3, "checked", "indeterminate", "ngClass", "change"], [3, "checked", "ngClass", "click", "change"], ["mat-sort-header", ""], ["mat-header-cell", "", 3, "ngClass"], ["mat-cell", "", 1, "table-img", "tbl-col-width-per-6"], [3, "src"], ["mat-sort-header", "", 3, "ngClass"], [3, "ngClass", "contextmenu"], [3, "contextmenu"], [1, "pr-0"], ["mat-icon-button", "", "color", "accent", 1, "btn-tbl-edit", 3, "click"], ["aria-label", "Edit", 1, "col-white"], ["mat-icon-button", "", "color", "accent", 1, "btn-tbl-delete", 3, "click"], ["aria-label", "Delete", 1, "col-white"], ["matRipple", "", 3, "click"], ["mat-menu-item", "", 3, "click"], ["mat-menu-item", "", "disabled", ""], ["mat-menu-item", "", 3, "matMenuTriggerFor"]],
        template: function AdvanceTableComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Advance table component is develop using ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Angular Material Table");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, ". Main features are:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ul", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Searching Records In Table ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Sorting Records In Table ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "i", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Add, Update, Delete In Table Record ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "i", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Row Click Edit Table Record ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "i", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Context Menu, And Nested Context Menu ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "li", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "span", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "i", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Multi select row using checkbox ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "li", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "span", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "i", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Multiple delete rows using checkbox ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "li", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "span", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "i", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Crud Operations Using Context Menu ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "li", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "span", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "i", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Refresh Table Data");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "li", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "span", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "i", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Pagination Supported");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "li", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "span", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "i", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Row Per Page Options");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "ul", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "li", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Table Header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "li", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "label", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "i", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "search");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "input", 19, 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "button", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdvanceTableComponent_Template_button_click_75_listener() {
              return ctx.removeSelectedRows();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "mat-icon", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "delete");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "ul", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "button", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdvanceTableComponent_Template_button_click_82_listener() {
              return ctx.addNew();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "mat-icon", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "add");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "button", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdvanceTableComponent_Template_button_click_87_listener() {
              return ctx.refresh();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "mat-icon", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "refresh");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "mat-table", 28, 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](92, 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](93, AdvanceTableComponent_mat_header_cell_93_Template, 2, 4, "mat-header-cell", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](94, AdvanceTableComponent_mat_cell_94_Template, 2, 3, "mat-cell", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](95, 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](96, AdvanceTableComponent_mat_header_cell_96_Template, 2, 0, "mat-header-cell", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](97, AdvanceTableComponent_mat_cell_97_Template, 2, 1, "mat-cell", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](98, 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](99, AdvanceTableComponent_mat_header_cell_99_Template, 2, 1, "mat-header-cell", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](100, AdvanceTableComponent_mat_cell_100_Template, 2, 1, "mat-cell", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](101, 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](102, AdvanceTableComponent_mat_header_cell_102_Template, 2, 1, "mat-header-cell", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](103, AdvanceTableComponent_mat_cell_103_Template, 2, 2, "mat-cell", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](104, 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](105, AdvanceTableComponent_mat_header_cell_105_Template, 2, 1, "mat-header-cell", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](106, AdvanceTableComponent_mat_cell_106_Template, 2, 2, "mat-cell", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](107, 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](108, AdvanceTableComponent_mat_header_cell_108_Template, 2, 0, "mat-header-cell", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](109, AdvanceTableComponent_mat_cell_109_Template, 2, 1, "mat-cell", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](110, 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](111, AdvanceTableComponent_mat_header_cell_111_Template, 2, 1, "mat-header-cell", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](112, AdvanceTableComponent_mat_cell_112_Template, 2, 2, "mat-cell", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](113, 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](114, AdvanceTableComponent_mat_header_cell_114_Template, 2, 0, "mat-header-cell", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](115, AdvanceTableComponent_mat_cell_115_Template, 3, 4, "mat-cell", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](116, 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](117, AdvanceTableComponent_mat_header_cell_117_Template, 2, 0, "mat-header-cell", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](118, AdvanceTableComponent_mat_cell_118_Template, 2, 1, "mat-cell", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](119, 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](120, AdvanceTableComponent_mat_header_cell_120_Template, 2, 1, "mat-header-cell", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](121, AdvanceTableComponent_mat_cell_121_Template, 2, 2, "mat-cell", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](122, 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](123, AdvanceTableComponent_mat_header_cell_123_Template, 2, 0, "mat-header-cell", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](124, AdvanceTableComponent_mat_cell_124_Template, 2, 1, "mat-cell", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](125, 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](126, AdvanceTableComponent_mat_header_cell_126_Template, 2, 0, "mat-header-cell", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](127, AdvanceTableComponent_mat_cell_127_Template, 7, 0, "mat-cell", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](128, AdvanceTableComponent_mat_header_row_128_Template, 1, 0, "mat-header-row", 53);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](129, AdvanceTableComponent_mat_row_129_Template, 1, 2, "mat-row", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](130, "div", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "mat-menu", null, 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](133, AdvanceTableComponent_ng_template_133_Template, 30, 1, "ng-template", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "mat-menu", null, 58);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "button", 59);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, "mail_outline");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, "Item 1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "button", 59);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](143, "call");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](145, "Item 2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "button", 59);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](148, "chat");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](150, "Item 3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "div", 60);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](152, " No results ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](153, "mat-paginator", 61, 62);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](132);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](74);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx.selection.hasValue());

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSource);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("left", ctx.contextMenuPosition.x)("top", ctx.contextMenuPosition.y);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("display", ctx.dataSource.renderedData.length == 0 ? "" : "none");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("length", ctx.dataSource.filteredData.length)("pageIndex", 0)("pageSize", 10)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](15, _c1));
          }
        },
        directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_14__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["MatIcon"], _angular_material_table__WEBPACK_IMPORTED_MODULE_16__["MatTable"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_5__["MatSort"], _angular_material_table__WEBPACK_IMPORTED_MODULE_16__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_16__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_16__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_16__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_16__["MatRowDef"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__["MatMenuTrigger"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__["_MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__["MatMenuContent"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__["MatMenuItem"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"], _angular_material_table__WEBPACK_IMPORTED_MODULE_16__["MatHeaderCell"], _angular_common__WEBPACK_IMPORTED_MODULE_17__["NgClass"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_18__["MatCheckbox"], _angular_material_table__WEBPACK_IMPORTED_MODULE_16__["MatCell"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_5__["MatSortHeader"], _angular_material_table__WEBPACK_IMPORTED_MODULE_16__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_16__["MatRow"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_17__["DatePipe"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYmxlcy9hZHZhbmNlLXRhYmxlL2FkdmFuY2UtdGFibGUuY29tcG9uZW50LnNhc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdvanceTableComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-advance-table',
            templateUrl: './advance-table.component.html',
            styleUrls: ['./advance-table.component.sass'],
            providers: [{
              provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_12__["MAT_DATE_LOCALE"],
              useValue: 'en-GB'
            }]
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
          }, {
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]
          }, {
            type: _advance_table_service__WEBPACK_IMPORTED_MODULE_1__["AdvanceTableService"]
          }, {
            type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"]
          }];
        }, {
          paginator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"], {
              "static": true
            }]
          }],
          sort: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_5__["MatSort"], {
              "static": true
            }]
          }],
          filter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['filter', {
              "static": true
            }]
          }],
          contextMenu: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_menu__WEBPACK_IMPORTED_MODULE_13__["MatMenuTrigger"]]
          }]
        });
      })();

      var ExampleDataSource = /*#__PURE__*/function (_angular_cdk_collecti) {
        _inherits(ExampleDataSource, _angular_cdk_collecti);

        var _super = _createSuper(ExampleDataSource);

        function ExampleDataSource(_exampleDatabase, _paginator, _sort) {
          var _this7;

          _classCallCheck(this, ExampleDataSource);

          _this7 = _super.call(this);
          _this7._exampleDatabase = _exampleDatabase;
          _this7._paginator = _paginator;
          _this7._sort = _sort;
          _this7._filterChange = new rxjs__WEBPACK_IMPORTED_MODULE_8__["BehaviorSubject"]('');
          _this7.filteredData = [];
          _this7.renderedData = []; // Reset to the first page when the user changes the filter.

          _this7._filterChange.subscribe(function () {
            return _this7._paginator.pageIndex = 0;
          });

          return _this7;
        }

        _createClass(ExampleDataSource, [{
          key: "connect",

          /** Connect function called by the table to retrieve one stream containing the data to render. */
          value: function connect() {
            var _this8 = this;

            // Listen for any changes in the base data, sorting, filtering, or pagination
            var displayDataChanges = [this._exampleDatabase.dataChange, this._sort.sortChange, this._filterChange, this._paginator.page];

            this._exampleDatabase.getAllAdvanceTables();

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["merge"]).apply(void 0, displayDataChanges).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["map"])(function () {
              // Filter data
              _this8.filteredData = _this8._exampleDatabase.data.slice().filter(function (advanceTable) {
                var searchStr = (advanceTable.fName + advanceTable.lName + advanceTable.email + advanceTable.mobile + advanceTable.gender + advanceTable.bDate + advanceTable.address + advanceTable.country).toLowerCase();
                return searchStr.indexOf(_this8.filter.toLowerCase()) !== -1;
              }); // Sort filtered data

              var sortedData = _this8.sortData(_this8.filteredData.slice()); // Grab the page's slice of the filtered sorted data.


              var startIndex = _this8._paginator.pageIndex * _this8._paginator.pageSize;
              _this8.renderedData = sortedData.splice(startIndex, _this8._paginator.pageSize);
              return _this8.renderedData;
            }));
          }
        }, {
          key: "disconnect",
          value: function disconnect() {}
          /** Returns a sorted copy of the database data. */

        }, {
          key: "sortData",
          value: function sortData(data) {
            var _this9 = this;

            if (!this._sort.active || this._sort.direction === '') {
              return data;
            }

            return data.sort(function (a, b) {
              var propertyA = '';
              var propertyB = '';

              switch (_this9._sort.active) {
                case 'id':
                  var _ref = [a.id, b.id];
                  propertyA = _ref[0];
                  propertyB = _ref[1];
                  break;

                case 'fName':
                  var _ref2 = [a.fName, b.fName];
                  propertyA = _ref2[0];
                  propertyB = _ref2[1];
                  break;

                case 'lName':
                  var _ref3 = [a.lName, b.lName];
                  propertyA = _ref3[0];
                  propertyB = _ref3[1];
                  break;

                case 'email':
                  var _ref4 = [a.email, b.email];
                  propertyA = _ref4[0];
                  propertyB = _ref4[1];
                  break;

                case 'address':
                  var _ref5 = [a.address, b.address];
                  propertyA = _ref5[0];
                  propertyB = _ref5[1];
                  break;

                case 'mobile':
                  var _ref6 = [a.mobile, b.mobile];
                  propertyA = _ref6[0];
                  propertyB = _ref6[1];
                  break;
              }

              var valueA = isNaN(+propertyA) ? propertyA : +propertyA;
              var valueB = isNaN(+propertyB) ? propertyB : +propertyB;
              return (valueA < valueB ? -1 : 1) * (_this9._sort.direction === 'asc' ? 1 : -1);
            });
          }
        }, {
          key: "filter",
          get: function get() {
            return this._filterChange.value;
          },
          set: function set(filter) {
            this._filterChange.next(filter);
          }
        }]);

        return ExampleDataSource;
      }(_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_6__["DataSource"]);
      /***/

    },

    /***/
    "XX/H":
    /*!*************************************************************!*\
      !*** ./src/app/tables/advance-table/advance-table.model.ts ***!
      \*************************************************************/

    /*! exports provided: AdvanceTable */

    /***/
    function XXH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AdvanceTable", function () {
        return AdvanceTable;
      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      var AdvanceTable = /*#__PURE__*/function () {
        function AdvanceTable(advanceTable) {
          _classCallCheck(this, AdvanceTable);

          {
            this.id = advanceTable.id || this.getRandomID();
            this.img = advanceTable.avatar || 'assets/images/user/user1.jpg';
            this.fName = advanceTable.fName || '';
            this.lName = advanceTable.lName || '';
            this.email = advanceTable.email || '';
            this.gender = advanceTable.gender || 'male';
            this.bDate = Object(_angular_common__WEBPACK_IMPORTED_MODULE_0__["formatDate"])(new Date(), 'yyyy-MM-dd', 'en') || '';
            this.mobile = advanceTable.mobile || '';
            this.address = advanceTable.address || '';
            this.country = advanceTable.country || '';
          }
        }

        _createClass(AdvanceTable, [{
          key: "getRandomID",
          value: function getRandomID() {
            var S4 = function S4() {
              return ((1 + Math.random()) * 0x10000 | 0).toString(16).substring(1);
            };

            return S4() + S4();
          }
        }]);

        return AdvanceTable;
      }();
      /***/

    },

    /***/
    "p95r":
    /*!*****************************************************************!*\
      !*** ./src/app/tables/ngx-datatable/ngx-datatable.component.ts ***!
      \*****************************************************************/

    /*! exports provided: NgxDatatableComponent */

    /***/
    function p95r(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NgxDatatableComponent", function () {
        return NgxDatatableComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @swimlane/ngx-datatable */
      "lDzL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "dNgK");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/select */
      "d3UM");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");

      var _c0 = ["roleTemplate"];
      var _c1 = ["closeAddModal"];
      var _c2 = ["closeEditModal"];

      function NgxDatatableComponent_ng_template_33_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 77);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 78);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var value_r13 = ctx.value;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", value_r13, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      }

      function NgxDatatableComponent_ng_template_41_Template(rf, ctx) {
        if (rf & 1) {
          var _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 79);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NgxDatatableComponent_ng_template_41_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19);

            var row_r16 = ctx.row;
            var rowIndex_r17 = ctx.rowIndex;

            var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r18.editRow(row_r16, rowIndex_r17);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "mode_edit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 80);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NgxDatatableComponent_ng_template_41_Template_button_click_4_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19);

            var row_r16 = ctx.row;

            var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r20.deleteRow(row_r16);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "delete");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function NgxDatatableComponent_mat_error_70_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " First name is required ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function NgxDatatableComponent_mat_error_86_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Phone name is required ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function NgxDatatableComponent_mat_option_92_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 81);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var gender_r21 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", gender_r21.value);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", gender_r21.value, " ");
        }
      }

      function NgxDatatableComponent_mat_error_101_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please enter a valid email address ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function NgxDatatableComponent_mat_error_140_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " First name is required ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function NgxDatatableComponent_mat_error_156_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Phone name is required ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var NgxDatatableComponent = /*#__PURE__*/function () {
        function NgxDatatableComponent(fb, _snackBar) {
          _classCallCheck(this, NgxDatatableComponent);

          this.fb = fb;
          this._snackBar = _snackBar;
          this.rows = [];
          this.newUserImg = 'assets/images/user/user1.jpg';
          this.data = [];
          this.filteredData = [];
          this.columns = [{
            name: 'First Name'
          }, {
            name: 'Last Name'
          }, {
            name: 'Gender'
          }, {
            name: 'Phone'
          }, {
            name: 'Email'
          }, {
            name: 'Address'
          }];
          this.genders = [{
            id: '1',
            value: 'Male'
          }, {
            id: '2',
            value: 'Female'
          }];
          this.foods = [{
            value: 'steak-0',
            viewValue: 'Steak'
          }, {
            value: 'pizza-1',
            viewValue: 'Pizza'
          }, {
            value: 'tacos-2',
            viewValue: 'Tacos'
          }]; // Table 2

          this.tb2columns = [{
            name: 'First Name'
          }, {
            name: 'Last Name'
          }, {
            name: 'Address'
          }];
          this.tb2data = [];
          this.tb2filteredData = [];
          this.editForm = this.fb.group({
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            img: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            firstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            lastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            address: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]()
          });
        }

        _createClass(NgxDatatableComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this10 = this;

            this.fetch(function (data) {
              _this10.data = data;
              _this10.filteredData = data;
            }); // Table 2

            this.tb2fetch(function (data) {
              _this10.tb2data = data;
              _this10.tb2filteredData = data;
            });
            this.register = this.fb.group({
              id: [''],
              img: [''],
              firstName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[a-zA-Z]+')]],
              lastName: [''],
              phone: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
              gender: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
              email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(5)]],
              address: ['']
            });
          }
        }, {
          key: "fetch",
          value: function fetch(cb) {
            var req = new XMLHttpRequest();
            req.open('GET', 'assets/data/adv-tbl-data.json');

            req.onload = function () {
              var data = JSON.parse(req.response);
              cb(data);
            };

            req.send();
          } // Table 2

        }, {
          key: "tb2fetch",
          value: function tb2fetch(cb) {
            var req = new XMLHttpRequest();
            req.open('GET', 'assets/data/ngx-data.json');

            req.onload = function () {
              var data = JSON.parse(req.response);
              cb(data);
            };

            req.send();
          } // Table 2

        }, {
          key: "tb2filterDatatable",
          value: function tb2filterDatatable(event) {
            // get the value of the key pressed and make it lowercase
            var val = event.target.value.toLowerCase(); // get the amount of columns in the table

            var colsAmt = this.tb2columns.length; // get the key names of each column in the dataset

            var keys = Object.keys(this.tb2filteredData[0]); // assign filtered matches to the active datatable

            this.tb2data = this.tb2filteredData.filter(function (item) {
              // iterate through each row's column data
              for (var i = 0; i < colsAmt; i++) {
                // check for a match
                if (item[keys[i]].toString().toLowerCase().indexOf(val) !== -1 || !val) {
                  // found match, return true to add to result set
                  return true;
                }
              }
            }); // whenever the filter changes, always go back to the first page

            this.table2.offset = 0;
          }
        }, {
          key: "editRow",
          value: function editRow(row, rowIndex) {
            this.editForm.setValue({
              id: row.id,
              firstName: row.firstName,
              lastName: row.lastName,
              phone: row.phone,
              email: row.email,
              address: row.address,
              img: row.img
            });
            this.selectedRowData = row;
          }
        }, {
          key: "addRow",
          value: function addRow() {
            this.register.patchValue({
              id: this.getId(10, 100),
              img: this.newUserImg
            });
          }
        }, {
          key: "deleteRow",
          value: function deleteRow(row) {
            this.data = this.arrayRemove(this.data, row.id);
            this.showNotification('bg-red', 'Delete Record Successfully', 'bottom', 'right');
          }
        }, {
          key: "arrayRemove",
          value: function arrayRemove(array, id) {
            return array.filter(function (element) {
              return element.id != id;
            });
          }
        }, {
          key: "onEditSave",
          value: function onEditSave(form) {
            var _this11 = this;

            this.data = this.data.filter(function (value, key) {
              if (value.id == form.value.id) {
                value.firstName = form.value.firstName;
                value.lastName = form.value.lastName;
                value.phone = form.value.phone;
                value.gender = form.value.gender;
                value.email = form.value.email;
                value.address = form.value.address;
              }

              _this11.closeEditModal.nativeElement.click();

              return true;
            });
            this.showNotification('bg-black', 'Edit Record Successfully', 'bottom', 'right');
          }
        }, {
          key: "onAddRowSave",
          value: function onAddRowSave(form) {
            this.data.push(form.value);
            this.data = _toConsumableArray(this.data); // console.log(this.data);

            form.reset();
            this.closeAddModal.nativeElement.click();
            this.showNotification('bg-green', 'Add Record Successfully', 'bottom', 'right');
          }
        }, {
          key: "filterDatatable",
          value: function filterDatatable(event) {
            // get the value of the key pressed and make it lowercase
            var val = event.target.value.toLowerCase(); // get the amount of columns in the table

            var colsAmt = this.columns.length; // get the key names of each column in the dataset

            var keys = Object.keys(this.filteredData[0]); // assign filtered matches to the active datatable

            this.data = this.filteredData.filter(function (item) {
              // iterate through each row's column data
              for (var i = 0; i < colsAmt; i++) {
                // check for a match
                if (item[keys[i]].toString().toLowerCase().indexOf(val) !== -1 || !val) {
                  // found match, return true to add to result set
                  return true;
                }
              }
            }); // whenever the filter changes, always go back to the first page

            this.table.offset = 0;
          }
        }, {
          key: "getId",
          value: function getId(min, max) {
            // min and max included
            return Math.floor(Math.random() * (max - min + 1) + min);
          }
        }, {
          key: "openSnackBar",
          value: function openSnackBar(message) {
            this._snackBar.open(message, '', {
              duration: 2000,
              verticalPosition: 'bottom',
              horizontalPosition: 'right',
              panelClass: ['bg-red']
            });
          }
        }, {
          key: "showNotification",
          value: function showNotification(colorName, text, placementFrom, placementAlign) {
            this._snackBar.open(text, '', {
              duration: 2000,
              verticalPosition: placementFrom,
              horizontalPosition: placementAlign,
              panelClass: colorName
            });
          }
        }]);

        return NgxDatatableComponent;
      }();

      NgxDatatableComponent.ɵfac = function NgxDatatableComponent_Factory(t) {
        return new (t || NgxDatatableComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]));
      };

      NgxDatatableComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: NgxDatatableComponent,
        selectors: [["app-ngx-datatable"]],
        viewQuery: function NgxDatatableComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_1__["DatatableComponent"], true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c2, true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_1__["DatatableComponent"], true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.roleTemplate = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.table = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.closeAddModal = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.closeEditModal = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.table2 = _t.first);
          }
        },
        decls: 201,
        vars: 37,
        consts: [[1, "content"], [1, "container-fluid"], [1, "alert", "alert-info"], [1, "row", "clearfix"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12"], [1, "card"], [1, "body"], [1, "row"], [1, "col-sm-12"], [1, "ngxTableHeader"], [1, "header-buttons-left", "ml-0"], [1, "dropdown"], [1, "dropdown", "m-l-20"], ["for", "search-input"], [1, "material-icons", "search-icon"], ["placeholder", "Search", "type", "text", "aria-label", "Search box", 1, "browser-default", "search-field", 3, "keyup"], [1, "header-buttons", "m-r-20"], [1, "icon-button-demo"], ["mat-mini-fab", "", "color", "primary", "data-toggle", "modal", "data-target", "#addModal", 3, "click"], [1, "col-white"], [1, "material", 3, "rows", "columns", "sortType", "columnMode", "headerHeight", "footerHeight", "rowHeight", "limit"], ["table", ""], ["name", "Image", "sortable", "false", "prop", "img", 3, "width"], ["ngx-datatable-cell-template", ""], ["name", "First Name", 3, "width"], ["name", "Last Name", 3, "width"], ["name", "Gender", 3, "width"], ["name", "Phone", 3, "width"], ["name", "Email", 3, "width"], ["name", "Address", 3, "width"], ["name", "Actions", "sortable", "false", 3, "width"], ["id", "addModal", "tabindex", "-1", "role", "dialog", "aria-labelledby", "exampleModalLabel", "aria-hidden", "true", 1, "modal", "fade"], ["role", "document", 1, "modal-dialog"], [1, "modal-content"], [1, "modal-header"], [1, "editRowModal"], [1, "modal-header", "clearfix"], ["alt", "avatar", 3, "src"], [1, "modal-about"], [1, "font-weight-bold", "p-t-10", "font-17"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "btn", "p-t-10", "modal-close-button"], ["closeAddModal", ""], [1, "material-icons"], [1, "modal-body"], [1, "register-form", "m-4", 3, "formGroup", "ngSubmit"], [1, "input-field", "col", "s12", "d-none"], ["formControlName", "id", "type", "hidden", 1, "form-control"], ["formControlName", "img", "type", "hidden", 1, "form-control"], [1, "col-xl-6", "col-lg-6", "col-md-12", "col-sm-12", "mb-2"], ["appearance", "outline", 1, "example-full-width"], ["matInput", "", "formControlName", "firstName", "required", ""], ["matSuffix", ""], [4, "ngIf"], ["matInput", "", "formControlName", "lastName"], ["matInput", "", "formControlName", "phone", "required", ""], ["formControlName", "gender", "required", ""], [3, "value", 4, "ngFor", "ngForOf"], [1, "col-xl-12", "col-lg-12", "col-md-12", "col-sm-12", "mb-2"], ["matInput", "", "formControlName", "email", "required", ""], ["matInput", "", "formControlName", "address"], ["mat-raised-button", "", "color", "primary", 1, "mr-3", 3, "disabled"], ["type", "button", "mat-button", "", "data-dismiss", "modal"], ["id", "editModal", "tabindex", "-1", "role", "dialog", "aria-labelledby", "exampleModalLabel", "aria-hidden", "true", 1, "modal", "fade"], ["closeEditModal", ""], [3, "formGroup", "ngSubmit"], [1, "modal-footer"], [1, "button-demo"], ["type", "submit", 1, "btn", "btn-outline-success", "btn-border-radius"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-outline-warning", "btn-border-radius"], [1, "header"], [1, "header-dropdown", "m-r--5"], ["href", "#", "onClick", "return false;", "data-toggle", "dropdown", "role", "button", "aria-haspopup", "true", "aria-expanded", "false"], [1, "dropdown-menu", "pull-right"], ["href", "#", "onClick", "return false;"], ["appearance", "fill"], ["matInput", "", 3, "keyup"], ["table2", ""], [1, "table-img", "padding-0"], ["width", "40", 3, "src"], ["data-toggle", "modal", "data-target", "#editModal", 1, "btn", "tblActnBtn", "h-auto", 3, "click"], [1, "btn", "tblActnBtn", "h-auto", 3, "click"], [3, "value"]],
        template: function NgxDatatableComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Advance table component is develop using ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "ngx-datatable");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " angular plugin. Main features of this table is search record in table, add new record, edit record, delete record, sorting data by ascending and descending, pagination, and many more. You have just replace table static json data with your dynamic json data comes from your api. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "ul", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Advance Table");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "i", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "search");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "input", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function NgxDatatableComponent_Template_input_keyup_23_listener($event) {
              return ctx.filterDatatable($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "ul", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NgxDatatableComponent_Template_button_click_27_listener() {
              return ctx.addRow();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-icon", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "add");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "ngx-datatable", 20, 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "ngx-datatable-column", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, NgxDatatableComponent_ng_template_33_Template, 2, 1, "ng-template", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "ngx-datatable-column", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "ngx-datatable-column", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "ngx-datatable-column", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "ngx-datatable-column", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "ngx-datatable-column", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "ngx-datatable-column", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "ngx-datatable-column", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, NgxDatatableComponent_ng_template_41_Template, 7, 0, "ng-template", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "img", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, " New User");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "button", 40, 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "i", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "clear");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "form", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function NgxDatatableComponent_Template_form_ngSubmit_57_listener() {
              return ctx.onAddRowSave(ctx.register);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "input", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "input", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "mat-form-field", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "First name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "input", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "mat-icon", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "face");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](70, NgxDatatableComponent_mat_error_70_Template, 2, 0, "mat-error", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "mat-form-field", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Last name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "input", 53);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "mat-icon", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "face");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "mat-form-field", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Phone");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "input", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "mat-icon", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "phone");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](86, NgxDatatableComponent_mat_error_86_Template, 2, 0, "mat-error", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "mat-form-field", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "Gender");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "mat-select", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](92, NgxDatatableComponent_mat_option_92_Template, 2, 2, "mat-option", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "mat-form-field", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "Email");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](98, "input", 58);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "mat-icon", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "email");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](101, NgxDatatableComponent_mat_error_101_Template, 2, 0, "mat-error", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "mat-form-field", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "Address");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](107, "textarea", 59);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "button", 60);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "Submit");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "button", 61);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "Cancel");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "div", 62);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "div", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "div", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "div", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "div", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "div", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](120, "img", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "div", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "div", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "button", 40, 63);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "i", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, "clear");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "div", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "form", 64);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function NgxDatatableComponent_Template_form_ngSubmit_129_listener() {
              return ctx.onEditSave(ctx.editForm);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "div", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](131, "input", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "div", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "mat-form-field", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, "First name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](137, "input", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "mat-icon", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](139, "face");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](140, NgxDatatableComponent_mat_error_140_Template, 2, 0, "mat-error", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "div", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "mat-form-field", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, "Last name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](145, "input", 53);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "mat-icon", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](147, "face");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "div", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "mat-form-field", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](152, "Phone");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](153, "input", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "mat-icon", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](155, "phone");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](156, NgxDatatableComponent_mat_error_156_Template, 2, 0, "mat-error", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "div", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "mat-form-field", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](161, "Address");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](162, "textarea", 59);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "div", 65);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "div", 66);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "button", 67);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](166, "Save");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "button", 68);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](168, "Cancel");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "div", 69);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](175, "ngx");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](176, " Simple Example");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "ul", 70);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "li", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "a", 71);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "i", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](181, "more_vert");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "ul", 72);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "a", 73);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](185, "Action");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "a", 73);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](188, "Another action");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "a", 73);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](191, "Something else here");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "mat-form-field", 74);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](197, "Search Here...");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "input", 75);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function NgxDatatableComponent_Template_input_keyup_198_listener($event) {
              return ctx.tb2filterDatatable($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](199, "ngx-datatable", 20, 76);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rows", ctx.data)("columns", ctx.columns)("sortType", "multi")("columnMode", "force")("headerHeight", 50)("footerHeight", 50)("rowHeight", "60")("limit", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("width", 100);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("width", 130);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("width", 130);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("width", 120);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("width", 200);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("width", 200);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("width", 200);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("width", 120);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.newUserImg, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.register);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.register.get("firstName").hasError("required"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.register.get("phone").hasError("required"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.genders);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.register.get("email").hasError("required") || ctx.register.get("email").touched);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.register.valid);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.selectedRowData == null ? null : ctx.selectedRowData.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ctx.selectedRowData == null ? null : ctx.selectedRowData.firstName, " ", ctx.selectedRowData == null ? null : ctx.selectedRowData.lastName, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.editForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.editForm.get("firstName").hasError("required"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.register.get("phone").hasError("required"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rows", ctx.tb2data)("columns", ctx.tb2columns)("sortType", "multi")("columnMode", "force")("headerHeight", 50)("footerHeight", 50)("rowHeight", "auto")("limit", 10);
          }
        },
        directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIcon"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_1__["DatatableComponent"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_1__["DataTableColumnDirective"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_1__["DataTableColumnCellDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatSuffix"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_material_select__WEBPACK_IMPORTED_MODULE_9__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatError"], _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatOption"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYmxlcy9uZ3gtZGF0YXRhYmxlL25neC1kYXRhdGFibGUuY29tcG9uZW50LnNhc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgxDatatableComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-ngx-datatable',
            templateUrl: './ngx-datatable.component.html',
            styleUrls: ['./ngx-datatable.component.sass']
          }]
        }], function () {
          return [{
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
          }, {
            type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]
          }];
        }, {
          roleTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['roleTemplate', {
              "static": true
            }]
          }],
          table: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_1__["DatatableComponent"], {
              "static": false
            }]
          }],
          closeAddModal: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['closeAddModal', {
              "static": false
            }]
          }],
          closeEditModal: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['closeEditModal', {
              "static": false
            }]
          }],
          table2: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_1__["DatatableComponent"], {
              "static": false
            }]
          }]
        });
      })();
      /***/

    },

    /***/
    "tq9x":
    /*!***********************************************************************************!*\
      !*** ./src/app/tables/advance-table/dialogs/form-dialog/form-dialog.component.ts ***!
      \***********************************************************************************/

    /*! exports provided: FormDialogComponent */

    /***/
    function tq9x(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FormDialogComponent", function () {
        return FormDialogComponent;
      });
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _advance_table_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../advance-table.service */
      "x7eq");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _advance_table_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../advance-table.model */
      "XX/H");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_material_radio__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/radio */
      "QibW");
      /* harmony import */


      var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/datepicker */
      "iadO");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/select */
      "d3UM");

      function FormDialogComponent_mat_error_21_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " First Name is required ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function FormDialogComponent_mat_error_29_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Last Name is required ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function FormDialogComponent_mat_error_40_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Select gender ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function FormDialogComponent_mat_error_49_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Please enter a valid email address ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function FormDialogComponent_mat_error_58_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Please select date ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function FormDialogComponent_mat_error_67_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Mobile is required ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function FormDialogComponent_mat_error_87_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Country Name is required ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      var FormDialogComponent = /*#__PURE__*/function () {
        function FormDialogComponent(dialogRef, data, advanceTableService, fb) {
          _classCallCheck(this, FormDialogComponent);

          this.dialogRef = dialogRef;
          this.data = data;
          this.advanceTableService = advanceTableService;
          this.fb = fb;
          this.formControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required // Validators.email,
          ]); // Set the defaults

          this.action = data.action;

          if (this.action === 'edit') {
            this.dialogTitle = data.advanceTable.fName + ' ' + data.advanceTable.lName;
            this.advanceTable = data.advanceTable;
          } else {
            this.dialogTitle = 'New Record';
            this.advanceTable = new _advance_table_model__WEBPACK_IMPORTED_MODULE_4__["AdvanceTable"]({});
          }

          this.advanceTableForm = this.createContactForm();
        }

        _createClass(FormDialogComponent, [{
          key: "getErrorMessage",
          value: function getErrorMessage() {
            return this.formControl.hasError('required') ? 'Required field' : this.formControl.hasError('email') ? 'Not a valid email' : '';
          }
        }, {
          key: "createContactForm",
          value: function createContactForm() {
            return this.fb.group({
              id: [this.advanceTable.id],
              img: [this.advanceTable.img],
              fName: [this.advanceTable.fName, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
              lName: [this.advanceTable.lName, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
              email: [this.advanceTable.email, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(5)]],
              gender: [this.advanceTable.gender],
              bDate: [Object(_angular_common__WEBPACK_IMPORTED_MODULE_6__["formatDate"])(this.advanceTable.bDate, 'yyyy-MM-dd', 'en'), [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
              address: [this.advanceTable.address],
              mobile: [this.advanceTable.mobile, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
              country: [this.advanceTable.country]
            });
          }
        }, {
          key: "submit",
          value: function submit() {// emppty stuff
          }
        }, {
          key: "onNoClick",
          value: function onNoClick() {
            this.dialogRef.close();
          }
        }, {
          key: "confirmAdd",
          value: function confirmAdd() {
            this.advanceTableService.addAdvanceTable(this.advanceTableForm.getRawValue());
          }
        }]);

        return FormDialogComponent;
      }();

      FormDialogComponent.ɵfac = function FormDialogComponent_Factory(t) {
        return new (t || FormDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_advance_table_service__WEBPACK_IMPORTED_MODULE_2__["AdvanceTableService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]));
      };

      FormDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: FormDialogComponent,
        selectors: [["app-form-dialog"]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{
          provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MAT_DATE_LOCALE"],
          useValue: 'en-GB'
        }])],
        decls: 101,
        vars: 22,
        consts: [[1, "addContainer"], [1, "modalHeader"], [1, "editRowModal"], [1, "modalHeader", "clearfix"], ["alt", "avatar", 3, "src"], [1, "modal-about"], [1, "font-weight-bold", "p-t-5", "p-l-10", "font-17"], ["mat-icon-button", "", "aria-label", "Close dialog", 3, "click"], ["mat-dialog-content", ""], [1, "register-form", "m-4", 3, "formGroup", "ngSubmit"], [1, "row"], [1, "col-xl-6", "col-lg-6", "col-md-12", "col-sm-12", "mb-2"], ["appearance", "outline", 1, "example-full-width"], ["matInput", "", "formControlName", "fName"], ["matSuffix", ""], [4, "ngIf"], ["matInput", "", "formControlName", "lName"], [1, "col-xl-12", "col-lg-12", "col-md-12", "col-sm-12", "mb-2"], [1, "m-b-20"], [1, "mr-3"], ["aria-label", "Select gender", "formControlName", "gender", "required", ""], ["value", "male"], ["value", "female"], ["matInput", "", "formControlName", "email", "required", ""], ["matInput", "", "formControlName", "bDate", 3, "matDatepicker"], ["matSuffix", "", 3, "for"], ["picker", ""], ["matInput", "", "formControlName", "mobile", "type", "number"], ["formControlName", "country", "required", ""], [3, "value"], ["matInput", "", "formControlName", "address"], [1, "example-button-row"], ["mat-raised-button", "", "color", "primary", 3, "type", "disabled", "mat-dialog-close", "click"], ["mat-raised-button", "", "color", "warn", "tabindex", "-1", 3, "click"]],
        template: function FormDialogComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "img", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "button", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FormDialogComponent_Template_button_click_8_listener() {
              return ctx.dialogRef.close();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "close");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "form", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function FormDialogComponent_Template_form_ngSubmit_12_listener() {
              return ctx.submit;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "mat-form-field", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "First Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "input", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "mat-icon", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "face");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, FormDialogComponent_mat_error_21_Template, 2, 0, "mat-error", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "mat-form-field", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Last Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "input", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "mat-icon", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "face");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](29, FormDialogComponent_mat_error_29_Template, 2, 0, "mat-error", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "mat-label", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "Gender:");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "mat-radio-group", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "mat-radio-button", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "Male");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "mat-radio-button", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "Female");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](40, FormDialogComponent_mat_error_40_Template, 2, 0, "mat-error", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "mat-form-field", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, "Email");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](46, "input", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "mat-icon", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "email");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](49, FormDialogComponent_mat_error_49_Template, 2, 0, "mat-error", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "mat-form-field", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, "Birth date");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](54, "input", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](55, "mat-datepicker-toggle", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](56, "mat-datepicker", null, 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](58, FormDialogComponent_mat_error_58_Template, 2, 0, "mat-error", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "mat-form-field", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63, "Mobile");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](64, "input", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "mat-icon", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](66, "phone");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](67, FormDialogComponent_mat_error_67_Template, 2, 0, "mat-error", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "mat-form-field", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](71, "Country");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "mat-select", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "mat-option", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](74, " India ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "mat-option", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](76, " USA ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "mat-option", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](78, " France ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "mat-option", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](80, " Germany ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "mat-option", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](82, " Spain ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "mat-option", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](84, " Turkey ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "mat-option", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](86, " Other ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](87, FormDialogComponent_mat_error_87_Template, 2, 0, "mat-error", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](90, "mat-form-field", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](91, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](92, "Address");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](93, "textarea", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](94, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](95, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](96, "div", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](97, "button", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FormDialogComponent_Template_button_click_97_listener() {
              return ctx.confirmAdd();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](98, "Save");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](99, "button", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FormDialogComponent_Template_button_click_99_listener() {
              return ctx.onNoClick();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](100, "Cancel");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](57);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx.advanceTable.img, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.dialogTitle, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.advanceTableForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.advanceTableForm.get("fName").hasError("required"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.advanceTableForm.get("lName").hasError("required"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.advanceTableForm.get("gender").hasError("required"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.advanceTableForm.get("email").hasError("required") || ctx.advanceTableForm.get("email").touched);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matDatepicker", _r4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("for", _r4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.advanceTableForm.get("bDate").hasError("required"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.advanceTableForm.get("mobile").hasError("required"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", "india");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", "usa");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", "france");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", "germany");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", "spain");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", "turkey");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", "other");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.advanceTableForm.get("country").hasError("required"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("type", ctx.submit)("disabled", !ctx.advanceTableForm.valid)("mat-dialog-close", 1);
          }
        },
        directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIcon"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatSuffix"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_11__["MatRadioGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RequiredValidator"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_11__["MatRadioButton"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__["MatDatepickerInput"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__["MatDatepickerToggle"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__["MatDatepicker"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NumberValueAccessor"], _angular_material_select__WEBPACK_IMPORTED_MODULE_13__["MatSelect"], _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatOption"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogClose"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatError"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYmxlcy9hZHZhbmNlLXRhYmxlL2RpYWxvZ3MvZm9ybS1kaWFsb2cvZm9ybS1kaWFsb2cuY29tcG9uZW50LnNhc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](FormDialogComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'app-form-dialog',
            templateUrl: './form-dialog.component.html',
            styleUrls: ['./form-dialog.component.sass'],
            providers: [{
              provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MAT_DATE_LOCALE"],
              useValue: 'en-GB'
            }]
          }]
        }], function () {
          return [{
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogRef"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
              args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MAT_DIALOG_DATA"]]
            }]
          }, {
            type: _advance_table_service__WEBPACK_IMPORTED_MODULE_2__["AdvanceTableService"]
          }, {
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "us77":
    /*!*************************************************************!*\
      !*** ./src/app/tables/basic-table/basic-table.component.ts ***!
      \*************************************************************/

    /*! exports provided: BasicTableComponent */

    /***/
    function us77(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BasicTableComponent", function () {
        return BasicTableComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var BasicTableComponent = /*#__PURE__*/function () {
        function BasicTableComponent() {
          _classCallCheck(this, BasicTableComponent);
        }

        _createClass(BasicTableComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return BasicTableComponent;
      }();

      BasicTableComponent.ɵfac = function BasicTableComponent_Factory(t) {
        return new (t || BasicTableComponent)();
      };

      BasicTableComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: BasicTableComponent,
        selectors: [["app-basic-table"]],
        decls: 488,
        vars: 0,
        consts: [[1, "content"], [1, "container-fluid"], [1, "row", "clearfix"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12"], [1, "card"], [1, "header"], [1, "header-dropdown", "m-r--5"], [1, "dropdown"], ["href", "#", "onClick", "return false;", "data-toggle", "dropdown", "role", "button", "aria-haspopup", "true", "aria-expanded", "false"], [1, "material-icons"], [1, "dropdown-menu", "pull-right"], ["href", "#", "onClick", "return false;"], [1, "body", "table-responsive"], [1, "table"], ["scope", "row"], [1, "table", "table-striped"], [1, "table", "table-bordered"], [1, "table", "table-hover"], [1, "table", "table-condensed"], [1, "bg-light-blue"], [1, "l-bg-green"], [1, "l-bg-orange"], [1, "l-bg-cyan"], [1, "l-bg-purple"]],
        template: function BasicTableComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Basic");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Table");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ul", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "i", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "more_vert");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "ul", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Action");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Another action");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Something else here");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "table", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "#");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "FIRST NAME");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "LAST NAME");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "USERNAME");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "th", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Mark");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Otto");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "@mdo");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "th", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Jacob");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Thornton");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "@fat");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "th", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Larry");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "the Bird");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "@twitter");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "th", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Larry");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Jellybean");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "@lajelly");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "th", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "5");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Larry");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "Kikat");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "@lakitkat");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "Striped");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, " Rows");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "ul", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "li", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "a", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "i", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "more_vert");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "ul", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "a", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "Action");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "a", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "Another action");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "a", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "Something else here");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "table", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "#");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "FIRST NAME");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "LAST NAME");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, "USERNAME");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "th", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, "Mark");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, "Otto");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, "@mdo");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "th", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, "2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, "Jacob");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, "Thornton");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, "@fat");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "th", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](139, "3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](141, "Larry");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](143, "the Bird");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](145, "@twitter");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "th", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](148, "4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](150, "Larry");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](152, "Jellybean");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](154, "@lajelly");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "th", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](157, "5");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](159, "Larry");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](161, "Kikat");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](163, "@lakitkat");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](170, "Bordered");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](171, " Table");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "ul", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "li", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "a", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "i", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](176, "more_vert");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "ul", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "a", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](180, "Action");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "a", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](183, "Another action");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "a", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](186, "Something else here");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "table", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](192, "#");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](194, "FIRST NAME");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](196, "LAST NAME");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](198, "USERNAME");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](200, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "th", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](202, "1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](204, "Mark");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](206, "Otto");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](207, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](208, "@mdo");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](209, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](210, "th", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](211, "2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](212, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](213, "Jacob");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](214, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](215, "Thornton");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](216, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](217, "@fat");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](218, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](219, "th", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](220, "3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](221, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](222, "Larry");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](223, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](224, "the Bird");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](225, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](226, "@twitter");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](227, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](228, "th", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](229, "4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](230, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](231, "Larry");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](232, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](233, "Jellybean");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](234, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](235, "@lajelly");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](236, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](237, "th", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](238, "5");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](239, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](240, "Larry");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](241, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](242, "Kikat");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](243, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](244, "@lakitkat");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](245, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](246, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](247, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](248, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](249, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](250, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](251, "Hover");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](252, " Rows");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](253, "ul", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](254, "li", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](255, "a", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](256, "i", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](257, "more_vert");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](258, "ul", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](259, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](260, "a", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](261, "Action");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](262, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](263, "a", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](264, "Another action");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](265, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](266, "a", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](267, "Something else here");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](268, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](269, "table", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](270, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](271, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](272, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](273, "#");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](274, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](275, "FIRST NAME");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](276, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](277, "LAST NAME");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](278, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](279, "USERNAME");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](280, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](281, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](282, "th", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](283, "1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](284, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](285, "Mark");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](286, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](287, "Otto");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](288, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](289, "@mdo");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](290, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](291, "th", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](292, "2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](293, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](294, "Jacob");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](295, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](296, "Thornton");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](297, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](298, "@fat");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](299, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](300, "th", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](301, "3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](302, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](303, "Larry");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](304, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](305, "the Bird");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](306, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](307, "@twitter");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](308, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](309, "th", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](310, "4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](311, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](312, "Larry");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](313, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](314, "Jellybean");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](315, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](316, "@lajelly");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](317, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](318, "th", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](319, "5");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](320, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](321, "Larry");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](322, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](323, "Kikat");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](324, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](325, "@lakitkat");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](326, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](327, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](328, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](329, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](330, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](331, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](332, "Condensed");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](333, " Table");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](334, "ul", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](335, "li", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](336, "a", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](337, "i", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](338, "more_vert");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](339, "ul", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](340, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](341, "a", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](342, "Action");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](343, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](344, "a", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](345, "Another action");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](346, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](347, "a", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](348, "Something else here");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](349, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](350, "table", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](351, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](352, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](353, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](354, "#");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](355, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](356, "FIRST NAME");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](357, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](358, "LAST NAME");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](359, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](360, "USERNAME");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](361, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](362, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](363, "th", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](364, "1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](365, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](366, "Mark");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](367, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](368, "Otto");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](369, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](370, "@mdo");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](371, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](372, "th", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](373, "2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](374, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](375, "Jacob");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](376, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](377, "Thornton");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](378, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](379, "@fat");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](380, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](381, "th", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](382, "3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](383, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](384, "Larry");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](385, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](386, "the Bird");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](387, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](388, "@twitter");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](389, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](390, "th", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](391, "4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](392, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](393, "Larry");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](394, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](395, "Jellybean");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](396, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](397, "@lajelly");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](398, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](399, "th", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](400, "5");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](401, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](402, "Larry");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](403, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](404, "Kikat");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](405, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](406, "@lakitkat");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](407, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](408, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](409, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](410, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](411, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](412, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](413, "Colorful");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](414, " Rows");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](415, "ul", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](416, "li", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](417, "a", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](418, "i", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](419, "more_vert");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](420, "ul", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](421, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](422, "a", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](423, "Action");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](424, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](425, "a", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](426, "Another action");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](427, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](428, "a", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](429, "Something else here");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](430, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](431, "table", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](432, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](433, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](434, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](435, "#");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](436, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](437, "FIRST NAME");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](438, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](439, "LAST NAME");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](440, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](441, "USERNAME");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](442, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](443, "tr", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](444, "th", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](445, "1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](446, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](447, "Mark");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](448, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](449, "Otto");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](450, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](451, "@mdo");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](452, "tr", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](453, "th", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](454, "2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](455, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](456, "Jacob");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](457, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](458, "Thornton");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](459, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](460, "@fat");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](461, "tr", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](462, "th", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](463, "3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](464, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](465, "Larry");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](466, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](467, "the Bird");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](468, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](469, "@twitter");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](470, "tr", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](471, "th", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](472, "4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](473, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](474, "Larry");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](475, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](476, "Jellybean");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](477, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](478, "@lajelly");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](479, "tr", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](480, "th", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](481, "5");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](482, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](483, "Larry");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](484, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](485, "Kikat");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](486, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](487, "@lakitkat");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYmxlcy9iYXNpYy10YWJsZS9iYXNpYy10YWJsZS5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BasicTableComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-basic-table',
            templateUrl: './basic-table.component.html',
            styleUrls: ['./basic-table.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "vEQH":
    /*!*******************************************************************!*\
      !*** ./src/app/tables/material-table/material-table.component.ts ***!
      \*******************************************************************/

    /*! exports provided: MaterialTableComponent */

    /***/
    function vEQH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MaterialTableComponent", function () {
        return MaterialTableComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/paginator */
      "M9IT");
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/table */
      "+0xr");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");

      function MaterialTableComponent_th_28_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " No. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function MaterialTableComponent_td_29_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r48 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r48.no, " ");
        }
      }

      function MaterialTableComponent_th_31_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Name ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function MaterialTableComponent_td_32_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r49 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r49.name, " ");
        }
      }

      function MaterialTableComponent_th_34_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Gender ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function MaterialTableComponent_td_35_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r50 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r50.gender, " ");
        }
      }

      function MaterialTableComponent_th_37_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Email ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function MaterialTableComponent_td_38_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r51 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r51.email, " ");
        }
      }

      function MaterialTableComponent_th_40_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Address ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function MaterialTableComponent_td_41_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r52 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r52.address, " ");
        }
      }

      function MaterialTableComponent_th_43_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Mobile ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function MaterialTableComponent_td_44_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r53 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r53.mobile, " ");
        }
      }

      function MaterialTableComponent_th_46_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Salary ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function MaterialTableComponent_td_47_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r54 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r54.salary, " ");
        }
      }

      function MaterialTableComponent_tr_48_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 30);
        }
      }

      function MaterialTableComponent_tr_49_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 31);
        }
      }

      function MaterialTableComponent_th_76_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " No. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function MaterialTableComponent_td_77_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r56 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r56.no, " ");
        }
      }

      function MaterialTableComponent_th_79_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Name ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function MaterialTableComponent_td_80_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r57 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r57.name, " ");
        }
      }

      function MaterialTableComponent_th_82_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Gender ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function MaterialTableComponent_td_83_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r58 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r58.gender, " ");
        }
      }

      function MaterialTableComponent_th_85_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Email ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function MaterialTableComponent_td_86_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r59 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r59.email, " ");
        }
      }

      function MaterialTableComponent_th_88_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Address ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function MaterialTableComponent_td_89_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r60 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r60.address, " ");
        }
      }

      function MaterialTableComponent_th_91_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Mobile ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function MaterialTableComponent_td_92_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r61 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r61.mobile, " ");
        }
      }

      function MaterialTableComponent_th_94_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Salary ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function MaterialTableComponent_td_95_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r62 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r62.salary, " ");
        }
      }

      function MaterialTableComponent_tr_96_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 30);
        }
      }

      function MaterialTableComponent_tr_97_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 31);
        }
      }

      function MaterialTableComponent_th_129_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " No. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function MaterialTableComponent_td_130_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r64 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r64.no, " ");
        }
      }

      function MaterialTableComponent_th_132_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Name ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function MaterialTableComponent_td_133_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r65 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r65.name, " ");
        }
      }

      function MaterialTableComponent_th_135_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Gender ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function MaterialTableComponent_td_136_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r66 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r66.gender, " ");
        }
      }

      function MaterialTableComponent_th_138_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Email ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function MaterialTableComponent_td_139_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r67 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r67.email, " ");
        }
      }

      function MaterialTableComponent_th_141_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Address ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function MaterialTableComponent_td_142_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r68 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r68.address, " ");
        }
      }

      function MaterialTableComponent_th_144_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Mobile ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function MaterialTableComponent_td_145_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r69 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r69.mobile, " ");
        }
      }

      function MaterialTableComponent_th_147_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Salary ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function MaterialTableComponent_td_148_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r70 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r70.salary, " ");
        }
      }

      function MaterialTableComponent_tr_149_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 30);
        }
      }

      function MaterialTableComponent_tr_150_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 31);
        }
      }

      var _c0 = function _c0() {
        return [5, 10, 20];
      };

      var ELEMENT_DATA = [{
        no: 1,
        name: 'John Doe',
        gender: 'male',
        email: 'test@example.com',
        address: '729 S. Paris Hill St',
        mobile: 1234567890,
        salary: 120000
      }, {
        no: 2,
        name: 'Sarah Smith',
        gender: 'female',
        email: 'test@example.com',
        address: '9003 Lake Street Hinesville',
        mobile: 1234567890,
        salary: 170000
      }, {
        no: 3,
        name: 'Airi Satou',
        gender: 'male',
        email: 'test@example.com',
        address: '848 Old Durham Street Piedmont',
        mobile: 1234567890,
        salary: 150000
      }, {
        no: 4,
        name: 'Angelica Ramos',
        gender: 'male',
        email: 'test@example.com',
        address: '8008 Anderson Drive Titusville',
        mobile: 1234567890,
        salary: 190000
      }, {
        no: 5,
        name: 'Ashton Cox',
        gender: 'female',
        email: 'test@example.com',
        address: '620 East Ave. Dundalk',
        mobile: 1234567890,
        salary: 140000
      }, {
        no: 6,
        name: 'Cara Stevens',
        gender: 'male',
        email: 'test@example.com',
        address: '9641 Delaware Street Camp Hill',
        mobile: 1234567890,
        salary: 220000
      }, {
        no: 7,
        name: 'Jens Brincker',
        gender: 'male',
        email: 'test@example.com',
        address: '83 Pennsylvania Road',
        mobile: 1234567890,
        salary: 170000
      }, {
        no: 8,
        name: 'Mark Hay',
        gender: 'female',
        email: 'test@example.com',
        address: '786 Lake Forest Rd. Biloxi',
        mobile: 1234567890,
        salary: 320000
      }, {
        no: 9,
        name: 'Anthony Davie',
        gender: 'male',
        email: 'test@example.com',
        address: '226 Heritage Dr. Durham',
        mobile: 1234567890,
        salary: 620000
      }, {
        no: 10,
        name: 'Sue Woodger',
        gender: 'male',
        email: 'test@example.com',
        address: '7 SE. Pumpkin Hill Lane',
        mobile: 1234567890,
        salary: 110000
      }];

      var MaterialTableComponent = /*#__PURE__*/function () {
        function MaterialTableComponent() {
          _classCallCheck(this, MaterialTableComponent);

          this.displayedColumns = ['no', 'name', 'gender', 'email', 'address', 'mobile', 'salary'];
          this.dataSource = ELEMENT_DATA;
          this.dataSource2 = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](ELEMENT_DATA);
          this.dataSource3 = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](ELEMENT_DATA);
        }

        _createClass(MaterialTableComponent, [{
          key: "applyFilter",
          value: function applyFilter(event) {
            var filterValue = event.target.value;
            this.dataSource3.filter = filterValue.trim().toLowerCase();
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.dataSource2.paginator = this.paginator;
          }
        }]);

        return MaterialTableComponent;
      }();

      MaterialTableComponent.ɵfac = function MaterialTableComponent_Factory(t) {
        return new (t || MaterialTableComponent)();
      };

      MaterialTableComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MaterialTableComponent,
        selectors: [["app-material-table"]],
        viewQuery: function MaterialTableComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
          }
        },
        decls: 151,
        vars: 11,
        consts: [[1, "content"], [1, "container-fluid"], [1, "row", "clearfix"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12"], [1, "card"], [1, "header"], [1, "header-dropdown", "m-r--5"], [1, "dropdown"], ["href", "#", "onClick", "return false;", "data-toggle", "dropdown", "role", "button", "aria-haspopup", "true", "aria-expanded", "false"], [1, "material-icons"], [1, "dropdown-menu", "pull-right"], ["href", "#", "onClick", "return false;"], [1, "body", "table-responsive"], ["mat-table", "", 1, "w-100", 3, "dataSource"], ["matColumnDef", "no"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "name"], ["matColumnDef", "gender"], ["matColumnDef", "email"], ["matColumnDef", "address"], ["matColumnDef", "mobile"], ["matColumnDef", "salary"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["showFirstLastButtons", "", 3, "pageSizeOptions"], ["appearance", "outline", 1, "example-full-width"], ["matInput", "", "placeholder", "Ex. ium", 3, "keyup"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-header-row", ""], ["mat-row", ""]],
        template: function MaterialTableComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Basic");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Table");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ul", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "i", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "more_vert");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "ul", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Action");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Another action");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Something else here");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "table", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](27, 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, MaterialTableComponent_th_28_Template, 2, 0, "th", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, MaterialTableComponent_td_29_Template, 2, 1, "td", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](30, 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, MaterialTableComponent_th_31_Template, 2, 0, "th", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, MaterialTableComponent_td_32_Template, 2, 1, "td", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](33, 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, MaterialTableComponent_th_34_Template, 2, 0, "th", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, MaterialTableComponent_td_35_Template, 2, 1, "td", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](36, 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, MaterialTableComponent_th_37_Template, 2, 0, "th", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, MaterialTableComponent_td_38_Template, 2, 1, "td", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](39, 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, MaterialTableComponent_th_40_Template, 2, 0, "th", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, MaterialTableComponent_td_41_Template, 2, 1, "td", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](42, 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](43, MaterialTableComponent_th_43_Template, 2, 0, "th", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](44, MaterialTableComponent_td_44_Template, 2, 1, "td", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](45, 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](46, MaterialTableComponent_th_46_Template, 2, 0, "th", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](47, MaterialTableComponent_td_47_Template, 2, 1, "td", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](48, MaterialTableComponent_tr_48_Template, 1, 0, "tr", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](49, MaterialTableComponent_tr_49_Template, 1, 0, "tr", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Pagination");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, " Table");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "ul", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "li", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "a", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "i", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "more_vert");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "ul", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "a", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Action");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "a", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Another action");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "a", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Something else here");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "table", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](75, 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](76, MaterialTableComponent_th_76_Template, 2, 0, "th", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](77, MaterialTableComponent_td_77_Template, 2, 1, "td", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](78, 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](79, MaterialTableComponent_th_79_Template, 2, 0, "th", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](80, MaterialTableComponent_td_80_Template, 2, 1, "td", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](81, 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](82, MaterialTableComponent_th_82_Template, 2, 0, "th", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](83, MaterialTableComponent_td_83_Template, 2, 1, "td", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](84, 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](85, MaterialTableComponent_th_85_Template, 2, 0, "th", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](86, MaterialTableComponent_td_86_Template, 2, 1, "td", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](87, 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](88, MaterialTableComponent_th_88_Template, 2, 0, "th", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](89, MaterialTableComponent_td_89_Template, 2, 1, "td", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](90, 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](91, MaterialTableComponent_th_91_Template, 2, 0, "th", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](92, MaterialTableComponent_td_92_Template, 2, 1, "td", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](93, 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](94, MaterialTableComponent_th_94_Template, 2, 0, "th", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](95, MaterialTableComponent_td_95_Template, 2, 1, "td", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](96, MaterialTableComponent_tr_96_Template, 1, 0, "tr", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](97, MaterialTableComponent_tr_97_Template, 1, 0, "tr", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](98, "mat-paginator", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "Filter");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, " Table");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "ul", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "li", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "a", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "i", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "more_vert");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "ul", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "a", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "Action");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "a", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, "Another action");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "a", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "Something else here");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "mat-form-field", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, "Filter");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "input", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function MaterialTableComponent_Template_input_keyup_126_listener($event) {
              return ctx.applyFilter($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "table", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](128, 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](129, MaterialTableComponent_th_129_Template, 2, 0, "th", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](130, MaterialTableComponent_td_130_Template, 2, 1, "td", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](131, 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](132, MaterialTableComponent_th_132_Template, 2, 0, "th", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](133, MaterialTableComponent_td_133_Template, 2, 1, "td", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](134, 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](135, MaterialTableComponent_th_135_Template, 2, 0, "th", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](136, MaterialTableComponent_td_136_Template, 2, 1, "td", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](137, 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](138, MaterialTableComponent_th_138_Template, 2, 0, "th", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](139, MaterialTableComponent_td_139_Template, 2, 1, "td", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](140, 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](141, MaterialTableComponent_th_141_Template, 2, 0, "th", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](142, MaterialTableComponent_td_142_Template, 2, 1, "td", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](143, 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](144, MaterialTableComponent_th_144_Template, 2, 0, "th", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](145, MaterialTableComponent_td_145_Template, 2, 1, "td", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](146, 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](147, MaterialTableComponent_th_147_Template, 2, 0, "th", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](148, MaterialTableComponent_td_148_Template, 2, 1, "td", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](149, MaterialTableComponent_tr_149_Template, 1, 0, "tr", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](150, MaterialTableComponent_tr_150_Template, 1, 0, "tr", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSource);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSource2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c0));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSource3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
          }
        },
        directives: [_angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatRowDef"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInput"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatRow"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYmxlcy9tYXRlcmlhbC10YWJsZS9tYXRlcmlhbC10YWJsZS5jb21wb25lbnQuc2FzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MaterialTableComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-material-table',
            templateUrl: './material-table.component.html',
            styleUrls: ['./material-table.component.sass']
          }]
        }], function () {
          return [];
        }, {
          paginator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], {
              "static": true
            }]
          }]
        });
      })();
      /***/

    },

    /***/
    "w7GV":
    /*!*****************************************!*\
      !*** ./src/app/tables/tables.module.ts ***!
      \*****************************************/

    /*! exports provided: TablesModule */

    /***/
    function w7GV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TablesModule", function () {
        return TablesModule;
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


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _tables_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./tables-routing.module */
      "PRlH");
      /* harmony import */


      var _basic_table_basic_table_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./basic-table/basic-table.component */
      "us77");
      /* harmony import */


      var _ngx_datatable_ngx_datatable_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./ngx-datatable/ngx-datatable.component */
      "p95r");
      /* harmony import */


      var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @swimlane/ngx-datatable */
      "lDzL");
      /* harmony import */


      var _material_table_material_table_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./material-table/material-table.component */
      "vEQH");
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/table */
      "+0xr");
      /* harmony import */


      var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/paginator */
      "M9IT");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "dNgK");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/checkbox */
      "bSwM");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/material/select */
      "d3UM");
      /* harmony import */


      var _advance_table_advance_table_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./advance-table/advance-table.component */
      "QLnP");
      /* harmony import */


      var _advance_table_dialogs_form_dialog_form_dialog_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./advance-table/dialogs/form-dialog/form-dialog.component */
      "tq9x");
      /* harmony import */


      var _advance_table_dialogs_delete_delete_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ./advance-table/dialogs/delete/delete.component */
      "LQVm");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! @angular/material/datepicker */
      "iadO");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _angular_material_sort__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! @angular/material/sort */
      "Dh3D");
      /* harmony import */


      var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! @angular/material/toolbar */
      "/t3+");
      /* harmony import */


      var ngx_material_file_input__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! ngx-material-file-input */
      "7ZcW");
      /* harmony import */


      var _angular_material_radio__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! @angular/material/radio */
      "QibW");
      /* harmony import */


      var _angular_material_menu__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! @angular/material/menu */
      "STbY");

      var TablesModule = function TablesModule() {
        _classCallCheck(this, TablesModule);
      };

      TablesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: TablesModule
      });
      TablesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function TablesModule_Factory(t) {
          return new (t || TablesModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _tables_routing_module__WEBPACK_IMPORTED_MODULE_3__["TablesRoutingModule"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_6__["NgxDatatableModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatTableModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__["MatPaginatorModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInputModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_12__["MatSnackBarModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButtonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__["MatIconModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_16__["MatSelectModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_20__["MatCardModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_21__["MatDatepickerModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_22__["MatDialogModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_23__["MatSortModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_24__["MatToolbarModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__["MatCheckboxModule"], ngx_material_file_input__WEBPACK_IMPORTED_MODULE_25__["MaterialFileInputModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_26__["MatRadioModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_27__["MatMenuModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TablesModule, {
          declarations: [_basic_table_basic_table_component__WEBPACK_IMPORTED_MODULE_4__["BasicTableComponent"], _ngx_datatable_ngx_datatable_component__WEBPACK_IMPORTED_MODULE_5__["NgxDatatableComponent"], _material_table_material_table_component__WEBPACK_IMPORTED_MODULE_7__["MaterialTableComponent"], _advance_table_advance_table_component__WEBPACK_IMPORTED_MODULE_17__["AdvanceTableComponent"], _advance_table_dialogs_form_dialog_form_dialog_component__WEBPACK_IMPORTED_MODULE_18__["FormDialogComponent"], _advance_table_dialogs_delete_delete_component__WEBPACK_IMPORTED_MODULE_19__["DeleteDialogComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _tables_routing_module__WEBPACK_IMPORTED_MODULE_3__["TablesRoutingModule"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_6__["NgxDatatableModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatTableModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__["MatPaginatorModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInputModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_12__["MatSnackBarModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButtonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__["MatIconModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_16__["MatSelectModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_20__["MatCardModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_21__["MatDatepickerModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_22__["MatDialogModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_23__["MatSortModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_24__["MatToolbarModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__["MatCheckboxModule"], ngx_material_file_input__WEBPACK_IMPORTED_MODULE_25__["MaterialFileInputModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_26__["MatRadioModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_27__["MatMenuModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TablesModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_basic_table_basic_table_component__WEBPACK_IMPORTED_MODULE_4__["BasicTableComponent"], _ngx_datatable_ngx_datatable_component__WEBPACK_IMPORTED_MODULE_5__["NgxDatatableComponent"], _material_table_material_table_component__WEBPACK_IMPORTED_MODULE_7__["MaterialTableComponent"], _advance_table_advance_table_component__WEBPACK_IMPORTED_MODULE_17__["AdvanceTableComponent"], _advance_table_dialogs_form_dialog_form_dialog_component__WEBPACK_IMPORTED_MODULE_18__["FormDialogComponent"], _advance_table_dialogs_delete_delete_component__WEBPACK_IMPORTED_MODULE_19__["DeleteDialogComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _tables_routing_module__WEBPACK_IMPORTED_MODULE_3__["TablesRoutingModule"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_6__["NgxDatatableModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatTableModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__["MatPaginatorModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInputModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_12__["MatSnackBarModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButtonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__["MatIconModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_16__["MatSelectModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_20__["MatCardModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_21__["MatDatepickerModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_22__["MatDialogModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_23__["MatSortModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_24__["MatToolbarModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__["MatCheckboxModule"], ngx_material_file_input__WEBPACK_IMPORTED_MODULE_25__["MaterialFileInputModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_26__["MatRadioModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_27__["MatMenuModule"]]
          }]
        }], null, null);
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=tables-tables-module-es5.js.map