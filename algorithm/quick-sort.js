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

const arr1 = [2,1,4,6,7,3,10,44,23,56,78,23]
console.log(quickSort(arr1))