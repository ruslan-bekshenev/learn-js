const user = {
    money: 1000,
    [Symbol.toPrimitive](hint) {
        return this.money
    }
}

console.log(user + 10000)