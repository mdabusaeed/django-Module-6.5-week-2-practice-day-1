const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', (input) => {
  const numbers = input.split(' ').map(num => parseInt(num, 10)); 

    for(let i=0; i<numbers.length; i++){
        if(numbers[i] % 3==0 && numbers[i] %5==0){
            console.log(numbers[i]);
        }
    }

  rl.close(); 
});