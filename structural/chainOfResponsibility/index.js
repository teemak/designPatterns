const Store = require("./Store");
const inventory = require("./inventory");

const skiShop = new Store("Steep and deep", inventory);
//const skiShop = new Store("Steep and deep", inventory.floor);

const searchItem = "powder skis";
const results = skiShop.find(searchItem);

console.log(results);
