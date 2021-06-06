(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["storemanagement-storemanagement-module"],{

/***/ "28Q2":
/*!************************************************************!*\
  !*** ./src/app/storemanagement/storemng-routing.module.ts ***!
  \************************************************************/
/*! exports provided: storemngRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storemngRoutingModule", function() { return storemngRoutingModule; });
/* harmony import */ var _itemtsn_itemtsn_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./itemtsn/itemtsn.component */ "8Bo9");
/* harmony import */ var _stockupdate_stockupdate_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stockupdate/stockupdate.component */ "Q53a");
/* harmony import */ var _reports_reports_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reports/reports.component */ "C91Q");
/* harmony import */ var _othersreq_othersreq_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./othersreq/othersreq.component */ "ge8t");
/* harmony import */ var _citrix_citrix_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./citrix/citrix.component */ "nALV");
/* harmony import */ var _requestdeatials_requestdeatials_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./requestdeatials/requestdeatials.component */ "ebnW");
/* harmony import */ var _storemng_storemng_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./storemng/storemng.component */ "IyYx");
/* harmony import */ var _storeboard_storeboard_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./storeboard/storeboard.component */ "kuYk");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _findmatireals_findmatireals_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./findmatireals/findmatireals.component */ "k2Xd");
/* harmony import */ var _requestakg_requestakg_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./requestakg/requestakg.component */ "Bray");
/* harmony import */ var _roltable_roltable_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./roltable/roltable.component */ "hu2w");
/* harmony import */ var _livetable_livetable_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./livetable/livetable.component */ "A/sl");
/* harmony import */ var _safetable_safetable_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./safetable/safetable.component */ "L7g7");

















const routes = [
    {
        path: '',
        redirectTo: 'main',
        pathMatch: 'full'
    },
    {
        path: 'main',
        component: _storeboard_storeboard_component__WEBPACK_IMPORTED_MODULE_7__["StoreboardComponent"]
    },
    {
        path: 'reqdata',
        component: _requestdeatials_requestdeatials_component__WEBPACK_IMPORTED_MODULE_5__["RequestdeatialsComponent"]
    },
    {
        path: 'safet',
        component: _safetable_safetable_component__WEBPACK_IMPORTED_MODULE_14__["SafetableComponent"]
    },
    {
        path: 'itemtrn',
        component: _itemtsn_itemtsn_component__WEBPACK_IMPORTED_MODULE_0__["ItemtsnComponent"]
    },
    {
        path: 'livet',
        component: _livetable_livetable_component__WEBPACK_IMPORTED_MODULE_13__["LivetableComponent"]
    },
    {
        path: 'rolt',
        component: _roltable_roltable_component__WEBPACK_IMPORTED_MODULE_12__["RoltableComponent"]
    },
    {
        path: 'strmng',
        component: _storemng_storemng_component__WEBPACK_IMPORTED_MODULE_6__["StoremngComponent"]
    },
    {
        path: 'reports',
        component: _reports_reports_component__WEBPACK_IMPORTED_MODULE_2__["ReportsComponent"]
    },
    {
        path: 'stockupdate',
        component: _stockupdate_stockupdate_component__WEBPACK_IMPORTED_MODULE_1__["StockupdateComponent"]
    },
    {
        path: 'otherreq',
        component: _othersreq_othersreq_component__WEBPACK_IMPORTED_MODULE_3__["OthersreqComponent"]
    },
    {
        path: 'citrix',
        component: _citrix_citrix_component__WEBPACK_IMPORTED_MODULE_4__["CITRIXComponent"]
    },
    {
        path: 'rqtack',
        component: _requestakg_requestakg_component__WEBPACK_IMPORTED_MODULE_11__["RequestakgComponent"]
    },
    {
        path: 'findmatirial',
        component: _findmatireals_findmatireals_component__WEBPACK_IMPORTED_MODULE_10__["FindmatirealsComponent"]
    },
];
class storemngRoutingModule {
}
storemngRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: storemngRoutingModule });
storemngRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ factory: function storemngRoutingModule_Factory(t) { return new (t || storemngRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](storemngRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵsetClassMetadata"](storemngRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "8Bo9":
/*!**************************************************************!*\
  !*** ./src/app/storemanagement/itemtsn/itemtsn.component.ts ***!
  \**************************************************************/
/*! exports provided: ItemtsnComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemtsnComponent", function() { return ItemtsnComponent; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "lDzL");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-select/ng-select */ "ZOsW");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _ctrl_ngx_csv__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ctrl/ngx-csv */ "Fjbs");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/core */ "FKr1");




















const _c0 = ["roleTemplate"];
const _c1 = ["closeAddModal"];
const _c2 = ["closeEditModal"];
function ItemtsnComponent_mat_error_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Invalid start date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ItemtsnComponent_mat_error_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Invalid end date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ItemtsnComponent_mat_error_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "From Date Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ItemtsnComponent_mat_error_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "To Date Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ItemtsnComponent_ng_template_58_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Request ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ItemtsnComponent_ng_template_60_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ItemtsnComponent_ng_template_62_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Emp Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ItemtsnComponent_ng_template_64_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ItemtsnComponent_ng_template_66_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Reject Reason");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ItemtsnComponent_ng_template_68_Template(rf, ctx) { if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ItemtsnComponent_ng_template_68_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r37); const row_r34 = ctx.row; const rowIndex_r35 = ctx.rowIndex; const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r36.editRow(row_r34, rowIndex_r35); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "i", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "mode_edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ItemtsnComponent_mat_error_94_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " empname required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ItemtsnComponent_mat_error_102_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " date required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ItemtsnComponent_mat_error_111_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " itemcode required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ItemtsnComponent_mat_error_119_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " itemname required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ItemtsnComponent_mat_error_128_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " quantity required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ItemtsnComponent_mat_error_142_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Status is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ItemtsnComponent_mat_error_151_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " totalprice required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ItemtsnComponent_mat_error_159_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " remarks required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ItemtsnComponent_mat_option_166_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r38 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", product_r38.reason);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", product_r38.reason, " ");
} }
function ItemtsnComponent_mat_error_169_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " rejectreason is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ItemtsnComponent_mat_error_177_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " livestock required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ItemtsnComponent_mat_error_186_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Reorder Quantity required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ItemtsnComponent_mat_error_194_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Min Stock required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ItemtsnComponent_mat_error_203_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " safestock required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ItemtsnComponent_mat_error_211_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " rack required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class ItemtsnComponent {
    constructor(fb, _snackBar, http) {
        this.fb = fb;
        this._snackBar = _snackBar;
        this.http = http;
        this.rows = [];
        this.dropdownList = [];
        this.selectedItems = [];
        this.dropdownSettings = {};
        this.myArray = [];
        this.selectedArray = [];
        this.title = 'angular-mat-datepicker-range';
        this.startDate = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](new Date());
        this.endDate = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](new Date());
        this.columns = [
            { name: 'id' },
            { name: 'acknowledge' },
            { name: 'channel' },
            { name: 'date' },
            { name: 'empname' },
            { name: 'issuedby' },
            { name: 'itemcode' },
            { name: 'itemname' },
            { name: 'otherdescription' },
            { name: 'otp' },
            { name: 'quantity' },
            { name: 'remark' },
            { name: 'remarks' },
            { name: 'specdrawing' },
            { name: 'status' },
            { name: 'totalprice' },
            { name: 'rejectreason' },
            { name: 'rack' },
        ];
        // Table 2
        this.tb2columns = [
            { name: 'id' },
            { name: 'acknowledge' },
            { name: 'channel' },
            { name: 'date' },
            { name: 'empname' },
            { name: 'issuedby' },
            { name: 'itemcode' },
            { name: 'itemname' },
            { name: 'otherdescription' },
            { name: 'otp' },
            { name: 'quantity' },
            { name: 'remark' },
            { name: 'remarks' },
            { name: 'specdrawing' },
            { name: 'status' },
            { name: 'totalprice' },
            { name: 'rejectreason' },
            { name: 'rack' },
        ];
        this.tb2data = [];
        this.tb2filteredData = [];
        this.range = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            fromDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            toDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
        });
        this.categories = this.dropdownList;
        this.selected = [
        // {id: 5, name: 'Angular'},
        // {id: 6, name: 'Vue'}
        ];
        this.dateRangeForm = this.fb.group({
            fromDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            toDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
        });
        this.editForm = this.fb.group({
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            acknowledge: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            channel: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            date: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            empname: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            issuedby: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            itemcode: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            itemname: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            otherdescription: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            otp: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            quantity: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            remark: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            remarks: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            specdrawing: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            status: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            totalprice: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            safestock: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            rol: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            livestock: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            minstock: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            rejectreason: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            rack: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
        });
    }
    onFormSubmit() {
        console.log('Is Form value', this.dateRangeForm.value);
    }
    onItemSelect(item) {
        this.data = {};
        console.log(item.id);
        console.log(this.selectedItems);
        console.log("hello selected all");
        this.myArray.push(item.id);
        this.http.get(this.mainurl + 'productcates', {
            params: {
                ids: this.myArray
            },
            observe: 'response'
        })
            .toPromise()
            .then(response => {
            this.data = response.body;
            this.filteredData = response.body;
            this.thistotaldata = response.body[0]['totalprices'];
            console.log(response.body);
            console.log("response");
        });
    }
    OnItemDeSelect(item) {
        this.myArray.splice(this.myArray.indexOf(item.id), 1);
        if (this.myArray.length > 0) {
            this.http.get(this.mainurl + 'productcates', {
                params: {
                    ids: this.myArray
                },
                observe: 'response'
            })
                .toPromise()
                .then(response => {
                this.data = response.body;
                this.filteredData = response.body;
                this.thistotaldata = response.body[0]['totalprices'];
                console.log(response.body);
                console.log("response");
            });
        }
        // this.mainurl + 'emprequest'
        else {
            this.http.get(this.mainurl + 'emprequest').subscribe(res => {
                this.data = res;
                this.filteredData = res;
                // console.log('this is reason ',  this.resondata );
            });
        }
        console.log(item);
        console.log(this.selectedItems);
        console.log("hello deselected all");
    }
    onSelectAll(items) {
        console.log(items);
    }
    onDeSelectAll(items) {
        console.log(items);
    }
    getSelectedValue() {
        this.selectedArray = [];
        for (let i = 0; i < Object.keys(this.selected).length; i++) {
            this.selectedArray.push(this.selected[i]['id']);
        }
        var dateArray = [];
        dateArray.push(this.dateRangeForm.value.fromDate);
        dateArray.push(this.dateRangeForm.value.toDate);
        this.http.get(this.mainurl + 'productcates', {
            params: {
                ids: this.selectedArray,
                dates: dateArray
            },
            observe: 'response'
        })
            .toPromise()
            .then(response => {
            this.data = response.body;
            this.filteredData = response.body;
            this.thistotaldata = response.body[0]['totalprices'];
            console.log(response.body);
            console.log("response");
        });
        console.log(this.selectedArray);
        console.log(this.selected, this.dateRangeForm.value.fromDate, '*****************************************************************************************');
    }
    ngOnInit() {
        this.mainurl = localStorage.getItem('mainurl');
        // this.http.get(this.mainurl + 'category').subscribe();
        this.http.get(this.mainurl + 'categorylist').subscribe(res => {
            this.resondata = res;
            console.log('this is categories ', this.resondata);
            this.dropdownList = this.resondata;
        });
        setInterval(() => {
            this.getdatareason();
        }, 60000);
        //     this.dropdownList = [
        //       {"id":1,"itemName":"India"},
        //       {"id":2,"itemName":"Singapore"},
        //       {"id":3,"itemName":"Australia"},
        //       {"id":4,"itemName":"Canada"},
        //       {"id":5,"itemName":"South Korea"},
        //       {"id":6,"itemName":"Germany"},
        //       {"id":7,"itemName":"France"},
        //       {"id":8,"itemName":"Russia"},
        //       {"id":9,"itemName":"Italy"},
        //       {"id":10,"itemName":"Sweden"}
        //     ];
        // this.selectedItems = [
        //         {"id":2,"itemName":"Singapore"},
        //         {"id":3,"itemName":"Australia"},
        //         {"id":4,"itemName":"Canada"},
        //         {"id":5,"itemName":"South Korea"}
        //     ];
        this.dropdownSettings = {
            singleSelection: false,
            text: "Select Category",
            enableSearchFilter: true,
            classes: "myclass custom-class"
        };
        this.fetch(data => {
            this.data = data;
            this.thistotaldata = data[0]['totalprices'];
            this.filteredData = data;
        });
        // Table 2
        this.tb2fetch(data => {
            this.tb2data = data;
            this.thistotaldata = data[0]['totalprices'];
            this.tb2filteredData = data;
        });
        this.register = this.fb.group({
            //
            id: [''],
            acknowledge: [''],
            channel: [''],
            date: [''],
            empname: [''],
            issuedby: [''],
            itemcode: [''],
            itemname: [''],
            otherdescription: [''],
            otp: [''],
            quantity: [''],
            remark: [''],
            remarks: [''],
            specdrawing: [''],
            status: [''],
            totalprice: [''],
            rejectreason: [''],
            safestock: [''],
            rol: [''],
            livestock: [''],
            minstock: [''],
            rack: [''],
        });
    }
    fetch(cb) {
        const req = new XMLHttpRequest();
        req.open('GET', this.mainurl + 'empcomprequest');
        req.onload = () => {
            const data = JSON.parse(req.response);
            cb(data);
            console.log('get json data', data);
            this.thistotaldata = data[0]['totalprices'];
        };
        req.send();
    }
    // Table 2
    tb2fetch(cb) {
        const req = new XMLHttpRequest();
        req.open('GET', 'assets/data/ngx-data.json');
        req.onload = () => {
            const data = JSON.parse(req.response);
            cb(data);
            this.thistotaldata = data[0]['totalprices'];
        };
        req.send();
    }
    // Table 2
    tb2filterDatatable(event) {
        // get the value of the key pressed and make it lowercase
        const val = event.target.value.toLowerCase();
        // get the amount of columns in the table
        const colsAmt = this.tb2columns.length;
        // get the key names of each column in the dataset
        const keys = Object.keys(this.tb2filteredData[0]);
        // assign filtered matches to the active datatable
        this.tb2data = this.tb2filteredData.filter(function (item) {
            // iterate through each row's column data
            for (let i = 0; i < colsAmt; i++) {
                // check for a match
                if (item[keys[i]]
                    .toString()
                    .toLowerCase()
                    .indexOf(val) !== -1 ||
                    !val) {
                    // found match, return true to add to result set
                    return true;
                }
            }
        });
        // whenever the filter changes, always go back to the first page
        this.table2.offset = 0;
    }
    editRow(row, rowIndex) {
        this.editForm.setValue({
            id: row.id,
            acknowledge: row.acknowledge,
            channel: row.channel,
            date: row.date,
            empname: row.empname,
            issuedby: row.issuedby,
            itemcode: row.itemcode,
            itemname: row.itemname,
            otherdescription: row.otherdescription,
            otp: row.otp,
            quantity: row.quantity,
            remark: row.remark,
            remarks: row.remarks,
            specdrawing: row.specdrawing,
            status: row.status,
            totalprice: row.totalprice,
            rejectreason: row.rejectreason,
            safestock: row.safestock,
            rol: row.rol,
            livestock: row.livestock,
            minstock: row.minstock,
            rack: row.rack,
        });
        this.selectedRowData = row;
    }
    addRow() {
        this.register.patchValue({
            // id: this.getId(10, 100),
            name: this.name,
            code: this.code
        });
    }
    deleteRow(row) {
        // this.data = this.arrayRemove(this.data, row.id);
        // this.showNotification(
        //   'bg-red',
        //   'Delete Record Successfully',
        //   'bottom',
        //   'right'
        // );
        this.data = this.arrayRemove(this.data, row.id);
        this.http.delete(this.mainurl + 'emprequest/' + row.id).subscribe();
        this.showNotification('bg-red', 'Delete Record Successfully', 'bottom', 'right');
    }
    arrayRemove(array, id) {
        return array.filter(function (element) {
            return element.id != id;
        });
    }
    onEditSave(form) {
        // this.data = this.data.filter((value, key) => {
        //   if (value.id == form.value.id) {
        //     value.type = form.value.type;
        //   }
        //   this.closeEditModal.nativeElement.click();
        //   return true;
        // });
        this.data = this.data.filter((value, key) => {
            if (value.id == form.value.id) {
                value.id = form.value.id;
                value.acknowledge = form.value.acknowledge;
                value.channel = form.value.channel;
                value.date = form.value.date;
                value.empname = form.value.empname;
                value.issuedby = form.value.issuedby;
                value.itemcode = form.value.itemcode;
                value.itemname = form.value.itemname;
                value.otherdescription = form.value.otherdescription;
                value.otp = form.value.otp;
                value.quantity = form.value.quantity;
                value.remark = form.value.remark;
                value.remarks = form.value.remarks;
                value.specdrawing = form.value.specdrawing;
                value.status = form.value.status;
                value.totalprice = form.value.totalprice;
                value.rejectreason = form.value.rejectreason;
                value.safestock = form.value.safestock;
                value.rol = form.value.rol;
                value.livestock = form.value.livestock;
                value.minstock = form.value.minstock;
                value.rack = form.value.rack;
            }
            let empdata = {
                "id": form.value.id,
                "acknowledge": form.value.acknowledge,
                "channel": form.value.channel,
                "date": form.value.date,
                "empname": form.value.empname,
                "issuedby": form.value.issuedby,
                "itemcode": form.value.itemcode,
                "itemname": form.value.itemname,
                "otherdescription": form.value.otherdescription,
                "otp": form.value.otp,
                "quantity": form.value.quantity,
                "remark": form.value.remark,
                "remarks": form.value.remarks,
                "specdrawing": form.value.specdrawing,
                "status": form.value.status,
                "totalprice": form.value.totalprice,
                "rejectreason": form.value.rejectreason,
                "safestock": form.value.safestock,
                "rol": form.value.rol,
                "livestock": form.value.livestock,
                "minstock": form.value.minstock,
                "rack": form.value.rack,
            };
            this.empdatasss = {
                "id": form.value.id,
                "acknowledge": form.value.acknowledge,
                "channel": form.value.channel,
                "date": form.value.date,
                "empname": form.value.empname,
                "issuedby": form.value.issuedby,
                "itemcode": form.value.itemcode,
                "itemname": form.value.itemname,
                "otherdescription": form.value.otherdescription,
                "otp": form.value.otp,
                "quantity": form.value.quantity,
                "remark": form.value.remark,
                "remarks": form.value.remarks,
                "specdrawing": form.value.specdrawing,
                "status": form.value.status,
                "totalprice": form.value.totalprice,
                "rejectreason": form.value.rejectreason,
                "safestock": form.value.safestock,
                "rol": form.value.rol,
                "livestock": form.value.livestock,
                "minstock": form.value.minstock,
            };
            // this.http.put(this.mainurl + 'emprequestakg/'+form.value.id, empdata).subscribe();
            // this.closeEditModal.nativeElement.click();
            return true;
        });
        this.http.put(this.mainurl + 'emprequestakg/' + form.value.id, this.empdatasss).subscribe();
        this.closeEditModal.nativeElement.click();
        this.showNotification('bg-black', 'Edit Record Successfully', 'bottom', 'right');
    }
    getdatareason() {
        this.http.get(this.mainurl + 'rejectcategory').subscribe(res => {
            this.resondata = res;
            console.log('this is reason ', this.resondata);
        });
    }
    onAddRowSave(form) {
        this.data.push(form.value);
        this.http.post(this.mainurl + 'emprequest', form.value).subscribe();
        this.data = [...this.data];
        // console.log(this.data);
        form.reset();
        this.closeAddModal.nativeElement.click();
        this.showNotification('bg-green', 'Add Record Successfully', 'bottom', 'right');
    }
    filterDatatable(event) {
        // get the value of the key pressed and make it lowercase
        const val = event.target.value.toLowerCase();
        // get the amount of columns in the table
        const colsAmt = this.columns.length;
        // get the key names of each column in the dataset
        const keys = Object.keys(this.filteredData[0]);
        // assign filtered matches to the active datatable
        this.data = this.filteredData.filter(function (item) {
            // iterate through each row's column data
            for (let i = 0; i < colsAmt; i++) {
                // check for a match
                if (item[keys[i]]
                    .toString()
                    .toLowerCase()
                    .indexOf(val) !== -1 ||
                    !val) {
                    // found match, return true to add to result set
                    return true;
                }
            }
        });
        // whenever the filter changes, always go back to the first page
        this.table.offset = 0;
    }
    getId(min, max) {
        // min and max included
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    openSnackBar(message) {
        this._snackBar.open(message, '', {
            duration: 2000,
            verticalPosition: 'bottom',
            horizontalPosition: 'right',
            panelClass: ['bg-red']
        });
    }
    showNotification(colorName, text, placementFrom, placementAlign) {
        this._snackBar.open(text, '', {
            duration: 2000,
            verticalPosition: placementFrom,
            horizontalPosition: placementAlign,
            panelClass: colorName
        });
    }
}
ItemtsnComponent.ɵfac = function ItemtsnComponent_Factory(t) { return new (t || ItemtsnComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
ItemtsnComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ItemtsnComponent, selectors: [["app-itemtsn"]], viewQuery: function ItemtsnComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstaticViewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__["DatatableComponent"], true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c1, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c2, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__["DatatableComponent"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.roleTemplate = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.table = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.closeAddModal = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.closeEditModal = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.table2 = _t.first);
    } }, decls: 218, vars: 55, consts: [[1, "content"], [1, "container-fluid"], [1, "card"], ["bindLabel", "itemName", "placeholder", "Select Category", "appendTo", "body", 3, "items", "multiple", "ngModel", "ngModelChange"], [1, "row"], [3, "formGroup", "ngSubmit"], [1, "col-xl-6", "col-lg-4", "col-md-12", "col-sm-12", "mb-2"], [3, "rangePicker"], ["matStartDate", "", "placeholder", "From Date", "required", "", "formControlName", "fromDate"], ["matEndDate", "", "placeholder", "To Date", "required", "", "formControlName", "toDate"], ["matSuffix", "", 3, "for"], ["picker", ""], [4, "ngIf"], [1, "user"], [1, "hidden"], [2, "margin-top", "10px", 3, "ngModel", "readonly", "ngModelChange"], [1, "modal-footer"], [1, "button-demo"], ["type", "submit", 1, "btn", "btn-outline-success", "btn-border-radius", 3, "click"], [1, "row", "clearfix"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12"], [1, "body"], [1, "col-sm-12"], [1, "ngxTableHeader"], [1, "header-buttons-left", "ml-0"], [1, "dropdown"], [1, "dropdown", "m-l-20"], ["for", "search-input"], [1, "material-icons", "search-icon"], ["placeholder", "Search", "type", "text", "aria-label", "Search box", 1, "browser-default", "search-field", 3, "keyup"], [1, "header-buttons", "m-r-20"], [1, "icon-button-demo"], ["mat-mini-fab", "", "color", "primary", "data-toggle", "modal", "data-target", "#addModal"], ["csvLink", "", 1, "col-white", 3, "data"], [1, "material", 3, "rows", "columns", "sortType", "columnMode", "headerHeight", "footerHeight", "rowHeight", "limit"], ["table", ""], ["name", "id", 3, "width"], ["ngx-datatable-header-template", ""], ["name", "date", 3, "width"], ["name", "empname", 3, "width"], ["name", "status", 3, "width"], ["name", "rejectreason", 3, "width"], ["name", "Actions", "sortable", "false", 3, "width"], ["ngx-datatable-cell-template", ""], ["id", "editModal", "tabindex", "-1", "role", "dialog", "aria-labelledby", "exampleModalLabel", "aria-hidden", "true", 1, "modal", "fade"], ["role", "document", 1, "modal-dialog"], [1, "modal-content"], [1, "modal-header"], [1, "editRowModal"], [1, "modal-header", "clearfix"], [1, "modal-about"], [1, "font-weight-bold", "p-t-10", "font-17"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "btn", "p-t-10", "modal-close-button"], ["closeEditModal", ""], [1, "material-icons"], [1, "modal-body"], [1, "input-field", "col", "s12", "d-none"], ["formControlName", "id", "type", "hidden", 1, "form-control"], [1, "col-xl-6", "col-lg-6", "col-md-12", "col-sm-12", "mb-2"], ["appearance", "outline", 1, "example-full-width"], ["matInput", "", "formControlName", "empname", "required", "", 3, "disabled"], ["matSuffix", ""], ["matInput", "", "formControlName", "date", "required", "", 3, "disabled"], ["matInput", "", "formControlName", "itemcode", "required", "", 3, "disabled"], ["matInput", "", "formControlName", "itemname", "required", ""], ["matInput", "", "formControlName", "quantity", "required", ""], ["formControlName", "status", "required", ""], [3, "value"], ["matInput", "", "formControlName", "totalprice", "required", ""], ["matInput", "", "formControlName", "remarks", "required", ""], ["formControlName", "rejectreason", "required", ""], [3, "value", 4, "ngFor", "ngForOf"], ["matInput", "", "formControlName", "livestock", "required", "", 3, "readonly"], ["matInput", "", "formControlName", "rol", "required", "", 3, "readonly"], ["matInput", "", "formControlName", "minstock", "required", "", 3, "readonly"], ["matInput", "", "formControlName", "safestock", "required", "", 3, "readonly"], ["matInput", "", "formControlName", "rack", "required", "", 3, "readonly"], ["type", "submit", 1, "btn", "btn-outline-success", "btn-border-radius"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-outline-warning", "btn-border-radius"], ["data-toggle", "modal", "data-target", "#editModal", 1, "btn", "tblActnBtn", "h-auto", 3, "click"]], template: function ItemtsnComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Selcet the Categories :");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ng-select", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ItemtsnComponent_Template_ng_select_ngModelChange_5_listener($event) { return ctx.selected = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "form", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function ItemtsnComponent_Template_form_ngSubmit_7_listener() { return ctx.onFormSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Enter Session Period");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "mat-date-range-input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "mat-datepicker-toggle", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "mat-date-range-picker", null, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, ItemtsnComponent_mat_error_18_Template, 2, 0, "mat-error", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, ItemtsnComponent_mat_error_19_Template, 2, 0, "mat-error", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, ItemtsnComponent_mat_error_20_Template, 2, 0, "mat-error", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, ItemtsnComponent_mat_error_21_Template, 2, 0, "mat-error", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Total Amount");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ItemtsnComponent_Template_input_ngModelChange_27_listener($event) { return ctx.thistotaldata = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ItemtsnComponent_Template_button_click_30_listener() { return ctx.getSelectedValue(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Get Data");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "ul", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "li", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "View Requests ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "li", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "label", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, "search");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "input", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keyup", function ItemtsnComponent_Template_input_keyup_48_listener($event) { return ctx.filterDatatable($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "ul", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "button", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "a", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, "CSV");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "ngx-datatable", 34, 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "ngx-datatable-column", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](58, ItemtsnComponent_ng_template_58_Template, 2, 0, "ng-template", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "ngx-datatable-column", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](60, ItemtsnComponent_ng_template_60_Template, 2, 0, "ng-template", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "ngx-datatable-column", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](62, ItemtsnComponent_ng_template_62_Template, 2, 0, "ng-template", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "ngx-datatable-column", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](64, ItemtsnComponent_ng_template_64_Template, 2, 0, "ng-template", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "ngx-datatable-column", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](66, ItemtsnComponent_ng_template_66_Template, 2, 0, "ng-template", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "ngx-datatable-column", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](68, ItemtsnComponent_ng_template_68_Template, 4, 0, "ng-template", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](77);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "button", 52, 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "i", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](81, "clear");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "form", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function ItemtsnComponent_Template_form_ngSubmit_83_listener() { return ctx.onEditSave(ctx.editForm); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](85, "input", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "mat-form-field", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](90, "empname");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](91, "input", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "mat-icon", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](93, "star");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](94, ItemtsnComponent_mat_error_94_Template, 2, 0, "mat-error", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](95, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](96, "mat-form-field", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](97, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](98, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](99, "input", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](100, "mat-icon", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](101, "star");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](102, ItemtsnComponent_mat_error_102_Template, 2, 0, "mat-error", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](103, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](104, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](105, "mat-form-field", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](106, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](107, "itemcode");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](108, "input", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](109, "mat-icon", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](110, "star");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](111, ItemtsnComponent_mat_error_111_Template, 2, 0, "mat-error", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](112, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](113, "mat-form-field", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](114, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](115, "itemname");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](116, "input", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](117, "mat-icon", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](118, "star");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](119, ItemtsnComponent_mat_error_119_Template, 2, 0, "mat-error", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](120, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](121, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](122, "mat-form-field", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](123, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](124, "quantity");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](125, "input", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](126, "mat-icon", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](127, "star");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](128, ItemtsnComponent_mat_error_128_Template, 2, 0, "mat-error", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](129, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](130, "mat-form-field", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](131, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](132, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](133, "mat-select", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](134, "mat-option", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](135, " Pending ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](136, "mat-option", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](137, " Rejected ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](138, "mat-option", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](139, " Completed ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](140, "mat-icon", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](141, "flag");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](142, ItemtsnComponent_mat_error_142_Template, 2, 0, "mat-error", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](143, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](144, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](145, "mat-form-field", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](146, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](147, "totalprice");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](148, "input", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](149, "mat-icon", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](150, "star");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](151, ItemtsnComponent_mat_error_151_Template, 2, 0, "mat-error", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](152, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](153, "mat-form-field", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](154, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](155, "Machine");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](156, "input", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](157, "mat-icon", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](158, "star");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](159, ItemtsnComponent_mat_error_159_Template, 2, 0, "mat-error", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](160, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](161, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](162, "mat-form-field", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](163, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](164, "Reason");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](165, "mat-select", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](166, ItemtsnComponent_mat_option_166_Template, 2, 2, "mat-option", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](167, "mat-icon", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](168, "flag");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](169, ItemtsnComponent_mat_error_169_Template, 2, 0, "mat-error", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](170, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](171, "mat-form-field", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](172, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](173, "Live Stock");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](174, "input", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](175, "mat-icon", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](176, "star");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](177, ItemtsnComponent_mat_error_177_Template, 2, 0, "mat-error", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](178, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](179, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](180, "mat-form-field", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](181, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](182, "Reorder Quantity");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](183, "input", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](184, "mat-icon", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](185, "star");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](186, ItemtsnComponent_mat_error_186_Template, 2, 0, "mat-error", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](187, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](188, "mat-form-field", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](189, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](190, "Min Stock");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](191, "input", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](192, "mat-icon", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](193, "star");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](194, ItemtsnComponent_mat_error_194_Template, 2, 0, "mat-error", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](195, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](196, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](197, "mat-form-field", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](198, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](199, "Safe Stock");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](200, "input", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](201, "mat-icon", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](202, "star");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](203, ItemtsnComponent_mat_error_203_Template, 2, 0, "mat-error", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](204, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](205, "mat-form-field", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](206, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](207, "Rack");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](208, "input", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](209, "mat-icon", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](210, "star");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](211, ItemtsnComponent_mat_error_211_Template, 2, 0, "mat-error", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](212, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](213, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](214, "button", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](215, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](216, "button", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](217, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("items", ctx.dropdownList)("multiple", true)("ngModel", ctx.selected);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.dateRangeForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("rangePicker", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("for", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.dateRangeForm.controls.fromDate.hasError("matStartDateInvalid"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.dateRangeForm.controls.toDate.hasError("matEndDateInvalid"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.dateRangeForm.controls.fromDate.errors == null ? null : ctx.dateRangeForm.controls.fromDate.errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.dateRangeForm.controls.toDate.errors == null ? null : ctx.dateRangeForm.controls.toDate.errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.thistotaldata)("readonly", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("data", ctx.data);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("rows", ctx.data)("columns", ctx.columns)("sortType", "multi")("columnMode", "force")("headerHeight", 50)("footerHeight", 50)("rowHeight", "60")("limit", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("width", 130);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("width", 130);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("width", 130);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("width", 130);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("width", 130);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("width", 120);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.selectedRowData == null ? null : ctx.selectedRowData.id, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.editForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.editForm.get("empname").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.editForm.get("date").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.editForm.get("itemcode").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.editForm.get("itemname").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.editForm.get("quantity").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", "Pending");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", "Rejected");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", "Completed");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.register.get("status").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.editForm.get("totalprice").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.editForm.get("remarks").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.resondata);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.register.get("rejectreason").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("readonly", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.editForm.get("livestock").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("readonly", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.editForm.get("rol").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("readonly", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.editForm.get("minstock").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("readonly", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.editForm.get("safestock").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("readonly", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.editForm.get("rack").hasError("required"));
    } }, directives: [_ng_select_ng_select__WEBPACK_IMPORTED_MODULE_5__["NgSelectComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatLabel"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_7__["MatDateRangeInput"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_7__["MatStartDate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_7__["MatEndDate"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_7__["MatDatepickerToggle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatSuffix"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_7__["MatDateRangePicker"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], _ctrl_ngx_csv__WEBPACK_IMPORTED_MODULE_10__["CsvDirective"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__["DatatableComponent"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__["DataTableColumnDirective"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__["DataTableColumnHeaderDirective"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__["DataTableColumnCellDirective"], _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInput"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIcon"], _angular_material_select__WEBPACK_IMPORTED_MODULE_13__["MatSelect"], _angular_material_core__WEBPACK_IMPORTED_MODULE_14__["MatOption"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatError"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0b3JlbWFuYWdlbWVudC9pdGVtdHNuL2l0ZW10c24uY29tcG9uZW50LnNhc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ItemtsnComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-itemtsn',
                templateUrl: './itemtsn.component.html',
                styleUrls: ['./itemtsn.component.sass']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }]; }, { roleTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['roleTemplate', { static: true }]
        }], table: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: [_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__["DatatableComponent"], { static: false }]
        }], closeAddModal: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['closeAddModal', { static: false }]
        }], closeEditModal: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['closeEditModal', { static: false }]
        }], table2: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: [_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__["DatatableComponent"], { static: false }]
        }] }); })();


/***/ }),

/***/ "A/sl":
/*!******************************************************************!*\
  !*** ./src/app/storemanagement/livetable/livetable.component.ts ***!
  \******************************************************************/
/*! exports provided: LivetableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LivetableComponent", function() { return LivetableComponent; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "lDzL");









const _c0 = ["roleTemplate"];
const _c1 = ["closeAddModal"];
const _c2 = ["closeEditModal"];
class LivetableComponent {
    constructor(fb, _snackBar, http) {
        this.fb = fb;
        this._snackBar = _snackBar;
        this.http = http;
        this.rows = [];
        // newUserImg = 'assets/images/user/user1.jpg';
        this.data = [];
        this.filteredData = [];
        this.columns = [
            { name: 'id' },
            { name: 'name' },
            { name: 'category' },
            { name: 'purchasecost' },
            { name: 'minstock' },
            { name: 'livestock' },
            { name: 'livestockpercent' },
        ];
        // Table 2
        this.tb2columns = [
            { name: 'id' },
            { name: 'name' },
            { name: 'category' },
            { name: 'purchasecost' },
            { name: 'minstock' },
            { name: 'livestock' },
            { name: 'livestockpercent' },
        ];
        this.tb2data = [];
        this.tb2filteredData = [];
        this.editForm = this.fb.group({
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            category: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            purchasecost: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            minstock: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            livestock: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            livestockpercent: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
        });
    }
    ngOnInit() {
        this.mainurl = localStorage.getItem('mainurl');
        this.fetch(data => {
            this.data = data;
            this.filteredData = data;
        });
        // Table 2
        this.tb2fetch(data => {
            this.tb2data = data;
            this.tb2filteredData = data;
        });
        this.register = this.fb.group({
            //
            name: [''],
            id: [''],
            category: [''],
            purchasecost: [''],
            livestockpercent: [''],
            livestock: [''],
            minstock: ['']
        });
    }
    fetch(cb) {
        const req = new XMLHttpRequest();
        req.open('GET', this.mainurl + 'productmsper');
        req.onload = () => {
            const data = JSON.parse(req.response);
            cb(data);
        };
        req.send();
    }
    // Table 2
    tb2fetch(cb) {
        const req = new XMLHttpRequest();
        req.open('GET', 'assets/data/ngx-data.json');
        req.onload = () => {
            const data = JSON.parse(req.response);
            cb(data);
        };
        req.send();
    }
    // Table 2
    tb2filterDatatable(event) {
        // get the value of the key pressed and make it lowercase
        const val = event.target.value.toLowerCase();
        // get the amount of columns in the table
        const colsAmt = this.tb2columns.length;
        // get the key names of each column in the dataset
        const keys = Object.keys(this.tb2filteredData[0]);
        // assign filtered matches to the active datatable
        this.tb2data = this.tb2filteredData.filter(function (item) {
            // iterate through each row's column data
            for (let i = 0; i < colsAmt; i++) {
                // check for a match
                if (item[keys[i]]
                    .toString()
                    .toLowerCase()
                    .indexOf(val) !== -1 ||
                    !val) {
                    // found match, return true to add to result set
                    return true;
                }
            }
        });
        // whenever the filter changes, always go back to the first page
        this.table2.offset = 0;
    }
    editRow(row, rowIndex) {
        this.editForm.setValue({
            id: row.id,
            name: row.name,
            code: row.code,
        });
        this.selectedRowData = row;
    }
    addRow() {
        this.register.patchValue({
            // id: this.getId(10, 100),
            name: this.name,
            code: this.code
        });
    }
    deleteRow(row) {
        // this.data = this.arrayRemove(this.data, row.id);
        // this.showNotification(
        //   'bg-red',
        //   'Delete Record Successfully',
        //   'bottom',
        //   'right'
        // );
        this.data = this.arrayRemove(this.data, row.id);
        this.http.delete(this.mainurl + 'productsafestock/' + row.id).subscribe();
        this.showNotification('bg-red', 'Delete Record Successfully', 'bottom', 'right');
    }
    arrayRemove(array, id) {
        return array.filter(function (element) {
            return element.id != id;
        });
    }
    onEditSave(form) {
        // this.data = this.data.filter((value, key) => {
        //   if (value.id == form.value.id) {
        //     value.type = form.value.type;
        //   }
        //   this.closeEditModal.nativeElement.click();
        //   return true;
        // });
        this.data = this.data.filter((value, key) => {
            if (value.id == form.value.id) {
                value.code = form.value.code;
                value.name = form.value.name;
            }
            let empdata = {
                'code': form.value.code,
                'name': form.value.name,
            };
            this.http.put(this.mainurl + 'productsafestock/' + form.value.id, empdata).subscribe();
            this.closeEditModal.nativeElement.click();
            return true;
        });
        this.showNotification('bg-black', 'Edit Record Successfully', 'bottom', 'right');
    }
    onAddRowSave(form) {
        this.data.push(form.value);
        this.http.post(this.mainurl + 'productsafestock', form.value).subscribe();
        this.data = [...this.data];
        // console.log(this.data);
        form.reset();
        this.closeAddModal.nativeElement.click();
        this.showNotification('bg-green', 'Add Record Successfully', 'bottom', 'right');
    }
    filterDatatable(event) {
        // get the value of the key pressed and make it lowercase
        const val = event.target.value.toLowerCase();
        // get the amount of columns in the table
        const colsAmt = this.columns.length;
        // get the key names of each column in the dataset
        const keys = Object.keys(this.filteredData[0]);
        // assign filtered matches to the active datatable
        this.data = this.filteredData.filter(function (item) {
            // iterate through each row's column data
            for (let i = 0; i < colsAmt; i++) {
                // check for a match
                if (item[keys[i]]
                    .toString()
                    .toLowerCase()
                    .indexOf(val) !== -1 ||
                    !val) {
                    // found match, return true to add to result set
                    return true;
                }
            }
        });
        // whenever the filter changes, always go back to the first page
        this.table.offset = 0;
    }
    getId(min, max) {
        // min and max included
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    openSnackBar(message) {
        this._snackBar.open(message, '', {
            duration: 2000,
            verticalPosition: 'bottom',
            horizontalPosition: 'right',
            panelClass: ['bg-red']
        });
    }
    showNotification(colorName, text, placementFrom, placementAlign) {
        this._snackBar.open(text, '', {
            duration: 2000,
            verticalPosition: placementFrom,
            horizontalPosition: placementAlign,
            panelClass: colorName
        });
    }
}
LivetableComponent.ɵfac = function LivetableComponent_Factory(t) { return new (t || LivetableComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
LivetableComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: LivetableComponent, selectors: [["app-livetable"]], viewQuery: function LivetableComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstaticViewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__["DatatableComponent"], true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c1, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c2, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__["DatatableComponent"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.roleTemplate = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.table = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.closeAddModal = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.closeEditModal = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.table2 = _t.first);
    } }, decls: 2, vars: 0, consts: [[1, "content"], [1, "container-fluid"]], template: function LivetableComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0b3JlbWFuYWdlbWVudC9saXZldGFibGUvbGl2ZXRhYmxlLmNvbXBvbmVudC5zYXNzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](LivetableComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-livetable',
                templateUrl: './livetable.component.html',
                styleUrls: ['./livetable.component.sass']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }]; }, { roleTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['roleTemplate', { static: true }]
        }], table: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: [_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__["DatatableComponent"], { static: false }]
        }], closeAddModal: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['closeAddModal', { static: false }]
        }], closeEditModal: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['closeEditModal', { static: false }]
        }], table2: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: [_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__["DatatableComponent"], { static: false }]
        }] }); })();


/***/ }),

/***/ "Bray":
/*!********************************************************************!*\
  !*** ./src/app/storemanagement/requestakg/requestakg.component.ts ***!
  \********************************************************************/
/*! exports provided: RequestakgComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestakgComponent", function() { return RequestakgComponent; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "lDzL");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _ctrl_ngx_csv__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ctrl/ngx-csv */ "Fjbs");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/core */ "FKr1");


















const _c0 = ["roleTemplate"];
const _c1 = ["closeAddModal"];
const _c2 = ["closeEditModal"];
function RequestakgComponent_ng_template_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Request ID ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function RequestakgComponent_ng_template_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function RequestakgComponent_ng_template_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Item Code");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function RequestakgComponent_ng_template_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Quantity");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function RequestakgComponent_ng_template_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Acknowledge");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function RequestakgComponent_ng_template_38_Template(rf, ctx) { if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RequestakgComponent_ng_template_38_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r30); const row_r27 = ctx.row; const rowIndex_r28 = ctx.rowIndex; const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r29.editRow(row_r27, rowIndex_r28); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "i", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "mode_edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function RequestakgComponent_mat_error_64_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " empname required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function RequestakgComponent_mat_error_72_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " date required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function RequestakgComponent_mat_error_81_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " itemcode required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function RequestakgComponent_mat_error_89_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " itemname required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function RequestakgComponent_mat_error_98_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " quantity required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function RequestakgComponent_mat_error_112_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Status is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function RequestakgComponent_mat_error_121_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " totalprice required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function RequestakgComponent_mat_error_129_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " remarks required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function RequestakgComponent_mat_error_142_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " acknowledge is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function RequestakgComponent_mat_error_150_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " livestock required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function RequestakgComponent_mat_error_159_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Reorder Quantity required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function RequestakgComponent_mat_error_167_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Min Stock required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function RequestakgComponent_mat_error_176_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " safestock required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class RequestakgComponent {
    constructor(fb, _snackBar, http) {
        this.fb = fb;
        this._snackBar = _snackBar;
        this.http = http;
        this.rows = [];
        // newUserImg = 'assets/images/user/user1.jpg';
        this.data = [];
        this.filteredData = [];
        this.columns = [
            { name: 'id' },
            { name: 'acknowledge' },
            { name: 'channel' },
            { name: 'date' },
            { name: 'empname' },
            { name: 'issuedby' },
            { name: 'itemcode' },
            { name: 'itemname' },
            { name: 'otherdescription' },
            { name: 'otp' },
            { name: 'quantity' },
            { name: 'remark' },
            { name: 'remarks' },
            { name: 'specdrawing' },
            { name: 'status' },
            { name: 'totalprice' },
        ];
        // Table 2
        this.tb2columns = [
            { name: 'id' },
            { name: 'acknowledge' },
            { name: 'channel' },
            { name: 'date' },
            { name: 'empname' },
            { name: 'issuedby' },
            { name: 'itemcode' },
            { name: 'itemname' },
            { name: 'otherdescription' },
            { name: 'otp' },
            { name: 'quantity' },
            { name: 'remark' },
            { name: 'remarks' },
            { name: 'specdrawing' },
            { name: 'status' },
            { name: 'totalprice' },
        ];
        this.tb2data = [];
        this.tb2filteredData = [];
        this.editForm = this.fb.group({
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            acknowledge: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            channel: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            date: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            empname: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            issuedby: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            itemcode: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            itemname: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            otherdescription: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            otp: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            quantity: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            remark: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            remarks: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            specdrawing: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            status: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            totalprice: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            rejectreason: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            safestock: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            rol: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            livestock: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            minstock: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
        });
    }
    ngOnInit() {
        this.mainurl = localStorage.getItem('mainurl');
        this.fetch(data => {
            this.data = data;
            this.filteredData = data;
        });
        // Table 2
        this.tb2fetch(data => {
            this.tb2data = data;
            this.tb2filteredData = data;
        });
        this.register = this.fb.group({
            //
            id: [''],
            acknowledge: [''],
            channel: [''],
            date: [''],
            empname: [''],
            issuedby: [''],
            itemcode: [''],
            itemname: [''],
            otherdescription: [''],
            otp: [''],
            quantity: [''],
            remark: [''],
            remarks: [''],
            specdrawing: [''],
            status: [''],
            totalprice: [''],
            rejectreason: [''],
            safestock: [''],
            rol: [''],
            livestock: [''],
            minstock: [''],
        });
    }
    fetch(cb) {
        const req = new XMLHttpRequest();
        req.open('GET', this.mainurl + 'empcomprequest');
        req.onload = () => {
            const data = JSON.parse(req.response);
            cb(data);
        };
        req.send();
    }
    // Table 2
    tb2fetch(cb) {
        const req = new XMLHttpRequest();
        req.open('GET', 'assets/data/ngx-data.json');
        req.onload = () => {
            const data = JSON.parse(req.response);
            cb(data);
        };
        req.send();
    }
    // Table 2
    tb2filterDatatable(event) {
        // get the value of the key pressed and make it lowercase
        const val = event.target.value.toLowerCase();
        // get the amount of columns in the table
        const colsAmt = this.tb2columns.length;
        // get the key names of each column in the dataset
        const keys = Object.keys(this.tb2filteredData[0]);
        // assign filtered matches to the active datatable
        this.tb2data = this.tb2filteredData.filter(function (item) {
            // iterate through each row's column data
            for (let i = 0; i < colsAmt; i++) {
                // check for a match
                if (item[keys[i]]
                    .toString()
                    .toLowerCase()
                    .indexOf(val) !== -1 ||
                    !val) {
                    // found match, return true to add to result set
                    return true;
                }
            }
        });
        // whenever the filter changes, always go back to the first page
        this.table2.offset = 0;
    }
    editRow(row, rowIndex) {
        this.editForm.setValue({
            id: row.id,
            acknowledge: row.acknowledge,
            channel: row.channel,
            date: row.date,
            empname: row.empname,
            issuedby: row.issuedby,
            itemcode: row.itemcode,
            itemname: row.itemname,
            otherdescription: row.otherdescription,
            otp: row.otp,
            quantity: row.quantity,
            remark: row.remark,
            remarks: row.remarks,
            specdrawing: row.specdrawing,
            status: row.status,
            totalprice: row.totalprice,
            rejectreason: row.rejectreason,
            safestock: row.safestock,
            rol: row.rol,
            livestock: row.livestock,
            minstock: row.minstock,
        });
        this.selectedRowData = row;
    }
    addRow() {
        this.register.patchValue({
            // id: this.getId(10, 100),
            name: this.name,
            code: this.code
        });
    }
    arrayRemove(array, id) {
        return array.filter(function (element) {
            return element.id != id;
        });
    }
    onEditSave(form) {
        this.data = this.data.filter((value, key) => {
            if (value.id == form.value.id) {
                value.id = form.value.id;
                value.acknowledge = form.value.acknowledge;
                value.channel = form.value.channel;
                value.date = form.value.date;
                value.empname = form.value.empname;
                value.issuedby = form.value.issuedby;
                value.itemcode = form.value.itemcode;
                value.itemname = form.value.itemname;
                value.otherdescription = form.value.otherdescription;
                value.otp = form.value.otp;
                value.quantity = form.value.quantity;
                value.remark = form.value.remark;
                value.remarks = form.value.remarks;
                value.specdrawing = form.value.specdrawing;
                value.status = form.value.status;
                value.totalprice = form.value.totalprice;
                value.rejectreason = form.value.rejectreason;
                value.safestock = form.value.safestock;
                value.rol = form.value.rol;
                value.livestock = form.value.livestock;
                value.minstock = form.value.minstock;
            }
            this.empdatass = {
                "id": form.value.id,
                "acknowledge": form.value.acknowledge,
                "channel": form.value.channel,
                "date": form.value.date,
                "empname": form.value.empname,
                "issuedby": form.value.issuedby,
                "itemcode": form.value.itemcode,
                "itemname": form.value.itemname,
                "otherdescription": form.value.otherdescription,
                "otp": form.value.otp,
                "quantity": form.value.quantity,
                "remark": form.value.remark,
                "remarks": form.value.remarks,
                "specdrawing": form.value.specdrawing,
                "status": form.value.status,
                "totalprice": form.value.totalprice,
                "rejectreason": form.value.rejectreason,
                "safestock": form.value.safestock,
                "rol": form.value.rol,
                "livestock": form.value.livestock,
                "minstock": form.value.minstock,
            };
            console.log('values are printing ');
            this.closeEditModal.nativeElement.click();
            return true;
        });
        this.http.put(this.mainurl + 'emprequestakg/' + form.value.id, this.empdatass).subscribe();
        this.showNotification('bg-black', 'Edit Record Successfully', 'bottom', 'right');
    }
    filterDatatable(event) {
        // get the value of the key pressed and make it lowercase
        const val = event.target.value.toLowerCase();
        // get the amount of columns in the table
        const colsAmt = this.columns.length;
        // get the key names of each column in the dataset
        const keys = Object.keys(this.filteredData[0]);
        // assign filtered matches to the active datatable
        this.data = this.filteredData.filter(function (item) {
            // iterate through each row's column data
            for (let i = 0; i < colsAmt; i++) {
                // check for a match
                if (item[keys[i]]
                    .toString()
                    .toLowerCase()
                    .indexOf(val) !== -1 ||
                    !val) {
                    // found match, return true to add to result set
                    return true;
                }
            }
        });
        // whenever the filter changes, always go back to the first page
        this.table.offset = 0;
    }
    getId(min, max) {
        // min and max included
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    openSnackBar(message) {
        this._snackBar.open(message, '', {
            duration: 2000,
            verticalPosition: 'bottom',
            horizontalPosition: 'right',
            panelClass: ['bg-red']
        });
    }
    showNotification(colorName, text, placementFrom, placementAlign) {
        this._snackBar.open(text, '', {
            duration: 2000,
            verticalPosition: placementFrom,
            horizontalPosition: placementAlign,
            panelClass: colorName
        });
    }
}
RequestakgComponent.ɵfac = function RequestakgComponent_Factory(t) { return new (t || RequestakgComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
RequestakgComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: RequestakgComponent, selectors: [["app-requestakg"]], viewQuery: function RequestakgComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstaticViewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__["DatatableComponent"], true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c1, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c2, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__["DatatableComponent"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.roleTemplate = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.table = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.closeAddModal = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.closeEditModal = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.table2 = _t.first);
    } }, decls: 183, vars: 44, consts: [[1, "content"], [1, "container-fluid"], [1, "row", "clearfix"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12"], [1, "card"], [1, "body"], [1, "row"], [1, "col-sm-12"], [1, "ngxTableHeader"], [1, "header-buttons-left", "ml-0"], [1, "dropdown"], [1, "dropdown", "m-l-20"], ["for", "search-input"], [1, "material-icons", "search-icon"], ["placeholder", "Search", "type", "text", "aria-label", "Search box", 1, "browser-default", "search-field", 3, "keyup"], [1, "header-buttons", "m-r-20"], [1, "icon-button-demo"], ["mat-mini-fab", "", "color", "primary", "data-toggle", "modal", "data-target", "#addModal"], ["csvLink", "", 1, "col-white", 3, "data"], [1, "material", 3, "rows", "columns", "sortType", "columnMode", "headerHeight", "footerHeight", "rowHeight", "limit"], ["table", ""], ["name", "id", 3, "width"], ["ngx-datatable-header-template", ""], ["name", "date", 3, "width"], ["name", "itemcode", 3, "width"], ["name", "quantity", 3, "width"], ["name", "acknowledge", 3, "width"], ["name", "Actions", "sortable", "false", 3, "width"], ["ngx-datatable-cell-template", ""], ["id", "editModal", "tabindex", "-1", "role", "dialog", "aria-labelledby", "exampleModalLabel", "aria-hidden", "true", 1, "modal", "fade"], ["role", "document", 1, "modal-dialog"], [1, "modal-content"], [1, "modal-header"], [1, "editRowModal"], [1, "modal-header", "clearfix"], [1, "modal-about"], [1, "font-weight-bold", "p-t-10", "font-17"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "btn", "p-t-10", "modal-close-button"], ["closeEditModal", ""], [1, "material-icons"], [1, "modal-body"], [3, "formGroup", "ngSubmit"], [1, "input-field", "col", "s12", "d-none"], ["formControlName", "id", "type", "hidden", 1, "form-control"], [1, "col-xl-6", "col-lg-6", "col-md-12", "col-sm-12", "mb-2"], ["appearance", "outline", 1, "example-full-width"], ["matInput", "", "formControlName", "empname", "required", "", 3, "readonly"], ["matSuffix", ""], [4, "ngIf"], ["matInput", "", "formControlName", "date", "required", "", 3, "readonly"], ["matInput", "", "formControlName", "itemcode", "required", "", 3, "readonly"], ["matInput", "", "formControlName", "itemname", "required", "", 3, "readonly"], ["matInput", "", "formControlName", "quantity", "required", ""], ["formControlName", "status", "required", ""], [3, "value"], ["matInput", "", "formControlName", "totalprice", "required", "", 3, "readonly"], ["matInput", "", "formControlName", "remarks", "required", ""], ["formControlName", "acknowledge", "required", ""], ["matInput", "", "formControlName", "livestock", "required", "", 3, "readonly"], ["matInput", "", "formControlName", "rol", "required", "", 3, "readonly"], ["matInput", "", "formControlName", "minstock", "required", "", 3, "readonly"], ["matInput", "", "formControlName", "safestock", "required", "", 3, "readonly"], [1, "modal-footer"], [1, "button-demo"], ["type", "submit", 1, "btn", "btn-outline-success", "btn-border-radius"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-outline-warning", "btn-border-radius"], ["data-toggle", "modal", "data-target", "#editModal", 1, "btn", "tblActnBtn", "h-auto", 3, "click"]], template: function RequestakgComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "ul", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Citrix Update");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "search");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keyup", function RequestakgComponent_Template_input_keyup_18_listener($event) { return ctx.filterDatatable($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "ul", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "CSV");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "ngx-datatable", 19, 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "ngx-datatable-column", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](28, RequestakgComponent_ng_template_28_Template, 2, 0, "ng-template", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "ngx-datatable-column", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](30, RequestakgComponent_ng_template_30_Template, 2, 0, "ng-template", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "ngx-datatable-column", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](32, RequestakgComponent_ng_template_32_Template, 2, 0, "ng-template", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "ngx-datatable-column", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](34, RequestakgComponent_ng_template_34_Template, 2, 0, "ng-template", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "ngx-datatable-column", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](36, RequestakgComponent_ng_template_36_Template, 2, 0, "ng-template", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "ngx-datatable-column", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](38, RequestakgComponent_ng_template_38_Template, 4, 0, "ng-template", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "button", 37, 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "i", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, "clear");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "form", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function RequestakgComponent_Template_form_ngSubmit_53_listener() { return ctx.onEditSave(ctx.editForm); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](55, "input", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "mat-form-field", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](60, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](61, "input", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "mat-icon", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63, "star");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](64, RequestakgComponent_mat_error_64_Template, 2, 0, "mat-error", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "mat-form-field", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](68, "Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](69, "input", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "mat-icon", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](71, "star");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](72, RequestakgComponent_mat_error_72_Template, 2, 0, "mat-error", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "mat-form-field", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](77, "Item Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](78, "input", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "mat-icon", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](80, "star");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](81, RequestakgComponent_mat_error_81_Template, 2, 0, "mat-error", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "mat-form-field", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](85, "Item Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](86, "input", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "mat-icon", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](88, "star");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](89, RequestakgComponent_mat_error_89_Template, 2, 0, "mat-error", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](90, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](91, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "mat-form-field", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](93, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](94, "Quantity");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](95, "input", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](96, "mat-icon", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](97, "star");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](98, RequestakgComponent_mat_error_98_Template, 2, 0, "mat-error", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](99, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](100, "mat-form-field", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](101, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](102, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](103, "mat-select", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](104, "mat-option", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](105, " Pending ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](106, "mat-option", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](107, " Rejected ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](108, "mat-option", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](109, " Completed ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](110, "mat-icon", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](111, "flag");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](112, RequestakgComponent_mat_error_112_Template, 2, 0, "mat-error", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](113, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](114, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](115, "mat-form-field", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](116, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](117, "Total Price");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](118, "input", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](119, "mat-icon", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](120, "star");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](121, RequestakgComponent_mat_error_121_Template, 2, 0, "mat-error", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](122, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](123, "mat-form-field", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](124, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](125, "Machine");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](126, "input", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](127, "mat-icon", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](128, "star");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](129, RequestakgComponent_mat_error_129_Template, 2, 0, "mat-error", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](130, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](131, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](132, "mat-form-field", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](133, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](134, "Acknowledge");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](135, "mat-select", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](136, "mat-option", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](137, " Pending ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](138, "mat-option", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](139, " Completed ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](140, "mat-icon", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](141, "flag");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](142, RequestakgComponent_mat_error_142_Template, 2, 0, "mat-error", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](143, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](144, "mat-form-field", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](145, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](146, "Live Stock");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](147, "input", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](148, "mat-icon", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](149, "star");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](150, RequestakgComponent_mat_error_150_Template, 2, 0, "mat-error", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](151, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](152, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](153, "mat-form-field", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](154, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](155, "Reorder Quantity");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](156, "input", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](157, "mat-icon", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](158, "star");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](159, RequestakgComponent_mat_error_159_Template, 2, 0, "mat-error", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](160, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](161, "mat-form-field", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](162, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](163, "Min Stock");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](164, "input", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](165, "mat-icon", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](166, "star");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](167, RequestakgComponent_mat_error_167_Template, 2, 0, "mat-error", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](168, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](169, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](170, "mat-form-field", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](171, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](172, "Safe Stock");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](173, "input", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](174, "mat-icon", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](175, "star");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](176, RequestakgComponent_mat_error_176_Template, 2, 0, "mat-error", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](177, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](178, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](179, "button", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](180, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](181, "button", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](182, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("data", ctx.data);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("rows", ctx.data)("columns", ctx.columns)("sortType", "multi")("columnMode", "force")("headerHeight", 50)("footerHeight", 50)("rowHeight", "60")("limit", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("width", 130);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("width", 130);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("width", 130);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("width", 130);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("width", 130);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("width", 120);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.selectedRowData == null ? null : ctx.selectedRowData.id, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.editForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("readonly", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.editForm.get("empname").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("readonly", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.editForm.get("date").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("readonly", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.editForm.get("itemcode").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("readonly", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.editForm.get("itemname").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.editForm.get("quantity").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", "Pending");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", "Rejected");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", "Completed");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.register.get("status").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("readonly", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.editForm.get("totalprice").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.editForm.get("remarks").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", "Pending");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", "Completed");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.register.get("acknowledge").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("readonly", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.editForm.get("livestock").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("readonly", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.editForm.get("rol").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("readonly", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.editForm.get("minstock").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("readonly", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.editForm.get("safestock").hasError("required"));
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _ctrl_ngx_csv__WEBPACK_IMPORTED_MODULE_6__["CsvDirective"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__["DatatableComponent"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__["DataTableColumnDirective"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__["DataTableColumnHeaderDirective"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__["DataTableColumnCellDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIcon"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatSuffix"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelect"], _angular_material_core__WEBPACK_IMPORTED_MODULE_12__["MatOption"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatError"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0b3JlbWFuYWdlbWVudC9yZXF1ZXN0YWtnL3JlcXVlc3Rha2cuY29tcG9uZW50LnNhc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](RequestakgComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-requestakg',
                templateUrl: './requestakg.component.html',
                styleUrls: ['./requestakg.component.sass']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }]; }, { roleTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['roleTemplate', { static: true }]
        }], table: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: [_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__["DatatableComponent"], { static: false }]
        }], closeAddModal: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['closeAddModal', { static: false }]
        }], closeEditModal: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['closeEditModal', { static: false }]
        }], table2: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: [_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__["DatatableComponent"], { static: false }]
        }] }); })();


/***/ }),

/***/ "C91Q":
/*!**************************************************************!*\
  !*** ./src/app/storemanagement/reports/reports.component.ts ***!
  \**************************************************************/
/*! exports provided: ReportsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportsComponent", function() { return ReportsComponent; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "lDzL");










const _c0 = ["roleTemplate"];
const _c1 = ["closeAddModal"];
const _c2 = ["closeEditModal"];
function ReportsComponent_ng_template_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "SI No");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ReportsComponent_ng_template_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ReportsComponent_ng_template_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Product Code");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ReportsComponent_ng_template_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Live Stock");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ReportsComponent_ng_template_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Safe Stock");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ReportsComponent_ng_template_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "ROL");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ReportsComponent_ng_template_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Min Stock");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class ReportsComponent {
    constructor(fb, _snackBar, http) {
        this.fb = fb;
        this._snackBar = _snackBar;
        this.http = http;
        this.rows = [];
        // newUserImg = 'assets/images/user/user1.jpg';
        this.data = [];
        this.filteredData = [];
        this.columns = [
            { name: 'id' },
            { name: 'name' },
            { name: 'category' },
            { name: 'purchasecost' },
            { name: 'safestock' },
            { name: 'rol' },
            { name: 'minstock' },
            { name: 'productcode' },
            { name: 'livestock' },
        ];
        // Table 2
        this.tb2columns = [
            { name: 'id' },
            { name: 'name' },
            { name: 'category' },
            { name: 'purchasecost' },
            { name: 'safestock' },
            { name: 'rol' },
            { name: 'minstock' },
            { name: 'productcode' },
            { name: 'livestock' },
        ];
        this.tb2data = [];
        this.tb2filteredData = [];
        this.editForm = this.fb.group({
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            category: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            purchasecost: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            code: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            safestock: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            rol: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            minstock: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            productcode: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            livestock: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
        });
    }
    ngOnInit() {
        this.mainurl = localStorage.getItem('mainurl');
        this.fetch(data => {
            this.data = data;
            this.filteredData = data;
        });
        // Table 2
        this.tb2fetch(data => {
            this.tb2data = data;
            this.tb2filteredData = data;
        });
        this.register = this.fb.group({
            //
            name: [''],
            id: [''],
            category: [''],
            purchasecost: [''],
            safestock: [''],
            rol: [''],
            minstock: [''],
            productcode: [''],
            livestock: [''],
        });
    }
    fetch(cb) {
        const req = new XMLHttpRequest();
        req.open('GET', this.mainurl + 'productsafestock');
        req.onload = () => {
            const data = JSON.parse(req.response);
            cb(data);
        };
        req.send();
    }
    // Table 2
    tb2fetch(cb) {
        const req = new XMLHttpRequest();
        req.open('GET', 'assets/data/ngx-data.json');
        req.onload = () => {
            const data = JSON.parse(req.response);
            cb(data);
        };
        req.send();
    }
    // Table 2
    tb2filterDatatable(event) {
        // get the value of the key pressed and make it lowercase
        const val = event.target.value.toLowerCase();
        // get the amount of columns in the table
        const colsAmt = this.tb2columns.length;
        // get the key names of each column in the dataset
        const keys = Object.keys(this.tb2filteredData[0]);
        // assign filtered matches to the active datatable
        this.tb2data = this.tb2filteredData.filter(function (item) {
            // iterate through each row's column data
            for (let i = 0; i < colsAmt; i++) {
                // check for a match
                if (item[keys[i]]
                    .toString()
                    .toLowerCase()
                    .indexOf(val) !== -1 ||
                    !val) {
                    // found match, return true to add to result set
                    return true;
                }
            }
        });
        // whenever the filter changes, always go back to the first page
        this.table2.offset = 0;
    }
    editRow(row, rowIndex) {
        this.editForm.setValue({
            id: row.id,
            name: row.name,
            code: row.code,
        });
        this.selectedRowData = row;
    }
    addRow() {
        this.register.patchValue({
            // id: this.getId(10, 100),
            name: this.name,
            code: this.code
        });
    }
    deleteRow(row) {
        // this.data = this.arrayRemove(this.data, row.id);
        // this.showNotification(
        //   'bg-red',
        //   'Delete Record Successfully',
        //   'bottom',
        //   'right'
        // );
        this.data = this.arrayRemove(this.data, row.id);
        this.http.delete(this.mainurl + 'productsafestock/' + row.id).subscribe();
        this.showNotification('bg-red', 'Delete Record Successfully', 'bottom', 'right');
    }
    arrayRemove(array, id) {
        return array.filter(function (element) {
            return element.id != id;
        });
    }
    onEditSave(form) {
        // this.data = this.data.filter((value, key) => {
        //   if (value.id == form.value.id) {
        //     value.type = form.value.type;
        //   }
        //   this.closeEditModal.nativeElement.click();
        //   return true;
        // });
        this.data = this.data.filter((value, key) => {
            if (value.id == form.value.id) {
                value.code = form.value.code;
                value.name = form.value.name;
            }
            let empdata = {
                'code': form.value.code,
                'name': form.value.name,
            };
            this.http.put(this.mainurl + 'productsafestock/' + form.value.id, empdata).subscribe();
            this.closeEditModal.nativeElement.click();
            return true;
        });
        this.showNotification('bg-black', 'Edit Record Successfully', 'bottom', 'right');
    }
    onAddRowSave(form) {
        this.data.push(form.value);
        this.http.post(this.mainurl + 'productsafestock', form.value).subscribe();
        this.data = [...this.data];
        // console.log(this.data);
        form.reset();
        this.closeAddModal.nativeElement.click();
        this.showNotification('bg-green', 'Add Record Successfully', 'bottom', 'right');
    }
    filterDatatable(event) {
        // get the value of the key pressed and make it lowercase
        const val = event.target.value.toLowerCase();
        // get the amount of columns in the table
        const colsAmt = this.columns.length;
        // get the key names of each column in the dataset
        const keys = Object.keys(this.filteredData[0]);
        // assign filtered matches to the active datatable
        this.data = this.filteredData.filter(function (item) {
            // iterate through each row's column data
            for (let i = 0; i < colsAmt; i++) {
                // check for a match
                if (item[keys[i]]
                    .toString()
                    .toLowerCase()
                    .indexOf(val) !== -1 ||
                    !val) {
                    // found match, return true to add to result set
                    return true;
                }
            }
        });
        // whenever the filter changes, always go back to the first page
        this.table.offset = 0;
    }
    getId(min, max) {
        // min and max included
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    openSnackBar(message) {
        this._snackBar.open(message, '', {
            duration: 2000,
            verticalPosition: 'bottom',
            horizontalPosition: 'right',
            panelClass: ['bg-red']
        });
    }
    showNotification(colorName, text, placementFrom, placementAlign) {
        this._snackBar.open(text, '', {
            duration: 2000,
            verticalPosition: placementFrom,
            horizontalPosition: placementAlign,
            panelClass: colorName
        });
    }
}
ReportsComponent.ɵfac = function ReportsComponent_Factory(t) { return new (t || ReportsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
ReportsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ReportsComponent, selectors: [["app-reports"]], viewQuery: function ReportsComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstaticViewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__["DatatableComponent"], true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c1, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c2, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__["DatatableComponent"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.roleTemplate = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.table = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.closeAddModal = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.closeEditModal = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.table2 = _t.first);
    } }, decls: 38, vars: 15, consts: [[1, "content"], [1, "container-fluid"], [1, "row", "clearfix"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12"], [1, "card"], [1, "body"], [1, "row"], [1, "col-sm-12"], [1, "ngxTableHeader"], [1, "header-buttons-left", "ml-0"], [1, "dropdown"], [1, "dropdown", "m-l-20"], ["for", "search-input"], [1, "material-icons", "search-icon"], ["placeholder", "Search", "type", "text", "aria-label", "Search box", 1, "browser-default", "search-field", 3, "keyup"], [1, "header-buttons", "m-r-20"], [1, "icon-button-demo"], [1, "material", 3, "rows", "columns", "sortType", "columnMode", "headerHeight", "footerHeight", "rowHeight", "limit"], ["table", ""], ["name", "productid", 3, "width"], ["ngx-datatable-header-template", ""], ["name", "name", 3, "width"], ["name", "productcode", 3, "width"], ["name", "livestock", 3, "width"], ["name", "safestock", 3, "width"], ["name", "rol", 3, "width"], ["name", "minstock", 3, "width"]], template: function ReportsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "ul", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Channels");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "search");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keyup", function ReportsComponent_Template_input_keyup_18_listener($event) { return ctx.filterDatatable($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "ul", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "ngx-datatable", 17, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "ngx-datatable-column", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, ReportsComponent_ng_template_25_Template, 2, 0, "ng-template", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "ngx-datatable-column", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](27, ReportsComponent_ng_template_27_Template, 2, 0, "ng-template", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "ngx-datatable-column", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](29, ReportsComponent_ng_template_29_Template, 2, 0, "ng-template", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "ngx-datatable-column", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](31, ReportsComponent_ng_template_31_Template, 2, 0, "ng-template", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "ngx-datatable-column", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](33, ReportsComponent_ng_template_33_Template, 2, 0, "ng-template", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "ngx-datatable-column", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](35, ReportsComponent_ng_template_35_Template, 2, 0, "ng-template", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "ngx-datatable-column", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](37, ReportsComponent_ng_template_37_Template, 2, 0, "ng-template", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("rows", ctx.data)("columns", ctx.columns)("sortType", "multi")("columnMode", "force")("headerHeight", 50)("footerHeight", 50)("rowHeight", "60")("limit", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("width", 130);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("width", 180);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("width", 130);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("width", 130);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("width", 130);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("width", 130);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("width", 130);
    } }, directives: [_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__["DatatableComponent"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__["DataTableColumnDirective"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__["DataTableColumnHeaderDirective"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0b3JlbWFuYWdlbWVudC9yZXBvcnRzL3JlcG9ydHMuY29tcG9uZW50LnNhc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ReportsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-reports',
                templateUrl: './reports.component.html',
                styleUrls: ['./reports.component.sass']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }]; }, { roleTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['roleTemplate', { static: true }]
        }], table: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: [_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__["DatatableComponent"], { static: false }]
        }], closeAddModal: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['closeAddModal', { static: false }]
        }], closeEditModal: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['closeEditModal', { static: false }]
        }], table2: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: [_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__["DatatableComponent"], { static: false }]
        }] }); })();


/***/ }),

/***/ "Dhk/":
/*!***********************************************************!*\
  !*** ./src/app/storemanagement/storemanagement.module.ts ***!
  \***********************************************************/
/*! exports provided: StoremanagementModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoremanagementModule", function() { return StoremanagementModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _storemng_storemng_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./storemng/storemng.component */ "IyYx");
/* harmony import */ var _storeboard_storeboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./storeboard/storeboard.component */ "kuYk");
/* harmony import */ var _storemng_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./storemng-routing.module */ "28Q2");
/* harmony import */ var _findmatireals_findmatireals_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./findmatireals/findmatireals.component */ "k2Xd");
/* harmony import */ var _fullcalendar_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fullcalendar/angular */ "IvIE");
/* harmony import */ var ng_apexcharts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-apexcharts */ "CV0D");
/* harmony import */ var ngx_echarts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-echarts */ "DKVz");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "Kdsb");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-select/ng-select */ "ZOsW");
/* harmony import */ var ngx_mat_select_search__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-mat-select-search */ "WJ5W");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng2-charts */ "LPYB");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/autocomplete */ "/1cH");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/badge */ "TU8p");
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/bottom-sheet */ "2ChS");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/button-toggle */ "jaxi");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/chips */ "A5z7");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/grid-list */ "zkoq");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/progress-bar */ "bv9b");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/material/radio */ "QibW");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/material/slide-toggle */ "1jcm");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @angular/material/slider */ "5RNC");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @angular/material/stepper */ "xHqg");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! @angular/material/tree */ "8yBR");
/* harmony import */ var _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! @ckeditor/ckeditor5-angular */ "zioG");
/* harmony import */ var angular_archwizard__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! angular-archwizard */ "mkVx");
/* harmony import */ var ngx_color_picker__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ngx-color-picker */ "R9Cn");
/* harmony import */ var ngx_custom_validators__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ngx-custom-validators */ "uxn7");
/* harmony import */ var ngx_dropzone_wrapper__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ngx-dropzone-wrapper */ "vV3i");
/* harmony import */ var ngx_mask__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ngx-mask */ "tmjD");
/* harmony import */ var ngx_material_file_input__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ngx-material-file-input */ "7ZcW");
/* harmony import */ var _forms_forms_routing_module__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ../forms/forms-routing.module */ "a03z");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "lDzL");
/* harmony import */ var _configs_configs_routing_module__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ../configs/configs.routing.module */ "KQtg");
/* harmony import */ var _requestdeatials_requestdeatials_component__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! ./requestdeatials/requestdeatials.component */ "ebnW");
/* harmony import */ var _requestakg_requestakg_component__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! ./requestakg/requestakg.component */ "Bray");
/* harmony import */ var _excelservice_service__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! ./excelservice.service */ "kVBW");
/* harmony import */ var _citrix_citrix_component__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! ./citrix/citrix.component */ "nALV");
/* harmony import */ var _othersreq_othersreq_component__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! ./othersreq/othersreq.component */ "ge8t");
/* harmony import */ var _reports_reports_component__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! ./reports/reports.component */ "C91Q");
/* harmony import */ var _stockupdate_stockupdate_component__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(/*! ./stockupdate/stockupdate.component */ "Q53a");
/* harmony import */ var ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(/*! ng-multiselect-dropdown */ "Egam");
/* harmony import */ var _ctrl_ngx_csv__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(/*! @ctrl/ngx-csv */ "Fjbs");
/* harmony import */ var angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(/*! angular-ng-autocomplete */ "bH2/");
/* harmony import */ var _roltable_roltable_component__WEBPACK_IMPORTED_MODULE_69__ = __webpack_require__(/*! ./roltable/roltable.component */ "hu2w");
/* harmony import */ var _livetable_livetable_component__WEBPACK_IMPORTED_MODULE_70__ = __webpack_require__(/*! ./livetable/livetable.component */ "A/sl");
/* harmony import */ var _safetable_safetable_component__WEBPACK_IMPORTED_MODULE_71__ = __webpack_require__(/*! ./safetable/safetable.component */ "L7g7");
/* harmony import */ var _itemtsn_itemtsn_component__WEBPACK_IMPORTED_MODULE_72__ = __webpack_require__(/*! ./itemtsn/itemtsn.component */ "8Bo9");
/* harmony import */ var angular2_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_73__ = __webpack_require__(/*! angular2-multiselect-dropdown */ "e/mZ");
/* harmony import */ var _itemtsn_my_date_formats__WEBPACK_IMPORTED_MODULE_74__ = __webpack_require__(/*! ./itemtsn/my-date-formats */ "qHo5");














































































class StoremanagementModule {
}
StoremanagementModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: StoremanagementModule });
StoremanagementModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function StoremanagementModule_Factory(t) { return new (t || StoremanagementModule)(); }, providers: [_excelservice_service__WEBPACK_IMPORTED_MODULE_61__["ExcelService"], { provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_22__["MAT_DATE_FORMATS"], useValue: _itemtsn_my_date_formats__WEBPACK_IMPORTED_MODULE_74__["MY_DATE_FORMATS"] }], imports: [[
            ngx_mat_select_search__WEBPACK_IMPORTED_MODULE_11__["NgxMatSelectSearchModule"],
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_10__["NgSelectModule"],
            angular2_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_73__["AngularMultiSelectModule"],
            _ctrl_ngx_csv__WEBPACK_IMPORTED_MODULE_67__["CsvModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _storemng_routing_module__WEBPACK_IMPORTED_MODULE_4__["storemngRoutingModule"],
            angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_68__["AutocompleteLibModule"],
            ng2_charts__WEBPACK_IMPORTED_MODULE_12__["ChartsModule"],
            ngx_echarts__WEBPACK_IMPORTED_MODULE_8__["NgxEchartsModule"],
            _fullcalendar_angular__WEBPACK_IMPORTED_MODULE_6__["FullCalendarModule"],
            ng_apexcharts__WEBPACK_IMPORTED_MODULE_7__["NgApexchartsModule"],
            ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_9__["PerfectScrollbarModule"],
            _forms_forms_routing_module__WEBPACK_IMPORTED_MODULE_56__["FormsRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"],
            angular_archwizard__WEBPACK_IMPORTED_MODULE_50__["ArchwizardModule"],
            ngx_dropzone_wrapper__WEBPACK_IMPORTED_MODULE_53__["DropzoneModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ReactiveFormsModule"].withConfig({ warnOnNgModelWithFormControl: 'never' }),
            _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_49__["CKEditorModule"],
            ngx_custom_validators__WEBPACK_IMPORTED_MODULE_52__["CustomFormsModule"],
            _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_14__["MatAutocompleteModule"],
            _angular_material_badge__WEBPACK_IMPORTED_MODULE_15__["MatBadgeModule"],
            _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_16__["MatBottomSheetModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_17__["MatButtonModule"],
            _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_18__["MatButtonToggleModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_19__["MatCardModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_20__["MatCheckboxModule"],
            _angular_material_chips__WEBPACK_IMPORTED_MODULE_21__["MatChipsModule"],
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_23__["MatDatepickerModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_24__["MatDialogModule"],
            _angular_material_divider__WEBPACK_IMPORTED_MODULE_25__["MatDividerModule"],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_26__["MatExpansionModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_27__["MatFormFieldModule"],
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_28__["MatGridListModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_29__["MatIconModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_30__["MatInputModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_31__["MatListModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_32__["MatMenuModule"],
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_33__["MatPaginatorModule"],
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_34__["MatProgressBarModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_35__["MatProgressSpinnerModule"],
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_36__["MatRadioModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_22__["MatRippleModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_37__["MatSelectModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_38__["MatSidenavModule"],
            _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_39__["MatSlideToggleModule"],
            _angular_material_slider__WEBPACK_IMPORTED_MODULE_40__["MatSliderModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_41__["MatSnackBarModule"],
            _angular_material_sort__WEBPACK_IMPORTED_MODULE_42__["MatSortModule"],
            _angular_material_stepper__WEBPACK_IMPORTED_MODULE_43__["MatStepperModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_44__["MatTableModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_45__["MatTabsModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_46__["MatToolbarModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_47__["MatTooltipModule"],
            _angular_material_tree__WEBPACK_IMPORTED_MODULE_48__["MatTreeModule"],
            ngx_mask__WEBPACK_IMPORTED_MODULE_54__["NgxMaskModule"],
            ngx_color_picker__WEBPACK_IMPORTED_MODULE_51__["ColorPickerModule"],
            ngx_material_file_input__WEBPACK_IMPORTED_MODULE_55__["MaterialFileInputModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ReactiveFormsModule"],
            _configs_configs_routing_module__WEBPACK_IMPORTED_MODULE_58__["configsRoutingModule"],
            _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_57__["NgxDatatableModule"],
            ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_66__["NgMultiSelectDropDownModule"].forRoot(),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](StoremanagementModule, { declarations: [_storemng_storemng_component__WEBPACK_IMPORTED_MODULE_2__["StoremngComponent"], _storeboard_storeboard_component__WEBPACK_IMPORTED_MODULE_3__["StoreboardComponent"], _findmatireals_findmatireals_component__WEBPACK_IMPORTED_MODULE_5__["FindmatirealsComponent"], _requestdeatials_requestdeatials_component__WEBPACK_IMPORTED_MODULE_59__["RequestdeatialsComponent"], _requestakg_requestakg_component__WEBPACK_IMPORTED_MODULE_60__["RequestakgComponent"], _citrix_citrix_component__WEBPACK_IMPORTED_MODULE_62__["CITRIXComponent"], _othersreq_othersreq_component__WEBPACK_IMPORTED_MODULE_63__["OthersreqComponent"], _reports_reports_component__WEBPACK_IMPORTED_MODULE_64__["ReportsComponent"], _stockupdate_stockupdate_component__WEBPACK_IMPORTED_MODULE_65__["StockupdateComponent"], _roltable_roltable_component__WEBPACK_IMPORTED_MODULE_69__["RoltableComponent"], _livetable_livetable_component__WEBPACK_IMPORTED_MODULE_70__["LivetableComponent"], _safetable_safetable_component__WEBPACK_IMPORTED_MODULE_71__["SafetableComponent"], _itemtsn_itemtsn_component__WEBPACK_IMPORTED_MODULE_72__["ItemtsnComponent"]], imports: [ngx_mat_select_search__WEBPACK_IMPORTED_MODULE_11__["NgxMatSelectSearchModule"],
        _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_10__["NgSelectModule"],
        angular2_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_73__["AngularMultiSelectModule"],
        _ctrl_ngx_csv__WEBPACK_IMPORTED_MODULE_67__["CsvModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _storemng_routing_module__WEBPACK_IMPORTED_MODULE_4__["storemngRoutingModule"],
        angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_68__["AutocompleteLibModule"],
        ng2_charts__WEBPACK_IMPORTED_MODULE_12__["ChartsModule"],
        ngx_echarts__WEBPACK_IMPORTED_MODULE_8__["NgxEchartsModule"],
        _fullcalendar_angular__WEBPACK_IMPORTED_MODULE_6__["FullCalendarModule"],
        ng_apexcharts__WEBPACK_IMPORTED_MODULE_7__["NgApexchartsModule"],
        ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_9__["PerfectScrollbarModule"],
        _forms_forms_routing_module__WEBPACK_IMPORTED_MODULE_56__["FormsRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"],
        angular_archwizard__WEBPACK_IMPORTED_MODULE_50__["ArchwizardModule"],
        ngx_dropzone_wrapper__WEBPACK_IMPORTED_MODULE_53__["DropzoneModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ReactiveFormsModule"], _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_49__["CKEditorModule"],
        ngx_custom_validators__WEBPACK_IMPORTED_MODULE_52__["CustomFormsModule"],
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_14__["MatAutocompleteModule"],
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_15__["MatBadgeModule"],
        _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_16__["MatBottomSheetModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_17__["MatButtonModule"],
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_18__["MatButtonToggleModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_19__["MatCardModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_20__["MatCheckboxModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_21__["MatChipsModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_23__["MatDatepickerModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_24__["MatDialogModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_25__["MatDividerModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_26__["MatExpansionModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_27__["MatFormFieldModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_28__["MatGridListModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_29__["MatIconModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_30__["MatInputModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_31__["MatListModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_32__["MatMenuModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_33__["MatPaginatorModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_34__["MatProgressBarModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_35__["MatProgressSpinnerModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_36__["MatRadioModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_22__["MatRippleModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_37__["MatSelectModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_38__["MatSidenavModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_39__["MatSlideToggleModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_40__["MatSliderModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_41__["MatSnackBarModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_42__["MatSortModule"],
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_43__["MatStepperModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_44__["MatTableModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_45__["MatTabsModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_46__["MatToolbarModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_47__["MatTooltipModule"],
        _angular_material_tree__WEBPACK_IMPORTED_MODULE_48__["MatTreeModule"],
        ngx_mask__WEBPACK_IMPORTED_MODULE_54__["NgxMaskModule"],
        ngx_color_picker__WEBPACK_IMPORTED_MODULE_51__["ColorPickerModule"],
        ngx_material_file_input__WEBPACK_IMPORTED_MODULE_55__["MaterialFileInputModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ReactiveFormsModule"],
        _configs_configs_routing_module__WEBPACK_IMPORTED_MODULE_58__["configsRoutingModule"],
        _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_57__["NgxDatatableModule"], ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_66__["NgMultiSelectDropDownModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StoremanagementModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_storemng_storemng_component__WEBPACK_IMPORTED_MODULE_2__["StoremngComponent"], _storeboard_storeboard_component__WEBPACK_IMPORTED_MODULE_3__["StoreboardComponent"], _findmatireals_findmatireals_component__WEBPACK_IMPORTED_MODULE_5__["FindmatirealsComponent"], _requestdeatials_requestdeatials_component__WEBPACK_IMPORTED_MODULE_59__["RequestdeatialsComponent"], _requestakg_requestakg_component__WEBPACK_IMPORTED_MODULE_60__["RequestakgComponent"], _citrix_citrix_component__WEBPACK_IMPORTED_MODULE_62__["CITRIXComponent"], _othersreq_othersreq_component__WEBPACK_IMPORTED_MODULE_63__["OthersreqComponent"], _reports_reports_component__WEBPACK_IMPORTED_MODULE_64__["ReportsComponent"], _stockupdate_stockupdate_component__WEBPACK_IMPORTED_MODULE_65__["StockupdateComponent"], _roltable_roltable_component__WEBPACK_IMPORTED_MODULE_69__["RoltableComponent"], _livetable_livetable_component__WEBPACK_IMPORTED_MODULE_70__["LivetableComponent"], _safetable_safetable_component__WEBPACK_IMPORTED_MODULE_71__["SafetableComponent"], _itemtsn_itemtsn_component__WEBPACK_IMPORTED_MODULE_72__["ItemtsnComponent"]],
                imports: [
                    ngx_mat_select_search__WEBPACK_IMPORTED_MODULE_11__["NgxMatSelectSearchModule"],
                    _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_10__["NgSelectModule"],
                    angular2_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_73__["AngularMultiSelectModule"],
                    _ctrl_ngx_csv__WEBPACK_IMPORTED_MODULE_67__["CsvModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _storemng_routing_module__WEBPACK_IMPORTED_MODULE_4__["storemngRoutingModule"],
                    angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_68__["AutocompleteLibModule"],
                    ng2_charts__WEBPACK_IMPORTED_MODULE_12__["ChartsModule"],
                    ngx_echarts__WEBPACK_IMPORTED_MODULE_8__["NgxEchartsModule"],
                    _fullcalendar_angular__WEBPACK_IMPORTED_MODULE_6__["FullCalendarModule"],
                    ng_apexcharts__WEBPACK_IMPORTED_MODULE_7__["NgApexchartsModule"],
                    ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_9__["PerfectScrollbarModule"],
                    _forms_forms_routing_module__WEBPACK_IMPORTED_MODULE_56__["FormsRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"],
                    angular_archwizard__WEBPACK_IMPORTED_MODULE_50__["ArchwizardModule"],
                    ngx_dropzone_wrapper__WEBPACK_IMPORTED_MODULE_53__["DropzoneModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ReactiveFormsModule"].withConfig({ warnOnNgModelWithFormControl: 'never' }),
                    _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_49__["CKEditorModule"],
                    ngx_custom_validators__WEBPACK_IMPORTED_MODULE_52__["CustomFormsModule"],
                    _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_14__["MatAutocompleteModule"],
                    _angular_material_badge__WEBPACK_IMPORTED_MODULE_15__["MatBadgeModule"],
                    _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_16__["MatBottomSheetModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_17__["MatButtonModule"],
                    _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_18__["MatButtonToggleModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_19__["MatCardModule"],
                    _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_20__["MatCheckboxModule"],
                    _angular_material_chips__WEBPACK_IMPORTED_MODULE_21__["MatChipsModule"],
                    _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_23__["MatDatepickerModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_24__["MatDialogModule"],
                    _angular_material_divider__WEBPACK_IMPORTED_MODULE_25__["MatDividerModule"],
                    _angular_material_expansion__WEBPACK_IMPORTED_MODULE_26__["MatExpansionModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_27__["MatFormFieldModule"],
                    _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_28__["MatGridListModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_29__["MatIconModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_30__["MatInputModule"],
                    _angular_material_list__WEBPACK_IMPORTED_MODULE_31__["MatListModule"],
                    _angular_material_menu__WEBPACK_IMPORTED_MODULE_32__["MatMenuModule"],
                    _angular_material_paginator__WEBPACK_IMPORTED_MODULE_33__["MatPaginatorModule"],
                    _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_34__["MatProgressBarModule"],
                    _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_35__["MatProgressSpinnerModule"],
                    _angular_material_radio__WEBPACK_IMPORTED_MODULE_36__["MatRadioModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_22__["MatRippleModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_37__["MatSelectModule"],
                    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_38__["MatSidenavModule"],
                    _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_39__["MatSlideToggleModule"],
                    _angular_material_slider__WEBPACK_IMPORTED_MODULE_40__["MatSliderModule"],
                    _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_41__["MatSnackBarModule"],
                    _angular_material_sort__WEBPACK_IMPORTED_MODULE_42__["MatSortModule"],
                    _angular_material_stepper__WEBPACK_IMPORTED_MODULE_43__["MatStepperModule"],
                    _angular_material_table__WEBPACK_IMPORTED_MODULE_44__["MatTableModule"],
                    _angular_material_tabs__WEBPACK_IMPORTED_MODULE_45__["MatTabsModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_46__["MatToolbarModule"],
                    _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_47__["MatTooltipModule"],
                    _angular_material_tree__WEBPACK_IMPORTED_MODULE_48__["MatTreeModule"],
                    ngx_mask__WEBPACK_IMPORTED_MODULE_54__["NgxMaskModule"],
                    ngx_color_picker__WEBPACK_IMPORTED_MODULE_51__["ColorPickerModule"],
                    ngx_material_file_input__WEBPACK_IMPORTED_MODULE_55__["MaterialFileInputModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ReactiveFormsModule"],
                    _configs_configs_routing_module__WEBPACK_IMPORTED_MODULE_58__["configsRoutingModule"],
                    _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_57__["NgxDatatableModule"],
                    ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_66__["NgMultiSelectDropDownModule"].forRoot(),
                ],
                providers: [_excelservice_service__WEBPACK_IMPORTED_MODULE_61__["ExcelService"], { provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_22__["MAT_DATE_FORMATS"], useValue: _itemtsn_my_date_formats__WEBPACK_IMPORTED_MODULE_74__["MY_DATE_FORMATS"] }],
            }]
    }], null, null); })();


/***/ }),

/***/ "Egam":
/*!***********************************************************************************************!*\
  !*** ./node_modules/ng-multiselect-dropdown/__ivy_ngcc__/fesm2015/ng-multiselect-dropdown.js ***!
  \***********************************************************************************************/
/*! exports provided: MultiSelectComponent, NgMultiSelectDropDownModule, ɵa, ɵb, ɵc */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MultiSelectComponent", function() { return MultiSelectComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgMultiSelectDropDownModule", function() { return NgMultiSelectDropDownModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return DROPDOWN_CONTROL_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return ListFilterPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵc", function() { return ClickOutsideDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "Dhon");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");









function MultiSelectComponent_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0._placeholder);
} }
function MultiSelectComponent_span_4_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MultiSelectComponent_span_4_Template_a_click_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10); const item_r7 = ctx.$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r9.onItemClick($event, item_r7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "x");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r7 = ctx.$implicit;
    const k_r8 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", k_r8 > ctx_r1._settings.itemsShowLimit - 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", item_r7.text, " ");
} }
function MultiSelectComponent_span_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("+", ctx_r2.itemShowRemaining(), "");
} }
function MultiSelectComponent_li_10_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MultiSelectComponent_li_10_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r11.toggleSelectAll(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("checked", ctx_r3.isAllItemsSelected())("disabled", ctx_r3.disabled || ctx_r3.isLimitSelectionReached());
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](!ctx_r3.isAllItemsSelected() ? ctx_r3._settings.selectAllText : ctx_r3._settings.unSelectAllText);
} }
function MultiSelectComponent_li_11_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "input", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function MultiSelectComponent_li_11_Template_input_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r13.filter.text = $event; })("ngModelChange", function MultiSelectComponent_li_11_Template_input_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r14); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r15.onFilterTextChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("readOnly", ctx_r4.disabled)("placeholder", ctx_r4._settings.searchPlaceholderText)("ngModel", ctx_r4.filter.text);
} }
function MultiSelectComponent_li_13_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MultiSelectComponent_li_13_Template_li_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r19); const item_r16 = ctx.$implicit; const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r18.onItemClick($event, item_r16); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "input", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r16 = ctx.$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("checked", ctx_r5.isSelected(item_r16))("disabled", ctx_r5.disabled || ctx_r5.isLimitSelectionReached() && !ctx_r5.isSelected(item_r16) || item_r16.isDisabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-label", item_r16.text);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r16.text);
} }
function MultiSelectComponent_li_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r6._settings.noDataAvailablePlaceholderText);
} }
const _c0 = function (a0) { return { "dropdown-multiselect--active": a0 }; };
class ListItem {
    constructor(source) {
        if (typeof source === 'string' || typeof source === 'number') {
            this.id = this.text = source;
            this.isDisabled = false;
        }
        if (typeof source === 'object') {
            this.id = source.id;
            this.text = source.text;
            this.isDisabled = source.isDisabled;
        }
    }
}

let ListFilterPipe = class ListFilterPipe {
    transform(items, filter) {
        if (!items || !filter) {
            return items;
        }
        return items.filter((item) => this.applyFilter(item, filter));
    }
    applyFilter(item, filter) {
        if (typeof item.text === 'string' && typeof filter.text === 'string') {
            return !(filter.text && item.text && item.text.toLowerCase().indexOf(filter.text.toLowerCase()) === -1);
        }
        else {
            return !(filter.text && item.text && item.text.toString().toLowerCase().indexOf(filter.text.toString().toLowerCase()) === -1);
        }
    }
};
ListFilterPipe.ɵfac = function ListFilterPipe_Factory(t) { return new (t || ListFilterPipe)(); };
ListFilterPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({ name: "multiSelectFilter", type: ListFilterPipe, pure: false });

const DROPDOWN_CONTROL_VALUE_ACCESSOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(() => MultiSelectComponent),
    multi: true
};
const noop = () => { };
const ɵ0 = noop;
let MultiSelectComponent = class MultiSelectComponent {
    constructor(listFilterPipe) {
        this.listFilterPipe = listFilterPipe;
        this._data = [];
        this.selectedItems = [];
        this.isDropdownOpen = true;
        this._placeholder = "Select";
        this._sourceDataType = null; // to keep note of the source data type. could be array of string/number/object
        this._sourceDataFields = []; // store source data fields names
        this.filter = new ListItem(this.data);
        this.defaultSettings = {
            singleSelection: false,
            idField: "id",
            textField: "text",
            disabledField: "isDisabled",
            enableCheckAll: true,
            selectAllText: "Select All",
            unSelectAllText: "UnSelect All",
            allowSearchFilter: false,
            limitSelection: -1,
            clearSearchFilter: true,
            maxHeight: 197,
            itemsShowLimit: 999999999999,
            searchPlaceholderText: "Search",
            noDataAvailablePlaceholderText: "No data available",
            closeDropDownOnSelection: false,
            showSelectedItemsAtTop: false,
            defaultOpen: false,
            allowRemoteDataSearch: false
        };
        this.disabled = false;
        this.onFilterChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onDropDownClose = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onDeSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onSelectAll = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onDeSelectAll = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onTouchedCallback = noop;
        this.onChangeCallback = noop;
    }
    set placeholder(value) {
        if (value) {
            this._placeholder = value;
        }
        else {
            this._placeholder = "Select";
        }
    }
    set settings(value) {
        if (value) {
            this._settings = Object.assign(this.defaultSettings, value);
        }
        else {
            this._settings = Object.assign(this.defaultSettings);
        }
    }
    set data(value) {
        if (!value) {
            this._data = [];
        }
        else {
            const firstItem = value[0];
            this._sourceDataType = typeof firstItem;
            this._sourceDataFields = this.getFields(firstItem);
            this._data = value.map((item) => typeof item === "string" || typeof item === "number"
                ? new ListItem(item)
                : new ListItem({
                    id: item[this._settings.idField],
                    text: item[this._settings.textField],
                    isDisabled: item[this._settings.disabledField]
                }));
        }
    }
    onFilterTextChange($event) {
        this.onFilterChange.emit($event);
    }
    onItemClick($event, item) {
        if (this.disabled || item.isDisabled) {
            return false;
        }
        const found = this.isSelected(item);
        const allowAdd = this._settings.limitSelection === -1 || (this._settings.limitSelection > 0 && this.selectedItems.length < this._settings.limitSelection);
        if (!found) {
            if (allowAdd) {
                this.addSelected(item);
            }
        }
        else {
            this.removeSelected(item);
        }
        if (this._settings.singleSelection && this._settings.closeDropDownOnSelection) {
            this.closeDropdown();
        }
    }
    writeValue(value) {
        if (value !== undefined && value !== null && value.length > 0) {
            if (this._settings.singleSelection) {
                try {
                    if (value.length >= 1) {
                        const firstItem = value[0];
                        this.selectedItems = [
                            typeof firstItem === "string" || typeof firstItem === "number"
                                ? new ListItem(firstItem)
                                : new ListItem({
                                    id: firstItem[this._settings.idField],
                                    text: firstItem[this._settings.textField],
                                    isDisabled: firstItem[this._settings.disabledField]
                                })
                        ];
                    }
                }
                catch (e) {
                    // console.error(e.body.msg);
                }
            }
            else {
                const _data = value.map((item) => typeof item === "string" || typeof item === "number"
                    ? new ListItem(item)
                    : new ListItem({
                        id: item[this._settings.idField],
                        text: item[this._settings.textField],
                        isDisabled: item[this._settings.disabledField]
                    }));
                if (this._settings.limitSelection > 0) {
                    this.selectedItems = _data.splice(0, this._settings.limitSelection);
                }
                else {
                    this.selectedItems = _data;
                }
            }
        }
        else {
            this.selectedItems = [];
        }
        this.onChangeCallback(value);
    }
    // From ControlValueAccessor interface
    registerOnChange(fn) {
        this.onChangeCallback = fn;
    }
    // From ControlValueAccessor interface
    registerOnTouched(fn) {
        this.onTouchedCallback = fn;
    }
    // Set touched on blur
    onTouched() {
        this.closeDropdown();
        this.onTouchedCallback();
    }
    trackByFn(index, item) {
        return item.id;
    }
    isSelected(clickedItem) {
        let found = false;
        this.selectedItems.forEach(item => {
            if (clickedItem.id === item.id) {
                found = true;
            }
        });
        return found;
    }
    isLimitSelectionReached() {
        return this._settings.limitSelection === this.selectedItems.length;
    }
    isAllItemsSelected() {
        // get disabld item count
        let filteredItems = this.listFilterPipe.transform(this._data, this.filter);
        const itemDisabledCount = filteredItems.filter(item => item.isDisabled).length;
        // take disabled items into consideration when checking
        if ((!this.data || this.data.length === 0) && this._settings.allowRemoteDataSearch) {
            return false;
        }
        return filteredItems.length === this.selectedItems.length + itemDisabledCount;
    }
    showButton() {
        if (!this._settings.singleSelection) {
            if (this._settings.limitSelection > 0) {
                return false;
            }
            // this._settings.enableCheckAll = this._settings.limitSelection === -1 ? true : false;
            return true; // !this._settings.singleSelection && this._settings.enableCheckAll && this._data.length > 0;
        }
        else {
            // should be disabled in single selection mode
            return false;
        }
    }
    itemShowRemaining() {
        return this.selectedItems.length - this._settings.itemsShowLimit;
    }
    addSelected(item) {
        if (this._settings.singleSelection) {
            this.selectedItems = [];
            this.selectedItems.push(item);
        }
        else {
            this.selectedItems.push(item);
        }
        this.onChangeCallback(this.emittedValue(this.selectedItems));
        this.onSelect.emit(this.emittedValue(item));
    }
    removeSelected(itemSel) {
        this.selectedItems.forEach(item => {
            if (itemSel.id === item.id) {
                this.selectedItems.splice(this.selectedItems.indexOf(item), 1);
            }
        });
        this.onChangeCallback(this.emittedValue(this.selectedItems));
        this.onDeSelect.emit(this.emittedValue(itemSel));
    }
    emittedValue(val) {
        const selected = [];
        if (Array.isArray(val)) {
            val.map(item => {
                selected.push(this.objectify(item));
            });
        }
        else {
            if (val) {
                return this.objectify(val);
            }
        }
        return selected;
    }
    objectify(val) {
        if (this._sourceDataType === 'object') {
            const obj = {};
            obj[this._settings.idField] = val.id;
            obj[this._settings.textField] = val.text;
            if (this._sourceDataFields.includes(this._settings.disabledField)) {
                obj[this._settings.disabledField] = val.isDisabled;
            }
            return obj;
        }
        if (this._sourceDataType === 'number') {
            return Number(val.id);
        }
        else {
            return val.text;
        }
    }
    toggleDropdown(evt) {
        evt.preventDefault();
        if (this.disabled && this._settings.singleSelection) {
            return;
        }
        this._settings.defaultOpen = !this._settings.defaultOpen;
        if (!this._settings.defaultOpen) {
            this.onDropDownClose.emit();
        }
    }
    closeDropdown() {
        this._settings.defaultOpen = false;
        // clear search text
        if (this._settings.clearSearchFilter) {
            this.filter.text = "";
        }
        this.onDropDownClose.emit();
    }
    toggleSelectAll() {
        if (this.disabled) {
            return false;
        }
        if (!this.isAllItemsSelected()) {
            // filter out disabled item first before slicing
            this.selectedItems = this.listFilterPipe.transform(this._data, this.filter).filter(item => !item.isDisabled).slice();
            this.onSelectAll.emit(this.emittedValue(this.selectedItems));
        }
        else {
            this.selectedItems = [];
            this.onDeSelectAll.emit(this.emittedValue(this.selectedItems));
        }
        this.onChangeCallback(this.emittedValue(this.selectedItems));
    }
    getFields(inputData) {
        const fields = [];
        if (typeof inputData !== "object") {
            return fields;
        }
        // tslint:disable-next-line:forin
        for (const prop in inputData) {
            fields.push(prop);
        }
        return fields;
    }
};
MultiSelectComponent.ɵfac = function MultiSelectComponent_Factory(t) { return new (t || MultiSelectComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ListFilterPipe)); };
MultiSelectComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: MultiSelectComponent, selectors: [["ng-multiselect-dropdown"]], hostBindings: function MultiSelectComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("blur", function MultiSelectComponent_blur_HostBindingHandler() { return ctx.onTouched(); });
    } }, inputs: { disabled: "disabled", placeholder: "placeholder", settings: "settings", data: "data" }, outputs: { onFilterChange: "onFilterChange", onDropDownClose: "onDropDownClose", onSelect: "onSelect", onDeSelect: "onDeSelect", onSelectAll: "onSelectAll", onDeSelectAll: "onDeSelectAll" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([DROPDOWN_CONTROL_VALUE_ACCESSOR])], decls: 16, vars: 19, consts: [["tabindex", "0", 1, "multiselect-dropdown", 3, "blur", "clickOutside"], ["tabindex", "-1", 1, "dropdown-btn", 3, "click"], [4, "ngIf"], ["class", "selected-item", 3, "hidden", 4, "ngFor", "ngForOf", "ngForTrackBy"], [2, "float", "right !important", "padding-right", "4px", 3, "ngClass"], ["style", "padding-right: 6px;", 4, "ngIf"], [1, "dropdown-multiselect__caret"], [1, "dropdown-list", 3, "hidden"], [1, "item1"], ["class", "multiselect-item-checkbox", "style", "border-bottom: 1px solid #ccc;padding:10px", 3, "click", 4, "ngIf"], ["class", "filter-textbox", 4, "ngIf"], [1, "item2"], ["class", "multiselect-item-checkbox", 3, "click", 4, "ngFor", "ngForOf"], ["class", "no-data", 4, "ngIf"], [1, "selected-item", 3, "hidden"], [2, "padding-top", "2px", "padding-left", "2px", "color", "white", 3, "click"], [2, "padding-right", "6px"], [1, "multiselect-item-checkbox", 2, "border-bottom", "1px solid #ccc", "padding", "10px", 3, "click"], ["type", "checkbox", "aria-label", "multiselect-select-all", 3, "checked", "disabled"], [1, "filter-textbox"], ["type", "text", "aria-label", "multiselect-search", 3, "readOnly", "placeholder", "ngModel", "ngModelChange"], [1, "multiselect-item-checkbox", 3, "click"], ["type", "checkbox", 3, "checked", "disabled"], [1, "no-data"]], template: function MultiSelectComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("blur", function MultiSelectComponent_Template_div_blur_0_listener() { return ctx.onTouched(); })("clickOutside", function MultiSelectComponent_Template_div_clickOutside_0_listener() { return ctx.closeDropdown(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MultiSelectComponent_Template_span_click_2_listener($event) { return ctx.toggleDropdown($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, MultiSelectComponent_span_3_Template, 2, 1, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, MultiSelectComponent_span_4_Template, 4, 2, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, MultiSelectComponent_span_6_Template, 2, 1, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "ul", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, MultiSelectComponent_li_10_Template, 4, 3, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, MultiSelectComponent_li_11_Template, 2, 3, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "ul", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, MultiSelectComponent_li_13_Template, 4, 4, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](14, "multiSelectFilter");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, MultiSelectComponent_li_15_Template, 3, 1, "li", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("disabled", ctx.disabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.selectedItems.length == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.selectedItems)("ngForTrackBy", ctx.trackByFn);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](17, _c0, ctx._settings.defaultOpen));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.itemShowRemaining() > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", !ctx._settings.defaultOpen);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx._data.length > 0 || ctx._settings.allowRemoteDataSearch) && !ctx._settings.singleSelection && ctx._settings.enableCheckAll && ctx._settings.limitSelection === -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx._data.length > 0 || ctx._settings.allowRemoteDataSearch) && ctx._settings.allowSearchFilter);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("max-height", ctx._settings.maxHeight + "px");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](14, 14, ctx._data, ctx.filter));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx._data.length == 0 && !ctx._settings.allowRemoteDataSearch);
    } }, directives: function () { return [ClickOutsideDirective, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]]; }, pipes: function () { return [ListFilterPipe]; }, styles: [".multiselect-dropdown[_ngcontent-%COMP%]{position:relative;width:100%;font-size:inherit;font-family:inherit}.multiselect-dropdown[_ngcontent-%COMP%]   .dropdown-btn[_ngcontent-%COMP%]{display:inline-block;border:1px solid #adadad;width:100%;padding:6px 12px;margin-bottom:0;font-weight:400;line-height:1.52857143;text-align:left;vertical-align:middle;cursor:pointer;background-image:none;border-radius:4px}.multiselect-dropdown[_ngcontent-%COMP%]   .dropdown-btn[_ngcontent-%COMP%]   .selected-item[_ngcontent-%COMP%]{border:1px solid #337ab7;margin-right:4px;background:#337ab7;padding:0 5px;color:#fff;border-radius:2px;float:left}.multiselect-dropdown[_ngcontent-%COMP%]   .dropdown-btn[_ngcontent-%COMP%]   .selected-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none}.multiselect-dropdown[_ngcontent-%COMP%]   .dropdown-btn[_ngcontent-%COMP%]   .selected-item[_ngcontent-%COMP%]:hover{box-shadow:1px 1px #959595}.multiselect-dropdown[_ngcontent-%COMP%]   .dropdown-btn[_ngcontent-%COMP%]   .dropdown-multiselect__caret[_ngcontent-%COMP%]{line-height:16px;display:block;position:absolute;box-sizing:border-box;width:40px;height:38px;right:1px;top:0;padding:4px 8px;margin:0;text-decoration:none;text-align:center;cursor:pointer;transition:transform .2s}.multiselect-dropdown[_ngcontent-%COMP%]   .dropdown-btn[_ngcontent-%COMP%]   .dropdown-multiselect__caret[_ngcontent-%COMP%]:before{position:relative;right:0;top:65%;color:#999;margin-top:4px;border-style:solid;border-width:8px 8px 0;border-color:#999 transparent;content:\"\"}.multiselect-dropdown[_ngcontent-%COMP%]   .dropdown-btn[_ngcontent-%COMP%]   .dropdown-multiselect--active[_ngcontent-%COMP%]   .dropdown-multiselect__caret[_ngcontent-%COMP%]{transform:rotateZ(180deg)}.multiselect-dropdown[_ngcontent-%COMP%]   .disabled[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{background-color:#eceeef}.dropdown-list[_ngcontent-%COMP%]{position:absolute;padding-top:6px;width:100%;z-index:9999;border:1px solid #ccc;border-radius:3px;background:#fff;margin-top:10px;box-shadow:0 1px 5px #959595}.dropdown-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{padding:0;list-style:none;overflow:auto;margin:0}.dropdown-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding:6px 10px;cursor:pointer;text-align:left}.dropdown-list[_ngcontent-%COMP%]   .filter-textbox[_ngcontent-%COMP%]{border-bottom:1px solid #ccc;position:relative;padding:10px}.dropdown-list[_ngcontent-%COMP%]   .filter-textbox[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{border:0;width:100%;padding:0 0 0 26px}.dropdown-list[_ngcontent-%COMP%]   .filter-textbox[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus{outline:0}.multiselect-item-checkbox[_ngcontent-%COMP%]:hover{background-color:#e4e3e3}.multiselect-item-checkbox[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]{border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px}.multiselect-item-checkbox[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:focus + div[_ngcontent-%COMP%]:before, .multiselect-item-checkbox[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:hover + div[_ngcontent-%COMP%]:before{border-color:#337ab7;background-color:#f2f2f2}.multiselect-item-checkbox[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:active + div[_ngcontent-%COMP%]:before{transition-duration:0s}.multiselect-item-checkbox[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%] + div[_ngcontent-%COMP%]{position:relative;padding-left:2em;vertical-align:middle;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;margin:0;color:#000}.multiselect-item-checkbox[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%] + div[_ngcontent-%COMP%]:before{box-sizing:content-box;content:\"\";color:#337ab7;position:absolute;top:50%;left:0;width:14px;height:14px;margin-top:-9px;border:2px solid #337ab7;text-align:center;transition:.4s}.multiselect-item-checkbox[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%] + div[_ngcontent-%COMP%]:after{box-sizing:content-box;content:\"\";position:absolute;transform:scale(0);transform-origin:50%;transition:transform .2s ease-out;background-color:transparent;top:50%;left:4px;width:8px;height:3px;margin-top:-4px;border-style:solid;border-color:#fff;border-width:0 0 3px 3px;-o-border-image:none;border-image:none;transform:rotate(-45deg) scale(0)}.multiselect-item-checkbox[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:disabled + div[_ngcontent-%COMP%]:before{border-color:#ccc}.multiselect-item-checkbox[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:disabled:focus + div[_ngcontent-%COMP%]:before   .multiselect-item-checkbox[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:disabled:hover + div[_ngcontent-%COMP%]:before{background-color:inherit}.multiselect-item-checkbox[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:disabled:checked + div[_ngcontent-%COMP%]:before{background-color:#ccc}.multiselect-item-checkbox[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:checked + div[_ngcontent-%COMP%]:after{content:\"\";transition:transform .2s ease-out;transform:rotate(-45deg) scale(1)}.multiselect-item-checkbox[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:checked + div[_ngcontent-%COMP%]:before{-webkit-animation:.2s ease-in borderscale;animation:.2s ease-in borderscale;background:#337ab7}@-webkit-keyframes borderscale{50%{box-shadow:0 0 0 2px #337ab7}}@keyframes borderscale{50%{box-shadow:0 0 0 2px #337ab7}}"], changeDetection: 0 });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [String])
], MultiSelectComponent.prototype, "placeholder", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], MultiSelectComponent.prototype, "disabled", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object])
], MultiSelectComponent.prototype, "settings", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Array),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Array])
], MultiSelectComponent.prototype, "data", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])("onFilterChange"),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], MultiSelectComponent.prototype, "onFilterChange", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])("onDropDownClose"),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], MultiSelectComponent.prototype, "onDropDownClose", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])("onSelect"),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], MultiSelectComponent.prototype, "onSelect", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])("onDeSelect"),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], MultiSelectComponent.prototype, "onDeSelect", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])("onSelectAll"),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], MultiSelectComponent.prototype, "onSelectAll", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])("onDeSelectAll"),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], MultiSelectComponent.prototype, "onDeSelectAll", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])("blur"),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", []),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)
], MultiSelectComponent.prototype, "onTouched", null);
MultiSelectComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([ Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [ListFilterPipe])
], MultiSelectComponent);

let ClickOutsideDirective = class ClickOutsideDirective {
    constructor(_elementRef) {
        this._elementRef = _elementRef;
        this.clickOutside = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    onClick(event, targetElement) {
        if (!targetElement) {
            return;
        }
        const clickedInside = this._elementRef.nativeElement.contains(targetElement);
        if (!clickedInside) {
            this.clickOutside.emit(event);
        }
    }
};
ClickOutsideDirective.ɵfac = function ClickOutsideDirective_Factory(t) { return new (t || ClickOutsideDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])); };
ClickOutsideDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: ClickOutsideDirective, selectors: [["", "clickOutside", ""]], hostBindings: function ClickOutsideDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ClickOutsideDirective_click_HostBindingHandler($event) { return ctx.onClick($event, $event.target); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresolveDocument"]);
    } }, outputs: { clickOutside: "clickOutside" } });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], ClickOutsideDirective.prototype, "clickOutside", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('document:click', ['$event', '$event.target']),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [MouseEvent, HTMLElement]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)
], ClickOutsideDirective.prototype, "onClick", null);
ClickOutsideDirective = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([ Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
], ClickOutsideDirective);

var NgMultiSelectDropDownModule_1;
let NgMultiSelectDropDownModule = NgMultiSelectDropDownModule_1 = class NgMultiSelectDropDownModule {
    static forRoot() {
        return {
            ngModule: NgMultiSelectDropDownModule_1
        };
    }
};
NgMultiSelectDropDownModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: NgMultiSelectDropDownModule });
NgMultiSelectDropDownModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function NgMultiSelectDropDownModule_Factory(t) { return new (t || NgMultiSelectDropDownModule)(); }, providers: [ListFilterPipe], imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]]] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ListFilterPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"],
        args: [{
                name: 'multiSelectFilter',
                pure: false
            }]
    }], null, null); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MultiSelectComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: "ng-multiselect-dropdown",
                template: "<div tabindex=\"0\" (blur)=\"onTouched()\" class=\"multiselect-dropdown\" (clickOutside)=\"closeDropdown()\">\n  <div [class.disabled]=\"disabled\">\n    <span tabindex=\"-1\" class=\"dropdown-btn\" (click)=\"toggleDropdown($event)\">\n      <span *ngIf=\"selectedItems.length == 0\">{{_placeholder}}</span>\n      <span class=\"selected-item\" *ngFor=\"let item of selectedItems;trackBy: trackByFn;let k = index\" [hidden]=\"k > _settings.itemsShowLimit-1\">\n        {{item.text}}\n        <a style=\"padding-top:2px;padding-left:2px;color:white\" (click)=\"onItemClick($event,item)\">x</a>\n      </span>\n      <span [ngClass]=\"{ 'dropdown-multiselect--active': _settings.defaultOpen }\" style=\"float:right !important;padding-right:4px\">\n        <span style=\"padding-right: 6px;\" *ngIf=\"itemShowRemaining()>0\">+{{itemShowRemaining()}}</span>\n        <span class=\"dropdown-multiselect__caret\"></span>\n      </span>\n    </span>\n  </div>\n  <div class=\"dropdown-list\" [hidden]=\"!_settings.defaultOpen\">\n    <ul class=\"item1\">\n      <li (click)=\"toggleSelectAll()\" *ngIf=\"(_data.length > 0 || _settings.allowRemoteDataSearch) && !_settings.singleSelection && _settings.enableCheckAll && _settings.limitSelection===-1\" class=\"multiselect-item-checkbox\" style=\"border-bottom: 1px solid #ccc;padding:10px\">\n        <input type=\"checkbox\" aria-label=\"multiselect-select-all\" [checked]=\"isAllItemsSelected()\" [disabled]=\"disabled || isLimitSelectionReached()\" />\n        <div>{{!isAllItemsSelected() ? _settings.selectAllText : _settings.unSelectAllText}}</div>\n      </li>\n      <li class=\"filter-textbox\" *ngIf=\"(_data.length>0 || _settings.allowRemoteDataSearch) && _settings.allowSearchFilter\">\n        <input type=\"text\" aria-label=\"multiselect-search\" [readOnly]=\"disabled\" [placeholder]=\"_settings.searchPlaceholderText\" [(ngModel)]=\"filter.text\" (ngModelChange)=\"onFilterTextChange($event)\">\n      </li>\n    </ul>\n    <ul class=\"item2\" [style.maxHeight]=\"_settings.maxHeight+'px'\">\n      <li *ngFor=\"let item of _data | multiSelectFilter:filter; let i = index;\" (click)=\"onItemClick($event,item)\" class=\"multiselect-item-checkbox\">\n        <input type=\"checkbox\" [attr.aria-label]=\"item.text\" [checked]=\"isSelected(item)\" [disabled]=\"disabled || (isLimitSelectionReached() && !isSelected(item)) || item.isDisabled\" />\n        <div>{{item.text}}</div>\n      </li>\n      <li class='no-data' *ngIf=\"_data.length == 0 && !_settings.allowRemoteDataSearch\">\n        <h5>{{_settings.noDataAvailablePlaceholderText}}</h5>\n      </li>\n    </ul>\n  </div>\n</div>\n",
                providers: [DROPDOWN_CONTROL_VALUE_ACCESSOR],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
                styles: [".multiselect-dropdown{position:relative;width:100%;font-size:inherit;font-family:inherit}.multiselect-dropdown .dropdown-btn{display:inline-block;border:1px solid #adadad;width:100%;padding:6px 12px;margin-bottom:0;font-weight:400;line-height:1.52857143;text-align:left;vertical-align:middle;cursor:pointer;background-image:none;border-radius:4px}.multiselect-dropdown .dropdown-btn .selected-item{border:1px solid #337ab7;margin-right:4px;background:#337ab7;padding:0 5px;color:#fff;border-radius:2px;float:left}.multiselect-dropdown .dropdown-btn .selected-item a{text-decoration:none}.multiselect-dropdown .dropdown-btn .selected-item:hover{box-shadow:1px 1px #959595}.multiselect-dropdown .dropdown-btn .dropdown-multiselect__caret{line-height:16px;display:block;position:absolute;box-sizing:border-box;width:40px;height:38px;right:1px;top:0;padding:4px 8px;margin:0;text-decoration:none;text-align:center;cursor:pointer;transition:transform .2s}.multiselect-dropdown .dropdown-btn .dropdown-multiselect__caret:before{position:relative;right:0;top:65%;color:#999;margin-top:4px;border-style:solid;border-width:8px 8px 0;border-color:#999 transparent;content:\"\"}.multiselect-dropdown .dropdown-btn .dropdown-multiselect--active .dropdown-multiselect__caret{transform:rotateZ(180deg)}.multiselect-dropdown .disabled>span{background-color:#eceeef}.dropdown-list{position:absolute;padding-top:6px;width:100%;z-index:9999;border:1px solid #ccc;border-radius:3px;background:#fff;margin-top:10px;box-shadow:0 1px 5px #959595}.dropdown-list ul{padding:0;list-style:none;overflow:auto;margin:0}.dropdown-list li{padding:6px 10px;cursor:pointer;text-align:left}.dropdown-list .filter-textbox{border-bottom:1px solid #ccc;position:relative;padding:10px}.dropdown-list .filter-textbox input{border:0;width:100%;padding:0 0 0 26px}.dropdown-list .filter-textbox input:focus{outline:0}.multiselect-item-checkbox:hover{background-color:#e4e3e3}.multiselect-item-checkbox input[type=checkbox]{border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px}.multiselect-item-checkbox input[type=checkbox]:focus+div:before,.multiselect-item-checkbox input[type=checkbox]:hover+div:before{border-color:#337ab7;background-color:#f2f2f2}.multiselect-item-checkbox input[type=checkbox]:active+div:before{transition-duration:0s}.multiselect-item-checkbox input[type=checkbox]+div{position:relative;padding-left:2em;vertical-align:middle;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;margin:0;color:#000}.multiselect-item-checkbox input[type=checkbox]+div:before{box-sizing:content-box;content:\"\";color:#337ab7;position:absolute;top:50%;left:0;width:14px;height:14px;margin-top:-9px;border:2px solid #337ab7;text-align:center;transition:.4s}.multiselect-item-checkbox input[type=checkbox]+div:after{box-sizing:content-box;content:\"\";position:absolute;transform:scale(0);transform-origin:50%;transition:transform .2s ease-out;background-color:transparent;top:50%;left:4px;width:8px;height:3px;margin-top:-4px;border-style:solid;border-color:#fff;border-width:0 0 3px 3px;-o-border-image:none;border-image:none;transform:rotate(-45deg) scale(0)}.multiselect-item-checkbox input[type=checkbox]:disabled+div:before{border-color:#ccc}.multiselect-item-checkbox input[type=checkbox]:disabled:focus+div:before .multiselect-item-checkbox input[type=checkbox]:disabled:hover+div:before{background-color:inherit}.multiselect-item-checkbox input[type=checkbox]:disabled:checked+div:before{background-color:#ccc}.multiselect-item-checkbox input[type=checkbox]:checked+div:after{content:\"\";transition:transform .2s ease-out;transform:rotate(-45deg) scale(1)}.multiselect-item-checkbox input[type=checkbox]:checked+div:before{-webkit-animation:.2s ease-in borderscale;animation:.2s ease-in borderscale;background:#337ab7}@-webkit-keyframes borderscale{50%{box-shadow:0 0 0 2px #337ab7}}@keyframes borderscale{50%{box-shadow:0 0 0 2px #337ab7}}"]
            }]
    }], function () { return [{ type: ListFilterPipe }]; }, { disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], onFilterChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"],
            args: ["onFilterChange"]
        }], onDropDownClose: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"],
            args: ["onDropDownClose"]
        }], onSelect: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"],
            args: ["onSelect"]
        }], onDeSelect: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"],
            args: ["onDeSelect"]
        }], onSelectAll: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"],
            args: ["onSelectAll"]
        }], onDeSelectAll: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"],
            args: ["onDeSelectAll"]
        }], placeholder: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], settings: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], data: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], 
    // Set touched on blur
    onTouched: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
            args: ["blur"]
        }] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ClickOutsideDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
                selector: '[clickOutside]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }]; }, { clickOutside: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], onClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
            args: ['document:click', ['$event', '$event.target']]
        }] }); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](NgMultiSelectDropDownModule, { declarations: function () { return [MultiSelectComponent, ClickOutsideDirective, ListFilterPipe]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]]; }, exports: function () { return [MultiSelectComponent]; } }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NgMultiSelectDropDownModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]],
                declarations: [MultiSelectComponent, ClickOutsideDirective, ListFilterPipe],
                providers: [ListFilterPipe],
                exports: [MultiSelectComponent]
            }]
    }], null, null); })();

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=ng-multiselect-dropdown.js.map

/***/ }),

/***/ "Fjbs":
/*!**************************************************************************!*\
  !*** ./node_modules/@ctrl/ngx-csv/__ivy_ngcc__/fesm2015/ctrl-ngx-csv.js ***!
  \**************************************************************************/
/*! exports provided: CsvDirective, CsvModule, arrays2csv, blob, buildURI, elementOrEmpty, isArrays, isJsons, joiner, jsons2arrays, jsons2csv, jsonsHeaders, string2csv, toCSV */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CsvDirective", function() { return CsvDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CsvModule", function() { return CsvModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "arrays2csv", function() { return arrays2csv; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blob", function() { return blob; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildURI", function() { return buildURI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "elementOrEmpty", function() { return elementOrEmpty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isArrays", function() { return isArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isJsons", function() { return isJsons; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "joiner", function() { return joiner; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "jsons2arrays", function() { return jsons2arrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "jsons2csv", function() { return jsons2csv; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "jsonsHeaders", function() { return jsonsHeaders; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "string2csv", function() { return string2csv; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toCSV", function() { return toCSV; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");





const isJsons = (array) => Array.isArray(array) &&
    array.every(row => typeof row === 'object' && !(row instanceof Array));
const isArrays = (array) => Array.isArray(array) && array.every(row => Array.isArray(row));
function jsonsHeaders(array) {
    return Array.from(new Set(array.map(item => Object.keys(item)).reduce((a, b) => [...a, ...b], [])));
}
function jsons2arrays(jsons, headers) {
    headers = headers || jsonsHeaders(jsons);
    // allow headers to have custom labels, defaulting to having the header data key be the label
    let headerLabels = headers;
    let headerKeys = headers;
    if (isJsons(headers)) {
        headerLabels = headers.map(header => header.label);
        headerKeys = headers.map(header => header.key);
    }
    const data = jsons.map(object => headerKeys.map(header => (header in object ? object[header] : '')));
    return [headerLabels, ...data];
}
const elementOrEmpty = (element) => element || element === 0 ? element : '';
function joiner(data, delimiter = ',') {
    return data
        .map((row, index) => row.map((element) => '"' + elementOrEmpty(element) + '"').join(delimiter))
        .join(`\n`);
}
function arrays2csv(data, headers, delimiter) {
    return joiner(headers ? [headers, ...data] : data, delimiter);
}
function jsons2csv(data, headers, delimiter) {
    return joiner(jsons2arrays(data, headers), delimiter);
}
function string2csv(data, headers, delimiter) {
    return headers ? `${headers.join(delimiter)}\n${data}` : data;
}
function toCSV(data, headers, delimiter) {
    if (isJsons(data)) {
        return jsons2csv(data, headers, delimiter);
    }
    if (isArrays(data)) {
        return arrays2csv(data, headers, delimiter);
    }
    if (typeof data === 'string') {
        return string2csv(data, headers, delimiter);
    }
    throw new TypeError(`Data should be a "String", "Array of arrays" OR "Array of objects" `);
}
function blob(data, uFEFF = true, headers, delimiter) {
    const csv = toCSV(data, headers, delimiter);
    return new Blob([uFEFF ? '\uFEFF' : '', csv], { type: 'text/csv' });
}
function buildURI(data, uFEFF = true, headers, delimiter) {
    return URL.createObjectURL(blob(data, uFEFF, headers, delimiter));
}

class CsvDirective {
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
        /** the body of the csv */
        this.data = [];
        /** Set the seperator between values */
        this.delimiter = ',';
        /** adds a Byte order mark to setup the csv as UTF-8  */
        this.uFEFF = true;
        /** filename */
        this.download = 'data.csv';
        this.target = this.isIEBrowser() ? '' : '_blank';
    }
    /** Set the filename of the csv. Default is `data.csv` */
    set filename(a) {
        this.download = a;
    }
    onClick() {
        // IE handling
        if (this.isIEBrowser()) {
            const file = blob(this.data, this.uFEFF, this.headers, this.delimiter);
            window.navigator.msSaveBlob(file, this.download);
        }
    }
    isIEBrowser() {
        return !!window.navigator.msSaveOrOpenBlob;
    }
    ngOnChanges() {
        this.href = this.sanitizer.bypassSecurityTrustResourceUrl(buildURI(this.data, this.uFEFF, this.headers, this.delimiter));
    }
}
CsvDirective.ɵfac = function CsvDirective_Factory(t) { return new (t || CsvDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"])); };
CsvDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: CsvDirective, selectors: [["", "csvLink", ""]], hostVars: 3, hostBindings: function CsvDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CsvDirective_click_HostBindingHandler() { return ctx.onClick(); });
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵhostProperty"]("download", ctx.download)("target", ctx.target)("href", ctx.href, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrlOrResourceUrl"]);
    } }, inputs: { data: "data", delimiter: "delimiter", uFEFF: "uFEFF", target: "target", filename: "filename", headers: "headers" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]] });
CsvDirective.ctorParameters = () => [
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"] }
];
CsvDirective.propDecorators = {
    data: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    headers: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    delimiter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    filename: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    uFEFF: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    href: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"] }],
    download: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"] }],
    target: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"] }],
    onClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['click',] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CsvDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{ selector: '[csvLink]' }]
    }], function () { return [{ type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"] }]; }, { data: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], delimiter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], uFEFF: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], download: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"]
        }], target: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"]
        }], filename: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], onClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['click']
        }], href: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"]
        }], headers: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();

class CsvModule {
}
CsvModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CsvModule });
CsvModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CsvModule_Factory(t) { return new (t || CsvModule)(); } });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CsvModule, { declarations: [CsvDirective], exports: [CsvDirective] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CsvModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [CsvDirective],
                exports: [CsvDirective]
            }]
    }], null, null); })();

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=ctrl-ngx-csv.js.map

/***/ }),

/***/ "Iab2":
/*!*******************************************************!*\
  !*** ./node_modules/file-saver/dist/FileSaver.min.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(a,b){if(true)!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (b),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else {}})(this,function(){"use strict";function b(a,b){return"undefined"==typeof b?b={autoBom:!1}:"object"!=typeof b&&(console.warn("Deprecated: Expected third argument to be a object"),b={autoBom:!b}),b.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(a.type)?new Blob(["\uFEFF",a],{type:a.type}):a}function c(a,b,c){var d=new XMLHttpRequest;d.open("GET",a),d.responseType="blob",d.onload=function(){g(d.response,b,c)},d.onerror=function(){console.error("could not download file")},d.send()}function d(a){var b=new XMLHttpRequest;b.open("HEAD",a,!1);try{b.send()}catch(a){}return 200<=b.status&&299>=b.status}function e(a){try{a.dispatchEvent(new MouseEvent("click"))}catch(c){var b=document.createEvent("MouseEvents");b.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),a.dispatchEvent(b)}}var f="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof global&&global.global===global?global:void 0,a=f.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),g=f.saveAs||("object"!=typeof window||window!==f?function(){}:"download"in HTMLAnchorElement.prototype&&!a?function(b,g,h){var i=f.URL||f.webkitURL,j=document.createElement("a");g=g||b.name||"download",j.download=g,j.rel="noopener","string"==typeof b?(j.href=b,j.origin===location.origin?e(j):d(j.href)?c(b,g,h):e(j,j.target="_blank")):(j.href=i.createObjectURL(b),setTimeout(function(){i.revokeObjectURL(j.href)},4E4),setTimeout(function(){e(j)},0))}:"msSaveOrOpenBlob"in navigator?function(f,g,h){if(g=g||f.name||"download","string"!=typeof f)navigator.msSaveOrOpenBlob(b(f,h),g);else if(d(f))c(f,g,h);else{var i=document.createElement("a");i.href=f,i.target="_blank",setTimeout(function(){e(i)})}}:function(b,d,e,g){if(g=g||open("","_blank"),g&&(g.document.title=g.document.body.innerText="downloading..."),"string"==typeof b)return c(b,d,e);var h="application/octet-stream"===b.type,i=/constructor/i.test(f.HTMLElement)||f.safari,j=/CriOS\/[\d]+/.test(navigator.userAgent);if((j||h&&i||a)&&"undefined"!=typeof FileReader){var k=new FileReader;k.onloadend=function(){var a=k.result;a=j?a:a.replace(/^data:[^;]*;/,"data:attachment/file;"),g?g.location.href=a:location=a,g=null},k.readAsDataURL(b)}else{var l=f.URL||f.webkitURL,m=l.createObjectURL(b);g?g.location=m:location.href=m,g=null,setTimeout(function(){l.revokeObjectURL(m)},4E4)}});f.saveAs=g.saveAs=g, true&&(module.exports=g)});

//# sourceMappingURL=FileSaver.min.js.map

/***/ }),

/***/ "IyYx":
/*!****************************************************************!*\
  !*** ./src/app/storemanagement/storemng/storemng.component.ts ***!
  \****************************************************************/
/*! exports provided: StoremngComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoremngComponent", function() { return StoremngComponent; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");





class StoremngComponent {
    constructor(http) {
        this.http = http;
        this.selected = 'Low';
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            user: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            dept: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            wh_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            purpose: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            date: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            criticality: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
        });
        this.fieldArray = [];
        this.newAttribute = {};
    }
    ngOnInit() {
        console.log("hello radh");
        this.http.get('http://localhost:3000/warehouse').subscribe(res => {
            this.allWh = res;
            console.log("all data", this.allWh);
        });
        this.http.get('http://localhost:3000/product_master').subscribe(res => {
            this.items = res;
            console.log("all data", this.items);
        });
    }
    addFieldValue() {
        this.fieldArray.push(this.newAttribute);
        console.log('array', this.newAttribute);
        this.newAttribute = {};
    }
    deleteFieldValue(index) {
        this.fieldArray.splice(index, 1);
    }
    printAll(username) {
        this.http.post('http://localhost:3000/request', username).subscribe(data => {
            this.reqId = data['message'];
            console.log('req id val', this.reqId);
            console.log("item list", this.fieldArray.length);
            for (let i = 0; i < this.fieldArray.length; i++) {
                this.fieldArray[i]['reqid'] = this.reqId;
                console.log('testnig', this.fieldArray[i]);
                this.http.post('http://localhost:3000/request_details', this.fieldArray[i]).subscribe();
            }
        });
    }
}
StoremngComponent.ɵfac = function StoremngComponent_Factory(t) { return new (t || StoremngComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
StoremngComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: StoremngComponent, selectors: [["app-storemng"]], decls: 0, vars: 0, template: function StoremngComponent_Template(rf, ctx) { }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0b3JlbWFuYWdlbWVudC9zdG9yZW1uZy9zdG9yZW1uZy5jb21wb25lbnQuc2FzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](StoremngComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-storemng',
                templateUrl: './storemng.component.html',
                styleUrls: ['./storemng.component.sass']
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "L7g7":
/*!******************************************************************!*\
  !*** ./src/app/storemanagement/safetable/safetable.component.ts ***!
  \******************************************************************/
/*! exports provided: SafetableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SafetableComponent", function() { return SafetableComponent; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "lDzL");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _ctrl_ngx_csv__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ctrl/ngx-csv */ "Fjbs");












const _c0 = ["roleTemplate"];
const _c1 = ["closeAddModal"];
const _c2 = ["closeEditModal"];
function SafetableComponent_ng_template_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Item Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SafetableComponent_ng_template_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Item Code");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SafetableComponent_ng_template_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Live Stock");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SafetableComponent_ng_template_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Min Stock");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SafetableComponent_ng_template_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Safe Stock");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SafetableComponent_ng_template_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Stock Percentage");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class SafetableComponent {
    constructor(fb, _snackBar, http) {
        this.fb = fb;
        this._snackBar = _snackBar;
        this.http = http;
        this.rows = [];
        // newUserImg = 'assets/images/user/user1.jpg';
        this.data = [];
        this.filteredData = [];
        this.columns = [
            { name: 'id' },
            { name: 'ItemName' },
            { name: 'category' },
            { name: 'purchasecost' },
            { name: 'minstock' },
            { name: 'safestock' },
            { name: 'safestockpercent' },
        ];
        // Table 2
        this.tb2columns = [
            { name: 'id' },
            { name: 'ItemName' },
            { name: 'category' },
            { name: 'purchasecost' },
            { name: 'minstock' },
            { name: 'safestock' },
            { name: 'safestockpercent' },
        ];
        this.tb2data = [];
        this.tb2filteredData = [];
        this.editForm = this.fb.group({
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            category: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            ItemName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            purchasecost: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            minstock: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            safestock: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            safestockpercent: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
        });
    }
    ngOnInit() {
        this.mainurl = localStorage.getItem('mainurl');
        this.fetch(data => {
            this.data = data;
            this.filteredData = data;
        });
        // Table 2
        this.tb2fetch(data => {
            this.tb2data = data;
            this.tb2filteredData = data;
        });
        this.register = this.fb.group({
            //
            ItemName: [''],
            id: [''],
            category: [''],
            purchasecost: [''],
            safestockpercent: [''],
            safestock: [''],
            minstock: ['']
        });
    }
    fetch(cb) {
        const req = new XMLHttpRequest();
        req.open('GET', this.mainurl + 'productsafestockper');
        req.onload = () => {
            const data = JSON.parse(req.response);
            cb(data);
        };
        req.send();
    }
    // Table 2
    tb2fetch(cb) {
        const req = new XMLHttpRequest();
        req.open('GET', 'assets/data/ngx-data.json');
        req.onload = () => {
            const data = JSON.parse(req.response);
            cb(data);
        };
        req.send();
    }
    // Table 2
    tb2filterDatatable(event) {
        // get the value of the key pressed and make it lowercase
        const val = event.target.value.toLowerCase();
        // get the amount of columns in the table
        const colsAmt = this.tb2columns.length;
        // get the key names of each column in the dataset
        const keys = Object.keys(this.tb2filteredData[0]);
        // assign filtered matches to the active datatable
        this.tb2data = this.tb2filteredData.filter(function (item) {
            // iterate through each row's column data
            for (let i = 0; i < colsAmt; i++) {
                // check for a match
                if (item[keys[i]]
                    .toString()
                    .toLowerCase()
                    .indexOf(val) !== -1 ||
                    !val) {
                    // found match, return true to add to result set
                    return true;
                }
            }
        });
        // whenever the filter changes, always go back to the first page
        this.table2.offset = 0;
    }
    editRow(row, rowIndex) {
        this.editForm.setValue({
            id: row.id,
            name: row.name,
            code: row.code,
        });
        this.selectedRowData = row;
    }
    addRow() {
        this.register.patchValue({
            // id: this.getId(10, 100),
            name: this.name,
            code: this.code
        });
    }
    deleteRow(row) {
        // this.data = this.arrayRemove(this.data, row.id);
        // this.showNotification(
        //   'bg-red',
        //   'Delete Record Successfully',
        //   'bottom',
        //   'right'
        // );
        this.data = this.arrayRemove(this.data, row.id);
        this.http.delete(this.mainurl + 'productsafestock/' + row.id).subscribe();
        this.showNotification('bg-red', 'Delete Record Successfully', 'bottom', 'right');
    }
    arrayRemove(array, id) {
        return array.filter(function (element) {
            return element.id != id;
        });
    }
    onEditSave(form) {
        // this.data = this.data.filter((value, key) => {
        //   if (value.id == form.value.id) {
        //     value.type = form.value.type;
        //   }
        //   this.closeEditModal.nativeElement.click();
        //   return true;
        // });
        this.data = this.data.filter((value, key) => {
            if (value.id == form.value.id) {
                value.code = form.value.code;
                value.name = form.value.name;
            }
            let empdata = {
                'code': form.value.code,
                'name': form.value.name,
            };
            this.http.put(this.mainurl + 'productsafestock/' + form.value.id, empdata).subscribe();
            this.closeEditModal.nativeElement.click();
            return true;
        });
        this.showNotification('bg-black', 'Edit Record Successfully', 'bottom', 'right');
    }
    onAddRowSave(form) {
        this.data.push(form.value);
        this.http.post(this.mainurl + 'productsafestock', form.value).subscribe();
        this.data = [...this.data];
        // console.log(this.data);
        form.reset();
        this.closeAddModal.nativeElement.click();
        this.showNotification('bg-green', 'Add Record Successfully', 'bottom', 'right');
    }
    filterDatatable(event) {
        // get the value of the key pressed and make it lowercase
        const val = event.target.value.toLowerCase();
        // get the amount of columns in the table
        const colsAmt = this.columns.length;
        // get the key names of each column in the dataset
        const keys = Object.keys(this.filteredData[0]);
        // assign filtered matches to the active datatable
        this.data = this.filteredData.filter(function (item) {
            // iterate through each row's column data
            for (let i = 0; i < colsAmt; i++) {
                // check for a match
                if (item[keys[i]]
                    .toString()
                    .toLowerCase()
                    .indexOf(val) !== -1 ||
                    !val) {
                    // found match, return true to add to result set
                    return true;
                }
            }
        });
        // whenever the filter changes, always go back to the first page
        this.table.offset = 0;
    }
    getId(min, max) {
        // min and max included
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    openSnackBar(message) {
        this._snackBar.open(message, '', {
            duration: 2000,
            verticalPosition: 'bottom',
            horizontalPosition: 'right',
            panelClass: ['bg-red']
        });
    }
    showNotification(colorName, text, placementFrom, placementAlign) {
        this._snackBar.open(text, '', {
            duration: 2000,
            verticalPosition: placementFrom,
            horizontalPosition: placementAlign,
            panelClass: colorName
        });
    }
}
SafetableComponent.ɵfac = function SafetableComponent_Factory(t) { return new (t || SafetableComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
SafetableComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SafetableComponent, selectors: [["app-safetable"]], viewQuery: function SafetableComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstaticViewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__["DatatableComponent"], true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c1, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c2, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__["DatatableComponent"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.roleTemplate = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.table = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.closeAddModal = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.closeEditModal = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.table2 = _t.first);
    } }, decls: 39, vars: 15, consts: [[1, "content"], [1, "container-fluid"], [1, "row", "clearfix"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12"], [1, "card"], [1, "body"], [1, "row"], [1, "col-sm-12"], [1, "ngxTableHeader"], [1, "header-buttons-left", "ml-0"], [1, "dropdown"], [1, "dropdown", "m-l-20"], ["for", "search-input"], [1, "material-icons", "search-icon"], ["placeholder", "Search", "type", "text", "aria-label", "Search box", 1, "browser-default", "search-field", 3, "keyup"], [1, "header-buttons", "m-r-20"], [1, "icon-button-demo"], ["mat-mini-fab", "", "color", "primary", "data-toggle", "modal", "data-target", "#addModal"], ["csvLink", "", 1, "col-white", 3, "data"], [1, "material", 3, "rows", "columns", "sortType", "columnMode", "headerHeight", "footerHeight", "rowHeight", "limit"], ["table", ""], ["name", "name", 3, "width"], ["ngx-datatable-header-template", ""], ["name", "productcode", 3, "width"], ["name", "livestock", 3, "width"], ["name", "minstock", 3, "width"], ["name", "safestock", 3, "width"], ["name", "safestockper", 3, "width"]], template: function SafetableComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "ul", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Safe Stock");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "search");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keyup", function SafetableComponent_Template_input_keyup_18_listener($event) { return ctx.filterDatatable($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "ul", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "CSV");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "ngx-datatable", 19, 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "ngx-datatable-column", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](28, SafetableComponent_ng_template_28_Template, 2, 0, "ng-template", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "ngx-datatable-column", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](30, SafetableComponent_ng_template_30_Template, 2, 0, "ng-template", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "ngx-datatable-column", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](32, SafetableComponent_ng_template_32_Template, 2, 0, "ng-template", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "ngx-datatable-column", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](34, SafetableComponent_ng_template_34_Template, 2, 0, "ng-template", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "ngx-datatable-column", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](36, SafetableComponent_ng_template_36_Template, 2, 0, "ng-template", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "ngx-datatable-column", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](38, SafetableComponent_ng_template_38_Template, 2, 0, "ng-template", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("data", ctx.data);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("rows", ctx.data)("columns", ctx.columns)("sortType", "multi")("columnMode", "force")("headerHeight", 50)("footerHeight", 50)("rowHeight", "60")("limit", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("width", 180);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("width", 130);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("width", 130);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("width", 130);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("width", 130);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("width", 130);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _ctrl_ngx_csv__WEBPACK_IMPORTED_MODULE_6__["CsvDirective"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__["DatatableComponent"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__["DataTableColumnDirective"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__["DataTableColumnHeaderDirective"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0b3JlbWFuYWdlbWVudC9zYWZldGFibGUvc2FmZXRhYmxlLmNvbXBvbmVudC5zYXNzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SafetableComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-safetable',
                templateUrl: './safetable.component.html',
                styleUrls: ['./safetable.component.sass']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }]; }, { roleTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['roleTemplate', { static: true }]
        }], table: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: [_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__["DatatableComponent"], { static: false }]
        }], closeAddModal: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['closeAddModal', { static: false }]
        }], closeEditModal: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['closeEditModal', { static: false }]
        }], table2: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: [_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__["DatatableComponent"], { static: false }]
        }] }); })();


/***/ }),

/***/ "Q53a":
/*!**********************************************************************!*\
  !*** ./src/app/storemanagement/stockupdate/stockupdate.component.ts ***!
  \**********************************************************************/
/*! exports provided: StockupdateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StockupdateComponent", function() { return StockupdateComponent; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");






class StockupdateComponent {
    constructor(http, _router) {
        this.http = http;
        this._router = _router;
        this.posts = {};
        this.url = 'http://localhost:5000/maintopicproject/';
    }
    selectContact(saii) {
        console.log(saii);
        localStorage.setItem('maintopic', saii.topicname);
        this._router.navigate(['/storemng/stockupdate']);
    }
    ngOnInit() {
        this.getData();
    }
    getData() {
        this.projectSource = localStorage.getItem('projectSource');
        this.http.get(this.url + this.projectSource).subscribe(res => {
            this.posts = res;
        });
    }
}
StockupdateComponent.ɵfac = function StockupdateComponent_Factory(t) { return new (t || StockupdateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
StockupdateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: StockupdateComponent, selectors: [["app-stockupdate"]], decls: 3, vars: 0, consts: [[1, "content"], [1, "container-fluid"], ["src", "https://snapshot.raintank.io/dashboard-solo/snapshot/y7zwi2bZ7FcoTlB93WN7yWO4aMiz3pZb?from=1493369923321&to=1493377123321&panelId=4", "width", "1600", "height", "800", "frameborder", "5"]], template: function StockupdateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "iframe", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0b3JlbWFuYWdlbWVudC9zdG9ja3VwZGF0ZS9zdG9ja3VwZGF0ZS5jb21wb25lbnQuc2FzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](StockupdateComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-stockupdate',
                templateUrl: './stockupdate.component.html',
                styleUrls: ['./stockupdate.component.sass']
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "ZOsW":
/*!****************************************************************************************!*\
  !*** ./node_modules/@ng-select/ng-select/__ivy_ngcc__/fesm2015/ng-select-ng-select.js ***!
  \****************************************************************************************/
/*! exports provided: NgSelectComponent, NgSelectConfig, NgSelectModule, SELECTION_MODEL_FACTORY, ɵb, ɵc, ɵd, ɵe, ɵf, ɵg, ɵh, ɵi, ɵj, ɵk, ɵl, ɵm, ɵn, ɵo, ɵp, ɵq, ɵr, ɵs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgSelectComponent", function() { return NgSelectComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgSelectConfig", function() { return NgSelectConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgSelectModule", function() { return NgSelectModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SELECTION_MODEL_FACTORY", function() { return SELECTION_MODEL_FACTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return DefaultSelectionModelFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵc", function() { return DefaultSelectionModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵd", function() { return NgDropdownPanelService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵe", function() { return NgItemLabelDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵf", function() { return NgOptionTemplateDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵg", function() { return NgOptgroupTemplateDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵh", function() { return NgLabelTemplateDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵi", function() { return NgMultiLabelTemplateDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵj", function() { return NgHeaderTemplateDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵk", function() { return NgFooterTemplateDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵl", function() { return NgNotFoundTemplateDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵm", function() { return NgTypeToSearchTemplateDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵn", function() { return NgLoadingTextTemplateDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵo", function() { return NgTagTemplateDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵp", function() { return NgLoadingSpinnerTemplateDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵq", function() { return NgDropdownPanelComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵr", function() { return NgOptionComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵs", function() { return ConsoleService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");






/**
 * @fileoverview added by tsickle
 * Generated from: lib/value-utils.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */



const _c0 = ["content"];
const _c1 = ["scroll"];
const _c2 = ["padding"];
const _c3 = function (a0) { return { searchTerm: a0 }; };
function NgDropdownPanelComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](1, 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r0.headerTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c3, ctx_r0.filterValue));
} }
function NgDropdownPanelComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](1, 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r4.footerTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c3, ctx_r4.filterValue));
} }
const _c4 = ["*"];
const _c5 = ["searchInput"];
function NgSelectComponent_ng_container_4_div_1_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NgSelectComponent_ng_container_4_div_1_ng_template_1_Template_span_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const item_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r11.unselect(item_r7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span", 16);
} if (rf & 2) {
    const item_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngItemLabel", item_r7.label)("escape", ctx_r9.escapeHTML);
} }
function NgSelectComponent_ng_container_4_div_1_ng_template_3_Template(rf, ctx) { }
const _c6 = function (a0, a1, a2) { return { item: a0, clear: a1, label: a2 }; };
function NgSelectComponent_ng_container_4_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NgSelectComponent_ng_container_4_div_1_ng_template_1_Template, 3, 2, "ng-template", null, 13, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NgSelectComponent_ng_container_4_div_1_ng_template_3_Template, 0, 0, "ng-template", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r7 = ctx.$implicit;
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ng-value-disabled", item_r7.disabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r6.labelTemplate || _r8)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](4, _c6, item_r7.value, ctx_r6.clearItem, item_r7.label));
} }
function NgSelectComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NgSelectComponent_ng_container_4_div_1_Template, 4, 8, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.selectedItems)("ngForTrackBy", ctx_r0.trackByOption);
} }
function NgSelectComponent_5_ng_template_0_Template(rf, ctx) { }
const _c7 = function (a0, a1) { return { items: a0, clear: a1 }; };
function NgSelectComponent_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NgSelectComponent_5_ng_template_0_Template, 0, 0, "ng-template", 14);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.multiLabelTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](2, _c7, ctx_r1.selectedValues, ctx_r1.clearItem));
} }
function NgSelectComponent_ng_container_9_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 19);
} }
function NgSelectComponent_ng_container_9_ng_template_3_Template(rf, ctx) { }
function NgSelectComponent_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NgSelectComponent_ng_container_9_ng_template_1_Template, 1, 0, "ng-template", null, 17, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NgSelectComponent_ng_container_9_ng_template_3_Template, 0, 0, "ng-template", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r3.loadingSpinnerTemplate || _r16);
} }
function NgSelectComponent_span_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", ctx_r4.clearAllText);
} }
function NgSelectComponent_ng_dropdown_panel_13_div_2_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 27);
} if (rf & 2) {
    const item_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngItemLabel", item_r24.label)("escape", ctx_r26.escapeHTML);
} }
function NgSelectComponent_ng_dropdown_panel_13_div_2_ng_template_3_Template(rf, ctx) { }
const _c8 = function (a0, a1, a2, a3) { return { item: a0, item$: a1, index: a2, searchTerm: a3 }; };
function NgSelectComponent_ng_dropdown_panel_13_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NgSelectComponent_ng_dropdown_panel_13_div_2_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30); const item_r24 = ctx.$implicit; const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r29.toggleItem(item_r24); })("mouseover", function NgSelectComponent_ng_dropdown_panel_13_div_2_Template_div_mouseover_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30); const item_r24 = ctx.$implicit; const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r31.onItemHover(item_r24); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NgSelectComponent_ng_dropdown_panel_13_div_2_ng_template_1_Template, 1, 2, "ng-template", null, 26, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NgSelectComponent_ng_dropdown_panel_13_div_2_ng_template_3_Template, 0, 0, "ng-template", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r24 = ctx.$implicit;
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ng-option-disabled", item_r24.disabled)("ng-option-selected", item_r24.selected)("ng-optgroup", item_r24.children)("ng-option", !item_r24.children)("ng-option-child", !!item_r24.parent)("ng-option-marked", item_r24 === ctx_r19.itemsList.markedItem);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("role", item_r24.children ? "group" : "option")("aria-selected", item_r24.selected)("id", item_r24 == null ? null : item_r24.htmlId);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", item_r24.children ? ctx_r19.optgroupTemplate || _r25 : ctx_r19.optionTemplate || _r25)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction4"](17, _c8, item_r24.value, item_r24, item_r24.index, ctx_r19.searchTerm));
} }
function NgSelectComponent_ng_dropdown_panel_13_div_3_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r33.addTagText);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\"", ctx_r33.searchTerm, "\"");
} }
function NgSelectComponent_ng_dropdown_panel_13_div_3_ng_template_3_Template(rf, ctx) { }
function NgSelectComponent_ng_dropdown_panel_13_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseover", function NgSelectComponent_ng_dropdown_panel_13_div_3_Template_div_mouseover_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r36); const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r35.itemsList.unmarkItem(); })("click", function NgSelectComponent_ng_dropdown_panel_13_div_3_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r36); const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r37.selectTag(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NgSelectComponent_ng_dropdown_panel_13_div_3_ng_template_1_Template, 4, 2, "ng-template", null, 29, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NgSelectComponent_ng_dropdown_panel_13_div_3_ng_template_3_Template, 0, 0, "ng-template", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ng-option-marked", !ctx_r20.itemsList.markedItem);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r20.tagTemplate || _r32)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c3, ctx_r20.searchTerm));
} }
function NgSelectComponent_ng_dropdown_panel_13_ng_container_4_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r39.notFoundText);
} }
function NgSelectComponent_ng_dropdown_panel_13_ng_container_4_ng_template_3_Template(rf, ctx) { }
function NgSelectComponent_ng_dropdown_panel_13_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NgSelectComponent_ng_dropdown_panel_13_ng_container_4_ng_template_1_Template, 2, 1, "ng-template", null, 31, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NgSelectComponent_ng_dropdown_panel_13_ng_container_4_ng_template_3_Template, 0, 0, "ng-template", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r21.notFoundTemplate || _r38)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c3, ctx_r21.searchTerm));
} }
function NgSelectComponent_ng_dropdown_panel_13_ng_container_5_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r42.typeToSearchText);
} }
function NgSelectComponent_ng_dropdown_panel_13_ng_container_5_ng_template_3_Template(rf, ctx) { }
function NgSelectComponent_ng_dropdown_panel_13_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NgSelectComponent_ng_dropdown_panel_13_ng_container_5_ng_template_1_Template, 2, 1, "ng-template", null, 33, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NgSelectComponent_ng_dropdown_panel_13_ng_container_5_ng_template_3_Template, 0, 0, "ng-template", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r22.typeToSearchTemplate || _r41);
} }
function NgSelectComponent_ng_dropdown_panel_13_ng_container_6_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r45.loadingText);
} }
function NgSelectComponent_ng_dropdown_panel_13_ng_container_6_ng_template_3_Template(rf, ctx) { }
function NgSelectComponent_ng_dropdown_panel_13_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NgSelectComponent_ng_dropdown_panel_13_ng_container_6_ng_template_1_Template, 2, 1, "ng-template", null, 34, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NgSelectComponent_ng_dropdown_panel_13_ng_container_6_ng_template_3_Template, 0, 0, "ng-template", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r23.loadingTextTemplate || _r44)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c3, ctx_r23.searchTerm));
} }
function NgSelectComponent_ng_dropdown_panel_13_Template(rf, ctx) { if (rf & 1) {
    const _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ng-dropdown-panel", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("update", function NgSelectComponent_ng_dropdown_panel_13_Template_ng_dropdown_panel_update_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r48); const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r47.viewPortItems = $event; })("scroll", function NgSelectComponent_ng_dropdown_panel_13_Template_ng_dropdown_panel_scroll_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r48); const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r49.scroll.emit($event); })("scrollToEnd", function NgSelectComponent_ng_dropdown_panel_13_Template_ng_dropdown_panel_scrollToEnd_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r48); const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r50.scrollToEnd.emit($event); })("outsideClick", function NgSelectComponent_ng_dropdown_panel_13_Template_ng_dropdown_panel_outsideClick_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r48); const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r51.close(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NgSelectComponent_ng_dropdown_panel_13_div_2_Template, 4, 22, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NgSelectComponent_ng_dropdown_panel_13_div_3_Template, 4, 6, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NgSelectComponent_ng_dropdown_panel_13_ng_container_4_Template, 4, 4, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, NgSelectComponent_ng_dropdown_panel_13_ng_container_5_Template, 4, 1, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, NgSelectComponent_ng_dropdown_panel_13_ng_container_6_Template, 4, 4, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ng-select-multiple", ctx_r5.multiple);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("virtualScroll", ctx_r5.virtualScroll)("bufferAmount", ctx_r5.bufferAmount)("appendTo", ctx_r5.appendTo)("position", ctx_r5.dropdownPosition)("headerTemplate", ctx_r5.headerTemplate)("footerTemplate", ctx_r5.footerTemplate)("filterValue", ctx_r5.searchTerm)("items", ctx_r5.itemsList.filteredItems)("markedItem", ctx_r5.itemsList.markedItem)("ngClass", ctx_r5.appendTo ? ctx_r5.classes : null)("id", ctx_r5.dropdownId);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r5.viewPortItems)("ngForTrackBy", ctx_r5.trackByOption);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.showAddTag);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.showNoItemsFound());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.showTypeToSearch());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.loading && ctx_r5.itemsList.filteredItems.length === 0);
} }
const unescapedHTMLExp = /[&<>"']/g;
/** @type {?} */
const hasUnescapedHTMLExp = RegExp(unescapedHTMLExp.source);
/** @type {?} */
const htmlEscapes = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    '\'': '&#39;'
};
/**
 * @param {?} string
 * @return {?}
 */
function escapeHTML(string) {
    return (string && hasUnescapedHTMLExp.test(string)) ?
        string.replace(unescapedHTMLExp, (/**
         * @param {?} chr
         * @return {?}
         */
        chr => htmlEscapes[chr])) :
        string;
}
/**
 * @param {?} value
 * @return {?}
 */
function isDefined(value) {
    return value !== undefined && value !== null;
}
/**
 * @param {?} value
 * @return {?}
 */
function isObject(value) {
    return typeof value === 'object' && isDefined(value);
}
/**
 * @param {?} value
 * @return {?}
 */
function isPromise(value) {
    return value instanceof Promise;
}
/**
 * @param {?} value
 * @return {?}
 */
function isFunction(value) {
    return value instanceof Function;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/ng-templates.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgItemLabelDirective {
    /**
     * @param {?} element
     */
    constructor(element) {
        this.element = element;
        this.escape = true;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        this.element.nativeElement.innerHTML = this.escape ?
            escapeHTML(this.ngItemLabel) :
            this.ngItemLabel;
    }
}
NgItemLabelDirective.ɵfac = function NgItemLabelDirective_Factory(t) { return new (t || NgItemLabelDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
NgItemLabelDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: NgItemLabelDirective, selectors: [["", "ngItemLabel", ""]], inputs: { escape: "escape", ngItemLabel: "ngItemLabel" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]] });
/** @nocollapse */
NgItemLabelDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }
];
NgItemLabelDirective.propDecorators = {
    ngItemLabel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    escape: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgItemLabelDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{ selector: '[ngItemLabel]' }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, { escape: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], ngItemLabel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();
if (false) {}
class NgOptionTemplateDirective {
    /**
     * @param {?} template
     */
    constructor(template) {
        this.template = template;
    }
}
NgOptionTemplateDirective.ɵfac = function NgOptionTemplateDirective_Factory(t) { return new (t || NgOptionTemplateDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])); };
NgOptionTemplateDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: NgOptionTemplateDirective, selectors: [["", "ng-option-tmp", ""]] });
/** @nocollapse */
NgOptionTemplateDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] }
];
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgOptionTemplateDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{ selector: '[ng-option-tmp]' }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] }]; }, null); })();
if (false) {}
class NgOptgroupTemplateDirective {
    /**
     * @param {?} template
     */
    constructor(template) {
        this.template = template;
    }
}
NgOptgroupTemplateDirective.ɵfac = function NgOptgroupTemplateDirective_Factory(t) { return new (t || NgOptgroupTemplateDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])); };
NgOptgroupTemplateDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: NgOptgroupTemplateDirective, selectors: [["", "ng-optgroup-tmp", ""]] });
/** @nocollapse */
NgOptgroupTemplateDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] }
];
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgOptgroupTemplateDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{ selector: '[ng-optgroup-tmp]' }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] }]; }, null); })();
if (false) {}
class NgLabelTemplateDirective {
    /**
     * @param {?} template
     */
    constructor(template) {
        this.template = template;
    }
}
NgLabelTemplateDirective.ɵfac = function NgLabelTemplateDirective_Factory(t) { return new (t || NgLabelTemplateDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])); };
NgLabelTemplateDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: NgLabelTemplateDirective, selectors: [["", "ng-label-tmp", ""]] });
/** @nocollapse */
NgLabelTemplateDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] }
];
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgLabelTemplateDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{ selector: '[ng-label-tmp]' }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] }]; }, null); })();
if (false) {}
class NgMultiLabelTemplateDirective {
    /**
     * @param {?} template
     */
    constructor(template) {
        this.template = template;
    }
}
NgMultiLabelTemplateDirective.ɵfac = function NgMultiLabelTemplateDirective_Factory(t) { return new (t || NgMultiLabelTemplateDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])); };
NgMultiLabelTemplateDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: NgMultiLabelTemplateDirective, selectors: [["", "ng-multi-label-tmp", ""]] });
/** @nocollapse */
NgMultiLabelTemplateDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] }
];
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgMultiLabelTemplateDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{ selector: '[ng-multi-label-tmp]' }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] }]; }, null); })();
if (false) {}
class NgHeaderTemplateDirective {
    /**
     * @param {?} template
     */
    constructor(template) {
        this.template = template;
    }
}
NgHeaderTemplateDirective.ɵfac = function NgHeaderTemplateDirective_Factory(t) { return new (t || NgHeaderTemplateDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])); };
NgHeaderTemplateDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: NgHeaderTemplateDirective, selectors: [["", "ng-header-tmp", ""]] });
/** @nocollapse */
NgHeaderTemplateDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] }
];
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgHeaderTemplateDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{ selector: '[ng-header-tmp]' }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] }]; }, null); })();
if (false) {}
class NgFooterTemplateDirective {
    /**
     * @param {?} template
     */
    constructor(template) {
        this.template = template;
    }
}
NgFooterTemplateDirective.ɵfac = function NgFooterTemplateDirective_Factory(t) { return new (t || NgFooterTemplateDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])); };
NgFooterTemplateDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: NgFooterTemplateDirective, selectors: [["", "ng-footer-tmp", ""]] });
/** @nocollapse */
NgFooterTemplateDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] }
];
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgFooterTemplateDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{ selector: '[ng-footer-tmp]' }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] }]; }, null); })();
if (false) {}
class NgNotFoundTemplateDirective {
    /**
     * @param {?} template
     */
    constructor(template) {
        this.template = template;
    }
}
NgNotFoundTemplateDirective.ɵfac = function NgNotFoundTemplateDirective_Factory(t) { return new (t || NgNotFoundTemplateDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])); };
NgNotFoundTemplateDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: NgNotFoundTemplateDirective, selectors: [["", "ng-notfound-tmp", ""]] });
/** @nocollapse */
NgNotFoundTemplateDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] }
];
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgNotFoundTemplateDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{ selector: '[ng-notfound-tmp]' }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] }]; }, null); })();
if (false) {}
class NgTypeToSearchTemplateDirective {
    /**
     * @param {?} template
     */
    constructor(template) {
        this.template = template;
    }
}
NgTypeToSearchTemplateDirective.ɵfac = function NgTypeToSearchTemplateDirective_Factory(t) { return new (t || NgTypeToSearchTemplateDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])); };
NgTypeToSearchTemplateDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: NgTypeToSearchTemplateDirective, selectors: [["", "ng-typetosearch-tmp", ""]] });
/** @nocollapse */
NgTypeToSearchTemplateDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] }
];
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgTypeToSearchTemplateDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{ selector: '[ng-typetosearch-tmp]' }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] }]; }, null); })();
if (false) {}
class NgLoadingTextTemplateDirective {
    /**
     * @param {?} template
     */
    constructor(template) {
        this.template = template;
    }
}
NgLoadingTextTemplateDirective.ɵfac = function NgLoadingTextTemplateDirective_Factory(t) { return new (t || NgLoadingTextTemplateDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])); };
NgLoadingTextTemplateDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: NgLoadingTextTemplateDirective, selectors: [["", "ng-loadingtext-tmp", ""]] });
/** @nocollapse */
NgLoadingTextTemplateDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] }
];
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgLoadingTextTemplateDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{ selector: '[ng-loadingtext-tmp]' }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] }]; }, null); })();
if (false) {}
class NgTagTemplateDirective {
    /**
     * @param {?} template
     */
    constructor(template) {
        this.template = template;
    }
}
NgTagTemplateDirective.ɵfac = function NgTagTemplateDirective_Factory(t) { return new (t || NgTagTemplateDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])); };
NgTagTemplateDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: NgTagTemplateDirective, selectors: [["", "ng-tag-tmp", ""]] });
/** @nocollapse */
NgTagTemplateDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] }
];
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgTagTemplateDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{ selector: '[ng-tag-tmp]' }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] }]; }, null); })();
if (false) {}
class NgLoadingSpinnerTemplateDirective {
    /**
     * @param {?} template
     */
    constructor(template) {
        this.template = template;
    }
}
NgLoadingSpinnerTemplateDirective.ɵfac = function NgLoadingSpinnerTemplateDirective_Factory(t) { return new (t || NgLoadingSpinnerTemplateDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])); };
NgLoadingSpinnerTemplateDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: NgLoadingSpinnerTemplateDirective, selectors: [["", "ng-loadingspinner-tmp", ""]] });
/** @nocollapse */
NgLoadingSpinnerTemplateDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] }
];
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgLoadingSpinnerTemplateDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{ selector: '[ng-loadingspinner-tmp]' }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] }]; }, null); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/console.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ConsoleService {
    /**
     * @param {?} message
     * @return {?}
     */
    warn(message) {
        console.warn(message);
    }
}
ConsoleService.ɵfac = function ConsoleService_Factory(t) { return new (t || ConsoleService)(); };
/** @nocollapse */ ConsoleService.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function ConsoleService_Factory() { return new ConsoleService(); }, token: ConsoleService, providedIn: "root" });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ConsoleService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * Generated from: lib/id.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @return {?}
 */
function newId() {
    // First character is an 'a', it's good practice to tag id to begin with a letter
    return 'axxxxxxxxxxx'.replace(/[x]/g, (/**
     * @param {?} _
     * @return {?}
     */
    function (_) {
        // tslint:disable-next-line:no-bitwise
        /** @type {?} */
        const val = Math.random() * 16 | 0;
        return val.toString(16);
    }));
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/search-helper.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const diacritics = {
    '\u24B6': 'A',
    '\uFF21': 'A',
    '\u00C0': 'A',
    '\u00C1': 'A',
    '\u00C2': 'A',
    '\u1EA6': 'A',
    '\u1EA4': 'A',
    '\u1EAA': 'A',
    '\u1EA8': 'A',
    '\u00C3': 'A',
    '\u0100': 'A',
    '\u0102': 'A',
    '\u1EB0': 'A',
    '\u1EAE': 'A',
    '\u1EB4': 'A',
    '\u1EB2': 'A',
    '\u0226': 'A',
    '\u01E0': 'A',
    '\u00C4': 'A',
    '\u01DE': 'A',
    '\u1EA2': 'A',
    '\u00C5': 'A',
    '\u01FA': 'A',
    '\u01CD': 'A',
    '\u0200': 'A',
    '\u0202': 'A',
    '\u1EA0': 'A',
    '\u1EAC': 'A',
    '\u1EB6': 'A',
    '\u1E00': 'A',
    '\u0104': 'A',
    '\u023A': 'A',
    '\u2C6F': 'A',
    '\uA732': 'AA',
    '\u00C6': 'AE',
    '\u01FC': 'AE',
    '\u01E2': 'AE',
    '\uA734': 'AO',
    '\uA736': 'AU',
    '\uA738': 'AV',
    '\uA73A': 'AV',
    '\uA73C': 'AY',
    '\u24B7': 'B',
    '\uFF22': 'B',
    '\u1E02': 'B',
    '\u1E04': 'B',
    '\u1E06': 'B',
    '\u0243': 'B',
    '\u0182': 'B',
    '\u0181': 'B',
    '\u24B8': 'C',
    '\uFF23': 'C',
    '\u0106': 'C',
    '\u0108': 'C',
    '\u010A': 'C',
    '\u010C': 'C',
    '\u00C7': 'C',
    '\u1E08': 'C',
    '\u0187': 'C',
    '\u023B': 'C',
    '\uA73E': 'C',
    '\u24B9': 'D',
    '\uFF24': 'D',
    '\u1E0A': 'D',
    '\u010E': 'D',
    '\u1E0C': 'D',
    '\u1E10': 'D',
    '\u1E12': 'D',
    '\u1E0E': 'D',
    '\u0110': 'D',
    '\u018B': 'D',
    '\u018A': 'D',
    '\u0189': 'D',
    '\uA779': 'D',
    '\u01F1': 'DZ',
    '\u01C4': 'DZ',
    '\u01F2': 'Dz',
    '\u01C5': 'Dz',
    '\u24BA': 'E',
    '\uFF25': 'E',
    '\u00C8': 'E',
    '\u00C9': 'E',
    '\u00CA': 'E',
    '\u1EC0': 'E',
    '\u1EBE': 'E',
    '\u1EC4': 'E',
    '\u1EC2': 'E',
    '\u1EBC': 'E',
    '\u0112': 'E',
    '\u1E14': 'E',
    '\u1E16': 'E',
    '\u0114': 'E',
    '\u0116': 'E',
    '\u00CB': 'E',
    '\u1EBA': 'E',
    '\u011A': 'E',
    '\u0204': 'E',
    '\u0206': 'E',
    '\u1EB8': 'E',
    '\u1EC6': 'E',
    '\u0228': 'E',
    '\u1E1C': 'E',
    '\u0118': 'E',
    '\u1E18': 'E',
    '\u1E1A': 'E',
    '\u0190': 'E',
    '\u018E': 'E',
    '\u24BB': 'F',
    '\uFF26': 'F',
    '\u1E1E': 'F',
    '\u0191': 'F',
    '\uA77B': 'F',
    '\u24BC': 'G',
    '\uFF27': 'G',
    '\u01F4': 'G',
    '\u011C': 'G',
    '\u1E20': 'G',
    '\u011E': 'G',
    '\u0120': 'G',
    '\u01E6': 'G',
    '\u0122': 'G',
    '\u01E4': 'G',
    '\u0193': 'G',
    '\uA7A0': 'G',
    '\uA77D': 'G',
    '\uA77E': 'G',
    '\u24BD': 'H',
    '\uFF28': 'H',
    '\u0124': 'H',
    '\u1E22': 'H',
    '\u1E26': 'H',
    '\u021E': 'H',
    '\u1E24': 'H',
    '\u1E28': 'H',
    '\u1E2A': 'H',
    '\u0126': 'H',
    '\u2C67': 'H',
    '\u2C75': 'H',
    '\uA78D': 'H',
    '\u24BE': 'I',
    '\uFF29': 'I',
    '\u00CC': 'I',
    '\u00CD': 'I',
    '\u00CE': 'I',
    '\u0128': 'I',
    '\u012A': 'I',
    '\u012C': 'I',
    '\u0130': 'I',
    '\u00CF': 'I',
    '\u1E2E': 'I',
    '\u1EC8': 'I',
    '\u01CF': 'I',
    '\u0208': 'I',
    '\u020A': 'I',
    '\u1ECA': 'I',
    '\u012E': 'I',
    '\u1E2C': 'I',
    '\u0197': 'I',
    '\u24BF': 'J',
    '\uFF2A': 'J',
    '\u0134': 'J',
    '\u0248': 'J',
    '\u24C0': 'K',
    '\uFF2B': 'K',
    '\u1E30': 'K',
    '\u01E8': 'K',
    '\u1E32': 'K',
    '\u0136': 'K',
    '\u1E34': 'K',
    '\u0198': 'K',
    '\u2C69': 'K',
    '\uA740': 'K',
    '\uA742': 'K',
    '\uA744': 'K',
    '\uA7A2': 'K',
    '\u24C1': 'L',
    '\uFF2C': 'L',
    '\u013F': 'L',
    '\u0139': 'L',
    '\u013D': 'L',
    '\u1E36': 'L',
    '\u1E38': 'L',
    '\u013B': 'L',
    '\u1E3C': 'L',
    '\u1E3A': 'L',
    '\u0141': 'L',
    '\u023D': 'L',
    '\u2C62': 'L',
    '\u2C60': 'L',
    '\uA748': 'L',
    '\uA746': 'L',
    '\uA780': 'L',
    '\u01C7': 'LJ',
    '\u01C8': 'Lj',
    '\u24C2': 'M',
    '\uFF2D': 'M',
    '\u1E3E': 'M',
    '\u1E40': 'M',
    '\u1E42': 'M',
    '\u2C6E': 'M',
    '\u019C': 'M',
    '\u24C3': 'N',
    '\uFF2E': 'N',
    '\u01F8': 'N',
    '\u0143': 'N',
    '\u00D1': 'N',
    '\u1E44': 'N',
    '\u0147': 'N',
    '\u1E46': 'N',
    '\u0145': 'N',
    '\u1E4A': 'N',
    '\u1E48': 'N',
    '\u0220': 'N',
    '\u019D': 'N',
    '\uA790': 'N',
    '\uA7A4': 'N',
    '\u01CA': 'NJ',
    '\u01CB': 'Nj',
    '\u24C4': 'O',
    '\uFF2F': 'O',
    '\u00D2': 'O',
    '\u00D3': 'O',
    '\u00D4': 'O',
    '\u1ED2': 'O',
    '\u1ED0': 'O',
    '\u1ED6': 'O',
    '\u1ED4': 'O',
    '\u00D5': 'O',
    '\u1E4C': 'O',
    '\u022C': 'O',
    '\u1E4E': 'O',
    '\u014C': 'O',
    '\u1E50': 'O',
    '\u1E52': 'O',
    '\u014E': 'O',
    '\u022E': 'O',
    '\u0230': 'O',
    '\u00D6': 'O',
    '\u022A': 'O',
    '\u1ECE': 'O',
    '\u0150': 'O',
    '\u01D1': 'O',
    '\u020C': 'O',
    '\u020E': 'O',
    '\u01A0': 'O',
    '\u1EDC': 'O',
    '\u1EDA': 'O',
    '\u1EE0': 'O',
    '\u1EDE': 'O',
    '\u1EE2': 'O',
    '\u1ECC': 'O',
    '\u1ED8': 'O',
    '\u01EA': 'O',
    '\u01EC': 'O',
    '\u00D8': 'O',
    '\u01FE': 'O',
    '\u0186': 'O',
    '\u019F': 'O',
    '\uA74A': 'O',
    '\uA74C': 'O',
    '\u01A2': 'OI',
    '\uA74E': 'OO',
    '\u0222': 'OU',
    '\u24C5': 'P',
    '\uFF30': 'P',
    '\u1E54': 'P',
    '\u1E56': 'P',
    '\u01A4': 'P',
    '\u2C63': 'P',
    '\uA750': 'P',
    '\uA752': 'P',
    '\uA754': 'P',
    '\u24C6': 'Q',
    '\uFF31': 'Q',
    '\uA756': 'Q',
    '\uA758': 'Q',
    '\u024A': 'Q',
    '\u24C7': 'R',
    '\uFF32': 'R',
    '\u0154': 'R',
    '\u1E58': 'R',
    '\u0158': 'R',
    '\u0210': 'R',
    '\u0212': 'R',
    '\u1E5A': 'R',
    '\u1E5C': 'R',
    '\u0156': 'R',
    '\u1E5E': 'R',
    '\u024C': 'R',
    '\u2C64': 'R',
    '\uA75A': 'R',
    '\uA7A6': 'R',
    '\uA782': 'R',
    '\u24C8': 'S',
    '\uFF33': 'S',
    '\u1E9E': 'S',
    '\u015A': 'S',
    '\u1E64': 'S',
    '\u015C': 'S',
    '\u1E60': 'S',
    '\u0160': 'S',
    '\u1E66': 'S',
    '\u1E62': 'S',
    '\u1E68': 'S',
    '\u0218': 'S',
    '\u015E': 'S',
    '\u2C7E': 'S',
    '\uA7A8': 'S',
    '\uA784': 'S',
    '\u24C9': 'T',
    '\uFF34': 'T',
    '\u1E6A': 'T',
    '\u0164': 'T',
    '\u1E6C': 'T',
    '\u021A': 'T',
    '\u0162': 'T',
    '\u1E70': 'T',
    '\u1E6E': 'T',
    '\u0166': 'T',
    '\u01AC': 'T',
    '\u01AE': 'T',
    '\u023E': 'T',
    '\uA786': 'T',
    '\uA728': 'TZ',
    '\u24CA': 'U',
    '\uFF35': 'U',
    '\u00D9': 'U',
    '\u00DA': 'U',
    '\u00DB': 'U',
    '\u0168': 'U',
    '\u1E78': 'U',
    '\u016A': 'U',
    '\u1E7A': 'U',
    '\u016C': 'U',
    '\u00DC': 'U',
    '\u01DB': 'U',
    '\u01D7': 'U',
    '\u01D5': 'U',
    '\u01D9': 'U',
    '\u1EE6': 'U',
    '\u016E': 'U',
    '\u0170': 'U',
    '\u01D3': 'U',
    '\u0214': 'U',
    '\u0216': 'U',
    '\u01AF': 'U',
    '\u1EEA': 'U',
    '\u1EE8': 'U',
    '\u1EEE': 'U',
    '\u1EEC': 'U',
    '\u1EF0': 'U',
    '\u1EE4': 'U',
    '\u1E72': 'U',
    '\u0172': 'U',
    '\u1E76': 'U',
    '\u1E74': 'U',
    '\u0244': 'U',
    '\u24CB': 'V',
    '\uFF36': 'V',
    '\u1E7C': 'V',
    '\u1E7E': 'V',
    '\u01B2': 'V',
    '\uA75E': 'V',
    '\u0245': 'V',
    '\uA760': 'VY',
    '\u24CC': 'W',
    '\uFF37': 'W',
    '\u1E80': 'W',
    '\u1E82': 'W',
    '\u0174': 'W',
    '\u1E86': 'W',
    '\u1E84': 'W',
    '\u1E88': 'W',
    '\u2C72': 'W',
    '\u24CD': 'X',
    '\uFF38': 'X',
    '\u1E8A': 'X',
    '\u1E8C': 'X',
    '\u24CE': 'Y',
    '\uFF39': 'Y',
    '\u1EF2': 'Y',
    '\u00DD': 'Y',
    '\u0176': 'Y',
    '\u1EF8': 'Y',
    '\u0232': 'Y',
    '\u1E8E': 'Y',
    '\u0178': 'Y',
    '\u1EF6': 'Y',
    '\u1EF4': 'Y',
    '\u01B3': 'Y',
    '\u024E': 'Y',
    '\u1EFE': 'Y',
    '\u24CF': 'Z',
    '\uFF3A': 'Z',
    '\u0179': 'Z',
    '\u1E90': 'Z',
    '\u017B': 'Z',
    '\u017D': 'Z',
    '\u1E92': 'Z',
    '\u1E94': 'Z',
    '\u01B5': 'Z',
    '\u0224': 'Z',
    '\u2C7F': 'Z',
    '\u2C6B': 'Z',
    '\uA762': 'Z',
    '\u24D0': 'a',
    '\uFF41': 'a',
    '\u1E9A': 'a',
    '\u00E0': 'a',
    '\u00E1': 'a',
    '\u00E2': 'a',
    '\u1EA7': 'a',
    '\u1EA5': 'a',
    '\u1EAB': 'a',
    '\u1EA9': 'a',
    '\u00E3': 'a',
    '\u0101': 'a',
    '\u0103': 'a',
    '\u1EB1': 'a',
    '\u1EAF': 'a',
    '\u1EB5': 'a',
    '\u1EB3': 'a',
    '\u0227': 'a',
    '\u01E1': 'a',
    '\u00E4': 'a',
    '\u01DF': 'a',
    '\u1EA3': 'a',
    '\u00E5': 'a',
    '\u01FB': 'a',
    '\u01CE': 'a',
    '\u0201': 'a',
    '\u0203': 'a',
    '\u1EA1': 'a',
    '\u1EAD': 'a',
    '\u1EB7': 'a',
    '\u1E01': 'a',
    '\u0105': 'a',
    '\u2C65': 'a',
    '\u0250': 'a',
    '\uA733': 'aa',
    '\u00E6': 'ae',
    '\u01FD': 'ae',
    '\u01E3': 'ae',
    '\uA735': 'ao',
    '\uA737': 'au',
    '\uA739': 'av',
    '\uA73B': 'av',
    '\uA73D': 'ay',
    '\u24D1': 'b',
    '\uFF42': 'b',
    '\u1E03': 'b',
    '\u1E05': 'b',
    '\u1E07': 'b',
    '\u0180': 'b',
    '\u0183': 'b',
    '\u0253': 'b',
    '\u24D2': 'c',
    '\uFF43': 'c',
    '\u0107': 'c',
    '\u0109': 'c',
    '\u010B': 'c',
    '\u010D': 'c',
    '\u00E7': 'c',
    '\u1E09': 'c',
    '\u0188': 'c',
    '\u023C': 'c',
    '\uA73F': 'c',
    '\u2184': 'c',
    '\u24D3': 'd',
    '\uFF44': 'd',
    '\u1E0B': 'd',
    '\u010F': 'd',
    '\u1E0D': 'd',
    '\u1E11': 'd',
    '\u1E13': 'd',
    '\u1E0F': 'd',
    '\u0111': 'd',
    '\u018C': 'd',
    '\u0256': 'd',
    '\u0257': 'd',
    '\uA77A': 'd',
    '\u01F3': 'dz',
    '\u01C6': 'dz',
    '\u24D4': 'e',
    '\uFF45': 'e',
    '\u00E8': 'e',
    '\u00E9': 'e',
    '\u00EA': 'e',
    '\u1EC1': 'e',
    '\u1EBF': 'e',
    '\u1EC5': 'e',
    '\u1EC3': 'e',
    '\u1EBD': 'e',
    '\u0113': 'e',
    '\u1E15': 'e',
    '\u1E17': 'e',
    '\u0115': 'e',
    '\u0117': 'e',
    '\u00EB': 'e',
    '\u1EBB': 'e',
    '\u011B': 'e',
    '\u0205': 'e',
    '\u0207': 'e',
    '\u1EB9': 'e',
    '\u1EC7': 'e',
    '\u0229': 'e',
    '\u1E1D': 'e',
    '\u0119': 'e',
    '\u1E19': 'e',
    '\u1E1B': 'e',
    '\u0247': 'e',
    '\u025B': 'e',
    '\u01DD': 'e',
    '\u24D5': 'f',
    '\uFF46': 'f',
    '\u1E1F': 'f',
    '\u0192': 'f',
    '\uA77C': 'f',
    '\u24D6': 'g',
    '\uFF47': 'g',
    '\u01F5': 'g',
    '\u011D': 'g',
    '\u1E21': 'g',
    '\u011F': 'g',
    '\u0121': 'g',
    '\u01E7': 'g',
    '\u0123': 'g',
    '\u01E5': 'g',
    '\u0260': 'g',
    '\uA7A1': 'g',
    '\u1D79': 'g',
    '\uA77F': 'g',
    '\u24D7': 'h',
    '\uFF48': 'h',
    '\u0125': 'h',
    '\u1E23': 'h',
    '\u1E27': 'h',
    '\u021F': 'h',
    '\u1E25': 'h',
    '\u1E29': 'h',
    '\u1E2B': 'h',
    '\u1E96': 'h',
    '\u0127': 'h',
    '\u2C68': 'h',
    '\u2C76': 'h',
    '\u0265': 'h',
    '\u0195': 'hv',
    '\u24D8': 'i',
    '\uFF49': 'i',
    '\u00EC': 'i',
    '\u00ED': 'i',
    '\u00EE': 'i',
    '\u0129': 'i',
    '\u012B': 'i',
    '\u012D': 'i',
    '\u00EF': 'i',
    '\u1E2F': 'i',
    '\u1EC9': 'i',
    '\u01D0': 'i',
    '\u0209': 'i',
    '\u020B': 'i',
    '\u1ECB': 'i',
    '\u012F': 'i',
    '\u1E2D': 'i',
    '\u0268': 'i',
    '\u0131': 'i',
    '\u24D9': 'j',
    '\uFF4A': 'j',
    '\u0135': 'j',
    '\u01F0': 'j',
    '\u0249': 'j',
    '\u24DA': 'k',
    '\uFF4B': 'k',
    '\u1E31': 'k',
    '\u01E9': 'k',
    '\u1E33': 'k',
    '\u0137': 'k',
    '\u1E35': 'k',
    '\u0199': 'k',
    '\u2C6A': 'k',
    '\uA741': 'k',
    '\uA743': 'k',
    '\uA745': 'k',
    '\uA7A3': 'k',
    '\u24DB': 'l',
    '\uFF4C': 'l',
    '\u0140': 'l',
    '\u013A': 'l',
    '\u013E': 'l',
    '\u1E37': 'l',
    '\u1E39': 'l',
    '\u013C': 'l',
    '\u1E3D': 'l',
    '\u1E3B': 'l',
    '\u017F': 'l',
    '\u0142': 'l',
    '\u019A': 'l',
    '\u026B': 'l',
    '\u2C61': 'l',
    '\uA749': 'l',
    '\uA781': 'l',
    '\uA747': 'l',
    '\u01C9': 'lj',
    '\u24DC': 'm',
    '\uFF4D': 'm',
    '\u1E3F': 'm',
    '\u1E41': 'm',
    '\u1E43': 'm',
    '\u0271': 'm',
    '\u026F': 'm',
    '\u24DD': 'n',
    '\uFF4E': 'n',
    '\u01F9': 'n',
    '\u0144': 'n',
    '\u00F1': 'n',
    '\u1E45': 'n',
    '\u0148': 'n',
    '\u1E47': 'n',
    '\u0146': 'n',
    '\u1E4B': 'n',
    '\u1E49': 'n',
    '\u019E': 'n',
    '\u0272': 'n',
    '\u0149': 'n',
    '\uA791': 'n',
    '\uA7A5': 'n',
    '\u01CC': 'nj',
    '\u24DE': 'o',
    '\uFF4F': 'o',
    '\u00F2': 'o',
    '\u00F3': 'o',
    '\u00F4': 'o',
    '\u1ED3': 'o',
    '\u1ED1': 'o',
    '\u1ED7': 'o',
    '\u1ED5': 'o',
    '\u00F5': 'o',
    '\u1E4D': 'o',
    '\u022D': 'o',
    '\u1E4F': 'o',
    '\u014D': 'o',
    '\u1E51': 'o',
    '\u1E53': 'o',
    '\u014F': 'o',
    '\u022F': 'o',
    '\u0231': 'o',
    '\u00F6': 'o',
    '\u022B': 'o',
    '\u1ECF': 'o',
    '\u0151': 'o',
    '\u01D2': 'o',
    '\u020D': 'o',
    '\u020F': 'o',
    '\u01A1': 'o',
    '\u1EDD': 'o',
    '\u1EDB': 'o',
    '\u1EE1': 'o',
    '\u1EDF': 'o',
    '\u1EE3': 'o',
    '\u1ECD': 'o',
    '\u1ED9': 'o',
    '\u01EB': 'o',
    '\u01ED': 'o',
    '\u00F8': 'o',
    '\u01FF': 'o',
    '\u0254': 'o',
    '\uA74B': 'o',
    '\uA74D': 'o',
    '\u0275': 'o',
    '\u01A3': 'oi',
    '\u0223': 'ou',
    '\uA74F': 'oo',
    '\u24DF': 'p',
    '\uFF50': 'p',
    '\u1E55': 'p',
    '\u1E57': 'p',
    '\u01A5': 'p',
    '\u1D7D': 'p',
    '\uA751': 'p',
    '\uA753': 'p',
    '\uA755': 'p',
    '\u24E0': 'q',
    '\uFF51': 'q',
    '\u024B': 'q',
    '\uA757': 'q',
    '\uA759': 'q',
    '\u24E1': 'r',
    '\uFF52': 'r',
    '\u0155': 'r',
    '\u1E59': 'r',
    '\u0159': 'r',
    '\u0211': 'r',
    '\u0213': 'r',
    '\u1E5B': 'r',
    '\u1E5D': 'r',
    '\u0157': 'r',
    '\u1E5F': 'r',
    '\u024D': 'r',
    '\u027D': 'r',
    '\uA75B': 'r',
    '\uA7A7': 'r',
    '\uA783': 'r',
    '\u24E2': 's',
    '\uFF53': 's',
    '\u00DF': 's',
    '\u015B': 's',
    '\u1E65': 's',
    '\u015D': 's',
    '\u1E61': 's',
    '\u0161': 's',
    '\u1E67': 's',
    '\u1E63': 's',
    '\u1E69': 's',
    '\u0219': 's',
    '\u015F': 's',
    '\u023F': 's',
    '\uA7A9': 's',
    '\uA785': 's',
    '\u1E9B': 's',
    '\u24E3': 't',
    '\uFF54': 't',
    '\u1E6B': 't',
    '\u1E97': 't',
    '\u0165': 't',
    '\u1E6D': 't',
    '\u021B': 't',
    '\u0163': 't',
    '\u1E71': 't',
    '\u1E6F': 't',
    '\u0167': 't',
    '\u01AD': 't',
    '\u0288': 't',
    '\u2C66': 't',
    '\uA787': 't',
    '\uA729': 'tz',
    '\u24E4': 'u',
    '\uFF55': 'u',
    '\u00F9': 'u',
    '\u00FA': 'u',
    '\u00FB': 'u',
    '\u0169': 'u',
    '\u1E79': 'u',
    '\u016B': 'u',
    '\u1E7B': 'u',
    '\u016D': 'u',
    '\u00FC': 'u',
    '\u01DC': 'u',
    '\u01D8': 'u',
    '\u01D6': 'u',
    '\u01DA': 'u',
    '\u1EE7': 'u',
    '\u016F': 'u',
    '\u0171': 'u',
    '\u01D4': 'u',
    '\u0215': 'u',
    '\u0217': 'u',
    '\u01B0': 'u',
    '\u1EEB': 'u',
    '\u1EE9': 'u',
    '\u1EEF': 'u',
    '\u1EED': 'u',
    '\u1EF1': 'u',
    '\u1EE5': 'u',
    '\u1E73': 'u',
    '\u0173': 'u',
    '\u1E77': 'u',
    '\u1E75': 'u',
    '\u0289': 'u',
    '\u24E5': 'v',
    '\uFF56': 'v',
    '\u1E7D': 'v',
    '\u1E7F': 'v',
    '\u028B': 'v',
    '\uA75F': 'v',
    '\u028C': 'v',
    '\uA761': 'vy',
    '\u24E6': 'w',
    '\uFF57': 'w',
    '\u1E81': 'w',
    '\u1E83': 'w',
    '\u0175': 'w',
    '\u1E87': 'w',
    '\u1E85': 'w',
    '\u1E98': 'w',
    '\u1E89': 'w',
    '\u2C73': 'w',
    '\u24E7': 'x',
    '\uFF58': 'x',
    '\u1E8B': 'x',
    '\u1E8D': 'x',
    '\u24E8': 'y',
    '\uFF59': 'y',
    '\u1EF3': 'y',
    '\u00FD': 'y',
    '\u0177': 'y',
    '\u1EF9': 'y',
    '\u0233': 'y',
    '\u1E8F': 'y',
    '\u00FF': 'y',
    '\u1EF7': 'y',
    '\u1E99': 'y',
    '\u1EF5': 'y',
    '\u01B4': 'y',
    '\u024F': 'y',
    '\u1EFF': 'y',
    '\u24E9': 'z',
    '\uFF5A': 'z',
    '\u017A': 'z',
    '\u1E91': 'z',
    '\u017C': 'z',
    '\u017E': 'z',
    '\u1E93': 'z',
    '\u1E95': 'z',
    '\u01B6': 'z',
    '\u0225': 'z',
    '\u0240': 'z',
    '\u2C6C': 'z',
    '\uA763': 'z',
    '\u0386': '\u0391',
    '\u0388': '\u0395',
    '\u0389': '\u0397',
    '\u038A': '\u0399',
    '\u03AA': '\u0399',
    '\u038C': '\u039F',
    '\u038E': '\u03A5',
    '\u03AB': '\u03A5',
    '\u038F': '\u03A9',
    '\u03AC': '\u03B1',
    '\u03AD': '\u03B5',
    '\u03AE': '\u03B7',
    '\u03AF': '\u03B9',
    '\u03CA': '\u03B9',
    '\u0390': '\u03B9',
    '\u03CC': '\u03BF',
    '\u03CD': '\u03C5',
    '\u03CB': '\u03C5',
    '\u03B0': '\u03C5',
    '\u03C9': '\u03C9',
    '\u03C2': '\u03C3'
};
/**
 * @param {?} text
 * @return {?}
 */
function stripSpecialChars(text) {
    /** @type {?} */
    const match = (/**
     * @param {?} a
     * @return {?}
     */
    (a) => {
        return diacritics[a] || a;
    });
    return text.replace(/[^\u0000-\u007E]/g, match);
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/items-list.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ItemsList {
    /**
     * @param {?} _ngSelect
     * @param {?} _selectionModel
     */
    constructor(_ngSelect, _selectionModel) {
        this._ngSelect = _ngSelect;
        this._selectionModel = _selectionModel;
        this._items = [];
        this._filteredItems = [];
        this._markedIndex = -1;
    }
    /**
     * @return {?}
     */
    get items() {
        return this._items;
    }
    /**
     * @return {?}
     */
    get filteredItems() {
        return this._filteredItems;
    }
    /**
     * @return {?}
     */
    get markedIndex() {
        return this._markedIndex;
    }
    /**
     * @return {?}
     */
    get selectedItems() {
        return this._selectionModel.value;
    }
    /**
     * @return {?}
     */
    get markedItem() {
        return this._filteredItems[this._markedIndex];
    }
    /**
     * @return {?}
     */
    get noItemsToSelect() {
        return this._ngSelect.hideSelected && this._items.length === this.selectedItems.length;
    }
    /**
     * @return {?}
     */
    get maxItemsSelected() {
        return this._ngSelect.multiple && this._ngSelect.maxSelectedItems <= this.selectedItems.length;
    }
    /**
     * @return {?}
     */
    get lastSelectedItem() {
        /** @type {?} */
        let i = this.selectedItems.length - 1;
        for (; i >= 0; i--) {
            /** @type {?} */
            let item = this.selectedItems[i];
            if (!item.disabled) {
                return item;
            }
        }
        return null;
    }
    /**
     * @param {?} items
     * @return {?}
     */
    setItems(items) {
        this._items = items.map((/**
         * @param {?} item
         * @param {?} index
         * @return {?}
         */
        (item, index) => this.mapItem(item, index)));
        if (this._ngSelect.groupBy) {
            this._groups = this._groupBy(this._items, this._ngSelect.groupBy);
            this._items = this._flatten(this._groups);
        }
        else {
            this._groups = new Map();
            this._groups.set(undefined, this._items);
        }
        this._filteredItems = [...this._items];
    }
    /**
     * @param {?} item
     * @return {?}
     */
    select(item) {
        if (item.selected || this.maxItemsSelected) {
            return;
        }
        /** @type {?} */
        const multiple = this._ngSelect.multiple;
        if (!multiple) {
            this.clearSelected();
        }
        this._selectionModel.select(item, multiple, this._ngSelect.selectableGroupAsModel);
        if (this._ngSelect.hideSelected) {
            this._hideSelected(item);
        }
    }
    /**
     * @param {?} item
     * @return {?}
     */
    unselect(item) {
        if (!item.selected) {
            return;
        }
        this._selectionModel.unselect(item, this._ngSelect.multiple);
        if (this._ngSelect.hideSelected && isDefined(item.index) && this._ngSelect.multiple) {
            this._showSelected(item);
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    findItem(value) {
        /** @type {?} */
        let findBy;
        if (this._ngSelect.compareWith) {
            findBy = (/**
             * @param {?} item
             * @return {?}
             */
            item => this._ngSelect.compareWith(item.value, value));
        }
        else if (this._ngSelect.bindValue) {
            findBy = (/**
             * @param {?} item
             * @return {?}
             */
            item => !item.children && this.resolveNested(item.value, this._ngSelect.bindValue) === value);
        }
        else {
            findBy = (/**
             * @param {?} item
             * @return {?}
             */
            item => item.value === value ||
                !item.children && item.label && item.label === this.resolveNested(value, this._ngSelect.bindLabel));
        }
        return this._items.find((/**
         * @param {?} item
         * @return {?}
         */
        item => findBy(item)));
    }
    /**
     * @param {?} item
     * @return {?}
     */
    addItem(item) {
        /** @type {?} */
        const option = this.mapItem(item, this._items.length);
        this._items.push(option);
        this._filteredItems.push(option);
        return option;
    }
    /**
     * @param {?=} keepDisabled
     * @return {?}
     */
    clearSelected(keepDisabled = false) {
        this._selectionModel.clear(keepDisabled);
        this._items.forEach((/**
         * @param {?} item
         * @return {?}
         */
        item => {
            item.selected = keepDisabled && item.selected && item.disabled;
            item.marked = false;
        }));
        if (this._ngSelect.hideSelected) {
            this.resetFilteredItems();
        }
    }
    /**
     * @param {?} term
     * @return {?}
     */
    findByLabel(term) {
        term = stripSpecialChars(term).toLocaleLowerCase();
        return this.filteredItems.find((/**
         * @param {?} item
         * @return {?}
         */
        item => {
            /** @type {?} */
            const label = stripSpecialChars(item.label).toLocaleLowerCase();
            return label.substr(0, term.length) === term;
        }));
    }
    /**
     * @param {?} term
     * @return {?}
     */
    filter(term) {
        if (!term) {
            this.resetFilteredItems();
            return;
        }
        this._filteredItems = [];
        term = this._ngSelect.searchFn ? term : stripSpecialChars(term).toLocaleLowerCase();
        /** @type {?} */
        const match = this._ngSelect.searchFn || this._defaultSearchFn;
        /** @type {?} */
        const hideSelected = this._ngSelect.hideSelected;
        for (const key of Array.from(this._groups.keys())) {
            /** @type {?} */
            const matchedItems = [];
            for (const item of this._groups.get(key)) {
                if (hideSelected && (item.parent && item.parent.selected || item.selected)) {
                    continue;
                }
                /** @type {?} */
                const searchItem = this._ngSelect.searchFn ? item.value : item;
                if (match(term, searchItem)) {
                    matchedItems.push(item);
                }
            }
            if (matchedItems.length > 0) {
                const [last] = matchedItems.slice(-1);
                if (last.parent) {
                    /** @type {?} */
                    const head = this._items.find((/**
                     * @param {?} x
                     * @return {?}
                     */
                    x => x === last.parent));
                    this._filteredItems.push(head);
                }
                this._filteredItems.push(...matchedItems);
            }
        }
    }
    /**
     * @return {?}
     */
    resetFilteredItems() {
        if (this._filteredItems.length === this._items.length) {
            return;
        }
        if (this._ngSelect.hideSelected && this.selectedItems.length > 0) {
            this._filteredItems = this._items.filter((/**
             * @param {?} x
             * @return {?}
             */
            x => !x.selected));
        }
        else {
            this._filteredItems = this._items;
        }
    }
    /**
     * @return {?}
     */
    unmarkItem() {
        this._markedIndex = -1;
    }
    /**
     * @return {?}
     */
    markNextItem() {
        this._stepToItem(+1);
    }
    /**
     * @return {?}
     */
    markPreviousItem() {
        this._stepToItem(-1);
    }
    /**
     * @param {?} item
     * @return {?}
     */
    markItem(item) {
        this._markedIndex = this._filteredItems.indexOf(item);
    }
    /**
     * @param {?=} markDefault
     * @return {?}
     */
    markSelectedOrDefault(markDefault) {
        if (this._filteredItems.length === 0) {
            return;
        }
        /** @type {?} */
        const lastMarkedIndex = this._getLastMarkedIndex();
        if (lastMarkedIndex > -1) {
            this._markedIndex = lastMarkedIndex;
        }
        else {
            this._markedIndex = markDefault ? this.filteredItems.findIndex((/**
             * @param {?} x
             * @return {?}
             */
            x => !x.disabled)) : -1;
        }
    }
    /**
     * @param {?} option
     * @param {?} key
     * @return {?}
     */
    resolveNested(option, key) {
        if (!isObject(option)) {
            return option;
        }
        if (key.indexOf('.') === -1) {
            return option[key];
        }
        else {
            /** @type {?} */
            let keys = key.split('.');
            /** @type {?} */
            let value = option;
            for (let i = 0, len = keys.length; i < len; ++i) {
                if (value == null) {
                    return null;
                }
                value = value[keys[i]];
            }
            return value;
        }
    }
    /**
     * @param {?} item
     * @param {?} index
     * @return {?}
     */
    mapItem(item, index) {
        /** @type {?} */
        const label = isDefined(item.$ngOptionLabel) ? item.$ngOptionLabel : this.resolveNested(item, this._ngSelect.bindLabel);
        /** @type {?} */
        const value = isDefined(item.$ngOptionValue) ? item.$ngOptionValue : item;
        return {
            index: index,
            label: isDefined(label) ? label.toString() : '',
            value: value,
            disabled: item.disabled,
            htmlId: `${this._ngSelect.dropdownId}-${index}`,
        };
    }
    /**
     * @return {?}
     */
    mapSelectedItems() {
        /** @type {?} */
        const multiple = this._ngSelect.multiple;
        for (const selected of this.selectedItems) {
            /** @type {?} */
            const value = this._ngSelect.bindValue ? this.resolveNested(selected.value, this._ngSelect.bindValue) : selected.value;
            /** @type {?} */
            const item = isDefined(value) ? this.findItem(value) : null;
            this._selectionModel.unselect(selected, multiple);
            this._selectionModel.select(item || selected, multiple, this._ngSelect.selectableGroupAsModel);
        }
        if (this._ngSelect.hideSelected) {
            this._filteredItems = this.filteredItems.filter((/**
             * @param {?} x
             * @return {?}
             */
            x => this.selectedItems.indexOf(x) === -1));
        }
    }
    /**
     * @private
     * @param {?} item
     * @return {?}
     */
    _showSelected(item) {
        this._filteredItems.push(item);
        if (item.parent) {
            /** @type {?} */
            const parent = item.parent;
            /** @type {?} */
            const parentExists = this._filteredItems.find((/**
             * @param {?} x
             * @return {?}
             */
            x => x === parent));
            if (!parentExists) {
                this._filteredItems.push(parent);
            }
        }
        else if (item.children) {
            for (const child of item.children) {
                child.selected = false;
                this._filteredItems.push(child);
            }
        }
        this._filteredItems = [...this._filteredItems.sort((/**
             * @param {?} a
             * @param {?} b
             * @return {?}
             */
            (a, b) => (a.index - b.index)))];
    }
    /**
     * @private
     * @param {?} item
     * @return {?}
     */
    _hideSelected(item) {
        this._filteredItems = this._filteredItems.filter((/**
         * @param {?} x
         * @return {?}
         */
        x => x !== item));
        if (item.parent) {
            /** @type {?} */
            const children = item.parent.children;
            if (children.every((/**
             * @param {?} x
             * @return {?}
             */
            x => x.selected))) {
                this._filteredItems = this._filteredItems.filter((/**
                 * @param {?} x
                 * @return {?}
                 */
                x => x !== item.parent));
            }
        }
        else if (item.children) {
            this._filteredItems = this.filteredItems.filter((/**
             * @param {?} x
             * @return {?}
             */
            x => x.parent !== item));
        }
    }
    /**
     * @private
     * @param {?} search
     * @param {?} opt
     * @return {?}
     */
    _defaultSearchFn(search, opt) {
        /** @type {?} */
        const label = stripSpecialChars(opt.label).toLocaleLowerCase();
        return label.indexOf(search) > -1;
    }
    /**
     * @private
     * @param {?} steps
     * @return {?}
     */
    _getNextItemIndex(steps) {
        if (steps > 0) {
            return (this._markedIndex >= this._filteredItems.length - 1) ? 0 : (this._markedIndex + 1);
        }
        return (this._markedIndex <= 0) ? (this._filteredItems.length - 1) : (this._markedIndex - 1);
    }
    /**
     * @private
     * @param {?} steps
     * @return {?}
     */
    _stepToItem(steps) {
        if (this._filteredItems.length === 0 || this._filteredItems.every((/**
         * @param {?} x
         * @return {?}
         */
        x => x.disabled))) {
            return;
        }
        this._markedIndex = this._getNextItemIndex(steps);
        if (this.markedItem.disabled) {
            this._stepToItem(steps);
        }
    }
    /**
     * @private
     * @return {?}
     */
    _getLastMarkedIndex() {
        if (this._ngSelect.hideSelected) {
            return -1;
        }
        if (this._markedIndex > -1 && this.markedItem === undefined) {
            return -1;
        }
        /** @type {?} */
        const selectedIndex = this._filteredItems.indexOf(this.lastSelectedItem);
        if (this.lastSelectedItem && selectedIndex < 0) {
            return -1;
        }
        return Math.max(this.markedIndex, selectedIndex);
    }
    /**
     * @private
     * @param {?} items
     * @param {?} prop
     * @return {?}
     */
    _groupBy(items, prop) {
        /** @type {?} */
        const groups = new Map();
        if (items.length === 0) {
            return groups;
        }
        // Check if items are already grouped by given key.
        if (Array.isArray(items[0].value[(/** @type {?} */ (prop))])) {
            for (const item of items) {
                /** @type {?} */
                const children = (item.value[(/** @type {?} */ (prop))] || []).map((/**
                 * @param {?} x
                 * @param {?} index
                 * @return {?}
                 */
                (x, index) => this.mapItem(x, index)));
                groups.set(item, children);
            }
            return groups;
        }
        /** @type {?} */
        const isFnKey = isFunction(this._ngSelect.groupBy);
        /** @type {?} */
        const keyFn = (/**
         * @param {?} item
         * @return {?}
         */
        (item) => {
            /** @type {?} */
            let key = isFnKey ? ((/** @type {?} */ (prop)))(item.value) : item.value[(/** @type {?} */ (prop))];
            return isDefined(key) ? key : undefined;
        });
        // Group items by key.
        for (const item of items) {
            /** @type {?} */
            let key = keyFn(item);
            /** @type {?} */
            const group = groups.get(key);
            if (group) {
                group.push(item);
            }
            else {
                groups.set(key, [item]);
            }
        }
        return groups;
    }
    /**
     * @private
     * @param {?} groups
     * @return {?}
     */
    _flatten(groups) {
        /** @type {?} */
        const isGroupByFn = isFunction(this._ngSelect.groupBy);
        /** @type {?} */
        const items = [];
        for (const key of Array.from(groups.keys())) {
            /** @type {?} */
            let i = items.length;
            if (key === undefined) {
                /** @type {?} */
                const withoutGroup = groups.get(undefined) || [];
                items.push(...withoutGroup.map((/**
                 * @param {?} x
                 * @return {?}
                 */
                x => {
                    x.index = i++;
                    return x;
                })));
                continue;
            }
            /** @type {?} */
            const isObjectKey = isObject(key);
            /** @type {?} */
            const parent = {
                label: isObjectKey ? '' : String(key),
                children: undefined,
                parent: null,
                index: i++,
                disabled: !this._ngSelect.selectableGroup,
                htmlId: newId(),
            };
            /** @type {?} */
            const groupKey = isGroupByFn ? this._ngSelect.bindLabel : (/** @type {?} */ (this._ngSelect.groupBy));
            /** @type {?} */
            const groupValue = this._ngSelect.groupValue || ((/**
             * @return {?}
             */
            () => {
                if (isObjectKey) {
                    return ((/** @type {?} */ (key))).value;
                }
                return { [groupKey]: key };
            }));
            /** @type {?} */
            const children = groups.get(key).map((/**
             * @param {?} x
             * @return {?}
             */
            x => {
                x.parent = parent;
                x.children = undefined;
                x.index = i++;
                return x;
            }));
            parent.children = children;
            parent.value = groupValue(key, children.map((/**
             * @param {?} x
             * @return {?}
             */
            x => x.value)));
            items.push(parent);
            items.push(...children);
        }
        return items;
    }
}
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/ng-select.types.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function NgOption() { }
if (false) {}
/** @enum {number} */
const KeyCode = {
    Tab: 9,
    Enter: 13,
    Esc: 27,
    Space: 32,
    ArrowUp: 38,
    ArrowDown: 40,
    Backspace: 8,
};
KeyCode[KeyCode.Tab] = 'Tab';
KeyCode[KeyCode.Enter] = 'Enter';
KeyCode[KeyCode.Esc] = 'Esc';
KeyCode[KeyCode.Space] = 'Space';
KeyCode[KeyCode.ArrowUp] = 'ArrowUp';
KeyCode[KeyCode.ArrowDown] = 'ArrowDown';
KeyCode[KeyCode.Backspace] = 'Backspace';

/**
 * @fileoverview added by tsickle
 * Generated from: lib/ng-dropdown-panel.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function ItemsRangeResult() { }
if (false) {}
/**
 * @record
 */
function PanelDimensions() { }
if (false) {}
class NgDropdownPanelService {
    constructor() {
        this._dimensions = {
            itemHeight: 0,
            panelHeight: 0,
            itemsPerViewport: 0
        };
    }
    /**
     * @return {?}
     */
    get dimensions() {
        return this._dimensions;
    }
    /**
     * @param {?} scrollPos
     * @param {?} itemsLength
     * @param {?} buffer
     * @return {?}
     */
    calculateItems(scrollPos, itemsLength, buffer) {
        /** @type {?} */
        const d = this._dimensions;
        /** @type {?} */
        const scrollHeight = d.itemHeight * itemsLength;
        /** @type {?} */
        const scrollTop = Math.max(0, scrollPos);
        /** @type {?} */
        const indexByScrollTop = scrollTop / scrollHeight * itemsLength;
        /** @type {?} */
        let end = Math.min(itemsLength, Math.ceil(indexByScrollTop) + (d.itemsPerViewport + 1));
        /** @type {?} */
        const maxStartEnd = end;
        /** @type {?} */
        const maxStart = Math.max(0, maxStartEnd - d.itemsPerViewport);
        /** @type {?} */
        let start = Math.min(maxStart, Math.floor(indexByScrollTop));
        /** @type {?} */
        let topPadding = d.itemHeight * Math.ceil(start) - (d.itemHeight * Math.min(start, buffer));
        topPadding = !isNaN(topPadding) ? topPadding : 0;
        start = !isNaN(start) ? start : -1;
        end = !isNaN(end) ? end : -1;
        start -= buffer;
        start = Math.max(0, start);
        end += buffer;
        end = Math.min(itemsLength, end);
        return {
            topPadding,
            scrollHeight,
            start,
            end
        };
    }
    /**
     * @param {?} itemHeight
     * @param {?} panelHeight
     * @return {?}
     */
    setDimensions(itemHeight, panelHeight) {
        /** @type {?} */
        const itemsPerViewport = Math.max(1, Math.floor(panelHeight / itemHeight));
        this._dimensions = {
            itemHeight,
            panelHeight,
            itemsPerViewport
        };
    }
    /**
     * @param {?} itemTop
     * @param {?} itemHeight
     * @param {?} lastScroll
     * @return {?}
     */
    getScrollTo(itemTop, itemHeight, lastScroll) {
        const { panelHeight } = this.dimensions;
        /** @type {?} */
        const itemBottom = itemTop + itemHeight;
        /** @type {?} */
        const top = lastScroll;
        /** @type {?} */
        const bottom = top + panelHeight;
        if (panelHeight >= itemBottom && lastScroll === itemTop) {
            return null;
        }
        if (itemBottom > bottom) {
            return top + itemBottom - bottom;
        }
        else if (itemTop <= top) {
            return itemTop;
        }
        return null;
    }
}
NgDropdownPanelService.ɵfac = function NgDropdownPanelService_Factory(t) { return new (t || NgDropdownPanelService)(); };
NgDropdownPanelService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: NgDropdownPanelService, factory: NgDropdownPanelService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgDropdownPanelService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return []; }, null); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/ng-dropdown-panel.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const TOP_CSS_CLASS = 'ng-select-top';
/** @type {?} */
const BOTTOM_CSS_CLASS = 'ng-select-bottom';
/** @type {?} */
const SCROLL_SCHEDULER = typeof requestAnimationFrame !== 'undefined' ? rxjs__WEBPACK_IMPORTED_MODULE_3__["animationFrameScheduler"] : rxjs__WEBPACK_IMPORTED_MODULE_3__["asapScheduler"];
class NgDropdownPanelComponent {
    /**
     * @param {?} _renderer
     * @param {?} _zone
     * @param {?} _panelService
     * @param {?} _elementRef
     * @param {?} _document
     */
    constructor(_renderer, _zone, _panelService, _elementRef, _document) {
        this._renderer = _renderer;
        this._zone = _zone;
        this._panelService = _panelService;
        this._document = _document;
        this.items = [];
        this.position = 'auto';
        this.virtualScroll = false;
        this.filterValue = null;
        this.update = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.scroll = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.scrollToEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.outsideClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this._destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this._scrollToEndFired = false;
        this._updateScrollHeight = false;
        this._lastScrollPosition = 0;
        this._dropdown = _elementRef.nativeElement;
    }
    /**
     * @return {?}
     */
    get currentPosition() {
        return this._currentPosition;
    }
    /**
     * @private
     * @return {?}
     */
    get itemsLength() {
        return this._itemsLength;
    }
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    set itemsLength(value) {
        if (value !== this._itemsLength) {
            this._itemsLength = value;
            this._onItemsLengthChanged();
        }
    }
    /**
     * @private
     * @return {?}
     */
    get _startOffset() {
        if (this.markedItem) {
            const { itemHeight, panelHeight } = this._panelService.dimensions;
            /** @type {?} */
            const offset = this.markedItem.index * itemHeight;
            return panelHeight > offset ? 0 : offset;
        }
        return 0;
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    handleMousedown($event) {
        /** @type {?} */
        const target = (/** @type {?} */ ($event.target));
        if (target.tagName === 'INPUT') {
            return;
        }
        $event.preventDefault();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this._select = this._dropdown.parentElement;
        this._virtualPadding = this.paddingElementRef.nativeElement;
        this._scrollablePanel = this.scrollElementRef.nativeElement;
        this._contentPanel = this.contentElementRef.nativeElement;
        this._handleScroll();
        this._handleOutsideClick();
        this._appendDropdown();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes.items) {
            /** @type {?} */
            const change = changes.items;
            this._onItemsChange(change.currentValue, change.firstChange);
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._destroy$.next();
        this._destroy$.complete();
        this._destroy$.unsubscribe();
        if (this.appendTo) {
            this._renderer.removeChild(this._dropdown.parentNode, this._dropdown);
        }
    }
    /**
     * @param {?} option
     * @param {?=} startFromOption
     * @return {?}
     */
    scrollTo(option, startFromOption = false) {
        if (!option) {
            return;
        }
        /** @type {?} */
        const index = this.items.indexOf(option);
        if (index < 0 || index >= this.itemsLength) {
            return;
        }
        /** @type {?} */
        let scrollTo;
        if (this.virtualScroll) {
            /** @type {?} */
            const itemHeight = this._panelService.dimensions.itemHeight;
            scrollTo = this._panelService.getScrollTo(index * itemHeight, itemHeight, this._lastScrollPosition);
        }
        else {
            /** @type {?} */
            const item = this._dropdown.querySelector(`#${option.htmlId}`);
            /** @type {?} */
            const lastScroll = startFromOption ? item.offsetTop : this._lastScrollPosition;
            scrollTo = this._panelService.getScrollTo(item.offsetTop, item.clientHeight, lastScroll);
        }
        if (isDefined(scrollTo)) {
            this._scrollablePanel.scrollTop = scrollTo;
        }
    }
    /**
     * @return {?}
     */
    scrollToTag() {
        /** @type {?} */
        const panel = this._scrollablePanel;
        panel.scrollTop = panel.scrollHeight - panel.clientHeight;
    }
    /**
     * @return {?}
     */
    adjustPosition() {
        this._updateYPosition();
    }
    /**
     * @private
     * @return {?}
     */
    _handleDropdownPosition() {
        this._currentPosition = this._calculateCurrentPosition(this._dropdown);
        if (this._currentPosition === 'top') {
            this._renderer.addClass(this._dropdown, TOP_CSS_CLASS);
            this._renderer.removeClass(this._dropdown, BOTTOM_CSS_CLASS);
            this._renderer.addClass(this._select, TOP_CSS_CLASS);
            this._renderer.removeClass(this._select, BOTTOM_CSS_CLASS);
        }
        else {
            this._renderer.addClass(this._dropdown, BOTTOM_CSS_CLASS);
            this._renderer.removeClass(this._dropdown, TOP_CSS_CLASS);
            this._renderer.addClass(this._select, BOTTOM_CSS_CLASS);
            this._renderer.removeClass(this._select, TOP_CSS_CLASS);
        }
        if (this.appendTo) {
            this._updateYPosition();
        }
        this._dropdown.style.opacity = '1';
    }
    /**
     * @private
     * @return {?}
     */
    _handleScroll() {
        this._zone.runOutsideAngular((/**
         * @return {?}
         */
        () => {
            Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["fromEvent"])(this.scrollElementRef.nativeElement, 'scroll')
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this._destroy$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["auditTime"])(0, SCROLL_SCHEDULER))
                .subscribe((/**
             * @param {?} e
             * @return {?}
             */
            (e) => {
                /** @type {?} */
                const path = e.path || (e.composedPath && e.composedPath());
                /** @type {?} */
                const scrollTop = !path || path.length === 0 ? e.target.scrollTop : path[0].scrollTop;
                this._onContentScrolled(scrollTop);
            }));
        }));
    }
    /**
     * @private
     * @return {?}
     */
    _handleOutsideClick() {
        if (!this._document) {
            return;
        }
        this._zone.runOutsideAngular((/**
         * @return {?}
         */
        () => {
            Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["merge"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["fromEvent"])(this._document, 'touchstart', { capture: true }), Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["fromEvent"])(this._document, 'mousedown', { capture: true })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this._destroy$))
                .subscribe((/**
             * @param {?} $event
             * @return {?}
             */
            $event => this._checkToClose($event)));
        }));
    }
    /**
     * @private
     * @param {?} $event
     * @return {?}
     */
    _checkToClose($event) {
        if (this._select.contains($event.target) || this._dropdown.contains($event.target)) {
            return;
        }
        /** @type {?} */
        const path = $event.path || ($event.composedPath && $event.composedPath());
        if ($event.target && $event.target.shadowRoot && path && path[0] && this._select.contains(path[0])) {
            return;
        }
        this._zone.run((/**
         * @return {?}
         */
        () => this.outsideClick.emit()));
    }
    /**
     * @private
     * @param {?} items
     * @param {?} firstChange
     * @return {?}
     */
    _onItemsChange(items, firstChange) {
        this.items = items || [];
        this._scrollToEndFired = false;
        this.itemsLength = items.length;
        if (this.virtualScroll) {
            this._updateItemsRange(firstChange);
        }
        else {
            this._setVirtualHeight();
            this._updateItems(firstChange);
        }
    }
    /**
     * @private
     * @param {?} firstChange
     * @return {?}
     */
    _updateItems(firstChange) {
        this.update.emit(this.items);
        if (firstChange === false) {
            return;
        }
        this._zone.runOutsideAngular((/**
         * @return {?}
         */
        () => {
            Promise.resolve().then((/**
             * @return {?}
             */
            () => {
                /** @type {?} */
                const panelHeight = this._scrollablePanel.clientHeight;
                this._panelService.setDimensions(0, panelHeight);
                this._handleDropdownPosition();
                this.scrollTo(this.markedItem, firstChange);
            }));
        }));
    }
    /**
     * @private
     * @param {?} firstChange
     * @return {?}
     */
    _updateItemsRange(firstChange) {
        this._zone.runOutsideAngular((/**
         * @return {?}
         */
        () => {
            this._measureDimensions().then((/**
             * @return {?}
             */
            () => {
                if (firstChange) {
                    this._renderItemsRange(this._startOffset);
                    this._handleDropdownPosition();
                }
                else {
                    this._renderItemsRange();
                }
            }));
        }));
    }
    /**
     * @private
     * @param {?} scrollTop
     * @return {?}
     */
    _onContentScrolled(scrollTop) {
        if (this.virtualScroll) {
            this._renderItemsRange(scrollTop);
        }
        this._lastScrollPosition = scrollTop;
        this._fireScrollToEnd(scrollTop);
    }
    /**
     * @private
     * @param {?} height
     * @return {?}
     */
    _updateVirtualHeight(height) {
        if (this._updateScrollHeight) {
            this._virtualPadding.style.height = `${height}px`;
            this._updateScrollHeight = false;
        }
    }
    /**
     * @private
     * @return {?}
     */
    _setVirtualHeight() {
        if (!this._virtualPadding) {
            return;
        }
        this._virtualPadding.style.height = `0px`;
    }
    /**
     * @private
     * @return {?}
     */
    _onItemsLengthChanged() {
        this._updateScrollHeight = true;
    }
    /**
     * @private
     * @param {?=} scrollTop
     * @return {?}
     */
    _renderItemsRange(scrollTop = null) {
        if (scrollTop && this._lastScrollPosition === scrollTop) {
            return;
        }
        scrollTop = scrollTop || this._scrollablePanel.scrollTop;
        /** @type {?} */
        const range = this._panelService.calculateItems(scrollTop, this.itemsLength, this.bufferAmount);
        this._updateVirtualHeight(range.scrollHeight);
        this._contentPanel.style.transform = `translateY(${range.topPadding}px)`;
        this._zone.run((/**
         * @return {?}
         */
        () => {
            this.update.emit(this.items.slice(range.start, range.end));
            this.scroll.emit({ start: range.start, end: range.end });
        }));
        if (isDefined(scrollTop) && this._lastScrollPosition === 0) {
            this._scrollablePanel.scrollTop = scrollTop;
            this._lastScrollPosition = scrollTop;
        }
    }
    /**
     * @private
     * @return {?}
     */
    _measureDimensions() {
        if (this._panelService.dimensions.itemHeight > 0 || this.itemsLength === 0) {
            return Promise.resolve(this._panelService.dimensions);
        }
        const [first] = this.items;
        this.update.emit([first]);
        return Promise.resolve().then((/**
         * @return {?}
         */
        () => {
            /** @type {?} */
            const option = this._dropdown.querySelector(`#${first.htmlId}`);
            /** @type {?} */
            const optionHeight = option.clientHeight;
            this._virtualPadding.style.height = `${optionHeight * this.itemsLength}px`;
            /** @type {?} */
            const panelHeight = this._scrollablePanel.clientHeight;
            this._panelService.setDimensions(optionHeight, panelHeight);
            return this._panelService.dimensions;
        }));
    }
    /**
     * @private
     * @param {?} scrollTop
     * @return {?}
     */
    _fireScrollToEnd(scrollTop) {
        if (this._scrollToEndFired || scrollTop === 0) {
            return;
        }
        /** @type {?} */
        const padding = this.virtualScroll ?
            this._virtualPadding :
            this._contentPanel;
        if (scrollTop + this._dropdown.clientHeight >= padding.clientHeight) {
            this._zone.run((/**
             * @return {?}
             */
            () => this.scrollToEnd.emit()));
            this._scrollToEndFired = true;
        }
    }
    /**
     * @private
     * @param {?} dropdownEl
     * @return {?}
     */
    _calculateCurrentPosition(dropdownEl) {
        if (this.position !== 'auto') {
            return this.position;
        }
        /** @type {?} */
        const selectRect = this._select.getBoundingClientRect();
        /** @type {?} */
        const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        /** @type {?} */
        const offsetTop = selectRect.top + window.pageYOffset;
        /** @type {?} */
        const height = selectRect.height;
        /** @type {?} */
        const dropdownHeight = dropdownEl.getBoundingClientRect().height;
        if (offsetTop + height + dropdownHeight > scrollTop + document.documentElement.clientHeight) {
            return 'top';
        }
        else {
            return 'bottom';
        }
    }
    /**
     * @private
     * @return {?}
     */
    _appendDropdown() {
        if (!this.appendTo) {
            return;
        }
        this._parent = document.querySelector(this.appendTo);
        if (!this._parent) {
            throw new Error(`appendTo selector ${this.appendTo} did not found any parent element`);
        }
        this._updateXPosition();
        this._parent.appendChild(this._dropdown);
    }
    /**
     * @private
     * @return {?}
     */
    _updateXPosition() {
        /** @type {?} */
        const select = this._select.getBoundingClientRect();
        /** @type {?} */
        const parent = this._parent.getBoundingClientRect();
        /** @type {?} */
        const offsetLeft = select.left - parent.left;
        this._dropdown.style.left = offsetLeft + 'px';
        this._dropdown.style.width = select.width + 'px';
        this._dropdown.style.minWidth = select.width + 'px';
    }
    /**
     * @private
     * @return {?}
     */
    _updateYPosition() {
        /** @type {?} */
        const select = this._select.getBoundingClientRect();
        /** @type {?} */
        const parent = this._parent.getBoundingClientRect();
        /** @type {?} */
        const delta = select.height;
        if (this._currentPosition === 'top') {
            /** @type {?} */
            const offsetBottom = parent.bottom - select.bottom;
            this._dropdown.style.bottom = offsetBottom + delta + 'px';
            this._dropdown.style.top = 'auto';
        }
        else if (this._currentPosition === 'bottom') {
            /** @type {?} */
            const offsetTop = select.top - parent.top;
            this._dropdown.style.top = offsetTop + delta + 'px';
            this._dropdown.style.bottom = 'auto';
        }
    }
}
NgDropdownPanelComponent.ɵfac = function NgDropdownPanelComponent_Factory(t) { return new (t || NgDropdownPanelComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NgDropdownPanelService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"], 8)); };
NgDropdownPanelComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NgDropdownPanelComponent, selectors: [["ng-dropdown-panel"]], viewQuery: function NgDropdownPanelComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c1, true, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c2, true, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.contentElementRef = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.scrollElementRef = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.paddingElementRef = _t.first);
    } }, hostBindings: function NgDropdownPanelComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function NgDropdownPanelComponent_mousedown_HostBindingHandler($event) { return ctx.handleMousedown($event); });
    } }, inputs: { items: "items", position: "position", virtualScroll: "virtualScroll", filterValue: "filterValue", markedItem: "markedItem", appendTo: "appendTo", bufferAmount: "bufferAmount", headerTemplate: "headerTemplate", footerTemplate: "footerTemplate" }, outputs: { update: "update", scroll: "scroll", scrollToEnd: "scrollToEnd", outsideClick: "outsideClick" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], ngContentSelectors: _c4, decls: 9, vars: 6, consts: [["class", "ng-dropdown-header", 4, "ngIf"], [1, "ng-dropdown-panel-items", "scroll-host"], ["scroll", ""], ["padding", ""], ["content", ""], ["class", "ng-dropdown-footer", 4, "ngIf"], [1, "ng-dropdown-header"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "ng-dropdown-footer"]], template: function NgDropdownPanelComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NgDropdownPanelComponent_div_0_Template, 2, 4, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", null, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", null, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, NgDropdownPanelComponent_div_8_Template, 2, 4, "div", 5);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.headerTemplate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("total-padding", ctx.virtualScroll);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("scrollable-content", ctx.virtualScroll && ctx.items.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.footerTemplate);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgTemplateOutlet"]], encapsulation: 2, changeDetection: 0 });
/** @nocollapse */
NgDropdownPanelComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] },
    { type: NgDropdownPanelService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"],] }] }
];
NgDropdownPanelComponent.propDecorators = {
    items: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    markedItem: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    position: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    appendTo: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    bufferAmount: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    virtualScroll: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    headerTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    footerTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    filterValue: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    update: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    scroll: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    scrollToEnd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    outsideClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    contentElementRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['content', { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], static: true },] }],
    scrollElementRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['scroll', { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], static: true },] }],
    paddingElementRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['padding', { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], static: true },] }],
    handleMousedown: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['mousedown', ['$event'],] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgDropdownPanelComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                selector: 'ng-dropdown-panel',
                template: `
        <div *ngIf="headerTemplate" class="ng-dropdown-header">
            <ng-container [ngTemplateOutlet]="headerTemplate" [ngTemplateOutletContext]="{ searchTerm: filterValue }"></ng-container>
        </div>
        <div #scroll class="ng-dropdown-panel-items scroll-host">
            <div #padding [class.total-padding]="virtualScroll"></div>
            <div #content [class.scrollable-content]="virtualScroll && items.length">
                <ng-content></ng-content>
            </div>
        </div>
        <div *ngIf="footerTemplate" class="ng-dropdown-footer">
            <ng-container [ngTemplateOutlet]="footerTemplate" [ngTemplateOutletContext]="{ searchTerm: filterValue }"></ng-container>
        </div>
    `
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }, { type: NgDropdownPanelService }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]]
            }] }]; }, { items: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], position: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], virtualScroll: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], filterValue: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], update: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], scroll: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], scrollToEnd: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], outsideClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], 
    /**
     * @param {?} $event
     * @return {?}
     */
    handleMousedown: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['mousedown', ['$event']]
        }], markedItem: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], appendTo: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], bufferAmount: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], headerTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], footerTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], contentElementRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['content', { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], static: true }]
        }], scrollElementRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['scroll', { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], static: true }]
        }], paddingElementRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['padding', { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], static: true }]
        }] }); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/ng-option.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgOptionComponent {
    /**
     * @param {?} elementRef
     */
    constructor(elementRef) {
        this.elementRef = elementRef;
        this.stateChange$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this._disabled = false;
    }
    /**
     * @return {?}
     */
    get disabled() { return this._disabled; }
    /**
     * @param {?} value
     * @return {?}
     */
    set disabled(value) { this._disabled = this._isDisabled(value); }
    /**
     * @return {?}
     */
    get label() {
        return (this.elementRef.nativeElement.textContent || '').trim();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes.disabled) {
            this.stateChange$.next({
                value: this.value,
                disabled: this._disabled
            });
        }
    }
    /**
     * @return {?}
     */
    ngAfterViewChecked() {
        if (this.label !== this._previousLabel) {
            this._previousLabel = this.label;
            this.stateChange$.next({
                value: this.value,
                disabled: this._disabled,
                label: this.elementRef.nativeElement.innerHTML
            });
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.stateChange$.complete();
    }
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    _isDisabled(value) {
        return value != null && `${value}` !== 'false';
    }
}
NgOptionComponent.ɵfac = function NgOptionComponent_Factory(t) { return new (t || NgOptionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
NgOptionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NgOptionComponent, selectors: [["ng-option"]], inputs: { disabled: "disabled", value: "value" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], ngContentSelectors: _c4, decls: 1, vars: 0, template: function NgOptionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
    } }, encapsulation: 2, changeDetection: 0 });
/** @nocollapse */
NgOptionComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }
];
NgOptionComponent.propDecorators = {
    value: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgOptionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ng-option',
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                template: `<ng-content></ng-content>`
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, { disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], value: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/config.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgSelectConfig {
    constructor() {
        this.notFoundText = 'No items found';
        this.typeToSearchText = 'Type to search';
        this.addTagText = 'Add item';
        this.loadingText = 'Loading...';
        this.clearAllText = 'Clear all';
        this.disableVirtualScroll = true;
        this.openOnEnter = true;
        this.appearance = 'underline';
    }
}
NgSelectConfig.ɵfac = function NgSelectConfig_Factory(t) { return new (t || NgSelectConfig)(); };
/** @nocollapse */ NgSelectConfig.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function NgSelectConfig_Factory() { return new NgSelectConfig(); }, token: NgSelectConfig, providedIn: "root" });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgSelectConfig, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return []; }, null); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/ng-select.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const SELECTION_MODEL_FACTORY = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('ng-select-selection-model');
class NgSelectComponent {
    /**
     * @param {?} classes
     * @param {?} autoFocus
     * @param {?} config
     * @param {?} newSelectionModel
     * @param {?} _elementRef
     * @param {?} _cd
     * @param {?} _console
     */
    constructor(classes, autoFocus, config, newSelectionModel, _elementRef, _cd, _console) {
        this.classes = classes;
        this.autoFocus = autoFocus;
        this._cd = _cd;
        this._console = _console;
        this.markFirst = true;
        this.dropdownPosition = 'auto';
        this.loading = false;
        this.closeOnSelect = true;
        this.hideSelected = false;
        this.selectOnTab = false;
        this.bufferAmount = 4;
        this.selectableGroup = false;
        this.selectableGroupAsModel = true;
        this.searchFn = null;
        this.trackByFn = null;
        this.clearOnBackspace = true;
        this.labelForId = null;
        this.inputAttrs = {};
        this.readonly = false;
        this.searchWhileComposing = true;
        this.minTermLength = 0;
        this.editableSearchTerm = false;
        this.keyDownFn = (/**
         * @param {?} _
         * @return {?}
         */
        (_) => true);
        this.multiple = false;
        this.addTag = false;
        this.searchable = true;
        this.clearable = true;
        this.isOpen = false;
        // output events
        this.blurEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.focusEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.changeEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.openEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.closeEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.searchEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.clearEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.addEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.removeEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.scroll = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.scrollToEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.viewPortItems = [];
        this.searchTerm = null;
        this.dropdownId = newId();
        this.escapeHTML = true;
        this.useDefaultClass = true;
        this._items = [];
        this._defaultLabel = 'label';
        this._pressedKeys = [];
        this._isComposing = false;
        this._destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this._keyPress$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this._onChange = (/**
         * @param {?} _
         * @return {?}
         */
        (_) => { });
        this._onTouched = (/**
         * @return {?}
         */
        () => { });
        this.clearItem = (/**
         * @param {?} item
         * @return {?}
         */
        (item) => {
            /** @type {?} */
            const option = this.selectedItems.find((/**
             * @param {?} x
             * @return {?}
             */
            x => x.value === item));
            this.unselect(option);
        });
        this.trackByOption = (/**
         * @param {?} _
         * @param {?} item
         * @return {?}
         */
        (_, item) => {
            if (this.trackByFn) {
                return this.trackByFn(item.value);
            }
            return item;
        });
        this._mergeGlobalConfig(config);
        this.itemsList = new ItemsList(this, newSelectionModel());
        this.element = _elementRef.nativeElement;
    }
    /**
     * @return {?}
     */
    get items() { return this._items; }
    ;
    /**
     * @param {?} value
     * @return {?}
     */
    set items(value) {
        this._itemsAreUsed = true;
        this._items = value;
    }
    ;
    /**
     * @return {?}
     */
    get compareWith() { return this._compareWith; }
    /**
     * @param {?} fn
     * @return {?}
     */
    set compareWith(fn) {
        if (!isFunction(fn)) {
            throw Error('`compareWith` must be a function.');
        }
        this._compareWith = fn;
    }
    /**
     * @return {?}
     */
    get clearSearchOnAdd() { return isDefined(this._clearSearchOnAdd) ? this._clearSearchOnAdd : this.closeOnSelect; }
    ;
    /**
     * @param {?} value
     * @return {?}
     */
    set clearSearchOnAdd(value) {
        this._clearSearchOnAdd = value;
    }
    ;
    /**
     * @return {?}
     */
    get disabled() { return this.readonly || this._disabled; }
    ;
    /**
     * @return {?}
     */
    get filtered() { return (!!this.searchTerm && this.searchable || this._isComposing); }
    ;
    /**
     * @private
     * @return {?}
     */
    get _editableSearchTerm() {
        return this.editableSearchTerm && !this.multiple;
    }
    /**
     * @return {?}
     */
    get selectedItems() {
        return this.itemsList.selectedItems;
    }
    /**
     * @return {?}
     */
    get selectedValues() {
        return this.selectedItems.map((/**
         * @param {?} x
         * @return {?}
         */
        x => x.value));
    }
    /**
     * @return {?}
     */
    get hasValue() {
        return this.selectedItems.length > 0;
    }
    /**
     * @return {?}
     */
    get currentPanelPosition() {
        if (this.dropdownPanel) {
            return this.dropdownPanel.currentPosition;
        }
        return undefined;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this._handleKeyPresses();
        this._setInputAttributes();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes.multiple) {
            this.itemsList.clearSelected();
        }
        if (changes.items) {
            this._setItems(changes.items.currentValue || []);
        }
        if (changes.isOpen) {
            this._manualOpen = isDefined(changes.isOpen.currentValue);
        }
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        if (!this._itemsAreUsed) {
            this.escapeHTML = false;
            this._setItemsFromNgOptions();
        }
        if (isDefined(this.autoFocus)) {
            this.focus();
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._destroy$.next();
        this._destroy$.complete();
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    handleKeyDown($event) {
        /** @type {?} */
        const keyCode = KeyCode[$event.which];
        if (keyCode) {
            if (this.keyDownFn($event) === false) {
                return;
            }
            this.handleKeyCode($event);
        }
        else if ($event.key && $event.key.length === 1) {
            this._keyPress$.next($event.key.toLocaleLowerCase());
        }
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    handleKeyCode($event) {
        switch ($event.which) {
            case KeyCode.ArrowDown:
                this._handleArrowDown($event);
                break;
            case KeyCode.ArrowUp:
                this._handleArrowUp($event);
                break;
            case KeyCode.Space:
                this._handleSpace($event);
                break;
            case KeyCode.Enter:
                this._handleEnter($event);
                break;
            case KeyCode.Tab:
                this._handleTab($event);
                break;
            case KeyCode.Esc:
                this.close();
                $event.preventDefault();
                break;
            case KeyCode.Backspace:
                this._handleBackspace();
                break;
        }
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    handleMousedown($event) {
        /** @type {?} */
        const target = (/** @type {?} */ ($event.target));
        if (target.tagName !== 'INPUT') {
            $event.preventDefault();
        }
        if (target.classList.contains('ng-clear-wrapper')) {
            this.handleClearClick();
            return;
        }
        if (target.classList.contains('ng-arrow-wrapper')) {
            this.handleArrowClick();
            return;
        }
        if (target.classList.contains('ng-value-icon')) {
            return;
        }
        if (!this.focused) {
            this.focus();
        }
        if (this.searchable) {
            this.open();
        }
        else {
            this.toggle();
        }
    }
    /**
     * @return {?}
     */
    handleArrowClick() {
        if (this.isOpen) {
            this.close();
        }
        else {
            this.open();
        }
    }
    /**
     * @return {?}
     */
    handleClearClick() {
        if (this.hasValue) {
            this.itemsList.clearSelected(true);
            this._updateNgModel();
        }
        this._clearSearch();
        this.focus();
        this.clearEvent.emit();
        this._onSelectionChanged();
    }
    /**
     * @return {?}
     */
    clearModel() {
        if (!this.clearable) {
            return;
        }
        this.itemsList.clearSelected();
        this._updateNgModel();
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        this.itemsList.clearSelected();
        this._handleWriteValue(value);
        this._cd.markForCheck();
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this._onChange = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this._onTouched = fn;
    }
    /**
     * @param {?} state
     * @return {?}
     */
    setDisabledState(state) {
        this._disabled = state;
        this._cd.markForCheck();
    }
    /**
     * @return {?}
     */
    toggle() {
        if (!this.isOpen) {
            this.open();
        }
        else {
            this.close();
        }
    }
    /**
     * @return {?}
     */
    open() {
        if (this.disabled || this.isOpen || this.itemsList.maxItemsSelected || this._manualOpen) {
            return;
        }
        if (!this._isTypeahead && !this.addTag && this.itemsList.noItemsToSelect) {
            return;
        }
        this.isOpen = true;
        this.itemsList.markSelectedOrDefault(this.markFirst);
        this.openEvent.emit();
        if (!this.searchTerm) {
            this.focus();
        }
        this.detectChanges();
    }
    /**
     * @return {?}
     */
    close() {
        if (!this.isOpen || this._manualOpen) {
            return;
        }
        this.isOpen = false;
        this._isComposing = false;
        if (!this._editableSearchTerm) {
            this._clearSearch();
        }
        else {
            this.itemsList.resetFilteredItems();
        }
        this.itemsList.unmarkItem();
        this._onTouched();
        this.closeEvent.emit();
        this._cd.markForCheck();
    }
    /**
     * @param {?} item
     * @return {?}
     */
    toggleItem(item) {
        if (!item || item.disabled || this.disabled) {
            return;
        }
        if (this.multiple && item.selected) {
            this.unselect(item);
        }
        else {
            this.select(item);
        }
        if (this._editableSearchTerm) {
            this._setSearchTermFromItems();
        }
        this._onSelectionChanged();
    }
    /**
     * @param {?} item
     * @return {?}
     */
    select(item) {
        if (!item.selected) {
            this.itemsList.select(item);
            if (this.clearSearchOnAdd && !this._editableSearchTerm) {
                this._clearSearch();
            }
            this._updateNgModel();
            if (this.multiple) {
                this.addEvent.emit(item.value);
            }
        }
        if (this.closeOnSelect || this.itemsList.noItemsToSelect) {
            this.close();
        }
    }
    /**
     * @return {?}
     */
    focus() {
        this.searchInput.nativeElement.focus();
    }
    /**
     * @return {?}
     */
    blur() {
        this.searchInput.nativeElement.blur();
    }
    /**
     * @param {?} item
     * @return {?}
     */
    unselect(item) {
        if (!item) {
            return;
        }
        this.itemsList.unselect(item);
        this.focus();
        this._updateNgModel();
        this.removeEvent.emit(item);
    }
    /**
     * @return {?}
     */
    selectTag() {
        /** @type {?} */
        let tag;
        if (isFunction(this.addTag)) {
            tag = ((/** @type {?} */ (this.addTag)))(this.searchTerm);
        }
        else {
            tag = this._primitive ? this.searchTerm : { [this.bindLabel]: this.searchTerm };
        }
        /** @type {?} */
        const handleTag = (/**
         * @param {?} item
         * @return {?}
         */
        (item) => this._isTypeahead || !this.isOpen ? this.itemsList.mapItem(item, null) : this.itemsList.addItem(item));
        if (isPromise(tag)) {
            tag.then((/**
             * @param {?} item
             * @return {?}
             */
            item => this.select(handleTag(item)))).catch((/**
             * @return {?}
             */
            () => { }));
        }
        else if (tag) {
            this.select(handleTag(tag));
        }
    }
    /**
     * @return {?}
     */
    showClear() {
        return this.clearable && (this.hasValue || this.searchTerm) && !this.disabled;
    }
    /**
     * @return {?}
     */
    get showAddTag() {
        if (!this._validTerm) {
            return false;
        }
        /** @type {?} */
        const term = this.searchTerm.toLowerCase().trim();
        return this.addTag &&
            (!this.itemsList.filteredItems.some((/**
             * @param {?} x
             * @return {?}
             */
            x => x.label.toLowerCase() === term)) &&
                (!this.hideSelected && this.isOpen || !this.selectedItems.some((/**
                 * @param {?} x
                 * @return {?}
                 */
                x => x.label.toLowerCase() === term)))) &&
            !this.loading;
    }
    /**
     * @return {?}
     */
    showNoItemsFound() {
        /** @type {?} */
        const empty = this.itemsList.filteredItems.length === 0;
        return ((empty && !this._isTypeahead && !this.loading) ||
            (empty && this._isTypeahead && this._validTerm && !this.loading)) &&
            !this.showAddTag;
    }
    /**
     * @return {?}
     */
    showTypeToSearch() {
        /** @type {?} */
        const empty = this.itemsList.filteredItems.length === 0;
        return empty && this._isTypeahead && !this._validTerm && !this.loading;
    }
    /**
     * @return {?}
     */
    onCompositionStart() {
        this._isComposing = true;
    }
    /**
     * @param {?} term
     * @return {?}
     */
    onCompositionEnd(term) {
        this._isComposing = false;
        if (this.searchWhileComposing) {
            return;
        }
        this.filter(term);
    }
    /**
     * @param {?} term
     * @return {?}
     */
    filter(term) {
        if (this._isComposing && !this.searchWhileComposing) {
            return;
        }
        this.searchTerm = term;
        if (this._isTypeahead && (this._validTerm || this.minTermLength === 0)) {
            this.typeahead.next(term);
        }
        if (!this._isTypeahead) {
            this.itemsList.filter(this.searchTerm);
            if (this.isOpen) {
                this.itemsList.markSelectedOrDefault(this.markFirst);
            }
        }
        this.searchEvent.emit({ term, items: this.itemsList.filteredItems.map((/**
             * @param {?} x
             * @return {?}
             */
            x => x.value)) });
        this.open();
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    onInputFocus($event) {
        if (this.focused) {
            return;
        }
        if (this._editableSearchTerm) {
            this._setSearchTermFromItems();
        }
        this.element.classList.add('ng-select-focused');
        this.focusEvent.emit($event);
        this.focused = true;
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    onInputBlur($event) {
        this.element.classList.remove('ng-select-focused');
        this.blurEvent.emit($event);
        if (!this.isOpen && !this.disabled) {
            this._onTouched();
        }
        if (this._editableSearchTerm) {
            this._setSearchTermFromItems();
        }
        this.focused = false;
    }
    /**
     * @param {?} item
     * @return {?}
     */
    onItemHover(item) {
        if (item.disabled) {
            return;
        }
        this.itemsList.markItem(item);
    }
    /**
     * @return {?}
     */
    detectChanges() {
        if (!((/** @type {?} */ (this._cd))).destroyed) {
            this._cd.detectChanges();
        }
    }
    /**
     * @private
     * @return {?}
     */
    _setSearchTermFromItems() {
        /** @type {?} */
        const selected = this.selectedItems && this.selectedItems[0];
        this.searchTerm = (selected && selected.label) || null;
    }
    /**
     * @private
     * @param {?} items
     * @return {?}
     */
    _setItems(items) {
        /** @type {?} */
        const firstItem = items[0];
        this.bindLabel = this.bindLabel || this._defaultLabel;
        this._primitive = isDefined(firstItem) ? !isObject(firstItem) : this._primitive || this.bindLabel === this._defaultLabel;
        this.itemsList.setItems(items);
        if (items.length > 0 && this.hasValue) {
            this.itemsList.mapSelectedItems();
        }
        if (this.isOpen && isDefined(this.searchTerm) && !this._isTypeahead) {
            this.itemsList.filter(this.searchTerm);
        }
        if (this._isTypeahead || this.isOpen) {
            this.itemsList.markSelectedOrDefault(this.markFirst);
        }
    }
    /**
     * @private
     * @return {?}
     */
    _setItemsFromNgOptions() {
        /** @type {?} */
        const mapNgOptions = (/**
         * @param {?} options
         * @return {?}
         */
        (options) => {
            this.items = options.map((/**
             * @param {?} option
             * @return {?}
             */
            option => ({
                $ngOptionValue: option.value,
                $ngOptionLabel: option.elementRef.nativeElement.innerHTML,
                disabled: option.disabled
            })));
            this.itemsList.setItems(this.items);
            if (this.hasValue) {
                this.itemsList.mapSelectedItems();
            }
            this.detectChanges();
        });
        /** @type {?} */
        const handleOptionChange = (/**
         * @return {?}
         */
        () => {
            /** @type {?} */
            const changedOrDestroyed = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["merge"])(this.ngOptions.changes, this._destroy$);
            Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["merge"])(...this.ngOptions.map((/**
             * @param {?} option
             * @return {?}
             */
            option => option.stateChange$)))
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(changedOrDestroyed))
                .subscribe((/**
             * @param {?} option
             * @return {?}
             */
            option => {
                /** @type {?} */
                const item = this.itemsList.findItem(option.value);
                item.disabled = option.disabled;
                item.label = option.label || item.label;
                this._cd.detectChanges();
            }));
        });
        this.ngOptions.changes
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["startWith"])(this.ngOptions), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this._destroy$))
            .subscribe((/**
         * @param {?} options
         * @return {?}
         */
        options => {
            this.bindLabel = this._defaultLabel;
            mapNgOptions(options);
            handleOptionChange();
        }));
    }
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    _isValidWriteValue(value) {
        if (!isDefined(value) || (this.multiple && value === '') || Array.isArray(value) && value.length === 0) {
            return false;
        }
        /** @type {?} */
        const validateBinding = (/**
         * @param {?} item
         * @return {?}
         */
        (item) => {
            if (!isDefined(this.compareWith) && isObject(item) && this.bindValue) {
                this._console.warn(`Setting object(${JSON.stringify(item)}) as your model with bindValue is not allowed unless [compareWith] is used.`);
                return false;
            }
            return true;
        });
        if (this.multiple) {
            if (!Array.isArray(value)) {
                this._console.warn('Multiple select ngModel should be array.');
                return false;
            }
            return value.every((/**
             * @param {?} item
             * @return {?}
             */
            item => validateBinding(item)));
        }
        else {
            return validateBinding(value);
        }
    }
    /**
     * @private
     * @param {?} ngModel
     * @return {?}
     */
    _handleWriteValue(ngModel) {
        if (!this._isValidWriteValue(ngModel)) {
            return;
        }
        /** @type {?} */
        const select = (/**
         * @param {?} val
         * @return {?}
         */
        (val) => {
            /** @type {?} */
            let item = this.itemsList.findItem(val);
            if (item) {
                this.itemsList.select(item);
            }
            else {
                /** @type {?} */
                const isValObject = isObject(val);
                /** @type {?} */
                const isPrimitive = !isValObject && !this.bindValue;
                if ((isValObject || isPrimitive)) {
                    this.itemsList.select(this.itemsList.mapItem(val, null));
                }
                else if (this.bindValue) {
                    item = {
                        [this.bindLabel]: null,
                        [this.bindValue]: val
                    };
                    this.itemsList.select(this.itemsList.mapItem(item, null));
                }
            }
        });
        if (this.multiple) {
            ((/** @type {?} */ (ngModel))).forEach((/**
             * @param {?} item
             * @return {?}
             */
            item => select(item)));
        }
        else {
            select(ngModel);
        }
    }
    /**
     * @private
     * @return {?}
     */
    _handleKeyPresses() {
        if (this.searchable) {
            return;
        }
        this._keyPress$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this._destroy$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])((/**
         * @param {?} letter
         * @return {?}
         */
        letter => this._pressedKeys.push(letter))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(200), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])((/**
         * @return {?}
         */
        () => this._pressedKeys.length > 0)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((/**
         * @return {?}
         */
        () => this._pressedKeys.join(''))))
            .subscribe((/**
         * @param {?} term
         * @return {?}
         */
        term => {
            /** @type {?} */
            const item = this.itemsList.findByLabel(term);
            if (item) {
                if (this.isOpen) {
                    this.itemsList.markItem(item);
                    this._scrollToMarked();
                    this._cd.markForCheck();
                }
                else {
                    this.select(item);
                }
            }
            this._pressedKeys = [];
        }));
    }
    /**
     * @private
     * @return {?}
     */
    _setInputAttributes() {
        /** @type {?} */
        const input = this.searchInput.nativeElement;
        /** @type {?} */
        const attributes = Object.assign({ type: 'text', autocorrect: 'off', autocapitalize: 'off', autocomplete: this.labelForId ? 'off' : this.dropdownId }, this.inputAttrs);
        for (const key of Object.keys(attributes)) {
            input.setAttribute(key, attributes[key]);
        }
    }
    /**
     * @private
     * @return {?}
     */
    _updateNgModel() {
        /** @type {?} */
        const model = [];
        for (const item of this.selectedItems) {
            if (this.bindValue) {
                /** @type {?} */
                let value = null;
                if (item.children) {
                    /** @type {?} */
                    const groupKey = this.groupValue ? this.bindValue : (/** @type {?} */ (this.groupBy));
                    value = item.value[groupKey || (/** @type {?} */ (this.groupBy))];
                }
                else {
                    value = this.itemsList.resolveNested(item.value, this.bindValue);
                }
                model.push(value);
            }
            else {
                model.push(item.value);
            }
        }
        /** @type {?} */
        const selected = this.selectedItems.map((/**
         * @param {?} x
         * @return {?}
         */
        x => x.value));
        if (this.multiple) {
            this._onChange(model);
            this.changeEvent.emit(selected);
        }
        else {
            this._onChange(isDefined(model[0]) ? model[0] : null);
            this.changeEvent.emit(selected[0]);
        }
        this._cd.markForCheck();
    }
    /**
     * @private
     * @return {?}
     */
    _clearSearch() {
        if (!this.searchTerm) {
            return;
        }
        this._changeSearch(null);
        this.itemsList.resetFilteredItems();
    }
    /**
     * @private
     * @param {?} searchTerm
     * @return {?}
     */
    _changeSearch(searchTerm) {
        this.searchTerm = searchTerm;
        if (this._isTypeahead) {
            this.typeahead.next(searchTerm);
        }
    }
    /**
     * @private
     * @return {?}
     */
    _scrollToMarked() {
        if (!this.isOpen || !this.dropdownPanel) {
            return;
        }
        this.dropdownPanel.scrollTo(this.itemsList.markedItem);
    }
    /**
     * @private
     * @return {?}
     */
    _scrollToTag() {
        if (!this.isOpen || !this.dropdownPanel) {
            return;
        }
        this.dropdownPanel.scrollToTag();
    }
    /**
     * @private
     * @return {?}
     */
    _onSelectionChanged() {
        if (this.isOpen && this.multiple && this.appendTo) {
            // Make sure items are rendered.
            this._cd.detectChanges();
            this.dropdownPanel.adjustPosition();
        }
    }
    /**
     * @private
     * @param {?} $event
     * @return {?}
     */
    _handleTab($event) {
        if (this.isOpen === false && !this.addTag) {
            return;
        }
        if (this.selectOnTab) {
            if (this.itemsList.markedItem) {
                this.toggleItem(this.itemsList.markedItem);
                $event.preventDefault();
            }
            else if (this.showAddTag) {
                this.selectTag();
                $event.preventDefault();
            }
            else {
                this.close();
            }
        }
        else {
            this.close();
        }
    }
    /**
     * @private
     * @param {?} $event
     * @return {?}
     */
    _handleEnter($event) {
        if (this.isOpen || this._manualOpen) {
            if (this.itemsList.markedItem) {
                this.toggleItem(this.itemsList.markedItem);
            }
            else if (this.showAddTag) {
                this.selectTag();
            }
        }
        else if (this.openOnEnter) {
            this.open();
        }
        else {
            return;
        }
        $event.preventDefault();
    }
    /**
     * @private
     * @param {?} $event
     * @return {?}
     */
    _handleSpace($event) {
        if (this.isOpen || this._manualOpen) {
            return;
        }
        this.open();
        $event.preventDefault();
    }
    /**
     * @private
     * @param {?} $event
     * @return {?}
     */
    _handleArrowDown($event) {
        if (this._nextItemIsTag(+1)) {
            this.itemsList.unmarkItem();
            this._scrollToTag();
        }
        else {
            this.itemsList.markNextItem();
            this._scrollToMarked();
        }
        this.open();
        $event.preventDefault();
    }
    /**
     * @private
     * @param {?} $event
     * @return {?}
     */
    _handleArrowUp($event) {
        if (!this.isOpen) {
            return;
        }
        if (this._nextItemIsTag(-1)) {
            this.itemsList.unmarkItem();
            this._scrollToTag();
        }
        else {
            this.itemsList.markPreviousItem();
            this._scrollToMarked();
        }
        $event.preventDefault();
    }
    /**
     * @private
     * @param {?} nextStep
     * @return {?}
     */
    _nextItemIsTag(nextStep) {
        /** @type {?} */
        const nextIndex = this.itemsList.markedIndex + nextStep;
        return this.addTag && this.searchTerm
            && this.itemsList.markedItem
            && (nextIndex < 0 || nextIndex === this.itemsList.filteredItems.length);
    }
    /**
     * @private
     * @return {?}
     */
    _handleBackspace() {
        if (this.searchTerm || !this.clearable || !this.clearOnBackspace || !this.hasValue) {
            return;
        }
        if (this.multiple) {
            this.unselect(this.itemsList.lastSelectedItem);
        }
        else {
            this.clearModel();
        }
    }
    /**
     * @private
     * @return {?}
     */
    get _isTypeahead() {
        return this.typeahead && this.typeahead.observers.length > 0;
    }
    /**
     * @private
     * @return {?}
     */
    get _validTerm() {
        /** @type {?} */
        const term = this.searchTerm && this.searchTerm.trim();
        return term && term.length >= this.minTermLength;
    }
    /**
     * @private
     * @param {?} config
     * @return {?}
     */
    _mergeGlobalConfig(config) {
        this.placeholder = this.placeholder || config.placeholder;
        this.notFoundText = this.notFoundText || config.notFoundText;
        this.typeToSearchText = this.typeToSearchText || config.typeToSearchText;
        this.addTagText = this.addTagText || config.addTagText;
        this.loadingText = this.loadingText || config.loadingText;
        this.clearAllText = this.clearAllText || config.clearAllText;
        this.virtualScroll = isDefined(this.virtualScroll)
            ? this.virtualScroll
            : isDefined(config.disableVirtualScroll) ? !config.disableVirtualScroll : false;
        this.openOnEnter = isDefined(this.openOnEnter) ? this.openOnEnter : config.openOnEnter;
        this.appendTo = this.appendTo || config.appendTo;
        this.bindValue = this.bindValue || config.bindValue;
        this.appearance = this.appearance || config.appearance;
    }
}
NgSelectComponent.ɵfac = function NgSelectComponent_Factory(t) { return new (t || NgSelectComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinjectAttribute"]('class'), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinjectAttribute"]('autofocus'), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NgSelectConfig), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](SELECTION_MODEL_FACTORY), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ConsoleService)); };
NgSelectComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NgSelectComponent, selectors: [["ng-select"]], contentQueries: function NgSelectComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NgOptionTemplateDirective, true, _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NgOptgroupTemplateDirective, true, _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NgLabelTemplateDirective, true, _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NgMultiLabelTemplateDirective, true, _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NgHeaderTemplateDirective, true, _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NgFooterTemplateDirective, true, _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NgNotFoundTemplateDirective, true, _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NgTypeToSearchTemplateDirective, true, _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NgLoadingTextTemplateDirective, true, _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NgTagTemplateDirective, true, _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NgLoadingSpinnerTemplateDirective, true, _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NgOptionComponent, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.optionTemplate = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.optgroupTemplate = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.labelTemplate = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.multiLabelTemplate = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.headerTemplate = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.footerTemplate = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.notFoundTemplate = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.typeToSearchTemplate = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.loadingTextTemplate = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.tagTemplate = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.loadingSpinnerTemplate = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.ngOptions = _t);
    } }, viewQuery: function NgSelectComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](NgDropdownPanelComponent, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c5, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.dropdownPanel = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.searchInput = _t.first);
    } }, hostVars: 20, hostBindings: function NgSelectComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function NgSelectComponent_keydown_HostBindingHandler($event) { return ctx.handleKeyDown($event); });
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ng-select", ctx.useDefaultClass)("ng-select-single", !ctx.multiple)("ng-select-multiple", ctx.multiple)("ng-select-taggable", ctx.addTag)("ng-select-searchable", ctx.searchable)("ng-select-clearable", ctx.clearable)("ng-select-opened", ctx.isOpen)("ng-select-disabled", ctx.disabled)("ng-select-filtered", ctx.filtered)("ng-select-typeahead", ctx.typeahead);
    } }, inputs: { markFirst: "markFirst", dropdownPosition: "dropdownPosition", loading: "loading", closeOnSelect: "closeOnSelect", hideSelected: "hideSelected", selectOnTab: "selectOnTab", bufferAmount: "bufferAmount", selectableGroup: "selectableGroup", selectableGroupAsModel: "selectableGroupAsModel", searchFn: "searchFn", trackByFn: "trackByFn", clearOnBackspace: "clearOnBackspace", labelForId: "labelForId", inputAttrs: "inputAttrs", readonly: "readonly", searchWhileComposing: "searchWhileComposing", minTermLength: "minTermLength", editableSearchTerm: "editableSearchTerm", keyDownFn: "keyDownFn", multiple: "multiple", addTag: "addTag", searchable: "searchable", clearable: "clearable", isOpen: "isOpen", items: "items", compareWith: "compareWith", clearSearchOnAdd: "clearSearchOnAdd", bindLabel: "bindLabel", placeholder: "placeholder", notFoundText: "notFoundText", typeToSearchText: "typeToSearchText", addTagText: "addTagText", loadingText: "loadingText", clearAllText: "clearAllText", virtualScroll: "virtualScroll", openOnEnter: "openOnEnter", appendTo: "appendTo", bindValue: "bindValue", appearance: "appearance", maxSelectedItems: "maxSelectedItems", groupBy: "groupBy", groupValue: "groupValue", tabIndex: "tabIndex", typeahead: "typeahead" }, outputs: { blurEvent: "blur", focusEvent: "focus", changeEvent: "change", openEvent: "open", closeEvent: "close", searchEvent: "search", clearEvent: "clear", addEvent: "add", removeEvent: "remove", scroll: "scroll", scrollToEnd: "scrollToEnd" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
                useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(( /**
                 * @return {?}
                 */() => NgSelectComponent)),
                multi: true
            }, NgDropdownPanelService]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 14, vars: 19, consts: [[1, "ng-select-container", 3, "mousedown"], [1, "ng-value-container"], [1, "ng-placeholder"], [4, "ngIf"], ["role", "combobox", "aria-haspopup", "listbox", 1, "ng-input"], ["aria-autocomplete", "list", 3, "readOnly", "disabled", "value", "input", "compositionstart", "compositionend", "focus", "blur", "change"], ["searchInput", ""], ["class", "ng-clear-wrapper", 3, "title", 4, "ngIf"], [1, "ng-arrow-wrapper"], [1, "ng-arrow"], ["class", "ng-dropdown-panel", "role", "listbox", "aria-label", "Options list", 3, "virtualScroll", "bufferAmount", "appendTo", "position", "headerTemplate", "footerTemplate", "filterValue", "items", "markedItem", "ng-select-multiple", "ngClass", "id", "update", "scroll", "scrollToEnd", "outsideClick", 4, "ngIf"], ["class", "ng-value", 3, "ng-value-disabled", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "ng-value"], ["defaultLabelTemplate", ""], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["aria-hidden", "true", 1, "ng-value-icon", "left", 3, "click"], [1, "ng-value-label", 3, "ngItemLabel", "escape"], ["defaultLoadingSpinnerTemplate", ""], [3, "ngTemplateOutlet"], [1, "ng-spinner-loader"], [1, "ng-clear-wrapper", 3, "title"], ["aria-hidden", "true", 1, "ng-clear"], ["role", "listbox", "aria-label", "Options list", 1, "ng-dropdown-panel", 3, "virtualScroll", "bufferAmount", "appendTo", "position", "headerTemplate", "footerTemplate", "filterValue", "items", "markedItem", "ngClass", "id", "update", "scroll", "scrollToEnd", "outsideClick"], ["class", "ng-option", 3, "ng-option-disabled", "ng-option-selected", "ng-optgroup", "ng-option", "ng-option-child", "ng-option-marked", "click", "mouseover", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["class", "ng-option", "role", "option", 3, "ng-option-marked", "mouseover", "click", 4, "ngIf"], [1, "ng-option", 3, "click", "mouseover"], ["defaultOptionTemplate", ""], [1, "ng-option-label", 3, "ngItemLabel", "escape"], ["role", "option", 1, "ng-option", 3, "mouseover", "click"], ["defaultTagTemplate", ""], [1, "ng-tag-label"], ["defaultNotFoundTemplate", ""], [1, "ng-option", "ng-option-disabled"], ["defaultTypeToSearchTemplate", ""], ["defaultLoadingTextTemplate", ""]], template: function NgSelectComponent_Template(rf, ctx) { if (rf & 1) {
        const _r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function NgSelectComponent_Template_div_mousedown_0_listener($event) { return ctx.handleMousedown($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NgSelectComponent_ng_container_4_Template, 2, 2, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, NgSelectComponent_5_Template, 1, 5, undefined, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function NgSelectComponent_Template_input_input_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r52); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8); return ctx.filter(_r2.value); })("compositionstart", function NgSelectComponent_Template_input_compositionstart_7_listener() { return ctx.onCompositionStart(); })("compositionend", function NgSelectComponent_Template_input_compositionend_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r52); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8); return ctx.onCompositionEnd(_r2.value); })("focus", function NgSelectComponent_Template_input_focus_7_listener($event) { return ctx.onInputFocus($event); })("blur", function NgSelectComponent_Template_input_blur_7_listener($event) { return ctx.onInputBlur($event); })("change", function NgSelectComponent_Template_input_change_7_listener($event) { return $event.stopPropagation(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, NgSelectComponent_ng_container_9_Template, 4, 1, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, NgSelectComponent_span_10_Template, 3, 1, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, NgSelectComponent_ng_dropdown_panel_13_Template, 7, 19, "ng-dropdown-panel", 10);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ng-appearance-outline", ctx.appearance === "outline")("ng-has-value", ctx.hasValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.placeholder);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (!ctx.multiLabelTemplate || !ctx.multiple) && ctx.selectedItems.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.multiple && ctx.multiLabelTemplate && ctx.selectedValues.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-expanded", ctx.isOpen)("aria-owns", ctx.isOpen ? ctx.dropdownId : null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("readOnly", !ctx.searchable || ctx.itemsList.maxItemsSelected)("disabled", ctx.disabled)("value", ctx.searchTerm ? ctx.searchTerm : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("id", ctx.labelForId)("tabindex", ctx.tabIndex)("aria-activedescendant", ctx.isOpen ? ctx.itemsList == null ? null : ctx.itemsList.markedItem == null ? null : ctx.itemsList.markedItem.htmlId : null)("aria-controls", ctx.isOpen ? ctx.dropdownId : null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showClear());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isOpen);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgTemplateOutlet"], NgItemLabelDirective, NgDropdownPanelComponent, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"]], styles: [".ng-select{display:block;position:relative}.ng-select,.ng-select div,.ng-select input,.ng-select span{box-sizing:border-box}.ng-select [hidden]{display:none}.ng-select.ng-select-searchable .ng-select-container .ng-value-container .ng-input{opacity:1}.ng-select.ng-select-opened .ng-select-container{z-index:1001}.ng-select.ng-select-disabled .ng-select-container .ng-value-container .ng-placeholder,.ng-select.ng-select-disabled .ng-select-container .ng-value-container .ng-value{-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;cursor:default;user-select:none}.ng-select.ng-select-disabled .ng-arrow-wrapper{cursor:default}.ng-select.ng-select-filtered .ng-placeholder{display:none}.ng-select .ng-select-container{cursor:default;display:flex;outline:none;overflow:hidden;position:relative;width:100%}.ng-select .ng-select-container .ng-value-container{display:flex;flex:1}.ng-select .ng-select-container .ng-value-container .ng-input{opacity:0}.ng-select .ng-select-container .ng-value-container .ng-input>input{background:none transparent;border:0;box-shadow:none;box-sizing:content-box;cursor:default;outline:none;padding:0;width:100%}.ng-select .ng-select-container .ng-value-container .ng-input>input::-ms-clear{display:none}.ng-select .ng-select-container .ng-value-container .ng-input>input[readonly]{-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;padding:0;user-select:none;width:0}.ng-select.ng-select-single.ng-select-filtered .ng-select-container .ng-value-container .ng-value{visibility:hidden}.ng-select.ng-select-single .ng-select-container .ng-value-container,.ng-select.ng-select-single .ng-select-container .ng-value-container .ng-value{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.ng-select.ng-select-single .ng-select-container .ng-value-container .ng-value .ng-value-icon{display:none}.ng-select.ng-select-single .ng-select-container .ng-value-container .ng-input{left:0;position:absolute;width:100%}.ng-select.ng-select-multiple.ng-select-disabled>.ng-select-container .ng-value-container .ng-value .ng-value-icon{display:none}.ng-select.ng-select-multiple .ng-select-container .ng-value-container{flex-wrap:wrap}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-placeholder{position:absolute}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value{white-space:nowrap}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value.ng-value-disabled .ng-value-icon{display:none}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-icon{cursor:pointer}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-input{flex:1;z-index:2}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-placeholder{z-index:1}.ng-select .ng-clear-wrapper{-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;cursor:pointer;position:relative;user-select:none;width:17px}.ng-select .ng-clear-wrapper .ng-clear{display:inline-block;font-size:18px;line-height:1;pointer-events:none}.ng-select .ng-spinner-loader{-webkit-animation:load8 .8s linear infinite;animation:load8 .8s linear infinite;border:2px solid rgba(66,66,66,.2);border-left-color:#424242;border-radius:50%;font-size:10px;height:17px;margin-right:5px;position:relative;text-indent:-9999em;transform:translateZ(0);width:17px}.ng-select .ng-spinner-loader:after{border-radius:50%;height:17px;width:17px}@-webkit-keyframes load8{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}@keyframes load8{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}.ng-select .ng-arrow-wrapper{-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;cursor:pointer;position:relative;text-align:center;user-select:none}.ng-select .ng-arrow-wrapper .ng-arrow{display:inline-block;height:0;pointer-events:none;position:relative;width:0}.ng-dropdown-panel{-webkit-overflow-scrolling:touch;box-sizing:border-box;opacity:0;position:absolute;width:100%;z-index:1050}.ng-dropdown-panel .ng-dropdown-panel-items{box-sizing:border-box;display:block;height:auto;max-height:240px;overflow-y:auto}.ng-dropdown-panel .ng-dropdown-panel-items .ng-optgroup,.ng-dropdown-panel .ng-dropdown-panel-items .ng-option{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option{box-sizing:border-box;cursor:pointer;display:block}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option .ng-option-label:empty:before{content:\"\\200b\"}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option .highlighted{font-weight:700;text-decoration:underline}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option.disabled{cursor:default}.ng-dropdown-panel .scroll-host{-webkit-overflow-scrolling:touch;display:block;overflow:hidden;overflow-y:auto;position:relative}.ng-dropdown-panel .scrollable-content{height:100%;left:0;position:absolute;top:0;width:100%}.ng-dropdown-panel .total-padding{opacity:0;width:1px}"], encapsulation: 2, changeDetection: 0 });
/** @nocollapse */
NgSelectComponent.ctorParameters = () => [
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Attribute"], args: ['class',] }] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Attribute"], args: ['autofocus',] }] },
    { type: NgSelectConfig },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [SELECTION_MODEL_FACTORY,] }] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] },
    { type: ConsoleService }
];
NgSelectComponent.propDecorators = {
    bindLabel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    bindValue: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    markFirst: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    placeholder: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    notFoundText: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    typeToSearchText: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    addTagText: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    loadingText: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    clearAllText: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    appearance: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    dropdownPosition: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    appendTo: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    loading: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    closeOnSelect: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    hideSelected: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    selectOnTab: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    openOnEnter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    maxSelectedItems: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    groupBy: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    groupValue: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    bufferAmount: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    virtualScroll: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    selectableGroup: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    selectableGroupAsModel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    searchFn: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    trackByFn: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    clearOnBackspace: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    labelForId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    inputAttrs: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    tabIndex: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    readonly: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    searchWhileComposing: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    minTermLength: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    editableSearchTerm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    keyDownFn: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    typeahead: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.ng-select-typeahead',] }],
    multiple: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.ng-select-multiple',] }],
    addTag: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.ng-select-taggable',] }],
    searchable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.ng-select-searchable',] }],
    clearable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.ng-select-clearable',] }],
    isOpen: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.ng-select-opened',] }],
    items: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    compareWith: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    clearSearchOnAdd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    blurEvent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['blur',] }],
    focusEvent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['focus',] }],
    changeEvent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['change',] }],
    openEvent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['open',] }],
    closeEvent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['close',] }],
    searchEvent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['search',] }],
    clearEvent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['clear',] }],
    addEvent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['add',] }],
    removeEvent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['remove',] }],
    scroll: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['scroll',] }],
    scrollToEnd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['scrollToEnd',] }],
    optionTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: [NgOptionTemplateDirective, { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] },] }],
    optgroupTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: [NgOptgroupTemplateDirective, { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] },] }],
    labelTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: [NgLabelTemplateDirective, { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] },] }],
    multiLabelTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: [NgMultiLabelTemplateDirective, { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] },] }],
    headerTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: [NgHeaderTemplateDirective, { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] },] }],
    footerTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: [NgFooterTemplateDirective, { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] },] }],
    notFoundTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: [NgNotFoundTemplateDirective, { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] },] }],
    typeToSearchTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: [NgTypeToSearchTemplateDirective, { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] },] }],
    loadingTextTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: [NgLoadingTextTemplateDirective, { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] },] }],
    tagTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: [NgTagTemplateDirective, { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] },] }],
    loadingSpinnerTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: [NgLoadingSpinnerTemplateDirective, { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] },] }],
    dropdownPanel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])((/**
                 * @return {?}
                 */
                () => NgDropdownPanelComponent)),] }],
    searchInput: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['searchInput', { static: true },] }],
    ngOptions: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"], args: [NgOptionComponent, { descendants: true },] }],
    disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.ng-select-disabled',] }],
    filtered: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.ng-select-filtered',] }],
    handleKeyDown: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['keydown', ['$event'],] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgSelectComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ng-select',
                template: "<div\n    (mousedown)=\"handleMousedown($event)\"\n    [class.ng-appearance-outline]=\"appearance === 'outline'\"\n    [class.ng-has-value]=\"hasValue\"\n    class=\"ng-select-container\">\n\n    <div class=\"ng-value-container\">\n        <div class=\"ng-placeholder\">{{placeholder}}</div>\n\n        <ng-container *ngIf=\"(!multiLabelTemplate  || !multiple ) && selectedItems.length > 0\">\n            <div [class.ng-value-disabled]=\"item.disabled\" class=\"ng-value\" *ngFor=\"let item of selectedItems; trackBy: trackByOption\">\n                <ng-template #defaultLabelTemplate>\n                    <span class=\"ng-value-icon left\" (click)=\"unselect(item);\" aria-hidden=\"true\">\u00D7</span>\n                    <span class=\"ng-value-label\" [ngItemLabel]=\"item.label\" [escape]=\"escapeHTML\"></span>\n                </ng-template>\n\n                <ng-template\n                    [ngTemplateOutlet]=\"labelTemplate || defaultLabelTemplate\"\n                    [ngTemplateOutletContext]=\"{ item: item.value, clear: clearItem, label: item.label }\">\n                </ng-template>\n            </div>\n        </ng-container>\n\n        <ng-template *ngIf=\"multiple && multiLabelTemplate && selectedValues.length > 0\"\n                [ngTemplateOutlet]=\"multiLabelTemplate\"\n                [ngTemplateOutletContext]=\"{ items: selectedValues, clear: clearItem }\">\n        </ng-template>\n\n        <div class=\"ng-input\"\n            role=\"combobox\" \n            [attr.aria-expanded]=\"isOpen\" \n            [attr.aria-owns]=\"isOpen ? dropdownId : null\" \n            aria-haspopup=\"listbox\">\n\n            <input #searchInput\n                   [attr.id]=\"labelForId\"\n                   [attr.tabindex]=\"tabIndex\"\n                   [readOnly]=\"!searchable || itemsList.maxItemsSelected\"\n                   [disabled]=\"disabled\"\n                   [value]=\"searchTerm ? searchTerm : ''\"\n                   (input)=\"filter(searchInput.value)\"\n                   (compositionstart)=\"onCompositionStart()\"\n                   (compositionend)=\"onCompositionEnd(searchInput.value)\"\n                   (focus)=\"onInputFocus($event)\"\n                   (blur)=\"onInputBlur($event)\"\n                   (change)=\"$event.stopPropagation()\"\n                   [attr.aria-activedescendant]=\"isOpen ? itemsList?.markedItem?.htmlId : null\"\n                   aria-autocomplete=\"list\"\n                   [attr.aria-controls]=\"isOpen ? dropdownId : null\">\n        </div>\n    </div>\n\n    <ng-container *ngIf=\"loading\">\n        <ng-template #defaultLoadingSpinnerTemplate>\n            <div class=\"ng-spinner-loader\"></div>\n        </ng-template>\n\n        <ng-template\n            [ngTemplateOutlet]=\"loadingSpinnerTemplate || defaultLoadingSpinnerTemplate\">\n        </ng-template>\n    </ng-container>\n\n    <span *ngIf=\"showClear()\" class=\"ng-clear-wrapper\" title=\"{{clearAllText}}\">\n        <span class=\"ng-clear\" aria-hidden=\"true\">\u00D7</span>\n    </span>\n\n    <span class=\"ng-arrow-wrapper\">\n        <span class=\"ng-arrow\"></span>\n    </span>\n</div>\n\n<ng-dropdown-panel *ngIf=\"isOpen\"\n                   class=\"ng-dropdown-panel\"\n                   [virtualScroll]=\"virtualScroll\"\n                   [bufferAmount]=\"bufferAmount\"\n                   [appendTo]=\"appendTo\"\n                   [position]=\"dropdownPosition\"\n                   [headerTemplate]=\"headerTemplate\"\n                   [footerTemplate]=\"footerTemplate\"\n                   [filterValue]=\"searchTerm\"\n                   [items]=\"itemsList.filteredItems\"\n                   [markedItem]=\"itemsList.markedItem\"\n                   (update)=\"viewPortItems = $event\"\n                   (scroll)=\"scroll.emit($event)\"\n                   (scrollToEnd)=\"scrollToEnd.emit($event)\"\n                   (outsideClick)=\"close()\"\n                   [class.ng-select-multiple]=\"multiple\"\n                   [ngClass]=\"appendTo ? classes : null\"\n                   [id]=\"dropdownId\"\n                   role=\"listbox\"\n                   aria-label=\"Options list\">\n\n    <ng-container>\n        <div class=\"ng-option\" [attr.role]=\"item.children ? 'group' : 'option'\" (click)=\"toggleItem(item)\" (mouseover)=\"onItemHover(item)\"\n                *ngFor=\"let item of viewPortItems; trackBy: trackByOption\"\n                [class.ng-option-disabled]=\"item.disabled\"\n                [class.ng-option-selected]=\"item.selected\"\n                [class.ng-optgroup]=\"item.children\"\n                [class.ng-option]=\"!item.children\"\n                [class.ng-option-child]=\"!!item.parent\"\n                [class.ng-option-marked]=\"item === itemsList.markedItem\"\n                [attr.aria-selected]=\"item.selected\"\n                [attr.id]=\"item?.htmlId\">\n\n            <ng-template #defaultOptionTemplate>\n                <span class=\"ng-option-label\" [ngItemLabel]=\"item.label\" [escape]=\"escapeHTML\"></span>\n            </ng-template>\n\n            <ng-template\n                [ngTemplateOutlet]=\"item.children ? (optgroupTemplate || defaultOptionTemplate) : (optionTemplate || defaultOptionTemplate)\"\n                [ngTemplateOutletContext]=\"{ item: item.value, item$:item, index: item.index, searchTerm: searchTerm }\">\n            </ng-template>\n        </div>\n\n        <div class=\"ng-option\" [class.ng-option-marked]=\"!itemsList.markedItem\" (mouseover)=\"itemsList.unmarkItem()\" role=\"option\" (click)=\"selectTag()\" *ngIf=\"showAddTag\">\n            <ng-template #defaultTagTemplate>\n                <span><span class=\"ng-tag-label\">{{addTagText}}</span>\"{{searchTerm}}\"</span>\n            </ng-template>\n\n            <ng-template\n                [ngTemplateOutlet]=\"tagTemplate || defaultTagTemplate\"\n                [ngTemplateOutletContext]=\"{ searchTerm: searchTerm }\">\n            </ng-template>\n        </div>\n    </ng-container>\n\n    <ng-container *ngIf=\"showNoItemsFound()\">\n        <ng-template #defaultNotFoundTemplate>\n            <div class=\"ng-option ng-option-disabled\">{{notFoundText}}</div>\n        </ng-template>\n\n        <ng-template\n            [ngTemplateOutlet]=\"notFoundTemplate || defaultNotFoundTemplate\"\n            [ngTemplateOutletContext]=\"{ searchTerm: searchTerm }\">\n        </ng-template>\n    </ng-container>\n\n    <ng-container *ngIf=\"showTypeToSearch()\">\n        <ng-template #defaultTypeToSearchTemplate>\n            <div class=\"ng-option ng-option-disabled\">{{typeToSearchText}}</div>\n        </ng-template>\n\n        <ng-template\n            [ngTemplateOutlet]=\"typeToSearchTemplate || defaultTypeToSearchTemplate\">\n        </ng-template>\n    </ng-container>\n\n    <ng-container *ngIf=\"loading && itemsList.filteredItems.length === 0\">\n        <ng-template #defaultLoadingTextTemplate>\n            <div class=\"ng-option ng-option-disabled\">{{loadingText}}</div>\n        </ng-template>\n\n        <ng-template\n            [ngTemplateOutlet]=\"loadingTextTemplate || defaultLoadingTextTemplate\"\n            [ngTemplateOutletContext]=\"{ searchTerm: searchTerm }\">\n        </ng-template>\n    </ng-container>\n\n</ng-dropdown-panel>\n",
                providers: [{
                        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
                        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(( /**
                         * @return {?}
                         */() => NgSelectComponent)),
                        multi: true
                    }, NgDropdownPanelService],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                host: {
                    '[class.ng-select]': 'useDefaultClass',
                    '[class.ng-select-single]': '!multiple'
                },
                styles: [".ng-select{display:block;position:relative}.ng-select,.ng-select div,.ng-select input,.ng-select span{box-sizing:border-box}.ng-select [hidden]{display:none}.ng-select.ng-select-searchable .ng-select-container .ng-value-container .ng-input{opacity:1}.ng-select.ng-select-opened .ng-select-container{z-index:1001}.ng-select.ng-select-disabled .ng-select-container .ng-value-container .ng-placeholder,.ng-select.ng-select-disabled .ng-select-container .ng-value-container .ng-value{-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;cursor:default;user-select:none}.ng-select.ng-select-disabled .ng-arrow-wrapper{cursor:default}.ng-select.ng-select-filtered .ng-placeholder{display:none}.ng-select .ng-select-container{cursor:default;display:flex;outline:none;overflow:hidden;position:relative;width:100%}.ng-select .ng-select-container .ng-value-container{display:flex;flex:1}.ng-select .ng-select-container .ng-value-container .ng-input{opacity:0}.ng-select .ng-select-container .ng-value-container .ng-input>input{background:none transparent;border:0;box-shadow:none;box-sizing:content-box;cursor:default;outline:none;padding:0;width:100%}.ng-select .ng-select-container .ng-value-container .ng-input>input::-ms-clear{display:none}.ng-select .ng-select-container .ng-value-container .ng-input>input[readonly]{-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;padding:0;user-select:none;width:0}.ng-select.ng-select-single.ng-select-filtered .ng-select-container .ng-value-container .ng-value{visibility:hidden}.ng-select.ng-select-single .ng-select-container .ng-value-container,.ng-select.ng-select-single .ng-select-container .ng-value-container .ng-value{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.ng-select.ng-select-single .ng-select-container .ng-value-container .ng-value .ng-value-icon{display:none}.ng-select.ng-select-single .ng-select-container .ng-value-container .ng-input{left:0;position:absolute;width:100%}.ng-select.ng-select-multiple.ng-select-disabled>.ng-select-container .ng-value-container .ng-value .ng-value-icon{display:none}.ng-select.ng-select-multiple .ng-select-container .ng-value-container{flex-wrap:wrap}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-placeholder{position:absolute}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value{white-space:nowrap}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value.ng-value-disabled .ng-value-icon{display:none}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-icon{cursor:pointer}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-input{flex:1;z-index:2}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-placeholder{z-index:1}.ng-select .ng-clear-wrapper{-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;cursor:pointer;position:relative;user-select:none;width:17px}.ng-select .ng-clear-wrapper .ng-clear{display:inline-block;font-size:18px;line-height:1;pointer-events:none}.ng-select .ng-spinner-loader{-webkit-animation:load8 .8s linear infinite;animation:load8 .8s linear infinite;border:2px solid rgba(66,66,66,.2);border-left-color:#424242;border-radius:50%;font-size:10px;height:17px;margin-right:5px;position:relative;text-indent:-9999em;transform:translateZ(0);width:17px}.ng-select .ng-spinner-loader:after{border-radius:50%;height:17px;width:17px}@-webkit-keyframes load8{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}@keyframes load8{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}.ng-select .ng-arrow-wrapper{-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;cursor:pointer;position:relative;text-align:center;user-select:none}.ng-select .ng-arrow-wrapper .ng-arrow{display:inline-block;height:0;pointer-events:none;position:relative;width:0}.ng-dropdown-panel{-webkit-overflow-scrolling:touch;box-sizing:border-box;opacity:0;position:absolute;width:100%;z-index:1050}.ng-dropdown-panel .ng-dropdown-panel-items{box-sizing:border-box;display:block;height:auto;max-height:240px;overflow-y:auto}.ng-dropdown-panel .ng-dropdown-panel-items .ng-optgroup,.ng-dropdown-panel .ng-dropdown-panel-items .ng-option{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option{box-sizing:border-box;cursor:pointer;display:block}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option .ng-option-label:empty:before{content:\"\\200b\"}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option .highlighted{font-weight:700;text-decoration:underline}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option.disabled{cursor:default}.ng-dropdown-panel .scroll-host{-webkit-overflow-scrolling:touch;display:block;overflow:hidden;overflow-y:auto;position:relative}.ng-dropdown-panel .scrollable-content{height:100%;left:0;position:absolute;top:0;width:100%}.ng-dropdown-panel .total-padding{opacity:0;width:1px}"]
            }]
    }], function () { return [{ type: String, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Attribute"],
                args: ['class']
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Attribute"],
                args: ['autofocus']
            }] }, { type: NgSelectConfig }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [SELECTION_MODEL_FACTORY]
            }] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { type: ConsoleService }]; }, { markFirst: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], dropdownPosition: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], loading: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], closeOnSelect: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], hideSelected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], selectOnTab: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], bufferAmount: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], selectableGroup: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], selectableGroupAsModel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], searchFn: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], trackByFn: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], clearOnBackspace: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], labelForId: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], inputAttrs: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], readonly: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], searchWhileComposing: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], minTermLength: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], editableSearchTerm: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], keyDownFn: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], multiple: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.ng-select-multiple']
        }], addTag: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.ng-select-taggable']
        }], searchable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.ng-select-searchable']
        }], clearable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.ng-select-clearable']
        }], isOpen: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.ng-select-opened']
        }], blurEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['blur']
        }], focusEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['focus']
        }], changeEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['change']
        }], openEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['open']
        }], closeEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['close']
        }], searchEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['search']
        }], clearEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['clear']
        }], addEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['add']
        }], removeEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['remove']
        }], scroll: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['scroll']
        }], scrollToEnd: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['scrollToEnd']
        }], items: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], compareWith: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], clearSearchOnAdd: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.ng-select-disabled']
        }], filtered: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.ng-select-filtered']
        }], 
    /**
     * @param {?} $event
     * @return {?}
     */
    handleKeyDown: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['keydown', ['$event']]
        }], bindLabel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], placeholder: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], notFoundText: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], typeToSearchText: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], addTagText: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], loadingText: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], clearAllText: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], virtualScroll: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], openOnEnter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], appendTo: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], bindValue: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], appearance: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], maxSelectedItems: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], groupBy: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], groupValue: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], tabIndex: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], typeahead: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.ng-select-typeahead']
        }], optionTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
            args: [NgOptionTemplateDirective, { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] }]
        }], optgroupTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
            args: [NgOptgroupTemplateDirective, { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] }]
        }], labelTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
            args: [NgLabelTemplateDirective, { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] }]
        }], multiLabelTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
            args: [NgMultiLabelTemplateDirective, { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] }]
        }], headerTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
            args: [NgHeaderTemplateDirective, { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] }]
        }], footerTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
            args: [NgFooterTemplateDirective, { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] }]
        }], notFoundTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
            args: [NgNotFoundTemplateDirective, { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] }]
        }], typeToSearchTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
            args: [NgTypeToSearchTemplateDirective, { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] }]
        }], loadingTextTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
            args: [NgLoadingTextTemplateDirective, { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] }]
        }], tagTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
            args: [NgTagTemplateDirective, { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] }]
        }], loadingSpinnerTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
            args: [NgLoadingSpinnerTemplateDirective, { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] }]
        }], dropdownPanel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(( /**
                             * @return {?}
                             */() => NgDropdownPanelComponent))]
        }], searchInput: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['searchInput', { static: true }]
        }], ngOptions: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"],
            args: [NgOptionComponent, { descendants: true }]
        }] }); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/selection-model.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @return {?}
 */
function DefaultSelectionModelFactory() {
    return new DefaultSelectionModel();
}
/**
 * @record
 */
function SelectionModel() { }
if (false) {}
class DefaultSelectionModel {
    constructor() {
        this._selected = [];
    }
    /**
     * @return {?}
     */
    get value() {
        return this._selected;
    }
    /**
     * @param {?} item
     * @param {?} multiple
     * @param {?} groupAsModel
     * @return {?}
     */
    select(item, multiple, groupAsModel) {
        item.selected = true;
        if (!item.children || (!multiple && groupAsModel)) {
            this._selected.push(item);
        }
        if (multiple) {
            if (item.parent) {
                /** @type {?} */
                const childrenCount = item.parent.children.length;
                /** @type {?} */
                const selectedCount = item.parent.children.filter((/**
                 * @param {?} x
                 * @return {?}
                 */
                x => x.selected)).length;
                item.parent.selected = childrenCount === selectedCount;
            }
            else if (item.children) {
                this._setChildrenSelectedState(item.children, true);
                this._removeChildren(item);
                if (groupAsModel && this._activeChildren(item)) {
                    this._selected = [...this._selected.filter((/**
                         * @param {?} x
                         * @return {?}
                         */
                        x => x.parent !== item)), item];
                }
                else {
                    this._selected = [...this._selected, ...item.children.filter((/**
                         * @param {?} x
                         * @return {?}
                         */
                        x => !x.disabled))];
                }
            }
        }
    }
    /**
     * @param {?} item
     * @param {?} multiple
     * @return {?}
     */
    unselect(item, multiple) {
        this._selected = this._selected.filter((/**
         * @param {?} x
         * @return {?}
         */
        x => x !== item));
        item.selected = false;
        if (multiple) {
            if (item.parent && item.parent.selected) {
                /** @type {?} */
                const children = item.parent.children;
                this._removeParent(item.parent);
                this._removeChildren(item.parent);
                this._selected.push(...children.filter((/**
                 * @param {?} x
                 * @return {?}
                 */
                x => x !== item && !x.disabled)));
                item.parent.selected = false;
            }
            else if (item.children) {
                this._setChildrenSelectedState(item.children, false);
                this._removeChildren(item);
            }
        }
    }
    /**
     * @param {?} keepDisabled
     * @return {?}
     */
    clear(keepDisabled) {
        this._selected = keepDisabled ? this._selected.filter((/**
         * @param {?} x
         * @return {?}
         */
        x => x.disabled)) : [];
    }
    /**
     * @private
     * @param {?} children
     * @param {?} selected
     * @return {?}
     */
    _setChildrenSelectedState(children, selected) {
        for (const child of children) {
            if (child.disabled) {
                continue;
            }
            child.selected = selected;
        }
        ;
    }
    /**
     * @private
     * @param {?} parent
     * @return {?}
     */
    _removeChildren(parent) {
        this._selected = [
            ...this._selected.filter((/**
             * @param {?} x
             * @return {?}
             */
            x => x.parent !== parent)),
            ...parent.children.filter((/**
             * @param {?} x
             * @return {?}
             */
            x => x.parent === parent && x.disabled && x.selected))
        ];
    }
    /**
     * @private
     * @param {?} parent
     * @return {?}
     */
    _removeParent(parent) {
        this._selected = this._selected.filter((/**
         * @param {?} x
         * @return {?}
         */
        x => x !== parent));
    }
    /**
     * @private
     * @param {?} item
     * @return {?}
     */
    _activeChildren(item) {
        return item.children.every((/**
         * @param {?} x
         * @return {?}
         */
        x => !x.disabled || x.selected));
    }
}
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/ng-select.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
const ɵ0 = DefaultSelectionModelFactory;
class NgSelectModule {
}
NgSelectModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: NgSelectModule });
NgSelectModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function NgSelectModule_Factory(t) { return new (t || NgSelectModule)(); }, providers: [
        { provide: SELECTION_MODEL_FACTORY, useValue: ɵ0 }
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NgSelectModule, { declarations: function () { return [NgDropdownPanelComponent, NgOptionComponent, NgSelectComponent, NgOptgroupTemplateDirective, NgOptionTemplateDirective, NgLabelTemplateDirective, NgMultiLabelTemplateDirective, NgHeaderTemplateDirective, NgFooterTemplateDirective, NgNotFoundTemplateDirective, NgTypeToSearchTemplateDirective, NgLoadingTextTemplateDirective, NgTagTemplateDirective, NgLoadingSpinnerTemplateDirective, NgItemLabelDirective]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"]]; }, exports: function () { return [NgSelectComponent, NgOptionComponent, NgOptgroupTemplateDirective, NgOptionTemplateDirective, NgLabelTemplateDirective, NgMultiLabelTemplateDirective, NgHeaderTemplateDirective, NgFooterTemplateDirective, NgNotFoundTemplateDirective, NgTypeToSearchTemplateDirective, NgLoadingTextTemplateDirective, NgTagTemplateDirective, NgLoadingSpinnerTemplateDirective]; } }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgSelectModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    NgDropdownPanelComponent,
                    NgOptionComponent,
                    NgSelectComponent,
                    NgOptgroupTemplateDirective,
                    NgOptionTemplateDirective,
                    NgLabelTemplateDirective,
                    NgMultiLabelTemplateDirective,
                    NgHeaderTemplateDirective,
                    NgFooterTemplateDirective,
                    NgNotFoundTemplateDirective,
                    NgTypeToSearchTemplateDirective,
                    NgLoadingTextTemplateDirective,
                    NgTagTemplateDirective,
                    NgLoadingSpinnerTemplateDirective,
                    NgItemLabelDirective
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"]
                ],
                exports: [
                    NgSelectComponent,
                    NgOptionComponent,
                    NgOptgroupTemplateDirective,
                    NgOptionTemplateDirective,
                    NgLabelTemplateDirective,
                    NgMultiLabelTemplateDirective,
                    NgHeaderTemplateDirective,
                    NgFooterTemplateDirective,
                    NgNotFoundTemplateDirective,
                    NgTypeToSearchTemplateDirective,
                    NgLoadingTextTemplateDirective,
                    NgTagTemplateDirective,
                    NgLoadingSpinnerTemplateDirective
                ],
                providers: [
                    { provide: SELECTION_MODEL_FACTORY, useValue: ɵ0 }
                ]
            }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * Generated from: public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: ng-select-ng-select.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



//# sourceMappingURL=ng-select-ng-select.js.map

/***/ }),

/***/ "aCrv":
/*!*****************************************************!*\
  !*** ./node_modules/@tweenjs/tween.js/src/Tween.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Tween.js - Licensed under the MIT license
 * https://github.com/tweenjs/tween.js
 * ----------------------------------------------
 *
 * See https://github.com/tweenjs/tween.js/graphs/contributors for the full list of contributors.
 * Thank you all, you're awesome!
 */


var _Group = function () {
	this._tweens = {};
	this._tweensAddedDuringUpdate = {};
};

_Group.prototype = {
	getAll: function () {

		return Object.keys(this._tweens).map(function (tweenId) {
			return this._tweens[tweenId];
		}.bind(this));

	},

	removeAll: function () {

		this._tweens = {};

	},

	add: function (tween) {

		this._tweens[tween.getId()] = tween;
		this._tweensAddedDuringUpdate[tween.getId()] = tween;

	},

	remove: function (tween) {

		delete this._tweens[tween.getId()];
		delete this._tweensAddedDuringUpdate[tween.getId()];

	},

	update: function (time, preserve) {

		var tweenIds = Object.keys(this._tweens);

		if (tweenIds.length === 0) {
			return false;
		}

		time = time !== undefined ? time : TWEEN.now();

		// Tweens are updated in "batches". If you add a new tween during an update, then the
		// new tween will be updated in the next batch.
		// If you remove a tween during an update, it may or may not be updated. However,
		// if the removed tween was added during the current batch, then it will not be updated.
		while (tweenIds.length > 0) {
			this._tweensAddedDuringUpdate = {};

			for (var i = 0; i < tweenIds.length; i++) {

				var tween = this._tweens[tweenIds[i]];

				if (tween && tween.update(time) === false) {
					tween._isPlaying = false;

					if (!preserve) {
						delete this._tweens[tweenIds[i]];
					}
				}
			}

			tweenIds = Object.keys(this._tweensAddedDuringUpdate);
		}

		return true;

	}
};

var TWEEN = new _Group();

TWEEN.Group = _Group;
TWEEN._nextId = 0;
TWEEN.nextId = function () {
	return TWEEN._nextId++;
};


// Include a performance.now polyfill.
// In node.js, use process.hrtime.
if (typeof (self) === 'undefined' && typeof (process) !== 'undefined' && process.hrtime) {
	TWEEN.now = function () {
		var time = process.hrtime();

		// Convert [seconds, nanoseconds] to milliseconds.
		return time[0] * 1000 + time[1] / 1000000;
	};
}
// In a browser, use self.performance.now if it is available.
else if (typeof (self) !== 'undefined' &&
         self.performance !== undefined &&
		 self.performance.now !== undefined) {
	// This must be bound, because directly assigning this function
	// leads to an invocation exception in Chrome.
	TWEEN.now = self.performance.now.bind(self.performance);
}
// Use Date.now if it is available.
else if (Date.now !== undefined) {
	TWEEN.now = Date.now;
}
// Otherwise, use 'new Date().getTime()'.
else {
	TWEEN.now = function () {
		return new Date().getTime();
	};
}


TWEEN.Tween = function (object, group) {
	this._object = object;
	this._valuesStart = {};
	this._valuesEnd = {};
	this._valuesStartRepeat = {};
	this._duration = 1000;
	this._repeat = 0;
	this._repeatDelayTime = undefined;
	this._yoyo = false;
	this._isPlaying = false;
	this._reversed = false;
	this._delayTime = 0;
	this._startTime = null;
	this._easingFunction = TWEEN.Easing.Linear.None;
	this._interpolationFunction = TWEEN.Interpolation.Linear;
	this._chainedTweens = [];
	this._onStartCallback = null;
	this._onStartCallbackFired = false;
	this._onUpdateCallback = null;
	this._onRepeatCallback = null;
	this._onCompleteCallback = null;
	this._onStopCallback = null;
	this._group = group || TWEEN;
	this._id = TWEEN.nextId();

};

TWEEN.Tween.prototype = {
	getId: function () {
		return this._id;
	},

	isPlaying: function () {
		return this._isPlaying;
	},

	to: function (properties, duration) {

		this._valuesEnd = properties;

		if (duration !== undefined) {
			this._duration = duration;
		}

		return this;

	},

	duration: function duration(d) {
		this._duration = d;
		return this;
	},

	start: function (time) {

		this._group.add(this);

		this._isPlaying = true;

		this._onStartCallbackFired = false;

		this._startTime = time !== undefined ? typeof time === 'string' ? TWEEN.now() + parseFloat(time) : time : TWEEN.now();
		this._startTime += this._delayTime;

		for (var property in this._valuesEnd) {

			// Check if an Array was provided as property value
			if (this._valuesEnd[property] instanceof Array) {

				if (this._valuesEnd[property].length === 0) {
					continue;
				}

				// Create a local copy of the Array with the start value at the front
				this._valuesEnd[property] = [this._object[property]].concat(this._valuesEnd[property]);

			}

			// If `to()` specifies a property that doesn't exist in the source object,
			// we should not set that property in the object
			if (this._object[property] === undefined) {
				continue;
			}

			// Save the starting value.
			this._valuesStart[property] = this._object[property];

			if ((this._valuesStart[property] instanceof Array) === false) {
				this._valuesStart[property] *= 1.0; // Ensures we're using numbers, not strings
			}

			this._valuesStartRepeat[property] = this._valuesStart[property] || 0;

		}

		return this;

	},

	stop: function () {

		if (!this._isPlaying) {
			return this;
		}

		this._group.remove(this);
		this._isPlaying = false;

		if (this._onStopCallback !== null) {
			this._onStopCallback(this._object);
		}

		this.stopChainedTweens();
		return this;

	},

	end: function () {

		this.update(Infinity);
		return this;

	},

	stopChainedTweens: function () {

		for (var i = 0, numChainedTweens = this._chainedTweens.length; i < numChainedTweens; i++) {
			this._chainedTweens[i].stop();
		}

	},

	group: function (group) {
		this._group = group;
		return this;
	},

	delay: function (amount) {

		this._delayTime = amount;
		return this;

	},

	repeat: function (times) {

		this._repeat = times;
		return this;

	},

	repeatDelay: function (amount) {

		this._repeatDelayTime = amount;
		return this;

	},

	yoyo: function (yoyo) {

		this._yoyo = yoyo;
		return this;

	},

	easing: function (easingFunction) {

		this._easingFunction = easingFunction;
		return this;

	},

	interpolation: function (interpolationFunction) {

		this._interpolationFunction = interpolationFunction;
		return this;

	},

	chain: function () {

		this._chainedTweens = arguments;
		return this;

	},

	onStart: function (callback) {

		this._onStartCallback = callback;
		return this;

	},

	onUpdate: function (callback) {

		this._onUpdateCallback = callback;
		return this;

	},

	onRepeat: function onRepeat(callback) {

		this._onRepeatCallback = callback;
		return this;

	},

	onComplete: function (callback) {

		this._onCompleteCallback = callback;
		return this;

	},

	onStop: function (callback) {

		this._onStopCallback = callback;
		return this;

	},

	update: function (time) {

		var property;
		var elapsed;
		var value;

		if (time < this._startTime) {
			return true;
		}

		if (this._onStartCallbackFired === false) {

			if (this._onStartCallback !== null) {
				this._onStartCallback(this._object);
			}

			this._onStartCallbackFired = true;
		}

		elapsed = (time - this._startTime) / this._duration;
		elapsed = (this._duration === 0 || elapsed > 1) ? 1 : elapsed;

		value = this._easingFunction(elapsed);

		for (property in this._valuesEnd) {

			// Don't update properties that do not exist in the source object
			if (this._valuesStart[property] === undefined) {
				continue;
			}

			var start = this._valuesStart[property] || 0;
			var end = this._valuesEnd[property];

			if (end instanceof Array) {

				this._object[property] = this._interpolationFunction(end, value);

			} else {

				// Parses relative end values with start as base (e.g.: +10, -3)
				if (typeof (end) === 'string') {

					if (end.charAt(0) === '+' || end.charAt(0) === '-') {
						end = start + parseFloat(end);
					} else {
						end = parseFloat(end);
					}
				}

				// Protect against non numeric properties.
				if (typeof (end) === 'number') {
					this._object[property] = start + (end - start) * value;
				}

			}

		}

		if (this._onUpdateCallback !== null) {
			this._onUpdateCallback(this._object, elapsed);
		}

		if (elapsed === 1) {

			if (this._repeat > 0) {

				if (isFinite(this._repeat)) {
					this._repeat--;
				}

				// Reassign starting values, restart by making startTime = now
				for (property in this._valuesStartRepeat) {

					if (typeof (this._valuesEnd[property]) === 'string') {
						this._valuesStartRepeat[property] = this._valuesStartRepeat[property] + parseFloat(this._valuesEnd[property]);
					}

					if (this._yoyo) {
						var tmp = this._valuesStartRepeat[property];

						this._valuesStartRepeat[property] = this._valuesEnd[property];
						this._valuesEnd[property] = tmp;
					}

					this._valuesStart[property] = this._valuesStartRepeat[property];

				}

				if (this._yoyo) {
					this._reversed = !this._reversed;
				}

				if (this._repeatDelayTime !== undefined) {
					this._startTime = time + this._repeatDelayTime;
				} else {
					this._startTime = time + this._delayTime;
				}

				if (this._onRepeatCallback !== null) {
					this._onRepeatCallback(this._object);
				}

				return true;

			} else {

				if (this._onCompleteCallback !== null) {

					this._onCompleteCallback(this._object);
				}

				for (var i = 0, numChainedTweens = this._chainedTweens.length; i < numChainedTweens; i++) {
					// Make the chained tweens start exactly at the time they should,
					// even if the `update()` method was called way past the duration of the tween
					this._chainedTweens[i].start(this._startTime + this._duration);
				}

				return false;

			}

		}

		return true;

	}
};


TWEEN.Easing = {

	Linear: {

		None: function (k) {

			return k;

		}

	},

	Quadratic: {

		In: function (k) {

			return k * k;

		},

		Out: function (k) {

			return k * (2 - k);

		},

		InOut: function (k) {

			if ((k *= 2) < 1) {
				return 0.5 * k * k;
			}

			return - 0.5 * (--k * (k - 2) - 1);

		}

	},

	Cubic: {

		In: function (k) {

			return k * k * k;

		},

		Out: function (k) {

			return --k * k * k + 1;

		},

		InOut: function (k) {

			if ((k *= 2) < 1) {
				return 0.5 * k * k * k;
			}

			return 0.5 * ((k -= 2) * k * k + 2);

		}

	},

	Quartic: {

		In: function (k) {

			return k * k * k * k;

		},

		Out: function (k) {

			return 1 - (--k * k * k * k);

		},

		InOut: function (k) {

			if ((k *= 2) < 1) {
				return 0.5 * k * k * k * k;
			}

			return - 0.5 * ((k -= 2) * k * k * k - 2);

		}

	},

	Quintic: {

		In: function (k) {

			return k * k * k * k * k;

		},

		Out: function (k) {

			return --k * k * k * k * k + 1;

		},

		InOut: function (k) {

			if ((k *= 2) < 1) {
				return 0.5 * k * k * k * k * k;
			}

			return 0.5 * ((k -= 2) * k * k * k * k + 2);

		}

	},

	Sinusoidal: {

		In: function (k) {

			return 1 - Math.cos(k * Math.PI / 2);

		},

		Out: function (k) {

			return Math.sin(k * Math.PI / 2);

		},

		InOut: function (k) {

			return 0.5 * (1 - Math.cos(Math.PI * k));

		}

	},

	Exponential: {

		In: function (k) {

			return k === 0 ? 0 : Math.pow(1024, k - 1);

		},

		Out: function (k) {

			return k === 1 ? 1 : 1 - Math.pow(2, - 10 * k);

		},

		InOut: function (k) {

			if (k === 0) {
				return 0;
			}

			if (k === 1) {
				return 1;
			}

			if ((k *= 2) < 1) {
				return 0.5 * Math.pow(1024, k - 1);
			}

			return 0.5 * (- Math.pow(2, - 10 * (k - 1)) + 2);

		}

	},

	Circular: {

		In: function (k) {

			return 1 - Math.sqrt(1 - k * k);

		},

		Out: function (k) {

			return Math.sqrt(1 - (--k * k));

		},

		InOut: function (k) {

			if ((k *= 2) < 1) {
				return - 0.5 * (Math.sqrt(1 - k * k) - 1);
			}

			return 0.5 * (Math.sqrt(1 - (k -= 2) * k) + 1);

		}

	},

	Elastic: {

		In: function (k) {

			if (k === 0) {
				return 0;
			}

			if (k === 1) {
				return 1;
			}

			return -Math.pow(2, 10 * (k - 1)) * Math.sin((k - 1.1) * 5 * Math.PI);

		},

		Out: function (k) {

			if (k === 0) {
				return 0;
			}

			if (k === 1) {
				return 1;
			}

			return Math.pow(2, -10 * k) * Math.sin((k - 0.1) * 5 * Math.PI) + 1;

		},

		InOut: function (k) {

			if (k === 0) {
				return 0;
			}

			if (k === 1) {
				return 1;
			}

			k *= 2;

			if (k < 1) {
				return -0.5 * Math.pow(2, 10 * (k - 1)) * Math.sin((k - 1.1) * 5 * Math.PI);
			}

			return 0.5 * Math.pow(2, -10 * (k - 1)) * Math.sin((k - 1.1) * 5 * Math.PI) + 1;

		}

	},

	Back: {

		In: function (k) {

			var s = 1.70158;

			return k * k * ((s + 1) * k - s);

		},

		Out: function (k) {

			var s = 1.70158;

			return --k * k * ((s + 1) * k + s) + 1;

		},

		InOut: function (k) {

			var s = 1.70158 * 1.525;

			if ((k *= 2) < 1) {
				return 0.5 * (k * k * ((s + 1) * k - s));
			}

			return 0.5 * ((k -= 2) * k * ((s + 1) * k + s) + 2);

		}

	},

	Bounce: {

		In: function (k) {

			return 1 - TWEEN.Easing.Bounce.Out(1 - k);

		},

		Out: function (k) {

			if (k < (1 / 2.75)) {
				return 7.5625 * k * k;
			} else if (k < (2 / 2.75)) {
				return 7.5625 * (k -= (1.5 / 2.75)) * k + 0.75;
			} else if (k < (2.5 / 2.75)) {
				return 7.5625 * (k -= (2.25 / 2.75)) * k + 0.9375;
			} else {
				return 7.5625 * (k -= (2.625 / 2.75)) * k + 0.984375;
			}

		},

		InOut: function (k) {

			if (k < 0.5) {
				return TWEEN.Easing.Bounce.In(k * 2) * 0.5;
			}

			return TWEEN.Easing.Bounce.Out(k * 2 - 1) * 0.5 + 0.5;

		}

	}

};

TWEEN.Interpolation = {

	Linear: function (v, k) {

		var m = v.length - 1;
		var f = m * k;
		var i = Math.floor(f);
		var fn = TWEEN.Interpolation.Utils.Linear;

		if (k < 0) {
			return fn(v[0], v[1], f);
		}

		if (k > 1) {
			return fn(v[m], v[m - 1], m - f);
		}

		return fn(v[i], v[i + 1 > m ? m : i + 1], f - i);

	},

	Bezier: function (v, k) {

		var b = 0;
		var n = v.length - 1;
		var pw = Math.pow;
		var bn = TWEEN.Interpolation.Utils.Bernstein;

		for (var i = 0; i <= n; i++) {
			b += pw(1 - k, n - i) * pw(k, i) * v[i] * bn(n, i);
		}

		return b;

	},

	CatmullRom: function (v, k) {

		var m = v.length - 1;
		var f = m * k;
		var i = Math.floor(f);
		var fn = TWEEN.Interpolation.Utils.CatmullRom;

		if (v[0] === v[m]) {

			if (k < 0) {
				i = Math.floor(f = m * (1 + k));
			}

			return fn(v[(i - 1 + m) % m], v[i], v[(i + 1) % m], v[(i + 2) % m], f - i);

		} else {

			if (k < 0) {
				return v[0] - (fn(v[0], v[0], v[1], v[1], -f) - v[0]);
			}

			if (k > 1) {
				return v[m] - (fn(v[m], v[m], v[m - 1], v[m - 1], f - m) - v[m]);
			}

			return fn(v[i ? i - 1 : 0], v[i], v[m < i + 1 ? m : i + 1], v[m < i + 2 ? m : i + 2], f - i);

		}

	},

	Utils: {

		Linear: function (p0, p1, t) {

			return (p1 - p0) * t + p0;

		},

		Bernstein: function (n, i) {

			var fc = TWEEN.Interpolation.Utils.Factorial;

			return fc(n) / fc(i) / fc(n - i);

		},

		Factorial: (function () {

			var a = [1];

			return function (n) {

				var s = 1;

				if (a[n]) {
					return a[n];
				}

				for (var i = n; i > 1; i--) {
					s *= i;
				}

				a[n] = s;
				return s;

			};

		})(),

		CatmullRom: function (p0, p1, p2, p3, t) {

			var v0 = (p2 - p0) * 0.5;
			var v1 = (p3 - p1) * 0.5;
			var t2 = t * t;
			var t3 = t * t2;

			return (2 * p1 - 2 * p2 + v0 + v1) * t3 + (- 3 * p1 + 3 * p2 - 2 * v0 - v1) * t2 + v0 * t + p1;

		}

	}

};

// UMD (Universal Module Definition)
(function (root) {

	if (true) {

		// AMD
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return TWEEN;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

	} else {}

})(this);


/***/ }),

/***/ "e/mZ":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/angular2-multiselect-dropdown/__ivy_ngcc__/fesm2015/angular2-multiselect-dropdown.js ***!
  \***********************************************************************************************************/
/*! exports provided: AngularMultiSelect, AngularMultiSelectModule, ClickOutsideDirective, Item, ListFilterPipe, TemplateRenderer, ɵa, ɵb, ɵc, ɵd, ɵe, ɵf, ɵg, ɵh, ɵi, ɵj, ɵk, ɵm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularMultiSelect", function() { return AngularMultiSelect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularMultiSelectModule", function() { return AngularMultiSelectModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClickOutsideDirective", function() { return ClickOutsideDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Item", function() { return Item; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListFilterPipe", function() { return ListFilterPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemplateRenderer", function() { return TemplateRenderer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return DROPDOWN_CONTROL_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return DROPDOWN_CONTROL_VALIDATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵc", function() { return ScrollDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵd", function() { return styleDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵe", function() { return setPosition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵf", function() { return Badge; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵg", function() { return Search; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵh", function() { return CIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵi", function() { return VIRTUAL_SCROLLER_DEFAULT_OPTIONS_FACTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵj", function() { return VirtualScrollerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵk", function() { return VirtualScrollerModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵm", function() { return DataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _tweenjs_tween_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @tweenjs/tween.js */ "aCrv");
/* harmony import */ var _tweenjs_tween_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_tweenjs_tween_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "kU1M");







/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */




function CIcon__svg_svg_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "g");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CIcon__svg_svg_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "g");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "g", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "g");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "path", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CIcon__svg_svg_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "g");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "g", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "g");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "path", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CIcon__svg_svg_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "g");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "g");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "g", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "g");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "path", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CIcon__svg_svg_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "g");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = ["header"];
const _c1 = ["container"];
const _c2 = ["content"];
const _c3 = ["invisiblePadding"];
const _c4 = ["*"];
const _c5 = ["searchInput"];
const _c6 = ["selectedList"];
const _c7 = ["dropdownList"];
function AngularMultiSelect_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.settings.text);
} }
function AngularMultiSelect_span_5_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r25 = ctx.$implicit;
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r25[ctx_r24.settings.labelKey], " ");
} }
function AngularMultiSelect_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AngularMultiSelect_span_5_span_1_Template, 2, 1, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.selectedItems)("ngForTrackBy", ctx_r2.trackByFn.bind(ctx_r2));
} }
function AngularMultiSelect_span_6_div_1_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r27[ctx_r29.settings.labelKey]);
} }
function AngularMultiSelect_span_6_div_1_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "c-templateRenderer", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx_r30.badgeTempl)("item", item_r27);
} }
function AngularMultiSelect_span_6_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AngularMultiSelect_span_6_div_1_span_1_Template, 2, 1, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AngularMultiSelect_span_6_div_1_span_2_Template, 2, 2, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AngularMultiSelect_span_6_div_1_Template_span_click_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r34); const item_r27 = ctx.$implicit; const k_r28 = ctx.index; const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); ctx_r33.onItemClick(item_r27, k_r28, $event); return $event.stopPropagation(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "c-icon", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r26.badgeTempl);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r26.badgeTempl);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("name", "remove");
} }
function AngularMultiSelect_span_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AngularMultiSelect_span_6_div_1_Template, 5, 3, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.selectedItems)("ngForTrackBy", ctx_r3.trackByFn.bind(ctx_r3));
} }
function AngularMultiSelect_div_7_div_1_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r36[ctx_r38.settings.labelKey]);
} }
function AngularMultiSelect_div_7_div_1_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "c-templateRenderer", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx_r39.badgeTempl)("item", item_r36);
} }
function AngularMultiSelect_div_7_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AngularMultiSelect_div_7_div_1_span_1_Template, 2, 1, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AngularMultiSelect_div_7_div_1_span_2_Template, 2, 2, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AngularMultiSelect_div_7_div_1_Template_span_click_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r43); const item_r36 = ctx.$implicit; const k_r37 = ctx.index; const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); ctx_r42.onItemClick(item_r36, k_r37, $event); return $event.stopPropagation(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "c-icon", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const k_r37 = ctx.index;
    const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", k_r37 > ctx_r35.settings.badgeShowLimit - 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r35.badgeTempl);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r35.badgeTempl);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("name", "remove");
} }
function AngularMultiSelect_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AngularMultiSelect_div_7_div_1_Template, 5, 4, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r4.selectedItems)("ngForTrackBy", ctx_r4.trackByFn.bind(ctx_r4));
} }
function AngularMultiSelect_span_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("+", (ctx_r5.selectedItems == null ? null : ctx_r5.selectedItems.length) - ctx_r5.settings.badgeShowLimit, "");
} }
function AngularMultiSelect_span_9_Template(rf, ctx) { if (rf & 1) {
    const _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AngularMultiSelect_span_9_Template_span_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r45); const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); ctx_r44.clearSelection($event); return $event.stopPropagation(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "c-icon", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("name", "remove");
} }
function AngularMultiSelect_span_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "c-icon", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("name", "angle-down");
} }
function AngularMultiSelect_span_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "c-icon", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("name", "angle-up");
} }
function AngularMultiSelect_div_17_input_1_Template(rf, ctx) { if (rf & 1) {
    const _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AngularMultiSelect_div_17_input_1_Template_input_change_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r48); const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r47.toggleSelectAll($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx_r46.isSelectAll)("disabled", ctx_r46.settings.limitSelection == (ctx_r46.selectedItems == null ? null : ctx_r46.selectedItems.length))("id", ctx_r46.id);
} }
function AngularMultiSelect_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AngularMultiSelect_div_17_input_1_Template, 1, 3, "input", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r10.settings.showCheckbox);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", ctx_r10.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx_r10.isSelectAll);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r10.settings.selectAllText);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx_r10.isSelectAll);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r10.settings.unSelectAllText);
} }
function AngularMultiSelect_img_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 41);
} }
function AngularMultiSelect_div_19_span_3_Template(rf, ctx) { if (rf & 1) {
    const _r56 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AngularMultiSelect_div_19_span_3_Template_span_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r56); const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r55.clearSearch(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "c-icon", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx_r49.filter == undefined || (ctx_r49.filter == null ? null : ctx_r49.filter.length) == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("name", "clear");
} }
function AngularMultiSelect_div_19_span_4_Template(rf, ctx) { if (rf & 1) {
    const _r58 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AngularMultiSelect_div_19_span_4_Template_span_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r58); const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r57.resetInfiniteSearch(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "c-icon", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx_r50.filter == undefined || (ctx_r50.filter == null ? null : ctx_r50.filter.length) == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("name", "clear");
} }
function AngularMultiSelect_div_19_input_5_Template(rf, ctx) { if (rf & 1) {
    const _r61 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 49, 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AngularMultiSelect_div_19_input_5_Template_input_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r61); const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r60.filter = $event; })("keyup", function AngularMultiSelect_div_19_input_5_Template_input_keyup_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r61); const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r62.filterGroupedList(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placeholder", ctx_r51.settings.searchPlaceholderText)("ngModel", ctx_r51.filter);
} }
function AngularMultiSelect_div_19_input_6_Template(rf, ctx) { if (rf & 1) {
    const _r65 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 51, 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AngularMultiSelect_div_19_input_6_Template_input_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r65); const ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r64.filter = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placeholder", ctx_r52.settings.searchPlaceholderText)("ngModel", ctx_r52.filter);
} }
function AngularMultiSelect_div_19_input_7_Template(rf, ctx) { if (rf & 1) {
    const _r68 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 49, 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AngularMultiSelect_div_19_input_7_Template_input_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r68); const ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r67.filter = $event; })("keyup", function AngularMultiSelect_div_19_input_7_Template_input_keyup_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r68); const ctx_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r69.searchTerm$.next($event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placeholder", ctx_r53.settings.searchPlaceholderText)("ngModel", ctx_r53.filter);
} }
function AngularMultiSelect_div_19_c_templateRenderer_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "c-templateRenderer", 29);
} if (rf & 2) {
    const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx_r54.searchTempl)("item", ctx_r54.item);
} }
function AngularMultiSelect_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "c-icon", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AngularMultiSelect_div_19_span_3_Template, 2, 2, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AngularMultiSelect_div_19_span_4_Template, 2, 2, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AngularMultiSelect_div_19_input_5_Template, 2, 2, "input", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AngularMultiSelect_div_19_input_6_Template, 2, 2, "input", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AngularMultiSelect_div_19_input_7_Template, 2, 2, "input", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, AngularMultiSelect_div_19_c_templateRenderer_8_Template, 1, 2, "c-templateRenderer", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("name", "search");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r12.settings.lazyLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r12.settings.lazyLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r12.settings.groupBy && !ctx_r12.settings.lazyLoading && !ctx_r12.searchTempl);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r12.settings.groupBy && !ctx_r12.settings.lazyLoading && !ctx_r12.searchTempl);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r12.settings.lazyLoading && !ctx_r12.searchTempl);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r12.searchTempl);
} }
function AngularMultiSelect_div_20_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r76 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AngularMultiSelect_div_20_div_1_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r76); const ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r75.toggleFilterSelectAll(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx_r70.isFilterSelectAll)("disabled", ctx_r70.settings.limitSelection == (ctx_r70.selectedItems == null ? null : ctx_r70.selectedItems.length));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx_r70.isFilterSelectAll);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r70.settings.filterSelectAllText);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx_r70.isFilterSelectAll);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r70.settings.filterUnSelectAllText);
} }
function AngularMultiSelect_div_20_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r78 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AngularMultiSelect_div_20_div_2_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r78); const ctx_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r77.toggleFilterSelectAll(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx_r71.isFilterSelectAll && (ctx_r71.filter == null ? null : ctx_r71.filter.length) > 0)("disabled", ctx_r71.settings.limitSelection == (ctx_r71.selectedItems == null ? null : ctx_r71.selectedItems.length));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx_r71.isFilterSelectAll);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r71.settings.filterSelectAllText);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx_r71.isFilterSelectAll);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r71.settings.filterUnSelectAllText);
} }
function AngularMultiSelect_div_20_label_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx_r72.filter == undefined || (ctx_r72.filter == null ? null : ctx_r72.filter.length) == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r72.settings.noDataLabel);
} }
function AngularMultiSelect_div_20_label_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx_r73.filter == undefined || (ctx_r73.filter == null ? null : ctx_r73.filter.length) == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r73.settings.noDataLabel);
} }
function AngularMultiSelect_div_20_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r80 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AngularMultiSelect_div_20_div_5_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r80); const ctx_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r79.addFilterNewItem(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx_r74.filter == undefined || (ctx_r74.filter == null ? null : ctx_r74.filter.length) == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r74.settings.addNewButtonText);
} }
function AngularMultiSelect_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AngularMultiSelect_div_20_div_1_Template, 7, 6, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AngularMultiSelect_div_20_div_2_Template, 7, 6, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AngularMultiSelect_div_20_label_3_Template, 2, 2, "label", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AngularMultiSelect_div_20_label_4_Template, 2, 2, "label", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AngularMultiSelect_div_20_div_5_Template, 3, 2, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r13.settings.groupBy && (ctx_r13.filter == null ? null : ctx_r13.filter.length) > 0 && ctx_r13.filterLength > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r13.settings.groupBy && (ctx_r13.filter == null ? null : ctx_r13.filter.length) > 0 && (ctx_r13.groupedData == null ? null : ctx_r13.groupedData.length) > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r13.settings.groupBy && ctx_r13.filterLength == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r13.settings.groupBy && (ctx_r13.groupedData == null ? null : ctx_r13.groupedData.length) == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r13.settings.addNewItemOnFilter && ctx_r13.filterLength == 0);
} }
function AngularMultiSelect_div_21_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r83 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AngularMultiSelect_div_21_div_1_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r83); const ctx_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r82.toggleInfiniteFilterSelectAll(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx_r81.isInfiniteFilterSelectAll)("disabled", ctx_r81.settings.limitSelection == (ctx_r81.selectedItems == null ? null : ctx_r81.selectedItems.length));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx_r81.isInfiniteFilterSelectAll);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r81.settings.filterSelectAllText);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx_r81.isInfiniteFilterSelectAll);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r81.settings.filterUnSelectAllText);
} }
function AngularMultiSelect_div_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AngularMultiSelect_div_21_div_1_Template, 7, 6, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r14.filter == null ? null : ctx_r14.filter.length) > 0 && ctx_r14.infiniteFilterLength > 0);
} }
function AngularMultiSelect_div_22_li_2_input_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "input", 58);
} if (rf & 2) {
    const item_r85 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx_r87.isSelected(item_r85))("disabled", ctx_r87.settings.limitSelection == (ctx_r87.selectedItems == null ? null : ctx_r87.selectedItems.length) && !ctx_r87.isSelected(item_r85) || item_r85.disabled);
} }
const _c8 = function (a0) { return { "selected-item": a0 }; };
function AngularMultiSelect_div_22_li_2_Template(rf, ctx) { if (rf & 1) {
    const _r90 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AngularMultiSelect_div_22_li_2_Template_li_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r90); const item_r85 = ctx.$implicit; const i_r86 = ctx.index; const ctx_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r89.onItemClick(item_r85, i_r86, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AngularMultiSelect_div_22_li_2_input_1_Template, 1, 2, "input", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r85 = ctx.$implicit;
    const ctx_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c8, ctx_r84.isSelected(item_r85) == true));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r84.settings.showCheckbox);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r85[ctx_r84.settings.labelKey]);
} }
function AngularMultiSelect_div_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AngularMultiSelect_div_22_li_2_Template, 4, 5, "li", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "listFilter");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("max-height", ctx_r15.settings.maxHeight + "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](3, 3, ctx_r15.data, ctx_r15.filter, ctx_r15.settings.searchBy));
} }
function AngularMultiSelect_div_23_li_3_input_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "input", 70);
} if (rf & 2) {
    const item_r93 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r95 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx_r95.isSelected(item_r93))("disabled", ctx_r95.settings.limitSelection == (ctx_r95.selectedItems == null ? null : ctx_r95.selectedItems.length) && !ctx_r95.isSelected(item_r93) || item_r93.disabled);
} }
function AngularMultiSelect_div_23_li_3_Template(rf, ctx) { if (rf & 1) {
    const _r98 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AngularMultiSelect_div_23_li_3_Template_li_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r98); const item_r93 = ctx.$implicit; const i_r94 = ctx.index; const ctx_r97 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r97.onItemClick(item_r93, i_r94, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AngularMultiSelect_div_23_li_3_input_1_Template, 1, 2, "input", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r93 = ctx.$implicit;
    const ctx_r92 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c8, ctx_r92.isSelected(item_r93) == true));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r92.settings.showCheckbox);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r93[ctx_r92.settings.labelKey]);
} }
const _c9 = function (a0) { return { "height": a0 }; };
function AngularMultiSelect_div_23_Template(rf, ctx) { if (rf & 1) {
    const _r100 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 67, 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("vsStart", function AngularMultiSelect_div_23_Template_ul_vsStart_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r100); const ctx_r99 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r99.onScrollEnd($event); })("vsEnd", function AngularMultiSelect_div_23_Template_ul_vsEnd_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r100); const ctx_r101 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r101.onScrollEnd($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AngularMultiSelect_div_23_li_3_Template, 4, 5, "li", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r91 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("max-height", ctx_r16.settings.maxHeight + "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("enableUnequalChildrenSizes", ctx_r16.randomSize)("items", ctx_r16.virtualdata)("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c9, ctx_r16.settings.maxHeight + "px"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _r91.viewPortItems);
} }
function AngularMultiSelect_div_24_li_2_input_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "input", 70);
} if (rf & 2) {
    const item_r103 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r105 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx_r105.isSelected(item_r103))("disabled", ctx_r105.settings.limitSelection == (ctx_r105.selectedItems == null ? null : ctx_r105.selectedItems.length) && !ctx_r105.isSelected(item_r103) || item_r103.disabled);
} }
function AngularMultiSelect_div_24_li_2_Template(rf, ctx) { if (rf & 1) {
    const _r108 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AngularMultiSelect_div_24_li_2_Template_li_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r108); const item_r103 = ctx.$implicit; const i_r104 = ctx.index; const ctx_r107 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r107.onItemClick(item_r103, i_r104, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AngularMultiSelect_div_24_li_2_input_1_Template, 1, 2, "input", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "c-templateRenderer", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r103 = ctx.$implicit;
    const ctx_r102 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c8, ctx_r102.isSelected(item_r103) == true));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r102.settings.showCheckbox);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx_r102.itemTempl)("item", item_r103);
} }
function AngularMultiSelect_div_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AngularMultiSelect_div_24_li_2_Template, 4, 6, "li", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "listFilter");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("max-height", ctx_r17.settings.maxHeight + "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](3, 3, ctx_r17.data, ctx_r17.filter, ctx_r17.settings.searchBy));
} }
function AngularMultiSelect_div_25_li_3_input_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "input", 70);
} if (rf & 2) {
    const item_r111 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r113 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx_r113.isSelected(item_r111))("disabled", ctx_r113.settings.limitSelection == (ctx_r113.selectedItems == null ? null : ctx_r113.selectedItems.length) && !ctx_r113.isSelected(item_r111) || item_r111.disabled);
} }
function AngularMultiSelect_div_25_li_3_Template(rf, ctx) { if (rf & 1) {
    const _r116 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AngularMultiSelect_div_25_li_3_Template_li_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r116); const item_r111 = ctx.$implicit; const i_r112 = ctx.index; const ctx_r115 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r115.onItemClick(item_r111, i_r112, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AngularMultiSelect_div_25_li_3_input_1_Template, 1, 2, "input", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "c-templateRenderer", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r111 = ctx.$implicit;
    const ctx_r110 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c8, ctx_r110.isSelected(item_r111) == true));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r110.settings.showCheckbox);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx_r110.itemTempl)("item", item_r111);
} }
function AngularMultiSelect_div_25_Template(rf, ctx) { if (rf & 1) {
    const _r118 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 67, 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("vsStart", function AngularMultiSelect_div_25_Template_ul_vsStart_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r118); const ctx_r117 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r117.onScrollEnd($event); })("vsEnd", function AngularMultiSelect_div_25_Template_ul_vsEnd_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r118); const ctx_r119 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r119.onScrollEnd($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AngularMultiSelect_div_25_li_3_Template, 4, 6, "li", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r109 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("max-height", ctx_r18.settings.maxHeight + "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("enableUnequalChildrenSizes", ctx_r18.randomSize)("items", ctx_r18.virtualdata)("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c9, ctx_r18.settings.maxHeight + "px"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _r109.viewPortItems);
} }
function AngularMultiSelect_div_26_span_3_li_1_input_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "input", 70);
} if (rf & 2) {
    const item_r122 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r126 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx_r126.isSelected(item_r122))("disabled", ctx_r126.settings.limitSelection == (ctx_r126.selectedItems == null ? null : ctx_r126.selectedItems.length) && !ctx_r126.isSelected(item_r122) || item_r122.disabled);
} }
const _c10 = function (a0, a1) { return { "grp-title": a0, "grp-item": a1 }; };
function AngularMultiSelect_div_26_span_3_li_1_Template(rf, ctx) { if (rf & 1) {
    const _r130 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AngularMultiSelect_div_26_span_3_li_1_Template_li_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r130); const ctx_r129 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const item_r122 = ctx_r129.$implicit; const i_r123 = ctx_r129.index; const ctx_r128 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r128.onItemClick(item_r122, i_r123, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AngularMultiSelect_div_26_span_3_li_1_input_1_Template, 1, 2, "input", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "c-templateRenderer", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r122 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r124 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](4, _c10, item_r122.grpTitle, !item_r122.grpTitle && !ctx_r124.settings.singleSelection));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r124.settings.showCheckbox && !ctx_r124.settings.singleSelection);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx_r124.itemTempl)("item", item_r122);
} }
function AngularMultiSelect_div_26_span_3_li_2_input_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "input", 70);
} if (rf & 2) {
    const item_r122 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r132 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx_r132.isSelected(item_r122))("disabled", ctx_r132.settings.limitSelection == (ctx_r132.selectedItems == null ? null : ctx_r132.selectedItems.length) && !ctx_r132.isSelected(item_r122) || item_r122.disabled);
} }
function AngularMultiSelect_div_26_span_3_li_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AngularMultiSelect_div_26_span_3_li_2_input_1_Template, 1, 2, "input", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "c-templateRenderer", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r122 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r125 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](4, _c10, item_r122.grpTitle, !item_r122.grpTitle && !ctx_r125.settings.singleSelection));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r125.settings.showCheckbox);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx_r125.itemTempl)("item", item_r122);
} }
function AngularMultiSelect_div_26_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AngularMultiSelect_div_26_span_3_li_1_Template, 4, 7, "li", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AngularMultiSelect_div_26_span_3_li_2_Template, 4, 7, "li", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r122 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !item_r122.grpTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r122.grpTitle);
} }
function AngularMultiSelect_div_26_Template(rf, ctx) { if (rf & 1) {
    const _r136 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 67, 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("vsStart", function AngularMultiSelect_div_26_Template_ul_vsStart_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r136); const ctx_r135 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r135.onScrollEnd($event); })("vsEnd", function AngularMultiSelect_div_26_Template_ul_vsEnd_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r136); const ctx_r137 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r137.onScrollEnd($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AngularMultiSelect_div_26_span_3_Template, 3, 2, "span", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r120 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("max-height", ctx_r19.settings.maxHeight + "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("enableUnequalChildrenSizes", ctx_r19.randomSize)("items", ctx_r19.virtualdata)("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c9, ctx_r19.settings.maxHeight + "px"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _r120.viewPortItems);
} }
function AngularMultiSelect_div_27_span_2_input_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "input", 70);
} if (rf & 2) {
    const item_r139 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r141 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", item_r139.selected)("disabled", ctx_r141.settings.limitSelection == (ctx_r141.selectedItems == null ? null : ctx_r141.selectedItems.length) && !ctx_r141.isSelected(item_r139) || item_r139.disabled);
} }
function AngularMultiSelect_div_27_span_2_span_6_input_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "input", 70);
} if (rf & 2) {
    const val_r144 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r146 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx_r146.isSelected(val_r144))("disabled", ctx_r146.settings.limitSelection == (ctx_r146.selectedItems == null ? null : ctx_r146.selectedItems.length) && !ctx_r146.isSelected(val_r144) || val_r144.disabled);
} }
function AngularMultiSelect_div_27_span_2_span_6_Template(rf, ctx) { if (rf & 1) {
    const _r149 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AngularMultiSelect_div_27_span_2_span_6_Template_li_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r149); const val_r144 = ctx.$implicit; const j_r145 = ctx.index; const ctx_r148 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); ctx_r148.onItemClick(val_r144, j_r145, $event); return $event.stopPropagation(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AngularMultiSelect_div_27_span_2_span_6_input_2_Template, 1, 2, "input", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "c-templateRenderer", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const val_r144 = ctx.$implicit;
    const ctx_r142 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](4, _c10, val_r144.grpTitle, !val_r144.grpTitle && !ctx_r142.settings.singleSelection));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r142.settings.showCheckbox);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx_r142.itemTempl)("item", val_r144);
} }
function AngularMultiSelect_div_27_span_2_Template(rf, ctx) { if (rf & 1) {
    const _r151 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AngularMultiSelect_div_27_span_2_Template_li_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r151); const item_r139 = ctx.$implicit; const ctx_r150 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r150.selectGroup(item_r139); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AngularMultiSelect_div_27_span_2_input_2_Template, 1, 2, "input", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AngularMultiSelect_div_27_span_2_span_6_Template, 5, 7, "span", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r139 = ctx.$implicit;
    const ctx_r138 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](4, _c10, item_r139.grpTitle, !item_r139.grpTitle && !ctx_r138.settings.singleSelection));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r138.settings.showCheckbox && !ctx_r138.settings.singleSelection);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r139[ctx_r138.settings.labelKey]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", item_r139.list);
} }
function AngularMultiSelect_div_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AngularMultiSelect_div_27_span_2_Template, 7, 7, "span", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("max-height", ctx_r20.settings.maxHeight + "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r20.groupedData);
} }
function AngularMultiSelect_div_28_span_4_li_1_input_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "input", 70);
} if (rf & 2) {
    const item_r154 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r158 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx_r158.isSelected(item_r154))("disabled", ctx_r158.settings.limitSelection == (ctx_r158.selectedItems == null ? null : ctx_r158.selectedItems.length) && !ctx_r158.isSelected(item_r154) || item_r154.disabled);
} }
const _c11 = function (a0, a1, a2) { return { "grp-title": a0, "grp-item": a1, "selected-item": a2 }; };
function AngularMultiSelect_div_28_span_4_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AngularMultiSelect_div_28_span_4_li_1_input_1_Template, 1, 2, "input", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r154 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r156 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](3, _c11, item_r154.grpTitle, !item_r154.grpTitle && !ctx_r156.settings.singleSelection, ctx_r156.isSelected(item_r154) == true));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r156.settings.showCheckbox && !item_r154.grpTitle && !ctx_r156.settings.singleSelection);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r154[ctx_r156.settings.labelKey]);
} }
function AngularMultiSelect_div_28_span_4_li_2_input_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "input", 70);
} if (rf & 2) {
    const item_r154 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r161 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx_r161.isSelected(item_r154))("disabled", ctx_r161.settings.limitSelection == (ctx_r161.selectedItems == null ? null : ctx_r161.selectedItems.length) && !ctx_r161.isSelected(item_r154) || item_r154.disabled);
} }
function AngularMultiSelect_div_28_span_4_li_2_Template(rf, ctx) { if (rf & 1) {
    const _r165 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AngularMultiSelect_div_28_span_4_li_2_Template_li_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r165); const ctx_r164 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const item_r154 = ctx_r164.$implicit; const i_r155 = ctx_r164.index; const ctx_r163 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r163.onItemClick(item_r154, i_r155, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AngularMultiSelect_div_28_span_4_li_2_input_1_Template, 1, 2, "input", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r154 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r157 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](3, _c11, item_r154.grpTitle, !item_r154.grpTitle && !ctx_r157.settings.singleSelection, ctx_r157.isSelected(item_r154) == true));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r157.settings.showCheckbox && !item_r154.grpTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r154[ctx_r157.settings.labelKey]);
} }
function AngularMultiSelect_div_28_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AngularMultiSelect_div_28_span_4_li_1_Template, 4, 7, "li", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AngularMultiSelect_div_28_span_4_li_2_Template, 4, 7, "li", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r154 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r154.grpTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !item_r154.grpTitle);
} }
function AngularMultiSelect_div_28_Template(rf, ctx) { if (rf & 1) {
    const _r168 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "virtual-scroller", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("vsUpdate", function AngularMultiSelect_div_28_Template_virtual_scroller_vsUpdate_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r168); const ctx_r167 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r167.viewPortItems = $event; })("vsEnd", function AngularMultiSelect_div_28_Template_virtual_scroller_vsEnd_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r168); const ctx_r169 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r169.onScrollEnd($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul", 67, 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("vsStart", function AngularMultiSelect_div_28_Template_ul_vsStart_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r168); const ctx_r170 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r170.onScrollEnd($event); })("vsEnd", function AngularMultiSelect_div_28_Template_ul_vsEnd_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r168); const ctx_r171 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r171.onScrollEnd($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AngularMultiSelect_div_28_span_4_Template, 3, 2, "span", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r152 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("max-height", ctx_r21.settings.maxHeight + "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx_r21.groupedData)("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c9, ctx_r21.settings.maxHeight + "px"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("enableUnequalChildrenSizes", ctx_r21.randomSize)("items", ctx_r21.virtualdata)("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c9, ctx_r21.settings.maxHeight + "px"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _r152.viewPortItems);
} }
function AngularMultiSelect_div_29_span_2_input_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "input", 70);
} if (rf & 2) {
    const item_r173 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r175 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", item_r173.selected)("disabled", ctx_r175.settings.limitSelection == (ctx_r175.selectedItems == null ? null : ctx_r175.selectedItems.length) && !ctx_r175.isSelected(item_r173) || item_r173.disabled);
} }
function AngularMultiSelect_div_29_span_2_span_6_input_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "input", 70);
} if (rf & 2) {
    const val_r178 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r180 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx_r180.isSelected(val_r178))("disabled", ctx_r180.settings.limitSelection == (ctx_r180.selectedItems == null ? null : ctx_r180.selectedItems.length) && !ctx_r180.isSelected(val_r178) || val_r178.disabled);
} }
const _c12 = function (a0, a1, a2) { return { "selected-item": a0, "grp-title": a1, "grp-item": a2 }; };
function AngularMultiSelect_div_29_span_2_span_6_Template(rf, ctx) { if (rf & 1) {
    const _r183 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AngularMultiSelect_div_29_span_2_span_6_Template_li_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r183); const val_r178 = ctx.$implicit; const j_r179 = ctx.index; const ctx_r182 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); ctx_r182.onItemClick(val_r178, j_r179, $event); return $event.stopPropagation(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AngularMultiSelect_div_29_span_2_span_6_input_2_Template, 1, 2, "input", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const val_r178 = ctx.$implicit;
    const ctx_r176 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](3, _c12, ctx_r176.isSelected(val_r178) == true, val_r178.grpTitle, !val_r178.grpTitle && !ctx_r176.settings.singleSelection));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r176.settings.showCheckbox);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](val_r178[ctx_r176.settings.labelKey]);
} }
function AngularMultiSelect_div_29_span_2_Template(rf, ctx) { if (rf & 1) {
    const _r185 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AngularMultiSelect_div_29_span_2_Template_li_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r185); const item_r173 = ctx.$implicit; const ctx_r184 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r184.selectGroup(item_r173); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AngularMultiSelect_div_29_span_2_input_2_Template, 1, 2, "input", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AngularMultiSelect_div_29_span_2_span_6_Template, 5, 7, "span", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r173 = ctx.$implicit;
    const ctx_r172 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](4, _c10, item_r173.grpTitle, !item_r173.grpTitle && !ctx_r172.settings.singleSelection));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r172.settings.showCheckbox && !ctx_r172.settings.singleSelection);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r173[ctx_r172.settings.labelKey]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", item_r173.list);
} }
function AngularMultiSelect_div_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AngularMultiSelect_div_29_span_2_Template, 7, 7, "span", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("max-height", ctx_r22.settings.maxHeight + "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r22.groupedData);
} }
function AngularMultiSelect_h5_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h5", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r23.settings.noDataLabel);
} }
const _c13 = function (a0) { return { "disabled": a0 }; };
const _c14 = function (a0) { return { "dropdown-list-top": a0 }; };
const _c15 = function (a0, a1) { return { "arrow-up": a0, "arrow-down": a1 }; };
const _c16 = function (a0) { return { "single-select-mode": a0 }; };
class MyException {
    /**
     * @param {?} status
     * @param {?} body
     */
    constructor(status, body) {
        this.status = status;
        this.body = body;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ClickOutsideDirective {
    /**
     * @param {?} _elementRef
     */
    constructor(_elementRef) {
        this._elementRef = _elementRef;
        this.clickOutside = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    /**
     * @param {?} event
     * @param {?} targetElement
     * @return {?}
     */
    onClick(event, targetElement) {
        if (!targetElement) {
            return;
        }
        /** @type {?} */
        const clickedInside = this._elementRef.nativeElement.contains(targetElement);
        if (!clickedInside) {
            this.clickOutside.emit(event);
        }
    }
}
ClickOutsideDirective.ɵfac = function ClickOutsideDirective_Factory(t) { return new (t || ClickOutsideDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
ClickOutsideDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: ClickOutsideDirective, selectors: [["", "clickOutside", ""]], hostBindings: function ClickOutsideDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ClickOutsideDirective_click_HostBindingHandler($event) { return ctx.onClick($event, $event.target); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"])("touchstart", function ClickOutsideDirective_touchstart_HostBindingHandler($event) { return ctx.onClick($event, $event.target); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"]);
    } }, outputs: { clickOutside: "clickOutside" } });
/** @nocollapse */
ClickOutsideDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }
];
ClickOutsideDirective.propDecorators = {
    clickOutside: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    onClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['document:click', ['$event', '$event.target'],] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['document:touchstart', ['$event', '$event.target'],] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ClickOutsideDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[clickOutside]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, { clickOutside: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], 
    /**
     * @param {?} event
     * @param {?} targetElement
     * @return {?}
     */
    onClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['document:click', ['$event', '$event.target']]
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['document:touchstart', ['$event', '$event.target']]
        }] }); })();
class ScrollDirective {
    /**
     * @param {?} _elementRef
     */
    constructor(_elementRef) {
        this._elementRef = _elementRef;
        this.scroll = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    /**
     * @param {?} event
     * @param {?} targetElement
     * @return {?}
     */
    onClick(event, targetElement) {
        this.scroll.emit(event);
    }
}
ScrollDirective.ɵfac = function ScrollDirective_Factory(t) { return new (t || ScrollDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
ScrollDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: ScrollDirective, selectors: [["", "scroll", ""]], hostBindings: function ScrollDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function ScrollDirective_scroll_HostBindingHandler($event) { return ctx.onClick($event); });
    } }, outputs: { scroll: "scroll" } });
/** @nocollapse */
ScrollDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }
];
ScrollDirective.propDecorators = {
    scroll: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    onClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['scroll', ['$event'],] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ScrollDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[scroll]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, { scroll: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], 
    /**
     * @param {?} event
     * @param {?} targetElement
     * @return {?}
     */
    onClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['scroll', ['$event']]
        }] }); })();
class styleDirective {
    /**
     * @param {?} el
     */
    constructor(el) {
        this.el = el;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.el.nativeElement.style.top = this.styleVal;
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        this.el.nativeElement.style.top = this.styleVal;
    }
}
styleDirective.ɵfac = function styleDirective_Factory(t) { return new (t || styleDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
styleDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: styleDirective, selectors: [["", "styleProp", ""]], inputs: { styleVal: ["styleProp", "styleVal"] }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]] });
/** @nocollapse */
styleDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }
];
styleDirective.propDecorators = {
    styleVal: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['styleProp',] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](styleDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[styleProp]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, { styleVal: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['styleProp']
        }] }); })();
class setPosition {
    /**
     * @param {?} el
     */
    constructor(el) {
        this.el = el;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this.height) {
            this.el.nativeElement.style.bottom = parseInt(this.height + 15 + "") + 'px';
        }
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        if (this.height) {
            this.el.nativeElement.style.bottom = parseInt(this.height + 15 + "") + 'px';
        }
    }
}
setPosition.ɵfac = function setPosition_Factory(t) { return new (t || setPosition)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
setPosition.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: setPosition, selectors: [["", "setPosition", ""]], inputs: { height: ["setPosition", "height"] }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]] });
/** @nocollapse */
setPosition.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }
];
setPosition.propDecorators = {
    height: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['setPosition',] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](setPosition, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[setPosition]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, { height: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['setPosition']
        }] }); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DataService {
    constructor() {
        this.filteredData = [];
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    /**
     * @param {?} data
     * @return {?}
     */
    setData(data) {
        this.filteredData = data;
        this.subject.next(data);
    }
    /**
     * @return {?}
     */
    getData() {
        return this.subject.asObservable();
    }
    /**
     * @return {?}
     */
    getFilteredData() {
        if (this.filteredData && this.filteredData.length > 0) {
            return this.filteredData;
        }
        else {
            return [];
        }
    }
}
DataService.ɵfac = function DataService_Factory(t) { return new (t || DataService)(); };
DataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DataService, factory: DataService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return []; }, null); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ListFilterPipe {
    /**
     * @param {?} ds
     */
    constructor(ds) {
        this.ds = ds;
        this.filteredList = [];
    }
    /**
     * @param {?} items
     * @param {?} filter
     * @param {?} searchBy
     * @return {?}
     */
    transform(items, filter, searchBy) {
        if (!items || !filter) {
            this.ds.setData(items);
            return items;
        }
        this.filteredList = items.filter((/**
         * @param {?} item
         * @return {?}
         */
        (item) => this.applyFilter(item, filter, searchBy)));
        this.ds.setData(this.filteredList);
        return this.filteredList;
    }
    /**
     * @param {?} item
     * @param {?} filter
     * @param {?} searchBy
     * @return {?}
     */
    applyFilter(item, filter, searchBy) {
        /** @type {?} */
        let found = false;
        if (searchBy.length > 0) {
            if (item.grpTitle) {
                found = true;
            }
            else {
                for (var t = 0; t < searchBy.length; t++) {
                    if (filter && item[searchBy[t]] && item[searchBy[t]] != "") {
                        if (item[searchBy[t]].toString().toLowerCase().indexOf(filter.toLowerCase()) >= 0) {
                            found = true;
                        }
                    }
                }
            }
        }
        else {
            if (item.grpTitle) {
                found = true;
            }
            else {
                for (var prop in item) {
                    if (filter && item[prop]) {
                        if (item[prop].toString().toLowerCase().indexOf(filter.toLowerCase()) >= 0) {
                            found = true;
                        }
                    }
                }
            }
        }
        return found;
    }
}
ListFilterPipe.ɵfac = function ListFilterPipe_Factory(t) { return new (t || ListFilterPipe)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](DataService)); };
ListFilterPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "listFilter", type: ListFilterPipe, pure: true });
/** @nocollapse */
ListFilterPipe.ctorParameters = () => [
    { type: DataService }
];
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ListFilterPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'listFilter',
                pure: true
            }]
    }], function () { return [{ type: DataService }]; }, null); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class Item {
    constructor() {
    }
}
Item.ɵfac = function Item_Factory(t) { return new (t || Item)(); };
Item.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Item, selectors: [["c-item"]], contentQueries: function Item_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticContentQuery"](dirIndex, _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.template = _t.first);
    } }, decls: 0, vars: 0, template: function Item_Template(rf, ctx) { }, encapsulation: 2 });
/** @nocollapse */
Item.ctorParameters = () => [];
Item.propDecorators = {
    template: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], { static: true },] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Item, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'c-item',
                template: ``
            }]
    }], function () { return []; }, { template: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
            args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], { static: true }]
        }] }); })();
class Badge {
    constructor() {
    }
}
Badge.ɵfac = function Badge_Factory(t) { return new (t || Badge)(); };
Badge.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Badge, selectors: [["c-badge"]], contentQueries: function Badge_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticContentQuery"](dirIndex, _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.template = _t.first);
    } }, decls: 0, vars: 0, template: function Badge_Template(rf, ctx) { }, encapsulation: 2 });
/** @nocollapse */
Badge.ctorParameters = () => [];
Badge.propDecorators = {
    template: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], { static: true },] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Badge, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'c-badge',
                template: ``
            }]
    }], function () { return []; }, { template: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
            args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], { static: true }]
        }] }); })();
class Search {
    constructor() {
    }
}
Search.ɵfac = function Search_Factory(t) { return new (t || Search)(); };
Search.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Search, selectors: [["c-search"]], contentQueries: function Search_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticContentQuery"](dirIndex, _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.template = _t.first);
    } }, decls: 0, vars: 0, template: function Search_Template(rf, ctx) { }, encapsulation: 2 });
/** @nocollapse */
Search.ctorParameters = () => [];
Search.propDecorators = {
    template: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], { static: true },] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Search, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'c-search',
                template: ``
            }]
    }], function () { return []; }, { template: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
            args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], { static: true }]
        }] }); })();
class TemplateRenderer {
    /**
     * @param {?} viewContainer
     */
    constructor(viewContainer) {
        this.viewContainer = viewContainer;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.view = this.viewContainer.createEmbeddedView(this.data.template, {
            '\$implicit': this.data,
            'item': this.item
        });
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.view.destroy();
    }
}
TemplateRenderer.ɵfac = function TemplateRenderer_Factory(t) { return new (t || TemplateRenderer)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"])); };
TemplateRenderer.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TemplateRenderer, selectors: [["c-templateRenderer"]], inputs: { data: "data", item: "item" }, decls: 0, vars: 0, template: function TemplateRenderer_Template(rf, ctx) { }, encapsulation: 2 });
/** @nocollapse */
TemplateRenderer.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] }
];
TemplateRenderer.propDecorators = {
    data: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    item: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TemplateRenderer, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'c-templateRenderer',
                template: ``
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] }]; }, { data: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], item: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();
class CIcon {
}
CIcon.ɵfac = function CIcon_Factory(t) { return new (t || CIcon)(); };
CIcon.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CIcon, selectors: [["c-icon"]], inputs: { name: "name" }, decls: 5, vars: 5, consts: [["width", "100%", "height", "100%", "version", "1.1", "id", "Capa_1", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "x", "0px", "y", "0px", "viewBox", "0 0 47.971 47.971", "style", "enable-background:new 0 0 47.971 47.971;", 0, "xml", "space", "preserve", 4, "ngIf"], ["version", "1.1", "id", "Capa_1", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "x", "0px", "y", "0px", "width", "100%", "height", "100%", "viewBox", "0 0 612 612", "style", "enable-background:new 0 0 612 612;", 0, "xml", "space", "preserve", 4, "ngIf"], ["version", "1.1", "id", "Capa_1", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "x", "0px", "y", "0px", "width", "100%", "height", "100%", "viewBox", "0 0 615.52 615.52", "style", "enable-background:new 0 0 615.52 615.52;", 0, "xml", "space", "preserve", 4, "ngIf"], ["version", "1.1", "id", "Capa_1", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "x", "0px", "y", "0px", "viewBox", "0 0 51.976 51.976", "style", "enable-background:new 0 0 51.976 51.976;", 0, "xml", "space", "preserve", 4, "ngIf"], ["width", "100%", "height", "100%", "version", "1.1", "id", "Capa_1", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "x", "0px", "y", "0px", "viewBox", "0 0 47.971 47.971", 0, "xml", "space", "preserve", 2, "enable-background", "new 0 0 47.971 47.971"], ["d", "M28.228,23.986L47.092,5.122c1.172-1.171,1.172-3.071,0-4.242c-1.172-1.172-3.07-1.172-4.242,0L23.986,19.744L5.121,0.88\n                                c-1.172-1.172-3.07-1.172-4.242,0c-1.172,1.171-1.172,3.071,0,4.242l18.865,18.864L0.879,42.85c-1.172,1.171-1.172,3.071,0,4.242\n                                C1.465,47.677,2.233,47.97,3,47.97s1.535-0.293,2.121-0.879l18.865-18.864L42.85,47.091c0.586,0.586,1.354,0.879,2.121,0.879\n                                s1.535-0.293,2.121-0.879c1.172-1.171,1.172-3.071,0-4.242L28.228,23.986z"], ["version", "1.1", "id", "Capa_1", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "x", "0px", "y", "0px", "width", "100%", "height", "100%", "viewBox", "0 0 612 612", 0, "xml", "space", "preserve", 2, "enable-background", "new 0 0 612 612"], ["id", "_x31_0_34_"], ["d", "M604.501,134.782c-9.999-10.05-26.222-10.05-36.221,0L306.014,422.558L43.721,134.782\n\t\t\t\tc-9.999-10.05-26.223-10.05-36.222,0s-9.999,26.35,0,36.399l279.103,306.241c5.331,5.357,12.422,7.652,19.386,7.296\n\t\t\t\tc6.988,0.356,14.055-1.939,19.386-7.296l279.128-306.268C614.5,161.106,614.5,144.832,604.501,134.782z"], ["id", "_x39__30_"], ["d", "M604.501,440.509L325.398,134.956c-5.331-5.357-12.423-7.627-19.386-7.27c-6.989-0.357-14.056,1.913-19.387,7.27\n\t\t\t\tL7.499,440.509c-9.999,10.024-9.999,26.298,0,36.323s26.223,10.024,36.222,0l262.293-287.164L568.28,476.832\n\t\t\t\tc9.999,10.024,26.222,10.024,36.221,0C614.5,466.809,614.5,450.534,604.501,440.509z"], ["version", "1.1", "id", "Capa_1", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "x", "0px", "y", "0px", "width", "100%", "height", "100%", "viewBox", "0 0 615.52 615.52", 0, "xml", "space", "preserve", 2, "enable-background", "new 0 0 615.52 615.52"], ["id", "Search__x28_and_thou_shall_find_x29_"], ["d", "M602.531,549.736l-184.31-185.368c26.679-37.72,42.528-83.729,42.528-133.548C460.75,103.35,357.997,0,231.258,0\n\t\t\t\t\tC104.518,0,1.765,103.35,1.765,230.82c0,127.47,102.753,230.82,229.493,230.82c49.53,0,95.271-15.944,132.78-42.777\n\t\t\t\t\tl184.31,185.366c7.482,7.521,17.292,11.291,27.102,11.291c9.812,0,19.62-3.77,27.083-11.291\n\t\t\t\t\tC617.496,589.188,617.496,564.777,602.531,549.736z M355.9,319.763l-15.042,21.273L319.7,356.174\n\t\t\t\t\tc-26.083,18.658-56.667,28.526-88.442,28.526c-84.365,0-152.995-69.035-152.995-153.88c0-84.846,68.63-153.88,152.995-153.88\n\t\t\t\t\ts152.996,69.034,152.996,153.88C384.271,262.769,374.462,293.526,355.9,319.763z"], ["version", "1.1", "id", "Capa_1", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "x", "0px", "y", "0px", "viewBox", "0 0 51.976 51.976", 0, "xml", "space", "preserve", 2, "enable-background", "new 0 0 51.976 51.976"], ["d", "M44.373,7.603c-10.137-10.137-26.632-10.138-36.77,0c-10.138,10.138-10.137,26.632,0,36.77s26.632,10.138,36.77,0\n\t\tC54.51,34.235,54.51,17.74,44.373,7.603z M36.241,36.241c-0.781,0.781-2.047,0.781-2.828,0l-7.425-7.425l-7.778,7.778\n\t\tc-0.781,0.781-2.047,0.781-2.828,0c-0.781-0.781-0.781-2.047,0-2.828l7.778-7.778l-7.425-7.425c-0.781-0.781-0.781-2.048,0-2.828\n\t\tc0.781-0.781,2.047-0.781,2.828,0l7.425,7.425l7.071-7.071c0.781-0.781,2.047-0.781,2.828,0c0.781,0.781,0.781,2.047,0,2.828\n\t\tl-7.071,7.071l7.425,7.425C37.022,34.194,37.022,35.46,36.241,36.241z"]], template: function CIcon_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CIcon__svg_svg_0_Template, 3, 0, "svg", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CIcon__svg_svg_1_Template, 5, 0, "svg", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CIcon__svg_svg_2_Template, 5, 0, "svg", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CIcon__svg_svg_3_Template, 6, 0, "svg", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CIcon__svg_svg_4_Template, 3, 0, "svg", 3);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.name == "remove");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.name == "angle-down");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.name == "angle-up");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.name == "search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.name == "clear");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], encapsulation: 2 });
CIcon.propDecorators = {
    name: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CIcon, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'c-icon',
                template: `<svg *ngIf="name == 'remove'" width="100%" height="100%" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                        viewBox="0 0 47.971 47.971" style="enable-background:new 0 0 47.971 47.971;" xml:space="preserve">
                        <g>
                            <path d="M28.228,23.986L47.092,5.122c1.172-1.171,1.172-3.071,0-4.242c-1.172-1.172-3.07-1.172-4.242,0L23.986,19.744L5.121,0.88
                                c-1.172-1.172-3.07-1.172-4.242,0c-1.172,1.171-1.172,3.071,0,4.242l18.865,18.864L0.879,42.85c-1.172,1.171-1.172,3.071,0,4.242
                                C1.465,47.677,2.233,47.97,3,47.97s1.535-0.293,2.121-0.879l18.865-18.864L42.85,47.091c0.586,0.586,1.354,0.879,2.121,0.879
                                s1.535-0.293,2.121-0.879c1.172-1.171,1.172-3.071,0-4.242L28.228,23.986z"/>
                        </g>
                    </svg>
            <svg *ngIf="name == 'angle-down'" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 width="100%" height="100%" viewBox="0 0 612 612" style="enable-background:new 0 0 612 612;" xml:space="preserve">
<g>
	<g id="_x31_0_34_">
		<g>
			<path d="M604.501,134.782c-9.999-10.05-26.222-10.05-36.221,0L306.014,422.558L43.721,134.782
				c-9.999-10.05-26.223-10.05-36.222,0s-9.999,26.35,0,36.399l279.103,306.241c5.331,5.357,12.422,7.652,19.386,7.296
				c6.988,0.356,14.055-1.939,19.386-7.296l279.128-306.268C614.5,161.106,614.5,144.832,604.501,134.782z"/>
		</g>
	</g>
</g>
</svg>
<svg *ngIf="name == 'angle-up'" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 width="100%" height="100%" viewBox="0 0 612 612" style="enable-background:new 0 0 612 612;" xml:space="preserve">
<g>
	<g id="_x39__30_">
		<g>
			<path d="M604.501,440.509L325.398,134.956c-5.331-5.357-12.423-7.627-19.386-7.27c-6.989-0.357-14.056,1.913-19.387,7.27
				L7.499,440.509c-9.999,10.024-9.999,26.298,0,36.323s26.223,10.024,36.222,0l262.293-287.164L568.28,476.832
				c9.999,10.024,26.222,10.024,36.221,0C614.5,466.809,614.5,450.534,604.501,440.509z"/>
		</g>
	</g>
</g>

</svg>
<svg *ngIf="name == 'search'" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 width="100%" height="100%" viewBox="0 0 615.52 615.52" style="enable-background:new 0 0 615.52 615.52;"
	 xml:space="preserve">
<g>
	<g>
		<g id="Search__x28_and_thou_shall_find_x29_">
			<g>
				<path d="M602.531,549.736l-184.31-185.368c26.679-37.72,42.528-83.729,42.528-133.548C460.75,103.35,357.997,0,231.258,0
					C104.518,0,1.765,103.35,1.765,230.82c0,127.47,102.753,230.82,229.493,230.82c49.53,0,95.271-15.944,132.78-42.777
					l184.31,185.366c7.482,7.521,17.292,11.291,27.102,11.291c9.812,0,19.62-3.77,27.083-11.291
					C617.496,589.188,617.496,564.777,602.531,549.736z M355.9,319.763l-15.042,21.273L319.7,356.174
					c-26.083,18.658-56.667,28.526-88.442,28.526c-84.365,0-152.995-69.035-152.995-153.88c0-84.846,68.63-153.88,152.995-153.88
					s152.996,69.034,152.996,153.88C384.271,262.769,374.462,293.526,355.9,319.763z"/>
			</g>
		</g>
	</g>
</g>

</svg>
<svg *ngIf="name == 'clear'" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 51.976 51.976" style="enable-background:new 0 0 51.976 51.976;" xml:space="preserve">
<g>
	<path d="M44.373,7.603c-10.137-10.137-26.632-10.138-36.77,0c-10.138,10.138-10.137,26.632,0,36.77s26.632,10.138,36.77,0
		C54.51,34.235,54.51,17.74,44.373,7.603z M36.241,36.241c-0.781,0.781-2.047,0.781-2.828,0l-7.425-7.425l-7.778,7.778
		c-0.781,0.781-2.047,0.781-2.828,0c-0.781-0.781-0.781-2.047,0-2.828l7.778-7.778l-7.425-7.425c-0.781-0.781-0.781-2.048,0-2.828
		c0.781-0.781,2.047-0.781,2.828,0l7.425,7.425l7.071-7.071c0.781-0.781,2.047-0.781,2.828,0c0.781,0.781,0.781,2.047,0,2.828
		l-7.071,7.071l7.425,7.425C37.022,34.194,37.022,35.46,36.241,36.241z"/>
</g>
</svg>`,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
            }]
    }], null, { name: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @return {?}
 */
function VIRTUAL_SCROLLER_DEFAULT_OPTIONS_FACTORY() {
    return {
        scrollThrottlingTime: 0,
        scrollDebounceTime: 0,
        scrollAnimationTime: 750,
        checkResizeInterval: 1000,
        resizeBypassRefreshThreshold: 5,
        modifyOverflowStyleOfParentScroll: true,
        stripedTable: false
    };
}
class VirtualScrollerComponent {
    /**
     * @param {?} element
     * @param {?} renderer
     * @param {?} zone
     * @param {?} changeDetectorRef
     * @param {?} platformId
     * @param {?} options
     */
    constructor(element, renderer, zone, changeDetectorRef, platformId, options) {
        this.element = element;
        this.renderer = renderer;
        this.zone = zone;
        this.changeDetectorRef = changeDetectorRef;
        this.window = window;
        this.executeRefreshOutsideAngularZone = false;
        this._enableUnequalChildrenSizes = false;
        this.useMarginInsteadOfTranslate = false;
        this.ssrViewportWidth = 1920;
        this.ssrViewportHeight = 1080;
        this._bufferAmount = 0;
        this._items = [];
        this.compareItems = (/**
         * @param {?} item1
         * @param {?} item2
         * @return {?}
         */
        (item1, item2) => item1 === item2);
        this.vsUpdate = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.vsChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.vsStart = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.vsEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.calculatedScrollbarWidth = 0;
        this.calculatedScrollbarHeight = 0;
        this.padding = 0;
        this.previousViewPort = (/** @type {?} */ ({}));
        this.cachedPageSize = 0;
        this.previousScrollNumberElements = 0;
        this.isAngularUniversalSSR = Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["isPlatformServer"])(platformId);
        this.scrollThrottlingTime = options.scrollThrottlingTime;
        this.scrollDebounceTime = options.scrollDebounceTime;
        this.scrollAnimationTime = options.scrollAnimationTime;
        this.scrollbarWidth = options.scrollbarWidth;
        this.scrollbarHeight = options.scrollbarHeight;
        this.checkResizeInterval = options.checkResizeInterval;
        this.resizeBypassRefreshThreshold = options.resizeBypassRefreshThreshold;
        this.modifyOverflowStyleOfParentScroll = options.modifyOverflowStyleOfParentScroll;
        this.stripedTable = options.stripedTable;
        this.horizontal = false;
        this.resetWrapGroupDimensions();
    }
    /**
     * @return {?}
     */
    get viewPortInfo() {
        /** @type {?} */
        let pageInfo = this.previousViewPort || (/** @type {?} */ ({}));
        return {
            startIndex: pageInfo.startIndex || 0,
            endIndex: pageInfo.endIndex || 0,
            scrollStartPosition: pageInfo.scrollStartPosition || 0,
            scrollEndPosition: pageInfo.scrollEndPosition || 0,
            maxScrollPosition: pageInfo.maxScrollPosition || 0,
            startIndexWithBuffer: pageInfo.startIndexWithBuffer || 0,
            endIndexWithBuffer: pageInfo.endIndexWithBuffer || 0
        };
    }
    /**
     * @return {?}
     */
    get enableUnequalChildrenSizes() {
        return this._enableUnequalChildrenSizes;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set enableUnequalChildrenSizes(value) {
        if (this._enableUnequalChildrenSizes === value) {
            return;
        }
        this._enableUnequalChildrenSizes = value;
        this.minMeasuredChildWidth = undefined;
        this.minMeasuredChildHeight = undefined;
    }
    /**
     * @return {?}
     */
    get bufferAmount() {
        if (typeof (this._bufferAmount) === 'number' && this._bufferAmount >= 0) {
            return this._bufferAmount;
        }
        else {
            return this.enableUnequalChildrenSizes ? 5 : 0;
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set bufferAmount(value) {
        this._bufferAmount = value;
    }
    /**
     * @return {?}
     */
    get scrollThrottlingTime() {
        return this._scrollThrottlingTime;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set scrollThrottlingTime(value) {
        this._scrollThrottlingTime = value;
        this.updateOnScrollFunction();
    }
    /**
     * @return {?}
     */
    get scrollDebounceTime() {
        return this._scrollDebounceTime;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set scrollDebounceTime(value) {
        this._scrollDebounceTime = value;
        this.updateOnScrollFunction();
    }
    /**
     * @protected
     * @return {?}
     */
    updateOnScrollFunction() {
        if (this.scrollDebounceTime) {
            this.onScroll = (/** @type {?} */ (this.debounce((/**
             * @return {?}
             */
            () => {
                this.refresh_internal(false);
            }), this.scrollDebounceTime)));
        }
        else if (this.scrollThrottlingTime) {
            this.onScroll = (/** @type {?} */ (this.throttleTrailing((/**
             * @return {?}
             */
            () => {
                this.refresh_internal(false);
            }), this.scrollThrottlingTime)));
        }
        else {
            this.onScroll = (/**
             * @return {?}
             */
            () => {
                this.refresh_internal(false);
            });
        }
    }
    /**
     * @return {?}
     */
    get checkResizeInterval() {
        return this._checkResizeInterval;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set checkResizeInterval(value) {
        if (this._checkResizeInterval === value) {
            return;
        }
        this._checkResizeInterval = value;
        this.addScrollEventHandlers();
    }
    /**
     * @return {?}
     */
    get items() {
        return this._items;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set items(value) {
        if (value === this._items) {
            return;
        }
        this._items = value || [];
        this.refresh_internal(true);
    }
    /**
     * @return {?}
     */
    get horizontal() {
        return this._horizontal;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set horizontal(value) {
        this._horizontal = value;
        this.updateDirection();
    }
    /**
     * @protected
     * @return {?}
     */
    revertParentOverscroll() {
        /** @type {?} */
        const scrollElement = this.getScrollElement();
        if (scrollElement && this.oldParentScrollOverflow) {
            scrollElement.style['overflow-y'] = this.oldParentScrollOverflow.y;
            scrollElement.style['overflow-x'] = this.oldParentScrollOverflow.x;
        }
        this.oldParentScrollOverflow = undefined;
    }
    /**
     * @return {?}
     */
    get parentScroll() {
        return this._parentScroll;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set parentScroll(value) {
        if (this._parentScroll === value) {
            return;
        }
        this.revertParentOverscroll();
        this._parentScroll = value;
        this.addScrollEventHandlers();
        /** @type {?} */
        const scrollElement = this.getScrollElement();
        if (this.modifyOverflowStyleOfParentScroll && scrollElement !== this.element.nativeElement) {
            this.oldParentScrollOverflow = { x: scrollElement.style['overflow-x'], y: scrollElement.style['overflow-y'] };
            scrollElement.style['overflow-y'] = this.horizontal ? 'visible' : 'auto';
            scrollElement.style['overflow-x'] = this.horizontal ? 'auto' : 'visible';
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.addScrollEventHandlers();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.removeScrollEventHandlers();
        this.revertParentOverscroll();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        /** @type {?} */
        let indexLengthChanged = this.cachedItemsLength !== this.items.length;
        this.cachedItemsLength = this.items.length;
        /** @type {?} */
        const firstRun = !changes.items || !changes.items.previousValue || changes.items.previousValue.length === 0;
        this.refresh_internal(indexLengthChanged || firstRun);
    }
    /**
     * @return {?}
     */
    ngDoCheck() {
        if (this.cachedItemsLength !== this.items.length) {
            this.cachedItemsLength = this.items.length;
            this.refresh_internal(true);
            return;
        }
        if (this.previousViewPort && this.viewPortItems && this.viewPortItems.length > 0) {
            /** @type {?} */
            let itemsArrayChanged = false;
            for (let i = 0; i < this.viewPortItems.length; ++i) {
                if (!this.compareItems(this.items[this.previousViewPort.startIndexWithBuffer + i], this.viewPortItems[i])) {
                    itemsArrayChanged = true;
                    break;
                }
            }
            if (itemsArrayChanged) {
                this.refresh_internal(true);
            }
        }
    }
    /**
     * @return {?}
     */
    refresh() {
        this.refresh_internal(true);
    }
    /**
     * @return {?}
     */
    invalidateAllCachedMeasurements() {
        this.wrapGroupDimensions = {
            maxChildSizePerWrapGroup: [],
            numberOfKnownWrapGroupChildSizes: 0,
            sumOfKnownWrapGroupChildWidths: 0,
            sumOfKnownWrapGroupChildHeights: 0
        };
        this.minMeasuredChildWidth = undefined;
        this.minMeasuredChildHeight = undefined;
        this.refresh_internal(false);
    }
    /**
     * @param {?} item
     * @return {?}
     */
    invalidateCachedMeasurementForItem(item) {
        if (this.enableUnequalChildrenSizes) {
            /** @type {?} */
            let index = this.items && this.items.indexOf(item);
            if (index >= 0) {
                this.invalidateCachedMeasurementAtIndex(index);
            }
        }
        else {
            this.minMeasuredChildWidth = undefined;
            this.minMeasuredChildHeight = undefined;
        }
        this.refresh_internal(false);
    }
    /**
     * @param {?} index
     * @return {?}
     */
    invalidateCachedMeasurementAtIndex(index) {
        if (this.enableUnequalChildrenSizes) {
            /** @type {?} */
            let cachedMeasurement = this.wrapGroupDimensions.maxChildSizePerWrapGroup[index];
            if (cachedMeasurement) {
                this.wrapGroupDimensions.maxChildSizePerWrapGroup[index] = undefined;
                --this.wrapGroupDimensions.numberOfKnownWrapGroupChildSizes;
                this.wrapGroupDimensions.sumOfKnownWrapGroupChildWidths -= cachedMeasurement.childWidth || 0;
                this.wrapGroupDimensions.sumOfKnownWrapGroupChildHeights -= cachedMeasurement.childHeight || 0;
            }
        }
        else {
            this.minMeasuredChildWidth = undefined;
            this.minMeasuredChildHeight = undefined;
        }
        this.refresh_internal(false);
    }
    /**
     * @param {?} item
     * @param {?=} alignToBeginning
     * @param {?=} additionalOffset
     * @param {?=} animationMilliseconds
     * @param {?=} animationCompletedCallback
     * @return {?}
     */
    scrollInto(item, alignToBeginning = true, additionalOffset = 0, animationMilliseconds = undefined, animationCompletedCallback = undefined) {
        /** @type {?} */
        let index = this.items.indexOf(item);
        if (index === -1) {
            return;
        }
        this.scrollToIndex(index, alignToBeginning, additionalOffset, animationMilliseconds, animationCompletedCallback);
    }
    /**
     * @param {?} index
     * @param {?=} alignToBeginning
     * @param {?=} additionalOffset
     * @param {?=} animationMilliseconds
     * @param {?=} animationCompletedCallback
     * @return {?}
     */
    scrollToIndex(index, alignToBeginning = true, additionalOffset = 0, animationMilliseconds = undefined, animationCompletedCallback = undefined) {
        /** @type {?} */
        let maxRetries = 5;
        /** @type {?} */
        let retryIfNeeded = (/**
         * @return {?}
         */
        () => {
            --maxRetries;
            if (maxRetries <= 0) {
                if (animationCompletedCallback) {
                    animationCompletedCallback();
                }
                return;
            }
            /** @type {?} */
            let dimensions = this.calculateDimensions();
            /** @type {?} */
            let desiredStartIndex = Math.min(Math.max(index, 0), dimensions.itemCount - 1);
            if (this.previousViewPort.startIndex === desiredStartIndex) {
                if (animationCompletedCallback) {
                    animationCompletedCallback();
                }
                return;
            }
            this.scrollToIndex_internal(index, alignToBeginning, additionalOffset, 0, retryIfNeeded);
        });
        this.scrollToIndex_internal(index, alignToBeginning, additionalOffset, animationMilliseconds, retryIfNeeded);
    }
    /**
     * @protected
     * @param {?} index
     * @param {?=} alignToBeginning
     * @param {?=} additionalOffset
     * @param {?=} animationMilliseconds
     * @param {?=} animationCompletedCallback
     * @return {?}
     */
    scrollToIndex_internal(index, alignToBeginning = true, additionalOffset = 0, animationMilliseconds = undefined, animationCompletedCallback = undefined) {
        animationMilliseconds = animationMilliseconds === undefined ? this.scrollAnimationTime : animationMilliseconds;
        /** @type {?} */
        let dimensions = this.calculateDimensions();
        /** @type {?} */
        let scroll = this.calculatePadding(index, dimensions) + additionalOffset;
        if (!alignToBeginning) {
            scroll -= dimensions.wrapGroupsPerPage * dimensions[this._childScrollDim];
        }
        this.scrollToPosition(scroll, animationMilliseconds, animationCompletedCallback);
    }
    /**
     * @param {?} scrollPosition
     * @param {?=} animationMilliseconds
     * @param {?=} animationCompletedCallback
     * @return {?}
     */
    scrollToPosition(scrollPosition, animationMilliseconds = undefined, animationCompletedCallback = undefined) {
        scrollPosition += this.getElementsOffset();
        animationMilliseconds = animationMilliseconds === undefined ? this.scrollAnimationTime : animationMilliseconds;
        /** @type {?} */
        let scrollElement = this.getScrollElement();
        /** @type {?} */
        let animationRequest;
        if (this.currentTween) {
            this.currentTween.stop();
            this.currentTween = undefined;
        }
        if (!animationMilliseconds) {
            this.renderer.setProperty(scrollElement, this._scrollType, scrollPosition);
            this.refresh_internal(false, animationCompletedCallback);
            return;
        }
        /** @type {?} */
        const tweenConfigObj = { scrollPosition: scrollElement[this._scrollType] };
        /** @type {?} */
        let newTween = new _tweenjs_tween_js__WEBPACK_IMPORTED_MODULE_4__["Tween"](tweenConfigObj)
            .to({ scrollPosition }, animationMilliseconds)
            .easing(_tweenjs_tween_js__WEBPACK_IMPORTED_MODULE_4__["Easing"].Quadratic.Out)
            .onUpdate((/**
         * @param {?} data
         * @return {?}
         */
        (data) => {
            if (isNaN(data.scrollPosition)) {
                return;
            }
            this.renderer.setProperty(scrollElement, this._scrollType, data.scrollPosition);
            this.refresh_internal(false);
        }))
            .onStop((/**
         * @return {?}
         */
        () => {
            cancelAnimationFrame(animationRequest);
        }))
            .start();
        /** @type {?} */
        const animate = (/**
         * @param {?=} time
         * @return {?}
         */
        (time) => {
            if (!newTween["isPlaying"]()) {
                return;
            }
            newTween.update(time);
            if (tweenConfigObj.scrollPosition === scrollPosition) {
                this.refresh_internal(false, animationCompletedCallback);
                return;
            }
            this.zone.runOutsideAngular((/**
             * @return {?}
             */
            () => {
                animationRequest = requestAnimationFrame(animate);
            }));
        });
        animate();
        this.currentTween = newTween;
    }
    /**
     * @protected
     * @param {?} element
     * @return {?}
     */
    getElementSize(element) {
        /** @type {?} */
        let result = element.getBoundingClientRect();
        /** @type {?} */
        let styles = getComputedStyle(element);
        /** @type {?} */
        let marginTop = parseInt(styles['margin-top'], 10) || 0;
        /** @type {?} */
        let marginBottom = parseInt(styles['margin-bottom'], 10) || 0;
        /** @type {?} */
        let marginLeft = parseInt(styles['margin-left'], 10) || 0;
        /** @type {?} */
        let marginRight = parseInt(styles['margin-right'], 10) || 0;
        return {
            top: result.top + marginTop,
            bottom: result.bottom + marginBottom,
            left: result.left + marginLeft,
            right: result.right + marginRight,
            width: result.width + marginLeft + marginRight,
            height: result.height + marginTop + marginBottom
        };
    }
    /**
     * @protected
     * @return {?}
     */
    checkScrollElementResized() {
        /** @type {?} */
        let boundingRect = this.getElementSize(this.getScrollElement());
        /** @type {?} */
        let sizeChanged;
        if (!this.previousScrollBoundingRect) {
            sizeChanged = true;
        }
        else {
            /** @type {?} */
            let widthChange = Math.abs(boundingRect.width - this.previousScrollBoundingRect.width);
            /** @type {?} */
            let heightChange = Math.abs(boundingRect.height - this.previousScrollBoundingRect.height);
            sizeChanged = widthChange > this.resizeBypassRefreshThreshold || heightChange > this.resizeBypassRefreshThreshold;
        }
        if (sizeChanged) {
            this.previousScrollBoundingRect = boundingRect;
            if (boundingRect.width > 0 && boundingRect.height > 0) {
                this.refresh_internal(false);
            }
        }
    }
    /**
     * @protected
     * @return {?}
     */
    updateDirection() {
        if (this.horizontal) {
            this._invisiblePaddingProperty = 'width';
            this._offsetType = 'offsetLeft';
            this._pageOffsetType = 'pageXOffset';
            this._childScrollDim = 'childWidth';
            this._marginDir = 'margin-left';
            this._translateDir = 'translateX';
            this._scrollType = 'scrollLeft';
        }
        else {
            this._invisiblePaddingProperty = 'height';
            this._offsetType = 'offsetTop';
            this._pageOffsetType = 'pageYOffset';
            this._childScrollDim = 'childHeight';
            this._marginDir = 'margin-top';
            this._translateDir = 'translateY';
            this._scrollType = 'scrollTop';
        }
    }
    /**
     * @protected
     * @param {?} func
     * @param {?} wait
     * @return {?}
     */
    debounce(func, wait) {
        /** @type {?} */
        const throttled = this.throttleTrailing(func, wait);
        /** @type {?} */
        const result = (/**
         * @return {?}
         */
        function () {
            throttled['cancel']();
            throttled.apply(this, arguments);
        });
        result['cancel'] = (/**
         * @return {?}
         */
        function () {
            throttled['cancel']();
        });
        return result;
    }
    /**
     * @protected
     * @param {?} func
     * @param {?} wait
     * @return {?}
     */
    throttleTrailing(func, wait) {
        /** @type {?} */
        let timeout = undefined;
        /** @type {?} */
        let _arguments = arguments;
        /** @type {?} */
        const result = (/**
         * @return {?}
         */
        function () {
            /** @type {?} */
            const _this = this;
            _arguments = arguments;
            if (timeout) {
                return;
            }
            if (wait <= 0) {
                func.apply(_this, _arguments);
            }
            else {
                timeout = setTimeout((/**
                 * @return {?}
                 */
                function () {
                    timeout = undefined;
                    func.apply(_this, _arguments);
                }), wait);
            }
        });
        result['cancel'] = (/**
         * @return {?}
         */
        function () {
            if (timeout) {
                clearTimeout(timeout);
                timeout = undefined;
            }
        });
        return result;
    }
    /**
     * @protected
     * @param {?} itemsArrayModified
     * @param {?=} refreshCompletedCallback
     * @param {?=} maxRunTimes
     * @return {?}
     */
    refresh_internal(itemsArrayModified, refreshCompletedCallback = undefined, maxRunTimes = 2) {
        //note: maxRunTimes is to force it to keep recalculating if the previous iteration caused a re-render (different sliced items in viewport or scrollPosition changed).
        //The default of 2x max will probably be accurate enough without causing too large a performance bottleneck
        //The code would typically quit out on the 2nd iteration anyways. The main time it'd think more than 2 runs would be necessary would be for vastly different sized child items or if this is the 1st time the items array was initialized.
        //Without maxRunTimes, If the user is actively scrolling this code would become an infinite loop until they stopped scrolling. This would be okay, except each scroll event would start an additional infinte loop. We want to short-circuit it to prevent this.
        if (itemsArrayModified && this.previousViewPort && this.previousViewPort.scrollStartPosition > 0) {
            //if items were prepended, scroll forward to keep same items visible
            /** @type {?} */
            let oldViewPort = this.previousViewPort;
            /** @type {?} */
            let oldViewPortItems = this.viewPortItems;
            /** @type {?} */
            let oldRefreshCompletedCallback = refreshCompletedCallback;
            refreshCompletedCallback = (/**
             * @return {?}
             */
            () => {
                /** @type {?} */
                let scrollLengthDelta = this.previousViewPort.scrollLength - oldViewPort.scrollLength;
                if (scrollLengthDelta > 0 && this.viewPortItems) {
                    /** @type {?} */
                    let oldStartItem = oldViewPortItems[0];
                    /** @type {?} */
                    let oldStartItemIndex = this.items.findIndex((/**
                     * @param {?} x
                     * @return {?}
                     */
                    x => this.compareItems(oldStartItem, x)));
                    if (oldStartItemIndex > this.previousViewPort.startIndexWithBuffer) {
                        /** @type {?} */
                        let itemOrderChanged = false;
                        for (let i = 1; i < this.viewPortItems.length; ++i) {
                            if (!this.compareItems(this.items[oldStartItemIndex + i], oldViewPortItems[i])) {
                                itemOrderChanged = true;
                                break;
                            }
                        }
                        if (!itemOrderChanged) {
                            this.scrollToPosition(this.previousViewPort.scrollStartPosition + scrollLengthDelta, 0, oldRefreshCompletedCallback);
                            return;
                        }
                    }
                }
                if (oldRefreshCompletedCallback) {
                    oldRefreshCompletedCallback();
                }
            });
        }
        this.zone.runOutsideAngular((/**
         * @return {?}
         */
        () => {
            requestAnimationFrame((/**
             * @return {?}
             */
            () => {
                if (itemsArrayModified) {
                    this.resetWrapGroupDimensions();
                }
                /** @type {?} */
                let viewport = this.calculateViewport();
                /** @type {?} */
                let startChanged = itemsArrayModified || viewport.startIndex !== this.previousViewPort.startIndex;
                /** @type {?} */
                let endChanged = itemsArrayModified || viewport.endIndex !== this.previousViewPort.endIndex;
                /** @type {?} */
                let scrollLengthChanged = viewport.scrollLength !== this.previousViewPort.scrollLength;
                /** @type {?} */
                let paddingChanged = viewport.padding !== this.previousViewPort.padding;
                /** @type {?} */
                let scrollPositionChanged = viewport.scrollStartPosition !== this.previousViewPort.scrollStartPosition || viewport.scrollEndPosition !== this.previousViewPort.scrollEndPosition || viewport.maxScrollPosition !== this.previousViewPort.maxScrollPosition;
                this.previousViewPort = viewport;
                if (scrollLengthChanged) {
                    this.renderer.setStyle(this.invisiblePaddingElementRef.nativeElement, this._invisiblePaddingProperty, `${viewport.scrollLength}px`);
                }
                if (paddingChanged) {
                    if (this.useMarginInsteadOfTranslate) {
                        this.renderer.setStyle(this.contentElementRef.nativeElement, this._marginDir, `${viewport.padding}px`);
                    }
                    else {
                        this.renderer.setStyle(this.contentElementRef.nativeElement, 'transform', `${this._translateDir}(${viewport.padding}px)`);
                        this.renderer.setStyle(this.contentElementRef.nativeElement, 'webkitTransform', `${this._translateDir}(${viewport.padding}px)`);
                    }
                }
                if (this.headerElementRef) {
                    /** @type {?} */
                    let scrollPosition = this.getScrollElement()[this._scrollType];
                    /** @type {?} */
                    let containerOffset = this.getElementsOffset();
                    /** @type {?} */
                    let offset = Math.max(scrollPosition - viewport.padding - containerOffset + this.headerElementRef.nativeElement.clientHeight, 0);
                    this.renderer.setStyle(this.headerElementRef.nativeElement, 'transform', `${this._translateDir}(${offset}px)`);
                    this.renderer.setStyle(this.headerElementRef.nativeElement, 'webkitTransform', `${this._translateDir}(${offset}px)`);
                }
                /** @type {?} */
                const changeEventArg = (startChanged || endChanged) ? {
                    startIndex: viewport.startIndex,
                    endIndex: viewport.endIndex,
                    scrollStartPosition: viewport.scrollStartPosition,
                    scrollEndPosition: viewport.scrollEndPosition,
                    startIndexWithBuffer: viewport.startIndexWithBuffer,
                    endIndexWithBuffer: viewport.endIndexWithBuffer,
                    maxScrollPosition: viewport.maxScrollPosition
                } : undefined;
                if (startChanged || endChanged || scrollPositionChanged) {
                    /** @type {?} */
                    const handleChanged = (/**
                     * @return {?}
                     */
                    () => {
                        // update the scroll list to trigger re-render of components in viewport
                        this.viewPortItems = viewport.startIndexWithBuffer >= 0 && viewport.endIndexWithBuffer >= 0 ? this.items.slice(viewport.startIndexWithBuffer, viewport.endIndexWithBuffer + 1) : [];
                        this.vsUpdate.emit(this.viewPortItems);
                        if (startChanged) {
                            this.vsStart.emit(changeEventArg);
                        }
                        if (endChanged) {
                            this.vsEnd.emit(changeEventArg);
                        }
                        if (startChanged || endChanged) {
                            this.changeDetectorRef.markForCheck();
                            this.vsChange.emit(changeEventArg);
                        }
                        if (maxRunTimes > 0) {
                            this.refresh_internal(false, refreshCompletedCallback, maxRunTimes - 1);
                            return;
                        }
                        if (refreshCompletedCallback) {
                            refreshCompletedCallback();
                        }
                    });
                    if (this.executeRefreshOutsideAngularZone) {
                        handleChanged();
                    }
                    else {
                        this.zone.run(handleChanged);
                    }
                }
                else {
                    if (maxRunTimes > 0 && (scrollLengthChanged || paddingChanged)) {
                        this.refresh_internal(false, refreshCompletedCallback, maxRunTimes - 1);
                        return;
                    }
                    if (refreshCompletedCallback) {
                        refreshCompletedCallback();
                    }
                }
            }));
        }));
    }
    /**
     * @protected
     * @return {?}
     */
    getScrollElement() {
        return this.parentScroll instanceof Window ? document.scrollingElement || document.documentElement || document.body : this.parentScroll || this.element.nativeElement;
    }
    /**
     * @protected
     * @return {?}
     */
    addScrollEventHandlers() {
        if (this.isAngularUniversalSSR) {
            return;
        }
        /** @type {?} */
        let scrollElement = this.getScrollElement();
        this.removeScrollEventHandlers();
        this.zone.runOutsideAngular((/**
         * @return {?}
         */
        () => {
            if (this.parentScroll instanceof Window) {
                this.disposeScrollHandler = this.renderer.listen('window', 'scroll', this.onScroll);
                this.disposeResizeHandler = this.renderer.listen('window', 'resize', this.onScroll);
            }
            else {
                this.disposeScrollHandler = this.renderer.listen(scrollElement, 'scroll', this.onScroll);
                if (this._checkResizeInterval > 0) {
                    this.checkScrollElementResizedTimer = (/** @type {?} */ (setInterval((/**
                     * @return {?}
                     */
                    () => { this.checkScrollElementResized(); }), this._checkResizeInterval)));
                }
            }
        }));
    }
    /**
     * @protected
     * @return {?}
     */
    removeScrollEventHandlers() {
        if (this.checkScrollElementResizedTimer) {
            clearInterval(this.checkScrollElementResizedTimer);
        }
        if (this.disposeScrollHandler) {
            this.disposeScrollHandler();
            this.disposeScrollHandler = undefined;
        }
        if (this.disposeResizeHandler) {
            this.disposeResizeHandler();
            this.disposeResizeHandler = undefined;
        }
    }
    /**
     * @protected
     * @return {?}
     */
    getElementsOffset() {
        if (this.isAngularUniversalSSR) {
            return 0;
        }
        /** @type {?} */
        let offset = 0;
        if (this.containerElementRef && this.containerElementRef.nativeElement) {
            offset += this.containerElementRef.nativeElement[this._offsetType];
        }
        if (this.parentScroll) {
            /** @type {?} */
            let scrollElement = this.getScrollElement();
            /** @type {?} */
            let elementClientRect = this.getElementSize(this.element.nativeElement);
            /** @type {?} */
            let scrollClientRect = this.getElementSize(scrollElement);
            if (this.horizontal) {
                offset += elementClientRect.left - scrollClientRect.left;
            }
            else {
                offset += elementClientRect.top - scrollClientRect.top;
            }
            if (!(this.parentScroll instanceof Window)) {
                offset += scrollElement[this._scrollType];
            }
        }
        return offset;
    }
    /**
     * @protected
     * @return {?}
     */
    countItemsPerWrapGroup() {
        if (this.isAngularUniversalSSR) {
            return Math.round(this.horizontal ? this.ssrViewportHeight / this.ssrChildHeight : this.ssrViewportWidth / this.ssrChildWidth);
        }
        /** @type {?} */
        let propertyName = this.horizontal ? 'offsetLeft' : 'offsetTop';
        /** @type {?} */
        let children = ((this.containerElementRef && this.containerElementRef.nativeElement) || this.contentElementRef.nativeElement).children;
        /** @type {?} */
        let childrenLength = children ? children.length : 0;
        if (childrenLength === 0) {
            return 1;
        }
        /** @type {?} */
        let firstOffset = children[0][propertyName];
        /** @type {?} */
        let result = 1;
        while (result < childrenLength && firstOffset === children[result][propertyName]) {
            ++result;
        }
        return result;
    }
    /**
     * @protected
     * @return {?}
     */
    getScrollStartPosition() {
        /** @type {?} */
        let windowScrollValue = undefined;
        if (this.parentScroll instanceof Window) {
            windowScrollValue = window[this._pageOffsetType];
        }
        return windowScrollValue || this.getScrollElement()[this._scrollType] || 0;
    }
    /**
     * @protected
     * @return {?}
     */
    resetWrapGroupDimensions() {
        /** @type {?} */
        const oldWrapGroupDimensions = this.wrapGroupDimensions;
        this.invalidateAllCachedMeasurements();
        if (!this.enableUnequalChildrenSizes || !oldWrapGroupDimensions || oldWrapGroupDimensions.numberOfKnownWrapGroupChildSizes === 0) {
            return;
        }
        /** @type {?} */
        const itemsPerWrapGroup = this.countItemsPerWrapGroup();
        for (let wrapGroupIndex = 0; wrapGroupIndex < oldWrapGroupDimensions.maxChildSizePerWrapGroup.length; ++wrapGroupIndex) {
            /** @type {?} */
            const oldWrapGroupDimension = oldWrapGroupDimensions.maxChildSizePerWrapGroup[wrapGroupIndex];
            if (!oldWrapGroupDimension || !oldWrapGroupDimension.items || !oldWrapGroupDimension.items.length) {
                continue;
            }
            if (oldWrapGroupDimension.items.length !== itemsPerWrapGroup) {
                return;
            }
            /** @type {?} */
            let itemsChanged = false;
            /** @type {?} */
            let arrayStartIndex = itemsPerWrapGroup * wrapGroupIndex;
            for (let i = 0; i < itemsPerWrapGroup; ++i) {
                if (!this.compareItems(oldWrapGroupDimension.items[i], this.items[arrayStartIndex + i])) {
                    itemsChanged = true;
                    break;
                }
            }
            if (!itemsChanged) {
                ++this.wrapGroupDimensions.numberOfKnownWrapGroupChildSizes;
                this.wrapGroupDimensions.sumOfKnownWrapGroupChildWidths += oldWrapGroupDimension.childWidth || 0;
                this.wrapGroupDimensions.sumOfKnownWrapGroupChildHeights += oldWrapGroupDimension.childHeight || 0;
                this.wrapGroupDimensions.maxChildSizePerWrapGroup[wrapGroupIndex] = oldWrapGroupDimension;
            }
        }
    }
    /**
     * @protected
     * @return {?}
     */
    calculateDimensions() {
        /** @type {?} */
        let scrollElement = this.getScrollElement();
        /** @type {?} */
        const maxCalculatedScrollBarSize = 25;
        this.calculatedScrollbarHeight = Math.max(Math.min(scrollElement.offsetHeight - scrollElement.clientHeight, maxCalculatedScrollBarSize), this.calculatedScrollbarHeight);
        this.calculatedScrollbarWidth = Math.max(Math.min(scrollElement.offsetWidth - scrollElement.clientWidth, maxCalculatedScrollBarSize), this.calculatedScrollbarWidth);
        /** @type {?} */
        let viewportWidth = scrollElement.offsetWidth - (this.scrollbarWidth || this.calculatedScrollbarWidth || (this.horizontal ? 0 : maxCalculatedScrollBarSize));
        /** @type {?} */
        let viewportHeight = scrollElement.offsetHeight - (this.scrollbarHeight || this.calculatedScrollbarHeight || (this.horizontal ? maxCalculatedScrollBarSize : 0));
        /** @type {?} */
        let content = (this.containerElementRef && this.containerElementRef.nativeElement) || this.contentElementRef.nativeElement;
        /** @type {?} */
        let itemsPerWrapGroup = this.countItemsPerWrapGroup();
        /** @type {?} */
        let wrapGroupsPerPage;
        /** @type {?} */
        let defaultChildWidth;
        /** @type {?} */
        let defaultChildHeight;
        if (this.isAngularUniversalSSR) {
            viewportWidth = this.ssrViewportWidth;
            viewportHeight = this.ssrViewportHeight;
            defaultChildWidth = this.ssrChildWidth;
            defaultChildHeight = this.ssrChildHeight;
            /** @type {?} */
            let itemsPerRow = Math.max(Math.ceil(viewportWidth / defaultChildWidth), 1);
            /** @type {?} */
            let itemsPerCol = Math.max(Math.ceil(viewportHeight / defaultChildHeight), 1);
            wrapGroupsPerPage = this.horizontal ? itemsPerRow : itemsPerCol;
        }
        else if (!this.enableUnequalChildrenSizes) {
            if (content.children.length > 0) {
                if (!this.childWidth || !this.childHeight) {
                    if (!this.minMeasuredChildWidth && viewportWidth > 0) {
                        this.minMeasuredChildWidth = viewportWidth;
                    }
                    if (!this.minMeasuredChildHeight && viewportHeight > 0) {
                        this.minMeasuredChildHeight = viewportHeight;
                    }
                }
                /** @type {?} */
                let child = content.children[0];
                /** @type {?} */
                let clientRect = this.getElementSize(child);
                this.minMeasuredChildWidth = Math.min(this.minMeasuredChildWidth, clientRect.width);
                this.minMeasuredChildHeight = Math.min(this.minMeasuredChildHeight, clientRect.height);
            }
            defaultChildWidth = this.childWidth || this.minMeasuredChildWidth || viewportWidth;
            defaultChildHeight = this.childHeight || this.minMeasuredChildHeight || viewportHeight;
            /** @type {?} */
            let itemsPerRow = Math.max(Math.ceil(viewportWidth / defaultChildWidth), 1);
            /** @type {?} */
            let itemsPerCol = Math.max(Math.ceil(viewportHeight / defaultChildHeight), 1);
            wrapGroupsPerPage = this.horizontal ? itemsPerRow : itemsPerCol;
        }
        else {
            /** @type {?} */
            let scrollOffset = scrollElement[this._scrollType] - (this.previousViewPort ? this.previousViewPort.padding : 0);
            /** @type {?} */
            let arrayStartIndex = this.previousViewPort.startIndexWithBuffer || 0;
            /** @type {?} */
            let wrapGroupIndex = Math.ceil(arrayStartIndex / itemsPerWrapGroup);
            /** @type {?} */
            let maxWidthForWrapGroup = 0;
            /** @type {?} */
            let maxHeightForWrapGroup = 0;
            /** @type {?} */
            let sumOfVisibleMaxWidths = 0;
            /** @type {?} */
            let sumOfVisibleMaxHeights = 0;
            wrapGroupsPerPage = 0;
            for (let i = 0; i < content.children.length; ++i) {
                ++arrayStartIndex;
                /** @type {?} */
                let child = content.children[i];
                /** @type {?} */
                let clientRect = this.getElementSize(child);
                maxWidthForWrapGroup = Math.max(maxWidthForWrapGroup, clientRect.width);
                maxHeightForWrapGroup = Math.max(maxHeightForWrapGroup, clientRect.height);
                if (arrayStartIndex % itemsPerWrapGroup === 0) {
                    /** @type {?} */
                    let oldValue = this.wrapGroupDimensions.maxChildSizePerWrapGroup[wrapGroupIndex];
                    if (oldValue) {
                        --this.wrapGroupDimensions.numberOfKnownWrapGroupChildSizes;
                        this.wrapGroupDimensions.sumOfKnownWrapGroupChildWidths -= oldValue.childWidth || 0;
                        this.wrapGroupDimensions.sumOfKnownWrapGroupChildHeights -= oldValue.childHeight || 0;
                    }
                    ++this.wrapGroupDimensions.numberOfKnownWrapGroupChildSizes;
                    /** @type {?} */
                    const items = this.items.slice(arrayStartIndex - itemsPerWrapGroup, arrayStartIndex);
                    this.wrapGroupDimensions.maxChildSizePerWrapGroup[wrapGroupIndex] = {
                        childWidth: maxWidthForWrapGroup,
                        childHeight: maxHeightForWrapGroup,
                        items: items
                    };
                    this.wrapGroupDimensions.sumOfKnownWrapGroupChildWidths += maxWidthForWrapGroup;
                    this.wrapGroupDimensions.sumOfKnownWrapGroupChildHeights += maxHeightForWrapGroup;
                    if (this.horizontal) {
                        /** @type {?} */
                        let maxVisibleWidthForWrapGroup = Math.min(maxWidthForWrapGroup, Math.max(viewportWidth - sumOfVisibleMaxWidths, 0));
                        if (scrollOffset > 0) {
                            /** @type {?} */
                            let scrollOffsetToRemove = Math.min(scrollOffset, maxVisibleWidthForWrapGroup);
                            maxVisibleWidthForWrapGroup -= scrollOffsetToRemove;
                            scrollOffset -= scrollOffsetToRemove;
                        }
                        sumOfVisibleMaxWidths += maxVisibleWidthForWrapGroup;
                        if (maxVisibleWidthForWrapGroup > 0 && viewportWidth >= sumOfVisibleMaxWidths) {
                            ++wrapGroupsPerPage;
                        }
                    }
                    else {
                        /** @type {?} */
                        let maxVisibleHeightForWrapGroup = Math.min(maxHeightForWrapGroup, Math.max(viewportHeight - sumOfVisibleMaxHeights, 0));
                        if (scrollOffset > 0) {
                            /** @type {?} */
                            let scrollOffsetToRemove = Math.min(scrollOffset, maxVisibleHeightForWrapGroup);
                            maxVisibleHeightForWrapGroup -= scrollOffsetToRemove;
                            scrollOffset -= scrollOffsetToRemove;
                        }
                        sumOfVisibleMaxHeights += maxVisibleHeightForWrapGroup;
                        if (maxVisibleHeightForWrapGroup > 0 && viewportHeight >= sumOfVisibleMaxHeights) {
                            ++wrapGroupsPerPage;
                        }
                    }
                    ++wrapGroupIndex;
                    maxWidthForWrapGroup = 0;
                    maxHeightForWrapGroup = 0;
                }
            }
            /** @type {?} */
            let averageChildWidth = this.wrapGroupDimensions.sumOfKnownWrapGroupChildWidths / this.wrapGroupDimensions.numberOfKnownWrapGroupChildSizes;
            /** @type {?} */
            let averageChildHeight = this.wrapGroupDimensions.sumOfKnownWrapGroupChildHeights / this.wrapGroupDimensions.numberOfKnownWrapGroupChildSizes;
            defaultChildWidth = this.childWidth || averageChildWidth || viewportWidth;
            defaultChildHeight = this.childHeight || averageChildHeight || viewportHeight;
            if (this.horizontal) {
                if (viewportWidth > sumOfVisibleMaxWidths) {
                    wrapGroupsPerPage += Math.ceil((viewportWidth - sumOfVisibleMaxWidths) / defaultChildWidth);
                }
            }
            else {
                if (viewportHeight > sumOfVisibleMaxHeights) {
                    wrapGroupsPerPage += Math.ceil((viewportHeight - sumOfVisibleMaxHeights) / defaultChildHeight);
                }
            }
        }
        /** @type {?} */
        let itemCount = this.items.length;
        /** @type {?} */
        let itemsPerPage = itemsPerWrapGroup * wrapGroupsPerPage;
        /** @type {?} */
        let pageCount_fractional = itemCount / itemsPerPage;
        /** @type {?} */
        let numberOfWrapGroups = Math.ceil(itemCount / itemsPerWrapGroup);
        /** @type {?} */
        let scrollLength = 0;
        /** @type {?} */
        let defaultScrollLengthPerWrapGroup = this.horizontal ? defaultChildWidth : defaultChildHeight;
        if (this.enableUnequalChildrenSizes) {
            /** @type {?} */
            let numUnknownChildSizes = 0;
            for (let i = 0; i < numberOfWrapGroups; ++i) {
                /** @type {?} */
                let childSize = this.wrapGroupDimensions.maxChildSizePerWrapGroup[i] && this.wrapGroupDimensions.maxChildSizePerWrapGroup[i][this._childScrollDim];
                if (childSize) {
                    scrollLength += childSize;
                }
                else {
                    ++numUnknownChildSizes;
                }
            }
            scrollLength += Math.round(numUnknownChildSizes * defaultScrollLengthPerWrapGroup);
        }
        else {
            scrollLength = numberOfWrapGroups * defaultScrollLengthPerWrapGroup;
        }
        if (this.headerElementRef) {
            scrollLength += this.headerElementRef.nativeElement.clientHeight;
        }
        /** @type {?} */
        let viewportLength = this.horizontal ? viewportWidth : viewportHeight;
        /** @type {?} */
        let maxScrollPosition = Math.max(scrollLength - viewportLength, 0);
        return {
            itemCount: itemCount,
            itemsPerWrapGroup: itemsPerWrapGroup,
            wrapGroupsPerPage: wrapGroupsPerPage,
            itemsPerPage: itemsPerPage,
            pageCount_fractional: pageCount_fractional,
            childWidth: defaultChildWidth,
            childHeight: defaultChildHeight,
            scrollLength: scrollLength,
            viewportLength: viewportLength,
            maxScrollPosition: maxScrollPosition
        };
    }
    /**
     * @protected
     * @param {?} arrayStartIndexWithBuffer
     * @param {?} dimensions
     * @return {?}
     */
    calculatePadding(arrayStartIndexWithBuffer, dimensions) {
        if (dimensions.itemCount === 0) {
            return 0;
        }
        /** @type {?} */
        let defaultScrollLengthPerWrapGroup = dimensions[this._childScrollDim];
        /** @type {?} */
        let startingWrapGroupIndex = Math.floor(arrayStartIndexWithBuffer / dimensions.itemsPerWrapGroup) || 0;
        if (!this.enableUnequalChildrenSizes) {
            return defaultScrollLengthPerWrapGroup * startingWrapGroupIndex;
        }
        /** @type {?} */
        let numUnknownChildSizes = 0;
        /** @type {?} */
        let result = 0;
        for (let i = 0; i < startingWrapGroupIndex; ++i) {
            /** @type {?} */
            let childSize = this.wrapGroupDimensions.maxChildSizePerWrapGroup[i] && this.wrapGroupDimensions.maxChildSizePerWrapGroup[i][this._childScrollDim];
            if (childSize) {
                result += childSize;
            }
            else {
                ++numUnknownChildSizes;
            }
        }
        result += Math.round(numUnknownChildSizes * defaultScrollLengthPerWrapGroup);
        return result;
    }
    /**
     * @protected
     * @param {?} scrollPosition
     * @param {?} dimensions
     * @return {?}
     */
    calculatePageInfo(scrollPosition, dimensions) {
        /** @type {?} */
        let scrollPercentage = 0;
        if (this.enableUnequalChildrenSizes) {
            /** @type {?} */
            const numberOfWrapGroups = Math.ceil(dimensions.itemCount / dimensions.itemsPerWrapGroup);
            /** @type {?} */
            let totalScrolledLength = 0;
            /** @type {?} */
            let defaultScrollLengthPerWrapGroup = dimensions[this._childScrollDim];
            for (let i = 0; i < numberOfWrapGroups; ++i) {
                /** @type {?} */
                let childSize = this.wrapGroupDimensions.maxChildSizePerWrapGroup[i] && this.wrapGroupDimensions.maxChildSizePerWrapGroup[i][this._childScrollDim];
                if (childSize) {
                    totalScrolledLength += childSize;
                }
                else {
                    totalScrolledLength += defaultScrollLengthPerWrapGroup;
                }
                if (scrollPosition < totalScrolledLength) {
                    scrollPercentage = i / numberOfWrapGroups;
                    break;
                }
            }
        }
        else {
            scrollPercentage = scrollPosition / dimensions.scrollLength;
        }
        /** @type {?} */
        let startingArrayIndex_fractional = Math.min(Math.max(scrollPercentage * dimensions.pageCount_fractional, 0), dimensions.pageCount_fractional) * dimensions.itemsPerPage;
        /** @type {?} */
        let maxStart = dimensions.itemCount - dimensions.itemsPerPage - 1;
        /** @type {?} */
        let arrayStartIndex = Math.min(Math.floor(startingArrayIndex_fractional), maxStart);
        arrayStartIndex -= arrayStartIndex % dimensions.itemsPerWrapGroup; // round down to start of wrapGroup
        if (this.stripedTable) {
            /** @type {?} */
            let bufferBoundary = 2 * dimensions.itemsPerWrapGroup;
            if (arrayStartIndex % bufferBoundary !== 0) {
                arrayStartIndex = Math.max(arrayStartIndex - arrayStartIndex % bufferBoundary, 0);
            }
        }
        /** @type {?} */
        let arrayEndIndex = Math.ceil(startingArrayIndex_fractional) + dimensions.itemsPerPage - 1;
        /** @type {?} */
        let endIndexWithinWrapGroup = (arrayEndIndex + 1) % dimensions.itemsPerWrapGroup;
        if (endIndexWithinWrapGroup > 0) {
            arrayEndIndex += dimensions.itemsPerWrapGroup - endIndexWithinWrapGroup; // round up to end of wrapGroup
        }
        if (isNaN(arrayStartIndex)) {
            arrayStartIndex = 0;
        }
        if (isNaN(arrayEndIndex)) {
            arrayEndIndex = 0;
        }
        arrayStartIndex = Math.min(Math.max(arrayStartIndex, 0), dimensions.itemCount - 1);
        arrayEndIndex = Math.min(Math.max(arrayEndIndex, 0), dimensions.itemCount - 1);
        /** @type {?} */
        let bufferSize = this.bufferAmount * dimensions.itemsPerWrapGroup;
        /** @type {?} */
        let startIndexWithBuffer = Math.min(Math.max(arrayStartIndex - bufferSize, 0), dimensions.itemCount - 1);
        /** @type {?} */
        let endIndexWithBuffer = Math.min(Math.max(arrayEndIndex + bufferSize, 0), dimensions.itemCount - 1);
        return {
            startIndex: arrayStartIndex,
            endIndex: arrayEndIndex,
            startIndexWithBuffer: startIndexWithBuffer,
            endIndexWithBuffer: endIndexWithBuffer,
            scrollStartPosition: scrollPosition,
            scrollEndPosition: scrollPosition + dimensions.viewportLength,
            maxScrollPosition: dimensions.maxScrollPosition
        };
    }
    /**
     * @protected
     * @return {?}
     */
    calculateViewport() {
        /** @type {?} */
        let dimensions = this.calculateDimensions();
        /** @type {?} */
        let offset = this.getElementsOffset();
        /** @type {?} */
        let scrollStartPosition = this.getScrollStartPosition();
        if (scrollStartPosition > (dimensions.scrollLength + offset) && !(this.parentScroll instanceof Window)) {
            scrollStartPosition = dimensions.scrollLength;
        }
        else {
            scrollStartPosition -= offset;
        }
        scrollStartPosition = Math.max(0, scrollStartPosition);
        /** @type {?} */
        let pageInfo = this.calculatePageInfo(scrollStartPosition, dimensions);
        /** @type {?} */
        let newPadding = this.calculatePadding(pageInfo.startIndexWithBuffer, dimensions);
        /** @type {?} */
        let newScrollLength = dimensions.scrollLength;
        return {
            startIndex: pageInfo.startIndex,
            endIndex: pageInfo.endIndex,
            startIndexWithBuffer: pageInfo.startIndexWithBuffer,
            endIndexWithBuffer: pageInfo.endIndexWithBuffer,
            padding: Math.round(newPadding),
            scrollLength: Math.round(newScrollLength),
            scrollStartPosition: pageInfo.scrollStartPosition,
            scrollEndPosition: pageInfo.scrollEndPosition,
            maxScrollPosition: pageInfo.maxScrollPosition
        };
    }
}
VirtualScrollerComponent.ɵfac = function VirtualScrollerComponent_Factory(t) { return new (t || VirtualScrollerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"]('virtual-scroller-default-options', 8)); };
VirtualScrollerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: VirtualScrollerComponent, selectors: [["virtual-scroller"], ["", "virtualScroller", ""]], contentQueries: function VirtualScrollerComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, _c0, true, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, _c1, true, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.headerElementRef = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.containerElementRef = _t.first);
    } }, viewQuery: function VirtualScrollerComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c2, true, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c3, true, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.contentElementRef = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.invisiblePaddingElementRef = _t.first);
    } }, hostVars: 6, hostBindings: function VirtualScrollerComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("horizontal", ctx.horizontal)("vertical", !ctx.horizontal)("selfScroll", !ctx.parentScroll);
    } }, inputs: { executeRefreshOutsideAngularZone: "executeRefreshOutsideAngularZone", useMarginInsteadOfTranslate: "useMarginInsteadOfTranslate", ssrViewportWidth: "ssrViewportWidth", ssrViewportHeight: "ssrViewportHeight", compareItems: "compareItems", scrollThrottlingTime: "scrollThrottlingTime", scrollDebounceTime: "scrollDebounceTime", scrollAnimationTime: "scrollAnimationTime", scrollbarWidth: "scrollbarWidth", scrollbarHeight: "scrollbarHeight", checkResizeInterval: "checkResizeInterval", resizeBypassRefreshThreshold: "resizeBypassRefreshThreshold", modifyOverflowStyleOfParentScroll: "modifyOverflowStyleOfParentScroll", stripedTable: "stripedTable", horizontal: "horizontal", enableUnequalChildrenSizes: "enableUnequalChildrenSizes", bufferAmount: "bufferAmount", items: "items", parentScroll: "parentScroll", childWidth: "childWidth", childHeight: "childHeight", ssrChildWidth: "ssrChildWidth", ssrChildHeight: "ssrChildHeight" }, outputs: { vsUpdate: "vsUpdate", vsChange: "vsChange", vsStart: "vsStart", vsEnd: "vsEnd" }, exportAs: ["virtualScroller"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], ngContentSelectors: _c4, decls: 5, vars: 0, consts: [[1, "total-padding"], ["invisiblePadding", ""], [1, "scrollable-content"], ["content", ""]], template: function VirtualScrollerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["[_nghost-%COMP%] {\n      position: relative;\n\t  display: block;\n      -webkit-overflow-scrolling: touch;\n    }\n\t\n\t.horizontal.selfScroll[_nghost-%COMP%] {\n      overflow-y: visible;\n      overflow-x: auto;\n\t}\n\t.vertical.selfScroll[_nghost-%COMP%] {\n      overflow-y: auto;\n      overflow-x: visible;\n\t}\n\t\n    .scrollable-content[_ngcontent-%COMP%] {\n      top: 0;\n      left: 0;\n      width: 100%;\n      height: 100%;\n      max-width: 100vw;\n      max-height: 100vh;\n      position: absolute;\n    }\n\n\t.scrollable-content[_ngcontent-%COMP%]     > * {\n\t\tbox-sizing: border-box;\n\t}\n\t\n\t.horizontal[_nghost-%COMP%] {\n\t\twhite-space: nowrap;\n\t}\n\t\n\t.horizontal[_nghost-%COMP%]   .scrollable-content[_ngcontent-%COMP%] {\n\t\tdisplay: flex;\n\t}\n\t\n\t.horizontal[_nghost-%COMP%]   .scrollable-content[_ngcontent-%COMP%]     > * {\n\t\tflex-shrink: 0;\n\t\tflex-grow: 0;\n\t\twhite-space: initial;\n\t}\n\t\n    .total-padding[_ngcontent-%COMP%] {\n      width: 1px;\n      opacity: 0;\n    }\n    \n    .horizontal[_nghost-%COMP%]   .total-padding[_ngcontent-%COMP%] {\n      height: 100%;\n    }"] });
/** @nocollapse */
VirtualScrollerComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] },
    { type: Object, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"],] }] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: ['virtual-scroller-default-options',] }] }
];
VirtualScrollerComponent.propDecorators = {
    executeRefreshOutsideAngularZone: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    enableUnequalChildrenSizes: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    useMarginInsteadOfTranslate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    modifyOverflowStyleOfParentScroll: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    stripedTable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    scrollbarWidth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    scrollbarHeight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    childWidth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    childHeight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    ssrChildWidth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    ssrChildHeight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    ssrViewportWidth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    ssrViewportHeight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    bufferAmount: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    scrollAnimationTime: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    resizeBypassRefreshThreshold: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    scrollThrottlingTime: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    scrollDebounceTime: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    checkResizeInterval: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    items: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    compareItems: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    horizontal: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    parentScroll: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    vsUpdate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    vsChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    vsStart: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    vsEnd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    contentElementRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['content', { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], static: false },] }],
    invisiblePaddingElementRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['invisiblePadding', { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], static: false },] }],
    headerElementRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: ['header', { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], static: false },] }],
    containerElementRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: ['container', { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], static: false },] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VirtualScrollerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'virtual-scroller,[virtualScroller]',
                exportAs: 'virtualScroller',
                template: `
    <div class="total-padding" #invisiblePadding></div>
    <div class="scrollable-content" #content>
      <ng-content></ng-content>
    </div>
  `,
                host: {
                    '[class.horizontal]': "horizontal",
                    '[class.vertical]': "!horizontal",
                    '[class.selfScroll]': "!parentScroll"
                },
                styles: [`
    :host {
      position: relative;
	  display: block;
      -webkit-overflow-scrolling: touch;
    }
	
	:host.horizontal.selfScroll {
      overflow-y: visible;
      overflow-x: auto;
	}
	:host.vertical.selfScroll {
      overflow-y: auto;
      overflow-x: visible;
	}
	
    .scrollable-content {
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      max-width: 100vw;
      max-height: 100vh;
      position: absolute;
    }

	.scrollable-content ::ng-deep > * {
		box-sizing: border-box;
	}
	
	:host.horizontal {
		white-space: nowrap;
	}
	
	:host.horizontal .scrollable-content {
		display: flex;
	}
	
	:host.horizontal .scrollable-content ::ng-deep > * {
		flex-shrink: 0;
		flex-grow: 0;
		white-space: initial;
	}
	
    .total-padding {
      width: 1px;
      opacity: 0;
    }
    
    :host.horizontal .total-padding {
      height: 100%;
    }
  `]
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { type: Object, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: ['virtual-scroller-default-options']
            }] }]; }, { executeRefreshOutsideAngularZone: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], useMarginInsteadOfTranslate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], ssrViewportWidth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], ssrViewportHeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], compareItems: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], vsUpdate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], vsChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], vsStart: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], vsEnd: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], scrollThrottlingTime: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], scrollDebounceTime: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], scrollAnimationTime: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], scrollbarWidth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], scrollbarHeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], checkResizeInterval: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], resizeBypassRefreshThreshold: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], modifyOverflowStyleOfParentScroll: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], stripedTable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], horizontal: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], enableUnequalChildrenSizes: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], bufferAmount: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], items: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], parentScroll: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], childWidth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], childHeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], ssrChildWidth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], ssrChildHeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], contentElementRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['content', { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], static: false }]
        }], invisiblePaddingElementRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['invisiblePadding', { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], static: false }]
        }], headerElementRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
            args: ['header', { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], static: false }]
        }], containerElementRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
            args: ['container', { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], static: false }]
        }] }); })();
class VirtualScrollerModule {
}
VirtualScrollerModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: VirtualScrollerModule });
VirtualScrollerModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function VirtualScrollerModule_Factory(t) { return new (t || VirtualScrollerModule)(); }, providers: [
        {
            provide: 'virtual-scroller-default-options',
            useFactory: VIRTUAL_SCROLLER_DEFAULT_OPTIONS_FACTORY
        }
    ], imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](VirtualScrollerModule, { declarations: function () { return [VirtualScrollerComponent]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]]; }, exports: function () { return [VirtualScrollerComponent]; } }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VirtualScrollerModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                exports: [VirtualScrollerComponent],
                declarations: [VirtualScrollerComponent],
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
                providers: [
                    {
                        provide: 'virtual-scroller-default-options',
                        useFactory: VIRTUAL_SCROLLER_DEFAULT_OPTIONS_FACTORY
                    }
                ]
            }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const DROPDOWN_CONTROL_VALUE_ACCESSOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])((/**
     * @return {?}
     */
    () => AngularMultiSelect)),
    multi: true
};
/** @type {?} */
const DROPDOWN_CONTROL_VALIDATION = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALIDATORS"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])((/**
     * @return {?}
     */
    () => AngularMultiSelect)),
    multi: true,
};
/** @type {?} */
const noop = (/**
 * @return {?}
 */
() => {
});
class AngularMultiSelect {
    /**
     * @param {?} _elementRef
     * @param {?} cdr
     * @param {?} ds
     */
    constructor(_elementRef, cdr, ds) {
        this._elementRef = _elementRef;
        this.cdr = cdr;
        this.ds = ds;
        this.onSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onDeSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onSelectAll = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onDeSelectAll = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onOpen = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onClose = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onScrollToEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onFilterSelectAll = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onFilterDeSelectAll = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onAddFilterNewItem = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onGroupSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onGroupDeSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.virtualdata = [];
        this.searchTerm$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.isActive = false;
        this.isSelectAll = false;
        this.isFilterSelectAll = false;
        this.isInfiniteFilterSelectAll = false;
        this.chunkIndex = [];
        this.cachedItems = [];
        this.groupCachedItems = [];
        this.itemHeight = 41.6;
        this.filterLength = 0;
        this.infiniteFilterLength = 0;
        this.dropdownListYOffset = 0;
        this.id = Math.random().toString(36).substring(2);
        this.defaultSettings = {
            singleSelection: false,
            text: 'Select',
            enableCheckAll: true,
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            filterSelectAllText: 'Select all filtered results',
            filterUnSelectAllText: 'UnSelect all filtered results',
            enableSearchFilter: false,
            searchBy: [],
            maxHeight: 300,
            badgeShowLimit: 999999999999,
            classes: '',
            disabled: false,
            searchPlaceholderText: 'Search',
            showCheckbox: true,
            noDataLabel: 'No Data Available',
            searchAutofocus: true,
            lazyLoading: false,
            labelKey: 'itemName',
            primaryKey: 'id',
            position: 'bottom',
            autoPosition: true,
            enableFilterSelectAll: true,
            selectGroup: false,
            addNewItemOnFilter: false,
            addNewButtonText: "Add",
            escapeToClose: true,
            clearAll: true
        };
        this.randomSize = true;
        this.filteredList = [];
        this.virtualScroollInit = false;
        this.isDisabledItemPresent = false;
        this.onTouchedCallback = noop;
        this.onChangeCallback = noop;
        this.searchTerm$.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["debounceTime"])(1000), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])((/**
         * @param {?} term
         * @return {?}
         */
        term => term))).subscribe((/**
         * @param {?} val
         * @return {?}
         */
        val => {
            this.filterInfiniteList(val);
        }));
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onEscapeDown(event) {
        if (this.settings.escapeToClose) {
            this.closeDropdown();
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.settings = Object.assign(this.defaultSettings, this.settings);
        this.cachedItems = this.cloneArray(this.data);
        if (this.settings.position == 'top') {
            setTimeout((/**
             * @return {?}
             */
            () => {
                this.selectedListHeight = { val: 0 };
                this.selectedListHeight.val = this.selectedListElem.nativeElement.clientHeight;
            }));
        }
        this.subscription = this.ds.getData().subscribe((/**
         * @param {?} data
         * @return {?}
         */
        data => {
            if (data) {
                /** @type {?} */
                let len = 0;
                data.forEach((/**
                 * @param {?} obj
                 * @param {?} i
                 * @return {?}
                 */
                (obj, i) => {
                    if (obj.disabled) {
                        this.isDisabledItemPresent = true;
                    }
                    if (!obj.hasOwnProperty('grpTitle')) {
                        len++;
                    }
                }));
                this.filterLength = len;
                this.onFilterChange(data);
            }
        }));
        setTimeout((/**
         * @return {?}
         */
        () => {
            this.calculateDropdownDirection();
        }));
        this.virtualScroollInit = false;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes.data && !changes.data.firstChange) {
            if (this.settings.groupBy) {
                this.groupedData = this.transformData(this.data, this.settings.groupBy);
                if (this.data.length == 0) {
                    this.selectedItems = [];
                }
                this.groupCachedItems = this.cloneArray(this.groupedData);
            }
            this.cachedItems = this.cloneArray(this.data);
        }
        if (changes.settings && !changes.settings.firstChange) {
            this.settings = Object.assign(this.defaultSettings, this.settings);
        }
        if (changes.loading) ;
        if (this.settings.lazyLoading && this.virtualScroollInit && changes.data) {
            this.virtualdata = changes.data.currentValue;
        }
    }
    /**
     * @return {?}
     */
    ngDoCheck() {
        if (this.selectedItems) {
            if (this.selectedItems.length == 0 || this.data.length == 0 || this.selectedItems.length < this.data.length) {
                this.isSelectAll = false;
            }
        }
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        if (this.settings.lazyLoading) ;
    }
    /**
     * @return {?}
     */
    ngAfterViewChecked() {
        if (this.selectedListElem.nativeElement.clientHeight && this.settings.position == 'top' && this.selectedListHeight) {
            this.selectedListHeight.val = this.selectedListElem.nativeElement.clientHeight;
            this.cdr.detectChanges();
        }
    }
    /**
     * @param {?} item
     * @param {?} index
     * @param {?} evt
     * @return {?}
     */
    onItemClick(item, index, evt) {
        if (item.disabled) {
            return false;
        }
        if (this.settings.disabled) {
            return false;
        }
        /** @type {?} */
        let found = this.isSelected(item);
        /** @type {?} */
        let limit = this.selectedItems.length < this.settings.limitSelection ? true : false;
        if (!found) {
            if (this.settings.limitSelection) {
                if (limit) {
                    this.addSelected(item);
                    this.onSelect.emit(item);
                }
            }
            else {
                this.addSelected(item);
                this.onSelect.emit(item);
            }
        }
        else {
            this.removeSelected(item);
            this.onDeSelect.emit(item);
        }
        if (this.isSelectAll || this.data.length > this.selectedItems.length) {
            this.isSelectAll = false;
        }
        if (this.data.length == this.selectedItems.length) {
            this.isSelectAll = true;
        }
        if (this.settings.groupBy) {
            this.updateGroupInfo(item);
        }
    }
    /**
     * @param {?} c
     * @return {?}
     */
    validate(c) {
        return null;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        if (value !== undefined && value !== null && value !== '') {
            if (this.settings.singleSelection) {
                if (this.settings.groupBy) {
                    this.groupedData = this.transformData(this.data, this.settings.groupBy);
                    this.groupCachedItems = this.cloneArray(this.groupedData);
                    this.selectedItems = [value[0]];
                }
                else {
                    try {
                        if (value.length > 1) {
                            this.selectedItems = [value[0]];
                            throw new MyException(404, { "msg": "Single Selection Mode, Selected Items cannot have more than one item." });
                        }
                        else {
                            this.selectedItems = value;
                        }
                    }
                    catch (e) {
                        console.error(e.body.msg);
                    }
                }
            }
            else {
                if (this.settings.limitSelection) {
                    this.selectedItems = value.slice(0, this.settings.limitSelection);
                }
                else {
                    this.selectedItems = value;
                }
                if (this.selectedItems.length === this.data.length && this.data.length > 0) {
                    this.isSelectAll = true;
                }
                if (this.settings.groupBy) {
                    this.groupedData = this.transformData(this.data, this.settings.groupBy);
                    this.groupCachedItems = this.cloneArray(this.groupedData);
                }
            }
        }
        else {
            this.selectedItems = [];
        }
    }
    //From ControlValueAccessor interface
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.onChangeCallback = fn;
    }
    //From ControlValueAccessor interface
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this.onTouchedCallback = fn;
    }
    /**
     * @param {?} index
     * @param {?} item
     * @return {?}
     */
    trackByFn(index, item) {
        return item[this.settings.primaryKey];
    }
    /**
     * @param {?} clickedItem
     * @return {?}
     */
    isSelected(clickedItem) {
        if (clickedItem.disabled) {
            return false;
        }
        /** @type {?} */
        let found = false;
        this.selectedItems && this.selectedItems.forEach((/**
         * @param {?} item
         * @return {?}
         */
        item => {
            if (clickedItem[this.settings.primaryKey] === item[this.settings.primaryKey]) {
                found = true;
            }
        }));
        return found;
    }
    /**
     * @param {?} item
     * @return {?}
     */
    addSelected(item) {
        if (item.disabled) {
            return;
        }
        if (this.settings.singleSelection) {
            this.selectedItems = [];
            this.selectedItems.push(item);
            this.closeDropdown();
        }
        else
            this.selectedItems.push(item);
        this.onChangeCallback(this.selectedItems);
        this.onTouchedCallback(this.selectedItems);
    }
    /**
     * @param {?} clickedItem
     * @return {?}
     */
    removeSelected(clickedItem) {
        this.selectedItems && this.selectedItems.forEach((/**
         * @param {?} item
         * @return {?}
         */
        item => {
            if (clickedItem[this.settings.primaryKey] === item[this.settings.primaryKey]) {
                this.selectedItems.splice(this.selectedItems.indexOf(item), 1);
            }
        }));
        this.onChangeCallback(this.selectedItems);
        this.onTouchedCallback(this.selectedItems);
    }
    /**
     * @param {?} evt
     * @return {?}
     */
    toggleDropdown(evt) {
        if (this.settings.disabled) {
            return false;
        }
        this.isActive = !this.isActive;
        if (this.isActive) {
            if (this.settings.searchAutofocus && this.searchInput && this.settings.enableSearchFilter && !this.searchTempl) {
                setTimeout((/**
                 * @return {?}
                 */
                () => {
                    this.searchInput.nativeElement.focus();
                }), 0);
            }
            this.onOpen.emit(true);
        }
        else {
            this.onClose.emit(false);
        }
        setTimeout((/**
         * @return {?}
         */
        () => {
            this.calculateDropdownDirection();
        }), 0);
        if (this.settings.lazyLoading) {
            this.virtualdata = this.data;
            this.virtualScroollInit = true;
        }
        evt.preventDefault();
    }
    /**
     * @return {?}
     */
    openDropdown() {
        if (this.settings.disabled) {
            return false;
        }
        this.isActive = true;
        if (this.settings.searchAutofocus && this.searchInput && this.settings.enableSearchFilter && !this.searchTempl) {
            setTimeout((/**
             * @return {?}
             */
            () => {
                this.searchInput.nativeElement.focus();
            }), 0);
        }
        this.onOpen.emit(true);
    }
    /**
     * @return {?}
     */
    closeDropdown() {
        if (this.searchInput && this.settings.lazyLoading) {
            this.searchInput.nativeElement.value = "";
        }
        if (this.searchInput) {
            this.searchInput.nativeElement.value = "";
        }
        this.filter = "";
        this.isActive = false;
        this.onClose.emit(false);
    }
    /**
     * @return {?}
     */
    closeDropdownOnClickOut() {
        if (this.isActive) {
            if (this.searchInput && this.settings.lazyLoading) {
                this.searchInput.nativeElement.value = "";
            }
            if (this.searchInput) {
                this.searchInput.nativeElement.value = "";
            }
            this.filter = "";
            this.isActive = false;
            this.clearSearch();
            this.onClose.emit(false);
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    toggleSelectAll(event) {
        if (!this.isSelectAll) {
            this.selectedItems = [];
            if (this.settings.groupBy) {
                this.groupedData.forEach((/**
                 * @param {?} obj
                 * @return {?}
                 */
                (obj) => {
                    obj.selected = !obj.disabled;
                }));
                this.groupCachedItems.forEach((/**
                 * @param {?} obj
                 * @return {?}
                 */
                (obj) => {
                    obj.selected = !obj.disabled;
                }));
            }
            // this.selectedItems = this.data.slice();
            this.selectedItems = this.data.filter((/**
             * @param {?} individualData
             * @return {?}
             */
            (individualData) => !individualData.disabled));
            this.isSelectAll = true;
            this.onChangeCallback(this.selectedItems);
            this.onTouchedCallback(this.selectedItems);
            this.onSelectAll.emit(this.selectedItems);
        }
        else {
            if (this.settings.groupBy) {
                this.groupedData.forEach((/**
                 * @param {?} obj
                 * @return {?}
                 */
                (obj) => {
                    obj.selected = false;
                }));
                this.groupCachedItems.forEach((/**
                 * @param {?} obj
                 * @return {?}
                 */
                (obj) => {
                    obj.selected = false;
                }));
            }
            this.selectedItems = [];
            this.isSelectAll = false;
            this.onChangeCallback(this.selectedItems);
            this.onTouchedCallback(this.selectedItems);
            this.onDeSelectAll.emit(this.selectedItems);
        }
        event.stopPropagation();
    }
    /**
     * @return {?}
     */
    filterGroupedList() {
        if (this.filter == "" || this.filter == null) {
            this.clearSearch();
            return;
        }
        this.groupedData = this.cloneArray(this.groupCachedItems);
        this.groupedData = this.groupedData.filter((/**
         * @param {?} obj
         * @return {?}
         */
        obj => {
            /** @type {?} */
            let arr = [];
            if (obj[this.settings.labelKey].toLowerCase().indexOf(this.filter.toLowerCase()) > -1) {
                arr = obj.list;
            }
            else {
                arr = obj.list.filter((/**
                 * @param {?} t
                 * @return {?}
                 */
                t => {
                    return t[this.settings.labelKey].toLowerCase().indexOf(this.filter.toLowerCase()) > -1;
                }));
            }
            obj.list = arr;
            if (obj[this.settings.labelKey].toLowerCase().indexOf(this.filter.toLowerCase()) > -1) {
                return arr;
            }
            else {
                return arr.some((/**
                 * @param {?} cat
                 * @return {?}
                 */
                cat => {
                    return cat[this.settings.labelKey].toLowerCase().indexOf(this.filter.toLowerCase()) > -1;
                }));
            }
        }));
    }
    /**
     * @return {?}
     */
    toggleFilterSelectAll() {
        if (!this.isFilterSelectAll) {
            /** @type {?} */
            let added = [];
            if (this.settings.groupBy) {
                /*                 this.groupedData.forEach((item: any) => {
                                    if (item.list) {
                                        item.list.forEach((el: any) => {
                                            if (!this.isSelected(el)) {
                                                this.addSelected(el);
                                                added.push(el);
                                            }
                                        });
                                    }
                                    this.updateGroupInfo(item);
                
                                }); */
                this.ds.getFilteredData().forEach((/**
                 * @param {?} el
                 * @return {?}
                 */
                (el) => {
                    if (!this.isSelected(el) && !el.hasOwnProperty('grpTitle')) {
                        this.addSelected(el);
                        added.push(el);
                    }
                }));
            }
            else {
                this.ds.getFilteredData().forEach((/**
                 * @param {?} item
                 * @return {?}
                 */
                (item) => {
                    if (!this.isSelected(item)) {
                        this.addSelected(item);
                        added.push(item);
                    }
                }));
            }
            this.isFilterSelectAll = true;
            this.onFilterSelectAll.emit(added);
        }
        else {
            /** @type {?} */
            let removed = [];
            if (this.settings.groupBy) {
                /*                 this.groupedData.forEach((item: any) => {
                                    if (item.list) {
                                        item.list.forEach((el: any) => {
                                            if (this.isSelected(el)) {
                                                this.removeSelected(el);
                                                removed.push(el);
                                            }
                                        });
                                    }
                                }); */
                this.ds.getFilteredData().forEach((/**
                 * @param {?} el
                 * @return {?}
                 */
                (el) => {
                    if (this.isSelected(el)) {
                        this.removeSelected(el);
                        removed.push(el);
                    }
                }));
            }
            else {
                this.ds.getFilteredData().forEach((/**
                 * @param {?} item
                 * @return {?}
                 */
                (item) => {
                    if (this.isSelected(item)) {
                        this.removeSelected(item);
                        removed.push(item);
                    }
                }));
            }
            this.isFilterSelectAll = false;
            this.onFilterDeSelectAll.emit(removed);
        }
    }
    /**
     * @return {?}
     */
    toggleInfiniteFilterSelectAll() {
        if (!this.isInfiniteFilterSelectAll) {
            this.virtualdata.forEach((/**
             * @param {?} item
             * @return {?}
             */
            (item) => {
                if (!this.isSelected(item)) {
                    this.addSelected(item);
                }
            }));
            this.isInfiniteFilterSelectAll = true;
        }
        else {
            this.virtualdata.forEach((/**
             * @param {?} item
             * @return {?}
             */
            (item) => {
                if (this.isSelected(item)) {
                    this.removeSelected(item);
                }
            }));
            this.isInfiniteFilterSelectAll = false;
        }
    }
    /**
     * @return {?}
     */
    clearSearch() {
        if (this.settings.groupBy) {
            this.groupedData = [];
            this.groupedData = this.cloneArray(this.groupCachedItems);
        }
        this.filter = "";
        this.isFilterSelectAll = false;
    }
    /**
     * @param {?} data
     * @return {?}
     */
    onFilterChange(data) {
        if (this.filter && this.filter == "" || data.length == 0) {
            this.isFilterSelectAll = false;
        }
        /** @type {?} */
        let cnt = 0;
        data.forEach((/**
         * @param {?} item
         * @return {?}
         */
        (item) => {
            if (!item.hasOwnProperty('grpTitle') && this.isSelected(item)) {
                cnt++;
            }
        }));
        if (cnt > 0 && this.filterLength == cnt) {
            this.isFilterSelectAll = true;
        }
        else if (cnt > 0 && this.filterLength != cnt) {
            this.isFilterSelectAll = false;
        }
        this.cdr.detectChanges();
    }
    /**
     * @param {?} arr
     * @return {?}
     */
    cloneArray(arr) {
        if (Array.isArray(arr)) {
            return JSON.parse(JSON.stringify(arr));
        }
        else if (typeof arr === 'object') {
            throw 'Cannot clone array containing an object!';
        }
        else {
            return arr;
        }
    }
    /**
     * @param {?} item
     * @return {?}
     */
    updateGroupInfo(item) {
        if (item.disabled) {
            return false;
        }
        /** @type {?} */
        let key = this.settings.groupBy;
        this.groupedData.forEach((/**
         * @param {?} obj
         * @return {?}
         */
        (obj) => {
            /** @type {?} */
            let cnt = 0;
            if (obj.grpTitle && (item[key] == obj[key])) {
                if (obj.list) {
                    obj.list.forEach((/**
                     * @param {?} el
                     * @return {?}
                     */
                    (el) => {
                        if (this.isSelected(el)) {
                            cnt++;
                        }
                    }));
                }
            }
            if (obj.list && (cnt === obj.list.length) && (item[key] == obj[key])) {
                obj.selected = true;
            }
            else if (obj.list && (cnt != obj.list.length) && (item[key] == obj[key])) {
                obj.selected = false;
            }
        }));
        this.groupCachedItems.forEach((/**
         * @param {?} obj
         * @return {?}
         */
        (obj) => {
            /** @type {?} */
            let cnt = 0;
            if (obj.grpTitle && (item[key] == obj[key])) {
                if (obj.list) {
                    obj.list.forEach((/**
                     * @param {?} el
                     * @return {?}
                     */
                    (el) => {
                        if (this.isSelected(el)) {
                            cnt++;
                        }
                    }));
                }
            }
            if (obj.list && (cnt === obj.list.length) && (item[key] == obj[key])) {
                obj.selected = true;
            }
            else if (obj.list && (cnt != obj.list.length) && (item[key] == obj[key])) {
                obj.selected = false;
            }
        }));
    }
    /**
     * @param {?} arr
     * @param {?} field
     * @return {?}
     */
    transformData(arr, field) {
        /** @type {?} */
        const groupedObj = arr.reduce((/**
         * @param {?} prev
         * @param {?} cur
         * @return {?}
         */
        (prev, cur) => {
            if (!prev[cur[field]]) {
                prev[cur[field]] = [cur];
            }
            else {
                prev[cur[field]].push(cur);
            }
            return prev;
        }), {});
        /** @type {?} */
        const tempArr = [];
        Object.keys(groupedObj).map((/**
         * @param {?} x
         * @return {?}
         */
        (x) => {
            /** @type {?} */
            let obj = {};
            /** @type {?} */
            let disabledChildrens = [];
            obj["grpTitle"] = true;
            obj[this.settings.labelKey] = x;
            obj[this.settings.groupBy] = x;
            obj['selected'] = false;
            obj['list'] = [];
            /** @type {?} */
            let cnt = 0;
            groupedObj[x].forEach((/**
             * @param {?} item
             * @return {?}
             */
            (item) => {
                item['list'] = [];
                if (item.disabled) {
                    this.isDisabledItemPresent = true;
                    disabledChildrens.push(item);
                }
                obj.list.push(item);
                if (this.isSelected(item)) {
                    cnt++;
                }
            }));
            if (cnt == obj.list.length) {
                obj.selected = true;
            }
            else {
                obj.selected = false;
            }
            // Check if current group item's all childrens are disabled or not
            obj['disabled'] = disabledChildrens.length === groupedObj[x].length;
            tempArr.push(obj);
            // obj.list.forEach((item: any) => {
            //     tempArr.push(item);
            // });
        }));
        return tempArr;
    }
    /**
     * @param {?} evt
     * @return {?}
     */
    filterInfiniteList(evt) {
        /** @type {?} */
        let filteredElems = [];
        if (this.settings.groupBy) {
            this.groupedData = this.groupCachedItems.slice();
        }
        else {
            this.data = this.cachedItems.slice();
            this.virtualdata = this.cachedItems.slice();
        }
        if ((evt != null || evt != '') && !this.settings.groupBy) {
            if (this.settings.searchBy.length > 0) {
                for (let t = 0; t < this.settings.searchBy.length; t++) {
                    this.virtualdata.filter((/**
                     * @param {?} el
                     * @return {?}
                     */
                    (el) => {
                        if (el[this.settings.searchBy[t].toString()].toString().toLowerCase().indexOf(evt.toString().toLowerCase()) >= 0) {
                            filteredElems.push(el);
                        }
                    }));
                }
            }
            else {
                this.virtualdata.filter((/**
                 * @param {?} el
                 * @return {?}
                 */
                function (el) {
                    for (let prop in el) {
                        if (el[prop].toString().toLowerCase().indexOf(evt.toString().toLowerCase()) >= 0) {
                            filteredElems.push(el);
                            break;
                        }
                    }
                }));
            }
            this.virtualdata = [];
            this.virtualdata = filteredElems;
            this.infiniteFilterLength = this.virtualdata.length;
        }
        if (evt.toString() != '' && this.settings.groupBy) {
            this.groupedData.filter((/**
             * @param {?} el
             * @return {?}
             */
            function (el) {
                if (el.hasOwnProperty('grpTitle')) {
                    filteredElems.push(el);
                }
                else {
                    for (let prop in el) {
                        if (el[prop].toString().toLowerCase().indexOf(evt.toString().toLowerCase()) >= 0) {
                            filteredElems.push(el);
                            break;
                        }
                    }
                }
            }));
            this.groupedData = [];
            this.groupedData = filteredElems;
            this.infiniteFilterLength = this.groupedData.length;
        }
        else if (evt.toString() == '' && this.cachedItems.length > 0) {
            this.virtualdata = [];
            this.virtualdata = this.cachedItems;
            this.infiniteFilterLength = 0;
        }
        this.virtualScroller.refresh();
    }
    /**
     * @return {?}
     */
    resetInfiniteSearch() {
        this.filter = "";
        this.isInfiniteFilterSelectAll = false;
        this.virtualdata = [];
        this.virtualdata = this.cachedItems;
        this.groupedData = this.groupCachedItems;
        this.infiniteFilterLength = 0;
    }
    /**
     * @param {?} e
     * @return {?}
     */
    onScrollEnd(e) {
        if (e.endIndex === this.data.length - 1 || e.startIndex === 0) ;
        this.onScrollToEnd.emit(e);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
    /**
     * @param {?} item
     * @return {?}
     */
    selectGroup(item) {
        if (item.disabled) {
            return false;
        }
        if (item.selected) {
            item.selected = false;
            item.list.forEach((/**
             * @param {?} obj
             * @return {?}
             */
            (obj) => {
                this.removeSelected(obj);
            }));
            this.onGroupDeSelect.emit(item);
            this.updateGroupInfo(item);
        }
        else {
            item.selected = true;
            item.list.forEach((/**
             * @param {?} obj
             * @return {?}
             */
            (obj) => {
                if (!this.isSelected(obj)) {
                    this.addSelected(obj);
                }
            }));
            this.onGroupSelect.emit(item);
            this.updateGroupInfo(item);
        }
    }
    /**
     * @return {?}
     */
    addFilterNewItem() {
        this.onAddFilterNewItem.emit(this.filter);
        this.filterPipe = new ListFilterPipe(this.ds);
        this.filterPipe.transform(this.data, this.filter, this.settings.searchBy);
    }
    /**
     * @return {?}
     */
    calculateDropdownDirection() {
        /** @type {?} */
        let shouldOpenTowardsTop = this.settings.position == 'top';
        if (this.settings.autoPosition) {
            /** @type {?} */
            const dropdownHeight = this.dropdownListElem.nativeElement.clientHeight;
            /** @type {?} */
            const viewportHeight = document.documentElement.clientHeight;
            /** @type {?} */
            const selectedListBounds = this.selectedListElem.nativeElement.getBoundingClientRect();
            /** @type {?} */
            const spaceOnTop = selectedListBounds.top;
            /** @type {?} */
            const spaceOnBottom = viewportHeight - selectedListBounds.top;
            if (spaceOnBottom < spaceOnTop && dropdownHeight < spaceOnTop) {
                this.openTowardsTop(true);
            }
            else {
                this.openTowardsTop(false);
            }
            // Keep preference if there is not enough space on either the top or bottom
            /* 			if (spaceOnTop || spaceOnBottom) {
                            if (shouldOpenTowardsTop) {
                                shouldOpenTowardsTop = spaceOnTop;
                            } else {
                                shouldOpenTowardsTop = !spaceOnBottom;
                            }
                        } */
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    openTowardsTop(value) {
        if (value && this.selectedListElem.nativeElement.clientHeight) {
            this.dropdownListYOffset = 15 + this.selectedListElem.nativeElement.clientHeight;
        }
        else {
            this.dropdownListYOffset = 0;
        }
    }
    /**
     * @param {?} e
     * @return {?}
     */
    clearSelection(e) {
        if (this.settings.groupBy) {
            this.groupCachedItems.forEach((/**
             * @param {?} obj
             * @return {?}
             */
            (obj) => {
                obj.selected = false;
            }));
        }
        this.clearSearch();
        this.selectedItems = [];
        /*         this.isSelectAll = false;
                this.onChangeCallback(this.selectedItems);
                this.onTouchedCallback(this.selectedItems); */
        this.onDeSelectAll.emit(this.selectedItems);
    }
}
AngularMultiSelect.ɵfac = function AngularMultiSelect_Factory(t) { return new (t || AngularMultiSelect)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](DataService)); };
AngularMultiSelect.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AngularMultiSelect, selectors: [["angular2-multiselect"]], contentQueries: function AngularMultiSelect_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, Item, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, Badge, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, Search, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.itemTempl = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.badgeTempl = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.searchTempl = _t.first);
    } }, viewQuery: function AngularMultiSelect_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c5, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c6, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c7, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](VirtualScrollerComponent, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.searchInput = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.selectedListElem = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.dropdownListElem = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.virtualScroller = _t.first);
    } }, hostVars: 2, hostBindings: function AngularMultiSelect_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup.escape", function AngularMultiSelect_keyup_escape_HostBindingHandler($event) { return ctx.onEscapeDown($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.defaultSettings.classes);
    } }, inputs: { settings: "settings", data: "data", loading: "loading" }, outputs: { onSelect: "onSelect", onDeSelect: "onDeSelect", onSelectAll: "onSelectAll", onDeSelectAll: "onDeSelectAll", onOpen: "onOpen", onClose: "onClose", onScrollToEnd: "onScrollToEnd", onFilterSelectAll: "onFilterSelectAll", onFilterDeSelectAll: "onFilterDeSelectAll", onAddFilterNewItem: "onAddFilterNewItem", onGroupSelect: "onGroupSelect", onGroupDeSelect: "onGroupDeSelect" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([DROPDOWN_CONTROL_VALUE_ACCESSOR, DROPDOWN_CONTROL_VALIDATION]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 31, vars: 43, consts: [[1, "cuppa-dropdown", 3, "clickOutside"], [1, "selected-list"], ["selectedList", ""], [1, "c-btn", 3, "ngClass", "click"], [4, "ngIf"], ["class", "c-list", 4, "ngIf"], ["class", "countplaceholder", 4, "ngIf"], ["class", "c-remove clear-all", 3, "click", 4, "ngIf"], ["class", "c-angle-down", 4, "ngIf"], ["class", "c-angle-up", 4, "ngIf"], [1, "dropdown-list", "animated", "fadeIn", 3, "ngClass", "hidden"], ["dropdownList", ""], [1, "arrow-2", 3, "ngClass"], [3, "ngClass"], [1, "list-area", 3, "ngClass"], ["class", "pure-checkbox select-all", 4, "ngIf"], ["class", "loading-icon", "src", "assets/img/loading.gif", 4, "ngIf"], ["class", "list-filter", 4, "ngIf"], ["class", "filter-select-all", 4, "ngIf"], ["style", "overflow: auto;", 3, "maxHeight", 4, "ngIf"], ["class", "list-message", 4, "ngIf"], [4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "c-list"], ["class", "c-token", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "c-token"], ["class", "c-label", 4, "ngIf"], [1, "c-remove", 3, "click"], [3, "name"], [1, "c-label"], [3, "data", "item"], ["class", "c-token", 3, "hidden", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "c-token", 3, "hidden"], [1, "countplaceholder"], [1, "c-remove", "clear-all", 3, "click"], [1, "c-angle-down"], [1, "c-angle-up"], [1, "pure-checkbox", "select-all"], ["type", "checkbox", 3, "checked", "disabled", "id", "change", 4, "ngIf"], [3, "for"], [3, "hidden"], ["type", "checkbox", 3, "checked", "disabled", "id", "change"], ["src", "assets/img/loading.gif", 1, "loading-icon"], [1, "list-filter"], ["id", "searchIcon", 1, "c-search"], ["class", "c-clear", 3, "hidden", "click", 4, "ngIf"], ["class", "c-input", "type", "text", "aria-labelledby", "searchIcon", 3, "placeholder", "ngModel", "ngModelChange", "keyup", 4, "ngIf"], ["class", "c-input", "type", "text", "aria-labelledby", "searchIcon", 3, "placeholder", "ngModel", "ngModelChange", 4, "ngIf"], [3, "data", "item", 4, "ngIf"], [1, "c-clear", 3, "hidden", "click"], ["type", "text", "aria-labelledby", "searchIcon", 1, "c-input", 3, "placeholder", "ngModel", "ngModelChange", "keyup"], ["searchInput", ""], ["type", "text", "aria-labelledby", "searchIcon", 1, "c-input", 3, "placeholder", "ngModel", "ngModelChange"], [1, "filter-select-all"], ["class", "pure-checkbox select-all", 3, "click", 4, "ngIf"], ["class", "nodata-label", 3, "hidden", 4, "ngIf"], ["class", "btn-container", 3, "hidden", 4, "ngIf"], [1, "pure-checkbox", "select-all", 3, "click"], ["type", "checkbox", "aria-labelledby", "optionName", "aria-label", "option", 3, "checked", "disabled"], ["type", "checkbox", "aria-labelledby", "option", 3, "checked", "disabled"], [1, "nodata-label", 3, "hidden"], [1, "btn-container", 3, "hidden"], [1, "c-btn", "btn-iceblue", 3, "click"], [2, "overflow", "auto"], [1, "lazyContainer"], ["class", "pure-checkbox", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "pure-checkbox", 3, "ngClass", "click"], ["type", "checkbox", "aria-labelledby", "option", 3, "checked", "disabled", 4, "ngIf"], ["virtualScroller", "", 1, "lazyContainer", 3, "enableUnequalChildrenSizes", "items", "ngStyle", "vsStart", "vsEnd"], ["scroll", ""], ["type", "checkbox", 3, "checked", "disabled", 4, "ngIf"], ["type", "checkbox", 3, "checked", "disabled"], ["scroll2", ""], ["scroll3", ""], [4, "ngFor", "ngForOf"], ["class", "pure-checkbox", 3, "ngClass", "click", 4, "ngIf"], ["class", "pure-checkbox", 3, "ngClass", 4, "ngIf"], [1, "pure-checkbox", 3, "ngClass"], [3, "items", "ngStyle", "vsUpdate", "vsEnd"], ["scroll4", ""], [1, "list-message"]], template: function AngularMultiSelect_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("clickOutside", function AngularMultiSelect_Template_div_clickOutside_0_listener() { return ctx.closeDropdownOnClickOut(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AngularMultiSelect_Template_div_click_3_listener($event) { return ctx.toggleDropdown($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AngularMultiSelect_span_4_Template, 2, 1, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AngularMultiSelect_span_5_Template, 2, 2, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AngularMultiSelect_span_6_Template, 2, 2, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AngularMultiSelect_div_7_Template, 2, 2, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, AngularMultiSelect_span_8_Template, 2, 1, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, AngularMultiSelect_span_9_Template, 2, 1, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, AngularMultiSelect_span_10_Template, 2, 1, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, AngularMultiSelect_span_11_Template, 2, 1, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, AngularMultiSelect_div_17_Template, 7, 6, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, AngularMultiSelect_img_18_Template, 1, 0, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, AngularMultiSelect_div_19_Template, 9, 7, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, AngularMultiSelect_div_20_Template, 6, 5, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, AngularMultiSelect_div_21_Template, 2, 1, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, AngularMultiSelect_div_22_Template, 4, 7, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, AngularMultiSelect_div_23_Template, 4, 8, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, AngularMultiSelect_div_24_Template, 4, 7, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, AngularMultiSelect_div_25_Template, 4, 8, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, AngularMultiSelect_div_26_Template, 4, 8, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, AngularMultiSelect_div_27_Template, 3, 3, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, AngularMultiSelect_div_28_Template, 5, 12, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, AngularMultiSelect_div_29_Template, 3, 3, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, AngularMultiSelect_h5_30_Template, 2, 1, "h5", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](31, _c13, ctx.settings.disabled));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("tabindex", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.selectedItems == null ? null : ctx.selectedItems.length) == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.settings.singleSelection && !ctx.badgeTempl);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.selectedItems == null ? null : ctx.selectedItems.length) > 0 && ctx.settings.singleSelection && ctx.badgeTempl);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.selectedItems == null ? null : ctx.selectedItems.length) > 0 && !ctx.settings.singleSelection);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.selectedItems == null ? null : ctx.selectedItems.length) > ctx.settings.badgeShowLimit);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.settings.clearAll && (ctx.selectedItems == null ? null : ctx.selectedItems.length) > 0 && !ctx.settings.disabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isActive);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isActive);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("bottom", ctx.dropdownListYOffset ? ctx.dropdownListYOffset : null, "px");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](33, _c14, ctx.dropdownListYOffset))("hidden", !ctx.isActive);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](35, _c15, !ctx.dropdownListYOffset, ctx.dropdownListYOffset));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](38, _c15, !ctx.dropdownListYOffset, ctx.dropdownListYOffset));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](41, _c16, ctx.settings.singleSelection));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.settings.enableCheckAll && !ctx.settings.singleSelection && !ctx.settings.limitSelection && (ctx.data == null ? null : ctx.data.length) > 0 && !ctx.isDisabledItemPresent);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.settings.enableSearchFilter);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.settings.lazyLoading && ctx.settings.enableFilterSelectAll && !ctx.isDisabledItemPresent);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.settings.lazyLoading && ctx.settings.enableFilterSelectAll && !ctx.isDisabledItemPresent);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.settings.groupBy && !ctx.settings.lazyLoading && ctx.itemTempl == undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.settings.groupBy && ctx.settings.lazyLoading && ctx.itemTempl == undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.settings.groupBy && !ctx.settings.lazyLoading && ctx.itemTempl != undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.settings.groupBy && ctx.settings.lazyLoading && ctx.itemTempl != undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.settings.groupBy && ctx.settings.lazyLoading && ctx.itemTempl != undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.settings.groupBy && !ctx.settings.lazyLoading && ctx.itemTempl != undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.settings.groupBy && ctx.settings.lazyLoading && ctx.itemTempl == undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.settings.groupBy && !ctx.settings.lazyLoading && ctx.itemTempl == undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.data == null ? null : ctx.data.length) == 0);
    } }, directives: [ClickOutsideDirective, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], CIcon, TemplateRenderer, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"], VirtualScrollerComponent, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"]], pipes: [ListFilterPipe], styles: ["virtual-scroll{display:block;width:100%}.cuppa-dropdown{position:relative}.c-btn{display:inline-block;border-width:1px;line-height:1.25;border-radius:3px;font-size:.85rem;padding:5px 10px;cursor:pointer;align-items:center;min-height:38px}.c-btn.disabled{background:#ccc}.selected-list .c-list{float:left;padding:0;margin:0;width:calc(100% - 20px)}.selected-list .c-list .c-token{list-style:none;padding:4px 22px 4px 8px;border-radius:2px;margin-right:4px;margin-top:2px;float:left;position:relative}.selected-list .c-list .c-token .c-label{display:block;float:left}.selected-list .c-list .c-token .c-remove{position:absolute;right:8px;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);width:8px}.selected-list .c-list .c-token .c-remove svg{fill:#fff}.selected-list .fa-angle-down,.selected-list .fa-angle-up{font-size:15pt;position:absolute;right:10px;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.selected-list .c-angle-down,.selected-list .c-angle-up{width:12px;height:12px;position:absolute;right:10px;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);pointer-events:none}.selected-list .c-angle-down svg,.selected-list .c-angle-up svg{fill:#333}.selected-list .countplaceholder{position:absolute;right:45px;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.selected-list .c-btn{width:100%;padding:5px 10px;cursor:pointer;display:flex;position:relative}.selected-list .c-btn .c-icon{position:absolute;right:5px;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.dropdown-list{position:absolute;padding-top:14px;width:100%;z-index:99999}.dropdown-list ul{padding:0;list-style:none;overflow:auto;margin:0}.dropdown-list ul li{padding:10px;cursor:pointer;text-align:left}.dropdown-list ul li:first-child{padding-top:10px}.dropdown-list ul li:last-child{padding-bottom:10px}.dropdown-list ::-webkit-scrollbar{width:8px}.dropdown-list ::-webkit-scrollbar-thumb{background:#ccc;border-radius:5px}.dropdown-list ::-webkit-scrollbar-track{background:#f2f2f2}.arrow-down,.arrow-up{width:0;height:0;border-left:13px solid transparent;border-right:13px solid transparent;border-bottom:15px solid #fff;margin-left:15px;position:absolute;top:0}.arrow-down{bottom:-14px;top:unset;-webkit-transform:rotate(180deg);transform:rotate(180deg)}.arrow-2{border-bottom:15px solid #ccc;top:-1px}.arrow-down.arrow-2{top:unset;bottom:-16px}.list-area{border:1px solid #ccc;border-radius:3px;background:#fff;margin:0}.select-all{padding:10px;border-bottom:1px solid #ccc;text-align:left}.list-filter{border-bottom:1px solid #ccc;position:relative;padding-left:35px;height:35px}.list-filter input{border:0;width:100%;height:100%;padding:0}.list-filter input:focus{outline:0}.list-filter .c-search{position:absolute;top:9px;left:10px;width:15px;height:15px}.list-filter .c-search svg{fill:#888}.list-filter .c-clear{position:absolute;top:10px;right:10px;width:15px;height:15px}.list-filter .c-clear svg{fill:#888}.pure-checkbox input[type=checkbox]{border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px}.pure-checkbox input[type=checkbox]:focus+label:before,.pure-checkbox input[type=checkbox]:hover+label:before{background-color:#f2f2f2}.pure-checkbox input[type=checkbox]:active+label:before{transition-duration:0s}.pure-checkbox input[type=checkbox]:disabled+label{color:#ccc}.pure-checkbox input[type=checkbox]+label{position:relative;padding-left:2em;vertical-align:middle;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;margin:0;font-weight:300}.pure-checkbox input[type=checkbox]+label:before{box-sizing:content-box;content:'';position:absolute;top:50%;left:0;width:15px;height:15px;margin-top:-9px;text-align:center;transition:.4s;border-radius:3px}.pure-checkbox input[type=checkbox]+label:after{box-sizing:content-box;content:'';position:absolute;-webkit-transform:scale(0);transform:scale(0);-webkit-transform-origin:50%;transform-origin:50%;transition:transform .2s ease-out,-webkit-transform .2s ease-out;background-color:transparent;top:50%;left:3px;width:9px;height:4px;margin-top:-5px;border-style:solid;border-width:0 0 2px 2px;-o-border-image:none;border-image:none;-webkit-transform:rotate(-45deg) scale(0);transform:rotate(-45deg) scale(0)}.pure-checkbox input[type=checkbox]:disabled+label:before{border-color:#ccc}.pure-checkbox input[type=checkbox]:disabled:focus+label:before .pure-checkbox input[type=checkbox]:disabled:hover+label:before{background-color:inherit}.pure-checkbox input[type=checkbox]:disabled:checked+label:before{background-color:#ccc}.pure-checkbox input[type=radio]:checked+label:before{background-color:#fff}.pure-checkbox input[type=radio]:checked+label:after{-webkit-transform:scale(1);transform:scale(1)}.pure-checkbox input[type=radio]+label:before{border-radius:50%}.pure-checkbox input[type=checkbox]:checked+label:after{content:'';transition:transform .2s ease-out,-webkit-transform .2s ease-out;-webkit-transform:rotate(-45deg) scale(1);transform:rotate(-45deg) scale(1)}.list-message{text-align:center;margin:0;padding:15px 0;font-size:initial}.list-grp{padding:0 15px!important}.list-grp h4{text-transform:capitalize;margin:15px 0 0;font-size:14px;font-weight:700}.list-grp>li{padding-left:15px!important}.grp-item{padding-left:30px!important}.grp-title{padding-bottom:0!important}.grp-title label{margin-bottom:0!important;font-weight:800;text-transform:capitalize}.grp-title:hover{background:0 0!important}.loading-icon{width:20px;position:absolute;right:10px;top:23px;z-index:1}.nodata-label{width:100%;text-align:center;padding:10px 0 0}.btn-container{text-align:center;padding:0 5px 10px}.clear-all{width:8px;position:absolute;top:50%;right:30px;-webkit-transform:translateY(-50%);transform:translateY(-50%)}"], encapsulation: 2 });
/** @nocollapse */
AngularMultiSelect.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] },
    { type: DataService }
];
AngularMultiSelect.propDecorators = {
    data: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    settings: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    loading: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    onSelect: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['onSelect',] }],
    onDeSelect: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['onDeSelect',] }],
    onSelectAll: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['onSelectAll',] }],
    onDeSelectAll: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['onDeSelectAll',] }],
    onOpen: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['onOpen',] }],
    onClose: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['onClose',] }],
    onScrollToEnd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['onScrollToEnd',] }],
    onFilterSelectAll: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['onFilterSelectAll',] }],
    onFilterDeSelectAll: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['onFilterDeSelectAll',] }],
    onAddFilterNewItem: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['onAddFilterNewItem',] }],
    onGroupSelect: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['onGroupSelect',] }],
    onGroupDeSelect: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['onGroupDeSelect',] }],
    itemTempl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: [Item, { static: false },] }],
    badgeTempl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: [Badge, { static: false },] }],
    searchTempl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: [Search, { static: false },] }],
    searchInput: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['searchInput', { static: false },] }],
    selectedListElem: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['selectedList', { static: false },] }],
    dropdownListElem: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['dropdownList', { static: false },] }],
    onEscapeDown: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['document:keyup.escape', ['$event'],] }],
    virtualScroller: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: [VirtualScrollerComponent, { static: false },] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AngularMultiSelect, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'angular2-multiselect',
                template: "<div class=\"cuppa-dropdown\" (clickOutside)=\"closeDropdownOnClickOut()\">\n    <div class=\"selected-list\" #selectedList>\n        <div class=\"c-btn\" (click)=\"toggleDropdown($event)\" [ngClass]=\"{'disabled': settings.disabled}\" [attr.tabindex]=\"0\">\n\n            <span *ngIf=\"selectedItems?.length == 0\">{{settings.text}}</span>\n            <span *ngIf=\"settings.singleSelection && !badgeTempl\">\n                <span *ngFor=\"let item of selectedItems;trackBy: trackByFn.bind(this);\">\n                    {{item[settings.labelKey]}}\n                </span>\n            </span>\n            <span class=\"c-list\" *ngIf=\"selectedItems?.length > 0 && settings.singleSelection && badgeTempl \">\n                <div class=\"c-token\" *ngFor=\"let item of selectedItems;trackBy: trackByFn.bind(this);let k = index\">\n                    <span *ngIf=\"!badgeTempl\" class=\"c-label\">{{item[settings.labelKey]}}</span>\n\n                    <span *ngIf=\"badgeTempl\" class=\"c-label\">\n                        <c-templateRenderer [data]=\"badgeTempl\" [item]=\"item\"></c-templateRenderer>\n                    </span>\n                    <span class=\"c-remove\" (click)=\"onItemClick(item,k,$event);$event.stopPropagation()\">\n                        <c-icon [name]=\"'remove'\"></c-icon>\n                    </span>\n                </div>\n            </span>\n            <div class=\"c-list\" *ngIf=\"selectedItems?.length > 0 && !settings.singleSelection\">\n                <div class=\"c-token\" *ngFor=\"let item of selectedItems;trackBy: trackByFn.bind(this);let k = index\" [hidden]=\"k > settings.badgeShowLimit-1\">\n                    <span *ngIf=\"!badgeTempl\" class=\"c-label\">{{item[settings.labelKey]}}</span>\n                    <span *ngIf=\"badgeTempl\" class=\"c-label\">\n                        <c-templateRenderer [data]=\"badgeTempl\" [item]=\"item\"></c-templateRenderer>\n                    </span>\n                    <span class=\"c-remove\" (click)=\"onItemClick(item,k,$event);$event.stopPropagation()\">\n                        <c-icon [name]=\"'remove'\"></c-icon>\n                    </span>\n                </div>\n            </div>\n            <span class=\"countplaceholder\" *ngIf=\"selectedItems?.length > settings.badgeShowLimit\">+{{selectedItems?.length - settings.badgeShowLimit }}</span>\n            <span class=\"c-remove clear-all\" *ngIf=\"settings.clearAll && selectedItems?.length > 0 && !settings.disabled\" (click)=\"clearSelection($event);$event.stopPropagation()\">\n                <c-icon [name]=\"'remove'\"></c-icon>\n            </span>\n            <span *ngIf=\"!isActive\" class=\"c-angle-down\">\n                <c-icon [name]=\"'angle-down'\"></c-icon>\n            </span>\n            <span *ngIf=\"isActive\" class=\"c-angle-up\">\n                <c-icon [name]=\"'angle-up'\"></c-icon>\n\n            </span>\n        </div>\n    </div>\n    <div #dropdownList class=\"dropdown-list animated fadeIn\" [ngClass]=\"{'dropdown-list-top': dropdownListYOffset}\" [style.bottom.px]=\"dropdownListYOffset ? dropdownListYOffset : null\"\n        [hidden]=\"!isActive\">\n        <div [ngClass]=\"{'arrow-up': !dropdownListYOffset, 'arrow-down': dropdownListYOffset}\" class=\"arrow-2\"></div>\n        <div [ngClass]=\"{'arrow-up': !dropdownListYOffset, 'arrow-down': dropdownListYOffset}\"></div>\n        <div class=\"list-area\" [ngClass]=\"{'single-select-mode': settings.singleSelection }\">\n            <div class=\"pure-checkbox select-all\" *ngIf=\"settings.enableCheckAll && !settings.singleSelection && !settings.limitSelection && data?.length > 0 && !isDisabledItemPresent\"\n                >\n                <input *ngIf=\"settings.showCheckbox\" type=\"checkbox\" [checked]=\"isSelectAll\" [disabled]=\"settings.limitSelection == selectedItems?.length\"\n                [id]=\"id\" (change)=\"toggleSelectAll($event)\"/>\n                <label [for]=\"id\">\n                    <span [hidden]=\"isSelectAll\">{{settings.selectAllText}}</span>\n                    <span [hidden]=\"!isSelectAll\">{{settings.unSelectAllText}}</span>\n                </label>\n            </div>\n            <img class=\"loading-icon\" *ngIf=\"loading\" src=\"assets/img/loading.gif\" />\n            <div class=\"list-filter\" *ngIf=\"settings.enableSearchFilter\">\n                <span class=\"c-search\" id=\"searchIcon\">\n                    <c-icon [name]=\"'search'\"></c-icon>\n                </span>\n                <span *ngIf=\"!settings.lazyLoading\" [hidden]=\"filter == undefined || filter?.length == 0\" class=\"c-clear\" (click)=\"clearSearch()\">\n                    <c-icon [name]=\"'clear'\"></c-icon>\n                </span>\n                <span *ngIf=\"settings.lazyLoading\" [hidden]=\"filter == undefined || filter?.length == 0\" class=\"c-clear\" (click)=\"resetInfiniteSearch()\">\n                    <c-icon [name]=\"'clear'\"></c-icon>\n                </span>\n\n                <input class=\"c-input\" *ngIf=\"settings.groupBy && !settings.lazyLoading && !searchTempl\" #searchInput type=\"text\" [placeholder]=\"settings.searchPlaceholderText\"\n                    [(ngModel)]=\"filter\" (keyup)=\"filterGroupedList()\" aria-labelledby=\"searchIcon\">\n                <input class=\"c-input\" *ngIf=\"!settings.groupBy && !settings.lazyLoading && !searchTempl\" #searchInput type=\"text\" [placeholder]=\"settings.searchPlaceholderText\"\n                    [(ngModel)]=\"filter\" aria-labelledby=\"searchIcon\">\n                <input class=\"c-input\" *ngIf=\"settings.lazyLoading && !searchTempl\" #searchInput type=\"text\" [placeholder]=\"settings.searchPlaceholderText\"\n                    [(ngModel)]=\"filter\" (keyup)=\"searchTerm$.next($event.target.value)\" aria-labelledby=\"searchIcon\">\n                <!--            <input class=\"c-input\" *ngIf=\"!settings.lazyLoading && !searchTempl && settings.groupBy\" #searchInput type=\"text\" [placeholder]=\"settings.searchPlaceholderText\"\n                [(ngModel)]=\"filter\" (keyup)=\"filterGroupList($event)\">-->\n                <c-templateRenderer *ngIf=\"searchTempl\" [data]=\"searchTempl\" [item]=\"item\"></c-templateRenderer>\n            </div>\n            <div class=\"filter-select-all\" *ngIf=\"!settings.lazyLoading && settings.enableFilterSelectAll && !isDisabledItemPresent\">\n                <div class=\"pure-checkbox select-all\" *ngIf=\"!settings.groupBy && filter?.length > 0 && filterLength > 0\" (click)=\"toggleFilterSelectAll()\">\n                    <input type=\"checkbox\" [checked]=\"isFilterSelectAll\" [disabled]=\"settings.limitSelection == selectedItems?.length\" aria-labelledby=\"optionName\"\n                    aria-label=\"option\"/>\n                    <label>\n                        <span [hidden]=\"isFilterSelectAll\">{{settings.filterSelectAllText}}</span>\n                        <span [hidden]=\"!isFilterSelectAll\">{{settings.filterUnSelectAllText}}</span>\n                    </label>\n                </div>\n                <div class=\"pure-checkbox select-all\" *ngIf=\"settings.groupBy && filter?.length > 0 && groupedData?.length > 0\" (click)=\"toggleFilterSelectAll()\">\n                    <input type=\"checkbox\" [checked]=\"isFilterSelectAll && filter?.length > 0\" [disabled]=\"settings.limitSelection == selectedItems?.length\"\n                    aria-labelledby=\"option\"/>\n                    <label>\n                        <span [hidden]=\"isFilterSelectAll\">{{settings.filterSelectAllText}}</span>\n                        <span [hidden]=\"!isFilterSelectAll\">{{settings.filterUnSelectAllText}}</span>\n                    </label>\n                </div>\n                <label class=\"nodata-label\" *ngIf=\"!settings.groupBy && filterLength == 0\" [hidden]=\"filter == undefined || filter?.length == 0\">{{settings.noDataLabel}}</label>\n                <label class=\"nodata-label\" *ngIf=\"settings.groupBy && groupedData?.length == 0\" [hidden]=\"filter == undefined || filter?.length == 0\">{{settings.noDataLabel}}</label>\n\n                <div class=\"btn-container\" *ngIf=\"settings.addNewItemOnFilter && filterLength == 0\" [hidden]=\"filter == undefined || filter?.length == 0\">\n                    <button class=\"c-btn btn-iceblue\" (click)=\"addFilterNewItem()\">{{settings.addNewButtonText}}</button>\n                </div>\n            </div>\n            <div class=\"filter-select-all\" *ngIf=\"settings.lazyLoading && settings.enableFilterSelectAll && !isDisabledItemPresent\">\n                <div class=\"pure-checkbox select-all\" *ngIf=\"filter?.length > 0 && infiniteFilterLength > 0\" (click)=\"toggleInfiniteFilterSelectAll()\">\n                    <input type=\"checkbox\" [checked]=\"isInfiniteFilterSelectAll\" [disabled]=\"settings.limitSelection == selectedItems?.length\"\n                    aria-labelledby=\"option\"/>\n                    <label>\n                        <span [hidden]=\"isInfiniteFilterSelectAll\">{{settings.filterSelectAllText}}</span>\n                        <span [hidden]=\"!isInfiniteFilterSelectAll\">{{settings.filterUnSelectAllText}}</span>\n                    </label>\n                </div>\n            </div>\n\n            <div *ngIf=\"!settings.groupBy && !settings.lazyLoading && itemTempl == undefined\" [style.maxHeight]=\"settings.maxHeight+'px'\"\n                style=\"overflow: auto;\">\n                <ul class=\"lazyContainer\">\n                    <li *ngFor=\"let item of data | listFilter:filter : settings.searchBy; let i = index;\" (click)=\"onItemClick(item,i,$event)\"\n                        class=\"pure-checkbox\" [ngClass]=\"{'selected-item': isSelected(item) == true }\">\n                        <input *ngIf=\"settings.showCheckbox\" type=\"checkbox\" [checked]=\"isSelected(item)\" [disabled]=\"(settings.limitSelection == selectedItems?.length && !isSelected(item)) || item.disabled\"\n                        aria-labelledby=\"option\"/>\n                        <label>{{item[settings.labelKey]}}</label>\n                    </li>\n                </ul>\n            </div>\n            <div *ngIf=\"!settings.groupBy && settings.lazyLoading && itemTempl == undefined\" [style.maxHeight]=\"settings.maxHeight+'px'\"\n                style=\"overflow: auto;\">\n                <ul virtualScroller #scroll [enableUnequalChildrenSizes]=\"randomSize\" [items]=\"virtualdata\" (vsStart)=\"onScrollEnd($event)\"\n                    (vsEnd)=\"onScrollEnd($event)\" [ngStyle]=\"{'height': settings.maxHeight+'px'}\" class=\"lazyContainer\">\n                    <li *ngFor=\"let item of scroll.viewPortItems; let i = index;\" (click)=\"onItemClick(item,i,$event)\" class=\"pure-checkbox\"\n                        [ngClass]=\"{'selected-item': isSelected(item) == true }\">\n                        <input *ngIf=\"settings.showCheckbox\" type=\"checkbox\" [checked]=\"isSelected(item)\" [disabled]=\"(settings.limitSelection == selectedItems?.length && !isSelected(item)) || item.disabled\"\n                        />\n                        <label>{{item[settings.labelKey]}}</label>\n                    </li>\n                </ul>\n            </div>\n            <div *ngIf=\"!settings.groupBy && !settings.lazyLoading && itemTempl != undefined\" [style.maxHeight]=\"settings.maxHeight+'px'\"\n                style=\"overflow: auto;\">\n                <ul class=\"lazyContainer\">\n                    <li *ngFor=\"let item of data | listFilter:filter : settings.searchBy; let i = index;\" (click)=\"onItemClick(item,i,$event)\"\n                        class=\"pure-checkbox\" [ngClass]=\"{'selected-item': isSelected(item) == true }\">\n                        <input *ngIf=\"settings.showCheckbox\" type=\"checkbox\" [checked]=\"isSelected(item)\" [disabled]=\"(settings.limitSelection == selectedItems?.length && !isSelected(item)) || item.disabled\"\n                        />\n                        <label></label>\n                        <c-templateRenderer [data]=\"itemTempl\" [item]=\"item\"></c-templateRenderer>\n                    </li>\n                </ul>\n            </div>\n            <div *ngIf=\"!settings.groupBy && settings.lazyLoading && itemTempl != undefined\" [style.maxHeight]=\"settings.maxHeight+'px'\"\n                style=\"overflow: auto;\">\n                <ul virtualScroller #scroll2 [enableUnequalChildrenSizes]=\"randomSize\" [items]=\"virtualdata\" (vsStart)=\"onScrollEnd($event)\"\n                    (vsEnd)=\"onScrollEnd($event)\" class=\"lazyContainer\" [ngStyle]=\"{'height': settings.maxHeight+'px'}\">\n                    <li *ngFor=\"let item of scroll2.viewPortItems; let i = index;\" (click)=\"onItemClick(item,i,$event)\" class=\"pure-checkbox\"\n                        [ngClass]=\"{'selected-item': isSelected(item) == true }\">\n                        <input *ngIf=\"settings.showCheckbox\" type=\"checkbox\" [checked]=\"isSelected(item)\" [disabled]=\"(settings.limitSelection == selectedItems?.length && !isSelected(item)) || item.disabled\"\n                        />\n                        <label></label>\n                        <c-templateRenderer [data]=\"itemTempl\" [item]=\"item\"></c-templateRenderer>\n                    </li>\n                </ul>\n            </div>\n            <div *ngIf=\"settings.groupBy && settings.lazyLoading && itemTempl != undefined\" [style.maxHeight]=\"settings.maxHeight+'px'\"\n                style=\"overflow: auto;\">\n                <ul virtualScroller #scroll3 [enableUnequalChildrenSizes]=\"randomSize\" [items]=\"virtualdata\" (vsStart)=\"onScrollEnd($event)\"\n                    (vsEnd)=\"onScrollEnd($event)\" [ngStyle]=\"{'height': settings.maxHeight+'px'}\" class=\"lazyContainer\">\n                    <span *ngFor=\"let item of scroll3.viewPortItems; let i = index;\">\n                        <li (click)=\"onItemClick(item,i,$event)\" *ngIf=\"!item.grpTitle\" [ngClass]=\"{'grp-title': item.grpTitle,'grp-item': !item.grpTitle && !settings.singleSelection}\"\n                            class=\"pure-checkbox\">\n                            <input *ngIf=\"settings.showCheckbox && !settings.singleSelection\" type=\"checkbox\" [checked]=\"isSelected(item)\" [disabled]=\"(settings.limitSelection == selectedItems?.length && !isSelected(item)) || item.disabled\"\n                            />\n                            <label></label>\n                            <c-templateRenderer [data]=\"itemTempl\" [item]=\"item\"></c-templateRenderer>\n                        </li>\n                        <li *ngIf=\"item.grpTitle\" [ngClass]=\"{'grp-title': item.grpTitle,'grp-item': !item.grpTitle && !settings.singleSelection}\"\n                            class=\"pure-checkbox\">\n                            <input *ngIf=\"settings.showCheckbox\" type=\"checkbox\" [checked]=\"isSelected(item)\" [disabled]=\"(settings.limitSelection == selectedItems?.length && !isSelected(item)) || item.disabled\"\n                            />\n                            <label></label>\n                            <c-templateRenderer [data]=\"itemTempl\" [item]=\"item\"></c-templateRenderer>\n                        </li>\n                    </span>\n                </ul>\n            </div>\n            <div *ngIf=\"settings.groupBy && !settings.lazyLoading && itemTempl != undefined\" [style.maxHeight]=\"settings.maxHeight+'px'\"\n                style=\"overflow: auto;\">\n                <ul class=\"lazyContainer\">\n                    <span *ngFor=\"let item of groupedData; let i = index;\">\n                        <li (click)=\"selectGroup(item)\" [ngClass]=\"{'grp-title': item.grpTitle,'grp-item': !item.grpTitle && !settings.singleSelection}\"\n                            class=\"pure-checkbox\">\n                            <input *ngIf=\"settings.showCheckbox && !settings.singleSelection\" type=\"checkbox\" [checked]=\"item.selected\" [disabled]=\"(settings.limitSelection == selectedItems?.length && !isSelected(item)) || item.disabled\"\n                            />\n                            <label>{{item[settings.labelKey]}}</label>\n                            <ul class=\"lazyContainer\">\n                                <span *ngFor=\"let val of item.list ; let j = index;\">\n                                    <li (click)=\"onItemClick(val,j,$event); $event.stopPropagation()\" [ngClass]=\"{'grp-title': val.grpTitle,'grp-item': !val.grpTitle && !settings.singleSelection}\"\n                                        class=\"pure-checkbox\">\n                                        <input *ngIf=\"settings.showCheckbox\" type=\"checkbox\" [checked]=\"isSelected(val)\" [disabled]=\"(settings.limitSelection == selectedItems?.length && !isSelected(val)) || val.disabled\"\n                                        />\n                                        <label></label>\n                                        <c-templateRenderer [data]=\"itemTempl\" [item]=\"val\"></c-templateRenderer>\n                                    </li>\n                                </span>\n                            </ul>\n\n                        </li>\n                    </span>\n                </ul>\n            </div>\n            <div *ngIf=\"settings.groupBy && settings.lazyLoading && itemTempl == undefined\" [style.maxHeight]=\"settings.maxHeight+'px'\"\n                style=\"overflow: auto;\">\n                <virtual-scroller [items]=\"groupedData\" (vsUpdate)=\"viewPortItems = $event\" (vsEnd)=\"onScrollEnd($event)\" [ngStyle]=\"{'height': settings.maxHeight+'px'}\">\n                    <ul virtualScroller #scroll4 [enableUnequalChildrenSizes]=\"randomSize\" [items]=\"virtualdata\" (vsStart)=\"onScrollEnd($event)\"\n                        (vsEnd)=\"onScrollEnd($event)\" [ngStyle]=\"{'height': settings.maxHeight+'px'}\" class=\"lazyContainer\">\n                        <span *ngFor=\"let item of scroll4.viewPortItems; let i = index;\">\n                            <li *ngIf=\"item.grpTitle\" [ngClass]=\"{'grp-title': item.grpTitle,'grp-item': !item.grpTitle && !settings.singleSelection, 'selected-item': isSelected(item) == true }\"\n                                class=\"pure-checkbox\">\n                                <input *ngIf=\"settings.showCheckbox && !item.grpTitle && !settings.singleSelection\" type=\"checkbox\" [checked]=\"isSelected(item)\"\n                                    [disabled]=\"(settings.limitSelection == selectedItems?.length && !isSelected(item)) || item.disabled\"\n                                />\n                                <label>{{item[settings.labelKey]}}</label>\n                            </li>\n                            <li (click)=\"onItemClick(item,i,$event)\" *ngIf=\"!item.grpTitle\" [ngClass]=\"{'grp-title': item.grpTitle,'grp-item': !item.grpTitle && !settings.singleSelection, 'selected-item': isSelected(item) == true }\"\n                                class=\"pure-checkbox\">\n                                <input *ngIf=\"settings.showCheckbox && !item.grpTitle\" type=\"checkbox\" [checked]=\"isSelected(item)\" [disabled]=\"(settings.limitSelection == selectedItems?.length && !isSelected(item)) || item.disabled\"\n                                />\n                                <label>{{item[settings.labelKey]}}</label>\n                            </li>\n                        </span>\n                    </ul>\n                </virtual-scroller>\n            </div>\n            <div *ngIf=\"settings.groupBy && !settings.lazyLoading && itemTempl == undefined\" [style.maxHeight]=\"settings.maxHeight+'px'\"\n                style=\"overflow: auto;\">\n                <ul class=\"lazyContainer\">\n                    <span *ngFor=\"let item of groupedData ; let i = index;\">\n                        <li (click)=\"selectGroup(item)\" [ngClass]=\"{'grp-title': item.grpTitle,'grp-item': !item.grpTitle && !settings.singleSelection}\"\n                            class=\"pure-checkbox\">\n                            <input *ngIf=\"settings.showCheckbox && !settings.singleSelection\" type=\"checkbox\" [checked]=\"item.selected\" [disabled]=\"(settings.limitSelection == selectedItems?.length && !isSelected(item)) || item.disabled\"\n                            />\n                            <label>{{item[settings.labelKey]}}</label>\n                            <ul class=\"lazyContainer\">\n                                <span *ngFor=\"let val of item.list ; let j = index;\">\n                                    <li (click)=\"onItemClick(val,j,$event); $event.stopPropagation()\" [ngClass]=\"{'selected-item': isSelected(val) == true,'grp-title': val.grpTitle,'grp-item': !val.grpTitle && !settings.singleSelection}\"\n                                        class=\"pure-checkbox\">\n                                        <input *ngIf=\"settings.showCheckbox\" type=\"checkbox\" [checked]=\"isSelected(val)\" [disabled]=\"(settings.limitSelection == selectedItems?.length && !isSelected(val)) || val.disabled\"\n                                        />\n                                        <label>{{val[settings.labelKey]}}</label>\n                                    </li>\n                                </span>\n                            </ul>\n                        </li>\n                    </span>\n                    <!-- <span *ngFor=\"let item of groupedData ; let i = index;\">\n                    <li (click)=\"onItemClick(item,i,$event)\" *ngIf=\"!item.grpTitle\" [ngClass]=\"{'grp-title': item.grpTitle,'grp-item': !item.grpTitle}\" class=\"pure-checkbox\">\n                    <input *ngIf=\"settings.showCheckbox && !item.grpTitle\" type=\"checkbox\" [checked]=\"isSelected(item)\" [disabled]=\"settings.limitSelection == selectedItems?.length && !isSelected(item)\"\n                    />\n                    <label>{{item[settings.labelKey]}}</label>\n                </li>\n                <li *ngIf=\"item.grpTitle && !settings.selectGroup\" [ngClass]=\"{'grp-title': item.grpTitle,'grp-item': !item.grpTitle}\" class=\"pure-checkbox\">\n                    <input *ngIf=\"settings.showCheckbox && settings.selectGroup\" type=\"checkbox\" [checked]=\"isSelected(item)\" [disabled]=\"settings.limitSelection == selectedItems?.length && !isSelected(item)\"\n                    />\n                    <label>{{item[settings.labelKey]}}</label>\n                </li>\n                 <li  (click)=\"selectGroup(item)\" *ngIf=\"item.grpTitle && settings.selectGroup\" [ngClass]=\"{'grp-title': item.grpTitle,'grp-item': !item.grpTitle}\" class=\"pure-checkbox\">\n                    <input *ngIf=\"settings.showCheckbox && settings.selectGroup\" type=\"checkbox\" [checked]=\"item.selected\" [disabled]=\"settings.limitSelection == selectedItems?.length && !isSelected(item)\"\n                    />\n                    <label>{{item[settings.labelKey]}}</label>\n                </li>\n                </span> -->\n                </ul>\n            </div>\n            <h5 class=\"list-message\" *ngIf=\"data?.length == 0\">{{settings.noDataLabel}}</h5>\n        </div>\n    </div>\n</div>",
                host: { '[class]': 'defaultSettings.classes' },
                providers: [DROPDOWN_CONTROL_VALUE_ACCESSOR, DROPDOWN_CONTROL_VALIDATION],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                styles: ["virtual-scroll{display:block;width:100%}.cuppa-dropdown{position:relative}.c-btn{display:inline-block;border-width:1px;line-height:1.25;border-radius:3px;font-size:.85rem;padding:5px 10px;cursor:pointer;align-items:center;min-height:38px}.c-btn.disabled{background:#ccc}.selected-list .c-list{float:left;padding:0;margin:0;width:calc(100% - 20px)}.selected-list .c-list .c-token{list-style:none;padding:4px 22px 4px 8px;border-radius:2px;margin-right:4px;margin-top:2px;float:left;position:relative}.selected-list .c-list .c-token .c-label{display:block;float:left}.selected-list .c-list .c-token .c-remove{position:absolute;right:8px;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);width:8px}.selected-list .c-list .c-token .c-remove svg{fill:#fff}.selected-list .fa-angle-down,.selected-list .fa-angle-up{font-size:15pt;position:absolute;right:10px;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.selected-list .c-angle-down,.selected-list .c-angle-up{width:12px;height:12px;position:absolute;right:10px;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);pointer-events:none}.selected-list .c-angle-down svg,.selected-list .c-angle-up svg{fill:#333}.selected-list .countplaceholder{position:absolute;right:45px;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.selected-list .c-btn{width:100%;padding:5px 10px;cursor:pointer;display:flex;position:relative}.selected-list .c-btn .c-icon{position:absolute;right:5px;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.dropdown-list{position:absolute;padding-top:14px;width:100%;z-index:99999}.dropdown-list ul{padding:0;list-style:none;overflow:auto;margin:0}.dropdown-list ul li{padding:10px;cursor:pointer;text-align:left}.dropdown-list ul li:first-child{padding-top:10px}.dropdown-list ul li:last-child{padding-bottom:10px}.dropdown-list ::-webkit-scrollbar{width:8px}.dropdown-list ::-webkit-scrollbar-thumb{background:#ccc;border-radius:5px}.dropdown-list ::-webkit-scrollbar-track{background:#f2f2f2}.arrow-down,.arrow-up{width:0;height:0;border-left:13px solid transparent;border-right:13px solid transparent;border-bottom:15px solid #fff;margin-left:15px;position:absolute;top:0}.arrow-down{bottom:-14px;top:unset;-webkit-transform:rotate(180deg);transform:rotate(180deg)}.arrow-2{border-bottom:15px solid #ccc;top:-1px}.arrow-down.arrow-2{top:unset;bottom:-16px}.list-area{border:1px solid #ccc;border-radius:3px;background:#fff;margin:0}.select-all{padding:10px;border-bottom:1px solid #ccc;text-align:left}.list-filter{border-bottom:1px solid #ccc;position:relative;padding-left:35px;height:35px}.list-filter input{border:0;width:100%;height:100%;padding:0}.list-filter input:focus{outline:0}.list-filter .c-search{position:absolute;top:9px;left:10px;width:15px;height:15px}.list-filter .c-search svg{fill:#888}.list-filter .c-clear{position:absolute;top:10px;right:10px;width:15px;height:15px}.list-filter .c-clear svg{fill:#888}.pure-checkbox input[type=checkbox]{border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px}.pure-checkbox input[type=checkbox]:focus+label:before,.pure-checkbox input[type=checkbox]:hover+label:before{background-color:#f2f2f2}.pure-checkbox input[type=checkbox]:active+label:before{transition-duration:0s}.pure-checkbox input[type=checkbox]:disabled+label{color:#ccc}.pure-checkbox input[type=checkbox]+label{position:relative;padding-left:2em;vertical-align:middle;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;margin:0;font-weight:300}.pure-checkbox input[type=checkbox]+label:before{box-sizing:content-box;content:'';position:absolute;top:50%;left:0;width:15px;height:15px;margin-top:-9px;text-align:center;transition:.4s;border-radius:3px}.pure-checkbox input[type=checkbox]+label:after{box-sizing:content-box;content:'';position:absolute;-webkit-transform:scale(0);transform:scale(0);-webkit-transform-origin:50%;transform-origin:50%;transition:transform .2s ease-out,-webkit-transform .2s ease-out;background-color:transparent;top:50%;left:3px;width:9px;height:4px;margin-top:-5px;border-style:solid;border-width:0 0 2px 2px;-o-border-image:none;border-image:none;-webkit-transform:rotate(-45deg) scale(0);transform:rotate(-45deg) scale(0)}.pure-checkbox input[type=checkbox]:disabled+label:before{border-color:#ccc}.pure-checkbox input[type=checkbox]:disabled:focus+label:before .pure-checkbox input[type=checkbox]:disabled:hover+label:before{background-color:inherit}.pure-checkbox input[type=checkbox]:disabled:checked+label:before{background-color:#ccc}.pure-checkbox input[type=radio]:checked+label:before{background-color:#fff}.pure-checkbox input[type=radio]:checked+label:after{-webkit-transform:scale(1);transform:scale(1)}.pure-checkbox input[type=radio]+label:before{border-radius:50%}.pure-checkbox input[type=checkbox]:checked+label:after{content:'';transition:transform .2s ease-out,-webkit-transform .2s ease-out;-webkit-transform:rotate(-45deg) scale(1);transform:rotate(-45deg) scale(1)}.list-message{text-align:center;margin:0;padding:15px 0;font-size:initial}.list-grp{padding:0 15px!important}.list-grp h4{text-transform:capitalize;margin:15px 0 0;font-size:14px;font-weight:700}.list-grp>li{padding-left:15px!important}.grp-item{padding-left:30px!important}.grp-title{padding-bottom:0!important}.grp-title label{margin-bottom:0!important;font-weight:800;text-transform:capitalize}.grp-title:hover{background:0 0!important}.loading-icon{width:20px;position:absolute;right:10px;top:23px;z-index:1}.nodata-label{width:100%;text-align:center;padding:10px 0 0}.btn-container{text-align:center;padding:0 5px 10px}.clear-all{width:8px;position:absolute;top:50%;right:30px;-webkit-transform:translateY(-50%);transform:translateY(-50%)}"]
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { type: DataService }]; }, { onSelect: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['onSelect']
        }], onDeSelect: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['onDeSelect']
        }], onSelectAll: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['onSelectAll']
        }], onDeSelectAll: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['onDeSelectAll']
        }], onOpen: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['onOpen']
        }], onClose: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['onClose']
        }], onScrollToEnd: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['onScrollToEnd']
        }], onFilterSelectAll: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['onFilterSelectAll']
        }], onFilterDeSelectAll: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['onFilterDeSelectAll']
        }], onAddFilterNewItem: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['onAddFilterNewItem']
        }], onGroupSelect: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['onGroupSelect']
        }], onGroupDeSelect: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['onGroupDeSelect']
        }], 
    /**
     * @param {?} event
     * @return {?}
     */
    onEscapeDown: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['document:keyup.escape', ['$event']]
        }], settings: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], data: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], loading: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], itemTempl: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
            args: [Item, { static: false }]
        }], badgeTempl: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
            args: [Badge, { static: false }]
        }], searchTempl: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
            args: [Search, { static: false }]
        }], searchInput: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['searchInput', { static: false }]
        }], selectedListElem: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['selectedList', { static: false }]
        }], dropdownListElem: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['dropdownList', { static: false }]
        }], virtualScroller: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [VirtualScrollerComponent, { static: false }]
        }] }); })();
class AngularMultiSelectModule {
}
AngularMultiSelectModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AngularMultiSelectModule });
AngularMultiSelectModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AngularMultiSelectModule_Factory(t) { return new (t || AngularMultiSelectModule)(); }, providers: [DataService], imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], VirtualScrollerModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AngularMultiSelectModule, { declarations: function () { return [AngularMultiSelect, ClickOutsideDirective, ScrollDirective, styleDirective, ListFilterPipe, Item, TemplateRenderer, Badge, Search, setPosition, CIcon]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], VirtualScrollerModule]; }, exports: function () { return [AngularMultiSelect, ClickOutsideDirective, ScrollDirective, styleDirective, ListFilterPipe, Item, TemplateRenderer, Badge, Search, setPosition, CIcon]; } }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AngularMultiSelectModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], VirtualScrollerModule],
                declarations: [AngularMultiSelect, ClickOutsideDirective, ScrollDirective, styleDirective, ListFilterPipe, Item, TemplateRenderer, Badge, Search, setPosition, CIcon],
                exports: [AngularMultiSelect, ClickOutsideDirective, ScrollDirective, styleDirective, ListFilterPipe, Item, TemplateRenderer, Badge, Search, setPosition, CIcon],
                providers: [DataService]
            }]
    }], null, null); })();



//# sourceMappingURL=angular2-multiselect-dropdown.js.map

/***/ }),

/***/ "ebnW":
/*!******************************************************************************!*\
  !*** ./src/app/storemanagement/requestdeatials/requestdeatials.component.ts ***!
  \******************************************************************************/
/*! exports provided: RequestdeatialsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestdeatialsComponent", function() { return RequestdeatialsComponent; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");








function RequestdeatialsComponent_tr_19_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RequestdeatialsComponent_tr_19_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3); const contact_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r2.selectContact(contact_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, " Topics");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const contact_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](contact_r1.project);
} }
class RequestdeatialsComponent {
    constructor(http, _router) {
        this.http = http;
        this._router = _router;
        this.posts = {};
        this.url = 'http://localhost:5000/testtopic';
    }
    selectContact(saii) {
        console.log(saii);
        localStorage.setItem('projectSource', saii.project);
        this._router.navigate(['/storemng/otherreq']);
    }
    ngOnInit() {
        this.getData();
    }
    getData() {
        this.http.get(this.url).subscribe(res => {
            this.posts = res;
        });
    }
}
RequestdeatialsComponent.ɵfac = function RequestdeatialsComponent_Factory(t) { return new (t || RequestdeatialsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
RequestdeatialsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: RequestdeatialsComponent, selectors: [["app-requestdeatials"]], decls: 87, vars: 1, consts: [[1, "content"], [1, "container-fluid"], [1, "row"], [1, "col-lg-4", "col-sm-6"], [1, "card", 2, "width", "500px"], ["mat-raised-button", "", "color", "primary"], ["id", "customers", 1, "table", "table-hover"], [4, "ngFor", "ngForOf"], [1, "col"], [1, "support-box", "text-center", "l-bg-red"], [1, "icon", "m-b-10"], [1, "text", "m-b-15", 2, "font-size", "25px"], [1, "m-b-0"], [1, "material-icons"], [1, "support-box", "text-center", "l-bg-cyan"], [1, "support-box", "text-center", "l-bg-orange"], [1, "col-lg-12", "col-sm-12"], [1, "support-box", "text-center", "l-bg-purple", 2, "height", "420px"], [1, "btn", "btn-primary", 3, "click"]], template: function RequestdeatialsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Refesh");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "table", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Project");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, RequestdeatialsComponent_tr_19_Template, 6, 1, "tr", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Total Topics");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "h3", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "1512 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "trending_up");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](33, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "Connector Count");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "h3", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "1236 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "trending_up");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](42, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "Message In");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "h3", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "1107 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "trending_up");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](52, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, "Bytes In");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "h3", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56, "1512 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, "trending_up");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](61, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63, "Bytes Out");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "h3", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](65, "1236 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](67, "trending_up");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](70, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](72, "Users");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "h3", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](74, "1107 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](76, "trending_up");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](80, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](82, "Pending");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "h3", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](84, "167 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](86, "trending_up");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.posts);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0b3JlbWFuYWdlbWVudC9yZXF1ZXN0ZGVhdGlhbHMvcmVxdWVzdGRlYXRpYWxzLmNvbXBvbmVudC5zYXNzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](RequestdeatialsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-requestdeatials',
                templateUrl: './requestdeatials.component.html',
                styleUrls: ['./requestdeatials.component.sass']
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "ge8t":
/*!******************************************************************!*\
  !*** ./src/app/storemanagement/othersreq/othersreq.component.ts ***!
  \******************************************************************/
/*! exports provided: OthersreqComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OthersreqComponent", function() { return OthersreqComponent; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");








function OthersreqComponent_tr_21_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OthersreqComponent_tr_21_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3); const contact_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r2.selectContact(contact_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, " Topics Metrics");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const contact_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", contact_r1.owner, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", contact_r1.topicname, "");
} }
class OthersreqComponent {
    constructor(http, _router) {
        this.http = http;
        this._router = _router;
        this.posts = {};
        this.url = 'http://localhost:5000/maintopicproject/';
    }
    selectContact(saii) {
        console.log(saii);
        localStorage.setItem('maintopic', saii.topicname);
        this._router.navigate(['/storemng/stockupdate']);
    }
    ngOnInit() {
        this.getData();
    }
    getData() {
        this.projectSource = localStorage.getItem('projectSource');
        this.http.get(this.url + this.projectSource).subscribe(res => {
            this.posts = res;
        });
    }
}
OthersreqComponent.ɵfac = function OthersreqComponent_Factory(t) { return new (t || OthersreqComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
OthersreqComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: OthersreqComponent, selectors: [["app-othersreq"]], decls: 89, vars: 1, consts: [[1, "content"], [1, "container-fluid"], [1, "row"], [1, "col-lg-4", "col-sm-6"], [1, "card", 2, "width", "500px"], ["mat-raised-button", "", "color", "primary"], [1, "table", "table-hover"], [4, "ngFor", "ngForOf"], [1, "col"], [1, "support-box", "text-center", "bg-cyan"], [1, "icon", "m-b-10"], [1, "text", "m-b-15", 2, "font-size", "25px"], [1, "m-b-0"], [1, "material-icons"], [1, "support-box", "text-center", "bg-purple"], [1, "support-box", "text-center", "bg-blue"], [1, "col-lg-12", "col-sm-12"], [1, "support-box", "text-center", "bg-green", 2, "height", "420px"], [1, "btn", "btn-primary", 3, "click"]], template: function OthersreqComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Refesh");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "table", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "owner");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "topic name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, OthersreqComponent_tr_21_Template, 8, 2, "tr", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Total Topics");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "h3", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "1512 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "trending_up");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](35, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "Connector Count ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "h3", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "1236 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "trending_up");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](44, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "Messages In");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "h3", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "1107 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, "trending_down");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](54, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56, "Bytes In");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "h3", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, "1512 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](60, "trending_up");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](63, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](65, "Bytes Out");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "h3", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](67, "1236 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](69, "trending_up");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](72, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](74, "Total ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "h3", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](76, "1107 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](78, "trending_down");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](82, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](84, "Total Active Users");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "h3", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](86, "167 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](88, "trending_down");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.posts);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0b3JlbWFuYWdlbWVudC9vdGhlcnNyZXEvb3RoZXJzcmVxLmNvbXBvbmVudC5zYXNzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](OthersreqComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-othersreq',
                templateUrl: './othersreq.component.html',
                styleUrls: ['./othersreq.component.sass']
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "hu2w":
/*!****************************************************************!*\
  !*** ./src/app/storemanagement/roltable/roltable.component.ts ***!
  \****************************************************************/
/*! exports provided: RoltableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoltableComponent", function() { return RoltableComponent; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "lDzL");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _ctrl_ngx_csv__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ctrl/ngx-csv */ "Fjbs");












const _c0 = ["roleTemplate"];
const _c1 = ["closeAddModal"];
const _c2 = ["closeEditModal"];
function RoltableComponent_ng_template_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Item Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function RoltableComponent_ng_template_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Item Code");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function RoltableComponent_ng_template_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Min Stock");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function RoltableComponent_ng_template_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Live Stock");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function RoltableComponent_ng_template_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Rol Stock");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function RoltableComponent_ng_template_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Rol Percent");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class RoltableComponent {
    constructor(fb, _snackBar, http) {
        this.fb = fb;
        this._snackBar = _snackBar;
        this.http = http;
        this.rows = [];
        // newUserImg = 'assets/images/user/user1.jpg';
        this.data = [];
        this.filteredData = [];
        this.columns = [
            { name: 'id' },
            { name: 'name' },
            { name: 'category' },
            { name: 'purchasecost' },
            { name: 'minstock' },
            { name: 'rolper' },
            { name: 'rol' },
        ];
        // Table 2
        this.tb2columns = [
            { name: 'id' },
            { name: 'name' },
            { name: 'category' },
            { name: 'purchasecost' },
            { name: 'minstock' },
            { name: 'rolper' },
            { name: 'rol' },
        ];
        this.tb2data = [];
        this.tb2filteredData = [];
        this.editForm = this.fb.group({
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            category: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            purchasecost: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            minstock: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            rolper: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            rol: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
        });
    }
    ngOnInit() {
        this.mainurl = localStorage.getItem('mainurl');
        this.fetch(data => {
            this.data = data;
            this.filteredData = data;
        });
        // Table 2
        this.tb2fetch(data => {
            this.tb2data = data;
            this.tb2filteredData = data;
        });
        this.register = this.fb.group({
            //
            name: [''],
            id: [''],
            category: [''],
            purchasecost: [''],
            rolper: [''],
            minstock: [''],
            rol: ['']
        });
    }
    fetch(cb) {
        const req = new XMLHttpRequest();
        req.open('GET', this.mainurl + 'productrolper');
        req.onload = () => {
            const data = JSON.parse(req.response);
            cb(data);
        };
        req.send();
    }
    // Table 2
    tb2fetch(cb) {
        const req = new XMLHttpRequest();
        req.open('GET', 'assets/data/ngx-data.json');
        req.onload = () => {
            const data = JSON.parse(req.response);
            cb(data);
        };
        req.send();
    }
    // Table 2
    tb2filterDatatable(event) {
        // get the value of the key pressed and make it lowercase
        const val = event.target.value.toLowerCase();
        // get the amount of columns in the table
        const colsAmt = this.tb2columns.length;
        // get the key names of each column in the dataset
        const keys = Object.keys(this.tb2filteredData[0]);
        // assign filtered matches to the active datatable
        this.tb2data = this.tb2filteredData.filter(function (item) {
            // iterate through each row's column data
            for (let i = 0; i < colsAmt; i++) {
                // check for a match
                if (item[keys[i]]
                    .toString()
                    .toLowerCase()
                    .indexOf(val) !== -1 ||
                    !val) {
                    // found match, return true to add to result set
                    return true;
                }
            }
        });
        // whenever the filter changes, always go back to the first page
        this.table2.offset = 0;
    }
    editRow(row, rowIndex) {
        this.editForm.setValue({
            id: row.id,
            name: row.name,
            code: row.code,
        });
        this.selectedRowData = row;
    }
    addRow() {
        this.register.patchValue({
            // id: this.getId(10, 100),
            name: this.name,
            code: this.code
        });
    }
    deleteRow(row) {
        // this.data = this.arrayRemove(this.data, row.id);
        // this.showNotification(
        //   'bg-red',
        //   'Delete Record Successfully',
        //   'bottom',
        //   'right'
        // );
        this.data = this.arrayRemove(this.data, row.id);
        this.http.delete(this.mainurl + 'productsafestock/' + row.id).subscribe();
        this.showNotification('bg-red', 'Delete Record Successfully', 'bottom', 'right');
    }
    arrayRemove(array, id) {
        return array.filter(function (element) {
            return element.id != id;
        });
    }
    onEditSave(form) {
        // this.data = this.data.filter((value, key) => {
        //   if (value.id == form.value.id) {
        //     value.type = form.value.type;
        //   }
        //   this.closeEditModal.nativeElement.click();
        //   return true;
        // });
        this.data = this.data.filter((value, key) => {
            if (value.id == form.value.id) {
                value.code = form.value.code;
                value.name = form.value.name;
            }
            let empdata = {
                'code': form.value.code,
                'name': form.value.name,
            };
            this.http.put(this.mainurl + 'productsafestock/' + form.value.id, empdata).subscribe();
            this.closeEditModal.nativeElement.click();
            return true;
        });
        this.showNotification('bg-black', 'Edit Record Successfully', 'bottom', 'right');
    }
    onAddRowSave(form) {
        this.data.push(form.value);
        this.http.post(this.mainurl + 'productsafestock', form.value).subscribe();
        this.data = [...this.data];
        // console.log(this.data);
        form.reset();
        this.closeAddModal.nativeElement.click();
        this.showNotification('bg-green', 'Add Record Successfully', 'bottom', 'right');
    }
    filterDatatable(event) {
        // get the value of the key pressed and make it lowercase
        const val = event.target.value.toLowerCase();
        // get the amount of columns in the table
        const colsAmt = this.columns.length;
        // get the key names of each column in the dataset
        const keys = Object.keys(this.filteredData[0]);
        // assign filtered matches to the active datatable
        this.data = this.filteredData.filter(function (item) {
            // iterate through each row's column data
            for (let i = 0; i < colsAmt; i++) {
                // check for a match
                if (item[keys[i]]
                    .toString()
                    .toLowerCase()
                    .indexOf(val) !== -1 ||
                    !val) {
                    // found match, return true to add to result set
                    return true;
                }
            }
        });
        // whenever the filter changes, always go back to the first page
        this.table.offset = 0;
    }
    getId(min, max) {
        // min and max included
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    openSnackBar(message) {
        this._snackBar.open(message, '', {
            duration: 2000,
            verticalPosition: 'bottom',
            horizontalPosition: 'right',
            panelClass: ['bg-red']
        });
    }
    showNotification(colorName, text, placementFrom, placementAlign) {
        this._snackBar.open(text, '', {
            duration: 2000,
            verticalPosition: placementFrom,
            horizontalPosition: placementAlign,
            panelClass: colorName
        });
    }
}
RoltableComponent.ɵfac = function RoltableComponent_Factory(t) { return new (t || RoltableComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
RoltableComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: RoltableComponent, selectors: [["app-roltable"]], viewQuery: function RoltableComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstaticViewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__["DatatableComponent"], true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c1, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c2, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__["DatatableComponent"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.roleTemplate = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.table = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.closeAddModal = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.closeEditModal = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.table2 = _t.first);
    } }, decls: 39, vars: 15, consts: [[1, "content"], [1, "container-fluid"], [1, "row", "clearfix"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12"], [1, "card"], [1, "body"], [1, "row"], [1, "col-sm-12"], [1, "ngxTableHeader"], [1, "header-buttons-left", "ml-0"], [1, "dropdown"], [1, "dropdown", "m-l-20"], ["for", "search-input"], [1, "material-icons", "search-icon"], ["placeholder", "Search", "type", "text", "aria-label", "Search box", 1, "browser-default", "search-field", 3, "keyup"], [1, "header-buttons", "m-r-20"], [1, "icon-button-demo"], ["mat-mini-fab", "", "color", "primary", "data-toggle", "modal", "data-target", "#addModal"], ["csvLink", "", 1, "col-white", 3, "data"], [1, "material", 3, "rows", "columns", "sortType", "columnMode", "headerHeight", "footerHeight", "rowHeight", "limit"], ["table", ""], ["name", "name", 3, "width"], ["ngx-datatable-header-template", ""], ["name", "productcode", 3, "width"], ["name", "minstock", 3, "width"], ["name", "livestock", 3, "width"], ["name", "rol", 3, "width"], ["name", "rolper", 3, "width"]], template: function RoltableComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "ul", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Reorder Level Stock");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "search");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keyup", function RoltableComponent_Template_input_keyup_18_listener($event) { return ctx.filterDatatable($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "ul", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "CSV");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "ngx-datatable", 19, 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "ngx-datatable-column", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](28, RoltableComponent_ng_template_28_Template, 2, 0, "ng-template", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "ngx-datatable-column", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](30, RoltableComponent_ng_template_30_Template, 2, 0, "ng-template", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "ngx-datatable-column", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](32, RoltableComponent_ng_template_32_Template, 2, 0, "ng-template", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "ngx-datatable-column", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](34, RoltableComponent_ng_template_34_Template, 2, 0, "ng-template", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "ngx-datatable-column", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](36, RoltableComponent_ng_template_36_Template, 2, 0, "ng-template", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "ngx-datatable-column", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](38, RoltableComponent_ng_template_38_Template, 2, 0, "ng-template", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("data", ctx.data);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("rows", ctx.data)("columns", ctx.columns)("sortType", "multi")("columnMode", "force")("headerHeight", 50)("footerHeight", 50)("rowHeight", "60")("limit", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("width", 180);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("width", 130);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("width", 130);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("width", 130);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("width", 130);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("width", 130);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _ctrl_ngx_csv__WEBPACK_IMPORTED_MODULE_6__["CsvDirective"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__["DatatableComponent"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__["DataTableColumnDirective"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__["DataTableColumnHeaderDirective"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0b3JlbWFuYWdlbWVudC9yb2x0YWJsZS9yb2x0YWJsZS5jb21wb25lbnQuc2FzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](RoltableComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-roltable',
                templateUrl: './roltable.component.html',
                styleUrls: ['./roltable.component.sass']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }]; }, { roleTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['roleTemplate', { static: true }]
        }], table: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: [_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__["DatatableComponent"], { static: false }]
        }], closeAddModal: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['closeAddModal', { static: false }]
        }], closeEditModal: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['closeEditModal', { static: false }]
        }], table2: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: [_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__["DatatableComponent"], { static: false }]
        }] }); })();


/***/ }),

/***/ "k2Xd":
/*!**************************************************************************!*\
  !*** ./src/app/storemanagement/findmatireals/findmatireals.component.ts ***!
  \**************************************************************************/
/*! exports provided: FindmatirealsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FindmatirealsComponent", function() { return FindmatirealsComponent; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "lDzL");










const _c0 = ["roleTemplate"];
const _c1 = ["closeAddModal"];
const _c2 = ["closeEditModal"];
function FindmatirealsComponent_ng_template_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Item ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function FindmatirealsComponent_ng_template_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Item Code");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function FindmatirealsComponent_ng_template_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function FindmatirealsComponent_ng_template_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Category");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function FindmatirealsComponent_ng_template_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Item ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function FindmatirealsComponent_ng_template_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function FindmatirealsComponent_ng_template_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Description 2");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function FindmatirealsComponent_ng_template_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Unit Cost");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function FindmatirealsComponent_ng_template_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Rack");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class FindmatirealsComponent {
    constructor(fb, _snackBar, http) {
        this.fb = fb;
        this._snackBar = _snackBar;
        this.http = http;
        this.rows = [];
        // newUserImg = 'assets/images/user/user1.jpg';
        this.data = [];
        this.filteredData = [];
        this.columns = [
            { name: 'productid' },
            { name: 'productcode' },
            { name: 'name' },
            { name: 'description' },
            { name: 'description1' },
            { name: 'description2' },
            { name: 'category' },
            { name: 'totalorders' },
            { name: 'minstock' },
            { name: 'totalcostordered' },
            { name: 'purchasecost' },
            { name: 'rack' },
            { name: 'units' }
        ];
        // Table 2
        this.tb2columns = [
            { name: 'productid' },
            { name: 'productcode' },
            { name: 'name' },
            { name: 'description' },
            { name: 'description1' },
            { name: 'description2' },
            { name: 'category' },
            { name: 'totalorders' },
            { name: 'minstock' },
            { name: 'totalcostordered' },
            { name: 'purchasecost' },
            { name: 'rack' },
            { name: 'units' }
        ];
        this.tb2data = [];
        this.tb2filteredData = [];
        this.editForm = this.fb.group({
            productid: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            productcode: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            category: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            description1: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            description2: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            totalorders: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            minstock: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            totalcostordered: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            purchasecost: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            rack: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            units: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
        });
    }
    ngOnInit() {
        this.mainurl = localStorage.getItem('mainurl');
        this.fetch(data => {
            this.data = data;
            this.filteredData = data;
        });
        // Table 2
        this.tb2fetch(data => {
            this.tb2data = data;
            this.tb2filteredData = data;
        });
        this.register = this.fb.group({
            //
            productid: [''],
            productcode: [''],
            description: [''],
            name: [''],
            category: [''],
            description1: [''],
            description2: [''],
            totalorders: [''],
            minstock: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            totalcostordered: [''],
            purchasecost: [''],
            rack: [''],
            units: [''],
        });
    }
    fetch(cb) {
        const req = new XMLHttpRequest();
        req.open('GET', this.mainurl + 'product');
        req.onload = () => {
            const data = JSON.parse(req.response);
            cb(data);
            console.log('products', data);
        };
        req.send();
    }
    // Table 2
    tb2fetch(cb) {
        const req = new XMLHttpRequest();
        req.open('GET', 'assets/data/ngx-data.json');
        req.onload = () => {
            const data = JSON.parse(req.response);
            cb(data);
        };
        req.send();
    }
    // Table 2
    tb2filterDatatable(event) {
        // get the value of the key pressed and make it lowercase
        const val = event.target.value.toLowerCase();
        // get the amount of columns in the table
        const colsAmt = this.tb2columns.length;
        // get the key names of each column in the dataset
        const keys = Object.keys(this.tb2filteredData[0]);
        // assign filtered matches to the active datatable
        this.tb2data = this.tb2filteredData.filter(function (item) {
            // iterate through each row's column data
            for (let i = 0; i < colsAmt; i++) {
                // check for a match
                if (item[keys[i]]
                    .toString()
                    .toLowerCase()
                    .indexOf(val) !== -1 ||
                    !val) {
                    // found match, return true to add to result set
                    return true;
                }
            }
        });
        // whenever the filter changes, always go back to the first page
        this.table2.offset = 0;
    }
    editRow(row, rowIndex) {
        this.editForm.setValue({
            productid: row.productid,
            productcode: row.productcode,
            description: row.description,
            name: row.name,
            category: row.category,
            description1: row.description1,
            description2: row.description2,
            totalorders: row.totalorders,
            minstock: row.minstock,
            totalcostordered: row.totalcostordered,
            purchasecost: row.purchasecost,
            rack: row.rack,
            units: row.units,
        });
        this.selectedRowData = row;
    }
    addRow() {
        this.register.patchValue({
            // id: this.getId(10, 100),
            type: this.type
        });
    }
    deleteRow(row) {
        // this.data = this.arrayRemove(this.data, row.id);
        // this.showNotification(
        //   'bg-red',
        //   'Delete Record Successfully',
        //   'bottom',
        //   'right'
        // );
        this.data = this.arrayRemove(this.data, row.id);
        this.http.delete(this.mainurl + 'product/' + row.id).subscribe();
        this.showNotification('bg-red', 'Delete Record Successfully', 'bottom', 'right');
    }
    arrayRemove(array, id) {
        return array.filter(function (element) {
            return element.id != id;
        });
    }
    onEditSave(form) {
        // this.data = this.data.filter((value, key) => {
        //   if (value.id == form.value.id) {
        //     value.type = form.value.type;
        //   }
        //   this.closeEditModal.nativeElement.click();
        //   return true;
        // });
        this.data = this.data.filter((value, key) => {
            if (value.productid == form.value.productid) {
                value.name = form.value.name;
                value.category = form.value.category;
                value.productcode = form.value.productcode;
                value.description = form.value.description;
                value.description1 = form.value.description1;
                value.description2 = form.value.description2;
                value.totalorders = form.value.totalorders;
                value.minstock = form.value.minstock;
                value.totalcostordered = form.value.totalcostordered;
                value.purchasecost = form.value.purchasecost;
                value.rack = form.value.rack;
                value.units = form.value.units;
            }
            let empdata = {
                "productcode": form.value.productcode,
                "description": form.value.description,
                "name": form.value.name,
                "category": form.value.category,
                "description1": form.value.description1,
                "description2": form.value.description2,
                "totalorders": form.value.totalorders,
                "minstock": form.value.minstock,
                "totalcostordered": form.value.totalcostordered,
                "purchasecost": form.value.purchasecost,
                "rack": form.value.rack,
                "units": form.value.units
            };
            console.log(empdata);
            this.http.put(this.mainurl + 'product/' + form.value.productid, empdata).subscribe();
            this.closeEditModal.nativeElement.click();
            return true;
        });
        this.showNotification('bg-black', 'Edit Record Successfully', 'bottom', 'right');
    }
    onAddRowSave(form) {
        this.data.push(form.value);
        this.http.post(this.mainurl + 'product', form.value).subscribe();
        this.data = [...this.data];
        // console.log(this.data);
        form.reset();
        this.closeAddModal.nativeElement.click();
        this.showNotification('bg-green', 'Add Record Successfully', 'bottom', 'right');
    }
    filterDatatable(event) {
        // get the value of the key pressed and make it lowercase
        const val = event.target.value.toLowerCase();
        // get the amount of columns in the table
        const colsAmt = this.columns.length;
        // get the key names of each column in the dataset
        const keys = Object.keys(this.filteredData[0]);
        // assign filtered matches to the active datatable
        this.data = this.filteredData.filter(function (item) {
            // iterate through each row's column data
            for (let i = 0; i < colsAmt; i++) {
                // check for a match
                if (item[keys[i]]
                    .toString()
                    .toLowerCase()
                    .indexOf(val) !== -1 ||
                    !val) {
                    // found match, return true to add to result set
                    return true;
                }
            }
        });
        // whenever the filter changes, always go back to the first page
        this.table.offset = 0;
    }
    getId(min, max) {
        // min and max included
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    openSnackBar(message) {
        this._snackBar.open(message, '', {
            duration: 2000,
            verticalPosition: 'bottom',
            horizontalPosition: 'right',
            panelClass: ['bg-red']
        });
    }
    showNotification(colorName, text, placementFrom, placementAlign) {
        this._snackBar.open(text, '', {
            duration: 2000,
            verticalPosition: placementFrom,
            horizontalPosition: placementAlign,
            panelClass: colorName
        });
    }
}
FindmatirealsComponent.ɵfac = function FindmatirealsComponent_Factory(t) { return new (t || FindmatirealsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
FindmatirealsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: FindmatirealsComponent, selectors: [["app-findmatireals"]], viewQuery: function FindmatirealsComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstaticViewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__["DatatableComponent"], true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c1, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c2, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__["DatatableComponent"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.roleTemplate = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.table = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.closeAddModal = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.closeEditModal = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.table2 = _t.first);
    } }, decls: 39, vars: 17, consts: [[1, "content"], [1, "container-fluid"], [1, "row", "clearfix"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12"], [1, "card"], [1, "body"], [1, "row"], [1, "col-sm-12"], [1, "ngxTableHeader"], [1, "header-buttons-left", "ml-0"], [1, "dropdown"], [1, "dropdown", "m-l-20"], ["for", "search-input"], [1, "material-icons", "search-icon"], ["placeholder", "Search", "type", "text", "aria-label", "Search box", 1, "browser-default", "search-field", 3, "keyup"], [1, "material", 3, "rows", "columns", "sortType", "columnMode", "headerHeight", "footerHeight", "rowHeight", "limit"], ["table", ""], ["name", "productid", 3, "width"], ["ngx-datatable-header-template", ""], ["name", "productcode", 3, "width"], ["name", "name", 3, "width"], ["name", "category", 3, "width"], ["name", "description", 3, "width"], ["name", "description1", 3, "width"], ["name", "description2", 3, "width"], ["name", "purchasecost", 3, "width"], ["name", "rack", 3, "width"]], template: function FindmatirealsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "ul", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Find Item");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "search");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keyup", function FindmatirealsComponent_Template_input_keyup_18_listener($event) { return ctx.filterDatatable($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "ngx-datatable", 15, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "ngx-datatable-column", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, FindmatirealsComponent_ng_template_22_Template, 2, 0, "ng-template", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "ngx-datatable-column", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, FindmatirealsComponent_ng_template_24_Template, 2, 0, "ng-template", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "ngx-datatable-column", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](26, FindmatirealsComponent_ng_template_26_Template, 2, 0, "ng-template", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "ngx-datatable-column", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](28, FindmatirealsComponent_ng_template_28_Template, 2, 0, "ng-template", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "ngx-datatable-column", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](30, FindmatirealsComponent_ng_template_30_Template, 2, 0, "ng-template", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "ngx-datatable-column", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](32, FindmatirealsComponent_ng_template_32_Template, 2, 0, "ng-template", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "ngx-datatable-column", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](34, FindmatirealsComponent_ng_template_34_Template, 2, 0, "ng-template", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "ngx-datatable-column", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](36, FindmatirealsComponent_ng_template_36_Template, 2, 0, "ng-template", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "ngx-datatable-column", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](38, FindmatirealsComponent_ng_template_38_Template, 2, 0, "ng-template", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("rows", ctx.data)("columns", ctx.columns)("sortType", "multi")("columnMode", "force")("headerHeight", 50)("footerHeight", 50)("rowHeight", "60")("limit", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("width", 130);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("width", 130);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("width", 130);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("width", 130);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("width", 130);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("width", 130);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("width", 130);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("width", 130);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("width", 130);
    } }, directives: [_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__["DatatableComponent"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__["DataTableColumnDirective"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__["DataTableColumnHeaderDirective"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0b3JlbWFuYWdlbWVudC9maW5kbWF0aXJlYWxzL2ZpbmRtYXRpcmVhbHMuY29tcG9uZW50LnNhc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](FindmatirealsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-findmatireals',
                templateUrl: './findmatireals.component.html',
                styleUrls: ['./findmatireals.component.sass']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }]; }, { roleTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['roleTemplate', { static: true }]
        }], table: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: [_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__["DatatableComponent"], { static: false }]
        }], closeAddModal: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['closeAddModal', { static: false }]
        }], closeEditModal: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['closeEditModal', { static: false }]
        }], table2: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: [_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__["DatatableComponent"], { static: false }]
        }] }); })();


/***/ }),

/***/ "kVBW":
/*!*********************************************************!*\
  !*** ./src/app/storemanagement/excelservice.service.ts ***!
  \*********************************************************/
/*! exports provided: ExcelService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExcelService", function() { return ExcelService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! file-saver */ "Iab2");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! xlsx */ "EUZL");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_2__);




const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const EXCEL_EXTENSION = '.xlsx';
class ExcelService {
    constructor() { }
    exportAsExcelFile(json, excelFileName) {
        const myworksheet = xlsx__WEBPACK_IMPORTED_MODULE_2__["utils"].json_to_sheet(json);
        const myworkbook = { Sheets: { 'data': myworksheet }, SheetNames: ['data'] };
        const excelBuffer = xlsx__WEBPACK_IMPORTED_MODULE_2__["write"](myworkbook, { bookType: 'xlsx', type: 'array' });
        this.saveAsExcelFile(excelBuffer, excelFileName);
    }
    saveAsExcelFile(buffer, fileName) {
        const data = new Blob([buffer], {
            type: EXCEL_TYPE
        });
        file_saver__WEBPACK_IMPORTED_MODULE_1__["saveAs"](data, fileName + '_exported' + EXCEL_EXTENSION);
    }
}
ExcelService.ɵfac = function ExcelService_Factory(t) { return new (t || ExcelService)(); };
ExcelService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ExcelService, factory: ExcelService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExcelService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "kuYk":
/*!********************************************************************!*\
  !*** ./src/app/storemanagement/storeboard/storeboard.component.ts ***!
  \********************************************************************/
/*! exports provided: StoreboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoreboardComponent", function() { return StoreboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _fullcalendar_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fullcalendar/angular */ "IvIE");
/* harmony import */ var _fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fullcalendar/daygrid */ "iOEq");
/* harmony import */ var _services_dynamic_script_loader_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/dynamic-script-loader.service */ "cpNI");
/* harmony import */ var ng_apexcharts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-apexcharts */ "CV0D");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _excelservice_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../excelservice.service */ "kVBW");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_7__);












const _c0 = ["calendar"];
const _c1 = ["chart"];
var d = new Date(), date = d.getDate(), month = d.getMonth(), year = d.getFullYear();
class StoreboardComponent {
    constructor(dynamicScriptLoader, http, excelService) {
        this.dynamicScriptLoader = dynamicScriptLoader;
        this.http = http;
        this.excelService = excelService;
        this.calendarVisible = true;
        this.calendarPlugins = [_fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_2__["default"]];
        this.calendarWeekends = true;
        this.calendarEvents = [
            {
                title: 'Conference',
                start: new Date(year, month, date - 5, 0, 0),
                end: new Date(year, month, date - 2, 0, 0),
                backgroundColor: '#00FFFF'
            },
            {
                title: 'Holiday',
                start: new Date(year, month, date - 10, 9, 0),
                end: new Date(year, month, date - 8, 0, 0),
                backgroundColor: '#F3565D'
            },
            {
                title: 'Repeating Event',
                start: new Date(year, month, date + 5, 16, 0),
                allDay: !1,
                backgroundColor: '#1bbc9b'
            },
            {
                title: 'Meeting',
                start: new Date(year, month, date, 10, 30),
                allDay: !1
            },
            {
                title: 'Result Day',
                start: new Date(year, month, date + 7, 19, 0),
                end: new Date(year, month, date + 1, 22, 30),
                backgroundColor: '#DC35A9',
                allDay: !1
            },
            {
                title: 'Click for Google',
                start: new Date(year, month, 29),
                end: new Date(year, month, 30),
                backgroundColor: '#9b59b6',
                url: 'http://google.com/'
            }
        ];
        this.totalcount = {};
        this.penddingcount = {};
        this.Rejected = {};
        this.completed = {};
        this.totalpricehigh = {};
        this.totalpricelow = {};
        this.totalordershigh = {};
        this.totalorderslow = {};
        this.currentDate = new Date();
        // area chart start
        this.areaChartOptions = {
            responsive: true,
            tooltips: {
                mode: 'index',
                titleFontSize: 12,
                titleFontColor: '#000',
                bodyFontColor: '#000',
                backgroundColor: '#fff',
                titleFontFamily: 'Poppins',
                bodyFontFamily: 'Poppins',
                cornerRadius: 3,
                intersect: false
            },
            legend: {
                display: false,
                labels: {
                    usePointStyle: true,
                    fontFamily: 'Poppins'
                }
            },
            scales: {
                xAxes: [
                    {
                        display: true,
                        gridLines: {
                            display: false,
                            drawBorder: false
                        },
                        scaleLabel: {
                            display: false,
                            labelString: 'Month'
                        },
                        ticks: {
                            fontFamily: 'Poppins',
                            fontColor: '#9aa0ac' // Font Color
                        }
                    }
                ],
                yAxes: [
                    {
                        display: true,
                        gridLines: {
                            display: false,
                            drawBorder: false
                        },
                        scaleLabel: {
                            display: true,
                            labelString: 'Value',
                            fontFamily: 'Poppins'
                        },
                        ticks: {
                            fontFamily: 'Poppins',
                            fontColor: '#9aa0ac' // Font Color
                        }
                    }
                ]
            },
            title: {
                display: false,
                text: 'Normal Legend'
            }
        };
        this.areaChartData = [
            {
                label: 'Foods',
                data: [0, 105, 190, 140, 270],
                borderWidth: 2,
                pointStyle: 'circle',
                pointRadius: 3,
                pointBorderColor: 'transparent'
            },
            {
                label: 'Electronics',
                data: [0, 152, 80, 250, 190],
                borderWidth: 2,
                pointStyle: 'circle',
                pointRadius: 3,
                pointBorderColor: 'transparent'
            }
        ];
        this.areaChartLabels = ['January', 'February', 'March', 'April', 'May'];
        // area chart end
        // barChart
        this.barChartOptions = {
            scaleShowVerticalLines: false,
            responsive: true,
            legend: {
                display: true,
                labels: {
                    fontColor: '#9aa0ac'
                }
            },
            scales: {
                xAxes: [
                    {
                        ticks: {
                            fontFamily: 'Poppins',
                            fontColor: '#9aa0ac' // Font Color
                        }
                    }
                ],
                yAxes: [
                    {
                        ticks: {
                            beginAtZero: true,
                            fontFamily: 'Poppins',
                            fontColor: '#9aa0ac' // Font Color
                        }
                    }
                ]
            }
        };
        this.barChartLabels = [
            '2001',
            '2002',
            '2003',
            '2004',
            '2005',
            '2006',
            '2007'
        ];
        this.barChartType = 'bar';
        this.barChartLegend = true;
        this.barChartData = [
            { data: [58, 60, 74, 78, 55, 64, 42], label: 'Series A' },
            { data: [30, 45, 51, 22, 79, 35, 82], label: 'Series B' }
        ];
        this.barChartColors = [
            {
                backgroundColor: 'rgba(109, 144, 232, 0.8)',
                borderColor: 'rgba(109, 144, 232,1)',
                pointBackgroundColor: 'rgba(109, 144, 232,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(109, 144, 232,0.8)'
            },
            {
                backgroundColor: 'rgba(255, 140, 96, 0.8)',
                borderColor: 'rgba(255, 140, 96,1)',
                pointBackgroundColor: 'rgba(255, 140, 96,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(255, 140, 96,0.8)'
            }
        ];
        this.oldcount = {};
    }
    // end bar chart
    getDatatotalcount() {
        this.http.get(this.mainurl + 'clustercount').subscribe(res => {
            this.totalcount = res;
            console.log(this.totalcount.count);
        });
    }
    getDatapenddingcount() {
        this.http.get(this.mainurl + 'projectscount').subscribe(res => {
            this.penddingcount = res;
        });
    }
    getDataRejectedcount() {
        this.http.get(this.mainurl + 'ownercount').subscribe(res => {
            this.Rejected = res;
        });
    }
    getDatacompletedcount() {
        this.http.get(this.mainurl + 'topicscount').subscribe(res => {
            this.completed = res;
        });
    }
    toprequestrountcompleted() {
        this.http.get(this.mainurl + 'toprequestrountcompleted').subscribe(res => {
            this.totalpricehigh = res;
            console.log('totalpricehigh', this.totalpricehigh);
        });
    }
    lowrequestrountcompleted() {
    }
    topordersrequestrount() {
    }
    lowordersrequestrount() {
    }
    // totalpricehighdownload(){
    //   this.AppdataService.downloadFile(this.totalpricehigh, 'jsontocsv');
    // }
    // totalpricelowdownload(){
    //   this.AppdataService.downloadFile(this.totalpricelow, 'jsontocsv');
    // }
    // totalordershighdownload(){
    //   this.AppdataService.downloadFile(this.totalordershigh, 'jsontocsv');
    // }
    // totalorderslowdownload(){
    //   this.AppdataService.downloadFile(this.totalorderslow, 'jsontocsv');
    // }
    exportAsXLSX1() {
        this.excelService.exportAsExcelFile(this.totalordershigh, 'Price -Fast Moving' + this.totalpricehigh);
    }
    exportAsXLSX2() {
        this.excelService.exportAsExcelFile(this.totalordershigh, 'Price -slow Moving' + this.totalpricelow);
    }
    exportAsXLSX3() {
        this.excelService.exportAsExcelFile(this.totalordershigh, 'Item -Fast Moving' + this.totalordershigh);
    }
    exportAsXLSX4() {
        this.excelService.exportAsExcelFile(this.totalordershigh, 'Item -slow Moving' + this.totalorderslow);
    }
    ngOnInit() {
        this.mainurl = localStorage.getItem('mainurl');
        this.userrole = localStorage.getItem('userrole');
        this.lowordersrequestrount();
        this.topordersrequestrount();
        this.lowrequestrountcompleted();
        this.toprequestrountcompleted();
        this.getDatapenddingcount();
        this.getDatatotalcount();
        this.getDataRejectedcount();
        this.getDatacompletedcount();
        if (this.userrole == 'Admin' || this.userrole == 'Store Executive' || this.userrole == 'Store Manager') {
            setInterval(() => {
                //<<<---using ()=> syntax
                this.http.get(this.mainurl + 'requestrount').subscribe(res => {
                    this.oldcount = res;
                    console.log(this.oldcount.count);
                });
                console.log('this.oldcount.count', this.oldcount.count);
                console.log('this.totalcount.count', this.totalcount.count);
                this.newcount = parseInt(this.oldcount.count) - parseInt(this.totalcount.count);
                console.log('this is the new count', this.newcount);
                if (this.newcount > 0) {
                    this.requestupdate(this.newcount);
                    console.log('this is the new count', this.newcount);
                }
            }, 600000);
        }
        'use strict';
    }
    requestupdate(dataget) {
        // Swal.fire( 'new request came',dataget)
        sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire({
            title: 'New Request Received' + dataget,
            text: dataget,
            icon: 'info',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Acknowledge it!'
        }).then((result) => {
            this.totalcount.count = this.oldcount.count;
            if (result.isConfirmed) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire('New request has been acknowledged.', 'success');
            }
        });
    }
}
StoreboardComponent.ɵfac = function StoreboardComponent_Factory(t) { return new (t || StoreboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_dynamic_script_loader_service__WEBPACK_IMPORTED_MODULE_3__["DynamicScriptLoaderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_excelservice_service__WEBPACK_IMPORTED_MODULE_6__["ExcelService"])); };
StoreboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StoreboardComponent, selectors: [["app-storeboard"]], viewQuery: function StoreboardComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.calendarComponent = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.chart = _t.first);
    } }, decls: 41, vars: 4, consts: [[1, "content"], [1, "container-fluid"], [1, "row"], [1, "col-lg-3", "col-sm-6"], [1, "info-box7", "l-bg-green", "order-info-box7"], [1, "info-box7-block"], [1, "m-b-20"], [1, "text-right"], [1, "fas", "fa-cart-plus", "pull-left"], [1, "info-box7", "l-bg-purple", "order-info-box7"], [1, "fas", "fa-business-time", "pull-left"], [1, "info-box7", "l-bg-orange", "order-info-box7"], [1, "fas", "fa-chart-line", "pull-left"], [1, "info-box7", "l-bg-cyan", "order-info-box7"], [1, "fas", "fa-dollar-sign", "pull-left"], [1, "row", "clearfix"]], template: function StoreboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h4", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Total Clustes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h2", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h4", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Total Projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h2", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "h4", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Total Owners ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "h2", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "h4", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Total Topics");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "h2", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.totalcount.count, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.penddingcount.count);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.Rejected.count);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.completed.count);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0b3JlbWFuYWdlbWVudC9zdG9yZWJvYXJkL3N0b3JlYm9hcmQuY29tcG9uZW50LnNhc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StoreboardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-storeboard',
                templateUrl: './storeboard.component.html',
                styleUrls: ['./storeboard.component.sass']
            }]
    }], function () { return [{ type: _services_dynamic_script_loader_service__WEBPACK_IMPORTED_MODULE_3__["DynamicScriptLoaderService"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] }, { type: _excelservice_service__WEBPACK_IMPORTED_MODULE_6__["ExcelService"] }]; }, { calendarComponent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['calendar', { static: false }]
        }], chart: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['chart', { static: false }]
        }] }); })();


/***/ }),

/***/ "nALV":
/*!************************************************************!*\
  !*** ./src/app/storemanagement/citrix/citrix.component.ts ***!
  \************************************************************/
/*! exports provided: CITRIXComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CITRIXComponent", function() { return CITRIXComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _fullcalendar_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fullcalendar/angular */ "IvIE");
/* harmony import */ var _fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fullcalendar/daygrid */ "iOEq");
/* harmony import */ var _services_dynamic_script_loader_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/dynamic-script-loader.service */ "cpNI");
/* harmony import */ var ng_apexcharts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-apexcharts */ "CV0D");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _excelservice_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../excelservice.service */ "kVBW");











const _c0 = ["calendar"];
const _c1 = ["chart"];
var d = new Date(), date = d.getDate(), month = d.getMonth(), year = d.getFullYear();
class CITRIXComponent {
    constructor(dynamicScriptLoader, http, excelService) {
        this.dynamicScriptLoader = dynamicScriptLoader;
        this.http = http;
        this.excelService = excelService;
        this.calendarVisible = true;
        this.calendarPlugins = [_fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_2__["default"]];
        this.calendarWeekends = true;
        this.calendarEvents = [
            {
                title: 'Conference',
                start: new Date(year, month, date - 5, 0, 0),
                end: new Date(year, month, date - 2, 0, 0),
                backgroundColor: '#00FFFF'
            },
            {
                title: 'Holiday',
                start: new Date(year, month, date - 10, 9, 0),
                end: new Date(year, month, date - 8, 0, 0),
                backgroundColor: '#F3565D'
            },
            {
                title: 'Repeating Event',
                start: new Date(year, month, date + 5, 16, 0),
                allDay: !1,
                backgroundColor: '#1bbc9b'
            },
            {
                title: 'Meeting',
                start: new Date(year, month, date, 10, 30),
                allDay: !1
            },
            {
                title: 'Result Day',
                start: new Date(year, month, date + 7, 19, 0),
                end: new Date(year, month, date + 1, 22, 30),
                backgroundColor: '#DC35A9',
                allDay: !1
            },
            {
                title: 'Click for Google',
                start: new Date(year, month, 29),
                end: new Date(year, month, 30),
                backgroundColor: '#9b59b6',
                url: 'http://google.com/'
            }
        ];
        this.totalcount = {};
        this.penddingcount = {};
        this.Rejected = {};
        this.completed = {};
        this.totalpricehigh = {};
        this.totalpricelow = {};
        this.totalordershigh = {};
        this.totalorderslow = {};
        this.currentDate = new Date();
        // area chart start
        this.areaChartOptions = {
            responsive: true,
            tooltips: {
                mode: 'index',
                titleFontSize: 12,
                titleFontColor: '#000',
                bodyFontColor: '#000',
                backgroundColor: '#fff',
                titleFontFamily: 'Poppins',
                bodyFontFamily: 'Poppins',
                cornerRadius: 3,
                intersect: false
            },
            legend: {
                display: false,
                labels: {
                    usePointStyle: true,
                    fontFamily: 'Poppins'
                }
            },
            scales: {
                xAxes: [
                    {
                        display: true,
                        gridLines: {
                            display: false,
                            drawBorder: false
                        },
                        scaleLabel: {
                            display: false,
                            labelString: 'Month'
                        },
                        ticks: {
                            fontFamily: 'Poppins',
                            fontColor: '#9aa0ac' // Font Color
                        }
                    }
                ],
                yAxes: [
                    {
                        display: true,
                        gridLines: {
                            display: false,
                            drawBorder: false
                        },
                        scaleLabel: {
                            display: true,
                            labelString: 'Value',
                            fontFamily: 'Poppins'
                        },
                        ticks: {
                            fontFamily: 'Poppins',
                            fontColor: '#9aa0ac' // Font Color
                        }
                    }
                ]
            },
            title: {
                display: false,
                text: 'Normal Legend'
            }
        };
        this.areaChartData = [
            {
                label: 'Foods',
                data: [0, 105, 190, 140, 270],
                borderWidth: 2,
                pointStyle: 'circle',
                pointRadius: 3,
                pointBorderColor: 'transparent'
            },
            {
                label: 'Electronics',
                data: [0, 152, 80, 250, 190],
                borderWidth: 2,
                pointStyle: 'circle',
                pointRadius: 3,
                pointBorderColor: 'transparent'
            }
        ];
        this.areaChartLabels = ['January', 'February', 'March', 'April', 'May'];
        // area chart end
        // barChart
        this.barChartOptions = {
            scaleShowVerticalLines: false,
            responsive: true,
            legend: {
                display: true,
                labels: {
                    fontColor: '#9aa0ac'
                }
            },
            scales: {
                xAxes: [
                    {
                        ticks: {
                            fontFamily: 'Poppins',
                            fontColor: '#9aa0ac' // Font Color
                        }
                    }
                ],
                yAxes: [
                    {
                        ticks: {
                            beginAtZero: true,
                            fontFamily: 'Poppins',
                            fontColor: '#9aa0ac' // Font Color
                        }
                    }
                ]
            }
        };
        this.barChartLabels = [
            '2001',
            '2002',
            '2003',
            '2004',
            '2005',
            '2006',
            '2007'
        ];
        this.barChartType = 'bar';
        this.barChartLegend = true;
        this.barChartData = [
            { data: [58, 60, 74, 78, 55, 64, 42], label: 'Series A' },
            { data: [30, 45, 51, 22, 79, 35, 82], label: 'Series B' }
        ];
        this.barChartColors = [
            {
                backgroundColor: 'rgba(109, 144, 232, 0.8)',
                borderColor: 'rgba(109, 144, 232,1)',
                pointBackgroundColor: 'rgba(109, 144, 232,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(109, 144, 232,0.8)'
            },
            {
                backgroundColor: 'rgba(255, 140, 96, 0.8)',
                borderColor: 'rgba(255, 140, 96,1)',
                pointBackgroundColor: 'rgba(255, 140, 96,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(255, 140, 96,0.8)'
            }
        ];
        this.radarChartLabels = [
            'A1',
            'A2',
            'A3',
            'A4',
            'A5',
            'A6',
            'A7'
        ];
    }
    // end bar chart
    getDatatotalcount() {
        this.http.get(this.mainurl + 'requestrountcompleted').subscribe(res => {
            this.totalcount = res;
            console.log(this.totalcount.count);
        });
    }
    getDatapenddingcount() {
        console.log(this.totalcount.count + ' 1111111111111111111111111111111111' + this.completed.count);
        // this.penddingcount = parseInt(this.totalcount.count) - parseInt(this.completed.count);
        this.http.get(this.mainurl + 'requestakgrountpendding').subscribe(res => {
            this.penddingcount = res;
        });
    }
    getDataRejectedcount() {
        this.http.get(this.mainurl + 'requestrountRejected').subscribe(res => {
            this.Rejected = res;
        });
    }
    getDatacompletedcount() {
        this.http.get(this.mainurl + 'requestakgrountcompleted').subscribe(res => {
            this.completed = res;
        });
    }
    ///////////////////////////////////////////////
    // totalpricehighdownload(){
    //   this.AppdataService.downloadFile(this.totalpricehigh, 'jsontocsv');
    // }
    // totalpricelowdownload(){
    //   this.AppdataService.downloadFile(this.totalpricelow, 'jsontocsv');
    // }
    // totalordershighdownload(){
    //   this.AppdataService.downloadFile(this.totalordershigh, 'jsontocsv');
    // }
    // totalorderslowdownload(){
    //   this.AppdataService.downloadFile(this.totalorderslow, 'jsontocsv');
    // }
    exportAsXLSX1() {
        this.excelService.exportAsExcelFile(this.totalordershigh, 'Price -Fast Moving' + this.totalpricehigh);
    }
    exportAsXLSX2() {
        this.excelService.exportAsExcelFile(this.totalordershigh, 'Price -slow Moving' + this.totalpricelow);
    }
    exportAsXLSX3() {
        this.excelService.exportAsExcelFile(this.totalordershigh, 'Item -Fast Moving' + this.totalordershigh);
    }
    exportAsXLSX4() {
        this.excelService.exportAsExcelFile(this.totalordershigh, 'Item -slow Moving' + this.totalorderslow);
    }
    ngOnInit() {
        this.mainurl = localStorage.getItem('mainurl');
        this.getDatatotalcount();
        this.getDatapenddingcount();
        this.getDataRejectedcount();
        this.getDatacompletedcount();
        // this.penddingcount = parseInt(this.totalcount.count) - parseInt(this.completed.count);
        'use strict';
        this.chart1();
        this.chart2();
    }
}
CITRIXComponent.ɵfac = function CITRIXComponent_Factory(t) { return new (t || CITRIXComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_dynamic_script_loader_service__WEBPACK_IMPORTED_MODULE_3__["DynamicScriptLoaderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_excelservice_service__WEBPACK_IMPORTED_MODULE_6__["ExcelService"])); };
CITRIXComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CITRIXComponent, selectors: [["app-citrix"]], viewQuery: function CITRIXComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.calendarComponent = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.chart = _t.first);
    } }, decls: 30, vars: 3, consts: [[1, "content"], [1, "container-fluid"], [1, "row"], [1, "col-lg-3", "col-sm-6"], [1, "info-box7", "l-bg-green", "order-info-box7"], [1, "info-box7-block"], [1, "m-b-20"], [1, "text-right"], [1, "fas", "fa-cart-plus", "pull-left"], [1, "info-box7", "l-bg-purple", "order-info-box7"], [1, "fas", "fa-business-time", "pull-left"], [1, "info-box7", "l-bg-cyan", "order-info-box7"], [1, "fas", "fa-dollar-sign", "pull-left"]], template: function CITRIXComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h4", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Total Request");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h2", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h4", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Pending Request");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h2", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "h4", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Completed Request");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "h2", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.totalcount.count, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.penddingcount.count);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.completed.count);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0b3JlbWFuYWdlbWVudC9jaXRyaXgvY2l0cml4LmNvbXBvbmVudC5zYXNzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CITRIXComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-citrix',
                templateUrl: './citrix.component.html',
                styleUrls: ['./citrix.component.sass']
            }]
    }], function () { return [{ type: _services_dynamic_script_loader_service__WEBPACK_IMPORTED_MODULE_3__["DynamicScriptLoaderService"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] }, { type: _excelservice_service__WEBPACK_IMPORTED_MODULE_6__["ExcelService"] }]; }, { calendarComponent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['calendar', { static: false }]
        }], chart: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['chart', { static: false }]
        }] }); })();


/***/ }),

/***/ "qHo5":
/*!************************************************************!*\
  !*** ./src/app/storemanagement/itemtsn/my-date-formats.ts ***!
  \************************************************************/
/*! exports provided: MY_DATE_FORMATS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MY_DATE_FORMATS", function() { return MY_DATE_FORMATS; });
const MY_DATE_FORMATS = {
    parse: {
        dateInput: 'DD-MM-YYYY',
    },
    display: {
        dateInput: 'MMM DD, YYYY'
    },
};


/***/ })

}]);
//# sourceMappingURL=storemanagement-storemanagement-module-es2015.js.map