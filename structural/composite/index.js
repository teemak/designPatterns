const CatalogItem = require("./CatalogItem");
const CatalogGroup = require("./CatalogGroup");

const boots = new CatalogItem("Leather Boots", 79.99);
const sneakers = new CatalogItem("Kicks", 39.99);
const flipFlops = new CatalogItem("Slides", 19.99);

const groupShoes = new CatalogGroup("All shoes", [boots, sneakers, flipFlops]);

const groupFood = new CatalogGroup("Food for waiting", [
	new CatalogItem("Freedom fries", 3.99),
	new CatalogItem("Soda", 1.99),
]);

const keyChain = new CatalogItem("Key chain", 0.99);

//console.log("boots total: ", `$${boots.total}`);
//sneakers.print();
//flipFlops.print();
//groupShoes.all();
//groupShoes.print();

const catalog = new CatalogGroup('Clothes and Food', [keyChain, groupShoes, groupFood]);

console.log(`$${catalog.print()}`);
