// index.js
Page({
  data:{
    inputValue_a:'',
      inputValue_b:'',
    tip_interval:null,
    mathdata:[
      {a:1,b:13,result_a:14,result_b:14},
      {a:1,b:13,result_a:14,result_b:14},
      {a:1,b:13,result_a:14,result_b:14},
      {a:1,b:13,result_a:14,result_b:14},
      {a:1,b:13,result_a:14,result_b:14},
      {a:1,b:13,result_a:14,result_b:14},
      {a:1,b:13,result_a:14,result_b:14},
      {a:1,b:13,result_a:14,result_b:14},
      {a:1,b:13,result_a:14,result_b:14},
    ],
    answerdata_a : [],
    answerdata_b : [],
    answerdata:[],
    score:0,
    img:['../../images/math/yes.jpg',
    '../../images/math/yes.jpg',
    '../../images/math/yes.jpg',
    '../../images/math/yes.jpg',
    '../../images/math/yes.jpg',
    '../../images/math/yes.jpg',
    '../../images/math/yes.jpg',
    '../../images/math/yes.jpg',
    '../../images/math/yes.jpg',
    '../../images/math/yes.jpg',
  ],
  imgBaseData:['../../images/math/yes.jpg',
  '../../images/math/yes.jpg',
  '../../images/math/yes.jpg',
  '../../images/math/yes.jpg',
  '../../images/math/yes.jpg',
  '../../images/math/yes.jpg',
  '../../images/math/yes.jpg',
  '../../images/math/yes.jpg',
  '../../images/math/yes.jpg',
  '../../images/math/yes.jpg',],
  imgTest:[],
  showAnswer:false,
  },
  onLoad() {
    this.tip_interval = setInterval(this.the_tips, 5000)
    this.data.mathdata = [];
    for(var i=0; i<10; i++){
      var tida = parseInt(Math.random()*90+10);
      var tidb = parseInt(Math.random()*10+5);
      var tiresult_a = parseInt(tida / tidb);
      var tiresult_b = tida % tidb
      this.data.mathdata.push({
        a:tida,
        b:tidb,
        result_a:tiresult_a,
        result_b:tiresult_b
      })
    }
    this.setData({
      mathdata:this.data.mathdata
    });
  },

  bindKeyInput:function(e){
    var id = e.currentTarget.id;
    this.data.answerdata_a[id] = e.detail.value;
    console.log(this.data.answerdata_a)
    this.setData({
      answerdata_a:this.data.answerdata_a
    })

  },
  bindModInput:function(e){
    var id = e.currentTarget.id;
    this.data.answerdata_b[id] = e.detail.value;
    console.log(this.data.answerdata_b)
  this.setData({
    answerdata_b:this.data.answerdata_b
  })
  console.log(this.data.answerdata_b)
  
  },
  
  btnok:function(){
    this.data.score = 0;
    for(var i=0; i<10; i++){
      if(this.data.mathdata[i].result_a==this.data.answerdata_a[i] && this.data.mathdata[i].result_b==this.data.answerdata_b[i]){
        this.data.score += 10;
        this.data.imgTest[i] = '../../images/math/yes.jpg'
      }else{
        this.data.imgTest[i] = '../../images/math/no.jpg'
      }
    }
    wx.showModal({
      title: '提示',
      content: '你的成绩是'+this.data.score+'分',
      success: function (res) {
        if (res.confirm) {//这里是点击了确定以后
          console.log('用户点击确定')
        } else {//这里是点击了取消以后
          console.log('用户点击取消')
        }
      },
    })
    this.setData({
      score:this.data.score,
      img:this.data.imgTest,
      showAnswer:true
    })
  },
  refreshPage:function(){
    this.onLoad();
    this.setData({
      img:this.data.imgBaseData,
      showAnswer:false,
      mathdata:this.data.mathdata,
      inputValue_a:'',
      inputValue_b:''
    })
    
  },
  
  onShow() {
    this.data.mathdata = [];
    for(var i=0; i<10; i++){
      var tida = parseInt(Math.random()*90+10);
      var tidb = parseInt(Math.random()*10+5);
      var tiresult_a = parseInt(tida / tidb);
      var tiresult_b = tida % tidb
      this.data.mathdata.push({
        a:tida,
        b:tidb,
        result_a:tiresult_a,
        result_b:tiresult_b,
      })}
    this.setData({
      img:this.data.imgBaseData,
      showAnswer:false,
      mathdata:this.data.mathdata,
      inputValue_a:'',
      inputValue_b:''
    })
  },
  the_tips:function () {
    this.animate('.tip_animate', [
      {translateX:350},
      { translateX:-350},
    ], 8000, function () {
      this.clearAnimation('.tip_animate', {}, function () {
        console.log("清除了.tip_animate上的动画属性")
      })
    }.bind(this)
    )
  },
  onUnload(){
    clearInterval(this.tip_interval); 
  }
})
