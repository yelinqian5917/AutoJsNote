toast("运行脚本！");
let postList = [];
console.log("begin");

// 获取首个职位信息
function findFirstPostInfo() {
  let eleList = depth("14").find();
  console.log(eleList.size());
  // console.log(eleList.filter((e) => e.depth() == 29));

  // if (
  //   eleList &&
  //   eleList[0] &&
  //   eleList[0].child(0) &&
  //   eleList[0].child(0).text()
  // ) {
  //   // console.log("可以运行");
  // } else {
  //   console.log("不成功不能运行");
  //   exit();
  // }
  // return {
  //   name: eleList[0].child(0).text(),
  //   company: eleList[0].child(2).text(),
  //   element: eleList[0],
  // };
}

findFirstPostInfo();
