var shopping_list = ["pop tarts", "ramen noodles", "chips", "salsa", "coffee"];
shopping_list.push("fruit loops");
shopping_list[4] = "fair trade coffee";
shopping_list.splice(2, 2, "rice", "beans");

var shopping_cart = [];

shopping_cart.push(shopping_list.pop());
shopping_cart.push(shopping_list.shift());

while (shopping_list.length > 0) {
	shopping_cart.push(shopping_list.shift());
}

shopping_cart.sort().reverse();

console.log("Here is my shopping cart: " + shopping_cart.join(", "));