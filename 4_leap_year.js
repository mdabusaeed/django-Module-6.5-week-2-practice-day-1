const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.on('line', (input) => {
    const number = parseInt(input,10);

    if(number % 400 === 0 || number % 4===0 && number % 100 !== 0 ){
        console.log(`${number} is Leap Year`);
    }
    else{
        console.log(`${number} is not a Leap Year`);
    }

rl.close();
});