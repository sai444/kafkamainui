(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["forms-forms-module"],{

/***/ "9Nm5":
/*!***************************************!*\
  !*** ./src/app/forms/forms.module.ts ***!
  \***************************************/
/*! exports provided: FormModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormModule", function() { return FormModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var angular_archwizard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-archwizard */ "mkVx");
/* harmony import */ var _forms_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./forms-routing.module */ "a03z");
/* harmony import */ var _editors_editors_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./editors/editors.component */ "0NeN");
/* harmony import */ var _form_examples_form_examples_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./form-examples/form-examples.component */ "gyru");
/* harmony import */ var _form_validations_form_validations_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./form-validations/form-validations.component */ "0R0B");
/* harmony import */ var _wizard_wizard_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./wizard/wizard.component */ "lEoo");
/* harmony import */ var ngx_dropzone_wrapper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-dropzone-wrapper */ "vV3i");
/* harmony import */ var _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ckeditor/ckeditor5-angular */ "zioG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _form_controls_form_controls_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./form-controls/form-controls.component */ "0GeU");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/autocomplete */ "/1cH");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/badge */ "TU8p");
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/bottom-sheet */ "2ChS");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/button-toggle */ "jaxi");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/chips */ "A5z7");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/grid-list */ "zkoq");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/progress-bar */ "bv9b");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/radio */ "QibW");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/material/slide-toggle */ "1jcm");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/material/slider */ "5RNC");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/material/stepper */ "xHqg");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! @angular/material/tree */ "8yBR");
/* harmony import */ var _advance_controls_advance_controls_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./advance-controls/advance-controls.component */ "Gc2I");
/* harmony import */ var ngx_mask__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ngx-mask */ "tmjD");
/* harmony import */ var ngx_color_picker__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ngx-color-picker */ "R9Cn");
/* harmony import */ var ngx_custom_validators__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ngx-custom-validators */ "uxn7");
/* harmony import */ var ngx_material_file_input__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ngx-material-file-input */ "7ZcW");






















































