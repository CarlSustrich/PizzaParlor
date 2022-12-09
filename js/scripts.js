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
  this.size === "large" ? this.cost += 12 : this.size === "medium" ? this.cost += 10 : this.size === "small" ? this.cost += 8 : this.cost += 0;
  this.cost += ((this.basicToppings.length) * 2);
  this.cost += ((this.premiumToppings.length) *4);
};

Pizza.prototype.orderToString = function () {
  let pizzaString = `${this.size.charAt(0).toUpperCase() + this.size.slice(1)} Pizza <br> Basic Toppings: <br> ${this.basicToppings} <br> Premium Toppings: <br> ${this.premiumToppings} <br> Cost: \$${this.cost} <br><br>`;
  return pizzaString;
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
    pizzaDetailsHolder.innerHTML += pizza.orderToString();
  });
}

function handleFormSubmission (event) {
  event.preventDefault();
  makePizza();
  document.getElementById("new-pizza").reset();
  document.querySelector("#totalCost").innerText = newOrder.cost;
  displayPizzaInfo();
}

window.addEventListener("load", function (){
  document.querySelector("form#new-pizza").addEventListener("submit", handleFormSubmission);
});
