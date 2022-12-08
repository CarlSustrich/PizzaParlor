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
  this.cost = 0;
  this.pizzas = [];
}
