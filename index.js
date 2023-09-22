const franc = require("franc");
const langs = require("langs");
const cowsay = require("cowsay");

const userInput = process.argv[2];
const languageCode = franc(userInput);
const languageName = langs.where("3", languageCode)?.name;

let output;

if (!userInput) {
	output = cowsay.say({
		text: "Oh... you should write something, so I can guess!",
		f: "yasuna_09",
	});
} else if (!languageName) {
	output = cowsay.say({
		text: "Sorry, I have no ideas, can you give longer sentence?",
		f: "yasuna_12",
	});
} else {
	output = cowsay.say({
		text: `I think it is ${languageName}`,
		f: "yasuna_04",
	});
}

console.log(output);
