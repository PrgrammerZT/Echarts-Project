// 柱状图1模块
(function () {
  // 实例化对象
  let myChart = echarts.init(document.querySelector(".bar .chart"));
  // 指定配置和数据
  let option = {
    color: ["#2f89cf"],
    tooltip: {
      trigger: "axis",
      axisPointer: {
        // 坐标轴指示器，坐标轴触发有效
        type: "shadow", // 默认为直线，可选为：'line' | 'shadow'
      },
    },
    grid: {
      // left: "0%",
      // top: "10px",
      // right: "0%",
      // bottom: "4%",
      top: 10,
      left: 0,
      bottom: 0,
      right: 10,
      containLabel: true,
    },
    xAxis: [
      {
        type: "category",
        data: ["旅游", "教育", "游戏", "医疗", "电商", "社交", "金融"],
        axisTick: {
          alignWithLabel: true,
        },
        axisLabel: {
          color: "rgba(255,255,255,.6)",
          fontSize: "12",
        },
        axisLine: {
          show: false,
          // 如果想要设置单独的线条样式
          // lineStyle: {
          //    color: "rgba(255,255,255,.1)",
          //    width: 1,
          //    type: "solid"
        },
      },
    ],
    yAxis: [
      {
        type: "value",
        axisLabel: {
          color: "rgba(255,255,255,.6)",
          fontSize: "12",
        },
        axisLine: {
          // 如果想要设置单独的线条样式
          lineStyle: {
            color: "rgba(255,255,255,.1)",
            width: 1,
            type: "solid",
          },
          splitLine: {
            lineStyle: {
              color: "rgba(255,255,255,.1)",
            },
          },
        },
      },
    ],
    series: [
      {
        name: "直接访问",
        type: "bar",
        // 修改柱子宽度
        barWidth: "35%",
        // series 更换数据
        data: [200, 300, 300, 900, 1500, 1200, 600],
        itemStyle: {
          // 修改柱子圆角
          barBorderRadius: 5,
        },
      },
    ],
  };

  // 把配置给实例对象
  myChart.setOption(option);
  //图表跟随屏幕适配
  window.addEventListener("resize", function () {
    myChart.resize();
  });
})();
