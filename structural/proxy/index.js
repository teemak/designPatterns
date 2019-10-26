const path = require("path");

const FS_Proxy = require("./FS_Proxy");
const fs = new FS_Proxy(require("fs"));

const txtFile = path.join(__dirname, "Readme.txt");
const mdFile = path.join(__dirname, "Readme.md");

const result = (error, contents) => {
	if (error) {
		console.log("\x07"); //line break?
		console.error(error);
		process.exit(0);
	}
	console.log("\n******");
	console.log("reading file...");
	console.log(contents);
	console.log("******\n");
};

//fs.readFile(txtFile, "UTF-8", result);
fs.readFile(mdFile, "UTF-8", result);
