// 确保已经开启无障碍服务
// auto();
toast("运行脚本！");
let jobList = [];
console.log("begin");

// 基础运行
function baseRunning() {
  for (let i = 0; i < 2; i++) {
    // 是否自动下滑功能 实现判断等
    autoGlide();
    let postInfo = findFirstPostInfo();
    // 之后不准使用 const
    jobList.push(postInfo);
    // 添加一个之后 点击进入
    clickIdEvent(jobList[jobList.length - 1].element);
    // .click();
    sleep(1000);
    // 然后扫描控件信息 是否为立即沟通 是的话就沟通
    let tolk = id("btn_chat").find()[0];
    if (tolk.text() == "立即沟通") {
      // 点击进入 然后退出 退出
      clickIdEvent(tolk);
      sleep(1000);
      goBackBoss();
      sleep(1000);
      back();
      sleep(1000);
      // toast()//提示信息
    } else {
      console.log("继续沟通");
      back();
      sleep(1000);
    }
  }
}

function main() {
  for (let i = 0; i < 2; i++) {
    baseRunning();
    // 添加累赘操作 然后再返回回来
    clickMessage();
    sleep(1000);

    clickJob();
    sleep(1000);
  }
}
// 运行主函数
main();

// home();
// clickMessage();

function clickEvent() {}

function clickIdEvent(idName) {
  // idName tv_position_name
  var element = id(idName).findOne();
  console.log(element);
  var bounds = element.bounds();
  var centerX = bounds.centerX();
  var centerY = bounds.centerY();
  console.log("点击坐标=", centerX, centerX);
  click(centerX, centerY); // 模拟点击该元素  这个就是坐标点击事件
}

function getAll() {
  let list = className("android.widget.LinearLayout").find();
  let info = list.map((e) => [e.child(0).text(), e.child(2).text()]);
  return info;
}

// 自动下滑 不需要的信息 就下滑跳过
function autoGlide() {
  while (1) {
    // 判断一下新的元素是否跟之前的重复了
    let jobInfo = findFirstPostInfo();
    let ifRepeat = jobList.map((e) => e.company).includes(jobInfo.company);

    // 判断一下是否是前端开发岗位点击进入
    // 既不能跟之前职位重复，也不可以不是前端岗位
    if (jobInfo.jobTitle.includes("前端") && !ifRepeat) {
      return "";
    }

    swipe(300, 600, 300, 300, 500);
  }
}

// 获取首个职位信息
function findFirstPostInfo() {
  let eleList = className("android.widget.LinearLayout").find();
  if (
    eleList &&
    eleList[0] &&
    eleList[0].child(0) &&
    eleList[0].child(0).text()
  ) {
    // console.log("可以运行");
  } else {
    console.log("不成功不能运行");
    exit();
  }
  return {
    jobTitle: eleList[0].child(0).text(),
    company: eleList[0].child(2).text(),
    element: eleList[0],
  };
}

// 获取到元素控件执行点击坐标
function clickIdEvent(element) {
  // idName tv_position_name
  // var element = id(idName).findOne();
  // console.log(element);
  var bounds = element.bounds();
  var centerX = bounds.centerX();
  var centerY = bounds.centerY();
  click(centerX, centerY); // 模拟点击该元素  这个就是坐标点击事件
}

function goBackBoss() {
  clickIdEvent(id("iv_back").find()[0]);
}

// 点击消息按钮
function clickMessage() {
  clickIdEvent(id("cl_tab_3").find()[0]);
}

// 点击职位按钮
function clickJob() {
  clickIdEvent(id("cl_tab_1").find()[0]);
}
