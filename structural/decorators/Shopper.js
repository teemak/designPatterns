class Shopper {
	constructor(name, money) {
		this.name = name;
		this.account = money;
		this.items = [];
	}
	purchase(item) {
		if (item.price > this.account) {
			console.log("Not enough money");
		} else {
			console.log(`Purchasing ${item.name}`);
			this.account -= item.price;
			this.items.push(item);
		}
	}
	printStatus() {
		console.log(`${this.name} has purchased ${this.items.length} items.`);
		this.items.forEach(item => {
			console.log(`  * ${item.name} - ${item.price}`);
		});
		console.log(`${this.name} has $${this.account.toFixed(2)} remaining`);
	}
}
module.exports = Shopper;
