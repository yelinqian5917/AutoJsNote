// 确保已经开启无障碍服务
// auto();


// className("android.widget.TextView").findOne().click()
// log(className("android.widget.TextView"));
// var position = className("android.widget.TextView").findOne().bounds()
// click(position.centerX(),position.centerY())

// 点击进入
// clickIdEvent('tv_position_name')
// sleep(2000);

// 立即沟通要判断一下，页面没有立即沟通的话，是继续沟通的话，就需要不能点击
// var element = text("继续沟通").findOne();
// console.log(element)
// clickIdEvent('btn_chat')
// sleep(2000);
// back()
// console.show()
console.log('运行2024-03-31')
// 翻页

// toast("运行");
// 获取名称
const getElementName = ()=>{
  var element = id('tv_position_name').findOne().text();
  console.log(element)
}

// 视角移动
const moveView = ()=>{
  swipe(300,600,300,0,500)
}


const moduleRect = id("cl_card_container").findOne().bounds()
// const element = id('cl_card_container').findOne()
console.log(moduleRect.top,moduleRect.bottom)
swipe(600,moduleRect.bottom,600,moduleRect.top - 44,500)
for(let i=0; i<1; i++){
  // getElementName()
  sleep(1000)
  // moveView()
}
// 找到对象集合
// const call = text('回复').find();

// for(let i=0;i<call.size();i++){

// }

// //等待开启无障碍服务
// auto.waitFor();
// // 打开抖音
// app.launchApp('抖音');
// //等待5秒
// sleep(3000);

// function next(){
//    //滑到下一个视频
//  swipe(50,1200,50,200,200);
//  //等待10秒进入下次滑动
//  sleep(3000);
// }
// for(let i= 0;i<3;i++){
//   next()
// }
// // 设定脚本执行的时间间隔（毫秒）
// setInterval(function(){
//     // 获取当前设备的分辨率信息
//     var device = require("device");
//     var width = device.width;
//     var height = device.height;

//     // 在屏幕上从左到右进行滑动
//     swipe(width / 2, height * 0.25, width / 2, height * 0.75, 500);

//     // 在屏幕上从上到下进行滑动
//     swipe(width / 2, height / 2, width / 2, height / 4, 500);
// }, 3000); // 每3秒执行一次

function clickIdEvent(idName) {
  // idName tv_position_name
  var element = id(idName).findOne();
  console.log(element)
  var bounds = element.bounds();
  var centerX = bounds.centerX();
  var centerY = bounds.centerY();
  click(centerX, centerY); // 模拟点击该元素  这个就是坐标点击事件
}
