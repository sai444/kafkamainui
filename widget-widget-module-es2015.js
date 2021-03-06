(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["widget-widget-module"],{

/***/ "8CUj":
/*!***************************************************************!*\
  !*** ./src/app/widget/chart-widget/chart-widget.component.ts ***!
  \***************************************************************/
/*! exports provided: ChartWidgetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartWidgetComponent", function() { return ChartWidgetComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ng_apexcharts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-apexcharts */ "CV0D");
/* harmony import */ var angular_morris_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-morris-js */ "1nQK");





const _c0 = ["chart"];
class ChartWidgetComponent {
    constructor() {
        //area chart start
        this.chartAreaOptions = {
            xkey: 'w',
            ykeys: ['x', 'y', 'z'],
            labels: ['X', 'Y', 'Z'],
            pointSize: 0,
            lineWidth: 0,
            resize: true,
            fillOpacity: 0.8,
            behaveLikeLine: true,
            gridLineColor: '#e0e0e0',
            hideHover: 'auto',
            lineColors: ['rgb(97, 97, 97)', 'rgb(0, 206, 209)', 'rgb(255, 117, 142)']
        };
        this.chartAreaData = [
            { w: '2011 Q1', x: 2, y: 0, z: 0 },
            { w: '2011 Q2', x: 50, y: 15, z: 5 },
            { w: '2011 Q3', x: 15, y: 50, z: 23 },
            { w: '2011 Q4', x: 45, y: 12, z: 7 },
            { w: '2011 Q5', x: 20, y: 32, z: 55 },
            { w: '2011 Q6', x: 39, y: 67, z: 20 },
            { w: '2011 Q7', x: 20, y: 9, z: 5 }
        ];
        //area chart end
        this.chartLineOptions = {
            xkey: 'period',
            ykeys: ['iphone', 'ipad', 'itouch'],
            labels: ['iPhone', 'iPad', 'iPod Touch'],
            pointSize: 3,
            fillOpacity: 0,
            pointStrokeColors: ['#222222', '#cccccc', '#f96332'],
            behaveLikeLine: true,
            gridLineColor: '#e0e0e0',
            lineWidth: 2,
            hideHover: 'auto',
            lineColors: ['#222222', '#20B2AA', '#f96332'],
            resize: true
        };
        this.chartLineData = [
            {
                period: '2008',
                iphone: 35,
                ipad: 67,
                itouch: 15
            },
            {
                period: '2009',
                iphone: 140,
                ipad: 189,
                itouch: 67
            },
            {
                period: '2010',
                iphone: 50,
                ipad: 80,
                itouch: 22
            },
            {
                period: '2011',
                iphone: 180,
                ipad: 220,
                itouch: 76
            },
            {
                period: '2012',
                iphone: 130,
                ipad: 110,
                itouch: 82
            },
            {
                period: '2013',
                iphone: 80,
                ipad: 60,
                itouch: 85
            },
            {
                period: '2014',
                iphone: 78,
                ipad: 205,
                itouch: 135
            },
            {
                period: '2015',
                iphone: 180,
                ipad: 124,
                itouch: 140
            },
            {
                period: '2016',
                iphone: 105,
                ipad: 100,
                itouch: 85
            },
            {
                period: '2017',
                iphone: 210,
                ipad: 180,
                itouch: 120
            }
        ];
    }
    // line chart end
    ngOnInit() {
        this.initCardChart2();
        this.initCardChart();
        this.initChartReport1();
        this.initChartReport2();
        this.linechart();
        this.pieChart();
        this.radarChart();
        this.chartArea();
    }
    initCardChart2() {
        //Chart Bar
        $('.chart.chart-bar-2').sparkline(undefined, {
            type: 'bar',
            barColor: '#fff',
            negBarColor: '#fff',
            barWidth: '4px',
            height: '45px'
        });
        $('.chart.chart-bar2').sparkline(undefined, {
            type: 'bar',
            barColor: '#54B253',
            negBarColor: '#000',
            barWidth: '4px',
            height: '65px'
        });
        //Chart Pie
        $('.chart.chart-pie-2').sparkline(undefined, {
            type: 'pie',
            height: '45px',
            sliceColors: [
                'rgba(255,255,255,0.70)',
                'rgba(255,255,255,0.85)',
                'rgba(255,255,255,0.95)',
                'rgba(255,255,255,1)'
            ]
        });
        //Chart Line
        $('.chart.chart-line-2').sparkline(undefined, {
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
    initCardChart() {
        //Chart Bar
        $('.chart.chart-bar').sparkline([6, 4, 8, 6, 8, 10, 5, 6, 7, 9, 5, 6, 4, 8, 6, 8, 10, 5, 6, 7, 9, 5], {
            type: 'bar',
            barColor: '#FF9800',
            negBarColor: '#fff',
            barWidth: '4px',
            height: '45px'
        });
        //Chart Pie
        $('.chart.chart-pie').sparkline([30, 35, 25, 8], {
            type: 'pie',
            height: '45px',
            sliceColors: ['#65BAF2', '#F39517', '#F44586', '#6ADF42']
        });
        //Chart Line
        $('.chart.chart-line').sparkline([9, 4, 6, 5, 6, 4, 7, 3], {
            type: 'line',
            width: '60px',
            height: '45px',
            lineColor: '#65BAF2',
            lineWidth: 2,
            fillColor: 'rgba(0,0,0,0)',
            spotColor: '#F39517',
            maxSpotColor: '#F39517',
            minSpotColor: '#F39517',
            spotRadius: 3,
            highlightSpotColor: '#F44586'
        });
        // live chart
        var mrefreshinterval = 500; // update display every 500ms
        var lastmousex = -1;
        var lastmousey = -1;
        var lastmousetime;
        var mousetravel = 0;
        var mpoints = [];
        var mpoints_max = 30;
        $('html').on('mousemove', function (e) {
            var mousex = e.pageX;
            var mousey = e.pageY;
            if (lastmousex > -1) {
                mousetravel += Math.max(Math.abs(mousex - lastmousex), Math.abs(mousey - lastmousey));
            }
            lastmousex = mousex;
            lastmousey = mousey;
        });
        var mdraw = function () {
            var md = new Date();
            var timenow = md.getTime();
            if (lastmousetime && lastmousetime != timenow) {
                var pps = Math.round((mousetravel / (timenow - lastmousetime)) * 1000);
                mpoints.push(pps);
                if (mpoints.length > mpoints_max)
                    mpoints.splice(0, 1);
                mousetravel = 0;
                $('#liveChart').sparkline(mpoints, {
                    width: mpoints.length * 2,
                    height: '45px',
                    tooltipSuffix: ' pixels per second'
                });
            }
            lastmousetime = timenow;
            setTimeout(mdraw, mrefreshinterval);
        };
        // We could use setInterval instead, but I prefer to do it this way
        setTimeout(mdraw, mrefreshinterval);
    }
    initChartReport1() {
        var canvas = document.getElementById('chartReport1');
        // Apply multiply blend when drawing datasets
        var multiply = {
            beforeDatasetsDraw: function (chart, options, el) {
                chart.ctx.globalCompositeOperation = 'multiply';
            },
            afterDatasetsDraw: function (chart, options) {
                chart.ctx.globalCompositeOperation = 'source-over';
            }
        };
        // Gradient color - this week
        var gradientThisWeek = canvas
            .getContext('2d')
            .createLinearGradient(0, 0, 0, 150);
        gradientThisWeek.addColorStop(0, '#5555FF');
        gradientThisWeek.addColorStop(1, '#9787FF');
        // Gradient color - previous week
        var gradientPrevWeek = canvas
            .getContext('2d')
            .createLinearGradient(0, 0, 0, 150);
        gradientPrevWeek.addColorStop(0, '#FF55B8');
        gradientPrevWeek.addColorStop(1, '#FF8787');
        var config = {
            type: 'line',
            data: {
                labels: ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'],
                datasets: [
                    {
                        label: 'This week',
                        data: [24, 18, 16, 18, 24, 36, 28],
                        backgroundColor: gradientThisWeek,
                        borderColor: 'transparent',
                        pointBackgroundColor: '#FFFFFF',
                        pointBorderColor: '#FFFFFF',
                        lineTension: 0.4
                    },
                    {
                        label: 'Previous week',
                        data: [20, 22, 30, 22, 18, 22, 30],
                        backgroundColor: gradientPrevWeek,
                        borderColor: 'transparent',
                        pointBackgroundColor: '#FFFFFF',
                        pointBorderColor: '#FFFFFF',
                        lineTension: 0.4
                    }
                ]
            },
            options: {
                elements: {
                    point: {
                        radius: 0,
                        hitRadius: 5,
                        hoverRadius: 5
                    }
                },
                legend: {
                    display: false
                },
                scales: {
                    xAxes: [
                        {
                            display: false
                        }
                    ],
                    yAxes: [
                        {
                            display: false,
                            ticks: {
                                beginAtZero: true
                            }
                        }
                    ]
                }
            },
            plugins: [multiply]
        };
        window.chart = new Chart(canvas, config);
    }
    initChartReport2() {
        var canvas = document.getElementById('chartReport2');
        var gradientBlue = canvas
            .getContext('2d')
            .createLinearGradient(0, 0, 0, 150);
        gradientBlue.addColorStop(0, 'rgba(85, 85, 255, 0.9)');
        gradientBlue.addColorStop(1, 'rgba(151, 135, 255, 0.8)');
        var gradientHoverBlue = canvas
            .getContext('2d')
            .createLinearGradient(0, 0, 0, 150);
        gradientHoverBlue.addColorStop(0, 'rgba(65, 65, 255, 1)');
        gradientHoverBlue.addColorStop(1, 'rgba(131, 125, 255, 1)');
        var gradientRed = canvas
            .getContext('2d')
            .createLinearGradient(0, 0, 0, 150);
        gradientRed.addColorStop(0, 'rgba(255, 85, 184, 0.9)');
        gradientRed.addColorStop(1, 'rgba(255, 135, 135, 0.8)');
        var gradientHoverRed = canvas
            .getContext('2d')
            .createLinearGradient(0, 0, 0, 150);
        gradientHoverRed.addColorStop(0, 'rgba(255, 65, 164, 1)');
        gradientHoverRed.addColorStop(1, 'rgba(255, 115, 115, 1)');
        var redArea = null;
        var blueArea = null;
        var shadowed = {
            beforeDatasetsDraw: function (chart, options) {
                chart.ctx.shadowColor = 'rgba(0, 0, 0, 0.25)';
                chart.ctx.shadowBlur = 40;
            },
            afterDatasetsDraw: function (chart, options) {
                chart.ctx.shadowColor = 'rgba(0, 0, 0, 0)';
                chart.ctx.shadowBlur = 0;
            }
        };
        window.chart = new Chart(document.getElementById('chartReport2'), {
            type: 'radar',
            data: {
                labels: ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'],
                datasets: [
                    {
                        label: 'Product',
                        data: [25, 59, 90, 81, 60, 82, 52],
                        fill: true,
                        backgroundColor: gradientRed,
                        borderColor: 'transparent',
                        pointBackgroundColor: 'transparent',
                        pointBorderColor: 'transparent',
                        pointHoverBackgroundColor: 'transparent',
                        pointHoverBorderColor: 'transparent',
                        pointHitRadius: 50
                    },
                    {
                        label: 'Services',
                        data: [40, 100, 40, 90, 40, 90, 84],
                        fill: true,
                        backgroundColor: gradientBlue,
                        borderColor: 'transparent',
                        pointBackgroundColor: 'transparent',
                        pointBorderColor: 'transparent',
                        pointHoverBackgroundColor: 'transparent',
                        pointHoverBorderColor: 'transparent',
                        pointHitRadius: 50
                    }
                ]
            },
            options: {
                legend: {
                    display: false
                },
                gridLines: {
                    display: false
                },
                scale: {
                    ticks: {
                        maxTicksLimit: 1,
                        display: false
                    }
                }
            },
            plugins: [shadowed]
        });
    }
    linechart() {
        this.lineChart2Options = {
            chart: {
                height: 350,
                type: 'line',
                shadow: {
                    enabled: false,
                    color: '#bbb',
                    top: 3,
                    left: 2,
                    blur: 3,
                    opacity: 1
                }
            },
            stroke: {
                width: 7,
                curve: 'smooth'
            },
            series: [
                {
                    name: 'Likes',
                    data: [4, 3, 10, 9, 29, 19, 22, 9, 12, 7, 19, 5, 13, 9, 17, 2, 7, 5]
                }
            ],
            xaxis: {
                type: 'datetime',
                categories: [
                    '1/11/2000',
                    '2/11/2000',
                    '3/11/2000',
                    '4/11/2000',
                    '5/11/2000',
                    '6/11/2000',
                    '7/11/2000',
                    '8/11/2000',
                    '9/11/2000',
                    '10/11/2000',
                    '11/11/2000',
                    '12/11/2000',
                    '1/11/2001',
                    '2/11/2001',
                    '3/11/2001',
                    '4/11/2001',
                    '5/11/2001',
                    '6/11/2001'
                ],
                labels: {
                    style: {
                        colors: '#9aa0ac'
                    }
                }
            },
            title: {
                text: 'Social Media',
                align: 'left',
                style: {
                    fontSize: '16px',
                    color: '#666'
                }
            },
            fill: {
                type: 'gradient',
                gradient: {
                    shade: 'dark',
                    gradientToColors: ['#FDD835'],
                    shadeIntensity: 1,
                    type: 'horizontal',
                    opacityFrom: 1,
                    opacityTo: 1,
                    stops: [0, 100, 100, 100]
                }
            },
            markers: {
                size: 4,
                opacity: 0.9,
                colors: ['#FFA41B'],
                strokeColor: '#fff',
                strokeWidth: 2,
                hover: {
                    size: 7
                }
            },
            yaxis: {
                min: -10,
                max: 40,
                title: {
                    text: 'Engagement'
                },
                labels: {
                    style: {
                        color: '#9aa0ac'
                    }
                }
            }
        };
    }
    pieChart() {
        this.circleChartOptions = {
            series: [76, 67, 61, 90],
            chart: {
                height: 260,
                type: 'radialBar'
            },
            plotOptions: {
                radialBar: {
                    offsetY: 0,
                    startAngle: 0,
                    endAngle: 270,
                    hollow: {
                        margin: 5,
                        size: '30%',
                        background: 'transparent',
                        image: undefined
                    },
                    dataLabels: {
                        name: {
                            show: false
                        },
                        value: {
                            show: false
                        }
                    }
                }
            },
            colors: ['#1ab7ea', '#0084ff', '#39539E', '#0077B5'],
            labels: ['Vimeo', 'Messenger', 'Facebook', 'LinkedIn'],
            legend: {
                show: true,
                floating: true,
                fontSize: '16px',
                position: 'left',
                offsetX: 50,
                offsetY: 10,
                labels: {
                    useSeriesColors: true
                },
                formatter: function (seriesName, opts) {
                    return seriesName + ':  ' + opts.w.globals.series[opts.seriesIndex];
                },
                itemMargin: {
                    horizontal: 3
                }
            },
            responsive: [
                {
                    breakpoint: 480,
                    options: {
                        legend: {
                            show: false
                        }
                    }
                }
            ]
        };
    }
    radarChart() {
        this.radarChartOptions = {
            series: [
                {
                    name: 'Series Blue',
                    data: [80, 50, 30, 40, 100, 20]
                },
                {
                    name: 'Series Green',
                    data: [20, 30, 40, 80, 20, 80]
                },
                {
                    name: 'Series Orange',
                    data: [44, 76, 78, 13, 43, 10]
                }
            ],
            chart: {
                height: 250,
                type: 'radar',
                dropShadow: {
                    enabled: true,
                    blur: 1,
                    left: 1,
                    top: 1
                }
            },
            stroke: {
                width: 0
            },
            fill: {
                opacity: 0.4
            },
            markers: {
                size: 0
            },
            xaxis: {
                categories: ['2011', '2012', '2013', '2014', '2015', '2016']
            }
        };
    }
    chartArea() {
        this.areaChartOptions = {
            chart: {
                height: 240,
                type: 'area',
                toolbar: {
                    show: false
                }
            },
            legend: {
                show: false
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                curve: 'smooth'
            },
            series: [
                {
                    name: 'series1',
                    data: [31, 40, 28, 51, 42]
                },
                {
                    name: 'series2',
                    data: [11, 32, 45, 32, 34]
                }
            ],
            xaxis: {
                type: 'datetime',
                categories: ['1990', '1991', '1992', '1993', '1994']
            },
            tooltip: {
                x: {
                    format: 'dd/MM/yy HH:mm'
                }
            }
        };
    }
}
ChartWidgetComponent.??fac = function ChartWidgetComponent_Factory(t) { return new (t || ChartWidgetComponent)(); };
ChartWidgetComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: ChartWidgetComponent, selectors: [["app-chart-widget"]], viewQuery: function ChartWidgetComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????staticViewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????loadQuery"]()) && (ctx.chart = _t.first);
    } }, decls: 564, vars: 27, consts: [[1, "content"], [1, "container-fluid"], [1, "row"], [1, "col-lg-3", "col-sm-6"], [1, "support-box", "text-center", "l-bg-red"], [1, "icon", "m-b-10"], [1, "chart", "chart-bar-2"], [1, "text", "m-b-10"], [1, "m-b-0"], [1, "material-icons"], [1, "support-box", "text-center", "l-bg-cyan"], [1, "chart", "chart-line-2"], [1, "support-box", "text-center", "l-bg-orange"], [1, "chart", "chart-pie-2"], [1, "support-box", "text-center", "l-bg-purple"], [1, "col-xl-6", "col-md-12"], [1, "card"], [1, "card-block"], [1, "row", "justify-content-center", "text-center", "m-t-20"], [1, "col-5"], [1, "text-muted"], ["mk-morris-js", "", "type", "Area", 1, "area_chart-style", 3, "options", "data"], [1, "row", "justify-content-center", "text-center", "b-t-default", "m-t-15", "p-t-20"], [1, "col-3", "b-r-default"], [1, "text-muted", "m-b-0"], [1, "col-3"], ["mk-morris-js", "", "type", "Line", 1, "area_chart-style", 3, "options", "data"], [1, "card-footer"], [1, "row", "text-center"], [1, "col-6", "b-r-default"], [1, "text-muted", "m-b-10"], [1, "col-6"], [1, "counter-box", "text-center", "white"], [1, "text", "font-17", "m-b-5"], [1, "m-b-10"], [1, "material-icons", "col-green"], [1, "icon"], [1, "chart", "chart-bar"], [1, "material-icons", "col-red"], [1, "chart", "chart-line"], [1, "chart", "chart-pie"], ["id", "liveChart", 1, "chart"], [1, "support-box", "text-center", "bg-cyan"], [1, "displayblock"], [1, "support-box", "text-center", "bg-purple"], [1, "support-box", "text-center", "bg-blue"], [1, "support-box", "text-center", "bg-green"], [1, "col-xs-12", "col-sm-12", "col-md-12", "col-lg-12"], [1, "header"], [1, "header-dropdown", "m-r--5"], [1, "dropdown"], ["href", "#", "onClick", "return false;", "data-toggle", "dropdown", "role", "button", "aria-haspopup", "true", "aria-expanded", "false"], [1, "dropdown-menu", "pull-right"], ["href", "#", "onClick", "return false;"], [1, "body"], [3, "series", "chart", "xaxis", "title"], [1, "col-4"], [1, "text-muted", "font-15", "text-truncate"], [1, "fas", "fa-arrow-circle-up", "col-green", "m-r-5"], [1, "fas", "fa-arrow-circle-down", "col-red", "m-r-5"], [1, "text-muted", "text-truncate"], [1, "col-xs-12", "col-sm-12", "col-md-4", "col-lg-4"], ["id", "chart"], [3, "series", "chart", "plotOptions", "labels", "legend", "colors", "responsive"], [3, "series", "chart", "xaxis", "stroke", "markers", "fill"], [3, "series", "chart", "xaxis", "stroke", "tooltip", "dataLabels"], [1, "info-box6", "primary"], [1, "fas", "fa-cart-plus"], [1, "count-numbers"], [1, "count-name"], [1, "info-box6", "danger"], [1, "fas", "fa-business-time"], [1, "info-box6", "success"], [1, "fas", "fa-chart-line"], [1, "info-box6", "info"], [1, "fas", "fa-dollar-sign"], [1, "col-xl-6", "col-lg-6", "col-md-12", "col-sm-12"], [1, "chart-box-left"], [1, "chart-note"], [1, "dot", "dot-product"], [1, "chart-note", "mr-0"], [1, "dot", "dot-service"], ["id", "chartReport1"], [1, "axisData"], [1, "tick"], [1, "value", "productValue"], [1, "value", "serviceValue"], ["id", "chartReport2"], [1, "info-box7", "bg-c-blue", "order-info-box7"], [1, "info-box7-block"], [1, "m-b-20"], [1, "text-right"], [1, "fas", "fa-cart-plus", "pull-left"], [1, "info-box7", "bg-c-green", "order-info-box7"], [1, "fas", "fa-business-time", "pull-left"], [1, "info-box7", "bg-c-yellow", "order-info-box7"], [1, "fas", "fa-chart-line", "pull-left"], [1, "info-box7", "bg-c-pink", "order-info-box7"], [1, "fas", "fa-dollar-sign", "pull-left"]], template: function ChartWidgetComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "6,4,8,6,8,10,5,6,7,9,5,6,4,8,6,8,10,5,6,7,9,5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "Total Ticket");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "h3", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "1512 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "trending_up");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, "9,4,6,5,6,4,7,3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, "Reply");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "h3", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, "1236 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, "trending_up");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](29, "30, 35, 25, 8");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](31, "Resolve");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "h3", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](33, "1107 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](35, "trending_down");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](40, "4,6,-3,-1,2,-2,4,3,6,7,-2,3,4,6,-3,-1,2,-2,4,3,6,7,-2,3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](42, "Pending");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "h3", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](44, "167 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](46, "trending_down");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](52, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "h6", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](54, "Real-Time Visits");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](55, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](56, "23,000");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](57, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](58, "h6", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](59, "Returning Visitors");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](60, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](61, "12,564");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](62, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](63, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](64, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](65, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](66, "75%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](67, "p", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](68, "Satisfied");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](69, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](70, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](71, "16%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](72, "p", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](73, "Unsatisfied");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](74, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](75, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](76, "9%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](77, "p", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](78, "NA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](79, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](80, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](81, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](82, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](83, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](84, "h6", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](85, "Total Working Hours");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](86, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](87, "87,000");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](88, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](89, "h6", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](90, "Total Employees");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](91, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](92, "4,354");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](93, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](94, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](95, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](96, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](97, "h6", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](98, "Completed Projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](99, "h3", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](100, "986");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](101, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](102, "h6", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](103, "Total Earnings");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](104, "h3", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](105, "234.6M");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](106, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](107, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](108, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](109, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](110, "Total Income");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](111, "h3", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](112, "$758 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](113, "i", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](114, "trending_up");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](115, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](116, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](117, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](118, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](119, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](120, "Orders Received");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](121, "h3", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](122, "1025 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](123, "i", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](124, "trending_down");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](125, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](126, "span", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](127, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](128, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](129, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](130, "Total Sales");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](131, "h3", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](132, "956 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](133, "i", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](134, "trending_up");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](135, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](136, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](137, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](138, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](139, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](140, "Total Active Users");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](141, "h3", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](142, "214 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](143, "i", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](144, "trending_down");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](145, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](146, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](147, "Loading..");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](148, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](149, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](150, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](151, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](152, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](153, "6,4,8,6,8,10,5,6,7,9,5,6,4,8,6,8,10,5,6,7,9,5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](154, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](155, "Total Income");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](156, "h3", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](157, "$1512 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](158, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](159, "trending_up");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](160, "small", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](161, "21% Higher Than Average ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](162, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](163, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](164, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](165, "span", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](166, "9,4,6,5,6,4,7,3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](167, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](168, "Orders Received");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](169, "h3", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](170, "1236 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](171, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](172, "trending_up");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](173, "small", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](174, "13% Highr Than Average ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](175, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](176, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](177, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](178, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](179, "30, 35, 25, 8");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](180, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](181, "Total Sales");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](182, "h3", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](183, "1107 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](184, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](185, "trending_down");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](186, "small", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](187, "34% Lower Than Average ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](188, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](189, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](190, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](191, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](192, "4,6,-3,-1,2,-2,4,3,6,7,-2,3,4,6,-3,-1,2,-2,4,3,6,7,-2,3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](193, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](194, "Total Active Users");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](195, "h3", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](196, "167 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](197, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](198, "trending_down");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](199, "small", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](200, "06% Lower Than Average ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](201, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](202, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](203, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](204, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](205, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](206, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](207, "Chart");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](208, " Sample");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](209, "ul", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](210, "li", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](211, "a", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](212, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](213, "more_vert");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](214, "ul", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](215, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](216, "a", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](217, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](218, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](219, "a", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](220, "Another action");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](221, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](222, "a", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](223, "Something else here");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](224, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](225, "apx-chart", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](226, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](227, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](228, "p", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](229, "Target");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](230, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](231, "i", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](232, "$15.3k ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](233, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](234, "p", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](235, "Last week");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](236, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](237, "i", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](238, "$2.8k ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](239, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](240, "p", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](241, "Last Month");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](242, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](243, "i", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](244, "$12.5k ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](245, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](246, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](247, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](248, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](249, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](250, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](251, "Chart");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](252, " Sample");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](253, "ul", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](254, "li", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](255, "a", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](256, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](257, "more_vert");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](258, "ul", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](259, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](260, "a", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](261, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](262, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](263, "a", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](264, "Another action");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](265, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](266, "a", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](267, "Something else here");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](268, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](269, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](270, "apx-chart", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](271, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](272, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](273, "p", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](274, "Target");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](275, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](276, "i", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](277, "$15.3k ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](278, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](279, "p", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](280, "Last week");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](281, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](282, "i", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](283, "$2.8k ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](284, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](285, "p", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](286, "Last Month");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](287, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](288, "i", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](289, "$12.5k ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](290, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](291, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](292, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](293, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](294, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](295, "Chart");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](296, " Sample");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](297, "ul", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](298, "li", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](299, "a", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](300, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](301, "more_vert");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](302, "ul", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](303, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](304, "a", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](305, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](306, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](307, "a", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](308, "Another action");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](309, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](310, "a", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](311, "Something else here");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](312, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](313, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](314, "apx-chart", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](315, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](316, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](317, "p", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](318, "Target");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](319, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](320, "i", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](321, "$15.3k ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](322, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](323, "p", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](324, "Last week");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](325, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](326, "i", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](327, "$2.8k ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](328, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](329, "p", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](330, "Last Month");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](331, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](332, "i", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](333, "$12.5k ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](334, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](335, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](336, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](337, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](338, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](339, "Chart");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](340, " Sample");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](341, "ul", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](342, "li", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](343, "a", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](344, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](345, "more_vert");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](346, "ul", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](347, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](348, "a", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](349, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](350, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](351, "a", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](352, "Another action");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](353, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](354, "a", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](355, "Something else here");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](356, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](357, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](358, "apx-chart", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](359, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](360, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](361, "p", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](362, "Target");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](363, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](364, "i", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](365, "$15.3k ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](366, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](367, "p", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](368, "Last week");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](369, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](370, "i", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](371, "$2.8k ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](372, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](373, "p", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](374, "Last Month");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](375, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](376, "i", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](377, "$12.5k ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](378, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](379, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](380, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](381, "i", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](382, "span", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](383, "18");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](384, "span", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](385, "Orders");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](386, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](387, "div", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](388, "i", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](389, "span", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](390, "458");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](391, "span", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](392, "Completed");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](393, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](394, "div", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](395, "i", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](396, "span", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](397, "128");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](398, "span", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](399, "New Order");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](400, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](401, "div", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](402, "i", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](403, "span", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](404, "$35586");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](405, "span", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](406, "Earning");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](407, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](408, "div", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](409, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](410, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](411, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](412, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](413, "Recent");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](414, " Report");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](415, "ul", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](416, "li", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](417, "a", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](418, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](419, "more_vert");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](420, "ul", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](421, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](422, "a", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](423, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](424, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](425, "a", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](426, "Another action");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](427, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](428, "a", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](429, "Something else here");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](430, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](431, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](432, "div", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](433, "div", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](434, "span", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](435, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](436, "products");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](437, "div", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](438, "span", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](439, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](440, "services");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](441, "canvas", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](442, "div", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](443, "div", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](444, " MON ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](445, "span", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](446, "24");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](447, "span", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](448, "20");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](449, "div", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](450, " TUE ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](451, "span", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](452, "18");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](453, "span", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](454, "22");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](455, "div", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](456, " WED ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](457, "span", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](458, "16");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](459, "span", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](460, "30");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](461, "div", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](462, " THU ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](463, "span", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](464, "18");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](465, "span", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](466, "22");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](467, "div", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](468, " FRI ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](469, "span", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](470, "24");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](471, "span", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](472, "18");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](473, "div", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](474, " SAT ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](475, "span", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](476, "36");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](477, "span", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](478, "22");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](479, "div", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](480, " SUN ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](481, "span", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](482, "28");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](483, "span", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](484, "30");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](485, "div", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](486, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](487, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](488, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](489, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](490, "Recent");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](491, " Report");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](492, "ul", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](493, "li", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](494, "a", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](495, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](496, "more_vert");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](497, "ul", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](498, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](499, "a", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](500, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](501, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](502, "a", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](503, "Another action");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](504, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](505, "a", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](506, "Something else here");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](507, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](508, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](509, "div", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](510, "div", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](511, "span", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](512, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](513, "products");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](514, "div", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](515, "span", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](516, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](517, "services");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](518, "canvas", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](519, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](520, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](521, "div", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](522, "div", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](523, "h6", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](524, "Orders Received");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](525, "h2", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](526, "i", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](527, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](528, "358");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](529, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](530, "18% Higher Then Last Month");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](531, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](532, "div", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](533, "div", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](534, "h6", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](535, "Completed Orders");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](536, "h2", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](537, "i", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](538, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](539, "865");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](540, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](541, "21% Higher Then Last Month");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](542, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](543, "div", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](544, "div", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](545, "h6", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](546, "New Orders");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](547, "h2", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](548, "i", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](549, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](550, "128");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](551, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](552, "37% Higher Then Last Month");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](553, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](554, "div", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](555, "div", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](556, "h6", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](557, "Total Earning");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](558, "h2", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](559, "i", 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](560, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](561, "$25698");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](562, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](563, "10% Higher Then Last Month");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("options", ctx.chartAreaOptions)("data", ctx.chartAreaData);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("options", ctx.chartLineOptions)("data", ctx.chartLineData);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](132);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("series", ctx.lineChart2Options.series)("chart", ctx.lineChart2Options.chart)("xaxis", ctx.lineChart2Options.xaxis)("title", ctx.lineChart2Options.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("series", ctx.circleChartOptions.series)("chart", ctx.circleChartOptions.chart)("plotOptions", ctx.circleChartOptions.plotOptions)("labels", ctx.circleChartOptions.labels)("legend", ctx.circleChartOptions.legend)("colors", ctx.circleChartOptions.colors)("responsive", ctx.circleChartOptions.responsive);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("series", ctx.radarChartOptions.series)("chart", ctx.radarChartOptions.chart)("xaxis", ctx.radarChartOptions.xaxis)("stroke", ctx.radarChartOptions.stroke)("markers", ctx.radarChartOptions.markers)("fill", ctx.radarChartOptions.fill);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("series", ctx.areaChartOptions.series)("chart", ctx.areaChartOptions.chart)("xaxis", ctx.areaChartOptions.xaxis)("stroke", ctx.areaChartOptions.stroke)("tooltip", ctx.areaChartOptions.tooltip)("dataLabels", ctx.areaChartOptions.dataLabels);
    } }, directives: [angular_morris_js__WEBPACK_IMPORTED_MODULE_2__["MorrisChartDirective"], ng_apexcharts__WEBPACK_IMPORTED_MODULE_1__["ChartComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dpZGdldC9jaGFydC13aWRnZXQvY2hhcnQtd2lkZ2V0LmNvbXBvbmVudC5zYXNzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ChartWidgetComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-chart-widget',
                templateUrl: './chart-widget.component.html',
                styleUrls: ['./chart-widget.component.sass']
            }]
    }], function () { return []; }, { chart: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['chart', { static: true }]
        }] }); })();


