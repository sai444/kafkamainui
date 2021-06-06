(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["configs-configs-module"],{

/***/ "6Qi4":
/*!******************************************************************!*\
  !*** ./src/app/configs/warehousetype/warehousetype.component.ts ***!
  \******************************************************************/
/*! exports provided: WarehousetypeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WarehousetypeComponent", function() { return WarehousetypeComponent; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "lDzL");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");















const _c0 = ["roleTemplate"];
const _c1 = ["closeAddModal"];
const _c2 = ["closeEditModal"];
function WarehousetypeComponent_ng_template_30_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function WarehousetypeComponent_ng_template_30_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10); const row_r7 = ctx.row; const rowIndex_r8 = ctx.rowIndex; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r9.editRow(row_r7, rowIndex_r8); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "i", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "mode_edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function WarehousetypeComponent_ng_template_30_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10); const row_r7 = ctx.row; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r11.deleteRow(row_r7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "i", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function WarehousetypeComponent_mat_error_54_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " type is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function WarehousetypeComponent_mat_error_88_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " typeis required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class WarehousetypeComponent {
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
            { name: 'type' }
        ];
        // Table 2
        this.tb2columns = [
            { name: 'id' },
            { name: 'type' }
        ];
        this.tb2data = [];
        this.tb2filteredData = [];
        this.editForm = this.fb.group({
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            type: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
        });
    }
    ngOnInit() {
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
            type: [''],
            id: [''],
        });
    }
    fetch(cb) {
        const req = new XMLHttpRequest();
        req.open('GET', 'http://localhost:3000/warehouse_type');
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
            type: row.type,
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
        this.http.delete('http://localhost:3000/warehouse_type/' + row.id).subscribe();
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
                value.type = form.value.type;
            }
            let empdata = {
                'type': form.value.type,
            };
            this.http.put('http://localhost:3000/warehouse_type/' + form.value.id, empdata).subscribe();
            this.closeEditModal.nativeElement.click();
            return true;
        });
        this.showNotification('bg-black', 'Edit Record Successfully', 'bottom', 'right');
    }
    onAddRowSave(form) {
        this.data.push(form.value);
        this.http.post('http://localhost:3000/warehouse_type', form.value).subscribe();
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
WarehousetypeComponent.ɵfac = function WarehousetypeComponent_Factory(t) { return new (t || WarehousetypeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
WarehousetypeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: WarehousetypeComponent, selectors: [["app-warehousetype"]], viewQuery: function WarehousetypeComponent_Query(rf, ctx) { if (rf & 1) {
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
    } }, decls: 95, vars: 17, consts: [[1, "content"], [1, "container-fluid"], [1, "row", "clearfix"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12"], [1, "card"], [1, "body"], [1, "row"], [1, "col-sm-12"], [1, "ngxTableHeader"], [1, "header-buttons-left", "ml-0"], [1, "dropdown"], [1, "dropdown", "m-l-20"], ["for", "search-input"], [1, "material-icons", "search-icon"], ["placeholder", "Search", "type", "text", "aria-label", "Search box", 1, "browser-default", "search-field", 3, "keyup"], [1, "header-buttons", "m-r-20"], [1, "icon-button-demo"], ["mat-mini-fab", "", "color", "primary", "data-toggle", "modal", "data-target", "#addModal", 3, "click"], [1, "col-white"], [1, "material", 3, "rows", "columns", "sortType", "columnMode", "headerHeight", "footerHeight", "rowHeight", "limit"], ["table", ""], ["name", "id", 3, "width"], ["name", "type", 3, "width"], ["name", "Actions", "sortable", "false", 3, "width"], ["ngx-datatable-cell-template", ""], ["id", "addModal", "tabindex", "-1", "role", "dialog", "aria-labelledby", "exampleModalLabel", "aria-hidden", "true", 1, "modal", "fade"], ["role", "document", 1, "modal-dialog"], [1, "modal-content"], [1, "modal-header"], [1, "editRowModal"], [1, "modal-header", "clearfix"], [1, "modal-about"], [1, "font-weight-bold", "p-t-10", "font-17"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "btn", "p-t-10", "modal-close-button"], ["closeAddModal", ""], [1, "material-icons"], [1, "modal-body"], [1, "register-form", "m-4", 3, "formGroup", "ngSubmit"], [1, "input-field", "col", "s12", "d-none"], ["formControlName", "id", "type", "hidden", 1, "form-control"], [1, "col-xl-6", "col-lg-6", "col-md-12", "col-sm-12", "mb-2"], ["appearance", "outline", 1, "example-full-width"], ["matInput", "", "formControlName", "type"], [4, "ngIf"], ["matSuffix", ""], [1, "col-xl-12", "col-lg-12", "col-md-12", "col-sm-12", "mb-2"], ["mat-raised-button", "", "color", "primary", 1, "mr-3", 3, "disabled"], ["type", "button", "mat-button", "", "data-dismiss", "modal"], ["id", "editModal", "tabindex", "-1", "role", "dialog", "aria-labelledby", "exampleModalLabel", "aria-hidden", "true", 1, "modal", "fade"], ["closeEditModal", ""], [3, "formGroup", "ngSubmit"], ["matInput", "", "formControlName", "type", "required", ""], [1, "modal-footer"], [1, "button-demo"], ["type", "submit", 1, "btn", "btn-outline-success", "btn-border-radius"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-outline-warning", "btn-border-radius"], ["data-toggle", "modal", "data-target", "#editModal", 1, "btn", "tblActnBtn", "h-auto", 3, "click"], [1, "btn", "tblActnBtn", "h-auto", 3, "click"]], template: function WarehousetypeComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "WareHouse Type");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keyup", function WarehousetypeComponent_Template_input_keyup_18_listener($event) { return ctx.filterDatatable($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "ul", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function WarehousetypeComponent_Template_button_click_22_listener() { return ctx.addRow(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "mat-icon", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "add");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "ngx-datatable", 19, 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "ngx-datatable-column", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](28, "ngx-datatable-column", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "ngx-datatable-column", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](30, WarehousetypeComponent_ng_template_30_Template, 7, 0, "ng-template", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, " New Warehouse Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "button", 33, 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "i", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "clear");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "form", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function WarehousetypeComponent_Template_form_ngSubmit_45_listener() { return ctx.onAddRowSave(ctx.register); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](47, "input", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "mat-form-field", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, "Warehouse Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](53, "input", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](54, WarehousetypeComponent_mat_error_54_Template, 2, 0, "mat-error", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "mat-icon", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56, "face");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "button", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](60, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "button", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](62, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](71);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "button", 33, 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "i", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](75, "clear");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "form", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function WarehousetypeComponent_Template_form_ngSubmit_77_listener() { return ctx.onEditSave(ctx.editForm); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](79, "input", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "mat-form-field", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](84, "Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](85, "input", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "mat-icon", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](87, "face");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](88, WarehousetypeComponent_mat_error_88_Template, 2, 0, "mat-error", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](90, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](91, "button", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](92, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](93, "button", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](94, "Cancel");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("rows", ctx.data)("columns", ctx.columns)("sortType", "multi")("columnMode", "force")("headerHeight", 50)("footerHeight", 50)("rowHeight", "60")("limit", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("width", 130);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("width", 130);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("width", 120);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.register);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.register.get("type").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx.register.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.selectedRowData == null ? null : ctx.selectedRowData.type, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.editForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.editForm.get("type").hasError("required"));
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__["DatatableComponent"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__["DataTableColumnDirective"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__["DataTableColumnCellDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInput"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatSuffix"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatError"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbmZpZ3Mvd2FyZWhvdXNldHlwZS93YXJlaG91c2V0eXBlLmNvbXBvbmVudC5zYXNzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](WarehousetypeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-warehousetype',
                templateUrl: './warehousetype.component.html',
                styleUrls: ['./warehousetype.component.sass']
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

/***/ "LteH":
/*!************************************************************!*\
  !*** ./src/app/configs/warehouses/warehouses.component.ts ***!
  \************************************************************/
/*! exports provided: WarehousesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WarehousesComponent", function() { return WarehousesComponent; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "lDzL");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");















const _c0 = ["roleTemplate"];
const _c1 = ["closeAddModal"];
const _c2 = ["closeEditModal"];
function WarehousesComponent_ng_template_34_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function WarehousesComponent_ng_template_34_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r18); const row_r15 = ctx.row; const rowIndex_r16 = ctx.rowIndex; const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r17.editRow(row_r15, rowIndex_r16); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "i", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "mode_edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function WarehousesComponent_ng_template_34_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r18); const row_r15 = ctx.row; const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r19.deleteRow(row_r15); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "i", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function WarehousesComponent_mat_error_58_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " name is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function WarehousesComponent_mat_error_66_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " location is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function WarehousesComponent_mat_error_74_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " latitude is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function WarehousesComponent_mat_error_82_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " longitude is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function WarehousesComponent_mat_error_90_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " whtype is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function WarehousesComponent_mat_error_124_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " name required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function WarehousesComponent_mat_error_132_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " location required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function WarehousesComponent_mat_error_140_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " latitude required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function WarehousesComponent_mat_error_148_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " longitude required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function WarehousesComponent_mat_error_156_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " whtype required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class WarehousesComponent {
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
            { name: 'latitude' },
            { name: 'longitude' },
            { name: 'location' },
            { name: 'name' },
            { name: 'whtype' },
        ];
        // Table 2
        this.tb2columns = [
            { name: 'id' },
            { name: 'latitude' },
            { name: 'longitude' },
            { name: 'location' },
            { name: 'name' },
            { name: 'whtype' },
        ];
        this.tb2data = [];
        this.tb2filteredData = [];
        this.editForm = this.fb.group({
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            latitude: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            longitude: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            location: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            whtype: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
        });
    }
    ngOnInit() {
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
            latitude: [''],
            id: [''],
            longitude: [''],
            location: [''],
            name: [''],
            whtype: [''],
        });
    }
    fetch(cb) {
        const req = new XMLHttpRequest();
        req.open('GET', 'http://localhost:3000/warehouse');
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
            latitude: row.latitude,
            longitude: row.longitude,
            location: row.location,
            name: row.name,
            whtype: row.whtype,
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
        this.http.delete('http://localhost:3000/warehouse/' + row.id).subscribe();
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
                value.type = form.value.type;
            }
            let empdata = {
                'latitude': form.value.latitude,
                'longitude': form.value.longitude,
                'location': form.value.location,
                'name': form.value.name,
                'whtype': form.value.whtype,
            };
            this.http.put('http://localhost:3000/warehouse/' + form.value.id, empdata).subscribe();
            this.closeEditModal.nativeElement.click();
            return true;
        });
        this.showNotification('bg-black', 'Edit Record Successfully', 'bottom', 'right');
    }
    onAddRowSave(form) {
        this.data.push(form.value);
        this.http.post('http://localhost:3000/warehouse', form.value).subscribe();
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
WarehousesComponent.ɵfac = function WarehousesComponent_Factory(t) { return new (t || WarehousesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
WarehousesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: WarehousesComponent, selectors: [["app-warehouses"]], viewQuery: function WarehousesComponent_Query(rf, ctx) { if (rf & 1) {
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
    } }, decls: 163, vars: 29, consts: [[1, "content"], [1, "container-fluid"], [1, "row", "clearfix"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12"], [1, "card"], [1, "body"], [1, "row"], [1, "col-sm-12"], [1, "ngxTableHeader"], [1, "header-buttons-left", "ml-0"], [1, "dropdown"], [1, "dropdown", "m-l-20"], ["for", "search-input"], [1, "material-icons", "search-icon"], ["placeholder", "Search", "type", "text", "aria-label", "Search box", 1, "browser-default", "search-field", 3, "keyup"], [1, "header-buttons", "m-r-20"], [1, "icon-button-demo"], ["mat-mini-fab", "", "color", "primary", "data-toggle", "modal", "data-target", "#addModal", 3, "click"], [1, "col-white"], [1, "material", 3, "rows", "columns", "sortType", "columnMode", "headerHeight", "footerHeight", "rowHeight", "limit"], ["table", ""], ["name", "id", 3, "width"], ["name", "latitude", 3, "width"], ["name", "location", 3, "width"], ["name", "longitude", 3, "width"], ["name", "name", 3, "width"], ["name", "whtype", 3, "width"], ["name", "Actions", "sortable", "false", 3, "width"], ["ngx-datatable-cell-template", ""], ["id", "addModal", "tabindex", "-1", "role", "dialog", "aria-labelledby", "exampleModalLabel", "aria-hidden", "true", 1, "modal", "fade"], ["role", "document", 1, "modal-dialog"], [1, "modal-content"], [1, "modal-header"], [1, "editRowModal"], [1, "modal-header", "clearfix"], [1, "modal-about"], [1, "font-weight-bold", "p-t-10", "font-17"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "btn", "p-t-10", "modal-close-button"], ["closeAddModal", ""], [1, "material-icons"], [1, "modal-body"], [1, "register-form", "m-4", 3, "formGroup", "ngSubmit"], [1, "input-field", "col", "s12", "d-none"], ["formControlName", "id", "type", "hidden", 1, "form-control"], [1, "col-xl-6", "col-lg-6", "col-md-12", "col-sm-12", "mb-2"], ["appearance", "outline", 1, "example-full-width"], ["matInput", "", "formControlName", "name"], [4, "ngIf"], ["matSuffix", ""], ["matInput", "", "formControlName", "location"], ["matInput", "", "formControlName", "latitude"], ["matInput", "", "formControlName", "longitude"], ["matInput", "", "formControlName", "whtype"], [1, "col-xl-12", "col-lg-12", "col-md-12", "col-sm-12", "mb-2"], ["mat-raised-button", "", "color", "primary", 1, "mr-3", 3, "disabled"], ["type", "button", "mat-button", "", "data-dismiss", "modal"], ["id", "editModal", "tabindex", "-1", "role", "dialog", "aria-labelledby", "exampleModalLabel", "aria-hidden", "true", 1, "modal", "fade"], ["closeEditModal", ""], [3, "formGroup", "ngSubmit"], ["matInput", "", "formControlName", "name", "required", ""], ["matInput", "", "formControlName", "location", "required", ""], ["matInput", "", "formControlName", "latitude", "required", ""], ["matInput", "", "formControlName", "longitude", "required", ""], ["matInput", "", "formControlName", "whtype", "required", ""], [1, "modal-footer"], [1, "button-demo"], ["type", "submit", 1, "btn", "btn-outline-success", "btn-border-radius"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-outline-warning", "btn-border-radius"], ["data-toggle", "modal", "data-target", "#editModal", 1, "btn", "tblActnBtn", "h-auto", 3, "click"], [1, "btn", "tblActnBtn", "h-auto", 3, "click"]], template: function WarehousesComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "WareHouse ");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keyup", function WarehousesComponent_Template_input_keyup_18_listener($event) { return ctx.filterDatatable($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "ul", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function WarehousesComponent_Template_button_click_22_listener() { return ctx.addRow(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "mat-icon", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "add");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "ngx-datatable", 19, 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "ngx-datatable-column", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](28, "ngx-datatable-column", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "ngx-datatable-column", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "ngx-datatable-column", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](31, "ngx-datatable-column", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](32, "ngx-datatable-column", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "ngx-datatable-column", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](34, WarehousesComponent_ng_template_34_Template, 7, 0, "ng-template", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, " New Warehouse ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "button", 37, 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "i", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, "clear");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "form", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function WarehousesComponent_Template_form_ngSubmit_49_listener() { return ctx.onAddRowSave(ctx.register); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](51, "input", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "mat-form-field", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56, "Warehouse name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](57, "input", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](58, WarehousesComponent_mat_error_58_Template, 2, 0, "mat-error", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "mat-icon", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](60, "face");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "mat-form-field", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](64, "location");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](65, "input", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](66, WarehousesComponent_mat_error_66_Template, 2, 0, "mat-error", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "mat-icon", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](68, "face");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "mat-form-field", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](72, "latitude");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](73, "input", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](74, WarehousesComponent_mat_error_74_Template, 2, 0, "mat-error", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "mat-icon", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](76, "face");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "mat-form-field", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](80, "longitude");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](81, "input", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](82, WarehousesComponent_mat_error_82_Template, 2, 0, "mat-error", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "mat-icon", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](84, "face");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "mat-form-field", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](88, "whtype");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](89, "input", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](90, WarehousesComponent_mat_error_90_Template, 2, 0, "mat-error", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](91, "mat-icon", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](92, "face");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](93, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](94, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](95, "button", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](96, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](97, "button", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](98, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](99, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](100, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](101, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](102, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](103, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](104, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](105, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](106, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](107);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](108, "button", 37, 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](110, "i", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](111, "clear");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](112, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](113, "form", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function WarehousesComponent_Template_form_ngSubmit_113_listener() { return ctx.onEditSave(ctx.editForm); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](114, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](115, "input", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](116, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](117, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](118, "mat-form-field", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](119, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](120, "name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](121, "input", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](122, "mat-icon", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](123, "face");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](124, WarehousesComponent_mat_error_124_Template, 2, 0, "mat-error", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](125, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](126, "mat-form-field", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](127, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](128, "location");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](129, "input", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](130, "mat-icon", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](131, "face");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](132, WarehousesComponent_mat_error_132_Template, 2, 0, "mat-error", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](133, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](134, "mat-form-field", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](135, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](136, "latitude");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](137, "input", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](138, "mat-icon", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](139, "face");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](140, WarehousesComponent_mat_error_140_Template, 2, 0, "mat-error", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](141, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](142, "mat-form-field", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](143, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](144, "longitude");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](145, "input", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](146, "mat-icon", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](147, "face");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](148, WarehousesComponent_mat_error_148_Template, 2, 0, "mat-error", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](149, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](150, "mat-form-field", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](151, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](152, "whtype");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](153, "input", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](154, "mat-icon", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](155, "face");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](156, WarehousesComponent_mat_error_156_Template, 2, 0, "mat-error", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](157, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](158, "div", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](159, "button", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](160, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](161, "button", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](162, "Cancel");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("rows", ctx.data)("columns", ctx.columns)("sortType", "multi")("columnMode", "force")("headerHeight", 50)("footerHeight", 50)("rowHeight", "60")("limit", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("width", 130);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("width", 130);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("width", 130);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("width", 130);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("width", 130);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("width", 130);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("width", 120);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.register);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.register.get("name").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.register.get("location").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.register.get("latitude").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.register.get("longitude").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.register.get("whtype").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx.register.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.selectedRowData == null ? null : ctx.selectedRowData.name, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.editForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.editForm.get("name").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.editForm.get("location").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.editForm.get("latitude").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.editForm.get("longitude").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.editForm.get("whtype").hasError("required"));
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__["DatatableComponent"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__["DataTableColumnDirective"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__["DataTableColumnCellDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInput"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatSuffix"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatError"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbmZpZ3Mvd2FyZWhvdXNlcy93YXJlaG91c2VzLmNvbXBvbmVudC5zYXNzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](WarehousesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-warehouses',
                templateUrl: './warehouses.component.html',
                styleUrls: ['./warehouses.component.sass']
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

/***/ "XhNU":
/*!*******************************************!*\
  !*** ./src/app/configs/configs.module.ts ***!
  \*******************************************/
/*! exports provided: ConfigsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigsModule", function() { return ConfigsModule; });
/* harmony import */ var _channels_channels_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./channels/channels.component */ "EC6K");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _configs_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./configs.component */ "nnqf");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-ng-autocomplete */ "bH2/");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "lDzL");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var ngx_material_file_input__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ngx-material-file-input */ "7ZcW");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/radio */ "QibW");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _warehousetype_warehousetype_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./warehousetype/warehousetype.component */ "6Qi4");
/* harmony import */ var _warehouses_warehouses_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./warehouses/warehouses.component */ "LteH");
/* harmony import */ var _category_category_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./category/category.component */ "155N");
/* harmony import */ var _racks_racks_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./racks/racks.component */ "cJE3");
/* harmony import */ var _products_products_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./products/products.component */ "5JuC");
/* harmony import */ var _productmaster_productmaster_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./productmaster/productmaster.component */ "Dxx+");
/* harmony import */ var _configs_routing_module__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./configs.routing.module */ "KQtg");
/* harmony import */ var _reasonapp_reasonapp_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./reasonapp/reasonapp.component */ "JVUo");






























