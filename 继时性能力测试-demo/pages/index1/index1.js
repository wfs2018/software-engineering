// pages/index1/index1.js
Page({

  /**
   * 页面的初始数据
   */
  /**
   * 页面的初始数据
   */
  data: {
    setInter:'',
    num:1,
    show:false,
    reply:" ",
    real_answer:"",
    show_home:true,
    show_play:false,
    do_well:true,
    out_time:false,
    qa:[
      {
        text:"空天很蓝",
        question:"这句话正确的排序是什么",
        chosen:["A:空天蓝很","B:很蓝空天","C:天空很蓝","D:蓝很天空"],
        answer:2
      }
    ]
},

startSetInter: function(){
  var that = this;
  //将计时器赋值给setInter
  that.data.setInter = setInterval(
      function () {
          var numVal = that.data.num + 1;
          that.setData({ num: numVal });
          console.log('setInterval==' + that.data.num);
      }
, 2000);   
},
endSetInter: function(){
  var that = this;
  //清除计时器  即清除setInter
  clearInterval(that.data.setInter)
},
  
  stop_game:function(e){
    var chosen=e.currentTarget.dataset.index;
    var answer=e.currentTarget.dataset.item.answer;
    this.endSetInter();
   
    if(answer==chosen){
      this.setData({
        reply:"答案正确",
        
       });
    }else{
      this.setData({
        reply:"答案错误",
        real_answer:String.fromCharCode(65+answer),
        do_well:false,
       });
    }

      this.setData({
       dis:true,
      });
  },
  start_game: function() {
    this.setData({
      show_home:false,
      show_play:true,
      
    });
    this.startSetInter();

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
    // this.startSetInter();

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

  },
 
})