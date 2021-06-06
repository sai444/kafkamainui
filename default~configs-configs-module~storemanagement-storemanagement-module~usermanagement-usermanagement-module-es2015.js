(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~configs-configs-module~storemanagement-storemanagement-module~usermanagement-usermanagement-module"],{

/***/ "155N":
/*!********************************************************!*\
  !*** ./src/app/configs/category/category.component.ts ***!
  \********************************************************/
/*! exports provided: CategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryComponent", function() { return CategoryComponent; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "lDzL");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "ofXK");
















const _c0 = ["roleTemplate"];
const _c1 = ["closeAddModal"];
const _c2 = ["closeEditModal"];
function CategoryComponent_ng_template_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Category");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CategoryComponent_ng_template_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Units");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CategoryComponent_ng_template_32_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CategoryComponent_ng_template_32_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r16); const row_r13 = ctx.row; const rowIndex_r14 = ctx.rowIndex; const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r15.editRow(row_r13, rowIndex_r14); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "i", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "mode_edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CategoryComponent_ng_template_32_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r16); const row_r13 = ctx.row; const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r17.deleteRow(row_r13); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "i", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CategoryComponent_mat_error_56_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " category is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CategoryComponent_mat_error_64_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " units is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CategoryComponent_mat_error_98_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " category required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CategoryComponent_mat_error_106_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " units required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class CategoryComponent {
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
            { name: 'units' },
            { name: 'category' }
        ];
        // Table 2
        this.tb2columns = [
            { name: 'id' },
            { name: 'units' },
            { name: 'category' }
        ];
        this.tb2data = [];
        this.tb2filteredData = [];
        this.editForm = this.fb.group({
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            category: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
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
            units: [''],
            id: [''],
            category: [''],
        });
    }
    fetch(cb) {
        const req = new XMLHttpRequest();
        req.open('GET', this.mainurl + 'category');
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
            category: row.category,
            units: row.units
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
        sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
            title: 'Are you sure?',
            text: 'Please check the dependency before deleted',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, keep it'
        }).then((result) => {
            if (result.value) {
                this.data = this.arrayRemove(this.data, row.id);
                this.http.delete(this.mainurl + 'category/' + row.id).subscribe();
                this.showNotification('bg-red', 'Delete Record Successfully', 'bottom', 'right');
                sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire('Deleted!', 'Seleted data is  been deleted.', 'success');
                // For more information about handling dismissals please visit
                // https://sweetalert2.github.io/#handling-dismissals
            }
            else if (result.dismiss === sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.DismissReason.cancel) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire('Cancelled', 'Seleted data is not deleted :)', 'error');
            }
        });
        // this.data = this.arrayRemove(this.data, row.id);
        // this.showNotification(
        //   'bg-red',
        //   'Delete Record Successfully',
        //   'bottom',
        //   'right'
        // );
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
                value.category = form.value.category;
                value.units = form.value.units;
            }
            let empdata = {
                'category': form.value.category,
                'units': form.value.units,
            };
            this.http.put(this.mainurl + 'category/' + form.value.id, empdata).subscribe();
            this.closeEditModal.nativeElement.click();
            return true;
        });
        this.showNotification('bg-black', 'Edit Record Successfully', 'bottom', 'right');
    }
    onAddRowSave(form) {
        this.data.push(form.value);
        this.http.post(this.mainurl + 'category', form.value).subscribe();
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
CategoryComponent.ɵfac = function CategoryComponent_Factory(t) { return new (t || CategoryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
CategoryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CategoryComponent, selectors: [["app-category"]], viewQuery: function CategoryComponent_Query(rf, ctx) { if (rf & 1) {
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
    } }, decls: 113, vars: 19, consts: [[1, "content"], [1, "container-fluid"], [1, "row", "clearfix"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12"], [1, "card"], [1, "body"], [1, "row"], [1, "col-sm-12"], [1, "ngxTableHeader"], [1, "header-buttons-left", "ml-0"], [1, "dropdown"], [1, "dropdown", "m-l-20"], ["for", "search-input"], [1, "material-icons", "search-icon"], ["placeholder", "Search", "type", "text", "aria-label", "Search box", 1, "browser-default", "search-field", 3, "keyup"], [1, "header-buttons", "m-r-20"], [1, "icon-button-demo"], ["mat-mini-fab", "", "color", "primary", "data-toggle", "modal", "data-target", "#addModal", 3, "click"], [1, "col-white"], [1, "material", 3, "rows", "columns", "sortType", "columnMode", "headerHeight", "footerHeight", "rowHeight", "limit"], ["table", ""], ["name", "category", 3, "width"], ["ngx-datatable-header-template", ""], ["name", "units", 3, "width"], ["name", "Actions", "sortable", "false", 3, "width"], ["ngx-datatable-cell-template", ""], ["id", "addModal", "tabindex", "-1", "role", "dialog", "aria-labelledby", "exampleModalLabel", "aria-hidden", "true", 1, "modal", "fade"], ["role", "document", 1, "modal-dialog"], [1, "modal-content"], [1, "modal-header"], [1, "editRowModal"], [1, "modal-header", "clearfix"], [1, "modal-about"], [1, "font-weight-bold", "p-t-10", "font-17"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "btn", "p-t-10", "modal-close-button"], ["closeAddModal", ""], [1, "material-icons"], [1, "modal-body"], [1, "register-form", "m-4", 3, "formGroup", "ngSubmit"], [1, "input-field", "col", "s12", "d-none"], ["formControlName", "id", "type", "hidden", 1, "form-control"], [1, "col-xl-6", "col-lg-6", "col-md-12", "col-sm-12", "mb-2"], ["appearance", "outline", 1, "example-full-width"], ["matInput", "", "formControlName", "category"], [4, "ngIf"], ["matSuffix", ""], ["matInput", "", "formControlName", "units"], [1, "col-xl-12", "col-lg-12", "col-md-12", "col-sm-12", "mb-2"], ["mat-raised-button", "", "color", "primary", 1, "mr-3", 3, "disabled"], ["type", "button", "mat-button", "", "data-dismiss", "modal"], ["id", "editModal", "tabindex", "-1", "role", "dialog", "aria-labelledby", "exampleModalLabel", "aria-hidden", "true", 1, "modal", "fade"], ["closeEditModal", ""], [3, "formGroup", "ngSubmit"], ["matInput", "", "formControlName", "category", "required", ""], ["matInput", "", "formControlName", "units", "required", ""], [1, "modal-footer"], [1, "button-demo"], ["type", "submit", 1, "btn", "btn-outline-success", "btn-border-radius"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-outline-warning", "btn-border-radius"], ["data-toggle", "modal", "data-target", "#editModal", 1, "btn", "tblActnBtn", "h-auto", 3, "click"], [1, "btn", "tblActnBtn", "h-auto", 3, "click"]], template: function CategoryComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Category");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keyup", function CategoryComponent_Template_input_keyup_18_listener($event) { return ctx.filterDatatable($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "ul", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CategoryComponent_Template_button_click_22_listener() { return ctx.addRow(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "mat-icon", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "add");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "ngx-datatable", 19, 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "ngx-datatable-column", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](28, CategoryComponent_ng_template_28_Template, 2, 0, "ng-template", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "ngx-datatable-column", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](30, CategoryComponent_ng_template_30_Template, 2, 0, "ng-template", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "ngx-datatable-column", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](32, CategoryComponent_ng_template_32_Template, 7, 0, "ng-template", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, " Category");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "button", 34, 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "i", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, "clear");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "form", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function CategoryComponent_Template_form_ngSubmit_47_listener() { return ctx.onAddRowSave(ctx.register); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](49, "input", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "mat-form-field", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, "Category");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](55, "input", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](56, CategoryComponent_mat_error_56_Template, 2, 0, "mat-error", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "mat-icon", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, "star");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "mat-form-field", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](62, "Units");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](63, "input", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](64, CategoryComponent_mat_error_64_Template, 2, 0, "mat-error", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "mat-icon", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](66, "star");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "button", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](70, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "button", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](72, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](81);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "button", 34, 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "i", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](85, "clear");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "form", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function CategoryComponent_Template_form_ngSubmit_87_listener() { return ctx.onEditSave(ctx.editForm); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](89, "input", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](90, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](91, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "mat-form-field", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](93, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](94, "Category");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](95, "input", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](96, "mat-icon", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](97, "star");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](98, CategoryComponent_mat_error_98_Template, 2, 0, "mat-error", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](99, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](100, "mat-form-field", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](101, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](102, "Units");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](103, "input", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](104, "mat-icon", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](105, "star");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](106, CategoryComponent_mat_error_106_Template, 2, 0, "mat-error", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](107, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](108, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](109, "button", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](110, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](111, "button", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](112, "Cancel");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("width", 130);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("width", 120);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.register);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.register.get("category").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.register.get("units").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx.register.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.selectedRowData == null ? null : ctx.selectedRowData.id, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.editForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.editForm.get("category").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.editForm.get("units").hasError("required"));
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIcon"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__["DatatableComponent"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__["DataTableColumnDirective"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__["DataTableColumnHeaderDirective"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__["DataTableColumnCellDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInput"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatSuffix"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatError"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbmZpZ3MvY2F0ZWdvcnkvY2F0ZWdvcnkuY29tcG9uZW50LnNhc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CategoryComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-category',
                templateUrl: './category.component.html',
                styleUrls: ['./category.component.sass']
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

/***/ "5JuC":
/*!********************************************************!*\
  !*** ./src/app/configs/products/products.component.ts ***!
  \********************************************************/
/*! exports provided: ProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsComponent", function() { return ProductsComponent; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-ng-autocomplete */ "bH2/");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "bTqV");














