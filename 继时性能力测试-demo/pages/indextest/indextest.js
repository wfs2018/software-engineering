// pages/indextest/indextest.js
Page({

  /**
   * 页面的初始数据
   */
  data:{
    applyList:[
      {Item_id: "10", Item_Name: "公司", isSelect: false},
      {Item_id: "11", Item_Name: "职务", isSelect: false},
      {Item_id: "12", Item_Name: "行业", isSelect: false},
      {Item_id: "13", Item_Name: "家庭住址", isSelect: false}],
   
  },
  selectApply:function(e){
    var index = e.currentTarget.dataset.index;
    var item = this.data.applyList[index];
    item.isSelect = !item.isSelect;
    this.setData({
      applyList: this.data.applyList,
    });
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