const app = getApp()

Page({
  data: {
    countdown: 5,
    adReady: false,
    canSkip: false,
  },

  onLoad() {
    this._startCountdown()
  },

  onUnload() {
    if (this._timer) clearInterval(this._timer)
  },

  _startCountdown() {
    let count = 5
    this._timer = setInterval(() => {
      count--
      this.setData({ countdown: count })
      if (count <= 0) {
        clearInterval(this._timer)
        this.setData({ canSkip: true })
      }
    }, 1000)

    // Show skip button after 5s
    setTimeout(() => {
      this.setData({ adReady: true })
    }, 300)
  },

  onAdLoad() {
    this.setData({ adReady: true })
  },

  onAdError() {
    // Ad failed, allow immediate continue
    this.setData({ adReady: true, canSkip: true, countdown: 0 })
  },

  onContinue() {
    if (!this.data.canSkip) return
    app.globalData.returnFromAd = true
    wx.navigateBack({ delta: 1 })
  }
})