/***/ }),

/***/ "d0E2":
/*!*************************************************************!*\
  !*** ./src/app/widget/data-widget/data-widget.component.ts ***!
  \*************************************************************/
/*! exports provided: DataWidgetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataWidgetComponent", function() { return DataWidgetComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "Kdsb");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/input */ "qFsG");





class DataWidgetComponent {
    constructor() { }
    ngOnInit() {
        $('#single_slide_autoplay').owlCarousel({
            items: 1,
            loop: true,
            margin: 10,
            autoplay: true,
            autoplayTimeout: 3000,
            autoplayHoverPause: true
        });
        $('.play').on('click', function () {
            $('#single_slide_autoplay').trigger('play.owl.autoplay', [3000]);
        });
        $('.stop').on('click', function () {
            $('#single_slide_autoplay').trigger('stop.owl.autoplay');
        });
        $(document).on('click', '.to-do-list .form-check-label .form-check-input', function () {
            $(this)
                .parent('label')
                .toggleClass('line-through');
        });
        $(document).on('click', '.todo-remove', function () {
            $(this)
                .closest('li')
                .remove();
            return false;
        });
        $(document).on('click', '.panel .tools .fa-times', function () {
            $(this)
                .parents('.panel')
                .parent()
                .remove();
        });
        //todo
        $('.tdl-new').on('keypress', function (e) {
            var code = e.keyCode ? e.keyCode : e.which;
            if (code == 13) {
                var v = $(this).val();
                var s = v.replace(/ +?/g, '');
                if (s == '') {
                    return false;
                }
                else {
                    $('.tdl-content ul').append("<li class='clearfix'> <div class='form-check m-l-10'> <label class='form-check-label'> <input class='form-check-input' type='checkbox' value=''>" +
                        v +
                        "<span class='form-check-sign'> <span class='check'></span> </span> </label> </div> <div class='todo-actionlist pull-right clearfix'> <a href='#' class=''> <i class='material-icons'>clear</i> </a> </div> </li>");
                    $(this).val('');
                }
            }
        });
        // for dynamically created a tags
        $('.tdl-content').on('click', 'a', function () {
            var _li = $(this)
                .parent()
                .parent('li');
            _li
                .addClass('remove')
                .stop()
                .delay(100)
                .slideUp('fast', function () {
                _li.remove();
            });
            return false;
        });
    }
}
DataWidgetComponent.??fac = function DataWidgetComponent_Factory(t) { return new (t || DataWidgetComponent)(); };
DataWidgetComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: DataWidgetComponent, selectors: [["app-data-widget"]], decls: 1334, vars: 0, consts: [[1, "content"], [1, "container-fluid"], [1, "row", "clearfix"], [1, "col-xs-12", "col-sm-12", "col-md-8", "col-lg-8"], [1, "card"], [1, "header"], [1, "header-dropdown", "m-r--5"], [1, "dropdown"], ["href", "#", "onClick", "return false;", "data-toggle", "dropdown", "role", "button", "aria-haspopup", "true", "aria-expanded", "false"], [1, "material-icons"], [1, "dropdown-menu", "pull-right"], ["href", "#", "onClick", "return false;"], [1, "body"], [1, "review-block"], [1, "row"], [1, "review-img"], ["src", "assets/images/user/user1.jpg", "alt", ""], [1, "col"], [1, "m-b-15"], [1, "float-right", "m-r-10", "text-muted"], [1, "m-t-15", "m-b-15", "text-muted"], ["href", "#!"], [1, "material-icons", "m-r-10"], [1, "material-icons", "m-r-10", "col-red"], ["src", "assets/images/user/user2.jpg", "alt", ""], [1, "text-center", "m-b-5"], ["href", "#!", 1, "b-b-primary", "text-primary"], [1, "col-md-4", "col-sm-12", "col-12"], [1, "totalEarning"], ["id", "skills", 1, "tab-pane", "body"], [1, "list-unstyled"], [1, "mb-2"], [1, "progress-label"], [1, "pull-right", "progress-percent", "label", "label-info", "m-b-5"], [1, "progress", "skill-progress", "m-b-20", "w-100"], ["role", "progressbar", "aria-valuenow", "45", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "l-bg-green", "width-per-45"], [1, "pull-left", "progress-label"], [1, "pull-right", "progress-percent", "label", "label-danger", "m-b-5"], ["role", "progressbar", "aria-valuenow", "27", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "l-bg-purple", "width-per-27"], [1, "pull-right", "progress-percent", "label", "label-primary", "m-b-5"], ["role", "progressbar", "aria-valuenow", "25", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "l-bg-orange", "width-per-25"], [1, "pull-right", "progress-percent", "label", "label-success", "m-b-5"], ["role", "progressbar", "aria-valuenow", "18", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "l-bg-cyan", "width-per-18"], [1, "pull-right", "progress-percent", "label", "label-warning", "m-b-5"], ["role", "progressbar", "aria-valuenow", "13", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "l-bg-red", "width-per-13"], [1, "col-lg-4", "col-md-4", "col-sm-4", "col-xs-12"], [1, "box-part", "text-center"], [1, "fab", "fa-twitter", "fa-3x", "col-blue"], [1, "title", "p-t-15"], [1, "text", "p-b-10"], ["href", "#"], [1, "fab", "fa-instagram", "fa-3x", "col-red"], [1, "fab", "fa-facebook-f", "fa-3x", "col-blue"], [1, "col-lg-6", "col-md-6", "col-sm-12", "col-xs-12"], ["id", "single_slide_autoplay", 1, "owl-carousel", "owl-theme"], [1, "item"], ["src", "assets/images/image-gallery/1.jpg", "alt", ""], ["src", "assets/images/image-gallery/2.jpg", "alt", ""], ["src", "assets/images/image-gallery/3.jpg", "alt", ""], ["src", "assets/images/image-gallery/4.jpg", "alt", ""], ["src", "assets/images/image-gallery/5.jpg", "alt", ""], [1, "owl-btns"], [1, "owl-play", "play"], [1, "owl-stop", "stop"], [1, "col-lg-6", "col-md-12"], [1, "tableBody"], [1, "table-responsive"], [1, "table", "table-hover", "dashboard-task-infos"], [1, "table-img"], [1, "label", "l-bg-green", "shadow-style"], [1, "progress", "shadow-style"], ["role", "progressbar", "aria-valuenow", "62", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "l-bg-green", "width-per-62"], [1, "label", "l-bg-purple", "shadow-style"], ["role", "progressbar", "aria-valuenow", "40", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "l-bg-purple", "width-per-40"], ["src", "assets/images/user/user3.jpg", "alt", ""], [1, "label", "l-bg-orange", "shadow-style"], ["role", "progressbar", "aria-valuenow", "72", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "l-bg-orange", "width-per-72"], ["src", "assets/images/user/user4.jpg", "alt", ""], [1, "label", "l-bg-cyan", "shadow-style"], ["role", "progressbar", "aria-valuenow", "95", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "l-bg-cyan", "width-per-95"], ["src", "assets/images/user/user5.jpg", "alt", ""], [1, "label", "bg-green", "shadow-style"], ["role", "progressbar", "aria-valuenow", "87", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "l-bg-green", "width-per-87"], [1, "col-xs-12", "col-sm-12", "col-md-6", "col-lg-6"], ["id", "new-orders", 1, "media-list", "position-relative", 2, "position", "relative", "max-height", "390px", 3, "perfectScrollbar"], ["id", "new-orders-table", 1, "table", "table-hover", "table-xl", "mb-0"], [1, "border-top-0"], [1, "text-truncate"], [1, "list-unstyled", "order-list"], [1, "avatar", "avatar-sm"], ["src", "assets/images/user/user1.jpg", "alt", "user", 1, "rounded-circle"], ["src", "assets/images/user/user2.jpg", "alt", "user", 1, "rounded-circle"], ["src", "assets/images/user/user3.jpg", "alt", "user", 1, "rounded-circle"], [1, "badge"], ["role", "tablist", 1, "nav", "nav-tabs", "tab-nav-right"], [1, "userlist-tab"], ["href", "#usrtab1", "data-toggle", "tab", 1, "userlist-tab-img", "active", "show"], ["src", "assets/images/user/user1.jpg", "alt", "user"], ["href", "#usrtab2", "data-toggle", "tab", 1, "userlist-tab-img", "show"], ["src", "assets/images/user/user2.jpg", "alt", "user"], ["href", "#usrtab3", "data-toggle", "tab", 1, "userlist-tab-img", "show"], ["src", "assets/images/user/user3.jpg", "alt", "user"], [1, "tab-content"], ["role", "tabpanel", "id", "usrtab1", 1, "tab-pane", "fade", "in", "active", "show"], [1, "badge", "col-green"], ["role", "progressbar", "aria-valuenow", "72", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "l-bg-green", "width-per-72"], [1, "badge", "col-red"], ["role", "progressbar", "aria-valuenow", "62", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "l-bg-red", "width-per-62"], [1, "badge", "col-purple"], ["role", "tabpanel", "id", "usrtab2", 1, "tab-pane", "fade"], ["role", "tabpanel", "id", "usrtab3", 1, "tab-pane", "fade"], [1, "col-lg-6", "col-md-6", "col-sm-6", "col-xs-12"], [1, "card", "profile-header"], [1, "col-lg-4", "col-md-4", "col-12"], [1, "profile-image", "float-md-right"], ["src", "assets/images/user/usrbig6.jpg", "alt", ""], [1, "col-lg-8", "col-md-8", "col-12"], [1, "m-t-0", "m-b-0"], [1, "job_post"], ["type", "button", 1, "btn", "btn-outline-success", "btn-border-radius", "mr-2"], ["type", "button", 1, "btn", "btn-outline-warning", "btn-border-radius"], ["src", "assets/images/user/usrbig1.jpg", "alt", ""], [1, "col-xs-12", "col-sm-12", "col-md-4", "col-lg-4"], [1, "sl-item", "sl-primary"], [1, "sl-content"], [1, "text-muted"], [1, "fa", "fa-user", "position-left"], [1, "sl-item", "sl-danger"], [1, "sl-item", "sl-success"], [1, "sl-item", "sl-warning"], [1, "chat"], [1, "chat-header", "clearfix"], ["src", "assets/images/user/user2.jpg", "alt", "avatar"], [1, "chat-about"], [1, "chat-with"], [1, "chat-num-messages"], ["id", "chat-conversation", 1, "chat-history", 2, "position", "relative", "max-height", "270px", 3, "perfectScrollbar"], [1, "clearfix"], [1, "message-data", "text-right"], [1, "message-data-time"], [1, "message-data-name"], [1, "zmdi", "zmdi-circle", "me"], [1, "message", "other-message", "float-right"], [1, "message-data"], [1, "zmdi", "zmdi-circle", "online"], [1, "message", "my-message"], [1, "chat-message", "clearfix"], [1, "form-group"], [1, "form-line"], [1, "example-full-width"], ["matInput", "", "placeholder", "Enter text here.."], [1, "card-block"], [1, "row", "m-b-20"], [1, "col-auto", "p-r-0"], ["src", "assets/images/posts/post1.jpg", "alt", "user image", 1, "latest-posts-img"], [1, "text-muted", "m-b-5"], [1, "fa", "fa-play-circle-o"], ["src", "assets/images/posts/post2.jpg", "alt", "user image", 1, "latest-posts-img"], ["src", "assets/images/posts/post3.jpg", "alt", "user image", 1, "latest-posts-img"], [1, "text-center"], [1, "assign-style", 2, "position", "relative", "max-height", "370px", 3, "perfectScrollbar"], [1, "feedBody"], [1, "active-feed"], [1, "feed-user-img"], ["src", "assets/images/user/user1.jpg", "alt", "User-Profile-Image", 1, "img-radius"], [1, "feedLblStyle", "lblFileStyle"], [1, "m-b-15", "m-t-15"], [1, "diactive-feed"], ["src", "assets/images/user/user2.jpg", "alt", "User-Profile-Image", 1, "img-radius"], [1, "feedLblStyle", "lblTaskStyle"], ["src", "assets/images/user/user3.jpg", "alt", "User-Profile-Image", 1, "img-radius"], [1, "feedLblStyle", "lblCommentStyle"], ["src", "assets/images/user/user4.jpg", "alt", "User-Profile-Image", 1, "img-radius"], [1, "feedLblStyle", "lblReplyStyle"], ["src", "assets/images/user/user5.jpg", "alt", "User-Profile-Image", 1, "img-radius"], ["src", "assets/images/user/user6.jpg", "alt", "User-Profile-Image", 1, "img-radius"], ["id", "sortable-todo", 1, "to-do-list", "ui-sortable"], [1, "form-check", "m-l-10"], [1, "form-check-label"], ["type", "checkbox", "value", "", 1, "form-check-input"], [1, "form-check-sign"], [1, "check"], [1, "todo-actionlist", "pull-right", "clearfix"], ["href", "#", 1, "todo-remove"], [1, "recent-comment"], [1, "notice-board"], ["src", "assets/images/user/user6.jpg", "alt", "...", 1, "notice-object"], [1, "notice-body"], [1, "notice-heading", "col-green"], ["src", "assets/images/user/user4.jpg", "alt", "...", 1, "notice-object"], [1, "notice-heading", "color-primary", "col-indigo"], [1, "comment-date"], ["src", "assets/images/user/user3.jpg", "alt", "...", 1, "notice-object"], [1, "notice-heading", "color-danger", "col-cyan"], [1, "notice-board", "no-border"], ["src", "assets/images/user/user7.jpg", "alt", "...", 1, "notice-object"], [1, "notice-heading", "color-info", "col-orange"], [1, "timeline"], [1, "timeline-badge", "primary"], ["src", "assets/images/user/user1.jpg", "alt", "...", 1, "notice-object"], [1, "timeline-panel"], [1, "timeline-heading"], [1, "timeline-title"], [1, "timeline-body"], ["src", "assets/images/user/user2.jpg", "alt", "...", 1, "notice-object"], ["src", "assets/images/user/user8.jpg", "alt", "...", 1, "notice-object"]], template: function DataWidgetComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "Customer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, " Review");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](29, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "h6", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](32, "Alis Smith ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](34, " a week ago");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](36, "star");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](38, "star");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](40, "star");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](42, "star_half");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](44, "star_border");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "p", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](46, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel rutrum ex, at ornare mi. In quis scelerisque dui, eget rhoncus orci. Fusce et sodales ipsum. Nam id nunc euismod, aliquet arcu quis, mattis nisi.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "i", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](49, "thumb_up");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "i", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](52, "thumb_down");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](55, "img", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](56, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](57, "h6", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](58, "John Dio ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](59, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](60, " a week ago");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](61, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](62, "star");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](63, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](64, "star_half");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](65, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](66, "star_border");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](67, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](68, "star_border");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](69, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](70, "star_border");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](71, "p", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](72, "Nam quis ligula est. Nunc sed risus non turpis tristique tempor. Ut sollicitudin faucibus magna nec gravida. Suspendisse ullamcorper justo vel porta imperdiet. Nunc nec ipsum vel augue placerat faucibus. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](73, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](74, "i", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](75, "thumb_up");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](76, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](77, "i", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](78, "thumb_down");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](79, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](80, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](81, "View all Customer Reviews");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](82, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](83, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](84, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](85, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](86, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](87, "Earning");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](88, " Source");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](89, "ul", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](90, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](91, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](92, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](93, "more_vert");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](94, "ul", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](95, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](96, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](97, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](98, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](99, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](100, "Another action");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](101, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](102, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](103, "Something else here");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](104, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](105, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](106, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](107, "$90,808");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](108, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](109, "ul", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](110, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](111, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](112, "span", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](113, "envato.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](114, "span", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](115, "17%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](116, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](117, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](118, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](119, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](120, "span", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](121, "google.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](122, "span", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](123, "27%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](124, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](125, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](126, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](127, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](128, "span", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](129, "yahoo.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](130, "span", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](131, "25%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](132, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](133, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](134, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](135, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](136, "span", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](137, "store");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](138, "span", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](139, "18%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](140, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](141, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](142, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](143, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](144, "span", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](145, "Others");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](146, "span", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](147, "13%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](148, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](149, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](150, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](151, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](152, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](153, "i", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](154, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](155, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](156, "Twitter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](157, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](158, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](159, "Lorem ipsum dolor sit amet, id quo eruditi eloquentiam. Assum decore te sed. Elitr scripta ocurreret qui ad.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](160, "a", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](161, "Learn More");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](162, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](163, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](164, "i", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](165, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](166, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](167, "Instagram");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](168, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](169, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](170, "Lorem ipsum dolor sit amet, id quo eruditi eloquentiam. Assum decore te sed. Elitr scripta ocurreret qui ad.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](171, "a", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](172, "Learn More");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](173, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](174, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](175, "i", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](176, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](177, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](178, "Facebook");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](179, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](180, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](181, "Lorem ipsum dolor sit amet, id quo eruditi eloquentiam. Assum decore te sed. Elitr scripta ocurreret qui ad.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](182, "a", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](183, "Learn More");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](184, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](185, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](186, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](187, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](188, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](189, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](190, "Single");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](191, " Slide Auto Play");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](192, "ul", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](193, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](194, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](195, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](196, "more_vert");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](197, "ul", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](198, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](199, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](200, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](201, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](202, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](203, "Another action");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](204, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](205, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](206, "Something else here");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](207, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](208, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](209, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](210, "img", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](211, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](212, "img", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](213, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](214, "img", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](215, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](216, "img", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](217, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](218, "img", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](219, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](220, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](221, "Play");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](222, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](223, "Stop");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](224, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](225, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](226, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](227, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](228, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](229, "Assign");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](230, " Task");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](231, "ul", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](232, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](233, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](234, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](235, "more_vert");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](236, "ul", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](237, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](238, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](239, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](240, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](241, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](242, "Another action");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](243, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](244, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](245, "Something else here");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](246, "div", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](247, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](248, "table", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](249, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](250, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](251, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](252, "User");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](253, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](254, "Task");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](255, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](256, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](257, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](258, "Manager");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](259, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](260, "Progress");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](261, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](262, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](263, "td", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](264, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](265, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](266, "Task A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](267, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](268, "span", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](269, "Doing");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](270, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](271, "John Doe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](272, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](273, "div", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](274, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](275, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](276, "td", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](277, "img", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](278, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](279, "Task B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](280, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](281, "span", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](282, "To Do");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](283, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](284, "John Doe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](285, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](286, "div", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](287, "div", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](288, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](289, "td", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](290, "img", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](291, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](292, "Task C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](293, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](294, "span", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](295, "On Hold");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](296, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](297, "John Doe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](298, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](299, "div", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](300, "div", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](301, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](302, "td", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](303, "img", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](304, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](305, "Task D");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](306, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](307, "span", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](308, "Wait Approvel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](309, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](310, "John Doe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](311, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](312, "div", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](313, "div", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](314, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](315, "td", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](316, "img", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](317, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](318, "Task E");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](319, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](320, "span", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](321, "Suspended");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](322, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](323, "John Doe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](324, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](325, "div", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](326, "div", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](327, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](328, "td", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](329, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](330, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](331, "Task A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](332, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](333, "span", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](334, "Doing");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](335, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](336, "John Doe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](337, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](338, "div", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](339, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](340, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](341, "td", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](342, "img", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](343, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](344, "Task B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](345, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](346, "span", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](347, "To Do");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](348, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](349, "John Doe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](350, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](351, "div", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](352, "div", 73);
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](353, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](354, "div", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](355, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](356, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](357, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](358, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](359, "New ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](360, "Orders");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](361, "ul", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](362, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](363, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](364, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](365, "more_vert");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](366, "ul", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](367, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](368, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](369, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](370, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](371, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](372, "Another action");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](373, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](374, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](375, "Something else here");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](376, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](377, "div", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](378, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](379, "table", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](380, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](381, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](382, "th", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](383, "Product");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](384, "th", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](385, "Customers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](386, "th", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](387, "Total");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](388, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](389, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](390, "td", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](391, "iPhone X");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](392, "td", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](393, "ul", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](394, "li", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](395, "img", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](396, "li", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](397, "img", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](398, "li", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](399, "img", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](400, "li", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](401, "span", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](402, "+4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](403, "td", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](404, "$8999");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](405, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](406, "td", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](407, "Pixel 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](408, "td", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](409, "ul", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](410, "li", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](411, "img", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](412, "li", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](413, "img", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](414, "li", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](415, "img", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](416, "li", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](417, "span", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](418, "+4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](419, "td", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](420, "$5550");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](421, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](422, "td", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](423, "OnePlus");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](424, "td", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](425, "ul", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](426, "li", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](427, "img", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](428, "li", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](429, "img", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](430, "li", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](431, "img", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](432, "li", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](433, "span", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](434, "+4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](435, "td", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](436, "$9000");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](437, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](438, "td", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](439, "Galaxy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](440, "td", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](441, "ul", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](442, "li", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](443, "img", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](444, "li", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](445, "img", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](446, "li", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](447, "img", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](448, "li", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](449, "span", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](450, "+4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](451, "td", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](452, "$7500");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](453, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](454, "td", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](455, "Moto Z2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](456, "td", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](457, "ul", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](458, "li", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](459, "img", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](460, "li", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](461, "img", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](462, "li", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](463, "img", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](464, "li", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](465, "span", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](466, "+4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](467, "td", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](468, "$8500");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](469, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](470, "td", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](471, "iPhone X");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](472, "td", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](473, "ul", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](474, "li", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](475, "img", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](476, "li", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](477, "img", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](478, "li", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](479, "img", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](480, "li", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](481, "span", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](482, "+4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](483, "td", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](484, "$8999");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](485, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](486, "td", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](487, "iPhone X");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](488, "td", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](489, "ul", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](490, "li", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](491, "img", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](492, "li", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](493, "img", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](494, "li", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](495, "img", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](496, "li", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](497, "span", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](498, "+4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](499, "td", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](500, "$8999");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](501, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](502, "td", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](503, "Pixel 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](504, "td", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](505, "ul", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](506, "li", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](507, "img", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](508, "li", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](509, "img", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](510, "li", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](511, "img", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](512, "li", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](513, "span", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](514, "+4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](515, "td", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](516, "$5550");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](517, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](518, "td", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](519, "OnePlus");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](520, "td", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](521, "ul", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](522, "li", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](523, "img", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](524, "li", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](525, "img", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](526, "li", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](527, "img", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](528, "li", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](529, "span", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](530, "+4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](531, "td", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](532, "$9000");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](533, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](534, "td", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](535, "Galaxy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](536, "td", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](537, "ul", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](538, "li", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](539, "img", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](540, "li", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](541, "img", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](542, "li", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](543, "img", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](544, "li", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](545, "span", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](546, "+4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](547, "td", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](548, "$7500");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](549, "div", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](550, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](551, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](552, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](553, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](554, "Task");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](555, " List");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](556, "ul", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](557, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](558, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](559, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](560, "more_vert");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](561, "ul", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](562, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](563, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](564, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](565, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](566, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](567, "Another action");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](568, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](569, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](570, "Something else here");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](571, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](572, "ul", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](573, "li", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](574, "a", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](575, "img", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](576, "Sarah Smith");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](577, "li", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](578, "a", 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](579, "img", 99);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](580, "Jalpa Joshi");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](581, "li", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](582, "a", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](583, "img", 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](584, "Mark Peter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](585, "div", 102);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](586, "div", 103);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](587, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](588, "table", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](589, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](590, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](591, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](592, "Task");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](593, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](594, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](595, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](596, "Manager");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](597, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](598, "Progress");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](599, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](600, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](601, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](602, "Task C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](603, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](604, "span", 104);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](605, "Completed");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](606, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](607, "John Doe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](608, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](609, "div", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](610, "div", 105);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](611, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](612, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](613, "Task A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](614, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](615, "span", 106);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](616, "On Process");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](617, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](618, "John Doe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](619, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](620, "div", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](621, "div", 107);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](622, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](623, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](624, "Task B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](625, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](626, "span", 108);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](627, "On Hold");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](628, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](629, "John Doe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](630, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](631, "div", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](632, "div", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](633, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](634, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](635, "Task D");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](636, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](637, "span", 104);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](638, "Completed");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](639, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](640, "John Doe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](641, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](642, "div", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](643, "div", 105);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](644, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](645, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](646, "Task E");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](647, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](648, "span", 108);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](649, "On Hold");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](650, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](651, "John Doe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](652, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](653, "div", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](654, "div", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](655, "div", 109);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](656, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](657, "table", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](658, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](659, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](660, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](661, "Task");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](662, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](663, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](664, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](665, "Manager");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](666, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](667, "Progress");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](668, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](669, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](670, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](671, "Task D");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](672, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](673, "span", 106);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](674, "On Process");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](675, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](676, "John Doe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](677, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](678, "div", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](679, "div", 107);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](680, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](681, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](682, "Task E");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](683, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](684, "span", 108);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](685, "On Hold");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](686, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](687, "John Doe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](688, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](689, "div", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](690, "div", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](691, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](692, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](693, "Task F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](694, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](695, "span", 104);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](696, "Completed");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](697, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](698, "John Doe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](699, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](700, "div", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](701, "div", 105);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](702, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](703, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](704, "TaskG");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](705, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](706, "span", 106);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](707, "On Process");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](708, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](709, "John Doe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](710, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](711, "div", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](712, "div", 107);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](713, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](714, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](715, "Task K");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](716, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](717, "span", 108);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](718, "On Hold");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](719, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](720, "John Doe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](721, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](722, "div", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](723, "div", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](724, "div", 110);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](725, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](726, "table", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](727, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](728, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](729, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](730, "Task");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](731, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](732, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](733, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](734, "Manager");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](735, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](736, "Progress");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](737, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](738, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](739, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](740, "Task E");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](741, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](742, "span", 108);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](743, "On Hold");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](744, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](745, "John Doe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](746, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](747, "div", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](748, "div", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](749, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](750, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](751, "Task D");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](752, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](753, "span", 106);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](754, "On Process");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](755, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](756, "John Doe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](757, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](758, "div", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](759, "div", 107);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](760, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](761, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](762, "Task F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](763, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](764, "span", 104);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](765, "Completed");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](766, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](767, "John Doe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](768, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](769, "div", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](770, "div", 105);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](771, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](772, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](773, "Task L");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](774, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](775, "span", 106);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](776, "On Process");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](777, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](778, "John Doe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](779, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](780, "div", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](781, "div", 107);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](782, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](783, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](784, "Task H");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](785, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](786, "span", 108);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](787, "On Hold");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](788, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](789, "John Doe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](790, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](791, "div", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](792, "div", 73);
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](793, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](794, "div", 111);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](795, "div", 112);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](796, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](797, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](798, "div", 113);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](799, "div", 114);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](800, "img", 115);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](801, "div", 116);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](802, "h4", 117);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](803, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](804, "Sarah");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](805, " Smith");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](806, "span", 118);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](807, "Java Develper");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](808, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](809, "102, Svayam Appartment, new P.L. road, Rajkot-369852");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](810, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](811, "button", 119);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](812, "Follow");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](813, "button", 120);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](814, "Message");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](815, "div", 111);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](816, "div", 112);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](817, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](818, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](819, "div", 113);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](820, "div", 114);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](821, "img", 121);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](822, "div", 116);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](823, "h4", 117);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](824, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](825, "Sarah");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](826, " Smith");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](827, "span", 118);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](828, "Java Develper");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](829, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](830, "102, Svayam Appartment, new P.L. road, Rajkot-369852");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](831, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](832, "button", 119);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](833, "Follow");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](834, "button", 120);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](835, "Message");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](836, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](837, "div", 122);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](838, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](839, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](840, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](841, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](842, "Recent");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](843, " Activities");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](844, "ul", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](845, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](846, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](847, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](848, "more_vert");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](849, "ul", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](850, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](851, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](852, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](853, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](854, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](855, "Another action");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](856, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](857, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](858, "Something else here");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](859, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](860, "div", 123);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](861, "div", 124);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](862, "small", 125);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](863, "i", 126);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](864, " 5 mins ago");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](865, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](866, "Lorem ipsum dolor sit amet conse ctetur which ascing elit users.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](867, "div", 127);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](868, "div", 124);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](869, "small", 125);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](870, "i", 126);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](871, " 8 mins ago");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](872, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](873, "Lorem ipsum dolor sit ametcon the sectetur that ascing elit users.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](874, "div", 128);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](875, "div", 124);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](876, "small", 125);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](877, "i", 126);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](878, " 10 mins ago");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](879, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](880, "Lorem ipsum dolor sit amet cons the ecte tur and adip ascing elit users.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](881, "div", 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](882, "div", 124);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](883, "small", 125);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](884, "i", 126);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](885, " 12 mins ago");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](886, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](887, "Lorem ipsum dolor sit amet consec tetur adip ascing elit users.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](888, "div", 123);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](889, "div", 124);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](890, "small", 125);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](891, "i", 126);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](892, " 5 mins ago");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](893, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](894, "Lorem ipsum dolor sit amet conse ctetur which ascing elit users.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](895, "div", 122);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](896, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](897, "div", 130);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](898, "div", 131);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](899, "img", 132);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](900, "div", 133);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](901, "div", 134);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](902, "Aiden Chavez");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](903, "div", 135);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](904, "2 new messages");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](905, "div", 136);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](906, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](907, "li", 137);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](908, "div", 138);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](909, "span", 139);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](910, "10:10 AM, Today");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](911, " \u00A0 \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](912, "span", 140);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](913, "Michael");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](914, "i", 141);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](915, "div", 142);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](916, " Hi Aiden, how are you? How is the project coming along? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](917, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](918, "div", 143);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](919, "span", 140);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](920, "i", 144);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](921, " Aiden");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](922, "span", 139);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](923, "10:12 AM, Today");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](924, "div", 145);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](925, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](926, "Are we meeting today? Project has been already finished and I have results to show you.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](927, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](928, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](929, "div", 143);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](930, "span", 140);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](931, "i", 144);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](932, " Aiden");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](933, "span", 139);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](934, "10:12 AM, Today");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](935, "div", 145);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](936, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](937, "Are we meeting today? Project has been already finished and I have results to show you.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](938, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](939, "li", 137);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](940, "div", 138);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](941, "span", 139);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](942, "10:10 AM, Today");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](943, " \u00A0 \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](944, "span", 140);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](945, "Michael");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](946, "i", 141);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](947, "div", 142);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](948, " Hi Aiden, how are you? How is the project coming along? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](949, "div", 146);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](950, "div", 147);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](951, "div", 148);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](952, "mat-form-field", 149);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](953, "input", 150);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](954, "div", 122);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](955, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](956, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](957, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](958, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](959, "Latest");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](960, " Posts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](961, "ul", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](962, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](963, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](964, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](965, "more_vert");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](966, "ul", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](967, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](968, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](969, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](970, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](971, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](972, "Another action");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](973, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](974, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](975, "Something else here");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](976, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](977, "div", 151);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](978, "div", 152);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](979, "div", 153);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](980, "img", 154);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](981, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](982, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](983, "About Something");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](984, "p", 155);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](985, "i", 156);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](986, " Video | 10 minutes ago");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](987, "p", 125);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](988, "Lorem Ipsum is simply dummy text of the.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](989, "div", 152);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](990, "div", 153);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](991, "img", 157);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](992, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](993, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](994, "Relationship");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](995, "p", 155);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](996, "i", 156);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](997, " Video | 24 minutes ago");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](998, "p", 125);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](999, "Lorem Ipsum is simply dummy text of the.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1000, "div", 152);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1001, "div", 153);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1002, "img", 158);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1003, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1004, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1005, "Human body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1006, "p", 155);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1007, "i", 156);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1008, " Video | 53 minutes ago");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1009, "p", 125);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1010, "Lorem Ipsum is simply dummy text of the.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1011, "div", 159);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1012, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1013, "View All Posts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1014, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1015, "div", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1016, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1017, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1018, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1019, "Activity");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1020, "ul", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1021, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1022, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1023, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1024, "more_vert");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1025, "ul", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1026, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1027, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1028, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1029, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1030, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1031, "Another action");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1032, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1033, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1034, "Something else here");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1035, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1036, "div", 160);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1037, "ul", 161);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1038, "li", 162);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1039, "div", 163);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1040, "img", 164);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1041, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1042, "span", 165);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1043, "File");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1044, " Sarah Smith ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1045, "small", 125);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1046, "6 hours ago");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1047, "p", 166);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1048, " hii John, I have upload doc related to task. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1049, "li", 167);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1050, "div", 163);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1051, "img", 168);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1052, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1053, "span", 169);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1054, "Task ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1055, " Jalpa Joshi ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1056, "small", 125);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1057, "5 hours ago ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1058, "p", 166);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1059, " Please do as specify. Let me know if you have any query. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1060, "li", 167);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1061, "div", 163);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1062, "img", 170);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1063, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1064, "span", 171);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1065, "comment");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1066, " Lina Smith ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1067, "small", 125);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1068, "6 hours ago");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1069, "p", 166);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1070, " Hey, How are you?? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1071, "li", 162);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1072, "div", 163);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1073, "img", 172);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1074, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1075, "span", 173);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1076, "Reply");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1077, " Jacob Ryan ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1078, "small", 125);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1079, "7 hours ago");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1080, "p", 166);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1081, " I am fine. You?? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1082, "li", 162);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1083, "div", 163);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1084, "img", 174);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1085, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1086, "span", 165);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1087, "File");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1088, " Sarah Smith ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1089, "small", 125);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1090, "6 hours ago");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1091, "p", 166);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1092, " hii John, I have upload doc related to task. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1093, "li", 167);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1094, "div", 163);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1095, "img", 175);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1096, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1097, "span", 169);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1098, "Task ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1099, " Jalpa Joshi ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1100, "small", 125);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1101, "5 hours ago ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1102, "p", 166);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1103, " Please do as specify. Let me know if you have any query. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1104, "div", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1105, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1106, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1107, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1108, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1109, "Todo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1110, " List");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1111, "ul", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1112, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1113, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1114, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1115, "more_vert");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1116, "ul", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1117, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1118, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1119, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1120, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1121, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1122, "Another action");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1123, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1124, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1125, "Something else here");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1126, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1127, "ul", 176);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1128, "li", 137);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1129, "div", 177);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1130, "label", 178);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1131, "input", 179);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1132, " Add salary details in system ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1133, "span", 180);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1134, "span", 181);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1135, "div", 182);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1136, "a", 183);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1137, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1138, "clear");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1139, "li", 137);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1140, "div", 177);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1141, "label", 178);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1142, "input", 179);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1143, " Announcement for holiday ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1144, "span", 180);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1145, "span", 181);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1146, "div", 182);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1147, "a", 183);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1148, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1149, "clear");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1150, "li", 137);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1151, "div", 177);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1152, "label", 178);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1153, "input", 179);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1154, " call bus driver ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1155, "span", 180);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1156, "span", 181);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1157, "div", 182);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1158, "a", 183);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1159, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1160, "clear");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1161, "li", 137);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1162, "div", 177);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1163, "label", 178);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1164, "input", 179);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1165, " Office picnic ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1166, "span", 180);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1167, "span", 181);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1168, "div", 182);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1169, "a", 183);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1170, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1171, "clear");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1172, "li", 137);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1173, "div", 177);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1174, "label", 178);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1175, "input", 179);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1176, " Add salary details in system ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1177, "span", 180);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1178, "span", 181);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1179, "div", 182);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1180, "a", 183);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1181, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1182, "clear");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1183, "li", 137);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1184, "div", 177);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1185, "label", 178);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1186, "input", 179);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1187, " Announcement for holiday ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1188, "span", 180);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1189, "span", 181);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1190, "div", 182);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1191, "a", 183);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1192, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1193, "clear");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1194, "li", 137);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1195, "div", 177);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1196, "label", 178);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1197, "input", 179);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1198, " call bus driver ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1199, "span", 180);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1200, "span", 181);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1201, "div", 182);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1202, "a", 183);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1203, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1204, "clear");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1205, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1206, "div", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1207, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1208, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1209, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1210, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1211, "Notice");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1212, " Board");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1213, "ul", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1214, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1215, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1216, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1217, "more_vert");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1218, "ul", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1219, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1220, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1221, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1222, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1223, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1224, "Another action");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1225, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1226, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1227, "Something else here");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1228, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1229, "div", 184);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1230, "div", 185);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1231, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1232, "img", 186);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1233, "div", 187);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1234, "h5", 188);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1235, "Airi Satou");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1236, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1237, "Lorem ipsum dolor sit amet, id quo eruditi eloquentiam.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1238, "small", 125);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1239, "7 hours ago");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1240, "div", 185);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1241, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1242, "img", 189);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1243, "div", 187);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1244, "h5", 190);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1245, "Sarah Smith");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1246, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1247, "Lorem ipsum dolor sit amet, id quo eruditi eloquentiam.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1248, "p", 191);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1249, "1 hour ago");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1250, "div", 185);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1251, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1252, "img", 192);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1253, "div", 187);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1254, "h5", 193);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1255, "Cara Stevens");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1256, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1257, "Lorem ipsum dolor sit amet, id quo eruditi eloquentiam.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1258, "div", 191);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1259, "Yesterday");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1260, "div", 194);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1261, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1262, "img", 195);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1263, "div", 187);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1264, "h5", 196);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1265, "Ashton Cox");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1266, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1267, "Lorem ipsum dolor sit amet, id quo eruditi eloquentiam.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1268, "div", 191);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1269, "Yesterday");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1270, "div", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1271, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1272, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1273, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1274, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1275, "Recent");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1276, " Activity");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1277, "ul", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1278, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1279, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1280, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1281, "more_vert");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1282, "ul", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1283, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1284, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1285, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1286, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1287, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1288, "Another action");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1289, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1290, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1291, "Something else here");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1292, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1293, "ul", 197);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1294, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1295, "div", 198);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1296, "img", 199);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1297, "div", 200);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1298, "div", 201);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1299, "h5", 202);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1300, "Lorem ipsum dolor sit amet, id quo eruditi.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1301, "div", 203);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1302, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1303, "5 minutes ago");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1304, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1305, "div", 198);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1306, "img", 204);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1307, "div", 200);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1308, "div", 201);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1309, "h5", 202);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1310, "Lorem ipsum dolor sit amet, id quo eruditi.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1311, "div", 203);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1312, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1313, "10 minutes ago");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1314, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1315, "div", 198);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1316, "img", 205);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1317, "div", 200);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1318, "div", 201);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1319, "h5", 202);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1320, "Lorem ipsum dolor sit amet, id quo eruditi.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1321, "div", 203);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1322, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1323, "20 minutes ago");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1324, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1325, "div", 198);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1326, "img", 189);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1327, "div", 200);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1328, "div", 201);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1329, "h5", 202);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1330, "Lorem ipsum dolor sit amet, id quo eruditi.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1331, "div", 203);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1332, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1333, "35 minutes ago");
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
    } }, directives: [ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_1__["PerfectScrollbarDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_3__["MatInput"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dpZGdldC9kYXRhLXdpZGdldC9kYXRhLXdpZGdldC5jb21wb25lbnQuc2FzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](DataWidgetComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-data-widget',
                templateUrl: './data-widget.component.html',
                styleUrls: ['./data-widget.component.sass']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "kXT5":
/*!*****************************************!*\
  !*** ./src/app/widget/widget.module.ts ***!
  \*****************************************/
/*! exports provided: WidgetModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetModule", function() { return WidgetModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "Kdsb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _widget_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./widget-routing.module */ "pZWl");
/* harmony import */ var _chart_widget_chart_widget_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./chart-widget/chart-widget.component */ "8CUj");
/* harmony import */ var _data_widget_data_widget_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./data-widget/data-widget.component */ "d0E2");
/* harmony import */ var angular_morris_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular-morris-js */ "1nQK");
/* harmony import */ var ng_apexcharts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-apexcharts */ "CV0D");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ "qFsG");












