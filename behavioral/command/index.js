const conductor = require("./conductor");
const { ExitCommand, CreateCommand } = require("./commands");
const { createInterface } = require("readline");
const rl = createInterface({ input: process.stdin, output: process.stdout });

console.log("create <filename> <text> | history | undo | redo | exit");
rl.prompt();

rl.on("line", input => {
	let [commandText, ...remaining] = input.split(" ");
	let [fileName, ...fileText] = remaining;
	let text = fileText.join(" ");

	switch (commandText) {
		case "create":
			conductor.run(new CreateCommand(fileName, text));
			break;
		case "history":
			conductor.printHistory();
			break;
		case "undo":
			conductor.undo();
			break;
		case "redo":
			conductor.redo();
			break;
		case "exit":
			conductor.run(new ExitCommand());
			break;
		default:
			console.log(`${commandText} command not found`);
	}
	rl.prompt();
});
