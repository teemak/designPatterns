const { writeFile, existsSync, readFileSync, unlink } = require("fs");

class LocalStorage {
	constructor() {
		if (existsSync("local_storage.json")) {
			console.log("loading files from local_storage.json");
			let txt = readFileSync("local_storage.json");
			this.items = JSON.parse(txt);
		} else {
			this.items = {};
		}
	}
	get length() {
		return Object.keys(this.items).length;
	}

	getItem(key) {
		return this.items[key];
	}

	setItem(key, value) {
		this.items[key] = value;
		writeFile("local_storage.json", JSON.stringify(this.items), error => {
			if (error) {
				console.error(error);
			}
		});
	}

	clear() {
		this.items = {};
		unlink("local_storage.json", () => console.log("removed local_storage.json"));
	}
}

module.exports = new LocalStorage();
