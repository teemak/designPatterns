class CatalogGroup {
	constructor(name, composites) {
		this.name = name;
		this.composites = composites || [];
	}

	get total() {
		return this.composites.reduce((total, next) => total + next.total, 0);
	}

	print() {
		console.log(`\n${this.name.toUpperCase()}`);
		this.composites.forEach(item => item.print());
	}
	/*
	get all() {
		console.log(this.composites);
		return this.composites;
	}
	*/
}

module.exports = CatalogGroup;
