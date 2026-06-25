const { calcResult, destinyLevels } = require('../../data/scoring')
const { stars } = require('../../data/stars')

const PLACEHOLDER = '/images/stars/placeholder.jpg'

function starImg(starData) {
  if (starData && starData.image) return `/images/stars/${starData.image}.jpg`
  return PLACEHOLDER
}

Page({
  data: {
    top3: [],
    mainStar: null,
    mainStarData: null,
    destinyInfo: null,
    partnerData: null,
    mainImgSrc: PLACEHOLDER,
    partnerImgSrc: PLACEHOLDER,
  },

  onLoad(options) {
    let answers = {}
    try {
      answers = JSON.parse(decodeURIComponent(options.answers || '{}'))
    } catch (e) {
      answers = {}
    }

    const top3 = calcResult(answers)
    const mainStar = top3[0]
    const mainStarData = stars[mainStar.name] || {}
    const destinyKey = mainStarData.destiny || '强五强'
    const destinyInfo = destinyLevels[destinyKey] || destinyLevels['强五强'] || { emoji: '🏅', title: '你有属于自己的舞台', desc: '' }

    let partnerData = null
    let partnerImgSrc = PLACEHOLDER
    if (mainStarData.partner && stars[mainStarData.partner]) {
      partnerData = { name: mainStarData.partner, ...stars[mainStarData.partner] }
      partnerImgSrc = starImg(partnerData)
    }

    this.setData({
      top3,
      mainStar,
      mainStarData,
      destinyInfo,
      partnerData,
      mainImgSrc: starImg(mainStarData),
      partnerImgSrc,
    })
  },

  onShareAppMessage() {
    const { mainStar } = this.data
    return {
      title: `我做了2026世界杯球星人格测试，最像${mainStar.name}（${mainStar.pct}%相似）`,
      path: '/pages/index/index',
      // imageUrl: CDN地址上线后替换
    }
  },

  onShareTimeline() {
    const { mainStar } = this.data
    return {
      title: `2026世界杯球星人格测试，我最像${mainStar.name}！`,
    }
  },

  onRetry() {
    const app = getApp()
    app.globalData.quizCurrent = undefined
    app.globalData.quizAnswers = {}
    wx.reLaunch({ url: '/pages/index/index' })
  },
})
