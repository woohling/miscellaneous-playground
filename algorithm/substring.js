
function commonString(source, target) {
  const cell = []
  const sourceLength = source.length
  const targetLength = target.length

  let maxValue = 0
  let maxI = null
  let maxJ = null

  for (let i = 0; i < sourceLength; i++) {
    const sourceChar = source.charAt(i)
    cell[i] = []
    for (let j = 0; j < targetLength; j++) {
      const targetChar = target.charAt(j)
      if (sourceChar === targetChar) {
        if (i === 0 || j === 0) {
          cell[i][j] = 1
        } else {
          cell[i][j] = cell[i - 1][j - 1] + 1
        }
      } else {
        cell[i][j] = 0
      }
      if (cell[i][j] > maxValue) {
        maxValue = cell[i][j]
        maxI = i
        maxJ = j
      }
    }
  }

  const longestSubStr = source.slice(maxI - maxValue + 1, maxI + 1)
  console.log(longestSubStr)
  console.log(cell)
}

commonString('bigwhat', 'bigzwhatbigwhat')
