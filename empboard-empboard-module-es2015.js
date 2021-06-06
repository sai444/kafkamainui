(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["empboard-empboard-module"],{

/***/ "/ty4":
/*!*****************************************************!*\
  !*** ./src/app/empboard/othreq/othreq.component.ts ***!
  \*****************************************************/
/*! exports provided: OthreqComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OthreqComponent", function() { return OthreqComponent; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/core */ "FKr1");

















function OthreqComponent_mat_option_34_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function OthreqComponent_mat_option_34_Template_mat_option_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); const option_r4 = ctx.$implicit; return option_r4.id = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", option_r4.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", option_r4.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](option_r4.name);
} }
function OthreqComponent_mat_error_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Channel input is Required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function OthreqComponent_mat_error_94_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Quantity name is Number ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function OthreqComponent_mat_error_108_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Other Description input is Required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class OthreqComponent {
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
            empname: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            issuedby: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            channel: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            date: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            itemcode: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            otherdescription: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            quantity: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            remarks: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            specdrawing: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            totalprice: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
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
            empname: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            issuedby: [''],
            channel: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            date: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            itemcode: [''],
            otherdescription: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            quantity: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            remarks: [''],
            specdrawing: [''],
            totalprice: [''],
        });
        this.jstoday = Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["formatDate"])(this.today, 'dd-MM-yyyy hh:mm:ss a', 'en-US', '+0530');
    }
    onChangeEvent(event) {
        this.totalcost = event.target.value * this.itemsdata.purchasecost;
        // console.log(this.itemsdata.purchasecost);
        // console.log(this.totalcost);
    }
    itemDetails(id) {
        this.http.get(this.mainurl + 'product/' + id).subscribe(res => {
            this.itemsdata = res;
            // console.log("all data for the request", this.itemsdata);
        });
    }
    thisformis() {
        this.form = this.fb.group({
            channel: null,
            otherdescription: null,
            quantity: null,
            remarks: null,
            specdrawing: null,
            totalprice: null,
        });
    }
    ngOnInit() {
        this.userid = localStorage.getItem('userid');
        this.mainurl = localStorage.getItem('mainurl');
        this.itemDetails(13842);
        this.http.get(this.mainurl + 'productcode').subscribe(res => {
            this.productdatacode = res;
            // localStorage.setItem('productdetails', JSON.stringify(this.productdata));
            //// console.log("all names", this.productdatacode);
        });
        this.http.get(this.mainurl + 'emp/' + this.userid).subscribe(res => {
            this.empdata = res;
            // console.log("all data", this.empdata);
        });
        this.http.get(this.mainurl + 'product').subscribe(res => {
            this.productdata = res;
            // localStorage.setItem('productdetails', JSON.stringify(this.productdata));
            // console.log("all data", this.productdata);
        });
        this.http.get(this.mainurl + 'productname').subscribe(res => {
            this.productdataname = res;
            // localStorage.setItem('productdetails', JSON.stringify(this.productdata));
            // console.log("all names", this.productdataname);
        });
        this.http.get(this.mainurl + 'productdis1').subscribe(res => {
            this.productdatadic1 = res;
            // localStorage.setItem('productdetails', JSON.stringify(this.productdata));
            // console.log("all names", this.productdatadic1);
        });
        this.http.get(this.mainurl + 'productdis2').subscribe(res => {
            this.productdatadic2 = res;
            // localStorage.setItem('productdetails', JSON.stringify(this.productdata));
            // console.log("all names", this.productdatadic2);
        });
        this.http.get(this.mainurl + 'channel').subscribe(res => {
            this.getchannel = res;
            // console.log("all data", this.getchannel);
        });
    }
    getdatasearch() { }
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
    onRegister() {
        // console.log('Form Value', this.form.value);
        if (this.form.valid) {
            this.http.post(this.mainurl + 'empothrequest', this.form.value).subscribe((val) => {
                // console.log("POST call successful value returned in body",val);
                this.tagresponce = val;
                //  alert(this.tagresponce.message);
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                    title: this.tagresponce.message,
                    text: '',
                    icon: 'info',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Yes, Acknowledge it!'
                }).then((result) => {
                    if (result.isConfirmed) {
                        this.router.navigate(['/empboard/reqs']);
                    }
                });
            }, response => {
            }, () => {
                // console.log("The POST observable is now completed.");
            });
            this.data = [...this.data];
            //// console.log(this.data);
            this.form.reset();
            this.closeAddModal.nativeElement.click();
            this.showNotification('bg-green', 'Add Record Successfully', 'bottom', 'right');
        }
        else {
            this.showNotification('bg-green', 'Please fill all the required fields', 'bottom', 'right');
        }
    }
    showNotification(arg0, arg1, arg2, arg3) {
        throw new Error('Method not implemented.');
    }
    selectEvent(item) {
        if (item) {
            // console.log(item.id);
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
            // console.log('this is selected',e.id);
            this.itemDetails(e.id);
            this.itemcodefroms = e.id;
            // console.log('this is code',this.itemcodefroms);
        }
    }
}
OthreqComponent.ɵfac = function OthreqComponent_Factory(t) { return new (t || OthreqComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"])); };
OthreqComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: OthreqComponent, selectors: [["app-othreq"]], decls: 115, vars: 30, consts: [[1, "content"], [1, "container-fluid"], [1, "row", "clearfix"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12"], [1, "card"], [1, "header"], [1, "header-dropdown", "m-r--5"], [1, "dropdown"], ["href", "#", "onClick", "return false;", "data-toggle", "dropdown", "role", "button", "aria-haspopup", "true", "aria-expanded", "false"], [1, "material-icons"], [1, "body"], [1, "register-form", "m-4", 3, "formGroup", "ngSubmit"], [1, "row"], [1, "col-xl-4", "col-lg-4", "col-md-12", "col-sm-12", "mb-2"], ["appearance", "outline", 1, "example-full-width"], ["matInput", "", "formControlName", "empname", 3, "ngModel", "value", "readonly", "ngModelChange"], ["matInput", "", "formControlName", "date", 3, "ngModel", "value", "readonly", "ngModelChange"], ["formControlName", "channel"], [3, "ngModel", "value", "ngModelChange", 4, "ngFor", "ngForOf"], ["matSuffix", ""], [4, "ngIf"], ["matInput", "", 3, "ngModel", "value", "readonly", "ngModelChange"], ["matInput", "", "placeholder", "remarks", "formControlName", "remarks"], ["matInput", "", "formControlName", "itemcode", 3, "ngModel", "value", "readonly", "ngModelChange"], ["matInput", "", "placeholder", "Item Name", 3, "value", "readonly"], ["matInput", "", "placeholder", "Ex. John", "formControlName", "category", 3, "value", "readonly"], ["matInput", "", "placeholder", "Ex. John", 3, "value", "readonly"], ["matInput", "", "placeholder", "specdrawing", "formControlName", "specdrawing"], ["appearance", "outline", 1, "example-full-width", 3, "change"], ["matInput", "", "placeholder", "Qunatity", "formControlName", "quantity", "type", "number"], ["matInput", "", "placeholder", "totalprice", "formControlName", "totalprice", 3, "ngModel", "value", "readonly", "ngModelChange"], ["matInput", "", "placeholder", "otherdescription", "formControlName", "otherdescription", 2, "height", "60px"], [1, "col-xl-12", "col-lg-12", "col-md-12", "col-sm-12", "mb-2"], ["mat-raised-button", "", "color", "primary", 1, "mr-3"], ["type", "button", "mat-button", "", 3, "click"], [3, "ngModel", "value", "ngModelChange"]], template: function OthreqComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Request");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function OthreqComponent_Template_form_ngSubmit_16_listener() { return ctx.onRegister(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "mat-form-field", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Emp Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function OthreqComponent_Template_input_ngModelChange_23_listener($event) { return ctx.empdata.empname = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "mat-form-field", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function OthreqComponent_Template_input_ngModelChange_28_listener($event) { return ctx.jstoday = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "mat-form-field", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "Channel");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "mat-select", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](34, OthreqComponent_mat_option_34_Template, 2, 3, "mat-option", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "mat-icon", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "star");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](37, OthreqComponent_mat_error_37_Template, 2, 0, "mat-error", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "mat-form-field", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "Department");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function OthreqComponent_Template_input_ngModelChange_43_listener($event) { return ctx.empdata.dept = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "mat-form-field", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, "Machine");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](48, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "mat-form-field", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, "Item Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function OthreqComponent_Template_input_ngModelChange_53_listener($event) { return ctx.itemsdata.productcode = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "mat-form-field", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, "Item Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](59, "input", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "mat-form-field", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63, "Item Category");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](64, "input", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "mat-form-field", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](68, "Description 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](69, "input", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "mat-form-field", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](74, "Description 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](75, "input", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "mat-form-field", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](79, "specdrawing");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](80, "input", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "mat-form-field", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](84, "Unit Cost");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](85, "input", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "mat-form-field", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function OthreqComponent_Template_mat_form_field_change_88_listener($event) { return ctx.onChangeEvent($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](90, "Quantity");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](91, "input", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "mat-icon", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](93, "star");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](94, OthreqComponent_mat_error_94_Template, 2, 0, "mat-error", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](95, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](96, "mat-form-field", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](97, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](98, "Total Price");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](99, "input", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function OthreqComponent_Template_input_ngModelChange_99_listener($event) { return ctx.totalcost = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](100, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](101, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](102, "mat-form-field", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](103, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](104, "Other Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](105, "textarea", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](106, "mat-icon", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](107, "star");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](108, OthreqComponent_mat_error_108_Template, 2, 0, "mat-error", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](109, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](110, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](111, "button", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](112, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](113, "button", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OthreqComponent_Template_button_click_113_listener() { return ctx.thisformis(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](114, "Cancel");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", ctx.empdata.empname);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.empdata.empname)("readonly", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", ctx.jstoday);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.jstoday)("readonly", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.getchannel);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.form.get("channel").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", ctx.empdata.dept);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.empdata.dept)("readonly", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", ctx.itemsdata.productcode);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.itemsdata.productcode)("readonly", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.itemsdata.name)("readonly", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.itemsdata.category)("readonly", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.itemsdata.description1)("readonly", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.itemsdata.description2)("readonly", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.itemsdata.purchasecost)("readonly", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.form.get("quantity").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.totalcost)("value", ctx.totalcost)("readonly", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.form.get("channel").hasError("required"));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_material_select__WEBPACK_IMPORTED_MODULE_8__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIcon"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatSuffix"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NumberValueAccessor"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"], _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MatOption"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatError"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VtcGJvYXJkL290aHJlcS9vdGhyZXEuY29tcG9uZW50LnNhc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](OthreqComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-othreq',
                templateUrl: './othreq.component.html',
                styleUrls: ['./othreq.component.sass']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }]; }, null); })();


