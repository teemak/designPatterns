const Storage = require("./Storage");

class Store {
	constructor(name, inventory) {
		this.name = name;
		//this.inventory = inventory;
		const floor = new Storage("store floor", inventory.floor);
		const backroom = new Storage("back room", inventory.backroom);
		const localStore = new Storage("local store", inventory.localStore, 1);
		const warehouse = new Storage("warehouse", inventory.warehouse, 5);

		floor.setNext(backroom);
		backroom.setNext(localStore);
		localStore.setNext(warehouse);
		this.storage = floor;
	}
	find(itemName) {
		return this.storage.find(itemName);
		/*
		let index = this.inventory.map(item => item.name).indexOf(itemName);
		return this.inventory[index];
		*/
	}
}

module.exports = Store;
