function bind(context, prop) {
  return function(...rest) {
    const id = Symbol('context')
    context[id] = prop
    return context[id](...rest)
  }
}

const obj = {
  b: '2',
  log(c) {
    console.log(this.b + c)
  }
}

const log1 = obj.log.bind(obj)
log1('8') // 28

const log2 = bind(obj, obj.log)
log2('8') // 28