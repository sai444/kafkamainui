(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["authentication-authentication-module"], {
    /***/
    "1W5f":
    /*!***********************************************************!*\
      !*** ./src/app/authentication/locked/locked.component.ts ***!
      \***********************************************************/

    /*! exports provided: LockedComponent */

    /***/
    function W5f(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LockedComponent", function () {
        return LockedComponent;
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


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! sweetalert2 */
      "PSD3");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");

      function LockedComponent_mat_error_18_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Scan Again is required ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      var LockedComponent = /*#__PURE__*/function () {
        function LockedComponent(formBuilder, route, router, http) {
          _classCallCheck(this, LockedComponent);

          this.formBuilder = formBuilder;
          this.route = route;
          this.router = router;
          this.http = http;
          this.submitted = false;
          this.hide = true;
          this.url = 'http://30.118.179.12:2020/loginuid'; // onSubmit() {
          //   this.submitted = true;
          //   // stop here if form is invalid
          //   if (this.loginForm.invalid) {
          //     console.log('this.loginForm' ,this.loginForm.value);
          //     return;
          //   } else {
          //     this.router.navigate(['/dashboard/main']);
          //   }
          // }

          this.ress = {};
        }

        _createClass(LockedComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.loginForm = this.formBuilder.group({
              password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
            }); // get return url from route parameters or default to '/'

            this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/'; //    [Focus input] * /

            $('.input100').each(function () {
              $(this).on('blur', function () {
                if ($(this).val().trim() != '') {
                  $(this).addClass('has-val');
                } else {
                  $(this).removeClass('has-val');
                }
              });
            });
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            var _this = this;

            this.submitted = true; // stop here if form is invalid

            if (this.loginForm.invalid) {
              return;
            } else {
              this.http.post(this.url, this.loginForm.value).subscribe(function (res) {
                console.log(res);
                _this.ress = res;
                localStorage.setItem('username', _this.ress.username);
                localStorage.setItem('userid', _this.ress.id);
                localStorage.setItem('usertoken', _this.ress.token);
                localStorage.setItem('userrole', _this.ress.role);
                localStorage.setItem('mainurl', 'http://30.118.179.12:2020/');
                console.log('userrole', _this.ress.role); // tslint:disable-next-line: triple-equals

                if (_this.ress.role == 'Admin') {
                  _this.router.navigate(['/storemng/main']);
                } else if (_this.ress.role == 'Supervisor') {
                  _this.router.navigate(['/empboard/othreq']);
                } else if (_this.ress.role == 'Store Executive') {
                  _this.router.navigate(['/storemng/main']);
                } else if (_this.ress.role == 'Store Manager') {
                  _this.router.navigate(['/storemng/main']);
                } else {
                  _this.router.navigate(['/empboard/othreq']);
                }
              }, function (err) {
                console.log(err.error);

                _this.showErrorAlert();

                console.log(err.name);
                console.log(err.message);
                console.log(err.status);
              });
            }
          }
        }, {
          key: "showErrorAlert",
          value: function showErrorAlert() {
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire('Yikes!', 'uid  went wrong!', 'error');
          }
        }, {
          key: "f",
          get: function get() {
            return this.loginForm.controls;
          }
        }]);

        return LockedComponent;
      }();

      LockedComponent.??fac = function LockedComponent_Factory(t) {
        return new (t || LockedComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]));
      };

      LockedComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: LockedComponent,
        selectors: [["app-locked"]],
        decls: 33,
        vars: 4,
        consts: [[1, "limiter"], [1, "container-login100"], [1, "wrap-login100"], [1, "login100-form", "validate-form", 3, "formGroup", "ngSubmit"], ["src", "assets/images/skf.png", "alt", "", 2, "width", "60%", "margin-left", "20%", "margin-top", "2%"], [1, "login100-form-title", "pb-5"], [1, "text-center"], [1, "txt1", "p-b-20"], [1, "form-group", "mb-3"], ["appearance", "outline", 1, "example-full-width"], ["matInput", "", "formControlName", "password", "required", "", 3, "type"], ["matSuffix", "", 3, "click"], [4, "ngIf"], [1, "container-login100-form-btn", "p-t-30"], ["mat-flat-button", "", "color", "primary", 1, "login100-form-btn"], [1, "text-left", "p-t-30", "p-b-20"], [1, "txt3"], ["routerLink", "/authentication/signin"], [1, "container-login100-form-btn"], ["src", "assets/images/loading.jpg", "alt", "", 2, "width", "40%", "margin-left", "20%", "margin-top", "2%"], [1, "login100-more", 2, "background-image", "url('assets/images/pages/bg-01.png')"]],
        template: function LockedComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "form", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngSubmit", function LockedComponent_Template_form_ngSubmit_3_listener() {
              return ctx.onSubmit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "img", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "span", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "BREVIUM Login");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "p", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, " RFID ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "mat-form-field", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "RFID");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](15, "input", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "mat-icon", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function LockedComponent_Template_mat_icon_click_16_listener() {
              return ctx.hide = ctx.hide;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](18, LockedComponent_mat_error_18_Template, 2, 0, "mat-error", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "button", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, " Login ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "span", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, " Or by Using ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "a", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](26, " Login ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "span", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](29, " ********************************************************* ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](31, "img", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](32, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formGroup", ctx.loginForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("type", ctx.hide ? "password" : "text");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx.hide ? "visibility_off" : "visibility_off", "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.loginForm.get("password").hasError("required"));
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIcon"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatSuffix"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatError"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGhlbnRpY2F0aW9uL2xvY2tlZC9sb2NrZWQuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](LockedComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-locked',
            templateUrl: './locked.component.html',
            styleUrls: ['./locked.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
          }, {
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "21P8":
    /*!*************************************************************!*\
      !*** ./src/app/authentication/page404/page404.component.ts ***!
      \*************************************************************/

    /*! exports provided: Page404Component */

    /***/
    function P8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Page404Component", function () {
        return Page404Component;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");

      var Page404Component = /*#__PURE__*/function () {
        function Page404Component() {
          _classCallCheck(this, Page404Component);
        }

        _createClass(Page404Component, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var loginformcenter = ($(window).height() - $('.login100-form').height()) / 2 - 34;
            $('.login100-form').css('margin-top', loginformcenter);
          }
        }]);

        return Page404Component;
      }();

      Page404Component.??fac = function Page404Component_Factory(t) {
        return new (t || Page404Component)();
      };

      Page404Component.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: Page404Component,
        selectors: [["app-page404"]],
        decls: 18,
        vars: 0,
        consts: [[1, "limiter"], [1, "container-login100"], [1, "wrap-login100"], [1, "login100-form"], [1, "error-header", "p-b-45"], [1, "error-subheader", "p-b-5"], [1, "error-subheader2", "p-b-5"], [1, "container-login100-form-btn", "p-t-30"], ["mat-flat-button", "", "color", "primary", 1, "login100-form-btn"], [1, "w-full", "p-t-15", "p-b-15", "text-center"], ["href", "#", 1, "txt1"], [1, "login100-more", 2, "background-image", "url('assets/images/pages/bg-03.png')"]],
        template: function Page404Component_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "form", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "span", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, " 404 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "span", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, " Looks Like You're Lost ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, " The Page You Are Looking For Not Available! ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "button", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, " Go To Home Page ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "a", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, " Need Help? ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](17, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGhlbnRpY2F0aW9uL3BhZ2U0MDQvcGFnZTQwNC5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](Page404Component, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-page404',
            templateUrl: './page404.component.html',
            styleUrls: ['./page404.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "LamZ":
    /*!*************************************************************!*\
      !*** ./src/app/authentication/page500/page500.component.ts ***!
      \*************************************************************/

    /*! exports provided: Page500Component */

    /***/
    function LamZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Page500Component", function () {
        return Page500Component;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");

      var Page500Component = /*#__PURE__*/function () {
        function Page500Component() {
          _classCallCheck(this, Page500Component);
        }

        _createClass(Page500Component, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var loginformcenter = ($(window).height() - $('.login100-form').height()) / 2 - 34;
            $('.login100-form').css('margin-top', loginformcenter);
          }
        }]);

        return Page500Component;
      }();

      Page500Component.??fac = function Page500Component_Factory(t) {
        return new (t || Page500Component)();
      };

      Page500Component.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: Page500Component,
        selectors: [["app-page500"]],
        decls: 16,
        vars: 0,
        consts: [[1, "limiter"], [1, "container-login100"], [1, "wrap-login100"], [1, "login100-form"], [1, "error-header", "p-b-45"], [1, "error-subheader2", "p-b-5"], [1, "container-login100-form-btn", "p-t-30"], ["mat-flat-button", "", "color", "primary", 1, "login100-form-btn"], [1, "w-full", "p-t-15", "p-b-15", "text-center"], ["href", "#", 1, "txt1"], [1, "login100-more", 2, "background-image", "url('assets/images/pages/bg-03.png')"]],
        template: function Page500Component_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "form", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "span", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, " 500 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "span", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, " Oops, Something went wrong. Please try after some times. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "button", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, " Go To Home Page ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "a", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, " Need Help? ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](15, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGhlbnRpY2F0aW9uL3BhZ2U1MDAvcGFnZTUwMC5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](Page500Component, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-page500',
            templateUrl: './page500.component.html',
            styleUrls: ['./page500.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "OpKh":
    /*!*********************************************************!*\
      !*** ./src/app/authentication/authentication.module.ts ***!
      \*********************************************************/

    /*! exports provided: AuthenticationModule */

    /***/
    function OpKh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthenticationModule", function () {
        return AuthenticationModule;
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


      var _authentication_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./authentication-routing.module */
      "ionX");
      /* harmony import */


      var _page500_page500_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./page500/page500.component */
      "LamZ");
      /* harmony import */


      var _page404_page404_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./page404/page404.component */
      "21P8");
      /* harmony import */


      var _signin_signin_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./signin/signin.component */
      "R9+F");
      /* harmony import */


      var _signup_signup_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./signup/signup.component */
      "umax");
      /* harmony import */


      var _locked_locked_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./locked/locked.component */
      "1W5f");
      /* harmony import */


      var _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./forgot-password/forgot-password.component */
      "xTco");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");

      var AuthenticationModule = function AuthenticationModule() {
        _classCallCheck(this, AuthenticationModule);
      };

      AuthenticationModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
        type: AuthenticationModule
      });
      AuthenticationModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
        factory: function AuthenticationModule_Factory(t) {
          return new (t || AuthenticationModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _authentication_routing_module__WEBPACK_IMPORTED_MODULE_3__["AuthenticationRoutingModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInputModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIconModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButtonModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](AuthenticationModule, {
          declarations: [_page500_page500_component__WEBPACK_IMPORTED_MODULE_4__["Page500Component"], _page404_page404_component__WEBPACK_IMPORTED_MODULE_5__["Page404Component"], _signin_signin_component__WEBPACK_IMPORTED_MODULE_6__["SigninComponent"], _signup_signup_component__WEBPACK_IMPORTED_MODULE_7__["SignupComponent"], _locked_locked_component__WEBPACK_IMPORTED_MODULE_8__["LockedComponent"], _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_9__["ForgotPasswordComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _authentication_routing_module__WEBPACK_IMPORTED_MODULE_3__["AuthenticationRoutingModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInputModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIconModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButtonModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AuthenticationModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_page500_page500_component__WEBPACK_IMPORTED_MODULE_4__["Page500Component"], _page404_page404_component__WEBPACK_IMPORTED_MODULE_5__["Page404Component"], _signin_signin_component__WEBPACK_IMPORTED_MODULE_6__["SigninComponent"], _signup_signup_component__WEBPACK_IMPORTED_MODULE_7__["SignupComponent"], _locked_locked_component__WEBPACK_IMPORTED_MODULE_8__["LockedComponent"], _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_9__["ForgotPasswordComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _authentication_routing_module__WEBPACK_IMPORTED_MODULE_3__["AuthenticationRoutingModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInputModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIconModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButtonModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "R9+F":
    /*!***********************************************************!*\
      !*** ./src/app/authentication/signin/signin.component.ts ***!
      \***********************************************************/

    /*! exports provided: SigninComponent */

    /***/
    function R9F(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SigninComponent", function () {
        return SigninComponent;
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


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! sweetalert2 */
      "PSD3");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");

      var SigninComponent = /*#__PURE__*/function () {
        function SigninComponent(formBuilder, route, router, http) {
          _classCallCheck(this, SigninComponent);

          this.formBuilder = formBuilder;
          this.route = route;
          this.router = router;
          this.http = http;
          this.submitted = false;
          this.hide = true;
          this.ress = {};
          this.url = 'http://30.118.179.12:5000/login';
        }

        _createClass(SigninComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.loginForm = this.formBuilder.group({
              username: [''],
              password: ['']
            }); // get return url from route parameters or default to '/'

            this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/'; //    [Focus input] * /

            $('.input100').each(function () {
              $(this).on('blur', function () {
                if ($(this).val().trim() != '') {
                  $(this).addClass('has-val');
                } else {
                  $(this).removeClass('has-val');
                }
              });
            });
          }
        }, {
          key: "showErrorAlert",
          value: function showErrorAlert() {
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire('Yikes!', 'username or password  went wrong!', 'error');
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            var _this2 = this;

            this.submitted = true; // stop here if form is invalid

            if (this.loginForm.invalid) {
              return;
            } else {
              this.http.post(this.url, this.loginForm.value).subscribe(function (res) {
                console.log(res);
                _this2.ress = res;
                localStorage.setItem('username', _this2.ress.username);
                localStorage.setItem('userid', _this2.ress.id);
                localStorage.setItem('usertoken', _this2.ress.token);
                localStorage.setItem('userrole', _this2.ress.role);
                localStorage.setItem('mainurl', 'http://30.118.179.12:5000/');
                console.log('userrole', _this2.ress.role); // tslint:disable-next-line: triple-equals

                if (_this2.ress.role == 'admin') {
                  _this2.router.navigate(['/storemng/main']);
                } else {
                  _this2.router.navigate(['/storemng/main']);
                }
              }, function (err) {
                console.log(err.error);

                _this2.showErrorAlert();

                console.log(err.name);
                console.log(err.message);
                console.log(err.status);
              });
            }
          }
        }, {
          key: "f",
          get: function get() {
            return this.loginForm.controls;
          }
        }]);

        return SigninComponent;
      }();

      SigninComponent.??fac = function SigninComponent_Factory(t) {
        return new (t || SigninComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]));
      };

      SigninComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: SigninComponent,
        selectors: [["app-signin"]],
        decls: 37,
        vars: 1,
        consts: [[1, "limiter"], [1, "container-login100"], [1, "wrap-login100"], [1, "login100-form", "validate-form", 3, "formGroup", "ngSubmit"], [1, "login100-form-title", "pb-5"], [1, "row"], [1, "col-xl-12", "col-lg-12", "col-md-12", "col-sm-12", "mb-2"], ["appearance", "outline", 1, "example-full-width"], ["matInput", "", "formControlName", "username"], ["matSuffix", ""], [1, "col-xl-12col-lg-12", "col-md-12", "col-sm-12", "mb-2"], ["matInput", "", "type", "password", "formControlName", "password"], [1, "flex-sb-m", "w-full", "p-t-15", "p-b-20"], [1, "form-check"], [1, "form-check-label"], ["type", "checkbox", "value", "", 1, "form-check-input"], [1, "form-check-sign"], [1, "check"], [1, "container-login100-form-btn"], ["mat-flat-button", "", "color", "primary", "type", "submit", 1, "login100-form-btn"], [1, "text-left", "p-t-30", "p-b-20"], [1, "txt3"], [1, "login100-more", 2, "background-image", "url('assets/images/pages/bg-01.png')"]],
        template: function SigninComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "form", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngSubmit", function SigninComponent_Template_form_ngSubmit_3_listener() {
              return ctx.onSubmit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "span", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "KafkaDrive Login");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "mat-form-field", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "Username");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](12, "input", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "mat-icon", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "face");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "mat-form-field", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, "Password");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](20, "input", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "mat-icon", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, "vpn_key");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "label", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](26, "input", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](27, " Remember me ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "span", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](29, "span", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "button", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](32, " Login ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "span", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](35, " ********************************************************* ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](36, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formGroup", ctx.loginForm);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIcon"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatSuffix"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGhlbnRpY2F0aW9uL3NpZ25pbi9zaWduaW4uY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](SigninComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-signin',
            templateUrl: './signin.component.html',
            styleUrls: ['./signin.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
          }, {
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "ionX":
    /*!*****************************************************************!*\
      !*** ./src/app/authentication/authentication-routing.module.ts ***!
      \*****************************************************************/

    /*! exports provided: AuthenticationRoutingModule */

    /***/
    function ionX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthenticationRoutingModule", function () {
        return AuthenticationRoutingModule;
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


      var _signin_signin_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./signin/signin.component */
      "R9+F");
      /* harmony import */


      var _signup_signup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./signup/signup.component */
      "umax");
      /* harmony import */


      var _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./forgot-password/forgot-password.component */
      "xTco");
      /* harmony import */


      var _locked_locked_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./locked/locked.component */
      "1W5f");
      /* harmony import */


      var _page404_page404_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./page404/page404.component */
      "21P8");
      /* harmony import */


      var _page500_page500_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./page500/page500.component */
      "LamZ");

      var routes = [{
        path: '',
        redirectTo: 'signin',
        pathMatch: 'full'
      }, {
        path: 'signin',
        component: _signin_signin_component__WEBPACK_IMPORTED_MODULE_2__["SigninComponent"]
      }, {
        path: 'signup',
        component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_3__["SignupComponent"]
      }, {
        path: 'forgot-password',
        component: _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_4__["ForgotPasswordComponent"]
      }, {
        path: 'locked',
        component: _locked_locked_component__WEBPACK_IMPORTED_MODULE_5__["LockedComponent"]
      }, {
        path: 'page404',
        component: _page404_page404_component__WEBPACK_IMPORTED_MODULE_6__["Page404Component"]
      }, {
        path: 'page500',
        component: _page500_page500_component__WEBPACK_IMPORTED_MODULE_7__["Page500Component"]
      }];

      var AuthenticationRoutingModule = function AuthenticationRoutingModule() {
        _classCallCheck(this, AuthenticationRoutingModule);
      };

      AuthenticationRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
        type: AuthenticationRoutingModule
      });
      AuthenticationRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
        factory: function AuthenticationRoutingModule_Factory(t) {
          return new (t || AuthenticationRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](AuthenticationRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AuthenticationRoutingModule, [{
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
    "umax":
    /*!***********************************************************!*\
      !*** ./src/app/authentication/signup/signup.component.ts ***!
      \***********************************************************/

    /*! exports provided: SignupComponent */

    /***/
    function umax(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SignupComponent", function () {
        return SignupComponent;
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


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");

      function SignupComponent_mat_error_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Username is required ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function SignupComponent_mat_error_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Please enter a valid email address ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function SignupComponent_mat_error_26_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Password is required ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function SignupComponent_mat_error_33_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Confirm Password is required ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      var SignupComponent = /*#__PURE__*/function () {
        function SignupComponent(formBuilder, route, router) {
          _classCallCheck(this, SignupComponent);

          this.formBuilder = formBuilder;
          this.route = route;
          this.router = router;
          this.submitted = false;
          this.hide = true;
          this.chide = true;
        }

        _createClass(SignupComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.loginForm = this.formBuilder.group({
              username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
              email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(5)]],
              password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
              cpassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
            }); // get return url from route parameters or default to '/'

            this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/'; //    [Focus input] * /

            $('.input100').each(function () {
              $(this).on('blur', function () {
                if ($(this).val().trim() != '') {
                  $(this).addClass('has-val');
                } else {
                  $(this).removeClass('has-val');
                }
              });
            });
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            this.submitted = true; // stop here if form is invalid

            if (this.loginForm.invalid) {
              return;
            } else {
              this.router.navigate(['/dashboard/main']);
            }
          }
        }, {
          key: "f",
          get: function get() {
            return this.loginForm.controls;
          }
        }]);

        return SignupComponent;
      }();

      SignupComponent.??fac = function SignupComponent_Factory(t) {
        return new (t || SignupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
      };

      SignupComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: SignupComponent,
        selectors: [["app-signup"]],
        decls: 52,
        vars: 9,
        consts: [[1, "limiter"], [1, "container-login100"], [1, "wrap-login100"], [1, "login100-form", "validate-form", 3, "formGroup", "ngSubmit"], [1, "login100-form-title", "p-b-30"], ["appearance", "outline", 1, "example-full-width"], ["matInput", "", "formControlName", "username", "required", ""], ["matSuffix", ""], [4, "ngIf"], ["matInput", "", "formControlName", "email", "required", ""], ["matInput", "", "formControlName", "password", "required", "", 3, "type"], ["matSuffix", "", 3, "click"], ["matInput", "", "formControlName", "cpassword", "required", "", 3, "type"], [1, "flex-sb-m", "w-full", "p-t-15", "p-b-20"], ["routerLink", "/authentication/signin"], [1, "container-login100-form-btn"], ["mat-flat-button", "", "color", "primary", "type", "submit", 1, "login100-form-btn"], [1, "text-center", "p-t-30", "p-b-20"], [1, "txt2"], [1, "login100-form-social", "flex-c-m"], ["href", "#", 1, "login100-form-social-item", "flex-c-m", "bg1", "m-r-5"], [1, "fab", "fa-facebook-f"], ["href", "#", 1, "login100-form-social-item", "flex-c-m", "bg2", "m-r-5"], [1, "fab", "fa-twitter"], [1, "login100-more", 2, "background-image", "url('assets/images/pages/bg-02.png')"]],
        template: function SignupComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "form", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngSubmit", function SignupComponent_Template_form_ngSubmit_3_listener() {
              return ctx.onSubmit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "span", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, " Register ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "mat-form-field", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "Username");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](9, "input", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "mat-icon", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "face");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](12, SignupComponent_mat_error_12_Template, 2, 0, "mat-error", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "mat-form-field", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "Email");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](16, "input", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "mat-icon", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, "mail");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](19, SignupComponent_mat_error_19_Template, 2, 0, "mat-error", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "mat-form-field", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, "Password");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](23, "input", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "mat-icon", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function SignupComponent_Template_mat_icon_click_24_listener() {
              return ctx.hide = !ctx.hide;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](26, SignupComponent_mat_error_26_Template, 2, 0, "mat-error", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "mat-form-field", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](29, "Confirm Password");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](30, "input", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "mat-icon", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function SignupComponent_Template_mat_icon_click_31_listener() {
              return ctx.chide = !ctx.chide;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](33, SignupComponent_mat_error_33_Template, 2, 0, "mat-error", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](37, "Already Registered? ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "a", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](39, " Login ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "button", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](42, " Register ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "span", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](45, " or sign up using ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "a", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](48, "i", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "a", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](50, "i", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](51, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formGroup", ctx.loginForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.loginForm.get("username").hasError("required"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.loginForm.get("email").hasError("required") || ctx.loginForm.get("email").touched);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("type", ctx.hide ? "password" : "text");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx.hide ? "visibility_off" : "visibility", "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.loginForm.get("password").hasError("required"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("type", ctx.chide ? "password" : "text");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx.chide ? "visibility_off" : "visibility", "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.loginForm.get("cpassword").hasError("required"));
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIcon"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatSuffix"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatError"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGhlbnRpY2F0aW9uL3NpZ251cC9zaWdudXAuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](SignupComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-signup',
            templateUrl: './signup.component.html',
            styleUrls: ['./signup.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "xTco":
    /*!*****************************************************************************!*\
      !*** ./src/app/authentication/forgot-password/forgot-password.component.ts ***!
      \*****************************************************************************/

    /*! exports provided: ForgotPasswordComponent */

    /***/
    function xTco(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ForgotPasswordComponent", function () {
        return ForgotPasswordComponent;
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


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! sweetalert2 */
      "PSD3");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");

      function ForgotPasswordComponent_mat_error_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Username is required ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function ForgotPasswordComponent_mat_error_23_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Old Password is required ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function ForgotPasswordComponent_mat_error_31_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " New Password is required ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      var ForgotPasswordComponent = /*#__PURE__*/function () {
        function ForgotPasswordComponent(formBuilder, route, router, http) {
          _classCallCheck(this, ForgotPasswordComponent);

          this.formBuilder = formBuilder;
          this.route = route;
          this.router = router;
          this.http = http;
          this.submitted = false;
        }

        _createClass(ForgotPasswordComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.mainurl = localStorage.getItem('mainurl');
            this.loginForm = this.formBuilder.group({
              username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
              newpwd: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
              oldpwd: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
            }); // get return url from route parameters or default to '/'

            this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/'; //    [Focus input] * /

            $('.input100').each(function () {
              $(this).on('blur', function () {
                if ($(this).val().trim() != '') {
                  $(this).addClass('has-val');
                } else {
                  $(this).removeClass('has-val');
                }
              });
            });
          }
        }, {
          key: "showErrorAlert",
          value: function showErrorAlert() {
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire('Yikes!', 'username or password  went wrong!', 'error');
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            var _this3 = this;

            this.submitted = true; // stop here if form is invalid

            if (this.loginForm.invalid) {
              sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire('Yikes!', 'username or password  wrong!', 'error');
              return;
            } else {
              console.log("login form values", this.loginForm.get('username').value);
              var resetData = {
                'username': this.loginForm.get('username').value,
                'oldpwd': this.loginForm.get('oldpwd').value,
                'newpwd': this.loginForm.get('newpwd').value
              };
              console.log("data", resetData, typeof resetData);
              this.http.post(this.mainurl + 'resetpwd', resetData).subscribe(function (res) {
                _this3.router.navigate(['/authentication/signin']);

                console.log(res);
                _this3.ress = res;
                console.log('this is the respoce for password', _this3.ress.text); // tslint:disable-next-line: triple-equals

                if (_this3.ress.text == 'Password Reset Successful') {
                  _this3.router.navigate(['/']);
                }
              }, function (err) {
                console.log('this is the err.error', err.error);
                console.log(err.name);
                console.log(err.message);
                console.log(err.status);

                if (err.status == 200) {
                  sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire('Yikes!', 'username or password  sucess!', 'success');
                  console.log('this is the err.status', err.status);

                  _this3.router.navigate(['/authentication/signin']);
                } else {
                  _this3.showErrorAlert();
                }
              });
            }
          }
        }, {
          key: "f",
          get: function get() {
            return this.loginForm.controls;
          }
        }]);

        return ForgotPasswordComponent;
      }();

      ForgotPasswordComponent.??fac = function ForgotPasswordComponent_Factory(t) {
        return new (t || ForgotPasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]));
      };

      ForgotPasswordComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: ForgotPasswordComponent,
        selectors: [["app-forgot-password"]],
        decls: 45,
        vars: 4,
        consts: [[1, "limiter"], [1, "container-login100"], [1, "wrap-login100"], [1, "login100-form", "validate-form", 3, "formGroup", "ngSubmit"], ["src", "assets/images/skf.png", "alt", "", 2, "width", "60%", "margin-left", "20%", "margin-top", "2%"], [1, "login100-form-title", "p-b-45"], [1, "error-subheader2", "p-t-20", "p-b-15"], [1, "form-group", "mb-5"], ["appearance", "outline", 1, "example-full-width"], ["matInput", "", "formControlName", "username", "required", ""], ["matSuffix", ""], [4, "ngIf"], ["matInput", "", "formControlName", "oldpwd", "required", ""], ["matInput", "", "formControlName", "newpwd", "required", ""], [1, "container-login100-form-btn"], ["mat-flat-button", "", "color", "primary", "type", "submit", 1, "login100-form-btn"], [1, "w-full", "p-t-25", "text-center"], ["routerLink", "/authentication/signin", 1, "txt1"], [1, "text-left", "p-t-30", "p-b-20"], [1, "txt3"], ["src", "assets/images/loading.jpg", "alt", "", 2, "width", "40%", "margin-left", "20%", "margin-top", "2%"], [1, "login100-more", 2, "background-image", "url('assets/images/pages/bg-02.png')"]],
        template: function ForgotPasswordComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "form", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngSubmit", function ForgotPasswordComponent_Template_form_ngSubmit_3_listener() {
              return ctx.onSubmit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "img", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "span", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, " Reset Password ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](7, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "mat-form-field", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "Username");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](12, "input", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "mat-icon", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "face");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](15, ForgotPasswordComponent_mat_error_15_Template, 2, 0, "mat-error", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "mat-form-field", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, "Old Password");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](20, "input", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "mat-icon", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, "face");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](23, ForgotPasswordComponent_mat_error_23_Template, 2, 0, "mat-error", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "mat-form-field", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](27, "New Password");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](28, "input", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "mat-icon", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30, "face");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](31, ForgotPasswordComponent_mat_error_31_Template, 2, 0, "mat-error", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "button", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](34, " Reset My Password ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "a", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](38, " Login? ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "span", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](41, " ********************************************************* ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](43, "img", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](44, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formGroup", ctx.loginForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.loginForm.get("username").hasError("required"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.loginForm.get("oldpwd").hasError("required"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.loginForm.get("newpwd").hasError("required"));
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIcon"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatSuffix"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatError"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGhlbnRpY2F0aW9uL2ZvcmdvdC1wYXNzd29yZC9mb3Jnb3QtcGFzc3dvcmQuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ForgotPasswordComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-forgot-password',
            templateUrl: './forgot-password.component.html',
            styleUrls: ['./forgot-password.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
          }, {
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
          }];
        }, null);
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=authentication-authentication-module-es5.js.map