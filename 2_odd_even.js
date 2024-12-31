const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter Your Number: ", (input) => {
    const number = parseInt(input,10);
    if(number === 0){
        console.log(`${number} is Natural Number`);
    }
    else if (number % 2==0 ){
        console.log(`${number} is Even Number`);
    }
    else{
        console.log(`${number} is Odd Number`);
    }

rl.close();
});



