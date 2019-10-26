class Shopper {
	constructor(name) {
		this.name = name;
	}

	notify(storeName, discount) {
		console.log(
			`${this.name}, there is a sale at the ${storeName} with a discount of ${discount}%.`,
		);
	}
}
module.exports = Shopper;
