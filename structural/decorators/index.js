const Shopper = require("./Shopper");
const { InventoryItem, GoldenInventoryItem, DiamondInventoryItem } = require("./InventoryItem");

const alex = new Shopper("Alex", 500);

const walkman = new InventoryItem("Walkman", 29.99);
const necklace = new InventoryItem("Necklace", 9.99);

const goldNecklace = new GoldenInventoryItem(necklace);
const diamondNecklace = new DiamondInventoryItem(goldNecklace);

const diamondWalkman = new DiamondInventoryItem(walkman);

alex.purchase(goldNecklace);
alex.purchase(diamondWalkman);
diamondWalkman.print();
alex.printStatus();
