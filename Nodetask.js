const fs = require('fs')
const [, , num1, num2] = process.argv
console.log(parseInt(num1) + parseInt(num2))
console.log(num1)

const text = "const currentDate = new Date() const timestamp = currentDate. getTime(); ";
for(let i=0;i<=num1;i++){
    fs.writeFile(`./backup/26-02-2022-23-00${i}.txt`,text, (err) => {
        console.log('completed')
    })
}
