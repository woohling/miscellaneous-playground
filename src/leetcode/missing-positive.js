function missingPositive(nums = []) {
  let gaps = {}
  let numExisted = {}
  let minNum
  let minGap

  nums.forEach((item) => {
    if (item > 0) {
      if (minNum === undefined) {
        minNum = item
      } else if (item < minNum) {
        minNum = item
      }

      const gap = item + 1
      gaps[gap] = true
      numExisted[item] = true
    }
  })

  Object.keys(gaps).forEach((gap) => {
    const gapNumber = Number(gap)
    const hasConflict = !!numExisted[gap]
    if (!hasConflict) {
      if (minGap === undefined) {
        minGap = gapNumber
      } else if (gapNumber < minGap ) {
        minGap = gapNumber
      }
    }
  })

  if (minGap === undefined || (minGap > 1 && minNum > 1)) {
    return 1
  } else {
    return minGap
  }
}

// missingPositive([2,3,2,5,7]) // 4
// let res1 = missingPositive([8,3,2,4,5]) // 1
let res1 = missingPositive([1, 1000]) // 1
// missingPositive([8,3,2,4,5,6,7]) // 9
let res2 = missingPositive([8,1,3,2,4,5,6,7]) // 9
// console.log(res2)