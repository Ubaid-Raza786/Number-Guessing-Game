#! /usr/bin/env node
import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random() * 5 + 1);
const answer = await inquirer.prompt([{
        name: "userGuessedNumber",
        type: "number",
        message: "Please Guess a number between 1 to 5 : ",
    },
]);
if (answer.userGuessedNumber === randomNumber) {
    console.log("``Congrulation! Your Guessed Number is Correct.``");
}
else {
    console.log("``Try Again! Your Guessed Number is Wrong.``");
}
