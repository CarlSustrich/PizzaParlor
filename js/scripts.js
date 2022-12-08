/* 
order object
  cost:
  pizzas: array of pizza objects


pizza object
  size:
  basic toppings array (.length * basic surcharge)
  expensive toppings array (.length * expensive surcharge)
  cost: 
  */

function Order () {
  this.cost;
  this.pizzas = [];
}

function Pizza () {
  this.size;
  this.basicToppings = [];
  this.premiumToppings = [];
  this.cost;
}

Pizza.prototype.calculateTotal = function () {
  this.cost = 0;
  this.size === "large" ? this.cost += 12 : this.size === "medium" ? this.cost += 10 : this.size === "small" ? this.cost += 8 : this.cost += 0;
  this.cost += ((this.basicToppings.length) * 2);
  this.cost += ((this.premiumToppings.length) *4);
}
