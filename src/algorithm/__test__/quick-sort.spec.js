const { expect } = require('chai')
const quickSort = require('../quick-sort')

describe('quick-sort should be correctly sorted', () => {
  it('empty array', () => {
    const arr = []
    expect(quickSort(arr)).to.equal(arr)
  })

  it('normal array', () => {
    const arr = [2,1,4,6,7,3,10,44,23,56,78,23]
    expect(quickSort(arr)).to.have.ordered.members([1,2,3,4,6,7,10,23,23,44,56,78])
  })
})
