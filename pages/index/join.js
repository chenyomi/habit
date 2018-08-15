// pages/index/join.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    array: ['每天', '每周', '每学期一次'],
    index: 0,
    date: '2016-09-01',
    time: '12:01',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  bindPickerChange: function (e) {
    this.setData({
      index: e.detail.value
    })
  },
  bindDateChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      date: e.detail.value
    })
  },
  bindTimeChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      time: e.detail.value
    })
  },
  gotoPunching: function () {
    wx.redirectTo({
      url: '../index/punching'
    })
  },
})