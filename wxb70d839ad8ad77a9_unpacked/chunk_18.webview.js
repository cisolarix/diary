$gwx_XC_10 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
        var z = __WXML_GLOBAL__.ops_set.$gwx_XC_10 || [];

        function gz$gwx_XC_10_1() {
            if (__WXML_GLOBAL__.ops_cached.$gwx_XC_10_1) return __WXML_GLOBAL__.ops_cached.$gwx_XC_10_1
            __WXML_GLOBAL__.ops_cached.$gwx_XC_10_1 = [];
            (function(z) {
                var a = 11;

                function Z(ops) {
                    z.push(ops)
                }
                Z([3, 'page'])
                Z([
                    [2, '?:'],
                    [
                        [7],
                        [3, 'isImageBg']
                    ],
                    [
                        [2, '+'],
                        [
                            [2, '+'],
                            [1, 'background-image:url('],
                            [
                                [7],
                                [3, 'selectedBg']
                            ]
                        ],
                        [1, ');background-size:cover;background-position:center;']
                    ],
                    [1, '']
                ])
                Z([a, [3, 'nav-bar '],
                    [
                        [2, '?:'],
                        [
                            [7],
                            [3, 'isImageBg']
                        ],
                        [1, 'nav-bar-solid'],
                        [
                            [2, '+'],
                            [1, 'paper-'],
                            [
                                [7],
                                [3, 'selectedBg']
                            ]
                        ]
                    ]
                ])
                Z([a, [3, 'padding-top:'],
                    [
                        [7],
                        [3, 'statusBarHeight']
                    ],
                    [3, 'px;']
                ])
                Z([3, 'nav-content'])
                Z([a, [3, 'height:'],
                    [
                        [7],
                        [3, 'navBarHeight']
                    ], z[3][3]
                ])
                Z([3, 'onNavigateBack'])
                Z([3, 'nav-back'])
                Z([3, 'back-arrow-icon'])
                Z([3, 'nav-date'])
                Z([a, [
                    [2, '?:'],
                    [
                        [7],
                        [3, 'isToday']
                    ],
                    [1, '今天'],
                    [
                        [2, '+'],
                        [
                            [2, '+'],
                            [
                                [2, '+'],
                                [
                                    [2, '+'],
                                    [
                                        [2, '+'],
                                        [
                                            [7],
                                            [3, 'year']
                                        ],
                                        [1, '年']
                                    ],
                                    [
                                        [7],
                                        [3, 'month']
                                    ]
                                ],
                                [1, '月']
                            ],
                            [
                                [7],
                                [3, 'dateNum']
                            ]
                        ],
                        [1, '日']
                    ]
                ]])
                Z([a, [3, 'draft-tip '],
                    [
                        [2, '?:'],
                        [
                            [7],
                            [3, 'showDraftTip']
                        ],
                        [1, 'show'],
                        [1, '']
                    ]
                ])
                Z([3, 'draft-tip-icon'])
                Z([3, '📝'])
                Z([3, 'draft-tip-text'])
                Z([3, '已恢复上次草稿'])
                Z([3, 'onDiscardDraft'])
                Z([3, 'draft-tip-dismiss'])
                Z([3, '放弃'])
                Z([a, [3, 'editor-fixed '],
                    [
                        [2, '?:'],
                        [
                            [7],
                            [3, 'isImageBg']
                        ],
                        [1, ''],
                        [
                            [2, '+'],
                            [1, 'paper-'],
                            [
                                [7],
                                [3, 'selectedBg']
                            ]
                        ]
                    ]
                ])
                Z([a, [3, 'padding-bottom:calc(176rpx + '],
                    [
                        [7],
                        [3, 'keyboardHeight']
                    ],
                    [3, 'px + '],
                    [
                        [7],
                        [3, 'panelHeight']
                    ],
                    [3, 'px '],
                    [
                        [2, '?:'],
                        [
                            [2, '&&'],
                            [
                                [2, '<='],
                                [
                                    [7],
                                    [3, 'keyboardHeight']
                                ],
                                [1, 0]
                            ],
                            [
                                [2, '<='],
                                [
                                    [7],
                                    [3, 'panelHeight']
                                ],
                                [1, 0]
                            ]
                        ],
                        [1, '+ env(safe-area-inset-bottom)'],
                        [1, '']
                    ],
                    [3, ');'],
                    [
                        [2, '?:'],
                        [
                            [7],
                            [3, 'isImageBg']
                        ],
                        [1, 'background:transparent;'],
                        [1, '']
                    ]
                ])
                Z([1, false])
                Z([3, 'onEditorBlur'])
                Z([3, 'onEditorFocus'])
                Z([3, 'onInput'])
                Z([3, 'onKeyboardHeightChange'])
                Z([3, 'editor'])
                Z([3, 'return'])
                Z([3, '0'])
                Z([
                    [7],
                    [3, 'editorFocus']
                ])
                Z([3, 'diaryEditor'])
                Z([3, '2000'])
                Z([3, ''])
                Z([3, 'editor-placeholder'])
                Z(z[21])
                Z([a, [3, 'font-size:'],
                    [
                        [7],
                        [3, 'fontSize']
                    ],
                    [3, 'px;color:'],
                    [
                        [7],
                        [3, 'textColor']
                    ],
                    [3, ';font-weight:'],
                    [
                        [7],
                        [3, 'fontWeight']
                    ],
                    [3, ';']
                ])
                Z([
                    [7],
                    [3, 'displayContent']
                ])
                Z([
                    [2, '!'],
                    [
                        [7],
                        [3, 'content']
                    ]
                ])
                Z([3, 'custom-placeholder'])
                Z([3, '今天的开心、烦恼和小确幸，都可以写在这里～'])
                Z([3, '\n'])
                Z([3, '文字、图片都可以用'])
                Z([3, 'char-count'])
                Z([a, [3, 'bottom:calc('], z[20][2], z[20][3], z[20][4],
                    [3, 'px + 110rpx '], z[20][6], z[20][7]
                ])
                Z([a, [
                    [7],
                    [3, 'contentLength']
                ]])
                Z([3, 'char-count-sep'])
                Z([3, '/'])
                Z([3, 'char-count-max'])
                Z([3, '2000'])
                Z([3, 'onCancelExit'])
                Z([a, [3, 'exit-modal '],
                    [
                        [2, '?:'],
                        [
                            [7],
                            [3, 'showExitModal']
                        ],
                        [1, 'show'],
                        [1, '']
                    ]
                ])
                Z([3, 'preventBubble'])
                Z([3, 'exit-modal-content'])
                Z([3, 'exit-title'])
                Z([3, '保存提醒'])
                Z([3, 'exit-desc'])
                Z([3, '您有未保存的内容或照片，是否保存？'])
                Z([3, 'exit-btns'])
                Z([3, 'onConfirmNoSave'])
                Z([3, 'exit-btn cancel'])
                Z([3, '不保存'])
                Z([3, 'onConfirmSave'])
                Z([3, 'exit-btn save'])
                Z([3, '保存'])
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
                Z(z[51])
                Z([3, 'delete-modal-content'])
                Z([3, 'modal-trash-icon'])
                Z([3, 'modal-trash-body'])
                Z([3, 'modal-trash-lines'])
                Z([3, 'modal-trash-line'])
                Z(z[71])
                Z([3, 'modal-trash-arm'])
                Z([3, 'modal-trash-paper'])
                Z([3, 'modal-trash-scissors'])
                Z([3, 'modal-trash-paper-cut'])
                Z([3, 'modal-title'])
                Z([3, '确认要删除这篇日记吗？'])
                Z([3, 'modal-desc'])
                Z([3, '删除后就不能找回啦~'])
                Z([3, 'modal-btns'])
                Z(z[64])
                Z([3, 'modal-btn cancel'])
                Z([3, '再想想'])
                Z([3, 'onConfirmDelete'])
                Z([3, 'modal-btn confirm'])
                Z([3, '扔掉吧'])
                Z([3, 'onCancelOverwrite'])
                Z([a, [3, 'overwrite-modal '],
                    [
                        [2, '?:'],
                        [
                            [7],
                            [3, 'showOverwriteModal']
                        ],
                        [1, 'show'],
                        [1, '']
                    ]
                ])
                Z(z[51])
                Z([3, 'overwrite-modal-content'])
                Z([3, 'overwrite-title'])
                Z([3, '覆盖内容'])
                Z([3, 'overwrite-desc'])
                Z([3, '使用该模板将覆盖当前输入的内容，确定继续吗？'])
                Z([3, 'overwrite-btns'])
                Z(z[88])
                Z([3, 'overwrite-btn cancel'])
                Z([3, '取消'])
                Z([3, 'onConfirmOverwrite'])
                Z([3, 'overwrite-btn confirm'])
                Z([3, '确认覆盖'])
                Z([a, [3, 'bottom-panel '],
                    [
                        [2, '?:'],
                        [
                            [7],
                            [3, 'activePanel']
                        ],
                        [1, 'show'],
                        [1, '']
                    ]
                ])
                Z([a, [3, 'bottom:'], z[20][2], z[3][3]])
                Z([3, 'panel-content'])
                Z([
                    [2, '==='],
                    [
                        [7],
                        [3, 'activePanel']
                    ],
                    [1, 'template']
                ])
                Z([
                    [7],
                    [3, 'showAddTemplate']
                ])
                Z([3, 'template-add-form'])
                Z([3, 'onCloseAddTemplate'])
                Z([3, 'template-add-back'])
                Z([3, 'template-add-back-arrow'])
                Z([3, 'template-add-back-text'])
                Z([3, '返回模板'])
                Z([3, 'onTemplateTitleInput'])
                Z([3, 'template-add-input'])
                Z([3, '模板名称'])
                Z([3, 'template-add-ph'])
                Z([
                    [7],
                    [3, 'newTemplateTitle']
                ])
                Z([3, 'onTemplateContentInput'])
                Z([3, 'template-add-textarea'])
                Z(z[31])
                Z([3, '写点什么...'])
                Z(z[117])
                Z([
                    [7],
                    [3, 'newTemplateContent']
                ])
                Z([3, 'onSaveTemplate'])
                Z([a, [3, 'template-add-save '],
                    [
                        [2, '?:'],
                        [
                            [7],
                            [3, 'canSaveTemplate']
                        ],
                        [1, 'active'],
                        [1, '']
                    ]
                ])
                Z([a, [
                    [2, '?:'],
                    [
                        [7],
                        [3, 'editingTemplateId']
                    ],
                    [1, '保存修改'],
                    [1, '保存模板']
                ]])
                Z([3, 'panel-scroll'])
                Z([3, 'tpl-list'])
                Z([3, 'onAddTemplate'])
                Z([3, 'tpl-item tpl-item-add'])
                Z([3, 'tpl-item-icon-wrap tpl-item-icon-add'])
                Z([3, 'tpl-add-plus-h'])
                Z([3, 'tpl-add-plus-v'])
                Z([3, 'tpl-item-name'])
                Z([3, '新建模板'])
                Z([3, 'tpl-item-arrow'])
                Z([3, '›'])
                Z([
                    [7],
                    [3, 'templates']
                ])
                Z([3, 'id'])
                Z([3, 'tpl-item-wrap'])
                Z([3, 'onTplTouchEnd'])
                Z([3, 'onTplTouchMove'])
                Z([3, 'onTplTouchStart'])
                Z([3, 'tpl-item'])
                Z([
                    [6],
                    [
                        [7],
                        [3, 'item']
                    ],
                    [3, 'id']
                ])
                Z([
                    [7],
                    [3, 'index']
                ])
                Z([a, [3, 'transform:translateX('],
                    [
                        [2, '||'],
                        [
                            [6],
                            [
                                [7],
                                [3, 'item']
                            ],
                            [3, 'translateX']
                        ],
                        [1, 0]
                    ],
                    [3, 'px);']
                ])
                Z([3, 'tpl-item-icon-wrap'])
                Z([3, 'tpl-item-icon-text'])
                Z([a, [
                    [12],
                    [
                        [6],
                        [
                            [7],
                            [3, 'tpl']
                        ],
                        [3, 'short']
                    ],
                    [
                        [5],
                        [
                            [6],
                            [
                                [7],
                                [3, 'item']
                            ],
                            [3, 'title']
                        ]
                    ]
                ]])
                Z([3, 'tpl-item-info'])
                Z(z[135])
                Z([a, [
                    [6],
                    [
                        [7],
                        [3, 'item']
                    ],
                    [3, 'title']
                ]])
                Z([3, 'tpl-item-desc'])
                Z([a, [
                    [2, '?:'],
                    [
                        [6],
                        [
                            [7],
                            [3, 'item']
                        ],
                        [3, 'isGlobal']
                    ],
                    [1, '官方模板'],
                    [1, '自定义模板（支持左滑编辑 / 删除）']
                ]])
                Z([
                    [2, '!'],
                    [
                        [6],
                        [
                            [7],
                            [3, 'item']
                        ],
                        [3, 'isGlobal']
                    ]
                ])
                Z([3, 'tpl-actions'])
                Z([3, 'onEditTemplate'])
                Z([3, 'tpl-action-btn tpl-edit-btn'])
                Z(z[146])
                Z(z[147])
                Z([3, 'tpl-action-text'])
                Z([3, '编辑'])
                Z([3, 'onDeleteTemplate'])
                Z([3, 'tpl-action-btn tpl-del-btn'])
                Z(z[146])
                Z(z[147])
                Z(z[163])
                Z([3, '删除'])
                Z([
                    [2, '==='],
                    [
                        [6],
                        [
                            [7],
                            [3, 'templates']
                        ],
                        [3, 'length']
                    ],
                    [1, 0]
                ])
                Z([3, 'panel-empty'])
                Z([3, 'panel-empty-text'])
                Z([3, '点击上方 + 创建第一个模板'])
                Z([
                    [2, '==='],
                    [
                        [7],
                        [3, 'activePanel']
                    ],
                    [1, 'bg']
                ])
                Z([3, 'bg-scroll'])
                Z([
                    [7],
                    [3, 'bgScrollLeft']
                ])
                Z(z[21])
                Z([3, 'bg-list'])
                Z([
                    [7],
                    [3, 'bgImages']
                ])
                Z([3, '*this'])
                Z([3, 'onChooseBg'])
                Z([a, [3, 'bg-card '],
                    [
                        [2, '?:'],
                        [
                            [2, '==='],
                            [
                                [7],
                                [3, 'selectedBg']
                            ],
                            [
                                [7],
                                [3, 'item']
                            ]
                        ],
                        [1, 'bg-card-active'],
                        [1, '']
                    ]
                ])
                Z([
                    [7],
                    [3, 'item']
                ])
                Z([3, 'bg-card-inner bg-card-img'])
                Z([3, 'bg-card-img-src'])
                Z([3, 'aspectFill'])
                Z(z[184])
                Z([3, 'bg-tip'])
                Z([3, 'bg-tip-text'])
                Z([3, '重复点击当前背景，可取消选中'])
                Z([
                    [2, '==='],
                    [
                        [7],
                        [3, 'activePanel']
                    ],
                    [1, 'location']
                ])
                Z([3, 'loc-title-row'])
                Z([3, 'loc-title-icon'])
                Z([3, 'aspectFit'])
                Z([3, '/images/write-toolbar/icon-location.png'])
                Z([3, 'loc-title-text'])
                Z([3, '你在哪里？'])
                Z([
                    [2, '!'],
                    [
                        [7],
                        [3, 'location']
                    ]
                ])
                Z([3, 'onChooseLocation'])
                Z([3, 'loc-add-btn'])
                Z([3, 'loc-add-icon'])
                Z([3, '+'])
                Z([3, 'loc-add-text'])
                Z([3, '点击添加位置'])
                Z([3, 'loc-tag-row'])
                Z(z[200])
                Z([3, 'loc-tag'])
                Z([3, 'loc-tag-text'])
                Z([a, [
                    [7],
                    [3, 'location']
                ]])
                Z([3, 'onClearLocation'])
                Z([3, 'loc-tag-delete'])
                Z([3, 'loc-tag-delete-icon'])
                Z([3, '×'])
                Z([
                    [2, '==='],
                    [
                        [7],
                        [3, 'activePanel']
                    ],
                    [1, 'image']
                ])
                Z([3, 'img-title-row'])
                Z([3, 'img-title-text'])
                Z([a, [3, '照片 '],
                    [
                        [2, '?:'],
                        [
                            [2, '>'],
                            [
                                [6],
                                [
                                    [7],
                                    [3, 'imagePaths']
                                ],
                                [3, 'length']
                            ],
                            [1, 0]
                        ],
                        [
                            [2, '+'],
                            [
                                [2, '+'],
                                [1, '('],
                                [
                                    [6],
                                    [
                                        [7],
                                        [3, 'imagePaths']
                                    ],
                                    [3, 'length']
                                ]
                            ],
                            [1, '/4)']
                        ],
                        [1, '']
                    ]
                ])
                Z([3, 'img-grid'])
                Z([
                    [2, '<'],
                    [
                        [6],
                        [
                            [7],
                            [3, 'imagePaths']
                        ],
                        [3, 'length']
                    ],
                    [1, 4]
                ])
                Z([3, 'onChooseImage'])
                Z([3, 'img-grid-item img-grid-add'])
                Z([3, 'img-add-icon'])
                Z([3, 'img-add-line-h'])
                Z([3, 'img-add-line-v'])
                Z([
                    [7],
                    [3, 'imagePaths']
                ])
                Z(z[181])
                Z([3, 'img-grid-item'])
                Z([3, 'img-grid-thumb'])
                Z(z[187])
                Z(z[184])
                Z([3, 'onDeleteImage'])
                Z([3, 'img-grid-delete'])
                Z(z[147])
                Z([3, 'img-grid-delete-bg'])
                Z([3, 'img-grid-delete-text'])
                Z(z[214])
                Z([
                    [2, '==='],
                    [
                        [7],
                        [3, 'activePanel']
                    ],
                    [1, 'font']
                ])
                Z([3, 'font-row'])
                Z([3, 'font-row-label'])
                Z([3, '字体大小'])
                Z([3, 'font-row-value'])
                Z([a, [
                    [7],
                    [3, 'fontSize']
                ]])
                Z([3, 'font-slider-wrap'])
                Z([3, 'font-slider-icon font-slider-icon-sm'])
                Z([3, 'A'])
                Z([3, '#EE5A52'])
                Z([3, '#EDEDED'])
                Z([3, 'onFontSizeChange'])
                Z([3, 'onFontSizeChanging'])
                Z(z[247])
                Z([3, '20'])
                Z([3, 'font-slider'])
                Z([3, '24'])
                Z([3, '12'])
                Z(z[21])
                Z([3, '1'])
                Z(z[35][2])
                Z([3, 'font-slider-icon font-slider-icon-lg'])
                Z(z[246])
                Z([3, 'font-divider'])
                Z(z[239])
                Z(z[240])
                Z([3, '字体粗细'])
                Z(z[242])
                Z([a, [
                    [7],
                    [3, 'fontWeightLabel']
                ]])
                Z(z[244])
                Z([3, 'font-slider-icon font-slider-icon-thin'])
                Z(z[246])
                Z(z[247])
                Z(z[248])
                Z([3, 'onFontWeightChange'])
                Z([3, 'onFontWeightChanging'])
                Z(z[247])
                Z(z[252])
                Z(z[253])
                Z([3, '900'])
                Z([3, '100'])
                Z(z[21])
                Z(z[278])
                Z(z[35][6])
                Z([3, 'font-slider-icon font-slider-icon-thick'])
                Z(z[246])
                Z(z[261])
                Z(z[239])
                Z(z[240])
                Z([3, '字体颜色'])
                Z(z[242])
                Z([a, [3, 'color:'], z[35][4], z[35][7]])
                Z([a, [
                    [7],
                    [3, 'textColor']
                ]])
                Z([3, 'font-color-list'])
                Z([
                    [7],
                    [3, 'fontColors']
                ])
                Z([3, 'value'])
                Z([3, 'onChooseFontColor'])
                Z([a, [3, 'font-color-dot '],
                    [
                        [2, '?:'],
                        [
                            [2, '==='],
                            [
                                [7],
                                [3, 'textColor']
                            ],
                            [
                                [6],
                                [
                                    [7],
                                    [3, 'item']
                                ],
                                [3, 'value']
                            ]
                        ],
                        [1, 'active'],
                        [1, '']
                    ]
                ])
                Z([
                    [6],
                    [
                        [7],
                        [3, 'item']
                    ],
                    [3, 'value']
                ])
                Z([a, [3, 'background:'], z[296], z[35][7]])
                Z([
                    [2, '==='],
                    [
                        [7],
                        [3, 'textColor']
                    ],
                    [
                        [6],
                        [
                            [7],
                            [3, 'item']
                        ],
                        [3, 'value']
                    ]
                ])
                Z([3, 'font-color-check'])
                Z([3, 'font-color-check-inner'])
                Z([3, 'closePanel'])
                Z([a, [3, 'panel-overlay '], z[103][2]])
                Z([a, [3, 'save-toast '],
                    [
                        [2, '?:'],
                        [
                            [7],
                            [3, 'showSaveToast']
                        ],
                        [1, 'show'],
                        [1, '']
                    ]
                ])
                Z([3, 'save-toast-content'])
                Z([3, 'save-toast-icon'])
                Z([3, 'save-check-circle'])
                Z([3, 'save-check-mark'])
                Z([3, 'save-toast-text'])
                Z([a, [
                    [7],
                    [3, 'saveToastText']
                ]])
                Z([a, [3, 'bottom-bar '],
                    [
                        [2, '?:'],
                        [
                            [2, '||'],
                            [
                                [2, '>'],
                                [
                                    [7],
                                    [3, 'keyboardHeight']
                                ],
                                [1, 0]
                            ],
                            [
                                [2, '>'],
                                [
                                    [7],
                                    [3, 'panelHeight']
                                ],
                                [1, 0]
                            ]
                        ],
                        [1, 'keyboard-up'],
                        [1, '']
                    ]
                ])
                Z([a, z[43][1], z[20][2], z[20][3], z[20][4], z[148][3]])
                Z([3, 'bottom-toolbar'])
                Z([3, 'onOpenFontSettings'])
                Z([a, [3, 'tb-item '],
                    [
                        [2, '?:'],
                        [
                            [2, '==='],
                            [
                                [7],
                                [3, 'activePanel']
                            ],
                            [1, 'font']
                        ],
                        [1, 'tb-item-active'],
                        [1, '']
                    ]
                ])
                Z([3, 'tb-icon-img'])
                Z(z[195])
                Z([
                    [2, '?:'],
                    [
                        [2, '==='],
                        [
                            [7],
                            [3, 'activePanel']
                        ],
                        [1, 'font']
                    ],
                    [1, '/images/write-toolbar/icon-font-active.png'],
                    [1, '/images/write-toolbar/icon-font.png']
                ])
                Z([3, 'onSelectTemplate'])
                Z([a, z[314][1],
                    [
                        [2, '?:'],
                        [
                            [2, '==='],
                            [
                                [7],
                                [3, 'activePanel']
                            ],
                            [1, 'template']
                        ],
                        [1, 'tb-item-active'],
                        [1, '']
                    ]
                ])
                Z(z[315])
                Z(z[195])
                Z([
                    [2, '?:'],
                    [
                        [2, '==='],
                        [
                            [7],
                            [3, 'activePanel']
                        ],
                        [1, 'template']
                    ],
                    [1, '/images/write-toolbar/icon-template-active.png'],
                    [1, '/images/write-toolbar/icon-template.png']
                ])
                Z([3, 'onSelectBackground'])
                Z([a, z[314][1],
                    [
                        [2, '?:'],
                        [
                            [2, '==='],
                            [
                                [7],
                                [3, 'activePanel']
                            ],
                            [1, 'bg']
                        ],
                        [1, 'tb-item-active'],
                        [1, '']
                    ]
                ])
                Z(z[315])
                Z(z[195])
                Z([
                    [2, '?:'],
                    [
                        [2, '==='],
                        [
                            [7],
                            [3, 'activePanel']
                        ],
                        [1, 'bg']
                    ],
                    [1, '/images/write-toolbar/icon-bg-active.png'],
                    [1, '/images/write-toolbar/icon-bg.png']
                ])
                Z([3, 'onOpenImagePanel'])
                Z([a, z[314][1],
                    [
                        [2, '?:'],
                        [
                            [2, '==='],
                            [
                                [7],
                                [3, 'activePanel']
                            ],
                            [1, 'image']
                        ],
                        [1, 'tb-item-active'],
                        [1, '']
                    ]
                ])
                Z(z[315])
                Z(z[195])
                Z([
                    [2, '?:'],
                    [
                        [2, '==='],
                        [
                            [7],
                            [3, 'activePanel']
                        ],
                        [1, 'image']
                    ],
                    [1, '/images/write-toolbar/icon-image-active.png'],
                    [1, '/images/write-toolbar/icon-image.png']
                ])
                Z([3, 'onOpenLocationPanel'])
                Z([a, z[314][1],
                    [
                        [2, '?:'],
                        [
                            [2, '==='],
                            [
                                [7],
                                [3, 'activePanel']
                            ],
                            [1, 'location']
                        ],
                        [1, 'tb-item-active'],
                        [1, '']
                    ]
                ])
                Z(z[315])
                Z(z[195])
                Z([
                    [2, '?:'],
                    [
                        [2, '==='],
                        [
                            [7],
                            [3, 'activePanel']
                        ],
                        [1, 'location']
                    ],
                    [1, '/images/write-toolbar/icon-location-active.png'],
                    [1, '/images/write-toolbar/icon-location.png']
                ])
                Z([
                    [2, '?:'],
                    [
                        [7],
                        [3, 'activePanel']
                    ],
                    [1, 'onSwitchToKeyboard'],
                    [1, 'onCollapseKeyboard']
                ])
                Z([a, [3, 'tb-collapse '],
                    [
                        [2, '?:'],
                        [
                            [2, '||'],
                            [
                                [2, '>'],
                                [
                                    [7],
                                    [3, 'keyboardHeight']
                                ],
                                [1, 0]
                            ],
                            [
                                [7],
                                [3, 'activePanel']
                            ]
                        ],
                        [1, ''],
                        [1, 'tb-item-hidden']
                    ]
                ])
                Z([3, 'collapse-text'])
                Z([a, [
                    [2, '?:'],
                    [
                        [7],
                        [3, 'activePanel']
                    ],
                    [1, '键盘'],
                    [1, '收起']
                ]])
                Z([3, 'toolbar-divider'])
                Z([3, 'onSave'])
                Z([a, [3, 'save-btn '],
                    [
                        [2, '?:'],
                        [
                            [2, '&&'],
                            [
                                [7],
                                [3, 'canSave']
                            ],
                            [
                                [2, '!'],
                                [
                                    [7],
                                    [3, 'isSaving']
                                ]
                            ]
                        ],
                        [1, 'active'],
                        [1, 'saving']
                    ]
                ])
                Z([
                    [7],
                    [3, 'canSave']
                ])
                Z([
                    [7],
                    [3, 'isSaving']
                ])
                Z([3, '10'])
                Z(z[278])
                Z(z[63])
            })(__WXML_GLOBAL__.ops_cached.$gwx_XC_10_1);
            return __WXML_GLOBAL__.ops_cached.$gwx_XC_10_1
        }
        __WXML_GLOBAL__.ops_set.$gwx_XC_10 = z;
        __WXML_GLOBAL__.ops_init.$gwx_XC_10 = true;
        var x = ['./pages/write/write.wxml'];
        d_[x[0]] = {}
        var m0 = function(e, s, r, gg) {
            var z = gz$gwx_XC_10_1()
            var fY4 = _mz(z, 'view', ['class', 0, 'style', 1], [], e, s, gg)
            var cZ4 = _mz(z, 'view', ['class', 2, 'style', 1], [], e, s, gg)
            var h14 = _mz(z, 'view', ['class', 4, 'style', 1], [], e, s, gg)
            var o24 = _mz(z, 'view', ['bindtap', 6, 'class', 1], [], e, s, gg)
            var c34 = _n('view')
            _rz(z, c34, 'class', 8, e, s, gg)
            _(o24, c34)
            _(h14, o24)
            var o44 = _n('text')
            _rz(z, o44, 'class', 9, e, s, gg)
            var l54 = _oz(z, 10, e, s, gg)
            _(o44, l54)
            _(h14, o44)
            _(cZ4, h14)
            _(fY4, cZ4)
            var a64 = _n('view')
            _rz(z, a64, 'class', 11, e, s, gg)
            var t74 = _n('text')
            _rz(z, t74, 'class', 12, e, s, gg)
            var e84 = _oz(z, 13, e, s, gg)
            _(t74, e84)
            _(a64, t74)
            var b94 = _n('text')
            _rz(z, b94, 'class', 14, e, s, gg)
            var o04 = _oz(z, 15, e, s, gg)
            _(b94, o04)
            _(a64, b94)
            var xA5 = _mz(z, 'text', ['bindtap', 16, 'class', 1], [], e, s, gg)
            var oB5 = _oz(z, 18, e, s, gg)
            _(xA5, oB5)
            _(a64, xA5)
            _(fY4, a64)
            var fC5 = _mz(z, 'view', ['class', 19, 'style', 1], [], e, s, gg)
            var hE5 = _mz(z, 'textarea', ['adjustPosition', 21, 'bindblur', 1, 'bindfocus', 2, 'bindinput', 3, 'bindkeyboardheightchange', 4, 'class', 5, 'confirmType', 6, 'cursorSpacing', 7, 'focus', 8, 'id', 9, 'maxlength', 10, 'placeholder', 11, 'placeholderClass', 12, 'showConfirmBar', 13, 'style', 14, 'value', 15], [], e, s, gg)
            _(fC5, hE5)
            var cD5 = _v()
            _(fC5, cD5)
            if (_oz(z, 37, e, s, gg)) {
                cD5.wxVkey = 1
                var oF5 = _n('view')
                _rz(z, oF5, 'class', 38, e, s, gg)
                var cG5 = _oz(z, 39, e, s, gg)
                _(oF5, cG5)
                var oH5 = _n('text')
                var lI5 = _oz(z, 40, e, s, gg)
                _(oH5, lI5)
                _(oF5, oH5)
                var aJ5 = _oz(z, 41, e, s, gg)
                _(oF5, aJ5)
                _(cD5, oF5)
            }
            cD5.wxXCkey = 1
            _(fY4, fC5)
            var tK5 = _mz(z, 'view', ['class', 42, 'style', 1], [], e, s, gg)
            var eL5 = _oz(z, 44, e, s, gg)
            _(tK5, eL5)
            var bM5 = _n('text')
            _rz(z, bM5, 'class', 45, e, s, gg)
            var oN5 = _oz(z, 46, e, s, gg)
            _(bM5, oN5)
            _(tK5, bM5)
            var xO5 = _n('text')
            _rz(z, xO5, 'class', 47, e, s, gg)
            var oP5 = _oz(z, 48, e, s, gg)
            _(xO5, oP5)
            _(tK5, xO5)
            _(fY4, tK5)
            var fQ5 = _mz(z, 'view', ['bindtap', 49, 'class', 1], [], e, s, gg)
            var cR5 = _mz(z, 'view', ['catchtap', 51, 'class', 1], [], e, s, gg)
            var hS5 = _n('text')
            _rz(z, hS5, 'class', 53, e, s, gg)
            var oT5 = _oz(z, 54, e, s, gg)
            _(hS5, oT5)
            _(cR5, hS5)
            var cU5 = _n('text')
            _rz(z, cU5, 'class', 55, e, s, gg)
            var oV5 = _oz(z, 56, e, s, gg)
            _(cU5, oV5)
            _(cR5, cU5)
            var lW5 = _n('view')
            _rz(z, lW5, 'class', 57, e, s, gg)
            var aX5 = _mz(z, 'view', ['bindtap', 58, 'class', 1], [], e, s, gg)
            var tY5 = _oz(z, 60, e, s, gg)
            _(aX5, tY5)
            _(lW5, aX5)
            var eZ5 = _mz(z, 'view', ['bindtap', 61, 'class', 1], [], e, s, gg)
            var b15 = _oz(z, 63, e, s, gg)
            _(eZ5, b15)
            _(lW5, eZ5)
            _(cR5, lW5)
            _(fQ5, cR5)
            _(fY4, fQ5)
            var o25 = _mz(z, 'view', ['bindtap', 64, 'class', 1], [], e, s, gg)
            var x35 = _mz(z, 'view', ['catchtap', 66, 'class', 1], [], e, s, gg)
            var o45 = _n('view')
            _rz(z, o45, 'class', 68, e, s, gg)
            var f55 = _n('view')
            _rz(z, f55, 'class', 69, e, s, gg)
            _(o45, f55)
            var c65 = _n('view')
            _rz(z, c65, 'class', 70, e, s, gg)
            var h75 = _n('view')
            _rz(z, h75, 'class', 71, e, s, gg)
            _(c65, h75)
            var o85 = _n('view')
            _rz(z, o85, 'class', 72, e, s, gg)
            _(c65, o85)
            _(o45, c65)
            var c95 = _n('view')
            _rz(z, c95, 'class', 73, e, s, gg)
            _(o45, c95)
            var o05 = _n('view')
            _rz(z, o05, 'class', 74, e, s, gg)
            var lA6 = _n('view')
            _rz(z, lA6, 'class', 75, e, s, gg)
            _(o05, lA6)
            _(o45, o05)
            var aB6 = _n('view')
            _rz(z, aB6, 'class', 76, e, s, gg)
            _(o45, aB6)
            _(x35, o45)
            var tC6 = _n('text')
            _rz(z, tC6, 'class', 77, e, s, gg)
            var eD6 = _oz(z, 78, e, s, gg)
            _(tC6, eD6)
            _(x35, tC6)
            var bE6 = _n('text')
            _rz(z, bE6, 'class', 79, e, s, gg)
            var oF6 = _oz(z, 80, e, s, gg)
            _(bE6, oF6)
            _(x35, bE6)
            var xG6 = _n('view')
            _rz(z, xG6, 'class', 81, e, s, gg)
            var oH6 = _mz(z, 'view', ['bindtap', 82, 'class', 1], [], e, s, gg)
            var fI6 = _oz(z, 84, e, s, gg)
            _(oH6, fI6)
            _(xG6, oH6)
            var cJ6 = _mz(z, 'view', ['bindtap', 85, 'class', 1], [], e, s, gg)
            var hK6 = _oz(z, 87, e, s, gg)
            _(cJ6, hK6)
            _(xG6, cJ6)
            _(x35, xG6)
            _(o25, x35)
            _(fY4, o25)
            var oL6 = _mz(z, 'view', ['bindtap', 88, 'class', 1], [], e, s, gg)
            var cM6 = _mz(z, 'view', ['catchtap', 90, 'class', 1], [], e, s, gg)
            var oN6 = _n('text')
            _rz(z, oN6, 'class', 92, e, s, gg)
            var lO6 = _oz(z, 93, e, s, gg)
            _(oN6, lO6)
            _(cM6, oN6)
            var aP6 = _n('text')
            _rz(z, aP6, 'class', 94, e, s, gg)
            var tQ6 = _oz(z, 95, e, s, gg)
            _(aP6, tQ6)
            _(cM6, aP6)
            var eR6 = _n('view')
            _rz(z, eR6, 'class', 96, e, s, gg)
            var bS6 = _mz(z, 'view', ['bindtap', 97, 'class', 1], [], e, s, gg)
            var oT6 = _oz(z, 99, e, s, gg)
            _(bS6, oT6)
            _(eR6, bS6)
            var xU6 = _mz(z, 'view', ['bindtap', 100, 'class', 1], [], e, s, gg)
            var oV6 = _oz(z, 102, e, s, gg)
            _(xU6, oV6)
            _(eR6, xU6)
            _(cM6, eR6)
            _(oL6, cM6)
            _(fY4, oL6)
            var fW6 = _mz(z, 'view', ['class', 103, 'style', 1], [], e, s, gg)
            var cX6 = _n('view')
            _rz(z, cX6, 'class', 105, e, s, gg)
            var hY6 = _v()
            _(cX6, hY6)
            if (_oz(z, 106, e, s, gg)) {
                hY6.wxVkey = 1
                var a46 = _v()
                _(hY6, a46)
                if (_oz(z, 107, e, s, gg)) {
                    a46.wxVkey = 1
                    var t56 = _n('view')
                    _rz(z, t56, 'class', 108, e, s, gg)
                    var e66 = _mz(z, 'view', ['bindtap', 109, 'class', 1], [], e, s, gg)
                    var b76 = _n('view')
                    _rz(z, b76, 'class', 111, e, s, gg)
                    _(e66, b76)
                    var o86 = _n('text')
                    _rz(z, o86, 'class', 112, e, s, gg)
                    var x96 = _oz(z, 113, e, s, gg)
                    _(o86, x96)
                    _(e66, o86)
                    _(t56, e66)
                    var o06 = _mz(z, 'input', ['bindinput', 114, 'class', 1, 'placeholder', 2, 'placeholderClass', 3, 'value', 4], [], e, s, gg)
                    _(t56, o06)
                    var fA7 = _mz(z, 'textarea', ['autoHeight', -1, 'bindinput', 119, 'class', 1, 'maxlength', 2, 'placeholder', 3, 'placeholderClass', 4, 'value', 5], [], e, s, gg)
                    _(t56, fA7)
                    var cB7 = _mz(z, 'view', ['bindtap', 125, 'class', 1], [], e, s, gg)
                    var hC7 = _oz(z, 127, e, s, gg)
                    _(cB7, hC7)
                    _(t56, cB7)
                    _(a46, t56)
                } else {
                    a46.wxVkey = 2
                    var oD7 = _mz(z, 'scroll-view', ['scrollY', -1, 'class', 128], [], e, s, gg)
                    var oF7 = _n('view')
                    _rz(z, oF7, 'class', 129, e, s, gg)
                    var lG7 = _mz(z, 'view', ['bindtap', 130, 'class', 1], [], e, s, gg)
                    var aH7 = _n('view')
                    _rz(z, aH7, 'class', 132, e, s, gg)
                    var tI7 = _n('view')
                    _rz(z, tI7, 'class', 133, e, s, gg)
                    _(aH7, tI7)
                    var eJ7 = _n('view')
                    _rz(z, eJ7, 'class', 134, e, s, gg)
                    _(aH7, eJ7)
                    _(lG7, aH7)
                    var bK7 = _n('text')
                    _rz(z, bK7, 'class', 135, e, s, gg)
                    var oL7 = _oz(z, 136, e, s, gg)
                    _(bK7, oL7)
                    _(lG7, bK7)
                    var xM7 = _n('view')
                    _rz(z, xM7, 'class', 137, e, s, gg)
                    var oN7 = _oz(z, 138, e, s, gg)
                    _(xM7, oN7)
                    _(lG7, xM7)
                    _(oF7, lG7)
                    var fO7 = _v()
                    _(oF7, fO7)
                    var cP7 = function(oR7, hQ7, cS7, gg) {
                        var lU7 = _n('view')
                        _rz(z, lU7, 'class', 141, oR7, hQ7, gg)
                        var tW7 = _mz(z, 'view', ['bindtouchend', 142, 'bindtouchmove', 1, 'bindtouchstart', 2, 'class', 3, 'data-id', 4, 'data-index', 5, 'style', 6], [], oR7, hQ7, gg)
                        var eX7 = _n('view')
                        _rz(z, eX7, 'class', 149, oR7, hQ7, gg)
                        var bY7 = _n('text')
                        _rz(z, bY7, 'class', 150, oR7, hQ7, gg)
                        var oZ7 = _oz(z, 151, oR7, hQ7, gg)
                        _(bY7, oZ7)
                        _(eX7, bY7)
                        _(tW7, eX7)
                        var x17 = _n('view')
                        _rz(z, x17, 'class', 152, oR7, hQ7, gg)
                        var o27 = _n('text')
                        _rz(z, o27, 'class', 153, oR7, hQ7, gg)
                        var f37 = _oz(z, 154, oR7, hQ7, gg)
                        _(o27, f37)
                        _(x17, o27)
                        var c47 = _n('text')
                        _rz(z, c47, 'class', 155, oR7, hQ7, gg)
                        var h57 = _oz(z, 156, oR7, hQ7, gg)
                        _(c47, h57)
                        _(x17, c47)
                        _(tW7, x17)
                        _(lU7, tW7)
                        var aV7 = _v()
                        _(lU7, aV7)
                        if (_oz(z, 157, oR7, hQ7, gg)) {
                            aV7.wxVkey = 1
                            var o67 = _n('view')
                            _rz(z, o67, 'class', 158, oR7, hQ7, gg)
                            var c77 = _mz(z, 'view', ['catchtap', 159, 'class', 1, 'data-id', 2, 'data-index', 3], [], oR7, hQ7, gg)
                            var o87 = _n('text')
                            _rz(z, o87, 'class', 163, oR7, hQ7, gg)
                            var l97 = _oz(z, 164, oR7, hQ7, gg)
                            _(o87, l97)
                            _(c77, o87)
                            _(o67, c77)
                            var a07 = _mz(z, 'view', ['catchtap', 165, 'class', 1, 'data-id', 2, 'data-index', 3], [], oR7, hQ7, gg)
                            var tA8 = _n('text')
                            _rz(z, tA8, 'class', 169, oR7, hQ7, gg)
                            var eB8 = _oz(z, 170, oR7, hQ7, gg)
                            _(tA8, eB8)
                            _(a07, tA8)
                            _(o67, a07)
                            _(aV7, o67)
                        }
                        aV7.wxXCkey = 1
                        _(cS7, lU7)
                        return cS7
                    }
                    fO7.wxXCkey = 2
                    _2z(z, 139, cP7, e, s, gg, fO7, 'item', 'index', 'id')
                    _(oD7, oF7)
                    var cE7 = _v()
                    _(oD7, cE7)
                    if (_oz(z, 171, e, s, gg)) {
                        cE7.wxVkey = 1
                        var bC8 = _n('view')
                        _rz(z, bC8, 'class', 172, e, s, gg)
                        var oD8 = _n('text')
                        _rz(z, oD8, 'class', 173, e, s, gg)
                        var xE8 = _oz(z, 174, e, s, gg)
                        _(oD8, xE8)
                        _(bC8, oD8)
                        _(cE7, bC8)
                    }
                    cE7.wxXCkey = 1
                    _(a46, oD7)
                }
                a46.wxXCkey = 1
            }
            var oZ6 = _v()
            _(cX6, oZ6)
            if (_oz(z, 175, e, s, gg)) {
                oZ6.wxVkey = 1
                var oF8 = _mz(z, 'scroll-view', ['enhanced', -1, 'scrollX', -1, 'class', 176, 'scrollLeft', 1, 'showScrollbar', 2], [], e, s, gg)
                var fG8 = _n('view')
                _rz(z, fG8, 'class', 179, e, s, gg)
                var cH8 = _v()
                _(fG8, cH8)
                var hI8 = function(cK8, oJ8, oL8, gg) {
                    var aN8 = _mz(z, 'view', ['bindtap', 182, 'class', 1, 'data-bg', 2], [], cK8, oJ8, gg)
                    var tO8 = _n('view')
                    _rz(z, tO8, 'class', 185, cK8, oJ8, gg)
                    var eP8 = _mz(z, 'image', ['lazyLoad', -1, 'class', 186, 'mode', 1, 'src', 2], [], cK8, oJ8, gg)
                    _(tO8, eP8)
                    _(aN8, tO8)
                    _(oL8, aN8)
                    return oL8
                }
                cH8.wxXCkey = 2
                _2z(z, 180, hI8, e, s, gg, cH8, 'item', 'index', '*this')
                _(oF8, fG8)
                _(oZ6, oF8)
                var bQ8 = _n('view')
                _rz(z, bQ8, 'class', 189, e, s, gg)
                var oR8 = _n('text')
                _rz(z, oR8, 'class', 190, e, s, gg)
                var xS8 = _oz(z, 191, e, s, gg)
                _(oR8, xS8)
                _(bQ8, oR8)
                _(oZ6, bQ8)
            }
            var c16 = _v()
            _(cX6, c16)
            if (_oz(z, 192, e, s, gg)) {
                c16.wxVkey = 1
                var fU8 = _n('view')
                _rz(z, fU8, 'class', 193, e, s, gg)
                var cV8 = _mz(z, 'image', ['class', 194, 'mode', 1, 'src', 2], [], e, s, gg)
                _(fU8, cV8)
                var hW8 = _n('text')
                _rz(z, hW8, 'class', 197, e, s, gg)
                var oX8 = _oz(z, 198, e, s, gg)
                _(hW8, oX8)
                _(fU8, hW8)
                _(c16, fU8)
                var oT8 = _v()
                _(c16, oT8)
                if (_oz(z, 199, e, s, gg)) {
                    oT8.wxVkey = 1
                    var cY8 = _mz(z, 'view', ['bindtap', 200, 'class', 1], [], e, s, gg)
                    var oZ8 = _n('view')
                    _rz(z, oZ8, 'class', 202, e, s, gg)
                    var l18 = _oz(z, 203, e, s, gg)
                    _(oZ8, l18)
                    _(cY8, oZ8)
                    var a28 = _n('text')
                    _rz(z, a28, 'class', 204, e, s, gg)
                    var t38 = _oz(z, 205, e, s, gg)
                    _(a28, t38)
                    _(cY8, a28)
                    _(oT8, cY8)
                } else {
                    oT8.wxVkey = 2
                    var e48 = _n('view')
                    _rz(z, e48, 'class', 206, e, s, gg)
                    var b58 = _mz(z, 'view', ['bindtap', 207, 'class', 1], [], e, s, gg)
                    var o68 = _n('text')
                    _rz(z, o68, 'class', 209, e, s, gg)
                    var x78 = _oz(z, 210, e, s, gg)
                    _(o68, x78)
                    _(b58, o68)
                    var o88 = _mz(z, 'view', ['catchtap', 211, 'class', 1], [], e, s, gg)
                    var f98 = _n('text')
                    _rz(z, f98, 'class', 213, e, s, gg)
                    var c08 = _oz(z, 214, e, s, gg)
                    _(f98, c08)
                    _(o88, f98)
                    _(b58, o88)
                    _(e48, b58)
                    _(oT8, e48)
                }
                oT8.wxXCkey = 1
            }
            var o26 = _v()
            _(cX6, o26)
            if (_oz(z, 215, e, s, gg)) {
                o26.wxVkey = 1
                var hA9 = _n('view')
                _rz(z, hA9, 'class', 216, e, s, gg)
                var oB9 = _n('text')
                _rz(z, oB9, 'class', 217, e, s, gg)
                var cC9 = _oz(z, 218, e, s, gg)
                _(oB9, cC9)
                _(hA9, oB9)
                _(o26, hA9)
                var oD9 = _n('view')
                _rz(z, oD9, 'class', 219, e, s, gg)
                var lE9 = _v()
                _(oD9, lE9)
                if (_oz(z, 220, e, s, gg)) {
                    lE9.wxVkey = 1
                    var aF9 = _mz(z, 'view', ['bindtap', 221, 'class', 1], [], e, s, gg)
                    var tG9 = _n('view')
                    _rz(z, tG9, 'class', 223, e, s, gg)
                    var eH9 = _n('view')
                    _rz(z, eH9, 'class', 224, e, s, gg)
                    _(tG9, eH9)
                    var bI9 = _n('view')
                    _rz(z, bI9, 'class', 225, e, s, gg)
                    _(tG9, bI9)
                    _(aF9, tG9)
                    _(lE9, aF9)
                }
                var oJ9 = _v()
                _(oD9, oJ9)
                var xK9 = function(fM9, oL9, cN9, gg) {
                    var oP9 = _n('view')
                    _rz(z, oP9, 'class', 228, fM9, oL9, gg)
                    var cQ9 = _mz(z, 'image', ['class', 229, 'mode', 1, 'src', 2], [], fM9, oL9, gg)
                    _(oP9, cQ9)
                    var oR9 = _mz(z, 'view', ['catchtap', 232, 'class', 1, 'data-index', 2], [], fM9, oL9, gg)
                    var lS9 = _n('view')
                    _rz(z, lS9, 'class', 235, fM9, oL9, gg)
                    _(oR9, lS9)
                    var aT9 = _n('text')
                    _rz(z, aT9, 'class', 236, fM9, oL9, gg)
                    var tU9 = _oz(z, 237, fM9, oL9, gg)
                    _(aT9, tU9)
                    _(oR9, aT9)
                    _(oP9, oR9)
                    _(cN9, oP9)
                    return cN9
                }
                oJ9.wxXCkey = 2
                _2z(z, 226, xK9, e, s, gg, oJ9, 'item', 'index', '*this')
                lE9.wxXCkey = 1
                _(o26, oD9)
            }
            var l36 = _v()
            _(cX6, l36)
            if (_oz(z, 238, e, s, gg)) {
                l36.wxVkey = 1
                var eV9 = _n('view')
                _rz(z, eV9, 'class', 239, e, s, gg)
                var bW9 = _n('text')
                _rz(z, bW9, 'class', 240, e, s, gg)
                var oX9 = _oz(z, 241, e, s, gg)
                _(bW9, oX9)
                _(eV9, bW9)
                var xY9 = _n('text')
                _rz(z, xY9, 'class', 242, e, s, gg)
                var oZ9 = _oz(z, 243, e, s, gg)
                _(xY9, oZ9)
                _(eV9, xY9)
                _(l36, eV9)
                var f19 = _n('view')
                _rz(z, f19, 'class', 244, e, s, gg)
                var c29 = _n('view')
                _rz(z, c29, 'class', 245, e, s, gg)
                var h39 = _oz(z, 246, e, s, gg)
                _(c29, h39)
                _(f19, c29)
                var o49 = _mz(z, 'slider', ['activeColor', 247, 'backgroundColor', 1, 'bindchange', 2, 'bindchanging', 3, 'blockColor', 4, 'blockSize', 5, 'class', 6, 'max', 7, 'min', 8, 'showValue', 9, 'step', 10, 'value', 11], [], e, s, gg)
                _(f19, o49)
                var c59 = _n('view')
                _rz(z, c59, 'class', 259, e, s, gg)
                var o69 = _oz(z, 260, e, s, gg)
                _(c59, o69)
                _(f19, c59)
                _(l36, f19)
                var l79 = _n('view')
                _rz(z, l79, 'class', 261, e, s, gg)
                _(l36, l79)
                var a89 = _n('view')
                _rz(z, a89, 'class', 262, e, s, gg)
                var t99 = _n('text')
                _rz(z, t99, 'class', 263, e, s, gg)
                var e09 = _oz(z, 264, e, s, gg)
                _(t99, e09)
                _(a89, t99)
                var bA0 = _n('text')
                _rz(z, bA0, 'class', 265, e, s, gg)
                var oB0 = _oz(z, 266, e, s, gg)
                _(bA0, oB0)
                _(a89, bA0)
                _(l36, a89)
                var xC0 = _n('view')
                _rz(z, xC0, 'class', 267, e, s, gg)
                var oD0 = _n('view')
                _rz(z, oD0, 'class', 268, e, s, gg)
                var fE0 = _oz(z, 269, e, s, gg)
                _(oD0, fE0)
                _(xC0, oD0)
                var cF0 = _mz(z, 'slider', ['activeColor', 270, 'backgroundColor', 1, 'bindchange', 2, 'bindchanging', 3, 'blockColor', 4, 'blockSize', 5, 'class', 6, 'max', 7, 'min', 8, 'showValue', 9, 'step', 10, 'value', 11], [], e, s, gg)
                _(xC0, cF0)
                var hG0 = _n('view')
                _rz(z, hG0, 'class', 282, e, s, gg)
                var oH0 = _oz(z, 283, e, s, gg)
                _(hG0, oH0)
                _(xC0, hG0)
                _(l36, xC0)
                var cI0 = _n('view')
                _rz(z, cI0, 'class', 284, e, s, gg)
                _(l36, cI0)
                var oJ0 = _n('view')
                _rz(z, oJ0, 'class', 285, e, s, gg)
                var lK0 = _n('text')
                _rz(z, lK0, 'class', 286, e, s, gg)
                var aL0 = _oz(z, 287, e, s, gg)
                _(lK0, aL0)
                _(oJ0, lK0)
                var tM0 = _mz(z, 'text', ['class', 288, 'style', 1], [], e, s, gg)
                var eN0 = _oz(z, 290, e, s, gg)
                _(tM0, eN0)
                _(oJ0, tM0)
                _(l36, oJ0)
                var bO0 = _n('view')
                _rz(z, bO0, 'class', 291, e, s, gg)
                var oP0 = _v()
                _(bO0, oP0)
                var xQ0 = function(fS0, oR0, cT0, gg) {
                    var oV0 = _mz(z, 'view', ['bindtap', 294, 'class', 1, 'data-color', 2, 'style', 3], [], fS0, oR0, gg)
                    var cW0 = _v()
                    _(oV0, cW0)
                    if (_oz(z, 298, fS0, oR0, gg)) {
                        cW0.wxVkey = 1
                        var oX0 = _n('view')
                        _rz(z, oX0, 'class', 299, fS0, oR0, gg)
                        var lY0 = _n('view')
                        _rz(z, lY0, 'class', 300, fS0, oR0, gg)
                        _(oX0, lY0)
                        _(cW0, oX0)
                    }
                    cW0.wxXCkey = 1
                    _(cT0, oV0)
                    return cT0
                }
                oP0.wxXCkey = 2
                _2z(z, 292, xQ0, e, s, gg, oP0, 'item', 'index', 'value')
                _(l36, bO0)
            }
            hY6.wxXCkey = 1
            oZ6.wxXCkey = 1
            c16.wxXCkey = 1
            o26.wxXCkey = 1
            l36.wxXCkey = 1
            _(fW6, cX6)
            _(fY4, fW6)
            var aZ0 = _mz(z, 'view', ['catchtap', 301, 'class', 1], [], e, s, gg)
            _(fY4, aZ0)
            var t10 = _n('view')
            _rz(z, t10, 'class', 303, e, s, gg)
            var e20 = _n('view')
            _rz(z, e20, 'class', 304, e, s, gg)
            var b30 = _n('view')
            _rz(z, b30, 'class', 305, e, s, gg)
            var o40 = _n('view')
            _rz(z, o40, 'class', 306, e, s, gg)
            _(b30, o40)
            var x50 = _n('view')
            _rz(z, x50, 'class', 307, e, s, gg)
            _(b30, x50)
            _(e20, b30)
            var o60 = _n('text')
            _rz(z, o60, 'class', 308, e, s, gg)
            var f70 = _oz(z, 309, e, s, gg)
            _(o60, f70)
            _(e20, o60)
            _(t10, e20)
            _(fY4, t10)
            var c80 = _mz(z, 'view', ['class', 310, 'style', 1], [], e, s, gg)
            var h90 = _n('view')
            _rz(z, h90, 'class', 312, e, s, gg)
            var o00 = _mz(z, 'view', ['bindtap', 313, 'class', 1], [], e, s, gg)
            var cAAB = _mz(z, 'image', ['class', 315, 'mode', 1, 'src', 2], [], e, s, gg)
            _(o00, cAAB)
            _(h90, o00)
            var oBAB = _mz(z, 'view', ['bindtap', 318, 'class', 1], [], e, s, gg)
            var lCAB = _mz(z, 'image', ['class', 320, 'mode', 1, 'src', 2], [], e, s, gg)
            _(oBAB, lCAB)
            _(h90, oBAB)
            var aDAB = _mz(z, 'view', ['bindtap', 323, 'class', 1], [], e, s, gg)
            var tEAB = _mz(z, 'image', ['class', 325, 'mode', 1, 'src', 2], [], e, s, gg)
            _(aDAB, tEAB)
            _(h90, aDAB)
            var eFAB = _mz(z, 'view', ['bindtap', 328, 'class', 1], [], e, s, gg)
            var bGAB = _mz(z, 'image', ['class', 330, 'mode', 1, 'src', 2], [], e, s, gg)
            _(eFAB, bGAB)
            _(h90, eFAB)
            var oHAB = _mz(z, 'view', ['bindtap', 333, 'class', 1], [], e, s, gg)
            var xIAB = _mz(z, 'image', ['class', 335, 'mode', 1, 'src', 2], [], e, s, gg)
            _(oHAB, xIAB)
            _(h90, oHAB)
            _(c80, h90)
            var oJAB = _mz(z, 'view', ['bindtap', 338, 'class', 1], [], e, s, gg)
            var fKAB = _n('text')
            _rz(z, fKAB, 'class', 340, e, s, gg)
            var cLAB = _oz(z, 341, e, s, gg)
            _(fKAB, cLAB)
            _(oJAB, fKAB)
            _(c80, oJAB)
            var hMAB = _n('view')
            _rz(z, hMAB, 'class', 342, e, s, gg)
            _(c80, hMAB)
            var oNAB = _mz(z, 'button', ['bindtap', 343, 'class', 1, 'data-can-save', 2, 'data-is-saving', 3, 'hoverStartTime', 4, 'hoverStayTime', 5], [], e, s, gg)
            var cOAB = _oz(z, 349, e, s, gg)
            _(oNAB, cOAB)
            _(c80, oNAB)
            _(fY4, c80)
            _(r, fY4)
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
                g = "$gwx_XC_10";
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
if (__vd_version_info__.delayedGwx || false) $gwx_XC_10();
if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/write/write.wxml'] = [$gwx_XC_10, './pages/write/write.wxml'];
else __wxAppCode__['pages/write/write.wxml'] = $gwx_XC_10('./pages/write/write.wxml');

var noCss = typeof __vd_version_info__ !== 'undefined' && __vd_version_info__.noCss === true;
if (!noCss) {
    __wxAppCode__['pages/write/write.wxss'] = setCssToHead(["body{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;font-family:-apple-system,BlinkMacSystemFont,PingFang SC,SF Pro Text,Helvetica Neue,sans-serif;height:100vh;overflow:hidden}\n.", [1], "page,body{background:#f5f5f5}\n.", [1], "page{bottom:0;display:-webkit-flex;display:flex;-webkit-flex-direction:column;flex-direction:column;left:0;position:fixed;right:0;top:0}\n.", [1], "nav-bar{background:#fff;background-position:50%;background-size:cover;-webkit-flex-shrink:0;flex-shrink:0;width:100%;z-index:50}\n.", [1], "nav-bar-solid{background:#fff!important}\n.", [1], "nav-content{-webkit-justify-content:center;justify-content:center;padding:0 ", [0, 40], ";position:relative}\n.", [1], "nav-back,.", [1], "nav-content{-webkit-align-items:center;align-items:center;display:-webkit-flex;display:flex}\n.", [1], "nav-back{height:100%;left:", [0, 40], ";padding:", [0, 8], " ", [0, 4], ";position:absolute}\n.", [1], "nav-date{color:#333;font-size:", [0, 30], ";font-weight:500}\n.", [1], "back-arrow-icon{border-left:", [0, 5], " solid #000;border-top:", [0, 5], " solid #000;height:", [0, 20], ";-webkit-transform:rotate(-45deg);transform:rotate(-45deg);width:", [0, 20], "}\n.", [1], "back-text{color:#333;font-size:", [0, 28], ";font-weight:500}\n.", [1], "scroll-top-area{background:#fff;-webkit-flex-shrink:0;flex-shrink:0;max-height:", [0, 300], ";min-height:0;overflow-y:auto}\n.", [1], "divider-line{background:rgba(0,0,0,.06);height:", [0, 1], ";margin:", [0, 16], " ", [0, 40], "}\n.", [1], "editor-wrap{padding:", [0, 32], " ", [0, 40], " ", [0, 24], ";position:relative}\n.", [1], "image-preview-area{-webkit-align-items:flex-start;align-items:flex-start;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap;gap:", [0, 16], ";padding:", [0, 24], " ", [0, 32], "}\n.", [1], "preview-thumb{aspect-ratio:1;border-radius:", [0, 12], ";overflow:hidden;position:relative;width:calc((100% - ", [0, 48], ") / 4)}\n.", [1], "thumb-img{border-radius:", [0, 12], ";height:100%;object-fit:cover;width:100%}\n.", [1], "thumb-delete{background:rgba(0,0,0,.5);border-radius:50%;color:#fff;font-size:", [0, 28], ";height:", [0, 36], ";line-height:1;position:absolute;right:", [0, -10], ";top:", [0, -10], ";width:", [0, 36], "}\n.", [1], "add-thumb,.", [1], "thumb-delete{-webkit-align-items:center;align-items:center;display:-webkit-flex;display:flex;-webkit-justify-content:center;justify-content:center}\n.", [1], "add-thumb{aspect-ratio:1;background:#fafafa;border:", [0, 2], " dashed #ddd;border-radius:", [0, 12], ";-webkit-flex-shrink:0;flex-shrink:0;width:calc((100% - ", [0, 48], ") / 4)}\n.", [1], "add-thumb:active{background:#f0f0f0}\n.", [1], "add-thumb-icon{color:#ccc;font-size:", [0, 48], ";line-height:1}\n.", [1], "char-count{-webkit-align-items:center;align-items:center;color:#000;display:-webkit-flex;display:flex;font-size:", [0, 24], ";font-weight:400;height:", [0, 56], ";letter-spacing:", [0, 1], ";line-height:", [0, 56], ";padding-right:", [0, 32], ";pointer-events:none;position:fixed;right:0;z-index:9999}\n.", [1], "char-count-sep{color:#000;margin:0 ", [0, 2], "}\n.", [1], "char-count-max{color:#000}\n.", [1], "image-upload-area{display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap;gap:", [0, 16], ";padding:", [0, 24], " ", [0, 40], " ", [0, 32], "}\n.", [1], "image-upload-btn{-webkit-align-items:center;align-items:center;background:#f7f8fa;border-radius:", [0, 16], ";box-sizing:border-box;display:-webkit-flex;display:flex;-webkit-flex-direction:column;flex-direction:column;-webkit-flex-shrink:0;flex-shrink:0;gap:", [0, 12], ";height:", [0, 210], ";-webkit-justify-content:center;justify-content:center;width:", [0, 210], "}\n.", [1], "upload-plus{height:", [0, 56], ";position:relative;width:", [0, 56], "}\n.", [1], "upload-plus::after,.", [1], "upload-plus::before{background:#ccc;border-radius:", [0, 2], ";content:\x22\x22;position:absolute}\n.", [1], "upload-plus::before{height:", [0, 4], ";width:", [0, 40], "}\n.", [1], "upload-plus::after,.", [1], "upload-plus::before{left:50%;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}\n.", [1], "upload-plus::after{height:", [0, 40], ";width:", [0, 4], "}\n.", [1], "upload-hint{color:#bbb;font-size:", [0, 22], "}\n.", [1], "image-preview{border-radius:", [0, 16], ";-webkit-flex-shrink:0;flex-shrink:0;height:", [0, 210], ";overflow:hidden;position:relative;width:", [0, 210], "}\n.", [1], "preview-img{border-radius:", [0, 16], ";height:100%;width:100%}\n.", [1], "image-delete{-webkit-align-items:center;align-items:center;background:rgba(0,0,0,.5);border-radius:50%;color:#fff;display:-webkit-flex;display:flex;font-size:", [0, 26], ";height:", [0, 36], ";-webkit-justify-content:center;justify-content:center;line-height:1;position:absolute;right:", [0, 4], ";top:", [0, 4], ";width:", [0, 36], "}\n.", [1], "editor{background:transparent;box-sizing:border-box;color:#333;font-family:-apple-system,BlinkMacSystemFont,PingFang SC,sans-serif;height:100%;line-height:", [0, 56], ";padding:0;width:100%}\n.", [1], "custom-placeholder,.", [1], "editor{font-size:", [0, 32], ";word-break:break-all}\n.", [1], "custom-placeholder{bottom:0;color:#bfbfbf;left:0;line-height:1.6;padding:inherit;pointer-events:none;position:absolute;right:0;top:0}\n.", [1], "editor-placeholder{color:#bfbfbf}\n.", [1], "bottom-bar{-webkit-align-items:center;align-items:center;background:#fff;border-top:", [0, 1], " solid rgba(0,0,0,.06);bottom:0;display:-webkit-flex;display:flex;gap:", [0, 12], ";left:0;padding:", [0, 12], " ", [0, 20], " calc(", [0, 12], " + env(safe-area-inset-bottom));position:fixed;right:0;z-index:999}\n.", [1], "bottom-bar.", [1], "keyboard-up{padding-bottom:", [0, 12], "}\n.", [1], "bottom-toolbar{-webkit-align-items:center;align-items:center;display:-webkit-flex;display:flex;-webkit-flex:1;flex:1;gap:", [0, 21], "}\n.", [1], "toolbar-divider{background:rgba(0,0,0,.08);box-shadow:", [0, 1], " 0 ", [0, 4], " rgba(0,0,0,.06);-webkit-flex-shrink:0;flex-shrink:0;height:", [0, 48], ";width:", [0, 1], "}\n.", [1], "tb-item{-webkit-align-items:center;align-items:center;border-radius:50%;display:-webkit-flex;display:flex;height:", [0, 80], ";-webkit-justify-content:center;justify-content:center;transition:background .15s ease,opacity .2s ease,width .2s ease,margin .2s ease;width:", [0, 72], "}\n.", [1], "tb-item.", [1], "tb-item-hidden{height:", [0, 80], ";margin-left:0;margin-right:0;opacity:0;overflow:hidden;width:0}\n.", [1], "tb-item:active{background:rgba(0,0,0,.05)}\n.", [1], "tb-item.", [1], "tb-item-active{background:transparent;position:relative}\n.", [1], "tb-item.", [1], "tb-item-active::after{background:#ee5a52;border-radius:", [0, 2], ";bottom:", [0, 4], ";content:\x22\x22;height:", [0, 4], ";left:50%;position:absolute;-webkit-transform:translateX(-50%);transform:translateX(-50%);width:", [0, 24], "}\n.", [1], "tb-icon-img{height:", [0, 48], ";width:", [0, 48], "}\n.", [1], "tb-collapse{-webkit-align-items:center;align-items:center;display:-webkit-flex;display:flex;-webkit-flex-shrink:0;flex-shrink:0;height:", [0, 72], ";-webkit-justify-content:center;justify-content:center;padding:0 ", [0, 20], ";transition:opacity .2s ease}\n.", [1], "tb-collapse.", [1], "tb-item-hidden{height:0;opacity:0;overflow:hidden;padding:0;width:0}\n.", [1], "collapse-text{color:#666;white-space:nowrap}\n.", [1], "collapse-text,.", [1], "save-btn{font-size:", [0, 28], ";font-weight:500}\n.", [1], "save-btn{-webkit-align-items:center;align-items:center;background:#ccc;border:none;border-radius:", [0, 36], ";color:#fff;display:-webkit-flex;display:flex;-webkit-flex-shrink:0;flex-shrink:0;font-family:inherit;height:", [0, 72], ";-webkit-justify-content:center;justify-content:center;line-height:1;margin:0;padding:0 ", [0, 48], "}\n.", [1], "save-btn.", [1], "active{background:#ee5a52}\n.", [1], "save-btn.", [1], "saving{background:#ccc!important}\n.", [1], "save-btn.", [1], "active:active{opacity:.85}\nwx-button.", [1], "save-btn::after{border:none}\n.", [1], "exit-modal{-webkit-align-items:center;align-items:center;background:rgba(0,0,0,.4);bottom:0;display:-webkit-flex;display:flex;-webkit-justify-content:center;justify-content:center;left:0;opacity:0;pointer-events:none;position:fixed;right:0;top:0;transition:all .3s ease;visibility:hidden;z-index:1001}\n.", [1], "exit-modal.", [1], "show{opacity:1;pointer-events:auto;visibility:visible}\n.", [1], "exit-modal-content{-webkit-align-items:center;align-items:center;background:#fff;border-radius:", [0, 28], ";box-shadow:0 ", [0, 16], " ", [0, 48], " rgba(0,0,0,.12);display:-webkit-flex;display:flex;-webkit-flex-direction:column;flex-direction:column;padding:", [0, 48], " ", [0, 40], " ", [0, 40], ";width:", [0, 560], "}\n.", [1], "exit-title{color:#000;font-size:", [0, 34], ";font-weight:600;margin-bottom:", [0, 20], "}\n.", [1], "exit-desc{color:#8e8e93;font-size:", [0, 28], ";margin-bottom:", [0, 40], ";text-align:center}\n.", [1], "exit-btns{gap:", [0, 24], ";width:100%}\n.", [1], "exit-btn,.", [1], "exit-btns{display:-webkit-flex;display:flex}\n.", [1], "exit-btn{-webkit-align-items:center;align-items:center;border-radius:", [0, 16], ";-webkit-flex:1;flex:1;font-size:", [0, 30], ";font-weight:500;height:", [0, 88], ";-webkit-justify-content:center;justify-content:center}\n.", [1], "exit-btn.", [1], "cancel{background:#f2f2f7;color:#8e8e93}\n.", [1], "exit-btn.", [1], "save{background:linear-gradient(135deg,#ff9500,#ff6b00);color:#fff}\n.", [1], "template-modal{-webkit-align-items:center;align-items:center;background:rgba(0,0,0,.5);bottom:0;display:-webkit-flex;display:flex;-webkit-justify-content:center;justify-content:center;left:0;opacity:0;pointer-events:none;position:fixed;right:0;top:0;transition:opacity .3s ease,visibility .3s ease;visibility:hidden;z-index:200}\n.", [1], "template-modal.", [1], "show{opacity:1;pointer-events:auto;visibility:visible}\n.", [1], "template-modal-content{background:#fff;border-radius:", [0, 28], ";box-sizing:border-box;display:-webkit-flex;display:flex;-webkit-flex-direction:column;flex-direction:column;max-height:65vh;-webkit-transform:scale(.9);transform:scale(.9);transition:-webkit-transform .25s cubic-bezier(.4,0,.2,1);transition:transform .25s cubic-bezier(.4,0,.2,1);transition:transform .25s cubic-bezier(.4,0,.2,1),-webkit-transform .25s cubic-bezier(.4,0,.2,1);width:85%}\n.", [1], "template-modal.", [1], "show .", [1], "template-modal-content{-webkit-transform:scale(1);transform:scale(1)}\n.", [1], "template-header{-webkit-align-items:center;align-items:center;display:-webkit-flex;display:flex;-webkit-justify-content:space-between;justify-content:space-between;padding:", [0, 40], " ", [0, 40], " ", [0, 20], "}\n.", [1], "template-header-title{color:#1a1a1a;font-size:", [0, 36], ";font-weight:500;letter-spacing:", [0, 2], "}\n.", [1], "template-header-add{-webkit-align-items:center;align-items:center;background:#ff8c42;border-radius:50%;display:-webkit-flex;display:flex;height:", [0, 56], ";-webkit-justify-content:center;justify-content:center;position:relative;width:", [0, 56], "}\n.", [1], "add-icon{color:#fff;font-size:", [0, 36], ";left:50%;line-height:1;position:absolute;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}\n.", [1], "template-tip{color:#8a8f9c;font-size:", [0, 24], ";padding:0 ", [0, 40], " ", [0, 20], "}\n.", [1], "template-list{background:#fff;box-sizing:border-box;-webkit-flex:1;flex:1;max-height:50vh;padding:0 ", [0, 32], "}\n.", [1], "template-item-wrap{border-radius:", [0, 16], ";margin-bottom:", [0, 20], ";overflow:hidden;position:relative}\n.", [1], "template-item{background:#fff;border:none;border-radius:", [0, 16], ";box-shadow:0 ", [0, 2], " ", [0, 12], " rgba(0,0,0,.04);box-sizing:border-box;min-height:", [0, 100], ";padding:", [0, 28], " ", [0, 32], ";position:relative;transition:-webkit-transform .25s cubic-bezier(.4,0,.2,1);transition:transform .25s cubic-bezier(.4,0,.2,1);transition:transform .25s cubic-bezier(.4,0,.2,1),-webkit-transform .25s cubic-bezier(.4,0,.2,1);z-index:2}\n.", [1], "template-item,.", [1], "template-item-content{-webkit-align-items:center;align-items:center;display:-webkit-flex;display:flex;-webkit-flex-direction:row;flex-direction:row;gap:", [0, 24], ";-webkit-justify-content:space-between;justify-content:space-between;width:100%}\n.", [1], "template-item-left{color:#ff8c42;-webkit-flex-shrink:0;flex-shrink:0;font-size:", [0, 30], ";font-weight:500;max-width:", [0, 200], "}\n.", [1], "template-item-left,.", [1], "template-item-right{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}\n.", [1], "template-item-right{color:#8a8f9c;-webkit-flex:1;flex:1;font-size:", [0, 26], ";max-width:6em;text-align:right}\n.", [1], "template-delete-btn{background:linear-gradient(135deg,#ff6b6b,#fa5151);border-radius:0 ", [0, 16], " ", [0, 16], " 0;bottom:0;box-shadow:none;color:#fff;font-size:", [0, 28], ";font-weight:500;height:80%;letter-spacing:", [0, 2], ";padding-right:", [0, 8], ";position:absolute;right:0;top:0;width:", [0, 140], ";z-index:1}\n.", [1], "template-delete-btn,.", [1], "template-empty{-webkit-align-items:center;align-items:center;display:-webkit-flex;display:flex;-webkit-justify-content:center;justify-content:center}\n.", [1], "template-empty{padding:", [0, 80], " 0}\n.", [1], "empty-text{color:#8a8f9c;font-size:", [0, 28], "}\n.", [1], "template-bottom-bar{background:#e5e7eb;border-radius:", [0, 4], ";height:", [0, 8], ";margin:", [0, 20], " auto ", [0, 16], ";width:", [0, 120], "}\n.", [1], "icon-background{-webkit-align-items:center;align-items:center;display:-webkit-flex;display:flex;-webkit-flex-shrink:0;flex-shrink:0;height:", [0, 38], ";-webkit-justify-content:center;justify-content:center;position:relative;width:", [0, 38], "}\n.", [1], "bg-icon-rect{background:#fff;border:", [0, 1.2], " solid #666;border-radius:", [0, 3], ";height:", [0, 28], ";position:relative;width:", [0, 24], ";z-index:1}\n.", [1], "bg-icon-lines{display:-webkit-flex;display:flex;-webkit-flex-direction:column;flex-direction:column;gap:", [0, 5], ";left:50%;position:absolute;top:", [0, 9], ";-webkit-transform:translateX(-50%);transform:translateX(-50%);z-index:2}\n.", [1], "bg-icon-lines::after,.", [1], "bg-icon-lines::before{background:#666;content:\x22\x22;height:", [0, 1], ";width:", [0, 12], "}\n.", [1], "panel-overlay{background:rgba(0,0,0,.3);bottom:0;left:0;opacity:0;pointer-events:none;position:fixed;right:0;top:0;transition:opacity .25s ease,visibility .25s ease;visibility:hidden;z-index:995}\n.", [1], "panel-overlay.", [1], "show{opacity:1;pointer-events:auto;visibility:visible}\n.", [1], "bottom-panel{background:#f7f8fa;border-radius:0;left:0;opacity:0;position:fixed;right:0;-webkit-transform:translateY(100%);transform:translateY(100%);transition:-webkit-transform .3s cubic-bezier(.4,0,.2,1);transition:transform .3s cubic-bezier(.4,0,.2,1);transition:transform .3s cubic-bezier(.4,0,.2,1),-webkit-transform .3s cubic-bezier(.4,0,.2,1);visibility:hidden;z-index:1000}\n.", [1], "bottom-panel.", [1], "show{opacity:1;-webkit-transform:translateY(0);transform:translateY(0);visibility:visible}\n.", [1], "panel-content{-webkit-overflow-scrolling:touch;box-sizing:border-box;height:40vh;max-height:400px;min-height:320px;overflow-y:auto;padding:", [0, 28], " ", [0, 40], " calc(", [0, 20], " + env(safe-area-inset-bottom));position:relative}\n.", [1], "panel-header{-webkit-align-items:center;align-items:center;display:-webkit-flex;display:flex;-webkit-justify-content:space-between;justify-content:space-between;margin-bottom:", [0, 20], "}\n.", [1], "panel-title{color:#1a1a1a;font-size:", [0, 30], ";font-weight:500}\n.", [1], "panel-action-btn{background:#ee5a52;border-radius:", [0, 28], ";padding:", [0, 10], " ", [0, 24], ";transition:opacity .15s ease}\n.", [1], "panel-action-btn:active{opacity:.85}\n.", [1], "panel-action-btn.", [1], "disabled{background:#ccc;opacity:.6}\n.", [1], "panel-action-text{color:#fff;font-size:", [0, 24], ";font-weight:500}\n.", [1], "panel-empty{-webkit-align-items:center;align-items:center;display:-webkit-flex;display:flex;-webkit-justify-content:center;justify-content:center;padding:", [0, 24], " 0}\n.", [1], "panel-empty-text{color:#bbb;font-size:", [0, 24], "}\n.", [1], "panel-scroll,.", [1], "template-add-form{box-sizing:border-box;height:100%}\n.", [1], "template-add-form{display:-webkit-flex;display:flex;-webkit-flex-direction:column;flex-direction:column;gap:", [0, 20], "}\n.", [1], "template-add-back{-webkit-align-items:center;align-items:center;display:-webkit-flex;display:flex;gap:", [0, 8], ";margin-bottom:", [0, 4], ";padding:", [0, 8], " 0;transition:opacity .15s ease}\n.", [1], "template-add-back:active{opacity:.6}\n.", [1], "template-add-back-arrow{border-left:", [0, 4], " solid #999;border-top:", [0, 4], " solid #999;height:", [0, 16], ";-webkit-transform:rotate(-45deg);transform:rotate(-45deg);width:", [0, 16], "}\n.", [1], "template-add-back-text{color:#999;font-size:", [0, 26], "}\n.", [1], "template-add-input{font-size:", [0, 28], ";height:", [0, 84], ";padding:0 ", [0, 28], ";text-align:left}\n.", [1], "template-add-input,.", [1], "template-add-textarea{background:#fff;border:", [0, 2], " solid #eee;border-radius:", [0, 14], ";box-sizing:border-box;color:#1a1a1a;width:100%}\n.", [1], "template-add-textarea{-webkit-flex:1;flex:1;font-family:-apple-system,BlinkMacSystemFont,PingFang SC,sans-serif;font-size:", [0, 26], ";line-height:1.6;min-height:", [0, 200], ";padding:", [0, 20], " ", [0, 28], "}\n.", [1], "template-add-ph{color:silver}\n.", [1], "template-add-save{-webkit-align-items:center;align-items:center;background:#ddd;border-radius:", [0, 14], ";color:#fff;display:-webkit-flex;display:flex;font-size:", [0, 28], ";font-weight:500;height:", [0, 80], ";-webkit-justify-content:center;justify-content:center;transition:opacity .15s ease,background .2s ease;width:100%}\n.", [1], "template-add-save.", [1], "active{background:#ee5a52}\n.", [1], "template-add-save.", [1], "active:active{opacity:.85}\n.", [1], "tpl-list{display:-webkit-flex;display:flex;-webkit-flex-direction:column;flex-direction:column;gap:", [0, 12], "}\n.", [1], "tpl-item-wrap{overflow:hidden}\n.", [1], "tpl-item,.", [1], "tpl-item-wrap{border-radius:", [0, 16], ";position:relative}\n.", [1], "tpl-item{-webkit-align-items:center;align-items:center;background:#fff;display:-webkit-flex;display:flex;gap:", [0, 20], ";padding:", [0, 20], " ", [0, 24], ";transition:-webkit-transform .22s ease-out;transition:transform .22s ease-out;transition:transform .22s ease-out,-webkit-transform .22s ease-out;width:100%;will-change:transform;z-index:10}\n.", [1], "tpl-item-add{background:#f8f8f8}\n.", [1], "tpl-item-add:active{background:#f0f0f0}\n.", [1], "tpl-item-icon-wrap{-webkit-align-items:center;align-items:center;background:#f4a0a0;border-radius:", [0, 16], ";display:-webkit-flex;display:flex;-webkit-flex-shrink:0;flex-shrink:0;height:", [0, 72], ";-webkit-justify-content:center;justify-content:center;width:", [0, 72], "}\n.", [1], "tpl-item-icon-text{color:#fff;font-size:", [0, 24], ";font-weight:500}\n.", [1], "tpl-item-icon-add{background:#f0f0f0;position:relative}\n.", [1], "tpl-add-plus-h,.", [1], "tpl-add-plus-v{background:#bbb;border-radius:", [0, 2], ";position:absolute}\n.", [1], "tpl-add-plus-h{height:", [0, 4], ";width:", [0, 32], "}\n.", [1], "tpl-add-plus-h,.", [1], "tpl-add-plus-v{left:50%;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}\n.", [1], "tpl-add-plus-v{height:", [0, 32], ";width:", [0, 4], "}\n.", [1], "tpl-item-info{display:-webkit-flex;display:flex;-webkit-flex:1;flex:1;-webkit-flex-direction:column;flex-direction:column;gap:", [0, 4], ";min-width:0}\n.", [1], "tpl-item-name{color:#333;font-size:", [0, 28], ";font-weight:500;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}\n.", [1], "tpl-item-desc{color:#999;font-size:", [0, 22], "}\n.", [1], "tpl-item-arrow{color:#ccc;-webkit-flex-shrink:0;flex-shrink:0;font-size:", [0, 32], "}\n.", [1], "tpl-actions{bottom:0;position:absolute;right:0;top:0;z-index:1}\n.", [1], "tpl-action-btn,.", [1], "tpl-actions{display:-webkit-flex;display:flex}\n.", [1], "tpl-action-btn{-webkit-align-items:center;align-items:center;border-radius:", [0, 16], ";-webkit-flex-shrink:0;flex-shrink:0;height:calc(100% - ", [0, 8], ");-webkit-justify-content:center;justify-content:center;margin-top:", [0, 4], ";min-width:", [0, 120], "}\n.", [1], "tpl-action-text{color:#fff;font-size:", [0, 26], ";font-weight:500}\n.", [1], "tpl-edit-btn{background:linear-gradient(135deg,#999,#777);width:", [0, 120], "}\n.", [1], "tpl-del-btn{background:linear-gradient(135deg,#ff6b6b,#fa5151);width:", [0, 120], "}\n.", [1], "panel-content-compact{min-height:auto}\n.", [1], "bg-scroll{height:280px;white-space:nowrap}\n.", [1], "bg-list{gap:", [0, 20], ";padding-right:", [0, 40], "}\n.", [1], "bg-card,.", [1], "bg-list{-webkit-align-items:center;align-items:center;display:-webkit-inline-flex;display:inline-flex;height:100%}\n.", [1], "bg-card{-webkit-flex-direction:column;flex-direction:column;-webkit-flex-shrink:0;flex-shrink:0;position:relative;width:", [0, 200], "}\n.", [1], "bg-card:active{-webkit-transform:scale(.97);transform:scale(.97);transition:-webkit-transform .15s ease;transition:transform .15s ease;transition:transform .15s ease,-webkit-transform .15s ease}\n.", [1], "bg-card-inner{background:#f0f0f0;border:", [0, 2], " solid transparent;border-radius:", [0, 20], ";box-sizing:border-box;-webkit-flex:1;flex:1;overflow:hidden;position:relative;transition:border .2s ease;width:", [0, 200], "}\n.", [1], "bg-card-img{padding:0}\n.", [1], "bg-card-img-src{height:100%;width:100%}\n.", [1], "bg-card-active .", [1], "bg-card-inner{border-color:#ee5a52}\n.", [1], "bg-card-check{-webkit-align-items:center;align-items:center;background:#ee5a52;border-radius:50%;box-shadow:0 ", [0, 2], " ", [0, 8], " rgba(238,90,82,.4);display:-webkit-flex;display:flex;height:", [0, 40], ";-webkit-justify-content:center;justify-content:center;position:absolute;right:", [0, 12], ";top:", [0, 12], ";width:", [0, 40], ";z-index:2}\n.", [1], "bg-card-check-inner{border-bottom:", [0, 3], " solid #fff;border-left:", [0, 3], " solid #fff;height:", [0, 14], ";-webkit-transform:rotate(-45deg) translate(", [0, 1], ",", [0, -1], ");transform:rotate(-45deg) translate(", [0, 1], ",", [0, -1], ");width:", [0, 14], "}\n.", [1], "bg-tip{display:-webkit-flex;display:flex;-webkit-justify-content:center;justify-content:center;padding:", [0, 16], " 0 ", [0, 8], "}\n.", [1], "bg-tip-text{color:#999;font-size:", [0, 24], "}\n.", [1], "loc-title-row{-webkit-align-items:center;align-items:center;display:-webkit-flex;display:flex;gap:", [0, 10], ";margin-bottom:", [0, 28], "}\n.", [1], "loc-title-icon{height:", [0, 36], ";width:", [0, 36], "}\n.", [1], "loc-title-text{color:#666;font-size:", [0, 30], ";font-weight:500}\n.", [1], "loc-add-btn{-webkit-align-items:center;align-items:center;background:#f5f5f5;border-radius:", [0, 12], ";display:-webkit-flex;display:flex;gap:", [0, 12], ";padding:", [0, 20], " ", [0, 28], ";transition:background .15s ease}\n.", [1], "loc-add-btn:active{background:#ececec}\n.", [1], "loc-add-icon{-webkit-align-items:center;align-items:center;background:#ddd;border-radius:50%;color:#fff;display:-webkit-flex;display:flex;height:", [0, 36], ";-webkit-justify-content:center;justify-content:center;line-height:1;width:", [0, 36], "}\n.", [1], "loc-add-icon,.", [1], "loc-add-text{font-size:", [0, 28], ";font-weight:400}\n.", [1], "loc-add-text{color:#666}\n.", [1], "loc-tag-row{-webkit-flex-wrap:wrap;flex-wrap:wrap;gap:", [0, 16], "}\n.", [1], "loc-tag,.", [1], "loc-tag-row{-webkit-align-items:center;align-items:center;display:-webkit-flex;display:flex}\n.", [1], "loc-tag{background:#f0f5ff;border-radius:", [0, 12], ";gap:", [0, 8], ";max-width:100%;padding:", [0, 14], " ", [0, 16], " ", [0, 14], " ", [0, 24], ";transition:background .15s ease}\n.", [1], "loc-tag:active{background:#e4ebff}\n.", [1], "loc-tag-text{color:#5b9bd5;font-size:", [0, 28], ";font-weight:400;word-break:break-all}\n.", [1], "loc-tag-delete{-webkit-align-items:center;align-items:center;background:rgba(91,155,213,.15);border-radius:50%;display:-webkit-flex;display:flex;-webkit-flex-shrink:0;flex-shrink:0;height:", [0, 36], ";-webkit-justify-content:center;justify-content:center;transition:background .15s ease;width:", [0, 36], "}\n.", [1], "loc-tag-delete:active{background:rgba(91,155,213,.3)}\n.", [1], "loc-tag-delete-icon{color:#5b9bd5;font-size:", [0, 28], ";font-weight:300;line-height:1}\n.", [1], "img-title-row{margin-bottom:", [0, 24], "}\n.", [1], "img-title-text{color:#666;font-size:", [0, 30], ";font-weight:500}\n.", [1], "img-grid{display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap;gap:", [0, 16], "}\n.", [1], "img-grid-item{aspect-ratio:1;border-radius:", [0, 16], ";overflow:hidden;position:relative;width:calc((100% - ", [0, 48], ") / 2)}\n.", [1], "img-grid-add{-webkit-align-items:center;align-items:center;background:#f5f5f5;border:", [0, 2], " dashed #ddd;display:-webkit-flex;display:flex;-webkit-justify-content:center;justify-content:center;transition:background .15s ease}\n.", [1], "img-grid-add:active{background:#ececec}\n.", [1], "img-add-icon{height:", [0, 56], ";position:relative;width:", [0, 56], "}\n.", [1], "img-add-line-h,.", [1], "img-add-line-v{background:#ccc;border-radius:", [0, 2], ";position:absolute}\n.", [1], "img-add-line-h{height:", [0, 4], ";width:", [0, 40], "}\n.", [1], "img-add-line-h,.", [1], "img-add-line-v{left:50%;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}\n.", [1], "img-add-line-v{height:", [0, 40], ";width:", [0, 4], "}\n.", [1], "img-grid-thumb{height:100%;width:100%}\n.", [1], "img-grid-delete{-webkit-align-items:center;align-items:center;display:-webkit-flex;display:flex;height:", [0, 40], ";-webkit-justify-content:center;justify-content:center;position:absolute;right:", [0, 8], ";top:", [0, 8], ";width:", [0, 40], ";z-index:2}\n.", [1], "img-grid-delete-bg{background:rgba(0,0,0,.45);border-radius:50%;bottom:0;left:0;position:absolute;right:0;top:0}\n.", [1], "img-grid-delete-text{color:#fff;font-size:", [0, 26], ";font-weight:400;line-height:1;position:relative;z-index:1}\n.", [1], "font-row{-webkit-align-items:center;align-items:center;display:-webkit-flex;display:flex;-webkit-justify-content:space-between;justify-content:space-between;margin-bottom:", [0, 20], "}\n.", [1], "font-row-label{color:#333;font-size:", [0, 26], ";font-weight:500}\n.", [1], "font-row-value{color:#999;font-size:", [0, 24], "}\n.", [1], "font-slider-wrap{gap:", [0, 12], ";margin-bottom:", [0, 20], "}\n.", [1], "font-slider-icon,.", [1], "font-slider-wrap{-webkit-align-items:center;align-items:center;display:-webkit-flex;display:flex}\n.", [1], "font-slider-icon{color:#bbb;-webkit-flex-shrink:0;flex-shrink:0;font-size:", [0, 22], ";height:", [0, 40], ";-webkit-justify-content:center;justify-content:center;width:", [0, 40], "}\n.", [1], "font-slider-icon-sm{color:#ccc;font-size:", [0, 20], "}\n.", [1], "font-slider-icon-lg{color:#999;font-size:", [0, 34], "}\n.", [1], "font-slider{-webkit-flex:1;flex:1;margin:0}\n.", [1], "font-preview{background:#f8f8f8;border-radius:", [0, 12], ";line-height:1.6;margin-bottom:", [0, 4], ";padding:", [0, 20], " ", [0, 24], "}\n.", [1], "font-divider{background:#eee;height:", [0, 1], ";margin:", [0, 24], " 0}\n.", [1], "font-slider-icon-thin{color:#ccc;font-size:", [0, 22], "}\n.", [1], "font-slider-icon-thick{color:#666;font-size:", [0, 34], ";font-weight:900}\n.", [1], "font-color-list{-webkit-flex-wrap:wrap;flex-wrap:wrap;gap:", [0, 20], ";margin-top:", [0, 8], "}\n.", [1], "font-color-dot,.", [1], "font-color-list{display:-webkit-flex;display:flex}\n.", [1], "font-color-dot{-webkit-align-items:center;align-items:center;border-radius:50%;height:", [0, 56], ";-webkit-justify-content:center;justify-content:center;position:relative;transition:-webkit-transform .15s ease;transition:transform .15s ease;transition:transform .15s ease,-webkit-transform .15s ease;width:", [0, 56], "}\n.", [1], "font-color-dot:active{-webkit-transform:scale(.9);transform:scale(.9)}\n.", [1], "font-color-dot.", [1], "active{box-shadow:0 0 0 ", [0, 3], " #fff,0 0 0 ", [0, 5], " #ee5a52}\n.", [1], "font-color-check{-webkit-align-items:center;align-items:center;display:-webkit-flex;display:flex;height:", [0, 56], ";-webkit-justify-content:center;justify-content:center;left:0;position:absolute;top:0;width:", [0, 56], "}\n.", [1], "font-color-check-inner{border-bottom:", [0, 3], " solid #fff;border-left:", [0, 3], " solid #fff;height:", [0, 14], ";-webkit-transform:rotate(-45deg) translate(", [0, 2], ",", [0, -2], ");transform:rotate(-45deg) translate(", [0, 2], ",", [0, -2], ");width:", [0, 20], "}\n.", [1], "font-settings-icon{color:#666;font-size:", [0, 36], ";font-weight:700;line-height:1;transition:color .15s ease}\n.", [1], "font-settings-icon-active{color:#ee5a52}\n.", [1], "editor-fixed{background:#fff;box-sizing:border-box;-webkit-flex:1;flex:1;min-height:0;overflow:hidden;padding:", [0, 32], " ", [0, 40], " ", [0, 24], ";position:relative;transition:background .3s ease;z-index:90}\n.", [1], "content-card{background:transparent;min-height:100%;padding-bottom:", [0, 120], ";position:relative}\n.", [1], "editor-fixed.", [1], "paper-plain{background:#fff}\n.", [1], "editor-fixed.", [1], "paper-lined{background-color:#fff;background-image:repeating-linear-gradient(0deg,transparent,transparent ", [0, 52], ",#c8e0f5 0,#c8e0f5 ", [0, 54], ");background-position:0 ", [0, 32], ";background-size:100% ", [0, 54], "}\n.", [1], "editor-fixed.", [1], "paper-grid{background-color:#fff;background-image:linear-gradient(#d8eaf8 ", [0, 1], ",transparent 0),linear-gradient(90deg,#d8eaf8 ", [0, 1], ",transparent 0);background-position:", [0, 32], " ", [0, 32], ";background-size:", [0, 54], " ", [0, 54], "}\n.", [1], "editor-fixed.", [1], "paper-kraft{background-color:#d4a76a;background-image:repeating-linear-gradient(45deg,transparent,transparent ", [0, 4], ",rgba(139,90,43,.12) 0,rgba(139,90,43,.12) ", [0, 8], ")}\n.", [1], "editor-fixed.", [1], "paper-cream{background-color:#fff5e0}\n.", [1], "editor-fixed.", [1], "paper-blue{background-color:#eef6ff}\n.", [1], "editor-fixed.", [1], "paper-mdpaper{background-color:#fdfcf8;background-image:radial-gradient(circle at 20% 30%,rgba(0,0,0,.015) 0,transparent 50%),radial-gradient(circle at 80% 70%,rgba(0,0,0,.01) 0,transparent 40%)}\n.", [1], "editor-fixed.", [1], "paper-fogblue{background-color:#f5f7fa}\n.", [1], "editor-fixed.", [1], "paper-vintage{background-color:#faf8f3;background-image:repeating-linear-gradient(0deg,transparent,transparent ", [0, 56], ",hsla(40,29%,59%,.06) 0,hsla(40,29%,59%,.06) ", [0, 57], ");background-position:0 ", [0, 32], ";background-size:100% ", [0, 57], "}\n.", [1], "editor-fixed.", [1], "paper-linen{background-color:#f8f6f2;background-image:repeating-linear-gradient(90deg,transparent,transparent ", [0, 2], ",hsla(30,10%,59%,.02) 0,hsla(30,10%,59%,.02) ", [0, 3], "),repeating-linear-gradient(0deg,transparent,transparent ", [0, 2], ",hsla(30,10%,59%,.02) 0,hsla(30,10%,59%,.02) ", [0, 3], ")}\n.", [1], "editor-fixed.", [1], "paper-mint{background-color:#f0fff0}\n.", [1], "overwrite-modal{-webkit-align-items:center;align-items:center;background:rgba(0,0,0,.3);bottom:0;display:-webkit-flex;display:flex;-webkit-justify-content:center;justify-content:center;left:0;opacity:0;position:fixed;right:0;top:0;transition:all .3s ease;visibility:hidden;z-index:2000}\n.", [1], "overwrite-modal.", [1], "show{opacity:1;visibility:visible}\n.", [1], "overwrite-modal-content{-webkit-align-items:center;align-items:center;-webkit-animation:modalBounce .3s ease;animation:modalBounce .3s ease;background:#fff;border-radius:", [0, 32], ";box-shadow:0 ", [0, 16], " ", [0, 48], " rgba(0,0,0,.12);display:-webkit-flex;display:flex;-webkit-flex-direction:column;flex-direction:column;padding:", [0, 48], " ", [0, 40], " ", [0, 40], ";width:", [0, 560], "}\n.", [1], "overwrite-title{color:#333;font-size:", [0, 36], ";font-weight:600;margin-bottom:", [0, 16], "}\n.", [1], "overwrite-desc{color:#888;font-size:", [0, 28], ";line-height:1.5;margin-bottom:", [0, 40], ";text-align:center}\n.", [1], "overwrite-btns{gap:", [0, 24], ";width:100%}\n.", [1], "overwrite-btn,.", [1], "overwrite-btns{display:-webkit-flex;display:flex}\n.", [1], "overwrite-btn{-webkit-align-items:center;align-items:center;border-radius:", [0, 44], ";-webkit-flex:1;flex:1;font-size:", [0, 32], ";font-weight:500;height:", [0, 88], ";-webkit-justify-content:center;justify-content:center}\n.", [1], "overwrite-btn.", [1], "cancel{background:#f5f5f5;color:#666}\n.", [1], "overwrite-btn.", [1], "confirm{background:linear-gradient(135deg,#ff9500,#ff6b00);color:#fff}\n.", [1], "delete-modal{-webkit-align-items:center;align-items:center;background:rgba(0,0,0,.3);bottom:0;display:-webkit-flex;display:flex;-webkit-justify-content:center;justify-content:center;left:0;opacity:0;position:fixed;right:0;top:0;transition:all .3s ease;visibility:hidden;z-index:200}\n.", [1], "delete-modal.", [1], "show{opacity:1;visibility:visible}\n.", [1], "delete-modal-content{-webkit-align-items:center;align-items:center;-webkit-animation:modalBounce .3s ease;animation:modalBounce .3s ease;background:#fff;border-radius:", [0, 32], ";box-shadow:0 ", [0, 16], " ", [0, 48], " rgba(0,0,0,.12);display:-webkit-flex;display:flex;-webkit-flex-direction:column;flex-direction:column;padding:", [0, 48], " ", [0, 40], " ", [0, 40], ";width:", [0, 560], "}\n@-webkit-keyframes modalBounce{0%{opacity:0;-webkit-transform:scale(.8);transform:scale(.8)}\n50%{-webkit-transform:scale(1.05);transform:scale(1.05)}\n100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}\n}@keyframes modalBounce{0%{opacity:0;-webkit-transform:scale(.8);transform:scale(.8)}\n50%{-webkit-transform:scale(1.05);transform:scale(1.05)}\n100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}\n}.", [1], "modal-trash-icon{height:", [0, 130], ";margin-bottom:", [0, 24], ";position:relative;width:", [0, 130], "}\n.", [1], "modal-trash-body{background:linear-gradient(180deg,#a8d8ea,#8bc4cf);border:", [0, 3], " solid #666;border-radius:", [0, 10], " ", [0, 10], " ", [0, 15], " ", [0, 15], ";bottom:", [0, 10], ";height:", [0, 65], ";left:50%;position:absolute;-webkit-transform:translateX(-50%);transform:translateX(-50%);width:", [0, 70], "}\n.", [1], "modal-trash-body::before{background:#333;border-radius:50%;box-shadow:", [0, 26], " 0 0 #333;content:\x22\x22;height:", [0, 10], ";left:", [0, 12], ";position:absolute;top:", [0, 14], ";width:", [0, 10], "}\n.", [1], "modal-trash-body::after{border:", [0, 3], " solid #333;border-radius:0 0 ", [0, 12], " ", [0, 12], ";border-top:none;bottom:", [0, 14], ";content:\x22\x22;height:", [0, 8], ";width:", [0, 24], "}\n.", [1], "modal-trash-body::after,.", [1], "modal-trash-lines{left:50%;position:absolute;-webkit-transform:translateX(-50%);transform:translateX(-50%)}\n.", [1], "modal-trash-lines{bottom:0;display:-webkit-flex;display:flex;gap:", [0, 20], "}\n.", [1], "modal-trash-line{background:#666;border-radius:50%;height:", [0, 16], ";width:", [0, 16], "}\n.", [1], "modal-trash-arm{background:linear-gradient(180deg,#a8d8ea,#8bc4cf);border:", [0, 2], " solid #666;border-radius:", [0, 4], ";bottom:", [0, 40], ";height:", [0, 30], ";position:absolute;right:", [0, 8], ";-webkit-transform:rotate(-30deg);transform:rotate(-30deg);-webkit-transform-origin:bottom center;transform-origin:bottom center;width:", [0, 8], "}\n.", [1], "modal-trash-paper{-webkit-animation:snip .8s ease-in-out infinite;animation:snip .8s ease-in-out infinite;height:", [0, 36], ";position:absolute;right:", [0, 8], ";top:", [0, 28], ";width:", [0, 40], "}\n.", [1], "modal-trash-scissors{left:50%;position:absolute;top:0;-webkit-transform:translateX(-50%);transform:translateX(-50%)}\n.", [1], "modal-trash-scissors::after,.", [1], "modal-trash-scissors::before{background:#f99;border:", [0, 2], " solid #666;border-radius:", [0, 2], ";content:\x22\x22;height:", [0, 20], ";position:absolute;width:", [0, 8], "}\n.", [1], "modal-trash-scissors::before{-webkit-transform:rotate(30deg);transform:rotate(30deg);-webkit-transform-origin:bottom center;transform-origin:bottom center}\n.", [1], "modal-trash-scissors::after{-webkit-transform:rotate(-30deg);transform:rotate(-30deg);-webkit-transform-origin:bottom center;transform-origin:bottom center}\n.", [1], "modal-trash-paper-cut{background:#ffb347;height:", [0, 2], ";position:absolute;right:", [0, 20], ";top:", [0, 48], ";-webkit-transform:rotate(-30deg);transform:rotate(-30deg);width:", [0, 20], "}\n.", [1], "modal-title{color:#333;font-size:", [0, 36], ";font-weight:500;margin-bottom:", [0, 12], "}\n.", [1], "modal-desc{color:#999;font-size:", [0, 28], ";margin-bottom:", [0, 36], "}\n.", [1], "modal-btns{gap:", [0, 24], ";width:100%}\n.", [1], "modal-btn,.", [1], "modal-btns{display:-webkit-flex;display:flex}\n.", [1], "modal-btn{-webkit-align-items:center;align-items:center;border-radius:", [0, 44], ";-webkit-flex:1;flex:1;font-size:", [0, 32], ";font-weight:500;height:", [0, 88], ";-webkit-justify-content:center;justify-content:center}\n.", [1], "modal-btn.", [1], "cancel{background:#f5f5f5;color:#666}\n.", [1], "modal-btn.", [1], "confirm{background:linear-gradient(135deg,#ff9a9e,#fecfef);color:#fff}\n@-webkit-keyframes snip{0%,100%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}\n25%{-webkit-transform:rotate(-10deg);transform:rotate(-10deg)}\n75%{-webkit-transform:rotate(10deg);transform:rotate(10deg)}\n}@keyframes snip{0%,100%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}\n25%{-webkit-transform:rotate(-10deg);transform:rotate(-10deg)}\n75%{-webkit-transform:rotate(10deg);transform:rotate(10deg)}\n}.", [1], "save-toast{-webkit-align-items:center;align-items:center;bottom:0;display:-webkit-flex;display:flex;-webkit-justify-content:center;justify-content:center;left:0;opacity:0;pointer-events:none;position:fixed;right:0;top:0;transition:opacity .25s ease,visibility .25s ease;visibility:hidden;z-index:9999}\n.", [1], "save-toast.", [1], "show{opacity:1;visibility:visible}\n.", [1], "save-toast-content{-webkit-align-items:center;align-items:center;background:rgba(50,50,50,.85);border-radius:", [0, 16], ";display:-webkit-flex;display:flex;-webkit-flex-direction:row;flex-direction:row;gap:", [0, 16], ";padding:", [0, 24], " ", [0, 40], ";-webkit-transform:scale(.9);transform:scale(.9);transition:-webkit-transform .3s cubic-bezier(.34,1.56,.64,1);transition:transform .3s cubic-bezier(.34,1.56,.64,1);transition:transform .3s cubic-bezier(.34,1.56,.64,1),-webkit-transform .3s cubic-bezier(.34,1.56,.64,1)}\n.", [1], "save-toast.", [1], "show .", [1], "save-toast-content{-webkit-transform:scale(1);transform:scale(1)}\n.", [1], "save-toast-icon{-webkit-align-items:center;align-items:center;display:-webkit-flex;display:flex;height:", [0, 36], ";-webkit-justify-content:center;justify-content:center;position:relative;width:", [0, 36], "}\n.", [1], "save-check-circle{background:#4cd964;border-radius:50%;height:", [0, 36], ";left:0;position:absolute;top:0;width:", [0, 36], "}\n.", [1], "save-check-mark{border-bottom:", [0, 3], " solid #fff;border-left:", [0, 3], " solid #fff;height:", [0, 8], ";margin-top:", [0, -2], ";position:relative;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);width:", [0, 14], ";z-index:2}\n.", [1], "save-toast-text{color:#fff;font-size:", [0, 28], ";font-weight:500}\n.", [1], "draft-tip{-webkit-align-items:center;align-items:center;background:#fff8f0;border-bottom:", [0, 1], " solid #ffe0b2;display:-webkit-flex;display:flex;height:0;opacity:0;overflow:hidden;padding:0 ", [0, 24], ";transition:height .3s ease,opacity .3s ease}\n.", [1], "draft-tip.", [1], "show{height:", [0, 72], ";opacity:1}\n.", [1], "draft-tip-icon{font-size:", [0, 28], ";margin-right:", [0, 12], "}\n.", [1], "draft-tip-text{color:#8b6914;-webkit-flex:1;flex:1;font-size:", [0, 24], "}\n.", [1], "draft-tip-dismiss{color:#ff8c42;font-size:", [0, 24], ";font-weight:500}\n", ], "Some selectors are not allowed in component wxss, including tag name selectors, ID selectors, and attribute selectors.(./pages/write/write.wxss:1:6517)", {
        path: "./pages/write/write.wxss"
    });
}