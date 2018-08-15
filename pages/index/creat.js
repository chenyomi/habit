var app = getApp();
Page({
  data: {
    winHeight: "",//窗口高度
    currentTab: 0, //预设当前项的值
    scrollLeft: 0, //tab标题的滚动条位置
    expertList: [
      [
        //行规
        {
          icon: '/images/ic_yryb.png',
          name: '仪容仪表自查',
          count: '100'
        },
        {
          icon: '/images/ic_sswh.png',
          name: '师生问好',
          count: '100'
        },
        {
          icon: '/images/ic_24.png',
          name: '离开手机24小时',
          count: '100'
        },
        {
          icon: '/images/ic_skglsj.png',
          name: '上课管理手机',
          count: '100'
        },
        {
          icon: '/images/ic_cgg.png',
          name: '周一晨会唱国歌',
          count: '100'
        },
        {
          icon: '/images/ic_bdlazx.png',
          name: '不丢弃任何垃圾纸屑',
          count: '100'
        },
      ],
      [
        //学习
        {
          icon: '/images/card-2.png',
          name: '阅读半小时',
          count: '100'
        },
        {
          icon: '/images/ic_homework.png',
          name: '作业按时完成',
          count: '100'
        },
        {
          icon: '/images/ic_kthd.png',
          name: '课堂互动发言',
          count: '100'
        },
        {
          icon: '/images/ic_tsgks.png',
          name: '去图书馆或城市书房看书',
          count: '100'
        },
      ],
      [
        //技能
        {
          icon: '/images/ic_sl.png',
          name: '技能点训练半小时',
          count: '100'
        },
        {
          icon: '/images/ic_ks.png',
          name: '考技能证书',
          count: '100'
        },
        {
          icon: '/images/ic_xjn.png',
          name: '习得一门新技能',
          count: '100'
        },
        {
          icon: '/images/ic_music.png',
          name: '乐器练习',
          count: '100'
        },
      ],
      [
        //成长
        {
          icon: '/images/ic_zyzfw.png',
          name: '公益志愿者服务',
          count: '100'
        },
        {
          icon: '/images/ic_shsj.png',
          name: '参与社会实践',
          count: '100'
        },
        {
          icon: '/images/ic_bjhd.png',
          name: '排练一个班级项目',
          count: '100'
        },
        {
          icon: '/images/ic_chbh.png',
          name: '组织策划一次班会主题',
          count: '100'
        },
        {
          icon: '/images/ic_clean.png',
          name: '打扫整理自己的房间',
          count: '100'
        },
        {
          icon: '/images/ic_cooking.png',
          name: '给父母做顿饭',
          count: '100'
        },
        {
          icon: '/images/ic_fmsr.png',
          name: '记住父母的生日',
          count: '100'
        },
        {
          icon: '/images/ic_rxys.png',
          name: '日行一善',
          count: '100'
        },
        {
          icon: '/images/ic_movie.png',
          name: '看电影',
          count: '100'
        },
        {
          icon: '/images/ic_zzzw.png',
          name: '种植盆栽或多肉',
          count: '100'
        },
        {
          icon: '/images/ic_diary.png',
          name: '写日记',
          count: '100'
        },
        {
          icon: '/images/ic_sing.png',
          name: '写一首歌或翻唱一首歌',
          count: '100'
        },
      ],
      [
        //公益
        {
          icon: '/images/ic_xx.png',
          name: '无偿献血',
          count: '100'
        },
        {
          icon: '/images/ic_bz.png',
          name: '帮扶老人/路人/儿童',
          count: '100'
        },
        {
          icon: '/images/ic_zyzfw.png',
          name: '志愿者服务',
          count: '100'
        },
      ],
      [
        //实践
        {
          icon: '/images/ic_run.png',
          name: '坚持排布锻炼',
          count: '100'
        },
      ],
      [
        //健康
      ],
      [
        //其他
      ]
    ],
    
  },
  // 滚动切换标签样式
  switchTab: function (e) {
    this.setData({
      currentTab: e.detail.current
    });
    this.checkCor();
  },
  gotoList: function () {
    wx.redirectTo({
      url: '../index/list'
    })
  },
  // 点击标题切换当前页时改变样式
  swichNav: function (e) {
    var cur = e.target.dataset.current;
    if (this.data.currentTaB == cur) { return false; }
    else {
      this.setData({
        currentTab: cur
      })
    }
  },
  //判断当前滚动超过一屏时，设置tab标题滚动条。
  checkCor: function () {
    if (this.data.currentTab > 4) {
      this.setData({
        scrollLeft: 300
      })
    } else {
      this.setData({
        scrollLeft: 0
      })
    }
  },
  onLoad: function () {
    var that = this;
    //  高度自适应
    wx.getSystemInfo({
      success: function (res) {
        var clientHeight = res.windowHeight,
          clientWidth = res.windowWidth,
          rpxR = 750 / clientWidth;
        var calc = clientHeight * rpxR - 80;
        console.log(calc)
        that.setData({
          winHeight: calc
        });
      }
    });
  },
  footerTap: app.footerTap
})