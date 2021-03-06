(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboard-dashboard-module"], {
    /***/
    "1BqC":
    /*!**************************************************************!*\
      !*** ./src/app/dashboard/dashboard3/dashboard3.component.ts ***!
      \**************************************************************/

    /*! exports provided: Dashboard3Component */

    /***/
    function BqC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Dashboard3Component", function () {
        return Dashboard3Component;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var ng_apexcharts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ng-apexcharts */
      "CV0D");
      /* harmony import */


      var ng2_charts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ng2-charts */
      "LPYB");

      var _c0 = ["chart"];

      var Dashboard3Component = /*#__PURE__*/function () {
        function Dashboard3Component() {
          _classCallCheck(this, Dashboard3Component);

          // Line chert start
          this.lineChartOptions = {
            responsive: !0,
            maintainAspectRatio: false,
            legend: {
              display: false
            },
            scales: {
              xAxes: [{
                display: true,
                gridLines: {
                  display: false,
                  drawBorder: false
                },
                ticks: {
                  fontColor: '#bdb5b5'
                }
              }],
              yAxes: [{
                display: true,
                ticks: {
                  padding: 10,
                  stepSize: 25,
                  max: 100,
                  min: 0,
                  fontColor: '#bdb5b5'
                },
                gridLines: {
                  display: true,
                  draw1Border: !1,
                  lineWidth: 0.5,
                  zeroLineColor: 'transparent',
                  drawBorder: false
                }
              }]
            }
          };
          this.lineChartData = [{
            data: [20, 60, 25, 75, 90, 40, 43],
            borderWidth: 3,
            borderColor: '#D07BED',
            pointBackgroundColor: '#D07BED',
            pointBorderColor: '#D07BED',
            pointHoverBackgroundColor: '#FFF',
            pointHoverBorderColor: '#D07BED',
            pointRadius: 5,
            pointHoverRadius: 6,
            fill: !1
          }, {
            data: [25, 20, 70, 58, 35, 80, 80],
            borderWidth: 3,
            borderColor: '#51CCA9',
            pointBackgroundColor: '#51CCA9',
            pointBorderColor: '#51CCA9',
            pointHoverBackgroundColor: '#FFF',
            pointHoverBorderColor: '#51CCA9',
            pointRadius: 5,
            pointHoverRadius: 6,
            fill: !1
          }];
          this.lineChartLabels = ['2001', '2002', '2003', '2004', '2005', '2006', '2007'];
          this.chartOptions = {
            series: [{
              name: 'Angular',
              data: [45, 52, 38, 24, 33, 26, 21]
            }, {
              name: 'Wordpress',
              data: [35, 41, 62, 42, 13, 18, 29]
            }, {
              name: 'Java',
              data: [87, 57, 74, 99, 75, 38, 62]
            }],
            chart: {
              height: 300,
              type: 'line',
              foreColor: '#9aa0ac'
            },
            dataLabels: {
              enabled: false
            },
            stroke: {
              width: 5,
              curve: 'straight',
              dashArray: [0, 8, 5]
            },
            legend: {
              tooltipHoverFormatter: function tooltipHoverFormatter(val, opts) {
                return val + ' - <strong>' + opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] + '</strong>';
              }
            },
            markers: {
              size: 0,
              hover: {
                sizeOffset: 6
              }
            },
            xaxis: {
              labels: {
                trim: false
              },
              categories: ['2010', '2011', '2012', '2013', '2014', '2015', '2016']
            },
            tooltip: {
              y: [{
                title: {
                  formatter: function formatter(val) {
                    return val + ' (mins)';
                  }
                }
              }, {
                title: {
                  formatter: function formatter(val) {
                    return val + ' per session';
                  }
                }
              }, {
                title: {
                  formatter: function formatter(val) {
                    return val;
                  }
                }
              }]
            },
            grid: {
              borderColor: '#f1f1f1'
            }
          };
        } // Line chert end


        _createClass(Dashboard3Component, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            $(document).on('click', '.to-do-list .form-check-label .form-check-input', function () {
              $(this).parent('label').toggleClass('line-through');
            });
            $(document).on('click', '.todo-remove', function () {
              $(this).closest('li').remove();
              return false;
            });
            $(document).on('click', '.panel .tools .fa-times', function () {
              $(this).parents('.panel').parent().remove();
            }); //todo

            $('.tdl-new').on('keypress', function (e) {
              var code = e.keyCode ? e.keyCode : e.which;

              if (code == 13) {
                var v = $(this).val();
                var s = v.replace(/ +?/g, '');

                if (s == '') {
                  return false;
                } else {
                  $('.tdl-content ul').append("<li class='clearfix'> <div class='form-check m-l-10'> <label class='form-check-label'> <input class='form-check-input' type='checkbox' value=''>" + v + "<span class='form-check-sign'> <span class='check'></span> </span> </label> </div> <div class='todo-actionlist pull-right clearfix'> <a href='#' class=''> <i class='material-icons'>clear</i> </a> </div> </li>");
                  $(this).val('');
                }
              }
            }); // for dynamically created a tags

            $('.tdl-content').on('click', 'a', function () {
              var _li = $(this).parent().parent('li');

              _li.addClass('remove').stop().delay(100).slideUp('fast', function () {
                _li.remove();
              });

              return false;
            });
          }
        }]);

        return Dashboard3Component;
      }();

      Dashboard3Component.??fac = function Dashboard3Component_Factory(t) {
        return new (t || Dashboard3Component)();
      };

      Dashboard3Component.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: Dashboard3Component,
        selectors: [["app-dashboard3"]],
        viewQuery: function Dashboard3Component_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????viewQuery"](_c0, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????loadQuery"]()) && (ctx.chart = _t.first);
          }
        },
        decls: 451,
        vars: 16,
        consts: [[1, "content"], [1, "container-fluid"], [1, "row"], [1, "col-xs-12", "col-sm-12", "col-md-12", "col-lg-12"], [1, "card"], [1, "header"], [1, "header-dropdown", "m-r--5"], [1, "dropdown"], ["href", "#", "onClick", "return false;", "data-toggle", "dropdown", "role", "button", "aria-haspopup", "true", "aria-expanded", "false"], [1, "material-icons"], [1, "dropdown-menu", "pull-right"], ["href", "#", "onClick", "return false;"], [1, "body"], [1, "text-center"], [1, "row", "clearfix"], [1, "col-lg-4", "col-md-4"], [1, "font-25", "col-green"], [1, "fas", "fa-arrow-up", "col-green"], [1, "font-25", "col-red"], [1, "fas", "fa-arrow-down", "col-red"], [1, "recent-report__chart"], ["baseChart", "", "height", "300", 3, "chartType", "datasets", "labels", "options", "legend"], [1, "col-xs-12", "col-sm-12", "col-md-8", "col-lg-8"], [1, "table-responsive"], [1, "table"], [1, "text-truncate"], [1, "list-unstyled", "order-list"], [1, "avatar", "avatar-sm"], ["src", "assets/images/user/user1.jpg", "alt", "user", 1, "rounded-circle"], ["src", "assets/images/user/user2.jpg", "alt", "user", 1, "rounded-circle"], ["src", "assets/images/user/user3.jpg", "alt", "user", 1, "rounded-circle"], [1, "badge"], [1, "badge", "col-orange"], [1, "progress-xs", "not-rounded", "progress", "shadow-style"], ["role", "progressbar", "aria-valuenow", "40", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "progress-bar-danger", "width-per-40"], [1, "sr-only"], ["src", "assets/images/user/user4.jpg", "alt", "user", 1, "rounded-circle"], ["src", "assets/images/user/user5.jpg", "alt", "user", 1, "rounded-circle"], [1, "badge", "col-cyan"], ["role", "progressbar", "aria-valuenow", "60", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "progress-bar-lightred", "width-per-60"], ["role", "progressbar", "aria-valuenow", "40", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "progress-bar-warning", "width-per-40"], ["src", "assets/images/user/user6.jpg", "alt", "user", 1, "rounded-circle"], ["src", "assets/images/user/user7.jpg", "alt", "user", 1, "rounded-circle"], ["src", "assets/images/user/user8.jpg", "alt", "user", 1, "rounded-circle"], [1, "badge", "col-green"], ["role", "progressbar", "aria-valuenow", "45", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "progress-bar-success", "width-per-45"], ["src", "assets/images/user/user9.jpg", "alt", "user", 1, "rounded-circle"], ["role", "progressbar", "aria-valuenow", "80", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "progress-bar-lightred", "width-per-80"], ["role", "progressbar", "aria-valuenow", "40", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "progress-bar-success", "width-per-40"], [1, "col-xs-12", "col-sm-12", "col-md-4", "col-lg-4"], [1, "tdl-content"], [1, "to-do-list", "ui-sortable"], [1, "clearfix"], [1, "form-check", "m-l-10"], [1, "form-check-label"], ["type", "checkbox", "value", "", 1, "form-check-input"], [1, "form-check-sign"], [1, "check"], [1, "todo-actionlist", "pull-right", "clearfix"], ["href", "#"], ["type", "text", "placeholder", "Enter Todo...", 1, "tdl-new", "form-control-radious", "w-100"], [1, "col-xs-12", "col-sm-6"], ["href", "#", "data-toggle", "dropdown", "role", "button", "aria-haspopup", "true", "aria-expanded", "false"], [1, "col-lg-9", "col-md-8", "col-sm-12", "col-xs-12"], ["id", "chart"], [3, "series", "chart", "xaxis", "stroke", "tooltip", "dataLabels", "legend", "markers", "grid", "yaxis", "title"], [1, "col-lg-3", "col-md-4", "col-sm-12", "col-xs-12"], [1, "progress-list", "m-b-10"], [1, "details"], [1, "title"], [1, "status"], [1, "progress-xs", "not-rounded", "progress"], ["role", "progressbar", "aria-valuenow", "38", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "progress-bar-success", "width-per-31"], ["role", "progressbar", "aria-valuenow", "12", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "progress-bar-lightred", "width-per-22"], ["role", "progressbar", "aria-valuenow", "49", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "progress-bar-danger", "width-per-49"], ["role", "progressbar", "aria-valuenow", "65", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "progress-bar-blue", "width-per-65"], ["role", "progressbar", "aria-valuenow", "28", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "progress-bar-success", "width-per-28"], ["role", "progressbar", "aria-valuenow", "16", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "progress-bar-hotpink", "width-per-16"]],
        template: function Dashboard3Component_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "Income/Expense");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, " Report");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "ul", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "li", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "a", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "i", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "more_vert");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "ul", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "a", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, "Action");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "a", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, "Another action");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "a", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, "Something else here");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "h2", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30, "$150");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "small");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](32, "21% ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](33, "i", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](34, " Increase Today");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "h2", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](37, "$1325");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "small");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](39, "10% ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](40, "i", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](41, " Increase This Month");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "h2", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](44, "$4587");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "small");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](46, "14% ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](47, "i", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](48, " Increase This Year");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](50, "canvas", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](52, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](55, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](56, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](57, "Project");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](58, " Details");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](59, "ul", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](60, "li", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](61, "a", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](62, "i", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](63, "more_vert");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](64, "ul", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](65, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](66, "a", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](67, "Action");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](68, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](69, "a", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](70, "Another action");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](71, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](72, "a", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](73, "Something else here");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](74, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](75, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](76, "table", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](77, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](78, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](79, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](80, "Project");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](81, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](82, "Team");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](83, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](84, "Priority");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](85, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](86, "Status");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](87, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](88, "Amount");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](89, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](90, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](91, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](92, "Project A");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](93, "td", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](94, "ul", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](95, "li", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](96, "img", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](97, "li", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](98, "img", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](99, "li", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](100, "img", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](101, "li", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](102, "span", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](103, "+4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](104, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](105, "span", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](106, "High");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](107, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](108, "div", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](109, "div", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](110, "span", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](111, "40%");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](112, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](113, "$150.00");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](114, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](115, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](116, "Project B");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](117, "td", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](118, "ul", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](119, "li", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](120, "img", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](121, "li", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](122, "img", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](123, "li", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](124, "span", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](125, "+3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](126, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](127, "span", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](128, "Medium");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](129, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](130, "div", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](131, "div", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](132, "span", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](133, "60%");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](134, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](135, "$470.00");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](136, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](137, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](138, "Project C");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](139, "td", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](140, "ul", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](141, "li", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](142, "img", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](143, "li", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](144, "img", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](145, "li", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](146, "img", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](147, "li", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](148, "span", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](149, "+4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](150, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](151, "span", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](152, "High");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](153, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](154, "div", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](155, "div", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](156, "span", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](157, "40%");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](158, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](159, "$564.00");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](160, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](161, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](162, "Project D");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](163, "td", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](164, "ul", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](165, "li", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](166, "img", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](167, "li", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](168, "img", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](169, "li", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](170, "img", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](171, "li", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](172, "span", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](173, "+4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](174, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](175, "span", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](176, "Low");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](177, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](178, "div", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](179, "div", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](180, "span", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](181, "45%");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](182, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](183, "$925.00");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](184, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](185, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](186, "Project E");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](187, "td", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](188, "ul", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](189, "li", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](190, "img", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](191, "li", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](192, "img", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](193, "li", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](194, "span", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](195, "+1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](196, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](197, "span", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](198, "Medium");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](199, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](200, "div", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](201, "div", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](202, "span", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](203, "80%");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](204, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](205, "$785.00");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](206, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](207, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](208, "Project G");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](209, "td", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](210, "ul", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](211, "li", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](212, "img", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](213, "li", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](214, "img", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](215, "li", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](216, "img", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](217, "li", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](218, "span", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](219, "+3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](220, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](221, "span", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](222, "Low");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](223, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](224, "div", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](225, "div", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](226, "span", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](227, "40%");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](228, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](229, "$270.00");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](230, "div", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](231, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](232, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](233, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](234, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](235, "New ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](236, "Projects");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](237, "ul", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](238, "li", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](239, "a", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](240, "i", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](241, "more_vert");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](242, "ul", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](243, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](244, "a", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](245, "Action");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](246, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](247, "a", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](248, "Another action");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](249, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](250, "a", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](251, "Something else here");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](252, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](253, "div", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](254, "ul", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](255, "li", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](256, "div", 53);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](257, "label", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](258, "input", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](259, " Add salary details in system ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](260, "span", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](261, "span", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](262, "div", 58);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](263, "a", 59);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](264, "i", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](265, "clear");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](266, "li", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](267, "div", 53);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](268, "label", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](269, "input", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](270, " Announcement for holiday ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](271, "span", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](272, "span", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](273, "div", 58);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](274, "a", 59);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](275, "i", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](276, "clear");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](277, "li", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](278, "div", 53);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](279, "label", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](280, "input", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](281, " call bus driver ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](282, "span", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](283, "span", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](284, "div", 58);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](285, "a", 59);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](286, "i", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](287, "clear");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](288, "li", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](289, "div", 53);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](290, "label", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](291, "input", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](292, " Office Picnic ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](293, "span", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](294, "span", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](295, "div", 58);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](296, "a", 59);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](297, "i", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](298, "clear");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](299, "li", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](300, "div", 53);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](301, "label", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](302, "input", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](303, " Website Must Be Finished ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](304, "span", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](305, "span", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](306, "div", 58);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](307, "a", 59);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](308, "i", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](309, "clear");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](310, "li", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](311, "div", 53);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](312, "label", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](313, "input", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](314, " Recharge My Mobile ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](315, "span", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](316, "span", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](317, "div", 58);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](318, "a", 59);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](319, "i", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](320, "clear");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](321, "li", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](322, "div", 53);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](323, "label", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](324, "input", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](325, " Add salary details in system ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](326, "span", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](327, "span", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](328, "div", 58);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](329, "a", 59);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](330, "i", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](331, "clear");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](332, "input", 60);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](333, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](334, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](335, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](336, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](337, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](338, "div", 61);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](339, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](340, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](341, "Project");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](342, " Completed Chart");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](343, "ul", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](344, "li", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](345, "a", 62);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](346, "i", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](347, "more_vert");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](348, "ul", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](349, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](350, "a", 59);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](351, "Action");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](352, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](353, "a", 59);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](354, "Another action");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](355, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](356, "a", 59);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](357, "Something else here");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](358, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](359, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](360, "div", 63);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](361, "div", 64);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](362, "apx-chart", 65);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](363, "div", 66);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](364, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](365, "Worldwide Clients");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](366, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](367, "div", 67);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](368, "div", 68);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](369, "div", 69);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](370, "USA");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](371, "div", 70);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](372, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](373, "40");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](374, "% ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](375, "div", 71);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](376, "div", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](377, "span", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](378, "40%");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](379, "div", 67);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](380, "div", 68);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](381, "div", 69);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](382, "Canada");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](383, "div", 70);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](384, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](385, "38");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](386, "% ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](387, "div", 71);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](388, "div", 72);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](389, "span", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](390, "38%");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](391, "div", 67);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](392, "div", 68);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](393, "div", 69);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](394, "Asia");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](395, "div", 70);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](396, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](397, "12");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](398, "% ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](399, "div", 71);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](400, "div", 73);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](401, "span", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](402, "12%");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](403, "div", 67);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](404, "div", 68);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](405, "div", 69);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](406, "Germany");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](407, "div", 70);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](408, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](409, "49");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](410, "% ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](411, "div", 71);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](412, "div", 74);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](413, "span", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](414, "49%");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](415, "div", 67);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](416, "div", 68);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](417, "div", 69);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](418, "France");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](419, "div", 70);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](420, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](421, "65");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](422, "% ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](423, "div", 71);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](424, "div", 75);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](425, "span", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](426, "65%");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](427, "div", 67);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](428, "div", 68);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](429, "div", 69);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](430, "India");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](431, "div", 70);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](432, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](433, "28");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](434, "% ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](435, "div", 71);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](436, "div", 76);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](437, "span", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](438, "28%");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](439, "div", 67);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](440, "div", 68);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](441, "div", 69);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](442, "Other");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](443, "div", 70);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](444, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](445, "16");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](446, "% ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](447, "div", 71);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](448, "div", 77);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](449, "span", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](450, "16%");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](50);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("chartType", "line")("datasets", ctx.lineChartData)("labels", ctx.lineChartLabels)("options", ctx.lineChartOptions)("legend", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](312);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("series", ctx.chartOptions.series)("chart", ctx.chartOptions.chart)("xaxis", ctx.chartOptions.xaxis)("stroke", ctx.chartOptions.stroke)("tooltip", ctx.chartOptions.tooltip)("dataLabels", ctx.chartOptions.dataLabels)("legend", ctx.chartOptions.legend)("markers", ctx.chartOptions.markers)("grid", ctx.chartOptions.grid)("yaxis", ctx.chartOptions.yaxis)("title", ctx.chartOptions.title);
          }
        },
        directives: [ng2_charts__WEBPACK_IMPORTED_MODULE_2__["BaseChartDirective"], ng_apexcharts__WEBPACK_IMPORTED_MODULE_1__["ChartComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQzL2Rhc2hib2FyZDMuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](Dashboard3Component, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-dashboard3',
            templateUrl: './dashboard3.component.html',
            styleUrls: ['./dashboard3.component.scss']
          }]
        }], function () {
          return [];
        }, {
          chart: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['chart']
          }]
        });
      })();
      /***/

    },

    /***/
    "FPWW":
    /*!**************************************************!*\
      !*** ./src/app/dashboard/main/main.component.ts ***!
      \**************************************************/

    /*! exports provided: MainComponent */

    /***/
    function FPWW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MainComponent", function () {
        return MainComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _fullcalendar_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @fullcalendar/angular */
      "IvIE");
      /* harmony import */


      var _fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @fullcalendar/daygrid */
      "iOEq");
      /* harmony import */


      var _services_dynamic_script_loader_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./../../services/dynamic-script-loader.service */
      "cpNI");
      /* harmony import */


      var ng_apexcharts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ng-apexcharts */
      "CV0D");
      /* harmony import */


      var ng2_charts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ng2-charts */
      "LPYB");
      /* harmony import */


      var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ngx-perfect-scrollbar */
      "Kdsb");

      var _c0 = ["calendar"];
      var _c1 = ["chart"];

      var _c2 = function _c2() {
        return {
          left: "title",
          center: "",
          right: "prev,today,next"
        };
      };

      var d = new Date(),
          date = d.getDate(),
          month = d.getMonth(),
          year = d.getFullYear();

      var MainComponent = /*#__PURE__*/function () {
        function MainComponent(dynamicScriptLoader) {
          _classCallCheck(this, MainComponent);

          this.dynamicScriptLoader = dynamicScriptLoader;
          this.calendarVisible = true;
          this.calendarPlugins = [_fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_2__["default"]];
          this.calendarWeekends = true;
          this.calendarEvents = [{
            title: 'Conference',
            start: new Date(year, month, date - 5, 0, 0),
            end: new Date(year, month, date - 2, 0, 0),
            backgroundColor: '#00FFFF'
          }, {
            title: 'Holiday',
            start: new Date(year, month, date - 10, 9, 0),
            end: new Date(year, month, date - 8, 0, 0),
            backgroundColor: '#F3565D'
          }, {
            title: 'Repeating Event',
            start: new Date(year, month, date + 5, 16, 0),
            allDay: !1,
            backgroundColor: '#1bbc9b'
          }, {
            title: 'Meeting',
            start: new Date(year, month, date, 10, 30),
            allDay: !1
          }, {
            title: 'Result Day',
            start: new Date(year, month, date + 7, 19, 0),
            end: new Date(year, month, date + 1, 22, 30),
            backgroundColor: '#DC35A9',
            allDay: !1
          }, {
            title: 'Click for Google',
            start: new Date(year, month, 29),
            end: new Date(year, month, 30),
            backgroundColor: '#9b59b6',
            url: 'http://google.com/'
          }]; // area chart start

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
              xAxes: [{
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
              }],
              yAxes: [{
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
              }]
            },
            title: {
              display: false,
              text: 'Normal Legend'
            }
          };
          this.areaChartData = [{
            label: 'Foods',
            data: [0, 105, 190, 140, 270],
            borderWidth: 2,
            pointStyle: 'circle',
            pointRadius: 3,
            pointBorderColor: 'transparent'
          }, {
            label: 'Electronics',
            data: [0, 152, 80, 250, 190],
            borderWidth: 2,
            pointStyle: 'circle',
            pointRadius: 3,
            pointBorderColor: 'transparent'
          }];
          this.areaChartLabels = ['January', 'February', 'March', 'April', 'May']; // area chart end
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
              xAxes: [{
                ticks: {
                  fontFamily: 'Poppins',
                  fontColor: '#9aa0ac' // Font Color

                }
              }],
              yAxes: [{
                ticks: {
                  beginAtZero: true,
                  fontFamily: 'Poppins',
                  fontColor: '#9aa0ac' // Font Color

                }
              }]
            }
          };
          this.barChartLabels = ['2001', '2002', '2003', '2004', '2005', '2006', '2007'];
          this.barChartType = 'bar';
          this.barChartLegend = true;
          this.barChartData = [{
            data: [58, 60, 74, 78, 55, 64, 42],
            label: 'Series A'
          }, {
            data: [30, 45, 51, 22, 79, 35, 82],
            label: 'Series B'
          }];
          this.barChartColors = [{
            backgroundColor: 'rgba(109, 144, 232, 0.8)',
            borderColor: 'rgba(109, 144, 232,1)',
            pointBackgroundColor: 'rgba(109, 144, 232,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(109, 144, 232,0.8)'
          }, {
            backgroundColor: 'rgba(255, 140, 96, 0.8)',
            borderColor: 'rgba(255, 140, 96,1)',
            pointBackgroundColor: 'rgba(255, 140, 96,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(255, 140, 96,0.8)'
          }];
        } // end bar chart


        _createClass(MainComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            'use strict';

            this.chart1();
            this.chart2();
          } // Chart 1

        }, {
          key: "chart1",
          value: function chart1() {
            this.chartOptions = {
              series: [{
                name: 'High - 2013',
                data: [28, 29, 33, 36, 32, 32, 33]
              }, {
                name: 'Low - 2013',
                data: [12, 11, 14, 18, 17, 13, 13]
              }],
              chart: {
                height: 250,
                type: 'line',
                dropShadow: {
                  enabled: true,
                  color: '#000',
                  top: 18,
                  left: 7,
                  blur: 10,
                  opacity: 0.2
                },
                toolbar: {
                  show: false
                },
                foreColor: '#9aa0ac'
              },
              colors: ['#FF3D00', '#43A047'],
              dataLabels: {
                enabled: true
              },
              stroke: {
                curve: 'smooth'
              },
              markers: {
                size: 1
              },
              xaxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
                labels: {
                  style: {
                    colors: '#9aa0ac'
                  }
                }
              },
              yaxis: {
                title: {
                  text: 'Temperature'
                },
                min: 5,
                max: 40
              },
              legend: {
                position: 'top',
                horizontalAlign: 'right',
                floating: true,
                offsetY: -25,
                offsetX: -5
              }
            };
          } // Chart 2

        }, {
          key: "chart2",
          value: function chart2() {
            this.chartOptions2 = {
              series: [{
                name: 'blue',
                data: [{
                  x: 'Team A',
                  y: [1, 5]
                }, {
                  x: 'Team B',
                  y: [4, 6]
                }, {
                  x: 'Team C',
                  y: [5, 8]
                }]
              }, {
                name: 'green',
                data: [{
                  x: 'Team A',
                  y: [2, 6]
                }, {
                  x: 'Team B',
                  y: [1, 3]
                }, {
                  x: 'Team C',
                  y: [7, 8]
                }]
              }],
              chart: {
                type: 'rangeBar',
                height: 250,
                foreColor: '#9aa0ac'
              },
              plotOptions: {
                bar: {
                  horizontal: false
                }
              },
              dataLabels: {
                enabled: true
              }
            };
          }
        }]);

        return MainComponent;
      }();

      MainComponent.??fac = function MainComponent_Factory(t) {
        return new (t || MainComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_services_dynamic_script_loader_service__WEBPACK_IMPORTED_MODULE_3__["DynamicScriptLoaderService"]));
      };

      MainComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: MainComponent,
        selectors: [["app-main"]],
        viewQuery: function MainComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????viewQuery"](_c0, true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????viewQuery"](_c1, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????loadQuery"]()) && (ctx.calendarComponent = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????loadQuery"]()) && (ctx.chart = _t.first);
          }
        },
        decls: 416,
        vars: 31,
        consts: [[1, "content"], [1, "container-fluid"], [1, "row"], [1, "col-lg-3", "col-sm-6"], [1, "info-box7", "l-bg-green", "order-info-box7"], [1, "info-box7-block"], [1, "m-b-20"], [1, "text-right"], [1, "fas", "fa-cart-plus", "pull-left"], [1, "m-b-0"], [1, "info-box7", "l-bg-purple", "order-info-box7"], [1, "fas", "fa-business-time", "pull-left"], [1, "info-box7", "l-bg-orange", "order-info-box7"], [1, "fas", "fa-chart-line", "pull-left"], [1, "info-box7", "l-bg-cyan", "order-info-box7"], [1, "fas", "fa-dollar-sign", "pull-left"], [1, "col-xs-12", "col-sm-12", "col-md-6", "col-lg-6"], [1, "card"], [1, "header"], [1, "header-dropdown", "m-r--5"], [1, "dropdown"], ["href", "#", "onClick", "return false;", "data-toggle", "dropdown", "role", "button", "aria-haspopup", "true", "aria-expanded", "false"], [1, "material-icons"], [1, "dropdown-menu", "pull-right"], ["href", "#", "onClick", "return false;"], [1, "body"], ["baseChart", "", 3, "chartType", "datasets", "labels", "options", "legend"], [1, "col-4"], [1, "text-muted", "font-15", "text-truncate"], [1, "fas", "fa-arrow-circle-up", "col-green", "m-r-5"], [1, "fas", "fa-arrow-circle-down", "col-red", "m-r-5"], [1, "text-muted", "text-truncate"], ["baseChart", "", 1, "chart", 3, "datasets", "labels", "options", "colors", "legend", "chartType"], [1, "row", "clearfix"], [1, "col-xs-12", "col-sm-12", "col-md-8", "col-lg-8"], ["id", "chart"], [3, "series", "chart", "xaxis", "stroke", "colors", "dataLabels", "legend", "markers", "grid", "yaxis", "title"], [1, "col-xs-12", "col-sm-12", "col-md-4", "col-lg-4"], [3, "series", "chart", "dataLabels", "plotOptions"], ["id", "new-orders", 1, "media-list", "position-relative", 2, "position", "relative", "max-height", "500px", 3, "perfectScrollbar"], [1, "table-responsive"], ["id", "new-orders-table", 1, "table", "table-hover", "table-xl", "mb-0"], [1, "border-top-0"], [1, "text-truncate"], [1, "list-unstyled", "order-list"], [1, "avatar", "avatar-sm"], ["src", "assets/images/user/user1.jpg", "alt", "user", 1, "rounded-circle"], ["src", "assets/images/user/user3.jpg", "alt", "user", 1, "rounded-circle"], [1, "badge"], ["src", "assets/images/user/user4.jpg", "alt", "user", 1, "rounded-circle"], ["src", "assets/images/user/user5.jpg", "alt", "user", 1, "rounded-circle"], ["src", "assets/images/user/user6.jpg", "alt", "user", 1, "rounded-circle"], ["src", "assets/images/user/user7.jpg", "alt", "user", 1, "rounded-circle"], ["src", "assets/images/user/user8.jpg", "alt", "user", 1, "rounded-circle"], ["src", "assets/images/user/user9.jpg", "alt", "user", 1, "rounded-circle"], ["src", "assets/images/user/user2.jpg", "alt", "user", 1, "rounded-circle"], [1, "deskCal"], ["defaultView", "dayGridMonth", 3, "header", "plugins", "weekends", "events"], ["calendar", ""]],
        template: function MainComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "h4", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "Orders Received");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "h2", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](9, "i", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "358");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "p", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "18% Higher Then Last Month");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "h4", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, "Delivered");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "h2", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](20, "i", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, "865");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "p", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, "21% Higher Then Last Month");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "h4", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](29, "New Orders");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "h2", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](31, "i", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](33, "128");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "p", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](35, "37% Higher Then Last Month");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "h4", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](40, "Total Earning");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "h2", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](42, "i", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](44, "$25698");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "p", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](46, "10% Higher Then Last Month");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](52, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](53, "Chart");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](54, " Sample");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](55, "ul", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](56, "li", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](57, "a", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](58, "i", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](59, "more_vert");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](60, "ul", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](61, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](62, "a", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](63, "Action");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](64, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](65, "a", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](66, "Another action");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](67, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](68, "a", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](69, "Something else here");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](70, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](71, "canvas", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](72, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](73, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](74, "p", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](75, "Target");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](76, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](77, "i", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](78, "$15.3k ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](79, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](80, "p", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](81, "Last week");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](82, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](83, "i", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](84, "$2.8k ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](85, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](86, "p", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](87, "Last Month");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](88, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](89, "i", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](90, "$12.5k ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](91, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](92, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](93, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](94, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](95, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](96, "Chart");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](97, " Sample");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](98, "ul", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](99, "li", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](100, "a", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](101, "i", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](102, "more_vert");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](103, "ul", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](104, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](105, "a", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](106, "Action");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](107, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](108, "a", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](109, "Another action");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](110, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](111, "a", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](112, "Something else here");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](113, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](114, "canvas", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](115, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](116, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](117, "p", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](118, "Target");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](119, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](120, "i", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](121, "$15.3k ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](122, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](123, "p", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](124, "Last week");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](125, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](126, "i", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](127, "$2.8k ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](128, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](129, "p", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](130, "Last Month");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](131, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](132, "i", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](133, "$12.5k ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](134, "div", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](135, "div", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](136, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](137, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](138, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](139, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](140, "Chart");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](141, " Data");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](142, "ul", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](143, "li", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](144, "a", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](145, "i", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](146, "more_vert");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](147, "ul", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](148, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](149, "a", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](150, "Action");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](151, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](152, "a", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](153, "Another action");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](154, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](155, "a", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](156, "Something else here");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](157, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](158, "div", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](159, "div", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](160, "apx-chart", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](161, "div", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](162, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](163, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](164, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](165, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](166, "Chart");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](167, " Data");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](168, "ul", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](169, "li", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](170, "a", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](171, "i", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](172, "more_vert");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](173, "ul", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](174, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](175, "a", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](176, "Action");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](177, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](178, "a", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](179, "Another action");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](180, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](181, "a", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](182, "Something else here");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](183, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](184, "div", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](185, "div", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](186, "apx-chart", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](187, "div", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](188, "div", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](189, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](190, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](191, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](192, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](193, "New ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](194, "Projects");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](195, "ul", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](196, "li", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](197, "a", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](198, "i", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](199, "more_vert");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](200, "ul", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](201, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](202, "a", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](203, "Action");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](204, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](205, "a", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](206, "Another action");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](207, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](208, "a", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](209, "Something else here");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](210, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](211, "div", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](212, "div", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](213, "table", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](214, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](215, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](216, "th", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](217, "Product");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](218, "th", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](219, "Employees");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](220, "th", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](221, "Cost");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](222, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](223, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](224, "td", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](225, "iPhone X");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](226, "td", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](227, "ul", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](228, "li", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](229, "img", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](230, "li", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](231, "img", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](232, "li", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](233, "span", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](234, "+2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](235, "td", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](236, "$8999");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](237, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](238, "td", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](239, "Pixel 2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](240, "td", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](241, "ul", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](242, "li", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](243, "img", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](244, "li", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](245, "img", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](246, "li", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](247, "img", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](248, "li", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](249, "span", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](250, "+4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](251, "td", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](252, "$5550");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](253, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](254, "td", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](255, "OnePlus");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](256, "td", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](257, "ul", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](258, "li", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](259, "img", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](260, "li", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](261, "img", 53);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](262, "li", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](263, "img", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](264, "li", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](265, "span", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](266, "+3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](267, "td", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](268, "$9000");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](269, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](270, "td", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](271, "Galaxy");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](272, "td", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](273, "ul", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](274, "li", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](275, "img", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](276, "li", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](277, "img", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](278, "li", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](279, "span", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](280, "+1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](281, "td", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](282, "$7500");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](283, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](284, "td", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](285, "Moto Z2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](286, "td", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](287, "ul", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](288, "li", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](289, "img", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](290, "li", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](291, "img", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](292, "li", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](293, "img", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](294, "li", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](295, "span", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](296, "+4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](297, "td", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](298, "$8500");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](299, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](300, "td", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](301, "iPhone X");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](302, "td", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](303, "ul", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](304, "li", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](305, "img", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](306, "li", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](307, "img", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](308, "li", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](309, "span", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](310, "+2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](311, "td", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](312, "$8999");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](313, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](314, "td", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](315, "iPhone X");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](316, "td", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](317, "ul", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](318, "li", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](319, "img", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](320, "li", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](321, "img", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](322, "li", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](323, "img", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](324, "li", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](325, "span", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](326, "+4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](327, "td", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](328, "$8999");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](329, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](330, "td", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](331, "Pixel 2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](332, "td", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](333, "ul", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](334, "li", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](335, "img", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](336, "li", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](337, "img", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](338, "li", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](339, "span", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](340, "+3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](341, "td", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](342, "$5550");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](343, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](344, "td", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](345, "OnePlus");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](346, "td", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](347, "ul", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](348, "li", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](349, "img", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](350, "li", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](351, "img", 53);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](352, "li", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](353, "img", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](354, "li", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](355, "span", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](356, "+3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](357, "td", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](358, "$9000");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](359, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](360, "td", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](361, "Samsung");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](362, "td", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](363, "ul", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](364, "li", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](365, "img", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](366, "li", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](367, "img", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](368, "li", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](369, "img", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](370, "li", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](371, "span", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](372, "+2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](373, "td", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](374, "$4563");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](375, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](376, "td", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](377, "Nokia");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](378, "td", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](379, "ul", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](380, "li", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](381, "img", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](382, "li", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](383, "img", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](384, "li", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](385, "img", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](386, "li", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](387, "span", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](388, "+1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](389, "td", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](390, "$8763");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](391, "div", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](392, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](393, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](394, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](395, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](396, "Calendar");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](397, "ul", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](398, "li", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](399, "a", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](400, "i", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](401, "more_vert");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](402, "ul", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](403, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](404, "a", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](405, "Action");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](406, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](407, "a", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](408, "Another action");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](409, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](410, "a", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](411, "Something else here");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](412, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](413, "div", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](414, "full-calendar", 57, 58);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](71);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("chartType", "line")("datasets", ctx.areaChartData)("labels", ctx.areaChartLabels)("options", ctx.areaChartOptions)("legend", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("datasets", ctx.barChartData)("labels", ctx.barChartLabels)("options", ctx.barChartOptions)("colors", ctx.barChartColors)("legend", ctx.barChartLegend)("chartType", ctx.barChartType);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](46);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("series", ctx.chartOptions.series)("chart", ctx.chartOptions.chart)("xaxis", ctx.chartOptions.xaxis)("stroke", ctx.chartOptions.stroke)("colors", ctx.chartOptions.colors)("dataLabels", ctx.chartOptions.dataLabels)("legend", ctx.chartOptions.legend)("markers", ctx.chartOptions.markers)("grid", ctx.chartOptions.grid)("yaxis", ctx.chartOptions.yaxis)("title", ctx.chartOptions.title);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("series", ctx.chartOptions2.series)("chart", ctx.chartOptions2.chart)("dataLabels", ctx.chartOptions2.dataLabels)("plotOptions", ctx.chartOptions2.plotOptions);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](228);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("header", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](30, _c2))("plugins", ctx.calendarPlugins)("weekends", ctx.calendarWeekends)("events", ctx.calendarEvents);
          }
        },
        directives: [ng2_charts__WEBPACK_IMPORTED_MODULE_5__["BaseChartDirective"], ng_apexcharts__WEBPACK_IMPORTED_MODULE_4__["ChartComponent"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__["PerfectScrollbarDirective"], _fullcalendar_angular__WEBPACK_IMPORTED_MODULE_1__["FullCalendarComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9tYWluL21haW4uY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](MainComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-main',
            templateUrl: './main.component.html',
            styleUrls: ['./main.component.scss']
          }]
        }], function () {
          return [{
            type: _services_dynamic_script_loader_service__WEBPACK_IMPORTED_MODULE_3__["DynamicScriptLoaderService"]
          }];
        }, {
          calendarComponent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['calendar', {
              "static": false
            }]
          }],
          chart: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['chart', {
              "static": false
            }]
          }]
        });
      })();
      /***/

    },

    /***/
    "Oy4E":
    /*!*******************************************************!*\
      !*** ./src/app/dashboard/dashboard-routing.module.ts ***!
      \*******************************************************/

    /*! exports provided: DashboardRoutingModule */

    /***/
    function Oy4E(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DashboardRoutingModule", function () {
        return DashboardRoutingModule;
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


      var _main_main_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./main/main.component */
      "FPWW");
      /* harmony import */


      var _dashboard2_dashboard2_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./dashboard2/dashboard2.component */
      "fFEk");
      /* harmony import */


      var _dashboard3_dashboard3_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./dashboard3/dashboard3.component */
      "1BqC");

      var routes = [{
        path: '',
        redirectTo: 'main',
        pathMatch: 'full'
      }, {
        path: 'main',
        component: _main_main_component__WEBPACK_IMPORTED_MODULE_2__["MainComponent"]
      }, {
        path: 'dashboard2',
        component: _dashboard2_dashboard2_component__WEBPACK_IMPORTED_MODULE_3__["Dashboard2Component"]
      }, {
        path: 'dashboard3',
        component: _dashboard3_dashboard3_component__WEBPACK_IMPORTED_MODULE_4__["Dashboard3Component"]
      }];

      var DashboardRoutingModule = function DashboardRoutingModule() {
        _classCallCheck(this, DashboardRoutingModule);
      };

      DashboardRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
        type: DashboardRoutingModule
      });
      DashboardRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
        factory: function DashboardRoutingModule_Factory(t) {
          return new (t || DashboardRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](DashboardRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](DashboardRoutingModule, [{
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
    "TDBs":
    /*!***********************************************!*\
      !*** ./src/app/dashboard/dashboard.module.ts ***!
      \***********************************************/

    /*! exports provided: DashboardModule */

    /***/
    function TDBs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DashboardModule", function () {
        return DashboardModule;
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


      var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./dashboard-routing.module */
      "Oy4E");
      /* harmony import */


      var _main_main_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./main/main.component */
      "FPWW");
      /* harmony import */


      var _dashboard2_dashboard2_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./dashboard2/dashboard2.component */
      "fFEk");
      /* harmony import */


      var _dashboard3_dashboard3_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./dashboard3/dashboard3.component */
      "1BqC");
      /* harmony import */


      var ng2_charts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ng2-charts */
      "LPYB");
      /* harmony import */


      var ngx_echarts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ngx-echarts */
      "DKVz");
      /* harmony import */


      var _fullcalendar_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @fullcalendar/angular */
      "IvIE");
      /* harmony import */


      var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ngx-perfect-scrollbar */
      "Kdsb");
      /* harmony import */


      var ng_apexcharts__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ng-apexcharts */
      "CV0D");

      var DashboardModule = function DashboardModule() {
        _classCallCheck(this, DashboardModule);
      };

      DashboardModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
        type: DashboardModule
      });
      DashboardModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
        factory: function DashboardModule_Factory(t) {
          return new (t || DashboardModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_2__["DashboardRoutingModule"], ng2_charts__WEBPACK_IMPORTED_MODULE_6__["ChartsModule"], ngx_echarts__WEBPACK_IMPORTED_MODULE_7__["NgxEchartsModule"], _fullcalendar_angular__WEBPACK_IMPORTED_MODULE_8__["FullCalendarModule"], ng_apexcharts__WEBPACK_IMPORTED_MODULE_10__["NgApexchartsModule"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_9__["PerfectScrollbarModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](DashboardModule, {
          declarations: [_main_main_component__WEBPACK_IMPORTED_MODULE_3__["MainComponent"], _dashboard2_dashboard2_component__WEBPACK_IMPORTED_MODULE_4__["Dashboard2Component"], _dashboard3_dashboard3_component__WEBPACK_IMPORTED_MODULE_5__["Dashboard3Component"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_2__["DashboardRoutingModule"], ng2_charts__WEBPACK_IMPORTED_MODULE_6__["ChartsModule"], ngx_echarts__WEBPACK_IMPORTED_MODULE_7__["NgxEchartsModule"], _fullcalendar_angular__WEBPACK_IMPORTED_MODULE_8__["FullCalendarModule"], ng_apexcharts__WEBPACK_IMPORTED_MODULE_10__["NgApexchartsModule"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_9__["PerfectScrollbarModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](DashboardModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_main_main_component__WEBPACK_IMPORTED_MODULE_3__["MainComponent"], _dashboard2_dashboard2_component__WEBPACK_IMPORTED_MODULE_4__["Dashboard2Component"], _dashboard3_dashboard3_component__WEBPACK_IMPORTED_MODULE_5__["Dashboard3Component"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_2__["DashboardRoutingModule"], ng2_charts__WEBPACK_IMPORTED_MODULE_6__["ChartsModule"], ngx_echarts__WEBPACK_IMPORTED_MODULE_7__["NgxEchartsModule"], _fullcalendar_angular__WEBPACK_IMPORTED_MODULE_8__["FullCalendarModule"], ng_apexcharts__WEBPACK_IMPORTED_MODULE_10__["NgApexchartsModule"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_9__["PerfectScrollbarModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "fFEk":
    /*!**************************************************************!*\
      !*** ./src/app/dashboard/dashboard2/dashboard2.component.ts ***!
      \**************************************************************/

    /*! exports provided: Dashboard2Component */

    /***/
    function fFEk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Dashboard2Component", function () {
        return Dashboard2Component;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var ng2_charts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ng2-charts */
      "LPYB");
      /* harmony import */


      var ngx_echarts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ngx-echarts */
      "DKVz");
      /* harmony import */


      var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ngx-perfect-scrollbar */
      "Kdsb");

      var Dashboard2Component = /*#__PURE__*/function () {
        function Dashboard2Component() {
          _classCallCheck(this, Dashboard2Component);

          //Banner chart 1 start
          this.bannerChartOptions1 = {
            responsive: true,
            tooltips: {
              enabled: true
            },
            legend: {
              display: false,
              position: 'top',
              labels: {
                usePointStyle: true
              }
            },
            scales: {
              xAxes: [{
                display: false,
                gridLines: {
                  display: false,
                  drawBorder: false
                },
                scaleLabel: {
                  display: false,
                  labelString: 'Month'
                }
              }],
              yAxes: [{
                display: false,
                gridLines: {
                  display: false,
                  drawBorder: false
                },
                scaleLabel: {
                  display: true,
                  labelString: 'Value'
                }
              }]
            },
            title: {
              display: false
            }
          };
          this.bannerChartData1 = [{
            data: [28, 35, 36, 48, 46, 42, 60],
            backgroundColor: 'rgba(255,164,34,0.32)',
            borderColor: '#F4A52E',
            borderWidth: 3,
            strokeColor: '#F4A52E',
            capBezierPoints: !0,
            pointColor: '#F4A52E',
            pointBorderColor: '#F4A52E',
            pointBackgroundColor: '#F4A52E',
            pointBorderWidth: 3,
            pointRadius: 5,
            pointHoverBackgroundColor: '#F4A52E',
            pointHoverBorderColor: '#F4A52E',
            pointHoverRadius: 7
          }];
          this.bannerChartLabels1 = ['2010', '2011', '2012', '2013', '2014', '2015', '2016']; //Banner chart 1 end
          //Banner chart 2 start

          this.bannerChartOptions2 = {
            responsive: true,
            tooltips: {
              enabled: true
            },
            legend: {
              display: false,
              position: 'top',
              labels: {
                usePointStyle: true
              }
            },
            scales: {
              xAxes: [{
                display: false,
                gridLines: {
                  display: false,
                  drawBorder: false
                },
                scaleLabel: {
                  display: false,
                  labelString: 'Month'
                }
              }],
              yAxes: [{
                display: false,
                gridLines: {
                  display: false,
                  drawBorder: false
                },
                scaleLabel: {
                  display: true,
                  labelString: 'Value'
                }
              }]
            },
            title: {
              display: false
            }
          };
          this.bannerChartData2 = [{
            data: [28, 35, 36, 48, 46, 42, 60],
            backgroundColor: 'rgba(0,175,240,0.32)',
            borderColor: '#50AAED',
            borderWidth: 3,
            strokeColor: '#50AAED',
            capBezierPoints: !0,
            pointColor: '#50AAED',
            pointBorderColor: '#50AAED',
            pointBackgroundColor: '#50AAED',
            pointBorderWidth: 3,
            pointRadius: 5,
            pointHoverBackgroundColor: '#50AAED',
            pointHoverBorderColor: '#50AAED',
            pointHoverRadius: 7
          }];
          this.bannerChartLabels2 = ['2010', '2011', '2012', '2013', '2014', '2015', '2016']; //Banner chart 2 end
          //Banner chart 3 start

          this.bannerChartOptions3 = {
            responsive: true,
            tooltips: {
              enabled: true
            },
            legend: {
              display: false,
              position: 'top',
              labels: {
                usePointStyle: true
              }
            },
            scales: {
              xAxes: [{
                display: false,
                gridLines: {
                  display: false,
                  drawBorder: false
                },
                scaleLabel: {
                  display: false,
                  labelString: 'Month'
                }
              }],
              yAxes: [{
                display: false,
                gridLines: {
                  display: false,
                  drawBorder: false
                },
                scaleLabel: {
                  display: true,
                  labelString: 'Value'
                }
              }]
            },
            title: {
              display: false
            }
          };
          this.bannerChartData3 = [{
            data: [28, 35, 36, 48, 46, 42, 60],
            backgroundColor: 'rgba(156,39,176,0.32)',
            borderColor: '#A668FD',
            borderWidth: 3,
            strokeColor: '#A668FD',
            capBezierPoints: !0,
            pointColor: '#A668FD',
            pointBorderColor: '#A668FD',
            pointBackgroundColor: '#A668FD',
            pointBorderWidth: 3,
            pointRadius: 5,
            pointHoverBackgroundColor: '#A668FD',
            pointHoverBorderColor: '#A668FD',
            pointHoverRadius: 7
          }];
          this.bannerChartLabels3 = ['2010', '2011', '2012', '2013', '2014', '2015', '2016']; //Banner chart 3 end
          //Banner chart 4 start

          this.bannerChartOptions4 = {
            responsive: true,
            tooltips: {
              enabled: true
            },
            legend: {
              display: false,
              position: 'top',
              labels: {
                usePointStyle: true
              }
            },
            scales: {
              xAxes: [{
                display: false,
                gridLines: {
                  display: false,
                  drawBorder: false
                },
                scaleLabel: {
                  display: false,
                  labelString: 'Month'
                }
              }],
              yAxes: [{
                display: false,
                gridLines: {
                  display: false,
                  drawBorder: false
                },
                scaleLabel: {
                  display: true,
                  labelString: 'Value'
                }
              }]
            },
            title: {
              display: false
            }
          };
          this.bannerChartData4 = [{
            data: [28, 35, 36, 48, 46, 42, 60],
            backgroundColor: 'rgba(113,216,117,0.32)',
            borderColor: '#77DC77',
            borderWidth: 3,
            strokeColor: '#77DC77',
            // capBezierPoints: !0,
            pointColor: '#77DC77',
            pointBorderColor: '#77DC77',
            pointBackgroundColor: '#77DC77',
            pointBorderWidth: 3,
            pointRadius: 5,
            pointHoverBackgroundColor: '#77DC77',
            pointHoverBorderColor: '#77DC77',
            pointHoverRadius: 7
          }];
          this.bannerChartLabels4 = ['2010', '2011', '2012', '2013', '2014', '2015', '2016']; //Banner chart 4 end
          //Banner chart 5 start

          this.bannerChartOptions5 = {
            responsive: true,
            tooltips: {
              enabled: true
            },
            legend: {
              display: false,
              position: 'top',
              labels: {
                usePointStyle: true
              }
            },
            scales: {
              xAxes: [{
                display: false,
                gridLines: {
                  display: false,
                  drawBorder: false
                },
                scaleLabel: {
                  display: false,
                  labelString: 'Month'
                }
              }],
              yAxes: [{
                display: false,
                gridLines: {
                  display: false,
                  drawBorder: false
                },
                scaleLabel: {
                  display: true,
                  labelString: 'Value'
                }
              }]
            },
            title: {
              display: false
            }
          };
          this.bannerChartData5 = [{
            data: [28, 35, 36, 48, 46, 42, 60],
            backgroundColor: 'rgba(113,216,117,0.32)',
            borderColor: '#77DC77',
            borderWidth: 3,
            strokeColor: '#77DC77',
            pointColor: '#77DC77',
            pointBorderColor: '#77DC77',
            pointBackgroundColor: '#77DC77',
            pointBorderWidth: 3,
            pointRadius: 5,
            pointHoverBackgroundColor: '#77DC77',
            pointHoverBorderColor: '#77DC77',
            pointHoverRadius: 7
          }];
          this.bannerChartLabels5 = ['2010', '2011', '2012', '2013', '2014', '2015', '2016']; //Banner chart 5 end
          // line chart

          this.line_chart = {
            // height: '130px',
            tooltip: {
              trigger: 'axis'
            },
            legend: {
              data: ['Type A', 'Type B']
            },
            // calculable: true,
            xAxis: [{
              type: 'category',
              boundaryGap: false,
              data: ['2001', '2002', '2003', '2004', '2005', '2006', '2007'],
              axisLabel: {
                color: '#bdb5b5'
              }
            }],
            yAxis: [{
              type: 'value',
              axisLabel: {
                color: '#bdb5b5'
              }
            }],
            series: [{
              name: 'sales',
              type: 'line',
              itemStyle: {
                color: '#54C7C7'
              },
              data: [11, 11, 15, 13, 12, 13, 10],
              markPoint: {
                data: [{
                  type: 'max',
                  name: '???'
                }, {
                  type: 'min',
                  name: '???'
                }]
              },
              markLine: {
                data: [{
                  type: 'average'
                }]
              }
            }, {
              name: 'purchases',
              type: 'line',
              itemStyle: {
                color: '#B79CDC'
              },
              data: [1, -2, 2, 5, 3, 2, 0],
              markLine: {
                data: [{
                  type: 'average'
                }]
              }
            }]
          };
        }

        _createClass(Dashboard2Component, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.initCharts();
          }
        }, {
          key: "initCharts",
          value: function initCharts() {
            $('.chart.chart-bar2').sparkline(undefined, {
              type: 'bar',
              barColor: '#54B253',
              negBarColor: '#000',
              barWidth: '5px',
              height: '67px'
            });
          }
        }]);

        return Dashboard2Component;
      }();

      Dashboard2Component.??fac = function Dashboard2Component_Factory(t) {
        return new (t || Dashboard2Component)();
      };

      Dashboard2Component.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: Dashboard2Component,
        selectors: [["app-dashboard2"]],
        decls: 424,
        vars: 26,
        consts: [[1, "content"], [1, "container-fluid"], [1, "row"], [1, "col-lg-3", "col-md-6"], [1, "banner-card", "total-card"], [1, "card-block"], [1, "text-center", "p-t-20"], [1, "m-0"], ["baseChart", "", 3, "chartType", "datasets", "labels", "options", "legend"], [1, "row", "clearfix"], [1, "col-xl-8", "col-lg-8", "col-md-12", "col-sm-12"], [1, "card"], [1, "header"], [1, "header-dropdown", "m-r--5"], [1, "dropdown"], ["href", "#", "onClick", "return false;", "data-toggle", "dropdown", "role", "button", "aria-haspopup", "true", "aria-expanded", "false"], [1, "material-icons"], [1, "dropdown-menu", "pull-right"], ["href", "#", "onClick", "return false;"], [1, "body"], ["echarts", "", 1, "echart-height", 3, "options"], [1, "col-xl-4", "col-lg-4", "col-md-12", "col-sm-12"], [1, "plain-card"], [1, "card-inner"], [1, "tx-primary", "m-b-10"], [1, "col", "col-block"], [1, "font-14"], [1, "progress", "shadow-style"], ["role", "progressbar", "aria-valuenow", "62", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "l-bg-cyan", "width-per-70"], ["role", "progressbar", "aria-valuenow", "62", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "l-bg-purple", "width-per-70"], [1, "col-xs-12", "col-sm-12", "col-md-8", "col-lg-8"], [1, "tableBody"], [1, "table-responsive"], [1, "table", "table-hover", "dashboard-task-infos"], [1, "table-img"], ["src", "assets/images/user/user1.jpg", "alt", ""], [1, "label", "bg-green", "shadow-style"], ["role", "progressbar", "aria-valuenow", "62", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "l-bg-green", "width-per-62"], ["src", "assets/images/user/user2.jpg", "alt", ""], [1, "label", "l-bg-purple", "shadow-style"], ["role", "progressbar", "aria-valuenow", "40", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "l-bg-purple", "width-per-40"], ["src", "assets/images/user/user3.jpg", "alt", ""], [1, "label", "l-bg-orange", "shadow-style"], ["role", "progressbar", "aria-valuenow", "72", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "l-bg-orange", "width-per-72"], ["src", "assets/images/user/user4.jpg", "alt", ""], [1, "label", "l-bg-cyan", "shadow-style"], ["role", "progressbar", "aria-valuenow", "95", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "l-bg-cyan", "width-per-95"], ["src", "assets/images/user/user5.jpg", "alt", ""], ["role", "progressbar", "aria-valuenow", "87", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "l-bg-green", "width-per-87"], ["src", "assets/images/user/user6.jpg", "alt", ""], [1, "col-xs-12", "col-sm-12", "col-md-4", "col-lg-4"], [1, "body", "text-center"], [1, "m-b-20"], [1, "m-b-30"], [1, "icon", "m-t-25"], [1, "chart", "chart-bar2"], [1, "m-t-30"], [1, "displayblock", "m-t-10"], [1, "col-xs-12", "col-sm-12", "col-md-6", "col-lg-6"], [1, "recent-comment", 2, "position", "relative", "max-height", "380px", 3, "perfectScrollbar"], [1, "notice-board"], ["src", "assets/images/user/user6.jpg", "alt", "...", 1, "notice-object"], [1, "notice-body"], [1, "text-muted"], ["src", "assets/images/user/user4.jpg", "alt", "...", 1, "notice-object"], ["src", "assets/images/user/user3.jpg", "alt", "...", 1, "notice-object"], [1, "notice-board", "no-border"], ["src", "assets/images/user/user7.jpg", "alt", "...", 1, "notice-object"], ["src", "assets/images/user/user9.jpg", "alt", "...", 1, "notice-object"], ["src", "assets/images/user/user1.jpg", "alt", "...", 1, "notice-object"], ["src", "assets/images/user/user8.jpg", "alt", "...", 1, "notice-object"], [1, "chat"], [1, "chat-header", "clearfix"], ["src", "assets/images/user/user9.jpg", "alt", "avatar"], [1, "chat-about"], [1, "chat-with"], [1, "chat-num-messages"], ["id", "chat-conversation", 1, "chat-history", 2, "position", "relative", "max-height", "240px", 3, "perfectScrollbar"], [1, "clearfix"], [1, "message-data", "text-right"], [1, "message-data-time"], [1, "message-data-name"], [1, "zmdi", "zmdi-circle", "me"], [1, "message", "other-message", "float-right"], [1, "message-data"], [1, "zmdi", "zmdi-circle", "online"], [1, "message", "my-message"], [1, "chat-message", "clearfix"], [1, "form-group"], [1, "form-line"], ["type", "text", "placeholder", "Enter text here..", 1, "form-control"], [1, "chat-upload"], ["href", "#"]],
        template: function Dashboard2Component_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "Total Sales");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "p", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "4000");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](11, "canvas", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "Visitors");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "p", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, "3345");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](20, "canvas", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](26, "Orders");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "p", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](28, "2364");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](29, "canvas", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](35, "Profit");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "p", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](37, "$75,656");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](38, "canvas", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](45, "Average");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](46, " Chart");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "ul", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "li", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "a", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "i", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](51, "more_vert");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](52, "ul", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "a", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](55, "Action");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](56, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](57, "a", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](58, "Another action");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](59, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](60, "a", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](61, "Something else here");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](62, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](63, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](64, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](65, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](66, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](67, "h6", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](68, "Sales Report");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](69, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](70, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](71, "label", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](72, "Today");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](73, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](74, "1,898");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](75, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](76, "label", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](77, "This Week");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](78, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](79, "32,112");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](80, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](81, "label", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](82, "This Month");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](83, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](84, "72,067");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](85, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](86, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](87, "70%");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](88, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](89, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](90, "h6", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](91, "Sales Report");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](92, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](93, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](94, "label", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](95, "Today");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](96, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](97, "1,898");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](98, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](99, "label", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](100, "This Week");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](101, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](102, "32,112");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](103, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](104, "label", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](105, "This Month");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](106, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](107, "72,067");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](108, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](109, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](110, "70%");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](111, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](112, "div", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](113, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](114, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](115, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](116, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](117, "Recent");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](118, " Orders");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](119, "ul", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](120, "li", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](121, "a", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](122, "i", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](123, "more_vert");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](124, "ul", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](125, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](126, "a", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](127, "Action");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](128, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](129, "a", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](130, "Another action");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](131, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](132, "a", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](133, "Something else here");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](134, "div", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](135, "div", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](136, "table", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](137, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](138, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](139, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](140, "#");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](141, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](142, "Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](143, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](144, "Item");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](145, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](146, "Status");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](147, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](148, "Quantity");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](149, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](150, "Progress");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](151, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](152, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](153, "td", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](154, "img", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](155, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](156, "John Doe");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](157, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](158, "iPhone X");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](159, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](160, "span", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](161, "Placed");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](162, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](163, "2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](164, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](165, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](166, "div", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](167, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](168, "td", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](169, "img", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](170, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](171, "Sarah Smith");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](172, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](173, "Pixel 2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](174, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](175, "span", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](176, "Shipped");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](177, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](178, "1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](179, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](180, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](181, "div", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](182, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](183, "td", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](184, "img", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](185, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](186, "Airi Satou");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](187, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](188, "OnePlus");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](189, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](190, "span", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](191, "Pending");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](192, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](193, "2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](194, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](195, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](196, "div", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](197, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](198, "td", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](199, "img", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](200, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](201, "Angelica Ramos");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](202, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](203, "Galaxy");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](204, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](205, "span", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](206, "Delivered");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](207, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](208, "3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](209, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](210, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](211, "div", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](212, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](213, "td", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](214, "img", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](215, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](216, "Ashton Cox");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](217, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](218, "Moto Z2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](219, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](220, "span", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](221, "Placed");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](222, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](223, "4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](224, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](225, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](226, "div", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](227, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](228, "td", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](229, "img", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](230, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](231, "Cara Stevens");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](232, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](233, "Nokia");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](234, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](235, "span", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](236, "Placed");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](237, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](238, "6");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](239, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](240, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](241, "div", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](242, "div", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](243, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](244, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](245, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](246, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](247, "Total");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](248, " Revenue");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](249, "ul", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](250, "li", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](251, "a", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](252, "i", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](253, "more_vert");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](254, "ul", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](255, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](256, "a", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](257, "Action");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](258, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](259, "a", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](260, "Another action");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](261, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](262, "a", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](263, "Something else here");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](264, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](265, "div", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](266, "h4", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](267, "Total Visitors");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](268, "h6", 53);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](269, "5,98,345");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](270, "div", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](271, "div", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](272, " 6,4,8,6,8,10,5,6,7,9,5,6,4,8,6,8,10,5,6,7,9,5,10,5,6,7,9,5,6,4,8,6,8");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](273, "h4", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](274, "Satisfaction Rate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](275, "h6", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](276, "36% Average");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](277, "canvas", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](278, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](279, "div", 58);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](280, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](281, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](282, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](283, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](284, "New ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](285, "Comments");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](286, "ul", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](287, "li", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](288, "a", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](289, "i", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](290, "more_vert");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](291, "ul", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](292, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](293, "a", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](294, "Action");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](295, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](296, "a", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](297, "Another action");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](298, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](299, "a", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](300, "Something else here");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](301, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](302, "div", 59);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](303, "div", 60);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](304, "div", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](305, "img", 61);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](306, "div", 62);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](307, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](308, "Lorem ipsum dolor sit amet, id quo eruditi eloquentiam.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](309, "small", 63);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](310, "John Deo | 1 hour ago");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](311, "div", 60);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](312, "div", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](313, "img", 64);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](314, "div", 62);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](315, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](316, "Lorem ipsum dolor sit amet, id quo eruditi eloquentiam.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](317, "small", 63);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](318, "Sarah Smith | Yesterday");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](319, "div", 60);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](320, "div", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](321, "img", 65);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](322, "div", 62);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](323, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](324, "Lorem ipsum dolor sit amet, id quo eruditi eloquentiam.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](325, "small", 63);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](326, "Cara Stevens | 10-02-2018 10:25");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](327, "div", 66);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](328, "div", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](329, "img", 67);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](330, "div", 62);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](331, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](332, "Lorem ipsum dolor sit amet, id quo eruditi eloquentiam.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](333, "small", 63);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](334, "Ashton Cox | 15-03-2018 09:15");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](335, "div", 66);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](336, "div", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](337, "img", 68);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](338, "div", 62);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](339, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](340, "Lorem ipsum dolor sit amet, id quo eruditi eloquentiam.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](341, "small", 63);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](342, "Ashton Cox | 11-04-2018 11:07");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](343, "div", 60);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](344, "div", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](345, "img", 69);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](346, "div", 62);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](347, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](348, "Lorem ipsum dolor sit amet, id quo eruditi eloquentiam.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](349, "small", 63);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](350, "John Deo | 1 hour ago");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](351, "div", 60);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](352, "div", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](353, "img", 70);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](354, "div", 62);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](355, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](356, "Lorem ipsum dolor sit amet, id quo eruditi eloquentiam.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](357, "small", 63);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](358, "Sarah Smith | Yesterday");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](359, "div", 58);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](360, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](361, "div", 71);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](362, "div", 72);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](363, "img", 73);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](364, "div", 74);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](365, "div", 75);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](366, "Cara Stevens");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](367, "div", 76);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](368, "3 new messages");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](369, "div", 77);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](370, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](371, "li", 78);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](372, "div", 79);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](373, "span", 80);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](374, "10:10 AM, Today ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](375, " \xA0 \xA0 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](376, "span", 81);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](377, "Michael");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](378, "i", 82);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](379, "div", 83);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](380, " Hi Aiden, how are you? How is the project coming along? ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](381, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](382, "div", 84);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](383, "span", 81);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](384, "i", 85);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](385, " Aiden");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](386, "span", 80);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](387, "10:12 AM, Today");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](388, "div", 86);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](389, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](390, "Are we meeting today? Project has been already finished and I have results to show you.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](391, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](392, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](393, "div", 84);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](394, "span", 81);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](395, "i", 85);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](396, " Aiden");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](397, "span", 80);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](398, "10:12 AM, Today");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](399, "div", 86);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](400, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](401, "Are we meeting today? Project has been already finished and I have results to show you.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](402, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](403, "li", 78);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](404, "div", 79);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](405, "span", 80);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](406, "10:10 AM, Today ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](407, " \xA0 \xA0 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](408, "span", 81);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](409, "Michael");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](410, "i", 82);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](411, "div", 83);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](412, " Hi Aiden, how are you? How is the project coming along? ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](413, "div", 87);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](414, "div", 88);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](415, "div", 89);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](416, "input", 90);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](417, "div", 91);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](418, "a", 92);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](419, "i", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](420, "attach_file");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](421, "a", 92);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](422, "i", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](423, "insert_emoticon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("chartType", "line")("datasets", ctx.bannerChartData1)("labels", ctx.bannerChartLabels1)("options", ctx.bannerChartOptions1)("legend", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("chartType", "line")("datasets", ctx.bannerChartData2)("labels", ctx.bannerChartLabels2)("options", ctx.bannerChartOptions2)("legend", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("chartType", "line")("datasets", ctx.bannerChartData3)("labels", ctx.bannerChartLabels3)("options", ctx.bannerChartOptions3)("legend", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("chartType", "line")("datasets", ctx.bannerChartData4)("labels", ctx.bannerChartLabels4)("options", ctx.bannerChartOptions4)("legend", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("options", ctx.line_chart);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](214);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("chartType", "line")("datasets", ctx.bannerChartData5)("labels", ctx.bannerChartLabels5)("options", ctx.bannerChartOptions5)("legend", true);
          }
        },
        directives: [ng2_charts__WEBPACK_IMPORTED_MODULE_1__["BaseChartDirective"], ngx_echarts__WEBPACK_IMPORTED_MODULE_2__["??a"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3__["PerfectScrollbarDirective"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQyL2Rhc2hib2FyZDIuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](Dashboard2Component, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-dashboard2',
            templateUrl: './dashboard2.component.html',
            styleUrls: ['./dashboard2.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=dashboard-dashboard-module-es5.js.map