/***/ }),

/***/ "13l8":
/*!*********************************************!*\
  !*** ./src/app/empboard/empboard.module.ts ***!
  \*********************************************/
/*! exports provided: EmpboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmpboardModule", function() { return EmpboardModule; });
/* harmony import */ var _empboard_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./empboard.routing.module */ "jpsT");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _userrequest_userrequest_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./userrequest/userrequest.component */ "M6RX");
/* harmony import */ var _userstatus_userstatus_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./userstatus/userstatus.component */ "a8zu");
/* harmony import */ var _usersdashboard_usersdashboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./usersdashboard/usersdashboard.component */ "DW5d");
/* harmony import */ var _fullcalendar_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fullcalendar/angular */ "IvIE");
/* harmony import */ var ng_apexcharts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-apexcharts */ "CV0D");
/* harmony import */ var ngx_echarts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-echarts */ "DKVz");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "Kdsb");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng2-charts */ "LPYB");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/autocomplete */ "/1cH");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/badge */ "TU8p");
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/bottom-sheet */ "2ChS");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/button-toggle */ "jaxi");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var ng_mat_select_infinite_scroll__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ng-mat-select-infinite-scroll */ "5PC7");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/chips */ "A5z7");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/grid-list */ "zkoq");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/progress-bar */ "bv9b");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/radio */ "QibW");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/material/slide-toggle */ "1jcm");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/material/slider */ "5RNC");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @angular/material/stepper */ "xHqg");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! @angular/material/tree */ "8yBR");
/* harmony import */ var _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! @ckeditor/ckeditor5-angular */ "zioG");
/* harmony import */ var angular_archwizard__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! angular-archwizard */ "mkVx");
/* harmony import */ var ngx_color_picker__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ngx-color-picker */ "R9Cn");
/* harmony import */ var ngx_custom_validators__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ngx-custom-validators */ "uxn7");
/* harmony import */ var ngx_dropzone_wrapper__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ngx-dropzone-wrapper */ "vV3i");
/* harmony import */ var ngx_mask__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ngx-mask */ "tmjD");
/* harmony import */ var ngx_material_file_input__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ngx-material-file-input */ "7ZcW");
/* harmony import */ var _forms_forms_routing_module__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ../forms/forms-routing.module */ "a03z");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "lDzL");
/* harmony import */ var angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! angular-ng-autocomplete */ "bH2/");
/* harmony import */ var _othreq_othreq_component__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ./othreq/othreq.component */ "/ty4");
/* harmony import */ var ngx_mat_select_search__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! ngx-mat-select-search */ "WJ5W");






























































