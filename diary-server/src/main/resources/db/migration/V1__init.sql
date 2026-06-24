-- Users (WeChat openid)
CREATE TABLE users (
    id          BIGSERIAL PRIMARY KEY,
    open_id     VARCHAR(64)  NOT NULL UNIQUE,
    nick_name   VARCHAR(64),
    avatar_url  VARCHAR(512),
    created_at  TIMESTAMPTZ  NOT NULL DEFAULT NOW(),
    updated_at  TIMESTAMPTZ  NOT NULL DEFAULT NOW()
);

CREATE INDEX idx_users_open_id ON users (open_id);

-- One diary entry per user per calendar date
CREATE TABLE diaries (
    id          BIGSERIAL PRIMARY KEY,
    user_id     BIGINT       NOT NULL REFERENCES users (id) ON DELETE CASCADE,
    diary_date  DATE         NOT NULL,
    content     TEXT         NOT NULL DEFAULT '',
    location    VARCHAR(256),
    latitude    DOUBLE PRECISION,
    longitude   DOUBLE PRECISION,
    created_at  TIMESTAMPTZ  NOT NULL DEFAULT NOW(),
    updated_at  TIMESTAMPTZ  NOT NULL DEFAULT NOW(),
    deleted_at  TIMESTAMPTZ,
    CONSTRAINT uq_diaries_user_date UNIQUE (user_id, diary_date)
);

CREATE INDEX idx_diaries_user_updated ON diaries (user_id, updated_at);
CREATE INDEX idx_diaries_user_date ON diaries (user_id, diary_date);
