# diary-server

日记小程序 REST API（Spring Boot 3 + PostgreSQL + Flyway + JWT）。

## 前置要求

- Java 21
- Maven 3.9+（或使用项目自带的 `./mvnw`）
- Docker（用于本地 PostgreSQL）

## 快速开始

### 1. 启动数据库

```bash
cd diary-server
docker compose up -d
```

### 2. 启动 API

```bash
./mvnw spring-boot:run
```

默认监听 `http://localhost:8080`。PostgreSQL 通过 Docker 映射到本机 **5433** 端口（若你本机 5432 已被占用）。

本地开发模式下未配置微信 AppSecret 时，登录接口接受 `code: "dev-login"`，自动创建开发用户。

### 3. 验证

```bash
# 健康检查
curl http://localhost:8080/actuator/health

# 开发登录
curl -X POST http://localhost:8080/api/auth/login \
  -H 'Content-Type: application/json' \
  -d '{"code":"dev-login"}'

# 写入日记（将 TOKEN 替换为上一步返回的 token）
curl -X PUT http://localhost:8080/api/diaries/2026-06-24 \
  -H "Authorization: Bearer TOKEN" \
  -H 'Content-Type: application/json' \
  -d '{"content":"今天开始了日记项目。"}'

# 列表
curl http://localhost:8080/api/diaries \
  -H "Authorization: Bearer TOKEN"
```

## API 概览

| 方法 | 路径 | 说明 |
|------|------|------|
| POST | `/api/auth/login` | `{ "code": "..." }` → JWT |
| GET | `/api/diaries?since=` | 日记列表（可选增量） |
| GET | `/api/diaries/{date}` | 单日日记 |
| PUT | `/api/diaries/{date}` | 创建/更新 |
| DELETE | `/api/diaries/{date}` | 软删除 |

## 配置

| 变量 | 说明 | 默认 |
|------|------|------|
| `DB_*` | PostgreSQL 连接 | 见 `application-dev.yml` |
| `WECHAT_APP_ID` | 小程序 AppID | 空 |
| `WECHAT_APP_SECRET` | 小程序 Secret | 空 |
| `WECHAT_DEV_MODE` | 无微信凭证时用 dev-login | `true` |
| `diary.jwt.secret` | JWT 密钥 | 见 `application.yml` |

生产环境务必修改 JWT secret，并设置 `WECHAT_DEV_MODE=false`。

## 目录结构

```
src/main/java/com/diary/server/
├── config/          # Security, CORS, 配置属性
├── domain/          # JPA 实体
├── repository/      # 数据访问
├── security/        # JWT 过滤器
├── service/         # 业务逻辑
└── web/             # REST 控制器与 DTO
```
