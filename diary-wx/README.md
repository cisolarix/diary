# diary-wx

日记小程序前端（微信原生）。

## 前置要求

- [微信开发者工具](https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html)
- 本地已启动 `diary-server`（默认 `http://localhost:8080`）

## 快速开始

1. 用微信开发者工具 **导入项目**，目录选择本文件夹 `diary-wx`。
2. 在 `project.config.json` / `project.private.config.json` 中填入你的小程序 **AppID**（测试可用测试号）。
3. 确认 `utils/config.js` 中的 `baseUrl` 指向后端地址。
4. 开发者工具 → **详情 → 本地设置** → 勾选 **不校验合法域名**（本地调试必须）。
5. 启动后端与 PostgreSQL 后，编译运行小程序。

## 页面

| 页面 | 路径 | 说明 |
|------|------|------|
| 首页 | `pages/index` | 日记列表 + 写今日 |
| 写作 | `pages/write` | 新建/编辑日记 |
| 详情 | `pages/detail` | 查看 / 编辑 / 删除 |

## 登录说明

- 生产：`wx.login` → 后端 `/api/auth/login` 换 JWT。
- 本地开发：后端未配置微信 Secret 时，自动 fallback 为 `dev-login`。

## 目录结构

```
diary-wx/
├── app.js / app.json / app.wxss
├── pages/
│   ├── index/
│   ├── write/
│   └── detail/
└── utils/
    ├── config.js    # API 地址
    ├── request.js   # wx.request 封装
    ├── auth.js      # 登录与 token
    └── api.js       # 日记 API
```

## 联调 checklist

- [ ] 本地 PostgreSQL 已就绪，库 `diary_dev` 已创建
- [ ] `./mvnw spring-boot:run` 启动后端
- [ ] 微信开发者工具关闭域名校验
- [ ] 首页能加载列表，写作页能保存
