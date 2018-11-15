// pages/website/website.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

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