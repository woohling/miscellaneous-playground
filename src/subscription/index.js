// subscription:
// { id, handler, events }

class Subscription {
  constructor() {
    this.subscription = {}
  }

  addSubscription(subscription) {
    const { id } = subscription
    if (!this.subscription[id]) {
      this.subscription[id] = subscription
    }
    return this.subscription[id]
  }

  emit(event, data) {
    Object.keys(this.subscription).forEach(id => {
      const { events = [], handlers = [] } = this.subscription[id]
      if (events.indexOf(event) > -1) {
        handlers.forEach(handler => {
          handler(data)
        })
      }
    })
  }

  unsubscribe(id) {
    if (this.subscription[id]) {
      delete this.subscription[id]
    }
  }
}