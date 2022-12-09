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
}

Order.prototype.calculateTotal = function () {
  this.cost = 0;
  let totalCost = 0;
  newOrder.pizzas.forEach (function(pizza) {
    totalCost += pizza.cost;
    return totalCost;
  })
  this.cost += totalCost;
}

//UI

function pullCheckedValuesFor(name) {
  let checkedboxes = document.getElementsByName(`${name}`);
  let arr = [];
  checkedboxes.forEach(function (checkbox) {
    if (checkbox.checked) {
      arr.push(checkbox.value)
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

function updateUI() {
  document.querySelector("#totalCost").innerText = newOrder.cost;
}

function handleFormSubmission (event) {
  event.preventDefault();
  makePizza();
  document.getElementById("new-pizza").reset();
  updateUI();
}


window.addEventListener("load", function (){
  document.querySelector("form#new-pizza").addEventListener("submit", handleFormSubmission);
});
