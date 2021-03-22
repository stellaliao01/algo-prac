class VendingMachine {
    constructor(snacks) {
        this.snacks = snacks
    }
    getSnack(cash, code) {
        let snack = this.snacks[code]
        if (cash >= snack.price && snack.quan > 0) {
            dispenseChange(cash, snack.price)
            snack.quan--
            return snack.item
        }
        if (cash < snack.price) return “Insufficient funds”
        if (snack.quan <= 0) return “That item is out of stock”
    }
    dispenseChange(cash, price) {
        return cash - price
    }
}
const snacks = {
“1a”: { item: “reeses”, price: 1, quan: 2 },
“1b”: { item: “cupcake”, price: 2, quan: 2 },
“1c”: { item: “donut”, price: 3, quan: 2 }
    }
let VM = new VendingMachine(snacks)