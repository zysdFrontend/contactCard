// pages/website/website.js
var APP = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    APP: APP,
    imgArr: [
      APP.globalData.pathPrefix + '/webpage/mycard/images/website_banner_1.jpg',
      APP.globalData.pathPrefix + '/webpage/mycard/images/equityInvestment_detail_1.jpg',
      APP.globalData.pathPrefix + '/webpage/mycard/images/financingGuarantee_detail_1.jpg',
      APP.globalData.pathPrefix + '/webpage/mycard/images/investmentBusiness_detail_1.jpg',
      APP.globalData.pathPrefix + '/webpage/mycard/images/microfinance_detail_1.jpg',
      APP.globalData.pathPrefix + '/webpage/mycard/images/website_detail_1.jpg',
      APP.globalData.pathPrefix + '/webpage/mycard/images/website_detail_2.jpg',
      APP.globalData.pathPrefix + '/webpage/mycard/images/website_detail_3.jpg',
      APP.globalData.pathPrefix + '/webpage/mycard/images/website_detail_4.jpg',
      APP.globalData.pathPrefix + '/webpage/mycard/images/website_detail_5.jpg',
      APP.globalData.pathPrefix + '/webpage/mycard/images/website_detail_6.jpg',
      APP.globalData.pathPrefix + '/webpage/mycard/images/website_detail_7.jpg'
    ]
  },
  //预览大图
  previewImg: function (e) {
    var index = e.currentTarget.dataset.index;
    var imgArr = this.data.imgArr;
    wx.previewImage({
      current: imgArr[index],     //当前图片地址
      urls: imgArr,               //所有要预览的图片的地址集合 数组形式
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
  //打电话
  makePhoneCall(e) {
    wx.makePhoneCall({
      phoneNumber: e.currentTarget.dataset.phonenum,
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
  checkMap(e) {
    wx.openLocation({
      latitude: 22.97089320690747,
      longitude: 113.1251897595161,
      name: "广东中盈盛达融资担保投资股份有限公司",
      address: "佛山市顺德区乐从镇岭南大道南2号中欧中心D栋5楼",
    });
    /*wx.chooseLocation({
      success: function (res) {
        console.log(res);
      },
    });
    wx.getLocation({
      success: function (res) {
        console.log(res);
      },
    });*/
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})