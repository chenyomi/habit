const app = getApp()

let initdata = function(that) {
  let list = that.data.list
  for (let i = 0; i < list.length; i++) {
    list[i].txtStyle = ""
  }
  that.setData({
    list: list
  })
}


Page({

  /**
   * 页面的初始数据
   */
  data: {
    delBtnWidth: 150, //删除按钮宽度单位（rpx）
    scrollHeight: 0,
    list: [{
        txtStyle: "",
        icon: "/images/ic_yryb.png",
        txt: "仪容仪表自查"
      },
      {
        txtStyle: "",
        icon: "/images/ic_yryb.png",
        txt: "仪容仪表自查"
      },
      {
        txtStyle: "",
        icon: "/images/ic_homework.png",
        txt: "作业按时完成"
      },
      {
        txtStyle: "",
        icon: "/images/card-2.png",
        txt: "阅读半小时"
      },
      {
        txtStyle: "",
        icon: "/images/card-2.png",
        txt: "阅读半小时"
      },
      {
        txtStyle: "",
        icon: "/images/card-2.png",
        txt: "阅读半小时"
      },
      {
        txtStyle: "",
        icon: "/images/card-2.png",
        txt: "阅读半小时"
      },
      {
        txtStyle: "",
        icon: "/images/card-2.png",
        txt: "阅读半小时"
      },
      {
        txtStyle: "",
        icon: "/images/card-2.png",
        txt: "阅读半小时"
      },
      
    ]
  },
  gotoCreat: function () {
    wx.redirectTo({
      url: '../index/creat'
    })
  },
  gotoDetai: function () {
    wx.navigateTo({
      url: '../index/details'
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.setData({
      scrollHeight: app.globalData.scrollHeight
    })
    this.initEleWidth();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },
  touchS: function (e) {
    if (e.touches.length == 1) {
      this.setData({
        //设置触摸起始点水平方向位置
        startX: e.touches[0].clientX
      });
    }
  },
  touchM: function (e) {
    var that = this
    initdata(that)
    if (e.touches.length == 1) {
      //手指移动时水平方向位置
      var moveX = e.touches[0].clientX;
      //手指起始点位置与移动期间的差值
      var disX = this.data.startX - moveX;
      var delBtnWidth = this.data.delBtnWidth;
      var txtStyle = "";
      if (disX == 0 || disX < 0) {//如果移动距离小于等于0，文本层位置不变
        txtStyle = "left:2%";
      } else if (disX > 0) {//移动距离大于0，文本层left值等于手指移动距离
        txtStyle = "left:-" + disX + "px";
        if (disX >= delBtnWidth) {
          //控制手指移动距离最大值为删除按钮的宽度
          txtStyle = "left:-" + delBtnWidth + "px";
        }
      }
      //获取手指触摸的是哪一项
      var index = e.currentTarget.dataset.index;
      var list = this.data.list;
      list[index].txtStyle = txtStyle;
      //更新列表的状态
      this.setData({
        list: list
      });
    }
  },

  touchE: function (e) {
    if (e.changedTouches.length == 1) {
      //手指移动结束后水平位置
      var endX = e.changedTouches[0].clientX;
      //触摸开始与结束，手指移动的距离
      var disX = this.data.startX - endX;
      var delBtnWidth = this.data.delBtnWidth;
      //如果距离小于删除按钮的1/2，不显示删除按钮
      var txtStyle = disX > delBtnWidth / 2 ? "left:-" + delBtnWidth + "px" : "left:2%";
      //获取手指触摸的是哪一项
      var index = e.currentTarget.dataset.index;
      var list = this.data.list;
      list[index].txtStyle = txtStyle;
      //更新列表的状态
      this.setData({
        list: list
      });
    }
  },
  //获取元素自适应后的实际宽度
  getEleWidth: function (w) {
    var real = 0;
    try {
      var res = wx.getSystemInfoSync().windowWidth;
      var scale = (750 / 2) / (w / 2);//以宽度750px设计稿做宽度的自适应
      // console.log(scale);
      real = Math.floor(res / scale);
      return real;
    } catch (e) {
      return false;
      // Do something when catch error
    }
  },
  initEleWidth: function () {
    var delBtnWidth = this.getEleWidth(this.data.delBtnWidth);
    this.setData({
      delBtnWidth: delBtnWidth
    });
  },
  //点击删除按钮事件
  delItem: function (e) {
    var that = this
    wx.showModal({
      title: '提示',
      content: '是否删除？',
      success: function (res) {
        if (res.confirm) {
          //获取列表中要删除项的下标
          var index = e.target.dataset.index;
          var list = that.data.list;
          //移除列表中下标为index的项
          list.splice(index, 1);
          //更新列表的状态
          that.setData({
            list: list
          });
        } else {
          initdata(that)
        }
      }
    })

  }
})