// tslint:disable-next-line: import-spacing



class ConfigsModule {
}
ConfigsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ConfigsModule });
ConfigsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function ConfigsModule_Factory(t) { return new (t || ConfigsModule)(); }, imports: [[
            angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_5__["AutocompleteLibModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _configs_routing_module__WEBPACK_IMPORTED_MODULE_30__["configsRoutingModule"],
            _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_6__["NgxDatatableModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatTableModule"],
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__["MatPaginatorModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormFieldModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_11__["MatSnackBarModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIconModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_15__["MatSelectModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_16__["MatCardModule"],
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__["MatDatepickerModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__["MatDialogModule"],
            _angular_material_sort__WEBPACK_IMPORTED_MODULE_19__["MatSortModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_20__["MatToolbarModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_14__["MatCheckboxModule"],
            ngx_material_file_input__WEBPACK_IMPORTED_MODULE_21__["MaterialFileInputModule"],
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_22__["MatRadioModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_23__["MatMenuModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ConfigsModule, { declarations: [_configs_component__WEBPACK_IMPORTED_MODULE_3__["ConfigsComponent"], _warehousetype_warehousetype_component__WEBPACK_IMPORTED_MODULE_24__["WarehousetypeComponent"], _warehouses_warehouses_component__WEBPACK_IMPORTED_MODULE_25__["WarehousesComponent"], _category_category_component__WEBPACK_IMPORTED_MODULE_26__["CategoryComponent"], _racks_racks_component__WEBPACK_IMPORTED_MODULE_27__["RacksComponent"], _products_products_component__WEBPACK_IMPORTED_MODULE_28__["ProductsComponent"], _productmaster_productmaster_component__WEBPACK_IMPORTED_MODULE_29__["ProductmasterComponent"], _channels_channels_component__WEBPACK_IMPORTED_MODULE_0__["ChannelsComponent"], _reasonapp_reasonapp_component__WEBPACK_IMPORTED_MODULE_31__["ReasonappComponent"]], imports: [angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_5__["AutocompleteLibModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
        _configs_routing_module__WEBPACK_IMPORTED_MODULE_30__["configsRoutingModule"],
        _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_6__["NgxDatatableModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatTableModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__["MatPaginatorModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormFieldModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_11__["MatSnackBarModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIconModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_15__["MatSelectModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_16__["MatCardModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__["MatDatepickerModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__["MatDialogModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_19__["MatSortModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_20__["MatToolbarModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_14__["MatCheckboxModule"],
        ngx_material_file_input__WEBPACK_IMPORTED_MODULE_21__["MaterialFileInputModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_22__["MatRadioModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_23__["MatMenuModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ConfigsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                // tslint:disable-next-line: max-line-length
                declarations: [_configs_component__WEBPACK_IMPORTED_MODULE_3__["ConfigsComponent"], _warehousetype_warehousetype_component__WEBPACK_IMPORTED_MODULE_24__["WarehousetypeComponent"], _warehouses_warehouses_component__WEBPACK_IMPORTED_MODULE_25__["WarehousesComponent"], _category_category_component__WEBPACK_IMPORTED_MODULE_26__["CategoryComponent"], _racks_racks_component__WEBPACK_IMPORTED_MODULE_27__["RacksComponent"], _products_products_component__WEBPACK_IMPORTED_MODULE_28__["ProductsComponent"], _productmaster_productmaster_component__WEBPACK_IMPORTED_MODULE_29__["ProductmasterComponent"], _channels_channels_component__WEBPACK_IMPORTED_MODULE_0__["ChannelsComponent"], _reasonapp_reasonapp_component__WEBPACK_IMPORTED_MODULE_31__["ReasonappComponent"]],
                imports: [
                    angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_5__["AutocompleteLibModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                    _configs_routing_module__WEBPACK_IMPORTED_MODULE_30__["configsRoutingModule"],
                    _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_6__["NgxDatatableModule"],
                    _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatTableModule"],
                    _angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__["MatPaginatorModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormFieldModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"],
                    _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_11__["MatSnackBarModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIconModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_15__["MatSelectModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_16__["MatCardModule"],
                    _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__["MatDatepickerModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__["MatDialogModule"],
                    _angular_material_sort__WEBPACK_IMPORTED_MODULE_19__["MatSortModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_20__["MatToolbarModule"],
                    _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_14__["MatCheckboxModule"],
                    ngx_material_file_input__WEBPACK_IMPORTED_MODULE_21__["MaterialFileInputModule"],
                    _angular_material_radio__WEBPACK_IMPORTED_MODULE_22__["MatRadioModule"],
                    _angular_material_menu__WEBPACK_IMPORTED_MODULE_23__["MatMenuModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "cJE3":
/*!**************************************************!*\
  !*** ./src/app/configs/racks/racks.component.ts ***!
  \**************************************************/
/*! exports provided: RacksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RacksComponent", function() { return RacksComponent; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "lDzL");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");















const _c0 = ["roleTemplate"];
const _c1 = ["closeAddModal"];
const _c2 = ["closeEditModal"];
function RacksComponent_ng_template_31_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RacksComponent_ng_template_31_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12); const row_r9 = ctx.row; const rowIndex_r10 = ctx.rowIndex; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r11.editRow(row_r9, rowIndex_r10); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "i", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "mode_edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RacksComponent_ng_template_31_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12); const row_r9 = ctx.row; const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r13.deleteRow(row_r9); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "i", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function RacksComponent_mat_error_55_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " location is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function RacksComponent_mat_error_63_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " tag is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function RacksComponent_mat_error_97_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " location required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function RacksComponent_mat_error_105_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " tag required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class RacksComponent {
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
            { name: 'location' },
            { name: 'tag' }
        ];
        // Table 2
        this.tb2columns = [
            { name: 'id' },
            { name: 'location' },
            { name: 'tag' }
        ];
        this.tb2data = [];
        this.tb2filteredData = [];
        this.editForm = this.fb.group({
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            location: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            tag: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
        });
    }
    ngOnInit() {
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
            location: [''],
            id: [''],
            tag: [''],
        });
    }
    fetch(cb) {
        const req = new XMLHttpRequest();
        req.open('GET', 'http://localhost:3000/rack');
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
            tag: row.tag,
            location: row.location,
        });
        this.selectedRowData = row;
    }
    addRow() {
        this.register.patchValue({
        // id: this.getId(10, 100),
        // location: this.location
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
        this.http.delete('http://localhost:3000/rack/' + row.id).subscribe();
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
                value.type = form.value.type;
            }
            let empdata = {
                'type': form.value.type,
            };
            this.http.put('http://localhost:3000/rack/' + form.value.id, empdata).subscribe();
            this.closeEditModal.nativeElement.click();
            return true;
        });
        this.showNotification('bg-black', 'Edit Record Successfully', 'bottom', 'right');
    }
    onAddRowSave(form) {
        this.data.push(form.value);
        this.http.post('http://localhost:3000/rack', form.value).subscribe();
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
RacksComponent.ɵfac = function RacksComponent_Factory(t) { return new (t || RacksComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
RacksComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: RacksComponent, selectors: [["app-racks"]], viewQuery: function RacksComponent_Query(rf, ctx) { if (rf & 1) {
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
    } }, decls: 112, vars: 20, consts: [[1, "content"], [1, "container-fluid"], [1, "row", "clearfix"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12"], [1, "card"], [1, "body"], [1, "row"], [1, "col-sm-12"], [1, "ngxTableHeader"], [1, "header-buttons-left", "ml-0"], [1, "dropdown"], [1, "dropdown", "m-l-20"], ["for", "search-input"], [1, "material-icons", "search-icon"], ["placeholder", "Search", "type", "text", "aria-label", "Search box", 1, "browser-default", "search-field", 3, "keyup"], [1, "header-buttons", "m-r-20"], [1, "icon-button-demo"], ["mat-mini-fab", "", "color", "primary", "data-toggle", "modal", "data-target", "#addModal", 3, "click"], [1, "col-white"], [1, "material", 3, "rows", "columns", "sortType", "columnMode", "headerHeight", "footerHeight", "rowHeight", "limit"], ["table", ""], ["name", "id", 3, "width"], ["name", "location", 3, "width"], ["name", "tag", 3, "width"], ["name", "Actions", "sortable", "false", 3, "width"], ["ngx-datatable-cell-template", ""], ["id", "addModal", "tabindex", "-1", "role", "dialog", "aria-labelledby", "exampleModalLabel", "aria-hidden", "true", 1, "modal", "fade"], ["role", "document", 1, "modal-dialog"], [1, "modal-content"], [1, "modal-header"], [1, "editRowModal"], [1, "modal-header", "clearfix"], [1, "modal-about"], [1, "font-weight-bold", "p-t-10", "font-17"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "btn", "p-t-10", "modal-close-button"], ["closeAddModal", ""], [1, "material-icons"], [1, "modal-body"], [1, "register-form", "m-4", 3, "formGroup", "ngSubmit"], [1, "input-field", "col", "s12", "d-none"], ["formControlName", "id", "type", "hidden", 1, "form-control"], [1, "col-xl-6", "col-lg-6", "col-md-12", "col-sm-12", "mb-2"], ["appearance", "outline", 1, "example-full-width"], ["matInput", "", "formControlName", "location"], [4, "ngIf"], ["matSuffix", ""], ["matInput", "", "formControlName", "tag"], [1, "col-xl-12", "col-lg-12", "col-md-12", "col-sm-12", "mb-2"], ["mat-raised-button", "", "color", "primary", 1, "mr-3", 3, "disabled"], ["type", "button", "mat-button", "", "data-dismiss", "modal"], ["id", "editModal", "tabindex", "-1", "role", "dialog", "aria-labelledby", "exampleModalLabel", "aria-hidden", "true", 1, "modal", "fade"], ["closeEditModal", ""], [3, "formGroup", "ngSubmit"], ["matInput", "", "formControlName", "location", "required", ""], ["matInput", "", "formControlName", "tag", "required", ""], [1, "modal-footer"], [1, "button-demo"], ["type", "submit", 1, "btn", "btn-outline-success", "btn-border-radius"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-outline-warning", "btn-border-radius"], ["data-toggle", "modal", "data-target", "#editModal", 1, "btn", "tblActnBtn", "h-auto", 3, "click"], [1, "btn", "tblActnBtn", "h-auto", 3, "click"]], template: function RacksComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Rack");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keyup", function RacksComponent_Template_input_keyup_18_listener($event) { return ctx.filterDatatable($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "ul", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RacksComponent_Template_button_click_22_listener() { return ctx.addRow(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "mat-icon", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "add");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "ngx-datatable", 19, 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "ngx-datatable-column", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](28, "ngx-datatable-column", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "ngx-datatable-column", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "ngx-datatable-column", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](31, RacksComponent_ng_template_31_Template, 7, 0, "ng-template", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, " Racks");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "button", 34, 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "i", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "clear");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "form", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function RacksComponent_Template_form_ngSubmit_46_listener() { return ctx.onAddRowSave(ctx.register); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](48, "input", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "mat-form-field", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, "location");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](54, "input", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](55, RacksComponent_mat_error_55_Template, 2, 0, "mat-error", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "mat-icon", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57, "face");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "mat-form-field", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61, "tag");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](62, "input", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](63, RacksComponent_mat_error_63_Template, 2, 0, "mat-error", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "mat-icon", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](65, "face");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "button", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](69, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "button", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](71, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](80);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "button", 34, 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "i", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](84, "clear");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "form", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function RacksComponent_Template_form_ngSubmit_86_listener() { return ctx.onEditSave(ctx.editForm); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](88, "input", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](90, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](91, "mat-form-field", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](93, "location");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](94, "input", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](95, "mat-icon", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](96, "face");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](97, RacksComponent_mat_error_97_Template, 2, 0, "mat-error", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](98, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](99, "mat-form-field", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](100, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](101, "tag");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](102, "input", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](103, "mat-icon", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](104, "face");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](105, RacksComponent_mat_error_105_Template, 2, 0, "mat-error", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](106, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](107, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](108, "button", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](109, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](110, "button", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](111, "Cancel");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("rows", ctx.data)("columns", ctx.columns)("sortType", "multi")("columnMode", "force")("headerHeight", 50)("footerHeight", 50)("rowHeight", "60")("limit", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("width", 130);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("width", 130);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("width", 130);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("width", 120);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.register);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.register.get("location").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.register.get("tag").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx.register.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.selectedRowData == null ? null : ctx.selectedRowData.location, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.editForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.editForm.get("location").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.editForm.get("tag").hasError("required"));
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__["DatatableComponent"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__["DataTableColumnDirective"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__["DataTableColumnCellDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInput"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatSuffix"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatError"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbmZpZ3MvcmFja3MvcmFja3MuY29tcG9uZW50LnNhc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](RacksComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-racks',
                templateUrl: './racks.component.html',
                styleUrls: ['./racks.component.sass']
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

/***/ "nnqf":
/*!**********************************************!*\
  !*** ./src/app/configs/configs.component.ts ***!
  \**********************************************/
/*! exports provided: ConfigsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigsComponent", function() { return ConfigsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class ConfigsComponent {
    constructor() { }
    ngOnInit() {
    }
}
ConfigsComponent.ɵfac = function ConfigsComponent_Factory(t) { return new (t || ConfigsComponent)(); };
ConfigsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ConfigsComponent, selectors: [["app-configs"]], decls: 0, vars: 0, template: function ConfigsComponent_Template(rf, ctx) { }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbmZpZ3MvY29uZmlncy5jb21wb25lbnQuc2FzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ConfigsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-configs',
                templateUrl: './configs.component.html',
                styleUrls: ['./configs.component.sass']
            }]
    }], function () { return []; }, null); })();


/***/ })

}]);
//# sourceMappingURL=configs-configs-module-es2015.js.map