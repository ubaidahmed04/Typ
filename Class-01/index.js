import inquirer from "inquirer";
// import { inquirer } from 'inquirer';
// async function main() {
// let guestNum= await inquirer.prompt([{
//     name :"guess",
//     type:"number",
//     massage:"guess the number"
// }])
// console.log(guestNum.guess);
// }
// main();
let checkNum = await inquirer.prompt([{ name: "guess", type: "number", massage: "guess the number" }]);
console.log(checkNum.guess);
// console.log("hello world");
// let firstName: string = "Dylan";
// console.log(firstName);
// let checkNumber: number = 40;
// console.log(checkNumber);
// let myName :string = "ubiad ahmed";
// console.log(myName);
// let personName: string = "Eric";
// console.log(`Hello ${personName}, would you like to learn some Python today?`);