class WidgetModule {
}
WidgetModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({ type: WidgetModule });
WidgetModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({ factory: function WidgetModule_Factory(t) { return new (t || WidgetModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _widget_routing_module__WEBPACK_IMPORTED_MODULE_4__["WidgetRoutingModule"],
            angular_morris_js__WEBPACK_IMPORTED_MODULE_7__["MorrisJsModule"],
            ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_2__["PerfectScrollbarModule"],
            ng_apexcharts__WEBPACK_IMPORTED_MODULE_8__["NgApexchartsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormFieldModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](WidgetModule, { declarations: [_chart_widget_chart_widget_component__WEBPACK_IMPORTED_MODULE_5__["ChartWidgetComponent"], _data_widget_data_widget_component__WEBPACK_IMPORTED_MODULE_6__["DataWidgetComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _widget_routing_module__WEBPACK_IMPORTED_MODULE_4__["WidgetRoutingModule"],
        angular_morris_js__WEBPACK_IMPORTED_MODULE_7__["MorrisJsModule"],
        ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_2__["PerfectScrollbarModule"],
        ng_apexcharts__WEBPACK_IMPORTED_MODULE_8__["NgApexchartsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormFieldModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](WidgetModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_chart_widget_chart_widget_component__WEBPACK_IMPORTED_MODULE_5__["ChartWidgetComponent"], _data_widget_data_widget_component__WEBPACK_IMPORTED_MODULE_6__["DataWidgetComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _widget_routing_module__WEBPACK_IMPORTED_MODULE_4__["WidgetRoutingModule"],
                    angular_morris_js__WEBPACK_IMPORTED_MODULE_7__["MorrisJsModule"],
                    ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_2__["PerfectScrollbarModule"],
                    ng_apexcharts__WEBPACK_IMPORTED_MODULE_8__["NgApexchartsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormFieldModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "pZWl":
/*!*************************************************!*\
  !*** ./src/app/widget/widget-routing.module.ts ***!
  \*************************************************/
/*! exports provided: WidgetRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetRoutingModule", function() { return WidgetRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _chart_widget_chart_widget_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chart-widget/chart-widget.component */ "8CUj");
/* harmony import */ var _data_widget_data_widget_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data-widget/data-widget.component */ "d0E2");






const routes = [
    {
        path: '',
        redirectTo: 'chart-widget',
        pathMatch: 'full'
    },
    {
        path: 'chart-widget',
        component: _chart_widget_chart_widget_component__WEBPACK_IMPORTED_MODULE_2__["ChartWidgetComponent"]
    },
    {
        path: 'data-widget',
        component: _data_widget_data_widget_component__WEBPACK_IMPORTED_MODULE_3__["DataWidgetComponent"]
    }
];
class WidgetRoutingModule {
}
WidgetRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({ type: WidgetRoutingModule });
WidgetRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({ factory: function WidgetRoutingModule_Factory(t) { return new (t || WidgetRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](WidgetRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](WidgetRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=widget-widget-module-es2015.js.map