function ProductsComponent_ng_template_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "a", 48);
} if (rf & 2) {
    const item_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", item_r16.name, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
} }
function ProductsComponent_ng_template_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 48);
} if (rf & 2) {
    const notFound_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", notFound_r17, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
} }
function ProductsComponent_ng_template_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "a", 48);
} if (rf & 2) {
    const item_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", item_r18.description1, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
} }
function ProductsComponent_ng_template_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 48);
} if (rf & 2) {
    const notFound_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", notFound_r19, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
} }
function ProductsComponent_ng_template_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "a", 48);
} if (rf & 2) {
    const item_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", item_r20.description2, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
} }
function ProductsComponent_ng_template_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 48);
} if (rf & 2) {
    const notFound_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", notFound_r21, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
} }
function ProductsComponent_ng_template_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "a", 48);
} if (rf & 2) {
    const item_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", item_r22.productcode, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
} }
function ProductsComponent_ng_template_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 48);
} if (rf & 2) {
    const notFound_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", notFound_r23, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
} }
class ProductsComponent {
    constructor(fb, http, router) {
        this.fb = fb;
        this.http = http;
        this.router = router;
        this.hide = true;
        this.agree = false;
        this.empdata = {};
        this.productdata = {};
        this.getchannel = {};
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            productcode: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            description1: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            description2: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            category: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            totalorders: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            minstock: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            totalcostordered: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            purchasecost: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            rack: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            units: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            rol: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            livestock: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            safestock: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
        });
        this.itemsdata = {};
        this.today = new Date();
        this.searchMoviesCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.isLoading = false;
        this.productdataname = {};
        this.productdatadic1 = {};
        this.productdatadic2 = {};
        this.productdatacode = {};
        this.keycode = 'productcode';
        this.key1 = 'description1';
        this.key2 = 'description2';
        this.keyword = 'name';
        this.form = this.fb.group({
            id: [''],
            productcode: [''],
            name: [''],
            description: [''],
            description1: [''],
            description2: [''],
            category: [''],
            totalorders: [''],
            minstock: [''],
            totalcostordered: [''],
            purchasecost: [''],
            rack: [''],
            units: [''],
            rol: [''],
            livestock: [''],
            safestock: [''],
        });
    }
    onChangeEvent(event) {
        this.totalcost = event.target.value * this.itemsdata.purchasecost;
        console.log(this.itemsdata.purchasecost);
        console.log(this.totalcost);
    }
    itemDetails(id) {
        this.http.get(this.mainurl + 'product/' + id).subscribe(res => {
            this.itemsdata = res;
            console.log("all data for the request", this.itemsdata);
        });
    }
    ngOnInit() {
        this.userid = localStorage.getItem('userid');
        this.mainurl = localStorage.getItem('mainurl');
        this.http.get(this.mainurl + 'productcode').subscribe(res => {
            this.productdatacode = res;
            // localStorage.setItem('productdetails', JSON.stringify(this.productdata));
            console.log("all names", this.productdatacode);
        });
        this.http.get(this.mainurl + 'emp/' + this.userid).subscribe(res => {
            this.empdata = res;
            console.log("all data", this.empdata);
        });
        this.http.get(this.mainurl + 'product').subscribe(res => {
            this.productdata = res;
            // localStorage.setItem('productdetails', JSON.stringify(this.productdata));
            console.log("all data", this.productdata);
        });
        this.http.get(this.mainurl + 'productname').subscribe(res => {
            this.productdataname = res;
            // localStorage.setItem('productdetails', JSON.stringify(this.productdata));
            console.log("all names", this.productdataname);
        });
        this.http.get(this.mainurl + 'productdis1').subscribe(res => {
            this.productdatadic1 = res;
            // localStorage.setItem('productdetails', JSON.stringify(this.productdata));
            console.log("all names", this.productdatadic1);
        });
        this.http.get(this.mainurl + 'productdis2').subscribe(res => {
            this.productdatadic2 = res;
            // localStorage.setItem('productdetails', JSON.stringify(this.productdata));
            console.log("all names", this.productdatadic2);
        });
        this.http.get(this.mainurl + 'channel').subscribe(res => {
            this.getchannel = res;
            console.log("all data", this.getchannel);
        });
    }
    getdatasearch() { }
    // successAlertNotification(tag){
    //   Swal.fire('Hi', 'Congrats! operation successfull', tag)
    // }
    successAlertNotification(tag) {
        // Swal.fire( 'new request came',dataget)
        sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
            title: 'New Request Received' + tag,
            text: tag,
            icon: 'info',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Acknowledge it!'
        }).then((result) => {
            if (result.isConfirmed) {
                this.router.navigate(['/storemng/main']);
            }
        });
    }
    onEditSave() {
        sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
            title: 'Are you sure?',
            text: 'You want to edit the selected Item!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, edit it!',
            cancelButtonText: 'No, keep it'
        }).then((result) => {
            if (result.value) {
                console.log('Form Value', this.form.value);
                this.http.put(this.mainurl + 'product/' + this.form.value.id, this.form.value).subscribe();
                this.form.setValue({
                    id: '',
                    productcode: '',
                    name: '',
                    description: '',
                    description1: '',
                    description2: '',
                    category: '',
                    totalorders: '',
                    minstock: '',
                    totalcostordered: '',
                    purchasecost: '',
                    rack: '',
                    units: '',
                    rol: '',
                    livestock: '',
                    safestock: '',
                });
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire('Updated!', 'success');
                // For more information about handling dismissals please visit
                // https://sweetalert2.github.io/#handling-dismissals
            }
            else if (result.dismiss === sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.DismissReason.cancel) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire('Cancelled', 'error');
            }
        });
        //   this.router.navigateByUrl('/stockupdate', { skipLocationChange: true }).then(() => {
        //     this.router.navigate(['/stockupdate']);
        // });
        return true;
        this.showNotification('bg-black', 'Edit Record Successfully', 'bottom', 'right');
    }
    onRegister() {
        console.log('Form Value', this.form.value);
        this.onEditSave();
        this.http.post(this.mainurl + 'emprequest', this.form.value).subscribe((val) => {
            console.log("POST call successful value returned in body", val);
            this.tagresponce = val;
            //  alert(this.tagresponce.message);
            // Swal.fire( this.tagresponce.message)
            // Swal.fire({
            //   title: 'New Request Received' +this.tagresponce.message,
            //   text: '',
            //   icon: 'info',
            //   showCancelButton: true,
            //   confirmButtonColor: '#3085d6',
            //   cancelButtonColor: '#d33',
            //   confirmButtonText: 'Yes, Acknowledge it!'
            // }).then((result) => {
            //   if (result.isConfirmed) {
            //     // this.router.navigate(['/config/updateitem']);
            //   }
            // })
        }, response => {
        }, () => {
            console.log("The POST observable is now completed.");
        });
        this.data = [...this.data];
        // console.log(this.data);
        this.form.reset();
        this.closeAddModal.nativeElement.click();
        this.showNotification('bg-green', 'Add Record Successfully', 'bottom', 'right');
    }
    showNotification(arg0, arg1, arg2, arg3) {
        throw new Error('Method not implemented.');
    }
    selectEvent(item) {
        if (item) {
            console.log(item.id);
            this.itemDetails(item.id);
            this.itemcodefroms = item.id;
            console.log('this is code', this.itemcodefroms);
        }
        // do something with selected item
    }
    onChangeSearch(val) {
        // fetch remote data from here
        // And reassign the 'data' which is binded to 'data' property.
    }
    onFocused(e) {
        if (e) {
            console.log('this is selected', e.id);
            this.itemDetails(e.id);
            this.itemcodefroms = e.id;
            console.log('this is code', this.itemcodefroms);
        }
    }
}
ProductsComponent.ɵfac = function ProductsComponent_Factory(t) { return new (t || ProductsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
ProductsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ProductsComponent, selectors: [["app-products"]], decls: 158, vars: 54, consts: [[1, "content"], [1, "container-fluid"], [1, "row", "clearfix"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12"], [1, "card"], [1, "header"], [1, "header-dropdown", "m-r--5"], [1, "dropdown"], ["href", "#", "onClick", "return false;", "data-toggle", "dropdown", "role", "button", "aria-haspopup", "true", "aria-expanded", "false"], [1, "material-icons"], [1, "body"], [1, "register-form", "m-4", 3, "formGroup", "ngSubmit"], [1, "row"], [1, "col-xl-6", "col-lg-6", "col-md-12", "col-sm-12", "mb-2"], [1, "ng-autocomplete"], ["placeHolder", "Enter the Item Name", 3, "data", "searchKeyword", "itemTemplate", "notFoundTemplate", "selected", "inputChanged", "inputFocused"], ["itemTemplate", ""], ["notFoundTemplate", ""], ["placeHolder", "Enter the Item Description 1", 3, "data", "searchKeyword", "itemTemplate", "notFoundTemplate", "selected", "inputChanged", "inputFocused"], ["itemTemplates", ""], ["notFoundTemplates", ""], ["placeHolder", "Enter the item Description 2", 3, "data", "searchKeyword", "itemTemplate", "notFoundTemplate", "selected", "inputChanged", "inputFocused"], ["itemTemplates2", ""], ["notFoundTemplates2", ""], ["placeHolder", "Enter the Item Code", 3, "data", "searchKeyword", "itemTemplate", "notFoundTemplate", "selected", "inputChanged", "inputFocused"], ["itemTemplatescode", ""], ["notFoundTemplatescode", ""], [1, "col-xl-4", "col-lg-4", "col-md-12", "col-sm-12", "mb-2"], ["appearance", "outline", 1, "example-full-width"], ["matInput", "", "formControlName", "productcode", 3, "ngModel", "value", "readonly", "ngModelChange"], ["matSuffix", ""], ["matInput", "", "placeholder", "Ex. John", "formControlName", "name", 3, "ngModel", "value", "readonly", "ngModelChange"], ["matInput", "", "placeholder", "Ex. John", "formControlName", "category", 3, "ngModel", "value", "readonly", "ngModelChange"], ["matInput", "", "formControlName", "description", 3, "ngModel", "value", "readonly", "ngModelChange"], ["matInput", "", "formControlName", "description1", 3, "ngModel", "value", "readonly", "ngModelChange"], ["matInput", "", "formControlName", "description2", 3, "ngModel", "value", "readonly", "ngModelChange"], ["matInput", "", "formControlName", "livestock", 3, "ngModel", "value", "ngModelChange"], ["matInput", "", "formControlName", "minstock", 3, "ngModel", "value", "ngModelChange"], ["matInput", "", "formControlName", "safestock", 3, "ngModel", "value", "ngModelChange"], ["matInput", "", "formControlName", "rol", 3, "ngModel", "value", "ngModelChange"], ["matInput", "", "formControlName", "units", 3, "ngModel", "value", "ngModelChange"], ["matInput", "", "formControlName", "id", 3, "ngModel", "value", "readonly", "ngModelChange"], ["matInput", "", "formControlName", "rack", 3, "ngModel", "value", "ngModelChange"], ["matInput", "", "formControlName", "totalcostordered", 3, "ngModel", "value", "ngModelChange"], ["matInput", "", "formControlName", "totalorders", 3, "ngModel", "value", "ngModelChange"], [1, "col-xl-12", "col-lg-12", "col-md-12", "col-sm-12", "mb-2"], ["mat-raised-button", "", "color", "primary", 1, "mr-3"], ["type", "button", "mat-button", ""], [3, "innerHTML"]], template: function ProductsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Update Item");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, " Form");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "ul", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "more_vert");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "form", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function ProductsComponent_Template_form_ngSubmit_16_listener() { return ctx.onRegister(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "ng-autocomplete", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("selected", function ProductsComponent_Template_ng_autocomplete_selected_20_listener($event) { return ctx.selectEvent($event); })("inputChanged", function ProductsComponent_Template_ng_autocomplete_inputChanged_20_listener($event) { return ctx.onChangeSearch($event); })("inputFocused", function ProductsComponent_Template_ng_autocomplete_inputFocused_20_listener($event) { return ctx.onFocused($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, ProductsComponent_ng_template_21_Template, 1, 1, "ng-template", null, 16, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, ProductsComponent_ng_template_23_Template, 1, 1, "ng-template", null, 17, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "ng-autocomplete", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("selected", function ProductsComponent_Template_ng_autocomplete_selected_27_listener($event) { return ctx.selectEvent($event); })("inputChanged", function ProductsComponent_Template_ng_autocomplete_inputChanged_27_listener($event) { return ctx.onChangeSearch($event); })("inputFocused", function ProductsComponent_Template_ng_autocomplete_inputFocused_27_listener($event) { return ctx.onFocused($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](28, ProductsComponent_ng_template_28_Template, 1, 1, "ng-template", null, 19, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](30, ProductsComponent_ng_template_30_Template, 1, 1, "ng-template", null, 20, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "ng-autocomplete", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("selected", function ProductsComponent_Template_ng_autocomplete_selected_34_listener($event) { return ctx.selectEvent($event); })("inputChanged", function ProductsComponent_Template_ng_autocomplete_inputChanged_34_listener($event) { return ctx.onChangeSearch($event); })("inputFocused", function ProductsComponent_Template_ng_autocomplete_inputFocused_34_listener($event) { return ctx.onFocused($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](35, ProductsComponent_ng_template_35_Template, 1, 1, "ng-template", null, 22, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](37, ProductsComponent_ng_template_37_Template, 1, 1, "ng-template", null, 23, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "ng-autocomplete", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("selected", function ProductsComponent_Template_ng_autocomplete_selected_41_listener($event) { return ctx.selectEvent($event); })("inputChanged", function ProductsComponent_Template_ng_autocomplete_inputChanged_41_listener($event) { return ctx.onChangeSearch($event); })("inputFocused", function ProductsComponent_Template_ng_autocomplete_inputFocused_41_listener($event) { return ctx.onFocused($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](42, ProductsComponent_ng_template_42_Template, 1, 1, "ng-template", null, 25, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](44, ProductsComponent_ng_template_44_Template, 1, 1, "ng-template", null, 26, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "mat-form-field", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, "Item Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "input", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ProductsComponent_Template_input_ngModelChange_51_listener($event) { return ctx.itemsdata.productcode = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "mat-icon", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, "star");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "mat-form-field", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57, "Item Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "input", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ProductsComponent_Template_input_ngModelChange_58_listener($event) { return ctx.itemsdata.name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "mat-icon", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](60, "star");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "mat-form-field", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](64, "Item Category");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "input", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ProductsComponent_Template_input_ngModelChange_65_listener($event) { return ctx.itemsdata.category = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "mat-icon", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](67, "star");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "mat-form-field", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](71, "Description ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "input", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ProductsComponent_Template_input_ngModelChange_72_listener($event) { return ctx.itemsdata.description = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "mat-icon", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](74, "star");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "mat-form-field", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](78, "Description 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "input", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ProductsComponent_Template_input_ngModelChange_79_listener($event) { return ctx.itemsdata.description1 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "mat-icon", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](81, "star");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "mat-form-field", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](85, "Description 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "input", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ProductsComponent_Template_input_ngModelChange_86_listener($event) { return ctx.itemsdata.description2 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "mat-icon", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](88, "star");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](90, "mat-form-field", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](91, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](92, "Live Stock");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](93, "input", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ProductsComponent_Template_input_ngModelChange_93_listener($event) { return ctx.itemsdata.livestock = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](94, "mat-icon", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](95, "star");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](96, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](97, "mat-form-field", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](98, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](99, "Min Stock");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](100, "input", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ProductsComponent_Template_input_ngModelChange_100_listener($event) { return ctx.itemsdata.minstock = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](101, "mat-icon", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](102, "star");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](103, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](104, "mat-form-field", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](105, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](106, "Safe Stock");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](107, "input", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ProductsComponent_Template_input_ngModelChange_107_listener($event) { return ctx.itemsdata.safestock = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](108, "mat-icon", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](109, "star");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](110, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](111, "mat-form-field", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](112, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](113, "Rol Stock");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](114, "input", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ProductsComponent_Template_input_ngModelChange_114_listener($event) { return ctx.itemsdata.rol = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](115, "mat-icon", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](116, "star");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](117, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](118, "mat-form-field", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](119, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](120, "Units");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](121, "input", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ProductsComponent_Template_input_ngModelChange_121_listener($event) { return ctx.itemsdata.units = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](122, "mat-icon", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](123, "star");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](124, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](125, "mat-form-field", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](126, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](127, "Ref. ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](128, "input", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ProductsComponent_Template_input_ngModelChange_128_listener($event) { return ctx.itemsdata.id = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](129, "mat-icon", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](130, "star");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](131, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](132, "mat-form-field", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](133, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](134, "Rack");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](135, "input", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ProductsComponent_Template_input_ngModelChange_135_listener($event) { return ctx.itemsdata.rack = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](136, "mat-icon", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](137, "star");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](138, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](139, "mat-form-field", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](140, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](141, "Total Price Ordered Till");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](142, "input", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ProductsComponent_Template_input_ngModelChange_142_listener($event) { return ctx.itemsdata.totalcostordered = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](143, "mat-icon", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](144, "star");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](145, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](146, "mat-form-field", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](147, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](148, "Total Quantity Ordered Till");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](149, "input", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ProductsComponent_Template_input_ngModelChange_149_listener($event) { return ctx.itemsdata.totalorders = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](150, "mat-icon", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](151, "star");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](152, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](153, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](154, "button", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](155, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](156, "button", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](157, "Cancel");
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
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](22);
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](24);
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](29);
        const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](31);
        const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](36);
        const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](38);
        const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](43);
        const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("data", ctx.productdataname)("searchKeyword", ctx.keyword)("itemTemplate", _r0)("notFoundTemplate", _r2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("data", ctx.productdatadic1)("searchKeyword", ctx.key1)("itemTemplate", _r4)("notFoundTemplate", _r6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("data", ctx.productdatadic2)("searchKeyword", ctx.key2)("itemTemplate", _r8)("notFoundTemplate", _r10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("data", ctx.productdatacode)("searchKeyword", ctx.keycode)("itemTemplate", _r12)("notFoundTemplate", _r14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", ctx.itemsdata.productcode);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.itemsdata.productcode)("readonly", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.itemsdata.name)("value", ctx.itemsdata.name)("readonly", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.itemsdata.category)("value", ctx.itemsdata.category)("readonly", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", ctx.itemsdata.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.itemsdata.description)("readonly", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.itemsdata.description1)("value", ctx.itemsdata.description1)("readonly", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.itemsdata.description2)("value", ctx.itemsdata.description2)("readonly", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.itemsdata.livestock)("value", ctx.itemsdata.livestock);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.itemsdata.minstock)("value", ctx.itemsdata.minstock);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.itemsdata.safestock)("value", ctx.itemsdata.safestock);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.itemsdata.rol)("value", ctx.itemsdata.rol);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.itemsdata.units)("value", ctx.itemsdata.units);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.itemsdata.id)("value", ctx.itemsdata.id)("readonly", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.itemsdata.rack)("value", ctx.itemsdata.rack);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.itemsdata.totalcostordered)("value", ctx.itemsdata.totalcostordered);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.itemsdata.totalorders)("value", ctx.itemsdata.totalorders);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_5__["AutocompleteComponent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIcon"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatSuffix"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbmZpZ3MvcHJvZHVjdHMvcHJvZHVjdHMuY29tcG9uZW50LnNhc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ProductsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-products',
                templateUrl: './products.component.html',
                styleUrls: ['./products.component.sass']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "Dxx+":
/*!******************************************************************!*\
  !*** ./src/app/configs/productmaster/productmaster.component.ts ***!
  \******************************************************************/
/*! exports provided: ProductmasterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductmasterComponent", function() { return ProductmasterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "lDzL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
//import { HttpClient } from '@angular/common/http';


















const _c0 = ["roleTemplate"];
const _c1 = ["closeAddModal"];
const _c2 = ["closeEditModal"];
const _c3 = ["fileUpload"];
function ProductmasterComponent_li_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const file_r36 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", file_r36.data.name, " ");
} }
function ProductmasterComponent_ng_template_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProductmasterComponent_ng_template_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProductmasterComponent_ng_template_42_Template(rf, ctx) { if (rf & 1) {
    const _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductmasterComponent_ng_template_42_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r43); const row_r40 = ctx.row; const rowIndex_r41 = ctx.rowIndex; const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r42.editRow(row_r40, rowIndex_r41); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "i", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "mode_edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductmasterComponent_ng_template_42_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r43); const row_r40 = ctx.row; const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r44.deleteRow(row_r40); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "i", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProductmasterComponent_mat_error_66_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Name is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProductmasterComponent_mat_error_74_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " code is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProductmasterComponent_mat_error_83_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " description is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProductmasterComponent_mat_error_91_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " description1 is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProductmasterComponent_mat_error_100_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " description2 is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProductmasterComponent_mat_option_108_Template(rf, ctx) { if (rf & 1) {
    const _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProductmasterComponent_mat_option_108_Template_mat_option_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r47); const option_r45 = ctx.$implicit; return option_r45.category = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r45 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", option_r45.category);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", option_r45.category);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](option_r45.category);
} }
function ProductmasterComponent_mat_error_109_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " category is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProductmasterComponent_mat_error_118_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Purchasecost is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProductmasterComponent_mat_error_126_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Units is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProductmasterComponent_mat_error_135_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " ROL is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProductmasterComponent_mat_error_143_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Safe Stock is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProductmasterComponent_mat_error_152_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Min Stock is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProductmasterComponent_mat_error_160_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Live Stock is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProductmasterComponent_mat_error_169_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Rack is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProductmasterComponent_mat_error_203_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Name required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProductmasterComponent_mat_error_211_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Productcode required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProductmasterComponent_mat_error_220_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Description required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProductmasterComponent_mat_error_228_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Description1 required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProductmasterComponent_mat_error_237_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Description2 required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProductmasterComponent_mat_option_243_Template(rf, ctx) { if (rf & 1) {
    const _r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProductmasterComponent_mat_option_243_Template_mat_option_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r50); const option_r48 = ctx.$implicit; return option_r48.category = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r48 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", option_r48.category);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", option_r48.category);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](option_r48.category);
} }
function ProductmasterComponent_mat_error_246_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Category required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProductmasterComponent_mat_error_255_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Min Stock required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProductmasterComponent_mat_error_263_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " purchasecost required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProductmasterComponent_mat_error_272_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Rack required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProductmasterComponent_mat_error_280_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Units required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProductmasterComponent_mat_error_289_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " ROL required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProductmasterComponent_mat_error_297_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Live Stock required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProductmasterComponent_mat_error_306_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Safe Stock required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class ProductmasterComponent {
    constructor(fb, _snackBar, http) {
        this.fb = fb;
        this._snackBar = _snackBar;
        this.http = http;
        this.files = [];
        this.rows = [];
        // newUserImg = 'assets/images/user/user1.jpg';
        this.data = [];
        this.filteredData = [];
        this.serverUrl = "http://163.157.20.76:2020/uploadernew";
        this.empdata = {};
        this.columns = [
            { name: 'id' },
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
            { name: 'units' },
            { name: 'rol' },
            { name: 'livestock' },
            { name: 'safestock' },
        ];
        // Table 2
        this.tb2columns = [
            { name: 'id' },
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
            { name: 'units' },
            { name: 'rol' },
            { name: 'livestock' },
            { name: 'safestock' },
        ];
        this.tb2data = [];
        this.tb2filteredData = [];
        this.myFiles = [];
        this.categorydata = {};
        this.rackdata = {};
        this.editForm = this.fb.group({
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            productcode: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            description1: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            description2: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            category: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            totalorders: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            minstock: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            totalcostordered: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            purchasecost: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            rack: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            units: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            rol: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            livestock: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            safestock: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
        });
    }
    sendFormData(formData) {
        return this.http.post(this.serverUrl, formData, {
            reportProgress: true,
            observe: 'events'
        });
    }
    sendFile(file) {
        const formData = new FormData();
        formData.append('file', file.data);
        file.inProgress = true;
        this.sendFormData(formData).subscribe((event) => {
            if (typeof (event) === 'object') {
                // console.log(event.body);
            }
        });
    }
    sendFiles() {
        this.fileUpload.nativeElement.value = '';
        this.files.forEach(file => {
            this.sendFile(file);
        });
    }
    onClick() {
        const fileUpload = this.fileUpload.nativeElement;
        fileUpload.onchange = () => {
            for (let index = 0; index < fileUpload.files.length; index++) {
                const file = fileUpload.files[index];
                this.files.push({ data: file, inProgress: false, progress: 0 });
            }
            this.sendFiles();
        };
        fileUpload.click();
    }
    getdatareason() {
        this.http.get(this.mainurl + 'category').subscribe(res => {
            this.categorydata = res;
            // console.log('this is reason ',  this.categorydata );
        });
    }
    getdatarack() {
        this.http.get(this.mainurl + 'rack').subscribe(res => {
            this.rackdata = res;
            // console.log('this is reason ',  this.rackdata );
        });
    }
    ngOnInit() {
        this.mainurl = localStorage.getItem('mainurl');
        this.getdatareason();
        this.getdatarack();
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
            productcode: [''],
            name: [''],
            description: [''],
            description1: [''],
            description2: [''],
            category: [''],
            totalorders: [''],
            minstock: [''],
            totalcostordered: [''],
            purchasecost: [''],
            rack: [''],
            units: [''],
            rol: [''],
            livestock: [''],
            safestock: [''],
        });
    }
    fetch(cb) {
        const req = new XMLHttpRequest();
        req.open('GET', this.mainurl + 'product');
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
    handleFileInput(files) {
        // // console.log('Inside File upload function\nFile uploaded');
        this.receivedFile = files.item(0);
        const isFileupload = true;
        // // console.log(` Received File: ${this.receivedFile}`);
        if (isFileupload) {
            alert('Csv uploaded');
        }
    }
    editRow(row, rowIndex) {
        this.editForm.setValue({
            id: row.id,
            productcode: row.productcode,
            name: row.name,
            description: row.description,
            description1: row.description1,
            description2: row.description2,
            category: row.category,
            totalorders: row.totalorders,
            minstock: row.minstock,
            totalcostordered: row.totalcostordered,
            purchasecost: row.purchasecost,
            rack: row.rack,
            units: row.units,
            rol: row.rol,
            livestock: row.livestock,
            safestock: row.safestock,
        });
        this.selectedRowData = row;
    }
    //   onFileChange(event: any) {
    //     for (var i = 0; i < event.target.files.length; i++) {
    //       this.myFiles.push(event.target.files[i]);
    //     }
    //     /* wire up file reader */
    //     const frmData = new FormData();
    //     // tslint:disable-next-line: prefer-for-of
    //     for (var i = 0; i < this.myFiles.length; i++) {
    //       frmData.append('fileUpload', this.myFiles[i]);
    //     }
    //     const target: DataTransfer = (event.target) as DataTransfer;
    //     if (target.files.length !== 1) {
    //       throw new Error('Cannot use multiple files');
    //     }
    //     const reader: FileReader = new FileReader();
    //     reader.readAsBinaryString(target.files[0]);
    //     reader.onload = (e: any) => {
    //       /* create workbook */
    //       const binarystr: string = e.target.result;
    //       const wb: XLSX.WorkBook = XLSX.read(binarystr, { type: 'binary' });
    //       /* selected the first sheet */
    //       const wsname: string = wb.SheetNames[0];
    //       const ws: XLSX.WorkSheet = wb.Sheets[wsname];
    //       /* save data */
    //       const data = XLSX.utils.sheet_to_json(ws); // to get 2d array pass 2nd parameter as object {header: 1}
    //       // console.log('data length')
    //       // console.log((data.length));
    //       // this.http.post(this.mainurl + 'fileupload', frmData).subscribe();
    //       // tslint:disable-next-line: prefer-for-of
    //       for (var i = 0; i < data.length; i++) {
    //         var eachItems =
    //                      {
    //                        category: data[i]['Item Class'],
    //                         productcode: data[i]['Item'],
    //                         description2: data[i]['Extended description 2'],
    //                         description1: data[i]['Extended description 1'],
    //                         name: data[i]['Description'],
    //                         purchasecost: data[i]['Std Cost'],
    //                         safestock: data[i]['SAFETY_STK'],
    //                         minstock: data[i]['MIN'],
    //                         rol: data[i]['ROL'],
    //                         livestock: data[i]['livestock'],
    //                         // category: data[i]['Item_Class']
    //                      };
    //                      this.http.post(this.mainurl + 'uploadproduct', eachItems).subscribe();
    //         // var eachItem =
    //         //              {
    //         //                  Whs: data[i]['Whs'],
    //         //                  Item: data[i]['Item'],
    //         //                  Extended_description_2: data[i]['Extended description 2'],
    //         //                  Extended_description_1: data[i]['Extended description 1'],
    //         //                  Description: data[i]['Description'],
    //         //                  On_hand: data[i]['On-hand'],
    //         //                  On_order: data[i]['On-order'],
    //         //                  Std_Cost: data[i]['Std Cost'],
    //         //                  Item_Class: data[i]['Item Class'],
    //         //              };
    //       // this.http.post(this.mainurl + 'fileupload', eachItem).subscribe();
    //       }
    //       // console.log(data[0]); // Data will be logged in array format containing objects
    //     };
    //  }
    changeListener(files) {
        // console.log(files);
        if (files && files.length > 0) {
            let file = files.item(0);
            // console.log(file.name);
            // console.log(file.size);
            // console.log(file.type);
            let reader = new FileReader();
            reader.readAsText(file);
            reader.onload = (e) => {
                let csv = reader.result;
                // console.log(csv);
            };
        }
    }
    addRow() {
        this.register.patchValue({
            // id: this.getId(10, 100),
            name: this.name,
            code: this.code
        });
    }
    deleteRow(row) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
            title: 'Are you sure?',
            text: 'Please check the dependency before deleted',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, keep it'
        }).then((result) => {
            if (result.value) {
                this.data = this.arrayRemove(this.data, row.id);
                this.http.delete(this.mainurl + 'product/' + row.id).subscribe();
                this.showNotification('bg-red', 'Delete Record Successfully', 'bottom', 'right');
                sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire('Deleted!', 'Seleted data is  been deleted..', 'success');
                // For more information about handling dismissals please visit
                // https://sweetalert2.github.io/#handling-dismissals
            }
            else if (result.dismiss === sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.DismissReason.cancel) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire('Cancelled', 'Seleted data is not deleted :)', 'error');
            }
        });
        // this.data = this.arrayRemove(this.data, row.id);
        // this.showNotification(
        //   'bg-red',
        //   'Delete Record Successfully',
        //   'bottom',
        //   'right'
        // );
    }
    arrayRemove(array, id) {
        return array.filter(function (element) {
            return element.id != id;
        });
    }
    onEditSave(form) {
        this.data = this.data.filter((value, key) => {
            if (value.id == form.value.id) {
                //  value.id= form.value.code;
                value.productcode = form.value.productcode;
                value.name = form.value.name;
                value.description = form.value.description;
                value.description1 = form.value.description1;
                value.description2 = form.value.description2;
                value.category = form.value.category;
                value.totalorders = form.value.totalorders;
                value.minstock = form.value.minstock;
                value.totalcostordered = form.value.totalcostordered;
                value.purchasecost = form.value.purchasecost;
                value.rack = form.value.rack;
                value.units = form.value.units;
                value.rol = form.value.rol;
                value.livestock = form.value.livestock;
                value.safestock = form.value.safestock;
            }
        });
        let count = 1;
        this.empdata = {
            //  'id': form.value.code,
            'productcode': form.value.productcode,
            'name': form.value.name,
            'description': form.value.description,
            'description1': form.value.description1,
            'description2': form.value.description2,
            'category': form.value.category,
            'totalorders': form.value.totalorders,
            'minstock': form.value.minstock,
            'totalcostordered': form.value.totalcostordered,
            'purchasecost': form.value.purchasecost,
            'rack': form.value.rack,
            'units': form.value.units,
            'rol': form.value.rol,
            'livestock': form.value.livestock,
            'safestock': form.value.safestock,
        };
        // if(count == 1){
        this.http.put(this.mainurl + 'product/' + form.value.id, this.empdata).subscribe(result => {
            // console.log("put request", result);
            this.refreshData();
        });
        this.closeEditModal.nativeElement.click();
        // count = count +1;
        // }
        this.showNotification('bg-black', 'Edit Record Successfully', 'bottom', 'right');
        return true;
    }
    refreshData() {
        this.fetch(data => {
            this.data = data;
            this.filteredData = data;
        });
    }
    onAddRowSave(form) {
        this.data.push(form.value);
        this.http.post(this.mainurl + 'product', form.value).subscribe();
        this.data = [...this.data];
        // // console.log(this.data);
        form.reset();
        this.closeAddModal.nativeElement.click();
        this.showNotification('bg-green', 'Add Record Successfully', 'bottom', 'right');
    }
    filterDatatable(event) {
        // get the value of the key pressed and make it lowercase
        const req = new XMLHttpRequest();
        req.open('GET', this.mainurl + 'filterproduct/' + event);
        req.onload = () => {
            this.data = JSON.parse(req.response);
        };
        req.send();
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
ProductmasterComponent.ɵfac = function ProductmasterComponent_Factory(t) { return new (t || ProductmasterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"])); };
ProductmasterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProductmasterComponent, selectors: [["app-productmaster"]], viewQuery: function ProductmasterComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_3__["DatatableComponent"], true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c2, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c3, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_3__["DatatableComponent"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.roleTemplate = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.table = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.closeAddModal = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.closeEditModal = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.fileUpload = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.table2 = _t.first);
    } }, decls: 313, vars: 44, consts: [[1, "content"], [1, "container-fluid"], [1, "row", "clearfix"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12"], [1, "card"], [1, "body"], [1, "row"], [1, "col-sm-12"], [1, "ngxTableHeader"], [1, "header-buttons-left", "ml-0"], [1, "dropdown"], [1, "dropdown", "m-l-20"], ["for", "search-input"], [1, "material-icons", "search-icon"], ["placeholder", "Search", "type", "text", "aria-label", "Search box", 1, "browser-default", "search-field", 3, "keyup"], [1, "header-buttons", "m-r-20"], [1, "icon-button-demo"], ["mat-mini-fab", "", "color", "primary", "data-toggle", "modal", "data-target", "#addModal", 3, "click"], [1, "col-white"], [4, "ngFor", "ngForOf"], [3, "click"], ["type", "file", "id", "fileUpload", "name", "fileUpload", "multiple", "multiple", "accept", "image/*", 2, "display", "none"], ["fileUpload", ""], [1, "material", 3, "rows", "columns", "sortType", "columnMode", "headerHeight", "footerHeight", "rowHeight", "limit"], ["table", ""], ["name", "name", 3, "width"], ["ngx-datatable-header-template", ""], ["name", "productcode", 3, "width"], ["name", "Actions", "sortable", "false", 3, "width"], ["ngx-datatable-cell-template", ""], ["id", "addModal", "tabindex", "-1", "role", "dialog", "aria-labelledby", "exampleModalLabel", "aria-hidden", "true", 1, "modal", "fade"], ["role", "document", 1, "modal-dialog"], [1, "modal-content"], [1, "modal-header"], [1, "editRowModal"], [1, "modal-header", "clearfix"], [1, "modal-about"], [1, "font-weight-bold", "p-t-10", "font-17"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "btn", "p-t-10", "modal-close-button"], ["closeAddModal", ""], [1, "material-icons"], [1, "modal-body"], [1, "register-form", "m-4", 3, "formGroup", "ngSubmit"], [1, "input-field", "col", "s12", "d-none"], ["formControlName", "id", "type", "hidden", 1, "form-control"], [1, "col-xl-6", "col-lg-6", "col-md-12", "col-sm-12", "mb-2"], ["appearance", "outline", 1, "example-full-width"], ["matInput", "", "formControlName", "name"], [4, "ngIf"], ["matSuffix", ""], ["matInput", "", "formControlName", "productcode"], ["matInput", "", "formControlName", "description"], ["matInput", "", "formControlName", "description1"], ["matInput", "", "formControlName", "description2"], ["formControlName", "category"], [3, "ngModel", "value", "ngModelChange", 4, "ngFor", "ngForOf"], ["matInput", "", "formControlName", "purchasecost"], ["matInput", "", "formControlName", "units"], ["matInput", "", "formControlName", "rol"], ["matInput", "", "formControlName", "safestock"], ["matInput", "", "formControlName", "minstock"], ["matInput", "", "formControlName", "livestock"], ["matInput", "", "formControlName", "rack"], [1, "col-xl-12", "col-lg-12", "col-md-12", "col-sm-12", "mb-2"], ["mat-raised-button", "", "color", "primary", 1, "mr-3", 3, "disabled"], ["type", "button", "mat-button", "", "data-dismiss", "modal"], ["id", "editModal", "tabindex", "-1", "role", "dialog", "aria-labelledby", "exampleModalLabel", "aria-hidden", "true", 1, "modal", "fade"], ["closeEditModal", ""], [3, "formGroup", "ngSubmit"], ["matInput", "", "formControlName", "name", "required", ""], ["matInput", "", "formControlName", "productcode", "required", ""], ["matInput", "", "formControlName", "description", "required", ""], ["matInput", "", "formControlName", "description1", "required", ""], ["matInput", "", "formControlName", "description2", "required", ""], ["matInput", "", "formControlName", "minstock", "required", ""], ["matInput", "", "formControlName", "purchasecost", "required", ""], ["matInput", "", "formControlName", "rack", "required", ""], ["matInput", "", "formControlName", "units", "required", ""], ["matInput", "", "formControlName", "rol", "required", ""], ["matInput", "", "formControlName", "livestock", "required", ""], ["matInput", "", "formControlName", "safestock", "required", ""], [1, "modal-footer"], [1, "button-demo"], ["type", "submit", 1, "btn", "btn-outline-success", "btn-border-radius"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-outline-warning", "btn-border-radius"], ["id", "file-label"], ["data-toggle", "modal", "data-target", "#editModal", 1, "btn", "tblActnBtn", "h-auto", 3, "click"], [1, "btn", "tblActnBtn", "h-auto", 3, "click"], [3, "ngModel", "value", "ngModelChange"]], template: function ProductmasterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ul", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Items");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function ProductmasterComponent_Template_input_keyup_18_listener($event) { return ctx.filterDatatable($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "ul", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductmasterComponent_Template_button_click_22_listener() { return ctx.addRow(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-icon", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "add");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, ProductmasterComponent_li_30_Template, 3, 1, "li", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductmasterComponent_Template_button_click_31_listener() { return ctx.onClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " Upload ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "input", 21, 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "ngx-datatable", 23, 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "ngx-datatable-column", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, ProductmasterComponent_ng_template_38_Template, 2, 0, "ng-template", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "ngx-datatable-column", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, ProductmasterComponent_ng_template_40_Template, 2, 0, "ng-template", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "ngx-datatable-column", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, ProductmasterComponent_ng_template_42_Template, 7, 0, "ng-template", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, " Items");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "button", 38, 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "i", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "clear");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "form", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ProductmasterComponent_Template_form_ngSubmit_57_listener() { return ctx.onAddRowSave(ctx.register); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "input", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "mat-form-field", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "input", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](66, ProductmasterComponent_mat_error_66_Template, 2, 0, "mat-error", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "mat-icon", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "star");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "mat-form-field", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "input", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](74, ProductmasterComponent_mat_error_74_Template, 2, 0, "mat-error", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "mat-icon", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "star");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "mat-form-field", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "input", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](83, ProductmasterComponent_mat_error_83_Template, 2, 0, "mat-error", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "mat-icon", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "star");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "mat-form-field", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "Description 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](90, "input", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](91, ProductmasterComponent_mat_error_91_Template, 2, 0, "mat-error", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "mat-icon", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "star");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "mat-form-field", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "Description 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](99, "input", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](100, ProductmasterComponent_mat_error_100_Template, 2, 0, "mat-error", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "mat-icon", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "star");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "mat-form-field", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "Category");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "mat-select", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](108, ProductmasterComponent_mat_option_108_Template, 2, 3, "mat-option", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](109, ProductmasterComponent_mat_error_109_Template, 2, 0, "mat-error", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "mat-icon", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "star");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "mat-form-field", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "Purchasecost");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](117, "input", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](118, ProductmasterComponent_mat_error_118_Template, 2, 0, "mat-error", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "mat-icon", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, "star");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "mat-form-field", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, "Units");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](125, "input", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](126, ProductmasterComponent_mat_error_126_Template, 2, 0, "mat-error", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "mat-icon", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, "star");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "mat-form-field", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133, "ROL");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](134, "input", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](135, ProductmasterComponent_mat_error_135_Template, 2, 0, "mat-error", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "mat-icon", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, "star");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "mat-form-field", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](141, "Safe Stock");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](142, "input", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](143, ProductmasterComponent_mat_error_143_Template, 2, 0, "mat-error", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "mat-icon", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](145, "star");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "mat-form-field", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](150, "Min Stock");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](151, "input", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](152, ProductmasterComponent_mat_error_152_Template, 2, 0, "mat-error", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "mat-icon", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](154, "star");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "mat-form-field", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](158, "Live Stock");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](159, "input", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](160, ProductmasterComponent_mat_error_160_Template, 2, 0, "mat-error", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "mat-icon", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](162, "star");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "mat-form-field", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](167, "Rack");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](168, "input", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](169, ProductmasterComponent_mat_error_169_Template, 2, 0, "mat-error", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "mat-icon", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](171, "star");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "button", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](175, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "button", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](177, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](186);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "button", 38, 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "i", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](190, "clear");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "form", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ProductmasterComponent_Template_form_ngSubmit_192_listener() { return ctx.onEditSave(ctx.editForm); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](194, "input", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "mat-form-field", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](199, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](200, "input", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "mat-icon", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](202, "star");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](203, ProductmasterComponent_mat_error_203_Template, 2, 0, "mat-error", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](204, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "mat-form-field", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](206, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](207, "Productcode");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](208, "input", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](209, "mat-icon", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](210, "star");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](211, ProductmasterComponent_mat_error_211_Template, 2, 0, "mat-error", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](212, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](213, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](214, "mat-form-field", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](215, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](216, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](217, "input", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](218, "mat-icon", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](219, "star");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](220, ProductmasterComponent_mat_error_220_Template, 2, 0, "mat-error", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](221, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](222, "mat-form-field", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](223, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](224, "Description 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](225, "input", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](226, "mat-icon", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](227, "star");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](228, ProductmasterComponent_mat_error_228_Template, 2, 0, "mat-error", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](229, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](230, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](231, "mat-form-field", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](232, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](233, "Description 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](234, "input", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](235, "mat-icon", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](236, "star");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](237, ProductmasterComponent_mat_error_237_Template, 2, 0, "mat-error", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](238, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](239, "mat-form-field", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](240, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](241, "Category");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](242, "mat-select", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](243, ProductmasterComponent_mat_option_243_Template, 2, 3, "mat-option", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](244, "mat-icon", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](245, "star");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](246, ProductmasterComponent_mat_error_246_Template, 2, 0, "mat-error", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](247, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](248, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](249, "mat-form-field", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](250, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](251, "Min Stock");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](252, "input", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](253, "mat-icon", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](254, "star");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](255, ProductmasterComponent_mat_error_255_Template, 2, 0, "mat-error", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](256, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](257, "mat-form-field", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](258, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](259, "Unit Cost");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](260, "input", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](261, "mat-icon", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](262, "star");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](263, ProductmasterComponent_mat_error_263_Template, 2, 0, "mat-error", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](264, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](265, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](266, "mat-form-field", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](267, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](268, "Rack");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](269, "input", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](270, "mat-icon", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](271, "star");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](272, ProductmasterComponent_mat_error_272_Template, 2, 0, "mat-error", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](273, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](274, "mat-form-field", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](275, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](276, "Units");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](277, "input", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](278, "mat-icon", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](279, "star");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](280, ProductmasterComponent_mat_error_280_Template, 2, 0, "mat-error", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](281, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](282, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](283, "mat-form-field", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](284, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](285, "ROL");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](286, "input", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](287, "mat-icon", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](288, "star");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](289, ProductmasterComponent_mat_error_289_Template, 2, 0, "mat-error", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](290, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](291, "mat-form-field", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](292, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](293, "Live Stock");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](294, "input", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](295, "mat-icon", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](296, "star");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](297, ProductmasterComponent_mat_error_297_Template, 2, 0, "mat-error", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](298, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](299, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](300, "mat-form-field", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](301, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](302, "Safe Stock");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](303, "input", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](304, "mat-icon", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](305, "star");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](306, ProductmasterComponent_mat_error_306_Template, 2, 0, "mat-error", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](307, "div", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](308, "div", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](309, "button", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](310, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](311, "button", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](312, "Cancel");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.files);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rows", ctx.data)("columns", ctx.columns)("sortType", "multi")("columnMode", "force")("headerHeight", 50)("footerHeight", 50)("rowHeight", "60")("limit", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("width", 130);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("width", 130);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("width", 120);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.register);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.register.get("name").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.register.get("productcode").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.register.get("description").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.register.get("description1").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.register.get("description2").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.categorydata);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.register.get("category").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.register.get("purchasecost").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.register.get("units").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.register.get("rol").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.register.get("safestock").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.register.get("minstock").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.register.get("livestock").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.register.get("rack").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.register.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.selectedRowData == null ? null : ctx.selectedRowData.id, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.editForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.editForm.get("name").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.editForm.get("productcode").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.editForm.get("description").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.editForm.get("description1").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.editForm.get("description2").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.categorydata);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.editForm.get("category").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.editForm.get("minstock").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.editForm.get("purchasecost").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.editForm.get("rack").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.editForm.get("units").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.editForm.get("rol").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.editForm.get("livestock").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.editForm.get("safestock").hasError("required"));
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_3__["DatatableComponent"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_3__["DataTableColumnDirective"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_3__["DataTableColumnHeaderDirective"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_3__["DataTableColumnCellDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInput"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatSuffix"], _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatError"], _angular_material_core__WEBPACK_IMPORTED_MODULE_12__["MatOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbmZpZ3MvcHJvZHVjdG1hc3Rlci9wcm9kdWN0bWFzdGVyLmNvbXBvbmVudC5zYXNzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductmasterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-productmaster',
                templateUrl: './productmaster.component.html',
                styleUrls: ['./productmaster.component.sass']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }]; }, { roleTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['roleTemplate', { static: true }]
        }], table: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_3__["DatatableComponent"], { static: false }]
        }], closeAddModal: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['closeAddModal', { static: false }]
        }], closeEditModal: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['closeEditModal', { static: false }]
        }], fileUpload: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ["fileUpload", { static: false }]
        }], table2: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_3__["DatatableComponent"], { static: false }]
        }] }); })();


