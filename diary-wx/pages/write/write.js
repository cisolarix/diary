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
    date: '',
    content: '',
    saving: false,
    canSave: false
  },

  onLoad(options) {
    const date = options.date || todayStr()
    this.setData({ date })
    auth.ensureLogin().then(() => this.loadExisting(date))
  },

  loadExisting(date) {
    api.getDiary(date)
      .then((diary) => {
        const content = diary.content || ''
        this.setData({
          content,
          canSave: content.trim().length > 0
        })
      })
      .catch(() => {
        // 404 is fine for new diary
      })
  },

  onInput(e) {
    const content = e.detail.value || ''
    this.setData({
      content,
      canSave: content.trim().length > 0
    })
  },

  onSave() {
    if (this.data.saving || !this.data.canSave) return

    this.setData({ saving: true })
    api.saveDiary(this.data.date, { content: this.data.content.trim() })
      .then(() => {
        wx.showToast({ title: '已保存', icon: 'success' })
        setTimeout(() => wx.navigateBack(), 600)
      })
      .catch((err) => {
        wx.showToast({ title: err.message || '保存失败', icon: 'none' })
      })
      .finally(() => {
        this.setData({ saving: false })
      })
  }
})
