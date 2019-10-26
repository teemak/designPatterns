const localStorage = require("./localStorage");

console.log("local storage length:", localStorage.length);

let uid = localStorage.getItem("user_id");

console.log("user_id", uid);

if (!uid) {
	console.log("user id not found");
	localStorage.setItem("token", "random");
	localStorage.setItem("user_id", "Erza");
} else {
	console.log("found user", uid);
	console.log("clearing the user id...");
	localStorage.clear();
}
