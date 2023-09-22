const franc = require("franc");

const userInput = process.argv[2];

const languageCode = franc(userInput);

console.log(languageCode);