class EmpboardModule {
}
EmpboardModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: EmpboardModule });
EmpboardModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function EmpboardModule_Factory(t) { return new (t || EmpboardModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_26__["MatFormFieldModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_29__["MatInputModule"],
            _empboard_routing_module__WEBPACK_IMPORTED_MODULE_0__["empboardRoutingModule"],
            ngx_mat_select_search__WEBPACK_IMPORTED_MODULE_59__["NgxMatSelectSearchModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_26__["MatFormFieldModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_36__["MatSelectModule"],
            ng_mat_select_infinite_scroll__WEBPACK_IMPORTED_MODULE_19__["MatSelectInfiniteScrollModule"],
            ng2_charts__WEBPACK_IMPORTED_MODULE_10__["ChartsModule"],
            ngx_echarts__WEBPACK_IMPORTED_MODULE_8__["NgxEchartsModule"],
            _fullcalendar_angular__WEBPACK_IMPORTED_MODULE_6__["FullCalendarModule"],
            ng_apexcharts__WEBPACK_IMPORTED_MODULE_7__["NgApexchartsModule"],
            ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_9__["PerfectScrollbarModule"],
            _forms_forms_routing_module__WEBPACK_IMPORTED_MODULE_55__["FormsRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
            angular_archwizard__WEBPACK_IMPORTED_MODULE_49__["ArchwizardModule"],
            ngx_dropzone_wrapper__WEBPACK_IMPORTED_MODULE_52__["DropzoneModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"].withConfig({ warnOnNgModelWithFormControl: 'never' }),
            _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_48__["CKEditorModule"],
            ngx_custom_validators__WEBPACK_IMPORTED_MODULE_51__["CustomFormsModule"],
            _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_12__["MatAutocompleteModule"],
            _angular_material_badge__WEBPACK_IMPORTED_MODULE_13__["MatBadgeModule"],
            _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_14__["MatBottomSheetModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_15__["MatButtonModule"],
            _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_16__["MatButtonToggleModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_17__["MatCardModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_18__["MatCheckboxModule"],
            angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_57__["AutocompleteLibModule"],
            _angular_material_chips__WEBPACK_IMPORTED_MODULE_20__["MatChipsModule"],
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_22__["MatDatepickerModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_23__["MatDialogModule"],
            _angular_material_divider__WEBPACK_IMPORTED_MODULE_24__["MatDividerModule"],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_25__["MatExpansionModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_26__["MatFormFieldModule"],
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_27__["MatGridListModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_28__["MatIconModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_29__["MatInputModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_30__["MatListModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_31__["MatMenuModule"],
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_32__["MatPaginatorModule"],
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_33__["MatProgressBarModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_34__["MatProgressSpinnerModule"],
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_35__["MatRadioModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_21__["MatRippleModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_36__["MatSelectModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_37__["MatSidenavModule"],
            _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_38__["MatSlideToggleModule"],
            _angular_material_slider__WEBPACK_IMPORTED_MODULE_39__["MatSliderModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_40__["MatSnackBarModule"],
            _angular_material_sort__WEBPACK_IMPORTED_MODULE_41__["MatSortModule"],
            _angular_material_stepper__WEBPACK_IMPORTED_MODULE_42__["MatStepperModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_43__["MatTableModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_44__["MatTabsModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_45__["MatToolbarModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_46__["MatTooltipModule"],
            _angular_material_tree__WEBPACK_IMPORTED_MODULE_47__["MatTreeModule"],
            ngx_mask__WEBPACK_IMPORTED_MODULE_53__["NgxMaskModule"],
            ngx_color_picker__WEBPACK_IMPORTED_MODULE_50__["ColorPickerModule"],
            ngx_material_file_input__WEBPACK_IMPORTED_MODULE_54__["MaterialFileInputModule"],
            _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_56__["NgxDatatableModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](EmpboardModule, { declarations: [_userrequest_userrequest_component__WEBPACK_IMPORTED_MODULE_3__["UserrequestComponent"], _userstatus_userstatus_component__WEBPACK_IMPORTED_MODULE_4__["UserstatusComponent"], _usersdashboard_usersdashboard_component__WEBPACK_IMPORTED_MODULE_5__["UsersdashboardComponent"], _othreq_othreq_component__WEBPACK_IMPORTED_MODULE_58__["OthreqComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_26__["MatFormFieldModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_29__["MatInputModule"],
        _empboard_routing_module__WEBPACK_IMPORTED_MODULE_0__["empboardRoutingModule"],
        ngx_mat_select_search__WEBPACK_IMPORTED_MODULE_59__["NgxMatSelectSearchModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_26__["MatFormFieldModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_36__["MatSelectModule"],
        ng_mat_select_infinite_scroll__WEBPACK_IMPORTED_MODULE_19__["MatSelectInfiniteScrollModule"],
        ng2_charts__WEBPACK_IMPORTED_MODULE_10__["ChartsModule"],
        ngx_echarts__WEBPACK_IMPORTED_MODULE_8__["NgxEchartsModule"],
        _fullcalendar_angular__WEBPACK_IMPORTED_MODULE_6__["FullCalendarModule"],
        ng_apexcharts__WEBPACK_IMPORTED_MODULE_7__["NgApexchartsModule"],
        ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_9__["PerfectScrollbarModule"],
        _forms_forms_routing_module__WEBPACK_IMPORTED_MODULE_55__["FormsRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
        angular_archwizard__WEBPACK_IMPORTED_MODULE_49__["ArchwizardModule"],
        ngx_dropzone_wrapper__WEBPACK_IMPORTED_MODULE_52__["DropzoneModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"], _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_48__["CKEditorModule"],
        ngx_custom_validators__WEBPACK_IMPORTED_MODULE_51__["CustomFormsModule"],
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_12__["MatAutocompleteModule"],
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_13__["MatBadgeModule"],
        _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_14__["MatBottomSheetModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_15__["MatButtonModule"],
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_16__["MatButtonToggleModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_17__["MatCardModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_18__["MatCheckboxModule"],
        angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_57__["AutocompleteLibModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_20__["MatChipsModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_22__["MatDatepickerModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_23__["MatDialogModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_24__["MatDividerModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_25__["MatExpansionModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_26__["MatFormFieldModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_27__["MatGridListModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_28__["MatIconModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_29__["MatInputModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_30__["MatListModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_31__["MatMenuModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_32__["MatPaginatorModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_33__["MatProgressBarModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_34__["MatProgressSpinnerModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_35__["MatRadioModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_21__["MatRippleModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_36__["MatSelectModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_37__["MatSidenavModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_38__["MatSlideToggleModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_39__["MatSliderModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_40__["MatSnackBarModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_41__["MatSortModule"],
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_42__["MatStepperModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_43__["MatTableModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_44__["MatTabsModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_45__["MatToolbarModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_46__["MatTooltipModule"],
        _angular_material_tree__WEBPACK_IMPORTED_MODULE_47__["MatTreeModule"],
        ngx_mask__WEBPACK_IMPORTED_MODULE_53__["NgxMaskModule"],
        ngx_color_picker__WEBPACK_IMPORTED_MODULE_50__["ColorPickerModule"],
        ngx_material_file_input__WEBPACK_IMPORTED_MODULE_54__["MaterialFileInputModule"],
        _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_56__["NgxDatatableModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](EmpboardModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [_userrequest_userrequest_component__WEBPACK_IMPORTED_MODULE_3__["UserrequestComponent"], _userstatus_userstatus_component__WEBPACK_IMPORTED_MODULE_4__["UserstatusComponent"], _usersdashboard_usersdashboard_component__WEBPACK_IMPORTED_MODULE_5__["UsersdashboardComponent"], _othreq_othreq_component__WEBPACK_IMPORTED_MODULE_58__["OthreqComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_26__["MatFormFieldModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_29__["MatInputModule"],
                    _empboard_routing_module__WEBPACK_IMPORTED_MODULE_0__["empboardRoutingModule"],
                    ngx_mat_select_search__WEBPACK_IMPORTED_MODULE_59__["NgxMatSelectSearchModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_26__["MatFormFieldModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_36__["MatSelectModule"],
                    ng_mat_select_infinite_scroll__WEBPACK_IMPORTED_MODULE_19__["MatSelectInfiniteScrollModule"],
                    ng2_charts__WEBPACK_IMPORTED_MODULE_10__["ChartsModule"],
                    ngx_echarts__WEBPACK_IMPORTED_MODULE_8__["NgxEchartsModule"],
                    _fullcalendar_angular__WEBPACK_IMPORTED_MODULE_6__["FullCalendarModule"],
                    ng_apexcharts__WEBPACK_IMPORTED_MODULE_7__["NgApexchartsModule"],
                    ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_9__["PerfectScrollbarModule"],
                    _forms_forms_routing_module__WEBPACK_IMPORTED_MODULE_55__["FormsRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
                    angular_archwizard__WEBPACK_IMPORTED_MODULE_49__["ArchwizardModule"],
                    ngx_dropzone_wrapper__WEBPACK_IMPORTED_MODULE_52__["DropzoneModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"].withConfig({ warnOnNgModelWithFormControl: 'never' }),
                    _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_48__["CKEditorModule"],
                    ngx_custom_validators__WEBPACK_IMPORTED_MODULE_51__["CustomFormsModule"],
                    _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_12__["MatAutocompleteModule"],
                    _angular_material_badge__WEBPACK_IMPORTED_MODULE_13__["MatBadgeModule"],
                    _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_14__["MatBottomSheetModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_15__["MatButtonModule"],
                    _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_16__["MatButtonToggleModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_17__["MatCardModule"],
                    _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_18__["MatCheckboxModule"],
                    angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_57__["AutocompleteLibModule"],
                    _angular_material_chips__WEBPACK_IMPORTED_MODULE_20__["MatChipsModule"],
                    _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_22__["MatDatepickerModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_23__["MatDialogModule"],
                    _angular_material_divider__WEBPACK_IMPORTED_MODULE_24__["MatDividerModule"],
                    _angular_material_expansion__WEBPACK_IMPORTED_MODULE_25__["MatExpansionModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_26__["MatFormFieldModule"],
                    _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_27__["MatGridListModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_28__["MatIconModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_29__["MatInputModule"],
                    _angular_material_list__WEBPACK_IMPORTED_MODULE_30__["MatListModule"],
                    _angular_material_menu__WEBPACK_IMPORTED_MODULE_31__["MatMenuModule"],
                    _angular_material_paginator__WEBPACK_IMPORTED_MODULE_32__["MatPaginatorModule"],
                    _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_33__["MatProgressBarModule"],
                    _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_34__["MatProgressSpinnerModule"],
                    _angular_material_radio__WEBPACK_IMPORTED_MODULE_35__["MatRadioModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_21__["MatRippleModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_36__["MatSelectModule"],
                    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_37__["MatSidenavModule"],
                    _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_38__["MatSlideToggleModule"],
                    _angular_material_slider__WEBPACK_IMPORTED_MODULE_39__["MatSliderModule"],
                    _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_40__["MatSnackBarModule"],
                    _angular_material_sort__WEBPACK_IMPORTED_MODULE_41__["MatSortModule"],
                    _angular_material_stepper__WEBPACK_IMPORTED_MODULE_42__["MatStepperModule"],
                    _angular_material_table__WEBPACK_IMPORTED_MODULE_43__["MatTableModule"],
                    _angular_material_tabs__WEBPACK_IMPORTED_MODULE_44__["MatTabsModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_45__["MatToolbarModule"],
                    _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_46__["MatTooltipModule"],
                    _angular_material_tree__WEBPACK_IMPORTED_MODULE_47__["MatTreeModule"],
                    ngx_mask__WEBPACK_IMPORTED_MODULE_53__["NgxMaskModule"],
                    ngx_color_picker__WEBPACK_IMPORTED_MODULE_50__["ColorPickerModule"],
                    ngx_material_file_input__WEBPACK_IMPORTED_MODULE_54__["MaterialFileInputModule"],
                    _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_56__["NgxDatatableModule"],
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "5PC7":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/ng-mat-select-infinite-scroll/__ivy_ngcc__/fesm2015/ng-mat-select-infinite-scroll.js ***!
  \***********************************************************************************************************/
/*! exports provided: MatSelectInfiniteScrollDirective, MatSelectInfiniteScrollModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatSelectInfiniteScrollDirective", function() { return MatSelectInfiniteScrollDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatSelectInfiniteScrollModule", function() { return MatSelectInfiniteScrollModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");







class MatSelectInfiniteScrollDirective {
    constructor(matSelect, ngZone) {
        this.matSelect = matSelect;
        this.ngZone = ngZone;
        this.threshold = '15%';
        this.debounceTime = 150;
        this.infiniteScroll = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.thrPx = 0;
        this.thrPc = 0;
        this.singleOptionHeight = _angular_material_select__WEBPACK_IMPORTED_MODULE_1__["SELECT_ITEM_HEIGHT_EM"];
        this.destroyed$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    ngOnInit() {
        this.evaluateThreshold();
    }
    ngAfterViewInit() {
        this.matSelect.openedChange.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroyed$)).subscribe((opened) => {
            if (opened) {
                this.panel = this.matSelect.panel.nativeElement;
                this.singleOptionHeight = this.getSelectItemHeightPx();
                this.registerScrollListener();
            }
        });
    }
    ngOnDestroy() {
        this.destroyed$.next(true);
        this.destroyed$.complete();
    }
    evaluateThreshold() {
        if (this.threshold.lastIndexOf('%') > -1) {
            this.thrPx = 0;
            this.thrPc = (parseFloat(this.threshold) / 100);
        }
        else {
            this.thrPx = parseFloat(this.threshold);
            this.thrPc = 0;
        }
    }
    registerScrollListener() {
        Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["fromEvent"])(this.panel, 'scroll').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroyed$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(this.debounceTime), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])((event) => {
            this.handleScrollEvent(event);
        })).subscribe();
    }
    handleScrollEvent(event) {
        this.ngZone.runOutsideAngular(() => {
            if (this.complete) {
                return;
            }
            const countOfRenderedOptions = this.matSelect.options.length;
            const infiniteScrollDistance = this.singleOptionHeight * countOfRenderedOptions;
            const threshold = this.thrPc !== 0 ? (infiniteScrollDistance * this.thrPc) : this.thrPx;
            const scrolledDistance = this.panel.clientHeight + event.target.scrollTop;
            if ((scrolledDistance + threshold) >= infiniteScrollDistance) {
                this.ngZone.run(() => this.infiniteScroll.emit());
            }
        });
    }
    getSelectItemHeightPx() {
        return parseFloat(getComputedStyle(this.panel).fontSize) * _angular_material_select__WEBPACK_IMPORTED_MODULE_1__["SELECT_ITEM_HEIGHT_EM"];
    }
}
MatSelectInfiniteScrollDirective.ɵfac = function MatSelectInfiniteScrollDirective_Factory(t) { return new (t || MatSelectInfiniteScrollDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_select__WEBPACK_IMPORTED_MODULE_1__["MatSelect"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"])); };
MatSelectInfiniteScrollDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: MatSelectInfiniteScrollDirective, selectors: [["", "msInfiniteScroll", ""]], inputs: { threshold: "threshold", debounceTime: "debounceTime", complete: "complete" }, outputs: { infiniteScroll: "infiniteScroll" } });
MatSelectInfiniteScrollDirective.ctorParameters = () => [
    { type: _angular_material_select__WEBPACK_IMPORTED_MODULE_1__["MatSelect"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }
];
MatSelectInfiniteScrollDirective.propDecorators = {
    threshold: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    debounceTime: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    complete: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    infiniteScroll: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatSelectInfiniteScrollDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[msInfiniteScroll]'
            }]
    }], function () { return [{ type: _angular_material_select__WEBPACK_IMPORTED_MODULE_1__["MatSelect"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }]; }, { threshold: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], debounceTime: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], infiniteScroll: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], complete: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();

class MatSelectInfiniteScrollModule {
}
MatSelectInfiniteScrollModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MatSelectInfiniteScrollModule });
MatSelectInfiniteScrollModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MatSelectInfiniteScrollModule_Factory(t) { return new (t || MatSelectInfiniteScrollModule)(); }, imports: [[
            _angular_material_select__WEBPACK_IMPORTED_MODULE_1__["MatSelectModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MatSelectInfiniteScrollModule, { declarations: function () { return [MatSelectInfiniteScrollDirective]; }, imports: function () { return [_angular_material_select__WEBPACK_IMPORTED_MODULE_1__["MatSelectModule"]]; }, exports: function () { return [MatSelectInfiniteScrollDirective]; } }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatSelectInfiniteScrollModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [MatSelectInfiniteScrollDirective],
                imports: [
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_1__["MatSelectModule"]
                ],
                exports: [MatSelectInfiniteScrollDirective]
            }]
    }], null, null); })();

/*
 * Public API Surface of ng-mat-select-infinite-scroll
 */

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=ng-mat-select-infinite-scroll.js.map

/***/ }),

/***/ "DW5d":
/*!*********************************************************************!*\
  !*** ./src/app/empboard/usersdashboard/usersdashboard.component.ts ***!
  \*********************************************************************/
/*! exports provided: UsersdashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersdashboardComponent", function() { return UsersdashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! xlsx */ "EUZL");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");





var d = new Date(), date = d.getDate(), month = d.getMonth(), year = d.getFullYear();
class UsersdashboardComponent {
    constructor(http) {
        this.http = http;
        this.totalpricehigh = {};
        this.totalpricelow = {};
        this.totalordershigh = {};
        this.totalorderslow = {};
        this.totalcount = {};
        this.penddingcount = {};
        this.Rejected = {};
        this.completed = {};
        this.myFiles = [];
    }
    getDatatotalcount() {
        this.http.get('http://localhost:2020/emprequestrount/' + this.id).subscribe(res => {
            this.totalcount = res;
            console.log(this.totalcount.count);
        });
    }
    getDatapenddingcount() {
        this.http.get('http://localhost:2020/emprequestrountpendding/' + this.id).subscribe(res => {
            this.penddingcount = res;
        });
    }
    getDataRejectedcount() {
        this.http.get('http://localhost:2020/emprequestrountRejected/' + this.id).subscribe(res => {
            this.Rejected = res;
        });
    }
    getDatacompletedcount() {
        this.http.get('http://localhost:2020/emprequestrountcompleted/' + this.id).subscribe(res => {
            this.completed = res;
        });
    }
    // area chart start
    // barChart
    // end bar chart
    toprequestrountcompleted() {
        this.http.get('http://localhost:2020/toprequestrountcompleted').subscribe(res => {
            this.totalpricehigh = res;
        });
    }
    lowrequestrountcompleted() {
        this.http.get('http://localhost:2020/lowrequestrountcompleted').subscribe(res => {
            this.totalpricelow = res;
        });
    }
    topordersrequestrount() {
        this.http.get('http://localhost:2020/topordersrequestrount').subscribe(res => {
            this.totalordershigh = res;
        });
    }
    lowordersrequestrount() {
        this.http.get('http://localhost:2020/lowordersrequestrount').subscribe(res => {
            this.totalorderslow = res;
        });
    }
    onFileChange(event) {
        for (var i = 0; i < event.target.files.length; i++) {
            this.myFiles.push(event.target.files[i]);
        }
        /* wire up file reader */
        const frmData = new FormData();
        // tslint:disable-next-line: prefer-for-of
        for (var i = 0; i < this.myFiles.length; i++) {
            frmData.append('fileUpload', this.myFiles[i]);
        }
        const target = (event.target);
        if (target.files.length !== 1) {
            throw new Error('Cannot use multiple files');
        }
        const reader = new FileReader();
        reader.readAsBinaryString(target.files[0]);
        reader.onload = (e) => {
            /* create workbook */
            const binarystr = e.target.result;
            const wb = xlsx__WEBPACK_IMPORTED_MODULE_1__["read"](binarystr, { type: 'binary' });
            /* selected the first sheet */
            const wsname = wb.SheetNames[0];
            const ws = wb.Sheets[wsname];
            /* save data */
            const data = xlsx__WEBPACK_IMPORTED_MODULE_1__["utils"].sheet_to_json(ws); // to get 2d array pass 2nd parameter as object {header: 1}
            console.log('data length');
            console.log((data.length));
            // this.http.post('http://localhost:2020/fileupload', frmData).subscribe();
            // tslint:disable-next-line: prefer-for-of
            for (var i = 0; i < data.length; i++) {
                var eachItems = {
                    category: data[i]['Item Class'],
                    productcode: data[i]['Item'],
                    description2: data[i]['Extended description 2'],
                    description1: data[i]['Extended description 1'],
                    name: data[i]['Description'],
                    purchasecost: data[i]['Std Cost'],
                };
                this.http.post('http://localhost:2020/uploadproduct', eachItems).subscribe();
                // var eachItem =
                //              {
                //                  Whs: data[i]['Whs'],
                //                  Item: data[i]['Item'],
                //                  Extended_description_2: data[i]['Extended description 2'],
                //                  Extended_description_1: data[i]['Extended description 1'],
                //                  Description: data[i]['Description'],
                //                  On_hand: data[i]['On-hand'],
                //                  On_order: data[i]['On-order'],
                //                  Std_Cost: data[i]['Std Cost'],
                //                  Item_Class: data[i]['Item Class'],
                //              };
                // this.http.post('http://localhost:2020/fileupload', eachItem).subscribe();
            }
            console.log(data[0]); // Data will be logged in array format containing objects
        };
    }
    ngOnInit() {
        this.id = localStorage.getItem('userid');
        this.toprequestrountcompleted();
        this.topordersrequestrount();
        this.lowrequestrountcompleted();
        this.lowordersrequestrount();
        this.getDatapenddingcount();
        this.getDatatotalcount();
        this.getDataRejectedcount();
        this.getDatacompletedcount();
    }
}
UsersdashboardComponent.ɵfac = function UsersdashboardComponent_Factory(t) { return new (t || UsersdashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
UsersdashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UsersdashboardComponent, selectors: [["app-usersdashboard"]], decls: 48, vars: 4, consts: [[1, "content"], [1, "container-fluid"], [1, "row"], [1, "col-lg-3", "col-sm-6"], [1, "info-box7", "l-bg-green", "order-info-box7"], [1, "info-box7-block"], [1, "m-b-20"], [1, "text-right"], [1, "fas", "fa-cart-plus", "pull-left"], [1, "m-b-0"], [1, "info-box7", "l-bg-purple", "order-info-box7"], [1, "fas", "fa-business-time", "pull-left"], [1, "info-box7", "l-bg-orange", "order-info-box7"], [1, "fas", "fa-chart-line", "pull-left"], [1, "info-box7", "l-bg-cyan", "order-info-box7"], [1, "fas", "fa-dollar-sign", "pull-left"], ["id", "my-file-selector", "type", "file", "name", "uploadExcel", 3, "change"]], template: function UsersdashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h4", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Total Requests");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h2", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h4", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Pending Requests");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h2", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "h4", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Rejected Request");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "h2", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "h4", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Completed Requests");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "h2", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function UsersdashboardComponent_Template_input_change_47_listener($event) { return ctx.onFileChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.totalcount.count, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.penddingcount.count);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.Rejected.count);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.completed.count);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VtcGJvYXJkL3VzZXJzZGFzaGJvYXJkL3VzZXJzZGFzaGJvYXJkLmNvbXBvbmVudC5zYXNzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UsersdashboardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-usersdashboard',
                templateUrl: './usersdashboard.component.html',
                styleUrls: ['./usersdashboard.component.sass']
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "M6RX":
/*!***************************************************************!*\
  !*** ./src/app/empboard/userrequest/userrequest.component.ts ***!
  \***************************************************************/
/*! exports provided: UserrequestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserrequestComponent", function() { return UserrequestComponent; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var ng_mat_select_infinite_scroll__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-mat-select-infinite-scroll */ "5PC7");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var ngx_mat_select_search__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-mat-select-search */ "WJ5W");
/* harmony import */ var angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! angular-ng-autocomplete */ "bH2/");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/button */ "bTqV");























const _c0 = ["matSelectInfiniteScroll"];
function UserrequestComponent_mat_option_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const bank_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", bank_r18.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", bank_r18.name, " ");
} }
function UserrequestComponent_ng_template_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "a", 52);
} if (rf & 2) {
    const item_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", item_r19.description1, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
} }
function UserrequestComponent_ng_template_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 52);
} if (rf & 2) {
    const notFound_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", notFound_r20, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
} }
function UserrequestComponent_ng_template_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "a", 52);
} if (rf & 2) {
    const item_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", item_r21.description2, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
} }
function UserrequestComponent_ng_template_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 52);
} if (rf & 2) {
    const notFound_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", notFound_r22, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
} }
function UserrequestComponent_ng_template_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "a", 52);
} if (rf & 2) {
    const item_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", item_r23.name, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
} }
function UserrequestComponent_ng_template_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 52);
} if (rf & 2) {
    const notFound_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", notFound_r24, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
} }
function UserrequestComponent_mat_option_63_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function UserrequestComponent_mat_option_63_Template_mat_option_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r27); const option_r25 = ctx.$implicit; return option_r25.id = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r25 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", option_r25.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", option_r25.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](option_r25.name);
} }
function UserrequestComponent_mat_error_66_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Channel input is Required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function UserrequestComponent_mat_error_133_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Quantity Number input is Required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function UserrequestComponent_mat_error_139_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Total Cost Number input is Required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class UserrequestComponent {
    constructor(fb, http, router) {
        this.fb = fb;
        this.http = http;
        this.router = router;
        this.hide = true;
        this.agree = false;
        this.empdata = {};
        this.productdata = {};
        this.getchannel = {};
        /** list with all available data, mocks some sort of backend data source */
        // private mockBankList: Bank[];
        this.mockBankList = [];
        // private mockBankList: Bank[] = Array.from({ length: 100000 }).map((_, i) => ({
        //   id: String(i),
        //   name: `Bank ${i}`
        // }));
        /** control for the selected bank */
        this.bankCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        /** control for the search input value */
        this.searchCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        /** list of data corresponding to the search input */
        this.filteredData$ = this.searchCtrl.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(searchKeyword => {
            if (!searchKeyword) {
                console.log("list", typeof (this.mockBankList), this.mockBankList);
                return this.mockBankList;
            }
            return this.mockBankList.filter((bank) => bank.name.toLowerCase().indexOf(searchKeyword.toLowerCase()) > -1);
        }));
        /** number of items added per batch */
        this.batchSize = 20;
        this.incrementBatchOffset$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.resetBatchOffset$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        /** minimum offset needed for the batch to ensure the selected option is displayed */
        this.minimumBatchOffset$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["combineLatest"])([
            this.filteredData$,
            this.searchCtrl.valueChanges
        ]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(([filteredData, searchValue]) => {
            if (!this.searchCtrl.value && this.bankCtrl.value) {
                const index = filteredData.findIndex(bank => bank.id === this.bankCtrl.value);
                this.itemDetails(this.bankCtrl.value);
                return index + this.batchSize;
            }
            else {
                return 0;
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["startWith"])(0));
        /** length of the visible data / start of the next batch */
        this.batchOffset$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["combineLatest"])([
            Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["merge"])(this.incrementBatchOffset$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mapTo"])(true)), this.resetBatchOffset$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mapTo"])(false))),
            this.minimumBatchOffset$
        ]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["scan"])((batchOffset, [doIncrement, minimumOffset]) => {
            if (doIncrement) {
                return Math.max(batchOffset + this.batchSize, minimumOffset + this.batchSize);
            }
            else {
                return Math.max(minimumOffset, this.batchSize);
            }
        }, this.batchSize));
        /** list of data, filtered by the search keyword, limited to the length accumulated by infinity scrolling */
        this.filteredBatchedData$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["combineLatest"])([
            this.filteredData$,
            this.batchOffset$
        ]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(([filteredData, batchOffset]) => filteredData.slice(0, batchOffset)));
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.numberRegEx = /\-?\d*\.?\d{1,2}/;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            empname: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            issuedby: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            channel: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            date: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            itemcode: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            otherdescription: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            quantity: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            remarks: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            specdrawing: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            totalprice: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
        });
        this.itemsdata = {};
        this.today = new Date();
        this.errormsg = 'Input should be Number';
        this.searchMoviesCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.isLoading = false;
        this.productdataname = {};
        this.productdatadic1 = {};
        this.productdatadic2 = {};
        this.productdatacode = {};
        this.keycode = 'name';
        this.productname = {};
        this.key1 = 'description1';
        this.key2 = 'description2';
        this.keyword = 'name';
        this.form = this.fb.group({
            empname: [''],
            issuedby: [''],
            channel: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            date: [''],
            itemcode: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(this.numberRegEx)],
            otherdescription: [''],
            quantity: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern("^[0-9]*$")]],
            remarks: [''],
            specdrawing: [''],
            totalprice: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern("^[0-9]*$")]],
        });
        this.jstoday = Object(_angular_common__WEBPACK_IMPORTED_MODULE_5__["formatDate"])(this.today, 'dd-MM-yyyy hh:mm:ss a', 'en-US', '+0530');
    }
    getNextBatch() {
        this.incrementBatchOffset$.next();
    }
    onChangeEvent(event) {
        this.totalcost = event.target.value * this.itemsdata.purchasecost;
        //// console.log(this.itemsdata.purchasecost);
        //// console.log(this.totalcost);
    }
    itemDetails(id) {
        if (String(id) != 'undefined') {
            this.http.get(this.mainurl + 'product/' + id).subscribe(res => {
                this.itemsdata = res;
                //// console.log("all data for the request", this.itemsdata);
            });
        }
    }
    thisformis() {
        this.form = this.fb.group({
            channel: [''],
            otherdescription: [''],
            quantity: [''],
            remarks: [''],
            specdrawing: [''],
            totalprice: [''],
        });
    }
    ngOnDestroy() {
        this.destroy$.next();
    }
    /**
     * Load the next batch
     */
    ngOnInit() {
        this.infiniteScrollSelect.openedChange.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.destroy$)).subscribe(opened => {
            // after opening, reset the batch offset
            if (opened) {
                this.resetBatchOffset$.next();
            }
        });
        this.userid = localStorage.getItem('userid');
        this.mainurl = localStorage.getItem('mainurl');
        this.http.get(this.mainurl + 'productcode').subscribe(res => {
            this.productdatacode = res;
            // this.updateList(this.productdatacode);
            // localStorage.setItem('productdetails', JSON.stringify(this.productdata));
            // console.log("all names", this.productdatacode);
        });
        this.http.get(this.mainurl + 'emp/' + this.userid).subscribe(res => {
            this.empdata = res;
            // console.log("all data", this.empdata);
        });
        // this.http.get(this.mainurl + 'product').subscribe(res => {
        //   this.productdata = res;
        //  // localStorage.setItem('productdetails', JSON.stringify(this.productdata));
        //  // console.log("all data", this.productdata);
        // });
        this.http.get(this.mainurl + 'productname').subscribe(res => {
            this.productdataname = res;
            this.mockBankList = res;
            // localStorage.setItem('productdetails', JSON.stringify(this.productdata));
            // console.log("all names", this.productdataname);
            //  localStorage.setItem('productdataname', JSON.stringify(this.productdataname));
        });
        // this.productdataname =  JSON.parse(localStorage.getItem('productdataname'));
        this.http.get(this.mainurl + 'productdis1').subscribe(res => {
            this.productdatadic1 = res;
            // localStorage.setItem('productdetails', JSON.stringify(this.productdata));
            // console.log("all names", this.productdatadic1);
        });
        this.http.get(this.mainurl + 'productdis2').subscribe(res => {
            this.productdatadic2 = res;
            // localStorage.setItem('productdetails', JSON.stringify(this.productdata));
            // console.log("all names", this.productdatadic2);
        });
        this.http.get(this.mainurl + 'channel').subscribe(res => {
            this.getchannel = res;
            // console.log("all data", this.getchannel);
        });
    }
    getdatasearch() {
    }
    // successAlertNotification(tag){
    //   Swal.fire('Hi', 'Congrats! operation successfull', tag)
    // }
    successAlertNotification(tag) {
        // Swal.fire( 'new request came',dataget)
        sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
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
    onRegister() {
        console.log('Form Value ************************', this.form.value);
        if (this.form.value != undefined && this.form.value) {
            this.http.post(this.mainurl + 'emprequest', this.form.value).subscribe((val) => {
                //console.log("POST call successful value returned in body",val);
                this.tagresponce = val;
                //  alert(this.tagresponce.message);
                // Swal.fire( this.tagresponce.message)
                sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
                    title: 'New Request Received' + this.tagresponce.message,
                    text: '',
                    icon: 'info',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Yes, Acknowledge it!'
                }).then((result) => {
                    if (result.isConfirmed) {
                        this.router.navigate(['/empboard/reqs']);
                    }
                });
            }, response => {
            }, () => {
                //console.log("The POST observable is now completed.");
            });
            this.data = [...this.data];
            //// console.log(this.data);
            this.form.reset();
            this.closeAddModal.nativeElement.click();
            this.showNotification('bg-green', 'Add Record Successfully', 'bottom', 'right');
        }
    }
    showNotification(arg0, arg1, arg2, arg3) {
        throw new Error('Method not implemented.');
    }
    selectEvent(item) {
        if (item) {
            // console.log(item.id);
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
            // console.log('this is selected',e.id);
            this.itemDetails(e.id);
            this.itemcodefroms = e.id;
            //// console.log('this is code',this.itemcodefroms);
        }
    }
}
UserrequestComponent.ɵfac = function UserrequestComponent_Factory(t) { return new (t || UserrequestComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"])); };
UserrequestComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: UserrequestComponent, selectors: [["app-userrequest"]], viewQuery: function UserrequestComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstaticViewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.infiniteScrollSelect = _t.first);
    } }, decls: 146, vars: 50, consts: [[1, "content"], [1, "container-fluid"], [1, "row", "clearfix"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12"], [1, "card"], [1, "header"], [1, "header-dropdown", "m-r--5"], [1, "dropdown"], ["href", "#", "onClick", "return false;", "data-toggle", "dropdown", "role", "button", "aria-haspopup", "true", "aria-expanded", "false"], [1, "material-icons"], [1, "body"], [1, "register-form", "m-4", 3, "formGroup", "ngSubmit"], [1, "row"], [1, "col-xl-6", "col-lg-6", "col-md-12", "col-sm-12", "mb-2"], [2, "width", "600px"], ["msInfiniteScroll", "", "placeholder", "Select Item Name", 3, "formControl", "infiniteScroll"], ["matSelectInfiniteScroll", ""], ["placeholderLabel", "search", "noEntriesFoundLabel", "No entry matches", 3, "formControl", "disableScrollToActiveOnOptionsChanged"], [3, "value", 4, "ngFor", "ngForOf"], [1, "ng-autocomplete"], ["placeHolder", "Enter the Item Description 1", 3, "data", "searchKeyword", "itemTemplate", "notFoundTemplate", "selected", "inputChanged", "inputFocused"], ["itemTemplates", ""], ["notFoundTemplates", ""], ["placeHolder", "Enter the item Description 2", 3, "data", "searchKeyword", "itemTemplate", "notFoundTemplate", "selected", "inputChanged", "inputFocused"], ["itemTemplates2", ""], ["notFoundTemplates2", ""], ["placeHolder", "Enter the Item Code", 3, "data", "searchKeyword", "itemTemplate", "notFoundTemplate", "selected", "inputChanged", "inputFocused"], ["itemTemplatescode", ""], ["notFoundTemplatescode", ""], [1, "col-xl-4", "col-lg-4", "col-md-12", "col-sm-12", "mb-2"], ["appearance", "outline", 1, "example-full-width"], ["matInput", "", "formControlName", "empname", 3, "ngModel", "value", "readonly", "ngModelChange"], ["matInput", "", "formControlName", "date", 3, "ngModel", "value", "readonly", "ngModelChange"], ["formControlName", "channel"], [3, "ngModel", "value", "ngModelChange", 4, "ngFor", "ngForOf"], ["matSuffix", ""], [4, "ngIf"], ["matInput", "", 3, "ngModel", "value", "readonly", "ngModelChange"], ["matInput", "", "placeholder", "remarks", "formControlName", "remarks"], ["matInput", "", "formControlName", "itemcode", 3, "ngModel", "value", "readonly", "ngModelChange"], ["matInput", "", "placeholder", "Item Name", 3, "value", "readonly"], ["matInput", "", "placeholder", "Ex. John", "formControlName", "category", 3, "value", "readonly"], ["matInput", "", "placeholder", "Ex. John", 3, "value", "readonly"], ["matInput", "", "placeholder", "specdrawing", "formControlName", "specdrawing"], ["matInput", "", "placeholder", "otherdescription", "formControlName", "otherdescription"], ["appearance", "outline", 1, "example-full-width", 3, "change"], ["matInput", "", "placeholder", "Qunatity", "formControlName", "quantity", "type", "number"], ["matInput", "", "placeholder", "totalprice", "formControlName", "totalprice", 3, "ngModel", "value", "readonly", "ngModelChange"], [1, "col-xl-12", "col-lg-12", "col-md-12", "col-sm-12", "mb-2"], ["mat-raised-button", "", "color", "primary", 1, "mr-3"], ["type", "button", "mat-button", "", 3, "click"], [3, "value"], [3, "innerHTML"], [3, "ngModel", "value", "ngModelChange"]], template: function UserrequestComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Request");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function UserrequestComponent_Template_form_ngSubmit_16_listener() { return ctx.onRegister(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "mat-form-field", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "mat-select", 15, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("infiniteScroll", function UserrequestComponent_Template_mat_select_infiniteScroll_20_listener() { return ctx.getNextBatch(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "mat-option");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "ngx-mat-select-search", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, UserrequestComponent_mat_option_24_Template, 2, 2, "mat-option", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](25, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "ng-autocomplete", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("selected", function UserrequestComponent_Template_ng_autocomplete_selected_28_listener($event) { return ctx.selectEvent($event); })("inputChanged", function UserrequestComponent_Template_ng_autocomplete_inputChanged_28_listener($event) { return ctx.onChangeSearch($event); })("inputFocused", function UserrequestComponent_Template_ng_autocomplete_inputFocused_28_listener($event) { return ctx.onFocused($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](29, UserrequestComponent_ng_template_29_Template, 1, 1, "ng-template", null, 21, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](31, UserrequestComponent_ng_template_31_Template, 1, 1, "ng-template", null, 22, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "ng-autocomplete", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("selected", function UserrequestComponent_Template_ng_autocomplete_selected_35_listener($event) { return ctx.selectEvent($event); })("inputChanged", function UserrequestComponent_Template_ng_autocomplete_inputChanged_35_listener($event) { return ctx.onChangeSearch($event); })("inputFocused", function UserrequestComponent_Template_ng_autocomplete_inputFocused_35_listener($event) { return ctx.onFocused($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](36, UserrequestComponent_ng_template_36_Template, 1, 1, "ng-template", null, 24, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](38, UserrequestComponent_ng_template_38_Template, 1, 1, "ng-template", null, 25, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "ng-autocomplete", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("selected", function UserrequestComponent_Template_ng_autocomplete_selected_42_listener($event) { return ctx.selectEvent($event); })("inputChanged", function UserrequestComponent_Template_ng_autocomplete_inputChanged_42_listener($event) { return ctx.onChangeSearch($event); })("inputFocused", function UserrequestComponent_Template_ng_autocomplete_inputFocused_42_listener($event) { return ctx.onFocused($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](43, UserrequestComponent_ng_template_43_Template, 1, 1, "ng-template", null, 27, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](45, UserrequestComponent_ng_template_45_Template, 1, 1, "ng-template", null, 28, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "mat-form-field", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, "Emp Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "input", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function UserrequestComponent_Template_input_ngModelChange_52_listener($event) { return ctx.empdata.empname = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "mat-form-field", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56, "Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "input", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function UserrequestComponent_Template_input_ngModelChange_57_listener($event) { return ctx.jstoday = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "mat-form-field", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61, "Channel");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "mat-select", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](63, UserrequestComponent_mat_option_63_Template, 2, 3, "mat-option", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "mat-icon", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](65, "star");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](66, UserrequestComponent_mat_error_66_Template, 2, 0, "mat-error", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "mat-form-field", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](71, "Department");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "input", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function UserrequestComponent_Template_input_ngModelChange_72_listener($event) { return ctx.empdata.dept = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "mat-form-field", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](76, "Machine");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](77, "input", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "mat-form-field", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](81, "Item Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "input", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function UserrequestComponent_Template_input_ngModelChange_82_listener($event) { return ctx.itemsdata.productcode = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "mat-form-field", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](87, "Item Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](88, "input", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](90, "mat-form-field", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](91, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](92, "Item Category");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](93, "input", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](94, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](95, "mat-form-field", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](96, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](97, "Description 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](98, "input", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](99, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](100, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](101, "mat-form-field", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](102, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](103, "Description 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](104, "input", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](105, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](106, "mat-form-field", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](107, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](108, "Spec Drawing");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](109, "input", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](110, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](111, "mat-form-field", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](112, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](113, "Other Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](114, "input", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](115, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](116, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](117, "mat-form-field", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](118, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](119, "Unit Cost");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](120, "input", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](121, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](122, "mat-form-field", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function UserrequestComponent_Template_mat_form_field_change_122_listener($event) { return ctx.onChangeEvent($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](123, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](124, "Live Quantity");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](125, "input", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](126, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](127, "mat-form-field", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function UserrequestComponent_Template_mat_form_field_change_127_listener($event) { return ctx.onChangeEvent($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](128, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](129, "Quantity");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](130, "input", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](131, "mat-icon", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](132, "star");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](133, UserrequestComponent_mat_error_133_Template, 2, 0, "mat-error", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](134, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](135, "mat-form-field", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](136, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](137, "Total Price");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](138, "input", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function UserrequestComponent_Template_input_ngModelChange_138_listener($event) { return ctx.totalcost = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](139, UserrequestComponent_mat_error_139_Template, 2, 0, "mat-error", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](140, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](141, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](142, "button", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](143, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](144, "button", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UserrequestComponent_Template_button_click_144_listener() { return ctx.thisformis(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](145, "Cancel");
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
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](30);
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](32);
        const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](37);
        const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](39);
        const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](44);
        const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx.bankCtrl);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx.searchCtrl)("disableScrollToActiveOnOptionsChanged", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](25, 48, ctx.filteredBatchedData$));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("data", ctx.productdatadic1)("searchKeyword", ctx.key1)("itemTemplate", _r2)("notFoundTemplate", _r4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("data", ctx.productdatadic2)("searchKeyword", ctx.key2)("itemTemplate", _r6)("notFoundTemplate", _r8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("data", ctx.productdatacode)("searchKeyword", ctx.keycode)("itemTemplate", _r10)("notFoundTemplate", _r12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", ctx.empdata.empname);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.empdata.empname)("readonly", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", ctx.jstoday);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.jstoday)("readonly", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.getchannel);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.form.get("channel").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", ctx.empdata.dept);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.empdata.dept)("readonly", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", ctx.itemsdata.productcode);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.itemsdata.productcode)("readonly", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.itemsdata.name)("readonly", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.itemsdata.category)("readonly", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.itemsdata.description1)("readonly", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.itemsdata.description2)("readonly", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.itemsdata.purchasecost)("readonly", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.itemsdata.livestock)("readonly", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.form.get("quantity").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.totalcost)("value", ctx.totalcost)("readonly", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.form.get("totalprice").hasError("required"));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormField"], _angular_material_select__WEBPACK_IMPORTED_MODULE_8__["MatSelect"], ng_mat_select_infinite_scroll__WEBPACK_IMPORTED_MODULE_10__["MatSelectInfiniteScrollDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlDirective"], _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MatOption"], ngx_mat_select_search__WEBPACK_IMPORTED_MODULE_12__["MatSelectSearchComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_13__["AutocompleteComponent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_14__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["MatIcon"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatSuffix"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NumberValueAccessor"], _angular_material_button__WEBPACK_IMPORTED_MODULE_16__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatError"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["AsyncPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VtcGJvYXJkL3VzZXJyZXF1ZXN0L3VzZXJyZXF1ZXN0LmNvbXBvbmVudC5zYXNzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](UserrequestComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-userrequest',
                templateUrl: './userrequest.component.html',
                styleUrls: ['./userrequest.component.sass']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }]; }, { infiniteScrollSelect: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['matSelectInfiniteScroll', { static: true }]
        }] }); })();


