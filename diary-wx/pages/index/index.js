const api = require('../../utils/api')
const auth = require('../../utils/auth')

function todayStr() {
  const d = new Date()
  const y = d.getFullYear()
  const m = String(d.getMonth() + 1).padStart(2, '0')
  const day = String(d.getDate()).padStart(2, '0')
  return y + '-' + m + '-' + day
}

Page({
  data: {
    loading: true,
    diaries: [],
    devMode: false
  },

  onShow() {
    this.bootstrap()
  },

  onPullDownRefresh() {
    this.loadDiaries().finally(() => wx.stopPullDownRefresh())
  },

  bootstrap() {
    this.setData({ loading: true })
    auth.ensureLogin()
      .then((data) => {
        this.setData({ devMode: !!data.devMode })
        return this.loadDiaries()
      })
      .catch((err) => {
        wx.showToast({ title: err.message || '登录失败', icon: 'none' })
        this.setData({ loading: false })
      })
  },

  loadDiaries() {
    return api.listDiaries()
      .then((diaries) => {
        this.setData({ diaries, loading: false })
      })
      .catch((err) => {
        wx.showToast({ title: err.message || '加载失败', icon: 'none' })
        this.setData({ loading: false })
      })
  },

  onWriteToday() {
    wx.navigateTo({ url: '/pages/write/write?date=' + todayStr() })
  },

  onOpenDiary(e) {
    const date = e.currentTarget.dataset.date
    wx.navigateTo({ url: '/pages/detail/detail?date=' + date })
  }
})
