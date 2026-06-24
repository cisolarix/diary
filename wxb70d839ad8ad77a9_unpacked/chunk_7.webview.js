$gwx_XC_16 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
        var z = __WXML_GLOBAL__.ops_set.$gwx_XC_16 || [];

        function gz$gwx_XC_16_1() {
            if (__WXML_GLOBAL__.ops_cached.$gwx_XC_16_1) return __WXML_GLOBAL__.ops_cached.$gwx_XC_16_1
            __WXML_GLOBAL__.ops_cached.$gwx_XC_16_1 = [];
            (function(z) {
                var a = 11;

                function Z(ops) {
                    z.push(ops)
                }
                Z([3, 'page'])
                Z([a, [3, 'loading-overlay '],
                    [
                        [2, '?:'],
                        [
                            [7],
                            [3, 'isLoading']
                        ],
                        [1, 'show'],
                        [1, '']
                    ]
                ])
                Z([3, 'loading-content'])
                Z([3, 'paper-stack-loading'])
                Z([3, 'paper p1'])
                Z([3, 'paper p2'])
                Z([3, 'paper p3'])
                Z([3, 'paper p4'])
                Z([3, 'loading-text'])
                Z([3, '正在准备你的日记...'])
                Z([a, [3, 'sticky-note '],
                    [
                        [2, '?:'],
                        [
                            [7],
                            [3, 'isAllSwiped']
                        ],
                        [1, 'show'],
                        [1, '']
                    ]
                ])
                Z([3, 'tape'])
                Z([3, 'sticky-content'])
                Z([3, 'sticky-text'])
                Z([3, '本周的日记都在这里啦\n想念更早的日子\n可以去时光线里找找 ✨'])
                Z([3, 'handleTouchEnd'])
                Z([3, 'handleTouchMove'])
                Z([3, 'handleTouchStart'])
                Z([3, 'paper-stack'])
                Z([
                    [7],
                    [3, 'paperCount']
                ])
                Z([3, '*this'])
                Z([3, 'handleTap'])
                Z([a, [3, 'paper '],
                    [
                        [2, '?:'],
                        [
                            [2, '<'],
                            [
                                [7],
                                [3, 'index']
                            ],
                            [
                                [7],
                                [3, 'currentIndex']
                            ]
                        ],
                        [1, 'swiped'],
                        [1, '']
                    ],
                    [3, ' '],
                    [
                        [2, '?:'],
                        [
                            [2, '==='],
                            [
                                [7],
                                [3, 'index']
                            ],
                            [
                                [7],
                                [3, 'currentIndex']
                            ]
                        ],
                        [1, 'active'],
                        [1, '']
                    ]
                ])
                Z([
                    [7],
                    [3, 'index']
                ])
                Z([a, [3, 'transform:'],
                    [
                        [2, '?:'],
                        [
                            [2, '==='],
                            [
                                [7],
                                [3, 'index']
                            ],
                            [
                                [7],
                                [3, 'currentIndex']
                            ]
                        ],
                        [
                            [2, '||'],
                            [
                                [7],
                                [3, 'slideTarget']
                            ],
                            [
                                [7],
                                [3, 'activeTransform']
                            ]
                        ],
                        [1, '']
                    ],
                    [3, ';']
                ])
                Z([3, 'paper-content'])
                Z([3, 'paper-header-img'])
                Z([3, 'header-img'])
                Z([3, 'aspectFill'])
                Z([
                    [6],
                    [
                        [6],
                        [
                            [7],
                            [3, 'paperDates']
                        ],
                        [
                            [7],
                            [3, 'index']
                        ]
                    ],
                    [3, 'image']
                ])
                Z([3, 'yellow-square'])
                Z([3, 'square-top'])
                Z([3, 'square-line'])
                Z([3, 'square-bottom'])
                Z([a, [3, 'square-content '],
                    [
                        [2, '?:'],
                        [
                            [6],
                            [
                                [6],
                                [
                                    [7],
                                    [3, 'paperDates']
                                ],
                                [
                                    [7],
                                    [3, 'index']
                                ]
                            ],
                            [3, 'content']
                        ],
                        [1, 'has-content'],
                        [1, '']
                    ]
                ])
                Z([a, [
                    [2, '||'],
                    [
                        [6],
                        [
                            [6],
                            [
                                [7],
                                [3, 'paperDates']
                            ],
                            [
                                [7],
                                [3, 'index']
                            ]
                        ],
                        [3, 'content']
                    ],
                    [1, '🌟 快速上手\n点击卡片 → 写日记\n左右滑走 → 查看昨日日记\n回到今天 → 返回当日日记\n查看全部日记 → 前往时光线']
                ]])
                Z([3, 'square-date'])
                Z([3, 'line-date'])
                Z([a, [
                    [6],
                    [
                        [6],
                        [
                            [7],
                            [3, 'paperDates']
                        ],
                        [
                            [7],
                            [3, 'index']
                        ]
                    ],
                    [3, 'day']
                ]])
                Z([3, 'line-week'])
                Z([a, [
                    [6],
                    [
                        [6],
                        [
                            [7],
                            [3, 'paperDates']
                        ],
                        [
                            [7],
                            [3, 'index']
                        ]
                    ],
                    [3, 'week']
                ]])
                Z([
                    [6],
                    [
                        [6],
                        [
                            [7],
                            [3, 'paperDates']
                        ],
                        [
                            [7],
                            [3, 'index']
                        ]
                    ],
                    [3, 'dayLabel']
                ])
                Z([3, 'line-label'])
                Z([a, [
                    [6],
                    [
                        [6],
                        [
                            [7],
                            [3, 'paperDates']
                        ],
                        [
                            [7],
                            [3, 'index']
                        ]
                    ],
                    [3, 'dayLabel']
                ]])
                Z([
                    [6],
                    [
                        [6],
                        [
                            [7],
                            [3, 'paperDates']
                        ],
                        [
                            [7],
                            [3, 'index']
                        ]
                    ],
                    [3, 'location']
                ])
                Z([3, 'paper-location'])
                Z([a, [3, '📍 '],
                    [
                        [6],
                        [
                            [6],
                            [
                                [7],
                                [3, 'paperDates']
                            ],
                            [
                                [7],
                                [3, 'index']
                            ]
                        ],
                        [3, 'location']
                    ]
                ])
                Z([3, 'handleReset'])
                Z([a, [3, 'reset-btn '],
                    [
                        [2, '?:'],
                        [
                            [7],
                            [3, 'showResetBtn']
                        ],
                        [1, 'show'],
                        [1, '']
                    ]
                ])
                Z([3, '回到今天'])
                Z([3, 'onCancelDelete'])
                Z([a, [3, 'delete-modal '],
                    [
                        [2, '?:'],
                        [
                            [7],
                            [3, 'showDeleteModal']
                        ],
                        [1, 'show'],
                        [1, '']
                    ]
                ])
                Z([3, 'preventBubble'])
                Z([3, 'delete-modal-content'])
                Z([3, 'modal-trash-icon'])
                Z([3, 'modal-trash-body'])
                Z([3, 'modal-trash-lines'])
                Z([3, 'modal-trash-line'])
                Z(z[57])
                Z([3, 'modal-trash-arm'])
                Z([3, 'modal-trash-paper'])
                Z([3, 'modal-trash-scissors'])
                Z([3, 'modal-trash-paper-cut'])
                Z([3, 'modal-title'])
                Z([3, '确定要扔掉吗？'])
                Z([3, 'modal-desc'])
                Z([3, '删除后就不能找回啦~'])
                Z([3, 'modal-btns'])
                Z(z[50])
                Z([3, 'modal-btn cancel'])
                Z([3, '再想想'])
                Z([3, 'onConfirmDelete'])
                Z([3, 'modal-btn confirm'])
                Z([3, '扔掉吧'])
                Z([a, [3, 'update-modal '],
                    [
                        [2, '?:'],
                        [
                            [7],
                            [3, 'showUpdateModal']
                        ],
                        [1, 'show'],
                        [1, '']
                    ]
                ])
                Z([3, 'update-modal-content'])
                Z([3, 'update-icon'])
                Z([3, 'update-arrow'])
                Z([3, 'update-title'])
                Z([3, '本次更新'])
                Z([3, 'update-desc'])
                Z([3, '1. 新增日记纸张背景与模板\n2. 上线节日页面及倒计时功能\n3. 支持日记头图自定义上传\n4. 新增手绘插画类头图素材'])
                Z([3, 'doUpdate'])
                Z([3, 'update-btn'])
                Z([3, '立即更新'])
                Z([3, 'onTapDraftBar'])
                Z([a, [3, 'draft-bar '],
                    [
                        [2, '?:'],
                        [
                            [7],
                            [3, 'showDraftBar']
                        ],
                        [1, 'show'],
                        [1, '']
                    ]
                ])
                Z([a, [3, 'top:'],
                    [
                        [7],
                        [3, 'draftBarTop']
                    ],
                    [3, 'px;right:'],
                    [
                        [7],
                        [3, 'draftBarRight']
                    ],
                    [3, 'px']
                ])
                Z([3, 'draft-bar-text'])
                Z([a, [3, '草稿未保存 · '],
                    [
                        [7],
                        [3, 'draftDisplayDate']
                    ]
                ])
                Z([3, 'draft-bar-action'])
                Z([3, '继续编辑 →'])
                Z([3, 'onDiscardDraftReminder'])
                Z([3, 'draft-bar-close'])
                Z([3, 'draft-bar-close-x'])
                Z([3, '✕'])
            })(__WXML_GLOBAL__.ops_cached.$gwx_XC_16_1);
            return __WXML_GLOBAL__.ops_cached.$gwx_XC_16_1
        }
        __WXML_GLOBAL__.ops_set.$gwx_XC_16 = z;
        __WXML_GLOBAL__.ops_init.$gwx_XC_16 = true;
        var x = ['./pages/index/index.wxml'];
        d_[x[0]] = {}
        var m0 = function(e, s, r, gg) {
            var z = gz$gwx_XC_16_1()
            var eDJB = _n('view')
            _rz(z, eDJB, 'class', 0, e, s, gg)
            var bEJB = _n('view')
            _rz(z, bEJB, 'class', 1, e, s, gg)
            var oFJB = _n('view')
            _rz(z, oFJB, 'class', 2, e, s, gg)
            var xGJB = _n('view')
            _rz(z, xGJB, 'class', 3, e, s, gg)
            var oHJB = _n('view')
            _rz(z, oHJB, 'class', 4, e, s, gg)
            _(xGJB, oHJB)
            var fIJB = _n('view')
            _rz(z, fIJB, 'class', 5, e, s, gg)
            _(xGJB, fIJB)
            var cJJB = _n('view')
            _rz(z, cJJB, 'class', 6, e, s, gg)
            _(xGJB, cJJB)
            var hKJB = _n('view')
            _rz(z, hKJB, 'class', 7, e, s, gg)
            _(xGJB, hKJB)
            _(oFJB, xGJB)
            var oLJB = _n('text')
            _rz(z, oLJB, 'class', 8, e, s, gg)
            var cMJB = _oz(z, 9, e, s, gg)
            _(oLJB, cMJB)
            _(oFJB, oLJB)
            _(bEJB, oFJB)
            _(eDJB, bEJB)
            var oNJB = _n('view')
            _rz(z, oNJB, 'class', 10, e, s, gg)
            var lOJB = _n('view')
            _rz(z, lOJB, 'class', 11, e, s, gg)
            _(oNJB, lOJB)
            var aPJB = _n('view')
            _rz(z, aPJB, 'class', 12, e, s, gg)
            var tQJB = _n('text')
            _rz(z, tQJB, 'class', 13, e, s, gg)
            var eRJB = _oz(z, 14, e, s, gg)
            _(tQJB, eRJB)
            _(aPJB, tQJB)
            _(oNJB, aPJB)
            _(eDJB, oNJB)
            var bSJB = _mz(z, 'view', ['bindtouchend', 15, 'bindtouchmove', 1, 'bindtouchstart', 2, 'class', 3], [], e, s, gg)
            var oTJB = _v()
            _(bSJB, oTJB)
            var xUJB = function(fWJB, oVJB, cXJB, gg) {
                var oZJB = _mz(z, 'view', ['catchtap', 21, 'class', 1, 'data-index', 2, 'style', 3], [], fWJB, oVJB, gg)
                var o2JB = _n('view')
                _rz(z, o2JB, 'class', 25, fWJB, oVJB, gg)
                var l3JB = _n('view')
                _rz(z, l3JB, 'class', 26, fWJB, oVJB, gg)
                var a4JB = _mz(z, 'image', ['class', 27, 'mode', 1, 'src', 2], [], fWJB, oVJB, gg)
                _(l3JB, a4JB)
                _(o2JB, l3JB)
                var t5JB = _n('view')
                _rz(z, t5JB, 'class', 30, fWJB, oVJB, gg)
                var e6JB = _n('view')
                _rz(z, e6JB, 'class', 31, fWJB, oVJB, gg)
                _(t5JB, e6JB)
                var b7JB = _n('view')
                _rz(z, b7JB, 'class', 32, fWJB, oVJB, gg)
                _(t5JB, b7JB)
                var o8JB = _n('view')
                _rz(z, o8JB, 'class', 33, fWJB, oVJB, gg)
                var x9JB = _n('text')
                _rz(z, x9JB, 'class', 34, fWJB, oVJB, gg)
                var o0JB = _oz(z, 35, fWJB, oVJB, gg)
                _(x9JB, o0JB)
                _(o8JB, x9JB)
                _(t5JB, o8JB)
                var fAKB = _n('view')
                _rz(z, fAKB, 'class', 36, fWJB, oVJB, gg)
                var hCKB = _n('text')
                _rz(z, hCKB, 'class', 37, fWJB, oVJB, gg)
                var oDKB = _oz(z, 38, fWJB, oVJB, gg)
                _(hCKB, oDKB)
                _(fAKB, hCKB)
                var cEKB = _n('text')
                _rz(z, cEKB, 'class', 39, fWJB, oVJB, gg)
                var oFKB = _oz(z, 40, fWJB, oVJB, gg)
                _(cEKB, oFKB)
                _(fAKB, cEKB)
                var cBKB = _v()
                _(fAKB, cBKB)
                if (_oz(z, 41, fWJB, oVJB, gg)) {
                    cBKB.wxVkey = 1
                    var lGKB = _n('text')
                    _rz(z, lGKB, 'class', 42, fWJB, oVJB, gg)
                    var aHKB = _oz(z, 43, fWJB, oVJB, gg)
                    _(lGKB, aHKB)
                    _(cBKB, lGKB)
                }
                cBKB.wxXCkey = 1
                _(t5JB, fAKB)
                _(o2JB, t5JB)
                _(oZJB, o2JB)
                var c1JB = _v()
                _(oZJB, c1JB)
                if (_oz(z, 44, fWJB, oVJB, gg)) {
                    c1JB.wxVkey = 1
                    var tIKB = _n('view')
                    _rz(z, tIKB, 'class', 45, fWJB, oVJB, gg)
                    var eJKB = _oz(z, 46, fWJB, oVJB, gg)
                    _(tIKB, eJKB)
                    _(c1JB, tIKB)
                }
                c1JB.wxXCkey = 1
                _(cXJB, oZJB)
                return cXJB
            }
            oTJB.wxXCkey = 2
            _2z(z, 19, xUJB, e, s, gg, oTJB, 'item', 'index', '*this')
            _(eDJB, bSJB)
            var bKKB = _mz(z, 'view', ['bindtap', 47, 'class', 1], [], e, s, gg)
            var oLKB = _n('text')
            var xMKB = _oz(z, 49, e, s, gg)
            _(oLKB, xMKB)
            _(bKKB, oLKB)
            _(eDJB, bKKB)
            var oNKB = _mz(z, 'view', ['bindtap', 50, 'class', 1], [], e, s, gg)
            var fOKB = _mz(z, 'view', ['catchtap', 52, 'class', 1], [], e, s, gg)
            var cPKB = _n('view')
            _rz(z, cPKB, 'class', 54, e, s, gg)
            var hQKB = _n('view')
            _rz(z, hQKB, 'class', 55, e, s, gg)
            _(cPKB, hQKB)
            var oRKB = _n('view')
            _rz(z, oRKB, 'class', 56, e, s, gg)
            var cSKB = _n('view')
            _rz(z, cSKB, 'class', 57, e, s, gg)
            _(oRKB, cSKB)
            var oTKB = _n('view')
            _rz(z, oTKB, 'class', 58, e, s, gg)
            _(oRKB, oTKB)
            _(cPKB, oRKB)
            var lUKB = _n('view')
            _rz(z, lUKB, 'class', 59, e, s, gg)
            _(cPKB, lUKB)
            var aVKB = _n('view')
            _rz(z, aVKB, 'class', 60, e, s, gg)
            var tWKB = _n('view')
            _rz(z, tWKB, 'class', 61, e, s, gg)
            _(aVKB, tWKB)
            _(cPKB, aVKB)
            var eXKB = _n('view')
            _rz(z, eXKB, 'class', 62, e, s, gg)
            _(cPKB, eXKB)
            _(fOKB, cPKB)
            var bYKB = _n('text')
            _rz(z, bYKB, 'class', 63, e, s, gg)
            var oZKB = _oz(z, 64, e, s, gg)
            _(bYKB, oZKB)
            _(fOKB, bYKB)
            var x1KB = _n('text')
            _rz(z, x1KB, 'class', 65, e, s, gg)
            var o2KB = _oz(z, 66, e, s, gg)
            _(x1KB, o2KB)
            _(fOKB, x1KB)
            var f3KB = _n('view')
            _rz(z, f3KB, 'class', 67, e, s, gg)
            var c4KB = _mz(z, 'view', ['bindtap', 68, 'class', 1], [], e, s, gg)
            var h5KB = _oz(z, 70, e, s, gg)
            _(c4KB, h5KB)
            _(f3KB, c4KB)
            var o6KB = _mz(z, 'view', ['bindtap', 71, 'class', 1], [], e, s, gg)
            var c7KB = _oz(z, 73, e, s, gg)
            _(o6KB, c7KB)
            _(f3KB, o6KB)
            _(fOKB, f3KB)
            _(oNKB, fOKB)
            _(eDJB, oNKB)
            var o8KB = _n('view')
            _rz(z, o8KB, 'class', 74, e, s, gg)
            var l9KB = _n('view')
            _rz(z, l9KB, 'class', 75, e, s, gg)
            var a0KB = _n('view')
            _rz(z, a0KB, 'class', 76, e, s, gg)
            var tALB = _n('view')
            _rz(z, tALB, 'class', 77, e, s, gg)
            _(a0KB, tALB)
            _(l9KB, a0KB)
            var eBLB = _n('text')
            _rz(z, eBLB, 'class', 78, e, s, gg)
            var bCLB = _oz(z, 79, e, s, gg)
            _(eBLB, bCLB)
            _(l9KB, eBLB)
            var oDLB = _n('text')
            _rz(z, oDLB, 'class', 80, e, s, gg)
            var xELB = _oz(z, 81, e, s, gg)
            _(oDLB, xELB)
            _(l9KB, oDLB)
            var oFLB = _mz(z, 'view', ['bindtap', 82, 'class', 1], [], e, s, gg)
            var fGLB = _oz(z, 84, e, s, gg)
            _(oFLB, fGLB)
            _(l9KB, oFLB)
            _(o8KB, l9KB)
            _(eDJB, o8KB)
            var cHLB = _mz(z, 'view', ['bindtap', 85, 'class', 1, 'style', 2], [], e, s, gg)
            var hILB = _n('text')
            _rz(z, hILB, 'class', 88, e, s, gg)
            var oJLB = _oz(z, 89, e, s, gg)
            _(hILB, oJLB)
            _(cHLB, hILB)
            var cKLB = _n('view')
            _rz(z, cKLB, 'class', 90, e, s, gg)
            var oLLB = _oz(z, 91, e, s, gg)
            _(cKLB, oLLB)
            _(cHLB, cKLB)
            var lMLB = _mz(z, 'view', ['catchtap', 92, 'class', 1], [], e, s, gg)
            var aNLB = _n('text')
            _rz(z, aNLB, 'class', 94, e, s, gg)
            var tOLB = _oz(z, 95, e, s, gg)
            _(aNLB, tOLB)
            _(lMLB, aNLB)
            _(cHLB, lMLB)
            _(eDJB, cHLB)
            _(r, eDJB)
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
                g = "$gwx_XC_16";
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
if (__vd_version_info__.delayedGwx || false) $gwx_XC_16();
if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/index/index.wxml'] = [$gwx_XC_16, './pages/index/index.wxml'];
else __wxAppCode__['pages/index/index.wxml'] = $gwx_XC_16('./pages/index/index.wxml');

var noCss = typeof __vd_version_info__ !== 'undefined' && __vd_version_info__.noCss === true;
if (!noCss) {
    __wxAppCode__['pages/index/index.wxss'] = setCssToHead(["body{height:100%;overflow:hidden}\n.", [1], "page,body{background:#f7f8fa}\n.", [1], "page{-webkit-align-items:center;align-items:center;box-sizing:border-box;display:-webkit-flex;display:flex;height:100vh;-webkit-justify-content:flex-end;justify-content:flex-end;padding:", [0, 100], " ", [0, 60], " calc(", [0, 180], " + env(safe-area-inset-bottom)) ", [0, 40], "}\n.", [1], "paper-stack{aspect-ratio:9/16;position:relative;width:95%}\n.", [1], "paper{-webkit-backface-visibility:hidden;backface-visibility:hidden;background:#fefefe;border:", [0, 2], " solid #e8e8e8;border-radius:", [0, 48], ";box-shadow:0 ", [0, 8], " ", [0, 32], " rgba(0,0,0,.06);height:100%;overflow:hidden;-webkit-perspective:1000px;perspective:1000px;position:absolute;transition:-webkit-transform .6s cubic-bezier(.25,.46,.45,.94);transition:transform .6s cubic-bezier(.25,.46,.45,.94);transition:transform .6s cubic-bezier(.25,.46,.45,.94),-webkit-transform .6s cubic-bezier(.25,.46,.45,.94);width:100%;will-change:transform}\n.", [1], "paper::after{background:#f7f7f7;bottom:0;content:\x22\x22;height:", [0, 120], ";left:0;position:absolute;right:0}\n.", [1], "paper.", [1], "active{transition:none}\n.", [1], "paper-content{display:-webkit-flex;display:flex;-webkit-flex-direction:column;flex-direction:column;height:100%}\n.", [1], "paper-header-img{height:", [0, 320], ";margin-top:", [0, -2], ";overflow:hidden}\n.", [1], "header-img,.", [1], "paper-header-img{border-radius:", [0, 48], " ", [0, 48], " 0 0;width:100%}\n.", [1], "header-img{height:100%}\n.", [1], "yellow-square{background:#fff;border:", [0, 2], " solid #e8e8e8;border-radius:", [0, 16], ";box-shadow:0 ", [0, 8], " ", [0, 32], " rgba(0,0,0,.08);height:0;margin:", [0, -20], " 0 0 auto;overflow:hidden;padding-bottom:120%;position:relative;width:95%}\n.", [1], "square-top{height:", [0, 100], ";top:0}\n.", [1], "square-bottom,.", [1], "square-top{background:#fff;left:0;position:absolute;right:0}\n.", [1], "square-bottom{bottom:0;box-sizing:border-box;padding:", [0, 20], " ", [0, 40], ";top:", [0, 100], "}\n.", [1], "square-content{-webkit-line-clamp:12;-webkit-box-orient:vertical;color:#999;display:-webkit-box;font-size:", [0, 28], ";font-weight:400;line-height:2.4;overflow:hidden;white-space:pre-wrap;word-break:break-all}\n.", [1], "square-content:not(.", [1], "has-content){font-weight:200}\n.", [1], "square-content.", [1], "has-content{color:#555}\n.", [1], "square-date{-webkit-align-items:flex-end;align-items:flex-end;display:-webkit-flex;display:flex;gap:", [0, 16], ";left:", [0, 40], ";position:absolute;right:", [0, 40], ";top:", [0, 30], ";z-index:2}\n.", [1], "line-date{color:#333;font-size:", [0, 48], ";font-weight:600;line-height:1}\n.", [1], "line-week{color:#999;font-size:", [0, 24], ";line-height:1}\n.", [1], "line-label{background:rgba(255,149,0,.1);border-radius:", [0, 8], ";color:#ff9500;font-size:", [0, 22], ";margin-left:auto;padding:", [0, 4], " ", [0, 12], "}\n.", [1], "square-line{background:#e8e8e8;height:", [0, 2], ";left:", [0, 40], ";position:absolute;right:", [0, 40], ";top:", [0, 100], ";z-index:2}\n.", [1], "sticky-note{-webkit-align-items:center;align-items:center;background:linear-gradient(135deg,#fffef5,#fff8e7);border-radius:", [0, 8], ";box-shadow:0 ", [0, 8], " ", [0, 32], " rgba(0,0,0,.1);display:-webkit-flex;display:flex;-webkit-flex-direction:column;flex-direction:column;left:50%;min-height:", [0, 320], ";opacity:0;padding-top:", [0, 50], ";pointer-events:none;position:absolute;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);transition:opacity .5s ease;width:", [0, 400], "}\n.", [1], "sticky-note.", [1], "show{opacity:1}\n.", [1], "tape{background:linear-gradient(180deg,rgba(255,248,220,.9),hsla(45,57%,86%,.8));border-radius:", [0, 4], ";box-shadow:0 ", [0, 2], " ", [0, 8], " rgba(0,0,0,.05);height:", [0, 50], ";top:", [0, -20], ";-webkit-transform:translateX(-50%);transform:translateX(-50%);width:", [0, 120], "}\n.", [1], "tape,.", [1], "tape::before{left:50%;position:absolute}\n.", [1], "tape::before{background:hsla(40,35%,67%,.4);content:\x22\x22;height:", [0, 2], ";top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);width:", [0, 80], "}\n.", [1], "sticky-content{padding:", [0, 40], " ", [0, 30], ";text-align:center}\n.", [1], "sticky-text{color:#8b7355;font-size:", [0, 32], ";letter-spacing:", [0, 4], ";line-height:1.8}\n.", [1], "paper.", [1], "swiped{display:none}\n.", [1], "reset-btn{background:#fff;border-radius:", [0, 50], ";bottom:calc(", [0, 160], " + env(safe-area-inset-bottom));box-shadow:0 ", [0, 4], " ", [0, 20], " rgba(0,0,0,.15);left:50%;opacity:0;padding:", [0, 20], " ", [0, 60], ";position:fixed;-webkit-transform:translateX(-50%) scale(0);transform:translateX(-50%) scale(0);transition:all .3s ease;z-index:1000}\n.", [1], "reset-btn.", [1], "show{opacity:1;-webkit-transform:translateX(-50%) scale(1);transform:translateX(-50%) scale(1)}\n.", [1], "reset-btn wx-text{color:#333;font-size:", [0, 28], "}\n.", [1], "search-btn{-webkit-align-items:center;align-items:center;-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);background:hsla(0,0%,100%,.9);border-radius:50%;box-shadow:0 ", [0, 4], " ", [0, 20], " rgba(0,0,0,.1);display:-webkit-flex;display:flex;height:", [0, 80], ";-webkit-justify-content:center;justify-content:center;left:", [0, 30], ";position:fixed;top:", [0, 120], ";transition:opacity .2s ease;width:", [0, 80], ";z-index:100}\n.", [1], "search-btn.", [1], "hide{opacity:0;pointer-events:none}\n.", [1], "search-icon{height:", [0, 36], ";position:relative;width:", [0, 36], "}\n.", [1], "search-circle{background:transparent;border:", [0, 4], " solid #a8c0d6;border-radius:50%;height:", [0, 28], ";left:0;position:absolute;top:0;width:", [0, 28], "}\n.", [1], "search-handle{background:#a8c0d6;border-radius:", [0, 2], ";bottom:0;height:", [0, 14], ";position:absolute;right:0;-webkit-transform:rotate(45deg);transform:rotate(45deg);-webkit-transform-origin:bottom left;transform-origin:bottom left;width:", [0, 4], "}\n.", [1], "paper:nth-child(1){-webkit-transform:translate(0,0) rotate(0deg);transform:translate(0,0) rotate(0deg);z-index:7}\n.", [1], "paper:nth-child(2){-webkit-transform:translate(", [0, 12], ",", [0, 8], ") rotate(2.5deg);transform:translate(", [0, 12], ",", [0, 8], ") rotate(2.5deg);z-index:6}\n.", [1], "paper:nth-child(3){-webkit-transform:translate(", [0, -10], ",", [0, 16], ") rotate(-2deg);transform:translate(", [0, -10], ",", [0, 16], ") rotate(-2deg);z-index:5}\n.", [1], "paper:nth-child(4){-webkit-transform:translate(", [0, 16], ",", [0, 24], ") rotate(3.5deg);transform:translate(", [0, 16], ",", [0, 24], ") rotate(3.5deg);z-index:4}\n.", [1], "paper:nth-child(5){-webkit-transform:translate(", [0, -14], ",", [0, 32], ") rotate(-1.5deg);transform:translate(", [0, -14], ",", [0, 32], ") rotate(-1.5deg);z-index:3}\n.", [1], "paper:nth-child(6){-webkit-transform:translate(", [0, 8], ",", [0, 40], ") rotate(2deg);transform:translate(", [0, 8], ",", [0, 40], ") rotate(2deg);z-index:2}\n.", [1], "paper:nth-child(7){-webkit-transform:translate(", [0, -6], ",", [0, 48], ") rotate(-3deg);transform:translate(", [0, -6], ",", [0, 48], ") rotate(-3deg);z-index:1}\n.", [1], "paper::before{background-image:repeating-linear-gradient(0deg,transparent,transparent ", [0, 1], ",hsla(0,0%,78%,.015) 0,hsla(0,0%,78%,.015) ", [0, 2], ");content:\x22\x22;inset:0;pointer-events:none;position:absolute}\n.", [1], "paper::after{display:none}\n.", [1], "skeleton.", [1], "show{opacity:1;visibility:visible}\n.", [1], "skeleton-paper{aspect-ratio:9/16;background:#fefefe;border-radius:", [0, 48], ";box-shadow:0 ", [0, 8], " ", [0, 32], " rgba(0,0,0,.06);overflow:hidden;width:90%}\n.", [1], "skeleton-header{-webkit-animation:shimmer 1.5s infinite;animation:shimmer 1.5s infinite;background:linear-gradient(90deg,#f0f0f0 25%,#e0e0e0 50%,#f0f0f0 75%);background-size:200% 100%;height:", [0, 320], ";width:100%}\n.", [1], "skeleton-square{background:#fefefe;border-radius:", [0, 16], " ", [0, 16], " 0 0;height:0;margin:", [0, -20], " 0 0 auto;padding-bottom:112%;position:relative;width:95%}\n.", [1], "skeleton-line{background:#e8e8e8;height:", [0, 2], ";left:0;position:absolute;right:0;top:", [0, 100], "}\n.", [1], "skeleton-content{left:", [0, 40], ";position:absolute;right:", [0, 40], ";top:", [0, 130], "}\n.", [1], "skeleton-text{-webkit-animation:shimmer 1.5s infinite;animation:shimmer 1.5s infinite;background:linear-gradient(90deg,#f0f0f0 25%,#e0e0e0 50%,#f0f0f0 75%);background-size:200% 100%;border-radius:", [0, 8], ";height:", [0, 32], ";margin-bottom:", [0, 24], "}\n.", [1], "skeleton-text.", [1], "short{width:60%}\n@-webkit-keyframes shimmer{0%{background-position:-200% 0}\n100%{background-position:200% 0}\n}@keyframes shimmer{0%{background-position:-200% 0}\n100%{background-position:200% 0}\n}.", [1], "main-content{transition:opacity .3s ease}\n.", [1], "main-content.", [1], "hide{opacity:0;pointer-events:none}\n.", [1], "loading-overlay{-webkit-align-items:center;align-items:center;background:linear-gradient(180deg,#f7f8fa,#ededed);bottom:0;display:-webkit-flex;display:flex;-webkit-justify-content:center;justify-content:center;left:0;opacity:0;position:fixed;right:0;top:0;transition:opacity .5s ease,visibility .5s ease;visibility:hidden;z-index:9999}\n.", [1], "loading-overlay.", [1], "show{opacity:1;visibility:visible}\n.", [1], "loading-content{-webkit-align-items:center;align-items:center;display:-webkit-flex;display:flex;-webkit-flex-direction:column;flex-direction:column}\n.", [1], "paper-stack-loading{height:", [0, 280], ";position:relative;width:", [0, 200], "}\n.", [1], "paper-stack-loading .", [1], "paper{background:linear-gradient(135deg,#fff,#f8f8f8);border:", [0, 2], " solid #e8e8e8;border-radius:", [0, 16], ";box-shadow:0 ", [0, 4], " ", [0, 16], " rgba(0,0,0,.06);height:", [0, 220], ";position:absolute;width:", [0, 160], "}\n.", [1], "paper.", [1], "p1{-webkit-animation:breathe 2s ease-in-out infinite;animation:breathe 2s ease-in-out infinite;-webkit-animation-delay:0s;animation-delay:0s;left:0;top:0}\n.", [1], "paper.", [1], "p2{-webkit-animation:breathe 2s ease-in-out infinite;animation:breathe 2s ease-in-out infinite;-webkit-animation-delay:.2s;animation-delay:.2s;left:", [0, 10], ";top:", [0, 10], "}\n.", [1], "paper.", [1], "p3{-webkit-animation:breathe 2s ease-in-out infinite;animation:breathe 2s ease-in-out infinite;-webkit-animation-delay:.4s;animation-delay:.4s;left:", [0, 20], ";top:", [0, 20], "}\n.", [1], "paper.", [1], "p4{-webkit-animation:breathe 2s ease-in-out infinite;animation:breathe 2s ease-in-out infinite;-webkit-animation-delay:.6s;animation-delay:.6s;left:", [0, 30], ";top:", [0, 30], "}\n@-webkit-keyframes breathe{0%,100%{opacity:.6;-webkit-transform:translateY(0) scale(1);transform:translateY(0) scale(1)}\n50%{opacity:1;-webkit-transform:translateY(", [0, -15], ") scale(.95);transform:translateY(", [0, -15], ") scale(.95)}\n}@keyframes breathe{0%,100%{opacity:.6;-webkit-transform:translateY(0) scale(1);transform:translateY(0) scale(1)}\n50%{opacity:1;-webkit-transform:translateY(", [0, -15], ") scale(.95);transform:translateY(", [0, -15], ") scale(.95)}\n}.", [1], "loading-text{color:#999;font-size:", [0, 28], ";letter-spacing:", [0, 2], ";margin-top:", [0, 60], "}\n.", [1], "paper-footer{-webkit-align-items:center;align-items:center;bottom:", [0, 25], ";-webkit-justify-content:flex-end;justify-content:flex-end;left:", [0, 20], ";position:absolute;right:", [0, 20], ";z-index:100}\n.", [1], "location-info,.", [1], "paper-footer{display:-webkit-flex;display:flex}\n.", [1], "location-info{-webkit-align-items:flex-end;align-items:flex-end;margin-top:", [0, -20], ";max-width:75%}\n.", [1], "location-icon{-webkit-align-items:center;align-items:center;display:-webkit-flex;display:flex;-webkit-flex-shrink:0;flex-shrink:0;height:", [0, 36], ";-webkit-justify-content:center;justify-content:center;margin-right:", [0, 8], ";position:relative;width:", [0, 28], "}\n.", [1], "addr-marker{height:", [0, 32], ";position:relative;width:", [0, 24], "}\n.", [1], "addr-pin{background:linear-gradient(180deg,#a8d8ea,#8bc4cf);border:", [0, 2], " solid #666;border-bottom:none;border-radius:", [0, 4], " ", [0, 4], " 0 0;height:", [0, 6], ";left:0;position:absolute;top:0;width:", [0, 24], "}\n.", [1], "addr-base{background:linear-gradient(180deg,#fff,#f0f0f0);border:", [0, 2], " solid #666;border-radius:", [0, 2], ";height:", [0, 18], ";left:", [0, 2], ";position:absolute;top:", [0, 6], ";width:", [0, 20], "}\n.", [1], "addr-base::before{top:", [0, 4], ";width:", [0, 10], "}\n.", [1], "addr-base::after,.", [1], "addr-base::before{background:#666;border-radius:", [0, 1], ";content:\x22\x22;height:", [0, 2], ";left:", [0, 3], ";position:absolute}\n.", [1], "addr-base::after{bottom:", [0, 4], ";width:", [0, 6], "}\n.", [1], "addr-pole{background:#666;bottom:0;height:", [0, 8], ";left:50%;position:absolute;-webkit-transform:translateX(-50%);transform:translateX(-50%);width:", [0, 2], "}\n.", [1], "location-text{color:#666;font-size:", [0, 24], "}\n.", [1], "location-text,.", [1], "paper-location{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}\n.", [1], "paper-location{bottom:", [0, 8], ";color:#999;font-size:", [0, 22], ";letter-spacing:", [0, 2], ";max-width:16em;padding-right:", [0, 40], ";position:absolute;right:", [0, 40], ";text-align:right}\n.", [1], "delete-btn{-webkit-align-items:flex-end;align-items:flex-end;display:-webkit-flex;display:flex;-webkit-justify-content:center;justify-content:center;opacity:.8;padding:", [0, 8], " ", [0, 12], ";transition:opacity .2s ease}\n.", [1], "delete-btn:active{opacity:1}\n.", [1], "trash-icon{height:", [0, 44], ";position:relative;width:", [0, 40], "}\n.", [1], "trash-body{background:linear-gradient(180deg,#a8d8ea,#8bc4cf);border:", [0, 2], " solid #666;border-radius:", [0, 4], " ", [0, 4], " ", [0, 6], " ", [0, 6], ";bottom:", [0, 4], ";height:", [0, 26], ";left:50%;position:absolute;-webkit-transform:translateX(-50%);transform:translateX(-50%);width:", [0, 28], "}\n.", [1], "trash-body::before{background:#333;border-radius:50%;box-shadow:", [0, 10], " 0 0 #333;left:", [0, 5], ";top:", [0, 6], ";width:", [0, 4], "}\n.", [1], "trash-body::after,.", [1], "trash-body::before{content:\x22\x22;height:", [0, 4], ";position:absolute}\n.", [1], "trash-body::after{border:", [0, 2], " solid #333;border-radius:0 0 ", [0, 6], " ", [0, 6], ";border-top:none;bottom:", [0, 6], ";left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%);width:", [0, 10], "}\n.", [1], "trash-lid{background:#666;height:", [0, 8], ";top:0;width:", [0, 2], "}\n.", [1], "trash-lid,.", [1], "trash-lid::before{left:50%;position:absolute;-webkit-transform:translateX(-50%);transform:translateX(-50%)}\n.", [1], "trash-lid::before{background:#f99;border-radius:50%;content:\x22\x22;height:", [0, 6], ";top:", [0, -6], ";width:", [0, 6], "}\n.", [1], "trash-lines{bottom:0;display:-webkit-flex;display:flex;gap:", [0, 6], ";left:50%;position:absolute;-webkit-transform:translateX(-50%);transform:translateX(-50%)}\n.", [1], "trash-line{background:#666;border-radius:50%;height:", [0, 6], ";width:", [0, 6], "}\n.", [1], "trash-paper{display:none}\n.", [1], "delete-modal{-webkit-align-items:center;align-items:center;background:rgba(0,0,0,.3);bottom:0;display:-webkit-flex;display:flex;-webkit-justify-content:center;justify-content:center;left:0;opacity:0;position:fixed;right:0;top:0;transition:all .3s ease;visibility:hidden;z-index:200}\n.", [1], "delete-modal.", [1], "show{opacity:1;visibility:visible}\n.", [1], "delete-modal-content{-webkit-align-items:center;align-items:center;-webkit-animation:modalBounce .3s ease;animation:modalBounce .3s ease;background:#fff;border-radius:", [0, 32], ";box-shadow:0 ", [0, 16], " ", [0, 48], " rgba(0,0,0,.12);display:-webkit-flex;display:flex;-webkit-flex-direction:column;flex-direction:column;padding:", [0, 48], " ", [0, 40], " ", [0, 40], ";width:", [0, 560], "}\n@-webkit-keyframes modalBounce{0%{opacity:0;-webkit-transform:scale(.8);transform:scale(.8)}\n50%{-webkit-transform:scale(1.05);transform:scale(1.05)}\n100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}\n}@keyframes modalBounce{0%{opacity:0;-webkit-transform:scale(.8);transform:scale(.8)}\n50%{-webkit-transform:scale(1.05);transform:scale(1.05)}\n100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}\n}.", [1], "modal-trash-icon{height:", [0, 130], ";margin-bottom:", [0, 24], ";position:relative;width:", [0, 130], "}\n.", [1], "modal-trash-body{background:linear-gradient(180deg,#a8d8ea,#8bc4cf);border:", [0, 3], " solid #666;border-radius:", [0, 10], " ", [0, 10], " ", [0, 15], " ", [0, 15], ";bottom:", [0, 10], ";height:", [0, 65], ";left:50%;position:absolute;-webkit-transform:translateX(-50%);transform:translateX(-50%);width:", [0, 70], "}\n.", [1], "modal-trash-body::before{background:#333;border-radius:50%;box-shadow:", [0, 26], " 0 0 #333;content:\x22\x22;height:", [0, 10], ";left:", [0, 12], ";position:absolute;top:", [0, 14], ";width:", [0, 10], "}\n.", [1], "modal-trash-body::after{border:", [0, 3], " solid #333;border-radius:0 0 ", [0, 12], " ", [0, 12], ";border-top:none;bottom:", [0, 14], ";content:\x22\x22;height:", [0, 8], ";width:", [0, 24], "}\n.", [1], "modal-trash-body::after,.", [1], "modal-trash-lines{left:50%;position:absolute;-webkit-transform:translateX(-50%);transform:translateX(-50%)}\n.", [1], "modal-trash-lines{bottom:0;display:-webkit-flex;display:flex;gap:", [0, 20], "}\n.", [1], "modal-trash-line{background:#666;border-radius:50%;height:", [0, 16], ";width:", [0, 16], "}\n.", [1], "modal-trash-arm{background:linear-gradient(180deg,#a8d8ea,#8bc4cf);border:", [0, 2], " solid #666;border-radius:", [0, 4], ";bottom:", [0, 40], ";height:", [0, 30], ";position:absolute;right:", [0, 8], ";-webkit-transform:rotate(-30deg);transform:rotate(-30deg);-webkit-transform-origin:bottom center;transform-origin:bottom center;width:", [0, 8], "}\n.", [1], "modal-trash-paper{-webkit-animation:snip .8s ease-in-out infinite;animation:snip .8s ease-in-out infinite;height:", [0, 36], ";position:absolute;right:", [0, 8], ";top:", [0, 28], ";width:", [0, 40], "}\n.", [1], "modal-trash-scissors{left:50%;position:absolute;top:0;-webkit-transform:translateX(-50%);transform:translateX(-50%)}\n.", [1], "modal-trash-scissors::after,.", [1], "modal-trash-scissors::before{background:#888;border-radius:0 0 ", [0, 3], " ", [0, 3], ";content:\x22\x22;height:", [0, 36], ";position:absolute;width:", [0, 8], "}\n.", [1], "modal-trash-scissors::before{left:", [0, -10], ";-webkit-transform:rotate(-15deg);transform:rotate(-15deg);-webkit-transform-origin:top center;transform-origin:top center}\n.", [1], "modal-trash-scissors::after{right:", [0, -10], ";-webkit-transform:rotate(15deg);transform:rotate(15deg);-webkit-transform-origin:top center;transform-origin:top center}\n.", [1], "modal-trash-paper-cut{background:#fff;border:", [0, 2], " solid #666;border-radius:", [0, 2], ";height:", [0, 34], ";left:", [0, 8], ";position:absolute;top:", [0, 64], ";-webkit-transform:rotate(-15deg);transform:rotate(-15deg);width:", [0, 26], "}\n.", [1], "modal-trash-paper-cut::before{background:#ccc;box-shadow:0 ", [0, 5], " 0 #ccc,0 ", [0, 10], " 0 #ccc;content:\x22\x22;height:", [0, 2], ";left:", [0, 3], ";position:absolute;right:", [0, 3], ";top:", [0, 6], "}\n@-webkit-keyframes snip{0%,100%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}\n50%{-webkit-transform:rotate(-5deg);transform:rotate(-5deg)}\n}@keyframes snip{0%,100%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}\n50%{-webkit-transform:rotate(-5deg);transform:rotate(-5deg)}\n}.", [1], "modal-title{color:#333;font-size:", [0, 34], ";font-weight:600;margin-bottom:", [0, 12], "}\n.", [1], "modal-desc{color:#999;font-size:", [0, 26], ";margin-bottom:", [0, 32], "}\n.", [1], "modal-btns{gap:", [0, 20], ";width:100%}\n.", [1], "modal-btn,.", [1], "modal-btns{display:-webkit-flex;display:flex}\n.", [1], "modal-btn{-webkit-align-items:center;align-items:center;border-radius:", [0, 40], ";-webkit-flex:1;flex:1;font-size:", [0, 30], ";font-weight:500;height:", [0, 80], ";-webkit-justify-content:center;justify-content:center;transition:all .2s ease}\n.", [1], "modal-btn.", [1], "cancel{background:#f5f5f5;color:#666}\n.", [1], "modal-btn.", [1], "cancel:active{background:#eee}\n.", [1], "modal-btn.", [1], "confirm{background:#f99;color:#fff}\n.", [1], "modal-btn.", [1], "confirm:active{background:#f88;-webkit-transform:scale(.95);transform:scale(.95)}\n.", [1], "update-modal{-webkit-align-items:center;align-items:center;background:rgba(0,0,0,.5);bottom:0;display:-webkit-flex;display:flex;-webkit-justify-content:center;justify-content:center;left:0;opacity:0;position:fixed;right:0;top:0;transition:all .3s ease;visibility:hidden;z-index:300}\n.", [1], "update-modal.", [1], "show{opacity:1;visibility:visible}\n.", [1], "update-modal-content{-webkit-animation:modalBounce .3s ease;animation:modalBounce .3s ease;background:#fff;border-radius:", [0, 32], ";box-shadow:0 ", [0, 16], " ", [0, 48], " rgba(0,0,0,.15);-webkit-flex-direction:column;flex-direction:column;padding:", [0, 56], " ", [0, 48], " ", [0, 48], ";width:", [0, 560], "}\n.", [1], "update-icon,.", [1], "update-modal-content{-webkit-align-items:center;align-items:center;display:-webkit-flex;display:flex}\n.", [1], "update-icon{background:linear-gradient(135deg,#ff9500,#ff6b00);border-radius:50%;box-shadow:0 ", [0, 8], " ", [0, 24], " rgba(255,149,0,.3);height:", [0, 120], ";-webkit-justify-content:center;justify-content:center;margin-bottom:", [0, 32], ";width:", [0, 120], "}\n.", [1], "update-arrow{border-left:", [0, 20], " solid transparent;border-right:", [0, 20], " solid transparent;border-top:", [0, 28], " solid #fff;height:0;margin-top:", [0, 8], ";width:0}\n.", [1], "update-title{color:#333;font-size:", [0, 36], ";font-weight:600;margin-bottom:", [0, 16], "}\n.", [1], "update-desc{color:#555;font-size:", [0, 26], ";font-weight:400;line-height:1.8;margin-bottom:", [0, 40], ";padding:0 ", [0, 16], ";text-align:left;white-space:pre-line}\n.", [1], "update-btn{-webkit-align-items:center;align-items:center;background:linear-gradient(135deg,#ff9500,#ff6b00);border-radius:", [0, 44], ";box-shadow:0 ", [0, 8], " ", [0, 24], " rgba(255,149,0,.3);color:#fff;display:-webkit-flex;display:flex;font-size:", [0, 32], ";font-weight:500;height:", [0, 88], ";-webkit-justify-content:center;justify-content:center;transition:all .2s ease;width:100%}\n.", [1], "update-btn:active{box-shadow:0 ", [0, 4], " ", [0, 16], " rgba(255,149,0,.3);-webkit-transform:scale(.96);transform:scale(.96)}\n.", [1], "draft-bar{-webkit-align-items:center;align-items:center;background:#fff;border-radius:", [0, 32], ";box-shadow:0 ", [0, 2], " ", [0, 16], " rgba(0,0,0,.05);display:-webkit-flex;display:flex;height:", [0, 64], ";left:", [0, 20], ";opacity:0;padding:0 ", [0, 4], " 0 ", [0, 20], ";pointer-events:none;position:fixed;transition:opacity .2s ease;z-index:100}\n.", [1], "draft-bar.", [1], "show{opacity:1;pointer-events:auto}\n.", [1], "draft-bar-text{color:#666;-webkit-flex:1;flex:1;font-size:", [0, 24], ";margin-left:", [0, 4], ";overflow:hidden;text-overflow:ellipsis;white-space:nowrap}\n.", [1], "draft-bar-action{color:#ff8c42;font-size:", [0, 22], ";font-weight:500;margin-left:", [0, 12], "}\n.", [1], "draft-bar-action,.", [1], "draft-bar-close{-webkit-flex-shrink:0;flex-shrink:0}\n.", [1], "draft-bar-close{-webkit-align-items:center;align-items:center;border-radius:50%;display:-webkit-flex;display:flex;height:", [0, 40], ";-webkit-justify-content:center;justify-content:center;margin-left:", [0, 4], ";transition:background .15s;width:", [0, 40], "}\n.", [1], "draft-bar-close:active{background:#f0f0f0}\n.", [1], "draft-bar-close-x{color:silver;font-size:", [0, 20], ";line-height:1;margin-top:", [0, -1], "}\n", ], "Some selectors are not allowed in component wxss, including tag name selectors, ID selectors, and attribute selectors.(./pages/index/index.wxss:1:4033)", {
        path: "./pages/index/index.wxss"
    });
}