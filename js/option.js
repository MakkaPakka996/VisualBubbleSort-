/*
 * @Description:
 * @Version:
 * @Author: makka-pakka
 * @Date: 2023-02-08 15:38:22
 * @LastEditTime: 2023-02-08 15:38:29
 */
option = {
  xAxis: {
    type: "category",
    data: [1, 2, 3, 4, 5, 6, 7],
  },
  yAxis: {
    type: "value",
  },
  series: [
    {
      data: [120, 200, 150, 80, 70, 110, 130],
      type: "bar",
      showBackground: true,
      backgroundStyle: {
        color: "rgba(180, 180, 180, 0.2)",
      },
    },
  ],
};
