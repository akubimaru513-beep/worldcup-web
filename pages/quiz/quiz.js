const { questions } = require('../../data/questions')
const app = getApp()

Page({
  data: {
    questions,
    current: 0,
    total: 30,
    answers: {},
    selectedKey: '',
    progress: 0,
    locked: false,
  },

  onLoad() {
    // Always start fresh on load. Resuming after the ad page happens in onShow.
    const g = app.globalData
    g.returnFromAd = false
    g.quizCurrent = 0
    g.quizAnswers = {}
    this.setData({ current: 0, answers: {}, selectedKey: '', locked: false, progress: 0 })
  },

  onShow() {
    // Resume after returning from ad page
    const g = app.globalData
    if (g.returnFromAd) {
      g.returnFromAd = false
      const current = g.quizCurrent || 15
      this.setData({
        current,
        answers: g.quizAnswers || {},
        selectedKey: '',
        locked: false,
        progress: Math.round((current / 30) * 100)
      })
    }
  },

  onSelectOption(e) {
    if (this.data.locked) return

    const { key } = e.currentTarget.dataset
    const { current, answers, questions } = this.data
    const qid = questions[current].id
    const newAnswers = { ...answers, [qid]: key }

    this.setData({ selectedKey: key, answers: newAnswers, locked: true })

    setTimeout(() => {
      if (current === 14) {
        // After Q15 → go to ad page
        app.globalData.quizCurrent = 15
        app.globalData.quizAnswers = newAnswers
        wx.navigateTo({
          url: '/pages/ad/ad',
          success: () => {
            // Reset only after navigation succeeds to avoid visual flash
            this.setData({ selectedKey: '', locked: false })
          }
        })
      } else if (current < questions.length - 1) {
        const next = current + 1
        app.globalData.quizCurrent = next
        app.globalData.quizAnswers = newAnswers
        this.setData({
          current: next,
          selectedKey: '',
          locked: false,
          progress: Math.round((next / 30) * 100)
        })
      } else {
        // All 30 done → go to result
        const answersStr = encodeURIComponent(JSON.stringify(newAnswers))
        wx.navigateTo({ url: `/pages/result/result?answers=${answersStr}` })
      }
    }, 380)
  }
})