/***/ }),

/***/ "EC6K":
/*!********************************************************!*\
  !*** ./src/app/configs/channels/channels.component.ts ***!
  \********************************************************/
/*! exports provided: ChannelsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChannelsComponent", function() { return ChannelsComponent; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "lDzL");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "ofXK");
















const _c0 = ["roleTemplate"];
const _c1 = ["closeAddModal"];
const _c2 = ["closeEditModal"];
function ChannelsComponent_ng_template_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ChannelsComponent_ng_template_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Code");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ChannelsComponent_ng_template_32_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ChannelsComponent_ng_template_32_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r16); const row_r13 = ctx.row; const rowIndex_r14 = ctx.rowIndex; const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r15.editRow(row_r13, rowIndex_r14); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "i", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "mode_edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ChannelsComponent_ng_template_32_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r16); const row_r13 = ctx.row; const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r17.deleteRow(row_r13); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "i", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ChannelsComponent_mat_error_56_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Name is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ChannelsComponent_mat_error_64_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Code is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ChannelsComponent_mat_error_98_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " name required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ChannelsComponent_mat_error_106_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " code required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class ChannelsComponent {
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
            { name: 'code' }
        ];
        // Table 2
        this.tb2columns = [
            { name: 'id' },
            { name: 'name' },
            { name: 'code' }
        ];
        this.tb2data = [];
        this.tb2filteredData = [];
        this.editForm = this.fb.group({
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            code: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
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
            code: [''],
        });
    }
    fetch(cb) {
        const req = new XMLHttpRequest();
        req.open('GET', this.mainurl + 'channel');
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
        sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
            title: 'Are you sure?',
            text: 'Please check the dependency before deleted',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, keep it'
        }).then((result) => {
            if (result.value) {
                this.data = this.arrayRemove(this.data, row.id);
                this.http.delete(this.mainurl + 'channel/' + row.id).subscribe();
                this.showNotification('bg-red', 'Delete Record Successfully', 'bottom', 'right');
                sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire('Deleted!', 'Seleted data is  been deleted..', 'success');
                // For more information about handling dismissals please visit
                // https://sweetalert2.github.io/#handling-dismissals
            }
            else if (result.dismiss === sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.DismissReason.cancel) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire('Cancelled', 'Seleted data is not deleted :)', 'error');
            }
        });
        // this.data = this.arrayRemove(this.data, row.id);
        // this.showNotification(
        //   'bg-red',
        //   'Delete Record Successfully',
        //   'bottom',
        //   'right'
        // );
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
            this.http.put(this.mainurl + 'channel/' + form.value.id, empdata).subscribe();
            this.closeEditModal.nativeElement.click();
            return true;
        });
        this.showNotification('bg-black', 'Edit Record Successfully', 'bottom', 'right');
    }
    onAddRowSave(form) {
        this.data.push(form.value);
        this.http.post(this.mainurl + 'channel', form.value).subscribe();
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
ChannelsComponent.ɵfac = function ChannelsComponent_Factory(t) { return new (t || ChannelsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
ChannelsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ChannelsComponent, selectors: [["app-channels"]], viewQuery: function ChannelsComponent_Query(rf, ctx) { if (rf & 1) {
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
    } }, decls: 113, vars: 19, consts: [[1, "content"], [1, "container-fluid"], [1, "row", "clearfix"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12"], [1, "card"], [1, "body"], [1, "row"], [1, "col-sm-12"], [1, "ngxTableHeader"], [1, "header-buttons-left", "ml-0"], [1, "dropdown"], [1, "dropdown", "m-l-20"], ["for", "search-input"], [1, "material-icons", "search-icon"], ["placeholder", "Search", "type", "text", "aria-label", "Search box", 1, "browser-default", "search-field", 3, "keyup"], [1, "header-buttons", "m-r-20"], [1, "icon-button-demo"], ["mat-mini-fab", "", "color", "primary", "data-toggle", "modal", "data-target", "#addModal", 3, "click"], [1, "col-white"], [1, "material", 3, "rows", "columns", "sortType", "columnMode", "headerHeight", "footerHeight", "rowHeight", "limit"], ["table", ""], ["name", "name", 3, "width"], ["ngx-datatable-header-template", ""], ["name", "code", 3, "width"], ["name", "Actions", "sortable", "false", 3, "width"], ["ngx-datatable-cell-template", ""], ["id", "addModal", "tabindex", "-1", "role", "dialog", "aria-labelledby", "exampleModalLabel", "aria-hidden", "true", 1, "modal", "fade"], ["role", "document", 1, "modal-dialog"], [1, "modal-content"], [1, "modal-header"], [1, "editRowModal"], [1, "modal-header", "clearfix"], [1, "modal-about"], [1, "font-weight-bold", "p-t-10", "font-17"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "btn", "p-t-10", "modal-close-button"], ["closeAddModal", ""], [1, "material-icons"], [1, "modal-body"], [1, "register-form", "m-4", 3, "formGroup", "ngSubmit"], [1, "input-field", "col", "s12", "d-none"], ["formControlName", "id", "type", "hidden", 1, "form-control"], [1, "col-xl-6", "col-lg-6", "col-md-12", "col-sm-12", "mb-2"], ["appearance", "outline", 1, "example-full-width"], ["matInput", "", "formControlName", "name"], [4, "ngIf"], ["matSuffix", ""], ["matInput", "", "formControlName", "code"], [1, "col-xl-12", "col-lg-12", "col-md-12", "col-sm-12", "mb-2"], ["mat-raised-button", "", "color", "primary", 1, "mr-3", 3, "disabled"], ["type", "button", "mat-button", "", "data-dismiss", "modal"], ["id", "editModal", "tabindex", "-1", "role", "dialog", "aria-labelledby", "exampleModalLabel", "aria-hidden", "true", 1, "modal", "fade"], ["closeEditModal", ""], [3, "formGroup", "ngSubmit"], ["matInput", "", "formControlName", "name", "required", ""], ["matInput", "", "formControlName", "code", "required", ""], [1, "modal-footer"], [1, "button-demo"], ["type", "submit", 1, "btn", "btn-outline-success", "btn-border-radius"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-outline-warning", "btn-border-radius"], ["data-toggle", "modal", "data-target", "#editModal", 1, "btn", "tblActnBtn", "h-auto", 3, "click"], [1, "btn", "tblActnBtn", "h-auto", 3, "click"]], template: function ChannelsComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keyup", function ChannelsComponent_Template_input_keyup_18_listener($event) { return ctx.filterDatatable($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "ul", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ChannelsComponent_Template_button_click_22_listener() { return ctx.addRow(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "mat-icon", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "add");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "ngx-datatable", 19, 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "ngx-datatable-column", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](28, ChannelsComponent_ng_template_28_Template, 2, 0, "ng-template", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "ngx-datatable-column", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](30, ChannelsComponent_ng_template_30_Template, 2, 0, "ng-template", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "ngx-datatable-column", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](32, ChannelsComponent_ng_template_32_Template, 7, 0, "ng-template", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, " Channels");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "button", 34, 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "i", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, "clear");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "form", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function ChannelsComponent_Template_form_ngSubmit_47_listener() { return ctx.onAddRowSave(ctx.register); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](49, "input", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "mat-form-field", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](55, "input", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](56, ChannelsComponent_mat_error_56_Template, 2, 0, "mat-error", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "mat-icon", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, "star");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "mat-form-field", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](62, "Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](63, "input", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](64, ChannelsComponent_mat_error_64_Template, 2, 0, "mat-error", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "mat-icon", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](66, "star");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "button", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](70, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "button", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](72, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](81);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "button", 34, 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "i", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](85, "clear");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "form", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function ChannelsComponent_Template_form_ngSubmit_87_listener() { return ctx.onEditSave(ctx.editForm); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](89, "input", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](90, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](91, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "mat-form-field", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](93, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](94, "name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](95, "input", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](96, "mat-icon", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](97, "star");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](98, ChannelsComponent_mat_error_98_Template, 2, 0, "mat-error", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](99, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](100, "mat-form-field", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](101, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](102, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](103, "input", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](104, "mat-icon", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](105, "star");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](106, ChannelsComponent_mat_error_106_Template, 2, 0, "mat-error", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](107, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](108, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](109, "button", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](110, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](111, "button", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](112, "Cancel");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("width", 130);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("width", 120);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.register);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.register.get("name").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.register.get("code").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx.register.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.selectedRowData == null ? null : ctx.selectedRowData.name, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.editForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.editForm.get("name").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.editForm.get("code").hasError("required"));
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIcon"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__["DatatableComponent"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__["DataTableColumnDirective"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__["DataTableColumnHeaderDirective"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__["DataTableColumnCellDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInput"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatSuffix"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatError"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbmZpZ3MvY2hhbm5lbHMvY2hhbm5lbHMuY29tcG9uZW50LnNhc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ChannelsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-channels',
                templateUrl: './channels.component.html',
                styleUrls: ['./channels.component.sass']
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

/***/ "JVUo":
/*!**********************************************************!*\
  !*** ./src/app/configs/reasonapp/reasonapp.component.ts ***!
  \**********************************************************/
