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
    show_question:false,
    show_play:false,
    do_well:true,
    out_time:false,
    count:0,
    qa:[
      {
        text:"134 567 865 456 787 998 786",
        question:"请选择刚才看到的数字",
        chosen: [{is_true: false, Item_Name: "123", isSelect: false},
                 {is_true: false, Item_Name: "478", isSelect: false},
                 {is_true: false, Item_Name: "798", isSelect: false},
                 {is_true: false, Item_Name: "980", isSelect: false},
                 {is_true: false, Item_Name: "346", isSelect: false},
                 {is_true: true, Item_Name: "134", isSelect: false},
                 {is_true: true, Item_Name: "787", isSelect: false},
                 {is_true: true, Item_Name: "567", isSelect: false},
      ],
      }
    ]
},
selectApply:function(e){
  var index = e.currentTarget.dataset.index;
  var item = this.data.qa[0].chosen[index];

  item.isSelect = !item.isSelect;

  this.setData({
    qa: this.data.qa,
  });
// console.log(this.data.qa[0].chosen)
},
startSetInter: function(){
  var that = this;
  //将计时器赋值给setInter
  that.data.setInter = setInterval(
      function () {
          var numVal = that.data.num + 1;
          that.setData({ num: numVal });
          // console.log('setInterval==' + that.data.num);
      }
, 2000);   
},
endSetInter: function(){
  var that = this;
  //清除计时器  即清除setInter
  clearInterval(that.data.setInter)
},
  
  stop_game:function(){
    // console.log(e)
    // var chosen=e.currentTarget.dataset.index;
    // var answer=e.currentTarget.dataset.item.answer;
    var count=0;
    this.endSetInter();
    console.log(this.data.qa[0].chosen);
    for(var i=0;i<this.data.qa[0].chosen.length;i++){
     if(this.data.qa[0].chosen[i].is_true==true&&this.data.qa[0].chosen[i].isSelect==true){
       count=count+1;
       console.log(77777);
     }
   }
   console.log("count"+count);
    if(count==3){
      this.setData({
        reply:"答案正确",
        
       });
    }else{
      this.setData({
        reply:"答案错误",
        // real_answer:String.fromCharCode(65+answer),
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
      show_question:true,
      show_play:false,

    });
    // this.startSetInter();
    // console.log('setInt'+this.data.num)
    
    // if(this.data.num==3){

    //   this.endSetInter();
    //   this.setData({
    //     show_home:false,
    //     show_question:false,
    //     show_play:true,
    //   });
    //   this.startSetInter();

  
    // }
    var that=this;
    setTimeout(function () {
      that.setData({
        show_home:false,
        show_question:false,
        show_play:true,
      });
    that.startSetInter();
     }, 3000)
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