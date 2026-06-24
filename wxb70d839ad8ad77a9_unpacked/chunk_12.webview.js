$gwx_XC_4 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
        var z = __WXML_GLOBAL__.ops_set.$gwx_XC_4 || [];

        function gz$gwx_XC_4_1() {
            if (__WXML_GLOBAL__.ops_cached.$gwx_XC_4_1) return __WXML_GLOBAL__.ops_cached.$gwx_XC_4_1
            __WXML_GLOBAL__.ops_cached.$gwx_XC_4_1 = [];
            (function(z) {
                var a = 11;

                function Z(ops) {
                    z.push(ops)
                }
                Z([3, 'page'])
                Z([3, 'header'])
                Z([3, 'onEditProfile'])
                Z([3, 'header-center'])
                Z([3, 'header-avatar-wrap'])
                Z([
                    [7],
                    [3, 'avatarUrl']
                ])
                Z([3, 'header-avatar-img'])
                Z([3, 'aspectFill'])
                Z(z[5])
                Z(z[6])
                Z(z[7])
                Z([3, '/images/profile/default-avatar.jpg'])
                Z([3, 'header-name'])
                Z([a, [
                    [7],
                    [3, 'nickName']
                ]])
                Z([3, 'stats-row'])
                Z([3, 'stat-col'])
                Z([3, 'stat-num'])
                Z([a, [
                    [7],
                    [3, 'totalDaysText']
                ]])
                Z([3, 'stat-label'])
                Z([3, '日记总数'])
                Z(z[15])
                Z(z[16])
                Z([a, [
                    [7],
                    [3, 'totalWordsText']
                ]])
                Z(z[18])
                Z([3, '日记字数'])
                Z(z[15])
                Z(z[16])
                Z([a, [
                    [7],
                    [3, 'pointsText']
                ]])
                Z(z[18])
                Z([3, '积分总数'])
                Z([3, 'onCheckin'])
                Z([3, 'vip-card'])
                Z([3, 'vip-left'])
                Z([3, 'vip-crown-img'])
                Z([3, 'aspectFit'])
                Z([3, '/images/profile/earn-points.png'])
                Z([3, 'vip-texts'])
                Z([3, 'vip-title'])
                Z([3, '做任务赚积分'])
                Z([3, 'vip-sub-row'])
                Z([3, 'vip-sub'])
                Z([a, [3, '已连续打卡 '],
                    [
                        [7],
                        [3, 'continuousDays']
                    ],
                    [3, ' 天']
                ])
                Z([3, 'vip-right'])
                Z([
                    [2, '!'],
                    [
                        [7],
                        [3, 'todayChecked']
                    ]
                ])
                Z([3, 'checkin-remind-tag'])
                Z([3, '去签到'])
                Z([3, 'vip-arrow'])
                Z([3, '›'])
                Z([3, 'icon-section'])
                Z([3, 'icon-grid'])
                Z([3, 'onMessage'])
                Z([3, 'grid-item'])
                Z([3, 'grid-icon-wrap'])
                Z([3, 'grid-icon'])
                Z(z[34])
                Z([3, '/images/profile/notice-icon.png'])
                Z([3, 'grid-label'])
                Z([3, '公告'])
                Z(z[51])
                Z([3, 'onContactTap'])
                Z([3, 'grid-contact-btn'])
                Z([3, 'contact'])
                Z([3, 'profile'])
                Z(z[52])
                Z(z[53])
                Z(z[34])
                Z([3, '/images/profile/service-icon.png'])
                Z(z[56])
                Z([3, '咨询客服'])
                Z([3, 'onShowShareModal'])
                Z(z[51])
                Z(z[52])
                Z(z[53])
                Z(z[34])
                Z([3, '/images/profile/share-icon.png'])
                Z(z[56])
                Z([3, '分享小程序'])
                Z([3, 'onFaq'])
                Z(z[51])
                Z(z[52])
                Z(z[53])
                Z(z[34])
                Z([3, '/images/profile/faq-icon.png'])
                Z(z[56])
                Z([3, '常见问题'])
                Z([3, 'menu-list'])
                Z([3, 'onLockSetting'])
                Z([3, 'menu-single-card'])
                Z([3, 'menu-single-left'])
                Z([3, 'menu-single-icon-wrap'])
                Z([3, 'menu-single-icon'])
                Z(z[34])
                Z([3, '/images/profile/lock-icon.png'])
                Z([3, 'menu-single-title'])
                Z([3, '日记密码'])
                Z([3, 'menu-single-right'])
                Z([a, [3, 'lock-status '],
                    [
                        [2, '?:'],
                        [
                            [7],
                            [3, 'lockEnabled']
                        ],
                        [1, 'status-on'],
                        [1, 'status-off']
                    ]
                ])
                Z([a, [
                    [2, '?:'],
                    [
                        [7],
                        [3, 'lockEnabled']
                    ],
                    [1, '已开启'],
                    [1, '已关闭']
                ]])
                Z([3, 'menu-arrow'])
                Z(z[47])
                Z([3, 'onThemeSelect'])
                Z(z[87])
                Z(z[88])
                Z(z[89])
                Z(z[90])
                Z(z[34])
                Z([3, '/images/profile/header-icon.png'])
                Z(z[93])
                Z([3, '设置头图'])
                Z(z[95])
                Z([
                    [7],
                    [3, 'hasNewHeadImage']
                ])
                Z([3, 'head-image-new-badge'])
                Z([3, '上新头图啦'])
                Z(z[98])
                Z(z[47])
                Z([3, 'onReminder'])
                Z(z[87])
                Z(z[88])
                Z(z[89])
                Z(z[90])
                Z(z[34])
                Z([3, '/images/profile/reminder-icon.png'])
                Z(z[93])
                Z([3, '日记提醒'])
                Z(z[95])
                Z([a, z[96][1],
                    [
                        [2, '?:'],
                        [
                            [2, '&&'],
                            [
                                [7],
                                [3, 'reminderEnabled']
                            ],
                            [
                                [2, '>'],
                                [
                                    [7],
                                    [3, 'reminderCount']
                                ],
                                [1, 0]
                            ]
                        ],
                        [1, 'status-on'],
                        [1, 'status-off']
                    ]
                ])
                Z([a, [
                    [2, '?:'],
                    [
                        [2, '&&'],
                        [
                            [7],
                            [3, 'reminderEnabled']
                        ],
                        [
                            [2, '>'],
                            [
                                [7],
                                [3, 'reminderCount']
                            ],
                            [1, 0]
                        ]
                    ],
                    [
                        [2, '+'],
                        [
                            [7],
                            [3, 'reminderCount']
                        ],
                        [1, '次提醒']
                    ],
                    [1, '已关闭']
                ]])
                Z(z[98])
                Z(z[47])
                Z([3, 'onExportDiary'])
                Z(z[87])
                Z(z[88])
                Z(z[89])
                Z(z[90])
                Z(z[34])
                Z([3, '/images/profile/export-icon.png'])
                Z(z[93])
                Z([3, '导出日记'])
                Z(z[98])
                Z(z[47])
                Z([3, 'onHelp'])
                Z(z[87])
                Z(z[88])
                Z(z[89])
                Z(z[90])
                Z(z[34])
                Z([3, '/images/profile/desktop-icon.png'])
                Z(z[93])
                Z([3, '添加到桌面'])
                Z(z[98])
                Z(z[47])
                Z([3, 'policy-links'])
                Z([3, 'onShowUserAgreement'])
                Z([3, 'policy-link'])
                Z([3, '《用户协议》'])
                Z([3, 'policy-divider'])
                Z([3, '|'])
                Z([3, 'onShowPrivacyPolicy'])
                Z(z[153])
                Z([3, '《隐私政策》'])
                Z([3, 'bottom-safe-area'])
                Z([3, 'onCloseShareModal'])
                Z([a, [3, 'share-modal '],
                    [
                        [2, '?:'],
                        [
                            [7],
                            [3, 'showShareModal']
                        ],
                        [1, 'show'],
                        [1, '']
                    ]
                ])
                Z([3, 'preventBubble'])
                Z([3, 'share-modal-content'])
                Z([3, 'share-title'])
                Z([3, '分享给好友'])
                Z([3, 'share-subtitle'])
                Z([3, '让更多人感受记录的乐趣'])
                Z([3, 'share-safe'])
                Z([3, 'safe-text'])
                Z([3, '放心，分享小程序不会泄露您的日记'])
                Z([3, 'share-btn'])
                Z([3, 'share'])
                Z([3, 'share-btn-text'])
                Z([3, '去分享'])
                Z([3, 'onClosePolicyModal'])
                Z([a, [3, 'policy-modal '],
                    [
                        [2, '?:'],
                        [
                            [7],
                            [3, 'showPolicyModal']
                        ],
                        [1, 'show'],
                        [1, '']
                    ]
                ])
                Z(z[163])
                Z([3, 'policy-modal-content'])
                Z([3, 'policy-modal-header'])
                Z([3, 'policy-modal-title'])
                Z([a, [
                    [2, '?:'],
                    [
                        [2, '==='],
                        [
                            [7],
                            [3, 'policyType']
                        ],
                        [1, 'agreement']
                    ],
                    [1, '用户协议'],
                    [1, '隐私政策']
                ]])
                Z(z[176])
                Z([3, 'policy-close-x'])
                Z([3, '✕'])
                Z([3, 'policy-scroll'])
                Z([3, 'policy-text'])
                Z([a, [
                    [2, '?:'],
                    [
                        [2, '==='],
                        [
                            [7],
                            [3, 'policyType']
                        ],
                        [1, 'agreement']
                    ],
                    [
                        [7],
                        [3, 'agreementText']
                    ],
                    [
                        [7],
                        [3, 'privacyText']
                    ]
                ]])
                Z([
                    [7],
                    [3, 'showDesktopGuide']
                ])
                Z([3, 'onCloseDesktopGuide'])
                Z([a, [3, 'desktop-guide '],
                    [
                        [2, '?:'],
                        [
                            [7],
                            [3, 'showDesktopGuide']
                        ],
                        [1, 'show'],
                        [1, '']
                    ]
                ])
                Z(z[163])
                Z([3, 'guide-step1'])
                Z([3, 'guide-step1-row'])
                Z([3, 'guide-step1-text'])
                Z([3, '步骤1：点击右上角'])
                Z([3, 'guide-capsule-wrapper'])
                Z([3, 'guide-arrow-up'])
                Z([3, 'guide-menu-item'])
                Z([3, 'guide-menu-dot'])
                Z(z[200])
                Z(z[200])
                Z(z[163])
                Z([3, 'guide-step2'])
                Z([3, 'guide-step2-text'])
                Z([3, '步骤2：点击【添加到我的小程序】'])
                Z([3, '或【添加到桌面】'])
                Z([3, 'guide-options'])
                Z([3, 'guide-option'])
                Z([3, 'guide-option-icon-star'])
                Z([3, 'guide-star-row'])
                Z([3, 'guide-star'])
                Z(z[212])
                Z(z[211])
                Z(z[212])
                Z([3, 'guide-star-arrow'])
                Z([3, 'guide-option-label'])
                Z([3, '添加到我的\n小程序'])
                Z([3, 'guide-option-arrow'])
                Z([3, 'guide-option-desc'])
                Z([3, '微信首页下拉，从我的小程序进入'])
                Z(z[209])
                Z([3, 'guide-option-icon-phone'])
                Z([3, 'guide-phone-inner'])
                Z(z[217])
                Z(z[148])
                Z(z[219])
                Z(z[220])
                Z([3, '从手机桌面进入'])
                Z(z[190])
                Z([3, 'guide-close-btn'])
                Z([3, 'guide-close-text'])
                Z([3, '好滴'])
                Z([
                    [7],
                    [3, 'showPrivacyAuthModal']
                ])
                Z([3, 'onDisagreePrivacyAuth'])
                Z([3, 'privacy-auth-overlay'])
                Z(z[163])
                Z([3, 'privacy-auth-modal'])
                Z([3, 'privacy-auth-icon'])
                Z([3, '🔒'])
                Z([3, 'privacy-auth-title'])
                Z([3, '隐私协议'])
                Z([3, 'privacy-auth-content'])
                Z([3, 'privacy-auth-text'])
                Z([a, [
                    [7],
                    [3, 'privacyText']
                ]])
                Z([3, 'privacy-auth-btns'])
                Z(z[235])
                Z([3, 'privacy-auth-btn disagree'])
                Z([3, '不同意'])
                Z([3, 'onAgreePrivacyAuth'])
                Z([3, 'privacy-auth-btn agree'])
                Z([3, 'agree-btn'])
                Z([3, 'agreePrivacyAuthorization'])
                Z([3, '同意并继续'])
            })(__WXML_GLOBAL__.ops_cached.$gwx_XC_4_1);
            return __WXML_GLOBAL__.ops_cached.$gwx_XC_4_1
        }
        __WXML_GLOBAL__.ops_set.$gwx_XC_4 = z;
        __WXML_GLOBAL__.ops_init.$gwx_XC_4 = true;
        var x = ['./pages/profile/profile.wxml'];
        d_[x[0]] = {}
        var m0 = function(e, s, r, gg) {
            var z = gz$gwx_XC_4_1()
            var cFO = _n('view')
            _rz(z, cFO, 'class', 0, e, s, gg)
            var cIO = _n('view')
            _rz(z, cIO, 'class', 1, e, s, gg)
            var oJO = _mz(z, 'view', ['bindtap', 2, 'class', 1], [], e, s, gg)
            var lKO = _n('view')
            _rz(z, lKO, 'class', 4, e, s, gg)
            var aLO = _v()
            _(lKO, aLO)
            if (_oz(z, 5, e, s, gg)) {
                aLO.wxVkey = 1
                var tMO = _mz(z, 'image', ['class', 6, 'mode', 1, 'src', 2], [], e, s, gg)
                _(aLO, tMO)
            } else {
                aLO.wxVkey = 2
                var eNO = _mz(z, 'image', ['class', 9, 'mode', 1, 'src', 2], [], e, s, gg)
                _(aLO, eNO)
            }
            aLO.wxXCkey = 1
            _(oJO, lKO)
            var bOO = _n('text')
            _rz(z, bOO, 'class', 12, e, s, gg)
            var oPO = _oz(z, 13, e, s, gg)
            _(bOO, oPO)
            _(oJO, bOO)
            _(cIO, oJO)
            var xQO = _n('view')
            _rz(z, xQO, 'class', 14, e, s, gg)
            var oRO = _n('view')
            _rz(z, oRO, 'class', 15, e, s, gg)
            var fSO = _n('text')
            _rz(z, fSO, 'class', 16, e, s, gg)
            var cTO = _oz(z, 17, e, s, gg)
            _(fSO, cTO)
            _(oRO, fSO)
            var hUO = _n('text')
            _rz(z, hUO, 'class', 18, e, s, gg)
            var oVO = _oz(z, 19, e, s, gg)
            _(hUO, oVO)
            _(oRO, hUO)
            _(xQO, oRO)
            var cWO = _n('view')
            _rz(z, cWO, 'class', 20, e, s, gg)
            var oXO = _n('text')
            _rz(z, oXO, 'class', 21, e, s, gg)
            var lYO = _oz(z, 22, e, s, gg)
            _(oXO, lYO)
            _(cWO, oXO)
            var aZO = _n('text')
            _rz(z, aZO, 'class', 23, e, s, gg)
            var t1O = _oz(z, 24, e, s, gg)
            _(aZO, t1O)
            _(cWO, aZO)
            _(xQO, cWO)
            var e2O = _n('view')
            _rz(z, e2O, 'class', 25, e, s, gg)
            var b3O = _n('text')
            _rz(z, b3O, 'class', 26, e, s, gg)
            var o4O = _oz(z, 27, e, s, gg)
            _(b3O, o4O)
            _(e2O, b3O)
            var x5O = _n('text')
            _rz(z, x5O, 'class', 28, e, s, gg)
            var o6O = _oz(z, 29, e, s, gg)
            _(x5O, o6O)
            _(e2O, x5O)
            _(xQO, e2O)
            _(cIO, xQO)
            _(cFO, cIO)
            var f7O = _mz(z, 'view', ['bindtap', 30, 'class', 1], [], e, s, gg)
            var c8O = _n('view')
            _rz(z, c8O, 'class', 32, e, s, gg)
            var h9O = _mz(z, 'image', ['class', 33, 'mode', 1, 'src', 2], [], e, s, gg)
            _(c8O, h9O)
            var o0O = _n('view')
            _rz(z, o0O, 'class', 36, e, s, gg)
            var cAP = _n('text')
            _rz(z, cAP, 'class', 37, e, s, gg)
            var oBP = _oz(z, 38, e, s, gg)
            _(cAP, oBP)
            _(o0O, cAP)
            var lCP = _n('view')
            _rz(z, lCP, 'class', 39, e, s, gg)
            var aDP = _n('text')
            _rz(z, aDP, 'class', 40, e, s, gg)
            var tEP = _oz(z, 41, e, s, gg)
            _(aDP, tEP)
            _(lCP, aDP)
            _(o0O, lCP)
            _(c8O, o0O)
            _(f7O, c8O)
            var eFP = _n('view')
            _rz(z, eFP, 'class', 42, e, s, gg)
            var bGP = _v()
            _(eFP, bGP)
            if (_oz(z, 43, e, s, gg)) {
                bGP.wxVkey = 1
                var oHP = _n('text')
                _rz(z, oHP, 'class', 44, e, s, gg)
                var xIP = _oz(z, 45, e, s, gg)
                _(oHP, xIP)
                _(bGP, oHP)
            }
            var oJP = _n('text')
            _rz(z, oJP, 'class', 46, e, s, gg)
            var fKP = _oz(z, 47, e, s, gg)
            _(oJP, fKP)
            _(eFP, oJP)
            bGP.wxXCkey = 1
            _(f7O, eFP)
            _(cFO, f7O)
            var cLP = _n('view')
            _rz(z, cLP, 'class', 48, e, s, gg)
            var hMP = _n('view')
            _rz(z, hMP, 'class', 49, e, s, gg)
            var oNP = _mz(z, 'view', ['bindtap', 50, 'class', 1], [], e, s, gg)
            var cOP = _n('view')
            _rz(z, cOP, 'class', 52, e, s, gg)
            var oPP = _mz(z, 'image', ['class', 53, 'mode', 1, 'src', 2], [], e, s, gg)
            _(cOP, oPP)
            _(oNP, cOP)
            var lQP = _n('text')
            _rz(z, lQP, 'class', 56, e, s, gg)
            var aRP = _oz(z, 57, e, s, gg)
            _(lQP, aRP)
            _(oNP, lQP)
            _(hMP, oNP)
            var tSP = _n('view')
            _rz(z, tSP, 'class', 58, e, s, gg)
            var eTP = _mz(z, 'button', ['bindtap', 59, 'class', 1, 'openType', 2, 'sessionFrom', 3], [], e, s, gg)
            var bUP = _n('view')
            _rz(z, bUP, 'class', 63, e, s, gg)
            var oVP = _mz(z, 'image', ['class', 64, 'mode', 1, 'src', 2], [], e, s, gg)
            _(bUP, oVP)
            _(eTP, bUP)
            var xWP = _n('text')
            _rz(z, xWP, 'class', 67, e, s, gg)
            var oXP = _oz(z, 68, e, s, gg)
            _(xWP, oXP)
            _(eTP, xWP)
            _(tSP, eTP)
            _(hMP, tSP)
            var fYP = _mz(z, 'view', ['bindtap', 69, 'class', 1], [], e, s, gg)
            var cZP = _n('view')
            _rz(z, cZP, 'class', 71, e, s, gg)
            var h1P = _mz(z, 'image', ['class', 72, 'mode', 1, 'src', 2], [], e, s, gg)
            _(cZP, h1P)
            _(fYP, cZP)
            var o2P = _n('text')
            _rz(z, o2P, 'class', 75, e, s, gg)
            var c3P = _oz(z, 76, e, s, gg)
            _(o2P, c3P)
            _(fYP, o2P)
            _(hMP, fYP)
            var o4P = _mz(z, 'view', ['bindtap', 77, 'class', 1], [], e, s, gg)
            var l5P = _n('view')
            _rz(z, l5P, 'class', 79, e, s, gg)
            var a6P = _mz(z, 'image', ['class', 80, 'mode', 1, 'src', 2], [], e, s, gg)
            _(l5P, a6P)
            _(o4P, l5P)
            var t7P = _n('text')
            _rz(z, t7P, 'class', 83, e, s, gg)
            var e8P = _oz(z, 84, e, s, gg)
            _(t7P, e8P)
            _(o4P, t7P)
            _(hMP, o4P)
            _(cLP, hMP)
            _(cFO, cLP)
            var b9P = _n('view')
            _rz(z, b9P, 'class', 85, e, s, gg)
            var o0P = _mz(z, 'view', ['bindtap', 86, 'class', 1], [], e, s, gg)
            var xAQ = _n('view')
            _rz(z, xAQ, 'class', 88, e, s, gg)
            var oBQ = _n('view')
            _rz(z, oBQ, 'class', 89, e, s, gg)
            var fCQ = _mz(z, 'image', ['class', 90, 'mode', 1, 'src', 2], [], e, s, gg)
            _(oBQ, fCQ)
            _(xAQ, oBQ)
            var cDQ = _n('text')
            _rz(z, cDQ, 'class', 93, e, s, gg)
            var hEQ = _oz(z, 94, e, s, gg)
            _(cDQ, hEQ)
            _(xAQ, cDQ)
            _(o0P, xAQ)
            var oFQ = _n('view')
            _rz(z, oFQ, 'class', 95, e, s, gg)
            var cGQ = _n('text')
            _rz(z, cGQ, 'class', 96, e, s, gg)
            var oHQ = _oz(z, 97, e, s, gg)
            _(cGQ, oHQ)
            _(oFQ, cGQ)
            var lIQ = _n('text')
            _rz(z, lIQ, 'class', 98, e, s, gg)
            var aJQ = _oz(z, 99, e, s, gg)
            _(lIQ, aJQ)
            _(oFQ, lIQ)
            _(o0P, oFQ)
            _(b9P, o0P)
            var tKQ = _mz(z, 'view', ['bindtap', 100, 'class', 1], [], e, s, gg)
            var eLQ = _n('view')
            _rz(z, eLQ, 'class', 102, e, s, gg)
            var bMQ = _n('view')
            _rz(z, bMQ, 'class', 103, e, s, gg)
            var oNQ = _mz(z, 'image', ['class', 104, 'mode', 1, 'src', 2], [], e, s, gg)
            _(bMQ, oNQ)
            _(eLQ, bMQ)
            var xOQ = _n('text')
            _rz(z, xOQ, 'class', 107, e, s, gg)
            var oPQ = _oz(z, 108, e, s, gg)
            _(xOQ, oPQ)
            _(eLQ, xOQ)
            _(tKQ, eLQ)
            var fQQ = _n('view')
            _rz(z, fQQ, 'class', 109, e, s, gg)
            var cRQ = _v()
            _(fQQ, cRQ)
            if (_oz(z, 110, e, s, gg)) {
                cRQ.wxVkey = 1
                var hSQ = _n('text')
                _rz(z, hSQ, 'class', 111, e, s, gg)
                var oTQ = _oz(z, 112, e, s, gg)
                _(hSQ, oTQ)
                _(cRQ, hSQ)
            }
            var cUQ = _n('text')
            _rz(z, cUQ, 'class', 113, e, s, gg)
            var oVQ = _oz(z, 114, e, s, gg)
            _(cUQ, oVQ)
            _(fQQ, cUQ)
            cRQ.wxXCkey = 1
            _(tKQ, fQQ)
            _(b9P, tKQ)
            var lWQ = _mz(z, 'view', ['bindtap', 115, 'class', 1], [], e, s, gg)
            var aXQ = _n('view')
            _rz(z, aXQ, 'class', 117, e, s, gg)
            var tYQ = _n('view')
            _rz(z, tYQ, 'class', 118, e, s, gg)
            var eZQ = _mz(z, 'image', ['class', 119, 'mode', 1, 'src', 2], [], e, s, gg)
            _(tYQ, eZQ)
            _(aXQ, tYQ)
            var b1Q = _n('text')
            _rz(z, b1Q, 'class', 122, e, s, gg)
            var o2Q = _oz(z, 123, e, s, gg)
            _(b1Q, o2Q)
            _(aXQ, b1Q)
            _(lWQ, aXQ)
            var x3Q = _n('view')
            _rz(z, x3Q, 'class', 124, e, s, gg)
            var o4Q = _n('text')
            _rz(z, o4Q, 'class', 125, e, s, gg)
            var f5Q = _oz(z, 126, e, s, gg)
            _(o4Q, f5Q)
            _(x3Q, o4Q)
            var c6Q = _n('text')
            _rz(z, c6Q, 'class', 127, e, s, gg)
            var h7Q = _oz(z, 128, e, s, gg)
            _(c6Q, h7Q)
            _(x3Q, c6Q)
            _(lWQ, x3Q)
            _(b9P, lWQ)
            var o8Q = _mz(z, 'view', ['bindtap', 129, 'class', 1], [], e, s, gg)
            var c9Q = _n('view')
            _rz(z, c9Q, 'class', 131, e, s, gg)
            var o0Q = _n('view')
            _rz(z, o0Q, 'class', 132, e, s, gg)
            var lAR = _mz(z, 'image', ['class', 133, 'mode', 1, 'src', 2], [], e, s, gg)
            _(o0Q, lAR)
            _(c9Q, o0Q)
            var aBR = _n('text')
            _rz(z, aBR, 'class', 136, e, s, gg)
            var tCR = _oz(z, 137, e, s, gg)
            _(aBR, tCR)
            _(c9Q, aBR)
            _(o8Q, c9Q)
            var eDR = _n('text')
            _rz(z, eDR, 'class', 138, e, s, gg)
            var bER = _oz(z, 139, e, s, gg)
            _(eDR, bER)
            _(o8Q, eDR)
            _(b9P, o8Q)
            var oFR = _mz(z, 'view', ['bindtap', 140, 'class', 1], [], e, s, gg)
            var xGR = _n('view')
            _rz(z, xGR, 'class', 142, e, s, gg)
            var oHR = _n('view')
            _rz(z, oHR, 'class', 143, e, s, gg)
            var fIR = _mz(z, 'image', ['class', 144, 'mode', 1, 'src', 2], [], e, s, gg)
            _(oHR, fIR)
            _(xGR, oHR)
            var cJR = _n('text')
            _rz(z, cJR, 'class', 147, e, s, gg)
            var hKR = _oz(z, 148, e, s, gg)
            _(cJR, hKR)
            _(xGR, cJR)
            _(oFR, xGR)
            var oLR = _n('text')
            _rz(z, oLR, 'class', 149, e, s, gg)
            var cMR = _oz(z, 150, e, s, gg)
            _(oLR, cMR)
            _(oFR, oLR)
            _(b9P, oFR)
            _(cFO, b9P)
            var oNR = _n('view')
            _rz(z, oNR, 'class', 151, e, s, gg)
            var lOR = _mz(z, 'text', ['bindtap', 152, 'class', 1], [], e, s, gg)
            var aPR = _oz(z, 154, e, s, gg)
            _(lOR, aPR)
            _(oNR, lOR)
            var tQR = _n('text')
            _rz(z, tQR, 'class', 155, e, s, gg)
            var eRR = _oz(z, 156, e, s, gg)
            _(tQR, eRR)
            _(oNR, tQR)
            var bSR = _mz(z, 'text', ['bindtap', 157, 'class', 1], [], e, s, gg)
            var oTR = _oz(z, 159, e, s, gg)
            _(bSR, oTR)
            _(oNR, bSR)
            _(cFO, oNR)
            var xUR = _n('view')
            _rz(z, xUR, 'class', 160, e, s, gg)
            _(cFO, xUR)
            var oVR = _mz(z, 'view', ['bindtap', 161, 'class', 1], [], e, s, gg)
            var fWR = _mz(z, 'view', ['catchtap', 163, 'class', 1], [], e, s, gg)
            var cXR = _n('text')
            _rz(z, cXR, 'class', 165, e, s, gg)
            var hYR = _oz(z, 166, e, s, gg)
            _(cXR, hYR)
            _(fWR, cXR)
            var oZR = _n('text')
            _rz(z, oZR, 'class', 167, e, s, gg)
            var c1R = _oz(z, 168, e, s, gg)
            _(oZR, c1R)
            _(fWR, oZR)
            var o2R = _n('view')
            _rz(z, o2R, 'class', 169, e, s, gg)
            var l3R = _n('text')
            _rz(z, l3R, 'class', 170, e, s, gg)
            var a4R = _oz(z, 171, e, s, gg)
            _(l3R, a4R)
            _(o2R, l3R)
            _(fWR, o2R)
            var t5R = _mz(z, 'button', ['class', 172, 'openType', 1], [], e, s, gg)
            var e6R = _n('text')
            _rz(z, e6R, 'class', 174, e, s, gg)
            var b7R = _oz(z, 175, e, s, gg)
            _(e6R, b7R)
            _(t5R, e6R)
            _(fWR, t5R)
            _(oVR, fWR)
            _(cFO, oVR)
            var o8R = _mz(z, 'view', ['bindtap', 176, 'class', 1], [], e, s, gg)
            var x9R = _mz(z, 'view', ['catchtap', 178, 'class', 1], [], e, s, gg)
            var o0R = _n('view')
            _rz(z, o0R, 'class', 180, e, s, gg)
            var fAS = _n('text')
            _rz(z, fAS, 'class', 181, e, s, gg)
            var cBS = _oz(z, 182, e, s, gg)
            _(fAS, cBS)
            _(o0R, fAS)
            var hCS = _mz(z, 'view', ['bindtap', 183, 'class', 1], [], e, s, gg)
            var oDS = _n('text')
            var cES = _oz(z, 185, e, s, gg)
            _(oDS, cES)
            _(hCS, oDS)
            _(o0R, hCS)
            _(x9R, o0R)
            var oFS = _mz(z, 'scroll-view', ['scrollY', -1, 'class', 186], [], e, s, gg)
            var lGS = _n('text')
            _rz(z, lGS, 'class', 187, e, s, gg)
            var aHS = _oz(z, 188, e, s, gg)
            _(lGS, aHS)
            _(oFS, lGS)
            _(x9R, oFS)
            _(o8R, x9R)
            _(cFO, o8R)
            var hGO = _v()
            _(cFO, hGO)
            if (_oz(z, 189, e, s, gg)) {
                hGO.wxVkey = 1
                var tIS = _mz(z, 'view', ['bindtap', 190, 'class', 1], [], e, s, gg)
                var eJS = _mz(z, 'view', ['catchtap', 192, 'class', 1], [], e, s, gg)
                var bKS = _n('view')
                _rz(z, bKS, 'class', 194, e, s, gg)
                var oLS = _n('text')
                _rz(z, oLS, 'class', 195, e, s, gg)
                var xMS = _oz(z, 196, e, s, gg)
                _(oLS, xMS)
                _(bKS, oLS)
                var oNS = _n('view')
                _rz(z, oNS, 'class', 197, e, s, gg)
                var fOS = _n('view')
                _rz(z, fOS, 'class', 198, e, s, gg)
                _(oNS, fOS)
                var cPS = _n('view')
                _rz(z, cPS, 'class', 199, e, s, gg)
                var hQS = _n('view')
                _rz(z, hQS, 'class', 200, e, s, gg)
                _(cPS, hQS)
                var oRS = _n('view')
                _rz(z, oRS, 'class', 201, e, s, gg)
                _(cPS, oRS)
                var cSS = _n('view')
                _rz(z, cSS, 'class', 202, e, s, gg)
                _(cPS, cSS)
                _(oNS, cPS)
                _(bKS, oNS)
                _(eJS, bKS)
                _(tIS, eJS)
                var oTS = _mz(z, 'view', ['catchtap', 203, 'class', 1], [], e, s, gg)
                var lUS = _n('view')
                _rz(z, lUS, 'class', 205, e, s, gg)
                var aVS = _n('text')
                var tWS = _oz(z, 206, e, s, gg)
                _(aVS, tWS)
                _(lUS, aVS)
                var eXS = _n('text')
                var bYS = _oz(z, 207, e, s, gg)
                _(eXS, bYS)
                _(lUS, eXS)
                _(oTS, lUS)
                var oZS = _n('view')
                _rz(z, oZS, 'class', 208, e, s, gg)
                var x1S = _n('view')
                _rz(z, x1S, 'class', 209, e, s, gg)
                var o2S = _n('view')
                _rz(z, o2S, 'class', 210, e, s, gg)
                var f3S = _n('view')
                _rz(z, f3S, 'class', 211, e, s, gg)
                var c4S = _n('view')
                _rz(z, c4S, 'class', 212, e, s, gg)
                _(f3S, c4S)
                var h5S = _n('view')
                _rz(z, h5S, 'class', 213, e, s, gg)
                _(f3S, h5S)
                _(o2S, f3S)
                var o6S = _n('view')
                _rz(z, o6S, 'class', 214, e, s, gg)
                var c7S = _n('view')
                _rz(z, c7S, 'class', 215, e, s, gg)
                _(o6S, c7S)
                var o8S = _n('view')
                _rz(z, o8S, 'class', 216, e, s, gg)
                _(o6S, o8S)
                _(o2S, o6S)
                _(x1S, o2S)
                var l9S = _n('text')
                _rz(z, l9S, 'class', 217, e, s, gg)
                var a0S = _oz(z, 218, e, s, gg)
                _(l9S, a0S)
                _(x1S, l9S)
                var tAT = _n('view')
                _rz(z, tAT, 'class', 219, e, s, gg)
                _(x1S, tAT)
                var eBT = _n('text')
                _rz(z, eBT, 'class', 220, e, s, gg)
                var bCT = _oz(z, 221, e, s, gg)
                _(eBT, bCT)
                _(x1S, eBT)
                _(oZS, x1S)
                var oDT = _n('view')
                _rz(z, oDT, 'class', 222, e, s, gg)
                var xET = _n('view')
                _rz(z, xET, 'class', 223, e, s, gg)
                var oFT = _n('view')
                _rz(z, oFT, 'class', 224, e, s, gg)
                _(xET, oFT)
                _(oDT, xET)
                var fGT = _n('text')
                _rz(z, fGT, 'class', 225, e, s, gg)
                var cHT = _oz(z, 226, e, s, gg)
                _(fGT, cHT)
                _(oDT, fGT)
                var hIT = _n('view')
                _rz(z, hIT, 'class', 227, e, s, gg)
                _(oDT, hIT)
                var oJT = _n('text')
                _rz(z, oJT, 'class', 228, e, s, gg)
                var cKT = _oz(z, 229, e, s, gg)
                _(oJT, cKT)
                _(oDT, oJT)
                _(oZS, oDT)
                _(oTS, oZS)
                _(tIS, oTS)
                var oLT = _mz(z, 'view', ['catchtap', 230, 'class', 1], [], e, s, gg)
                var lMT = _n('text')
                _rz(z, lMT, 'class', 232, e, s, gg)
                var aNT = _oz(z, 233, e, s, gg)
                _(lMT, aNT)
                _(oLT, lMT)
                _(tIS, oLT)
                _(hGO, tIS)
            }
            var oHO = _v()
            _(cFO, oHO)
            if (_oz(z, 234, e, s, gg)) {
                oHO.wxVkey = 1
                var tOT = _mz(z, 'view', ['catchtap', 235, 'class', 1], [], e, s, gg)
                var ePT = _mz(z, 'view', ['catchtap', 237, 'class', 1], [], e, s, gg)
                var bQT = _n('view')
                _rz(z, bQT, 'class', 239, e, s, gg)
                var oRT = _oz(z, 240, e, s, gg)
                _(bQT, oRT)
                _(ePT, bQT)
                var xST = _n('text')
                _rz(z, xST, 'class', 241, e, s, gg)
                var oTT = _oz(z, 242, e, s, gg)
                _(xST, oTT)
                _(ePT, xST)
                var fUT = _mz(z, 'scroll-view', ['scrollY', -1, 'class', 243], [], e, s, gg)
                var cVT = _n('text')
                _rz(z, cVT, 'class', 244, e, s, gg)
                var hWT = _oz(z, 245, e, s, gg)
                _(cVT, hWT)
                _(fUT, cVT)
                _(ePT, fUT)
                var oXT = _n('view')
                _rz(z, oXT, 'class', 246, e, s, gg)
                var cYT = _mz(z, 'button', ['catchtap', 247, 'class', 1], [], e, s, gg)
                var oZT = _oz(z, 249, e, s, gg)
                _(cYT, oZT)
                _(oXT, cYT)
                var l1T = _mz(z, 'button', ['bindagreeprivacyauthorization', 250, 'class', 1, 'id', 2, 'openType', 3], [], e, s, gg)
                var a2T = _oz(z, 254, e, s, gg)
                _(l1T, a2T)
                _(oXT, l1T)
                _(ePT, oXT)
                _(tOT, ePT)
                _(oHO, tOT)
            }
            hGO.wxXCkey = 1
            oHO.wxXCkey = 1
            _(r, cFO)
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
                g = "$gwx_XC_4";
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
if (__vd_version_info__.delayedGwx || false) $gwx_XC_4();
if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/profile/profile.wxml'] = [$gwx_XC_4, './pages/profile/profile.wxml'];
else __wxAppCode__['pages/profile/profile.wxml'] = $gwx_XC_4('./pages/profile/profile.wxml');

var noCss = typeof __vd_version_info__ !== 'undefined' && __vd_version_info__.noCss === true;
if (!noCss) {
    __wxAppCode__['pages/profile/profile.wxss'] = setCssToHead([".", [1], "page{background:#f5f5f5;min-height:100vh}\n.", [1], "header{background:radial-gradient(circle at 25% 20%,rgba(200,190,230,.35) 0,transparent 55%),radial-gradient(circle at 80% 15%,rgba(180,200,235,.3) 0,transparent 50%),radial-gradient(circle at 70% 85%,rgba(255,210,180,.18) 0,transparent 45%),linear-gradient(170deg,#f5f4fa,#f8f6f2 40%,#faf8f3);border-bottom:none;overflow:hidden;padding:calc(env(safe-area-inset-top) + ", [0, 90], ") ", [0, 32], " ", [0, 48], ";position:relative}\n.", [1], "header::after,.", [1], "header::before{display:none}\n.", [1], "header-center{-webkit-align-items:center;align-items:center;display:-webkit-flex;display:flex;-webkit-flex-direction:column;flex-direction:column;margin-bottom:", [0, 22], "}\n.", [1], "header-avatar-wrap{border:", [0, 3], " solid rgba(0,0,0,.06);border-radius:50%;-webkit-flex-shrink:0;flex-shrink:0;overflow:hidden}\n.", [1], "header-avatar-img,.", [1], "header-avatar-placeholder,.", [1], "header-avatar-wrap{height:", [0, 140], ";width:", [0, 140], "}\n.", [1], "header-name{color:#333;font-size:", [0, 30], ";font-weight:600;margin-top:", [0, 12], "}\n.", [1], "checkin-tag{background:hsla(0,0%,100%,.85);border-radius:", [0, 24], ";color:#666;font-size:", [0, 24], ";padding:", [0, 6], " ", [0, 20], "}\n.", [1], "stats-row{display:-webkit-flex;display:flex;padding-top:0}\n.", [1], "stat-col{-webkit-flex:1;flex:1;text-align:center}\n.", [1], "stat-num{color:#222;display:block;font-size:", [0, 40], ";font-weight:700;line-height:1.25}\n.", [1], "stat-label{color:#999;display:block;font-size:", [0, 23], ";margin-top:", [0, 6], "}\n.", [1], "vip-card{-webkit-align-items:center;align-items:center;background:#fff;border-radius:", [0, 16], ";box-shadow:0 ", [0, 2], " ", [0, 12], " rgba(0,0,0,.05);display:-webkit-flex;display:flex;-webkit-justify-content:space-between;justify-content:space-between;margin:", [0, -16], " ", [0, 28], " 0;padding:", [0, 22], " ", [0, 26], ";position:relative;z-index:10}\n.", [1], "vip-card:active{opacity:.85}\n.", [1], "vip-left{-webkit-align-items:center;align-items:center;display:-webkit-flex;display:flex}\n.", [1], "vip-crown-img{height:", [0, 76], ";margin-right:", [0, 18], ";width:", [0, 76], "}\n.", [1], "vip-texts{display:-webkit-flex;display:flex;-webkit-flex-direction:column;flex-direction:column}\n.", [1], "vip-title{color:#333;font-size:", [0, 29], ";font-weight:600}\n.", [1], "vip-sub{color:#999;font-size:", [0, 23], ";margin-top:", [0, 4], "}\n.", [1], "vip-sub-row{-webkit-align-items:center;align-items:center;display:-webkit-flex;display:flex;-webkit-flex-wrap:nowrap;flex-wrap:nowrap}\n.", [1], "vip-sep{color:#ccc;font-size:", [0, 23], ";margin:0 ", [0, 12], "}\n.", [1], "vip-arrow{color:silver;font-size:", [0, 36], ";line-height:1}\n.", [1], "vip-right{-webkit-align-items:center;align-items:center;display:-webkit-flex;display:flex;-webkit-flex-shrink:0;flex-shrink:0;gap:", [0, 4], "}\n.", [1], "checkin-remind-tag{background:#fff0f0;border-radius:", [0, 6], ";color:#ff6b6b;font-size:", [0, 19], ";font-weight:500;line-height:1.4;padding:", [0, 2], " ", [0, 10], "}\n.", [1], "checkin-reminder{-webkit-align-items:center;align-items:center;background:#f7f7f7;border-radius:", [0, 8], ";display:-webkit-flex;display:flex;-webkit-flex-shrink:0;flex-shrink:0;margin-left:", [0, 12], ";padding:", [0, 8], " ", [0, 16], "}\n.", [1], "checkin-reminder:active{opacity:.65}\n.", [1], "reminder-dot{color:#ccc;font-size:", [0, 32], ";line-height:1;margin-right:", [0, 4], "}\n.", [1], "reminder-text{color:#999;font-size:", [0, 23], ";font-weight:500;white-space:nowrap}\n.", [1], "icon-section{background:#fff;border-radius:", [0, 16], ";box-shadow:0 ", [0, 2], " ", [0, 12], " rgba(0,0,0,.05);margin:", [0, 20], " ", [0, 28], " ", [0, 24], "}\n.", [1], "icon-grid{display:-webkit-flex;display:flex;-webkit-justify-content:space-around;justify-content:space-around;padding:", [0, 20], " ", [0, 12], " ", [0, 24], "}\n.", [1], "grid-item{-webkit-flex-direction:column;flex-direction:column;min-width:", [0, 80], "}\n.", [1], "grid-icon-wrap,.", [1], "grid-item{-webkit-align-items:center;align-items:center;display:-webkit-flex;display:flex}\n.", [1], "grid-icon-wrap{-webkit-justify-content:center;justify-content:center}\n.", [1], "grid-icon,.", [1], "grid-icon-wrap{height:", [0, 48], ";width:", [0, 48], "}\n.", [1], "grid-label{color:#777;font-size:", [0, 25], ";margin-top:", [0, 6], "}\n.", [1], "grid-contact-btn{-webkit-align-items:center;align-items:center;background:transparent;border:none;display:-webkit-flex;display:flex;-webkit-flex-direction:column;flex-direction:column;line-height:normal;margin:0;padding:0}\n.", [1], "grid-contact-btn::after{border:none}\n.", [1], "menu-list{padding:0 ", [0, 28], "}\n.", [1], "menu-dual-row{margin-bottom:", [0, 12], "}\n.", [1], "menu-dual-card{-webkit-align-items:center;align-items:center;background:#fff;border-radius:", [0, 16], ";display:-webkit-flex;display:flex;-webkit-justify-content:space-between;justify-content:space-between;padding:", [0, 28], "}\n.", [1], "menu-dual-card:active{opacity:.85}\n.", [1], "menu-dual-icon-wrap,.", [1], "menu-dual-left{-webkit-align-items:center;align-items:center;display:-webkit-flex;display:flex}\n.", [1], "menu-dual-icon-wrap{-webkit-justify-content:center;justify-content:center}\n.", [1], "menu-dual-icon,.", [1], "menu-dual-icon-wrap{height:", [0, 48], ";width:", [0, 48], "}\n.", [1], "menu-dual-title{color:#333;font-size:", [0, 30], ";margin-left:", [0, 18], "}\n.", [1], "menu-single-card{-webkit-align-items:center;align-items:center;background:#fff;border-radius:", [0, 16], ";display:-webkit-flex;display:flex;-webkit-justify-content:space-between;justify-content:space-between;margin-bottom:", [0, 12], ";padding:", [0, 32], " ", [0, 28], "}\n.", [1], "menu-single-card:active{opacity:.85}\n.", [1], "menu-single-left{-webkit-flex:1;flex:1}\n.", [1], "menu-single-icon-wrap,.", [1], "menu-single-left{-webkit-align-items:center;align-items:center;display:-webkit-flex;display:flex}\n.", [1], "menu-single-icon-wrap{-webkit-justify-content:center;justify-content:center}\n.", [1], "menu-single-icon,.", [1], "menu-single-icon-wrap{height:", [0, 46], ";width:", [0, 46], "}\n.", [1], "menu-single-title{color:#333;font-size:", [0, 29], ";margin-left:", [0, 18], "}\n.", [1], "menu-arrow{color:silver;-webkit-flex-shrink:0;flex-shrink:0;font-size:", [0, 26], ";margin-left:", [0, 14], "}\n.", [1], "menu-single-right{-webkit-align-items:center;align-items:center;display:-webkit-flex;display:flex}\n.", [1], "reminder-badge{color:#bbb}\n.", [1], "lock-status,.", [1], "reminder-badge{font-size:", [0, 23], ";font-weight:500}\n.", [1], "lock-status{-webkit-flex-shrink:0;flex-shrink:0;margin-right:", [0, 4], "}\n.", [1], "lock-status.", [1], "status-off,.", [1], "lock-status.", [1], "status-on{color:#bbb}\n.", [1], "head-image-new-badge{color:#ff6b6b;font-size:", [0, 22], ";font-weight:500}\n.", [1], "head-image-new-badge,.", [1], "security-risk-tag{-webkit-flex-shrink:0;flex-shrink:0;margin-right:", [0, 4], "}\n.", [1], "security-risk-tag{background:#fef3e7;border-radius:", [0, 8], ";color:#e67e22;font-size:", [0, 24], ";padding:", [0, 6], " ", [0, 16], "}\n.", [1], "bottom-safe-area{height:env(safe-area-inset-bottom);height:", [0, 60], "}\n.", [1], "policy-links{padding:", [0, 24], " 0 ", [0, 16], ";text-align:center}\n.", [1], "policy-link{color:#888;font-size:", [0, 22], "}\n.", [1], "policy-divider{color:#ddd;font-size:", [0, 22], ";margin:0 ", [0, 8], "}\n.", [1], "share-modal{-webkit-align-items:center;align-items:center;background:rgba(0,0,0,.55);bottom:0;display:-webkit-flex;display:flex;-webkit-justify-content:center;justify-content:center;left:0;opacity:0;pointer-events:none;position:fixed;right:0;top:0;transition:opacity .25s ease;z-index:200}\n.", [1], "share-modal.", [1], "show{opacity:1;pointer-events:auto}\n.", [1], "share-modal-content{background:#fff;border-radius:", [0, 24], ";padding:", [0, 48], " ", [0, 36], " ", [0, 40], ";text-align:center;width:", [0, 520], "}\n.", [1], "share-title{color:#333;display:block;font-size:", [0, 32], ";font-weight:600;margin-bottom:", [0, 8], "}\n.", [1], "share-subtitle{color:#888;display:block;font-size:", [0, 25], ";margin-bottom:", [0, 24], "}\n.", [1], "share-safe{background:#fff9e6;border-radius:", [0, 12], ";margin-bottom:", [0, 28], ";padding:", [0, 14], " ", [0, 16], "}\n.", [1], "safe-text{color:#b89a30;font-size:", [0, 21], "}\n.", [1], "share-btn{background:linear-gradient(135deg,#ff9500,#ff6b00);border-radius:", [0, 44], ";height:", [0, 80], ";line-height:", [0, 80], "}\n.", [1], "share-btn,.", [1], "share-btn::after{border:none}\n.", [1], "share-btn-text{color:#fff;font-size:", [0, 30], ";font-weight:500}\n.", [1], "policy-modal{-webkit-align-items:center;align-items:center;background:rgba(0,0,0,.55);bottom:0;display:-webkit-flex;display:flex;-webkit-justify-content:center;justify-content:center;left:0;opacity:0;pointer-events:none;position:fixed;right:0;top:0;transition:opacity .25s ease;z-index:200}\n.", [1], "policy-modal.", [1], "show{opacity:1;pointer-events:auto}\n.", [1], "policy-modal-content{background:#fff;border-radius:", [0, 24], ";box-sizing:border-box;display:-webkit-flex;display:flex;-webkit-flex-direction:column;flex-direction:column;max-height:80vh;padding:", [0, 32], " ", [0, 32], " ", [0, 28], ";width:", [0, 600], "}\n.", [1], "policy-modal-header{-webkit-align-items:center;align-items:center;display:-webkit-flex;display:flex;-webkit-justify-content:space-between;justify-content:space-between;margin-bottom:", [0, 20], "}\n.", [1], "policy-modal-title{color:#333;display:block;font-size:", [0, 34], ";font-weight:600}\n.", [1], "policy-close-x{-webkit-align-items:center;align-items:center;background:#f5f5f5;border-radius:50%;display:-webkit-flex;display:flex;height:", [0, 52], ";-webkit-justify-content:center;justify-content:center;width:", [0, 52], "}\n.", [1], "policy-close-x wx-text{color:#999;font-size:", [0, 30], "}\n.", [1], "policy-scroll{max-height:60vh;padding:0 ", [0, 4], "}\n.", [1], "policy-text{color:#666;display:block;font-size:", [0, 26], ";line-height:1.8;white-space:pre-wrap}\n.", [1], "desktop-guide{background:rgba(0,0,0,.75);bottom:0;left:0;opacity:0;pointer-events:none;position:fixed;right:0;top:0;transition:opacity .25s ease;z-index:200}\n.", [1], "desktop-guide.", [1], "show{opacity:1;pointer-events:auto}\n.", [1], "guide-step1{position:absolute;right:", [0, 80], ";top:calc(env(safe-area-inset-top) + ", [0, 140], ")}\n.", [1], "guide-step1-row{-webkit-align-items:flex-end;align-items:flex-end;display:-webkit-flex;display:flex;gap:", [0, 16], "}\n.", [1], "guide-step1-text{color:#fff;font-size:", [0, 32], ";font-weight:500;line-height:", [0, 56], "}\n.", [1], "guide-capsule-wrapper{-webkit-flex-direction:column;flex-direction:column}\n.", [1], "guide-capsule,.", [1], "guide-capsule-wrapper{-webkit-align-items:center;align-items:center;display:-webkit-flex;display:flex}\n.", [1], "guide-capsule{background:#fff;border-radius:", [0, 28], ";gap:", [0, 10], ";height:", [0, 56], ";-webkit-justify-content:center;justify-content:center;width:", [0, 140], "}\n.", [1], "guide-capsule-dot{background:#333;border-radius:50%;height:", [0, 10], ";width:", [0, 10], "}\n.", [1], "guide-arrow-up{background:#fff;height:", [0, 80], ";margin-top:", [0, 16], ";position:relative;width:", [0, 4], "}\n.", [1], "guide-arrow-up::before{border-bottom:", [0, 24], " solid #fff;border-left:", [0, 16], " solid transparent;border-right:", [0, 16], " solid transparent;content:\x22\x22;height:0;left:50%;position:absolute;top:0;-webkit-transform:translateX(-50%);transform:translateX(-50%);width:0}\n.", [1], "guide-menu-item{-webkit-align-items:center;align-items:center;background:#fff;border-radius:", [0, 24], ";display:-webkit-flex;display:flex;height:", [0, 48], ";-webkit-justify-content:center;justify-content:center;margin-top:", [0, 8], ";width:", [0, 120], "}\n.", [1], "guide-menu-dot{background:#333;border-radius:50%;height:", [0, 10], ";margin:0 ", [0, 4], ";width:", [0, 10], "}\n.", [1], "guide-menu-dot:nth-child(2){height:", [0, 14], ";width:", [0, 14], "}\n.", [1], "guide-step2{box-sizing:border-box;left:50%;padding:0 ", [0, 60], ";position:absolute;top:24%;-webkit-transform:translate(-50%,0);transform:translate(-50%,0);width:100%}\n.", [1], "guide-step2,.", [1], "guide-step2-text{-webkit-align-items:center;align-items:center;display:-webkit-flex;display:flex;-webkit-flex-direction:column;flex-direction:column}\n.", [1], "guide-step2-text{color:#fff;font-size:", [0, 32], ";font-weight:500;line-height:1.6;margin-bottom:", [0, 60], ";text-align:center}\n.", [1], "guide-options{gap:", [0, 60], "}\n.", [1], "guide-option,.", [1], "guide-options{display:-webkit-flex;display:flex}\n.", [1], "guide-option{-webkit-align-items:center;align-items:center;-webkit-flex-direction:column;flex-direction:column;gap:", [0, 20], "}\n.", [1], "guide-option-icon-star{-webkit-align-items:center;align-items:center;background:#fff;border-radius:", [0, 32], ";-webkit-flex-direction:column;flex-direction:column;height:", [0, 140], ";-webkit-justify-content:center;justify-content:center;position:relative;width:", [0, 140], "}\n.", [1], "guide-option-icon-star,.", [1], "guide-star-row{display:-webkit-flex;display:flex;gap:", [0, 12], "}\n.", [1], "guide-star{background:#ffd93d;border-radius:50%;height:", [0, 32], ";width:", [0, 32], "}\n.", [1], "guide-star-arrow{border-left:", [0, 10], " solid transparent;border-right:", [0, 10], " solid transparent;border-top:", [0, 14], " solid #ffd93d;height:0;margin-left:", [0, 4], ";margin-top:", [0, 10], ";-webkit-transform:rotate(-135deg);transform:rotate(-135deg);width:0}\n.", [1], "guide-option-icon-phone{-webkit-align-items:center;align-items:center;background:#fff;border-radius:", [0, 32], ";display:-webkit-flex;display:flex;height:", [0, 140], ";-webkit-justify-content:center;justify-content:center;width:", [0, 140], "}\n.", [1], "guide-phone-inner{background:#a8d5a2;border-radius:", [0, 12], ";height:", [0, 110], ";position:relative;width:", [0, 72], "}\n.", [1], "guide-phone-inner::after{background:#fff;border-radius:50%;bottom:", [0, 12], ";content:\x22\x22;height:", [0, 16], ";left:50%;position:absolute;-webkit-transform:translateX(-50%);transform:translateX(-50%);width:", [0, 16], "}\n.", [1], "guide-option-label{color:#fff;font-size:", [0, 28], ";line-height:1.4;text-align:center}\n.", [1], "guide-option-arrow{-webkit-align-items:center;align-items:center;display:-webkit-flex;display:flex;-webkit-flex-direction:column;flex-direction:column;margin-top:", [0, 8], "}\n.", [1], "guide-option-arrow::before{background:#fff;content:\x22\x22;height:", [0, 28], ";width:", [0, 4], "}\n.", [1], "guide-option-arrow::after{border-left:", [0, 14], " solid transparent;border-right:", [0, 14], " solid transparent;border-top:", [0, 20], " solid #fff;content:\x22\x22;height:0;margin-top:", [0, -2], ";width:0}\n.", [1], "guide-option-desc{color:#fff;font-size:", [0, 32], ";font-weight:500;line-height:1.4;margin-top:", [0, 8], ";text-align:center}\n.", [1], "guide-close-btn{-webkit-align-items:center;align-items:center;background:#fff;border-radius:", [0, 48], ";display:-webkit-flex;display:flex;height:", [0, 96], ";-webkit-justify-content:center;justify-content:center;left:50%;position:absolute;top:65%;-webkit-transform:translateX(-50%);transform:translateX(-50%);width:", [0, 320], "}\n.", [1], "guide-close-text{color:#333;font-size:", [0, 32], ";font-weight:500}\n.", [1], "privacy-auth-overlay{background:rgba(0,0,0,.5);bottom:0;-webkit-justify-content:center;justify-content:center;left:0;position:fixed;right:0;top:0;z-index:9999}\n.", [1], "privacy-auth-modal,.", [1], "privacy-auth-overlay{-webkit-align-items:center;align-items:center;display:-webkit-flex;display:flex}\n.", [1], "privacy-auth-modal{background:#fff;border-radius:", [0, 24], ";-webkit-flex-direction:column;flex-direction:column;padding:", [0, 48], " ", [0, 40], " ", [0, 36], ";width:", [0, 600], "}\n.", [1], "privacy-auth-icon{font-size:", [0, 64], ";margin-bottom:", [0, 16], "}\n.", [1], "privacy-auth-title{color:#333;font-size:", [0, 34], ";font-weight:700;margin-bottom:", [0, 20], "}\n.", [1], "privacy-auth-content{margin-bottom:", [0, 32], ";max-height:", [0, 400], ";width:100%}\n.", [1], "privacy-auth-text{color:#666;font-size:", [0, 24], ";line-height:1.8;white-space:pre-wrap}\n.", [1], "privacy-auth-btns{display:-webkit-flex;display:flex;gap:", [0, 20], ";width:100%}\n.", [1], "privacy-auth-btn{background:none!important;border:none!important;border-radius:", [0, 40], ";box-sizing:border-box;-webkit-flex:1;flex:1;font-size:", [0, 28], ";height:", [0, 80], ";line-height:", [0, 80], ";margin:0;padding:0;text-align:center}\n.", [1], "privacy-auth-btn.", [1], "disagree{background:#f5f5f5;color:#999}\n.", [1], "privacy-auth-btn.", [1], "agree{background:linear-gradient(135deg,#667eea,#764ba2);color:#fff}\n", ], "Some selectors are not allowed in component wxss, including tag name selectors, ID selectors, and attribute selectors.(./pages/profile/profile.wxss:1:7980)", {
        path: "./pages/profile/profile.wxss"
    });
}