const { request, TOKEN_KEY } = require('./request')

function loginWithCode(code) {
  return request({
    url: '/api/auth/login',
    method: 'POST',
    data: { code }
  }).then((data) => {
    wx.setStorageSync(TOKEN_KEY, data.token)
    const app = getApp()
    app.globalData.userId = data.userId
    app.globalData.openId = data.openId
    app.globalData.devMode = data.devMode
    return data
  })
}

function wxLogin() {
  return new Promise((resolve, reject) => {
    wx.login({
      success(res) {
        if (res.code) {
          resolve(res.code)
        } else {
          reject(new Error('wx.login failed'))
        }
      },
      fail: reject
    })
  })
}

function ensureLogin() {
  const token = wx.getStorageSync(TOKEN_KEY)
  if (token) {
    return Promise.resolve({ token })
  }

  return wxLogin()
    .then((code) => loginWithCode(code))
    .catch(() => loginWithCode('dev-login'))
}

module.exports = {
  ensureLogin,
  loginWithCode
}
