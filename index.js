// console.log("Hello Node.js!")

// const myName = "Artem"

// console.log(myName)
// console.log(myHobbies)

// const fs = require("fs")
// const fs  = require("fs").promises
// import fs from "fs/promises"

// const data = fs.readFileSync("./text.txt", "utf-8") // блокирующая 
// const data = await fs.readFile("./text.txt", "utf-8") // ES6 модуль

// fs.readFile("./text.txt", "utf-8", (err, data) => { // неблокирующая
//     if (!err) {
//         console.log("это файл которого нет")
//     }
// })

// async function readFile() {
//     const data = await fs.readFile("./text.txt", "utf-8")
//     console.log(data)
// }
// readFile()


// console.log("File reading finished")
// console.log("Continue...")
// console.log(process.cwd());
// console.log(process.platform); // win32, linux, darwin
// console.log(process.version);  // v20.11.1
// console.log(process.pid);    // id процесса
// console.log(process.title);  // название процесса
// process.stdout.write("Привет!\n");
// process.stdout.write("Привет!!\n")
// console.log(process.argv)

console.log("start");

process.nextTick(() => {
  console.log("nextTick");
});

console.log("end");

