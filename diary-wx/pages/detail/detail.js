const api = require('../../utils/api')
const auth = require('../../utils/auth')

Page({
  data: {
    date: '',
    diary: null,
    loading: true
  },

  onLoad(options) {
    const date = options.date
    if (!date) {
      wx.showToast({ title: '缺少日期', icon: 'none' })
      return
    }
    this.setData({ date })
    auth.ensureLogin().then(() => this.loadDiary(date))
  },

  loadDiary(date) {
    this.setData({ loading: true })
    api.getDiary(date)
      .then((diary) => {
        this.setData({ diary, loading: false })
      })
      .catch(() => {
        this.setData({ diary: null, loading: false })
      })
  },

  onEdit() {
    wx.navigateTo({ url: '/pages/write/write?date=' + this.data.date })
  },

  onDelete() {
    wx.showModal({
      title: '确认删除',
      content: '删除后不可恢复',
      confirmColor: '#ff4d4f',
      success: (res) => {
        if (!res.confirm) return
        api.deleteDiary(this.data.date)
          .then(() => {
            wx.showToast({ title: '已删除', icon: 'success' })
            setTimeout(() => wx.navigateBack(), 600)
          })
          .catch((err) => {
            wx.showToast({ title: err.message || '删除失败', icon: 'none' })
          })
      }
    })
  }
})
