const swap = (i, j, arr) => {
  let temp;
  temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
};

const sleep = (ms) => {
  return new Promise((res, rej) => {
    setTimeout(res, ms);
  });
};

const setPic = (i, j) => {
  option.series[0].itemStyle = {
    color: (params) => {
      if (params.name == i) {
        return "black";
      } else if (params.name == j) {
        return "red";
      } else {
        return "rgb(84,112,198)";
      }
    },
  };
};
window.swap = swap;
window.sleep = sleep;
window.setPic = setPic;
