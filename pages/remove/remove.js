// index.js
Page({
  data:{
    inputValue:'',
    mathdata:[
      {a:1,b:13,result:14},
      {a:1,b:13,result:14},
      {a:1,b:13,result:14},
      {a:1,b:13,result:14},
      {a:1,b:13,result:14},
      {a:1,b:13,result:14},
      {a:1,b:13,result:14},
      {a:1,b:13,result:14},
      {a:1,b:13,result:14},
    ],
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
    this.data.mathdata = [];
    for(var i=0; i<10; i++){
      var tida = parseInt(Math.random()*90+10);
      var tidb = parseInt(Math.random()*90+10);
      var tiresult = tida - tidb;
      this.data.mathdata.push({
        a:tida,
        b:tidb,
        result:tiresult
      })
    }
    this.setData({
      mathdata:this.data.mathdata
    });
  },
 
  bindKeyInput:function(e){
    var id = e.currentTarget.id;
    this.data.answerdata[id] = e.detail.value;
    console.log(this.data.answerdata)
    this.setData({
      answerdata:this.data.answerdata
    })
  },
  btnok:function(){
    this.data.score = 0;
    for(var i=0; i<10; i++){
      if(this.data.mathdata[i].result==this.data.answerdata[i]){
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
      inputValue:''
    })
    
  },
  
  onShow() {
    this.data.mathdata = [];
    for(var i=0; i<10; i++){
      var tida = parseInt(Math.random()*90+10);
      var tidb = parseInt(Math.random()*90+10);
      var tiresult = tida - tidb;
      this.data.mathdata.push({
        a:tida,
        b:tidb,
        result:tiresult
      })}
    this.setData({
      img:this.data.imgBaseData,
      showAnswer:false,
      mathdata:this.data.mathdata,
      inputValue:''
    })
  }
})
