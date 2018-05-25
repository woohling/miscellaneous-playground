function binarySort(lists, num) {
  let start = 0
  let end = lists.length - 1
  let mid

  while (end > start) {
    mid = Math.ceil((start + end) / 2)
    if (lists[mid] > num) {
      end = mid
    } else if (lists[mid] < num) {
      start = mid
    } else {
      break
    }
  }

  return lists[mid] === num ? mid : -1
}

lists = [1,2,3,4,5,6,7,8,9,10]
const result = binarySort(lists, 5)
const result2 = binarySort(lists, 333)
console.log(result)
console.log(result2)
