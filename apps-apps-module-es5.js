(function () {
  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["apps-apps-module"], {
    /***/
    "+Izv":
    /*!*****************************************************!*\
      !*** ./node_modules/@fullcalendar/list/main.esm.js ***!
      \*****************************************************/

    /*! exports provided: default, ListView */

    /***/
    function Izv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ListView", function () {
        return ListView;
      });
      /* harmony import */


      var _fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @fullcalendar/core */
      "SZB9");
      /*!
      FullCalendar List View Plugin v4.4.2
      Docs & License: https://fullcalendar.io/
      (c) 2019 Adam Shaw
      */

      /*! *****************************************************************************
      Copyright (c) Microsoft Corporation.
      
      Permission to use, copy, modify, and/or distribute this software for any
      purpose with or without fee is hereby granted.
      
      THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
      REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
      AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
      INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
      LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
      OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
      PERFORMANCE OF THIS SOFTWARE.
      ***************************************************************************** */

      /* global Reflect, Promise */


      var _extendStatics = function extendStatics(d, b) {
        _extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (d, b) {
          d.__proto__ = b;
        } || function (d, b) {
          for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
          }
        };

        return _extendStatics(d, b);
      };

      function __extends(d, b) {
        _extendStatics(d, b);

        function __() {
          this.constructor = d;
        }

        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      }

      var ListEventRenderer =
      /** @class */
      function (_super) {
        __extends(ListEventRenderer, _super);

        function ListEventRenderer(listView) {
          var _this = _super.call(this) || this;

          _this.listView = listView;
          return _this;
        }

        ListEventRenderer.prototype.attachSegs = function (segs) {
          if (!segs.length) {
            this.listView.renderEmptyMessage();
          } else {
            this.listView.renderSegList(segs);
          }
        };

        ListEventRenderer.prototype.detachSegs = function () {}; // generates the HTML for a single event row


        ListEventRenderer.prototype.renderSegHtml = function (seg) {
          var _a = this.context,
              theme = _a.theme,
              options = _a.options;
          var eventRange = seg.eventRange;
          var eventDef = eventRange.def;
          var eventInstance = eventRange.instance;
          var eventUi = eventRange.ui;
          var url = eventDef.url;
          var classes = ['fc-list-item'].concat(eventUi.classNames);
          var bgColor = eventUi.backgroundColor;
          var timeHtml;

          if (eventDef.allDay) {
            timeHtml = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["getAllDayHtml"])(options);
          } else if (Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["isMultiDayRange"])(eventRange.range)) {
            if (seg.isStart) {
              timeHtml = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["htmlEscape"])(this._getTimeText(eventInstance.range.start, seg.end, false // allDay
              ));
            } else if (seg.isEnd) {
              timeHtml = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["htmlEscape"])(this._getTimeText(seg.start, eventInstance.range.end, false // allDay
              ));
            } else {
              // inner segment that lasts the whole day
              timeHtml = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["getAllDayHtml"])(options);
            }
          } else {
            // Display the normal time text for the *event's* times
            timeHtml = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["htmlEscape"])(this.getTimeText(eventRange));
          }

          if (url) {
            classes.push('fc-has-url');
          }

          return '<tr class="' + classes.join(' ') + '">' + (this.displayEventTime ? '<td class="fc-list-item-time ' + theme.getClass('widgetContent') + '">' + (timeHtml || '') + '</td>' : '') + '<td class="fc-list-item-marker ' + theme.getClass('widgetContent') + '">' + '<span class="fc-event-dot"' + (bgColor ? ' style="background-color:' + bgColor + '"' : '') + '></span>' + '</td>' + '<td class="fc-list-item-title ' + theme.getClass('widgetContent') + '">' + '<a' + (url ? ' href="' + Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["htmlEscape"])(url) + '"' : '') + '>' + Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["htmlEscape"])(eventDef.title || '') + '</a>' + '</td>' + '</tr>';
        }; // like "4:00am"


        ListEventRenderer.prototype.computeEventTimeFormat = function () {
          return {
            hour: 'numeric',
            minute: '2-digit',
            meridiem: 'short'
          };
        };

        return ListEventRenderer;
      }(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["FgEventRenderer"]);
      /*
      Responsible for the scroller, and forwarding event-related actions into the "grid".
      */


      var ListView =
      /** @class */
      function (_super) {
        __extends(ListView, _super);

        function ListView(viewSpec, parentEl) {
          var _this = _super.call(this, viewSpec, parentEl) || this;

          _this.computeDateVars = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["memoize"])(computeDateVars);
          _this.eventStoreToSegs = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["memoize"])(_this._eventStoreToSegs);
          _this.renderSkeleton = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["memoizeRendering"])(_this._renderSkeleton, _this._unrenderSkeleton);
          var eventRenderer = _this.eventRenderer = new ListEventRenderer(_this);
          _this.renderContent = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["memoizeRendering"])(eventRenderer.renderSegs.bind(eventRenderer), eventRenderer.unrender.bind(eventRenderer), [_this.renderSkeleton]);
          return _this;
        }

        ListView.prototype.firstContext = function (context) {
          context.calendar.registerInteractiveComponent(this, {
            el: this.el // TODO: make aware that it doesn't do Hits

          });
        };

        ListView.prototype.render = function (props, context) {
          _super.prototype.render.call(this, props, context);

          var _a = this.computeDateVars(props.dateProfile),
              dayDates = _a.dayDates,
              dayRanges = _a.dayRanges;

          this.dayDates = dayDates;
          this.renderSkeleton(context);
          this.renderContent(context, this.eventStoreToSegs(props.eventStore, props.eventUiBases, dayRanges));
        };

        ListView.prototype.destroy = function () {
          _super.prototype.destroy.call(this);

          this.renderSkeleton.unrender();
          this.renderContent.unrender();
          this.context.calendar.unregisterInteractiveComponent(this);
        };

        ListView.prototype._renderSkeleton = function (context) {
          var theme = context.theme;
          this.el.classList.add('fc-list-view');
          var listViewClassNames = (theme.getClass('listView') || '').split(' '); // wish we didn't have to do this

          for (var _i = 0, listViewClassNames_1 = listViewClassNames; _i < listViewClassNames_1.length; _i++) {
            var listViewClassName = listViewClassNames_1[_i];

            if (listViewClassName) {
              // in case input was empty string
              this.el.classList.add(listViewClassName);
            }
          }

          this.scroller = new _fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["ScrollComponent"]('hidden', // overflow x
          'auto' // overflow y
          );
          this.el.appendChild(this.scroller.el);
          this.contentEl = this.scroller.el; // shortcut
        };

        ListView.prototype._unrenderSkeleton = function () {
          // TODO: remove classNames
          this.scroller.destroy(); // will remove the Grid too
        };

        ListView.prototype.updateSize = function (isResize, viewHeight, isAuto) {
          _super.prototype.updateSize.call(this, isResize, viewHeight, isAuto);

          this.eventRenderer.computeSizes(isResize);
          this.eventRenderer.assignSizes(isResize);
          this.scroller.clear(); // sets height to 'auto' and clears overflow

          if (!isAuto) {
            this.scroller.setHeight(this.computeScrollerHeight(viewHeight));
          }
        };

        ListView.prototype.computeScrollerHeight = function (viewHeight) {
          return viewHeight - Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["subtractInnerElHeight"])(this.el, this.scroller.el); // everything that's NOT the scroller
        };

        ListView.prototype._eventStoreToSegs = function (eventStore, eventUiBases, dayRanges) {
          return this.eventRangesToSegs(Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["sliceEventStore"])(eventStore, eventUiBases, this.props.dateProfile.activeRange, this.context.nextDayThreshold).fg, dayRanges);
        };

        ListView.prototype.eventRangesToSegs = function (eventRanges, dayRanges) {
          var segs = [];

          for (var _i = 0, eventRanges_1 = eventRanges; _i < eventRanges_1.length; _i++) {
            var eventRange = eventRanges_1[_i];
            segs.push.apply(segs, this.eventRangeToSegs(eventRange, dayRanges));
          }

          return segs;
        };

        ListView.prototype.eventRangeToSegs = function (eventRange, dayRanges) {
          var _a = this.context,
              dateEnv = _a.dateEnv,
              nextDayThreshold = _a.nextDayThreshold;
          var range = eventRange.range;
          var allDay = eventRange.def.allDay;
          var dayIndex;
          var segRange;
          var seg;
          var segs = [];

          for (dayIndex = 0; dayIndex < dayRanges.length; dayIndex++) {
            segRange = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["intersectRanges"])(range, dayRanges[dayIndex]);

            if (segRange) {
              seg = {
                component: this,
                eventRange: eventRange,
                start: segRange.start,
                end: segRange.end,
                isStart: eventRange.isStart && segRange.start.valueOf() === range.start.valueOf(),
                isEnd: eventRange.isEnd && segRange.end.valueOf() === range.end.valueOf(),
                dayIndex: dayIndex
              };
              segs.push(seg); // detect when range won't go fully into the next day,
              // and mutate the latest seg to the be the end.

              if (!seg.isEnd && !allDay && dayIndex + 1 < dayRanges.length && range.end < dateEnv.add(dayRanges[dayIndex + 1].start, nextDayThreshold)) {
                seg.end = range.end;
                seg.isEnd = true;
                break;
              }
            }
          }

          return segs;
        };

        ListView.prototype.renderEmptyMessage = function () {
          this.contentEl.innerHTML = '<div class="fc-list-empty-wrap2">' + // TODO: try less wraps
          '<div class="fc-list-empty-wrap1">' + '<div class="fc-list-empty">' + Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["htmlEscape"])(this.context.options.noEventsMessage) + '</div>' + '</div>' + '</div>';
        }; // called by ListEventRenderer


        ListView.prototype.renderSegList = function (allSegs) {
          var theme = this.context.theme;
          var segsByDay = this.groupSegsByDay(allSegs); // sparse array

          var dayIndex;
          var daySegs;
          var i;
          var tableEl = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["htmlToElement"])('<table class="fc-list-table ' + theme.getClass('tableList') + '"><tbody></tbody></table>');
          var tbodyEl = tableEl.querySelector('tbody');

          for (dayIndex = 0; dayIndex < segsByDay.length; dayIndex++) {
            daySegs = segsByDay[dayIndex];

            if (daySegs) {
              // sparse array, so might be undefined
              // append a day header
              tbodyEl.appendChild(this.buildDayHeaderRow(this.dayDates[dayIndex]));
              daySegs = this.eventRenderer.sortEventSegs(daySegs);

              for (i = 0; i < daySegs.length; i++) {
                tbodyEl.appendChild(daySegs[i].el); // append event row
              }
            }
          }

          this.contentEl.innerHTML = '';
          this.contentEl.appendChild(tableEl);
        }; // Returns a sparse array of arrays, segs grouped by their dayIndex


        ListView.prototype.groupSegsByDay = function (segs) {
          var segsByDay = []; // sparse array

          var i;
          var seg;

          for (i = 0; i < segs.length; i++) {
            seg = segs[i];
            (segsByDay[seg.dayIndex] || (segsByDay[seg.dayIndex] = [])).push(seg);
          }

          return segsByDay;
        }; // generates the HTML for the day headers that live amongst the event rows


        ListView.prototype.buildDayHeaderRow = function (dayDate) {
          var _a = this.context,
              theme = _a.theme,
              dateEnv = _a.dateEnv,
              options = _a.options;
          var mainFormat = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["createFormatter"])(options.listDayFormat); // TODO: cache

          var altFormat = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["createFormatter"])(options.listDayAltFormat); // TODO: cache

          return Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["createElement"])('tr', {
            className: 'fc-list-heading',
            'data-date': dateEnv.formatIso(dayDate, {
              omitTime: true
            })
          }, '<td class="' + (theme.getClass('tableListHeading') || theme.getClass('widgetHeader')) + '" colspan="3">' + (mainFormat ? Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["buildGotoAnchorHtml"])(options, dateEnv, dayDate, {
            'class': 'fc-list-heading-main'
          }, Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["htmlEscape"])(dateEnv.format(dayDate, mainFormat)) // inner HTML
          ) : '') + (altFormat ? Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["buildGotoAnchorHtml"])(options, dateEnv, dayDate, {
            'class': 'fc-list-heading-alt'
          }, Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["htmlEscape"])(dateEnv.format(dayDate, altFormat)) // inner HTML
          ) : '') + '</td>');
        };

        return ListView;
      }(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["View"]);

      ListView.prototype.fgSegSelector = '.fc-list-item'; // which elements accept event actions

      function computeDateVars(dateProfile) {
        var dayStart = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["startOfDay"])(dateProfile.renderRange.start);
        var viewEnd = dateProfile.renderRange.end;
        var dayDates = [];
        var dayRanges = [];

        while (dayStart < viewEnd) {
          dayDates.push(dayStart);
          dayRanges.push({
            start: dayStart,
            end: Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["addDays"])(dayStart, 1)
          });
          dayStart = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["addDays"])(dayStart, 1);
        }

        return {
          dayDates: dayDates,
          dayRanges: dayRanges
        };
      }

      var main = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["createPlugin"])({
        views: {
          list: {
            "class": ListView,
            buttonTextKey: 'list',
            listDayFormat: {
              month: 'long',
              day: 'numeric',
              year: 'numeric'
            } // like "January 1, 2016"

          },
          listDay: {
            type: 'list',
            duration: {
              days: 1
            },
            listDayFormat: {
              weekday: 'long'
            } // day-of-week is all we need. full date is probably in header

          },
          listWeek: {
            type: 'list',
            duration: {
              weeks: 1
            },
            listDayFormat: {
              weekday: 'long'
            },
            listDayAltFormat: {
              month: 'long',
              day: 'numeric',
              year: 'numeric'
            }
          },
          listMonth: {
            type: 'list',
            duration: {
              month: 1
            },
            listDayAltFormat: {
              weekday: 'long'
            } // day-of-week is nice-to-have

          },
          listYear: {
            type: 'list',
            duration: {
              year: 1
            },
            listDayAltFormat: {
              weekday: 'long'
            } // day-of-week is nice-to-have

          }
        }
      });
      /* harmony default export */

      __webpack_exports__["default"] = main;
      /***/
    },

    /***/
    "/yEv":
    /*!*******************************************************!*\
      !*** ./src/app/apps/drag-drop/drag-drop.component.ts ***!
      \*******************************************************/

    /*! exports provided: DragDropComponent */

    /***/
    function yEv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DragDropComponent", function () {
        return DragDropComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var ng2_dragula__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ng2-dragula */
      "9Ejp");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "qCKp");

      var DragDropComponent = /*#__PURE__*/function () {
        function DragDropComponent(dragulaService) {
          var _this2 = this;

          _classCallCheck(this, DragDropComponent);

          this.dragulaService = dragulaService;
          this.BAG = 'DRAGULA_EVENTS';
          this.subs = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subscription"]();
          this.dragulaService.createGroup('VAMPIRES', {// ...
          });
          this.dragulaService.dropModel('VAMPIRES').subscribe(function (args) {
            console.log(args);
          });
          this.subs.add(dragulaService.drag(this.BAG).subscribe(function (_ref) {
            var el = _ref.el;

            _this2.removeClass(el, 'ex-moved');
          }));
          this.subs.add(dragulaService.drop(this.BAG).subscribe(function (_ref2) {
            var el = _ref2.el;

            _this2.addClass(el, 'ex-moved');
          }));
          this.subs.add(dragulaService.over(this.BAG).subscribe(function (_ref3) {
            var el = _ref3.el,
                container = _ref3.container;
            console.log('over', container);

            _this2.addClass(container, 'ex-over');
          }));
          this.subs.add(dragulaService.out(this.BAG).subscribe(function (_ref4) {
            var el = _ref4.el,
                container = _ref4.container;
            console.log('out', container);

            _this2.removeClass(container, 'ex-over');
          })); //spill

          dragulaService.createGroup('SPILL', {
            removeOnSpill: true
          }); //revert

          dragulaService.createGroup('REVERT', {
            revertOnSpill: true
          });
          dragulaService.createGroup('COPYABLE', {
            copy: function copy(el, source) {
              return source.id === 'left';
            },
            accepts: function accepts(el, target, source, sibling) {
              // To avoid dragging from right to left container
              return target.id !== 'left';
            }
          });
        }

        _createClass(DragDropComponent, [{
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.dragulaService.destroy('VAMPIRES');
            this.dragulaService.destroy('SPILL');
            this.dragulaService.destroy('REVERT');
            this.dragulaService.destroy('COPYABLE');
            this.subs.unsubscribe();
          }
        }, {
          key: "hasClass",
          value: function hasClass(el, name) {
            return new RegExp('(?:^|\\s+)' + name + '(?:\\s+|$)').test(el.className);
          }
        }, {
          key: "addClass",
          value: function addClass(el, name) {
            if (!this.hasClass(el, name)) {
              el.className = el.className ? [el.className, name].join(' ') : name;
            }
          }
        }, {
          key: "removeClass",
          value: function removeClass(el, name) {
            if (this.hasClass(el, name)) {
              el.className = el.className.replace(new RegExp('(?:^|\\s+)' + name + '(?:\\s+|$)', 'g'), '');
            }
          }
        }]);

        return DragDropComponent;
      }();

      DragDropComponent.ɵfac = function DragDropComponent_Factory(t) {
        return new (t || DragDropComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng2_dragula__WEBPACK_IMPORTED_MODULE_1__["DragulaService"]));
      };

      DragDropComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: DragDropComponent,
        selectors: [["app-drag-drop"]],
        decls: 313,
        vars: 0,
        consts: [[1, "content"], [1, "container-fluid"], [1, "row", "clearfix"], [1, "col-xs-12", "col-sm-12", "col-md-12", "col-lg-12"], [1, "card"], [1, "header"], [1, "header-dropdown", "m-r--5"], [1, "dropdown"], ["href", "#", "onClick", "return false;", "data-toggle", "dropdown", "role", "button", "aria-haspopup", "true", "aria-expanded", "false"], [1, "material-icons"], [1, "dropdown-menu", "pull-right"], ["href", "#", "onClick", "return false;"], [1, "body"], [1, "alert", "alert-info"], [1, "row"], [1, "col-xs-12", "col-sm-12", "col-md-6", "col-lg-6"], [1, "board"], ["id", "left", 1, "cards"], ["dragula", "VAMPIRES", 1, "container"], [1, "drop-card"], [1, "table-img", "msg-user"], ["src", "assets/images/user/user5.jpg", "alt", ""], [1, "cardtitle", "noselect"], ["src", "assets/images/user/user6.jpg", "alt", ""], ["src", "assets/images/user/user7.jpg", "alt", ""], ["src", "assets/images/user/user8.jpg", "alt", ""], ["id", "right", 1, "cards"], ["src", "assets/images/user/user1.jpg", "alt", ""], ["src", "assets/images/user/user2.jpg", "alt", ""], ["href", "https://github.com/bevacqua/dragula#drakeon-events"], ["dragula", "DRAGULA_EVENTS", 1, "container"], ["src", "assets/images/user/user3.jpg", "alt", ""], ["src", "assets/images/user/user4.jpg", "alt", ""], ["dragula", "SPILL", 1, "container"], ["dragula", "REVERT", 1, "container"], ["dragula", "COPYABLE", "id", "left", 1, "container"], ["dragula", "COPYABLE", "id", "right", 1, "container"]],
        template: function DragDropComponent_Template(rf, ctx) {
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

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Drag & Drop");

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

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " Move stuff between these two containers. Note how the stuff gets inserted near the mouse pointer? Great stuff. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "span", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "img", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "span", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " User card #1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "span", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "img", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "span", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "User card #2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "span", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "img", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "span", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "User card #3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "span", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "img", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "span", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "User card #4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "span", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "img", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "span", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "User card #7");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "span", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "img", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "span", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "User card #8");

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

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Drag");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, " & Drop Events");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "ul", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "li", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "a", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "i", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "more_vert");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "ul", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "a", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "Action");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "a", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "Another action");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "a", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "Something else here");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, " There are plenty of events along the lifetime of a drag event. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "a", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "all of them");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, " in the docs! ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "span", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](103, "img", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "span", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, " User card #1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "span", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](108, "img", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "span", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "User card #2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "span", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](113, "img", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "span", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "User card #3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "span", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](118, "img", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "span", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, "User card #4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "div", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "span", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](127, "img", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "span", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, "User card #5");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "span", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](132, "img", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "span", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, "User card #6");

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

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](141, "Spill");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "ul", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "li", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "a", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "i", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, "more_vert");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "ul", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "a", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](150, "Action");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "a", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](153, "Another action");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "a", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](156, "Something else here");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](159, " Need to be able to quickly delete stuff when it spills out of the chosen containers? Note how you can easily sort the items in any containers by just dragging and dropping. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "div", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "span", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](167, "img", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "span", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](169, " User card #1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "span", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](172, "img", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "span", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](174, "User card #2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "span", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](177, "img", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "span", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](179, "User card #3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "span", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](182, "img", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "span", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](184, "User card #4");

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

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](191, "Revert");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "ul", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "li", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "a", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "i", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](196, "more_vert");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "ul", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "a", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](200, "Action");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](202, "a", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](203, "Another action");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](204, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "a", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](206, "Something else here");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](207, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](208, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](209, " By default, dropping an element outside of any known containers will keep the element in the last place it went over. You can make elements go back to origin if they're dropped outside of known containers, too. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](210, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](211, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](212, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](213, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](214, "div", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](215, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](216, "span", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](217, "img", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](218, "span", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](219, " User card #1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](220, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](221, "span", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](222, "img", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](223, "span", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](224, "User card #2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](225, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](226, "span", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](227, "img", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](228, "span", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](229, "User card #3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](230, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](231, "span", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](232, "img", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](233, "span", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](234, "User card #4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](235, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](236, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](237, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](238, "div", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](239, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](240, "span", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](241, "img", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](242, "span", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](243, "User card #5");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](244, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](245, "span", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](246, "img", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](247, "span", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](248, "User card #6");

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

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](249, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](250, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](251, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](252, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](253, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](254, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](255, "Revert");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](256, "ul", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](257, "li", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](258, "a", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](259, "i", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](260, "more_vert");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](261, "ul", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](262, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](263, "a", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](264, "Action");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](265, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](266, "a", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](267, "Another action");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](268, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](269, "a", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](270, "Something else here");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](271, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](272, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](273, " Copying Elements from left side to right side made it easy for you. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](274, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](275, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](276, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](277, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](278, "div", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](279, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](280, "span", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](281, "img", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](282, "span", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](283, " User card #1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](284, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](285, "span", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](286, "img", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](287, "span", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](288, "User card #2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](289, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](290, "span", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](291, "img", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](292, "span", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](293, "User card #3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](294, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](295, "span", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](296, "img", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](297, "span", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](298, "User card #4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](299, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](300, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](301, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](302, "div", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](303, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](304, "span", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](305, "img", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](306, "span", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](307, "User card #5");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](308, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](309, "span", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](310, "img", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](311, "span", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](312, "User card #6");

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
          }
        },
        directives: [ng2_dragula__WEBPACK_IMPORTED_MODULE_1__["DragulaDirective"]],
        styles: [".container[_ngcontent-%COMP%]   .ex-moved[_ngcontent-%COMP%] {\n  background-color: rgba(255, 21, 45, 0.75);\n  color: #fff;\n}\n\n.container.ex-over[_ngcontent-%COMP%] {\n  background-color: rgba(255, 255, 255, 0.3);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwcy9kcmFnLWRyb3AvZHJhZy1kcm9wLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUNBQXlDO0VBQ3pDLFdBQVc7QUFDYjs7QUFDQTtFQUNFLDBDQUEwQztBQUU1QyIsImZpbGUiOiJzcmMvYXBwL2FwcHMvZHJhZy1kcm9wL2RyYWctZHJvcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIgLmV4LW1vdmVkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI5MywgMjEsIDQ1LCAwLjc1KTtcclxuICBjb2xvcjogI2ZmZjtcclxufVxyXG4uY29udGFpbmVyLmV4LW92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcclxufVxyXG4iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DragDropComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-drag-drop',
            templateUrl: './drag-drop.component.html',
            styleUrls: ['./drag-drop.component.scss']
          }]
        }], function () {
          return [{
            type: ng2_dragula__WEBPACK_IMPORTED_MODULE_1__["DragulaService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "0wM0":
    /*!*************************************************!*\
      !*** ./src/app/apps/contacts/contacts.model.ts ***!
      \*************************************************/

    /*! exports provided: Contacts */

    /***/
    function wM0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Contacts", function () {
        return Contacts;
      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      var Contacts = /*#__PURE__*/function () {
        function Contacts(contacts) {
          _classCallCheck(this, Contacts);

          {
            this.id = contacts.id || this.getRandomID();
            this.img = contacts.avatar || 'assets/images/user/usrbig1.jpg';
            this.name = contacts.name || '';
            this.email = contacts.email || '';
            this.birthDate = Object(_angular_common__WEBPACK_IMPORTED_MODULE_0__["formatDate"])(new Date(), 'yyyy-MM-dd', 'en') || '';
            this.address = contacts.address || '';
            this.mobile = contacts.mobile || '';
            this.note = contacts.note || '';
          }
        }

        _createClass(Contacts, [{
          key: "getRandomID",
          value: function getRandomID() {
            var S4 = function S4() {
              return ((1 + Math.random()) * 0x10000 | 0).toString(16).substring(1);
            };

            return S4() + S4();
          }
        }]);

        return Contacts;
      }();
      /***/

    },

    /***/
    "5+WD":
    /*!**********************************************************************!*\
      !*** ./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/drag-drop.js ***!
      \**********************************************************************/

    /*! exports provided: CDK_DRAG_CONFIG, CDK_DRAG_HANDLE, CDK_DRAG_PARENT, CDK_DRAG_PLACEHOLDER, CDK_DRAG_PREVIEW, CDK_DROP_LIST, CDK_DROP_LIST_GROUP, CdkDrag, CdkDragHandle, CdkDragPlaceholder, CdkDragPreview, CdkDropList, CdkDropListGroup, DragDrop, DragDropModule, DragDropRegistry, DragRef, DropListRef, copyArrayItem, moveItemInArray, transferArrayItem */

    /***/
    function WD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CDK_DRAG_CONFIG", function () {
        return CDK_DRAG_CONFIG;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CDK_DRAG_HANDLE", function () {
        return CDK_DRAG_HANDLE;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CDK_DRAG_PARENT", function () {
        return CDK_DRAG_PARENT;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CDK_DRAG_PLACEHOLDER", function () {
        return CDK_DRAG_PLACEHOLDER;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CDK_DRAG_PREVIEW", function () {
        return CDK_DRAG_PREVIEW;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CDK_DROP_LIST", function () {
        return CDK_DROP_LIST;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CDK_DROP_LIST_GROUP", function () {
        return CDK_DROP_LIST_GROUP;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CdkDrag", function () {
        return CdkDrag;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CdkDragHandle", function () {
        return CdkDragHandle;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CdkDragPlaceholder", function () {
        return CdkDragPlaceholder;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CdkDragPreview", function () {
        return CdkDragPreview;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CdkDropList", function () {
        return CdkDropList;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CdkDropListGroup", function () {
        return CdkDropListGroup;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DragDrop", function () {
        return DragDrop;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DragDropModule", function () {
        return DragDropModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DragDropRegistry", function () {
        return DragDropRegistry;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DragRef", function () {
        return DragRef;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DropListRef", function () {
        return DropListRef;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "copyArrayItem", function () {
        return copyArrayItem;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "moveItemInArray", function () {
        return moveItemInArray;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "transferArrayItem", function () {
        return transferArrayItem;
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


      var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/cdk/scrolling */
      "vxfF");
      /* harmony import */


      var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/cdk/platform */
      "nLfN");
      /* harmony import */


      var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/cdk/coercion */
      "8LU1");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/cdk/bidi */
      "cH1L");
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Shallow-extends a stylesheet object with another stylesheet object.
       * @docs-private
       */


      function extendStyles(dest, source) {
        for (var key in source) {
          if (source.hasOwnProperty(key)) {
            dest[key] = source[key];
          }
        }

        return dest;
      }
      /**
       * Toggles whether the native drag interactions should be enabled for an element.
       * @param element Element on which to toggle the drag interactions.
       * @param enable Whether the drag interactions should be enabled.
       * @docs-private
       */


      function toggleNativeDragInteractions(element, enable) {
        var userSelect = enable ? '' : 'none';
        extendStyles(element.style, {
          touchAction: enable ? '' : 'none',
          webkitUserDrag: enable ? '' : 'none',
          webkitTapHighlightColor: enable ? '' : 'transparent',
          userSelect: userSelect,
          msUserSelect: userSelect,
          webkitUserSelect: userSelect,
          MozUserSelect: userSelect
        });
      }
      /**
       * Toggles whether an element is visible while preserving its dimensions.
       * @param element Element whose visibility to toggle
       * @param enable Whether the element should be visible.
       * @docs-private
       */


      function toggleVisibility(element, enable) {
        var styles = element.style;
        styles.position = enable ? '' : 'fixed';
        styles.top = styles.opacity = enable ? '' : '0';
        styles.left = enable ? '' : '-999em';
      }
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** Parses a CSS time value to milliseconds. */


      function parseCssTimeUnitsToMs(value) {
        // Some browsers will return it in seconds, whereas others will return milliseconds.
        var multiplier = value.toLowerCase().indexOf('ms') > -1 ? 1 : 1000;
        return parseFloat(value) * multiplier;
      }
      /** Gets the transform transition duration, including the delay, of an element in milliseconds. */


      function getTransformTransitionDurationInMs(element) {
        var computedStyle = getComputedStyle(element);
        var transitionedProperties = parseCssPropertyValue(computedStyle, 'transition-property');
        var property = transitionedProperties.find(function (prop) {
          return prop === 'transform' || prop === 'all';
        }); // If there's no transition for `all` or `transform`, we shouldn't do anything.

        if (!property) {
          return 0;
        } // Get the index of the property that we're interested in and match
        // it up to the same index in `transition-delay` and `transition-duration`.


        var propertyIndex = transitionedProperties.indexOf(property);
        var rawDurations = parseCssPropertyValue(computedStyle, 'transition-duration');
        var rawDelays = parseCssPropertyValue(computedStyle, 'transition-delay');
        return parseCssTimeUnitsToMs(rawDurations[propertyIndex]) + parseCssTimeUnitsToMs(rawDelays[propertyIndex]);
      }
      /** Parses out multiple values from a computed style into an array. */


      function parseCssPropertyValue(computedStyle, name) {
        var value = computedStyle.getPropertyValue(name);
        return value.split(',').map(function (part) {
          return part.trim();
        });
      }
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** Gets a mutable version of an element's bounding `ClientRect`. */


      function getMutableClientRect(element) {
        var clientRect = element.getBoundingClientRect(); // We need to clone the `clientRect` here, because all the values on it are readonly
        // and we need to be able to update them. Also we can't use a spread here, because
        // the values on a `ClientRect` aren't own properties. See:
        // https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect#Notes

        return {
          top: clientRect.top,
          right: clientRect.right,
          bottom: clientRect.bottom,
          left: clientRect.left,
          width: clientRect.width,
          height: clientRect.height
        };
      }
      /**
       * Checks whether some coordinates are within a `ClientRect`.
       * @param clientRect ClientRect that is being checked.
       * @param x Coordinates along the X axis.
       * @param y Coordinates along the Y axis.
       */


      function isInsideClientRect(clientRect, x, y) {
        var top = clientRect.top,
            bottom = clientRect.bottom,
            left = clientRect.left,
            right = clientRect.right;
        return y >= top && y <= bottom && x >= left && x <= right;
      }
      /**
       * Updates the top/left positions of a `ClientRect`, as well as their bottom/right counterparts.
       * @param clientRect `ClientRect` that should be updated.
       * @param top Amount to add to the `top` position.
       * @param left Amount to add to the `left` position.
       */


      function adjustClientRect(clientRect, top, left) {
        clientRect.top += top;
        clientRect.bottom = clientRect.top + clientRect.height;
        clientRect.left += left;
        clientRect.right = clientRect.left + clientRect.width;
      }
      /**
       * Checks whether the pointer coordinates are close to a ClientRect.
       * @param rect ClientRect to check against.
       * @param threshold Threshold around the ClientRect.
       * @param pointerX Coordinates along the X axis.
       * @param pointerY Coordinates along the Y axis.
       */


      function isPointerNearClientRect(rect, threshold, pointerX, pointerY) {
        var top = rect.top,
            right = rect.right,
            bottom = rect.bottom,
            left = rect.left,
            width = rect.width,
            height = rect.height;
        var xThreshold = width * threshold;
        var yThreshold = height * threshold;
        return pointerY > top - yThreshold && pointerY < bottom + yThreshold && pointerX > left - xThreshold && pointerX < right + xThreshold;
      }
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** Keeps track of the scroll position and dimensions of the parents of an element. */


      var ParentPositionTracker = /*#__PURE__*/function () {
        function ParentPositionTracker(_document, _viewportRuler) {
          _classCallCheck(this, ParentPositionTracker);

          this._document = _document;
          this._viewportRuler = _viewportRuler;
          /** Cached positions of the scrollable parent elements. */

          this.positions = new Map();
        }
        /** Clears the cached positions. */


        _createClass(ParentPositionTracker, [{
          key: "clear",
          value: function clear() {
            this.positions.clear();
          }
          /** Caches the positions. Should be called at the beginning of a drag sequence. */

        }, {
          key: "cache",
          value: function cache(elements) {
            var _this3 = this;

            this.clear();
            this.positions.set(this._document, {
              scrollPosition: this._viewportRuler.getViewportScrollPosition()
            });
            elements.forEach(function (element) {
              _this3.positions.set(element, {
                scrollPosition: {
                  top: element.scrollTop,
                  left: element.scrollLeft
                },
                clientRect: getMutableClientRect(element)
              });
            });
          }
          /** Handles scrolling while a drag is taking place. */

        }, {
          key: "handleScroll",
          value: function handleScroll(event) {
            var target = event.target;
            var cachedPosition = this.positions.get(target);

            if (!cachedPosition) {
              return null;
            } // Used when figuring out whether an element is inside the scroll parent. If the scrolled
            // parent is the `document`, we use the `documentElement`, because IE doesn't support
            // `contains` on the `document`.


            var scrolledParentNode = target === this._document ? target.documentElement : target;
            var scrollPosition = cachedPosition.scrollPosition;
            var newTop;
            var newLeft;

            if (target === this._document) {
              var viewportScrollPosition = this._viewportRuler.getViewportScrollPosition();

              newTop = viewportScrollPosition.top;
              newLeft = viewportScrollPosition.left;
            } else {
              newTop = target.scrollTop;
              newLeft = target.scrollLeft;
            }

            var topDifference = scrollPosition.top - newTop;
            var leftDifference = scrollPosition.left - newLeft; // Go through and update the cached positions of the scroll
            // parents that are inside the element that was scrolled.

            this.positions.forEach(function (position, node) {
              if (position.clientRect && target !== node && scrolledParentNode.contains(node)) {
                adjustClientRect(position.clientRect, topDifference, leftDifference);
              }
            });
            scrollPosition.top = newTop;
            scrollPosition.left = newLeft;
            return {
              top: topDifference,
              left: leftDifference
            };
          }
        }]);

        return ParentPositionTracker;
      }();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** Creates a deep clone of an element. */


      function deepCloneNode(node) {
        var clone = node.cloneNode(true);
        var descendantsWithId = clone.querySelectorAll('[id]');
        var nodeName = node.nodeName.toLowerCase(); // Remove the `id` to avoid having multiple elements with the same id on the page.

        clone.removeAttribute('id');

        for (var i = 0; i < descendantsWithId.length; i++) {
          descendantsWithId[i].removeAttribute('id');
        }

        if (nodeName === 'canvas') {
          transferCanvasData(node, clone);
        } else if (nodeName === 'input' || nodeName === 'select' || nodeName === 'textarea') {
          transferInputData(node, clone);
        }

        transferData('canvas', node, clone, transferCanvasData);
        transferData('input, textarea, select', node, clone, transferInputData);
        return clone;
      }
      /** Matches elements between an element and its clone and allows for their data to be cloned. */


      function transferData(selector, node, clone, callback) {
        var descendantElements = node.querySelectorAll(selector);

        if (descendantElements.length) {
          var cloneElements = clone.querySelectorAll(selector);

          for (var i = 0; i < descendantElements.length; i++) {
            callback(descendantElements[i], cloneElements[i]);
          }
        }
      } // Counter for unique cloned radio button names.


      var cloneUniqueId = 0;
      /** Transfers the data of one input element to another. */

      function transferInputData(source, clone) {
        // Browsers throw an error when assigning the value of a file input programmatically.
        if (clone.type !== 'file') {
          clone.value = source.value;
        } // Radio button `name` attributes must be unique for radio button groups
        // otherwise original radio buttons can lose their checked state
        // once the clone is inserted in the DOM.


        if (clone.type === 'radio' && clone.name) {
          clone.name = "mat-clone-".concat(clone.name, "-").concat(cloneUniqueId++);
        }
      }
      /** Transfers the data of one canvas element to another. */


      function transferCanvasData(source, clone) {
        var context = clone.getContext('2d');

        if (context) {
          // In some cases `drawImage` can throw (e.g. if the canvas size is 0x0).
          // We can't do much about it so just ignore the error.
          try {
            context.drawImage(source, 0, 0);
          } catch (_a) {}
        }
      }
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** Options that can be used to bind a passive event listener. */


      var passiveEventListenerOptions = Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_3__["normalizePassiveListenerOptions"])({
        passive: true
      });
      /** Options that can be used to bind an active event listener. */

      var activeEventListenerOptions = Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_3__["normalizePassiveListenerOptions"])({
        passive: false
      });
      /**
       * Time in milliseconds for which to ignore mouse events, after
       * receiving a touch event. Used to avoid doing double work for
       * touch devices where the browser fires fake mouse events, in
       * addition to touch events.
       */

      var MOUSE_EVENT_IGNORE_TIME = 800;
      /**
       * Reference to a draggable item. Used to manipulate or dispose of the item.
       */

      var DragRef = /*#__PURE__*/function () {
        function DragRef(element, _config, _document, _ngZone, _viewportRuler, _dragDropRegistry) {
          var _this4 = this;

          _classCallCheck(this, DragRef);

          this._config = _config;
          this._document = _document;
          this._ngZone = _ngZone;
          this._viewportRuler = _viewportRuler;
          this._dragDropRegistry = _dragDropRegistry;
          /**
           * CSS `transform` applied to the element when it isn't being dragged. We need a
           * passive transform in order for the dragged element to retain its new position
           * after the user has stopped dragging and because we need to know the relative
           * position in case they start dragging again. This corresponds to `element.style.transform`.
           */

          this._passiveTransform = {
            x: 0,
            y: 0
          };
          /** CSS `transform` that is applied to the element while it's being dragged. */

          this._activeTransform = {
            x: 0,
            y: 0
          };
          /** Emits when the item is being moved. */

          this._moveEvents = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
          /** Subscription to pointer movement events. */

          this._pointerMoveSubscription = rxjs__WEBPACK_IMPORTED_MODULE_5__["Subscription"].EMPTY;
          /** Subscription to the event that is dispatched when the user lifts their pointer. */

          this._pointerUpSubscription = rxjs__WEBPACK_IMPORTED_MODULE_5__["Subscription"].EMPTY;
          /** Subscription to the viewport being scrolled. */

          this._scrollSubscription = rxjs__WEBPACK_IMPORTED_MODULE_5__["Subscription"].EMPTY;
          /** Subscription to the viewport being resized. */

          this._resizeSubscription = rxjs__WEBPACK_IMPORTED_MODULE_5__["Subscription"].EMPTY;
          /** Cached reference to the boundary element. */

          this._boundaryElement = null;
          /** Whether the native dragging interactions have been enabled on the root element. */

          this._nativeInteractionsEnabled = true;
          /** Elements that can be used to drag the draggable item. */

          this._handles = [];
          /** Registered handles that are currently disabled. */

          this._disabledHandles = new Set();
          /** Layout direction of the item. */

          this._direction = 'ltr';
          /**
           * Amount of milliseconds to wait after the user has put their
           * pointer down before starting to drag the element.
           */

          this.dragStartDelay = 0;
          this._disabled = false;
          /** Emits as the drag sequence is being prepared. */

          this.beforeStarted = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
          /** Emits when the user starts dragging the item. */

          this.started = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
          /** Emits when the user has released a drag item, before any animations have started. */

          this.released = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
          /** Emits when the user stops dragging an item in the container. */

          this.ended = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
          /** Emits when the user has moved the item into a new container. */

          this.entered = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
          /** Emits when the user removes the item its container by dragging it into another container. */

          this.exited = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
          /** Emits when the user drops the item inside a container. */

          this.dropped = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
          /**
           * Emits as the user is dragging the item. Use with caution,
           * because this event will fire for every pixel that the user has dragged.
           */

          this.moved = this._moveEvents;
          /** Handler for the `mousedown`/`touchstart` events. */

          this._pointerDown = function (event) {
            _this4.beforeStarted.next(); // Delegate the event based on whether it started from a handle or the element itself.


            if (_this4._handles.length) {
              var targetHandle = _this4._handles.find(function (handle) {
                var target = event.target;
                return !!target && (target === handle || handle.contains(target));
              });

              if (targetHandle && !_this4._disabledHandles.has(targetHandle) && !_this4.disabled) {
                _this4._initializeDragSequence(targetHandle, event);
              }
            } else if (!_this4.disabled) {
              _this4._initializeDragSequence(_this4._rootElement, event);
            }
          };
          /** Handler that is invoked when the user moves their pointer after they've initiated a drag. */


          this._pointerMove = function (event) {
            // Prevent the default action as early as possible in order to block
            // native actions like dragging the selected text or images with the mouse.
            event.preventDefault();

            var pointerPosition = _this4._getPointerPositionOnPage(event);

            if (!_this4._hasStartedDragging) {
              var distanceX = Math.abs(pointerPosition.x - _this4._pickupPositionOnPage.x);
              var distanceY = Math.abs(pointerPosition.y - _this4._pickupPositionOnPage.y);
              var isOverThreshold = distanceX + distanceY >= _this4._config.dragStartThreshold; // Only start dragging after the user has moved more than the minimum distance in either
              // direction. Note that this is preferrable over doing something like `skip(minimumDistance)`
              // in the `pointerMove` subscription, because we're not guaranteed to have one move event
              // per pixel of movement (e.g. if the user moves their pointer quickly).

              if (isOverThreshold) {
                var isDelayElapsed = Date.now() >= _this4._dragStartTime + _this4._getDragStartDelay(event);

                var container = _this4._dropContainer;

                if (!isDelayElapsed) {
                  _this4._endDragSequence(event);

                  return;
                } // Prevent other drag sequences from starting while something in the container is still
                // being dragged. This can happen while we're waiting for the drop animation to finish
                // and can cause errors, because some elements might still be moving around.


                if (!container || !container.isDragging() && !container.isReceiving()) {
                  _this4._hasStartedDragging = true;

                  _this4._ngZone.run(function () {
                    return _this4._startDragSequence(event);
                  });
                }
              }

              return;
            } // We only need the preview dimensions if we have a boundary element.


            if (_this4._boundaryElement) {
              // Cache the preview element rect if we haven't cached it already or if
              // we cached it too early before the element dimensions were computed.
              if (!_this4._previewRect || !_this4._previewRect.width && !_this4._previewRect.height) {
                _this4._previewRect = (_this4._preview || _this4._rootElement).getBoundingClientRect();
              }
            }

            var constrainedPointerPosition = _this4._getConstrainedPointerPosition(pointerPosition);

            _this4._hasMoved = true;
            _this4._lastKnownPointerPosition = pointerPosition;

            _this4._updatePointerDirectionDelta(constrainedPointerPosition);

            if (_this4._dropContainer) {
              _this4._updateActiveDropContainer(constrainedPointerPosition, pointerPosition);
            } else {
              var activeTransform = _this4._activeTransform;
              activeTransform.x = constrainedPointerPosition.x - _this4._pickupPositionOnPage.x + _this4._passiveTransform.x;
              activeTransform.y = constrainedPointerPosition.y - _this4._pickupPositionOnPage.y + _this4._passiveTransform.y;

              _this4._applyRootElementTransform(activeTransform.x, activeTransform.y); // Apply transform as attribute if dragging and svg element to work for IE


              if (typeof SVGElement !== 'undefined' && _this4._rootElement instanceof SVGElement) {
                var appliedTransform = "translate(".concat(activeTransform.x, " ").concat(activeTransform.y, ")");

                _this4._rootElement.setAttribute('transform', appliedTransform);
              }
            } // Since this event gets fired for every pixel while dragging, we only
            // want to fire it if the consumer opted into it. Also we have to
            // re-enter the zone because we run all of the events on the outside.


            if (_this4._moveEvents.observers.length) {
              _this4._ngZone.run(function () {
                _this4._moveEvents.next({
                  source: _this4,
                  pointerPosition: constrainedPointerPosition,
                  event: event,
                  distance: _this4._getDragDistance(constrainedPointerPosition),
                  delta: _this4._pointerDirectionDelta
                });
              });
            }
          };
          /** Handler that is invoked when the user lifts their pointer up, after initiating a drag. */


          this._pointerUp = function (event) {
            _this4._endDragSequence(event);
          };

          this.withRootElement(element);
          this._parentPositions = new ParentPositionTracker(_document, _viewportRuler);

          _dragDropRegistry.registerDragItem(this);
        }
        /** Whether starting to drag this element is disabled. */


        _createClass(DragRef, [{
          key: "getPlaceholderElement",

          /**
           * Returns the element that is being used as a placeholder
           * while the current element is being dragged.
           */
          value: function getPlaceholderElement() {
            return this._placeholder;
          }
          /** Returns the root draggable element. */

        }, {
          key: "getRootElement",
          value: function getRootElement() {
            return this._rootElement;
          }
          /**
           * Gets the currently-visible element that represents the drag item.
           * While dragging this is the placeholder, otherwise it's the root element.
           */

        }, {
          key: "getVisibleElement",
          value: function getVisibleElement() {
            return this.isDragging() ? this.getPlaceholderElement() : this.getRootElement();
          }
          /** Registers the handles that can be used to drag the element. */

        }, {
          key: "withHandles",
          value: function withHandles(handles) {
            this._handles = handles.map(function (handle) {
              return Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceElement"])(handle);
            });

            this._handles.forEach(function (handle) {
              return toggleNativeDragInteractions(handle, false);
            });

            this._toggleNativeDragInteractions();

            return this;
          }
          /**
           * Registers the template that should be used for the drag preview.
           * @param template Template that from which to stamp out the preview.
           */

        }, {
          key: "withPreviewTemplate",
          value: function withPreviewTemplate(template) {
            this._previewTemplate = template;
            return this;
          }
          /**
           * Registers the template that should be used for the drag placeholder.
           * @param template Template that from which to stamp out the placeholder.
           */

        }, {
          key: "withPlaceholderTemplate",
          value: function withPlaceholderTemplate(template) {
            this._placeholderTemplate = template;
            return this;
          }
          /**
           * Sets an alternate drag root element. The root element is the element that will be moved as
           * the user is dragging. Passing an alternate root element is useful when trying to enable
           * dragging on an element that you might not have access to.
           */

        }, {
          key: "withRootElement",
          value: function withRootElement(rootElement) {
            var _this5 = this;

            var element = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceElement"])(rootElement);

            if (element !== this._rootElement) {
              if (this._rootElement) {
                this._removeRootElementListeners(this._rootElement);
              }

              this._ngZone.runOutsideAngular(function () {
                element.addEventListener('mousedown', _this5._pointerDown, activeEventListenerOptions);
                element.addEventListener('touchstart', _this5._pointerDown, passiveEventListenerOptions);
              });

              this._initialTransform = undefined;
              this._rootElement = element;
            }

            if (typeof SVGElement !== 'undefined' && this._rootElement instanceof SVGElement) {
              this._ownerSVGElement = this._rootElement.ownerSVGElement;
            }

            return this;
          }
          /**
           * Element to which the draggable's position will be constrained.
           */

        }, {
          key: "withBoundaryElement",
          value: function withBoundaryElement(boundaryElement) {
            var _this6 = this;

            this._boundaryElement = boundaryElement ? Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceElement"])(boundaryElement) : null;

            this._resizeSubscription.unsubscribe();

            if (boundaryElement) {
              this._resizeSubscription = this._viewportRuler.change(10).subscribe(function () {
                return _this6._containInsideBoundaryOnResize();
              });
            }

            return this;
          }
          /** Removes the dragging functionality from the DOM element. */

        }, {
          key: "dispose",
          value: function dispose() {
            this._removeRootElementListeners(this._rootElement); // Do this check before removing from the registry since it'll
            // stop being considered as dragged once it is removed.


            if (this.isDragging()) {
              // Since we move out the element to the end of the body while it's being
              // dragged, we have to make sure that it's removed if it gets destroyed.
              removeNode(this._rootElement);
            }

            removeNode(this._anchor);

            this._destroyPreview();

            this._destroyPlaceholder();

            this._dragDropRegistry.removeDragItem(this);

            this._removeSubscriptions();

            this.beforeStarted.complete();
            this.started.complete();
            this.released.complete();
            this.ended.complete();
            this.entered.complete();
            this.exited.complete();
            this.dropped.complete();

            this._moveEvents.complete();

            this._handles = [];

            this._disabledHandles.clear();

            this._dropContainer = undefined;

            this._resizeSubscription.unsubscribe();

            this._parentPositions.clear();

            this._boundaryElement = this._rootElement = this._ownerSVGElement = this._placeholderTemplate = this._previewTemplate = this._anchor = null;
          }
          /** Checks whether the element is currently being dragged. */

        }, {
          key: "isDragging",
          value: function isDragging() {
            return this._hasStartedDragging && this._dragDropRegistry.isDragging(this);
          }
          /** Resets a standalone drag item to its initial position. */

        }, {
          key: "reset",
          value: function reset() {
            this._rootElement.style.transform = this._initialTransform || '';
            this._activeTransform = {
              x: 0,
              y: 0
            };
            this._passiveTransform = {
              x: 0,
              y: 0
            };
          }
          /**
           * Sets a handle as disabled. While a handle is disabled, it'll capture and interrupt dragging.
           * @param handle Handle element that should be disabled.
           */

        }, {
          key: "disableHandle",
          value: function disableHandle(handle) {
            if (this._handles.indexOf(handle) > -1) {
              this._disabledHandles.add(handle);
            }
          }
          /**
           * Enables a handle, if it has been disabled.
           * @param handle Handle element to be enabled.
           */

        }, {
          key: "enableHandle",
          value: function enableHandle(handle) {
            this._disabledHandles["delete"](handle);
          }
          /** Sets the layout direction of the draggable item. */

        }, {
          key: "withDirection",
          value: function withDirection(direction) {
            this._direction = direction;
            return this;
          }
          /** Sets the container that the item is part of. */

        }, {
          key: "_withDropContainer",
          value: function _withDropContainer(container) {
            this._dropContainer = container;
          }
          /**
           * Gets the current position in pixels the draggable outside of a drop container.
           */

        }, {
          key: "getFreeDragPosition",
          value: function getFreeDragPosition() {
            var position = this.isDragging() ? this._activeTransform : this._passiveTransform;
            return {
              x: position.x,
              y: position.y
            };
          }
          /**
           * Sets the current position in pixels the draggable outside of a drop container.
           * @param value New position to be set.
           */

        }, {
          key: "setFreeDragPosition",
          value: function setFreeDragPosition(value) {
            this._activeTransform = {
              x: 0,
              y: 0
            };
            this._passiveTransform.x = value.x;
            this._passiveTransform.y = value.y;

            if (!this._dropContainer) {
              this._applyRootElementTransform(value.x, value.y);
            }

            return this;
          }
          /** Updates the item's sort order based on the last-known pointer position. */

        }, {
          key: "_sortFromLastPointerPosition",
          value: function _sortFromLastPointerPosition() {
            var position = this._lastKnownPointerPosition;

            if (position && this._dropContainer) {
              this._updateActiveDropContainer(this._getConstrainedPointerPosition(position), position);
            }
          }
          /** Unsubscribes from the global subscriptions. */

        }, {
          key: "_removeSubscriptions",
          value: function _removeSubscriptions() {
            this._pointerMoveSubscription.unsubscribe();

            this._pointerUpSubscription.unsubscribe();

            this._scrollSubscription.unsubscribe();
          }
          /** Destroys the preview element and its ViewRef. */

        }, {
          key: "_destroyPreview",
          value: function _destroyPreview() {
            if (this._preview) {
              removeNode(this._preview);
            }

            if (this._previewRef) {
              this._previewRef.destroy();
            }

            this._preview = this._previewRef = null;
          }
          /** Destroys the placeholder element and its ViewRef. */

        }, {
          key: "_destroyPlaceholder",
          value: function _destroyPlaceholder() {
            if (this._placeholder) {
              removeNode(this._placeholder);
            }

            if (this._placeholderRef) {
              this._placeholderRef.destroy();
            }

            this._placeholder = this._placeholderRef = null;
          }
          /**
           * Clears subscriptions and stops the dragging sequence.
           * @param event Browser event object that ended the sequence.
           */

        }, {
          key: "_endDragSequence",
          value: function _endDragSequence(event) {
            var _this7 = this;

            // Note that here we use `isDragging` from the service, rather than from `this`.
            // The difference is that the one from the service reflects whether a dragging sequence
            // has been initiated, whereas the one on `this` includes whether the user has passed
            // the minimum dragging threshold.
            if (!this._dragDropRegistry.isDragging(this)) {
              return;
            }

            this._removeSubscriptions();

            this._dragDropRegistry.stopDragging(this);

            this._toggleNativeDragInteractions();

            if (this._handles) {
              this._rootElement.style.webkitTapHighlightColor = this._rootElementTapHighlight;
            }

            if (!this._hasStartedDragging) {
              return;
            }

            this.released.next({
              source: this
            });

            if (this._dropContainer) {
              // Stop scrolling immediately, instead of waiting for the animation to finish.
              this._dropContainer._stopScrolling();

              this._animatePreviewToPlaceholder().then(function () {
                _this7._cleanupDragArtifacts(event);

                _this7._cleanupCachedDimensions();

                _this7._dragDropRegistry.stopDragging(_this7);
              });
            } else {
              // Convert the active transform into a passive one. This means that next time
              // the user starts dragging the item, its position will be calculated relatively
              // to the new passive transform.
              this._passiveTransform.x = this._activeTransform.x;
              this._passiveTransform.y = this._activeTransform.y;

              this._ngZone.run(function () {
                _this7.ended.next({
                  source: _this7,
                  distance: _this7._getDragDistance(_this7._getPointerPositionOnPage(event))
                });
              });

              this._cleanupCachedDimensions();

              this._dragDropRegistry.stopDragging(this);
            }
          }
          /** Starts the dragging sequence. */

        }, {
          key: "_startDragSequence",
          value: function _startDragSequence(event) {
            if (isTouchEvent(event)) {
              this._lastTouchEventTime = Date.now();
            }

            this._toggleNativeDragInteractions();

            var dropContainer = this._dropContainer;

            if (dropContainer) {
              var element = this._rootElement;
              var parent = element.parentNode;

              var preview = this._preview = this._createPreviewElement();

              var placeholder = this._placeholder = this._createPlaceholderElement();

              var anchor = this._anchor = this._anchor || this._document.createComment(''); // Insert an anchor node so that we can restore the element's position in the DOM.


              parent.insertBefore(anchor, element); // We move the element out at the end of the body and we make it hidden, because keeping it in
              // place will throw off the consumer's `:last-child` selectors. We can't remove the element
              // from the DOM completely, because iOS will stop firing all subsequent events in the chain.

              toggleVisibility(element, false);

              this._document.body.appendChild(parent.replaceChild(placeholder, element));

              getPreviewInsertionPoint(this._document).appendChild(preview);
              this.started.next({
                source: this
              }); // Emit before notifying the container.

              dropContainer.start();
              this._initialContainer = dropContainer;
              this._initialIndex = dropContainer.getItemIndex(this);
            } else {
              this.started.next({
                source: this
              });
              this._initialContainer = this._initialIndex = undefined;
            } // Important to run after we've called `start` on the parent container
            // so that it has had time to resolve its scrollable parents.


            this._parentPositions.cache(dropContainer ? dropContainer.getScrollableParents() : []);
          }
          /**
           * Sets up the different variables and subscriptions
           * that will be necessary for the dragging sequence.
           * @param referenceElement Element that started the drag sequence.
           * @param event Browser event object that started the sequence.
           */

        }, {
          key: "_initializeDragSequence",
          value: function _initializeDragSequence(referenceElement, event) {
            var _this8 = this;

            // Always stop propagation for the event that initializes
            // the dragging sequence, in order to prevent it from potentially
            // starting another sequence for a draggable parent somewhere up the DOM tree.
            event.stopPropagation();
            var isDragging = this.isDragging();
            var isTouchSequence = isTouchEvent(event);
            var isAuxiliaryMouseButton = !isTouchSequence && event.button !== 0;
            var rootElement = this._rootElement;
            var isSyntheticEvent = !isTouchSequence && this._lastTouchEventTime && this._lastTouchEventTime + MOUSE_EVENT_IGNORE_TIME > Date.now(); // If the event started from an element with the native HTML drag&drop, it'll interfere
            // with our own dragging (e.g. `img` tags do it by default). Prevent the default action
            // to stop it from happening. Note that preventing on `dragstart` also seems to work, but
            // it's flaky and it fails if the user drags it away quickly. Also note that we only want
            // to do this for `mousedown` since doing the same for `touchstart` will stop any `click`
            // events from firing on touch devices.

            if (event.target && event.target.draggable && event.type === 'mousedown') {
              event.preventDefault();
            } // Abort if the user is already dragging or is using a mouse button other than the primary one.


            if (isDragging || isAuxiliaryMouseButton || isSyntheticEvent) {
              return;
            } // If we've got handles, we need to disable the tap highlight on the entire root element,
            // otherwise iOS will still add it, even though all the drag interactions on the handle
            // are disabled.


            if (this._handles.length) {
              this._rootElementTapHighlight = rootElement.style.webkitTapHighlightColor || '';
              rootElement.style.webkitTapHighlightColor = 'transparent';
            }

            this._hasStartedDragging = this._hasMoved = false; // Avoid multiple subscriptions and memory leaks when multi touch
            // (isDragging check above isn't enough because of possible temporal and/or dimensional delays)

            this._removeSubscriptions();

            this._pointerMoveSubscription = this._dragDropRegistry.pointerMove.subscribe(this._pointerMove);
            this._pointerUpSubscription = this._dragDropRegistry.pointerUp.subscribe(this._pointerUp);
            this._scrollSubscription = this._dragDropRegistry.scroll.subscribe(function (scrollEvent) {
              _this8._updateOnScroll(scrollEvent);
            });

            if (this._boundaryElement) {
              this._boundaryRect = getMutableClientRect(this._boundaryElement);
            } // If we have a custom preview we can't know ahead of time how large it'll be so we position
            // it next to the cursor. The exception is when the consumer has opted into making the preview
            // the same size as the root element, in which case we do know the size.


            var previewTemplate = this._previewTemplate;
            this._pickupPositionInElement = previewTemplate && previewTemplate.template && !previewTemplate.matchSize ? {
              x: 0,
              y: 0
            } : this._getPointerPositionInElement(referenceElement, event);

            var pointerPosition = this._pickupPositionOnPage = this._lastKnownPointerPosition = this._getPointerPositionOnPage(event);

            this._pointerDirectionDelta = {
              x: 0,
              y: 0
            };
            this._pointerPositionAtLastDirectionChange = {
              x: pointerPosition.x,
              y: pointerPosition.y
            };
            this._dragStartTime = Date.now();

            this._dragDropRegistry.startDragging(this, event);
          }
          /** Cleans up the DOM artifacts that were added to facilitate the element being dragged. */

        }, {
          key: "_cleanupDragArtifacts",
          value: function _cleanupDragArtifacts(event) {
            var _this9 = this;

            // Restore the element's visibility and insert it at its old position in the DOM.
            // It's important that we maintain the position, because moving the element around in the DOM
            // can throw off `NgFor` which does smart diffing and re-creates elements only when necessary,
            // while moving the existing elements in all other cases.
            toggleVisibility(this._rootElement, true);

            this._anchor.parentNode.replaceChild(this._rootElement, this._anchor);

            this._destroyPreview();

            this._destroyPlaceholder();

            this._boundaryRect = this._previewRect = undefined; // Re-enter the NgZone since we bound `document` events on the outside.

            this._ngZone.run(function () {
              var container = _this9._dropContainer;
              var currentIndex = container.getItemIndex(_this9);

              var pointerPosition = _this9._getPointerPositionOnPage(event);

              var distance = _this9._getDragDistance(_this9._getPointerPositionOnPage(event));

              var isPointerOverContainer = container._isOverContainer(pointerPosition.x, pointerPosition.y);

              _this9.ended.next({
                source: _this9,
                distance: distance
              });

              _this9.dropped.next({
                item: _this9,
                currentIndex: currentIndex,
                previousIndex: _this9._initialIndex,
                container: container,
                previousContainer: _this9._initialContainer,
                isPointerOverContainer: isPointerOverContainer,
                distance: distance
              });

              container.drop(_this9, currentIndex, _this9._initialContainer, isPointerOverContainer, distance, _this9._initialIndex);
              _this9._dropContainer = _this9._initialContainer;
            });
          }
          /**
           * Updates the item's position in its drop container, or moves it
           * into a new one, depending on its current drag position.
           */

        }, {
          key: "_updateActiveDropContainer",
          value: function _updateActiveDropContainer(_ref5, _ref6) {
            var _this10 = this;

            var x = _ref5.x,
                y = _ref5.y;
            var rawX = _ref6.x,
                rawY = _ref6.y;

            // Drop container that draggable has been moved into.
            var newContainer = this._initialContainer._getSiblingContainerFromPosition(this, x, y); // If we couldn't find a new container to move the item into, and the item has left its
            // initial container, check whether the it's over the initial container. This handles the
            // case where two containers are connected one way and the user tries to undo dragging an
            // item into a new container.


            if (!newContainer && this._dropContainer !== this._initialContainer && this._initialContainer._isOverContainer(x, y)) {
              newContainer = this._initialContainer;
            }

            if (newContainer && newContainer !== this._dropContainer) {
              this._ngZone.run(function () {
                // Notify the old container that the item has left.
                _this10.exited.next({
                  item: _this10,
                  container: _this10._dropContainer
                });

                _this10._dropContainer.exit(_this10); // Notify the new container that the item has entered.


                _this10._dropContainer = newContainer;

                _this10._dropContainer.enter(_this10, x, y, newContainer === _this10._initialContainer && // If we're re-entering the initial container and sorting is disabled,
                // put item the into its starting index to begin with.
                newContainer.sortingDisabled ? _this10._initialIndex : undefined);

                _this10.entered.next({
                  item: _this10,
                  container: newContainer,
                  currentIndex: newContainer.getItemIndex(_this10)
                });
              });
            }

            this._dropContainer._startScrollingIfNecessary(rawX, rawY);

            this._dropContainer._sortItem(this, x, y, this._pointerDirectionDelta);

            this._preview.style.transform = getTransform(x - this._pickupPositionInElement.x, y - this._pickupPositionInElement.y);
          }
          /**
           * Creates the element that will be rendered next to the user's pointer
           * and will be used as a preview of the element that is being dragged.
           */

        }, {
          key: "_createPreviewElement",
          value: function _createPreviewElement() {
            var previewConfig = this._previewTemplate;
            var previewClass = this.previewClass;
            var previewTemplate = previewConfig ? previewConfig.template : null;
            var preview;

            if (previewTemplate && previewConfig) {
              // Measure the element before we've inserted the preview
              // since the insertion could throw off the measurement.
              var rootRect = previewConfig.matchSize ? this._rootElement.getBoundingClientRect() : null;
              var viewRef = previewConfig.viewContainer.createEmbeddedView(previewTemplate, previewConfig.context);
              viewRef.detectChanges();
              preview = getRootNode(viewRef, this._document);
              this._previewRef = viewRef;

              if (previewConfig.matchSize) {
                matchElementSize(preview, rootRect);
              } else {
                preview.style.transform = getTransform(this._pickupPositionOnPage.x, this._pickupPositionOnPage.y);
              }
            } else {
              var element = this._rootElement;
              preview = deepCloneNode(element);
              matchElementSize(preview, element.getBoundingClientRect());
            }

            extendStyles(preview.style, {
              // It's important that we disable the pointer events on the preview, because
              // it can throw off the `document.elementFromPoint` calls in the `CdkDropList`.
              pointerEvents: 'none',
              // We have to reset the margin, because it can throw off positioning relative to the viewport.
              margin: '0',
              position: 'fixed',
              top: '0',
              left: '0',
              zIndex: "".concat(this._config.zIndex || 1000)
            });
            toggleNativeDragInteractions(preview, false);
            preview.classList.add('cdk-drag-preview');
            preview.setAttribute('dir', this._direction);

            if (previewClass) {
              if (Array.isArray(previewClass)) {
                previewClass.forEach(function (className) {
                  return preview.classList.add(className);
                });
              } else {
                preview.classList.add(previewClass);
              }
            }

            return preview;
          }
          /**
           * Animates the preview element from its current position to the location of the drop placeholder.
           * @returns Promise that resolves when the animation completes.
           */

        }, {
          key: "_animatePreviewToPlaceholder",
          value: function _animatePreviewToPlaceholder() {
            var _this11 = this;

            // If the user hasn't moved yet, the transitionend event won't fire.
            if (!this._hasMoved) {
              return Promise.resolve();
            }

            var placeholderRect = this._placeholder.getBoundingClientRect(); // Apply the class that adds a transition to the preview.


            this._preview.classList.add('cdk-drag-animating'); // Move the preview to the placeholder position.


            this._preview.style.transform = getTransform(placeholderRect.left, placeholderRect.top); // If the element doesn't have a `transition`, the `transitionend` event won't fire. Since
            // we need to trigger a style recalculation in order for the `cdk-drag-animating` class to
            // apply its style, we take advantage of the available info to figure out whether we need to
            // bind the event in the first place.

            var duration = getTransformTransitionDurationInMs(this._preview);

            if (duration === 0) {
              return Promise.resolve();
            }

            return this._ngZone.runOutsideAngular(function () {
              return new Promise(function (resolve) {
                var handler = function handler(event) {
                  if (!event || event.target === _this11._preview && event.propertyName === 'transform') {
                    _this11._preview.removeEventListener('transitionend', handler);

                    resolve();
                    clearTimeout(timeout);
                  }
                }; // If a transition is short enough, the browser might not fire the `transitionend` event.
                // Since we know how long it's supposed to take, add a timeout with a 50% buffer that'll
                // fire if the transition hasn't completed when it was supposed to.


                var timeout = setTimeout(handler, duration * 1.5);

                _this11._preview.addEventListener('transitionend', handler);
              });
            });
          }
          /** Creates an element that will be shown instead of the current element while dragging. */

        }, {
          key: "_createPlaceholderElement",
          value: function _createPlaceholderElement() {
            var placeholderConfig = this._placeholderTemplate;
            var placeholderTemplate = placeholderConfig ? placeholderConfig.template : null;
            var placeholder;

            if (placeholderTemplate) {
              this._placeholderRef = placeholderConfig.viewContainer.createEmbeddedView(placeholderTemplate, placeholderConfig.context);

              this._placeholderRef.detectChanges();

              placeholder = getRootNode(this._placeholderRef, this._document);
            } else {
              placeholder = deepCloneNode(this._rootElement);
            }

            placeholder.classList.add('cdk-drag-placeholder');
            return placeholder;
          }
          /**
           * Figures out the coordinates at which an element was picked up.
           * @param referenceElement Element that initiated the dragging.
           * @param event Event that initiated the dragging.
           */

        }, {
          key: "_getPointerPositionInElement",
          value: function _getPointerPositionInElement(referenceElement, event) {
            var elementRect = this._rootElement.getBoundingClientRect();

            var handleElement = referenceElement === this._rootElement ? null : referenceElement;
            var referenceRect = handleElement ? handleElement.getBoundingClientRect() : elementRect;
            var point = isTouchEvent(event) ? event.targetTouches[0] : event;

            var scrollPosition = this._getViewportScrollPosition();

            var x = point.pageX - referenceRect.left - scrollPosition.left;
            var y = point.pageY - referenceRect.top - scrollPosition.top;
            return {
              x: referenceRect.left - elementRect.left + x,
              y: referenceRect.top - elementRect.top + y
            };
          }
          /** Determines the point of the page that was touched by the user. */

        }, {
          key: "_getPointerPositionOnPage",
          value: function _getPointerPositionOnPage(event) {
            var scrollPosition = this._getViewportScrollPosition();

            var point = isTouchEvent(event) ? // `touches` will be empty for start/end events so we have to fall back to `changedTouches`.
            // Also note that on real devices we're guaranteed for either `touches` or `changedTouches`
            // to have a value, but Firefox in device emulation mode has a bug where both can be empty
            // for `touchstart` and `touchend` so we fall back to a dummy object in order to avoid
            // throwing an error. The value returned here will be incorrect, but since this only
            // breaks inside a developer tool and the value is only used for secondary information,
            // we can get away with it. See https://bugzilla.mozilla.org/show_bug.cgi?id=1615824.
            event.touches[0] || event.changedTouches[0] || {
              pageX: 0,
              pageY: 0
            } : event;
            var x = point.pageX - scrollPosition.left;
            var y = point.pageY - scrollPosition.top; // if dragging SVG element, try to convert from the screen coordinate system to the SVG
            // coordinate system

            if (this._ownerSVGElement) {
              var svgMatrix = this._ownerSVGElement.getScreenCTM();

              if (svgMatrix) {
                var svgPoint = this._ownerSVGElement.createSVGPoint();

                svgPoint.x = x;
                svgPoint.y = y;
                return svgPoint.matrixTransform(svgMatrix.inverse());
              }
            }

            return {
              x: x,
              y: y
            };
          }
          /** Gets the pointer position on the page, accounting for any position constraints. */

        }, {
          key: "_getConstrainedPointerPosition",
          value: function _getConstrainedPointerPosition(point) {
            var dropContainerLock = this._dropContainer ? this._dropContainer.lockAxis : null;

            var _ref7 = this.constrainPosition ? this.constrainPosition(point, this) : point,
                x = _ref7.x,
                y = _ref7.y;

            if (this.lockAxis === 'x' || dropContainerLock === 'x') {
              y = this._pickupPositionOnPage.y;
            } else if (this.lockAxis === 'y' || dropContainerLock === 'y') {
              x = this._pickupPositionOnPage.x;
            }

            if (this._boundaryRect) {
              var _this$_pickupPosition = this._pickupPositionInElement,
                  pickupX = _this$_pickupPosition.x,
                  pickupY = _this$_pickupPosition.y;
              var boundaryRect = this._boundaryRect;
              var previewRect = this._previewRect;
              var minY = boundaryRect.top + pickupY;
              var maxY = boundaryRect.bottom - (previewRect.height - pickupY);
              var minX = boundaryRect.left + pickupX;
              var maxX = boundaryRect.right - (previewRect.width - pickupX);
              x = clamp(x, minX, maxX);
              y = clamp(y, minY, maxY);
            }

            return {
              x: x,
              y: y
            };
          }
          /** Updates the current drag delta, based on the user's current pointer position on the page. */

        }, {
          key: "_updatePointerDirectionDelta",
          value: function _updatePointerDirectionDelta(pointerPositionOnPage) {
            var x = pointerPositionOnPage.x,
                y = pointerPositionOnPage.y;
            var delta = this._pointerDirectionDelta;
            var positionSinceLastChange = this._pointerPositionAtLastDirectionChange; // Amount of pixels the user has dragged since the last time the direction changed.

            var changeX = Math.abs(x - positionSinceLastChange.x);
            var changeY = Math.abs(y - positionSinceLastChange.y); // Because we handle pointer events on a per-pixel basis, we don't want the delta
            // to change for every pixel, otherwise anything that depends on it can look erratic.
            // To make the delta more consistent, we track how much the user has moved since the last
            // delta change and we only update it after it has reached a certain threshold.

            if (changeX > this._config.pointerDirectionChangeThreshold) {
              delta.x = x > positionSinceLastChange.x ? 1 : -1;
              positionSinceLastChange.x = x;
            }

            if (changeY > this._config.pointerDirectionChangeThreshold) {
              delta.y = y > positionSinceLastChange.y ? 1 : -1;
              positionSinceLastChange.y = y;
            }

            return delta;
          }
          /** Toggles the native drag interactions, based on how many handles are registered. */

        }, {
          key: "_toggleNativeDragInteractions",
          value: function _toggleNativeDragInteractions() {
            if (!this._rootElement || !this._handles) {
              return;
            }

            var shouldEnable = this._handles.length > 0 || !this.isDragging();

            if (shouldEnable !== this._nativeInteractionsEnabled) {
              this._nativeInteractionsEnabled = shouldEnable;
              toggleNativeDragInteractions(this._rootElement, shouldEnable);
            }
          }
          /** Removes the manually-added event listeners from the root element. */

        }, {
          key: "_removeRootElementListeners",
          value: function _removeRootElementListeners(element) {
            element.removeEventListener('mousedown', this._pointerDown, activeEventListenerOptions);
            element.removeEventListener('touchstart', this._pointerDown, passiveEventListenerOptions);
          }
          /**
           * Applies a `transform` to the root element, taking into account any existing transforms on it.
           * @param x New transform value along the X axis.
           * @param y New transform value along the Y axis.
           */

        }, {
          key: "_applyRootElementTransform",
          value: function _applyRootElementTransform(x, y) {
            var transform = getTransform(x, y); // Cache the previous transform amount only after the first drag sequence, because
            // we don't want our own transforms to stack on top of each other.

            if (this._initialTransform == null) {
              this._initialTransform = this._rootElement.style.transform || '';
            } // Preserve the previous `transform` value, if there was one. Note that we apply our own
            // transform before the user's, because things like rotation can affect which direction
            // the element will be translated towards.


            this._rootElement.style.transform = this._initialTransform ? transform + ' ' + this._initialTransform : transform;
          }
          /**
           * Gets the distance that the user has dragged during the current drag sequence.
           * @param currentPosition Current position of the user's pointer.
           */

        }, {
          key: "_getDragDistance",
          value: function _getDragDistance(currentPosition) {
            var pickupPosition = this._pickupPositionOnPage;

            if (pickupPosition) {
              return {
                x: currentPosition.x - pickupPosition.x,
                y: currentPosition.y - pickupPosition.y
              };
            }

            return {
              x: 0,
              y: 0
            };
          }
          /** Cleans up any cached element dimensions that we don't need after dragging has stopped. */

        }, {
          key: "_cleanupCachedDimensions",
          value: function _cleanupCachedDimensions() {
            this._boundaryRect = this._previewRect = undefined;

            this._parentPositions.clear();
          }
          /**
           * Checks whether the element is still inside its boundary after the viewport has been resized.
           * If not, the position is adjusted so that the element fits again.
           */

        }, {
          key: "_containInsideBoundaryOnResize",
          value: function _containInsideBoundaryOnResize() {
            var _this$_passiveTransfo = this._passiveTransform,
                x = _this$_passiveTransfo.x,
                y = _this$_passiveTransfo.y;

            if (x === 0 && y === 0 || this.isDragging() || !this._boundaryElement) {
              return;
            }

            var boundaryRect = this._boundaryElement.getBoundingClientRect();

            var elementRect = this._rootElement.getBoundingClientRect(); // It's possible that the element got hidden away after dragging (e.g. by switching to a
            // different tab). Don't do anything in this case so we don't clear the user's position.


            if (boundaryRect.width === 0 && boundaryRect.height === 0 || elementRect.width === 0 && elementRect.height === 0) {
              return;
            }

            var leftOverflow = boundaryRect.left - elementRect.left;
            var rightOverflow = elementRect.right - boundaryRect.right;
            var topOverflow = boundaryRect.top - elementRect.top;
            var bottomOverflow = elementRect.bottom - boundaryRect.bottom; // If the element has become wider than the boundary, we can't
            // do much to make it fit so we just anchor it to the left.

            if (boundaryRect.width > elementRect.width) {
              if (leftOverflow > 0) {
                x += leftOverflow;
              }

              if (rightOverflow > 0) {
                x -= rightOverflow;
              }
            } else {
              x = 0;
            } // If the element has become taller than the boundary, we can't
            // do much to make it fit so we just anchor it to the top.


            if (boundaryRect.height > elementRect.height) {
              if (topOverflow > 0) {
                y += topOverflow;
              }

              if (bottomOverflow > 0) {
                y -= bottomOverflow;
              }
            } else {
              y = 0;
            }

            if (x !== this._passiveTransform.x || y !== this._passiveTransform.y) {
              this.setFreeDragPosition({
                y: y,
                x: x
              });
            }
          }
          /** Gets the drag start delay, based on the event type. */

        }, {
          key: "_getDragStartDelay",
          value: function _getDragStartDelay(event) {
            var value = this.dragStartDelay;

            if (typeof value === 'number') {
              return value;
            } else if (isTouchEvent(event)) {
              return value.touch;
            }

            return value ? value.mouse : 0;
          }
          /** Updates the internal state of the draggable element when scrolling has occurred. */

        }, {
          key: "_updateOnScroll",
          value: function _updateOnScroll(event) {
            var scrollDifference = this._parentPositions.handleScroll(event);

            if (scrollDifference) {
              var target = event.target; // ClientRect dimensions are based on the scroll position of the page and its parent node so
              // we have to update the cached boundary ClientRect if the user has scrolled. Check for
              // the `document` specifically since IE doesn't support `contains` on it.

              if (this._boundaryRect && (target === this._document || target !== this._boundaryElement && target.contains(this._boundaryElement))) {
                adjustClientRect(this._boundaryRect, scrollDifference.top, scrollDifference.left);
              }

              this._pickupPositionOnPage.x += scrollDifference.left;
              this._pickupPositionOnPage.y += scrollDifference.top; // If we're in free drag mode, we have to update the active transform, because
              // it isn't relative to the viewport like the preview inside a drop list.

              if (!this._dropContainer) {
                this._activeTransform.x -= scrollDifference.left;
                this._activeTransform.y -= scrollDifference.top;

                this._applyRootElementTransform(this._activeTransform.x, this._activeTransform.y);
              }
            }
          }
          /** Gets the scroll position of the viewport. */

        }, {
          key: "_getViewportScrollPosition",
          value: function _getViewportScrollPosition() {
            var cachedPosition = this._parentPositions.positions.get(this._document);

            return cachedPosition ? cachedPosition.scrollPosition : this._viewportRuler.getViewportScrollPosition();
          }
        }, {
          key: "disabled",
          get: function get() {
            return this._disabled || !!(this._dropContainer && this._dropContainer.disabled);
          },
          set: function set(value) {
            var newValue = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceBooleanProperty"])(value);

            if (newValue !== this._disabled) {
              this._disabled = newValue;

              this._toggleNativeDragInteractions();
            }
          }
        }]);

        return DragRef;
      }();
      /**
       * Gets a 3d `transform` that can be applied to an element.
       * @param x Desired position of the element along the X axis.
       * @param y Desired position of the element along the Y axis.
       */


      function getTransform(x, y) {
        // Round the transforms since some browsers will
        // blur the elements for sub-pixel transforms.
        return "translate3d(".concat(Math.round(x), "px, ").concat(Math.round(y), "px, 0)");
      }
      /** Clamps a value between a minimum and a maximum. */


      function clamp(value, min, max) {
        return Math.max(min, Math.min(max, value));
      }
      /**
       * Helper to remove a node from the DOM and to do all the necessary null checks.
       * @param node Node to be removed.
       */


      function removeNode(node) {
        if (node && node.parentNode) {
          node.parentNode.removeChild(node);
        }
      }
      /** Determines whether an event is a touch event. */


      function isTouchEvent(event) {
        // This function is called for every pixel that the user has dragged so we need it to be
        // as fast as possible. Since we only bind mouse events and touch events, we can assume
        // that if the event's name starts with `t`, it's a touch event.
        return event.type[0] === 't';
      }
      /** Gets the element into which the drag preview should be inserted. */


      function getPreviewInsertionPoint(documentRef) {
        // We can't use the body if the user is in fullscreen mode,
        // because the preview will render under the fullscreen element.
        // TODO(crisbeto): dedupe this with the `FullscreenOverlayContainer` eventually.
        return documentRef.fullscreenElement || documentRef.webkitFullscreenElement || documentRef.mozFullScreenElement || documentRef.msFullscreenElement || documentRef.body;
      }
      /**
       * Gets the root HTML element of an embedded view.
       * If the root is not an HTML element it gets wrapped in one.
       */


      function getRootNode(viewRef, _document) {
        var rootNodes = viewRef.rootNodes;

        if (rootNodes.length === 1 && rootNodes[0].nodeType === _document.ELEMENT_NODE) {
          return rootNodes[0];
        }

        var wrapper = _document.createElement('div');

        rootNodes.forEach(function (node) {
          return wrapper.appendChild(node);
        });
        return wrapper;
      }
      /**
       * Matches the target element's size to the source's size.
       * @param target Element that needs to be resized.
       * @param sourceRect Dimensions of the source element.
       */


      function matchElementSize(target, sourceRect) {
        target.style.width = "".concat(sourceRect.width, "px");
        target.style.height = "".concat(sourceRect.height, "px");
        target.style.transform = getTransform(sourceRect.left, sourceRect.top);
      }
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Moves an item one index in an array to another.
       * @param array Array in which to move the item.
       * @param fromIndex Starting index of the item.
       * @param toIndex Index to which the item should be moved.
       */


      function moveItemInArray(array, fromIndex, toIndex) {
        var from = clamp$1(fromIndex, array.length - 1);
        var to = clamp$1(toIndex, array.length - 1);

        if (from === to) {
          return;
        }

        var target = array[from];
        var delta = to < from ? -1 : 1;

        for (var i = from; i !== to; i += delta) {
          array[i] = array[i + delta];
        }

        array[to] = target;
      }
      /**
       * Moves an item from one array to another.
       * @param currentArray Array from which to transfer the item.
       * @param targetArray Array into which to put the item.
       * @param currentIndex Index of the item in its current array.
       * @param targetIndex Index at which to insert the item.
       */


      function transferArrayItem(currentArray, targetArray, currentIndex, targetIndex) {
        var from = clamp$1(currentIndex, currentArray.length - 1);
        var to = clamp$1(targetIndex, targetArray.length);

        if (currentArray.length) {
          targetArray.splice(to, 0, currentArray.splice(from, 1)[0]);
        }
      }
      /**
       * Copies an item from one array to another, leaving it in its
       * original position in current array.
       * @param currentArray Array from which to copy the item.
       * @param targetArray Array into which is copy the item.
       * @param currentIndex Index of the item in its current array.
       * @param targetIndex Index at which to insert the item.
       *
       */


      function copyArrayItem(currentArray, targetArray, currentIndex, targetIndex) {
        var to = clamp$1(targetIndex, targetArray.length);

        if (currentArray.length) {
          targetArray.splice(to, 0, currentArray[currentIndex]);
        }
      }
      /** Clamps a number between zero and a maximum. */


      function clamp$1(value, max) {
        return Math.max(0, Math.min(max, value));
      }
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Proximity, as a ratio to width/height, at which a
       * dragged item will affect the drop container.
       */


      var DROP_PROXIMITY_THRESHOLD = 0.05;
      /**
       * Proximity, as a ratio to width/height at which to start auto-scrolling the drop list or the
       * viewport. The value comes from trying it out manually until it feels right.
       */

      var SCROLL_PROXIMITY_THRESHOLD = 0.05;
      /**
       * Number of pixels to scroll for each frame when auto-scrolling an element.
       * The value comes from trying it out manually until it feels right.
       */

      var AUTO_SCROLL_STEP = 2;
      /**
       * Reference to a drop list. Used to manipulate or dispose of the container.
       */

      var DropListRef = /*#__PURE__*/function () {
        function DropListRef(element, _dragDropRegistry, _document, _ngZone, _viewportRuler) {
          var _this12 = this;

          _classCallCheck(this, DropListRef);

          this._dragDropRegistry = _dragDropRegistry;
          this._ngZone = _ngZone;
          this._viewportRuler = _viewportRuler;
          /** Whether starting a dragging sequence from this container is disabled. */

          this.disabled = false;
          /** Whether sorting items within the list is disabled. */

          this.sortingDisabled = false;
          /**
           * Whether auto-scrolling the view when the user
           * moves their pointer close to the edges is disabled.
           */

          this.autoScrollDisabled = false;
          /**
           * Function that is used to determine whether an item
           * is allowed to be moved into a drop container.
           */

          this.enterPredicate = function () {
            return true;
          };
          /** Emits right before dragging has started. */


          this.beforeStarted = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
          /**
           * Emits when the user has moved a new drag item into this container.
           */

          this.entered = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
          /**
           * Emits when the user removes an item from the container
           * by dragging it into another container.
           */

          this.exited = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
          /** Emits when the user drops an item inside the container. */

          this.dropped = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
          /** Emits as the user is swapping items while actively dragging. */

          this.sorted = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
          /** Whether an item in the list is being dragged. */

          this._isDragging = false;
          /** Cache of the dimensions of all the items inside the container. */

          this._itemPositions = [];
          /**
           * Keeps track of the item that was last swapped with the dragged item, as well as what direction
           * the pointer was moving in when the swap occured and whether the user's pointer continued to
           * overlap with the swapped item after the swapping occurred.
           */

          this._previousSwap = {
            drag: null,
            delta: 0,
            overlaps: false
          };
          /** Drop lists that are connected to the current one. */

          this._siblings = [];
          /** Direction in which the list is oriented. */

          this._orientation = 'vertical';
          /** Connected siblings that currently have a dragged item. */

          this._activeSiblings = new Set();
          /** Layout direction of the drop list. */

          this._direction = 'ltr';
          /** Subscription to the window being scrolled. */

          this._viewportScrollSubscription = rxjs__WEBPACK_IMPORTED_MODULE_5__["Subscription"].EMPTY;
          /** Vertical direction in which the list is currently scrolling. */

          this._verticalScrollDirection = 0
          /* NONE */
          ;
          /** Horizontal direction in which the list is currently scrolling. */

          this._horizontalScrollDirection = 0
          /* NONE */
          ;
          /** Used to signal to the current auto-scroll sequence when to stop. */

          this._stopScrollTimers = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
          /** Shadow root of the current element. Necessary for `elementFromPoint` to resolve correctly. */

          this._cachedShadowRoot = null;
          /** Starts the interval that'll auto-scroll the element. */

          this._startScrollInterval = function () {
            _this12._stopScrolling();

            Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["interval"])(0, rxjs__WEBPACK_IMPORTED_MODULE_5__["animationFrameScheduler"]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(_this12._stopScrollTimers)).subscribe(function () {
              var node = _this12._scrollNode;

              if (_this12._verticalScrollDirection === 1
              /* UP */
              ) {
                  incrementVerticalScroll(node, -AUTO_SCROLL_STEP);
                } else if (_this12._verticalScrollDirection === 2
              /* DOWN */
              ) {
                  incrementVerticalScroll(node, AUTO_SCROLL_STEP);
                }

              if (_this12._horizontalScrollDirection === 1
              /* LEFT */
              ) {
                  incrementHorizontalScroll(node, -AUTO_SCROLL_STEP);
                } else if (_this12._horizontalScrollDirection === 2
              /* RIGHT */
              ) {
                  incrementHorizontalScroll(node, AUTO_SCROLL_STEP);
                }
            });
          };

          this.element = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceElement"])(element);
          this._document = _document;
          this.withScrollableParents([this.element]);

          _dragDropRegistry.registerDropContainer(this);

          this._parentPositions = new ParentPositionTracker(_document, _viewportRuler);
        }
        /** Removes the drop list functionality from the DOM element. */


        _createClass(DropListRef, [{
          key: "dispose",
          value: function dispose() {
            this._stopScrolling();

            this._stopScrollTimers.complete();

            this._viewportScrollSubscription.unsubscribe();

            this.beforeStarted.complete();
            this.entered.complete();
            this.exited.complete();
            this.dropped.complete();
            this.sorted.complete();

            this._activeSiblings.clear();

            this._scrollNode = null;

            this._parentPositions.clear();

            this._dragDropRegistry.removeDropContainer(this);
          }
          /** Whether an item from this list is currently being dragged. */

        }, {
          key: "isDragging",
          value: function isDragging() {
            return this._isDragging;
          }
          /** Starts dragging an item. */

        }, {
          key: "start",
          value: function start() {
            var _this13 = this;

            var styles = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceElement"])(this.element).style;
            this.beforeStarted.next();
            this._isDragging = true; // We need to disable scroll snapping while the user is dragging, because it breaks automatic
            // scrolling. The browser seems to round the value based on the snapping points which means
            // that we can't increment/decrement the scroll position.

            this._initialScrollSnap = styles.msScrollSnapType || styles.scrollSnapType || '';
            styles.scrollSnapType = styles.msScrollSnapType = 'none';

            this._cacheItems();

            this._siblings.forEach(function (sibling) {
              return sibling._startReceiving(_this13);
            });

            this._viewportScrollSubscription.unsubscribe();

            this._listenToScrollEvents();
          }
          /**
           * Emits an event to indicate that the user moved an item into the container.
           * @param item Item that was moved into the container.
           * @param pointerX Position of the item along the X axis.
           * @param pointerY Position of the item along the Y axis.
           * @param index Index at which the item entered. If omitted, the container will try to figure it
           *   out automatically.
           */

        }, {
          key: "enter",
          value: function enter(item, pointerX, pointerY, index) {
            this.start(); // If sorting is disabled, we want the item to return to its starting
            // position if the user is returning it to its initial container.

            var newIndex;

            if (index == null) {
              newIndex = this.sortingDisabled ? this._draggables.indexOf(item) : -1;

              if (newIndex === -1) {
                // We use the coordinates of where the item entered the drop
                // zone to figure out at which index it should be inserted.
                newIndex = this._getItemIndexFromPointerPosition(item, pointerX, pointerY);
              }
            } else {
              newIndex = index;
            }

            var activeDraggables = this._activeDraggables;
            var currentIndex = activeDraggables.indexOf(item);
            var placeholder = item.getPlaceholderElement();
            var newPositionReference = activeDraggables[newIndex]; // If the item at the new position is the same as the item that is being dragged,
            // it means that we're trying to restore the item to its initial position. In this
            // case we should use the next item from the list as the reference.

            if (newPositionReference === item) {
              newPositionReference = activeDraggables[newIndex + 1];
            } // Since the item may be in the `activeDraggables` already (e.g. if the user dragged it
            // into another container and back again), we have to ensure that it isn't duplicated.


            if (currentIndex > -1) {
              activeDraggables.splice(currentIndex, 1);
            } // Don't use items that are being dragged as a reference, because
            // their element has been moved down to the bottom of the body.


            if (newPositionReference && !this._dragDropRegistry.isDragging(newPositionReference)) {
              var element = newPositionReference.getRootElement();
              element.parentElement.insertBefore(placeholder, element);
              activeDraggables.splice(newIndex, 0, item);
            } else if (this._shouldEnterAsFirstChild(pointerX, pointerY)) {
              var reference = activeDraggables[0].getRootElement();
              reference.parentNode.insertBefore(placeholder, reference);
              activeDraggables.unshift(item);
            } else {
              Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceElement"])(this.element).appendChild(placeholder);
              activeDraggables.push(item);
            } // The transform needs to be cleared so it doesn't throw off the measurements.


            placeholder.style.transform = ''; // Note that the positions were already cached when we called `start` above,
            // but we need to refresh them since the amount of items has changed and also parent rects.

            this._cacheItemPositions();

            this._cacheParentPositions();

            this.entered.next({
              item: item,
              container: this,
              currentIndex: this.getItemIndex(item)
            });
          }
          /**
           * Removes an item from the container after it was dragged into another container by the user.
           * @param item Item that was dragged out.
           */

        }, {
          key: "exit",
          value: function exit(item) {
            this._reset();

            this.exited.next({
              item: item,
              container: this
            });
          }
          /**
           * Drops an item into this container.
           * @param item Item being dropped into the container.
           * @param currentIndex Index at which the item should be inserted.
           * @param previousContainer Container from which the item got dragged in.
           * @param isPointerOverContainer Whether the user's pointer was over the
           *    container when the item was dropped.
           * @param distance Distance the user has dragged since the start of the dragging sequence.
           * @param previousIndex Index of the item when dragging started.
           *
           * @breaking-change 11.0.0 `previousIndex` parameter to become required.
           */

        }, {
          key: "drop",
          value: function drop(item, currentIndex, previousContainer, isPointerOverContainer, distance, previousIndex) {
            this._reset(); // @breaking-change 11.0.0 Remove this fallback logic once `previousIndex` is a required param.


            if (previousIndex == null) {
              previousIndex = previousContainer.getItemIndex(item);
            }

            this.dropped.next({
              item: item,
              currentIndex: currentIndex,
              previousIndex: previousIndex,
              container: this,
              previousContainer: previousContainer,
              isPointerOverContainer: isPointerOverContainer,
              distance: distance
            });
          }
          /**
           * Sets the draggable items that are a part of this list.
           * @param items Items that are a part of this list.
           */

        }, {
          key: "withItems",
          value: function withItems(items) {
            var _this14 = this;

            var previousItems = this._draggables;
            this._draggables = items;
            items.forEach(function (item) {
              return item._withDropContainer(_this14);
            });

            if (this.isDragging()) {
              var draggedItems = previousItems.filter(function (item) {
                return item.isDragging();
              }); // If all of the items being dragged were removed
              // from the list, abort the current drag sequence.

              if (draggedItems.every(function (item) {
                return items.indexOf(item) === -1;
              })) {
                this._reset();
              } else {
                this._cacheItems();
              }
            }

            return this;
          }
          /** Sets the layout direction of the drop list. */

        }, {
          key: "withDirection",
          value: function withDirection(direction) {
            this._direction = direction;
            return this;
          }
          /**
           * Sets the containers that are connected to this one. When two or more containers are
           * connected, the user will be allowed to transfer items between them.
           * @param connectedTo Other containers that the current containers should be connected to.
           */

        }, {
          key: "connectedTo",
          value: function connectedTo(_connectedTo) {
            this._siblings = _connectedTo.slice();
            return this;
          }
          /**
           * Sets the orientation of the container.
           * @param orientation New orientation for the container.
           */

        }, {
          key: "withOrientation",
          value: function withOrientation(orientation) {
            this._orientation = orientation;
            return this;
          }
          /**
           * Sets which parent elements are can be scrolled while the user is dragging.
           * @param elements Elements that can be scrolled.
           */

        }, {
          key: "withScrollableParents",
          value: function withScrollableParents(elements) {
            var element = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceElement"])(this.element); // We always allow the current element to be scrollable
            // so we need to ensure that it's in the array.

            this._scrollableElements = elements.indexOf(element) === -1 ? [element].concat(_toConsumableArray(elements)) : elements.slice();
            return this;
          }
          /** Gets the scrollable parents that are registered with this drop container. */

        }, {
          key: "getScrollableParents",
          value: function getScrollableParents() {
            return this._scrollableElements;
          }
          /**
           * Figures out the index of an item in the container.
           * @param item Item whose index should be determined.
           */

        }, {
          key: "getItemIndex",
          value: function getItemIndex(item) {
            if (!this._isDragging) {
              return this._draggables.indexOf(item);
            } // Items are sorted always by top/left in the cache, however they flow differently in RTL.
            // The rest of the logic still stands no matter what orientation we're in, however
            // we need to invert the array when determining the index.


            var items = this._orientation === 'horizontal' && this._direction === 'rtl' ? this._itemPositions.slice().reverse() : this._itemPositions;
            return findIndex(items, function (currentItem) {
              return currentItem.drag === item;
            });
          }
          /**
           * Whether the list is able to receive the item that
           * is currently being dragged inside a connected drop list.
           */

        }, {
          key: "isReceiving",
          value: function isReceiving() {
            return this._activeSiblings.size > 0;
          }
          /**
           * Sorts an item inside the container based on its position.
           * @param item Item to be sorted.
           * @param pointerX Position of the item along the X axis.
           * @param pointerY Position of the item along the Y axis.
           * @param pointerDelta Direction in which the pointer is moving along each axis.
           */

        }, {
          key: "_sortItem",
          value: function _sortItem(item, pointerX, pointerY, pointerDelta) {
            // Don't sort the item if sorting is disabled or it's out of range.
            if (this.sortingDisabled || !isPointerNearClientRect(this._clientRect, DROP_PROXIMITY_THRESHOLD, pointerX, pointerY)) {
              return;
            }

            var siblings = this._itemPositions;

            var newIndex = this._getItemIndexFromPointerPosition(item, pointerX, pointerY, pointerDelta);

            if (newIndex === -1 && siblings.length > 0) {
              return;
            }

            var isHorizontal = this._orientation === 'horizontal';
            var currentIndex = findIndex(siblings, function (currentItem) {
              return currentItem.drag === item;
            });
            var siblingAtNewPosition = siblings[newIndex];
            var currentPosition = siblings[currentIndex].clientRect;
            var newPosition = siblingAtNewPosition.clientRect;
            var delta = currentIndex > newIndex ? 1 : -1; // How many pixels the item's placeholder should be offset.

            var itemOffset = this._getItemOffsetPx(currentPosition, newPosition, delta); // How many pixels all the other items should be offset.


            var siblingOffset = this._getSiblingOffsetPx(currentIndex, siblings, delta); // Save the previous order of the items before moving the item to its new index.
            // We use this to check whether an item has been moved as a result of the sorting.


            var oldOrder = siblings.slice(); // Shuffle the array in place.

            moveItemInArray(siblings, currentIndex, newIndex);
            this.sorted.next({
              previousIndex: currentIndex,
              currentIndex: newIndex,
              container: this,
              item: item
            });
            siblings.forEach(function (sibling, index) {
              // Don't do anything if the position hasn't changed.
              if (oldOrder[index] === sibling) {
                return;
              }

              var isDraggedItem = sibling.drag === item;
              var offset = isDraggedItem ? itemOffset : siblingOffset;
              var elementToOffset = isDraggedItem ? item.getPlaceholderElement() : sibling.drag.getRootElement(); // Update the offset to reflect the new position.

              sibling.offset += offset; // Since we're moving the items with a `transform`, we need to adjust their cached
              // client rects to reflect their new position, as well as swap their positions in the cache.
              // Note that we shouldn't use `getBoundingClientRect` here to update the cache, because the
              // elements may be mid-animation which will give us a wrong result.

              if (isHorizontal) {
                // Round the transforms since some browsers will
                // blur the elements, for sub-pixel transforms.
                elementToOffset.style.transform = "translate3d(".concat(Math.round(sibling.offset), "px, 0, 0)");
                adjustClientRect(sibling.clientRect, 0, offset);
              } else {
                elementToOffset.style.transform = "translate3d(0, ".concat(Math.round(sibling.offset), "px, 0)");
                adjustClientRect(sibling.clientRect, offset, 0);
              }
            }); // Note that it's important that we do this after the client rects have been adjusted.

            this._previousSwap.overlaps = isInsideClientRect(newPosition, pointerX, pointerY);
            this._previousSwap.drag = siblingAtNewPosition.drag;
            this._previousSwap.delta = isHorizontal ? pointerDelta.x : pointerDelta.y;
          }
          /**
           * Checks whether the user's pointer is close to the edges of either the
           * viewport or the drop list and starts the auto-scroll sequence.
           * @param pointerX User's pointer position along the x axis.
           * @param pointerY User's pointer position along the y axis.
           */

        }, {
          key: "_startScrollingIfNecessary",
          value: function _startScrollingIfNecessary(pointerX, pointerY) {
            var _this15 = this;

            if (this.autoScrollDisabled) {
              return;
            }

            var scrollNode;
            var verticalScrollDirection = 0
            /* NONE */
            ;
            var horizontalScrollDirection = 0
            /* NONE */
            ; // Check whether we should start scrolling any of the parent containers.

            this._parentPositions.positions.forEach(function (position, element) {
              // We have special handling for the `document` below. Also this would be
              // nicer with a  for...of loop, but it requires changing a compiler flag.
              if (element === _this15._document || !position.clientRect || scrollNode) {
                return;
              }

              if (isPointerNearClientRect(position.clientRect, DROP_PROXIMITY_THRESHOLD, pointerX, pointerY)) {
                var _getElementScrollDire = getElementScrollDirections(element, position.clientRect, pointerX, pointerY);

                var _getElementScrollDire2 = _slicedToArray(_getElementScrollDire, 2);

                verticalScrollDirection = _getElementScrollDire2[0];
                horizontalScrollDirection = _getElementScrollDire2[1];

                if (verticalScrollDirection || horizontalScrollDirection) {
                  scrollNode = element;
                }
              }
            }); // Otherwise check if we can start scrolling the viewport.


            if (!verticalScrollDirection && !horizontalScrollDirection) {
              var _this$_viewportRuler$ = this._viewportRuler.getViewportSize(),
                  width = _this$_viewportRuler$.width,
                  height = _this$_viewportRuler$.height;

              var clientRect = {
                width: width,
                height: height,
                top: 0,
                right: width,
                bottom: height,
                left: 0
              };
              verticalScrollDirection = getVerticalScrollDirection(clientRect, pointerY);
              horizontalScrollDirection = getHorizontalScrollDirection(clientRect, pointerX);
              scrollNode = window;
            }

            if (scrollNode && (verticalScrollDirection !== this._verticalScrollDirection || horizontalScrollDirection !== this._horizontalScrollDirection || scrollNode !== this._scrollNode)) {
              this._verticalScrollDirection = verticalScrollDirection;
              this._horizontalScrollDirection = horizontalScrollDirection;
              this._scrollNode = scrollNode;

              if ((verticalScrollDirection || horizontalScrollDirection) && scrollNode) {
                this._ngZone.runOutsideAngular(this._startScrollInterval);
              } else {
                this._stopScrolling();
              }
            }
          }
          /** Stops any currently-running auto-scroll sequences. */

        }, {
          key: "_stopScrolling",
          value: function _stopScrolling() {
            this._stopScrollTimers.next();
          }
          /** Caches the positions of the configured scrollable parents. */

        }, {
          key: "_cacheParentPositions",
          value: function _cacheParentPositions() {
            var element = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceElement"])(this.element);

            this._parentPositions.cache(this._scrollableElements); // The list element is always in the `scrollableElements`
            // so we can take advantage of the cached `ClientRect`.


            this._clientRect = this._parentPositions.positions.get(element).clientRect;
          }
          /** Refreshes the position cache of the items and sibling containers. */

        }, {
          key: "_cacheItemPositions",
          value: function _cacheItemPositions() {
            var isHorizontal = this._orientation === 'horizontal';
            this._itemPositions = this._activeDraggables.map(function (drag) {
              var elementToMeasure = drag.getVisibleElement();
              return {
                drag: drag,
                offset: 0,
                clientRect: getMutableClientRect(elementToMeasure)
              };
            }).sort(function (a, b) {
              return isHorizontal ? a.clientRect.left - b.clientRect.left : a.clientRect.top - b.clientRect.top;
            });
          }
          /** Resets the container to its initial state. */

        }, {
          key: "_reset",
          value: function _reset() {
            var _this16 = this;

            this._isDragging = false;
            var styles = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceElement"])(this.element).style;
            styles.scrollSnapType = styles.msScrollSnapType = this._initialScrollSnap; // TODO(crisbeto): may have to wait for the animations to finish.

            this._activeDraggables.forEach(function (item) {
              var rootElement = item.getRootElement();

              if (rootElement) {
                rootElement.style.transform = '';
              }
            });

            this._siblings.forEach(function (sibling) {
              return sibling._stopReceiving(_this16);
            });

            this._activeDraggables = [];
            this._itemPositions = [];
            this._previousSwap.drag = null;
            this._previousSwap.delta = 0;
            this._previousSwap.overlaps = false;

            this._stopScrolling();

            this._viewportScrollSubscription.unsubscribe();

            this._parentPositions.clear();
          }
          /**
           * Gets the offset in pixels by which the items that aren't being dragged should be moved.
           * @param currentIndex Index of the item currently being dragged.
           * @param siblings All of the items in the list.
           * @param delta Direction in which the user is moving.
           */

        }, {
          key: "_getSiblingOffsetPx",
          value: function _getSiblingOffsetPx(currentIndex, siblings, delta) {
            var isHorizontal = this._orientation === 'horizontal';
            var currentPosition = siblings[currentIndex].clientRect;
            var immediateSibling = siblings[currentIndex + delta * -1];
            var siblingOffset = currentPosition[isHorizontal ? 'width' : 'height'] * delta;

            if (immediateSibling) {
              var start = isHorizontal ? 'left' : 'top';
              var end = isHorizontal ? 'right' : 'bottom'; // Get the spacing between the start of the current item and the end of the one immediately
              // after it in the direction in which the user is dragging, or vice versa. We add it to the
              // offset in order to push the element to where it will be when it's inline and is influenced
              // by the `margin` of its siblings.

              if (delta === -1) {
                siblingOffset -= immediateSibling.clientRect[start] - currentPosition[end];
              } else {
                siblingOffset += currentPosition[start] - immediateSibling.clientRect[end];
              }
            }

            return siblingOffset;
          }
          /**
           * Gets the offset in pixels by which the item that is being dragged should be moved.
           * @param currentPosition Current position of the item.
           * @param newPosition Position of the item where the current item should be moved.
           * @param delta Direction in which the user is moving.
           */

        }, {
          key: "_getItemOffsetPx",
          value: function _getItemOffsetPx(currentPosition, newPosition, delta) {
            var isHorizontal = this._orientation === 'horizontal';
            var itemOffset = isHorizontal ? newPosition.left - currentPosition.left : newPosition.top - currentPosition.top; // Account for differences in the item width/height.

            if (delta === -1) {
              itemOffset += isHorizontal ? newPosition.width - currentPosition.width : newPosition.height - currentPosition.height;
            }

            return itemOffset;
          }
          /**
           * Checks if pointer is entering in the first position
           * @param pointerX Position of the user's pointer along the X axis.
           * @param pointerY Position of the user's pointer along the Y axis.
           */

        }, {
          key: "_shouldEnterAsFirstChild",
          value: function _shouldEnterAsFirstChild(pointerX, pointerY) {
            if (!this._activeDraggables.length) {
              return false;
            }

            var itemPositions = this._itemPositions;
            var isHorizontal = this._orientation === 'horizontal'; // `itemPositions` are sorted by position while `activeDraggables` are sorted by child index
            // check if container is using some sort of "reverse" ordering (eg: flex-direction: row-reverse)

            var reversed = itemPositions[0].drag !== this._activeDraggables[0];

            if (reversed) {
              var lastItemRect = itemPositions[itemPositions.length - 1].clientRect;
              return isHorizontal ? pointerX >= lastItemRect.right : pointerY >= lastItemRect.bottom;
            } else {
              var firstItemRect = itemPositions[0].clientRect;
              return isHorizontal ? pointerX <= firstItemRect.left : pointerY <= firstItemRect.top;
            }
          }
          /**
           * Gets the index of an item in the drop container, based on the position of the user's pointer.
           * @param item Item that is being sorted.
           * @param pointerX Position of the user's pointer along the X axis.
           * @param pointerY Position of the user's pointer along the Y axis.
           * @param delta Direction in which the user is moving their pointer.
           */

        }, {
          key: "_getItemIndexFromPointerPosition",
          value: function _getItemIndexFromPointerPosition(item, pointerX, pointerY, delta) {
            var _this17 = this;

            var isHorizontal = this._orientation === 'horizontal';
            return findIndex(this._itemPositions, function (_ref8, _, array) {
              var drag = _ref8.drag,
                  clientRect = _ref8.clientRect;

              if (drag === item) {
                // If there's only one item left in the container, it must be
                // the dragged item itself so we use it as a reference.
                return array.length < 2;
              }

              if (delta) {
                var direction = isHorizontal ? delta.x : delta.y; // If the user is still hovering over the same item as last time, their cursor hasn't left
                // the item after we made the swap, and they didn't change the direction in which they're
                // dragging, we don't consider it a direction swap.

                if (drag === _this17._previousSwap.drag && _this17._previousSwap.overlaps && direction === _this17._previousSwap.delta) {
                  return false;
                }
              }

              return isHorizontal ? // Round these down since most browsers report client rects with
              // sub-pixel precision, whereas the pointer coordinates are rounded to pixels.
              pointerX >= Math.floor(clientRect.left) && pointerX < Math.floor(clientRect.right) : pointerY >= Math.floor(clientRect.top) && pointerY < Math.floor(clientRect.bottom);
            });
          }
          /** Caches the current items in the list and their positions. */

        }, {
          key: "_cacheItems",
          value: function _cacheItems() {
            this._activeDraggables = this._draggables.slice();

            this._cacheItemPositions();

            this._cacheParentPositions();
          }
          /**
           * Checks whether the user's pointer is positioned over the container.
           * @param x Pointer position along the X axis.
           * @param y Pointer position along the Y axis.
           */

        }, {
          key: "_isOverContainer",
          value: function _isOverContainer(x, y) {
            return isInsideClientRect(this._clientRect, x, y);
          }
          /**
           * Figures out whether an item should be moved into a sibling
           * drop container, based on its current position.
           * @param item Drag item that is being moved.
           * @param x Position of the item along the X axis.
           * @param y Position of the item along the Y axis.
           */

        }, {
          key: "_getSiblingContainerFromPosition",
          value: function _getSiblingContainerFromPosition(item, x, y) {
            return this._siblings.find(function (sibling) {
              return sibling._canReceive(item, x, y);
            });
          }
          /**
           * Checks whether the drop list can receive the passed-in item.
           * @param item Item that is being dragged into the list.
           * @param x Position of the item along the X axis.
           * @param y Position of the item along the Y axis.
           */

        }, {
          key: "_canReceive",
          value: function _canReceive(item, x, y) {
            if (!isInsideClientRect(this._clientRect, x, y) || !this.enterPredicate(item, this)) {
              return false;
            }

            var elementFromPoint = this._getShadowRoot().elementFromPoint(x, y); // If there's no element at the pointer position, then
            // the client rect is probably scrolled out of the view.


            if (!elementFromPoint) {
              return false;
            }

            var nativeElement = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceElement"])(this.element); // The `ClientRect`, that we're using to find the container over which the user is
            // hovering, doesn't give us any information on whether the element has been scrolled
            // out of the view or whether it's overlapping with other containers. This means that
            // we could end up transferring the item into a container that's invisible or is positioned
            // below another one. We use the result from `elementFromPoint` to get the top-most element
            // at the pointer position and to find whether it's one of the intersecting drop containers.

            return elementFromPoint === nativeElement || nativeElement.contains(elementFromPoint);
          }
          /**
           * Called by one of the connected drop lists when a dragging sequence has started.
           * @param sibling Sibling in which dragging has started.
           */

        }, {
          key: "_startReceiving",
          value: function _startReceiving(sibling) {
            var activeSiblings = this._activeSiblings;

            if (!activeSiblings.has(sibling)) {
              activeSiblings.add(sibling);

              this._cacheParentPositions();

              this._listenToScrollEvents();
            }
          }
          /**
           * Called by a connected drop list when dragging has stopped.
           * @param sibling Sibling whose dragging has stopped.
           */

        }, {
          key: "_stopReceiving",
          value: function _stopReceiving(sibling) {
            this._activeSiblings["delete"](sibling);

            this._viewportScrollSubscription.unsubscribe();
          }
          /**
           * Starts listening to scroll events on the viewport.
           * Used for updating the internal state of the list.
           */

        }, {
          key: "_listenToScrollEvents",
          value: function _listenToScrollEvents() {
            var _this18 = this;

            this._viewportScrollSubscription = this._dragDropRegistry.scroll.subscribe(function (event) {
              if (_this18.isDragging()) {
                var scrollDifference = _this18._parentPositions.handleScroll(event);

                if (scrollDifference) {
                  // Since we know the amount that the user has scrolled we can shift all of the
                  // client rectangles ourselves. This is cheaper than re-measuring everything and
                  // we can avoid inconsistent behavior where we might be measuring the element before
                  // its position has changed.
                  _this18._itemPositions.forEach(function (_ref9) {
                    var clientRect = _ref9.clientRect;
                    adjustClientRect(clientRect, scrollDifference.top, scrollDifference.left);
                  }); // We need two loops for this, because we want all of the cached
                  // positions to be up-to-date before we re-sort the item.


                  _this18._itemPositions.forEach(function (_ref10) {
                    var drag = _ref10.drag;

                    if (_this18._dragDropRegistry.isDragging(drag)) {
                      // We need to re-sort the item manually, because the pointer move
                      // events won't be dispatched while the user is scrolling.
                      drag._sortFromLastPointerPosition();
                    }
                  });
                }
              } else if (_this18.isReceiving()) {
                _this18._cacheParentPositions();
              }
            });
          }
          /**
           * Lazily resolves and returns the shadow root of the element. We do this in a function, rather
           * than saving it in property directly on init, because we want to resolve it as late as possible
           * in order to ensure that the element has been moved into the shadow DOM. Doing it inside the
           * constructor might be too early if the element is inside of something like `ngFor` or `ngIf`.
           */

        }, {
          key: "_getShadowRoot",
          value: function _getShadowRoot() {
            if (!this._cachedShadowRoot) {
              var shadowRoot = Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_3__["_getShadowRoot"])(Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceElement"])(this.element));
              this._cachedShadowRoot = shadowRoot || this._document;
            }

            return this._cachedShadowRoot;
          }
        }]);

        return DropListRef;
      }();
      /**
       * Finds the index of an item that matches a predicate function. Used as an equivalent
       * of `Array.prototype.findIndex` which isn't part of the standard Google typings.
       * @param array Array in which to look for matches.
       * @param predicate Function used to determine whether an item is a match.
       */


      function findIndex(array, predicate) {
        for (var i = 0; i < array.length; i++) {
          if (predicate(array[i], i, array)) {
            return i;
          }
        }

        return -1;
      }
      /**
       * Increments the vertical scroll position of a node.
       * @param node Node whose scroll position should change.
       * @param amount Amount of pixels that the `node` should be scrolled.
       */


      function incrementVerticalScroll(node, amount) {
        if (node === window) {
          node.scrollBy(0, amount);
        } else {
          // Ideally we could use `Element.scrollBy` here as well, but IE and Edge don't support it.
          node.scrollTop += amount;
        }
      }
      /**
       * Increments the horizontal scroll position of a node.
       * @param node Node whose scroll position should change.
       * @param amount Amount of pixels that the `node` should be scrolled.
       */


      function incrementHorizontalScroll(node, amount) {
        if (node === window) {
          node.scrollBy(amount, 0);
        } else {
          // Ideally we could use `Element.scrollBy` here as well, but IE and Edge don't support it.
          node.scrollLeft += amount;
        }
      }
      /**
       * Gets whether the vertical auto-scroll direction of a node.
       * @param clientRect Dimensions of the node.
       * @param pointerY Position of the user's pointer along the y axis.
       */


      function getVerticalScrollDirection(clientRect, pointerY) {
        var top = clientRect.top,
            bottom = clientRect.bottom,
            height = clientRect.height;
        var yThreshold = height * SCROLL_PROXIMITY_THRESHOLD;

        if (pointerY >= top - yThreshold && pointerY <= top + yThreshold) {
          return 1
          /* UP */
          ;
        } else if (pointerY >= bottom - yThreshold && pointerY <= bottom + yThreshold) {
          return 2
          /* DOWN */
          ;
        }

        return 0
        /* NONE */
        ;
      }
      /**
       * Gets whether the horizontal auto-scroll direction of a node.
       * @param clientRect Dimensions of the node.
       * @param pointerX Position of the user's pointer along the x axis.
       */


      function getHorizontalScrollDirection(clientRect, pointerX) {
        var left = clientRect.left,
            right = clientRect.right,
            width = clientRect.width;
        var xThreshold = width * SCROLL_PROXIMITY_THRESHOLD;

        if (pointerX >= left - xThreshold && pointerX <= left + xThreshold) {
          return 1
          /* LEFT */
          ;
        } else if (pointerX >= right - xThreshold && pointerX <= right + xThreshold) {
          return 2
          /* RIGHT */
          ;
        }

        return 0
        /* NONE */
        ;
      }
      /**
       * Gets the directions in which an element node should be scrolled,
       * assuming that the user's pointer is already within it scrollable region.
       * @param element Element for which we should calculate the scroll direction.
       * @param clientRect Bounding client rectangle of the element.
       * @param pointerX Position of the user's pointer along the x axis.
       * @param pointerY Position of the user's pointer along the y axis.
       */


      function getElementScrollDirections(element, clientRect, pointerX, pointerY) {
        var computedVertical = getVerticalScrollDirection(clientRect, pointerY);
        var computedHorizontal = getHorizontalScrollDirection(clientRect, pointerX);
        var verticalScrollDirection = 0
        /* NONE */
        ;
        var horizontalScrollDirection = 0
        /* NONE */
        ; // Note that we here we do some extra checks for whether the element is actually scrollable in
        // a certain direction and we only assign the scroll direction if it is. We do this so that we
        // can allow other elements to be scrolled, if the current element can't be scrolled anymore.
        // This allows us to handle cases where the scroll regions of two scrollable elements overlap.

        if (computedVertical) {
          var scrollTop = element.scrollTop;

          if (computedVertical === 1
          /* UP */
          ) {
              if (scrollTop > 0) {
                verticalScrollDirection = 1
                /* UP */
                ;
              }
            } else if (element.scrollHeight - scrollTop > element.clientHeight) {
            verticalScrollDirection = 2
            /* DOWN */
            ;
          }
        }

        if (computedHorizontal) {
          var scrollLeft = element.scrollLeft;

          if (computedHorizontal === 1
          /* LEFT */
          ) {
              if (scrollLeft > 0) {
                horizontalScrollDirection = 1
                /* LEFT */
                ;
              }
            } else if (element.scrollWidth - scrollLeft > element.clientWidth) {
            horizontalScrollDirection = 2
            /* RIGHT */
            ;
          }
        }

        return [verticalScrollDirection, horizontalScrollDirection];
      }
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** Event options that can be used to bind an active, capturing event. */


      var activeCapturingEventOptions = Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_3__["normalizePassiveListenerOptions"])({
        passive: false,
        capture: true
      });
      /**
       * Service that keeps track of all the drag item and drop container
       * instances, and manages global event listeners on the `document`.
       * @docs-private
       */
      // Note: this class is generic, rather than referencing CdkDrag and CdkDropList directly, in order
      // to avoid circular imports. If we were to reference them here, importing the registry into the
      // classes that are registering themselves will introduce a circular import.

      var DragDropRegistry = /*#__PURE__*/function () {
        function DragDropRegistry(_ngZone, _document) {
          var _this19 = this;

          _classCallCheck(this, DragDropRegistry);

          this._ngZone = _ngZone;
          /** Registered drop container instances. */

          this._dropInstances = new Set();
          /** Registered drag item instances. */

          this._dragInstances = new Set();
          /** Drag item instances that are currently being dragged. */

          this._activeDragInstances = new Set();
          /** Keeps track of the event listeners that we've bound to the `document`. */

          this._globalListeners = new Map();
          /**
           * Emits the `touchmove` or `mousemove` events that are dispatched
           * while the user is dragging a drag item instance.
           */

          this.pointerMove = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
          /**
           * Emits the `touchend` or `mouseup` events that are dispatched
           * while the user is dragging a drag item instance.
           */

          this.pointerUp = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
          /** Emits when the viewport has been scrolled while the user is dragging an item. */

          this.scroll = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
          /**
           * Event listener that will prevent the default browser action while the user is dragging.
           * @param event Event whose default action should be prevented.
           */

          this._preventDefaultWhileDragging = function (event) {
            if (_this19._activeDragInstances.size) {
              event.preventDefault();
            }
          };
          /** Event listener for `touchmove` that is bound even if no dragging is happening. */


          this._persistentTouchmoveListener = function (event) {
            if (_this19._activeDragInstances.size) {
              event.preventDefault();

              _this19.pointerMove.next(event);
            }
          };

          this._document = _document;
        }
        /** Adds a drop container to the registry. */


        _createClass(DragDropRegistry, [{
          key: "registerDropContainer",
          value: function registerDropContainer(drop) {
            if (!this._dropInstances.has(drop)) {
              this._dropInstances.add(drop);
            }
          }
          /** Adds a drag item instance to the registry. */

        }, {
          key: "registerDragItem",
          value: function registerDragItem(drag) {
            var _this20 = this;

            this._dragInstances.add(drag); // The `touchmove` event gets bound once, ahead of time, because WebKit
            // won't preventDefault on a dynamically-added `touchmove` listener.
            // See https://bugs.webkit.org/show_bug.cgi?id=184250.


            if (this._dragInstances.size === 1) {
              this._ngZone.runOutsideAngular(function () {
                // The event handler has to be explicitly active,
                // because newer browsers make it passive by default.
                _this20._document.addEventListener('touchmove', _this20._persistentTouchmoveListener, activeCapturingEventOptions);
              });
            }
          }
          /** Removes a drop container from the registry. */

        }, {
          key: "removeDropContainer",
          value: function removeDropContainer(drop) {
            this._dropInstances["delete"](drop);
          }
          /** Removes a drag item instance from the registry. */

        }, {
          key: "removeDragItem",
          value: function removeDragItem(drag) {
            this._dragInstances["delete"](drag);

            this.stopDragging(drag);

            if (this._dragInstances.size === 0) {
              this._document.removeEventListener('touchmove', this._persistentTouchmoveListener, activeCapturingEventOptions);
            }
          }
          /**
           * Starts the dragging sequence for a drag instance.
           * @param drag Drag instance which is being dragged.
           * @param event Event that initiated the dragging.
           */

        }, {
          key: "startDragging",
          value: function startDragging(drag, event) {
            var _this21 = this;

            // Do not process the same drag twice to avoid memory leaks and redundant listeners
            if (this._activeDragInstances.has(drag)) {
              return;
            }

            this._activeDragInstances.add(drag);

            if (this._activeDragInstances.size === 1) {
              var _isTouchEvent = event.type.startsWith('touch'); // We explicitly bind __active__ listeners here, because newer browsers will default to
              // passive ones for `mousemove` and `touchmove`. The events need to be active, because we
              // use `preventDefault` to prevent the page from scrolling while the user is dragging.


              this._globalListeners.set(_isTouchEvent ? 'touchend' : 'mouseup', {
                handler: function handler(e) {
                  return _this21.pointerUp.next(e);
                },
                options: true
              }).set('scroll', {
                handler: function handler(e) {
                  return _this21.scroll.next(e);
                },
                // Use capturing so that we pick up scroll changes in any scrollable nodes that aren't
                // the document. See https://github.com/angular/components/issues/17144.
                options: true
              }) // Preventing the default action on `mousemove` isn't enough to disable text selection
              // on Safari so we need to prevent the selection event as well. Alternatively this can
              // be done by setting `user-select: none` on the `body`, however it has causes a style
              // recalculation which can be expensive on pages with a lot of elements.
              .set('selectstart', {
                handler: this._preventDefaultWhileDragging,
                options: activeCapturingEventOptions
              }); // We don't have to bind a move event for touch drag sequences, because
              // we already have a persistent global one bound from `registerDragItem`.


              if (!_isTouchEvent) {
                this._globalListeners.set('mousemove', {
                  handler: function handler(e) {
                    return _this21.pointerMove.next(e);
                  },
                  options: activeCapturingEventOptions
                });
              }

              this._ngZone.runOutsideAngular(function () {
                _this21._globalListeners.forEach(function (config, name) {
                  _this21._document.addEventListener(name, config.handler, config.options);
                });
              });
            }
          }
          /** Stops dragging a drag item instance. */

        }, {
          key: "stopDragging",
          value: function stopDragging(drag) {
            this._activeDragInstances["delete"](drag);

            if (this._activeDragInstances.size === 0) {
              this._clearGlobalListeners();
            }
          }
          /** Gets whether a drag item instance is currently being dragged. */

        }, {
          key: "isDragging",
          value: function isDragging(drag) {
            return this._activeDragInstances.has(drag);
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            var _this22 = this;

            this._dragInstances.forEach(function (instance) {
              return _this22.removeDragItem(instance);
            });

            this._dropInstances.forEach(function (instance) {
              return _this22.removeDropContainer(instance);
            });

            this._clearGlobalListeners();

            this.pointerMove.complete();
            this.pointerUp.complete();
          }
          /** Clears out the global event listeners from the `document`. */

        }, {
          key: "_clearGlobalListeners",
          value: function _clearGlobalListeners() {
            var _this23 = this;

            this._globalListeners.forEach(function (config, name) {
              _this23._document.removeEventListener(name, config.handler, config.options);
            });

            this._globalListeners.clear();
          }
        }]);

        return DragDropRegistry;
      }();

      DragDropRegistry.ɵfac = function DragDropRegistry_Factory(t) {
        return new (t || DragDropRegistry)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]));
      };

      DragDropRegistry.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
        factory: function DragDropRegistry_Factory() {
          return new DragDropRegistry(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]));
        },
        token: DragDropRegistry,
        providedIn: "root"
      });

      DragDropRegistry.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]]
          }]
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DragDropRegistry, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]]
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

      /** Default configuration to be used when creating a `DragRef`. */


      var DEFAULT_CONFIG = {
        dragStartThreshold: 5,
        pointerDirectionChangeThreshold: 5
      };
      /**
       * Service that allows for drag-and-drop functionality to be attached to DOM elements.
       */

      var DragDrop = /*#__PURE__*/function () {
        function DragDrop(_document, _ngZone, _viewportRuler, _dragDropRegistry) {
          _classCallCheck(this, DragDrop);

          this._document = _document;
          this._ngZone = _ngZone;
          this._viewportRuler = _viewportRuler;
          this._dragDropRegistry = _dragDropRegistry;
        }
        /**
         * Turns an element into a draggable item.
         * @param element Element to which to attach the dragging functionality.
         * @param config Object used to configure the dragging behavior.
         */


        _createClass(DragDrop, [{
          key: "createDrag",
          value: function createDrag(element) {
            var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DEFAULT_CONFIG;
            return new DragRef(element, config, this._document, this._ngZone, this._viewportRuler, this._dragDropRegistry);
          }
          /**
           * Turns an element into a drop list.
           * @param element Element to which to attach the drop list functionality.
           */

        }, {
          key: "createDropList",
          value: function createDropList(element) {
            return new DropListRef(element, this._dragDropRegistry, this._document, this._ngZone, this._viewportRuler);
          }
        }]);

        return DragDrop;
      }();

      DragDrop.ɵfac = function DragDrop_Factory(t) {
        return new (t || DragDrop)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__["ViewportRuler"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](DragDropRegistry));
      };

      DragDrop.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
        factory: function DragDrop_Factory() {
          return new DragDrop(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__["ViewportRuler"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(DragDropRegistry));
        },
        token: DragDrop,
        providedIn: "root"
      });

      DragDrop.ctorParameters = function () {
        return [{
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]]
          }]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
        }, {
          type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__["ViewportRuler"]
        }, {
          type: DragDropRegistry
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DragDrop, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]]
            }]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
          }, {
            type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__["ViewportRuler"]
          }, {
            type: DragDropRegistry
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

      /**
       * Injection token that can be used for a `CdkDrag` to provide itself as a parent to the
       * drag-specific child directive (`CdkDragHandle`, `CdkDragPreview` etc.). Used primarily
       * to avoid circular imports.
       * @docs-private
       */


      var CDK_DRAG_PARENT = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('CDK_DRAG_PARENT');
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Injection token that can be used to reference instances of `CdkDropListGroup`. It serves as
       * alternative token to the actual `CdkDropListGroup` class which could cause unnecessary
       * retention of the class and its directive metadata.
       */

      var CDK_DROP_LIST_GROUP = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('CdkDropListGroup');
      /**
       * Declaratively connects sibling `cdkDropList` instances together. All of the `cdkDropList`
       * elements that are placed inside a `cdkDropListGroup` will be connected to each other
       * automatically. Can be used as an alternative to the `cdkDropListConnectedTo` input
       * from `cdkDropList`.
       */

      var CdkDropListGroup = /*#__PURE__*/function () {
        function CdkDropListGroup() {
          _classCallCheck(this, CdkDropListGroup);

          /** Drop lists registered inside the group. */
          this._items = new Set();
          this._disabled = false;
        }
        /** Whether starting a dragging sequence from inside this group is disabled. */


        _createClass(CdkDropListGroup, [{
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._items.clear();
          }
        }, {
          key: "disabled",
          get: function get() {
            return this._disabled;
          },
          set: function set(value) {
            this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceBooleanProperty"])(value);
          }
        }]);

        return CdkDropListGroup;
      }();

      CdkDropListGroup.ɵfac = function CdkDropListGroup_Factory(t) {
        return new (t || CdkDropListGroup)();
      };

      CdkDropListGroup.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: CdkDropListGroup,
        selectors: [["", "cdkDropListGroup", ""]],
        inputs: {
          disabled: ["cdkDropListGroupDisabled", "disabled"]
        },
        exportAs: ["cdkDropListGroup"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
          provide: CDK_DROP_LIST_GROUP,
          useExisting: CdkDropListGroup
        }])]
      });
      CdkDropListGroup.propDecorators = {
        disabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['cdkDropListGroupDisabled']
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CdkDropListGroup, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: '[cdkDropListGroup]',
            exportAs: 'cdkDropListGroup',
            providers: [{
              provide: CDK_DROP_LIST_GROUP,
              useExisting: CdkDropListGroup
            }]
          }]
        }], function () {
          return [];
        }, {
          disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['cdkDropListGroupDisabled']
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

      /**
       * Injection token that can be used to configure the
       * behavior of the drag&drop-related components.
       */


      var CDK_DRAG_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('CDK_DRAG_CONFIG');
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** Counter used to generate unique ids for drop zones. */

      var _uniqueIdCounter = 0;
      /**
       * Injection token that can be used to reference instances of `CdkDropList`. It serves as
       * alternative token to the actual `CdkDropList` class which could cause unnecessary
       * retention of the class and its directive metadata.
       */

      var CDK_DROP_LIST = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('CdkDropList');
      var ɵ0 = undefined;
      /** Container that wraps a set of draggable items. */

      var CdkDropList = /*#__PURE__*/function () {
        function CdkDropList(
        /** Element that the drop list is attached to. */
        element, dragDrop, _changeDetectorRef, _dir, _group,
        /**
         * @deprecated _scrollDispatcher parameter to become required.
         * @breaking-change 11.0.0
         */
        _scrollDispatcher, config) {
          var _this24 = this;

          _classCallCheck(this, CdkDropList);

          this.element = element;
          this._changeDetectorRef = _changeDetectorRef;
          this._dir = _dir;
          this._group = _group;
          this._scrollDispatcher = _scrollDispatcher;
          /** Emits when the list has been destroyed. */

          this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
          /**
           * Other draggable containers that this container is connected to and into which the
           * container's items can be transferred. Can either be references to other drop containers,
           * or their unique IDs.
           */

          this.connectedTo = [];
          /**
           * Unique ID for the drop zone. Can be used as a reference
           * in the `connectedTo` of another `CdkDropList`.
           */

          this.id = "cdk-drop-list-".concat(_uniqueIdCounter++);
          /**
           * Function that is used to determine whether an item
           * is allowed to be moved into a drop container.
           */

          this.enterPredicate = function () {
            return true;
          };
          /** Emits when the user drops an item inside the container. */


          this.dropped = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          /**
           * Emits when the user has moved a new drag item into this container.
           */

          this.entered = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          /**
           * Emits when the user removes an item from the container
           * by dragging it into another container.
           */

          this.exited = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          /** Emits as the user is swapping items while actively dragging. */

          this.sorted = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          /**
           * Keeps track of the items that are registered with this container. Historically we used to
           * do this with a `ContentChildren` query, however queries don't handle transplanted views very
           * well which means that we can't handle cases like dragging the headers of a `mat-table`
           * correctly. What we do instead is to have the items register themselves with the container
           * and then we sort them based on their position in the DOM.
           */

          this._unsortedItems = new Set();
          this._dropListRef = dragDrop.createDropList(element);
          this._dropListRef.data = this;

          if (config) {
            this._assignDefaults(config);
          }

          this._dropListRef.enterPredicate = function (drag, drop) {
            return _this24.enterPredicate(drag.data, drop.data);
          };

          this._setupInputSyncSubscription(this._dropListRef);

          this._handleEvents(this._dropListRef);

          CdkDropList._dropLists.push(this);

          if (_group) {
            _group._items.add(this);
          }
        }
        /** Whether starting a dragging sequence from this container is disabled. */


        _createClass(CdkDropList, [{
          key: "addItem",

          /** Registers an items with the drop list. */
          value: function addItem(item) {
            this._unsortedItems.add(item);

            if (this._dropListRef.isDragging()) {
              this._syncItemsWithRef();
            }
          }
          /** Removes an item from the drop list. */

        }, {
          key: "removeItem",
          value: function removeItem(item) {
            this._unsortedItems["delete"](item);

            if (this._dropListRef.isDragging()) {
              this._syncItemsWithRef();
            }
          }
          /** Gets the registered items in the list, sorted by their position in the DOM. */

        }, {
          key: "getSortedItems",
          value: function getSortedItems() {
            return Array.from(this._unsortedItems).sort(function (a, b) {
              var documentPosition = a._dragRef.getVisibleElement().compareDocumentPosition(b._dragRef.getVisibleElement()); // `compareDocumentPosition` returns a bitmask so we have to use a bitwise operator.
              // https://developer.mozilla.org/en-US/docs/Web/API/Node/compareDocumentPosition
              // tslint:disable-next-line:no-bitwise


              return documentPosition & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : 1;
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            var index = CdkDropList._dropLists.indexOf(this);

            if (index > -1) {
              CdkDropList._dropLists.splice(index, 1);
            }

            if (this._group) {
              this._group._items["delete"](this);
            }

            this._unsortedItems.clear();

            this._dropListRef.dispose();

            this._destroyed.next();

            this._destroyed.complete();
          }
          /** Syncs the inputs of the CdkDropList with the options of the underlying DropListRef. */

        }, {
          key: "_setupInputSyncSubscription",
          value: function _setupInputSyncSubscription(ref) {
            var _this25 = this;

            if (this._dir) {
              this._dir.change.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["startWith"])(this._dir.value), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this._destroyed)).subscribe(function (value) {
                return ref.withDirection(value);
              });
            }

            ref.beforeStarted.subscribe(function () {
              var siblings = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceArray"])(_this25.connectedTo).map(function (drop) {
                if (typeof drop === 'string') {
                  var correspondingDropList = CdkDropList._dropLists.find(function (list) {
                    return list.id === drop;
                  });

                  if (!correspondingDropList && (typeof ngDevMode === 'undefined' || ngDevMode)) {
                    console.warn("CdkDropList could not find connected drop list with id \"".concat(drop, "\""));
                  }

                  return correspondingDropList;
                }

                return drop;
              });

              if (_this25._group) {
                _this25._group._items.forEach(function (drop) {
                  if (siblings.indexOf(drop) === -1) {
                    siblings.push(drop);
                  }
                });
              } // Note that we resolve the scrollable parents here so that we delay the resolution
              // as long as possible, ensuring that the element is in its final place in the DOM.
              // @breaking-change 11.0.0 Remove null check for _scrollDispatcher once it's required.


              if (!_this25._scrollableParentsResolved && _this25._scrollDispatcher) {
                var scrollableParents = _this25._scrollDispatcher.getAncestorScrollContainers(_this25.element).map(function (scrollable) {
                  return scrollable.getElementRef().nativeElement;
                });

                _this25._dropListRef.withScrollableParents(scrollableParents); // Only do this once since it involves traversing the DOM and the parents
                // shouldn't be able to change without the drop list being destroyed.


                _this25._scrollableParentsResolved = true;
              }

              ref.disabled = _this25.disabled;
              ref.lockAxis = _this25.lockAxis;
              ref.sortingDisabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceBooleanProperty"])(_this25.sortingDisabled);
              ref.autoScrollDisabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceBooleanProperty"])(_this25.autoScrollDisabled);
              ref.connectedTo(siblings.filter(function (drop) {
                return drop && drop !== _this25;
              }).map(function (list) {
                return list._dropListRef;
              })).withOrientation(_this25.orientation);
            });
          }
          /** Handles events from the underlying DropListRef. */

        }, {
          key: "_handleEvents",
          value: function _handleEvents(ref) {
            var _this26 = this;

            ref.beforeStarted.subscribe(function () {
              _this26._syncItemsWithRef();

              _this26._changeDetectorRef.markForCheck();
            });
            ref.entered.subscribe(function (event) {
              _this26.entered.emit({
                container: _this26,
                item: event.item.data,
                currentIndex: event.currentIndex
              });
            });
            ref.exited.subscribe(function (event) {
              _this26.exited.emit({
                container: _this26,
                item: event.item.data
              });

              _this26._changeDetectorRef.markForCheck();
            });
            ref.sorted.subscribe(function (event) {
              _this26.sorted.emit({
                previousIndex: event.previousIndex,
                currentIndex: event.currentIndex,
                container: _this26,
                item: event.item.data
              });
            });
            ref.dropped.subscribe(function (event) {
              _this26.dropped.emit({
                previousIndex: event.previousIndex,
                currentIndex: event.currentIndex,
                previousContainer: event.previousContainer.data,
                container: event.container.data,
                item: event.item.data,
                isPointerOverContainer: event.isPointerOverContainer,
                distance: event.distance
              }); // Mark for check since all of these events run outside of change
              // detection and we're not guaranteed for something else to have triggered it.


              _this26._changeDetectorRef.markForCheck();
            });
          }
          /** Assigns the default input values based on a provided config object. */

        }, {
          key: "_assignDefaults",
          value: function _assignDefaults(config) {
            var lockAxis = config.lockAxis,
                draggingDisabled = config.draggingDisabled,
                sortingDisabled = config.sortingDisabled,
                listAutoScrollDisabled = config.listAutoScrollDisabled,
                listOrientation = config.listOrientation;
            this.disabled = draggingDisabled == null ? false : draggingDisabled;
            this.sortingDisabled = sortingDisabled == null ? false : sortingDisabled;
            this.autoScrollDisabled = listAutoScrollDisabled == null ? false : listAutoScrollDisabled;
            this.orientation = listOrientation || 'vertical';

            if (lockAxis) {
              this.lockAxis = lockAxis;
            }
          }
          /** Syncs up the registered drag items with underlying drop list ref. */

        }, {
          key: "_syncItemsWithRef",
          value: function _syncItemsWithRef() {
            this._dropListRef.withItems(this.getSortedItems().map(function (item) {
              return item._dragRef;
            }));
          }
        }, {
          key: "disabled",
          get: function get() {
            return this._disabled || !!this._group && this._group.disabled;
          },
          set: function set(value) {
            // Usually we sync the directive and ref state right before dragging starts, in order to have
            // a single point of failure and to avoid having to use setters for everything. `disabled` is
            // a special case, because it can prevent the `beforeStarted` event from firing, which can lock
            // the user in a disabled state, so we also need to sync it as it's being set.
            this._dropListRef.disabled = this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceBooleanProperty"])(value);
          }
        }]);

        return CdkDropList;
      }();

      CdkDropList.ɵfac = function CdkDropList_Factory(t) {
        return new (t || CdkDropList)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](DragDrop), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_7__["Directionality"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](CDK_DROP_LIST_GROUP, 12), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__["ScrollDispatcher"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](CDK_DRAG_CONFIG, 8));
      };

      CdkDropList.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: CdkDropList,
        selectors: [["", "cdkDropList", ""], ["cdk-drop-list"]],
        hostAttrs: [1, "cdk-drop-list"],
        hostVars: 7,
        hostBindings: function CdkDropList_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵhostProperty"]("id", ctx.id);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("cdk-drop-list-disabled", ctx.disabled)("cdk-drop-list-dragging", ctx._dropListRef.isDragging())("cdk-drop-list-receiving", ctx._dropListRef.isReceiving());
          }
        },
        inputs: {
          connectedTo: ["cdkDropListConnectedTo", "connectedTo"],
          id: "id",
          enterPredicate: ["cdkDropListEnterPredicate", "enterPredicate"],
          disabled: ["cdkDropListDisabled", "disabled"],
          sortingDisabled: ["cdkDropListSortingDisabled", "sortingDisabled"],
          autoScrollDisabled: ["cdkDropListAutoScrollDisabled", "autoScrollDisabled"],
          orientation: ["cdkDropListOrientation", "orientation"],
          lockAxis: ["cdkDropListLockAxis", "lockAxis"],
          data: ["cdkDropListData", "data"]
        },
        outputs: {
          dropped: "cdkDropListDropped",
          entered: "cdkDropListEntered",
          exited: "cdkDropListExited",
          sorted: "cdkDropListSorted"
        },
        exportAs: ["cdkDropList"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([// Prevent child drop lists from picking up the same group as their parent.
        {
          provide: CDK_DROP_LIST_GROUP,
          useValue: ɵ0
        }, {
          provide: CDK_DROP_LIST,
          useExisting: CdkDropList
        }])]
      });
      /** Keeps track of the drop lists that are currently on the page. */

      CdkDropList._dropLists = [];

      CdkDropList.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: DragDrop
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
        }, {
          type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_7__["Directionality"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }]
        }, {
          type: CdkDropListGroup,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [CDK_DROP_LIST_GROUP]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"]
          }]
        }, {
          type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__["ScrollDispatcher"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [CDK_DRAG_CONFIG]
          }]
        }];
      };

      CdkDropList.propDecorators = {
        connectedTo: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['cdkDropListConnectedTo']
        }],
        data: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['cdkDropListData']
        }],
        orientation: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['cdkDropListOrientation']
        }],
        id: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        lockAxis: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['cdkDropListLockAxis']
        }],
        disabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['cdkDropListDisabled']
        }],
        sortingDisabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['cdkDropListSortingDisabled']
        }],
        enterPredicate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['cdkDropListEnterPredicate']
        }],
        autoScrollDisabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['cdkDropListAutoScrollDisabled']
        }],
        dropped: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
          args: ['cdkDropListDropped']
        }],
        entered: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
          args: ['cdkDropListEntered']
        }],
        exited: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
          args: ['cdkDropListExited']
        }],
        sorted: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
          args: ['cdkDropListSorted']
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CdkDropList, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: '[cdkDropList], cdk-drop-list',
            exportAs: 'cdkDropList',
            providers: [// Prevent child drop lists from picking up the same group as their parent.
            {
              provide: CDK_DROP_LIST_GROUP,
              useValue: ɵ0
            }, {
              provide: CDK_DROP_LIST,
              useExisting: CdkDropList
            }],
            host: {
              'class': 'cdk-drop-list',
              '[id]': 'id',
              '[class.cdk-drop-list-disabled]': 'disabled',
              '[class.cdk-drop-list-dragging]': '_dropListRef.isDragging()',
              '[class.cdk-drop-list-receiving]': '_dropListRef.isReceiving()'
            }
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }, {
            type: DragDrop
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
          }, {
            type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_7__["Directionality"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }]
          }, {
            type: CdkDropListGroup,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [CDK_DROP_LIST_GROUP]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"]
            }]
          }, {
            type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__["ScrollDispatcher"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [CDK_DRAG_CONFIG]
            }]
          }];
        }, {
          connectedTo: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['cdkDropListConnectedTo']
          }],
          id: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          enterPredicate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['cdkDropListEnterPredicate']
          }],
          dropped: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['cdkDropListDropped']
          }],
          entered: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['cdkDropListEntered']
          }],
          exited: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['cdkDropListExited']
          }],
          sorted: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['cdkDropListSorted']
          }],
          disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['cdkDropListDisabled']
          }],
          sortingDisabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['cdkDropListSortingDisabled']
          }],
          autoScrollDisabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['cdkDropListAutoScrollDisabled']
          }],
          orientation: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['cdkDropListOrientation']
          }],
          lockAxis: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['cdkDropListLockAxis']
          }],
          data: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['cdkDropListData']
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

      /**
       * Injection token that can be used to reference instances of `CdkDragHandle`. It serves as
       * alternative token to the actual `CdkDragHandle` class which could cause unnecessary
       * retention of the class and its directive metadata.
       */


      var CDK_DRAG_HANDLE = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('CdkDragHandle');
      /** Handle that can be used to drag a CdkDrag instance. */

      var CdkDragHandle = /*#__PURE__*/function () {
        function CdkDragHandle(element, parentDrag) {
          _classCallCheck(this, CdkDragHandle);

          this.element = element;
          /** Emits when the state of the handle has changed. */

          this._stateChanges = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
          this._disabled = false;
          this._parentDrag = parentDrag;
        }
        /** Whether starting to drag through this handle is disabled. */


        _createClass(CdkDragHandle, [{
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._stateChanges.complete();
          }
        }, {
          key: "disabled",
          get: function get() {
            return this._disabled;
          },
          set: function set(value) {
            this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceBooleanProperty"])(value);

            this._stateChanges.next(this);
          }
        }]);

        return CdkDragHandle;
      }();

      CdkDragHandle.ɵfac = function CdkDragHandle_Factory(t) {
        return new (t || CdkDragHandle)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](CDK_DRAG_PARENT, 12));
      };

      CdkDragHandle.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: CdkDragHandle,
        selectors: [["", "cdkDragHandle", ""]],
        hostAttrs: [1, "cdk-drag-handle"],
        inputs: {
          disabled: ["cdkDragHandleDisabled", "disabled"]
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
          provide: CDK_DRAG_HANDLE,
          useExisting: CdkDragHandle
        }])]
      });

      CdkDragHandle.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [CDK_DRAG_PARENT]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"]
          }]
        }];
      };

      CdkDragHandle.propDecorators = {
        disabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['cdkDragHandleDisabled']
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CdkDragHandle, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: '[cdkDragHandle]',
            host: {
              'class': 'cdk-drag-handle'
            },
            providers: [{
              provide: CDK_DRAG_HANDLE,
              useExisting: CdkDragHandle
            }]
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [CDK_DRAG_PARENT]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"]
            }]
          }];
        }, {
          disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['cdkDragHandleDisabled']
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

      /**
       * Injection token that can be used to reference instances of `CdkDragPlaceholder`. It serves as
       * alternative token to the actual `CdkDragPlaceholder` class which could cause unnecessary
       * retention of the class and its directive metadata.
       */


      var CDK_DRAG_PLACEHOLDER = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('CdkDragPlaceholder');
      /**
       * Element that will be used as a template for the placeholder of a CdkDrag when
       * it is being dragged. The placeholder is displayed in place of the element being dragged.
       */

      var CdkDragPlaceholder = function CdkDragPlaceholder(templateRef) {
        _classCallCheck(this, CdkDragPlaceholder);

        this.templateRef = templateRef;
      };

      CdkDragPlaceholder.ɵfac = function CdkDragPlaceholder_Factory(t) {
        return new (t || CdkDragPlaceholder)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]));
      };

      CdkDragPlaceholder.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: CdkDragPlaceholder,
        selectors: [["ng-template", "cdkDragPlaceholder", ""]],
        inputs: {
          data: "data"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
          provide: CDK_DRAG_PLACEHOLDER,
          useExisting: CdkDragPlaceholder
        }])]
      });

      CdkDragPlaceholder.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]
        }];
      };

      CdkDragPlaceholder.propDecorators = {
        data: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CdkDragPlaceholder, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: 'ng-template[cdkDragPlaceholder]',
            providers: [{
              provide: CDK_DRAG_PLACEHOLDER,
              useExisting: CdkDragPlaceholder
            }]
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]
          }];
        }, {
          data: [{
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

      /**
       * Injection token that can be used to reference instances of `CdkDragPreview`. It serves as
       * alternative token to the actual `CdkDragPreview` class which could cause unnecessary
       * retention of the class and its directive metadata.
       */


      var CDK_DRAG_PREVIEW = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('CdkDragPreview');
      /**
       * Element that will be used as a template for the preview
       * of a CdkDrag when it is being dragged.
       */

      var CdkDragPreview = /*#__PURE__*/function () {
        function CdkDragPreview(templateRef) {
          _classCallCheck(this, CdkDragPreview);

          this.templateRef = templateRef;
          this._matchSize = false;
        }
        /** Whether the preview should preserve the same size as the item that is being dragged. */


        _createClass(CdkDragPreview, [{
          key: "matchSize",
          get: function get() {
            return this._matchSize;
          },
          set: function set(value) {
            this._matchSize = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceBooleanProperty"])(value);
          }
        }]);

        return CdkDragPreview;
      }();

      CdkDragPreview.ɵfac = function CdkDragPreview_Factory(t) {
        return new (t || CdkDragPreview)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]));
      };

      CdkDragPreview.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: CdkDragPreview,
        selectors: [["ng-template", "cdkDragPreview", ""]],
        inputs: {
          matchSize: "matchSize",
          data: "data"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
          provide: CDK_DRAG_PREVIEW,
          useExisting: CdkDragPreview
        }])]
      });

      CdkDragPreview.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]
        }];
      };

      CdkDragPreview.propDecorators = {
        data: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        matchSize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CdkDragPreview, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: 'ng-template[cdkDragPreview]',
            providers: [{
              provide: CDK_DRAG_PREVIEW,
              useExisting: CdkDragPreview
            }]
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]
          }];
        }, {
          matchSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          data: [{
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

      /** Element that can be moved inside a CdkDropList container. */


      var CdkDrag = /*#__PURE__*/function () {
        function CdkDrag(
        /** Element that the draggable is attached to. */
        element,
        /** Droppable container that the draggable is a part of. */
        dropContainer, _document, _ngZone, _viewContainerRef, config, _dir, dragDrop, _changeDetectorRef, _selfHandle) {
          var _this27 = this;

          _classCallCheck(this, CdkDrag);

          this.element = element;
          this.dropContainer = dropContainer;
          this._document = _document;
          this._ngZone = _ngZone;
          this._viewContainerRef = _viewContainerRef;
          this._dir = _dir;
          this._changeDetectorRef = _changeDetectorRef;
          this._selfHandle = _selfHandle;
          this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
          /** Emits when the user starts dragging the item. */

          this.started = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          /** Emits when the user has released a drag item, before any animations have started. */

          this.released = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          /** Emits when the user stops dragging an item in the container. */

          this.ended = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          /** Emits when the user has moved the item into a new container. */

          this.entered = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          /** Emits when the user removes the item its container by dragging it into another container. */

          this.exited = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          /** Emits when the user drops the item inside a container. */

          this.dropped = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          /**
           * Emits as the user is dragging the item. Use with caution,
           * because this event will fire for every pixel that the user has dragged.
           */

          this.moved = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Observable"](function (observer) {
            var subscription = _this27._dragRef.moved.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (movedEvent) {
              return {
                source: _this27,
                pointerPosition: movedEvent.pointerPosition,
                event: movedEvent.event,
                delta: movedEvent.delta,
                distance: movedEvent.distance
              };
            })).subscribe(observer);

            return function () {
              subscription.unsubscribe();
            };
          });
          this._dragRef = dragDrop.createDrag(element, {
            dragStartThreshold: config && config.dragStartThreshold != null ? config.dragStartThreshold : 5,
            pointerDirectionChangeThreshold: config && config.pointerDirectionChangeThreshold != null ? config.pointerDirectionChangeThreshold : 5,
            zIndex: config === null || config === void 0 ? void 0 : config.zIndex
          });
          this._dragRef.data = this;

          if (config) {
            this._assignDefaults(config);
          } // Note that usually the container is assigned when the drop list is picks up the item, but in
          // some cases (mainly transplanted views with OnPush, see #18341) we may end up in a situation
          // where there are no items on the first change detection pass, but the items get picked up as
          // soon as the user triggers another pass by dragging. This is a problem, because the item would
          // have to switch from standalone mode to drag mode in the middle of the dragging sequence which
          // is too late since the two modes save different kinds of information. We work around it by
          // assigning the drop container both from here and the list.


          if (dropContainer) {
            this._dragRef._withDropContainer(dropContainer._dropListRef);

            dropContainer.addItem(this);
          }

          this._syncInputs(this._dragRef);

          this._handleEvents(this._dragRef);
        }
        /** Whether starting to drag this element is disabled. */


        _createClass(CdkDrag, [{
          key: "getPlaceholderElement",

          /**
           * Returns the element that is being used as a placeholder
           * while the current element is being dragged.
           */
          value: function getPlaceholderElement() {
            return this._dragRef.getPlaceholderElement();
          }
          /** Returns the root draggable element. */

        }, {
          key: "getRootElement",
          value: function getRootElement() {
            return this._dragRef.getRootElement();
          }
          /** Resets a standalone drag item to its initial position. */

        }, {
          key: "reset",
          value: function reset() {
            this._dragRef.reset();
          }
          /**
           * Gets the pixel coordinates of the draggable outside of a drop container.
           */

        }, {
          key: "getFreeDragPosition",
          value: function getFreeDragPosition() {
            return this._dragRef.getFreeDragPosition();
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            var _this28 = this;

            // We need to wait for the zone to stabilize, in order for the reference
            // element to be in the proper place in the DOM. This is mostly relevant
            // for draggable elements inside portals since they get stamped out in
            // their original DOM position and then they get transferred to the portal.
            this._ngZone.onStable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this._destroyed)).subscribe(function () {
              _this28._updateRootElement(); // Listen for any newly-added handles.


              _this28._handles.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["startWith"])(_this28._handles), // Sync the new handles with the DragRef.
              Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(function (handles) {
                var childHandleElements = handles.filter(function (handle) {
                  return handle._parentDrag === _this28;
                }).map(function (handle) {
                  return handle.element;
                }); // Usually handles are only allowed to be a descendant of the drag element, but if
                // the consumer defined a different drag root, we should allow the drag element
                // itself to be a handle too.

                if (_this28._selfHandle && _this28.rootElementSelector) {
                  childHandleElements.push(_this28.element);
                }

                _this28._dragRef.withHandles(childHandleElements);
              }), // Listen if the state of any of the handles changes.
              Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])(function (handles) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["merge"]).apply(void 0, _toConsumableArray(handles.map(function (item) {
                  return item._stateChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["startWith"])(item));
                })));
              }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(_this28._destroyed)).subscribe(function (handleInstance) {
                // Enabled/disable the handle that changed in the DragRef.
                var dragRef = _this28._dragRef;
                var handle = handleInstance.element.nativeElement;
                handleInstance.disabled ? dragRef.disableHandle(handle) : dragRef.enableHandle(handle);
              });

              if (_this28.freeDragPosition) {
                _this28._dragRef.setFreeDragPosition(_this28.freeDragPosition);
              }
            });
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            var rootSelectorChange = changes['rootElementSelector'];
            var positionChange = changes['freeDragPosition']; // We don't have to react to the first change since it's being
            // handled in `ngAfterViewInit` where it needs to be deferred.

            if (rootSelectorChange && !rootSelectorChange.firstChange) {
              this._updateRootElement();
            } // Skip the first change since it's being handled in `ngAfterViewInit`.


            if (positionChange && !positionChange.firstChange && this.freeDragPosition) {
              this._dragRef.setFreeDragPosition(this.freeDragPosition);
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            if (this.dropContainer) {
              this.dropContainer.removeItem(this);
            }

            this._destroyed.next();

            this._destroyed.complete();

            this._dragRef.dispose();
          }
          /** Syncs the root element with the `DragRef`. */

        }, {
          key: "_updateRootElement",
          value: function _updateRootElement() {
            var element = this.element.nativeElement;
            var rootElement = this.rootElementSelector ? getClosestMatchingAncestor(element, this.rootElementSelector) : element;

            if (rootElement && rootElement.nodeType !== this._document.ELEMENT_NODE && (typeof ngDevMode === 'undefined' || ngDevMode)) {
              throw Error("cdkDrag must be attached to an element node. " + "Currently attached to \"".concat(rootElement.nodeName, "\"."));
            }

            this._dragRef.withRootElement(rootElement || element);
          }
          /** Gets the boundary element, based on the `boundaryElement` value. */

        }, {
          key: "_getBoundaryElement",
          value: function _getBoundaryElement() {
            var boundary = this.boundaryElement;

            if (!boundary) {
              return null;
            }

            if (typeof boundary === 'string') {
              return getClosestMatchingAncestor(this.element.nativeElement, boundary);
            }

            var element = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceElement"])(boundary);

            if ((typeof ngDevMode === 'undefined' || ngDevMode) && !element.contains(this.element.nativeElement)) {
              throw Error('Draggable element is not inside of the node passed into cdkDragBoundary.');
            }

            return element;
          }
          /** Syncs the inputs of the CdkDrag with the options of the underlying DragRef. */

        }, {
          key: "_syncInputs",
          value: function _syncInputs(ref) {
            var _this29 = this;

            ref.beforeStarted.subscribe(function () {
              if (!ref.isDragging()) {
                var dir = _this29._dir;
                var dragStartDelay = _this29.dragStartDelay;
                var placeholder = _this29._placeholderTemplate ? {
                  template: _this29._placeholderTemplate.templateRef,
                  context: _this29._placeholderTemplate.data,
                  viewContainer: _this29._viewContainerRef
                } : null;
                var preview = _this29._previewTemplate ? {
                  template: _this29._previewTemplate.templateRef,
                  context: _this29._previewTemplate.data,
                  matchSize: _this29._previewTemplate.matchSize,
                  viewContainer: _this29._viewContainerRef
                } : null;
                ref.disabled = _this29.disabled;
                ref.lockAxis = _this29.lockAxis;
                ref.dragStartDelay = typeof dragStartDelay === 'object' && dragStartDelay ? dragStartDelay : Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceNumberProperty"])(dragStartDelay);
                ref.constrainPosition = _this29.constrainPosition;
                ref.previewClass = _this29.previewClass;
                ref.withBoundaryElement(_this29._getBoundaryElement()).withPlaceholderTemplate(placeholder).withPreviewTemplate(preview);

                if (dir) {
                  ref.withDirection(dir.value);
                }
              }
            });
          }
          /** Handles the events from the underlying `DragRef`. */

        }, {
          key: "_handleEvents",
          value: function _handleEvents(ref) {
            var _this30 = this;

            ref.started.subscribe(function () {
              _this30.started.emit({
                source: _this30
              }); // Since all of these events run outside of change detection,
              // we need to ensure that everything is marked correctly.


              _this30._changeDetectorRef.markForCheck();
            });
            ref.released.subscribe(function () {
              _this30.released.emit({
                source: _this30
              });
            });
            ref.ended.subscribe(function (event) {
              _this30.ended.emit({
                source: _this30,
                distance: event.distance
              }); // Since all of these events run outside of change detection,
              // we need to ensure that everything is marked correctly.


              _this30._changeDetectorRef.markForCheck();
            });
            ref.entered.subscribe(function (event) {
              _this30.entered.emit({
                container: event.container.data,
                item: _this30,
                currentIndex: event.currentIndex
              });
            });
            ref.exited.subscribe(function (event) {
              _this30.exited.emit({
                container: event.container.data,
                item: _this30
              });
            });
            ref.dropped.subscribe(function (event) {
              _this30.dropped.emit({
                previousIndex: event.previousIndex,
                currentIndex: event.currentIndex,
                previousContainer: event.previousContainer.data,
                container: event.container.data,
                isPointerOverContainer: event.isPointerOverContainer,
                item: _this30,
                distance: event.distance
              });
            });
          }
          /** Assigns the default input values based on a provided config object. */

        }, {
          key: "_assignDefaults",
          value: function _assignDefaults(config) {
            var lockAxis = config.lockAxis,
                dragStartDelay = config.dragStartDelay,
                constrainPosition = config.constrainPosition,
                previewClass = config.previewClass,
                boundaryElement = config.boundaryElement,
                draggingDisabled = config.draggingDisabled,
                rootElementSelector = config.rootElementSelector;
            this.disabled = draggingDisabled == null ? false : draggingDisabled;
            this.dragStartDelay = dragStartDelay || 0;

            if (lockAxis) {
              this.lockAxis = lockAxis;
            }

            if (constrainPosition) {
              this.constrainPosition = constrainPosition;
            }

            if (previewClass) {
              this.previewClass = previewClass;
            }

            if (boundaryElement) {
              this.boundaryElement = boundaryElement;
            }

            if (rootElementSelector) {
              this.rootElementSelector = rootElementSelector;
            }
          }
        }, {
          key: "disabled",
          get: function get() {
            return this._disabled || this.dropContainer && this.dropContainer.disabled;
          },
          set: function set(value) {
            this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceBooleanProperty"])(value);
            this._dragRef.disabled = this._disabled;
          }
        }]);

        return CdkDrag;
      }();

      CdkDrag.ɵfac = function CdkDrag_Factory(t) {
        return new (t || CdkDrag)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](CDK_DROP_LIST, 12), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](CDK_DRAG_CONFIG, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_7__["Directionality"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](DragDrop), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](CDK_DRAG_HANDLE, 10));
      };

      CdkDrag.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: CdkDrag,
        selectors: [["", "cdkDrag", ""]],
        contentQueries: function CdkDrag_ContentQueries(rf, ctx, dirIndex) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, CDK_DRAG_PREVIEW, true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, CDK_DRAG_PLACEHOLDER, true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, CDK_DRAG_HANDLE, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._previewTemplate = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._placeholderTemplate = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._handles = _t);
          }
        },
        hostAttrs: [1, "cdk-drag"],
        hostVars: 4,
        hostBindings: function CdkDrag_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("cdk-drag-disabled", ctx.disabled)("cdk-drag-dragging", ctx._dragRef.isDragging());
          }
        },
        inputs: {
          disabled: ["cdkDragDisabled", "disabled"],
          dragStartDelay: ["cdkDragStartDelay", "dragStartDelay"],
          lockAxis: ["cdkDragLockAxis", "lockAxis"],
          constrainPosition: ["cdkDragConstrainPosition", "constrainPosition"],
          previewClass: ["cdkDragPreviewClass", "previewClass"],
          boundaryElement: ["cdkDragBoundary", "boundaryElement"],
          rootElementSelector: ["cdkDragRootElement", "rootElementSelector"],
          data: ["cdkDragData", "data"],
          freeDragPosition: ["cdkDragFreeDragPosition", "freeDragPosition"]
        },
        outputs: {
          started: "cdkDragStarted",
          released: "cdkDragReleased",
          ended: "cdkDragEnded",
          entered: "cdkDragEntered",
          exited: "cdkDragExited",
          dropped: "cdkDragDropped",
          moved: "cdkDragMoved"
        },
        exportAs: ["cdkDrag"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
          provide: CDK_DRAG_PARENT,
          useExisting: CdkDrag
        }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]]
      });

      CdkDrag.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [CDK_DROP_LIST]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"]
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]]
          }]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [CDK_DRAG_CONFIG]
          }]
        }, {
          type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_7__["Directionality"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }]
        }, {
          type: DragDrop
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
        }, {
          type: CdkDragHandle,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [CDK_DRAG_HANDLE]
          }]
        }];
      };

      CdkDrag.propDecorators = {
        _handles: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"],
          args: [CDK_DRAG_HANDLE, {
            descendants: true
          }]
        }],
        _previewTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
          args: [CDK_DRAG_PREVIEW]
        }],
        _placeholderTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
          args: [CDK_DRAG_PLACEHOLDER]
        }],
        data: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['cdkDragData']
        }],
        lockAxis: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['cdkDragLockAxis']
        }],
        rootElementSelector: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['cdkDragRootElement']
        }],
        boundaryElement: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['cdkDragBoundary']
        }],
        dragStartDelay: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['cdkDragStartDelay']
        }],
        freeDragPosition: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['cdkDragFreeDragPosition']
        }],
        disabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['cdkDragDisabled']
        }],
        constrainPosition: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['cdkDragConstrainPosition']
        }],
        previewClass: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['cdkDragPreviewClass']
        }],
        started: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
          args: ['cdkDragStarted']
        }],
        released: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
          args: ['cdkDragReleased']
        }],
        ended: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
          args: ['cdkDragEnded']
        }],
        entered: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
          args: ['cdkDragEntered']
        }],
        exited: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
          args: ['cdkDragExited']
        }],
        dropped: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
          args: ['cdkDragDropped']
        }],
        moved: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
          args: ['cdkDragMoved']
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CdkDrag, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: '[cdkDrag]',
            exportAs: 'cdkDrag',
            host: {
              'class': 'cdk-drag',
              '[class.cdk-drag-disabled]': 'disabled',
              '[class.cdk-drag-dragging]': '_dragRef.isDragging()'
            },
            providers: [{
              provide: CDK_DRAG_PARENT,
              useExisting: CdkDrag
            }]
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [CDK_DROP_LIST]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"]
            }]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]]
            }]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [CDK_DRAG_CONFIG]
            }]
          }, {
            type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_7__["Directionality"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }]
          }, {
            type: DragDrop
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
          }, {
            type: CdkDragHandle,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [CDK_DRAG_HANDLE]
            }]
          }];
        }, {
          started: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['cdkDragStarted']
          }],
          released: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['cdkDragReleased']
          }],
          ended: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['cdkDragEnded']
          }],
          entered: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['cdkDragEntered']
          }],
          exited: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['cdkDragExited']
          }],
          dropped: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['cdkDragDropped']
          }],
          moved: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['cdkDragMoved']
          }],
          disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['cdkDragDisabled']
          }],
          dragStartDelay: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['cdkDragStartDelay']
          }],
          lockAxis: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['cdkDragLockAxis']
          }],
          constrainPosition: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['cdkDragConstrainPosition']
          }],
          previewClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['cdkDragPreviewClass']
          }],
          boundaryElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['cdkDragBoundary']
          }],
          rootElementSelector: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['cdkDragRootElement']
          }],
          _handles: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"],
            args: [CDK_DRAG_HANDLE, {
              descendants: true
            }]
          }],
          _previewTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
            args: [CDK_DRAG_PREVIEW]
          }],
          _placeholderTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
            args: [CDK_DRAG_PLACEHOLDER]
          }],
          data: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['cdkDragData']
          }],
          freeDragPosition: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['cdkDragFreeDragPosition']
          }]
        });
      })();
      /** Gets the closest ancestor of an element that matches a selector. */


      function getClosestMatchingAncestor(element, selector) {
        var currentElement = element.parentElement;

        while (currentElement) {
          // IE doesn't support `matches` so we have to fall back to `msMatchesSelector`.
          if (currentElement.matches ? currentElement.matches(selector) : currentElement.msMatchesSelector(selector)) {
            return currentElement;
          }

          currentElement = currentElement.parentElement;
        }

        return null;
      }
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var DragDropModule = function DragDropModule() {
        _classCallCheck(this, DragDropModule);
      };

      DragDropModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: DragDropModule
      });
      DragDropModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function DragDropModule_Factory(t) {
          return new (t || DragDropModule)();
        },
        providers: [DragDrop],
        imports: [_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__["CdkScrollableModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DragDropModule, {
          declarations: function declarations() {
            return [CdkDropList, CdkDropListGroup, CdkDrag, CdkDragHandle, CdkDragPreview, CdkDragPlaceholder];
          },
          exports: function exports() {
            return [_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__["CdkScrollableModule"], CdkDropList, CdkDropListGroup, CdkDrag, CdkDragHandle, CdkDragPreview, CdkDragPlaceholder];
          }
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DragDropModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [CdkDropList, CdkDropListGroup, CdkDrag, CdkDragHandle, CdkDragPreview, CdkDragPlaceholder],
            exports: [_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__["CdkScrollableModule"], CdkDropList, CdkDropListGroup, CdkDrag, CdkDragHandle, CdkDragPreview, CdkDragPlaceholder],
            providers: [DragDrop]
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
      //# sourceMappingURL=drag-drop.js.map

      /***/

    },

    /***/
    "8/JR":
    /*!****************************************!*\
      !*** ./node_modules/contra/emitter.js ***!
      \****************************************/

    /*! no static exports found */

    /***/
    function JR(module, exports, __webpack_require__) {
      "use strict";

      var atoa = __webpack_require__(
      /*! atoa */
      "8T9/");

      var debounce = __webpack_require__(
      /*! ./debounce */
      "Ibf7");

      module.exports = function emitter(thing, options) {
        var opts = options || {};
        var evt = {};

        if (thing === undefined) {
          thing = {};
        }

        thing.on = function (type, fn) {
          if (!evt[type]) {
            evt[type] = [fn];
          } else {
            evt[type].push(fn);
          }

          return thing;
        };

        thing.once = function (type, fn) {
          fn._once = true; // thing.off(fn) still works!

          thing.on(type, fn);
          return thing;
        };

        thing.off = function (type, fn) {
          var c = arguments.length;

          if (c === 1) {
            delete evt[type];
          } else if (c === 0) {
            evt = {};
          } else {
            var et = evt[type];

            if (!et) {
              return thing;
            }

            et.splice(et.indexOf(fn), 1);
          }

          return thing;
        };

        thing.emit = function () {
          var args = atoa(arguments);
          return thing.emitterSnapshot(args.shift()).apply(this, args);
        };

        thing.emitterSnapshot = function (type) {
          var et = (evt[type] || []).slice(0);
          return function () {
            var args = atoa(arguments);
            var ctx = this || thing;

            if (type === 'error' && opts["throws"] !== false && !et.length) {
              throw args.length === 1 ? args[0] : args;
            }

            et.forEach(function emitter(listen) {
              if (opts.async) {
                debounce(listen, args, ctx);
              } else {
                listen.apply(ctx, args);
              }

              if (listen._once) {
                thing.off(type, listen);
              }
            });
            return thing;
          };
        };

        return thing;
      };
      /***/

    },

    /***/
    "85qP":
    /*!*************************************************!*\
      !*** ./src/app/apps/calendar/calendar.model.ts ***!
      \*************************************************/

    /*! exports provided: Calendar */

    /***/
    function qP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Calendar", function () {
        return Calendar;
      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      var Calendar = /*#__PURE__*/function () {
        function Calendar(calendar) {
          _classCallCheck(this, Calendar);

          {
            this.id = calendar.id || this.getRandomID();
            this.title = calendar.title || '';
            this.category = calendar.category || '';
            this.startDate = Object(_angular_common__WEBPACK_IMPORTED_MODULE_0__["formatDate"])(new Date(), 'yyyy-MM-dd', 'en') || '';
            this.endDate = Object(_angular_common__WEBPACK_IMPORTED_MODULE_0__["formatDate"])(new Date(), 'yyyy-MM-dd', 'en') || '';
            this.details = calendar.details || '';
          }
        }

        _createClass(Calendar, [{
          key: "getRandomID",
          value: function getRandomID() {
            var S4 = function S4() {
              return ((1 + Math.random()) * 0x10000 | 0).toString(16).substring(1);
            };

            return S4() + S4();
          }
        }]);

        return Calendar;
      }();
      /***/

    },

    /***/
    "8T9/":
    /*!***********************************!*\
      !*** ./node_modules/atoa/atoa.js ***!
      \***********************************/

    /*! no static exports found */

    /***/
    function T9(module, exports) {
      module.exports = function atoa(a, n) {
        return Array.prototype.slice.call(a, n);
      };
      /***/

    },

    /***/
    "9Ejp":
    /*!****************************************************************************!*\
      !*** ./node_modules/ng2-dragula/__ivy_ngcc__/dist/fesm2015/ng2-dragula.js ***!
      \****************************************************************************/

    /*! exports provided: DragulaDirective, DragulaService, DragulaModule, dragula, DrakeFactory, Group, EventTypes, MockDrake, MockDrakeFactory */

    /***/
    function Ejp(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DragulaDirective", function () {
        return DragulaDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DragulaService", function () {
        return DragulaService;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DragulaModule", function () {
        return DragulaModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "dragula", function () {
        return dragula;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DrakeFactory", function () {
        return DrakeFactory;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Group", function () {
        return Group;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EventTypes", function () {
        return EventTypes;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MockDrake", function () {
        return MockDrake;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MockDrakeFactory", function () {
        return MockDrakeFactory;
      });
      /* harmony import */


      var dragula__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! dragula */
      "YS7c");
      /* harmony import */


      var dragula__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dragula__WEBPACK_IMPORTED_MODULE_0__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes} checked by tsc
       */


      var Group =
      /**
       * @param {?} name
       * @param {?} drake
       * @param {?} options
       */
      function Group(name, drake, options) {
        _classCallCheck(this, Group);

        this.name = name;
        this.drake = drake;
        this.options = options;
        this.initEvents = false;
      };
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes} checked by tsc
       */

      /** @enum {string} */


      var EventTypes = {
        Cancel: "cancel",
        Cloned: "cloned",
        Drag: "drag",
        DragEnd: "dragend",
        Drop: "drop",
        Out: "out",
        Over: "over",
        Remove: "remove",
        Shadow: "shadow",
        DropModel: "dropModel",
        RemoveModel: "removeModel"
      };
      /** @type {?} */

      var AllEvents = Object.keys(EventTypes).map(function (k) {
        return (
          /** @type {?} */
          EventTypes[
          /** @type {?} */
          k]
        );
      });
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes} checked by tsc
       */

      /** @type {?} */

      var dragula = dragula__WEBPACK_IMPORTED_MODULE_0___default.a || dragula__WEBPACK_IMPORTED_MODULE_0__;

      var DrakeFactory =
      /**
       * @param {?=} build
       */
      function DrakeFactory() {
        var build = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : dragula;

        _classCallCheck(this, DrakeFactory);

        this.build = build;
      };
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes} checked by tsc
       */

      /** @type {?} */


      var filterEvent = function filterEvent(eventType, filterDragType, projector) {
        return function (input) {
          return input.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (_ref11) {
            var event = _ref11.event,
                name = _ref11.name;
            return event === eventType && (filterDragType === undefined || name === filterDragType);
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (_ref12) {
            var name = _ref12.name,
                args = _ref12.args;
            return projector(name, args);
          }));
        };
      };
      /** @type {?} */


      var elContainerSourceProjector = function elContainerSourceProjector(name, _ref13) {
        var _ref14 = _slicedToArray(_ref13, 3),
            el = _ref14[0],
            container = _ref14[1],
            source = _ref14[2];

        return {
          name: name,
          el: el,
          container: container,
          source: source
        };
      };

      var DragulaService = /*#__PURE__*/function () {
        /**
         * @param {?=} drakeFactory
         */
        function DragulaService() {
          var _this31 = this;

          var drakeFactory = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

          _classCallCheck(this, DragulaService);

          this.drakeFactory = drakeFactory;
          this.dispatch$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();

          this.drag = function (groupName) {
            return _this31.dispatch$.pipe(filterEvent(EventTypes.Drag, groupName, function (name, _ref15) {
              var _ref16 = _slicedToArray(_ref15, 2),
                  el = _ref16[0],
                  source = _ref16[1];

              return {
                name: name,
                el: el,
                source: source
              };
            }));
          };

          this.dragend = function (groupName) {
            return _this31.dispatch$.pipe(filterEvent(EventTypes.DragEnd, groupName, function (name, _ref17) {
              var _ref18 = _slicedToArray(_ref17, 1),
                  el = _ref18[0];

              return {
                name: name,
                el: el
              };
            }));
          };

          this.drop = function (groupName) {
            return _this31.dispatch$.pipe(filterEvent(EventTypes.Drop, groupName, function (name, _ref19) {
              var _ref20 = _slicedToArray(_ref19, 4),
                  el = _ref20[0],
                  target = _ref20[1],
                  source = _ref20[2],
                  sibling = _ref20[3];

              return {
                name: name,
                el: el,
                target: target,
                source: source,
                sibling: sibling
              };
            }));
          };

          this.elContainerSource = function (eventType) {
            return function (groupName) {
              return _this31.dispatch$.pipe(filterEvent(eventType, groupName, elContainerSourceProjector));
            };
          };

          this.cancel = this.elContainerSource(EventTypes.Cancel);
          this.remove = this.elContainerSource(EventTypes.Remove);
          this.shadow = this.elContainerSource(EventTypes.Shadow);
          this.over = this.elContainerSource(EventTypes.Over);
          this.out = this.elContainerSource(EventTypes.Out);

          this.cloned = function (groupName) {
            return _this31.dispatch$.pipe(filterEvent(EventTypes.Cloned, groupName, function (name, _ref21) {
              var _ref22 = _slicedToArray(_ref21, 3),
                  clone = _ref22[0],
                  original = _ref22[1],
                  cloneType = _ref22[2];

              return {
                name: name,
                clone: clone,
                original: original,
                cloneType: cloneType
              };
            }));
          };

          this.dropModel = function (groupName) {
            return _this31.dispatch$.pipe(filterEvent(EventTypes.DropModel, groupName, function (name, _ref23) {
              var _ref24 = _slicedToArray(_ref23, 9),
                  el = _ref24[0],
                  target = _ref24[1],
                  source = _ref24[2],
                  sibling = _ref24[3],
                  item = _ref24[4],
                  sourceModel = _ref24[5],
                  targetModel = _ref24[6],
                  sourceIndex = _ref24[7],
                  targetIndex = _ref24[8];

              return {
                name: name,
                el: el,
                target: target,
                source: source,
                sibling: sibling,
                item: item,
                sourceModel: sourceModel,
                targetModel: targetModel,
                sourceIndex: sourceIndex,
                targetIndex: targetIndex
              };
            }));
          };

          this.removeModel = function (groupName) {
            return _this31.dispatch$.pipe(filterEvent(EventTypes.RemoveModel, groupName, function (name, _ref25) {
              var _ref26 = _slicedToArray(_ref25, 6),
                  el = _ref26[0],
                  container = _ref26[1],
                  source = _ref26[2],
                  item = _ref26[3],
                  sourceModel = _ref26[4],
                  sourceIndex = _ref26[5];

              return {
                name: name,
                el: el,
                container: container,
                source: source,
                item: item,
                sourceModel: sourceModel,
                sourceIndex: sourceIndex
              };
            }));
          };

          this.groups = {};

          if (this.drakeFactory === null) {
            this.drakeFactory = new DrakeFactory();
          }
        }
        /**
         * Public mainly for testing purposes. Prefer `createGroup()`.
         * @param {?} group
         * @return {?}
         */


        _createClass(DragulaService, [{
          key: "add",
          value: function add(group) {
            /** @type {?} */
            var existingGroup = this.find(group.name);

            if (existingGroup) {
              throw new Error('Group named: "' + group.name + '" already exists.');
            }

            this.groups[group.name] = group;
            this.handleModels(group);
            this.setupEvents(group);
            return group;
          }
          /**
           * @param {?} name
           * @return {?}
           */

        }, {
          key: "find",
          value: function find(name) {
            return this.groups[name];
          }
          /**
           * @param {?} name
           * @return {?}
           */

        }, {
          key: "destroy",
          value: function destroy(name) {
            /** @type {?} */
            var group = this.find(name);

            if (!group) {
              return;
            }

            group.drake && group.drake.destroy();
            delete this.groups[name];
          }
          /**
           * Creates a group with the specified name and options.
           *
           * Note: formerly known as `setOptions`
           * @template T
           * @param {?} name
           * @param {?} options
           * @return {?}
           */

        }, {
          key: "createGroup",
          value: function createGroup(name, options) {
            return this.add(new Group(name, this.drakeFactory.build([], options), options));
          }
          /**
           * @param {?} __0
           * @return {?}
           */

        }, {
          key: "handleModels",
          value: function handleModels(_ref27) {
            var _this32 = this;

            var name = _ref27.name,
                drake = _ref27.drake,
                options = _ref27.options;

            /** @type {?} */
            var dragElm;
            /** @type {?} */

            var dragIndex;
            /** @type {?} */

            var dropIndex;
            drake.on('remove', function (el, container, source) {
              if (!drake.models) {
                return;
              }
              /** @type {?} */


              var sourceModel = drake.models[drake.containers.indexOf(source)];
              sourceModel = sourceModel.slice(0);
              /** @type {?} */

              var item = sourceModel.splice(dragIndex, 1)[0]; // console.log('REMOVE');
              // console.log(sourceModel);

              _this32.dispatch$.next({
                event: EventTypes.RemoveModel,
                name: name,
                args: [el, container, source, item, sourceModel, dragIndex]
              });
            });
            drake.on('drag', function (el, source) {
              if (!drake.models) {
                return;
              }

              dragElm = el;
              dragIndex = _this32.domIndexOf(el, source);
            });
            drake.on('drop', function (dropElm, target, source, sibling) {
              if (!drake.models || !target) {
                return;
              }

              dropIndex = _this32.domIndexOf(dropElm, target);
              /** @type {?} */

              var sourceModel = drake.models[drake.containers.indexOf(source)];
              /** @type {?} */

              var targetModel = drake.models[drake.containers.indexOf(target)];
              /** @type {?} */

              var item;

              if (target === source) {
                sourceModel = sourceModel.slice(0);
                item = sourceModel.splice(dragIndex, 1)[0];
                sourceModel.splice(dropIndex, 0, item); // this was true before we cloned and updated sourceModel,
                // but targetModel still has the old value

                targetModel = sourceModel;
              } else {
                /** @type {?} */
                var isCopying = dragElm !== dropElm;
                item = sourceModel[dragIndex];

                if (isCopying) {
                  if (!options.copyItem) {
                    throw new Error("If you have enabled `copy` on a group, you must provide a `copyItem` function.");
                  }

                  item = options.copyItem(item);
                }

                if (!isCopying) {
                  sourceModel = sourceModel.slice(0);
                  sourceModel.splice(dragIndex, 1);
                }

                targetModel = targetModel.slice(0);
                targetModel.splice(dropIndex, 0, item);

                if (isCopying) {
                  try {
                    target.removeChild(dropElm);
                  } catch (e) {}
                }
              }

              _this32.dispatch$.next({
                event: EventTypes.DropModel,
                name: name,
                args: [dropElm, target, source, sibling, item, sourceModel, targetModel, dragIndex, dropIndex]
              });
            });
          }
          /**
           * @param {?} group
           * @return {?}
           */

        }, {
          key: "setupEvents",
          value: function setupEvents(group) {
            var _this33 = this;

            if (group.initEvents) {
              return;
            }

            group.initEvents = true;
            /** @type {?} */

            var name = group.name;
            /** @type {?} */

            var emitter = function emitter(event) {
              group.drake.on(event, function () {
                for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                  args[_key] = arguments[_key];
                }

                _this33.dispatch$.next({
                  event: event,
                  name: name,
                  args: args
                });
              });
            };

            AllEvents.forEach(emitter);
          }
          /**
           * @param {?} child
           * @param {?} parent
           * @return {?}
           */

        }, {
          key: "domIndexOf",
          value: function domIndexOf(child, parent) {
            return Array.prototype.indexOf.call(parent.children, child);
          }
        }]);

        return DragulaService;
      }();

      DragulaService.ɵfac = function DragulaService_Factory(t) {
        return new (t || DragulaService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](DrakeFactory, 8));
      };

      DragulaService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: DragulaService,
        factory: DragulaService.ɵfac
      });
      /** @nocollapse */

      DragulaService.ctorParameters = function () {
        return [{
          type: DrakeFactory,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }]
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DragulaService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
        }], function () {
          return [{
            type: DrakeFactory,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
            }]
          }];
        }, null);
      })();
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes} checked by tsc
       */


      var DragulaDirective = /*#__PURE__*/function () {
        /**
         * @param {?} el
         * @param {?} dragulaService
         */
        function DragulaDirective(el, dragulaService) {
          _classCallCheck(this, DragulaDirective);

          this.el = el;
          this.dragulaService = dragulaService;
          this.dragulaModelChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        }
        /**
         * @return {?}
         */


        _createClass(DragulaDirective, [{
          key: "ngOnChanges",

          /**
           * @param {?} changes
           * @return {?}
           */
          value: function ngOnChanges(changes) {
            if (changes && changes.dragula) {
              var _changes$dragula = changes.dragula,
                  prev = _changes$dragula.previousValue,
                  current = _changes$dragula.currentValue,
                  firstChange = _changes$dragula.firstChange;
              /** @type {?} */

              var hadPreviousValue = !!prev;
              /** @type {?} */

              var hasNewValue = !!current; // something -> null       =>  teardown only
              // something -> something  =>  teardown, then setup
              //      null -> something  =>  setup only
              //
              //      null -> null (precluded by fact of change being present)

              if (hadPreviousValue) {
                this.teardown(prev);
              }

              if (hasNewValue) {
                this.setup();
              }
            } else if (changes && changes.dragulaModel) {
              var _changes$dragulaModel = changes.dragulaModel,
                  _prev = _changes$dragulaModel.previousValue,
                  _current = _changes$dragulaModel.currentValue,
                  _firstChange = _changes$dragulaModel.firstChange;
              var drake = this.group.drake;

              if (this.dragula && drake) {
                drake.models = drake.models || [];
                /** @type {?} */

                var prevIndex = drake.models.indexOf(_prev);

                if (prevIndex !== -1) {
                  // delete the previous
                  drake.models.splice(prevIndex, 1); // maybe insert a new one at the same spot

                  if (!!_current) {
                    drake.models.splice(prevIndex, 0, _current);
                  }
                } else if (!!_current) {
                  // no previous one to remove; just push this one.
                  drake.models.push(_current);
                }
              }
            }
          }
          /**
           * @return {?}
           */

        }, {
          key: "setup",
          value: function setup() {
            var _this34 = this;

            /** @type {?} */
            var checkModel = function checkModel(group) {
              if (_this34.dragulaModel) {
                if (group.drake.models) {
                  group.drake.models.push(_this34.dragulaModel);
                } else {
                  group.drake.models = [_this34.dragulaModel];
                }
              }
            };
            /** @type {?} */


            var group = this.dragulaService.find(this.dragula);

            if (!group) {
              /** @type {?} */
              var options = {};
              group = this.dragulaService.createGroup(this.dragula, options);
            } // ensure model and container element are pushed


            checkModel(group);
            group.drake.containers.push(this.container);
            this.subscribe(this.dragula);
            this.group = group;
          }
          /**
           * @param {?} name
           * @return {?}
           */

        }, {
          key: "subscribe",
          value: function subscribe(name) {
            var _this35 = this;

            this.subs = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subscription"]();
            this.subs.add(this.dragulaService.dropModel(name).subscribe(function (_ref28) {
              var source = _ref28.source,
                  target = _ref28.target,
                  sourceModel = _ref28.sourceModel,
                  targetModel = _ref28.targetModel;

              if (source === _this35.el.nativeElement) {
                _this35.dragulaModelChange.emit(sourceModel);
              } else if (target === _this35.el.nativeElement) {
                _this35.dragulaModelChange.emit(targetModel);
              }
            }));
            this.subs.add(this.dragulaService.removeModel(name).subscribe(function (_ref29) {
              var source = _ref29.source,
                  sourceModel = _ref29.sourceModel;

              if (source === _this35.el.nativeElement) {
                _this35.dragulaModelChange.emit(sourceModel);
              }
            }));
          }
          /**
           * @param {?} groupName
           * @return {?}
           */

        }, {
          key: "teardown",
          value: function teardown(groupName) {
            if (this.subs) {
              this.subs.unsubscribe();
            }
            /** @type {?} */


            var group = this.dragulaService.find(groupName);

            if (group) {
              /** @type {?} */
              var itemToRemove = group.drake.containers.indexOf(this.el.nativeElement);

              if (itemToRemove !== -1) {
                group.drake.containers.splice(itemToRemove, 1);
              }

              if (this.dragulaModel && group.drake && group.drake.models) {
                /** @type {?} */
                var modelIndex = group.drake.models.indexOf(this.dragulaModel);

                if (modelIndex !== -1) {
                  group.drake.models.splice(modelIndex, 1);
                }
              }
            }
          }
          /**
           * @return {?}
           */

        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.teardown(this.dragula);
          }
        }, {
          key: "container",
          get: function get() {
            return this.el && this.el.nativeElement;
          }
        }]);

        return DragulaDirective;
      }();

      DragulaDirective.ɵfac = function DragulaDirective_Factory(t) {
        return new (t || DragulaDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](DragulaService));
      };

      DragulaDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
        type: DragulaDirective,
        selectors: [["", "dragula", ""]],
        inputs: {
          dragula: "dragula",
          dragulaModel: "dragulaModel"
        },
        outputs: {
          dragulaModelChange: "dragulaModelChange"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]]
      });
      /** @nocollapse */

      DragulaDirective.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        }, {
          type: DragulaService
        }];
      };

      DragulaDirective.propDecorators = {
        dragula: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        dragulaModel: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        dragulaModelChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DragulaDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
          args: [{
            selector: '[dragula]'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
          }, {
            type: DragulaService
          }];
        }, {
          dragulaModelChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          dragula: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          dragulaModel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }]
        });
      })();
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes} checked by tsc
       */


      var DragulaModule = /*#__PURE__*/function () {
        function DragulaModule() {
          _classCallCheck(this, DragulaModule);
        }

        _createClass(DragulaModule, null, [{
          key: "forRoot",

          /**
           * @return {?}
           */
          value: function forRoot() {
            return {
              ngModule: DragulaModule,
              providers: [DragulaService]
            };
          }
        }]);

        return DragulaModule;
      }();

      DragulaModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: DragulaModule
      });
      DragulaModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        factory: function DragulaModule_Factory(t) {
          return new (t || DragulaModule)();
        }
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](DragulaModule, {
          declarations: [DragulaDirective],
          exports: [DragulaDirective]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DragulaModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            exports: [DragulaDirective],
            declarations: [DragulaDirective]
          }]
        }], null, null);
      })();
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes} checked by tsc
       */

      /** @type {?} */


      var MockDrakeFactory = new DrakeFactory(function (containers, options) {
        return new MockDrake(containers, options);
      });
      /**
       * You can use MockDrake to simulate Drake events.
       *
       * The three methods that actually do anything are `on(event, listener)`,
       * `destroy()`, and a new method, `emit()`. Use `emit()` to manually emit Drake
       * events, and if you injected MockDrake properly with MockDrakeFactory or
       * mocked the DragulaService.find() method, then you can make ng2-dragula think
       * drags and drops are happening.
       *
       * Caveats:
       *
       * 1. YOU MUST MAKE THE DOM CHANGES YOURSELF.
       * 2. REPEAT: YOU MUST MAKE THE DOM CHANGES YOURSELF.
       *    That means `source.removeChild(el)`, and `target.insertBefore(el)`.
       * 3. None of the other methods do anything.
       *    That's ok, because ng2-dragula doesn't use them.
       */

      var MockDrake = /*#__PURE__*/function () {
        /**
         * @param {?=} containers A list of container elements.
         * @param {?=} options These will NOT be used. At all.
         * @param {?=} models Nonstandard, but useful for testing using `new MockDrake()` directly.
         *               Note, default value is undefined, like a real Drake. Don't change that.
         */
        function MockDrake() {
          var containers = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
          var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          var models = arguments.length > 2 ? arguments[2] : undefined;

          _classCallCheck(this, MockDrake);

          this.containers = containers;
          this.options = options;
          this.models = models;
          /* Doesn't represent anything meaningful. */

          this.dragging = false;
          this.emitter$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
          this.subs = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subscription"]();
        }
        /**
         * @param {?} item
         * @return {?}
         */


        _createClass(MockDrake, [{
          key: "start",
          value: function start(item) {
            this.dragging = true;
          }
          /**
           * @return {?}
           */

        }, {
          key: "end",
          value: function end() {
            this.dragging = false;
          }
          /**
           * @param {?=} revert
           * @return {?}
           */

        }, {
          key: "cancel",
          value: function cancel(revert) {
            this.dragging = false;
          }
          /**
           * @return {?}
           */

        }, {
          key: "remove",
          value: function remove() {
            this.dragging = false;
          }
          /**
           * @param {?} event
           * @param {?} callback
           * @return {?}
           */

        }, {
          key: "on",
          value: function on(event, callback) {
            this.subs.add(this.emitter$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (_ref30) {
              var eventType = _ref30.eventType;
              return eventType === event;
            })).subscribe(function (_ref31) {
              var args = _ref31.args;
              callback.apply(void 0, _toConsumableArray(args));
            }));
          }
          /**
           * @return {?}
           */

        }, {
          key: "destroy",
          value: function destroy() {
            this.subs.unsubscribe();
          }
          /**
           * This is the most useful method. You can use it to manually fire events that would normally
           * be fired by a real drake.
           *
           * You're likely most interested in firing `drag`, `remove` and `drop`, the three events
           * DragulaService uses to implement [dragulaModel].
           *
           * See https://github.com/bevacqua/dragula#drakeon-events for what you should emit (and in what order).
           *
           * (Note also, firing dropModel and removeModel won't work. You would have to mock DragulaService for that.)
           * @param {?} eventType
           * @param {...?} args
           * @return {?}
           */

        }, {
          key: "emit",
          value: function emit(eventType) {
            for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
              args[_key2 - 1] = arguments[_key2];
            }

            this.emitter$.next({
              eventType: eventType,
              args: args
            });
          }
        }]);

        return MockDrake;
      }();
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes} checked by tsc
       */

      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes} checked by tsc
       */
      //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmcyLWRyYWd1bGEuanMiLCJzb3VyY2VzIjpbIm5nMi1kcmFndWxhL0dyb3VwLnRzIiwibmcyLWRyYWd1bGEvRXZlbnRUeXBlcy50cyIsIm5nMi1kcmFndWxhL0RyYWtlRmFjdG9yeS50cyIsIm5nMi1kcmFndWxhL2NvbXBvbmVudHMvZHJhZ3VsYS5zZXJ2aWNlLnRzIiwibmcyLWRyYWd1bGEvY29tcG9uZW50cy9kcmFndWxhLmRpcmVjdGl2ZS50cyIsIm5nMi1kcmFndWxhL2NvbXBvbmVudHMvZHJhZ3VsYS5tb2R1bGUudHMiLCJuZzItZHJhZ3VsYS9Nb2NrRHJha2UudHMiXSwibmFtZXMiOlsiKC8qKiBAdHlwZSB7P30gKi8gKGRyYWd1bGFFeHB0KSkuZGVmYXVsdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFHQTtBQUFjO0FBQ2I7QUFBdUI7QUFDZDtBQUNXO0FBQ2pCLElBRkYsWUFDUyxNQUNBLE9BQ0E7QUFBVyxRQUZYLFNBQUksR0FBSixJQUFJO0FBQUUsUUFDTixVQUFLLEdBQUwsS0FBSztBQUFFLFFBQ1AsWUFBTyxHQUFQLE9BQU87QUFBRSwwQkFKVyxLQUFLO0FBQ3BDLEtBSU07QUFDTixDQUFDO0FBQ0Q7QUFBQztBQUFJO0FBQWtDO0FBQXlDO0FBQUk7QUFBc0I7QUFBcUIsSUNWM0gsUUFBUyxRQUFRO0FBQ3JCLElBQUksUUFBUyxRQUFRO0FBQ3JCLElBQUksTUFBTyxNQUFNO0FBQ2pCLElBQUksU0FBVSxTQUFTO0FBQ3ZCLElBQUksTUFBTyxNQUFNO0FBQ2pCLElBQUksS0FBTSxLQUFLO0FBQ2YsSUFBSSxNQUFPLE1BQU07QUFDakIsSUFBSSxRQUFTLFFBQVE7QUFDckIsSUFBSSxRQUFTLFFBQVE7QUFDckIsSUFBSSxXQUFZLFdBQVc7QUFDM0IsSUFBSSxhQUFjLGFBQWE7QUFDL0I7QUFFQTtBQUFBLE1BQWEsU0FBUyxHQUFpQixNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLHNCQUFJLFVBQVUsbUJBQUMsQ0FBUSxFQUFlLENBQUEsQ0FBQyxDQUFDO0FBQzVHO0FBQ0E7QUFBSTtBQUFrQztBQUF5QztBQ2QvRTtBQUNBLE1BQWEsT0FBTyxHQUE2Q0Esb0JBQTRCLElBQUksV0FBVyxDQUFDO0FBSTdHO0FBQXFCO0FBQ3BCO0FBQXlCO0FBQVEsSUFBaEMsWUFBb0IsUUFBc0IsT0FBTztBQUFJLFFBQWpDLFVBQUssR0FBTCxLQUFLLENBQXdCO0FBQUMsS0FBRztBQUN2RCxDQUFDO0FBQ0Q7QUFBQztBQUFJO0FBQWtDO0FBQXlDO0FDVmhGO0FBV0EsTUFBTSxXQUFXLEdBQUcsQ0FDbEIsU0FBcUIsRUFDckIsY0FBa0MsRUFDbEMsU0FBNkIsS0FDMUIsQ0FBQyxLQUEyQjtBQUFPLElBQ3RDLE9BQU8sS0FBSyxDQUFDLElBQUksQ0FDZixNQUFNLENBQUMsQ0FBQyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUU7QUFDM0IsUUFBTSxPQUFPLEtBQUssS0FBSyxTQUFTO0FBQ2hDLGdCQUFjLGNBQWMsS0FBSyxTQUFTLElBQUksSUFBSSxLQUFLLGNBQWMsQ0FBQyxDQUFDO0FBQ3ZFLEtBQUssQ0FBQyxFQUNGLEdBQUcsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxLQUFLLFNBQVMsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FDL0MsQ0FBQztBQUNKLENBQUMsQ0FBQTtBQUNEO0FBQ0EsTUFBTSwwQkFBMEIsR0FDOUIsQ0FBQyxJQUFZLEVBQUUsQ0FBQyxFQUFFLEVBQUUsU0FBUyxFQUFFLE1BQU0sQ0FBOEIsTUFDaEUsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDO0FBQ3RDO0FBRVE7QUFBUTtBQUVDO0FBQVEsSUFnRnZCLFlBQWlDLGVBQTZCLElBQUk7QUFDcEUsUUFEbUMsaUJBQVksR0FBWixZQUFZLENBQXFCO0FBQUMseUJBOUUvQyxJQUFJLE9BQU8sRUFBWTtBQUM3QyxvQkFDZ0IsQ0FBQyxTQUFrQixLQUFLLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUN2RCxXQUFXLENBQ1QsVUFBVSxDQUFDLElBQUksRUFDZixTQUFTLEVBQ1QsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLEVBQUUsTUFBTSxDQUFxQixNQUFNLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUNuRSxDQUNGO0FBQ0gsdUJBQ21CLENBQUMsU0FBa0IsS0FBSyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FDMUQsV0FBVyxDQUNULFVBQVUsQ0FBQyxPQUFPLEVBQ2xCLFNBQVMsRUFDVCxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBWSxNQUFNLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQzFDLENBQ0Y7QUFDSCxvQkFDZ0IsQ0FBQyxTQUFrQixLQUFLLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUN2RCxXQUFXLENBQ1QsVUFBVSxDQUFDLElBQUksRUFDZixTQUFTLEVBQ1QsQ0FBQyxJQUFJLEVBQUUsQ0FDTCxFQUFFLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxPQUFPLENBQ1U7QUFDN0MsWUFBUSxPQUFPLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxDQUFDO0FBQ3JELFNBQU8sQ0FBQyxDQUNMO0FBQ0gsaUNBRUksQ0FBQyxTQUFxQixLQUN0QixDQUFDLFNBQWtCLEtBQ25CLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUNqQixXQUFXLENBQUMsU0FBUyxFQUFFLFNBQVMsRUFBRSwwQkFBMEIsQ0FBQyxDQUM5RDtBQUNMLHNCQUNrQixJQUFJLENBQUMsaUJBQWlCLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQztBQUMzRCxzQkFBa0IsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUM7QUFDM0Qsc0JBQWtCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDO0FBQzNELG9CQUFnQixJQUFJLENBQUMsaUJBQWlCLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQztBQUN2RCxtQkFBZSxJQUFJLENBQUMsaUJBQWlCLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQztBQUNyRCxzQkFDa0IsQ0FBQyxTQUFrQixLQUFLLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUN6RCxXQUFXLENBQ1QsVUFBVSxDQUFDLE1BQU0sRUFDakIsU0FBUyxFQUNULENBQUMsSUFBSSxFQUFFLENBQ0wsS0FBSyxFQUFFLFFBQVEsRUFBRSxTQUFTLENBQ1k7QUFDOUMsWUFBUSxPQUFPLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLENBQUE7QUFDbkQsU0FBTyxDQUFDLENBQ0w7QUFDSCx5QkFDcUIsQ0FBVSxTQUFrQixLQUFLLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUNyRSxXQUFXLENBQ1QsVUFBVSxDQUFDLFNBQVMsRUFDcEIsU0FBUyxFQUNULENBQUMsSUFBSSxFQUFFLENBQ0wsRUFBRSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsV0FBVyxFQUFFLFdBQVcsRUFBRSxXQUFXLENBQ25CO0FBQzFFLFlBQVEsT0FBTyxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxXQUFXLEVBQUUsV0FBVyxFQUFFLFdBQVcsRUFBRSxDQUFBO0FBQzlHLFNBQU8sQ0FBQyxDQUNMO0FBQ0gsMkJBQ3VCLENBQVUsU0FBa0IsS0FBSyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FDdkUsV0FBVyxDQUNULFVBQVUsQ0FBQyxXQUFXLEVBQ3RCLFNBQVMsRUFDVCxDQUFDLElBQUksRUFBRSxDQUNMLEVBQUUsRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsV0FBVyxDQUNUO0FBQ3BELFlBQVEsT0FBTyxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLFdBQVcsRUFBRSxDQUFBO0FBQzlFLFNBQU8sQ0FDRixDQUNGO0FBQ0gsc0JBQzJDLEVBQUU7QUFDN0MsUUFFSSxJQUFJLElBQUksQ0FBQyxZQUFZLEtBQUssSUFBSSxFQUFFO0FBQ3BDLFlBQU0sSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO0FBQzdDLFNBQUs7QUFDTCxLQUFHO0FBQ0g7QUFDTztBQUNGO0FBQXdCO0FBQ2pCO0FBQVEsSUFEWCxHQUFHLENBQUMsS0FBWTtBQUFJO0FBQ1gsUUFBZCxJQUFJLGFBQWEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUM5QyxRQUFJLElBQUksYUFBYSxFQUFFO0FBQ3ZCLFlBQU0sTUFBTSxJQUFJLEtBQUssQ0FBQyxnQkFBZ0IsR0FBRyxLQUFLLENBQUMsSUFBSSxHQUFHLG1CQUFtQixDQUFDLENBQUM7QUFDM0UsU0FBSztBQUNMLFFBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsS0FBSyxDQUFDO0FBQ3BDLFFBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUM3QixRQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDNUIsUUFBSSxPQUFPLEtBQUssQ0FBQztBQUNqQjtBQUVDO0FBQVE7QUFBdUI7QUFDbEI7QUFBUSxJQURiLElBQUksQ0FBQyxJQUFZO0FBQUksUUFDMUIsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQzdCO0FBRUM7QUFBUTtBQUF1QjtBQUNwQjtBQUFRLElBRFgsT0FBTyxDQUFDLElBQVk7QUFBSTtBQUNkLFFBQWYsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUNoQyxRQUFJLElBQUksQ0FBQyxLQUFLLEVBQUU7QUFDaEIsWUFBTSxPQUFPO0FBQ2IsU0FBSztBQUNMLFFBQUksS0FBSyxDQUFDLEtBQUssSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDO0FBQ3pDLFFBQUksT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQzdCO0FBRUM7QUFDRTtBQUVIO0FBQU87QUFFSjtBQUFtQjtBQUF1QjtBQUEwQjtBQUM5RDtBQUFRLElBRFIsV0FBVyxDQUFVLElBQVksRUFBRSxPQUEwQjtBQUFJLFFBQ3RFLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEtBQUssQ0FDdkIsSUFBSSxFQUNKLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLEVBQUUsRUFBRSxPQUFPLENBQUMsRUFDcEMsT0FBTyxDQUNSLENBQUMsQ0FBQztBQUNQO0FBRUM7QUFBUTtBQUFzQjtBQUFtQjtBQUFRLElBQWhELFlBQVksQ0FBQyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFTO0FBQUk7QUFDdkMsUUFBZixJQUFJLE9BQU8sQ0FBTTtBQUNyQjtBQUF5QixRQUFyQixJQUFJLFNBQVMsQ0FBUztBQUMxQjtBQUF5QixRQUFyQixJQUFJLFNBQVMsQ0FBUztBQUMxQixRQUFJLEtBQUssQ0FBQyxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUMsRUFBTyxFQUFFLFNBQWMsRUFBRSxNQUFXO0FBQzVELFlBQU0sSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUU7QUFDekIsZ0JBQVEsT0FBTztBQUNmLGFBQU87QUFDUDtBQUE2QixZQUF2QixJQUFJLFdBQVcsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7QUFDdkUsWUFBTSxXQUFXLEdBQUcsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUFDO0FBQ3pCLFlBQVgsTUFBTSxJQUFJLEdBQUcsV0FBVyxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDdkQ7QUFDTTtBQUNNLFlBQU4sSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUM7QUFDMUIsZ0JBQVEsS0FBSyxFQUFFLFVBQVUsQ0FBQyxXQUFXO0FBQ3JDLGdCQUFRLElBQUk7QUFDWixnQkFBUSxJQUFJLEVBQUUsQ0FBRSxFQUFFLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLFNBQVMsQ0FBRTtBQUNyRSxhQUFPLENBQUMsQ0FBQztBQUNULFNBQUssQ0FBQyxDQUFDO0FBQ1AsUUFBSSxLQUFLLENBQUMsRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQU8sRUFBRSxNQUFXO0FBQzFDLFlBQU0sSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUU7QUFDekIsZ0JBQVEsT0FBTztBQUNmLGFBQU87QUFDUCxZQUFNLE9BQU8sR0FBRyxFQUFFLENBQUM7QUFDbkIsWUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFDOUMsU0FBSyxDQUFDLENBQUM7QUFDUCxRQUFJLEtBQUssQ0FBQyxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUMsT0FBWSxFQUFFLE1BQWUsRUFBRSxNQUFlLEVBQUUsT0FBaUI7QUFDdkYsWUFBTSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sSUFBSSxDQUFDLE1BQU0sRUFBRTtBQUNwQyxnQkFBUSxPQUFPO0FBQ2YsYUFBTztBQUNQLFlBQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0FBQ25EO0FBQTZCLFlBQXZCLElBQUksV0FBVyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztBQUN2RTtBQUE2QixZQUF2QixJQUFJLFdBQVcsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7QUFDdkU7QUFBNkIsWUFFdkIsSUFBSSxJQUFJLENBQU07QUFDcEIsWUFBTSxJQUFJLE1BQU0sS0FBSyxNQUFNLEVBQUU7QUFDN0IsZ0JBQVEsV0FBVyxHQUFHLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUE7QUFDMUMsZ0JBQVEsSUFBSSxHQUFHLFdBQVcsQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ25ELGdCQUFRLFdBQVcsQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztBQUMvQztBQUNRO0FBQ1EsZ0JBQVIsV0FBVyxHQUFHLFdBQVcsQ0FBQztBQUNsQyxhQUFPO0FBQUMsaUJBQUs7QUFDYjtBQUFpQyxnQkFBekIsSUFBSSxTQUFTLEdBQUcsT0FBTyxLQUFLLE9BQU8sQ0FBQztBQUM1QyxnQkFBUSxJQUFJLEdBQUcsV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBQ3RDLGdCQUFRLElBQUksU0FBUyxFQUFFO0FBQ3ZCLG9CQUFVLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFO0FBQ2pDLHdCQUFZLE1BQU0sSUFBSSxLQUFLLENBQUMsZ0ZBQWdGLENBQUMsQ0FBQTtBQUM3RyxxQkFBVztBQUNYLG9CQUFVLElBQUksR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ3hDLGlCQUFTO0FBQ1QsZ0JBQ1EsSUFBSSxDQUFDLFNBQVMsRUFBRTtBQUN4QixvQkFBVSxXQUFXLEdBQUcsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQTtBQUM1QyxvQkFBVSxXQUFXLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUMzQyxpQkFBUztBQUNULGdCQUFRLFdBQVcsR0FBRyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFBO0FBQzFDLGdCQUFRLFdBQVcsQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztBQUMvQyxnQkFBUSxJQUFJLFNBQVMsRUFBRTtBQUN2QixvQkFBVSxJQUFJO0FBQ2Qsd0JBQVksTUFBTSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUN4QyxxQkFBVztBQUFDLG9CQUFBLE9BQU8sQ0FBQyxFQUFFLEdBQUU7QUFDeEIsaUJBQVM7QUFDVCxhQUFPO0FBQ1AsWUFBTSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQztBQUMxQixnQkFBUSxLQUFLLEVBQUUsVUFBVSxDQUFDLFNBQVM7QUFDbkMsZ0JBQVEsSUFBSTtBQUNaLGdCQUFRLElBQUksRUFBRSxDQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsU0FBUyxDQUFFO0FBQ3hHLGFBQU8sQ0FBQyxDQUFDO0FBQ1QsU0FBSyxDQUFDLENBQUM7QUFDUDtBQUVDO0FBQVE7QUFBd0I7QUFDekI7QUFBUSxJQUROLFdBQVcsQ0FBQyxLQUFZO0FBQUksUUFDbEMsSUFBSSxLQUFLLENBQUMsVUFBVSxFQUFFO0FBQzFCLFlBQU0sT0FBTztBQUNiLFNBQUs7QUFDTCxRQUFJLEtBQUssQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO0FBQzVCO0FBQXlCLFFBQXJCLE1BQU0sSUFBSSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUM7QUFDNUI7QUFBeUIsUUFDckIsSUFBSSxPQUFPLEdBQUcsQ0FBQyxLQUFpQjtBQUNwQyxZQUFNLEtBQUssQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDLEdBQUcsSUFBVztBQUMzQyxnQkFBUSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztBQUNuRCxhQUFPLENBQUMsQ0FBQztBQUNULFNBQUssQ0FBQztBQUNOLFFBQUksU0FBUyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUMvQjtBQUVDO0FBQVE7QUFBd0I7QUFDNUI7QUFBbUI7QUFBUSxJQUR0QixVQUFVLENBQUMsS0FBVSxFQUFFLE1BQVc7QUFBSSxRQUM1QyxPQUFPLEtBQUssQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLEtBQUssQ0FBQyxDQUFDO0FBQ2hFO0FBRUE7MENBM05DLFVBQVU7MEdBQ1Q7QUFBQztBQUFtQjtBQUVTLFlBMUJ0QixZQUFZLHVCQTBHTCxRQUFRO0FBQU07Ozs7O2tDQUFFO0FBQUM7QUFBQztBQUFJO0FBQ3RDO0FBQ0c7QUNsSEg7QUFBeUI7QUFBUTtBQUFxQjtBQUFpQztBQUFRLGdCQW1CbEUsRUFBYyxFQUFVLGNBQThCO0FBQ25GLFFBRDZCLE9BQUUsR0FBRixFQUFFLENBQVk7QUFBQyxRQUFTLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtBQUFDLGtDQVQ1QyxJQUFJLFlBQVksRUFBUztBQUNqRTtBQUNLO0FBQVE7QUFFWjtBQUFRLFFBQUssU0FBUztBQUFLLFFBQ3hCLE9BQU8sSUFBSSxDQUFDLEVBQUUsSUFBSSxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQztBQUM1QztBQUNFO0FBQVE7QUFFQztBQUFtQjtBQUFRLElBRzdCLFdBQVcsQ0FBQyxPQUE4RDtBQUFJLFFBQ25GLElBQUksT0FBTyxJQUFJLE9BQU8sQ0FBQyxPQUFPLEVBQUU7QUFDcEMsWUFBTSxNQUFNLEVBQUUsYUFBYSxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUUsT0FBTyxFQUFFLFdBQVcsRUFBRSxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUM7QUFDMUY7QUFBNkIsWUFBdkIsSUFBSSxnQkFBZ0IsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDO0FBQ3BDO0FBQTZCLFlBQXZCLElBQUksV0FBVyxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUM7QUFDbEM7QUFDTTtBQUNNO0FBRUg7QUFBZTtBQUV4QixZQURNLElBQUksZ0JBQWdCLEVBQUU7QUFDNUIsZ0JBQVEsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUM1QixhQUFPO0FBQ1AsWUFBTSxJQUFJLFdBQVcsRUFBRTtBQUN2QixnQkFBUSxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7QUFDckIsYUFBTztBQUNQLFNBQUs7QUFBQyxhQUFLLElBQUksT0FBTyxJQUFJLE9BQU8sQ0FBQyxZQUFZLEVBQUU7QUFDaEQsWUFHTSxNQUFNLEVBQUUsYUFBYSxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUUsT0FBTyxFQUFFLFdBQVcsRUFBRSxHQUFHLE9BQU8sQ0FBQyxZQUFZLENBQUM7QUFDL0YsWUFBTSxNQUFNLEVBQUUsS0FBSyxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztBQUNuQyxZQUFNLElBQUksSUFBSSxDQUFDLE9BQU8sSUFBSSxLQUFLLEVBQUU7QUFDakMsZ0JBQVEsS0FBSyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUMsTUFBTSxJQUFJLEVBQUUsQ0FBQztBQUMxQztBQUFpQyxnQkFBekIsSUFBSSxTQUFTLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDbkQsZ0JBQVEsSUFBSSxTQUFTLEtBQUssQ0FBQyxDQUFDLEVBQUU7QUFDOUI7QUFDVSxvQkFBQSxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDNUM7QUFDVSxvQkFBQSxJQUFJLENBQUMsQ0FBQyxPQUFPLEVBQUU7QUFDekIsd0JBQVksS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFLENBQUMsRUFBRSxPQUFPLENBQUMsQ0FBQztBQUN2RCxxQkFBVztBQUNYLGlCQUFTO0FBQUMscUJBQUssSUFBSSxDQUFDLENBQUMsT0FBTyxFQUFFO0FBQzlCO0FBQ1Usb0JBQUEsS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDckMsaUJBQVM7QUFDVCxhQUFPO0FBQ1AsU0FBSztBQUNMO0FBRUM7QUFBUTtBQUFtQjtBQUFRLElBRTNCLEtBQUs7QUFBSztBQUNBLFFBQWYsSUFBSSxVQUFVLEdBQUcsQ0FBQyxLQUFZO0FBQ2xDLFlBQU0sSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO0FBQzdCLGdCQUFRLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUU7QUFDaEMsb0JBQVUsS0FBSyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztBQUNyRCxpQkFBUztBQUFDLHFCQUFLO0FBQ2Ysb0JBQVUsS0FBSyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7QUFDbkQsaUJBQVM7QUFDVCxhQUFPO0FBQ1AsU0FBSyxDQUFDO0FBQ047QUFDd0IsUUFDcEIsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQ3ZELFFBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtBQUNoQjtBQUNLLFlBREMsSUFBSSxPQUFPLEdBQUcsRUFBRSxDQUFDO0FBQ3ZCLFlBQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFDckUsU0FBSztBQUNMO0FBRUcsUUFBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDdEIsUUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBQ2hELFFBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDakMsUUFDSSxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztBQUN2QjtBQUVDO0FBQVE7QUFBdUI7QUFDaEI7QUFBUSxJQURmLFNBQVMsQ0FBQyxJQUFZO0FBQy9CLFFBQUksSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO0FBQ25DLFFBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQ1gsSUFBSSxDQUFDLGNBQWM7QUFDekIsYUFBTyxTQUFTLENBQUMsSUFBSSxDQUFDO0FBQ3RCLGFBQU8sU0FBUyxDQUFDLENBQUMsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxXQUFXLEVBQUU7QUFDOUQsWUFBUSxJQUFJLE1BQU0sS0FBSyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRTtBQUM5QyxnQkFBVSxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0FBQ3BELGFBQVM7QUFBQyxpQkFBSyxJQUFJLE1BQU0sS0FBSyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRTtBQUNyRCxnQkFBVSxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0FBQ3BELGFBQVM7QUFDVCxTQUFPLENBQUMsQ0FDSCxDQUFDO0FBQ04sUUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FDWCxJQUFJLENBQUMsY0FBYztBQUN6QixhQUFPLFdBQVcsQ0FBQyxJQUFJLENBQUM7QUFDeEIsYUFBTyxTQUFTLENBQUMsQ0FBQyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7QUFDekMsWUFBUSxJQUFJLE1BQU0sS0FBSyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRTtBQUM5QyxnQkFBVSxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0FBQ3BELGFBQVM7QUFDVCxTQUFPLENBQUMsQ0FDSCxDQUFDO0FBQ047QUFFQztBQUFRO0FBQTRCO0FBQzFCO0FBQVEsSUFEVixRQUFRLENBQUMsU0FBaUI7QUFBSSxRQUNuQyxJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUU7QUFDbkIsWUFBTSxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0FBQzlCLFNBQUs7QUFDTDtBQUF5QixRQUFyQixNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUN0RCxRQUFJLElBQUksS0FBSyxFQUFFO0FBQ2Y7QUFBNkIsWUFBdkIsTUFBTSxZQUFZLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLENBQUM7QUFDakYsWUFBTSxJQUFJLFlBQVksS0FBSyxDQUFDLENBQUMsRUFBRTtBQUMvQixnQkFBUSxLQUFLLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQ3ZELGFBQU87QUFDUCxZQUFNLElBQUksSUFBSSxDQUFDLFlBQVksSUFBSSxLQUFLLENBQUMsS0FBSyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFO0FBQ2xFO0FBQWlDLGdCQUF6QixJQUFJLFVBQVUsR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0FBQ3ZFLGdCQUFRLElBQUksVUFBVSxLQUFLLENBQUMsQ0FBQyxFQUFFO0FBQy9CLG9CQUFVLEtBQUssQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDbkQsaUJBQVM7QUFDVCxhQUFPO0FBQ1AsU0FBSztBQUNMO0FBRUM7QUFBUTtBQUFtQjtBQUN2QixJQURJLFdBQVc7QUFBSyxRQUNyQixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUNoQztBQUVDOzRDQW5JQSxTQUFTLFNBQUMsRUFBQyxRQUFRLEVBQUUsV0FBVyxFQUFDOzZRQUM3QjtBQUFDO0FBQW1CO0FBQ3RCLFlBUmdDLFVBQVU7QUFBSSxZQUN4QyxjQUFjO0FBQUc7QUFBRztBQUNoQixzQkFNVixLQUFLO0FBQUssMkJBQ1YsS0FBSztBQUFLLGlDQUNWLE1BQU07QUFBSTs7Ozs7Ozs7OztvQkFBRTtBQUFDO0FBQUM7QUFBSTtBQUFrQztBQUUzQjtBQ1o1QjtBQUFzQjtBQUFRO0FBQW1CO0FBQVEsSUFTdkQsT0FBTyxPQUFPO0FBQUssUUFDakIsT0FBTztBQUNYLFlBQU0sUUFBUSxFQUFFLGFBQWE7QUFDN0IsWUFBTSxTQUFTLEVBQUUsQ0FBQyxjQUFjLENBQUM7QUFDakMsU0FBSyxDQUFBO0FBQ0wsS0FBRztBQUNIO3lDQVhDLFFBQVEsU0FBQztLQUNSLE9BQU8sRUFBRSxDQUFDLGdCQUFnQixDQUFDLGtCQUMzQixZQUFZLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxlQUNqQzs7Ozs7Ozs7MEJBQ0k7QUFBQztBQUFDO0FBQUk7QUFDSztBQUVkO0FDWEY7QUFPQSxNQUFhLGdCQUFnQixHQUFHLElBQUksWUFBWSxDQUFDLENBQUMsVUFBVSxFQUFFLE9BQU87QUFDckUsSUFBRSxPQUFPLElBQUksU0FBUyxDQUFDLFVBQVUsRUFBRSxPQUFPLENBQUMsQ0FBQztBQUM1QyxDQUFDLENBQUMsQ0FBQztBQUNIO0FBQ0c7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDRjtBQUFrQjtBQUFRO0FBRUU7QUFDTTtBQUM0QztBQUNJO0FBQVEsSUFFeEYsWUFDUyxhQUF3QixFQUFFLEVBQzFCLFVBQTBCLEVBQUUsRUFDNUI7QUFBVSxRQUZWLGVBQVUsR0FBVixVQUFVO0FBQUUsUUFDWixZQUFPLEdBQVAsT0FBTztBQUFFLFFBQ1QsV0FBTSxHQUFOLE1BQU07QUFBRTtBQUdpQix3QkFDZCxLQUFLO0FBQzNCLHdCQXFCcUIsSUFBSSxPQUFPLEVBQTBDO0FBQzFFLG9CQUNpQixJQUFJLFlBQVksRUFBRTtBQUNuQyxLQTVCTTtBQUNOO0FBQ087QUFBdUI7QUFDNUI7QUFBUSxJQUdSLEtBQUssQ0FBQyxJQUFhO0FBQUksUUFDckIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7QUFDekIsS0FBRztBQUNIO0FBQVE7QUFBbUI7QUFDckIsSUFBSixHQUFHO0FBQUssUUFDTixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztBQUMxQixLQUFHO0FBQ0g7QUFBUTtBQUNIO0FBQW1CO0FBQ3hCLElBQ0UsTUFBTSxDQUFDLE1BQVk7QUFDckIsUUFBSSxJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztBQUMxQixLQUFHO0FBQ0g7QUFBUTtBQUFtQjtBQUNyQixJQUFKLE1BQU07QUFBSyxRQUNULElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO0FBQzFCLEtBQUc7QUFDSDtBQUNPO0FBQXdCO0FBQ3hCO0FBQW1CO0FBQVEsSUFJaEMsRUFBRSxDQUFDLEtBQWEsRUFBRSxRQUFrQjtBQUFJLFFBQ3RDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRO0FBQy9CLGFBQU8sSUFBSSxDQUNILE1BQU0sQ0FBQyxDQUFDLEVBQUUsU0FBUyxFQUFFLEtBQUssU0FBUyxLQUFLLEtBQUssQ0FBQyxDQUMvQztBQUNQLGFBQU8sU0FBUyxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUU7QUFDMUIsWUFBUSxRQUFRLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQztBQUMxQixTQUFPLENBQUMsQ0FBQyxDQUFDO0FBQ1YsS0FBRztBQUNIO0FBQ087QUFDQTtBQUFRLElBRGIsT0FBTztBQUFLLFFBQ1YsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztBQUM1QixLQUFHO0FBQ0g7QUFFQztBQUNFO0FBRUg7QUFBTztBQUNFO0FBRUg7QUFBTztBQUVIO0FBQU87QUFFSjtBQUE0QjtBQUN0QjtBQUFtQjtBQUNwQyxJQUZBLElBQUksQ0FBQyxTQUFxQixFQUFFLEdBQUcsSUFBVztBQUM1QyxRQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUE7QUFDM0MsS0FBRztBQUNILENBQ0M7QUFDRDtBQUFDO0FBQUk7QUFBa0M7QUFBeUM7QUFBSTtBQUFDO0FBQUk7QUFBa0M7QUFBeUM7QUFBSTtBQUFDOztBTjlGQSxBQUVBLEFBQ0EsQUFDQSxBQUNBLEFBRkEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBSkEsQUFBQSxBQUtBLEFBQ0EsQUNUQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFHQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQ1pBLEFBQ0EsQUFBQSxBQUFBLEFBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFJQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUNUQSxBQVdBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFFQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBcUZBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQTlFQSxBQUFBLEFBQUEsQUFBQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUNBLEFBRUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUNBLEFBRUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUdBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBRUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBRUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFDQSxBQUNBLEFBRUEsQUFBQSxBQUdBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUNBLEFBR0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUdBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBR0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQVFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFHQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBR0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFHQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBR0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBRUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQ0EsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUdBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBRUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUdBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUF4TkEsQUFBQSxBQXZCQSxBQUFBLEFBMEdBLEFBQUEsQUNoSEEsQUFtQkEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQVRBLEFBQUEsQUFBQSxBQUFBLEFBSUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQU9BLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBTUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBSUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFDQSxBQUNBLEFBS0EsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFDQSxBQUNBLEFBQUEsQUFHQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUdBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBR0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFHQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFDQSxBQUNBLEFBR0EsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBaElBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFOQSxBQUFBLEFBQ0EsQUFBQSxBQU9BLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQ1ZBLEFBU0EsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBVkEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUNQQSxBQU9BLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQWtCQSxBQU9BLEFBQ0EsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQ0EsQUFGQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFJQSxBQUFBLEFBc0JBLEFBQUEsQUFBQSxBQUFBLEFBRUEsQUFBQSxBQUFBLEFBQUEsQUEzQkEsQUFNQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFFQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUlBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUVBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBT0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUVBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFhQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUVBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRHJha2VXaXRoTW9kZWxzIH0gZnJvbSBcIi4vRHJha2VXaXRoTW9kZWxzXCI7XG5pbXBvcnQgeyBEcmFndWxhT3B0aW9ucyB9IGZyb20gXCIuL0RyYWd1bGFPcHRpb25zXCI7XG5cbmV4cG9ydCBjbGFzcyBHcm91cCB7XG4gIHB1YmxpYyBpbml0RXZlbnRzOiBib29sZWFuID0gZmFsc2U7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBuYW1lOiBzdHJpbmcsXG4gICAgcHVibGljIGRyYWtlOiBEcmFrZVdpdGhNb2RlbHMsXG4gICAgcHVibGljIG9wdGlvbnM6IERyYWd1bGFPcHRpb25zXG4gICkge31cbn1cbiIsImV4cG9ydCBlbnVtIEV2ZW50VHlwZXMge1xuICAgIENhbmNlbCA9IFwiY2FuY2VsXCIsXG4gICAgQ2xvbmVkID0gXCJjbG9uZWRcIixcbiAgICBEcmFnID0gXCJkcmFnXCIsXG4gICAgRHJhZ0VuZCA9IFwiZHJhZ2VuZFwiLFxuICAgIERyb3AgPSBcImRyb3BcIixcbiAgICBPdXQgPSBcIm91dFwiLFxuICAgIE92ZXIgPSBcIm92ZXJcIixcbiAgICBSZW1vdmUgPSBcInJlbW92ZVwiLFxuICAgIFNoYWRvdyA9IFwic2hhZG93XCIsXG4gICAgRHJvcE1vZGVsID0gXCJkcm9wTW9kZWxcIixcbiAgICBSZW1vdmVNb2RlbCA9IFwicmVtb3ZlTW9kZWxcIixcbn1cblxuZXhwb3J0IGNvbnN0IEFsbEV2ZW50czogRXZlbnRUeXBlc1tdID0gT2JqZWN0LmtleXMoRXZlbnRUeXBlcykubWFwKGsgPT4gRXZlbnRUeXBlc1trIGFzIGFueV0gYXMgRXZlbnRUeXBlcyk7XG5cbiIsImltcG9ydCB7IERyYWd1bGFPcHRpb25zIH0gZnJvbSAnLi9EcmFndWxhT3B0aW9ucyc7XG5pbXBvcnQgeyBEcmFrZVdpdGhNb2RlbHMgfSBmcm9tICcuL0RyYWtlV2l0aE1vZGVscyc7XG5pbXBvcnQgKiBhcyBkcmFndWxhRXhwdCBmcm9tICdkcmFndWxhJztcbmV4cG9ydCBjb25zdCBkcmFndWxhOiAoY29udGFpbmVycz86IGFueSwgb3B0aW9ucz86IGFueSkgPT4gYW55ID0gKGRyYWd1bGFFeHB0IGFzIGFueSkuZGVmYXVsdCB8fCBkcmFndWxhRXhwdDtcblxuZXhwb3J0IHR5cGUgRHJha2VCdWlsZGVyID0gKGNvbnRhaW5lcnM6IGFueVtdLCBvcHRpb25zOiBEcmFndWxhT3B0aW9ucykgPT4gRHJha2VXaXRoTW9kZWxzO1xuXG5leHBvcnQgY2xhc3MgRHJha2VGYWN0b3J5IHtcbiAgY29uc3RydWN0b3IgKHB1YmxpYyBidWlsZDogRHJha2VCdWlsZGVyID0gZHJhZ3VsYSkge31cbn1cbiIsImltcG9ydCB7IEluamVjdGFibGUsIE9wdGlvbmFsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBHcm91cCB9IGZyb20gJy4uL0dyb3VwJztcbmltcG9ydCB7IERyYWd1bGFPcHRpb25zIH0gZnJvbSAnLi4vRHJhZ3VsYU9wdGlvbnMnO1xuaW1wb3J0IHsgU3ViamVjdCwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyLCBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBFdmVudFR5cGVzLCBBbGxFdmVudHMgfSBmcm9tICcuLi9FdmVudFR5cGVzJztcbmltcG9ydCB7IERyYWtlRmFjdG9yeSB9IGZyb20gJy4uL0RyYWtlRmFjdG9yeSc7XG5cbnR5cGUgRmlsdGVyUHJvamVjdG9yPFQgZXh0ZW5kcyB7IG5hbWU6IHN0cmluZzsgfT4gPSAobmFtZTogc3RyaW5nLCBhcmdzOiBhbnlbXSkgPT4gVDtcbnR5cGUgRGlzcGF0Y2ggPSB7IGV2ZW50OiBFdmVudFR5cGVzOyBuYW1lOiBzdHJpbmc7IGFyZ3M6IGFueVtdOyB9O1xuXG5jb25zdCBmaWx0ZXJFdmVudCA9IDxUIGV4dGVuZHMgeyBuYW1lOiBzdHJpbmc7IH0+KFxuICBldmVudFR5cGU6IEV2ZW50VHlwZXMsXG4gIGZpbHRlckRyYWdUeXBlOiBzdHJpbmcgfCB1bmRlZmluZWQsXG4gIHByb2plY3RvcjogRmlsdGVyUHJvamVjdG9yPFQ+XG4pID0+IChpbnB1dDogT2JzZXJ2YWJsZTxEaXNwYXRjaD4pOiBPYnNlcnZhYmxlPFQ+ID0+IHtcbiAgcmV0dXJuIGlucHV0LnBpcGUoXG4gICAgZmlsdGVyKCh7IGV2ZW50LCBuYW1lIH0pID0+IHtcbiAgICAgIHJldHVybiBldmVudCA9PT0gZXZlbnRUeXBlXG4gICAgICAgICAgJiYgKGZpbHRlckRyYWdUeXBlID09PSB1bmRlZmluZWQgfHwgbmFtZSA9PT0gZmlsdGVyRHJhZ1R5cGUpO1xuICAgIH0pLFxuICAgIG1hcCgoeyBuYW1lLCBhcmdzIH0pID0+IHByb2plY3RvcihuYW1lLCBhcmdzKSlcbiAgKTtcbn1cblxuY29uc3QgZWxDb250YWluZXJTb3VyY2VQcm9qZWN0b3IgPVxuICAobmFtZTogc3RyaW5nLCBbZWwsIGNvbnRhaW5lciwgc291cmNlXTogW0VsZW1lbnQsIEVsZW1lbnQsIEVsZW1lbnRdKSA9PlxuICAgICh7IG5hbWUsIGVsLCBjb250YWluZXIsIHNvdXJjZSB9KTtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIERyYWd1bGFTZXJ2aWNlIHtcblxuICAvKiBodHRwczovL2dpdGh1Yi5jb20vYmV2YWNxdWEvZHJhZ3VsYSNkcmFrZW9uLWV2ZW50cyAqL1xuXG4gIHByaXZhdGUgZGlzcGF0Y2gkID0gbmV3IFN1YmplY3Q8RGlzcGF0Y2g+KCk7XG5cbiAgcHVibGljIGRyYWcgPSAoZ3JvdXBOYW1lPzogc3RyaW5nKSA9PiB0aGlzLmRpc3BhdGNoJC5waXBlKFxuICAgIGZpbHRlckV2ZW50KFxuICAgICAgRXZlbnRUeXBlcy5EcmFnLFxuICAgICAgZ3JvdXBOYW1lLFxuICAgICAgKG5hbWUsIFtlbCwgc291cmNlXTogW0VsZW1lbnQsIEVsZW1lbnRdKSA9PiAoeyBuYW1lLCBlbCwgc291cmNlIH0pXG4gICAgKVxuICApO1xuXG4gIHB1YmxpYyBkcmFnZW5kID0gKGdyb3VwTmFtZT86IHN0cmluZykgPT4gdGhpcy5kaXNwYXRjaCQucGlwZShcbiAgICBmaWx0ZXJFdmVudChcbiAgICAgIEV2ZW50VHlwZXMuRHJhZ0VuZCxcbiAgICAgIGdyb3VwTmFtZSxcbiAgICAgIChuYW1lLCBbZWxdOiBbRWxlbWVudF0pID0+ICh7IG5hbWUsIGVsIH0pXG4gICAgKVxuICApO1xuXG4gIHB1YmxpYyBkcm9wID0gKGdyb3VwTmFtZT86IHN0cmluZykgPT4gdGhpcy5kaXNwYXRjaCQucGlwZShcbiAgICBmaWx0ZXJFdmVudChcbiAgICAgIEV2ZW50VHlwZXMuRHJvcCxcbiAgICAgIGdyb3VwTmFtZSxcbiAgICAgIChuYW1lLCBbXG4gICAgICAgIGVsLCB0YXJnZXQsIHNvdXJjZSwgc2libGluZ1xuICAgICAgXTogW0VsZW1lbnQsIEVsZW1lbnQsIEVsZW1lbnQsIEVsZW1lbnRdKSA9PiB7XG4gICAgICAgIHJldHVybiB7IG5hbWUsIGVsLCB0YXJnZXQsIHNvdXJjZSwgc2libGluZyB9O1xuICAgICAgfSlcbiAgKTtcblxuICBwcml2YXRlIGVsQ29udGFpbmVyU291cmNlID1cbiAgICAoZXZlbnRUeXBlOiBFdmVudFR5cGVzKSA9PlxuICAgIChncm91cE5hbWU/OiBzdHJpbmcpID0+XG4gICAgdGhpcy5kaXNwYXRjaCQucGlwZShcbiAgICAgIGZpbHRlckV2ZW50KGV2ZW50VHlwZSwgZ3JvdXBOYW1lLCBlbENvbnRhaW5lclNvdXJjZVByb2plY3RvcilcbiAgICApO1xuXG4gIHB1YmxpYyBjYW5jZWwgPSB0aGlzLmVsQ29udGFpbmVyU291cmNlKEV2ZW50VHlwZXMuQ2FuY2VsKTtcbiAgcHVibGljIHJlbW92ZSA9IHRoaXMuZWxDb250YWluZXJTb3VyY2UoRXZlbnRUeXBlcy5SZW1vdmUpO1xuICBwdWJsaWMgc2hhZG93ID0gdGhpcy5lbENvbnRhaW5lclNvdXJjZShFdmVudFR5cGVzLlNoYWRvdyk7XG4gIHB1YmxpYyBvdmVyID0gdGhpcy5lbENvbnRhaW5lclNvdXJjZShFdmVudFR5cGVzLk92ZXIpO1xuICBwdWJsaWMgb3V0ID0gdGhpcy5lbENvbnRhaW5lclNvdXJjZShFdmVudFR5cGVzLk91dCk7XG5cbiAgcHVibGljIGNsb25lZCA9IChncm91cE5hbWU/OiBzdHJpbmcpID0+IHRoaXMuZGlzcGF0Y2gkLnBpcGUoXG4gICAgZmlsdGVyRXZlbnQoXG4gICAgICBFdmVudFR5cGVzLkNsb25lZCxcbiAgICAgIGdyb3VwTmFtZSxcbiAgICAgIChuYW1lLCBbXG4gICAgICAgIGNsb25lLCBvcmlnaW5hbCwgY2xvbmVUeXBlXG4gICAgICBdOiBbRWxlbWVudCwgRWxlbWVudCwgJ21pcnJvcicgfCAnY29weSddKSA9PiB7XG4gICAgICAgIHJldHVybiB7IG5hbWUsIGNsb25lLCBvcmlnaW5hbCwgY2xvbmVUeXBlIH1cbiAgICAgIH0pXG4gICk7XG5cbiAgcHVibGljIGRyb3BNb2RlbCA9IDxUID0gYW55Pihncm91cE5hbWU/OiBzdHJpbmcpID0+IHRoaXMuZGlzcGF0Y2gkLnBpcGUoXG4gICAgZmlsdGVyRXZlbnQoXG4gICAgICBFdmVudFR5cGVzLkRyb3BNb2RlbCxcbiAgICAgIGdyb3VwTmFtZSxcbiAgICAgIChuYW1lLCBbXG4gICAgICAgIGVsLCB0YXJnZXQsIHNvdXJjZSwgc2libGluZywgaXRlbSwgc291cmNlTW9kZWwsIHRhcmdldE1vZGVsLCBzb3VyY2VJbmRleCwgdGFyZ2V0SW5kZXhcbiAgICAgIF06IFtFbGVtZW50LCBFbGVtZW50LCBFbGVtZW50LCBFbGVtZW50LCBULCBUW10sIFRbXSwgbnVtYmVyLCBudW1iZXJdKSA9PiB7XG4gICAgICAgIHJldHVybiB7IG5hbWUsIGVsLCB0YXJnZXQsIHNvdXJjZSwgc2libGluZywgaXRlbSwgc291cmNlTW9kZWwsIHRhcmdldE1vZGVsLCBzb3VyY2VJbmRleCwgdGFyZ2V0SW5kZXggfVxuICAgICAgfSlcbiAgKTtcblxuICBwdWJsaWMgcmVtb3ZlTW9kZWwgPSA8VCA9IGFueT4oZ3JvdXBOYW1lPzogc3RyaW5nKSA9PiB0aGlzLmRpc3BhdGNoJC5waXBlKFxuICAgIGZpbHRlckV2ZW50KFxuICAgICAgRXZlbnRUeXBlcy5SZW1vdmVNb2RlbCxcbiAgICAgIGdyb3VwTmFtZSxcbiAgICAgIChuYW1lLCBbXG4gICAgICAgIGVsLCBjb250YWluZXIsIHNvdXJjZSwgaXRlbSwgc291cmNlTW9kZWwsIHNvdXJjZUluZGV4XG4gICAgICBdOiBbRWxlbWVudCwgRWxlbWVudCwgRWxlbWVudCwgVCwgVFtdLCBudW1iZXJdKSA9PiB7XG4gICAgICAgIHJldHVybiB7IG5hbWUsIGVsLCBjb250YWluZXIsIHNvdXJjZSwgaXRlbSwgc291cmNlTW9kZWwsIHNvdXJjZUluZGV4IH1cbiAgICAgIH1cbiAgICApXG4gICk7XG5cbiAgcHJpdmF0ZSBncm91cHM6IHsgW2s6IHN0cmluZ106IEdyb3VwIH0gPSB7fTtcblxuICBjb25zdHJ1Y3RvciAoQE9wdGlvbmFsKCkgcHJpdmF0ZSBkcmFrZUZhY3Rvcnk6IERyYWtlRmFjdG9yeSA9IG51bGwpIHtcbiAgICBpZiAodGhpcy5kcmFrZUZhY3RvcnkgPT09IG51bGwpIHtcbiAgICAgIHRoaXMuZHJha2VGYWN0b3J5ID0gbmV3IERyYWtlRmFjdG9yeSgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBQdWJsaWMgbWFpbmx5IGZvciB0ZXN0aW5nIHB1cnBvc2VzLiBQcmVmZXIgYGNyZWF0ZUdyb3VwKClgLiAqL1xuICBwdWJsaWMgYWRkKGdyb3VwOiBHcm91cCk6IEdyb3VwIHtcbiAgICBsZXQgZXhpc3RpbmdHcm91cCA9IHRoaXMuZmluZChncm91cC5uYW1lKTtcbiAgICBpZiAoZXhpc3RpbmdHcm91cCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdHcm91cCBuYW1lZDogXCInICsgZ3JvdXAubmFtZSArICdcIiBhbHJlYWR5IGV4aXN0cy4nKTtcbiAgICB9XG4gICAgdGhpcy5ncm91cHNbZ3JvdXAubmFtZV0gPSBncm91cDtcbiAgICB0aGlzLmhhbmRsZU1vZGVscyhncm91cCk7XG4gICAgdGhpcy5zZXR1cEV2ZW50cyhncm91cCk7XG4gICAgcmV0dXJuIGdyb3VwO1xuICB9XG5cbiAgcHVibGljIGZpbmQobmFtZTogc3RyaW5nKTogR3JvdXAge1xuICAgIHJldHVybiB0aGlzLmdyb3Vwc1tuYW1lXTtcbiAgfVxuXG4gIHB1YmxpYyBkZXN0cm95KG5hbWU6IHN0cmluZyk6IHZvaWQge1xuICAgIGxldCBncm91cCA9IHRoaXMuZmluZChuYW1lKTtcbiAgICBpZiAoIWdyb3VwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGdyb3VwLmRyYWtlICYmIGdyb3VwLmRyYWtlLmRlc3Ryb3koKTtcbiAgICBkZWxldGUgdGhpcy5ncm91cHNbbmFtZV07XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyBhIGdyb3VwIHdpdGggdGhlIHNwZWNpZmllZCBuYW1lIGFuZCBvcHRpb25zLlxuICAgKlxuICAgKiBOb3RlOiBmb3JtZXJseSBrbm93biBhcyBgc2V0T3B0aW9uc2BcbiAgICovXG4gIHB1YmxpYyBjcmVhdGVHcm91cDxUID0gYW55PihuYW1lOiBzdHJpbmcsIG9wdGlvbnM6IERyYWd1bGFPcHRpb25zPFQ+KTogR3JvdXAge1xuICAgIHJldHVybiB0aGlzLmFkZChuZXcgR3JvdXAoXG4gICAgICBuYW1lLFxuICAgICAgdGhpcy5kcmFrZUZhY3RvcnkuYnVpbGQoW10sIG9wdGlvbnMpLFxuICAgICAgb3B0aW9uc1xuICAgICkpO1xuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVNb2RlbHMoeyBuYW1lLCBkcmFrZSwgb3B0aW9ucyB9OiBHcm91cCk6IHZvaWQge1xuICAgIGxldCBkcmFnRWxtOiBhbnk7XG4gICAgbGV0IGRyYWdJbmRleDogbnVtYmVyO1xuICAgIGxldCBkcm9wSW5kZXg6IG51bWJlcjtcbiAgICBkcmFrZS5vbigncmVtb3ZlJywgKGVsOiBhbnksIGNvbnRhaW5lcjogYW55LCBzb3VyY2U6IGFueSkgPT4ge1xuICAgICAgaWYgKCFkcmFrZS5tb2RlbHMpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgbGV0IHNvdXJjZU1vZGVsID0gZHJha2UubW9kZWxzW2RyYWtlLmNvbnRhaW5lcnMuaW5kZXhPZihzb3VyY2UpXTtcbiAgICAgIHNvdXJjZU1vZGVsID0gc291cmNlTW9kZWwuc2xpY2UoMCk7IC8vIGNsb25lIGl0XG4gICAgICBjb25zdCBpdGVtID0gc291cmNlTW9kZWwuc3BsaWNlKGRyYWdJbmRleCwgMSlbMF07XG4gICAgICAvLyBjb25zb2xlLmxvZygnUkVNT1ZFJyk7XG4gICAgICAvLyBjb25zb2xlLmxvZyhzb3VyY2VNb2RlbCk7XG4gICAgICB0aGlzLmRpc3BhdGNoJC5uZXh0KHtcbiAgICAgICAgZXZlbnQ6IEV2ZW50VHlwZXMuUmVtb3ZlTW9kZWwsXG4gICAgICAgIG5hbWUsXG4gICAgICAgIGFyZ3M6IFsgZWwsIGNvbnRhaW5lciwgc291cmNlLCBpdGVtLCBzb3VyY2VNb2RlbCwgZHJhZ0luZGV4IF1cbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIGRyYWtlLm9uKCdkcmFnJywgKGVsOiBhbnksIHNvdXJjZTogYW55KSA9PiB7XG4gICAgICBpZiAoIWRyYWtlLm1vZGVscykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBkcmFnRWxtID0gZWw7XG4gICAgICBkcmFnSW5kZXggPSB0aGlzLmRvbUluZGV4T2YoZWwsIHNvdXJjZSk7XG4gICAgfSk7XG4gICAgZHJha2Uub24oJ2Ryb3AnLCAoZHJvcEVsbTogYW55LCB0YXJnZXQ6IEVsZW1lbnQsIHNvdXJjZTogRWxlbWVudCwgc2libGluZz86IEVsZW1lbnQpID0+IHtcbiAgICAgIGlmICghZHJha2UubW9kZWxzIHx8ICF0YXJnZXQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgZHJvcEluZGV4ID0gdGhpcy5kb21JbmRleE9mKGRyb3BFbG0sIHRhcmdldCk7XG4gICAgICBsZXQgc291cmNlTW9kZWwgPSBkcmFrZS5tb2RlbHNbZHJha2UuY29udGFpbmVycy5pbmRleE9mKHNvdXJjZSldO1xuICAgICAgbGV0IHRhcmdldE1vZGVsID0gZHJha2UubW9kZWxzW2RyYWtlLmNvbnRhaW5lcnMuaW5kZXhPZih0YXJnZXQpXTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdEUk9QJyk7XG4gICAgICAvLyBjb25zb2xlLmxvZyhzb3VyY2VNb2RlbCk7XG4gICAgICBsZXQgaXRlbTogYW55O1xuICAgICAgaWYgKHRhcmdldCA9PT0gc291cmNlKSB7XG4gICAgICAgIHNvdXJjZU1vZGVsID0gc291cmNlTW9kZWwuc2xpY2UoMClcbiAgICAgICAgaXRlbSA9IHNvdXJjZU1vZGVsLnNwbGljZShkcmFnSW5kZXgsIDEpWzBdO1xuICAgICAgICBzb3VyY2VNb2RlbC5zcGxpY2UoZHJvcEluZGV4LCAwLCBpdGVtKTtcbiAgICAgICAgLy8gdGhpcyB3YXMgdHJ1ZSBiZWZvcmUgd2UgY2xvbmVkIGFuZCB1cGRhdGVkIHNvdXJjZU1vZGVsLFxuICAgICAgICAvLyBidXQgdGFyZ2V0TW9kZWwgc3RpbGwgaGFzIHRoZSBvbGQgdmFsdWVcbiAgICAgICAgdGFyZ2V0TW9kZWwgPSBzb3VyY2VNb2RlbDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxldCBpc0NvcHlpbmcgPSBkcmFnRWxtICE9PSBkcm9wRWxtO1xuICAgICAgICBpdGVtID0gc291cmNlTW9kZWxbZHJhZ0luZGV4XTtcbiAgICAgICAgaWYgKGlzQ29weWluZykge1xuICAgICAgICAgIGlmICghb3B0aW9ucy5jb3B5SXRlbSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSWYgeW91IGhhdmUgZW5hYmxlZCBgY29weWAgb24gYSBncm91cCwgeW91IG11c3QgcHJvdmlkZSBhIGBjb3B5SXRlbWAgZnVuY3Rpb24uXCIpXG4gICAgICAgICAgfVxuICAgICAgICAgIGl0ZW0gPSBvcHRpb25zLmNvcHlJdGVtKGl0ZW0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFpc0NvcHlpbmcpIHtcbiAgICAgICAgICBzb3VyY2VNb2RlbCA9IHNvdXJjZU1vZGVsLnNsaWNlKDApXG4gICAgICAgICAgc291cmNlTW9kZWwuc3BsaWNlKGRyYWdJbmRleCwgMSk7XG4gICAgICAgIH1cbiAgICAgICAgdGFyZ2V0TW9kZWwgPSB0YXJnZXRNb2RlbC5zbGljZSgwKVxuICAgICAgICB0YXJnZXRNb2RlbC5zcGxpY2UoZHJvcEluZGV4LCAwLCBpdGVtKTtcbiAgICAgICAgaWYgKGlzQ29weWluZykge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICB0YXJnZXQucmVtb3ZlQ2hpbGQoZHJvcEVsbSk7XG4gICAgICAgICAgfSBjYXRjaCAoZSkge31cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdGhpcy5kaXNwYXRjaCQubmV4dCh7XG4gICAgICAgIGV2ZW50OiBFdmVudFR5cGVzLkRyb3BNb2RlbCxcbiAgICAgICAgbmFtZSxcbiAgICAgICAgYXJnczogWyBkcm9wRWxtLCB0YXJnZXQsIHNvdXJjZSwgc2libGluZywgaXRlbSwgc291cmNlTW9kZWwsIHRhcmdldE1vZGVsLCBkcmFnSW5kZXgsIGRyb3BJbmRleCBdXG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgc2V0dXBFdmVudHMoZ3JvdXA6IEdyb3VwKTogdm9pZCB7XG4gICAgaWYgKGdyb3VwLmluaXRFdmVudHMpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZ3JvdXAuaW5pdEV2ZW50cyA9IHRydWU7XG4gICAgY29uc3QgbmFtZSA9IGdyb3VwLm5hbWU7XG4gICAgbGV0IHRoYXQ6IGFueSA9IHRoaXM7XG4gICAgbGV0IGVtaXR0ZXIgPSAoZXZlbnQ6IEV2ZW50VHlwZXMpID0+IHtcbiAgICAgIGdyb3VwLmRyYWtlLm9uKGV2ZW50LCAoLi4uYXJnczogYW55W10pID0+IHtcbiAgICAgICAgdGhpcy5kaXNwYXRjaCQubmV4dCh7IGV2ZW50LCBuYW1lLCBhcmdzIH0pO1xuICAgICAgfSk7XG4gICAgfTtcbiAgICBBbGxFdmVudHMuZm9yRWFjaChlbWl0dGVyKTtcbiAgfVxuXG4gIHByaXZhdGUgZG9tSW5kZXhPZihjaGlsZDogYW55LCBwYXJlbnQ6IGFueSk6IGFueSB7XG4gICAgcmV0dXJuIEFycmF5LnByb3RvdHlwZS5pbmRleE9mLmNhbGwocGFyZW50LmNoaWxkcmVuLCBjaGlsZCk7XG4gIH1cbn1cbiIsImltcG9ydCB7IERpcmVjdGl2ZSwgSW5wdXQsIE91dHB1dCwgRWxlbWVudFJlZiwgT25Jbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSwgU2ltcGxlQ2hhbmdlLCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERyYWd1bGFTZXJ2aWNlIH0gZnJvbSAnLi9kcmFndWxhLnNlcnZpY2UnO1xuaW1wb3J0IHsgRHJha2VXaXRoTW9kZWxzIH0gZnJvbSAnLi4vRHJha2VXaXRoTW9kZWxzJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgR3JvdXAgfSBmcm9tICcuLi9Hcm91cCc7XG5cbkBEaXJlY3RpdmUoe3NlbGVjdG9yOiAnW2RyYWd1bGFdJ30pXG5leHBvcnQgY2xhc3MgRHJhZ3VsYURpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcbiAgQElucHV0KCkgcHVibGljIGRyYWd1bGE6IHN0cmluZztcbiAgQElucHV0KCkgcHVibGljIGRyYWd1bGFNb2RlbDogYW55W107XG4gIEBPdXRwdXQoKSBwdWJsaWMgZHJhZ3VsYU1vZGVsQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnlbXT4oKTtcblxuICBwcml2YXRlIHN1YnM6IFN1YnNjcmlwdGlvbjtcblxuICBwcml2YXRlIGdldCBjb250YWluZXIoKTogSFRNTEVsZW1lbnQge1xuICAgIHJldHVybiB0aGlzLmVsICYmIHRoaXMuZWwubmF0aXZlRWxlbWVudDtcbiAgfVxuICBwcml2YXRlIGdyb3VwOiBHcm91cDtcblxuICBwdWJsaWMgY29uc3RydWN0b3IocHJpdmF0ZSBlbDogRWxlbWVudFJlZiwgcHJpdmF0ZSBkcmFndWxhU2VydmljZTogRHJhZ3VsYVNlcnZpY2UpIHtcbiAgfVxuXG4gIHB1YmxpYyBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiB7ZHJhZ3VsYT86IFNpbXBsZUNoYW5nZSwgZHJhZ3VsYU1vZGVsPzogU2ltcGxlQ2hhbmdlfSk6IHZvaWQge1xuICAgIGlmIChjaGFuZ2VzICYmIGNoYW5nZXMuZHJhZ3VsYSkge1xuICAgICAgY29uc3QgeyBwcmV2aW91c1ZhbHVlOiBwcmV2LCBjdXJyZW50VmFsdWU6IGN1cnJlbnQsIGZpcnN0Q2hhbmdlIH0gPSBjaGFuZ2VzLmRyYWd1bGE7XG4gICAgICBsZXQgaGFkUHJldmlvdXNWYWx1ZSA9ICEhcHJldjtcbiAgICAgIGxldCBoYXNOZXdWYWx1ZSA9ICEhY3VycmVudDtcbiAgICAgIC8vIHNvbWV0aGluZyAtPiBudWxsICAgICAgID0+ICB0ZWFyZG93biBvbmx5XG4gICAgICAvLyBzb21ldGhpbmcgLT4gc29tZXRoaW5nICA9PiAgdGVhcmRvd24sIHRoZW4gc2V0dXBcbiAgICAgIC8vICAgICAgbnVsbCAtPiBzb21ldGhpbmcgID0+ICBzZXR1cCBvbmx5XG4gICAgICAvL1xuICAgICAgLy8gICAgICBudWxsIC0+IG51bGwgKHByZWNsdWRlZCBieSBmYWN0IG9mIGNoYW5nZSBiZWluZyBwcmVzZW50KVxuICAgICAgaWYgKGhhZFByZXZpb3VzVmFsdWUpIHtcbiAgICAgICAgdGhpcy50ZWFyZG93bihwcmV2KTtcbiAgICAgIH1cbiAgICAgIGlmIChoYXNOZXdWYWx1ZSkge1xuICAgICAgICB0aGlzLnNldHVwKCk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChjaGFuZ2VzICYmIGNoYW5nZXMuZHJhZ3VsYU1vZGVsKSB7XG4gICAgICAvLyB0aGlzIGNvZGUgb25seSBydW5zIHdoZW4geW91J3JlIG5vdCBjaGFuZ2luZyB0aGUgZ3JvdXAgbmFtZVxuICAgICAgLy8gYmVjYXVzZSBpZiB5b3UncmUgY2hhbmdpbmcgdGhlIGdyb3VwIG5hbWUsIHlvdSdsbCBiZSBkb2luZyBzZXR1cCBvciB0ZWFyZG93blxuICAgICAgLy8gaXQgYWxzbyBvbmx5IHJ1bnMgaWYgdGhlcmUgaXMgYSBncm91cCBuYW1lIHRvIGF0dGFjaCB0by5cbiAgICAgIGNvbnN0IHsgcHJldmlvdXNWYWx1ZTogcHJldiwgY3VycmVudFZhbHVlOiBjdXJyZW50LCBmaXJzdENoYW5nZSB9ID0gY2hhbmdlcy5kcmFndWxhTW9kZWw7XG4gICAgICBjb25zdCB7IGRyYWtlIH0gPSB0aGlzLmdyb3VwO1xuICAgICAgaWYgKHRoaXMuZHJhZ3VsYSAmJiBkcmFrZSkge1xuICAgICAgICBkcmFrZS5tb2RlbHMgPSBkcmFrZS5tb2RlbHMgfHwgW107XG4gICAgICAgIGxldCBwcmV2SW5kZXggPSBkcmFrZS5tb2RlbHMuaW5kZXhPZihwcmV2KTtcbiAgICAgICAgaWYgKHByZXZJbmRleCAhPT0gLTEpIHtcbiAgICAgICAgICAvLyBkZWxldGUgdGhlIHByZXZpb3VzXG4gICAgICAgICAgZHJha2UubW9kZWxzLnNwbGljZShwcmV2SW5kZXgsIDEpO1xuICAgICAgICAgIC8vIG1heWJlIGluc2VydCBhIG5ldyBvbmUgYXQgdGhlIHNhbWUgc3BvdFxuICAgICAgICAgIGlmICghIWN1cnJlbnQpIHtcbiAgICAgICAgICAgIGRyYWtlLm1vZGVscy5zcGxpY2UocHJldkluZGV4LCAwLCBjdXJyZW50KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoISFjdXJyZW50KSB7XG4gICAgICAgICAgLy8gbm8gcHJldmlvdXMgb25lIHRvIHJlbW92ZTsganVzdCBwdXNoIHRoaXMgb25lLlxuICAgICAgICAgIGRyYWtlLm1vZGVscy5wdXNoKGN1cnJlbnQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gY2FsbCBuZ09uSW5pdCAnc2V0dXAnIGJlY2F1c2Ugd2Ugd2FudCB0byBjYWxsIGl0IGluIG5nT25DaGFuZ2VzXG4gIC8vIGFuZCBpdCB3b3VsZCBvdGhlcndpc2UgcnVuIHR3aWNlXG4gIHB1YmxpYyBzZXR1cCgpOiB2b2lkIHtcbiAgICBsZXQgY2hlY2tNb2RlbCA9IChncm91cDogR3JvdXApID0+IHtcbiAgICAgIGlmICh0aGlzLmRyYWd1bGFNb2RlbCkge1xuICAgICAgICBpZiAoZ3JvdXAuZHJha2UubW9kZWxzKSB7XG4gICAgICAgICAgZ3JvdXAuZHJha2UubW9kZWxzLnB1c2godGhpcy5kcmFndWxhTW9kZWwpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGdyb3VwLmRyYWtlLm1vZGVscyA9IFt0aGlzLmRyYWd1bGFNb2RlbF07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgLy8gZmluZCBvciBjcmVhdGUgYSBncm91cFxuICAgIGxldCBncm91cCA9IHRoaXMuZHJhZ3VsYVNlcnZpY2UuZmluZCh0aGlzLmRyYWd1bGEpO1xuICAgIGlmICghZ3JvdXApIHtcbiAgICAgIGxldCBvcHRpb25zID0ge307XG4gICAgICBncm91cCA9IHRoaXMuZHJhZ3VsYVNlcnZpY2UuY3JlYXRlR3JvdXAodGhpcy5kcmFndWxhLCBvcHRpb25zKTtcbiAgICB9XG5cbiAgICAvLyBlbnN1cmUgbW9kZWwgYW5kIGNvbnRhaW5lciBlbGVtZW50IGFyZSBwdXNoZWRcbiAgICBjaGVja01vZGVsKGdyb3VwKTtcbiAgICBncm91cC5kcmFrZS5jb250YWluZXJzLnB1c2godGhpcy5jb250YWluZXIpO1xuICAgIHRoaXMuc3Vic2NyaWJlKHRoaXMuZHJhZ3VsYSk7XG5cbiAgICB0aGlzLmdyb3VwID0gZ3JvdXA7XG4gIH1cblxuICBwdWJsaWMgc3Vic2NyaWJlKG5hbWU6IHN0cmluZykge1xuICAgIHRoaXMuc3VicyA9IG5ldyBTdWJzY3JpcHRpb24oKTtcbiAgICB0aGlzLnN1YnMuYWRkKFxuICAgICAgdGhpcy5kcmFndWxhU2VydmljZVxuICAgICAgLmRyb3BNb2RlbChuYW1lKVxuICAgICAgLnN1YnNjcmliZSgoeyBzb3VyY2UsIHRhcmdldCwgc291cmNlTW9kZWwsIHRhcmdldE1vZGVsIH0pID0+IHtcbiAgICAgICAgaWYgKHNvdXJjZSA9PT0gdGhpcy5lbC5uYXRpdmVFbGVtZW50KSB7XG4gICAgICAgICAgdGhpcy5kcmFndWxhTW9kZWxDaGFuZ2UuZW1pdChzb3VyY2VNb2RlbCk7XG4gICAgICAgIH0gZWxzZSBpZiAodGFyZ2V0ID09PSB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQpIHtcbiAgICAgICAgICB0aGlzLmRyYWd1bGFNb2RlbENoYW5nZS5lbWl0KHRhcmdldE1vZGVsKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICApO1xuICAgIHRoaXMuc3Vicy5hZGQoXG4gICAgICB0aGlzLmRyYWd1bGFTZXJ2aWNlXG4gICAgICAucmVtb3ZlTW9kZWwobmFtZSlcbiAgICAgIC5zdWJzY3JpYmUoKHsgc291cmNlLCBzb3VyY2VNb2RlbCB9KSA9PiB7XG4gICAgICAgIGlmIChzb3VyY2UgPT09IHRoaXMuZWwubmF0aXZlRWxlbWVudCkge1xuICAgICAgICAgIHRoaXMuZHJhZ3VsYU1vZGVsQ2hhbmdlLmVtaXQoc291cmNlTW9kZWwpO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICBwdWJsaWMgdGVhcmRvd24oZ3JvdXBOYW1lOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5zdWJzKSB7XG4gICAgICB0aGlzLnN1YnMudW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gICAgY29uc3QgZ3JvdXAgPSB0aGlzLmRyYWd1bGFTZXJ2aWNlLmZpbmQoZ3JvdXBOYW1lKTtcbiAgICBpZiAoZ3JvdXApIHtcbiAgICAgIGNvbnN0IGl0ZW1Ub1JlbW92ZSA9IGdyb3VwLmRyYWtlLmNvbnRhaW5lcnMuaW5kZXhPZih0aGlzLmVsLm5hdGl2ZUVsZW1lbnQpO1xuICAgICAgaWYgKGl0ZW1Ub1JlbW92ZSAhPT0gLTEpIHtcbiAgICAgICAgZ3JvdXAuZHJha2UuY29udGFpbmVycy5zcGxpY2UoaXRlbVRvUmVtb3ZlLCAxKTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLmRyYWd1bGFNb2RlbCAmJiBncm91cC5kcmFrZSAmJiBncm91cC5kcmFrZS5tb2RlbHMpIHtcbiAgICAgICAgbGV0IG1vZGVsSW5kZXggPSBncm91cC5kcmFrZS5tb2RlbHMuaW5kZXhPZih0aGlzLmRyYWd1bGFNb2RlbCk7XG4gICAgICAgIGlmIChtb2RlbEluZGV4ICE9PSAtMSkge1xuICAgICAgICAgIGdyb3VwLmRyYWtlLm1vZGVscy5zcGxpY2UobW9kZWxJbmRleCwgMSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwdWJsaWMgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy50ZWFyZG93bih0aGlzLmRyYWd1bGEpO1xuICB9XG5cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEcmFndWxhRGlyZWN0aXZlIH0gZnJvbSAnLi9kcmFndWxhLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBEcmFndWxhU2VydmljZSB9IGZyb20gJy4vZHJhZ3VsYS5zZXJ2aWNlJztcblxuQE5nTW9kdWxlKHtcbiAgZXhwb3J0czogW0RyYWd1bGFEaXJlY3RpdmVdLFxuICBkZWNsYXJhdGlvbnM6IFtEcmFndWxhRGlyZWN0aXZlXSxcbn0pXG5leHBvcnQgY2xhc3MgRHJhZ3VsYU1vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogRHJhZ3VsYU1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW0RyYWd1bGFTZXJ2aWNlXVxuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgU3ViamVjdCwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBEcmFrZVdpdGhNb2RlbHMgfSBmcm9tICcuL0RyYWtlV2l0aE1vZGVscyc7XG5pbXBvcnQgeyBmaWx0ZXIgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBFdmVudFR5cGVzIH0gZnJvbSAnLi9FdmVudFR5cGVzJztcbmltcG9ydCB7IERyYWd1bGFPcHRpb25zIH0gZnJvbSAnLi9EcmFndWxhT3B0aW9ucyc7XG5pbXBvcnQgeyBEcmFrZUZhY3RvcnkgfSBmcm9tICcuL0RyYWtlRmFjdG9yeSc7XG5cbmV4cG9ydCBjb25zdCBNb2NrRHJha2VGYWN0b3J5ID0gbmV3IERyYWtlRmFjdG9yeSgoY29udGFpbmVycywgb3B0aW9ucykgPT4ge1xuICByZXR1cm4gbmV3IE1vY2tEcmFrZShjb250YWluZXJzLCBvcHRpb25zKTtcbn0pO1xuXG4vKiogWW91IGNhbiB1c2UgTW9ja0RyYWtlIHRvIHNpbXVsYXRlIERyYWtlIGV2ZW50cy5cbiAqXG4gKiBUaGUgdGhyZWUgbWV0aG9kcyB0aGF0IGFjdHVhbGx5IGRvIGFueXRoaW5nIGFyZSBgb24oZXZlbnQsIGxpc3RlbmVyKWAsXG4gKiBgZGVzdHJveSgpYCwgYW5kIGEgbmV3IG1ldGhvZCwgYGVtaXQoKWAuIFVzZSBgZW1pdCgpYCB0byBtYW51YWxseSBlbWl0IERyYWtlXG4gKiBldmVudHMsIGFuZCBpZiB5b3UgaW5qZWN0ZWQgTW9ja0RyYWtlIHByb3Blcmx5IHdpdGggTW9ja0RyYWtlRmFjdG9yeSBvclxuICogbW9ja2VkIHRoZSBEcmFndWxhU2VydmljZS5maW5kKCkgbWV0aG9kLCB0aGVuIHlvdSBjYW4gbWFrZSBuZzItZHJhZ3VsYSB0aGlua1xuICogZHJhZ3MgYW5kIGRyb3BzIGFyZSBoYXBwZW5pbmcuXG4gKlxuICogQ2F2ZWF0czpcbiAqXG4gKiAxLiBZT1UgTVVTVCBNQUtFIFRIRSBET00gQ0hBTkdFUyBZT1VSU0VMRi5cbiAqIDIuIFJFUEVBVDogWU9VIE1VU1QgTUFLRSBUSEUgRE9NIENIQU5HRVMgWU9VUlNFTEYuXG4gKiAgICBUaGF0IG1lYW5zIGBzb3VyY2UucmVtb3ZlQ2hpbGQoZWwpYCwgYW5kIGB0YXJnZXQuaW5zZXJ0QmVmb3JlKGVsKWAuXG4gKiAzLiBOb25lIG9mIHRoZSBvdGhlciBtZXRob2RzIGRvIGFueXRoaW5nLlxuICogICAgVGhhdCdzIG9rLCBiZWNhdXNlIG5nMi1kcmFndWxhIGRvZXNuJ3QgdXNlIHRoZW0uXG4gKi9cbmV4cG9ydCBjbGFzcyBNb2NrRHJha2UgaW1wbGVtZW50cyBEcmFrZVdpdGhNb2RlbHMge1xuICAvKipcbiAgICogQHBhcmFtIGNvbnRhaW5lcnMgQSBsaXN0IG9mIGNvbnRhaW5lciBlbGVtZW50cy5cbiAgICogQHBhcmFtIG9wdGlvbnMgVGhlc2Ugd2lsbCBOT1QgYmUgdXNlZC4gQXQgYWxsLlxuICAgKiBAcGFyYW0gbW9kZWxzIE5vbnN0YW5kYXJkLCBidXQgdXNlZnVsIGZvciB0ZXN0aW5nIHVzaW5nIGBuZXcgTW9ja0RyYWtlKClgIGRpcmVjdGx5LlxuICAgKiAgICAgICAgICAgICAgIE5vdGUsIGRlZmF1bHQgdmFsdWUgaXMgdW5kZWZpbmVkLCBsaWtlIGEgcmVhbCBEcmFrZS4gRG9uJ3QgY2hhbmdlIHRoYXQuXG4gICAqL1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgY29udGFpbmVyczogRWxlbWVudFtdID0gW10sXG4gICAgcHVibGljIG9wdGlvbnM6IERyYWd1bGFPcHRpb25zID0ge30sXG4gICAgcHVibGljIG1vZGVscz86IGFueVtdW11cbiAgKSB7fVxuXG4gIC8qIERvZXNuJ3QgcmVwcmVzZW50IGFueXRoaW5nIG1lYW5pbmdmdWwuICovXG4gIGRyYWdnaW5nOiBib29sZWFuID0gZmFsc2U7XG5cbiAgLyogRG9lcyBub3RoaW5nIHVzZWZ1bC4gKi9cbiAgc3RhcnQoaXRlbTogRWxlbWVudCk6IGFueSB7XG4gICAgdGhpcy5kcmFnZ2luZyA9IHRydWU7XG4gIH1cbiAgLyogRG9lcyBub3RoaW5nIHVzZWZ1bC4gKi9cbiAgZW5kKCk6IGFueSB7XG4gICAgdGhpcy5kcmFnZ2luZyA9IGZhbHNlO1xuICB9XG4gIC8qIERvZXMgbm90aGluZyB1c2VmdWwuICovXG4gIGNhbmNlbChyZXZlcnQ6IGJvb2xlYW4pOiBhbnk7XG4gIGNhbmNlbCgpOiBhbnk7XG4gIGNhbmNlbChyZXZlcnQ/OiBhbnkpIHtcbiAgICB0aGlzLmRyYWdnaW5nID0gZmFsc2U7XG4gIH1cbiAgLyogRG9lcyBub3RoaW5nIHVzZWZ1bC4gKi9cbiAgcmVtb3ZlKCk6IGFueSB7XG4gICAgdGhpcy5kcmFnZ2luZyA9IGZhbHNlO1xuICB9XG5cbiAgLy8gQmFzaWMgYnV0IGZ1bGx5IGZ1bmN0aW9uYWwgZXZlbnQgZW1pdHRlciBzaGltXG4gIHByaXZhdGUgZW1pdHRlciQgPSBuZXcgU3ViamVjdDx7IGV2ZW50VHlwZTogRXZlbnRUeXBlcywgYXJnczogYW55W10gfT4oKTtcblxuICBwcml2YXRlIHN1YnMgPSBuZXcgU3Vic2NyaXB0aW9uKCk7XG5cbiAgb24oZXZlbnQ6IHN0cmluZywgY2FsbGJhY2s6IEZ1bmN0aW9uKTogYW55IHtcbiAgICB0aGlzLnN1YnMuYWRkKHRoaXMuZW1pdHRlciRcbiAgICAgIC5waXBlKFxuICAgICAgICBmaWx0ZXIoKHsgZXZlbnRUeXBlIH0pID0+IGV2ZW50VHlwZSA9PT0gZXZlbnQpXG4gICAgICApXG4gICAgICAuc3Vic2NyaWJlKCh7IGFyZ3MgfSkgPT4ge1xuICAgICAgICBjYWxsYmFjayguLi5hcmdzKTtcbiAgICAgIH0pKTtcbiAgfVxuXG4gIGRlc3Ryb3koKTogYW55IHtcbiAgICB0aGlzLnN1YnMudW5zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGlzIGlzIHRoZSBtb3N0IHVzZWZ1bCBtZXRob2QuIFlvdSBjYW4gdXNlIGl0IHRvIG1hbnVhbGx5IGZpcmUgZXZlbnRzIHRoYXQgd291bGQgbm9ybWFsbHlcbiAgICogYmUgZmlyZWQgYnkgYSByZWFsIGRyYWtlLlxuICAgKlxuICAgKiBZb3UncmUgbGlrZWx5IG1vc3QgaW50ZXJlc3RlZCBpbiBmaXJpbmcgYGRyYWdgLCBgcmVtb3ZlYCBhbmQgYGRyb3BgLCB0aGUgdGhyZWUgZXZlbnRzXG4gICAqIERyYWd1bGFTZXJ2aWNlIHVzZXMgdG8gaW1wbGVtZW50IFtkcmFndWxhTW9kZWxdLlxuICAgKlxuICAgKiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2JldmFjcXVhL2RyYWd1bGEjZHJha2Vvbi1ldmVudHMgZm9yIHdoYXQgeW91IHNob3VsZCBlbWl0IChhbmQgaW4gd2hhdCBvcmRlcikuXG4gICAqXG4gICAqIChOb3RlIGFsc28sIGZpcmluZyBkcm9wTW9kZWwgYW5kIHJlbW92ZU1vZGVsIHdvbid0IHdvcmsuIFlvdSB3b3VsZCBoYXZlIHRvIG1vY2sgRHJhZ3VsYVNlcnZpY2UgZm9yIHRoYXQuKVxuICAgKi9cbiAgZW1pdChldmVudFR5cGU6IEV2ZW50VHlwZXMsIC4uLmFyZ3M6IGFueVtdKSB7XG4gICAgdGhpcy5lbWl0dGVyJC5uZXh0KHsgZXZlbnRUeXBlLCBhcmdzIH0pXG4gIH1cblxufVxuIl19

      /***/

    },

    /***/
    "CtW9":
    /*!****************************************************************************!*\
      !*** ./src/app/apps/calendar/dialogs/form-dialog/form-dialog.component.ts ***!
      \****************************************************************************/

    /*! exports provided: FormDialogComponent */

    /***/
    function CtW9(module, __webpack_exports__, __webpack_require__) {
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


      var _calendar_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../calendar.service */
      "WRGZ");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _calendar_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../calendar.model */
      "85qP");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/select */
      "d3UM");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");
      /* harmony import */


      var ng_pick_datetime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ng-pick-datetime */
      "z17N");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function FormDialogComponent_div_69_Template(rf, ctx) {
        if (rf & 1) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FormDialogComponent_div_69_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4);

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r3.deleteEvent();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-icon", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "delete");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      var FormDialogComponent = /*#__PURE__*/function () {
        function FormDialogComponent(dialogRef, data, calendarService, fb) {
          _classCallCheck(this, FormDialogComponent);

          this.dialogRef = dialogRef;
          this.data = data;
          this.calendarService = calendarService;
          this.fb = fb;
          this.showDeleteBtn = false;
          this.formControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required // Validators.email,
          ]); // Set the defaults

          this.action = data.action;

          if (this.action === 'edit') {
            this.dialogTitle = data.calendar.title;
            this.calendar = data.calendar;
            this.showDeleteBtn = true;
          } else {
            this.dialogTitle = 'New Event';
            this.calendar = new _calendar_model__WEBPACK_IMPORTED_MODULE_4__["Calendar"]({});
            this.showDeleteBtn = false;
          }

          this.calendarForm = this.createContactForm();
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
              id: [this.calendar.id],
              title: [this.calendar.title, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
              category: [this.calendar.category],
              startDate: [this.calendar.startDate, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
              endDate: [this.calendar.endDate, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
              details: [this.calendar.details]
            });
          }
        }, {
          key: "submit",
          value: function submit() {// emppty stuff
          }
        }, {
          key: "deleteEvent",
          value: function deleteEvent() {
            this.calendarService.deleteCalendar(this.calendarForm.getRawValue());
            this.dialogRef.close('delete');
          }
        }, {
          key: "onNoClick",
          value: function onNoClick() {
            this.dialogRef.close();
          }
        }, {
          key: "confirmAdd",
          value: function confirmAdd() {
            this.calendarService.addUpdateCalendar(this.calendarForm.getRawValue());
            this.dialogRef.close('submit');
          }
        }]);

        return FormDialogComponent;
      }();

      FormDialogComponent.ɵfac = function FormDialogComponent_Factory(t) {
        return new (t || FormDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_calendar_service__WEBPACK_IMPORTED_MODULE_2__["CalendarService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]));
      };

      FormDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: FormDialogComponent,
        selectors: [["app-form-dialog"]],
        decls: 70,
        vars: 16,
        consts: [[1, "addContainer"], [1, "modalHeader"], [1, "editRowModal"], [1, "modalHeader", "clearfix"], [1, "modal-about"], [1, "font-weight-bold", "p-t-5", "p-l-10", "font-17"], ["mat-icon-button", "", "aria-label", "Close dialog", 3, "click"], ["mat-dialog-content", ""], [1, "register-form", "m-4", 3, "formGroup"], [1, "row"], [1, "col-xl-12", "col-lg-12", "col-md-12", "col-sm-12"], ["appearance", "outline", 1, "example-full-width", "mb-3"], ["matInput", "", "formControlName", "title", "required", ""], ["matSuffix", ""], ["formControlName", "category", "required", ""], [3, "value"], [1, "col-xl-6", "col-lg-6", "col-md-12", "col-sm-12"], ["matInput", "", "formControlName", "startDate", "placeholder", "Choose a date", "required", "", 3, "owlDateTimeTrigger", "owlDateTime"], ["matSuffix", "", 3, "owlDateTimeTrigger"], ["startDate", ""], ["matInput", "", "formControlName", "endDate", "placeholder", "Choose a date", "required", "", 3, "owlDateTimeTrigger", "owlDateTime"], ["endDate", ""], ["matInput", "", "formControlName", "details"], [1, "col-xl-10", "col-lg-10", "col-md-12", "col-sm-12"], [1, "example-button-row"], ["mat-raised-button", "", "color", "primary", 3, "type", "disabled", "click"], ["mat-raised-button", "", "color", "warn", "tabindex", "-1", 3, "click"], [1, "col-xl-2", "col-lg-2", "col-md-12", "col-sm-12"], ["class", "example-button-row", 4, "ngIf"], ["mat-mini-fab", "", "aria-label", "", "color", "warn", 3, "click"], [1, "font-20"]],
        template: function FormDialogComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FormDialogComponent_Template_button_click_7_listener() {
              return ctx.dialogRef.close();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "close");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "form", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "mat-form-field", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Title");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "input", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "mat-icon", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "turned_in_not");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "mat-form-field", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Category");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "mat-select", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "mat-option", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, " Work ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "mat-option", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, " Personal ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "mat-option", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, " Important ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "mat-option", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, " Travel ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "mat-option", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, " Friends ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "mat-form-field", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "Start date");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](41, "input", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "mat-icon", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "today");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](44, "owl-date-time", null, 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "mat-form-field", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, "End date");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](50, "input", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "mat-icon", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, "today");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](53, "owl-date-time", null, 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "mat-form-field", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](59, "Event Details");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](60, "textarea", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "button", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FormDialogComponent_Template_button_click_64_listener() {
              return ctx.confirmAdd();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](65, "Save");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "button", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FormDialogComponent_Template_button_click_66_listener() {
              return ctx.dialogRef.close();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](67, "Cancel");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](69, FormDialogComponent_div_69_Template, 4, 0, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](45);

            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](54);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.dialogTitle, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.calendarForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", "work");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", "personal");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", "important");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", "travel");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", "friends");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("owlDateTimeTrigger", _r0)("owlDateTime", _r0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("owlDateTimeTrigger", _r0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("owlDateTimeTrigger", _r1)("owlDateTime", _r1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("owlDateTimeTrigger", _r1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("type", ctx.submit)("disabled", !ctx.calendarForm.valid);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showDeleteBtn);
          }
        },
        directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RequiredValidator"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatSuffix"], _angular_material_select__WEBPACK_IMPORTED_MODULE_9__["MatSelect"], _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatOption"], ng_pick_datetime__WEBPACK_IMPORTED_MODULE_11__["OwlDateTimeInputDirective"], ng_pick_datetime__WEBPACK_IMPORTED_MODULE_11__["OwlDateTimeTriggerDirective"], ng_pick_datetime__WEBPACK_IMPORTED_MODULE_11__["OwlDateTimeComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcHMvY2FsZW5kYXIvZGlhbG9ncy9mb3JtLWRpYWxvZy9mb3JtLWRpYWxvZy5jb21wb25lbnQuc2FzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](FormDialogComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'app-form-dialog',
            templateUrl: './form-dialog.component.html',
            styleUrls: ['./form-dialog.component.sass']
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
            type: _calendar_service__WEBPACK_IMPORTED_MODULE_2__["CalendarService"]
          }, {
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "Gbwi":
    /*!************************************************************!*\
      !*** ./node_modules/@fullcalendar/interaction/main.esm.js ***!
      \************************************************************/

    /*! exports provided: default, Draggable, FeaturefulElementDragging, PointerDragging, ThirdPartyDraggable */

    /***/
    function Gbwi(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Draggable", function () {
        return ExternalDraggable;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FeaturefulElementDragging", function () {
        return FeaturefulElementDragging;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PointerDragging", function () {
        return PointerDragging;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ThirdPartyDraggable", function () {
        return ThirdPartyDraggable;
      });
      /* harmony import */


      var _fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @fullcalendar/core */
      "SZB9");
      /*!
      FullCalendar Interaction Plugin v4.4.2
      Docs & License: https://fullcalendar.io/
      (c) 2019 Adam Shaw
      */

      /*! *****************************************************************************
      Copyright (c) Microsoft Corporation.
      
      Permission to use, copy, modify, and/or distribute this software for any
      purpose with or without fee is hereby granted.
      
      THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
      REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
      AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
      INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
      LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
      OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
      PERFORMANCE OF THIS SOFTWARE.
      ***************************************************************************** */

      /* global Reflect, Promise */


      var _extendStatics2 = function extendStatics(d, b) {
        _extendStatics2 = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (d, b) {
          d.__proto__ = b;
        } || function (d, b) {
          for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
          }
        };

        return _extendStatics2(d, b);
      };

      function __extends(d, b) {
        _extendStatics2(d, b);

        function __() {
          this.constructor = d;
        }

        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      }

      var _assign = function __assign() {
        _assign = Object.assign || function __assign(t) {
          for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];

            for (var p in s) {
              if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
          }

          return t;
        };

        return _assign.apply(this, arguments);
      };

      _fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["config"].touchMouseIgnoreWait = 500;
      var ignoreMouseDepth = 0;
      var listenerCnt = 0;
      var isWindowTouchMoveCancelled = false;
      /*
      Uses a "pointer" abstraction, which monitors UI events for both mouse and touch.
      Tracks when the pointer "drags" on a certain element, meaning down+move+up.
      
      Also, tracks if there was touch-scrolling.
      Also, can prevent touch-scrolling from happening.
      Also, can fire pointermove events when scrolling happens underneath, even when no real pointer movement.
      
      emits:
      - pointerdown
      - pointermove
      - pointerup
      */

      var PointerDragging =
      /** @class */
      function () {
        function PointerDragging(containerEl) {
          var _this = this;

          this.subjectEl = null;
          this.downEl = null; // options that can be directly assigned by caller

          this.selector = ''; // will cause subjectEl in all emitted events to be this element

          this.handleSelector = '';
          this.shouldIgnoreMove = false;
          this.shouldWatchScroll = true; // for simulating pointermove on scroll
          // internal states

          this.isDragging = false;
          this.isTouchDragging = false;
          this.wasTouchScroll = false; // Mouse
          // ----------------------------------------------------------------------------------------------------

          this.handleMouseDown = function (ev) {
            if (!_this.shouldIgnoreMouse() && isPrimaryMouseButton(ev) && _this.tryStart(ev)) {
              var pev = _this.createEventFromMouse(ev, true);

              _this.emitter.trigger('pointerdown', pev);

              _this.initScrollWatch(pev);

              if (!_this.shouldIgnoreMove) {
                document.addEventListener('mousemove', _this.handleMouseMove);
              }

              document.addEventListener('mouseup', _this.handleMouseUp);
            }
          };

          this.handleMouseMove = function (ev) {
            var pev = _this.createEventFromMouse(ev);

            _this.recordCoords(pev);

            _this.emitter.trigger('pointermove', pev);
          };

          this.handleMouseUp = function (ev) {
            document.removeEventListener('mousemove', _this.handleMouseMove);
            document.removeEventListener('mouseup', _this.handleMouseUp);

            _this.emitter.trigger('pointerup', _this.createEventFromMouse(ev));

            _this.cleanup(); // call last so that pointerup has access to props

          }; // Touch
          // ----------------------------------------------------------------------------------------------------


          this.handleTouchStart = function (ev) {
            if (_this.tryStart(ev)) {
              _this.isTouchDragging = true;

              var pev = _this.createEventFromTouch(ev, true);

              _this.emitter.trigger('pointerdown', pev);

              _this.initScrollWatch(pev); // unlike mouse, need to attach to target, not document
              // https://stackoverflow.com/a/45760014


              var target = ev.target;

              if (!_this.shouldIgnoreMove) {
                target.addEventListener('touchmove', _this.handleTouchMove);
              }

              target.addEventListener('touchend', _this.handleTouchEnd);
              target.addEventListener('touchcancel', _this.handleTouchEnd); // treat it as a touch end
              // attach a handler to get called when ANY scroll action happens on the page.
              // this was impossible to do with normal on/off because 'scroll' doesn't bubble.
              // http://stackoverflow.com/a/32954565/96342

              window.addEventListener('scroll', _this.handleTouchScroll, true // useCapture
              );
            }
          };

          this.handleTouchMove = function (ev) {
            var pev = _this.createEventFromTouch(ev);

            _this.recordCoords(pev);

            _this.emitter.trigger('pointermove', pev);
          };

          this.handleTouchEnd = function (ev) {
            if (_this.isDragging) {
              // done to guard against touchend followed by touchcancel
              var target = ev.target;
              target.removeEventListener('touchmove', _this.handleTouchMove);
              target.removeEventListener('touchend', _this.handleTouchEnd);
              target.removeEventListener('touchcancel', _this.handleTouchEnd);
              window.removeEventListener('scroll', _this.handleTouchScroll, true); // useCaptured=true

              _this.emitter.trigger('pointerup', _this.createEventFromTouch(ev));

              _this.cleanup(); // call last so that pointerup has access to props


              _this.isTouchDragging = false;
              startIgnoringMouse();
            }
          };

          this.handleTouchScroll = function () {
            _this.wasTouchScroll = true;
          };

          this.handleScroll = function (ev) {
            if (!_this.shouldIgnoreMove) {
              var pageX = window.pageXOffset - _this.prevScrollX + _this.prevPageX;
              var pageY = window.pageYOffset - _this.prevScrollY + _this.prevPageY;

              _this.emitter.trigger('pointermove', {
                origEvent: ev,
                isTouch: _this.isTouchDragging,
                subjectEl: _this.subjectEl,
                pageX: pageX,
                pageY: pageY,
                deltaX: pageX - _this.origPageX,
                deltaY: pageY - _this.origPageY
              });
            }
          };

          this.containerEl = containerEl;
          this.emitter = new _fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["EmitterMixin"]();
          containerEl.addEventListener('mousedown', this.handleMouseDown);
          containerEl.addEventListener('touchstart', this.handleTouchStart, {
            passive: true
          });
          listenerCreated();
        }

        PointerDragging.prototype.destroy = function () {
          this.containerEl.removeEventListener('mousedown', this.handleMouseDown);
          this.containerEl.removeEventListener('touchstart', this.handleTouchStart, {
            passive: true
          });
          listenerDestroyed();
        };

        PointerDragging.prototype.tryStart = function (ev) {
          var subjectEl = this.querySubjectEl(ev);
          var downEl = ev.target;

          if (subjectEl && (!this.handleSelector || Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["elementClosest"])(downEl, this.handleSelector))) {
            this.subjectEl = subjectEl;
            this.downEl = downEl;
            this.isDragging = true; // do this first so cancelTouchScroll will work

            this.wasTouchScroll = false;
            return true;
          }

          return false;
        };

        PointerDragging.prototype.cleanup = function () {
          isWindowTouchMoveCancelled = false;
          this.isDragging = false;
          this.subjectEl = null;
          this.downEl = null; // keep wasTouchScroll around for later access

          this.destroyScrollWatch();
        };

        PointerDragging.prototype.querySubjectEl = function (ev) {
          if (this.selector) {
            return Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["elementClosest"])(ev.target, this.selector);
          } else {
            return this.containerEl;
          }
        };

        PointerDragging.prototype.shouldIgnoreMouse = function () {
          return ignoreMouseDepth || this.isTouchDragging;
        }; // can be called by user of this class, to cancel touch-based scrolling for the current drag


        PointerDragging.prototype.cancelTouchScroll = function () {
          if (this.isDragging) {
            isWindowTouchMoveCancelled = true;
          }
        }; // Scrolling that simulates pointermoves
        // ----------------------------------------------------------------------------------------------------


        PointerDragging.prototype.initScrollWatch = function (ev) {
          if (this.shouldWatchScroll) {
            this.recordCoords(ev);
            window.addEventListener('scroll', this.handleScroll, true); // useCapture=true
          }
        };

        PointerDragging.prototype.recordCoords = function (ev) {
          if (this.shouldWatchScroll) {
            this.prevPageX = ev.pageX;
            this.prevPageY = ev.pageY;
            this.prevScrollX = window.pageXOffset;
            this.prevScrollY = window.pageYOffset;
          }
        };

        PointerDragging.prototype.destroyScrollWatch = function () {
          if (this.shouldWatchScroll) {
            window.removeEventListener('scroll', this.handleScroll, true); // useCaptured=true
          }
        }; // Event Normalization
        // ----------------------------------------------------------------------------------------------------


        PointerDragging.prototype.createEventFromMouse = function (ev, isFirst) {
          var deltaX = 0;
          var deltaY = 0; // TODO: repeat code

          if (isFirst) {
            this.origPageX = ev.pageX;
            this.origPageY = ev.pageY;
          } else {
            deltaX = ev.pageX - this.origPageX;
            deltaY = ev.pageY - this.origPageY;
          }

          return {
            origEvent: ev,
            isTouch: false,
            subjectEl: this.subjectEl,
            pageX: ev.pageX,
            pageY: ev.pageY,
            deltaX: deltaX,
            deltaY: deltaY
          };
        };

        PointerDragging.prototype.createEventFromTouch = function (ev, isFirst) {
          var touches = ev.touches;
          var pageX;
          var pageY;
          var deltaX = 0;
          var deltaY = 0; // if touch coords available, prefer,
          // because FF would give bad ev.pageX ev.pageY

          if (touches && touches.length) {
            pageX = touches[0].pageX;
            pageY = touches[0].pageY;
          } else {
            pageX = ev.pageX;
            pageY = ev.pageY;
          } // TODO: repeat code


          if (isFirst) {
            this.origPageX = pageX;
            this.origPageY = pageY;
          } else {
            deltaX = pageX - this.origPageX;
            deltaY = pageY - this.origPageY;
          }

          return {
            origEvent: ev,
            isTouch: true,
            subjectEl: this.subjectEl,
            pageX: pageX,
            pageY: pageY,
            deltaX: deltaX,
            deltaY: deltaY
          };
        };

        return PointerDragging;
      }(); // Returns a boolean whether this was a left mouse click and no ctrl key (which means right click on Mac)


      function isPrimaryMouseButton(ev) {
        return ev.button === 0 && !ev.ctrlKey;
      } // Ignoring fake mouse events generated by touch
      // ----------------------------------------------------------------------------------------------------


      function startIgnoringMouse() {
        ignoreMouseDepth++;
        setTimeout(function () {
          ignoreMouseDepth--;
        }, _fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["config"].touchMouseIgnoreWait);
      } // We want to attach touchmove as early as possible for Safari
      // ----------------------------------------------------------------------------------------------------


      function listenerCreated() {
        if (!listenerCnt++) {
          window.addEventListener('touchmove', onWindowTouchMove, {
            passive: false
          });
        }
      }

      function listenerDestroyed() {
        if (! --listenerCnt) {
          window.removeEventListener('touchmove', onWindowTouchMove, {
            passive: false
          });
        }
      }

      function onWindowTouchMove(ev) {
        if (isWindowTouchMoveCancelled) {
          ev.preventDefault();
        }
      }
      /*
      An effect in which an element follows the movement of a pointer across the screen.
      The moving element is a clone of some other element.
      Must call start + handleMove + stop.
      */


      var ElementMirror =
      /** @class */
      function () {
        function ElementMirror() {
          this.isVisible = false; // must be explicitly enabled

          this.sourceEl = null;
          this.mirrorEl = null;
          this.sourceElRect = null; // screen coords relative to viewport
          // options that can be set directly by caller

          this.parentNode = document.body;
          this.zIndex = 9999;
          this.revertDuration = 0;
        }

        ElementMirror.prototype.start = function (sourceEl, pageX, pageY) {
          this.sourceEl = sourceEl;
          this.sourceElRect = this.sourceEl.getBoundingClientRect();
          this.origScreenX = pageX - window.pageXOffset;
          this.origScreenY = pageY - window.pageYOffset;
          this.deltaX = 0;
          this.deltaY = 0;
          this.updateElPosition();
        };

        ElementMirror.prototype.handleMove = function (pageX, pageY) {
          this.deltaX = pageX - window.pageXOffset - this.origScreenX;
          this.deltaY = pageY - window.pageYOffset - this.origScreenY;
          this.updateElPosition();
        }; // can be called before start


        ElementMirror.prototype.setIsVisible = function (bool) {
          if (bool) {
            if (!this.isVisible) {
              if (this.mirrorEl) {
                this.mirrorEl.style.display = '';
              }

              this.isVisible = bool; // needs to happen before updateElPosition

              this.updateElPosition(); // because was not updating the position while invisible
            }
          } else {
            if (this.isVisible) {
              if (this.mirrorEl) {
                this.mirrorEl.style.display = 'none';
              }

              this.isVisible = bool;
            }
          }
        }; // always async


        ElementMirror.prototype.stop = function (needsRevertAnimation, callback) {
          var _this = this;

          var done = function done() {
            _this.cleanup();

            callback();
          };

          if (needsRevertAnimation && this.mirrorEl && this.isVisible && this.revertDuration && ( // if 0, transition won't work
          this.deltaX || this.deltaY) // if same coords, transition won't work
          ) {
              this.doRevertAnimation(done, this.revertDuration);
            } else {
            setTimeout(done, 0);
          }
        };

        ElementMirror.prototype.doRevertAnimation = function (callback, revertDuration) {
          var mirrorEl = this.mirrorEl;
          var finalSourceElRect = this.sourceEl.getBoundingClientRect(); // because autoscrolling might have happened

          mirrorEl.style.transition = 'top ' + revertDuration + 'ms,' + 'left ' + revertDuration + 'ms';
          Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["applyStyle"])(mirrorEl, {
            left: finalSourceElRect.left,
            top: finalSourceElRect.top
          });
          Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["whenTransitionDone"])(mirrorEl, function () {
            mirrorEl.style.transition = '';
            callback();
          });
        };

        ElementMirror.prototype.cleanup = function () {
          if (this.mirrorEl) {
            Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["removeElement"])(this.mirrorEl);
            this.mirrorEl = null;
          }

          this.sourceEl = null;
        };

        ElementMirror.prototype.updateElPosition = function () {
          if (this.sourceEl && this.isVisible) {
            Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["applyStyle"])(this.getMirrorEl(), {
              left: this.sourceElRect.left + this.deltaX,
              top: this.sourceElRect.top + this.deltaY
            });
          }
        };

        ElementMirror.prototype.getMirrorEl = function () {
          var sourceElRect = this.sourceElRect;
          var mirrorEl = this.mirrorEl;

          if (!mirrorEl) {
            mirrorEl = this.mirrorEl = this.sourceEl.cloneNode(true); // cloneChildren=true
            // we don't want long taps or any mouse interaction causing selection/menus.
            // would use preventSelection(), but that prevents selectstart, causing problems.

            mirrorEl.classList.add('fc-unselectable');
            mirrorEl.classList.add('fc-dragging');
            Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["applyStyle"])(mirrorEl, {
              position: 'fixed',
              zIndex: this.zIndex,
              visibility: '',
              boxSizing: 'border-box',
              width: sourceElRect.right - sourceElRect.left,
              height: sourceElRect.bottom - sourceElRect.top,
              right: 'auto',
              bottom: 'auto',
              margin: 0
            });
            this.parentNode.appendChild(mirrorEl);
          }

          return mirrorEl;
        };

        return ElementMirror;
      }();
      /*
      Is a cache for a given element's scroll information (all the info that ScrollController stores)
      in addition the "client rectangle" of the element.. the area within the scrollbars.
      
      The cache can be in one of two modes:
      - doesListening:false - ignores when the container is scrolled by someone else
      - doesListening:true - watch for scrolling and update the cache
      */


      var ScrollGeomCache =
      /** @class */
      function (_super) {
        __extends(ScrollGeomCache, _super);

        function ScrollGeomCache(scrollController, doesListening) {
          var _this = _super.call(this) || this;

          _this.handleScroll = function () {
            _this.scrollTop = _this.scrollController.getScrollTop();
            _this.scrollLeft = _this.scrollController.getScrollLeft();

            _this.handleScrollChange();
          };

          _this.scrollController = scrollController;
          _this.doesListening = doesListening;
          _this.scrollTop = _this.origScrollTop = scrollController.getScrollTop();
          _this.scrollLeft = _this.origScrollLeft = scrollController.getScrollLeft();
          _this.scrollWidth = scrollController.getScrollWidth();
          _this.scrollHeight = scrollController.getScrollHeight();
          _this.clientWidth = scrollController.getClientWidth();
          _this.clientHeight = scrollController.getClientHeight();
          _this.clientRect = _this.computeClientRect(); // do last in case it needs cached values

          if (_this.doesListening) {
            _this.getEventTarget().addEventListener('scroll', _this.handleScroll);
          }

          return _this;
        }

        ScrollGeomCache.prototype.destroy = function () {
          if (this.doesListening) {
            this.getEventTarget().removeEventListener('scroll', this.handleScroll);
          }
        };

        ScrollGeomCache.prototype.getScrollTop = function () {
          return this.scrollTop;
        };

        ScrollGeomCache.prototype.getScrollLeft = function () {
          return this.scrollLeft;
        };

        ScrollGeomCache.prototype.setScrollTop = function (top) {
          this.scrollController.setScrollTop(top);

          if (!this.doesListening) {
            // we are not relying on the element to normalize out-of-bounds scroll values
            // so we need to sanitize ourselves
            this.scrollTop = Math.max(Math.min(top, this.getMaxScrollTop()), 0);
            this.handleScrollChange();
          }
        };

        ScrollGeomCache.prototype.setScrollLeft = function (top) {
          this.scrollController.setScrollLeft(top);

          if (!this.doesListening) {
            // we are not relying on the element to normalize out-of-bounds scroll values
            // so we need to sanitize ourselves
            this.scrollLeft = Math.max(Math.min(top, this.getMaxScrollLeft()), 0);
            this.handleScrollChange();
          }
        };

        ScrollGeomCache.prototype.getClientWidth = function () {
          return this.clientWidth;
        };

        ScrollGeomCache.prototype.getClientHeight = function () {
          return this.clientHeight;
        };

        ScrollGeomCache.prototype.getScrollWidth = function () {
          return this.scrollWidth;
        };

        ScrollGeomCache.prototype.getScrollHeight = function () {
          return this.scrollHeight;
        };

        ScrollGeomCache.prototype.handleScrollChange = function () {};

        return ScrollGeomCache;
      }(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["ScrollController"]);

      var ElementScrollGeomCache =
      /** @class */
      function (_super) {
        __extends(ElementScrollGeomCache, _super);

        function ElementScrollGeomCache(el, doesListening) {
          return _super.call(this, new _fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["ElementScrollController"](el), doesListening) || this;
        }

        ElementScrollGeomCache.prototype.getEventTarget = function () {
          return this.scrollController.el;
        };

        ElementScrollGeomCache.prototype.computeClientRect = function () {
          return Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["computeInnerRect"])(this.scrollController.el);
        };

        return ElementScrollGeomCache;
      }(ScrollGeomCache);

      var WindowScrollGeomCache =
      /** @class */
      function (_super) {
        __extends(WindowScrollGeomCache, _super);

        function WindowScrollGeomCache(doesListening) {
          return _super.call(this, new _fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["WindowScrollController"](), doesListening) || this;
        }

        WindowScrollGeomCache.prototype.getEventTarget = function () {
          return window;
        };

        WindowScrollGeomCache.prototype.computeClientRect = function () {
          return {
            left: this.scrollLeft,
            right: this.scrollLeft + this.clientWidth,
            top: this.scrollTop,
            bottom: this.scrollTop + this.clientHeight
          };
        }; // the window is the only scroll object that changes it's rectangle relative
        // to the document's topleft as it scrolls


        WindowScrollGeomCache.prototype.handleScrollChange = function () {
          this.clientRect = this.computeClientRect();
        };

        return WindowScrollGeomCache;
      }(ScrollGeomCache); // If available we are using native "performance" API instead of "Date"
      // Read more about it on MDN:
      // https://developer.mozilla.org/en-US/docs/Web/API/Performance


      var getTime = typeof performance === 'function' ? performance.now : Date.now;
      /*
      For a pointer interaction, automatically scrolls certain scroll containers when the pointer
      approaches the edge.
      
      The caller must call start + handleMove + stop.
      */

      var AutoScroller =
      /** @class */
      function () {
        function AutoScroller() {
          var _this = this; // options that can be set by caller


          this.isEnabled = true;
          this.scrollQuery = [window, '.fc-scroller'];
          this.edgeThreshold = 50; // pixels

          this.maxVelocity = 300; // pixels per second
          // internal state

          this.pointerScreenX = null;
          this.pointerScreenY = null;
          this.isAnimating = false;
          this.scrollCaches = null; // protect against the initial pointerdown being too close to an edge and starting the scroll

          this.everMovedUp = false;
          this.everMovedDown = false;
          this.everMovedLeft = false;
          this.everMovedRight = false;

          this.animate = function () {
            if (_this.isAnimating) {
              // wasn't cancelled between animation calls
              var edge = _this.computeBestEdge(_this.pointerScreenX + window.pageXOffset, _this.pointerScreenY + window.pageYOffset);

              if (edge) {
                var now = getTime();

                _this.handleSide(edge, (now - _this.msSinceRequest) / 1000);

                _this.requestAnimation(now);
              } else {
                _this.isAnimating = false; // will stop animation
              }
            }
          };
        }

        AutoScroller.prototype.start = function (pageX, pageY) {
          if (this.isEnabled) {
            this.scrollCaches = this.buildCaches();
            this.pointerScreenX = null;
            this.pointerScreenY = null;
            this.everMovedUp = false;
            this.everMovedDown = false;
            this.everMovedLeft = false;
            this.everMovedRight = false;
            this.handleMove(pageX, pageY);
          }
        };

        AutoScroller.prototype.handleMove = function (pageX, pageY) {
          if (this.isEnabled) {
            var pointerScreenX = pageX - window.pageXOffset;
            var pointerScreenY = pageY - window.pageYOffset;
            var yDelta = this.pointerScreenY === null ? 0 : pointerScreenY - this.pointerScreenY;
            var xDelta = this.pointerScreenX === null ? 0 : pointerScreenX - this.pointerScreenX;

            if (yDelta < 0) {
              this.everMovedUp = true;
            } else if (yDelta > 0) {
              this.everMovedDown = true;
            }

            if (xDelta < 0) {
              this.everMovedLeft = true;
            } else if (xDelta > 0) {
              this.everMovedRight = true;
            }

            this.pointerScreenX = pointerScreenX;
            this.pointerScreenY = pointerScreenY;

            if (!this.isAnimating) {
              this.isAnimating = true;
              this.requestAnimation(getTime());
            }
          }
        };

        AutoScroller.prototype.stop = function () {
          if (this.isEnabled) {
            this.isAnimating = false; // will stop animation

            for (var _i = 0, _a = this.scrollCaches; _i < _a.length; _i++) {
              var scrollCache = _a[_i];
              scrollCache.destroy();
            }

            this.scrollCaches = null;
          }
        };

        AutoScroller.prototype.requestAnimation = function (now) {
          this.msSinceRequest = now;
          requestAnimationFrame(this.animate);
        };

        AutoScroller.prototype.handleSide = function (edge, seconds) {
          var scrollCache = edge.scrollCache;
          var edgeThreshold = this.edgeThreshold;
          var invDistance = edgeThreshold - edge.distance;
          var velocity = // the closer to the edge, the faster we scroll
          invDistance * invDistance / (edgeThreshold * edgeThreshold) * // quadratic
          this.maxVelocity * seconds;
          var sign = 1;

          switch (edge.name) {
            case 'left':
              sign = -1;
            // falls through

            case 'right':
              scrollCache.setScrollLeft(scrollCache.getScrollLeft() + velocity * sign);
              break;

            case 'top':
              sign = -1;
            // falls through

            case 'bottom':
              scrollCache.setScrollTop(scrollCache.getScrollTop() + velocity * sign);
              break;
          }
        }; // left/top are relative to document topleft


        AutoScroller.prototype.computeBestEdge = function (left, top) {
          var edgeThreshold = this.edgeThreshold;
          var bestSide = null;

          for (var _i = 0, _a = this.scrollCaches; _i < _a.length; _i++) {
            var scrollCache = _a[_i];
            var rect = scrollCache.clientRect;
            var leftDist = left - rect.left;
            var rightDist = rect.right - left;
            var topDist = top - rect.top;
            var bottomDist = rect.bottom - top; // completely within the rect?

            if (leftDist >= 0 && rightDist >= 0 && topDist >= 0 && bottomDist >= 0) {
              if (topDist <= edgeThreshold && this.everMovedUp && scrollCache.canScrollUp() && (!bestSide || bestSide.distance > topDist)) {
                bestSide = {
                  scrollCache: scrollCache,
                  name: 'top',
                  distance: topDist
                };
              }

              if (bottomDist <= edgeThreshold && this.everMovedDown && scrollCache.canScrollDown() && (!bestSide || bestSide.distance > bottomDist)) {
                bestSide = {
                  scrollCache: scrollCache,
                  name: 'bottom',
                  distance: bottomDist
                };
              }

              if (leftDist <= edgeThreshold && this.everMovedLeft && scrollCache.canScrollLeft() && (!bestSide || bestSide.distance > leftDist)) {
                bestSide = {
                  scrollCache: scrollCache,
                  name: 'left',
                  distance: leftDist
                };
              }

              if (rightDist <= edgeThreshold && this.everMovedRight && scrollCache.canScrollRight() && (!bestSide || bestSide.distance > rightDist)) {
                bestSide = {
                  scrollCache: scrollCache,
                  name: 'right',
                  distance: rightDist
                };
              }
            }
          }

          return bestSide;
        };

        AutoScroller.prototype.buildCaches = function () {
          return this.queryScrollEls().map(function (el) {
            if (el === window) {
              return new WindowScrollGeomCache(false); // false = don't listen to user-generated scrolls
            } else {
              return new ElementScrollGeomCache(el, false); // false = don't listen to user-generated scrolls
            }
          });
        };

        AutoScroller.prototype.queryScrollEls = function () {
          var els = [];

          for (var _i = 0, _a = this.scrollQuery; _i < _a.length; _i++) {
            var query = _a[_i];

            if (typeof query === 'object') {
              els.push(query);
            } else {
              els.push.apply(els, Array.prototype.slice.call(document.querySelectorAll(query)));
            }
          }

          return els;
        };

        return AutoScroller;
      }();
      /*
      Monitors dragging on an element. Has a number of high-level features:
      - minimum distance required before dragging
      - minimum wait time ("delay") before dragging
      - a mirror element that follows the pointer
      */


      var FeaturefulElementDragging =
      /** @class */
      function (_super) {
        __extends(FeaturefulElementDragging, _super);

        function FeaturefulElementDragging(containerEl) {
          var _this = _super.call(this, containerEl) || this; // options that can be directly set by caller
          // the caller can also set the PointerDragging's options as well


          _this.delay = null;
          _this.minDistance = 0;
          _this.touchScrollAllowed = true; // prevents drag from starting and blocks scrolling during drag

          _this.mirrorNeedsRevert = false;
          _this.isInteracting = false; // is the user validly moving the pointer? lasts until pointerup

          _this.isDragging = false; // is it INTENTFULLY dragging? lasts until after revert animation

          _this.isDelayEnded = false;
          _this.isDistanceSurpassed = false;
          _this.delayTimeoutId = null;

          _this.onPointerDown = function (ev) {
            if (!_this.isDragging) {
              // so new drag doesn't happen while revert animation is going
              _this.isInteracting = true;
              _this.isDelayEnded = false;
              _this.isDistanceSurpassed = false;
              Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["preventSelection"])(document.body);
              Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["preventContextMenu"])(document.body); // prevent links from being visited if there's an eventual drag.
              // also prevents selection in older browsers (maybe?).
              // not necessary for touch, besides, browser would complain about passiveness.

              if (!ev.isTouch) {
                ev.origEvent.preventDefault();
              }

              _this.emitter.trigger('pointerdown', ev);

              if (!_this.pointer.shouldIgnoreMove) {
                // actions related to initiating dragstart+dragmove+dragend...
                _this.mirror.setIsVisible(false); // reset. caller must set-visible


                _this.mirror.start(ev.subjectEl, ev.pageX, ev.pageY); // must happen on first pointer down


                _this.startDelay(ev);

                if (!_this.minDistance) {
                  _this.handleDistanceSurpassed(ev);
                }
              }
            }
          };

          _this.onPointerMove = function (ev) {
            if (_this.isInteracting) {
              // if false, still waiting for previous drag's revert
              _this.emitter.trigger('pointermove', ev);

              if (!_this.isDistanceSurpassed) {
                var minDistance = _this.minDistance;
                var distanceSq = void 0; // current distance from the origin, squared

                var deltaX = ev.deltaX,
                    deltaY = ev.deltaY;
                distanceSq = deltaX * deltaX + deltaY * deltaY;

                if (distanceSq >= minDistance * minDistance) {
                  // use pythagorean theorem
                  _this.handleDistanceSurpassed(ev);
                }
              }

              if (_this.isDragging) {
                // a real pointer move? (not one simulated by scrolling)
                if (ev.origEvent.type !== 'scroll') {
                  _this.mirror.handleMove(ev.pageX, ev.pageY);

                  _this.autoScroller.handleMove(ev.pageX, ev.pageY);
                }

                _this.emitter.trigger('dragmove', ev);
              }
            }
          };

          _this.onPointerUp = function (ev) {
            if (_this.isInteracting) {
              // if false, still waiting for previous drag's revert
              _this.isInteracting = false;
              Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["allowSelection"])(document.body);
              Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["allowContextMenu"])(document.body);

              _this.emitter.trigger('pointerup', ev); // can potentially set mirrorNeedsRevert


              if (_this.isDragging) {
                _this.autoScroller.stop();

                _this.tryStopDrag(ev); // which will stop the mirror

              }

              if (_this.delayTimeoutId) {
                clearTimeout(_this.delayTimeoutId);
                _this.delayTimeoutId = null;
              }
            }
          };

          var pointer = _this.pointer = new PointerDragging(containerEl);
          pointer.emitter.on('pointerdown', _this.onPointerDown);
          pointer.emitter.on('pointermove', _this.onPointerMove);
          pointer.emitter.on('pointerup', _this.onPointerUp);
          _this.mirror = new ElementMirror();
          _this.autoScroller = new AutoScroller();
          return _this;
        }

        FeaturefulElementDragging.prototype.destroy = function () {
          this.pointer.destroy();
        };

        FeaturefulElementDragging.prototype.startDelay = function (ev) {
          var _this = this;

          if (typeof this.delay === 'number') {
            this.delayTimeoutId = setTimeout(function () {
              _this.delayTimeoutId = null;

              _this.handleDelayEnd(ev);
            }, this.delay); // not assignable to number!
          } else {
            this.handleDelayEnd(ev);
          }
        };

        FeaturefulElementDragging.prototype.handleDelayEnd = function (ev) {
          this.isDelayEnded = true;
          this.tryStartDrag(ev);
        };

        FeaturefulElementDragging.prototype.handleDistanceSurpassed = function (ev) {
          this.isDistanceSurpassed = true;
          this.tryStartDrag(ev);
        };

        FeaturefulElementDragging.prototype.tryStartDrag = function (ev) {
          if (this.isDelayEnded && this.isDistanceSurpassed) {
            if (!this.pointer.wasTouchScroll || this.touchScrollAllowed) {
              this.isDragging = true;
              this.mirrorNeedsRevert = false;
              this.autoScroller.start(ev.pageX, ev.pageY);
              this.emitter.trigger('dragstart', ev);

              if (this.touchScrollAllowed === false) {
                this.pointer.cancelTouchScroll();
              }
            }
          }
        };

        FeaturefulElementDragging.prototype.tryStopDrag = function (ev) {
          // .stop() is ALWAYS asynchronous, which we NEED because we want all pointerup events
          // that come from the document to fire beforehand. much more convenient this way.
          this.mirror.stop(this.mirrorNeedsRevert, this.stopDrag.bind(this, ev) // bound with args
          );
        };

        FeaturefulElementDragging.prototype.stopDrag = function (ev) {
          this.isDragging = false;
          this.emitter.trigger('dragend', ev);
        }; // fill in the implementations...


        FeaturefulElementDragging.prototype.setIgnoreMove = function (bool) {
          this.pointer.shouldIgnoreMove = bool;
        };

        FeaturefulElementDragging.prototype.setMirrorIsVisible = function (bool) {
          this.mirror.setIsVisible(bool);
        };

        FeaturefulElementDragging.prototype.setMirrorNeedsRevert = function (bool) {
          this.mirrorNeedsRevert = bool;
        };

        FeaturefulElementDragging.prototype.setAutoScrollEnabled = function (bool) {
          this.autoScroller.isEnabled = bool;
        };

        return FeaturefulElementDragging;
      }(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["ElementDragging"]);
      /*
      When this class is instantiated, it records the offset of an element (relative to the document topleft),
      and continues to monitor scrolling, updating the cached coordinates if it needs to.
      Does not access the DOM after instantiation, so highly performant.
      
      Also keeps track of all scrolling/overflow:hidden containers that are parents of the given element
      and an determine if a given point is inside the combined clipping rectangle.
      */


      var OffsetTracker =
      /** @class */
      function () {
        function OffsetTracker(el) {
          this.origRect = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["computeRect"])(el); // will work fine for divs that have overflow:hidden

          this.scrollCaches = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["getClippingParents"])(el).map(function (el) {
            return new ElementScrollGeomCache(el, true); // listen=true
          });
        }

        OffsetTracker.prototype.destroy = function () {
          for (var _i = 0, _a = this.scrollCaches; _i < _a.length; _i++) {
            var scrollCache = _a[_i];
            scrollCache.destroy();
          }
        };

        OffsetTracker.prototype.computeLeft = function () {
          var left = this.origRect.left;

          for (var _i = 0, _a = this.scrollCaches; _i < _a.length; _i++) {
            var scrollCache = _a[_i];
            left += scrollCache.origScrollLeft - scrollCache.getScrollLeft();
          }

          return left;
        };

        OffsetTracker.prototype.computeTop = function () {
          var top = this.origRect.top;

          for (var _i = 0, _a = this.scrollCaches; _i < _a.length; _i++) {
            var scrollCache = _a[_i];
            top += scrollCache.origScrollTop - scrollCache.getScrollTop();
          }

          return top;
        };

        OffsetTracker.prototype.isWithinClipping = function (pageX, pageY) {
          var point = {
            left: pageX,
            top: pageY
          };

          for (var _i = 0, _a = this.scrollCaches; _i < _a.length; _i++) {
            var scrollCache = _a[_i];

            if (!isIgnoredClipping(scrollCache.getEventTarget()) && !Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["pointInsideRect"])(point, scrollCache.clientRect)) {
              return false;
            }
          }

          return true;
        };

        return OffsetTracker;
      }(); // certain clipping containers should never constrain interactions, like <html> and <body>
      // https://github.com/fullcalendar/fullcalendar/issues/3615


      function isIgnoredClipping(node) {
        var tagName = node.tagName;
        return tagName === 'HTML' || tagName === 'BODY';
      }
      /*
      Tracks movement over multiple droppable areas (aka "hits")
      that exist in one or more DateComponents.
      Relies on an existing draggable.
      
      emits:
      - pointerdown
      - dragstart
      - hitchange - fires initially, even if not over a hit
      - pointerup
      - (hitchange - again, to null, if ended over a hit)
      - dragend
      */


      var HitDragging =
      /** @class */
      function () {
        function HitDragging(dragging, droppableStore) {
          var _this = this; // options that can be set by caller


          this.useSubjectCenter = false;
          this.requireInitial = true; // if doesn't start out on a hit, won't emit any events

          this.initialHit = null;
          this.movingHit = null;
          this.finalHit = null; // won't ever be populated if shouldIgnoreMove

          this.handlePointerDown = function (ev) {
            var dragging = _this.dragging;
            _this.initialHit = null;
            _this.movingHit = null;
            _this.finalHit = null;

            _this.prepareHits();

            _this.processFirstCoord(ev);

            if (_this.initialHit || !_this.requireInitial) {
              dragging.setIgnoreMove(false);

              _this.emitter.trigger('pointerdown', ev); // TODO: fire this before computing processFirstCoord, so listeners can cancel. this gets fired by almost every handler :(

            } else {
              dragging.setIgnoreMove(true);
            }
          };

          this.handleDragStart = function (ev) {
            _this.emitter.trigger('dragstart', ev);

            _this.handleMove(ev, true); // force = fire even if initially null

          };

          this.handleDragMove = function (ev) {
            _this.emitter.trigger('dragmove', ev);

            _this.handleMove(ev);
          };

          this.handlePointerUp = function (ev) {
            _this.releaseHits();

            _this.emitter.trigger('pointerup', ev);
          };

          this.handleDragEnd = function (ev) {
            if (_this.movingHit) {
              _this.emitter.trigger('hitupdate', null, true, ev);
            }

            _this.finalHit = _this.movingHit;
            _this.movingHit = null;

            _this.emitter.trigger('dragend', ev);
          };

          this.droppableStore = droppableStore;
          dragging.emitter.on('pointerdown', this.handlePointerDown);
          dragging.emitter.on('dragstart', this.handleDragStart);
          dragging.emitter.on('dragmove', this.handleDragMove);
          dragging.emitter.on('pointerup', this.handlePointerUp);
          dragging.emitter.on('dragend', this.handleDragEnd);
          this.dragging = dragging;
          this.emitter = new _fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["EmitterMixin"]();
        } // sets initialHit
        // sets coordAdjust


        HitDragging.prototype.processFirstCoord = function (ev) {
          var origPoint = {
            left: ev.pageX,
            top: ev.pageY
          };
          var adjustedPoint = origPoint;
          var subjectEl = ev.subjectEl;
          var subjectRect;

          if (subjectEl !== document) {
            subjectRect = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["computeRect"])(subjectEl);
            adjustedPoint = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["constrainPoint"])(adjustedPoint, subjectRect);
          }

          var initialHit = this.initialHit = this.queryHitForOffset(adjustedPoint.left, adjustedPoint.top);

          if (initialHit) {
            if (this.useSubjectCenter && subjectRect) {
              var slicedSubjectRect = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["intersectRects"])(subjectRect, initialHit.rect);

              if (slicedSubjectRect) {
                adjustedPoint = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["getRectCenter"])(slicedSubjectRect);
              }
            }

            this.coordAdjust = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["diffPoints"])(adjustedPoint, origPoint);
          } else {
            this.coordAdjust = {
              left: 0,
              top: 0
            };
          }
        };

        HitDragging.prototype.handleMove = function (ev, forceHandle) {
          var hit = this.queryHitForOffset(ev.pageX + this.coordAdjust.left, ev.pageY + this.coordAdjust.top);

          if (forceHandle || !isHitsEqual(this.movingHit, hit)) {
            this.movingHit = hit;
            this.emitter.trigger('hitupdate', hit, false, ev);
          }
        };

        HitDragging.prototype.prepareHits = function () {
          this.offsetTrackers = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["mapHash"])(this.droppableStore, function (interactionSettings) {
            interactionSettings.component.buildPositionCaches();
            return new OffsetTracker(interactionSettings.el);
          });
        };

        HitDragging.prototype.releaseHits = function () {
          var offsetTrackers = this.offsetTrackers;

          for (var id in offsetTrackers) {
            offsetTrackers[id].destroy();
          }

          this.offsetTrackers = {};
        };

        HitDragging.prototype.queryHitForOffset = function (offsetLeft, offsetTop) {
          var _a = this,
              droppableStore = _a.droppableStore,
              offsetTrackers = _a.offsetTrackers;

          var bestHit = null;

          for (var id in droppableStore) {
            var component = droppableStore[id].component;
            var offsetTracker = offsetTrackers[id];

            if (offsetTracker.isWithinClipping(offsetLeft, offsetTop)) {
              var originLeft = offsetTracker.computeLeft();
              var originTop = offsetTracker.computeTop();
              var positionLeft = offsetLeft - originLeft;
              var positionTop = offsetTop - originTop;
              var origRect = offsetTracker.origRect;
              var width = origRect.right - origRect.left;
              var height = origRect.bottom - origRect.top;

              if ( // must be within the element's bounds
              positionLeft >= 0 && positionLeft < width && positionTop >= 0 && positionTop < height) {
                var hit = component.queryHit(positionLeft, positionTop, width, height);

                if (hit && ( // make sure the hit is within activeRange, meaning it's not a deal cell
                !component.props.dateProfile || // hack for DayTile
                Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["rangeContainsRange"])(component.props.dateProfile.activeRange, hit.dateSpan.range)) && (!bestHit || hit.layer > bestHit.layer)) {
                  // TODO: better way to re-orient rectangle
                  hit.rect.left += originLeft;
                  hit.rect.right += originLeft;
                  hit.rect.top += originTop;
                  hit.rect.bottom += originTop;
                  bestHit = hit;
                }
              }
            }
          }

          return bestHit;
        };

        return HitDragging;
      }();

      function isHitsEqual(hit0, hit1) {
        if (!hit0 && !hit1) {
          return true;
        }

        if (Boolean(hit0) !== Boolean(hit1)) {
          return false;
        }

        return Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["isDateSpansEqual"])(hit0.dateSpan, hit1.dateSpan);
      }
      /*
      Monitors when the user clicks on a specific date/time of a component.
      A pointerdown+pointerup on the same "hit" constitutes a click.
      */


      var DateClicking =
      /** @class */
      function (_super) {
        __extends(DateClicking, _super);

        function DateClicking(settings) {
          var _this = _super.call(this, settings) || this;

          _this.handlePointerDown = function (ev) {
            var dragging = _this.dragging; // do this in pointerdown (not dragend) because DOM might be mutated by the time dragend is fired

            dragging.setIgnoreMove(!_this.component.isValidDateDownEl(dragging.pointer.downEl));
          }; // won't even fire if moving was ignored


          _this.handleDragEnd = function (ev) {
            var component = _this.component;
            var _a = component.context,
                calendar = _a.calendar,
                view = _a.view;
            var pointer = _this.dragging.pointer;

            if (!pointer.wasTouchScroll) {
              var _b = _this.hitDragging,
                  initialHit = _b.initialHit,
                  finalHit = _b.finalHit;

              if (initialHit && finalHit && isHitsEqual(initialHit, finalHit)) {
                calendar.triggerDateClick(initialHit.dateSpan, initialHit.dayEl, view, ev.origEvent);
              }
            }
          };

          var component = settings.component; // we DO want to watch pointer moves because otherwise finalHit won't get populated

          _this.dragging = new FeaturefulElementDragging(component.el);
          _this.dragging.autoScroller.isEnabled = false;
          var hitDragging = _this.hitDragging = new HitDragging(_this.dragging, Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["interactionSettingsToStore"])(settings));
          hitDragging.emitter.on('pointerdown', _this.handlePointerDown);
          hitDragging.emitter.on('dragend', _this.handleDragEnd);
          return _this;
        }

        DateClicking.prototype.destroy = function () {
          this.dragging.destroy();
        };

        return DateClicking;
      }(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["Interaction"]);
      /*
      Tracks when the user selects a portion of time of a component,
      constituted by a drag over date cells, with a possible delay at the beginning of the drag.
      */


      var DateSelecting =
      /** @class */
      function (_super) {
        __extends(DateSelecting, _super);

        function DateSelecting(settings) {
          var _this = _super.call(this, settings) || this;

          _this.dragSelection = null;

          _this.handlePointerDown = function (ev) {
            var _a = _this,
                component = _a.component,
                dragging = _a.dragging;
            var options = component.context.options;
            var canSelect = options.selectable && component.isValidDateDownEl(ev.origEvent.target); // don't bother to watch expensive moves if component won't do selection

            dragging.setIgnoreMove(!canSelect); // if touch, require user to hold down

            dragging.delay = ev.isTouch ? getComponentTouchDelay(component) : null;
          };

          _this.handleDragStart = function (ev) {
            _this.component.context.calendar.unselect(ev); // unselect previous selections

          };

          _this.handleHitUpdate = function (hit, isFinal) {
            var calendar = _this.component.context.calendar;
            var dragSelection = null;
            var isInvalid = false;

            if (hit) {
              dragSelection = joinHitsIntoSelection(_this.hitDragging.initialHit, hit, calendar.pluginSystem.hooks.dateSelectionTransformers);

              if (!dragSelection || !_this.component.isDateSelectionValid(dragSelection)) {
                isInvalid = true;
                dragSelection = null;
              }
            }

            if (dragSelection) {
              calendar.dispatch({
                type: 'SELECT_DATES',
                selection: dragSelection
              });
            } else if (!isFinal) {
              // only unselect if moved away while dragging
              calendar.dispatch({
                type: 'UNSELECT_DATES'
              });
            }

            if (!isInvalid) {
              Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["enableCursor"])();
            } else {
              Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["disableCursor"])();
            }

            if (!isFinal) {
              _this.dragSelection = dragSelection; // only clear if moved away from all hits while dragging
            }
          };

          _this.handlePointerUp = function (pev) {
            if (_this.dragSelection) {
              // selection is already rendered, so just need to report selection
              _this.component.context.calendar.triggerDateSelect(_this.dragSelection, pev);

              _this.dragSelection = null;
            }
          };

          var component = settings.component;
          var options = component.context.options;
          var dragging = _this.dragging = new FeaturefulElementDragging(component.el);
          dragging.touchScrollAllowed = false;
          dragging.minDistance = options.selectMinDistance || 0;
          dragging.autoScroller.isEnabled = options.dragScroll;
          var hitDragging = _this.hitDragging = new HitDragging(_this.dragging, Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["interactionSettingsToStore"])(settings));
          hitDragging.emitter.on('pointerdown', _this.handlePointerDown);
          hitDragging.emitter.on('dragstart', _this.handleDragStart);
          hitDragging.emitter.on('hitupdate', _this.handleHitUpdate);
          hitDragging.emitter.on('pointerup', _this.handlePointerUp);
          return _this;
        }

        DateSelecting.prototype.destroy = function () {
          this.dragging.destroy();
        };

        return DateSelecting;
      }(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["Interaction"]);

      function getComponentTouchDelay(component) {
        var options = component.context.options;
        var delay = options.selectLongPressDelay;

        if (delay == null) {
          delay = options.longPressDelay;
        }

        return delay;
      }

      function joinHitsIntoSelection(hit0, hit1, dateSelectionTransformers) {
        var dateSpan0 = hit0.dateSpan;
        var dateSpan1 = hit1.dateSpan;
        var ms = [dateSpan0.range.start, dateSpan0.range.end, dateSpan1.range.start, dateSpan1.range.end];
        ms.sort(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["compareNumbers"]);
        var props = {};

        for (var _i = 0, dateSelectionTransformers_1 = dateSelectionTransformers; _i < dateSelectionTransformers_1.length; _i++) {
          var transformer = dateSelectionTransformers_1[_i];
          var res = transformer(hit0, hit1);

          if (res === false) {
            return null;
          } else if (res) {
            _assign(props, res);
          }
        }

        props.range = {
          start: ms[0],
          end: ms[3]
        };
        props.allDay = dateSpan0.allDay;
        return props;
      }

      var EventDragging =
      /** @class */
      function (_super) {
        __extends(EventDragging, _super);

        function EventDragging(settings) {
          var _this = _super.call(this, settings) || this; // internal state


          _this.subjectSeg = null; // the seg being selected/dragged

          _this.isDragging = false;
          _this.eventRange = null;
          _this.relevantEvents = null; // the events being dragged

          _this.receivingCalendar = null;
          _this.validMutation = null;
          _this.mutatedRelevantEvents = null;

          _this.handlePointerDown = function (ev) {
            var origTarget = ev.origEvent.target;
            var _a = _this,
                component = _a.component,
                dragging = _a.dragging;
            var mirror = dragging.mirror;
            var options = component.context.options;
            var initialCalendar = component.context.calendar;
            var subjectSeg = _this.subjectSeg = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["getElSeg"])(ev.subjectEl);
            var eventRange = _this.eventRange = subjectSeg.eventRange;
            var eventInstanceId = eventRange.instance.instanceId;
            _this.relevantEvents = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["getRelevantEvents"])(initialCalendar.state.eventStore, eventInstanceId);
            dragging.minDistance = ev.isTouch ? 0 : options.eventDragMinDistance;
            dragging.delay = // only do a touch delay if touch and this event hasn't been selected yet
            ev.isTouch && eventInstanceId !== component.props.eventSelection ? getComponentTouchDelay$1(component) : null;
            mirror.parentNode = initialCalendar.el;
            mirror.revertDuration = options.dragRevertDuration;
            var isValid = component.isValidSegDownEl(origTarget) && !Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["elementClosest"])(origTarget, '.fc-resizer'); // NOT on a resizer

            dragging.setIgnoreMove(!isValid); // disable dragging for elements that are resizable (ie, selectable)
            // but are not draggable

            _this.isDragging = isValid && ev.subjectEl.classList.contains('fc-draggable');
          };

          _this.handleDragStart = function (ev) {
            var context = _this.component.context;
            var initialCalendar = context.calendar;
            var eventRange = _this.eventRange;
            var eventInstanceId = eventRange.instance.instanceId;

            if (ev.isTouch) {
              // need to select a different event?
              if (eventInstanceId !== _this.component.props.eventSelection) {
                initialCalendar.dispatch({
                  type: 'SELECT_EVENT',
                  eventInstanceId: eventInstanceId
                });
              }
            } else {
              // if now using mouse, but was previous touch interaction, clear selected event
              initialCalendar.dispatch({
                type: 'UNSELECT_EVENT'
              });
            }

            if (_this.isDragging) {
              initialCalendar.unselect(ev); // unselect *date* selection

              initialCalendar.publiclyTrigger('eventDragStart', [{
                el: _this.subjectSeg.el,
                event: new _fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["EventApi"](initialCalendar, eventRange.def, eventRange.instance),
                jsEvent: ev.origEvent,
                view: context.view
              }]);
            }
          };

          _this.handleHitUpdate = function (hit, isFinal) {
            if (!_this.isDragging) {
              return;
            }

            var relevantEvents = _this.relevantEvents;
            var initialHit = _this.hitDragging.initialHit;
            var initialCalendar = _this.component.context.calendar; // states based on new hit

            var receivingCalendar = null;
            var mutation = null;
            var mutatedRelevantEvents = null;
            var isInvalid = false;
            var interaction = {
              affectedEvents: relevantEvents,
              mutatedEvents: Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["createEmptyEventStore"])(),
              isEvent: true,
              origSeg: _this.subjectSeg
            };

            if (hit) {
              var receivingComponent = hit.component;
              receivingCalendar = receivingComponent.context.calendar;
              var receivingOptions = receivingComponent.context.options;

              if (initialCalendar === receivingCalendar || receivingOptions.editable && receivingOptions.droppable) {
                mutation = computeEventMutation(initialHit, hit, receivingCalendar.pluginSystem.hooks.eventDragMutationMassagers);

                if (mutation) {
                  mutatedRelevantEvents = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["applyMutationToEventStore"])(relevantEvents, receivingCalendar.eventUiBases, mutation, receivingCalendar);
                  interaction.mutatedEvents = mutatedRelevantEvents;

                  if (!receivingComponent.isInteractionValid(interaction)) {
                    isInvalid = true;
                    mutation = null;
                    mutatedRelevantEvents = null;
                    interaction.mutatedEvents = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["createEmptyEventStore"])();
                  }
                }
              } else {
                receivingCalendar = null;
              }
            }

            _this.displayDrag(receivingCalendar, interaction);

            if (!isInvalid) {
              Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["enableCursor"])();
            } else {
              Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["disableCursor"])();
            }

            if (!isFinal) {
              if (initialCalendar === receivingCalendar && // TODO: write test for this
              isHitsEqual(initialHit, hit)) {
                mutation = null;
              }

              _this.dragging.setMirrorNeedsRevert(!mutation); // render the mirror if no already-rendered mirror
              // TODO: wish we could somehow wait for dispatch to guarantee render


              _this.dragging.setMirrorIsVisible(!hit || !document.querySelector('.fc-mirror')); // assign states based on new hit


              _this.receivingCalendar = receivingCalendar;
              _this.validMutation = mutation;
              _this.mutatedRelevantEvents = mutatedRelevantEvents;
            }
          };

          _this.handlePointerUp = function () {
            if (!_this.isDragging) {
              _this.cleanup(); // because handleDragEnd won't fire

            }
          };

          _this.handleDragEnd = function (ev) {
            if (_this.isDragging) {
              var context = _this.component.context;
              var initialCalendar_1 = context.calendar;
              var initialView = context.view;
              var _a = _this,
                  receivingCalendar = _a.receivingCalendar,
                  validMutation = _a.validMutation;
              var eventDef = _this.eventRange.def;
              var eventInstance = _this.eventRange.instance;
              var eventApi = new _fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["EventApi"](initialCalendar_1, eventDef, eventInstance);
              var relevantEvents_1 = _this.relevantEvents;
              var mutatedRelevantEvents = _this.mutatedRelevantEvents;
              var finalHit = _this.hitDragging.finalHit;

              _this.clearDrag(); // must happen after revert animation


              initialCalendar_1.publiclyTrigger('eventDragStop', [{
                el: _this.subjectSeg.el,
                event: eventApi,
                jsEvent: ev.origEvent,
                view: initialView
              }]);

              if (validMutation) {
                // dropped within same calendar
                if (receivingCalendar === initialCalendar_1) {
                  initialCalendar_1.dispatch({
                    type: 'MERGE_EVENTS',
                    eventStore: mutatedRelevantEvents
                  });
                  var transformed = {};

                  for (var _i = 0, _b = initialCalendar_1.pluginSystem.hooks.eventDropTransformers; _i < _b.length; _i++) {
                    var transformer = _b[_i];

                    _assign(transformed, transformer(validMutation, initialCalendar_1));
                  }

                  var eventDropArg = _assign({}, transformed, {
                    el: ev.subjectEl,
                    delta: validMutation.datesDelta,
                    oldEvent: eventApi,
                    event: new _fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["EventApi"]( // the data AFTER the mutation
                    initialCalendar_1, mutatedRelevantEvents.defs[eventDef.defId], eventInstance ? mutatedRelevantEvents.instances[eventInstance.instanceId] : null),
                    revert: function revert() {
                      initialCalendar_1.dispatch({
                        type: 'MERGE_EVENTS',
                        eventStore: relevantEvents_1
                      });
                    },
                    jsEvent: ev.origEvent,
                    view: initialView
                  });

                  initialCalendar_1.publiclyTrigger('eventDrop', [eventDropArg]); // dropped in different calendar
                } else if (receivingCalendar) {
                  initialCalendar_1.publiclyTrigger('eventLeave', [{
                    draggedEl: ev.subjectEl,
                    event: eventApi,
                    view: initialView
                  }]);
                  initialCalendar_1.dispatch({
                    type: 'REMOVE_EVENT_INSTANCES',
                    instances: _this.mutatedRelevantEvents.instances
                  });
                  receivingCalendar.dispatch({
                    type: 'MERGE_EVENTS',
                    eventStore: _this.mutatedRelevantEvents
                  });

                  if (ev.isTouch) {
                    receivingCalendar.dispatch({
                      type: 'SELECT_EVENT',
                      eventInstanceId: eventInstance.instanceId
                    });
                  }

                  var dropArg = _assign({}, receivingCalendar.buildDatePointApi(finalHit.dateSpan), {
                    draggedEl: ev.subjectEl,
                    jsEvent: ev.origEvent,
                    view: finalHit.component // should this be finalHit.component.view? See #4644

                  });

                  receivingCalendar.publiclyTrigger('drop', [dropArg]);
                  receivingCalendar.publiclyTrigger('eventReceive', [{
                    draggedEl: ev.subjectEl,
                    event: new _fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["EventApi"]( // the data AFTER the mutation
                    receivingCalendar, mutatedRelevantEvents.defs[eventDef.defId], mutatedRelevantEvents.instances[eventInstance.instanceId]),
                    view: finalHit.component // should this be finalHit.component.view? See #4644

                  }]);
                }
              } else {
                initialCalendar_1.publiclyTrigger('_noEventDrop');
              }
            }

            _this.cleanup();
          };

          var component = _this.component;
          var options = component.context.options;
          var dragging = _this.dragging = new FeaturefulElementDragging(component.el);
          dragging.pointer.selector = EventDragging.SELECTOR;
          dragging.touchScrollAllowed = false;
          dragging.autoScroller.isEnabled = options.dragScroll;
          var hitDragging = _this.hitDragging = new HitDragging(_this.dragging, _fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["interactionSettingsStore"]);
          hitDragging.useSubjectCenter = settings.useEventCenter;
          hitDragging.emitter.on('pointerdown', _this.handlePointerDown);
          hitDragging.emitter.on('dragstart', _this.handleDragStart);
          hitDragging.emitter.on('hitupdate', _this.handleHitUpdate);
          hitDragging.emitter.on('pointerup', _this.handlePointerUp);
          hitDragging.emitter.on('dragend', _this.handleDragEnd);
          return _this;
        }

        EventDragging.prototype.destroy = function () {
          this.dragging.destroy();
        }; // render a drag state on the next receivingCalendar


        EventDragging.prototype.displayDrag = function (nextCalendar, state) {
          var initialCalendar = this.component.context.calendar;
          var prevCalendar = this.receivingCalendar; // does the previous calendar need to be cleared?

          if (prevCalendar && prevCalendar !== nextCalendar) {
            // does the initial calendar need to be cleared?
            // if so, don't clear all the way. we still need to to hide the affectedEvents
            if (prevCalendar === initialCalendar) {
              prevCalendar.dispatch({
                type: 'SET_EVENT_DRAG',
                state: {
                  affectedEvents: state.affectedEvents,
                  mutatedEvents: Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["createEmptyEventStore"])(),
                  isEvent: true,
                  origSeg: state.origSeg
                }
              }); // completely clear the old calendar if it wasn't the initial
            } else {
              prevCalendar.dispatch({
                type: 'UNSET_EVENT_DRAG'
              });
            }
          }

          if (nextCalendar) {
            nextCalendar.dispatch({
              type: 'SET_EVENT_DRAG',
              state: state
            });
          }
        };

        EventDragging.prototype.clearDrag = function () {
          var initialCalendar = this.component.context.calendar;
          var receivingCalendar = this.receivingCalendar;

          if (receivingCalendar) {
            receivingCalendar.dispatch({
              type: 'UNSET_EVENT_DRAG'
            });
          } // the initial calendar might have an dummy drag state from displayDrag


          if (initialCalendar !== receivingCalendar) {
            initialCalendar.dispatch({
              type: 'UNSET_EVENT_DRAG'
            });
          }
        };

        EventDragging.prototype.cleanup = function () {
          this.subjectSeg = null;
          this.isDragging = false;
          this.eventRange = null;
          this.relevantEvents = null;
          this.receivingCalendar = null;
          this.validMutation = null;
          this.mutatedRelevantEvents = null;
        };

        EventDragging.SELECTOR = '.fc-draggable, .fc-resizable'; // TODO: test this in IE11

        return EventDragging;
      }(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["Interaction"]);

      function computeEventMutation(hit0, hit1, massagers) {
        var dateSpan0 = hit0.dateSpan;
        var dateSpan1 = hit1.dateSpan;
        var date0 = dateSpan0.range.start;
        var date1 = dateSpan1.range.start;
        var standardProps = {};

        if (dateSpan0.allDay !== dateSpan1.allDay) {
          standardProps.allDay = dateSpan1.allDay;
          standardProps.hasEnd = hit1.component.context.options.allDayMaintainDuration;

          if (dateSpan1.allDay) {
            // means date1 is already start-of-day,
            // but date0 needs to be converted
            date0 = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["startOfDay"])(date0);
          }
        }

        var delta = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["diffDates"])(date0, date1, hit0.component.context.dateEnv, hit0.component === hit1.component ? hit0.component.largeUnit : null);

        if (delta.milliseconds) {
          // has hours/minutes/seconds
          standardProps.allDay = false;
        }

        var mutation = {
          datesDelta: delta,
          standardProps: standardProps
        };

        for (var _i = 0, massagers_1 = massagers; _i < massagers_1.length; _i++) {
          var massager = massagers_1[_i];
          massager(mutation, hit0, hit1);
        }

        return mutation;
      }

      function getComponentTouchDelay$1(component) {
        var options = component.context.options;
        var delay = options.eventLongPressDelay;

        if (delay == null) {
          delay = options.longPressDelay;
        }

        return delay;
      }

      var EventDragging$1 =
      /** @class */
      function (_super) {
        __extends(EventDragging, _super);

        function EventDragging(settings) {
          var _this = _super.call(this, settings) || this; // internal state


          _this.draggingSeg = null; // TODO: rename to resizingSeg? subjectSeg?

          _this.eventRange = null;
          _this.relevantEvents = null;
          _this.validMutation = null;
          _this.mutatedRelevantEvents = null;

          _this.handlePointerDown = function (ev) {
            var component = _this.component;

            var seg = _this.querySeg(ev);

            var eventRange = _this.eventRange = seg.eventRange;
            _this.dragging.minDistance = component.context.options.eventDragMinDistance; // if touch, need to be working with a selected event

            _this.dragging.setIgnoreMove(!_this.component.isValidSegDownEl(ev.origEvent.target) || ev.isTouch && _this.component.props.eventSelection !== eventRange.instance.instanceId);
          };

          _this.handleDragStart = function (ev) {
            var _a = _this.component.context,
                calendar = _a.calendar,
                view = _a.view;
            var eventRange = _this.eventRange;
            _this.relevantEvents = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["getRelevantEvents"])(calendar.state.eventStore, _this.eventRange.instance.instanceId);
            _this.draggingSeg = _this.querySeg(ev);
            calendar.unselect();
            calendar.publiclyTrigger('eventResizeStart', [{
              el: _this.draggingSeg.el,
              event: new _fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["EventApi"](calendar, eventRange.def, eventRange.instance),
              jsEvent: ev.origEvent,
              view: view
            }]);
          };

          _this.handleHitUpdate = function (hit, isFinal, ev) {
            var calendar = _this.component.context.calendar;
            var relevantEvents = _this.relevantEvents;
            var initialHit = _this.hitDragging.initialHit;
            var eventInstance = _this.eventRange.instance;
            var mutation = null;
            var mutatedRelevantEvents = null;
            var isInvalid = false;
            var interaction = {
              affectedEvents: relevantEvents,
              mutatedEvents: Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["createEmptyEventStore"])(),
              isEvent: true,
              origSeg: _this.draggingSeg
            };

            if (hit) {
              mutation = computeMutation(initialHit, hit, ev.subjectEl.classList.contains('fc-start-resizer'), eventInstance.range, calendar.pluginSystem.hooks.eventResizeJoinTransforms);
            }

            if (mutation) {
              mutatedRelevantEvents = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["applyMutationToEventStore"])(relevantEvents, calendar.eventUiBases, mutation, calendar);
              interaction.mutatedEvents = mutatedRelevantEvents;

              if (!_this.component.isInteractionValid(interaction)) {
                isInvalid = true;
                mutation = null;
                mutatedRelevantEvents = null;
                interaction.mutatedEvents = null;
              }
            }

            if (mutatedRelevantEvents) {
              calendar.dispatch({
                type: 'SET_EVENT_RESIZE',
                state: interaction
              });
            } else {
              calendar.dispatch({
                type: 'UNSET_EVENT_RESIZE'
              });
            }

            if (!isInvalid) {
              Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["enableCursor"])();
            } else {
              Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["disableCursor"])();
            }

            if (!isFinal) {
              if (mutation && isHitsEqual(initialHit, hit)) {
                mutation = null;
              }

              _this.validMutation = mutation;
              _this.mutatedRelevantEvents = mutatedRelevantEvents;
            }
          };

          _this.handleDragEnd = function (ev) {
            var _a = _this.component.context,
                calendar = _a.calendar,
                view = _a.view;
            var eventDef = _this.eventRange.def;
            var eventInstance = _this.eventRange.instance;
            var eventApi = new _fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["EventApi"](calendar, eventDef, eventInstance);
            var relevantEvents = _this.relevantEvents;
            var mutatedRelevantEvents = _this.mutatedRelevantEvents;
            calendar.publiclyTrigger('eventResizeStop', [{
              el: _this.draggingSeg.el,
              event: eventApi,
              jsEvent: ev.origEvent,
              view: view
            }]);

            if (_this.validMutation) {
              calendar.dispatch({
                type: 'MERGE_EVENTS',
                eventStore: mutatedRelevantEvents
              });
              calendar.publiclyTrigger('eventResize', [{
                el: _this.draggingSeg.el,
                startDelta: _this.validMutation.startDelta || Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["createDuration"])(0),
                endDelta: _this.validMutation.endDelta || Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["createDuration"])(0),
                prevEvent: eventApi,
                event: new _fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["EventApi"]( // the data AFTER the mutation
                calendar, mutatedRelevantEvents.defs[eventDef.defId], eventInstance ? mutatedRelevantEvents.instances[eventInstance.instanceId] : null),
                revert: function revert() {
                  calendar.dispatch({
                    type: 'MERGE_EVENTS',
                    eventStore: relevantEvents
                  });
                },
                jsEvent: ev.origEvent,
                view: view
              }]);
            } else {
              calendar.publiclyTrigger('_noEventResize');
            } // reset all internal state


            _this.draggingSeg = null;
            _this.relevantEvents = null;
            _this.validMutation = null; // okay to keep eventInstance around. useful to set it in handlePointerDown
          };

          var component = settings.component;
          var dragging = _this.dragging = new FeaturefulElementDragging(component.el);
          dragging.pointer.selector = '.fc-resizer';
          dragging.touchScrollAllowed = false;
          dragging.autoScroller.isEnabled = component.context.options.dragScroll;
          var hitDragging = _this.hitDragging = new HitDragging(_this.dragging, Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["interactionSettingsToStore"])(settings));
          hitDragging.emitter.on('pointerdown', _this.handlePointerDown);
          hitDragging.emitter.on('dragstart', _this.handleDragStart);
          hitDragging.emitter.on('hitupdate', _this.handleHitUpdate);
          hitDragging.emitter.on('dragend', _this.handleDragEnd);
          return _this;
        }

        EventDragging.prototype.destroy = function () {
          this.dragging.destroy();
        };

        EventDragging.prototype.querySeg = function (ev) {
          return Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["getElSeg"])(Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["elementClosest"])(ev.subjectEl, this.component.fgSegSelector));
        };

        return EventDragging;
      }(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["Interaction"]);

      function computeMutation(hit0, hit1, isFromStart, instanceRange, transforms) {
        var dateEnv = hit0.component.context.dateEnv;
        var date0 = hit0.dateSpan.range.start;
        var date1 = hit1.dateSpan.range.start;
        var delta = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["diffDates"])(date0, date1, dateEnv, hit0.component.largeUnit);
        var props = {};

        for (var _i = 0, transforms_1 = transforms; _i < transforms_1.length; _i++) {
          var transform = transforms_1[_i];
          var res = transform(hit0, hit1);

          if (res === false) {
            return null;
          } else if (res) {
            _assign(props, res);
          }
        }

        if (isFromStart) {
          if (dateEnv.add(instanceRange.start, delta) < instanceRange.end) {
            props.startDelta = delta;
            return props;
          }
        } else {
          if (dateEnv.add(instanceRange.end, delta) > instanceRange.start) {
            props.endDelta = delta;
            return props;
          }
        }

        return null;
      }

      var UnselectAuto =
      /** @class */
      function () {
        function UnselectAuto(calendar) {
          var _this = this;

          this.isRecentPointerDateSelect = false; // wish we could use a selector to detect date selection, but uses hit system

          this.onSelect = function (selectInfo) {
            if (selectInfo.jsEvent) {
              _this.isRecentPointerDateSelect = true;
            }
          };

          this.onDocumentPointerUp = function (pev) {
            var _a = _this,
                calendar = _a.calendar,
                documentPointer = _a.documentPointer;
            var state = calendar.state; // touch-scrolling should never unfocus any type of selection

            if (!documentPointer.wasTouchScroll) {
              if (state.dateSelection && // an existing date selection?
              !_this.isRecentPointerDateSelect // a new pointer-initiated date selection since last onDocumentPointerUp?
              ) {
                  var unselectAuto = calendar.viewOpt('unselectAuto');
                  var unselectCancel = calendar.viewOpt('unselectCancel');

                  if (unselectAuto && (!unselectAuto || !Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["elementClosest"])(documentPointer.downEl, unselectCancel))) {
                    calendar.unselect(pev);
                  }
                }

              if (state.eventSelection && // an existing event selected?
              !Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["elementClosest"])(documentPointer.downEl, EventDragging.SELECTOR) // interaction DIDN'T start on an event
              ) {
                  calendar.dispatch({
                    type: 'UNSELECT_EVENT'
                  });
                }
            }

            _this.isRecentPointerDateSelect = false;
          };

          this.calendar = calendar;
          var documentPointer = this.documentPointer = new PointerDragging(document);
          documentPointer.shouldIgnoreMove = true;
          documentPointer.shouldWatchScroll = false;
          documentPointer.emitter.on('pointerup', this.onDocumentPointerUp);
          /*
          TODO: better way to know about whether there was a selection with the pointer
          */

          calendar.on('select', this.onSelect);
        }

        UnselectAuto.prototype.destroy = function () {
          this.calendar.off('select', this.onSelect);
          this.documentPointer.destroy();
        };

        return UnselectAuto;
      }();
      /*
      Given an already instantiated draggable object for one-or-more elements,
      Interprets any dragging as an attempt to drag an events that lives outside
      of a calendar onto a calendar.
      */


      var ExternalElementDragging =
      /** @class */
      function () {
        function ExternalElementDragging(dragging, suppliedDragMeta) {
          var _this = this;

          this.receivingCalendar = null;
          this.droppableEvent = null; // will exist for all drags, even if create:false

          this.suppliedDragMeta = null;
          this.dragMeta = null;

          this.handleDragStart = function (ev) {
            _this.dragMeta = _this.buildDragMeta(ev.subjectEl);
          };

          this.handleHitUpdate = function (hit, isFinal, ev) {
            var dragging = _this.hitDragging.dragging;
            var receivingCalendar = null;
            var droppableEvent = null;
            var isInvalid = false;
            var interaction = {
              affectedEvents: Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["createEmptyEventStore"])(),
              mutatedEvents: Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["createEmptyEventStore"])(),
              isEvent: _this.dragMeta.create,
              origSeg: null
            };

            if (hit) {
              receivingCalendar = hit.component.context.calendar;

              if (_this.canDropElOnCalendar(ev.subjectEl, receivingCalendar)) {
                droppableEvent = computeEventForDateSpan(hit.dateSpan, _this.dragMeta, receivingCalendar);
                interaction.mutatedEvents = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["eventTupleToStore"])(droppableEvent);
                isInvalid = !Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["isInteractionValid"])(interaction, receivingCalendar);

                if (isInvalid) {
                  interaction.mutatedEvents = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["createEmptyEventStore"])();
                  droppableEvent = null;
                }
              }
            }

            _this.displayDrag(receivingCalendar, interaction); // show mirror if no already-rendered mirror element OR if we are shutting down the mirror (?)
            // TODO: wish we could somehow wait for dispatch to guarantee render


            dragging.setMirrorIsVisible(isFinal || !droppableEvent || !document.querySelector('.fc-mirror'));

            if (!isInvalid) {
              Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["enableCursor"])();
            } else {
              Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["disableCursor"])();
            }

            if (!isFinal) {
              dragging.setMirrorNeedsRevert(!droppableEvent);
              _this.receivingCalendar = receivingCalendar;
              _this.droppableEvent = droppableEvent;
            }
          };

          this.handleDragEnd = function (pev) {
            var _a = _this,
                receivingCalendar = _a.receivingCalendar,
                droppableEvent = _a.droppableEvent;

            _this.clearDrag();

            if (receivingCalendar && droppableEvent) {
              var finalHit = _this.hitDragging.finalHit;
              var finalView = finalHit.component.context.view;
              var dragMeta = _this.dragMeta;

              var arg = _assign({}, receivingCalendar.buildDatePointApi(finalHit.dateSpan), {
                draggedEl: pev.subjectEl,
                jsEvent: pev.origEvent,
                view: finalView
              });

              receivingCalendar.publiclyTrigger('drop', [arg]);

              if (dragMeta.create) {
                receivingCalendar.dispatch({
                  type: 'MERGE_EVENTS',
                  eventStore: Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["eventTupleToStore"])(droppableEvent)
                });

                if (pev.isTouch) {
                  receivingCalendar.dispatch({
                    type: 'SELECT_EVENT',
                    eventInstanceId: droppableEvent.instance.instanceId
                  });
                } // signal that an external event landed


                receivingCalendar.publiclyTrigger('eventReceive', [{
                  draggedEl: pev.subjectEl,
                  event: new _fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["EventApi"](receivingCalendar, droppableEvent.def, droppableEvent.instance),
                  view: finalView
                }]);
              }
            }

            _this.receivingCalendar = null;
            _this.droppableEvent = null;
          };

          var hitDragging = this.hitDragging = new HitDragging(dragging, _fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["interactionSettingsStore"]);
          hitDragging.requireInitial = false; // will start outside of a component

          hitDragging.emitter.on('dragstart', this.handleDragStart);
          hitDragging.emitter.on('hitupdate', this.handleHitUpdate);
          hitDragging.emitter.on('dragend', this.handleDragEnd);
          this.suppliedDragMeta = suppliedDragMeta;
        }

        ExternalElementDragging.prototype.buildDragMeta = function (subjectEl) {
          if (typeof this.suppliedDragMeta === 'object') {
            return Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["parseDragMeta"])(this.suppliedDragMeta);
          } else if (typeof this.suppliedDragMeta === 'function') {
            return Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["parseDragMeta"])(this.suppliedDragMeta(subjectEl));
          } else {
            return getDragMetaFromEl(subjectEl);
          }
        };

        ExternalElementDragging.prototype.displayDrag = function (nextCalendar, state) {
          var prevCalendar = this.receivingCalendar;

          if (prevCalendar && prevCalendar !== nextCalendar) {
            prevCalendar.dispatch({
              type: 'UNSET_EVENT_DRAG'
            });
          }

          if (nextCalendar) {
            nextCalendar.dispatch({
              type: 'SET_EVENT_DRAG',
              state: state
            });
          }
        };

        ExternalElementDragging.prototype.clearDrag = function () {
          if (this.receivingCalendar) {
            this.receivingCalendar.dispatch({
              type: 'UNSET_EVENT_DRAG'
            });
          }
        };

        ExternalElementDragging.prototype.canDropElOnCalendar = function (el, receivingCalendar) {
          var dropAccept = receivingCalendar.opt('dropAccept');

          if (typeof dropAccept === 'function') {
            return dropAccept(el);
          } else if (typeof dropAccept === 'string' && dropAccept) {
            return Boolean(Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["elementMatches"])(el, dropAccept));
          }

          return true;
        };

        return ExternalElementDragging;
      }(); // Utils for computing event store from the DragMeta
      // ----------------------------------------------------------------------------------------------------


      function computeEventForDateSpan(dateSpan, dragMeta, calendar) {
        var defProps = _assign({}, dragMeta.leftoverProps);

        for (var _i = 0, _a = calendar.pluginSystem.hooks.externalDefTransforms; _i < _a.length; _i++) {
          var transform = _a[_i];

          _assign(defProps, transform(dateSpan, dragMeta));
        }

        var def = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["parseEventDef"])(defProps, dragMeta.sourceId, dateSpan.allDay, calendar.opt('forceEventDuration') || Boolean(dragMeta.duration), // hasEnd
        calendar);
        var start = dateSpan.range.start; // only rely on time info if drop zone is all-day,
        // otherwise, we already know the time

        if (dateSpan.allDay && dragMeta.startTime) {
          start = calendar.dateEnv.add(start, dragMeta.startTime);
        }

        var end = dragMeta.duration ? calendar.dateEnv.add(start, dragMeta.duration) : calendar.getDefaultEventEnd(dateSpan.allDay, start);
        var instance = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["createEventInstance"])(def.defId, {
          start: start,
          end: end
        });
        return {
          def: def,
          instance: instance
        };
      } // Utils for extracting data from element
      // ----------------------------------------------------------------------------------------------------


      function getDragMetaFromEl(el) {
        var str = getEmbeddedElData(el, 'event');
        var obj = str ? JSON.parse(str) : {
          create: false
        }; // if no embedded data, assume no event creation

        return Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["parseDragMeta"])(obj);
      }

      _fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["config"].dataAttrPrefix = '';

      function getEmbeddedElData(el, name) {
        var prefix = _fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["config"].dataAttrPrefix;
        var prefixedName = (prefix ? prefix + '-' : '') + name;
        return el.getAttribute('data-' + prefixedName) || '';
      }
      /*
      Makes an element (that is *external* to any calendar) draggable.
      Can pass in data that determines how an event will be created when dropped onto a calendar.
      Leverages FullCalendar's internal drag-n-drop functionality WITHOUT a third-party drag system.
      */


      var ExternalDraggable =
      /** @class */
      function () {
        function ExternalDraggable(el, settings) {
          var _this = this;

          if (settings === void 0) {
            settings = {};
          }

          this.handlePointerDown = function (ev) {
            var dragging = _this.dragging;
            var _a = _this.settings,
                minDistance = _a.minDistance,
                longPressDelay = _a.longPressDelay;
            dragging.minDistance = minDistance != null ? minDistance : ev.isTouch ? 0 : _fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["globalDefaults"].eventDragMinDistance;
            dragging.delay = ev.isTouch ? // TODO: eventually read eventLongPressDelay instead vvv
            longPressDelay != null ? longPressDelay : _fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["globalDefaults"].longPressDelay : 0;
          };

          this.handleDragStart = function (ev) {
            if (ev.isTouch && _this.dragging.delay && ev.subjectEl.classList.contains('fc-event')) {
              _this.dragging.mirror.getMirrorEl().classList.add('fc-selected');
            }
          };

          this.settings = settings;
          var dragging = this.dragging = new FeaturefulElementDragging(el);
          dragging.touchScrollAllowed = false;

          if (settings.itemSelector != null) {
            dragging.pointer.selector = settings.itemSelector;
          }

          if (settings.appendTo != null) {
            dragging.mirror.parentNode = settings.appendTo; // TODO: write tests
          }

          dragging.emitter.on('pointerdown', this.handlePointerDown);
          dragging.emitter.on('dragstart', this.handleDragStart);
          new ExternalElementDragging(dragging, settings.eventData);
        }

        ExternalDraggable.prototype.destroy = function () {
          this.dragging.destroy();
        };

        return ExternalDraggable;
      }();
      /*
      Detects when a *THIRD-PARTY* drag-n-drop system interacts with elements.
      The third-party system is responsible for drawing the visuals effects of the drag.
      This class simply monitors for pointer movements and fires events.
      It also has the ability to hide the moving element (the "mirror") during the drag.
      */


      var InferredElementDragging =
      /** @class */
      function (_super) {
        __extends(InferredElementDragging, _super);

        function InferredElementDragging(containerEl) {
          var _this = _super.call(this, containerEl) || this;

          _this.shouldIgnoreMove = false;
          _this.mirrorSelector = '';
          _this.currentMirrorEl = null;

          _this.handlePointerDown = function (ev) {
            _this.emitter.trigger('pointerdown', ev);

            if (!_this.shouldIgnoreMove) {
              // fire dragstart right away. does not support delay or min-distance
              _this.emitter.trigger('dragstart', ev);
            }
          };

          _this.handlePointerMove = function (ev) {
            if (!_this.shouldIgnoreMove) {
              _this.emitter.trigger('dragmove', ev);
            }
          };

          _this.handlePointerUp = function (ev) {
            _this.emitter.trigger('pointerup', ev);

            if (!_this.shouldIgnoreMove) {
              // fire dragend right away. does not support a revert animation
              _this.emitter.trigger('dragend', ev);
            }
          };

          var pointer = _this.pointer = new PointerDragging(containerEl);
          pointer.emitter.on('pointerdown', _this.handlePointerDown);
          pointer.emitter.on('pointermove', _this.handlePointerMove);
          pointer.emitter.on('pointerup', _this.handlePointerUp);
          return _this;
        }

        InferredElementDragging.prototype.destroy = function () {
          this.pointer.destroy();
        };

        InferredElementDragging.prototype.setIgnoreMove = function (bool) {
          this.shouldIgnoreMove = bool;
        };

        InferredElementDragging.prototype.setMirrorIsVisible = function (bool) {
          if (bool) {
            // restore a previously hidden element.
            // use the reference in case the selector class has already been removed.
            if (this.currentMirrorEl) {
              this.currentMirrorEl.style.visibility = '';
              this.currentMirrorEl = null;
            }
          } else {
            var mirrorEl = this.mirrorSelector ? document.querySelector(this.mirrorSelector) : null;

            if (mirrorEl) {
              this.currentMirrorEl = mirrorEl;
              mirrorEl.style.visibility = 'hidden';
            }
          }
        };

        return InferredElementDragging;
      }(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["ElementDragging"]);
      /*
      Bridges third-party drag-n-drop systems with FullCalendar.
      Must be instantiated and destroyed by caller.
      */


      var ThirdPartyDraggable =
      /** @class */
      function () {
        function ThirdPartyDraggable(containerOrSettings, settings) {
          var containerEl = document;

          if ( // wish we could just test instanceof EventTarget, but doesn't work in IE11
          containerOrSettings === document || containerOrSettings instanceof Element) {
            containerEl = containerOrSettings;
            settings = settings || {};
          } else {
            settings = containerOrSettings || {};
          }

          var dragging = this.dragging = new InferredElementDragging(containerEl);

          if (typeof settings.itemSelector === 'string') {
            dragging.pointer.selector = settings.itemSelector;
          } else if (containerEl === document) {
            dragging.pointer.selector = '[data-event]';
          }

          if (typeof settings.mirrorSelector === 'string') {
            dragging.mirrorSelector = settings.mirrorSelector;
          }

          new ExternalElementDragging(dragging, settings.eventData);
        }

        ThirdPartyDraggable.prototype.destroy = function () {
          this.dragging.destroy();
        };

        return ThirdPartyDraggable;
      }();

      var main = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["createPlugin"])({
        componentInteractions: [DateClicking, DateSelecting, EventDragging, EventDragging$1],
        calendarInteractions: [UnselectAuto],
        elementDraggingImpl: FeaturefulElementDragging
      });
      /* harmony default export */

      __webpack_exports__["default"] = main;
      /***/
    },

    /***/
    "Gjsa":
    /*!*********************************************!*\
      !*** ./node_modules/ticky/ticky-browser.js ***!
      \*********************************************/

    /*! no static exports found */

    /***/
    function Gjsa(module, exports) {
      var si = typeof setImmediate === 'function',
          tick;

      if (si) {
        tick = function tick(fn) {
          setImmediate(fn);
        };
      } else {
        tick = function tick(fn) {
          setTimeout(fn, 0);
        };
      }

      module.exports = tick;
      /***/
    },

    /***/
    "IYw8":
    /*!*************************************!*\
      !*** ./src/app/apps/apps.module.ts ***!
      \*************************************/

    /*! exports provided: AppsModule */

    /***/
    function IYw8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppsModule", function () {
        return AppsModule;
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


      var ng2_dragula__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ng2-dragula */
      "9Ejp");
      /* harmony import */


      var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ngx-perfect-scrollbar */
      "Kdsb");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _apps_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./apps-routing.module */
      "aWwC");
      /* harmony import */


      var _calendar_calendar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./calendar/calendar.component */
      "OjP0");
      /* harmony import */


      var _chat_chat_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./chat/chat.component */
      "pWwN");
      /* harmony import */


      var _drag_drop_drag_drop_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./drag-drop/drag-drop.component */
      "/yEv");
      /* harmony import */


      var _contact_grid_contact_grid_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./contact-grid/contact-grid.component */
      "ZOYJ");
      /* harmony import */


      var _support_support_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./support/support.component */
      "xK1z");
      /* harmony import */


      var _fullcalendar_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @fullcalendar/angular */
      "IvIE");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @swimlane/ngx-datatable */
      "lDzL");
      /* harmony import */


      var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/datepicker */
      "iadO");
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/table */
      "+0xr");
      /* harmony import */


      var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/material/paginator */
      "M9IT");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_sort__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/material/sort */
      "Dh3D");
      /* harmony import */


      var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @angular/material/toolbar */
      "/t3+");
      /* harmony import */


      var ngx_material_file_input__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ngx-material-file-input */
      "7ZcW");
      /* harmony import */


      var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! @angular/material/tabs */
      "wZkO");
      /* harmony import */


      var _angular_material_menu__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! @angular/material/menu */
      "STbY");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "dNgK");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! @angular/material/select */
      "d3UM");
      /* harmony import */


      var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! @angular/material/checkbox */
      "bSwM");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
      /*! @angular/material/tooltip */
      "Qu3c");
      /* harmony import */


      var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
      /*! @angular/material/sidenav */
      "XhcP");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
      /*! @angular/cdk/drag-drop */
      "5+WD");
      /* harmony import */


      var _angular_material_radio__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
      /*! @angular/material/radio */
      "QibW");
      /* harmony import */


      var _task_task_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
      /*! ./task/task.component */
      "OR8B");
      /* harmony import */


      var ng_pick_datetime__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
      /*! ng-pick-datetime */
      "z17N");
      /* harmony import */


      var _calendar_dialogs_form_dialog_form_dialog_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
      /*! ./calendar/dialogs/form-dialog/form-dialog.component */
      "CtW9");
      /* harmony import */


      var _contacts_contacts_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
      /*! ./contacts/contacts.component */
      "kwYc");
      /* harmony import */


      var _contacts_delete_delete_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
      /*! ./contacts/delete/delete.component */
      "R8zC");
      /* harmony import */


      var _contacts_form_form_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
      /*! ./contacts/form/form.component */
      "qO1m");

      var AppsModule = function AppsModule() {
        _classCallCheck(this, AppsModule);
      };

      AppsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: AppsModule
      });
      AppsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function AppsModule_Factory(t) {
          return new (t || AppsModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _apps_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppsRoutingModule"], _fullcalendar_angular__WEBPACK_IMPORTED_MODULE_11__["FullCalendarModule"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3__["PerfectScrollbarModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_13__["NgxDatatableModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_15__["MatTableModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_16__["MatPaginatorModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__["MatIconModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_26__["MatSelectModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_27__["MatCheckboxModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_28__["MatInputModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_31__["MatDialogModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_29__["MatTooltipModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_14__["MatDatepickerModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_25__["MatSnackBarModule"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_32__["DragDropModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_30__["MatSidenavModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__["MatFormFieldModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_19__["MatSortModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_33__["MatRadioModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_20__["MatToolbarModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_22__["MatTabsModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_23__["MatMenuModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_24__["MatCardModule"], ngx_material_file_input__WEBPACK_IMPORTED_MODULE_21__["MaterialFileInputModule"], ng_pick_datetime__WEBPACK_IMPORTED_MODULE_35__["OwlDateTimeModule"], ng_pick_datetime__WEBPACK_IMPORTED_MODULE_35__["OwlNativeDateTimeModule"], ng2_dragula__WEBPACK_IMPORTED_MODULE_2__["DragulaModule"].forRoot()]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppsModule, {
          declarations: [_calendar_calendar_component__WEBPACK_IMPORTED_MODULE_6__["CalendarComponent"], _chat_chat_component__WEBPACK_IMPORTED_MODULE_7__["ChatComponent"], _drag_drop_drag_drop_component__WEBPACK_IMPORTED_MODULE_8__["DragDropComponent"], _contact_grid_contact_grid_component__WEBPACK_IMPORTED_MODULE_9__["ContactGridComponent"], _support_support_component__WEBPACK_IMPORTED_MODULE_10__["SupportComponent"], _task_task_component__WEBPACK_IMPORTED_MODULE_34__["TaskComponent"], _calendar_dialogs_form_dialog_form_dialog_component__WEBPACK_IMPORTED_MODULE_36__["FormDialogComponent"], _contacts_contacts_component__WEBPACK_IMPORTED_MODULE_37__["ContactsComponent"], _contacts_delete_delete_component__WEBPACK_IMPORTED_MODULE_38__["DeleteComponent"], _contacts_form_form_component__WEBPACK_IMPORTED_MODULE_39__["FormComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _apps_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppsRoutingModule"], _fullcalendar_angular__WEBPACK_IMPORTED_MODULE_11__["FullCalendarModule"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3__["PerfectScrollbarModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_13__["NgxDatatableModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_15__["MatTableModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_16__["MatPaginatorModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__["MatIconModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_26__["MatSelectModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_27__["MatCheckboxModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_28__["MatInputModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_31__["MatDialogModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_29__["MatTooltipModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_14__["MatDatepickerModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_25__["MatSnackBarModule"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_32__["DragDropModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_30__["MatSidenavModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__["MatFormFieldModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_19__["MatSortModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_33__["MatRadioModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_20__["MatToolbarModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_22__["MatTabsModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_23__["MatMenuModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_24__["MatCardModule"], ngx_material_file_input__WEBPACK_IMPORTED_MODULE_21__["MaterialFileInputModule"], ng_pick_datetime__WEBPACK_IMPORTED_MODULE_35__["OwlDateTimeModule"], ng_pick_datetime__WEBPACK_IMPORTED_MODULE_35__["OwlNativeDateTimeModule"], ng2_dragula__WEBPACK_IMPORTED_MODULE_2__["DragulaModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppsModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_calendar_calendar_component__WEBPACK_IMPORTED_MODULE_6__["CalendarComponent"], _chat_chat_component__WEBPACK_IMPORTED_MODULE_7__["ChatComponent"], _drag_drop_drag_drop_component__WEBPACK_IMPORTED_MODULE_8__["DragDropComponent"], _contact_grid_contact_grid_component__WEBPACK_IMPORTED_MODULE_9__["ContactGridComponent"], _support_support_component__WEBPACK_IMPORTED_MODULE_10__["SupportComponent"], _task_task_component__WEBPACK_IMPORTED_MODULE_34__["TaskComponent"], _calendar_dialogs_form_dialog_form_dialog_component__WEBPACK_IMPORTED_MODULE_36__["FormDialogComponent"], _contacts_contacts_component__WEBPACK_IMPORTED_MODULE_37__["ContactsComponent"], _contacts_delete_delete_component__WEBPACK_IMPORTED_MODULE_38__["DeleteComponent"], _contacts_form_form_component__WEBPACK_IMPORTED_MODULE_39__["FormComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _apps_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppsRoutingModule"], _fullcalendar_angular__WEBPACK_IMPORTED_MODULE_11__["FullCalendarModule"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3__["PerfectScrollbarModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_13__["NgxDatatableModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_15__["MatTableModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_16__["MatPaginatorModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__["MatIconModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_26__["MatSelectModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_27__["MatCheckboxModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_28__["MatInputModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_31__["MatDialogModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_29__["MatTooltipModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_14__["MatDatepickerModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_25__["MatSnackBarModule"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_32__["DragDropModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_30__["MatSidenavModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__["MatFormFieldModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_19__["MatSortModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_33__["MatRadioModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_20__["MatToolbarModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_22__["MatTabsModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_23__["MatMenuModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_24__["MatCardModule"], ngx_material_file_input__WEBPACK_IMPORTED_MODULE_21__["MaterialFileInputModule"], ng_pick_datetime__WEBPACK_IMPORTED_MODULE_35__["OwlDateTimeModule"], ng_pick_datetime__WEBPACK_IMPORTED_MODULE_35__["OwlNativeDateTimeModule"], ng2_dragula__WEBPACK_IMPORTED_MODULE_2__["DragulaModule"].forRoot()]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "Ibf7":
    /*!*****************************************!*\
      !*** ./node_modules/contra/debounce.js ***!
      \*****************************************/

    /*! no static exports found */

    /***/
    function Ibf7(module, exports, __webpack_require__) {
      "use strict";

      var ticky = __webpack_require__(
      /*! ticky */
      "Gjsa");

      module.exports = function debounce(fn, args, ctx) {
        if (!fn) {
          return;
        }

        ticky(function run() {
          fn.apply(ctx || null, args || []);
        });
      };
      /***/

    },

    /***/
    "OR8B":
    /*!*********************************************!*\
      !*** ./src/app/apps/task/task.component.ts ***!
      \*********************************************/

    /*! exports provided: TaskComponent */

    /***/
    function OR8B(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TaskComponent", function () {
        return TaskComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/cdk/drag-drop */
      "5+WD");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/sidenav */
      "XhcP");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/checkbox */
      "bSwM");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/select */
      "d3UM");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");
      /* harmony import */


      var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/datepicker */
      "iadO");
      /* harmony import */


      var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ngx-perfect-scrollbar */
      "Kdsb");
      /* harmony import */


      var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/tooltip */
      "Qu3c");

      function TaskComponent_button_28_Template(rf, ctx) {
        if (rf & 1) {
          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TaskComponent_button_28_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](23);

            return ctx_r6.deleteTask(_r0);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "delete");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function TaskComponent_button_29_Template(rf, ctx) {
        if (rf & 1) {
          var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TaskComponent_button_29_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r8.saveTask();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "save");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function TaskComponent_button_30_Template(rf, ctx) {
        if (rf & 1) {
          var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TaskComponent_button_30_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);

            var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r10.editTask();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "save");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function TaskComponent_div_103_div_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 59);
        }
      }

      function TaskComponent_div_103_mat_icon_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "arrow_downward ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function TaskComponent_div_103_mat_icon_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "arrow_upward ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function TaskComponent_div_103_mat_icon_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " remove");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var _c0 = function _c0(a0) {
        return {
          done: a0
        };
      };

      var _c1 = function _c1(a0, a1, a2) {
        return {
          "task-low": a0,
          "task-high": a1,
          "task-normal": a2
        };
      };

      function TaskComponent_div_103_Template(rf, ctx) {
        if (rf & 1) {
          var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TaskComponent_div_103_Template_div_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18);

            var task_r12 = ctx.$implicit;

            var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](23);

            return ctx_r17.taskClick(task_r12, _r0);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "drag_indicator");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-checkbox", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function TaskComponent_div_103_Template_mat_checkbox_change_5_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18);

            var task_r12 = ctx.$implicit;

            var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](23);

            return ctx_r19.toggle(task_r12, _r0);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, TaskComponent_div_103_div_6_Template, 1, 0, "div", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, TaskComponent_div_103_mat_icon_10_Template, 2, 0, "mat-icon", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, TaskComponent_div_103_mat_icon_11_Template, 2, 0, "mat-icon", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, TaskComponent_div_103_mat_icon_12_Template, 2, 0, "mat-icon", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](17, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var task_r12 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", !!task_r12.done);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](13, _c0, task_r12.done));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", task_r12.title, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](15, _c1, task_r12.priority == "Low", task_r12.priority == "High", task_r12.priority == "Normal"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (task_r12 == null ? null : task_r12.priority) == "Low");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (task_r12 == null ? null : task_r12.priority) == "High");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (task_r12 == null ? null : task_r12.priority) == "Normal");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", task_r12.priority, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", task_r12.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("matTooltip", task_r12.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](17, 11, task_r12.due_date));
        }
      }

      var TaskComponent = /*#__PURE__*/function () {
        function TaskComponent(fb) {
          _classCallCheck(this, TaskComponent);

          this.fb = fb;
          this.mode = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('side');
          this.showFiller = false;
          this.isNewEvent = false;
          this.tasks = [{
            id: '1',
            img: 'assets/images/user/user1.jpg',
            name: 'Sarah Smith',
            title: 'Develop angular project',
            done: true,
            note: 'note details',
            priority: "High",
            due_date: "2/12/2020"
          }, {
            id: '2',
            img: 'assets/images/user/user2.jpg',
            name: 'John Deo',
            title: 'File not found exception solve',
            done: false,
            note: 'note details',
            priority: "High",
            due_date: "2/12/2019"
          }, {
            id: '3',
            img: 'assets/images/user/user3.jpg',
            name: 'Jens Brincker',
            title: 'Test project and find bug',
            done: false,
            note: 'note details',
            priority: "Low",
            due_date: "2/12/2017"
          }, {
            id: '4',
            img: 'assets/images/user/user4.jpg',
            name: 'Mark Hay',
            title: 'Image not found error',
            done: true,
            note: 'note details',
            priority: "Normal",
            due_date: "2/12/2020"
          }, {
            id: '5',
            img: 'assets/images/user/user5.jpg',
            name: 'Anthony Davie',
            title: 'Solve client error in form',
            done: false,
            note: 'note details',
            priority: "High",
            due_date: "2/12/2019"
          }, {
            id: '6',
            img: 'assets/images/user/user6.jpg',
            name: 'Sue Woodger',
            title: 'Tab button is flickering on hover',
            done: false,
            note: 'note details',
            priority: "Normal",
            due_date: "2/12/2017"
          }, {
            id: '7',
            img: 'assets/images/user/user7.jpg',
            name: 'John Deo',
            title: 'Chart responsive issue solve',
            done: true,
            note: 'note details',
            priority: "High",
            due_date: "2/12/2019"
          }, {
            id: '8',
            img: 'assets/images/user/user8.jpg',
            name: 'Jens Brincker',
            title: 'Web service data load issue',
            done: false,
            note: 'note details',
            priority: "High",
            due_date: "2/12/2020"
          }, {
            id: '9',
            img: 'assets/images/user/user9.jpg',
            name: 'Sarah Smith',
            title: 'Java compile error',
            done: false,
            note: 'note details',
            priority: "Low",
            due_date: "2/12/2017"
          }, {
            id: '10',
            img: 'assets/images/user/user10.jpg',
            name: 'Mark Hay',
            title: 'Integrate project with spring boot',
            done: true,
            note: 'note details',
            priority: "High",
            due_date: "2/12/2019"
          }, {
            id: '11',
            img: 'assets/images/user/user1.jpg',
            name: 'John Deo',
            title: 'Update latest angular version',
            done: false,
            note: 'note details',
            priority: "High",
            due_date: "2/12/2017"
          }, {
            id: '12',
            img: 'assets/images/user/user2.jpg',
            name: 'Jens Brincker',
            title: 'Integrate lazy loading on project',
            done: false,
            note: 'note details',
            priority: "Normal",
            due_date: "2/12/2020"
          }, {
            id: '13',
            img: 'assets/images/user/user3.jpg',
            name: 'Mark Hay',
            title: 'js file not load properly',
            done: true,
            note: 'note details',
            priority: "Normal",
            due_date: "2/12/2019"
          }, {
            id: '14',
            img: 'assets/images/user/user4.jpg',
            name: 'Anthony Davie',
            title: 'need to change color of table',
            done: false,
            note: 'note details',
            priority: "Normal",
            due_date: "2/12/2017"
          }, {
            id: '15',
            img: 'assets/images/user/user5.jpg',
            name: 'Sue Woodger',
            title: 'modal window select item issue',
            done: false,
            note: 'note details',
            priority: "Low",
            due_date: "2/12/2017"
          }];
          this.taskForm = this.createFormGroup(null);
        }

        _createClass(TaskComponent, [{
          key: "drop",
          value: function drop(event) {
            Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["moveItemInArray"])(this.tasks, event.previousIndex, event.currentIndex);
          }
        }, {
          key: "toggle",
          value: function toggle(task, nav) {
            nav.close();
            task.done = !task.done;
          }
        }, {
          key: "addNewTask",
          value: function addNewTask(nav) {
            this.resetFormField();
            this.isNewEvent = true;
            this.dialogTitle = 'New Task';
            this.userImg = 'assets/images/user/user1.jpg';
            nav.open();
          }
        }, {
          key: "taskClick",
          value: function taskClick(task, nav) {
            this.isNewEvent = false;
            this.dialogTitle = 'Edit Task';
            this.userImg = task.img;
            nav.open();
            this.taskForm = this.createFormGroup(task);
          }
        }, {
          key: "closeSlider",
          value: function closeSlider(nav) {
            if (nav.open()) {
              nav.close();
            }
          }
        }, {
          key: "createFormGroup",
          value: function createFormGroup(data) {
            return this.fb.group({
              id: [data ? data.id : this.getRandomID()],
              img: [data ? data.img : 'assets/images/user/user1.jpg'],
              name: [data ? data.name : null],
              title: [data ? data.title : null],
              done: [data ? data.done : null],
              priority: [data ? data.priority : null],
              due_date: [Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["formatDate"])(data ? data.due_date : Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["formatDate"])(new Date(), 'yyyy-MM-dd', 'en') || '', 'yyyy-MM-dd', 'en')],
              note: [data ? data.note : null]
            });
          }
        }, {
          key: "saveTask",
          value: function saveTask() {
            this.tasks.unshift(this.taskForm.value);
            this.resetFormField();
          }
        }, {
          key: "editTask",
          value: function editTask() {
            var targetIdx = this.tasks.map(function (item) {
              return item.id;
            }).indexOf(this.taskForm.value.id);
            this.tasks[targetIdx] = this.taskForm.value;
          }
        }, {
          key: "deleteTask",
          value: function deleteTask(nav) {
            var targetIdx = this.tasks.map(function (item) {
              return item.id;
            }).indexOf(this.taskForm.value.id);
            this.tasks.splice(targetIdx, 1);
            nav.close();
          }
        }, {
          key: "resetFormField",
          value: function resetFormField() {
            this.taskForm.controls.name.reset();
            this.taskForm.controls.title.reset();
            this.taskForm.controls.done.reset();
            this.taskForm.controls.priority.reset();
            this.taskForm.controls.due_date.reset();
            this.taskForm.controls.note.reset();
          }
        }, {
          key: "getRandomID",
          value: function getRandomID() {
            var S4 = function S4() {
              return ((1 + Math.random()) * 0x10000 | 0).toString(16).substring(1);
            };

            return S4() + S4();
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return TaskComponent;
      }();

      TaskComponent.ɵfac = function TaskComponent_Factory(t) {
        return new (t || TaskComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]));
      };

      TaskComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: TaskComponent,
        selectors: [["app-task"]],
        decls: 104,
        vars: 21,
        consts: [[1, "content"], [1, "container-fluid"], [1, "block-header"], [1, "row"], [1, "col-xs-12", "col-sm-12", "col-md-12", "col-lg-12"], [1, "col-md-12", "col-sm-12"], [1, "card", "h-100"], [1, "card-body"], [1, "task-module"], [1, "task-header"], [1, "task-title"], [1, "header-button"], ["mat-raised-button", "", "color", "primary", 3, "click"], [1, "task-container"], ["position", "end", 3, "mode"], ["sidenav", ""], [1, "header"], [1, "header-title"], [1, "header-close", "m-l-0"], ["mat-icon-button", "", "matTooltip", "Delete Task", 3, "click", 4, "ngIf"], ["mat-icon-button", "", "matTooltip", "Save Task", 3, "click", 4, "ngIf"], ["mat-icon-button", "", "matTooltip", "Edit Task", 3, "click", 4, "ngIf"], ["mat-icon-button", "", 3, "click"], [1, "register-form", "m-4", 3, "formGroup"], [1, "col-xl-12", "col-lg-12", "col-md-12", "col-sm-12"], [3, "hidden"], ["matInput", "", "formControlName", "id"], ["matInput", "", "formControlName", "img"], ["appearance", "outline", 1, "example-full-width"], ["matInput", "", "formControlName", "title"], ["matSuffix", ""], [1, "col-xl-12", "col-lg-12", "col-md-12", "col-sm-12", "mb-3"], ["formControlName", "done", "color", "primary", 1, "example-margin"], ["formControlName", "name"], [3, "value"], [1, "col-xl-6", "col-lg-6", "col-md-12", "col-sm-12", "mb-2"], ["formControlName", "priority"], ["matInput", "", "formControlName", "due_date", 3, "matDatepicker"], ["matSuffix", "", 3, "for"], ["picker1", ""], ["matInput", "", "formControlName", "note"], [1, "col-xl-10", "col-lg-10", "col-md-12", "col-sm-12"], ["cdkDropList", "", 1, "task-list", 2, "position", "relative", "max-height", "500px", 3, "perfectScrollbar", "cdkDropListDropped"], ["class", "task-box", "cdkDrag", "", 3, "click", 4, "ngFor", "ngForOf"], ["mat-icon-button", "", "matTooltip", "Delete Task", 3, "click"], ["mat-icon-button", "", "matTooltip", "Save Task", 3, "click"], ["mat-icon-button", "", "matTooltip", "Edit Task", 3, "click"], ["cdkDrag", "", 1, "task-box", 3, "click"], ["cdkDragHandle", "", 1, "task-handle", "m-r-20"], ["aria-hidden", "false"], ["color", "primary", 1, "m-r-15", 3, "checked", "change"], ["class", "task-custom-placeholder", 4, "cdkDragPlaceholder"], ["matTooltip", "Title", 3, "ngClass"], [3, "ngClass"], ["matTooltip", "Low", "aria-hidden", "false", "class", "lbl-low", 4, "ngIf"], ["matTooltip", "High", "aria-hidden", "false", "class", "lbl-high", 4, "ngIf"], ["matTooltip", "Normal", "aria-hidden", "false", "class", "lbl-normal", 4, "ngIf"], [1, "task-user-img", 3, "src", "matTooltip"], ["matTooltip", "Due Date", 1, "task-date"], [1, "task-custom-placeholder"], ["matTooltip", "Low", "aria-hidden", "false", 1, "lbl-low"], ["matTooltip", "High", "aria-hidden", "false", 1, "lbl-high"], ["matTooltip", "Normal", "aria-hidden", "false", 1, "lbl-normal"]],
        template: function TaskComponent_Template(rf, ctx) {
          if (rf & 1) {
            var _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Tasks");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TaskComponent_Template_button_click_17_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20);

              var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](23);

              return ctx.addNewTask(_r0);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Add Task");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-sidenav-container", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-sidenav", 14, 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h2", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, TaskComponent_button_28_Template, 3, 0, "button", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, TaskComponent_button_29_Template, 3, 0, "button", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, TaskComponent_button_30_Template, 3, 0, "button", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "button", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TaskComponent_Template_button_click_31_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20);

              var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](23);

              return ctx.closeSlider(_r0);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "close");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "form", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "mat-form-field", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "input", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "mat-form-field", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "input", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "mat-form-field", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "input", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "mat-icon", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "turned_in_not");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "mat-checkbox", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Mark as complete ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "mat-form-field", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Assigned Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "mat-select", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "mat-option", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, " Sarah Smith ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "mat-option", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, " John Deo ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "mat-option", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, " Jens Brincker ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "mat-option", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, " Mark Hay ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "mat-option", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, " Anthony Davie ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "mat-option", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, " Sue Woodger ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "mat-form-field", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Priority");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "mat-select", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "mat-option", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, " Low ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "mat-option", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, " Normal ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "mat-option", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, " High ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "mat-form-field", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "Due date");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](89, "input", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](90, "mat-datepicker-toggle", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](91, "mat-datepicker", null, 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "mat-form-field", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "Event Details");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](98, "textarea", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](100, "div", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "mat-sidenav-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "div", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("cdkDropListDropped", function TaskComponent_Template_div_cdkDropListDropped_102_listener($event) {
              return ctx.drop($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](103, TaskComponent_div_103_Template, 18, 19, "div", 43);

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
          }

          if (rf & 2) {
            var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](92);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.tasks.length, " Total task");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mode", ctx.mode.value);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.dialogTitle);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isNewEvent);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isNewEvent);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isNewEvent);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.taskForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", "Sarah Smith");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", "John Deo");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", "Jens Brincker");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", "Mark Hay");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", "Anthony Davie");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", "Sue Woodger");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", "Low");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", "Normal");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", "High");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matDatepicker", _r4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", _r4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.tasks);
          }
        },
        directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__["MatSidenavContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__["MatSidenav"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatLabel"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatSuffix"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_9__["MatCheckbox"], _angular_material_select__WEBPACK_IMPORTED_MODULE_10__["MatSelect"], _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MatOption"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__["MatDatepickerInput"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__["MatDatepickerToggle"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__["MatDatepicker"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__["MatSidenavContent"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["CdkDropList"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_13__["PerfectScrollbarDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_14__["MatTooltip"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["CdkDrag"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["CdkDragHandle"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["CdkDragPlaceholder"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcHMvdGFzay90YXNrLmNvbXBvbmVudC5zYXNzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TaskComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-task',
            templateUrl: './task.component.html',
            styleUrls: ['./task.component.sass']
          }]
        }], function () {
          return [{
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "OjP0":
    /*!*****************************************************!*\
      !*** ./src/app/apps/calendar/calendar.component.ts ***!
      \*****************************************************/

    /*! exports provided: CalendarComponent */

    /***/
    function OjP0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CalendarComponent", function () {
        return CalendarComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @fullcalendar/daygrid */
      "iOEq");
      /* harmony import */


      var _fullcalendar_timegrid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @fullcalendar/timegrid */
      "p8AH");
      /* harmony import */


      var _fullcalendar_interaction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @fullcalendar/interaction */
      "Gbwi");
      /* harmony import */


      var _fullcalendar_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @fullcalendar/list */
      "+Izv");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _calendar_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./calendar.model */
      "85qP");
      /* harmony import */


      var _dialogs_form_dialog_form_dialog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./dialogs/form-dialog/form-dialog.component */
      "CtW9");
      /* harmony import */


      var _calendar_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./calendar.service */
      "WRGZ");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "dNgK");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_radio__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/radio */
      "QibW");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _fullcalendar_angular__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @fullcalendar/angular */
      "IvIE");

      var _c0 = ["calendar"];
      var _c1 = ["callAPIDialog"];

      function CalendarComponent_mat_radio_button_20_Template(rf, ctx) {
        if (rf & 1) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-radio-button", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CalendarComponent_mat_radio_button_20_Template_mat_radio_button_change_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r3.changeCategory($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var filter_r2 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", filter_r2.name)("checked", filter_r2.checked === "true");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", filter_r2.value, " ");
        }
      }

      var _c2 = function _c2() {
        return {
          left: "prev,next today",
          center: "title",
          right: "dayGridMonth,timeGridWeek,timeGridDay,listWeek"
        };
      };

      var d = new Date();
      var day = d.getDate();
      var month = d.getMonth();
      var year = d.getFullYear();

      var CalendarComponent = /*#__PURE__*/function () {
        function CalendarComponent(fb, dialog, calendarService, snackBar) {
          _classCallCheck(this, CalendarComponent);

          this.fb = fb;
          this.dialog = dialog;
          this.calendarService = calendarService;
          this.snackBar = snackBar;
          this.filterOptions = "All";
          this.filters = [{
            name: 'all',
            value: 'All',
            checked: 'true'
          }, {
            name: 'work',
            value: 'Work',
            checked: 'false'
          }, {
            name: 'personal',
            value: 'Personal',
            checked: 'false'
          }, {
            name: 'important',
            value: 'Important',
            checked: 'false'
          }, {
            name: 'travel',
            value: 'Travel',
            checked: 'false'
          }, {
            name: 'friends',
            value: 'Friends',
            checked: 'false'
          }];
          this.calendarVisible = true;
          this.calendarPlugins = [_fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_1__["default"], _fullcalendar_timegrid__WEBPACK_IMPORTED_MODULE_2__["default"], _fullcalendar_interaction__WEBPACK_IMPORTED_MODULE_3__["default"], _fullcalendar_list__WEBPACK_IMPORTED_MODULE_4__["default"]];
          this.calendarWeekends = true;
          this.dialogTitle = 'Add New Event';
          this.calendar = new _calendar_model__WEBPACK_IMPORTED_MODULE_7__["Calendar"]({});
          this.addCusForm = this.createContactForm(this.calendar);
        }

        _createClass(CalendarComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.calendarEvents = this.events();
            this.tempEvents = this.calendarEvents; // you can also get events from json file using following code
            // this.calendarService.getAllCalendars().subscribe((data: Calendar[]) => {
            //   this.calendarEvents = data;
            // })
          }
        }, {
          key: "createContactForm",
          value: function createContactForm(calendar) {
            return this.fb.group({
              id: [calendar.id],
              title: [calendar.title, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].pattern('[a-zA-Z]+([a-zA-Z ]+)*')]],
              category: [calendar.category],
              startDate: [calendar.startDate, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
              endDate: [calendar.endDate, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
              details: [calendar.details, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].pattern('[a-zA-Z]+([a-zA-Z ]+)*')]]
            });
          }
        }, {
          key: "addNewEvent",
          value: function addNewEvent() {
            var _this36 = this;

            var dialogRef = this.dialog.open(_dialogs_form_dialog_form_dialog_component__WEBPACK_IMPORTED_MODULE_8__["FormDialogComponent"], {
              data: {
                calendar: this.calendar,
                action: 'add'
              }
            });
            dialogRef.afterClosed().subscribe(function (result) {
              if (result === "submit") {
                _this36.calendarData = _this36.calendarService.getDialogData();
                _this36.calendarEvents = _this36.calendarEvents.concat({
                  id: _this36.calendarData.id,
                  title: _this36.calendarData.title,
                  start: _this36.calendarData.startDate,
                  end: _this36.calendarData.endDate,
                  className: _this36.calendarData.category,
                  groupId: _this36.calendarData.category,
                  details: _this36.calendarData.details
                });

                _this36.addCusForm.reset();

                _this36.showNotification('snackbar-success', 'Add Record Successfully...!!!', 'bottom', 'center');
              }
            });
          }
        }, {
          key: "eventClick",
          value: function eventClick(row) {
            var _this37 = this;

            var calendarData = {
              id: row.event.id,
              title: row.event.title,
              category: row.event.groupId,
              startDate: row.event.start,
              endDate: row.event.end,
              details: row.event.extendedProps.details
            };
            var dialogRef = this.dialog.open(_dialogs_form_dialog_form_dialog_component__WEBPACK_IMPORTED_MODULE_8__["FormDialogComponent"], {
              data: {
                calendar: calendarData,
                action: 'edit'
              }
            });
            dialogRef.afterClosed().subscribe(function (result) {
              if (result === "submit") {
                _this37.calendarData = _this37.calendarService.getDialogData();

                _this37.calendarEvents.forEach(function (element, index) {
                  if (this.calendarData.id === element.id) {
                    this.editEvent(index, this.calendarData);
                  }
                }, _this37);

                _this37.showNotification('black', 'Edit Record Successfully...!!!', 'bottom', 'center');

                _this37.addCusForm.reset();
              } else if (result === "delete") {
                _this37.calendarData = _this37.calendarService.getDialogData();

                _this37.calendarEvents.forEach(function (element, index) {
                  if (this.calendarData.id === element.id) {
                    this.filterEvent(element);
                  }
                }, _this37);

                _this37.showNotification('snackbar-danger', 'Delete Record Successfully...!!!', 'bottom', 'center');
              }
            });
          }
        }, {
          key: "editEvent",
          value: function editEvent(eventIndex, calendarData) {
            var calendarEvents = this.calendarEvents.slice();
            var singleEvent = Object.assign({}, calendarEvents[eventIndex]);
            singleEvent.id = calendarData.id;
            singleEvent.title = calendarData.title;
            singleEvent.start = calendarData.startDate;
            singleEvent.end = calendarData.endDate;
            singleEvent.className = this.getClassNameValue(calendarData.category);
            singleEvent.groupId = calendarData.category;
            singleEvent.details = calendarData.details;
            calendarEvents[eventIndex] = singleEvent;
            this.calendarEvents = calendarEvents; // reassign the array
          }
        }, {
          key: "handleEventRender",
          value: function handleEventRender(info) {// console.log(info)
            // this.todaysEvents = this.todaysEvents.concat(info);
          }
        }, {
          key: "changeCategory",
          value: function changeCategory(e) {
            this.filterOptions = e.value;
            this.calendarEvents = this.tempEvents;
            this.calendarEvents.forEach(function (element, index) {
              if (this.filterOptions !== "all" && this.filterOptions.toLowerCase() !== element.groupId) {
                this.filterEvent(element);
              }
            }, this);
          }
        }, {
          key: "filterEvent",
          value: function filterEvent(element) {
            this.calendarEvents = this.calendarEvents.filter(function (item) {
              return item !== element;
            });
          }
        }, {
          key: "submit",
          value: function submit() {// emppty stuff
          }
        }, {
          key: "onNoClick",
          value: function onNoClick() {}
        }, {
          key: "showNotification",
          value: function showNotification(colorName, text, placementFrom, placementAlign) {
            this.snackBar.open(text, '', {
              duration: 2000,
              verticalPosition: placementFrom,
              horizontalPosition: placementAlign,
              panelClass: colorName
            });
          }
        }, {
          key: "randomIDGenerate",
          value: function randomIDGenerate(length, chars) {
            var result = "";

            for (var i = length; i > 0; --i) {
              result += chars[Math.round(Math.random() * (chars.length - 1))];
            }

            return result;
          }
        }, {
          key: "getClassNameValue",
          value: function getClassNameValue(category) {
            var className;
            if (category === "work") className = "fc-event-success";else if (category === "personal") className = "fc-event-warning";else if (category === "important") className = "fc-event-primary";else if (category === "travel") className = "fc-event-danger";else if (category === "friends") className = "fc-event-info";
            return className;
          }
        }, {
          key: "events",
          value: function events() {
            return [{
              id: "event1",
              title: "All Day Event",
              start: new Date(year, month, 1, 0, 0),
              end: new Date(year, month, 1, 23, 59),
              className: "fc-event-success",
              groupId: "work",
              details: "Her extensive perceived may any sincerity extremity. Indeed add rather may pretty see."
            }, {
              id: "event2",
              title: "Break",
              start: new Date(year, month, day + 28, 16, 0),
              end: new Date(year, month, day + 29, 20, 0),
              allDay: false,
              className: "fc-event-primary",
              groupId: "important",
              details: "Her extensive perceived may any sincerity extremity. Indeed add rather may pretty see. "
            }, {
              id: "event3",
              title: "Shopping",
              start: new Date(year, month, day + 4, 12, 0),
              end: new Date(year, month, day + 4, 20, 0),
              allDay: false,
              className: "fc-event-warning",
              groupId: "personal",
              details: "Her extensive perceived may any sincerity extremity. Indeed add rather may pretty see. "
            }, {
              id: "event4",
              title: "Meeting",
              start: new Date(year, month, day + 14, 10, 30),
              end: new Date(year, month, day + 16, 20, 0),
              allDay: false,
              className: "fc-event-success",
              groupId: "work",
              details: "Her extensive perceived may any sincerity extremity. Indeed add rather may pretty see."
            }, {
              id: "event5",
              title: "Lunch",
              start: new Date(year, month, day, 11, 0),
              end: new Date(year, month, day, 14, 0),
              allDay: false,
              className: "fc-event-primary",
              groupId: "important",
              details: "Her extensive perceived may any sincerity extremity. Indeed add rather may pretty see."
            }, {
              id: "event6",
              title: "Meeting",
              start: new Date(year, month, day + 2, 12, 30),
              end: new Date(year, month, day + 2, 14, 30),
              allDay: false,
              className: "fc-event-success",
              groupId: "work",
              details: "Her extensive perceived may any sincerity extremity. Indeed add rather may pretty see."
            }, {
              id: "event7",
              title: "Birthday Party",
              start: new Date(year, month, day + 17, 19, 0),
              end: new Date(year, month, day + 17, 19, 30),
              allDay: false,
              className: "fc-event-warning",
              groupId: "personal",
              details: "Her extensive perceived may any sincerity extremity. Indeed add rather may pretty see."
            }, {
              id: "event8",
              title: "Go to Delhi",
              start: new Date(year, month, day + -5, 10, 0),
              end: new Date(year, month, day + -4, 10, 30),
              allDay: false,
              className: "fc-event-danger",
              groupId: "travel",
              details: "Her extensive perceived may any sincerity extremity. Indeed add rather may pretty see."
            }, {
              id: "event9",
              title: "Get To Gather",
              start: new Date(year, month, day + 6, 10, 0),
              end: new Date(year, month, day + 7, 10, 30),
              allDay: false,
              className: "fc-event-info",
              groupId: "friends",
              details: "Her extensive perceived may any sincerity extremity. Indeed add rather may pretty see."
            }, {
              id: "event10",
              title: "Collage Party",
              start: new Date(year, month, day + 20, 10, 0),
              end: new Date(year, month, day + 20, 10, 30),
              allDay: false,
              className: "fc-event-info",
              groupId: "friends",
              details: "Her extensive perceived may any sincerity extremity. Indeed add rather may pretty see."
            }];
          }
        }]);

        return CalendarComponent;
      }();

      CalendarComponent.ɵfac = function CalendarComponent_Factory(t) {
        return new (t || CalendarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_calendar_service__WEBPACK_IMPORTED_MODULE_9__["CalendarService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_10__["MatSnackBar"]));
      };

      CalendarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: CalendarComponent,
        selectors: [["app-calendar"]],
        viewQuery: function CalendarComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.calendar = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.callAPIDialog = _t.first);
          }
        },
        decls: 25,
        vars: 6,
        consts: [[1, "content"], [1, "container-fluid"], [1, "row"], [1, "col-md-12", "col-sm-12"], [1, "card"], [1, "header", "container-fluid"], [1, "col-md-10"], [1, "card-body"], [1, "col-md-2", "col-sm-12", "p-l-30"], [1, "m-b-25"], ["mat-raised-button", "", "color", "primary", 3, "click"], [1, "filter-container"], ["aria-labelledby", "example-radio-group-label", 1, "example-radio-group"], ["class", "example-radio-button ml-0 filter", 3, "value", "checked", "change", 4, "ngFor", "ngForOf"], [1, "col-md-10", "col-sm-12"], [1, "panel-body"], ["defaultView", "dayGridMonth", 3, "header", "plugins", "weekends", "events", "eventRender", "eventClick", "dateClick"], ["calendar", ""], [1, "example-radio-button", "ml-0", "filter", 3, "value", "checked", "change"]],
        template: function CalendarComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Calendar");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CalendarComponent_Template_button_click_14_listener() {
              return ctx.addNewEvent();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Add Event");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "My Calendars");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-radio-group", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, CalendarComponent_mat_radio_button_20_Template, 2, 3, "mat-radio-button", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "full-calendar", 16, 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("eventRender", function CalendarComponent_Template_full_calendar_eventRender_23_listener($event) {
              return ctx.handleEventRender($event);
            })("eventClick", function CalendarComponent_Template_full_calendar_eventClick_23_listener($event) {
              return ctx.eventClick($event);
            })("dateClick", function CalendarComponent_Template_full_calendar_dateClick_23_listener() {
              return ctx.addNewEvent();
            });

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

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.filters);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("header", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c2))("plugins", ctx.calendarPlugins)("weekends", ctx.calendarWeekends)("events", ctx.calendarEvents);
          }
        },
        directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButton"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_12__["MatRadioGroup"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgForOf"], _fullcalendar_angular__WEBPACK_IMPORTED_MODULE_14__["FullCalendarComponent"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_12__["MatRadioButton"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcHMvY2FsZW5kYXIvY2FsZW5kYXIuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CalendarComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-calendar',
            templateUrl: './calendar.component.html',
            styleUrls: ['./calendar.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]
          }, {
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]
          }, {
            type: _calendar_service__WEBPACK_IMPORTED_MODULE_9__["CalendarService"]
          }, {
            type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_10__["MatSnackBar"]
          }];
        }, {
          calendar: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['calendar', {
              "static": false
            }]
          }],
          callAPIDialog: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['callAPIDialog', {
              "static": false
            }]
          }]
        });
      })();
      /***/

    },

    /***/
    "PzH3":
    /*!*************************************************!*\
      !*** ./node_modules/crossvent/src/crossvent.js ***!
      \*************************************************/

    /*! no static exports found */

    /***/
    function PzH3(module, exports, __webpack_require__) {
      "use strict";

      var customEvent = __webpack_require__(
      /*! custom-event */
      "bBst");

      var eventmap = __webpack_require__(
      /*! ./eventmap */
      "Ys8N");

      var doc = global.document;
      var addEvent = addEventEasy;
      var removeEvent = removeEventEasy;
      var hardCache = [];

      if (!global.addEventListener) {
        addEvent = addEventHard;
        removeEvent = removeEventHard;
      }

      module.exports = {
        add: addEvent,
        remove: removeEvent,
        fabricate: fabricateEvent
      };

      function addEventEasy(el, type, fn, capturing) {
        return el.addEventListener(type, fn, capturing);
      }

      function addEventHard(el, type, fn) {
        return el.attachEvent('on' + type, wrap(el, type, fn));
      }

      function removeEventEasy(el, type, fn, capturing) {
        return el.removeEventListener(type, fn, capturing);
      }

      function removeEventHard(el, type, fn) {
        var listener = unwrap(el, type, fn);

        if (listener) {
          return el.detachEvent('on' + type, listener);
        }
      }

      function fabricateEvent(el, type, model) {
        var e = eventmap.indexOf(type) === -1 ? makeCustomEvent() : makeClassicEvent();

        if (el.dispatchEvent) {
          el.dispatchEvent(e);
        } else {
          el.fireEvent('on' + type, e);
        }

        function makeClassicEvent() {
          var e;

          if (doc.createEvent) {
            e = doc.createEvent('Event');
            e.initEvent(type, true, true);
          } else if (doc.createEventObject) {
            e = doc.createEventObject();
          }

          return e;
        }

        function makeCustomEvent() {
          return new customEvent(type, {
            detail: model
          });
        }
      }

      function wrapperFactory(el, type, fn) {
        return function wrapper(originalEvent) {
          var e = originalEvent || global.event;
          e.target = e.target || e.srcElement;

          e.preventDefault = e.preventDefault || function preventDefault() {
            e.returnValue = false;
          };

          e.stopPropagation = e.stopPropagation || function stopPropagation() {
            e.cancelBubble = true;
          };

          e.which = e.which || e.keyCode;
          fn.call(el, e);
        };
      }

      function wrap(el, type, fn) {
        var wrapper = unwrap(el, type, fn) || wrapperFactory(el, type, fn);
        hardCache.push({
          wrapper: wrapper,
          element: el,
          type: type,
          fn: fn
        });
        return wrapper;
      }

      function unwrap(el, type, fn) {
        var i = find(el, type, fn);

        if (i) {
          var wrapper = hardCache[i].wrapper;
          hardCache.splice(i, 1); // free up a tad of memory

          return wrapper;
        }
      }

      function find(el, type, fn) {
        var i, item;

        for (i = 0; i < hardCache.length; i++) {
          item = hardCache[i];

          if (item.element === el && item.type === type && item.fn === fn) {
            return i;
          }
        }
      }
      /***/

    },

    /***/
    "R8zC":
    /*!**********************************************************!*\
      !*** ./src/app/apps/contacts/delete/delete.component.ts ***!
      \**********************************************************/

    /*! exports provided: DeleteComponent */

    /***/
    function R8zC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DeleteComponent", function () {
        return DeleteComponent;
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


      var _contacts_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../contacts.service */
      "Ovhn");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");

      var DeleteComponent = /*#__PURE__*/function () {
        function DeleteComponent(dialogRef, data, contactsService) {
          _classCallCheck(this, DeleteComponent);

          this.dialogRef = dialogRef;
          this.data = data;
          this.contactsService = contactsService;
        }

        _createClass(DeleteComponent, [{
          key: "onNoClick",
          value: function onNoClick() {
            this.dialogRef.close();
          }
        }, {
          key: "confirmDelete",
          value: function confirmDelete() {
            this.contactsService.deleteContacts(this.data.id);
          }
        }]);

        return DeleteComponent;
      }();

      DeleteComponent.ɵfac = function DeleteComponent_Factory(t) {
        return new (t || DeleteComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_contacts_service__WEBPACK_IMPORTED_MODULE_2__["ContactsService"]));
      };

      DeleteComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: DeleteComponent,
        selectors: [["app-delete"]],
        decls: 25,
        vars: 4,
        consts: [[1, "container"], ["mat-dialog-title", ""], ["mat-dialog-content", ""], [1, "clearfix"], [1, "font-weight-bold"], ["mat-dialog-actions", "", 1, "mb-1"], ["mat-flat-button", "", "color", "warn", 3, "mat-dialog-close", "click"], ["mat-flat-button", "", "tabindex", "-1", 3, "click"]],
        template: function DeleteComponent_Template(rf, ctx) {
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

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DeleteComponent_Template_button_click_21_listener() {
              return ctx.confirmDelete();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, " Delete ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "button", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DeleteComponent_Template_button_click_23_listener() {
              return ctx.onNoClick();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Cancel");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.data.name);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.data.email);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx.data.mobile, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("mat-dialog-close", 1);
          }
        },
        directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogContent"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogClose"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcHMvY29udGFjdHMvZGVsZXRlL2RlbGV0ZS5jb21wb25lbnQuc2FzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DeleteComponent, [{
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
            type: _contacts_service__WEBPACK_IMPORTED_MODULE_2__["ContactsService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "YS7c":
    /*!*****************************************!*\
      !*** ./node_modules/dragula/dragula.js ***!
      \*****************************************/

    /*! no static exports found */

    /***/
    function YS7c(module, exports, __webpack_require__) {
      "use strict";

      var emitter = __webpack_require__(
      /*! contra/emitter */
      "8/JR");

      var crossvent = __webpack_require__(
      /*! crossvent */
      "PzH3");

      var classes = __webpack_require__(
      /*! ./classes */
      "n6yW");

      var doc = document;
      var documentElement = doc.documentElement;

      function dragula(initialContainers, options) {
        var len = arguments.length;

        if (len === 1 && Array.isArray(initialContainers) === false) {
          options = initialContainers;
          initialContainers = [];
        }

        var _mirror; // mirror image


        var _source; // source container


        var _item; // item being dragged


        var _offsetX; // reference x


        var _offsetY; // reference y


        var _moveX; // reference move x


        var _moveY; // reference move y


        var _initialSibling; // reference sibling when grabbed


        var _currentSibling; // reference sibling now


        var _copy; // item used for copying


        var _renderTimer; // timer for setTimeout renderMirrorImage


        var _lastDropTarget = null; // last container item was over

        var _grabbed; // holds mousedown context until first mousemove


        var o = options || {};

        if (o.moves === void 0) {
          o.moves = always;
        }

        if (o.accepts === void 0) {
          o.accepts = always;
        }

        if (o.invalid === void 0) {
          o.invalid = invalidTarget;
        }

        if (o.containers === void 0) {
          o.containers = initialContainers || [];
        }

        if (o.isContainer === void 0) {
          o.isContainer = never;
        }

        if (o.copy === void 0) {
          o.copy = false;
        }

        if (o.copySortSource === void 0) {
          o.copySortSource = false;
        }

        if (o.revertOnSpill === void 0) {
          o.revertOnSpill = false;
        }

        if (o.removeOnSpill === void 0) {
          o.removeOnSpill = false;
        }

        if (o.direction === void 0) {
          o.direction = 'vertical';
        }

        if (o.ignoreInputTextSelection === void 0) {
          o.ignoreInputTextSelection = true;
        }

        if (o.mirrorContainer === void 0) {
          o.mirrorContainer = doc.body;
        }

        var drake = emitter({
          containers: o.containers,
          start: manualStart,
          end: end,
          cancel: cancel,
          remove: remove,
          destroy: destroy,
          canMove: canMove,
          dragging: false
        });

        if (o.removeOnSpill === true) {
          drake.on('over', spillOver).on('out', spillOut);
        }

        events();
        return drake;

        function isContainer(el) {
          return drake.containers.indexOf(el) !== -1 || o.isContainer(el);
        }

        function events(remove) {
          var op = remove ? 'remove' : 'add';
          touchy(documentElement, op, 'mousedown', grab);
          touchy(documentElement, op, 'mouseup', release);
        }

        function eventualMovements(remove) {
          var op = remove ? 'remove' : 'add';
          touchy(documentElement, op, 'mousemove', startBecauseMouseMoved);
        }

        function movements(remove) {
          var op = remove ? 'remove' : 'add';
          crossvent[op](documentElement, 'selectstart', preventGrabbed); // IE8

          crossvent[op](documentElement, 'click', preventGrabbed);
        }

        function destroy() {
          events(true);
          release({});
        }

        function preventGrabbed(e) {
          if (_grabbed) {
            e.preventDefault();
          }
        }

        function grab(e) {
          _moveX = e.clientX;
          _moveY = e.clientY;
          var ignore = whichMouseButton(e) !== 1 || e.metaKey || e.ctrlKey;

          if (ignore) {
            return; // we only care about honest-to-god left clicks and touch events
          }

          var item = e.target;
          var context = canStart(item);

          if (!context) {
            return;
          }

          _grabbed = context;
          eventualMovements();

          if (e.type === 'mousedown') {
            if (isInput(item)) {
              // see also: https://github.com/bevacqua/dragula/issues/208
              item.focus(); // fixes https://github.com/bevacqua/dragula/issues/176
            } else {
              e.preventDefault(); // fixes https://github.com/bevacqua/dragula/issues/155
            }
          }
        }

        function startBecauseMouseMoved(e) {
          if (!_grabbed) {
            return;
          }

          if (whichMouseButton(e) === 0) {
            release({});
            return; // when text is selected on an input and then dragged, mouseup doesn't fire. this is our only hope
          } // truthy check fixes #239, equality fixes #207, fixes #501


          if (e.clientX !== void 0 && Math.abs(e.clientX - _moveX) <= (o.slideFactorX || 0) && e.clientY !== void 0 && Math.abs(e.clientY - _moveY) <= (o.slideFactorY || 0)) {
            return;
          }

          if (o.ignoreInputTextSelection) {
            var clientX = getCoord('clientX', e) || 0;
            var clientY = getCoord('clientY', e) || 0;
            var elementBehindCursor = doc.elementFromPoint(clientX, clientY);

            if (isInput(elementBehindCursor)) {
              return;
            }
          }

          var grabbed = _grabbed; // call to end() unsets _grabbed

          eventualMovements(true);
          movements();
          end();
          start(grabbed);
          var offset = getOffset(_item);
          _offsetX = getCoord('pageX', e) - offset.left;
          _offsetY = getCoord('pageY', e) - offset.top;
          classes.add(_copy || _item, 'gu-transit');
          renderMirrorImage();
          drag(e);
        }

        function canStart(item) {
          if (drake.dragging && _mirror) {
            return;
          }

          if (isContainer(item)) {
            return; // don't drag container itself
          }

          var handle = item;

          while (getParent(item) && isContainer(getParent(item)) === false) {
            if (o.invalid(item, handle)) {
              return;
            }

            item = getParent(item); // drag target should be a top element

            if (!item) {
              return;
            }
          }

          var source = getParent(item);

          if (!source) {
            return;
          }

          if (o.invalid(item, handle)) {
            return;
          }

          var movable = o.moves(item, source, handle, nextEl(item));

          if (!movable) {
            return;
          }

          return {
            item: item,
            source: source
          };
        }

        function canMove(item) {
          return !!canStart(item);
        }

        function manualStart(item) {
          var context = canStart(item);

          if (context) {
            start(context);
          }
        }

        function start(context) {
          if (isCopy(context.item, context.source)) {
            _copy = context.item.cloneNode(true);
            drake.emit('cloned', _copy, context.item, 'copy');
          }

          _source = context.source;
          _item = context.item;
          _initialSibling = _currentSibling = nextEl(context.item);
          drake.dragging = true;
          drake.emit('drag', _item, _source);
        }

        function invalidTarget() {
          return false;
        }

        function end() {
          if (!drake.dragging) {
            return;
          }

          var item = _copy || _item;
          drop(item, getParent(item));
        }

        function ungrab() {
          _grabbed = false;
          eventualMovements(true);
          movements(true);
        }

        function release(e) {
          ungrab();

          if (!drake.dragging) {
            return;
          }

          var item = _copy || _item;
          var clientX = getCoord('clientX', e) || 0;
          var clientY = getCoord('clientY', e) || 0;
          var elementBehindCursor = getElementBehindPoint(_mirror, clientX, clientY);
          var dropTarget = findDropTarget(elementBehindCursor, clientX, clientY);

          if (dropTarget && (_copy && o.copySortSource || !_copy || dropTarget !== _source)) {
            drop(item, dropTarget);
          } else if (o.removeOnSpill) {
            remove();
          } else {
            cancel();
          }
        }

        function drop(item, target) {
          var parent = getParent(item);

          if (_copy && o.copySortSource && target === _source) {
            parent.removeChild(_item);
          }

          if (isInitialPlacement(target)) {
            drake.emit('cancel', item, _source, _source);
          } else {
            drake.emit('drop', item, target, _source, _currentSibling);
          }

          cleanup();
        }

        function remove() {
          if (!drake.dragging) {
            return;
          }

          var item = _copy || _item;
          var parent = getParent(item);

          if (parent) {
            parent.removeChild(item);
          }

          drake.emit(_copy ? 'cancel' : 'remove', item, parent, _source);
          cleanup();
        }

        function cancel(revert) {
          if (!drake.dragging) {
            return;
          }

          var reverts = arguments.length > 0 ? revert : o.revertOnSpill;
          var item = _copy || _item;
          var parent = getParent(item);
          var initial = isInitialPlacement(parent);

          if (initial === false && reverts) {
            if (_copy) {
              if (parent) {
                parent.removeChild(_copy);
              }
            } else {
              _source.insertBefore(item, _initialSibling);
            }
          }

          if (initial || reverts) {
            drake.emit('cancel', item, _source, _source);
          } else {
            drake.emit('drop', item, parent, _source, _currentSibling);
          }

          cleanup();
        }

        function cleanup() {
          var item = _copy || _item;
          ungrab();
          removeMirrorImage();

          if (item) {
            classes.rm(item, 'gu-transit');
          }

          if (_renderTimer) {
            clearTimeout(_renderTimer);
          }

          drake.dragging = false;

          if (_lastDropTarget) {
            drake.emit('out', item, _lastDropTarget, _source);
          }

          drake.emit('dragend', item);
          _source = _item = _copy = _initialSibling = _currentSibling = _renderTimer = _lastDropTarget = null;
        }

        function isInitialPlacement(target, s) {
          var sibling;

          if (s !== void 0) {
            sibling = s;
          } else if (_mirror) {
            sibling = _currentSibling;
          } else {
            sibling = nextEl(_copy || _item);
          }

          return target === _source && sibling === _initialSibling;
        }

        function findDropTarget(elementBehindCursor, clientX, clientY) {
          var target = elementBehindCursor;

          while (target && !accepted()) {
            target = getParent(target);
          }

          return target;

          function accepted() {
            var droppable = isContainer(target);

            if (droppable === false) {
              return false;
            }

            var immediate = getImmediateChild(target, elementBehindCursor);
            var reference = getReference(target, immediate, clientX, clientY);
            var initial = isInitialPlacement(target, reference);

            if (initial) {
              return true; // should always be able to drop it right back where it was
            }

            return o.accepts(_item, target, _source, reference);
          }
        }

        function drag(e) {
          if (!_mirror) {
            return;
          }

          e.preventDefault();
          var clientX = getCoord('clientX', e) || 0;
          var clientY = getCoord('clientY', e) || 0;
          var x = clientX - _offsetX;
          var y = clientY - _offsetY;
          _mirror.style.left = x + 'px';
          _mirror.style.top = y + 'px';
          var item = _copy || _item;
          var elementBehindCursor = getElementBehindPoint(_mirror, clientX, clientY);
          var dropTarget = findDropTarget(elementBehindCursor, clientX, clientY);
          var changed = dropTarget !== null && dropTarget !== _lastDropTarget;

          if (changed || dropTarget === null) {
            out();
            _lastDropTarget = dropTarget;
            over();
          }

          var parent = getParent(item);

          if (dropTarget === _source && _copy && !o.copySortSource) {
            if (parent) {
              parent.removeChild(item);
            }

            return;
          }

          var reference;
          var immediate = getImmediateChild(dropTarget, elementBehindCursor);

          if (immediate !== null) {
            reference = getReference(dropTarget, immediate, clientX, clientY);
          } else if (o.revertOnSpill === true && !_copy) {
            reference = _initialSibling;
            dropTarget = _source;
          } else {
            if (_copy && parent) {
              parent.removeChild(item);
            }

            return;
          }

          if (reference === null && changed || reference !== item && reference !== nextEl(item)) {
            _currentSibling = reference;
            dropTarget.insertBefore(item, reference);
            drake.emit('shadow', item, dropTarget, _source);
          }

          function moved(type) {
            drake.emit(type, item, _lastDropTarget, _source);
          }

          function over() {
            if (changed) {
              moved('over');
            }
          }

          function out() {
            if (_lastDropTarget) {
              moved('out');
            }
          }
        }

        function spillOver(el) {
          classes.rm(el, 'gu-hide');
        }

        function spillOut(el) {
          if (drake.dragging) {
            classes.add(el, 'gu-hide');
          }
        }

        function renderMirrorImage() {
          if (_mirror) {
            return;
          }

          var rect = _item.getBoundingClientRect();

          _mirror = _item.cloneNode(true);
          _mirror.style.width = getRectWidth(rect) + 'px';
          _mirror.style.height = getRectHeight(rect) + 'px';
          classes.rm(_mirror, 'gu-transit');
          classes.add(_mirror, 'gu-mirror');
          o.mirrorContainer.appendChild(_mirror);
          touchy(documentElement, 'add', 'mousemove', drag);
          classes.add(o.mirrorContainer, 'gu-unselectable');
          drake.emit('cloned', _mirror, _item, 'mirror');
        }

        function removeMirrorImage() {
          if (_mirror) {
            classes.rm(o.mirrorContainer, 'gu-unselectable');
            touchy(documentElement, 'remove', 'mousemove', drag);
            getParent(_mirror).removeChild(_mirror);
            _mirror = null;
          }
        }

        function getImmediateChild(dropTarget, target) {
          var immediate = target;

          while (immediate !== dropTarget && getParent(immediate) !== dropTarget) {
            immediate = getParent(immediate);
          }

          if (immediate === documentElement) {
            return null;
          }

          return immediate;
        }

        function getReference(dropTarget, target, x, y) {
          var horizontal = o.direction === 'horizontal';
          var reference = target !== dropTarget ? inside() : outside();
          return reference;

          function outside() {
            // slower, but able to figure out any position
            var len = dropTarget.children.length;
            var i;
            var el;
            var rect;

            for (i = 0; i < len; i++) {
              el = dropTarget.children[i];
              rect = el.getBoundingClientRect();

              if (horizontal && rect.left + rect.width / 2 > x) {
                return el;
              }

              if (!horizontal && rect.top + rect.height / 2 > y) {
                return el;
              }
            }

            return null;
          }

          function inside() {
            // faster, but only available if dropped inside a child element
            var rect = target.getBoundingClientRect();

            if (horizontal) {
              return resolve(x > rect.left + getRectWidth(rect) / 2);
            }

            return resolve(y > rect.top + getRectHeight(rect) / 2);
          }

          function resolve(after) {
            return after ? nextEl(target) : target;
          }
        }

        function isCopy(item, container) {
          return typeof o.copy === 'boolean' ? o.copy : o.copy(item, container);
        }
      }

      function touchy(el, op, type, fn) {
        var touch = {
          mouseup: 'touchend',
          mousedown: 'touchstart',
          mousemove: 'touchmove'
        };
        var pointers = {
          mouseup: 'pointerup',
          mousedown: 'pointerdown',
          mousemove: 'pointermove'
        };
        var microsoft = {
          mouseup: 'MSPointerUp',
          mousedown: 'MSPointerDown',
          mousemove: 'MSPointerMove'
        };

        if (global.navigator.pointerEnabled) {
          crossvent[op](el, pointers[type], fn);
        } else if (global.navigator.msPointerEnabled) {
          crossvent[op](el, microsoft[type], fn);
        } else {
          crossvent[op](el, touch[type], fn);
          crossvent[op](el, type, fn);
        }
      }

      function whichMouseButton(e) {
        if (e.touches !== void 0) {
          return e.touches.length;
        }

        if (e.which !== void 0 && e.which !== 0) {
          return e.which;
        } // see https://github.com/bevacqua/dragula/issues/261


        if (e.buttons !== void 0) {
          return e.buttons;
        }

        var button = e.button;

        if (button !== void 0) {
          // see https://github.com/jquery/jquery/blob/99e8ff1baa7ae341e94bb89c3e84570c7c3ad9ea/src/event.js#L573-L575
          return button & 1 ? 1 : button & 2 ? 3 : button & 4 ? 2 : 0;
        }
      }

      function getOffset(el) {
        var rect = el.getBoundingClientRect();
        return {
          left: rect.left + getScroll('scrollLeft', 'pageXOffset'),
          top: rect.top + getScroll('scrollTop', 'pageYOffset')
        };
      }

      function getScroll(scrollProp, offsetProp) {
        if (typeof global[offsetProp] !== 'undefined') {
          return global[offsetProp];
        }

        if (documentElement.clientHeight) {
          return documentElement[scrollProp];
        }

        return doc.body[scrollProp];
      }

      function getElementBehindPoint(point, x, y) {
        point = point || {};
        var state = point.className || '';
        var el;
        point.className += ' gu-hide';
        el = doc.elementFromPoint(x, y);
        point.className = state;
        return el;
      }

      function never() {
        return false;
      }

      function always() {
        return true;
      }

      function getRectWidth(rect) {
        return rect.width || rect.right - rect.left;
      }

      function getRectHeight(rect) {
        return rect.height || rect.bottom - rect.top;
      }

      function getParent(el) {
        return el.parentNode === doc ? null : el.parentNode;
      }

      function isInput(el) {
        return el.tagName === 'INPUT' || el.tagName === 'TEXTAREA' || el.tagName === 'SELECT' || isEditable(el);
      }

      function isEditable(el) {
        if (!el) {
          return false;
        } // no parents were editable


        if (el.contentEditable === 'false') {
          return false;
        } // stop the lookup


        if (el.contentEditable === 'true') {
          return true;
        } // found a contentEditable element in the chain


        return isEditable(getParent(el)); // contentEditable is set to 'inherit'
      }

      function nextEl(el) {
        return el.nextElementSibling || manually();

        function manually() {
          var sibling = el;

          do {
            sibling = sibling.nextSibling;
          } while (sibling && sibling.nodeType !== 1);

          return sibling;
        }
      }

      function getEventHost(e) {
        // on touchend event, we have to use `e.changedTouches`
        // see http://stackoverflow.com/questions/7192563/touchend-event-properties
        // see https://github.com/bevacqua/dragula/issues/34
        if (e.targetTouches && e.targetTouches.length) {
          return e.targetTouches[0];
        }

        if (e.changedTouches && e.changedTouches.length) {
          return e.changedTouches[0];
        }

        return e;
      }

      function getCoord(coord, e) {
        var host = getEventHost(e);
        var missMap = {
          pageX: 'clientX',
          // IE8
          pageY: 'clientY' // IE8

        };

        if (coord in missMap && !(coord in host) && missMap[coord] in host) {
          coord = missMap[coord];
        }

        return host[coord];
      }

      module.exports = dragula;
      /***/
    },

    /***/
    "Ys8N":
    /*!************************************************!*\
      !*** ./node_modules/crossvent/src/eventmap.js ***!
      \************************************************/

    /*! no static exports found */

    /***/
    function Ys8N(module, exports, __webpack_require__) {
      "use strict";

      var eventmap = [];
      var eventname = '';
      var ron = /^on/;

      for (eventname in global) {
        if (ron.test(eventname)) {
          eventmap.push(eventname.slice(2));
        }
      }

      module.exports = eventmap;
      /***/
    },

    /***/
    "ZOYJ":
    /*!*************************************************************!*\
      !*** ./src/app/apps/contact-grid/contact-grid.component.ts ***!
      \*************************************************************/

    /*! exports provided: ContactGridComponent */

    /***/
    function ZOYJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ContactGridComponent", function () {
        return ContactGridComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");

      var ContactGridComponent = /*#__PURE__*/function () {
        function ContactGridComponent() {
          _classCallCheck(this, ContactGridComponent);
        }

        _createClass(ContactGridComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ContactGridComponent;
      }();

      ContactGridComponent.ɵfac = function ContactGridComponent_Factory(t) {
        return new (t || ContactGridComponent)();
      };

      ContactGridComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ContactGridComponent,
        selectors: [["app-contact-grid"]],
        decls: 295,
        vars: 0,
        consts: [[1, "content"], [1, "container-fluid"], [1, "row", "clearfix"], [1, "col-xs-12", "col-sm-12", "col-md-12", "col-lg-12"], [1, "card"], [1, "header"], [1, "col-xs-12", "col-sm-6"], [1, "header-dropdown", "m-r--5"], [1, "dropdown"], ["href", "#", "onClick", "return false;", "data-toggle", "dropdown", "role", "button", "aria-haspopup", "true", "aria-expanded", "false"], [1, "material-icons"], [1, "dropdown-menu", "pull-right"], ["href", "#", "onClick", "return false;"], [1, "body"], [1, "row"], [1, "col-md-4"], [1, "card", "border-apply"], [1, "m-b-20"], [1, "contact-grid"], [1, "profile-header", "l-bg-purple-dark"], [1, "user-name"], [1, "name-center"], ["src", "assets/images/user/usrbig1.jpg", "alt", "", 1, "user-img"], [1, "phone"], [1, "profile-userbuttons"], ["mat-flat-button", "", "color", "primary"], [1, "profile-header", "bg-cyan"], ["src", "assets/images/user/usrbig2.jpg", "alt", "", 1, "user-img"], [1, "profile-header", "bg-dark"], ["src", "assets/images/user/usrbig3.jpg", "alt", "", 1, "user-img"], [1, "profile-header", "l-bg-orange"], ["src", "assets/images/user/usrbig4.jpg", "alt", "", 1, "user-img"], [1, "profile-header", "bg-green"], ["src", "assets/images/user/usrbig5.jpg", "alt", "", 1, "user-img"], [1, "profile-header", "l-bg-red"], ["src", "assets/images/user/usrbig6.jpg", "alt", "", 1, "user-img"], [1, "profile-header", "bg-indigo"], ["src", "assets/images/user/usrbig7.jpg", "alt", "", 1, "user-img"], [1, "profile-header", "bg-brown"], ["src", "assets/images/user/usrbig8.jpg", "alt", "", 1, "user-img"], [1, "profile-header", "bg-amber"], ["src", "assets/images/user/usrbig9.jpg", "alt", "", 1, "user-img"]],
        template: function ContactGridComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Contact");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Grid");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "ul", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "i", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "more_vert");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "ul", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Action");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Another action");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Something else here");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Pooja Patel");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "General Manager");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "img", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " A-103, shyam gokul flats, Mahatma Road ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Mumbai ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "span", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "i", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "phone");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "264-625-2583");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "button", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Read More");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Smita Patil");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Housekeeper");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "img", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, " 45, Krishna Tower, Near Bus Stop, Satellite, ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Ahmedabad ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "span", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "i", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "phone");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "264-625-2583");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "button", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Read More");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "John Smith");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "Cook");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "img", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, " 456, Estern evenue, Courtage area, ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "New York ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "span", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "i", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "phone");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "264-625-2583");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "button", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "Read More");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "Pooja Patel");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "General Manager");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](104, "img", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, " A-103, shyam gokul flats, Mahatma Road ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](107, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "Mumbai ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "span", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "i", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "phone");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "264-625-2583");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "button", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "Read More");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "div", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, "Smita Patil");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, "Housekeeper");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](126, "img", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, " 45, Krishna Tower, Near Bus Stop, Satellite, ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](129, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, "Ahmedabad ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "span", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "i", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, "phone");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135, "264-625-2583");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "button", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, "Read More");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "div", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](145, "John Smith");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](147, "Cook");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](148, "img", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](150, " 456, Estern evenue, Courtage area, ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](151, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](152, "New York ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "span", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "i", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](156, "phone");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](157, "264-625-2583");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "button", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](160, "Read More");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "div", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](168, "Pooja Patel");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](170, "General Manager");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](171, "img", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](173, " A-103, shyam gokul flats, Mahatma Road ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](174, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](175, "Mumbai ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "span", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "i", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](179, "phone");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](180, "264-625-2583");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "button", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](183, "Read More");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "div", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](190, "Smita Patil");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](192, "Housekeeper");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](193, "img", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](195, " 45, Krishna Tower, Near Bus Stop, Satellite, ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](196, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](197, "Ahmedabad ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "span", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](200, "i", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](201, "phone");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](202, "264-625-2583");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](204, "button", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](205, "Read More");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](206, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](207, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](208, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](209, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](210, "div", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](211, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](212, "John Smith");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](213, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](214, "Cook");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](215, "img", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](216, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](217, " 456, Estern evenue, Courtage area, ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](218, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](219, "New York ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](220, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](221, "span", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](222, "i", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](223, "phone");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](224, "264-625-2583");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](225, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](226, "button", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](227, "Read More");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](228, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](229, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](230, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](231, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](232, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](233, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](234, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](235, "Pooja Patel");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](236, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](237, "General Manager");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](238, "img", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](239, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](240, " A-103, shyam gokul flats, Mahatma Road ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](241, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](242, "Mumbai ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](243, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](244, "span", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](245, "i", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](246, "phone");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](247, "264-625-2583");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](248, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](249, "button", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](250, "Read More");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](251, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](252, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](253, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](254, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](255, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](256, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](257, "Smita Patil");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](258, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](259, "Housekeeper");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](260, "img", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](261, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](262, " 45, Krishna Tower, Near Bus Stop, Satellite, ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](263, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](264, "Ahmedabad ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](265, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](266, "span", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](267, "i", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](268, "phone");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](269, "264-625-2583");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](270, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](271, "button", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](272, "Read More");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](273, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](274, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](275, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](276, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](277, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](278, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](279, "John Smith");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](280, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](281, "Cook");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](282, "img", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](283, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](284, " 456, Estern evenue, Courtage area, ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](285, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](286, "New York ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](287, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](288, "span", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](289, "i", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](290, "phone");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](291, "264-625-2583");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](292, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](293, "button", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](294, "Read More");

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
          }
        },
        directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButton"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcHMvY29udGFjdC1ncmlkL2NvbnRhY3QtZ3JpZC5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactGridComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-contact-grid',
            templateUrl: './contact-grid.component.html',
            styleUrls: ['./contact-grid.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "aWwC":
    /*!*********************************************!*\
      !*** ./src/app/apps/apps-routing.module.ts ***!
      \*********************************************/

    /*! exports provided: AppsRoutingModule */

    /***/
    function aWwC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppsRoutingModule", function () {
        return AppsRoutingModule;
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


      var _calendar_calendar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./calendar/calendar.component */
      "OjP0");
      /* harmony import */


      var _chat_chat_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./chat/chat.component */
      "pWwN");
      /* harmony import */


      var _contact_grid_contact_grid_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./contact-grid/contact-grid.component */
      "ZOYJ");
      /* harmony import */


      var _support_support_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./support/support.component */
      "xK1z");
      /* harmony import */


      var _drag_drop_drag_drop_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./drag-drop/drag-drop.component */
      "/yEv");
      /* harmony import */


      var _task_task_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./task/task.component */
      "OR8B");
      /* harmony import */


      var _contacts_contacts_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./contacts/contacts.component */
      "kwYc");

      var routes = [{
        path: 'calendar',
        component: _calendar_calendar_component__WEBPACK_IMPORTED_MODULE_2__["CalendarComponent"]
      }, {
        path: 'task',
        component: _task_task_component__WEBPACK_IMPORTED_MODULE_7__["TaskComponent"]
      }, {
        path: 'chat',
        component: _chat_chat_component__WEBPACK_IMPORTED_MODULE_3__["ChatComponent"]
      }, {
        path: 'contact-grid',
        component: _contact_grid_contact_grid_component__WEBPACK_IMPORTED_MODULE_4__["ContactGridComponent"]
      }, {
        path: 'contacts',
        component: _contacts_contacts_component__WEBPACK_IMPORTED_MODULE_8__["ContactsComponent"]
      }, {
        path: 'support',
        component: _support_support_component__WEBPACK_IMPORTED_MODULE_5__["SupportComponent"]
      }, {
        path: 'dragdrop',
        component: _drag_drop_drag_drop_component__WEBPACK_IMPORTED_MODULE_6__["DragDropComponent"]
      }];

      var AppsRoutingModule = function AppsRoutingModule() {
        _classCallCheck(this, AppsRoutingModule);
      };

      AppsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: AppsRoutingModule
      });
      AppsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function AppsRoutingModule_Factory(t) {
          return new (t || AppsRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppsRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppsRoutingModule, [{
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
    "bBst":
    /*!********************************************!*\
      !*** ./node_modules/custom-event/index.js ***!
      \********************************************/

    /*! no static exports found */

    /***/
    function bBst(module, exports) {
      var NativeCustomEvent = global.CustomEvent;

      function useNative() {
        try {
          var p = new NativeCustomEvent('cat', {
            detail: {
              foo: 'bar'
            }
          });
          return 'cat' === p.type && 'bar' === p.detail.foo;
        } catch (e) {}

        return false;
      }
      /**
       * Cross-browser `CustomEvent` constructor.
       *
       * https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent.CustomEvent
       *
       * @public
       */


      module.exports = useNative() ? NativeCustomEvent : // IE >= 9
      'undefined' !== typeof document && 'function' === typeof document.createEvent ? function CustomEvent(type, params) {
        var e = document.createEvent('CustomEvent');

        if (params) {
          e.initCustomEvent(type, params.bubbles, params.cancelable, params.detail);
        } else {
          e.initCustomEvent(type, false, false, void 0);
        }

        return e;
      } : // IE <= 8
      function CustomEvent(type, params) {
        var e = document.createEventObject();
        e.type = type;

        if (params) {
          e.bubbles = Boolean(params.bubbles);
          e.cancelable = Boolean(params.cancelable);
          e.detail = params.detail;
        } else {
          e.bubbles = false;
          e.cancelable = false;
          e.detail = void 0;
        }

        return e;
      };
      /***/
    },

    /***/
    "kwYc":
    /*!*****************************************************!*\
      !*** ./src/app/apps/contacts/contacts.component.ts ***!
      \*****************************************************/

    /*! exports provided: ContactsComponent, ExampleDataSource */

    /***/
    function kwYc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ContactsComponent", function () {
        return ContactsComponent;
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


      var _contacts_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./contacts.service */
      "Ovhn");
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


      var _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/menu */
      "STbY");
      /* harmony import */


      var _form_form_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./form/form.component */
      "qO1m");
      /* harmony import */


      var _delete_delete_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./delete/delete.component */
      "R8zC");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/table */
      "+0xr");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/material/checkbox */
      "bSwM");

      var _c0 = ["filter"];

      function ContactsComponent_mat_header_cell_44_Template(rf, ctx) {
        if (rf & 1) {
          var _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-checkbox", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ContactsComponent_mat_header_cell_44_Template_mat_checkbox_change_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26);

            var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return $event ? ctx_r25.masterToggle() : null;
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

      function ContactsComponent_mat_cell_45_Template(rf, ctx) {
        if (rf & 1) {
          var _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-checkbox", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContactsComponent_mat_cell_45_Template_mat_checkbox_click_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29);

            return $event.stopPropagation();
          })("change", function ContactsComponent_mat_cell_45_Template_mat_checkbox_change_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29);

            var row_r27 = ctx.$implicit;

            var ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return $event ? ctx_r30.selection.toggle(row_r27) : null;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r27 = ctx.$implicit;

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", "tbl-col-width-per-6");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx_r3.selection.isSelected(row_r27))("ngClass", "tbl-checkbox");
        }
      }

      function ContactsComponent_mat_header_cell_47_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Id ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ContactsComponent_mat_cell_48_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r31 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](row_r31.id);
        }
      }

      function ContactsComponent_mat_header_cell_50_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Image ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", "tbl-col-width-per-6");
        }
      }

      function ContactsComponent_mat_cell_51_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r32 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", row_r32.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      }

      function ContactsComponent_mat_header_cell_53_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Name ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ContactsComponent_mat_cell_54_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r33 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r33.name, " ");
        }
      }

      function ContactsComponent_mat_header_cell_56_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Mobile ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ContactsComponent_mat_cell_57_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r34 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r34.mobile, " ");
        }
      }

      function ContactsComponent_mat_header_cell_59_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Email ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ContactsComponent_mat_cell_60_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r35 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r35.email, " ");
        }
      }

      function ContactsComponent_mat_header_cell_62_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Birth Date ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ContactsComponent_mat_cell_63_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r36 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, row_r36.birthDate, "MM/dd/yyyy"), "");
        }
      }

      function ContactsComponent_mat_header_cell_65_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Address ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ContactsComponent_mat_cell_66_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r37 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r37.address, " ");
        }
      }

      function ContactsComponent_mat_header_cell_68_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Note ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ContactsComponent_mat_cell_69_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r38 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r38.note, " ");
        }
      }

      function ContactsComponent_mat_header_cell_71_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Actions ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ContactsComponent_mat_cell_72_Template(rf, ctx) {
        if (rf & 1) {
          var _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContactsComponent_mat_cell_72_Template_button_click_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r43);

            return $event.stopPropagation();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "more_vert");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-menu", null, 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContactsComponent_mat_cell_72_Template_button_click_6_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r43);

            var row_r39 = ctx.$implicit;

            var ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r44.editCall(row_r39);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "i", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "create");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Edit Contact");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContactsComponent_mat_cell_72_Template_button_click_11_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r43);

            var row_r39 = ctx.$implicit;

            var ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r45.deleteItem(row_r39);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "i", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "delete_forever");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Delete Contact");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r41);
        }
      }

      function ContactsComponent_mat_header_row_73_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-header-row");
        }
      }

      function ContactsComponent_mat_row_74_Template(rf, ctx) {
        if (rf & 1) {
          var _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-row", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContactsComponent_mat_row_74_Template_mat_row_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r48);

            var row_r46 = ctx.$implicit;

            var ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r47.detailsCall(row_r46);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("cursor", "pointer");
        }
      }

      var _c1 = function _c1() {
        return [5, 10, 25, 100];
      };

      var ContactsComponent = /*#__PURE__*/function () {
        function ContactsComponent(httpClient, dialog, contactsService, snackBar) {
          _classCallCheck(this, ContactsComponent);

          this.httpClient = httpClient;
          this.dialog = dialog;
          this.contactsService = contactsService;
          this.snackBar = snackBar;
          this.filterToggle = false;
          this.displayedColumns = ['select', 'img', 'name', 'email', 'mobile', 'birthDate', 'address', 'actions'];
          this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_6__["SelectionModel"](true, []);
          this.contextMenuPosition = {
            x: '0px',
            y: '0px'
          };
        }

        _createClass(ContactsComponent, [{
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
            var _this38 = this;

            var dialogRef = this.dialog.open(_form_form_component__WEBPACK_IMPORTED_MODULE_11__["FormComponent"], {
              data: {
                contacts: this.contacts,
                action: 'add'
              }
            });
            dialogRef.afterClosed().subscribe(function (result) {
              if (result === 1) {
                // After dialog is closed we're doing frontend updates
                // For add we're just pushing a new row inside DataServicex
                _this38.exampleDatabase.dataChange.value.unshift(_this38.contactsService.getDialogData());

                _this38.refreshTable();

                _this38.showNotification('snackbar-success', 'Add Record Successfully...!!!', 'bottom', 'center');
              }
            });
          }
        }, {
          key: "detailsCall",
          value: function detailsCall(row) {
            this.dialog.open(_form_form_component__WEBPACK_IMPORTED_MODULE_11__["FormComponent"], {
              data: {
                contacts: row,
                action: 'details'
              },
              height: '70%',
              width: '35%'
            });
          }
        }, {
          key: "toggleStar",
          value: function toggleStar(row) {
            console.log(row);
          }
        }, {
          key: "editCall",
          value: function editCall(row) {
            var _this39 = this;

            this.id = row.id;
            var dialogRef = this.dialog.open(_form_form_component__WEBPACK_IMPORTED_MODULE_11__["FormComponent"], {
              data: {
                contacts: row,
                action: 'edit'
              }
            });
            dialogRef.afterClosed().subscribe(function (result) {
              if (result === 1) {
                // When using an edit things are little different, firstly we find record inside DataService by id
                var foundIndex = _this39.exampleDatabase.dataChange.value.findIndex(function (x) {
                  return x.id === _this39.id;
                }); // Then you update that record using data from dialogData (values you enetered)


                _this39.exampleDatabase.dataChange.value[foundIndex] = _this39.contactsService.getDialogData(); // And lastly refresh table

                _this39.refreshTable();

                _this39.showNotification('black', 'Edit Record Successfully...!!!', 'bottom', 'center');
              }
            });
          }
        }, {
          key: "deleteItem",
          value: function deleteItem(row) {
            var _this40 = this;

            this.id = row.id;
            var dialogRef = this.dialog.open(_delete_delete_component__WEBPACK_IMPORTED_MODULE_12__["DeleteComponent"], {
              data: row
            });
            dialogRef.afterClosed().subscribe(function (result) {
              if (result === 1) {
                var foundIndex = _this40.exampleDatabase.dataChange.value.findIndex(function (x) {
                  return x.id === _this40.id;
                }); // for delete we use splice in order to remove single object from DataService


                _this40.exampleDatabase.dataChange.value.splice(foundIndex, 1);

                _this40.refreshTable();

                _this40.showNotification('snackbar-danger', 'Delete Record Successfully...!!!', 'bottom', 'center');
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
            var _this41 = this;

            this.isAllSelected() ? this.selection.clear() : this.dataSource.renderedData.forEach(function (row) {
              return _this41.selection.select(row);
            });
          }
        }, {
          key: "removeSelectedRows",
          value: function removeSelectedRows() {
            var _this42 = this;

            var totalSelect = this.selection.selected.length;
            this.selection.selected.forEach(function (item) {
              var index = _this42.dataSource.renderedData.findIndex(function (d) {
                return d === item;
              }); // console.log(this.dataSource.renderedData.findIndex((d) => d === item));


              _this42.exampleDatabase.dataChange.value.splice(index, 1);

              _this42.refreshTable();

              _this42.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_6__["SelectionModel"](true, []);
            });
            this.showNotification('snackbar-danger', totalSelect + ' Record Delete Successfully...!!!', 'bottom', 'center');
          }
        }, {
          key: "loadData",
          value: function loadData() {
            var _this43 = this;

            this.exampleDatabase = new _contacts_service__WEBPACK_IMPORTED_MODULE_1__["ContactsService"](this.httpClient);
            this.dataSource = new ExampleDataSource(this.exampleDatabase, this.paginator, this.sort);
            Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["fromEvent"])(this.filter.nativeElement, 'keyup') // .debounceTime(150)
            // .distinctUntilChanged()
            .subscribe(function () {
              if (!_this43.dataSource) {
                return;
              }

              _this43.dataSource.filter = _this43.filter.nativeElement.value;
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
          }
        }]);

        return ContactsComponent;
      }();

      ContactsComponent.ɵfac = function ContactsComponent_Factory(t) {
        return new (t || ContactsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_contacts_service__WEBPACK_IMPORTED_MODULE_1__["ContactsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"]));
      };

      ContactsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ContactsComponent,
        selectors: [["app-contacts"]],
        viewQuery: function ContactsComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"], true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_5__["MatSort"], true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_menu__WEBPACK_IMPORTED_MODULE_10__["MatMenuTrigger"], true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.filter = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.contextMenu = _t.first);
          }
        },
        decls: 79,
        vars: 11,
        consts: [[1, "content"], [1, "container-fluid"], [1, "row"], [1, "col-md-12"], [1, "tabbable-line"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12"], [1, "card"], [1, "body"], [1, "table-responsive"], [1, "materialTableHeader"], [1, "col-8"], [1, "header-buttons-left", "ml-0"], [1, "dropdown"], [1, "dropdown", "m-l-20"], ["for", "search-input"], [1, "material-icons", "search-icon"], ["placeholder", "Search", "type", "text", "aria-label", "Search box", 1, "browser-default", "search-field"], ["filter", ""], [1, "icon-button-demo", "m-l-10", 3, "hidden"], ["mat-mini-fab", "", "color", "warn", 3, "click"], [1, "col-white"], [1, "col-4"], [1, "header-buttons"], [1, "icon-button-demo"], ["mat-mini-fab", "", "color", "primary", 3, "click"], ["matSort", "", 1, "mat-cell", 3, "dataSource"], ["table", ""], ["matColumnDef", "select"], [3, "ngClass", 4, "matHeaderCellDef"], [3, "ngClass", 4, "matCellDef"], ["matColumnDef", "id"], ["mat-sort-header", "", 4, "matHeaderCellDef"], [4, "matCellDef"], ["matColumnDef", "img"], ["mat-header-cell", "", 3, "ngClass", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "table-img tbl-col-width-per-6", 4, "matCellDef"], ["matColumnDef", "name"], ["matColumnDef", "mobile"], ["matColumnDef", "email"], ["matColumnDef", "birthDate"], ["matColumnDef", "address"], ["class", "column-nowrap", 4, "matCellDef"], ["matColumnDef", "note"], ["matColumnDef", "actions"], ["class", "pl-3 tbl-col-width-per-10", 4, "matHeaderCellDef"], ["class", "pl-3 tbl-col-width-per-10", 4, "matCellDef"], [4, "matHeaderRowDef"], ["matRipple", "", 3, "cursor", "click", 4, "matRowDef", "matRowDefColumns"], [1, "no-results"], [3, "length", "pageIndex", "pageSize", "pageSizeOptions"], ["paginator", ""], [3, "ngClass"], [3, "checked", "indeterminate", "ngClass", "change"], [3, "checked", "ngClass", "click", "change"], ["mat-sort-header", ""], ["mat-header-cell", "", 3, "ngClass"], ["mat-cell", "", 1, "table-img", "tbl-col-width-per-6"], [3, "src"], [1, "column-nowrap"], [1, "pl-3", "tbl-col-width-per-10"], ["mat-icon-button", "", 3, "matMenuTriggerFor", "click"], ["menu", "matMenu"], ["mat-menu-item", "", 3, "click"], [1, "material-icons-two-tone", "align-middle", "mr-2"], ["matRipple", "", 3, "click"]],
        template: function ContactsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "ul", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Contacts");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "label", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "i", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "search");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "input", 16, 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContactsComponent_Template_button_click_26_listener() {
              return ctx.removeSelectedRows();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-icon", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "delete ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "ul", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "button", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContactsComponent_Template_button_click_33_listener() {
              return ctx.addNew();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "mat-icon", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "add");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "button", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContactsComponent_Template_button_click_38_listener() {
              return ctx.refresh();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "mat-icon", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "refresh ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "mat-table", 25, 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](43, 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](44, ContactsComponent_mat_header_cell_44_Template, 2, 4, "mat-header-cell", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](45, ContactsComponent_mat_cell_45_Template, 2, 3, "mat-cell", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](46, 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](47, ContactsComponent_mat_header_cell_47_Template, 2, 0, "mat-header-cell", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](48, ContactsComponent_mat_cell_48_Template, 2, 1, "mat-cell", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](49, 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](50, ContactsComponent_mat_header_cell_50_Template, 2, 1, "mat-header-cell", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](51, ContactsComponent_mat_cell_51_Template, 2, 1, "mat-cell", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](52, 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](53, ContactsComponent_mat_header_cell_53_Template, 2, 0, "mat-header-cell", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](54, ContactsComponent_mat_cell_54_Template, 2, 1, "mat-cell", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](55, 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](56, ContactsComponent_mat_header_cell_56_Template, 2, 0, "mat-header-cell", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](57, ContactsComponent_mat_cell_57_Template, 2, 1, "mat-cell", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](58, 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](59, ContactsComponent_mat_header_cell_59_Template, 2, 0, "mat-header-cell", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](60, ContactsComponent_mat_cell_60_Template, 2, 1, "mat-cell", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](61, 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](62, ContactsComponent_mat_header_cell_62_Template, 2, 0, "mat-header-cell", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](63, ContactsComponent_mat_cell_63_Template, 3, 4, "mat-cell", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](64, 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](65, ContactsComponent_mat_header_cell_65_Template, 2, 0, "mat-header-cell", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](66, ContactsComponent_mat_cell_66_Template, 2, 1, "mat-cell", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](67, 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](68, ContactsComponent_mat_header_cell_68_Template, 2, 0, "mat-header-cell", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](69, ContactsComponent_mat_cell_69_Template, 2, 1, "mat-cell", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](70, 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](71, ContactsComponent_mat_header_cell_71_Template, 2, 0, "mat-header-cell", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](72, ContactsComponent_mat_cell_72_Template, 16, 1, "mat-cell", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](73, ContactsComponent_mat_header_row_73_Template, 1, 0, "mat-header-row", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](74, ContactsComponent_mat_row_74_Template, 1, 2, "mat-row", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, " No results ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "mat-paginator", 49, 50);

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

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx.selection.hasValue());

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSource);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("display", ctx.dataSource.renderedData.length == 0 ? "" : "none");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("length", ctx.dataSource.filteredData.length)("pageIndex", 0)("pageSize", 10)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c1));
          }
        },
        directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__["MatIcon"], _angular_material_table__WEBPACK_IMPORTED_MODULE_15__["MatTable"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_5__["MatSort"], _angular_material_table__WEBPACK_IMPORTED_MODULE_15__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_15__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_15__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_15__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_15__["MatRowDef"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"], _angular_material_table__WEBPACK_IMPORTED_MODULE_15__["MatHeaderCell"], _angular_common__WEBPACK_IMPORTED_MODULE_16__["NgClass"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_17__["MatCheckbox"], _angular_material_table__WEBPACK_IMPORTED_MODULE_15__["MatCell"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_5__["MatSortHeader"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__["MatMenuTrigger"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__["_MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__["MatMenuItem"], _angular_material_table__WEBPACK_IMPORTED_MODULE_15__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_15__["MatRow"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_16__["DatePipe"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcHMvY29udGFjdHMvY29udGFjdHMuY29tcG9uZW50LnNhc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactsComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-contacts',
            templateUrl: './contacts.component.html',
            styleUrls: ['./contacts.component.sass']
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
          }, {
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]
          }, {
            type: _contacts_service__WEBPACK_IMPORTED_MODULE_1__["ContactsService"]
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
            args: [_angular_material_menu__WEBPACK_IMPORTED_MODULE_10__["MatMenuTrigger"]]
          }]
        });
      })();

      var ExampleDataSource = /*#__PURE__*/function (_angular_cdk_collecti) {
        _inherits(ExampleDataSource, _angular_cdk_collecti);

        var _super2 = _createSuper(ExampleDataSource);

        function ExampleDataSource(_exampleDatabase, _paginator, _sort) {
          var _this44;

          _classCallCheck(this, ExampleDataSource);

          _this44 = _super2.call(this);
          _this44._exampleDatabase = _exampleDatabase;
          _this44._paginator = _paginator;
          _this44._sort = _sort;
          _this44._filterChange = new rxjs__WEBPACK_IMPORTED_MODULE_8__["BehaviorSubject"]('');
          _this44.filteredData = [];
          _this44.renderedData = []; // Reset to the first page when the user changes the filter.

          _this44._filterChange.subscribe(function () {
            return _this44._paginator.pageIndex = 0;
          });

          return _this44;
        }

        _createClass(ExampleDataSource, [{
          key: "connect",

          /** Connect function called by the table to retrieve one stream containing the data to render. */
          value: function connect() {
            var _this45 = this;

            // Listen for any changes in the base data, sorting, filtering, or pagination
            var displayDataChanges = [this._exampleDatabase.dataChange, this._sort.sortChange, this._filterChange, this._paginator.page];

            this._exampleDatabase.getAllContactss();

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["merge"]).apply(void 0, displayDataChanges).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["map"])(function () {
              // Filter data
              _this45.filteredData = _this45._exampleDatabase.data.slice().filter(function (contacts) {
                var searchStr = (contacts.name + contacts.birthDate + contacts.email + contacts.mobile + contacts.address).toLowerCase();
                return searchStr.indexOf(_this45.filter.toLowerCase()) !== -1;
              }); // Sort filtered data

              var sortedData = _this45.sortData(_this45.filteredData.slice()); // Grab the page's slice of the filtered sorted data.


              var startIndex = _this45._paginator.pageIndex * _this45._paginator.pageSize;
              _this45.renderedData = sortedData.splice(startIndex, _this45._paginator.pageSize);
              return _this45.renderedData;
            }));
          }
        }, {
          key: "disconnect",
          value: function disconnect() {}
          /** Returns a sorted copy of the database data. */

        }, {
          key: "sortData",
          value: function sortData(data) {
            var _this46 = this;

            if (!this._sort.active || this._sort.direction === '') {
              return data;
            }

            return data.sort(function (a, b) {
              var propertyA = '';
              var propertyB = '';

              switch (_this46._sort.active) {
                case 'id':
                  var _ref32 = [a.id, b.id];
                  propertyA = _ref32[0];
                  propertyB = _ref32[1];
                  break;

                case 'name':
                  var _ref33 = [a.name, b.name];
                  propertyA = _ref33[0];
                  propertyB = _ref33[1];
                  break;

                case 'email':
                  var _ref34 = [a.email, b.email];
                  propertyA = _ref34[0];
                  propertyB = _ref34[1];
                  break;

                case 'birthDate':
                  var _ref35 = [a.birthDate, b.birthDate];
                  propertyA = _ref35[0];
                  propertyB = _ref35[1];
                  break;

                case 'address':
                  var _ref36 = [a.address, b.address];
                  propertyA = _ref36[0];
                  propertyB = _ref36[1];
                  break;
              }

              var valueA = isNaN(+propertyA) ? propertyA : +propertyA;
              var valueB = isNaN(+propertyB) ? propertyB : +propertyB;
              return (valueA < valueB ? -1 : 1) * (_this46._sort.direction === 'asc' ? 1 : -1);
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
    "n6yW":
    /*!*****************************************!*\
      !*** ./node_modules/dragula/classes.js ***!
      \*****************************************/

    /*! no static exports found */

    /***/
    function n6yW(module, exports, __webpack_require__) {
      "use strict";

      var cache = {};
      var start = '(?:^|\\s)';
      var end = '(?:\\s|$)';

      function lookupClass(className) {
        var cached = cache[className];

        if (cached) {
          cached.lastIndex = 0;
        } else {
          cache[className] = cached = new RegExp(start + className + end, 'g');
        }

        return cached;
      }

      function addClass(el, className) {
        var current = el.className;

        if (!current.length) {
          el.className = className;
        } else if (!lookupClass(className).test(current)) {
          el.className += ' ' + className;
        }
      }

      function rmClass(el, className) {
        el.className = el.className.replace(lookupClass(className), ' ').trim();
      }

      module.exports = {
        add: addClass,
        rm: rmClass
      };
      /***/
    },

    /***/
    "p8AH":
    /*!*********************************************************!*\
      !*** ./node_modules/@fullcalendar/timegrid/main.esm.js ***!
      \*********************************************************/

    /*! exports provided: default, AbstractTimeGridView, TimeGrid, TimeGridSlicer, TimeGridView, buildDayRanges, buildDayTable */

    /***/
    function p8AH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AbstractTimeGridView", function () {
        return AbstractTimeGridView;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TimeGrid", function () {
        return TimeGrid;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TimeGridSlicer", function () {
        return TimeGridSlicer;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TimeGridView", function () {
        return TimeGridView;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "buildDayRanges", function () {
        return buildDayRanges;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "buildDayTable", function () {
        return buildDayTable;
      });
      /* harmony import */


      var _fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @fullcalendar/core */
      "SZB9");
      /* harmony import */


      var _fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @fullcalendar/daygrid */
      "iOEq");
      /*!
      FullCalendar Time Grid Plugin v4.4.2
      Docs & License: https://fullcalendar.io/
      (c) 2019 Adam Shaw
      */

      /*! *****************************************************************************
      Copyright (c) Microsoft Corporation.
      
      Permission to use, copy, modify, and/or distribute this software for any
      purpose with or without fee is hereby granted.
      
      THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
      REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
      AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
      INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
      LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
      OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
      PERFORMANCE OF THIS SOFTWARE.
      ***************************************************************************** */

      /* global Reflect, Promise */


      var _extendStatics3 = function extendStatics(d, b) {
        _extendStatics3 = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (d, b) {
          d.__proto__ = b;
        } || function (d, b) {
          for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
          }
        };

        return _extendStatics3(d, b);
      };

      function __extends(d, b) {
        _extendStatics3(d, b);

        function __() {
          this.constructor = d;
        }

        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      }

      var _assign2 = function __assign() {
        _assign2 = Object.assign || function __assign(t) {
          for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];

            for (var p in s) {
              if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
          }

          return t;
        };

        return _assign2.apply(this, arguments);
      };
      /*
      Only handles foreground segs.
      Does not own rendering. Use for low-level util methods by TimeGrid.
      */


      var TimeGridEventRenderer =
      /** @class */
      function (_super) {
        __extends(TimeGridEventRenderer, _super);

        function TimeGridEventRenderer(timeGrid) {
          var _this = _super.call(this) || this;

          _this.timeGrid = timeGrid;
          return _this;
        }

        TimeGridEventRenderer.prototype.renderSegs = function (context, segs, mirrorInfo) {
          _super.prototype.renderSegs.call(this, context, segs, mirrorInfo); // TODO: dont do every time. memoize


          this.fullTimeFormat = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["createFormatter"])({
            hour: 'numeric',
            minute: '2-digit',
            separator: this.context.options.defaultRangeSeparator
          });
        }; // Given an array of foreground segments, render a DOM element for each, computes position,
        // and attaches to the column inner-container elements.


        TimeGridEventRenderer.prototype.attachSegs = function (segs, mirrorInfo) {
          var segsByCol = this.timeGrid.groupSegsByCol(segs); // order the segs within each column
          // TODO: have groupSegsByCol do this?

          for (var col = 0; col < segsByCol.length; col++) {
            segsByCol[col] = this.sortEventSegs(segsByCol[col]);
          }

          this.segsByCol = segsByCol;
          this.timeGrid.attachSegsByCol(segsByCol, this.timeGrid.fgContainerEls);
        };

        TimeGridEventRenderer.prototype.detachSegs = function (segs) {
          segs.forEach(function (seg) {
            Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["removeElement"])(seg.el);
          });
          this.segsByCol = null;
        };

        TimeGridEventRenderer.prototype.computeSegSizes = function (allSegs) {
          var _a = this,
              timeGrid = _a.timeGrid,
              segsByCol = _a.segsByCol;

          var colCnt = timeGrid.colCnt;
          timeGrid.computeSegVerticals(allSegs); // horizontals relies on this

          if (segsByCol) {
            for (var col = 0; col < colCnt; col++) {
              this.computeSegHorizontals(segsByCol[col]); // compute horizontal coordinates, z-index's, and reorder the array
            }
          }
        };

        TimeGridEventRenderer.prototype.assignSegSizes = function (allSegs) {
          var _a = this,
              timeGrid = _a.timeGrid,
              segsByCol = _a.segsByCol;

          var colCnt = timeGrid.colCnt;
          timeGrid.assignSegVerticals(allSegs); // horizontals relies on this

          if (segsByCol) {
            for (var col = 0; col < colCnt; col++) {
              this.assignSegCss(segsByCol[col]);
            }
          }
        }; // Computes a default event time formatting string if `eventTimeFormat` is not explicitly defined


        TimeGridEventRenderer.prototype.computeEventTimeFormat = function () {
          return {
            hour: 'numeric',
            minute: '2-digit',
            meridiem: false
          };
        }; // Computes a default `displayEventEnd` value if one is not expliclty defined


        TimeGridEventRenderer.prototype.computeDisplayEventEnd = function () {
          return true;
        }; // Renders the HTML for a single event segment's default rendering


        TimeGridEventRenderer.prototype.renderSegHtml = function (seg, mirrorInfo) {
          var eventRange = seg.eventRange;
          var eventDef = eventRange.def;
          var eventUi = eventRange.ui;
          var allDay = eventDef.allDay;
          var isDraggable = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["computeEventDraggable"])(this.context, eventDef, eventUi);
          var isResizableFromStart = seg.isStart && Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["computeEventStartResizable"])(this.context, eventDef, eventUi);
          var isResizableFromEnd = seg.isEnd && Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["computeEventEndResizable"])(this.context, eventDef, eventUi);
          var classes = this.getSegClasses(seg, isDraggable, isResizableFromStart || isResizableFromEnd, mirrorInfo);
          var skinCss = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["cssToStr"])(this.getSkinCss(eventUi));
          var timeText;
          var fullTimeText; // more verbose time text. for the print stylesheet

          var startTimeText; // just the start time text

          classes.unshift('fc-time-grid-event'); // if the event appears to span more than one day...

          if (Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["isMultiDayRange"])(eventRange.range)) {
            // Don't display time text on segments that run entirely through a day.
            // That would appear as midnight-midnight and would look dumb.
            // Otherwise, display the time text for the *segment's* times (like 6pm-midnight or midnight-10am)
            if (seg.isStart || seg.isEnd) {
              var unzonedStart = seg.start;
              var unzonedEnd = seg.end;
              timeText = this._getTimeText(unzonedStart, unzonedEnd, allDay); // TODO: give the timezones

              fullTimeText = this._getTimeText(unzonedStart, unzonedEnd, allDay, this.fullTimeFormat);
              startTimeText = this._getTimeText(unzonedStart, unzonedEnd, allDay, null, false); // displayEnd=false
            }
          } else {
            // Display the normal time text for the *event's* times
            timeText = this.getTimeText(eventRange);
            fullTimeText = this.getTimeText(eventRange, this.fullTimeFormat);
            startTimeText = this.getTimeText(eventRange, null, false); // displayEnd=false
          }

          return '<a class="' + classes.join(' ') + '"' + (eventDef.url ? ' href="' + Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["htmlEscape"])(eventDef.url) + '"' : '') + (skinCss ? ' style="' + skinCss + '"' : '') + '>' + '<div class="fc-content">' + (timeText ? '<div class="fc-time"' + ' data-start="' + Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["htmlEscape"])(startTimeText) + '"' + ' data-full="' + Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["htmlEscape"])(fullTimeText) + '"' + '>' + '<span>' + Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["htmlEscape"])(timeText) + '</span>' + '</div>' : '') + (eventDef.title ? '<div class="fc-title">' + Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["htmlEscape"])(eventDef.title) + '</div>' : '') + '</div>' + (
          /* TODO: write CSS for this
          (isResizableFromStart ?
            '<div class="fc-resizer fc-start-resizer"></div>' :
            ''
            ) +
          */
          isResizableFromEnd ? '<div class="fc-resizer fc-end-resizer"></div>' : '') + '</a>';
        }; // Given an array of segments that are all in the same column, sets the backwardCoord and forwardCoord on each.
        // Assumed the segs are already ordered.
        // NOTE: Also reorders the given array by date!


        TimeGridEventRenderer.prototype.computeSegHorizontals = function (segs) {
          var levels;
          var level0;
          var i;
          levels = buildSlotSegLevels(segs);
          computeForwardSlotSegs(levels);

          if (level0 = levels[0]) {
            for (i = 0; i < level0.length; i++) {
              computeSlotSegPressures(level0[i]);
            }

            for (i = 0; i < level0.length; i++) {
              this.computeSegForwardBack(level0[i], 0, 0);
            }
          }
        }; // Calculate seg.forwardCoord and seg.backwardCoord for the segment, where both values range
        // from 0 to 1. If the calendar is left-to-right, the seg.backwardCoord maps to "left" and
        // seg.forwardCoord maps to "right" (via percentage). Vice-versa if the calendar is right-to-left.
        //
        // The segment might be part of a "series", which means consecutive segments with the same pressure
        // who's width is unknown until an edge has been hit. `seriesBackwardPressure` is the number of
        // segments behind this one in the current series, and `seriesBackwardCoord` is the starting
        // coordinate of the first segment in the series.


        TimeGridEventRenderer.prototype.computeSegForwardBack = function (seg, seriesBackwardPressure, seriesBackwardCoord) {
          var forwardSegs = seg.forwardSegs;
          var i;

          if (seg.forwardCoord === undefined) {
            // not already computed
            if (!forwardSegs.length) {
              // if there are no forward segments, this segment should butt up against the edge
              seg.forwardCoord = 1;
            } else {
              // sort highest pressure first
              this.sortForwardSegs(forwardSegs); // this segment's forwardCoord will be calculated from the backwardCoord of the
              // highest-pressure forward segment.

              this.computeSegForwardBack(forwardSegs[0], seriesBackwardPressure + 1, seriesBackwardCoord);
              seg.forwardCoord = forwardSegs[0].backwardCoord;
            } // calculate the backwardCoord from the forwardCoord. consider the series


            seg.backwardCoord = seg.forwardCoord - (seg.forwardCoord - seriesBackwardCoord) / ( // available width for series
            seriesBackwardPressure + 1); // # of segments in the series
            // use this segment's coordinates to computed the coordinates of the less-pressurized
            // forward segments

            for (i = 0; i < forwardSegs.length; i++) {
              this.computeSegForwardBack(forwardSegs[i], 0, seg.forwardCoord);
            }
          }
        };

        TimeGridEventRenderer.prototype.sortForwardSegs = function (forwardSegs) {
          var objs = forwardSegs.map(buildTimeGridSegCompareObj);
          var specs = [// put higher-pressure first
          {
            field: 'forwardPressure',
            order: -1
          }, // put segments that are closer to initial edge first (and favor ones with no coords yet)
          {
            field: 'backwardCoord',
            order: 1
          }].concat(this.context.eventOrderSpecs);
          objs.sort(function (obj0, obj1) {
            return Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["compareByFieldSpecs"])(obj0, obj1, specs);
          });
          return objs.map(function (c) {
            return c._seg;
          });
        }; // Given foreground event segments that have already had their position coordinates computed,
        // assigns position-related CSS values to their elements.


        TimeGridEventRenderer.prototype.assignSegCss = function (segs) {
          for (var _i = 0, segs_1 = segs; _i < segs_1.length; _i++) {
            var seg = segs_1[_i];
            Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["applyStyle"])(seg.el, this.generateSegCss(seg));

            if (seg.level > 0) {
              seg.el.classList.add('fc-time-grid-event-inset');
            } // if the event is short that the title will be cut off,
            // attach a className that condenses the title into the time area.


            if (seg.eventRange.def.title && seg.bottom - seg.top < 30) {
              seg.el.classList.add('fc-short'); // TODO: "condensed" is a better name
            }
          }
        }; // Generates an object with CSS properties/values that should be applied to an event segment element.
        // Contains important positioning-related properties that should be applied to any event element, customized or not.


        TimeGridEventRenderer.prototype.generateSegCss = function (seg) {
          var shouldOverlap = this.context.options.slotEventOverlap;
          var backwardCoord = seg.backwardCoord; // the left side if LTR. the right side if RTL. floating-point

          var forwardCoord = seg.forwardCoord; // the right side if LTR. the left side if RTL. floating-point

          var props = this.timeGrid.generateSegVerticalCss(seg); // get top/bottom first

          var isRtl = this.context.isRtl;
          var left; // amount of space from left edge, a fraction of the total width

          var right; // amount of space from right edge, a fraction of the total width

          if (shouldOverlap) {
            // double the width, but don't go beyond the maximum forward coordinate (1.0)
            forwardCoord = Math.min(1, backwardCoord + (forwardCoord - backwardCoord) * 2);
          }

          if (isRtl) {
            left = 1 - forwardCoord;
            right = backwardCoord;
          } else {
            left = backwardCoord;
            right = 1 - forwardCoord;
          }

          props.zIndex = seg.level + 1; // convert from 0-base to 1-based

          props.left = left * 100 + '%';
          props.right = right * 100 + '%';

          if (shouldOverlap && seg.forwardPressure) {
            // add padding to the edge so that forward stacked events don't cover the resizer's icon
            props[isRtl ? 'marginLeft' : 'marginRight'] = 10 * 2; // 10 is a guesstimate of the icon's width
          }

          return props;
        };

        return TimeGridEventRenderer;
      }(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["FgEventRenderer"]); // Builds an array of segments "levels". The first level will be the leftmost tier of segments if the calendar is
      // left-to-right, or the rightmost if the calendar is right-to-left. Assumes the segments are already ordered by date.


      function buildSlotSegLevels(segs) {
        var levels = [];
        var i;
        var seg;
        var j;

        for (i = 0; i < segs.length; i++) {
          seg = segs[i]; // go through all the levels and stop on the first level where there are no collisions

          for (j = 0; j < levels.length; j++) {
            if (!computeSlotSegCollisions(seg, levels[j]).length) {
              break;
            }
          }

          seg.level = j;
          (levels[j] || (levels[j] = [])).push(seg);
        }

        return levels;
      } // For every segment, figure out the other segments that are in subsequent
      // levels that also occupy the same vertical space. Accumulate in seg.forwardSegs


      function computeForwardSlotSegs(levels) {
        var i;
        var level;
        var j;
        var seg;
        var k;

        for (i = 0; i < levels.length; i++) {
          level = levels[i];

          for (j = 0; j < level.length; j++) {
            seg = level[j];
            seg.forwardSegs = [];

            for (k = i + 1; k < levels.length; k++) {
              computeSlotSegCollisions(seg, levels[k], seg.forwardSegs);
            }
          }
        }
      } // Figure out which path forward (via seg.forwardSegs) results in the longest path until
      // the furthest edge is reached. The number of segments in this path will be seg.forwardPressure


      function computeSlotSegPressures(seg) {
        var forwardSegs = seg.forwardSegs;
        var forwardPressure = 0;
        var i;
        var forwardSeg;

        if (seg.forwardPressure === undefined) {
          // not already computed
          for (i = 0; i < forwardSegs.length; i++) {
            forwardSeg = forwardSegs[i]; // figure out the child's maximum forward path

            computeSlotSegPressures(forwardSeg); // either use the existing maximum, or use the child's forward pressure
            // plus one (for the forwardSeg itself)

            forwardPressure = Math.max(forwardPressure, 1 + forwardSeg.forwardPressure);
          }

          seg.forwardPressure = forwardPressure;
        }
      } // Find all the segments in `otherSegs` that vertically collide with `seg`.
      // Append into an optionally-supplied `results` array and return.


      function computeSlotSegCollisions(seg, otherSegs, results) {
        if (results === void 0) {
          results = [];
        }

        for (var i = 0; i < otherSegs.length; i++) {
          if (isSlotSegCollision(seg, otherSegs[i])) {
            results.push(otherSegs[i]);
          }
        }

        return results;
      } // Do these segments occupy the same vertical space?


      function isSlotSegCollision(seg1, seg2) {
        return seg1.bottom > seg2.top && seg1.top < seg2.bottom;
      }

      function buildTimeGridSegCompareObj(seg) {
        var obj = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["buildSegCompareObj"])(seg);
        obj.forwardPressure = seg.forwardPressure;
        obj.backwardCoord = seg.backwardCoord;
        return obj;
      }

      var TimeGridMirrorRenderer =
      /** @class */
      function (_super) {
        __extends(TimeGridMirrorRenderer, _super);

        function TimeGridMirrorRenderer() {
          return _super !== null && _super.apply(this, arguments) || this;
        }

        TimeGridMirrorRenderer.prototype.attachSegs = function (segs, mirrorInfo) {
          this.segsByCol = this.timeGrid.groupSegsByCol(segs);
          this.timeGrid.attachSegsByCol(this.segsByCol, this.timeGrid.mirrorContainerEls);
          this.sourceSeg = mirrorInfo.sourceSeg;
        };

        TimeGridMirrorRenderer.prototype.generateSegCss = function (seg) {
          var props = _super.prototype.generateSegCss.call(this, seg);

          var sourceSeg = this.sourceSeg;

          if (sourceSeg && sourceSeg.col === seg.col) {
            var sourceSegProps = _super.prototype.generateSegCss.call(this, sourceSeg);

            props.left = sourceSegProps.left;
            props.right = sourceSegProps.right;
            props.marginLeft = sourceSegProps.marginLeft;
            props.marginRight = sourceSegProps.marginRight;
          }

          return props;
        };

        return TimeGridMirrorRenderer;
      }(TimeGridEventRenderer);

      var TimeGridFillRenderer =
      /** @class */
      function (_super) {
        __extends(TimeGridFillRenderer, _super);

        function TimeGridFillRenderer(timeGrid) {
          var _this = _super.call(this) || this;

          _this.timeGrid = timeGrid;
          return _this;
        }

        TimeGridFillRenderer.prototype.attachSegs = function (type, segs) {
          var timeGrid = this.timeGrid;
          var containerEls; // TODO: more efficient lookup

          if (type === 'bgEvent') {
            containerEls = timeGrid.bgContainerEls;
          } else if (type === 'businessHours') {
            containerEls = timeGrid.businessContainerEls;
          } else if (type === 'highlight') {
            containerEls = timeGrid.highlightContainerEls;
          }

          timeGrid.attachSegsByCol(timeGrid.groupSegsByCol(segs), containerEls);
          return segs.map(function (seg) {
            return seg.el;
          });
        };

        TimeGridFillRenderer.prototype.computeSegSizes = function (segs) {
          this.timeGrid.computeSegVerticals(segs);
        };

        TimeGridFillRenderer.prototype.assignSegSizes = function (segs) {
          this.timeGrid.assignSegVerticals(segs);
        };

        return TimeGridFillRenderer;
      }(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["FillRenderer"]);
      /* A component that renders one or more columns of vertical time slots
      ----------------------------------------------------------------------------------------------------------------------*/
      // potential nice values for the slot-duration and interval-duration
      // from largest to smallest


      var AGENDA_STOCK_SUB_DURATIONS = [{
        hours: 1
      }, {
        minutes: 30
      }, {
        minutes: 15
      }, {
        seconds: 30
      }, {
        seconds: 15
      }];

      var TimeGrid =
      /** @class */
      function (_super) {
        __extends(TimeGrid, _super);

        function TimeGrid(el, renderProps) {
          var _this = _super.call(this, el) || this;

          _this.isSlatSizesDirty = false;
          _this.isColSizesDirty = false;
          _this.processOptions = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["memoize"])(_this._processOptions);
          _this.renderSkeleton = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["memoizeRendering"])(_this._renderSkeleton);
          _this.renderSlats = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["memoizeRendering"])(_this._renderSlats, null, [_this.renderSkeleton]);
          _this.renderColumns = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["memoizeRendering"])(_this._renderColumns, _this._unrenderColumns, [_this.renderSkeleton]);
          _this.renderProps = renderProps;
          var renderColumns = _this.renderColumns;
          var eventRenderer = _this.eventRenderer = new TimeGridEventRenderer(_this);
          var fillRenderer = _this.fillRenderer = new TimeGridFillRenderer(_this);
          _this.mirrorRenderer = new TimeGridMirrorRenderer(_this);
          _this.renderBusinessHours = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["memoizeRendering"])(fillRenderer.renderSegs.bind(fillRenderer, 'businessHours'), fillRenderer.unrender.bind(fillRenderer, 'businessHours'), [renderColumns]);
          _this.renderDateSelection = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["memoizeRendering"])(_this._renderDateSelection, _this._unrenderDateSelection, [renderColumns]);
          _this.renderFgEvents = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["memoizeRendering"])(eventRenderer.renderSegs.bind(eventRenderer), eventRenderer.unrender.bind(eventRenderer), [renderColumns]);
          _this.renderBgEvents = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["memoizeRendering"])(fillRenderer.renderSegs.bind(fillRenderer, 'bgEvent'), fillRenderer.unrender.bind(fillRenderer, 'bgEvent'), [renderColumns]);
          _this.renderEventSelection = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["memoizeRendering"])(eventRenderer.selectByInstanceId.bind(eventRenderer), eventRenderer.unselectByInstanceId.bind(eventRenderer), [_this.renderFgEvents]);
          _this.renderEventDrag = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["memoizeRendering"])(_this._renderEventDrag, _this._unrenderEventDrag, [renderColumns]);
          _this.renderEventResize = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["memoizeRendering"])(_this._renderEventResize, _this._unrenderEventResize, [renderColumns]);
          return _this;
        }
        /* Options
        ------------------------------------------------------------------------------------------------------------------*/
        // Parses various options into properties of this object
        // MUST have context already set


        TimeGrid.prototype._processOptions = function (options) {
          var slotDuration = options.slotDuration,
              snapDuration = options.snapDuration;
          var snapsPerSlot;
          var input;
          slotDuration = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["createDuration"])(slotDuration);
          snapDuration = snapDuration ? Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["createDuration"])(snapDuration) : slotDuration;
          snapsPerSlot = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["wholeDivideDurations"])(slotDuration, snapDuration);

          if (snapsPerSlot === null) {
            snapDuration = slotDuration;
            snapsPerSlot = 1; // TODO: say warning?
          }

          this.slotDuration = slotDuration;
          this.snapDuration = snapDuration;
          this.snapsPerSlot = snapsPerSlot; // might be an array value (for TimelineView).
          // if so, getting the most granular entry (the last one probably).

          input = options.slotLabelFormat;

          if (Array.isArray(input)) {
            input = input[input.length - 1];
          }

          this.labelFormat = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["createFormatter"])(input || {
            hour: 'numeric',
            minute: '2-digit',
            omitZeroMinute: true,
            meridiem: 'short'
          });
          input = options.slotLabelInterval;
          this.labelInterval = input ? Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["createDuration"])(input) : this.computeLabelInterval(slotDuration);
        }; // Computes an automatic value for slotLabelInterval


        TimeGrid.prototype.computeLabelInterval = function (slotDuration) {
          var i;
          var labelInterval;
          var slotsPerLabel; // find the smallest stock label interval that results in more than one slots-per-label

          for (i = AGENDA_STOCK_SUB_DURATIONS.length - 1; i >= 0; i--) {
            labelInterval = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["createDuration"])(AGENDA_STOCK_SUB_DURATIONS[i]);
            slotsPerLabel = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["wholeDivideDurations"])(labelInterval, slotDuration);

            if (slotsPerLabel !== null && slotsPerLabel > 1) {
              return labelInterval;
            }
          }

          return slotDuration; // fall back
        };
        /* Rendering
        ------------------------------------------------------------------------------------------------------------------*/


        TimeGrid.prototype.render = function (props, context) {
          this.processOptions(context.options);
          var cells = props.cells;
          this.colCnt = cells.length;
          this.renderSkeleton(context.theme);
          this.renderSlats(props.dateProfile);
          this.renderColumns(props.cells, props.dateProfile);
          this.renderBusinessHours(context, props.businessHourSegs);
          this.renderDateSelection(props.dateSelectionSegs);
          this.renderFgEvents(context, props.fgEventSegs);
          this.renderBgEvents(context, props.bgEventSegs);
          this.renderEventSelection(props.eventSelection);
          this.renderEventDrag(props.eventDrag);
          this.renderEventResize(props.eventResize);
        };

        TimeGrid.prototype.destroy = function () {
          _super.prototype.destroy.call(this); // should unrender everything else too


          this.renderSlats.unrender();
          this.renderColumns.unrender();
          this.renderSkeleton.unrender();
        };

        TimeGrid.prototype.updateSize = function (isResize) {
          var _a = this,
              fillRenderer = _a.fillRenderer,
              eventRenderer = _a.eventRenderer,
              mirrorRenderer = _a.mirrorRenderer;

          if (isResize || this.isSlatSizesDirty) {
            this.buildSlatPositions();
            this.isSlatSizesDirty = false;
          }

          if (isResize || this.isColSizesDirty) {
            this.buildColPositions();
            this.isColSizesDirty = false;
          }

          fillRenderer.computeSizes(isResize);
          eventRenderer.computeSizes(isResize);
          mirrorRenderer.computeSizes(isResize);
          fillRenderer.assignSizes(isResize);
          eventRenderer.assignSizes(isResize);
          mirrorRenderer.assignSizes(isResize);
        };

        TimeGrid.prototype._renderSkeleton = function (theme) {
          var el = this.el;
          el.innerHTML = '<div class="fc-bg"></div>' + '<div class="fc-slats"></div>' + '<hr class="fc-divider ' + theme.getClass('widgetHeader') + '" style="display:none" />';
          this.rootBgContainerEl = el.querySelector('.fc-bg');
          this.slatContainerEl = el.querySelector('.fc-slats');
          this.bottomRuleEl = el.querySelector('.fc-divider');
        };

        TimeGrid.prototype._renderSlats = function (dateProfile) {
          var theme = this.context.theme;
          this.slatContainerEl.innerHTML = '<table class="' + theme.getClass('tableGrid') + '">' + this.renderSlatRowHtml(dateProfile) + '</table>';
          this.slatEls = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["findElements"])(this.slatContainerEl, 'tr');
          this.slatPositions = new _fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["PositionCache"](this.el, this.slatEls, false, true // vertical
          );
          this.isSlatSizesDirty = true;
        }; // Generates the HTML for the horizontal "slats" that run width-wise. Has a time axis on a side. Depends on RTL.


        TimeGrid.prototype.renderSlatRowHtml = function (dateProfile) {
          var _a = this.context,
              dateEnv = _a.dateEnv,
              theme = _a.theme,
              isRtl = _a.isRtl;
          var html = '';
          var dayStart = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["startOfDay"])(dateProfile.renderRange.start);
          var slotTime = dateProfile.minTime;
          var slotIterator = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["createDuration"])(0);
          var slotDate; // will be on the view's first day, but we only care about its time

          var isLabeled;
          var axisHtml; // Calculate the time for each slot

          while (Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["asRoughMs"])(slotTime) < Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["asRoughMs"])(dateProfile.maxTime)) {
            slotDate = dateEnv.add(dayStart, slotTime);
            isLabeled = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["wholeDivideDurations"])(slotIterator, this.labelInterval) !== null;
            axisHtml = '<td class="fc-axis fc-time ' + theme.getClass('widgetContent') + '">' + (isLabeled ? '<span>' + // for matchCellWidths
            Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["htmlEscape"])(dateEnv.format(slotDate, this.labelFormat)) + '</span>' : '') + '</td>';
            html += '<tr data-time="' + Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["formatIsoTimeString"])(slotDate) + '"' + (isLabeled ? '' : ' class="fc-minor"') + '>' + (!isRtl ? axisHtml : '') + '<td class="' + theme.getClass('widgetContent') + '"></td>' + (isRtl ? axisHtml : '') + '</tr>';
            slotTime = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["addDurations"])(slotTime, this.slotDuration);
            slotIterator = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["addDurations"])(slotIterator, this.slotDuration);
          }

          return html;
        };

        TimeGrid.prototype._renderColumns = function (cells, dateProfile) {
          var _a = this.context,
              calendar = _a.calendar,
              view = _a.view,
              isRtl = _a.isRtl,
              theme = _a.theme,
              dateEnv = _a.dateEnv;
          var bgRow = new _fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_1__["DayBgRow"](this.context);
          this.rootBgContainerEl.innerHTML = '<table class="' + theme.getClass('tableGrid') + '">' + bgRow.renderHtml({
            cells: cells,
            dateProfile: dateProfile,
            renderIntroHtml: this.renderProps.renderBgIntroHtml
          }) + '</table>';
          this.colEls = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["findElements"])(this.el, '.fc-day, .fc-disabled-day');

          for (var col = 0; col < this.colCnt; col++) {
            calendar.publiclyTrigger('dayRender', [{
              date: dateEnv.toDate(cells[col].date),
              el: this.colEls[col],
              view: view
            }]);
          }

          if (isRtl) {
            this.colEls.reverse();
          }

          this.colPositions = new _fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["PositionCache"](this.el, this.colEls, true, // horizontal
          false);
          this.renderContentSkeleton();
          this.isColSizesDirty = true;
        };

        TimeGrid.prototype._unrenderColumns = function () {
          this.unrenderContentSkeleton();
        };
        /* Content Skeleton
        ------------------------------------------------------------------------------------------------------------------*/
        // Renders the DOM that the view's content will live in


        TimeGrid.prototype.renderContentSkeleton = function () {
          var isRtl = this.context.isRtl;
          var parts = [];
          var skeletonEl;
          parts.push(this.renderProps.renderIntroHtml());

          for (var i = 0; i < this.colCnt; i++) {
            parts.push('<td>' + '<div class="fc-content-col">' + '<div class="fc-event-container fc-mirror-container"></div>' + '<div class="fc-event-container"></div>' + '<div class="fc-highlight-container"></div>' + '<div class="fc-bgevent-container"></div>' + '<div class="fc-business-container"></div>' + '</div>' + '</td>');
          }

          if (isRtl) {
            parts.reverse();
          }

          skeletonEl = this.contentSkeletonEl = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["htmlToElement"])('<div class="fc-content-skeleton">' + '<table>' + '<tr>' + parts.join('') + '</tr>' + '</table>' + '</div>');
          this.colContainerEls = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["findElements"])(skeletonEl, '.fc-content-col');
          this.mirrorContainerEls = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["findElements"])(skeletonEl, '.fc-mirror-container');
          this.fgContainerEls = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["findElements"])(skeletonEl, '.fc-event-container:not(.fc-mirror-container)');
          this.bgContainerEls = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["findElements"])(skeletonEl, '.fc-bgevent-container');
          this.highlightContainerEls = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["findElements"])(skeletonEl, '.fc-highlight-container');
          this.businessContainerEls = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["findElements"])(skeletonEl, '.fc-business-container');

          if (isRtl) {
            this.colContainerEls.reverse();
            this.mirrorContainerEls.reverse();
            this.fgContainerEls.reverse();
            this.bgContainerEls.reverse();
            this.highlightContainerEls.reverse();
            this.businessContainerEls.reverse();
          }

          this.el.appendChild(skeletonEl);
        };

        TimeGrid.prototype.unrenderContentSkeleton = function () {
          Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["removeElement"])(this.contentSkeletonEl);
        }; // Given a flat array of segments, return an array of sub-arrays, grouped by each segment's col


        TimeGrid.prototype.groupSegsByCol = function (segs) {
          var segsByCol = [];
          var i;

          for (i = 0; i < this.colCnt; i++) {
            segsByCol.push([]);
          }

          for (i = 0; i < segs.length; i++) {
            segsByCol[segs[i].col].push(segs[i]);
          }

          return segsByCol;
        }; // Given segments grouped by column, insert the segments' elements into a parallel array of container
        // elements, each living within a column.


        TimeGrid.prototype.attachSegsByCol = function (segsByCol, containerEls) {
          var col;
          var segs;
          var i;

          for (col = 0; col < this.colCnt; col++) {
            // iterate each column grouping
            segs = segsByCol[col];

            for (i = 0; i < segs.length; i++) {
              containerEls[col].appendChild(segs[i].el);
            }
          }
        };
        /* Now Indicator
        ------------------------------------------------------------------------------------------------------------------*/


        TimeGrid.prototype.getNowIndicatorUnit = function () {
          return 'minute'; // will refresh on the minute
        };

        TimeGrid.prototype.renderNowIndicator = function (segs, date) {
          // HACK: if date columns not ready for some reason (scheduler)
          if (!this.colContainerEls) {
            return;
          }

          var top = this.computeDateTop(date);
          var nodes = [];
          var i; // render lines within the columns

          for (i = 0; i < segs.length; i++) {
            var lineEl = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["createElement"])('div', {
              className: 'fc-now-indicator fc-now-indicator-line'
            });
            lineEl.style.top = top + 'px';
            this.colContainerEls[segs[i].col].appendChild(lineEl);
            nodes.push(lineEl);
          } // render an arrow over the axis


          if (segs.length > 0) {
            // is the current time in view?
            var arrowEl = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["createElement"])('div', {
              className: 'fc-now-indicator fc-now-indicator-arrow'
            });
            arrowEl.style.top = top + 'px';
            this.contentSkeletonEl.appendChild(arrowEl);
            nodes.push(arrowEl);
          }

          this.nowIndicatorEls = nodes;
        };

        TimeGrid.prototype.unrenderNowIndicator = function () {
          if (this.nowIndicatorEls) {
            this.nowIndicatorEls.forEach(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["removeElement"]);
            this.nowIndicatorEls = null;
          }
        };
        /* Coordinates
        ------------------------------------------------------------------------------------------------------------------*/


        TimeGrid.prototype.getTotalSlatHeight = function () {
          return this.slatContainerEl.getBoundingClientRect().height;
        }; // Computes the top coordinate, relative to the bounds of the grid, of the given date.
        // A `startOfDayDate` must be given for avoiding ambiguity over how to treat midnight.


        TimeGrid.prototype.computeDateTop = function (when, startOfDayDate) {
          if (!startOfDayDate) {
            startOfDayDate = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["startOfDay"])(when);
          }

          return this.computeTimeTop(Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["createDuration"])(when.valueOf() - startOfDayDate.valueOf()));
        }; // Computes the top coordinate, relative to the bounds of the grid, of the given time (a Duration).


        TimeGrid.prototype.computeTimeTop = function (duration) {
          var len = this.slatEls.length;
          var dateProfile = this.props.dateProfile;
          var slatCoverage = (duration.milliseconds - Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["asRoughMs"])(dateProfile.minTime)) / Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["asRoughMs"])(this.slotDuration); // floating-point value of # of slots covered

          var slatIndex;
          var slatRemainder; // compute a floating-point number for how many slats should be progressed through.
          // from 0 to number of slats (inclusive)
          // constrained because minTime/maxTime might be customized.

          slatCoverage = Math.max(0, slatCoverage);
          slatCoverage = Math.min(len, slatCoverage); // an integer index of the furthest whole slat
          // from 0 to number slats (*exclusive*, so len-1)

          slatIndex = Math.floor(slatCoverage);
          slatIndex = Math.min(slatIndex, len - 1); // how much further through the slatIndex slat (from 0.0-1.0) must be covered in addition.
          // could be 1.0 if slatCoverage is covering *all* the slots

          slatRemainder = slatCoverage - slatIndex;
          return this.slatPositions.tops[slatIndex] + this.slatPositions.getHeight(slatIndex) * slatRemainder;
        }; // For each segment in an array, computes and assigns its top and bottom properties


        TimeGrid.prototype.computeSegVerticals = function (segs) {
          var options = this.context.options;
          var eventMinHeight = options.timeGridEventMinHeight;
          var i;
          var seg;
          var dayDate;

          for (i = 0; i < segs.length; i++) {
            seg = segs[i];
            dayDate = this.props.cells[seg.col].date;
            seg.top = this.computeDateTop(seg.start, dayDate);
            seg.bottom = Math.max(seg.top + eventMinHeight, this.computeDateTop(seg.end, dayDate));
          }
        }; // Given segments that already have their top/bottom properties computed, applies those values to
        // the segments' elements.


        TimeGrid.prototype.assignSegVerticals = function (segs) {
          var i;
          var seg;

          for (i = 0; i < segs.length; i++) {
            seg = segs[i];
            Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["applyStyle"])(seg.el, this.generateSegVerticalCss(seg));
          }
        }; // Generates an object with CSS properties for the top/bottom coordinates of a segment element


        TimeGrid.prototype.generateSegVerticalCss = function (seg) {
          return {
            top: seg.top,
            bottom: -seg.bottom // flipped because needs to be space beyond bottom edge of event container

          };
        };
        /* Sizing
        ------------------------------------------------------------------------------------------------------------------*/


        TimeGrid.prototype.buildPositionCaches = function () {
          this.buildColPositions();
          this.buildSlatPositions();
        };

        TimeGrid.prototype.buildColPositions = function () {
          this.colPositions.build();
        };

        TimeGrid.prototype.buildSlatPositions = function () {
          this.slatPositions.build();
        };
        /* Hit System
        ------------------------------------------------------------------------------------------------------------------*/


        TimeGrid.prototype.positionToHit = function (positionLeft, positionTop) {
          var dateEnv = this.context.dateEnv;

          var _a = this,
              snapsPerSlot = _a.snapsPerSlot,
              slatPositions = _a.slatPositions,
              colPositions = _a.colPositions;

          var colIndex = colPositions.leftToIndex(positionLeft);
          var slatIndex = slatPositions.topToIndex(positionTop);

          if (colIndex != null && slatIndex != null) {
            var slatTop = slatPositions.tops[slatIndex];
            var slatHeight = slatPositions.getHeight(slatIndex);
            var partial = (positionTop - slatTop) / slatHeight; // floating point number between 0 and 1

            var localSnapIndex = Math.floor(partial * snapsPerSlot); // the snap # relative to start of slat

            var snapIndex = slatIndex * snapsPerSlot + localSnapIndex;
            var dayDate = this.props.cells[colIndex].date;
            var time = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["addDurations"])(this.props.dateProfile.minTime, Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["multiplyDuration"])(this.snapDuration, snapIndex));
            var start = dateEnv.add(dayDate, time);
            var end = dateEnv.add(start, this.snapDuration);
            return {
              col: colIndex,
              dateSpan: {
                range: {
                  start: start,
                  end: end
                },
                allDay: false
              },
              dayEl: this.colEls[colIndex],
              relativeRect: {
                left: colPositions.lefts[colIndex],
                right: colPositions.rights[colIndex],
                top: slatTop,
                bottom: slatTop + slatHeight
              }
            };
          }
        };
        /* Event Drag Visualization
        ------------------------------------------------------------------------------------------------------------------*/


        TimeGrid.prototype._renderEventDrag = function (state) {
          if (state) {
            this.eventRenderer.hideByHash(state.affectedInstances);

            if (state.isEvent) {
              this.mirrorRenderer.renderSegs(this.context, state.segs, {
                isDragging: true,
                sourceSeg: state.sourceSeg
              });
            } else {
              this.fillRenderer.renderSegs('highlight', this.context, state.segs);
            }
          }
        };

        TimeGrid.prototype._unrenderEventDrag = function (state) {
          if (state) {
            this.eventRenderer.showByHash(state.affectedInstances);

            if (state.isEvent) {
              this.mirrorRenderer.unrender(this.context, state.segs, {
                isDragging: true,
                sourceSeg: state.sourceSeg
              });
            } else {
              this.fillRenderer.unrender('highlight', this.context);
            }
          }
        };
        /* Event Resize Visualization
        ------------------------------------------------------------------------------------------------------------------*/


        TimeGrid.prototype._renderEventResize = function (state) {
          if (state) {
            this.eventRenderer.hideByHash(state.affectedInstances);
            this.mirrorRenderer.renderSegs(this.context, state.segs, {
              isResizing: true,
              sourceSeg: state.sourceSeg
            });
          }
        };

        TimeGrid.prototype._unrenderEventResize = function (state) {
          if (state) {
            this.eventRenderer.showByHash(state.affectedInstances);
            this.mirrorRenderer.unrender(this.context, state.segs, {
              isResizing: true,
              sourceSeg: state.sourceSeg
            });
          }
        };
        /* Selection
        ------------------------------------------------------------------------------------------------------------------*/
        // Renders a visual indication of a selection. Overrides the default, which was to simply render a highlight.


        TimeGrid.prototype._renderDateSelection = function (segs) {
          if (segs) {
            if (this.context.options.selectMirror) {
              this.mirrorRenderer.renderSegs(this.context, segs, {
                isSelecting: true
              });
            } else {
              this.fillRenderer.renderSegs('highlight', this.context, segs);
            }
          }
        };

        TimeGrid.prototype._unrenderDateSelection = function (segs) {
          if (segs) {
            if (this.context.options.selectMirror) {
              this.mirrorRenderer.unrender(this.context, segs, {
                isSelecting: true
              });
            } else {
              this.fillRenderer.unrender('highlight', this.context);
            }
          }
        };

        return TimeGrid;
      }(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["DateComponent"]);

      var AllDaySplitter =
      /** @class */
      function (_super) {
        __extends(AllDaySplitter, _super);

        function AllDaySplitter() {
          return _super !== null && _super.apply(this, arguments) || this;
        }

        AllDaySplitter.prototype.getKeyInfo = function () {
          return {
            allDay: {},
            timed: {}
          };
        };

        AllDaySplitter.prototype.getKeysForDateSpan = function (dateSpan) {
          if (dateSpan.allDay) {
            return ['allDay'];
          } else {
            return ['timed'];
          }
        };

        AllDaySplitter.prototype.getKeysForEventDef = function (eventDef) {
          if (!eventDef.allDay) {
            return ['timed'];
          } else if (Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["hasBgRendering"])(eventDef)) {
            return ['timed', 'allDay'];
          } else {
            return ['allDay'];
          }
        };

        return AllDaySplitter;
      }(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["Splitter"]);

      var TIMEGRID_ALL_DAY_EVENT_LIMIT = 5;
      var WEEK_HEADER_FORMAT = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["createFormatter"])({
        week: 'short'
      });
      /* An abstract class for all timegrid-related views. Displays one more columns with time slots running vertically.
      ----------------------------------------------------------------------------------------------------------------------*/
      // Is a manager for the TimeGrid subcomponent and possibly the DayGrid subcomponent (if allDaySlot is on).
      // Responsible for managing width/height.

      var AbstractTimeGridView =
      /** @class */
      function (_super) {
        __extends(AbstractTimeGridView, _super);

        function AbstractTimeGridView() {
          var _this = _super !== null && _super.apply(this, arguments) || this;

          _this.splitter = new AllDaySplitter();
          _this.renderSkeleton = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["memoizeRendering"])(_this._renderSkeleton, _this._unrenderSkeleton);
          /* Header Render Methods
          ------------------------------------------------------------------------------------------------------------------*/
          // Generates the HTML that will go before the day-of week header cells

          _this.renderHeadIntroHtml = function () {
            var _a = _this.context,
                theme = _a.theme,
                dateEnv = _a.dateEnv,
                options = _a.options;
            var range = _this.props.dateProfile.renderRange;
            var dayCnt = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["diffDays"])(range.start, range.end);
            var weekText;

            if (options.weekNumbers) {
              weekText = dateEnv.format(range.start, WEEK_HEADER_FORMAT);
              return '' + '<th class="fc-axis fc-week-number ' + theme.getClass('widgetHeader') + '" ' + _this.axisStyleAttr() + '>' + Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["buildGotoAnchorHtml"])( // aside from link, important for matchCellWidths
              options, dateEnv, {
                date: range.start,
                type: 'week',
                forceOff: dayCnt > 1
              }, Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["htmlEscape"])(weekText) // inner HTML
              ) + '</th>';
            } else {
              return '<th class="fc-axis ' + theme.getClass('widgetHeader') + '" ' + _this.axisStyleAttr() + '></th>';
            }
          };
          /* Time Grid Render Methods
          ------------------------------------------------------------------------------------------------------------------*/
          // Generates the HTML that goes before the bg of the TimeGrid slot area. Long vertical column.


          _this.renderTimeGridBgIntroHtml = function () {
            var theme = _this.context.theme;
            return '<td class="fc-axis ' + theme.getClass('widgetContent') + '" ' + _this.axisStyleAttr() + '></td>';
          }; // Generates the HTML that goes before all other types of cells.
          // Affects content-skeleton, mirror-skeleton, highlight-skeleton for both the time-grid and day-grid.


          _this.renderTimeGridIntroHtml = function () {
            return '<td class="fc-axis" ' + _this.axisStyleAttr() + '></td>';
          };
          /* Day Grid Render Methods
          ------------------------------------------------------------------------------------------------------------------*/
          // Generates the HTML that goes before the all-day cells


          _this.renderDayGridBgIntroHtml = function () {
            var _a = _this.context,
                theme = _a.theme,
                options = _a.options;
            return '' + '<td class="fc-axis ' + theme.getClass('widgetContent') + '" ' + _this.axisStyleAttr() + '>' + '<span>' + // needed for matchCellWidths
            Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["getAllDayHtml"])(options) + '</span>' + '</td>';
          }; // Generates the HTML that goes before all other types of cells.
          // Affects content-skeleton, mirror-skeleton, highlight-skeleton for both the time-grid and day-grid.


          _this.renderDayGridIntroHtml = function () {
            return '<td class="fc-axis" ' + _this.axisStyleAttr() + '></td>';
          };

          return _this;
        }

        AbstractTimeGridView.prototype.render = function (props, context) {
          _super.prototype.render.call(this, props, context);

          this.renderSkeleton(context);
        };

        AbstractTimeGridView.prototype.destroy = function () {
          _super.prototype.destroy.call(this);

          this.renderSkeleton.unrender();
        };

        AbstractTimeGridView.prototype._renderSkeleton = function (context) {
          this.el.classList.add('fc-timeGrid-view');
          this.el.innerHTML = this.renderSkeletonHtml();
          this.scroller = new _fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["ScrollComponent"]('hidden', // overflow x
          'auto' // overflow y
          );
          var timeGridWrapEl = this.scroller.el;
          this.el.querySelector('.fc-body > tr > td').appendChild(timeGridWrapEl);
          timeGridWrapEl.classList.add('fc-time-grid-container');
          var timeGridEl = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["createElement"])('div', {
            className: 'fc-time-grid'
          });
          timeGridWrapEl.appendChild(timeGridEl);
          this.timeGrid = new TimeGrid(timeGridEl, {
            renderBgIntroHtml: this.renderTimeGridBgIntroHtml,
            renderIntroHtml: this.renderTimeGridIntroHtml
          });

          if (context.options.allDaySlot) {
            // should we display the "all-day" area?
            this.dayGrid = new _fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_1__["DayGrid"]( // the all-day subcomponent of this view
            this.el.querySelector('.fc-day-grid'), {
              renderNumberIntroHtml: this.renderDayGridIntroHtml,
              renderBgIntroHtml: this.renderDayGridBgIntroHtml,
              renderIntroHtml: this.renderDayGridIntroHtml,
              colWeekNumbersVisible: false,
              cellWeekNumbersVisible: false
            }); // have the day-grid extend it's coordinate area over the <hr> dividing the two grids

            var dividerEl = this.el.querySelector('.fc-divider');
            this.dayGrid.bottomCoordPadding = dividerEl.getBoundingClientRect().height;
          }
        };

        AbstractTimeGridView.prototype._unrenderSkeleton = function () {
          this.el.classList.remove('fc-timeGrid-view');
          this.timeGrid.destroy();

          if (this.dayGrid) {
            this.dayGrid.destroy();
          }

          this.scroller.destroy();
        };
        /* Rendering
        ------------------------------------------------------------------------------------------------------------------*/
        // Builds the HTML skeleton for the view.
        // The day-grid and time-grid components will render inside containers defined by this HTML.


        AbstractTimeGridView.prototype.renderSkeletonHtml = function () {
          var _a = this.context,
              theme = _a.theme,
              options = _a.options;
          return '' + '<table class="' + theme.getClass('tableGrid') + '">' + (options.columnHeader ? '<thead class="fc-head">' + '<tr>' + '<td class="fc-head-container ' + theme.getClass('widgetHeader') + '">&nbsp;</td>' + '</tr>' + '</thead>' : '') + '<tbody class="fc-body">' + '<tr>' + '<td class="' + theme.getClass('widgetContent') + '">' + (options.allDaySlot ? '<div class="fc-day-grid"></div>' + '<hr class="fc-divider ' + theme.getClass('widgetHeader') + '" />' : '') + '</td>' + '</tr>' + '</tbody>' + '</table>';
        };
        /* Now Indicator
        ------------------------------------------------------------------------------------------------------------------*/


        AbstractTimeGridView.prototype.getNowIndicatorUnit = function () {
          return this.timeGrid.getNowIndicatorUnit();
        }; // subclasses should implement
        // renderNowIndicator(date: DateMarker) {
        // }


        AbstractTimeGridView.prototype.unrenderNowIndicator = function () {
          this.timeGrid.unrenderNowIndicator();
        };
        /* Dimensions
        ------------------------------------------------------------------------------------------------------------------*/


        AbstractTimeGridView.prototype.updateSize = function (isResize, viewHeight, isAuto) {
          _super.prototype.updateSize.call(this, isResize, viewHeight, isAuto); // will call updateBaseSize. important that executes first


          this.timeGrid.updateSize(isResize);

          if (this.dayGrid) {
            this.dayGrid.updateSize(isResize);
          }
        }; // Adjusts the vertical dimensions of the view to the specified values


        AbstractTimeGridView.prototype.updateBaseSize = function (isResize, viewHeight, isAuto) {
          var _this = this;

          var eventLimit;
          var scrollerHeight;
          var scrollbarWidths; // make all axis cells line up

          this.axisWidth = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["matchCellWidths"])(Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["findElements"])(this.el, '.fc-axis')); // hack to give the view some height prior to timeGrid's columns being rendered
          // TODO: separate setting height from scroller VS timeGrid.

          if (!this.timeGrid.colEls) {
            if (!isAuto) {
              scrollerHeight = this.computeScrollerHeight(viewHeight);
              this.scroller.setHeight(scrollerHeight);
            }

            return;
          } // set of fake row elements that must compensate when scroller has scrollbars


          var noScrollRowEls = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["findElements"])(this.el, '.fc-row').filter(function (node) {
            return !_this.scroller.el.contains(node);
          }); // reset all dimensions back to the original state

          this.timeGrid.bottomRuleEl.style.display = 'none'; // will be shown later if this <hr> is necessary

          this.scroller.clear(); // sets height to 'auto' and clears overflow

          noScrollRowEls.forEach(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["uncompensateScroll"]); // limit number of events in the all-day area

          if (this.dayGrid) {
            this.dayGrid.removeSegPopover(); // kill the "more" popover if displayed

            eventLimit = this.context.options.eventLimit;

            if (eventLimit && typeof eventLimit !== 'number') {
              eventLimit = TIMEGRID_ALL_DAY_EVENT_LIMIT; // make sure "auto" goes to a real number
            }

            if (eventLimit) {
              this.dayGrid.limitRows(eventLimit);
            }
          }

          if (!isAuto) {
            // should we force dimensions of the scroll container?
            scrollerHeight = this.computeScrollerHeight(viewHeight);
            this.scroller.setHeight(scrollerHeight);
            scrollbarWidths = this.scroller.getScrollbarWidths();

            if (scrollbarWidths.left || scrollbarWidths.right) {
              // using scrollbars?
              // make the all-day and header rows lines up
              noScrollRowEls.forEach(function (rowEl) {
                Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["compensateScroll"])(rowEl, scrollbarWidths);
              }); // the scrollbar compensation might have changed text flow, which might affect height, so recalculate
              // and reapply the desired height to the scroller.

              scrollerHeight = this.computeScrollerHeight(viewHeight);
              this.scroller.setHeight(scrollerHeight);
            } // guarantees the same scrollbar widths


            this.scroller.lockOverflow(scrollbarWidths); // if there's any space below the slats, show the horizontal rule.
            // this won't cause any new overflow, because lockOverflow already called.

            if (this.timeGrid.getTotalSlatHeight() < scrollerHeight) {
              this.timeGrid.bottomRuleEl.style.display = '';
            }
          }
        }; // given a desired total height of the view, returns what the height of the scroller should be


        AbstractTimeGridView.prototype.computeScrollerHeight = function (viewHeight) {
          return viewHeight - Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["subtractInnerElHeight"])(this.el, this.scroller.el); // everything that's NOT the scroller
        };
        /* Scroll
        ------------------------------------------------------------------------------------------------------------------*/
        // Computes the initial pre-configured scroll state prior to allowing the user to change it


        AbstractTimeGridView.prototype.computeDateScroll = function (duration) {
          var top = this.timeGrid.computeTimeTop(duration); // zoom can give weird floating-point values. rather scroll a little bit further

          top = Math.ceil(top);

          if (top) {
            top++; // to overcome top border that slots beyond the first have. looks better
          }

          return {
            top: top
          };
        };

        AbstractTimeGridView.prototype.queryDateScroll = function () {
          return {
            top: this.scroller.getScrollTop()
          };
        };

        AbstractTimeGridView.prototype.applyDateScroll = function (scroll) {
          if (scroll.top !== undefined) {
            this.scroller.setScrollTop(scroll.top);
          }
        }; // Generates an HTML attribute string for setting the width of the axis, if it is known


        AbstractTimeGridView.prototype.axisStyleAttr = function () {
          if (this.axisWidth != null) {
            return 'style="width:' + this.axisWidth + 'px"';
          }

          return '';
        };

        return AbstractTimeGridView;
      }(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["View"]);

      AbstractTimeGridView.prototype.usesMinMaxTime = true; // indicates that minTime/maxTime affects rendering

      var SimpleTimeGrid =
      /** @class */
      function (_super) {
        __extends(SimpleTimeGrid, _super);

        function SimpleTimeGrid(timeGrid) {
          var _this = _super.call(this, timeGrid.el) || this;

          _this.buildDayRanges = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["memoize"])(buildDayRanges);
          _this.slicer = new TimeGridSlicer();
          _this.timeGrid = timeGrid;
          return _this;
        }

        SimpleTimeGrid.prototype.firstContext = function (context) {
          context.calendar.registerInteractiveComponent(this, {
            el: this.timeGrid.el
          });
        };

        SimpleTimeGrid.prototype.destroy = function () {
          _super.prototype.destroy.call(this);

          this.context.calendar.unregisterInteractiveComponent(this);
        };

        SimpleTimeGrid.prototype.render = function (props, context) {
          var dateEnv = this.context.dateEnv;
          var dateProfile = props.dateProfile,
              dayTable = props.dayTable;
          var dayRanges = this.dayRanges = this.buildDayRanges(dayTable, dateProfile, dateEnv);
          var timeGrid = this.timeGrid;
          timeGrid.receiveContext(context); // hack because context is used in sliceProps

          timeGrid.receiveProps(_assign2({}, this.slicer.sliceProps(props, dateProfile, null, context.calendar, timeGrid, dayRanges), {
            dateProfile: dateProfile,
            cells: dayTable.cells[0]
          }), context);
        };

        SimpleTimeGrid.prototype.renderNowIndicator = function (date) {
          this.timeGrid.renderNowIndicator(this.slicer.sliceNowDate(date, this.timeGrid, this.dayRanges), date);
        };

        SimpleTimeGrid.prototype.buildPositionCaches = function () {
          this.timeGrid.buildPositionCaches();
        };

        SimpleTimeGrid.prototype.queryHit = function (positionLeft, positionTop) {
          var rawHit = this.timeGrid.positionToHit(positionLeft, positionTop);

          if (rawHit) {
            return {
              component: this.timeGrid,
              dateSpan: rawHit.dateSpan,
              dayEl: rawHit.dayEl,
              rect: {
                left: rawHit.relativeRect.left,
                right: rawHit.relativeRect.right,
                top: rawHit.relativeRect.top,
                bottom: rawHit.relativeRect.bottom
              },
              layer: 0
            };
          }
        };

        return SimpleTimeGrid;
      }(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["DateComponent"]);

      function buildDayRanges(dayTable, dateProfile, dateEnv) {
        var ranges = [];

        for (var _i = 0, _a = dayTable.headerDates; _i < _a.length; _i++) {
          var date = _a[_i];
          ranges.push({
            start: dateEnv.add(date, dateProfile.minTime),
            end: dateEnv.add(date, dateProfile.maxTime)
          });
        }

        return ranges;
      }

      var TimeGridSlicer =
      /** @class */
      function (_super) {
        __extends(TimeGridSlicer, _super);

        function TimeGridSlicer() {
          return _super !== null && _super.apply(this, arguments) || this;
        }

        TimeGridSlicer.prototype.sliceRange = function (range, dayRanges) {
          var segs = [];

          for (var col = 0; col < dayRanges.length; col++) {
            var segRange = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["intersectRanges"])(range, dayRanges[col]);

            if (segRange) {
              segs.push({
                start: segRange.start,
                end: segRange.end,
                isStart: segRange.start.valueOf() === range.start.valueOf(),
                isEnd: segRange.end.valueOf() === range.end.valueOf(),
                col: col
              });
            }
          }

          return segs;
        };

        return TimeGridSlicer;
      }(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["Slicer"]);

      var TimeGridView =
      /** @class */
      function (_super) {
        __extends(TimeGridView, _super);

        function TimeGridView() {
          var _this = _super !== null && _super.apply(this, arguments) || this;

          _this.buildDayTable = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["memoize"])(buildDayTable);
          return _this;
        }

        TimeGridView.prototype.render = function (props, context) {
          _super.prototype.render.call(this, props, context); // for flags for updateSize. also _renderSkeleton/_unrenderSkeleton


          var _a = this.props,
              dateProfile = _a.dateProfile,
              dateProfileGenerator = _a.dateProfileGenerator;
          var nextDayThreshold = context.nextDayThreshold;
          var dayTable = this.buildDayTable(dateProfile, dateProfileGenerator);
          var splitProps = this.splitter.splitProps(props);

          if (this.header) {
            this.header.receiveProps({
              dateProfile: dateProfile,
              dates: dayTable.headerDates,
              datesRepDistinctDays: true,
              renderIntroHtml: this.renderHeadIntroHtml
            }, context);
          }

          this.simpleTimeGrid.receiveProps(_assign2({}, splitProps['timed'], {
            dateProfile: dateProfile,
            dayTable: dayTable
          }), context);

          if (this.simpleDayGrid) {
            this.simpleDayGrid.receiveProps(_assign2({}, splitProps['allDay'], {
              dateProfile: dateProfile,
              dayTable: dayTable,
              nextDayThreshold: nextDayThreshold,
              isRigid: false
            }), context);
          }

          this.startNowIndicator(dateProfile, dateProfileGenerator);
        };

        TimeGridView.prototype._renderSkeleton = function (context) {
          _super.prototype._renderSkeleton.call(this, context);

          if (context.options.columnHeader) {
            this.header = new _fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["DayHeader"](this.el.querySelector('.fc-head-container'));
          }

          this.simpleTimeGrid = new SimpleTimeGrid(this.timeGrid);

          if (this.dayGrid) {
            this.simpleDayGrid = new _fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_1__["SimpleDayGrid"](this.dayGrid);
          }
        };

        TimeGridView.prototype._unrenderSkeleton = function () {
          _super.prototype._unrenderSkeleton.call(this);

          if (this.header) {
            this.header.destroy();
          }

          this.simpleTimeGrid.destroy();

          if (this.simpleDayGrid) {
            this.simpleDayGrid.destroy();
          }
        };

        TimeGridView.prototype.renderNowIndicator = function (date) {
          this.simpleTimeGrid.renderNowIndicator(date);
        };

        return TimeGridView;
      }(AbstractTimeGridView);

      function buildDayTable(dateProfile, dateProfileGenerator) {
        var daySeries = new _fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["DaySeries"](dateProfile.renderRange, dateProfileGenerator);
        return new _fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["DayTable"](daySeries, false);
      }

      var main = Object(_fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["createPlugin"])({
        defaultView: 'timeGridWeek',
        views: {
          timeGrid: {
            "class": TimeGridView,
            allDaySlot: true,
            slotDuration: '00:30:00',
            slotEventOverlap: true // a bad name. confused with overlap/constraint system

          },
          timeGridDay: {
            type: 'timeGrid',
            duration: {
              days: 1
            }
          },
          timeGridWeek: {
            type: 'timeGrid',
            duration: {
              weeks: 1
            }
          }
        }
      });
      /* harmony default export */

      __webpack_exports__["default"] = main;
      /***/
    },

    /***/
    "pWwN":
    /*!*********************************************!*\
      !*** ./src/app/apps/chat/chat.component.ts ***!
      \*********************************************/

    /*! exports provided: ChatComponent */

    /***/
    function pWwN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ChatComponent", function () {
        return ChatComponent;
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


      var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ngx-perfect-scrollbar */
      "Kdsb");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");

      var ChatComponent = function ChatComponent() {
        _classCallCheck(this, ChatComponent);

        this.hideRequiredControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](false);
      };

      ChatComponent.ɵfac = function ChatComponent_Factory(t) {
        return new (t || ChatComponent)();
      };

      ChatComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ChatComponent,
        selectors: [["app-chat"]],
        decls: 182,
        vars: 2,
        consts: [[1, "content"], [1, "container-fluid"], [1, "row"], [1, "col-xs-12", "col-sm-12", "col-md-3", "col-lg-3"], [1, "card"], [1, "body"], ["id", "plist", 1, "people-list"], [1, "form-line", "m-b-15"], ["type", "text", "placeholder", "Search...", 1, "form-control"], [1, "tab-content"], ["id", "chat_user", 2, "position", "relative", "max-height", "590px", 3, "perfectScrollbar"], [1, "chat-list", "list-unstyled", "m-b-0"], [1, "clearfix", "active"], ["src", "assets/images/user/user1.jpg", "alt", "avatar"], [1, "about"], [1, "name"], [1, "status"], [1, "material-icons", "offline"], [1, "clearfix"], ["src", "assets/images/user/user2.jpg", "alt", "avatar"], ["src", "assets/images/user/user3.jpg", "alt", "avatar"], [1, "material-icons", "online"], ["src", "assets/images/user/user4.jpg", "alt", "avatar"], ["src", "assets/images/user/user5.jpg", "alt", "avatar"], ["src", "assets/images/user/user6.jpg", "alt", "avatar"], ["src", "assets/images/user/user7.jpg", "alt", "avatar"], ["src", "assets/images/user/user8.jpg", "alt", "avatar"], ["src", "assets/images/user/user9.jpg", "alt", "avatar"], [1, "col-xs-12", "col-sm-12", "col-md-9", "col-lg-9"], [1, "chat"], [1, "chat-header", "clearfix"], [1, "chat-about"], [1, "chat-with"], [1, "chat-num-messages"], ["id", "chat-conversation", 1, "chat-history", 2, "position", "relative", "max-height", "449px", 3, "perfectScrollbar"], [1, "message-data", "text-right"], [1, "message-data-time"], [1, "message-data-name"], [1, "message", "other-message", "float-right"], [1, "message-data"], [1, "message", "my-message"], [1, "chat-message", "clearfix"], [1, "form-group"], [1, "form-line"], ["appearance", "outline", 1, "example-full-width", 3, "hideRequiredMarker", "floatLabel"], ["matInput", "", "placeholder", "Enter text here..", "required", ""], [1, "chat-upload"], ["mat-mini-fab", "", 1, "bg-deep-orange", "mr-2"], [1, "material-icons"], ["mat-mini-fab", "", 1, "bg-deep-orange"]],
        template: function ChatComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "ul", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "William Smith");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "i", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "fiber_manual_record");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " left 7 mins ago ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "img", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Martha Williams");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "i", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "fiber_manual_record");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " online ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "li", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "img", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Joseph Clark");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "i", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "fiber_manual_record");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " online ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "li", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "img", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Nancy Taylor");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "i", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "fiber_manual_record");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, " online ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "li", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "img", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Margaret Wilson");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "i", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "fiber_manual_record");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, " online ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "li", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "img", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Joseph Jones");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "i", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "fiber_manual_record");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, " left 30 mins ago ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "li", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "img", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Jane Brown");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "i", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "fiber_manual_record");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, " left 10 hours ago ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "li", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "img", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Eliza Johnson");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "i", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "fiber_manual_record");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, " online ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "li", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "img", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "Mike Clark");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "i", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "fiber_manual_record");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, " online ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "li", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](94, "img", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "Ann Henry");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "i", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "fiber_manual_record");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, " online ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "li", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](103, "img", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "Nancy Smith");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "i", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "fiber_manual_record");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, " online ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "li", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](112, "img", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "David Wilson");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "i", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, "fiber_manual_record");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, " offline since Oct 28 ");

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

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "div", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](124, "img", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "div", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "div", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, "Maria Smith");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "div", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, "2 new messages");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "div", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "li", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "div", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "span", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135, "10:10 AM, Today ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, " \xA0 \xA0 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "span", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, "Maria");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "div", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, " Hi Robert , how are you? How is your work going on? ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "div", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "span", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, "Robert ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "span", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, "10:12 AM, Today");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "div", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](149, "Its good. We completed almost all task assign by our manager.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](150, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "div", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "span", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](154, "Robert ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "span", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](156, "10:12 AM, Today");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "div", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](159, "How are you feel today? What's about vacation?.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](160, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "li", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "div", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "span", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](164, "10:10 AM, Today ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](165, " \xA0 \xA0 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "span", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](167, "Maria");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "div", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](169, " I am good, We think for next weekend. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "div", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "div", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "div", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "mat-form-field", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](174, "input", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "div", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "button", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "i", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](178, "attach_file");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "button", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "i", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](181, "insert_emoticon");

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

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](173);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hideRequiredMarker", ctx.hideRequiredControl.value)("floatLabel", false);
          }
        },
        directives: [ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_2__["PerfectScrollbarDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInput"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcHMvY2hhdC9jaGF0LmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChatComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-chat',
            templateUrl: './chat.component.html',
            styleUrls: ['./chat.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "qO1m":
    /*!******************************************************!*\
      !*** ./src/app/apps/contacts/form/form.component.ts ***!
      \******************************************************/

    /*! exports provided: FormComponent */

    /***/
    function qO1m(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FormComponent", function () {
        return FormComponent;
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


      var _contacts_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../contacts.service */
      "Ovhn");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _contacts_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../contacts.model */
      "0wM0");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/datepicker */
      "iadO");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");

      function FormComponent_div_1_mat_error_21_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Name is required ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function FormComponent_div_1_mat_error_29_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Please enter a valid email address ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function FormComponent_div_1_mat_error_38_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Mobile is required ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function FormComponent_div_1_mat_error_47_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Please select date ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function FormComponent_div_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FormComponent_div_1_Template_button_click_8_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8);

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r7.dialogRef.close();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "close");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "form", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function FormComponent_div_1_Template_form_ngSubmit_12_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8);

            var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r9.submit;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "mat-form-field", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "input", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "i", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "face");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, FormComponent_div_1_mat_error_21_Template, 2, 0, "mat-error", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "mat-form-field", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Email");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "input", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "i", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "email");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](29, FormComponent_div_1_mat_error_29_Template, 2, 0, "mat-error", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "mat-form-field", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "Mobile");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](35, "input", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "i", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "smartphone");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](38, FormComponent_div_1_mat_error_38_Template, 2, 0, "mat-error", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "mat-form-field", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "Birth date");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](43, "input", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](44, "mat-datepicker-toggle", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](45, "mat-datepicker", null, 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](47, FormComponent_div_1_mat_error_47_Template, 2, 0, "mat-error", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "mat-form-field", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, "Address");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](53, "textarea", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "mat-form-field", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, "Note");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](59, "textarea", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "button", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FormComponent_div_1_Template_button_click_63_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8);

            var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r10.confirmAdd();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](64, "Save");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "button", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FormComponent_div_1_Template_button_click_65_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8);

            var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r11.onNoClick();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](66, "Cancel");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](46);

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r0.contacts.img, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.dialogTitle, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r0.contactsForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.contactsForm.get("name").hasError("required"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.contactsForm.get("email").hasError("required") || ctx_r0.contactsForm.get("email").touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.contactsForm.get("mobile").hasError("required"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matDatepicker", _r5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("for", _r5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.contactsForm.get("birthDate").hasError("required"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("type", ctx_r0.submit)("disabled", !ctx_r0.contactsForm.valid)("mat-dialog-close", 1);
        }
      }

      function FormComponent_div_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Friends");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FormComponent_div_2_Template_button_click_12_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13);

            var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r12.dialogRef.close();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "close");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "i", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "email");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "i", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "phonelink_ring");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "i", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "cake");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](32, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "i", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "location_on");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "i", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "note");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r1.contacts.img, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.contacts.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r1.contacts.email, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r1.contacts.mobile, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](32, 7, ctx_r1.contacts.birthDate, "MMMM d, yyyy"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r1.contacts.address, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r1.contacts.note, " ");
        }
      }

      var FormComponent = /*#__PURE__*/function () {
        function FormComponent(dialogRef, data, contactsService, fb) {
          _classCallCheck(this, FormComponent);

          this.dialogRef = dialogRef;
          this.data = data;
          this.contactsService = contactsService;
          this.fb = fb;
          this.isDetails = false;
          this.formControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required // Validators.email,
          ]); // Set the defaults

          this.action = data.action;

          if (this.action === 'edit') {
            this.isDetails = false;
            this.dialogTitle = data.contacts.name;
            this.contacts = data.contacts;
            this.contactsForm = this.createContactForm();
          } else if (this.action === 'details') {
            this.contacts = data.contacts;
            this.isDetails = true;
          } else {
            this.isDetails = false;
            this.dialogTitle = 'New Contacts';
            this.contacts = new _contacts_model__WEBPACK_IMPORTED_MODULE_4__["Contacts"]({});
            this.contactsForm = this.createContactForm();
          }
        }

        _createClass(FormComponent, [{
          key: "getErrorMessage",
          value: function getErrorMessage() {
            return this.formControl.hasError('required') ? 'Required field' : this.formControl.hasError('email') ? 'Not a valid email' : '';
          }
        }, {
          key: "createContactForm",
          value: function createContactForm() {
            return this.fb.group({
              id: [this.contacts.id],
              img: [this.contacts.img],
              name: [this.contacts.name],
              email: [this.contacts.email, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(5)]],
              birthDate: [Object(_angular_common__WEBPACK_IMPORTED_MODULE_5__["formatDate"])(this.contacts.birthDate, 'yyyy-MM-dd', 'en'), [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
              address: [this.contacts.address],
              mobile: [this.contacts.mobile],
              note: [this.contacts.note]
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
            this.contactsService.addContacts(this.contactsForm.getRawValue());
          }
        }]);

        return FormComponent;
      }();

      FormComponent.ɵfac = function FormComponent_Factory(t) {
        return new (t || FormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_contacts_service__WEBPACK_IMPORTED_MODULE_2__["ContactsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]));
      };

      FormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: FormComponent,
        selectors: [["app-form"]],
        decls: 3,
        vars: 2,
        consts: [[1, "addContainer"], ["class", "contact-form", 4, "ngIf"], ["class", "contact-details", 4, "ngIf"], [1, "contact-form"], [1, "modalHeader"], [1, "editRowModal"], [1, "modalHeader", "clearfix"], ["alt", "avatar", 3, "src"], [1, "modal-about"], [1, "font-weight-bold", "p-t-5", "p-l-10", "font-17"], ["mat-icon-button", "", "aria-label", "Close dialog", 3, "click"], ["mat-dialog-content", ""], [1, "register-form", "m-4", 3, "formGroup", "ngSubmit"], [1, "row"], [1, "col-xl-6", "col-lg-6", "col-md-12", "col-sm-12", "mb-2"], ["appearance", "outline", 1, "example-full-width", "mb-3"], ["matInput", "", "formControlName", "name", "required", ""], ["matSuffix", "", 1, "material-icons-two-tone", "color-icon"], [4, "ngIf"], ["matInput", "", "formControlName", "email", "required", ""], ["matInput", "", "formControlName", "mobile", "type", "number"], ["matInput", "", "formControlName", "birthDate", 3, "matDatepicker"], ["matSuffix", "", 3, "for"], ["picker", ""], [1, "col-xl-12", "col-lg-12", "col-md-12", "col-sm-12", "mb-2"], ["matInput", "", "formControlName", "address"], ["matInput", "", "formControlName", "note"], [1, "example-button-row"], ["mat-raised-button", "", "color", "primary", 3, "type", "disabled", "mat-dialog-close", "click"], ["mat-raised-button", "", "color", "warn", "tabindex", "-1", 3, "click"], [1, "contact-details"], [1, "modal-about", "contact-header"], [1, "contact-details-img"], [1, "contact-details-heading", "ml-4"], [1, "contact-details-name", "mb-2"], [1, "badge", "col-green"], [1, "contact-details-field"], [1, "material-icons-two-tone", "color-icon"], [1, "contact-detail-info"]],
        template: function FormComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, FormComponent_div_1_Template, 67, 12, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, FormComponent_div_2_Template, 43, 10, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isDetails);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isDetails);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIcon"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RequiredValidator"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatSuffix"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NumberValueAccessor"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__["MatDatepickerInput"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__["MatDatepickerToggle"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__["MatDatepicker"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogClose"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatError"], _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardContent"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcHMvY29udGFjdHMvZm9ybS9mb3JtLmNvbXBvbmVudC5zYXNzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](FormComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'app-form',
            templateUrl: './form.component.html',
            styleUrls: ['./form.component.sass']
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
            type: _contacts_service__WEBPACK_IMPORTED_MODULE_2__["ContactsService"]
          }, {
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "xK1z":
    /*!***************************************************!*\
      !*** ./src/app/apps/support/support.component.ts ***!
      \***************************************************/

    /*! exports provided: SupportComponent */

    /***/
    function xK1z(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SupportComponent", function () {
        return SupportComponent;
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


      var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/checkbox */
      "bSwM");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");

      function SupportComponent_th_74_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " # ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function SupportComponent_td_75_Template(rf, ctx) {
        if (rf & 1) {
          var _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-checkbox", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SupportComponent_td_75_Template_mat_checkbox_ngModelChange_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22);

            var element_r20 = ctx.$implicit;
            return element_r20.checked = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r20 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", element_r20.checked);
        }
      }

      function SupportComponent_th_77_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " User ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function SupportComponent_td_78_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r23 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", element_r23.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      }

      function SupportComponent_th_80_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Opened By ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function SupportComponent_td_81_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r24 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r24.name, " ");
        }
      }

      function SupportComponent_th_83_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Email ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function SupportComponent_td_84_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r25 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r25.email, " ");
        }
      }

      function SupportComponent_th_86_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Subject ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function SupportComponent_td_87_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r26 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r26.subject, " ");
        }
      }

      function SupportComponent_th_89_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Status ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function SupportComponent_td_90_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r27 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r27.status, "");
        }
      }

      function SupportComponent_th_92_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Assign To ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function SupportComponent_td_93_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r28 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r28.assignTo, " ");
        }
      }

      function SupportComponent_th_95_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Date ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function SupportComponent_td_96_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r29 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r29.date, " ");
        }
      }

      function SupportComponent_th_98_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Actions ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function SupportComponent_td_99_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "edit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "delete");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function SupportComponent_tr_100_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 55);
        }
      }

      function SupportComponent_tr_101_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 56);
        }
      }

      var _c0 = function _c0() {
        return [5, 10, 20];
      };

      var ELEMENT_DATA = [{
        checked: false,
        imageUrl: 'assets/images/user/user1.jpg',
        name: 'Tim Hank',
        email: 'test@example.com',
        subject: 'Image not Proper',
        status: 'closed',
        assignTo: 'John Deo',
        date: '27/05/2016',
        action: ''
      }, {
        checked: false,
        imageUrl: 'assets/images/user/user2.jpg',
        name: 'Tim Hank',
        email: 'test@example.com',
        subject: 'Image not Proper',
        status: 'closed',
        assignTo: 'John Deo',
        date: '27/05/2016',
        action: ''
      }, {
        checked: false,
        imageUrl: 'assets/images/user/user3.jpg',
        name: 'Tim Hank',
        email: 'test@example.com',
        subject: 'Image not Proper',
        status: 'open',
        assignTo: 'John Deo',
        date: '27/05/2016',
        action: ''
      }, {
        checked: false,
        imageUrl: 'assets/images/user/user4.jpg',
        name: 'Tim Hank',
        email: 'test@example.com',
        subject: 'Image not Proper',
        status: 'closed',
        assignTo: 'John Deo',
        date: '27/05/2016',
        action: ''
      }, {
        checked: false,
        imageUrl: 'assets/images/user/user5.jpg',
        name: 'Tim Hank',
        email: 'test@example.com',
        subject: 'Image not Proper',
        status: 'open',
        assignTo: 'John Deo',
        date: '27/05/2016',
        action: ''
      }, {
        checked: false,
        imageUrl: 'assets/images/user/user6.jpg',
        name: 'Tim Hank',
        email: 'test@example.com',
        subject: 'Image not Proper',
        status: 'closed',
        assignTo: 'John Deo',
        date: '27/05/2016',
        action: ''
      }, {
        checked: false,
        imageUrl: 'assets/images/user/user7.jpg',
        name: 'Tim Hank',
        email: 'test@example.com',
        subject: 'Image not Proper',
        status: 'open',
        assignTo: 'John Deo',
        date: '27/05/2016',
        action: ''
      }, {
        checked: false,
        imageUrl: 'assets/images/user/user8.jpg',
        name: 'Tim Hank',
        email: 'test@example.com',
        subject: 'Image not Proper',
        status: 'pending',
        assignTo: 'John Deo',
        date: '27/05/2016',
        action: ''
      }, {
        checked: false,
        imageUrl: 'assets/images/user/user9.jpg',
        name: 'Tim Hank',
        email: 'test@example.com',
        subject: 'Image not Proper',
        status: 'closed',
        assignTo: 'John Deo',
        date: '27/05/2016',
        action: ''
      }, {
        checked: false,
        imageUrl: 'assets/images/user/user10.jpg',
        name: 'Tim Hank',
        email: 'test@example.com',
        subject: 'Image not Proper',
        status: 'closed',
        assignTo: 'John Deo',
        date: '27/05/2016',
        action: ''
      }, {
        checked: false,
        imageUrl: 'assets/images/user/user1.jpg',
        name: 'Tim Hank',
        email: 'test@example.com',
        subject: 'Image not Proper',
        status: 'open',
        assignTo: 'John Deo',
        date: '27/05/2016',
        action: ''
      }, {
        checked: false,
        imageUrl: 'assets/images/user/user2.jpg',
        name: 'Tim Hank',
        email: 'test@example.com',
        subject: 'Image not Proper',
        status: 'closed',
        assignTo: 'John Deo',
        date: '27/05/2016',
        action: ''
      }, {
        checked: false,
        imageUrl: 'assets/images/user/user3.jpg',
        name: 'Tim Hank',
        email: 'test@example.com',
        subject: 'Image not Proper',
        status: 'pending',
        assignTo: 'John Deo',
        date: '27/05/2016',
        action: ''
      }, {
        checked: false,
        imageUrl: 'assets/images/user/user4.jpg',
        name: 'Tim Hank',
        email: 'test@example.com',
        subject: 'Image not Proper',
        status: 'closed',
        assignTo: 'John Deo',
        date: '27/05/2016',
        action: ''
      }, {
        checked: false,
        imageUrl: 'assets/images/user/user5.jpg',
        name: 'Tim Hank',
        email: 'test@example.com',
        subject: 'Image not Proper',
        status: 'closed',
        assignTo: 'John Deo',
        date: '27/05/2016',
        action: ''
      }, {
        checked: false,
        imageUrl: 'assets/images/user/user6.jpg',
        name: 'Tim Hank',
        email: 'test@example.com',
        subject: 'Image not Proper',
        status: 'pending',
        assignTo: 'John Deo',
        date: '27/05/2016',
        action: ''
      }, {
        checked: false,
        imageUrl: 'assets/images/user/user7.jpg',
        name: 'Tim Hank',
        email: 'test@example.com',
        subject: 'Image not Proper',
        status: 'closed',
        assignTo: 'John Deo',
        date: '27/05/2016',
        action: ''
      }, {
        checked: false,
        imageUrl: 'assets/images/user/user8.jpg',
        name: 'Tim Hank',
        email: 'test@example.com',
        subject: 'Image not Proper',
        status: 'closed',
        assignTo: 'John Deo',
        date: '27/05/2016',
        action: ''
      }];

      var SupportComponent = /*#__PURE__*/function () {
        function SupportComponent() {
          _classCallCheck(this, SupportComponent);

          this.displayedColumns = ['checked', 'imageUrl', 'name', 'email', 'subject', 'status', 'assignTo', 'date', 'action'];
          this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](ELEMENT_DATA);
        }

        _createClass(SupportComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.dataSource.paginator = this.paginator;
            $('.chart.chart-bar').sparkline(undefined, {
              type: 'bar',
              barColor: '#fff',
              negBarColor: '#fff',
              barWidth: '4px',
              height: '45px'
            }); //Chart Pie

            $('.chart.chart-pie').sparkline(undefined, {
              type: 'pie',
              height: '45px',
              sliceColors: ['rgba(255,255,255,0.70)', 'rgba(255,255,255,0.85)', 'rgba(255,255,255,0.95)', 'rgba(255,255,255,1)']
            }); //Chart Line

            $('.chart.chart-line').sparkline(undefined, {
              type: 'line',
              width: '60px',
              height: '45px',
              lineColor: '#fff',
              lineWidth: 1.3,
              fillColor: 'rgba(0,0,0,0)',
              spotColor: 'rgba(255,255,255,0.40)',
              maxSpotColor: 'rgba(255,255,255,0.40)',
              minSpotColor: 'rgba(255,255,255,0.40)',
              spotRadius: 3,
              highlightSpotColor: '#fff'
            });
          }
        }]);

        return SupportComponent;
      }();

      SupportComponent.ɵfac = function SupportComponent_Factory(t) {
        return new (t || SupportComponent)();
      };

      SupportComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: SupportComponent,
        selectors: [["app-support"]],
        viewQuery: function SupportComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
          }
        },
        decls: 103,
        vars: 6,
        consts: [[1, "content"], [1, "container-fluid"], [1, "row"], [1, "col-lg-12", "col-md-12", "col-sm-12"], [1, "card"], [1, "header"], [1, "header-dropdown", "m-r--5"], [1, "dropdown"], ["href", "#", "onClick", "return false;", "data-toggle", "dropdown", "role", "button", "aria-haspopup", "true", "aria-expanded", "false"], [1, "material-icons"], [1, "dropdown-menu", "pull-right"], ["href", "#", "onClick", "return false;"], [1, "body"], [1, "col-lg-3", "col-sm-6"], [1, "support-box", "text-center", "l-bg-red"], [1, "icon", "m-b-10"], [1, "chart", "chart-bar"], [1, "text", "m-b-10"], [1, "m-b-0"], [1, "support-box", "text-center", "l-bg-cyan"], [1, "chart", "chart-line"], [1, "support-box", "text-center", "l-bg-orange"], [1, "chart", "chart-pie"], [1, "support-box", "text-center", "bg-green"], [1, "table-responsive"], ["mat-table", "", 1, "w-100", 3, "dataSource"], ["matColumnDef", "checked"], ["mat-header-cell", "", "width", "10%", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "imageUrl"], ["mat-header-cell", "", "width", "8%", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "table-img", 4, "matCellDef"], ["matColumnDef", "name"], ["matColumnDef", "email"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["matColumnDef", "subject"], ["matColumnDef", "status"], ["matColumnDef", "assignTo"], ["matColumnDef", "date"], ["matColumnDef", "action"], ["mat-header-cell", "", "width", "15%", 4, "matHeaderCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["showFirstLastButtons", "", 3, "pageSize", "pageSizeOptions"], ["mat-header-cell", "", "width", "10%"], ["mat-cell", ""], [3, "ngModel", "ngModelChange"], ["mat-header-cell", "", "width", "8%"], ["mat-cell", "", 1, "table-img"], [3, "src"], ["mat-header-cell", ""], [1, "badge"], ["mat-header-cell", "", "width", "15%"], ["mat-icon-button", "", 1, "btn-tbl-edit"], ["mat-icon-button", "", 1, "btn-tbl-delete"], ["mat-header-row", ""], ["mat-row", ""]],
        template: function SupportComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Support");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Tickets ");

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

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "6,4,8,6,8,10,5,6,7,9,5,6,4,8,6,8,10,5,6,7,9,5");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Total Ticket");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "h3", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "1512 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "i", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "trending_up");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "span", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "9,4,6,5,6,4,7,3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Reply");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "h3", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "1236 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "i", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "trending_up");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "30, 35, 25, 8");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Resolve");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "h3", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "1107 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "i", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "trending_down");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, " 4,6,-3,-1,2,-2,4,3,6,7,-2,3,4,6,-3,-1,2,-2,4,3,6,7,-2,3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Pending");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "h3", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "167 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "i", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "trending_down");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "table", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](73, 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](74, SupportComponent_th_74_Template, 2, 0, "th", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](75, SupportComponent_td_75_Template, 2, 1, "td", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](76, 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](77, SupportComponent_th_77_Template, 2, 0, "th", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](78, SupportComponent_td_78_Template, 2, 1, "td", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](79, 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](80, SupportComponent_th_80_Template, 2, 0, "th", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](81, SupportComponent_td_81_Template, 2, 1, "td", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](82, 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](83, SupportComponent_th_83_Template, 2, 0, "th", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](84, SupportComponent_td_84_Template, 2, 1, "td", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](85, 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](86, SupportComponent_th_86_Template, 2, 0, "th", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](87, SupportComponent_td_87_Template, 2, 1, "td", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](88, 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](89, SupportComponent_th_89_Template, 2, 0, "th", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](90, SupportComponent_td_90_Template, 3, 1, "td", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](91, 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](92, SupportComponent_th_92_Template, 2, 0, "th", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](93, SupportComponent_td_93_Template, 2, 1, "td", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](94, 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](95, SupportComponent_th_95_Template, 2, 0, "th", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](96, SupportComponent_td_96_Template, 2, 1, "td", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](97, 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](98, SupportComponent_th_98_Template, 2, 0, "th", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](99, SupportComponent_td_99_Template, 7, 0, "td", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](100, SupportComponent_tr_100_Template, 1, 0, "tr", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](101, SupportComponent_tr_101_Template, 1, 0, "tr", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](102, "mat-paginator", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](72);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSource);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pageSize", 10)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c0));
          }
        },
        directives: [_angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatRowDef"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCell"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_3__["MatCheckbox"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatRow"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcHMvc3VwcG9ydC9zdXBwb3J0LmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SupportComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-support',
            templateUrl: './support.component.html',
            styleUrls: ['./support.component.scss']
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

    }
  }]);
})();
//# sourceMappingURL=apps-apps-module-es5.js.map