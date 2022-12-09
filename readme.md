describe Order ()

Test: It should create an object with a cost key and a pizzas key which holds an empty array.
code: let newOrder = new Order();
Expected Output: newOrder { cost: 0, pizzas: []}

describe Pizza ()

Test: It should create an object with a size key, a basic toppings & premium toppings key, each with an empty array, and a cost key.
Code: let newPizza = new Pizza ();
Expected output: newPizza { size: , basic toppings: [], premium toppings: [], cost: 0}


describe Pizza.prototype.calculateTotal()

Test: It should assign a value based on the chosen pizza size & update the Pizza cost key.
Code: 
newPizza.size = "small"
newPizza.calculateTotal();
Expected output: newPizza { size: "small", basic toppings: [], premium toppings: [], cost: 8}

Code: 
newPizza.size = "medium"
newPizza.calculateTotal();
Expected Output: newPizza { size: "medium", basic toppings: [], premium toppings: [], cost: 10}

code: 
newPizza.size = "large"
newPizza.calculateTotal();
Expected Output: newPizza { size: "large", basic toppings: [], premium toppings: [], cost: 12}

Test: It should overwrite the previously assigned cost value if ran more than once, rather than add to it.
code: newPizza.size = "large"
newPizza.calculateTotal();
newPizza.calculateTotal();
Expected Output: newPizza {size: "large", basic toppings: [], premium toppings: [], cost: 12}

Test: It should assign a value based on the chosen basic toppings & update the Pizza cost key, at the rate of 2 per topping.
code: newPizza.basicToppings.push("pepperoni")
newPizza.calculateTotal();
Expected Output: newPizza {size: , basic toppings ["pepperoni"], premium toppings: [], cost: 2}

code: newPizza.basicToppings.push("pepperoni")
newPizza.basicToppings.push("pineapple")
newPizza.calculateTotal();
Expected Output: newPizza {size: , basic toppings ["pepperoni", "pineapple"], premium toppings: [], cost: 4}

Test: It should assign a value based on the chosen premium toppings & update the Pizza cost key at the rate of 4 per topping.
code: newPizza.premiumToppings.push("anchovy")
newPizza.calculateTotal();
Expected Output: newPizza {size: , basic toppings [], premium toppings: ["anchovy"], cost: 4}

code: newPizza.basicToppings.push("anchovy")
newPizza.basicToppings.push("someotherpremiumtopping")
newPizza.calculateTotal();
Expected Output: newPizza {size: , basic toppings [], premium toppings: ["anchovy", "someotherpremiumtopping"], cost: 4}


Describe: Order.prototype.calculateTotal()

Test: It should update the cost key for the Order object based on the cost of each pizza in the pizzas key.
Code: 
let newOrder = new Order();
let pizza1 = new Pizza();
pizza1.cost = 10;
newOrder.pizzas.push(pizza1);
newOrder.calculateTotal();
Expected Output: newOrder {cost: 10, pizzas: [pizza1]}


Describe: Pizza.prototype.orderToString()

Test: It should take all the details of a pizza and convert it into a string.
code: 
let pizza1 = new Pizza();
pizza1.size = "small";
pizza1.cost = 14;
pizza1.basicToppings.push("pepperoni")
pizza1.basicToppings.push("pineapple")
pizza1.orderToString();
Expected Result:
"Small Pizza
Basic Toppings:
pepperoni
Premium Toppings:
pineapple
Cost: $14"
