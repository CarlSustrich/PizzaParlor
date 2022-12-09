//business

function Order () {
  this.cost = 0;
  this.pizzas = [];
}

let newOrder = new Order();

function Pizza () {
  this.size;
  this.basicToppings = [];
  this.premiumToppings = [];
  this.cost = 0;
}

Pizza.prototype.calculateTotal = function () {
  this.cost = 0;
  sizeCosts = {large: 12, medium: 10, small: 8};
  this.cost = sizeCosts[this.size];
  this.cost += ((this.basicToppings.length) * 2);
  this.cost += ((this.premiumToppings.length) * 4);
};

Pizza.prototype.orderToString = function () {
  return `${this.size.charAt(0).toUpperCase() + this.size.slice(1)} Pizza <br> Basic Toppings: <br> ${this.basicToppings.join(', ')} <br> Premium Toppings: <br> ${this.premiumToppings.join(', ')} <br> Cost: \$${this.cost} <br><br>`;
};

Order.prototype.calculateTotal = function () {
  this.cost = 0;
  let totalCost = 0;
  newOrder.pizzas.forEach (function(pizza) {
    totalCost += pizza.cost;
    return totalCost;
  });
  this.cost += totalCost;
};

//UI

function pullCheckedValuesFor(name) {
  let checkedboxes = document.getElementsByName(`${name}`);
  let arr = [];
  checkedboxes.forEach(function (checkbox) {
    if (checkbox.checked) {
      arr.push(checkbox.value);
    }
  });
  return arr;
}

function makePizza() {
  let newPizza = new Pizza();
  newPizza.size = document.querySelector("#size").value;
  pullCheckedValuesFor('bToppings').forEach(function (item) {
    newPizza.basicToppings.push(item);
  });
  pullCheckedValuesFor('pToppings').forEach(function (item) {
    newPizza.premiumToppings.push(item);
  });
  newPizza.calculateTotal();
  newOrder.pizzas.push(newPizza);
  newOrder.calculateTotal();
}

function displayPizzaInfo() {
  let pizzaDetailsHolder = document.querySelector('#individualPizzaDetails');
  pizzaDetailsHolder.innerHTML = null;
  newOrder.pizzas.forEach(function(pizza){
    pizzaDetailsHolder.innerHTML += pizza.orderToString(); (element) => element > 13
    pizzaDetailsHolder.innerHTML += (`<button onclick="deletePizza(${newOrder.pizzas.indexOf(pizza)})">Delete This Pizza</button><br><br>`);
  });
  document.querySelector("#totalCost").innerText = newOrder.cost;
}

function deletePizza(index) {
  newOrder.pizzas.splice(index, 1);
  newOrder.calculateTotal();
  displayPizzaInfo();
}

function handleFormSubmission (event) {
  event.preventDefault();
  makePizza();
  document.getElementById("new-pizza").reset();
  displayPizzaInfo();
}

window.addEventListener("load", function (){
  document.querySelector("form#new-pizza").addEventListener("submit", handleFormSubmission);
});
