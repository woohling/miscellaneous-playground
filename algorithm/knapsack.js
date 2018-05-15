
const items = {
  laptop: { weight: 3, value: 2000 },
  stereo: { weight: 4, value: 3000 },
  guitar: { weight: 1, value: 1500 },
  phone: { weight: 1, value: 2000 },
}

const items2 = {
  water: { weight: 3, value: 10 },
  book: { weight: 1, value: 3 },
  food: { weight: 2, value: 9 },
  jacket: { weight: 2, value: 5 },
  camera: { weight: 1, value: 6 },
}
// water food camera
const totalWeight = 6

function getWeightArray() {
  const weights = []
  for (let i = 1; i <= totalWeight; i++) {
    weights.push(i)
  }
  return weights
}

function knapsack(items) {
  const weights = getWeightArray()
  const columns = []
  Object.keys(items).forEach((item, i) => {
    const { weight, value } = items[item]
    columns[i] = []

    weights.forEach((w, j) => {
      const leftWeight = w - weight

      if (i === 0) {
        if (leftWeight < 0) {
          columns[i][j] = { value: null, item: []}
        } else {
          columns[i][j] = { value, item: [item]}
        }
        return
      }

      const previousMaxItem = columns[i-1][j]
      let currentMaxValue
      let currentItems

      if (leftWeight < 0) {
        columns[i][j] = previousMaxItem
        return
      }

      if (leftWeight === 0) {
        currentMaxValue = value
        currentItems = [item]
      } else {
        const leftWeightColumn = columns[i-1][leftWeight - 1]
        currentMaxValue = value + leftWeightColumn.value
        currentItems = leftWeightColumn.item.concat(item)
      }

      if (currentMaxValue > previousMaxItem.value) {
        columns[i][j] = { value: currentMaxValue, item: currentItems }
      } else {
        columns[i][j] = columns[i-1][j]
      }
    })
  })

  const maxIIndex = Object.keys(items).length - 1
  const maxJIndex = weights.length - 1
  const maxColumn = columns[maxIIndex][maxJIndex]
  console.log(maxColumn.value, maxColumn.item)
}

knapsack(items2)