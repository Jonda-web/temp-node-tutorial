
let stocks = {
    Fruits: ["strawberry", "grapes", "banana", "apple"],
    liquid: ["water", "ice"],
    holder: ["cone", "cup", "stick"],
    toppings: ["chocolate", "peanuts"],
};


let order = (Fruit_name, call_production) => {
    setTimeout(() => {
        console.log(`${stocks.Fruits[Fruit_name]} was selected`)
    }, 2000)
    call_production;
};

let production = () => {
    setTimeout(() => {
        console.log("Production has started")
    }, 0000)
};

console.log(order("0", production))