/*! exports provided: ReasonappComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReasonappComponent", function() { return ReasonappComponent; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "lDzL");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "ofXK");
















const _c0 = ["roleTemplate"];
const _c1 = ["closeAddModal"];
const _c2 = ["closeEditModal"];
function ReasonappComponent_ng_template_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Reason Code");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ReasonappComponent_ng_template_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ReasonappComponent_ng_template_32_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ReasonappComponent_ng_template_32_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r16); const row_r13 = ctx.row; const rowIndex_r14 = ctx.rowIndex; const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r15.editRow(row_r13, rowIndex_r14); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "i", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "mode_edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ReasonappComponent_ng_template_32_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r16); const row_r13 = ctx.row; const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r17.deleteRow(row_r13); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "i", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ReasonappComponent_mat_error_56_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Reason Code is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ReasonappComponent_mat_error_64_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " details is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ReasonappComponent_mat_error_98_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " reason required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ReasonappComponent_mat_error_106_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " details required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class ReasonappComponent {
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
            { name: 'reason' },
            { name: 'Deatils' },
        ];
        // Table 2
        this.tb2columns = [
            { name: 'id' },
            { name: 'reason' },
            { name: 'Deatils' },
        ];
        this.tb2data = [];
        this.tb2filteredData = [];
        this.editForm = this.fb.group({
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            reason: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            details: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
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
            reason: [''],
            details: [''],
            id: ['']
        });
    }
    fetch(cb) {
        const req = new XMLHttpRequest();
        req.open('GET', this.mainurl + 'rejectcategory');
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
            reason: row.reason,
            details: row.details,
        });
        this.selectedRowData = row;
    }
    addRow() {
        this.register.patchValue({
        // id: this.getId(10, 100),
        // role: this.role
        });
    }
    deleteRow(row) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
            title: 'Are you sure?',
            text: 'Please check the dependency before deleted',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, keep it'
        }).then((result) => {
            if (result.value) {
                this.data = this.arrayRemove(this.data, row.id);
                this.http.delete(this.mainurl + 'rejectcategory/' + row.id).subscribe();
                this.showNotification('bg-red', 'Delete Record Successfully', 'bottom', 'right');
                sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire('Deleted!', 'Seleted data is  been deleted..', 'success');
                // For more information about handling dismissals please visit
                // https://sweetalert2.github.io/#handling-dismissals
            }
            else if (result.dismiss === sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.DismissReason.cancel) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire('Cancelled', 'Seleted data is not deleted :)', 'error');
            }
        });
        // this.data = this.arrayRemove(this.data, row.id);
        // this.showNotification(
        //   'bg-red',
        //   'Delete Record Successfully',
        //   'bottom',
        //   'right'
        // );
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
                value.reason = form.value.reason;
                value.details = form.value.details;
            }
            let empdata = {
                'reason': form.value.reason,
                'details': form.value.details,
            };
            this.http.put(this.mainurl + 'rejectcategory/' + form.value.id, empdata).subscribe();
            this.closeEditModal.nativeElement.click();
            return true;
        });
        this.showNotification('bg-black', 'Edit Record Successfully', 'bottom', 'right');
    }
    onAddRowSave(form) {
        this.data.push(form.value);
        this.http.post(this.mainurl + 'rejectcategory', form.value).subscribe();
        this.data = [...this.data];
        console.log(this.data);
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
ReasonappComponent.ɵfac = function ReasonappComponent_Factory(t) { return new (t || ReasonappComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
ReasonappComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ReasonappComponent, selectors: [["app-reasonapp"]], viewQuery: function ReasonappComponent_Query(rf, ctx) { if (rf & 1) {
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
    } }, decls: 113, vars: 19, consts: [[1, "content"], [1, "container-fluid"], [1, "row", "clearfix"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12"], [1, "card"], [1, "body"], [1, "row"], [1, "col-sm-12"], [1, "ngxTableHeader"], [1, "header-buttons-left", "ml-0"], [1, "dropdown"], [1, "dropdown", "m-l-20"], ["for", "search-input"], [1, "material-icons", "search-icon"], ["placeholder", "Search", "type", "text", "aria-label", "Search box", 1, "browser-default", "search-field", 3, "keyup"], [1, "header-buttons", "m-r-20"], [1, "icon-button-demo"], ["mat-mini-fab", "", "color", "primary", "data-toggle", "modal", "data-target", "#addModal", 3, "click"], [1, "col-white"], [1, "material", 3, "rows", "columns", "sortType", "columnMode", "headerHeight", "footerHeight", "rowHeight", "limit"], ["table", ""], ["name", "reason", 3, "width"], ["ngx-datatable-header-template", ""], ["name", "details", 3, "width"], ["name", "Actions", "sortable", "false", 3, "width"], ["ngx-datatable-cell-template", ""], ["id", "addModal", "tabindex", "-1", "role", "dialog", "aria-labelledby", "exampleModalLabel", "aria-hidden", "true", 1, "modal", "fade"], ["role", "document", 1, "modal-dialog"], [1, "modal-content"], [1, "modal-header"], [1, "editRowModal"], [1, "modal-header", "clearfix"], [1, "modal-about"], [1, "font-weight-bold", "p-t-10", "font-17"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "btn", "p-t-10", "modal-close-button"], ["closeAddModal", ""], [1, "material-icons"], [1, "modal-body"], [1, "register-form", "m-4", 3, "formGroup", "ngSubmit"], [1, "input-field", "col", "s12", "d-none"], ["formControlName", "id", "type", "hidden", 1, "form-control"], [1, "col-xl-6", "col-lg-6", "col-md-12", "col-sm-12", "mb-2"], ["appearance", "outline", 1, "example-full-width"], ["matInput", "", "formControlName", "reason"], [4, "ngIf"], ["matSuffix", ""], ["matInput", "", "formControlName", "details"], [1, "col-xl-12", "col-lg-12", "col-md-12", "col-sm-12", "mb-2"], ["mat-raised-button", "", "color", "primary", 1, "mr-3", 3, "disabled"], ["type", "button", "mat-button", "", "data-dismiss", "modal"], ["id", "editModal", "tabindex", "-1", "role", "dialog", "aria-labelledby", "exampleModalLabel", "aria-hidden", "true", 1, "modal", "fade"], ["closeEditModal", ""], [3, "formGroup", "ngSubmit"], ["matInput", "", "formControlName", "reason", "required", ""], ["matInput", "", "formControlName", "details", "required", ""], [1, "modal-footer"], [1, "button-demo"], ["type", "submit", 1, "btn", "btn-outline-success", "btn-border-radius"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-outline-warning", "btn-border-radius"], ["data-toggle", "modal", "data-target", "#editModal", 1, "btn", "tblActnBtn", "h-auto", 3, "click"], [1, "btn", "tblActnBtn", "h-auto", 3, "click"]], template: function ReasonappComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Rejection Code");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keyup", function ReasonappComponent_Template_input_keyup_18_listener($event) { return ctx.filterDatatable($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "ul", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ReasonappComponent_Template_button_click_22_listener() { return ctx.addRow(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "mat-icon", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "add");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "ngx-datatable", 19, 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "ngx-datatable-column", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](28, ReasonappComponent_ng_template_28_Template, 2, 0, "ng-template", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "ngx-datatable-column", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](30, ReasonappComponent_ng_template_30_Template, 2, 0, "ng-template", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "ngx-datatable-column", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](32, ReasonappComponent_ng_template_32_Template, 7, 0, "ng-template", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, " Reason Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "button", 34, 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "i", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, "clear");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "form", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function ReasonappComponent_Template_form_ngSubmit_47_listener() { return ctx.onAddRowSave(ctx.register); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](49, "input", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "mat-form-field", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, "Reason Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](55, "input", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](56, ReasonappComponent_mat_error_56_Template, 2, 0, "mat-error", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "mat-icon", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, "star");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "mat-form-field", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](62, "Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](63, "input", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](64, ReasonappComponent_mat_error_64_Template, 2, 0, "mat-error", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "mat-icon", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](66, "star");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "button", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](70, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "button", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](72, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](81);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "button", 34, 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "i", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](85, "clear");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "form", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function ReasonappComponent_Template_form_ngSubmit_87_listener() { return ctx.onEditSave(ctx.editForm); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](89, "input", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](90, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](91, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "mat-form-field", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](93, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](94, "Reason Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](95, "input", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](96, "mat-icon", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](97, "star");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](98, ReasonappComponent_mat_error_98_Template, 2, 0, "mat-error", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](99, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](100, "mat-form-field", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](101, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](102, "Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](103, "input", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](104, "mat-icon", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](105, "star");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](106, ReasonappComponent_mat_error_106_Template, 2, 0, "mat-error", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](107, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](108, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](109, "button", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](110, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](111, "button", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](112, "Cancel");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("width", 130);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("width", 120);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.register);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.register.get("reason").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.register.get("details").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx.register.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.selectedRowData == null ? null : ctx.selectedRowData.reason, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.editForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.editForm.get("reason").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.editForm.get("details").hasError("required"));
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIcon"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__["DatatableComponent"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__["DataTableColumnDirective"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__["DataTableColumnHeaderDirective"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__["DataTableColumnCellDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInput"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatSuffix"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatError"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbmZpZ3MvcmVhc29uYXBwL3JlYXNvbmFwcC5jb21wb25lbnQuc2FzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ReasonappComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-reasonapp',
                templateUrl: './reasonapp.component.html',
                styleUrls: ['./reasonapp.component.sass']
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

/***/ "KQtg":
/*!***************************************************!*\
  !*** ./src/app/configs/configs.routing.module.ts ***!
  \***************************************************/