/***/ }),

/***/ "a8zu":
/*!*************************************************************!*\
  !*** ./src/app/empboard/userstatus/userstatus.component.ts ***!
  \*************************************************************/
/*! exports provided: UserstatusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserstatusComponent", function() { return UserstatusComponent; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "lDzL");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");















const _c0 = ["roleTemplate"];
const _c1 = ["closeAddModal"];
const _c2 = ["closeEditModal"];
function UserstatusComponent_ng_template_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Request ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function UserstatusComponent_ng_template_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function UserstatusComponent_ng_template_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Other Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function UserstatusComponent_ng_template_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Item Code");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function UserstatusComponent_ng_template_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "OTP");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function UserstatusComponent_ng_template_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function UserstatusComponent_ng_template_34_Template(rf, ctx) { if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UserstatusComponent_ng_template_34_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r33); const row_r30 = ctx.row; const rowIndex_r31 = ctx.rowIndex; const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r32.editRow(row_r30, rowIndex_r31); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "i", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "mode_edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function UserstatusComponent_mat_error_60_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " empname required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function UserstatusComponent_mat_error_68_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " date required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function UserstatusComponent_mat_error_77_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " itemcode required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function UserstatusComponent_mat_error_85_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " itemname required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function UserstatusComponent_mat_error_94_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " quantity required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function UserstatusComponent_mat_error_102_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Status is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function UserstatusComponent_mat_error_111_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " totalprice required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function UserstatusComponent_mat_error_119_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " remarks required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function UserstatusComponent_mat_error_128_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " rejectreason is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function UserstatusComponent_mat_error_136_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " livestock required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function UserstatusComponent_mat_error_144_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " issuedby required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function UserstatusComponent_div_147_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function UserstatusComponent_ng_template_148_Template(rf, ctx) { if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "button", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UserstatusComponent_ng_template_148_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r35); const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r34.deleteRow(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "i", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class UserstatusComponent {
    constructor(fb, _snackBar, http) {
        this.fb = fb;
        this._snackBar = _snackBar;
        this.http = http;
        this.rows = [];
        this.newselected = {};
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
    onChangeEvent(event) {
        this.totalcost = parseInt(this.unitcostcost) * parseInt(event.target.value);
        console.log('total new price', this.totalcost);
        console.log('new quantity', event.target.value);
    }
    ngOnInit() {
        this.mainurl = localStorage.getItem('mainurl');
        this.username = localStorage.getItem('username');
        this.userrole = localStorage.getItem('userrole');
        console.log(this.username);
        this.getdatareason();
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
            rack: [''],
        });
    }
    fetch(cb) {
        const req = new XMLHttpRequest();
        if (this.userrole != 'Employee') {
            req.open('GET', this.mainurl + 'emprequestuser/' + this.username);
        }
        else {
            req.open('GET', this.mainurl + 'emprequestuser/' + this.username);
        }
        req.onload = () => {
            const data = JSON.parse(req.response);
            cb(data);
            console.log('get json data', data);
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
            rack: row.rack,
        });
        this.selectedRowData = row;
        this.newselected = row;
        console.log('selected row', row);
        this.unitcostcost = row.totalprice / row.quantity;
        console.log('unit price', this.unitcostcost);
    }
    addRow() {
        this.register.patchValue({
            // id: this.getId(10, 100),
            name: this.name,
            code: this.code
        });
    }
    deleteRow() {
        sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
            title: 'Are you sure?',
            text: 'Please check the dependency before deleted',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, keep it'
        }).then((result) => {
            if (result.value) {
                this.data = this.arrayRemove(this.data, this.newselected.id);
                this.http.delete(this.mainurl + 'emprequest/' + this.newselected.id).subscribe();
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
            this.empdata = {
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
UserstatusComponent.ɵfac = function UserstatusComponent_Factory(t) { return new (t || UserstatusComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
UserstatusComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: UserstatusComponent, selectors: [["app-userstatus"]], viewQuery: function UserstatusComponent_Query(rf, ctx) { if (rf & 1) {
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
    } }, decls: 150, vars: 41, consts: [[1, "content"], [1, "container-fluid"], [1, "row", "clearfix"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12"], [1, "card"], [1, "body"], [1, "row"], [1, "col-sm-12"], [1, "ngxTableHeader"], [1, "header-buttons-left", "ml-0"], [1, "dropdown"], [1, "dropdown", "m-l-20"], ["for", "search-input"], [1, "material-icons", "search-icon"], ["placeholder", "Search", "type", "text", "aria-label", "Search box", 1, "browser-default", "search-field", 3, "keyup"], [1, "material", 3, "rows", "columns", "sortType", "columnMode", "headerHeight", "footerHeight", "rowHeight", "limit"], ["table", ""], ["name", "id", 3, "width"], ["ngx-datatable-header-template", ""], ["name", "date", 3, "width"], ["name", "otherdescription", 3, "width"], ["name", "itemcode", 3, "width"], ["name", "otp", 3, "width"], ["name", "status", 3, "width"], ["name", "Actions", "sortable", "false", 3, "width"], ["ngx-datatable-cell-template", ""], ["id", "editModal", "tabindex", "-1", "role", "dialog", "aria-labelledby", "exampleModalLabel", "aria-hidden", "true", 1, "modal", "fade"], ["role", "document", 1, "modal-dialog"], [1, "modal-content"], [1, "modal-header"], [1, "editRowModal"], [1, "modal-header", "clearfix"], [1, "modal-about"], [1, "font-weight-bold", "p-t-10", "font-17"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "btn", "p-t-10", "modal-close-button"], ["closeEditModal", ""], [1, "material-icons"], [1, "modal-body"], [3, "formGroup", "ngSubmit"], [1, "input-field", "col", "s12", "d-none"], ["formControlName", "id", "type", "hidden", 1, "form-control"], [1, "col-xl-6", "col-lg-6", "col-md-12", "col-sm-12", "mb-2"], ["appearance", "outline", 1, "example-full-width"], ["matInput", "", "formControlName", "empname", "required", "", 3, "readonly"], ["matSuffix", ""], [4, "ngIf"], ["matInput", "", "formControlName", "date", "required", "", 3, "readonly"], ["matInput", "", "formControlName", "itemcode", "required", "", 3, "readonly"], ["matInput", "", "formControlName", "itemname", "required", "", 3, "readonly"], ["matInput", "", "formControlName", "quantity", "required", "", 3, "readonly", "change"], ["matInput", "", "formControlName", "status", "required", "", 3, "readonly"], ["matInput", "", "formControlName", "totalprice", "required", "", 3, "readonly"], ["matInput", "", "formControlName", "remarks", "required", "", 3, "readonly"], ["matInput", "", "formControlName", "rejectreason", "required", "", 3, "readonly"], ["matInput", "", "formControlName", "livestock", "required", "", 3, "readonly"], ["matInput", "", "formControlName", "issuedby", "required", "", 3, "readonly"], [1, "modal-footer"], [1, "button-demo"], [4, "ngIf", "ngIfElse"], ["elseBlock", ""], ["data-toggle", "modal", "data-target", "#editModal", 1, "btn", "tblActnBtn", "h-auto", 3, "click"], ["type", "submit", 1, "btn", "btn-outline-success", "btn-border-radius"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-outline-warning", "btn-border-radius"], [1, "btn", "tblActnBtn", "h-auto", 3, "click"]], template: function UserstatusComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "View Requests");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keyup", function UserstatusComponent_Template_input_keyup_18_listener($event) { return ctx.filterDatatable($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "ngx-datatable", 15, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "ngx-datatable-column", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, UserstatusComponent_ng_template_22_Template, 2, 0, "ng-template", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "ngx-datatable-column", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, UserstatusComponent_ng_template_24_Template, 2, 0, "ng-template", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "ngx-datatable-column", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](26, UserstatusComponent_ng_template_26_Template, 2, 0, "ng-template", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "ngx-datatable-column", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](28, UserstatusComponent_ng_template_28_Template, 2, 0, "ng-template", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "ngx-datatable-column", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](30, UserstatusComponent_ng_template_30_Template, 2, 0, "ng-template", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "ngx-datatable-column", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](32, UserstatusComponent_ng_template_32_Template, 2, 0, "ng-template", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "ngx-datatable-column", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](34, UserstatusComponent_ng_template_34_Template, 4, 0, "ng-template", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "button", 34, 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "i", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, "clear");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "form", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function UserstatusComponent_Template_form_ngSubmit_49_listener() { return ctx.onEditSave(ctx.editForm); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](51, "input", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "mat-form-field", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](57, "input", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "mat-icon", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](59, "star");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](60, UserstatusComponent_mat_error_60_Template, 2, 0, "mat-error", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "mat-form-field", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](64, "Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](65, "input", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "mat-icon", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](67, "star");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](68, UserstatusComponent_mat_error_68_Template, 2, 0, "mat-error", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "mat-form-field", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](73, "Item Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](74, "input", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "mat-icon", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](76, "star");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](77, UserstatusComponent_mat_error_77_Template, 2, 0, "mat-error", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "mat-form-field", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](81, "Item Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](82, "input", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "mat-icon", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](84, "star");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](85, UserstatusComponent_mat_error_85_Template, 2, 0, "mat-error", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "mat-form-field", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](90, "Quantity");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](91, "input", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function UserstatusComponent_Template_input_change_91_listener($event) { return ctx.onChangeEvent($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "mat-icon", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](93, "star");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](94, UserstatusComponent_mat_error_94_Template, 2, 0, "mat-error", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](95, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](96, "mat-form-field", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](97, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](98, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](99, "input", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](100, "mat-icon", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](101, "flag");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](102, UserstatusComponent_mat_error_102_Template, 2, 0, "mat-error", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](103, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](104, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](105, "mat-form-field", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](106, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](107, "Total Price");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](108, "input", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](109, "mat-icon", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](110, "star");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](111, UserstatusComponent_mat_error_111_Template, 2, 0, "mat-error", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](112, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](113, "mat-form-field", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](114, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](115, "Machine");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](116, "input", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](117, "mat-icon", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](118, "star");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](119, UserstatusComponent_mat_error_119_Template, 2, 0, "mat-error", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](120, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](121, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](122, "mat-form-field", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](123, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](124, "Reason");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](125, "input", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](126, "mat-icon", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](127, "flag");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](128, UserstatusComponent_mat_error_128_Template, 2, 0, "mat-error", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](129, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](130, "mat-form-field", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](131, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](132, "Live Stock");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](133, "input", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](134, "mat-icon", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](135, "star");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](136, UserstatusComponent_mat_error_136_Template, 2, 0, "mat-error", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](137, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](138, "mat-form-field", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](139, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](140, "Reviewed By");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](141, "input", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](142, "mat-icon", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](143, "star");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](144, UserstatusComponent_mat_error_144_Template, 2, 0, "mat-error", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](145, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](146, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](147, UserstatusComponent_div_147_Template, 5, 0, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](148, UserstatusComponent_ng_template_148_Template, 7, 0, "ng-template", null, 59, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
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
        const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](149);
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
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("readonly", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.editForm.get("quantity").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("readonly", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.register.get("status").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("readonly", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.editForm.get("totalprice").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("readonly", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.editForm.get("remarks").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("readonly", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.register.get("rejectreason").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("readonly", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.editForm.get("livestock").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("readonly", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.editForm.get("issuedby").hasError("issuedby"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.newselected.status == "Completed")("ngIfElse", _r21);
    } }, directives: [_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__["DatatableComponent"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__["DataTableColumnDirective"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__["DataTableColumnHeaderDirective"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__["DataTableColumnCellDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIcon"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatSuffix"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatError"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VtcGJvYXJkL3VzZXJzdGF0dXMvdXNlcnN0YXR1cy5jb21wb25lbnQuc2FzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](UserstatusComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-userstatus',
                templateUrl: './userstatus.component.html',
                styleUrls: ['./userstatus.component.sass']
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

/***/ "jpsT":
/*!*****************************************************!*\
  !*** ./src/app/empboard/empboard.routing.module.ts ***!
  \*****************************************************/
