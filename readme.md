describe Order ()

Test: It should create an object with a cost key and a pizzas key which holds an empty array.
code: let newOrder = new Order();
Expected Output: newOrder { cost: 0, pizzas: []}

describe Pizza ()

Test: It should create an object with a size key, a basic toppings & premium toppings key, each with an empty array, and a cost key.
Code: let newPizza = new Pizza ();
Expected output: newPizza { size: , basic toppings: [], premium toppings: [], cost: 0}


describe Pizza.prototype.calculateTotal

Test: It should assign a value based on the chosen pizza size & update the Pizza cost key.
Code: 
newPizza.size = "small"
newPizza.calculateTotal();
Expected output: newPizza { size: small, basic toppings: [], premium toppings: [], cost: 8}

code: 
newPizza.size = "medium"
newPizza.calculateTotal();
Expected Output: newPizza { size: medium, basic toppings: [], premium toppings: [], cost: 10}

code: 
newPizza.size = "large"
newPizza.calculateTotal();
Expected Output: newPizza { size: large, basic toppings: [], premium toppings: [], cost: 12}
