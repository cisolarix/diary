const auth = require('./utils/auth')

App({
  globalData: {
    userId: null,
    openId: null,
    devMode: false
  },

  onLaunch() {
    auth.ensureLogin().catch((err) => {
      console.error('login failed', err)
    })
  }
})
