$gwx_XC_15 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
    return function(path, global) {
        if (typeof global === 'undefined') {
            if (typeof __GWX_GLOBAL__ === 'undefined') global = {};
            else global = __GWX_GLOBAL__;
        }
        if (typeof __WXML_GLOBAL__ === 'undefined') {
            __WXML_GLOBAL__ = {};
        }
        __WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
        var e_ = {}
        if (typeof(global.entrys) === 'undefined') global.entrys = {};
        e_ = global.entrys;
        var d_ = {}
        if (typeof(global.defines) === 'undefined') global.defines = {};
        d_ = global.defines;
        var f_ = {}
        if (typeof(global.modules) === 'undefined') global.modules = {};
        f_ = global.modules || {};
        var p_ = {}
        __WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
        __WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
        __WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
        var z = __WXML_GLOBAL__.ops_set.$gwx_XC_15 || [];

        function gz$gwx_XC_15_1() {
            if (__WXML_GLOBAL__.ops_cached.$gwx_XC_15_1) return __WXML_GLOBAL__.ops_cached.$gwx_XC_15_1
            __WXML_GLOBAL__.ops_cached.$gwx_XC_15_1 = [];
            (function(z) {
                var a = 11;

                function Z(ops) {
                    z.push(ops)
                }
                Z([3, 'page'])
                Z([3, 'header-area'])
                Z([a, [3, 'padding-top:calc('],
                    [
                        [7],
                        [3, 'statusBarHeight']
                    ],
                    [3, 'px + 6px);']
                ])
                Z([3, 'header-hint'])
                Z([3, 'header-hint-text'])
                Z([3, 'HEATMAP'])
                Z([3, 'month-selector'])
                Z([3, 'onPrevMonth'])
                Z([3, 'month-arrow'])
                Z([3, 'arrow-left'])
                Z([3, 'month-text'])
                Z([a, [
                        [7],
                        [3, 'currentYear']
                    ],
                    [3, '年'],
                    [
                        [7],
                        [3, 'currentMonth']
                    ],
                    [3, '月']
                ])
                Z([3, 'onNextMonth'])
                Z([a, [3, 'month-arrow '],
                    [
                        [2, '?:'],
                        [
                            [7],
                            [3, 'isCurrentMonth']
                        ],
                        [1, 'disabled'],
                        [1, '']
                    ]
                ])
                Z([3, 'arrow-right'])
                Z([3, 'stat-pills-row'])
                Z([3, 'stat-pill'])
                Z([3, 'stat-pill-text'])
                Z([a, [3, '连续'],
                    [
                        [7],
                        [3, 'continuousDays']
                    ],
                    [3, '天']
                ])
                Z([3, 'stat-pill stat-pill-green'])
                Z(z[17])
                Z([a, [3, '本月'],
                    [
                        [7],
                        [3, 'monthWriteDays']
                    ],
                    [3, '篇']
                ])
                Z([3, 'stat-pill stat-pill-blue'])
                Z(z[17])
                Z([a, [3, '完成率'],
                    [
                        [7],
                        [3, 'completionRate']
                    ],
                    [3, '%']
                ])
                Z([3, 'heatmap-legend-mini'])
                Z([3, 'legend-item'])
                Z([3, 'legend-cell level-1'])
                Z([3, 'legend-text'])
                Z([3, '少'])
                Z(z[26])
                Z([3, 'legend-cell level-2'])
                Z(z[28])
                Z([3, '中'])
                Z(z[26])
                Z([3, 'legend-cell level-3'])
                Z(z[28])
                Z([3, '多'])
                Z([3, 'card heatmap-card'])
                Z([3, 'weekday-row'])
                Z([
                    [7],
                    [3, 'weekdays']
                ])
                Z([3, '*this'])
                Z([3, 'weekday-label'])
                Z([a, [
                    [7],
                    [3, 'item']
                ]])
                Z([3, 'heatmap-grid'])
                Z([
                    [7],
                    [3, 'startBlank']
                ])
                Z(z[41])
                Z([3, 'heatmap-cell empty'])
                Z([
                    [7],
                    [3, 'heatmapDays']
                ])
                Z([3, 'date'])
                Z([3, 'onDayTap'])
                Z([a, [3, 'heatmap-cell '],
                    [
                        [6],
                        [
                            [7],
                            [3, 'item']
                        ],
                        [3, 'level']
                    ],
                    [3, ' '],
                    [
                        [2, '?:'],
                        [
                            [6],
                            [
                                [7],
                                [3, 'item']
                            ],
                            [3, 'isToday']
                        ],
                        [1, 'today'],
                        [1, '']
                    ],
                    [3, ' '],
                    [
                        [2, '?:'],
                        [
                            [6],
                            [
                                [7],
                                [3, 'item']
                            ],
                            [3, 'isFuture']
                        ],
                        [1, 'future'],
                        [1, '']
                    ]
                ])
                Z([
                    [6],
                    [
                        [7],
                        [3, 'item']
                    ],
                    [3, 'date']
                ])
                Z([3, 'cell-hover'])
                Z([3, '80'])
                Z([
                    [6],
                    [
                        [7],
                        [3, 'item']
                    ],
                    [3, 'isToday']
                ])
                Z([3, 'cell-date today-date-num'])
                Z([a, [
                    [6],
                    [
                        [7],
                        [3, 'item']
                    ],
                    [3, 'day']
                ]])
                Z([3, 'cell-date today-date-label'])
                Z([3, '今天'])
                Z([3, 'cell-date'])
                Z([a, z[57][1]])
                Z([
                    [2, '&&'],
                    [
                        [2, '&&'],
                        [
                            [6],
                            [
                                [7],
                                [3, 'item']
                            ],
                            [3, 'hasDiary']
                        ],
                        [
                            [2, '!'],
                            [
                                [6],
                                [
                                    [7],
                                    [3, 'item']
                                ],
                                [3, 'isFuture']
                            ]
                        ]
                    ],
                    [
                        [2, '!'],
                        [
                            [6],
                            [
                                [7],
                                [3, 'item']
                            ],
                            [3, 'isToday']
                        ]
                    ]
                ])
                Z([3, 'cell-dot'])
                Z([3, 'card time-card'])
                Z([3, 'card-title'])
                Z([3, '写作时段分布'])
                Z([3, 'time-chart'])
                Z([
                    [7],
                    [3, 'timeSlots']
                ])
                Z([3, 'label'])
                Z([3, 'time-row'])
                Z([3, 'time-label'])
                Z([a, [
                    [6],
                    [
                        [7],
                        [3, 'item']
                    ],
                    [3, 'label']
                ]])
                Z([3, 'time-bar-wrap'])
                Z([3, 'time-bar'])
                Z([a, [3, 'width:'],
                    [
                        [6],
                        [
                            [7],
                            [3, 'item']
                        ],
                        [3, 'percent']
                    ],
                    [3, '%']
                ])
                Z([3, 'time-count'])
                Z([a, [
                    [6],
                    [
                        [7],
                        [3, 'item']
                    ],
                    [3, 'count']
                ], z[21][3]])
                Z([3, 'onCloseDayModal'])
                Z([a, [3, 'day-modal-mask '],
                    [
                        [2, '?:'],
                        [
                            [7],
                            [3, 'showDayModal']
                        ],
                        [1, 'show'],
                        [1, '']
                    ]
                ])
                Z([3, 'preventBubble'])
                Z([3, 'day-modal'])
                Z([3, 'day-modal-header'])
                Z([3, 'day-modal-date'])
                Z([a, [
                    [7],
                    [3, 'selectedDateDisplay']
                ]])
                Z(z[78])
                Z([3, 'day-modal-close'])
                Z([3, 'close-line close-line-1'])
                Z([3, 'close-line close-line-2'])
                Z([3, 'day-modal-body'])
                Z([
                    [7],
                    [3, 'selectedDayData']
                ])
                Z([3, 'day-modal-info'])
                Z([3, 'dmi-row'])
                Z([3, 'dmi-label'])
                Z([3, '字数'])
                Z([3, 'dmi-value'])
                Z([a, [
                        [6],
                        [
                            [7],
                            [3, 'selectedDayData']
                        ],
                        [3, 'words']
                    ],
                    [3, '字']
                ])
                Z(z[92])
                Z(z[93])
                Z([3, '照片'])
                Z(z[95])
                Z([a, [
                        [6],
                        [
                            [7],
                            [3, 'selectedDayData']
                        ],
                        [3, 'images']
                    ],
                    [3, '张']
                ])
                Z([
                    [6],
                    [
                        [7],
                        [3, 'selectedDayData']
                    ],
                    [3, 'content']
                ])
                Z(z[92])
                Z(z[93])
                Z([3, '摘要'])
                Z([3, 'dmi-value dmi-preview'])
                Z([a, [
                    [6],
                    [
                        [7],
                        [3, 'selectedDayData']
                    ],
                    [3, 'content']
                ]])
                Z([3, 'day-modal-empty'])
                Z([3, 'day-modal-empty-text'])
                Z([3, '这天没有写日记'])
                Z(z[90])
                Z([3, 'onGoToDiary'])
                Z([3, 'day-modal-action'])
                Z([3, '查看日记'])
                Z([3, 'bottom-safe'])
            })(__WXML_GLOBAL__.ops_cached.$gwx_XC_15_1);
            return __WXML_GLOBAL__.ops_cached.$gwx_XC_15_1
        }
        __WXML_GLOBAL__.ops_set.$gwx_XC_15 = z;
        __WXML_GLOBAL__.ops_init.$gwx_XC_15 = true;
        var x = ['./pages/holiday/holiday.wxml'];
        d_[x[0]] = {}
        var m0 = function(e, s, r, gg) {
            var z = gz$gwx_XC_15_1()
            var oZFB = _n('view')
            _rz(z, oZFB, 'class', 0, e, s, gg)
            var f1FB = _mz(z, 'view', ['class', 1, 'style', 1], [], e, s, gg)
            var c2FB = _n('view')
            _rz(z, c2FB, 'class', 3, e, s, gg)
            var h3FB = _n('text')
            _rz(z, h3FB, 'class', 4, e, s, gg)
            var o4FB = _oz(z, 5, e, s, gg)
            _(h3FB, o4FB)
            _(c2FB, h3FB)
            _(f1FB, c2FB)
            var c5FB = _n('view')
            _rz(z, c5FB, 'class', 6, e, s, gg)
            var o6FB = _mz(z, 'view', ['bindtap', 7, 'class', 1], [], e, s, gg)
            var l7FB = _n('view')
            _rz(z, l7FB, 'class', 9, e, s, gg)
            _(o6FB, l7FB)
            _(c5FB, o6FB)
            var a8FB = _n('text')
            _rz(z, a8FB, 'class', 10, e, s, gg)
            var t9FB = _oz(z, 11, e, s, gg)
            _(a8FB, t9FB)
            _(c5FB, a8FB)
            var e0FB = _mz(z, 'view', ['bindtap', 12, 'class', 1], [], e, s, gg)
            var bAGB = _n('view')
            _rz(z, bAGB, 'class', 14, e, s, gg)
            _(e0FB, bAGB)
            _(c5FB, e0FB)
            _(f1FB, c5FB)
            var oBGB = _n('view')
            _rz(z, oBGB, 'class', 15, e, s, gg)
            var xCGB = _n('view')
            _rz(z, xCGB, 'class', 16, e, s, gg)
            var oDGB = _n('text')
            _rz(z, oDGB, 'class', 17, e, s, gg)
            var fEGB = _oz(z, 18, e, s, gg)
            _(oDGB, fEGB)
            _(xCGB, oDGB)
            _(oBGB, xCGB)
            var cFGB = _n('view')
            _rz(z, cFGB, 'class', 19, e, s, gg)
            var hGGB = _n('text')
            _rz(z, hGGB, 'class', 20, e, s, gg)
            var oHGB = _oz(z, 21, e, s, gg)
            _(hGGB, oHGB)
            _(cFGB, hGGB)
            _(oBGB, cFGB)
            var cIGB = _n('view')
            _rz(z, cIGB, 'class', 22, e, s, gg)
            var oJGB = _n('text')
            _rz(z, oJGB, 'class', 23, e, s, gg)
            var lKGB = _oz(z, 24, e, s, gg)
            _(oJGB, lKGB)
            _(cIGB, oJGB)
            _(oBGB, cIGB)
            var aLGB = _n('view')
            _rz(z, aLGB, 'class', 25, e, s, gg)
            var tMGB = _n('view')
            _rz(z, tMGB, 'class', 26, e, s, gg)
            var eNGB = _n('view')
            _rz(z, eNGB, 'class', 27, e, s, gg)
            _(tMGB, eNGB)
            var bOGB = _n('text')
            _rz(z, bOGB, 'class', 28, e, s, gg)
            var oPGB = _oz(z, 29, e, s, gg)
            _(bOGB, oPGB)
            _(tMGB, bOGB)
            _(aLGB, tMGB)
            var xQGB = _n('view')
            _rz(z, xQGB, 'class', 30, e, s, gg)
            var oRGB = _n('view')
            _rz(z, oRGB, 'class', 31, e, s, gg)
            _(xQGB, oRGB)
            var fSGB = _n('text')
            _rz(z, fSGB, 'class', 32, e, s, gg)
            var cTGB = _oz(z, 33, e, s, gg)
            _(fSGB, cTGB)
            _(xQGB, fSGB)
            _(aLGB, xQGB)
            var hUGB = _n('view')
            _rz(z, hUGB, 'class', 34, e, s, gg)
            var oVGB = _n('view')
            _rz(z, oVGB, 'class', 35, e, s, gg)
            _(hUGB, oVGB)
            var cWGB = _n('text')
            _rz(z, cWGB, 'class', 36, e, s, gg)
            var oXGB = _oz(z, 37, e, s, gg)
            _(cWGB, oXGB)
            _(hUGB, cWGB)
            _(aLGB, hUGB)
            _(oBGB, aLGB)
            _(f1FB, oBGB)
            _(oZFB, f1FB)
            var lYGB = _n('view')
            _rz(z, lYGB, 'class', 38, e, s, gg)
            var aZGB = _n('view')
            _rz(z, aZGB, 'class', 39, e, s, gg)
            var t1GB = _v()
            _(aZGB, t1GB)
            var e2GB = function(o4GB, b3GB, x5GB, gg) {
                var f7GB = _n('text')
                _rz(z, f7GB, 'class', 42, o4GB, b3GB, gg)
                var c8GB = _oz(z, 43, o4GB, b3GB, gg)
                _(f7GB, c8GB)
                _(x5GB, f7GB)
                return x5GB
            }
            t1GB.wxXCkey = 2
            _2z(z, 40, e2GB, e, s, gg, t1GB, 'item', 'index', '*this')
            _(lYGB, aZGB)
            var h9GB = _n('view')
            _rz(z, h9GB, 'class', 44, e, s, gg)
            var o0GB = _v()
            _(h9GB, o0GB)
            var cAHB = function(lCHB, oBHB, aDHB, gg) {
                var eFHB = _n('view')
                _rz(z, eFHB, 'class', 47, lCHB, oBHB, gg)
                _(aDHB, eFHB)
                return aDHB
            }
            o0GB.wxXCkey = 2
            _2z(z, 45, cAHB, e, s, gg, o0GB, 'item', 'index', '*this')
            var bGHB = _v()
            _(h9GB, bGHB)
            var oHHB = function(oJHB, xIHB, fKHB, gg) {
                var hMHB = _mz(z, 'view', ['bindtap', 50, 'class', 1, 'data-date', 2, 'hoverClass', 3, 'hoverStayTime', 4], [], oJHB, xIHB, gg)
                var oNHB = _v()
                _(hMHB, oNHB)
                if (_oz(z, 55, oJHB, xIHB, gg)) {
                    oNHB.wxVkey = 1
                    var oPHB = _n('text')
                    _rz(z, oPHB, 'class', 56, oJHB, xIHB, gg)
                    var lQHB = _oz(z, 57, oJHB, xIHB, gg)
                    _(oPHB, lQHB)
                    _(oNHB, oPHB)
                    var aRHB = _n('text')
                    _rz(z, aRHB, 'class', 58, oJHB, xIHB, gg)
                    var tSHB = _oz(z, 59, oJHB, xIHB, gg)
                    _(aRHB, tSHB)
                    _(oNHB, aRHB)
                } else {
                    oNHB.wxVkey = 2
                    var eTHB = _n('text')
                    _rz(z, eTHB, 'class', 60, oJHB, xIHB, gg)
                    var bUHB = _oz(z, 61, oJHB, xIHB, gg)
                    _(eTHB, bUHB)
                    _(oNHB, eTHB)
                }
                var cOHB = _v()
                _(hMHB, cOHB)
                if (_oz(z, 62, oJHB, xIHB, gg)) {
                    cOHB.wxVkey = 1
                    var oVHB = _n('view')
                    _rz(z, oVHB, 'class', 63, oJHB, xIHB, gg)
                    _(cOHB, oVHB)
                }
                oNHB.wxXCkey = 1
                cOHB.wxXCkey = 1
                _(fKHB, hMHB)
                return fKHB
            }
            bGHB.wxXCkey = 2
            _2z(z, 48, oHHB, e, s, gg, bGHB, 'item', 'index', 'date')
            _(lYGB, h9GB)
            _(oZFB, lYGB)
            var xWHB = _n('view')
            _rz(z, xWHB, 'class', 64, e, s, gg)
            var oXHB = _n('text')
            _rz(z, oXHB, 'class', 65, e, s, gg)
            var fYHB = _oz(z, 66, e, s, gg)
            _(oXHB, fYHB)
            _(xWHB, oXHB)
            var cZHB = _n('view')
            _rz(z, cZHB, 'class', 67, e, s, gg)
            var h1HB = _v()
            _(cZHB, h1HB)
            var o2HB = function(o4HB, c3HB, l5HB, gg) {
                var t7HB = _n('view')
                _rz(z, t7HB, 'class', 70, o4HB, c3HB, gg)
                var e8HB = _n('text')
                _rz(z, e8HB, 'class', 71, o4HB, c3HB, gg)
                var b9HB = _oz(z, 72, o4HB, c3HB, gg)
                _(e8HB, b9HB)
                _(t7HB, e8HB)
                var o0HB = _n('view')
                _rz(z, o0HB, 'class', 73, o4HB, c3HB, gg)
                var xAIB = _mz(z, 'view', ['class', 74, 'style', 1], [], o4HB, c3HB, gg)
                _(o0HB, xAIB)
                _(t7HB, o0HB)
                var oBIB = _n('text')
                _rz(z, oBIB, 'class', 76, o4HB, c3HB, gg)
                var fCIB = _oz(z, 77, o4HB, c3HB, gg)
                _(oBIB, fCIB)
                _(t7HB, oBIB)
                _(l5HB, t7HB)
                return l5HB
            }
            h1HB.wxXCkey = 2
            _2z(z, 68, o2HB, e, s, gg, h1HB, 'item', 'index', 'label')
            _(xWHB, cZHB)
            _(oZFB, xWHB)
            var cDIB = _mz(z, 'view', ['bindtap', 78, 'class', 1], [], e, s, gg)
            var hEIB = _mz(z, 'view', ['catchtap', 80, 'class', 1], [], e, s, gg)
            var cGIB = _n('view')
            _rz(z, cGIB, 'class', 82, e, s, gg)
            var oHIB = _n('text')
            _rz(z, oHIB, 'class', 83, e, s, gg)
            var lIIB = _oz(z, 84, e, s, gg)
            _(oHIB, lIIB)
            _(cGIB, oHIB)
            var aJIB = _mz(z, 'view', ['bindtap', 85, 'class', 1], [], e, s, gg)
            var tKIB = _n('view')
            _rz(z, tKIB, 'class', 87, e, s, gg)
            _(aJIB, tKIB)
            var eLIB = _n('view')
            _rz(z, eLIB, 'class', 88, e, s, gg)
            _(aJIB, eLIB)
            _(cGIB, aJIB)
            _(hEIB, cGIB)
            var bMIB = _n('view')
            _rz(z, bMIB, 'class', 89, e, s, gg)
            var oNIB = _v()
            _(bMIB, oNIB)
            if (_oz(z, 90, e, s, gg)) {
                oNIB.wxVkey = 1
                var xOIB = _n('view')
                _rz(z, xOIB, 'class', 91, e, s, gg)
                var fQIB = _n('view')
                _rz(z, fQIB, 'class', 92, e, s, gg)
                var cRIB = _n('text')
                _rz(z, cRIB, 'class', 93, e, s, gg)
                var hSIB = _oz(z, 94, e, s, gg)
                _(cRIB, hSIB)
                _(fQIB, cRIB)
                var oTIB = _n('text')
                _rz(z, oTIB, 'class', 95, e, s, gg)
                var cUIB = _oz(z, 96, e, s, gg)
                _(oTIB, cUIB)
                _(fQIB, oTIB)
                _(xOIB, fQIB)
                var oVIB = _n('view')
                _rz(z, oVIB, 'class', 97, e, s, gg)
                var lWIB = _n('text')
                _rz(z, lWIB, 'class', 98, e, s, gg)
                var aXIB = _oz(z, 99, e, s, gg)
                _(lWIB, aXIB)
                _(oVIB, lWIB)
                var tYIB = _n('text')
                _rz(z, tYIB, 'class', 100, e, s, gg)
                var eZIB = _oz(z, 101, e, s, gg)
                _(tYIB, eZIB)
                _(oVIB, tYIB)
                _(xOIB, oVIB)
                var oPIB = _v()
                _(xOIB, oPIB)
                if (_oz(z, 102, e, s, gg)) {
                    oPIB.wxVkey = 1
                    var b1IB = _n('view')
                    _rz(z, b1IB, 'class', 103, e, s, gg)
                    var o2IB = _n('text')
                    _rz(z, o2IB, 'class', 104, e, s, gg)
                    var x3IB = _oz(z, 105, e, s, gg)
                    _(o2IB, x3IB)
                    _(b1IB, o2IB)
                    var o4IB = _n('text')
                    _rz(z, o4IB, 'class', 106, e, s, gg)
                    var f5IB = _oz(z, 107, e, s, gg)
                    _(o4IB, f5IB)
                    _(b1IB, o4IB)
                    _(oPIB, b1IB)
                }
                oPIB.wxXCkey = 1
                _(oNIB, xOIB)
            } else {
                oNIB.wxVkey = 2
                var c6IB = _n('view')
                _rz(z, c6IB, 'class', 108, e, s, gg)
                var h7IB = _n('text')
                _rz(z, h7IB, 'class', 109, e, s, gg)
                var o8IB = _oz(z, 110, e, s, gg)
                _(h7IB, o8IB)
                _(c6IB, h7IB)
                _(oNIB, c6IB)
            }
            oNIB.wxXCkey = 1
            _(hEIB, bMIB)
            var oFIB = _v()
            _(hEIB, oFIB)
            if (_oz(z, 111, e, s, gg)) {
                oFIB.wxVkey = 1
                var c9IB = _mz(z, 'view', ['bindtap', 112, 'class', 1], [], e, s, gg)
                var o0IB = _n('text')
                var lAJB = _oz(z, 114, e, s, gg)
                _(o0IB, lAJB)
                _(c9IB, o0IB)
                _(oFIB, c9IB)
            }
            oFIB.wxXCkey = 1
            _(cDIB, hEIB)
            _(oZFB, cDIB)
            var aBJB = _n('view')
            _rz(z, aBJB, 'class', 115, e, s, gg)
            _(oZFB, aBJB)
            _(r, oZFB)
            return r
        }
        e_[x[0]] = {
            f: m0,
            j: [],
            i: [],
            ti: [],
            ic: []
        }
        if (path && e_[path]) {
            outerGlobal.__wxml_comp_version__ = 0.02
            return function(env, dd, global) {
                $gwxc = 0;
                var root = {
                    "tag": "wx-page"
                };
                root.children = [];
                g = "$gwx_XC_15";
                var main = e_[path].f
                if (typeof global === "undefined") global = {};
                global.f = $gdc(f_[path], "", 1);
                if (typeof(outerGlobal.__webview_engine_version__) != 'undefined' && outerGlobal.__webview_engine_version__ + 1e-6 >= 0.02 + 1e-6 && outerGlobal.__mergeData__) {
                    env = outerGlobal.__mergeData__(env, dd);
                }
                try {
                    main(env, {}, root, global);
                    _tsd(root)
                    if (typeof(outerGlobal.__webview_engine_version__) == 'undefined' || outerGlobal.__webview_engine_version__ + 1e-6 < 0.01 + 1e-6) {
                        return _ev(root);
                    }
                } catch (err) {
                    console.log(err)
                };
                g = "";
                return root;
            }
        }
    }
}(__g.a, __g.b, __g.c, __g.d, __g.e, __g.f, __g.g, __g.h, __g.i, __g.j, __g.k, __g.l, __g.m, __g.n, __g.o, __g.p, __g.q, __g.r, __g.s, __g.t, __g.u, __g.v, __g.w, __g.x, __g.y, __g.z, __g.A, __g.B, __g.C, __g.D, __g.E, __g.F, __g.G, __g.H, __g.I, __g.J, __g.K, __g.L, __g.M, __g.N, __g.O, __g.P, __g.Q, __g.R, __g.S, __g.T, __g.U, __g.V, __g.W, __g.X, __g.Y, __g.Z, __g.aa);
if (__vd_version_info__.delayedGwx || false) $gwx_XC_15();
if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/holiday/holiday.wxml'] = [$gwx_XC_15, './pages/holiday/holiday.wxml'];
else __wxAppCode__['pages/holiday/holiday.wxml'] = $gwx_XC_15('./pages/holiday/holiday.wxml');

