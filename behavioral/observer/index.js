const Store = require("./Store");
const Mall = require("./Mall");
const Shopper = require("./Shopper");

const catsAndThings = new Store("Cats & Things");
const insAndOuts = new Store("Ins & Outs");

/** OBSERVER **/
const alex = new Shopper("Alex");
const tee = new Shopper("Tee");
const eve = new Shopper("Eve");
const crystal = new Shopper("Crystal");

/** OBSERVER **/
const valleyMall = new Mall();

catsAndThings.subscribe(alex);
catsAndThings.subscribe(eve);
catsAndThings.subscribe(crystal);
catsAndThings.subscribe(valleyMall);

insAndOuts.subscribe(crystal);
insAndOuts.subscribe(valleyMall);

/** OBSERVABLE **/
catsAndThings.sale(20);
//insAndOuts.sale(50);

console.log(valleyMall.sales);
