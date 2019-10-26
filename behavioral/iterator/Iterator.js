class Iterator {
	constructor(items) {
		this.index = 0;
		this.items = items || [];
	}
	first() {
		const [first] = this.items;
		return first;
		//return this.items[0];
	}
	last() {
		//const [last] = [...this.items].reverse();
		const last = this.items.pop();
		return last;
	}
	hasNext() {
		return this.index < this.items.length - 1;
	}
	current() {
		return this.items[this.index];
	}
	next() {
		if (this.hasNext()) {
			this.index++;
		}
		return this.current();
	}
	prev() {
		if (this.index !== 0) {
			this.index--;
		}
		return this.current();
	}
}
module.exports = Iterator;