/*! exports provided: empboardRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "empboardRoutingModule", function() { return empboardRoutingModule; });
/* harmony import */ var _othreq_othreq_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./othreq/othreq.component */ "/ty4");
/* harmony import */ var _usersdashboard_usersdashboard_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./usersdashboard/usersdashboard.component */ "DW5d");
/* harmony import */ var _userstatus_userstatus_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./userstatus/userstatus.component */ "a8zu");
/* harmony import */ var _userrequest_userrequest_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./userrequest/userrequest.component */ "M6RX");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");








const routes = [
    {
        path: '',
        redirectTo: 'reqboard',
        pathMatch: 'full'
    },
    {
        path: 'req',
        component: _userrequest_userrequest_component__WEBPACK_IMPORTED_MODULE_3__["UserrequestComponent"]
    },
    {
        path: 'reqs',
        component: _userstatus_userstatus_component__WEBPACK_IMPORTED_MODULE_2__["UserstatusComponent"]
    },
    {
        path: 'othreq',
        component: _othreq_othreq_component__WEBPACK_IMPORTED_MODULE_0__["OthreqComponent"]
    },
    {
        path: 'reqboard',
        component: _usersdashboard_usersdashboard_component__WEBPACK_IMPORTED_MODULE_1__["UsersdashboardComponent"]
    }
];
// tslint:disable-next-line: class-name
class empboardRoutingModule {
}
empboardRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: empboardRoutingModule });
empboardRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ factory: function empboardRoutingModule_Factory(t) { return new (t || empboardRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](empboardRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](empboardRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=empboard-empboard-module-es2015.js.map