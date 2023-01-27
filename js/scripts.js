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
  return `${this.size.charAt(0).toUpperCase() + this.size.slice(1)} Pizza <br> Basic Toppings: <br> ${(this.basicToppings[0]) ? (this.basicToppings.join(', ')) : "No Basic Topings Added"} <br> Premium Toppings: <br> ${(this.premiumToppings[0]) ? (this.premiumToppings.join(', ')) : "No Premium Toppings Added"} <br> Cost: \$${this.cost} <br><br>`;
};

Order.prototype.calculateTotal = function () {
  this.cost = 0;
  let totalCost = 0;
  newOrder.pizzas.forEach (function(pizza) {
    totalCost += pizza.cost;
  });
  this.cost += totalCost;
};

//UI

function pullCheckedValuesFor(name) {
  let checkedboxes = document.getElementsByName(`${name}`);
  let arr = [];
  checkedboxes.forEach(function (checkbox) {
    if (checkbox.checked) {
      arr.push(`${checkbox.value.charAt(0).toUpperCase() + checkbox.value.slice(1)}`);
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
    let info = document.createElement('p');
    info.innerHTML += pizza.orderToString();
    info.innerHTML += (`<button id="${newOrder.pizzas.indexOf(pizza)}">Delete This Pizza</button><br><br>`);
    pizzaDetailsHolder.append(info)
  });
  document.querySelector("#totalCost").innerText = newOrder.cost;
  
}

function shouldIDeletePizza(event) {
  if (event.target.innerText === 'Delete This Pizza') {
    deletePizza(event.target.id);
  } 
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
  document.querySelector("div#individualPizzaDetails").addEventListener("click", shouldIDeletePizza);   
});
