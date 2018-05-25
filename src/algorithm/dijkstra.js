
function initGraph() {
  let graph = {}

  graph.start = {}
  graph.start.a = 6
  graph.start.b = 2

  graph.a = {}
  graph.a.fin = 1

  graph.b = {}
  graph.b.a = 3
  graph.b.fin = 5

  graph.fin = {}

  return graph
}

function initGraph2() {
  let graph = {}

  graph.start = {}
  graph.start.a = 5
  graph.start.b = 2

  graph.a = {}
  graph.a.c = 4
  graph.a.d = 2

  graph.b = {}
  graph.b.a = 8
  graph.b.d = 7

  graph.c = {}
  graph.c.fin = 3
  graph.c.d = 6

  graph.d = {}
  graph.d.fin = 1

  graph.fin = {}

  return graph
}

function initGraph3() {
  let graph = {}

  graph.start = {}
  graph.start.a = 10

  graph.a = {}
  graph.a.b = 20

  graph.b = {}
  graph.b.c = 1
  graph.b.fin = 20

  graph.c = {}
  graph.c.a = 1

  graph.fin = {}

  return graph
}

function dijkstra(startPoint = 'start', endPoint = 'fin') {
  let graph = initGraph3()
  let costs = {}
  let parents = {}
  let processed = []

  function initStart() {
    const nodes = Object.keys(graph[startPoint])
    parents[endPoint] = null
    costs[endPoint] = Infinity
    nodes.forEach(node => {
      costs[node] = graph[startPoint][node]
      parents[node] = startPoint
    })
  }

  function isProcessed(node) {
    return processed.indexOf(node) > -1
  }

  function findLowestCostNode() {
    let lowestCost = Infinity
    let lowestCostNode = null
    const nodes = Object.keys(costs)
    nodes.forEach(node => {
      if (costs[node] < lowestCost && !isProcessed(node)) {
        lowestCost = costs[node]
        lowestCostNode = node
      }
    })
    return lowestCostNode
  }

  function getPath() {
    let path = [endPoint]
    let parent = parents[endPoint]
    while (parent !== startPoint) {
      path.unshift(parent)
      parent = parents[parent]
    }
    path.unshift(startPoint)
    return path
  }

  // init graph process with start
  initStart()
  // startPoint 和 endPoint 不需要处理
  while (processed.length != Object.keys(graph).length -1) {
    const node = findLowestCostNode()
    const neighbors = Object.keys(graph[node])
    neighbors.forEach(neighbor => {
      const new_cost = costs[node] + graph[node][neighbor]
      if (!costs[neighbor] || new_cost < costs[neighbor]) {
        costs[neighbor] = new_cost
        parents[neighbor] = node
      }
    })
    processed.push(node)
  }

  const lowestCost = costs[endPoint]
  const path = getPath()
  console.log(lowestCost, path)
  return {
    lowestCost,
    path
  }
}

dijkstra()
