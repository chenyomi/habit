
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    scrollHeight: 0,
    scrollTop: 0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      scrollHeight: app.globalData.scrollHeight - 74
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
   
  },
  lower: function (e) {
    console.log(1)
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  gotoJoin: function () {
    wx.redirectTo({
      url: '../index/join'
    })

   
  },
  previewImage:function(){
    wx.previewImage({
      current: '', // 当前显示图片的http链接
      urls: ['/images/cmt.jpg'] // 需要预览的图片http链接列表
    })
  }
})