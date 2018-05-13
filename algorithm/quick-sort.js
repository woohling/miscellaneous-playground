function quickSort(arr) {
  if (arr.length < 2) {
    return arr
  }

  const pivotIndex = Math.ceil(arr.length / 2)
  const pivot = arr[pivotIndex]
  const leftArr = []
  const rightArr = []

  arr.forEach((i, index) => {
    if (index === pivotIndex) {
      return
    }
    if (i < pivot) {
      leftArr.push(i)
    } else {
      rightArr.push(i)
    }
  })

  return quickSort(leftArr).concat(pivot).concat(quickSort(rightArr))
}

// https://juejin.im/post/5af4902a6fb9a07abf728c40?utm_source=gold_browser_extension#heading-12
// 生成len长度的随机数组
function generateArr(len) {
  const arr = []

  // 生成随机整数
  function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  for (let i = 0; i < len; i++) {
    arr.push(random(1, len));
  }

  return arr
}

// 原地交换函数，而非用临时数组
function swap(array, a, b) {
  [array[a], array[b]] = [array[b], array[a]];
}

// 划分操作函数
function partition(array, left, right) {
  // 用index取中间值而非splice
  const pivot = array[Math.floor((right + left) / 2)];
  let i = left;
  let j = right;

  while (i <= j) {
    while(array[i] < pivot) {
      i++;
    }
    while(array[j] > pivot) {
      j--;
    }
    if (i <= j) {
      swap(array, i , j);
      i++;
      j--;
    }
  }
  return i;
}

function quick2(array, left, right) {
  let index;
  if (array.length > 1) {
    index = partition(array, left, right);
    if (left < index - 1) {
      quick2(array, left, index - 1);
    }
    if (index < right) {
      quick2(array, index, right);
    }
  }
  return array;
}
function quickSort2(array) {
  return quick2(array, 0, array.length - 1);
};


// console.time('xm');
// quickSort2(arr1);
// console.timeEnd('xm');
//
// console.time('quickSort');
// quickSort(arr);
// console.timeEnd('quickSort');
