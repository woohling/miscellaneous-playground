function diff(arrA, arrB) {
  if (!arrA && !arrB) {
    return true;
  }

  if (!Array.isArray(arrA) || !Array.isArray(arrB)) {
    return false;
  }

  if (arrA.length !== arrB.length) {
    return false;
  }

  const mapA = toMap(arrA);
  const mapB = toMap(arrB);

  for (const key in mapA) {
    if (!mapB[key]) {
      return false;
    }
    if (mapB[key] !== mapA[key]) {
      return false;
    }
  }

  return true;
}

function toMap(arr) {
  const aMap = arr.reduce((accumulator, item) => {
    if (accumulator[item]) {
      accumulator[item] += 1;
    } else {
      accumulator[item] = 1;
    }
    return accumulator;
  }, {});

  return aMap;
}

const same = diff([1, 3, 4], [1, 6, 4]);
console.log(same);