class FormModule {
}
FormModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: FormModule });
FormModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function FormModule_Factory(t) { return new (t || FormModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _forms_routing_module__WEBPACK_IMPORTED_MODULE_3__["FormsRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
            angular_archwizard__WEBPACK_IMPORTED_MODULE_2__["ArchwizardModule"],
            ngx_dropzone_wrapper__WEBPACK_IMPORTED_MODULE_8__["DropzoneModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"].withConfig({ warnOnNgModelWithFormControl: 'never' }),
            _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_9__["CKEditorModule"],
            ngx_custom_validators__WEBPACK_IMPORTED_MODULE_50__["CustomFormsModule"],
            _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_12__["MatAutocompleteModule"],
            _angular_material_badge__WEBPACK_IMPORTED_MODULE_13__["MatBadgeModule"],
            _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_14__["MatBottomSheetModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_15__["MatButtonModule"],
            _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_16__["MatButtonToggleModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_17__["MatCardModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_18__["MatCheckboxModule"],
            _angular_material_chips__WEBPACK_IMPORTED_MODULE_19__["MatChipsModule"],
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_21__["MatDatepickerModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_22__["MatDialogModule"],
            _angular_material_divider__WEBPACK_IMPORTED_MODULE_23__["MatDividerModule"],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_24__["MatExpansionModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_25__["MatFormFieldModule"],
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_26__["MatGridListModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_27__["MatIconModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_28__["MatInputModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_29__["MatListModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_30__["MatMenuModule"],
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_31__["MatPaginatorModule"],
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_32__["MatProgressBarModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_33__["MatProgressSpinnerModule"],
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_34__["MatRadioModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_20__["MatRippleModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_35__["MatSelectModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_36__["MatSidenavModule"],
            _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_37__["MatSlideToggleModule"],
            _angular_material_slider__WEBPACK_IMPORTED_MODULE_38__["MatSliderModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_39__["MatSnackBarModule"],
            _angular_material_sort__WEBPACK_IMPORTED_MODULE_40__["MatSortModule"],
            _angular_material_stepper__WEBPACK_IMPORTED_MODULE_41__["MatStepperModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_42__["MatTableModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_43__["MatTabsModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_44__["MatToolbarModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_45__["MatTooltipModule"],
            _angular_material_tree__WEBPACK_IMPORTED_MODULE_46__["MatTreeModule"],
            ngx_mask__WEBPACK_IMPORTED_MODULE_48__["NgxMaskModule"],
            ngx_color_picker__WEBPACK_IMPORTED_MODULE_49__["ColorPickerModule"],
            ngx_material_file_input__WEBPACK_IMPORTED_MODULE_51__["MaterialFileInputModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](FormModule, { declarations: [_editors_editors_component__WEBPACK_IMPORTED_MODULE_4__["EditorsComponent"],
        _form_examples_form_examples_component__WEBPACK_IMPORTED_MODULE_5__["FormExamplesComponent"],
        _form_validations_form_validations_component__WEBPACK_IMPORTED_MODULE_6__["FormValidationsComponent"],
        _wizard_wizard_component__WEBPACK_IMPORTED_MODULE_7__["WizardComponent"],
        _form_controls_form_controls_component__WEBPACK_IMPORTED_MODULE_11__["FormControlsComponent"],
        _advance_controls_advance_controls_component__WEBPACK_IMPORTED_MODULE_47__["AdvanceControlsComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _forms_routing_module__WEBPACK_IMPORTED_MODULE_3__["FormsRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
        angular_archwizard__WEBPACK_IMPORTED_MODULE_2__["ArchwizardModule"],
        ngx_dropzone_wrapper__WEBPACK_IMPORTED_MODULE_8__["DropzoneModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"], _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_9__["CKEditorModule"],
        ngx_custom_validators__WEBPACK_IMPORTED_MODULE_50__["CustomFormsModule"],
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_12__["MatAutocompleteModule"],
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_13__["MatBadgeModule"],
        _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_14__["MatBottomSheetModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_15__["MatButtonModule"],
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_16__["MatButtonToggleModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_17__["MatCardModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_18__["MatCheckboxModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_19__["MatChipsModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_21__["MatDatepickerModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_22__["MatDialogModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_23__["MatDividerModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_24__["MatExpansionModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_25__["MatFormFieldModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_26__["MatGridListModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_27__["MatIconModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_28__["MatInputModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_29__["MatListModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_30__["MatMenuModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_31__["MatPaginatorModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_32__["MatProgressBarModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_33__["MatProgressSpinnerModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_34__["MatRadioModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_20__["MatRippleModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_35__["MatSelectModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_36__["MatSidenavModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_37__["MatSlideToggleModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_38__["MatSliderModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_39__["MatSnackBarModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_40__["MatSortModule"],
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_41__["MatStepperModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_42__["MatTableModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_43__["MatTabsModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_44__["MatToolbarModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_45__["MatTooltipModule"],
        _angular_material_tree__WEBPACK_IMPORTED_MODULE_46__["MatTreeModule"],
        ngx_mask__WEBPACK_IMPORTED_MODULE_48__["NgxMaskModule"],
        ngx_color_picker__WEBPACK_IMPORTED_MODULE_49__["ColorPickerModule"],
        ngx_material_file_input__WEBPACK_IMPORTED_MODULE_51__["MaterialFileInputModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _editors_editors_component__WEBPACK_IMPORTED_MODULE_4__["EditorsComponent"],
                    _form_examples_form_examples_component__WEBPACK_IMPORTED_MODULE_5__["FormExamplesComponent"],
                    _form_validations_form_validations_component__WEBPACK_IMPORTED_MODULE_6__["FormValidationsComponent"],
                    _wizard_wizard_component__WEBPACK_IMPORTED_MODULE_7__["WizardComponent"],
                    _form_controls_form_controls_component__WEBPACK_IMPORTED_MODULE_11__["FormControlsComponent"],
                    _advance_controls_advance_controls_component__WEBPACK_IMPORTED_MODULE_47__["AdvanceControlsComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _forms_routing_module__WEBPACK_IMPORTED_MODULE_3__["FormsRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
                    angular_archwizard__WEBPACK_IMPORTED_MODULE_2__["ArchwizardModule"],
                    ngx_dropzone_wrapper__WEBPACK_IMPORTED_MODULE_8__["DropzoneModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"].withConfig({ warnOnNgModelWithFormControl: 'never' }),
                    _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_9__["CKEditorModule"],
                    ngx_custom_validators__WEBPACK_IMPORTED_MODULE_50__["CustomFormsModule"],
                    _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_12__["MatAutocompleteModule"],
                    _angular_material_badge__WEBPACK_IMPORTED_MODULE_13__["MatBadgeModule"],
                    _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_14__["MatBottomSheetModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_15__["MatButtonModule"],
                    _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_16__["MatButtonToggleModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_17__["MatCardModule"],
                    _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_18__["MatCheckboxModule"],
                    _angular_material_chips__WEBPACK_IMPORTED_MODULE_19__["MatChipsModule"],
                    _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_21__["MatDatepickerModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_22__["MatDialogModule"],
                    _angular_material_divider__WEBPACK_IMPORTED_MODULE_23__["MatDividerModule"],
                    _angular_material_expansion__WEBPACK_IMPORTED_MODULE_24__["MatExpansionModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_25__["MatFormFieldModule"],
                    _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_26__["MatGridListModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_27__["MatIconModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_28__["MatInputModule"],
                    _angular_material_list__WEBPACK_IMPORTED_MODULE_29__["MatListModule"],
                    _angular_material_menu__WEBPACK_IMPORTED_MODULE_30__["MatMenuModule"],
                    _angular_material_paginator__WEBPACK_IMPORTED_MODULE_31__["MatPaginatorModule"],
                    _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_32__["MatProgressBarModule"],
                    _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_33__["MatProgressSpinnerModule"],
                    _angular_material_radio__WEBPACK_IMPORTED_MODULE_34__["MatRadioModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_20__["MatRippleModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_35__["MatSelectModule"],
                    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_36__["MatSidenavModule"],
                    _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_37__["MatSlideToggleModule"],
                    _angular_material_slider__WEBPACK_IMPORTED_MODULE_38__["MatSliderModule"],
                    _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_39__["MatSnackBarModule"],
                    _angular_material_sort__WEBPACK_IMPORTED_MODULE_40__["MatSortModule"],
                    _angular_material_stepper__WEBPACK_IMPORTED_MODULE_41__["MatStepperModule"],
                    _angular_material_table__WEBPACK_IMPORTED_MODULE_42__["MatTableModule"],
                    _angular_material_tabs__WEBPACK_IMPORTED_MODULE_43__["MatTabsModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_44__["MatToolbarModule"],
                    _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_45__["MatTooltipModule"],
                    _angular_material_tree__WEBPACK_IMPORTED_MODULE_46__["MatTreeModule"],
                    ngx_mask__WEBPACK_IMPORTED_MODULE_48__["NgxMaskModule"],
                    ngx_color_picker__WEBPACK_IMPORTED_MODULE_49__["ColorPickerModule"],
                    ngx_material_file_input__WEBPACK_IMPORTED_MODULE_51__["MaterialFileInputModule"]
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=forms-forms-module-es2015.js.map