/*! exports provided: configsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "configsRoutingModule", function() { return configsRoutingModule; });
/* harmony import */ var _reasonapp_reasonapp_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reasonapp/reasonapp.component */ "JVUo");
/* harmony import */ var _channels_channels_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./channels/channels.component */ "EC6K");
/* harmony import */ var _products_products_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./products/products.component */ "5JuC");
/* harmony import */ var _productmaster_productmaster_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./productmaster/productmaster.component */ "Dxx+");
/* harmony import */ var _category_category_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./category/category.component */ "155N");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");









const routes = [
    {
        path: '',
        redirectTo: 'pm',
        pathMatch: 'full'
    },
    {
        path: 'updateitem',
        component: _products_products_component__WEBPACK_IMPORTED_MODULE_2__["ProductsComponent"]
    },
    {
        path: 'category',
        component: _category_category_component__WEBPACK_IMPORTED_MODULE_4__["CategoryComponent"]
    },
    {
        path: 'pm',
        component: _productmaster_productmaster_component__WEBPACK_IMPORTED_MODULE_3__["ProductmasterComponent"]
    },
    {
        path: 'reason',
        component: _reasonapp_reasonapp_component__WEBPACK_IMPORTED_MODULE_0__["ReasonappComponent"]
    },
    {
        path: 'channel',
        component: _channels_channels_component__WEBPACK_IMPORTED_MODULE_1__["ChannelsComponent"]
    }
];
// tslint:disable-next-line: class-name
class configsRoutingModule {
}
configsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: configsRoutingModule });
configsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ factory: function configsRoutingModule_Factory(t) { return new (t || configsRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](configsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵsetClassMetadata"](configsRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"]]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=default~configs-configs-module~storemanagement-storemanagement-module~usermanagement-usermanagement-module-es2015.js.map