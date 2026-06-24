const config = require('./config')

const TOKEN_KEY = 'auth_token'

function request(options) {
  const token = wx.getStorageSync(TOKEN_KEY)
  const header = Object.assign(
    { 'Content-Type': 'application/json' },
    options.header || {}
  )

  if (token) {
    header.Authorization = 'Bearer ' + token
  }

  return new Promise((resolve, reject) => {
    wx.request({
      url: config.baseUrl + options.url,
      method: options.method || 'GET',
      data: options.data,
      header,
      success(res) {
        if (res.statusCode >= 200 && res.statusCode < 300) {
          resolve(res.data)
          return
        }
        const message = (res.data && res.data.message) || ('HTTP ' + res.statusCode)
        reject(new Error(message))
      },
      fail(err) {
        reject(err)
      }
    })
  })
}

module.exports = {
  request,
  TOKEN_KEY
}
