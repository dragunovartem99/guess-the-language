const franc = require("franc");
const langs = require("langs");

const userInput = process.argv[2];
const languageCode = franc(userInput);
const languageName = langs.where("3", languageCode)?.name;

if (!userInput) {
	console.log("Write something!");
} else if (!languageName) {
	console.log("I don't know!");
} else {
	console.log(languageName);
}