var noCss = typeof __vd_version_info__ !== 'undefined' && __vd_version_info__.noCss === true;
if (!noCss) {
    __wxAppCode__['pages/holiday/holiday.wxss'] = setCssToHead(["body{background:#f5f6f8}\n.", [1], "page{min-height:100vh;padding-bottom:calc(", [0, 60], " + env(safe-area-inset-bottom))}\n.", [1], "header-area{background:#fafbfc;padding:0 ", [0, 32], " ", [0, 24], "}\n.", [1], "header-hint{margin-bottom:", [0, 2], ";margin-left:", [0, 4], "}\n.", [1], "header-hint-text{color:#d0d0dc;font-size:", [0, 20], ";font-weight:500;letter-spacing:", [0, 4], "}\n.", [1], "month-selector{gap:", [0, 28], ";-webkit-justify-content:flex-start;justify-content:flex-start;margin-top:", [0, 8], "}\n.", [1], "month-arrow,.", [1], "month-selector{-webkit-align-items:center;align-items:center;display:-webkit-flex;display:flex}\n.", [1], "month-arrow{background:#fdf6f0;border:", [0, .5], " solid #f0e6d8;border-radius:", [0, 14], ";height:", [0, 52], ";-webkit-justify-content:center;justify-content:center;transition:all .2s ease;width:", [0, 52], "}\n.", [1], "month-arrow:active{background:#f9ede0;-webkit-transform:scale(.92);transform:scale(.92)}\n.", [1], "month-arrow.", [1], "disabled{background:#f5f5f5;border-color:#eee;opacity:.25;pointer-events:none}\n.", [1], "arrow-left{border-left:", [0, 2.5], " solid #c99b6a;margin-left:", [0, 3], ";-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}\n.", [1], "arrow-left,.", [1], "arrow-right{border-top:", [0, 2.5], " solid #c99b6a;height:", [0, 14], ";width:", [0, 14], "}\n.", [1], "arrow-right{border-right:", [0, 2.5], " solid #c99b6a;margin-right:", [0, 3], ";-webkit-transform:rotate(45deg);transform:rotate(45deg)}\n.", [1], "month-text{color:#222;font-size:", [0, 40], ";font-weight:700;letter-spacing:", [0, 2], "}\n.", [1], "stat-pills-row{-webkit-overflow-scrolling:touch;-ms-overflow-style:none;-webkit-align-items:center;align-items:center;display:-webkit-flex;display:flex;gap:", [0, 12], ";margin-top:", [0, 20], ";overflow-x:auto;scrollbar-width:none}\n.", [1], "stat-pills-row::-webkit-scrollbar{display:none}\n.", [1], "stat-pill{-webkit-align-items:center;align-items:center;background:#fff8f0;border:", [0, .5], " solid #f0dcc8;border-radius:", [0, 20], ";display:-webkit-flex;display:flex;-webkit-flex-shrink:0;flex-shrink:0;padding:", [0, 10], " ", [0, 20], "}\n.", [1], "stat-pill-green{background:#edf5ef;border-color:#c8ddd0}\n.", [1], "stat-pill-blue{background:#f5f5ff;border-color:#dddde8}\n.", [1], "stat-pill-purple{background:#f7f0ff;border-color:#ddd0ee}\n.", [1], "stat-pill-text{color:#b87a45;font-size:", [0, 22], ";font-weight:500;white-space:nowrap}\n.", [1], "stat-pill-green .", [1], "stat-pill-text{color:#4a7a59}\n.", [1], "stat-pill-blue .", [1], "stat-pill-text{color:#6667aa}\n.", [1], "stat-pill-purple .", [1], "stat-pill-text{color:#7a55aa}\n.", [1], "card{background:#fff;border-radius:", [0, 24], ";box-shadow:0 ", [0, 2], " ", [0, 16], " rgba(0,0,0,.04);margin:", [0, 20], " ", [0, 24], ";padding:", [0, 32], " ", [0, 28], " ", [0, 28], "}\n.", [1], "card-title{color:#333;display:block;font-size:", [0, 30], ";font-weight:600;margin-bottom:", [0, 24], "}\n.", [1], "weekday-row{display:grid;grid-template-columns:repeat(7,1fr);margin-bottom:", [0, 16], "}\n.", [1], "weekday-label{color:#bbbcbf;font-size:", [0, 22], ";line-height:", [0, 44], ";text-align:center}\n.", [1], "heatmap-grid{display:grid;gap:", [0, 10], ";grid-template-columns:repeat(7,1fr)}\n.", [1], "heatmap-cell{-webkit-align-items:center;align-items:center;background:#fafbfc;border:", [0, .5], " solid rgba(0,0,0,.04);border-radius:", [0, 16], ";display:-webkit-flex;display:flex;-webkit-flex-direction:column;flex-direction:column;-webkit-justify-content:center;justify-content:center;min-height:", [0, 80], ";transition:all .18s ease}\n.", [1], "heatmap-cell.", [1], "empty{background:transparent;border:none;min-height:", [0, 40], "}\n.", [1], "heatmap-cell.", [1], "future{background:transparent;border:", [0, .5], " dashed #e8e8ec}\n.", [1], "heatmap-cell.", [1], "future .", [1], "cell-date{color:#ddd}\n.", [1], "heatmap-cell.", [1], "level-1{background:#fce4cd;border-color:hsla(28,87%,80%,.35)}\n.", [1], "heatmap-cell.", [1], "level-2{background:#f8c89e;border-color:hsla(26,81%,68%,.4)}\n.", [1], "heatmap-cell.", [1], "level-3{background:#f0a56c;border-color:rgba(220,140,80,.45)}\n.", [1], "heatmap-cell.", [1], "today{background:#f0a56c;border:", [0, 3], " solid #e09555;box-shadow:none}\n.", [1], "heatmap-cell.", [1], "today .", [1], "cell-date,.", [1], "heatmap-cell.", [1], "today .", [1], "today-date-num{color:#fff;font-weight:700}\n.", [1], "today-date-num{font-size:", [0, 26], ";line-height:1.15}\n.", [1], "today-date-label{font-size:", [0, 16], ";line-height:1;opacity:.85}\n.", [1], "cell-date{color:#888;font-size:", [0, 26], ";line-height:1.2}\n.", [1], "heatmap-cell.", [1], "level-1 .", [1], "cell-date,.", [1], "heatmap-cell.", [1], "level-2 .", [1], "cell-date,.", [1], "heatmap-cell.", [1], "level-3 .", [1], "cell-date{color:#fff}\n.", [1], "cell-dot{background:hsla(0,0%,100%,.9);border-radius:50%;height:", [0, 7], ";margin-top:", [0, 3], ";width:", [0, 7], "}\n.", [1], "cell-hover{background:#fff0e0!important;-webkit-transform:scale(.88)!important;transform:scale(.88)!important}\n.", [1], "heatmap-legend-mini{-webkit-flex-shrink:0;flex-shrink:0;gap:", [0, 8], ";margin-left:auto;padding-left:", [0, 12], "}\n.", [1], "heatmap-legend-mini,.", [1], "legend-item{-webkit-align-items:center;align-items:center;display:-webkit-flex;display:flex}\n.", [1], "legend-item{-webkit-flex-direction:column;flex-direction:column;gap:", [0, 2], "}\n.", [1], "legend-text{color:#999;font-size:", [0, 18], "}\n.", [1], "legend-cell{border-radius:", [0, 6], ";-webkit-flex-shrink:0;flex-shrink:0;height:", [0, 22], ";width:", [0, 22], "}\n.", [1], "legend-cell.", [1], "level-1{background:#fce4cd}\n.", [1], "legend-cell.", [1], "level-2{background:#f8c89e}\n.", [1], "legend-cell.", [1], "level-3{background:#f0a56c}\n.", [1], "time-chart{-webkit-flex-direction:column;flex-direction:column;gap:", [0, 18], "}\n.", [1], "time-chart,.", [1], "time-row{display:-webkit-flex;display:flex}\n.", [1], "time-row{-webkit-align-items:center;align-items:center;gap:", [0, 16], "}\n.", [1], "time-label{color:#777;-webkit-flex-shrink:0;flex-shrink:0;font-size:", [0, 24], ";width:", [0, 76], "}\n.", [1], "time-bar-wrap{background:#f5f5f0;border-radius:", [0, 8], ";-webkit-flex:1;flex:1;height:", [0, 16], ";overflow:hidden}\n.", [1], "time-bar{background:linear-gradient(90deg,#ffb870,#ff7e33);border-radius:", [0, 8], ";height:100%;transition:width .5s ease}\n.", [1], "time-count{color:#aaa;-webkit-flex-shrink:0;flex-shrink:0;font-size:", [0, 22], ";text-align:right;width:", [0, 52], "}\n.", [1], "day-modal-mask{-webkit-align-items:center;align-items:center;background:rgba(0,0,0,.35);bottom:0;display:-webkit-flex;display:flex;-webkit-justify-content:center;justify-content:center;left:0;opacity:0;position:fixed;right:0;top:0;transition:all .25s ease;visibility:hidden;z-index:1000}\n.", [1], "day-modal-mask.", [1], "show{opacity:1;visibility:visible}\n.", [1], "day-modal{background:#fff;border-radius:", [0, 28], ";box-shadow:0 ", [0, 20], " ", [0, 56], " rgba(0,0,0,.16);overflow:hidden;-webkit-transform:scale(.94);transform:scale(.94);transition:-webkit-transform .25s ease;transition:transform .25s ease;transition:transform .25s ease,-webkit-transform .25s ease;width:", [0, 580], "}\n.", [1], "day-modal-mask.", [1], "show .", [1], "day-modal{-webkit-transform:scale(1);transform:scale(1)}\n.", [1], "day-modal-header{-webkit-align-items:center;align-items:center;display:-webkit-flex;display:flex;-webkit-justify-content:space-between;justify-content:space-between;padding:", [0, 34], " ", [0, 34], " ", [0, 24], "}\n.", [1], "day-modal-date{color:#1a1a1a;font-size:", [0, 34], ";font-weight:600}\n.", [1], "day-modal-close{-webkit-align-items:center;align-items:center;background:#f5f5f7;border-radius:50%;display:-webkit-flex;display:flex;-webkit-flex-direction:column;flex-direction:column;gap:", [0, 8], ";height:", [0, 44], ";-webkit-justify-content:center;justify-content:center;padding:0;transition:all .2s ease;width:", [0, 44], "}\n.", [1], "day-modal-close:active{background:#e8e8ec;-webkit-transform:scale(.92);transform:scale(.92)}\n.", [1], "close-line{background:#999;border-radius:", [0, 2], ";height:", [0, 3], ";transition:all .15s ease;width:", [0, 18], "}\n.", [1], "close-line-1{-webkit-transform:rotate(45deg) translateY(", [0, -1], ");transform:rotate(45deg) translateY(", [0, -1], ")}\n.", [1], "close-line-2{-webkit-transform:rotate(-45deg) translateY(", [0, 1], ");transform:rotate(-45deg) translateY(", [0, 1], ")}\n.", [1], "day-modal-body{padding:", [0, 10], " ", [0, 34], " ", [0, 28], "}\n.", [1], "day-modal-info{-webkit-flex-direction:column;flex-direction:column;gap:", [0, 18], "}\n.", [1], "day-modal-info,.", [1], "dmi-row{display:-webkit-flex;display:flex}\n.", [1], "dmi-row{-webkit-align-items:flex-start;align-items:flex-start;gap:", [0, 20], "}\n.", [1], "dmi-label{color:#a0a4ab;-webkit-flex-shrink:0;flex-shrink:0;font-size:", [0, 26], ";width:", [0, 52], "}\n.", [1], "dmi-value{color:#333;-webkit-flex:1;flex:1;font-size:", [0, 26], ";line-height:1.5}\n.", [1], "dmi-preview{-webkit-line-clamp:3;-webkit-box-orient:vertical;color:#666;display:-webkit-box;overflow:hidden}\n.", [1], "day-modal-empty{-webkit-align-items:center;align-items:center;display:-webkit-flex;display:flex;-webkit-justify-content:center;justify-content:center;padding:", [0, 56], " 0}\n.", [1], "day-modal-empty-text{color:silver;font-size:", [0, 28], "}\n.", [1], "day-modal-action{-webkit-align-items:center;align-items:center;background:linear-gradient(135deg,#ff9565,#e86a35);border-radius:", [0, 40], ";box-shadow:0 ", [0, 6], " ", [0, 24], " rgba(230,106,53,.35);color:#fff;display:-webkit-flex;display:flex;font-size:", [0, 28], ";font-weight:500;height:", [0, 80], ";-webkit-justify-content:center;justify-content:center;margin:0 ", [0, 34], " ", [0, 34], ";transition:all .2s ease}\n.", [1], "day-modal-action:active{opacity:.9;-webkit-transform:scale(.97);transform:scale(.97)}\n.", [1], "bottom-safe{height:calc(", [0, 60], " + env(safe-area-inset-bottom))}\n", ], "Some selectors are not allowed in component wxss, including tag name selectors, ID selectors, and attribute selectors.(./pages/holiday/holiday.wxss:1:1)", {
        path: "./pages/holiday/holiday.wxss"
    });
}