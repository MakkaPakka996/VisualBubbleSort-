//冒泡排序
async function BubbleSort(option) {
  for (let i = 0; i < option.series[0].data.length; i++) {
    for (let j = 0; j < option.series[0].data.length - 1 - i; j++) {
      if (option.series[0].data[j] > option.series[0].data[j + 1]) {
        await sleep(1000);
        setPic(j + 1, j + 2);
        myChart.setOption(option);
        swap(j, j + 1, option.series[0].data);
        setPic(j + 2, j + 1);
        await sleep(1000);
      }
    }
  }
  setPic();
  myChart.setOption(option);
}
