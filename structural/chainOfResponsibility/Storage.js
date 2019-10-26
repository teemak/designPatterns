class Storage {
	constructor(name, inventory, delivery) {
		this.name = name;
		this.inventory = inventory;
		this.delivery = delivery || 0;
		this.next = null;
	}
	lookInLocalInventory(itemName) {
		const index = this.inventory.map(item => item.name).indexOf(itemName);
		return this.inventory[index];
	}
	setNext(storage) {
		this.next = storage;
	}
	find(itemName) {
		const found = this.lookInLocalInventory(itemName);
		if (found) {
			return {
				name: found.name,
				qty: found.qty,
				location: this.name,
				delivery: this.delivery === 0 ? "now" : `${this.delivery} days`,
			};
		} else if (this.next) {
			// THIS IS THE CHAIN
			return this.next.find(itemName);
		} else {
			return "We do not carry this item";
		}
	}
}

module.exports = Storage;
