const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', (input) => {
  const numbers = input.split(' ').map(num => parseInt(num, 10)); 

  for(let i=0; i < numbers.length -1; i++){
    for(let j=i+1; j < numbers.length; j++){
        if (numbers[i] > numbers[j]){
            const temp = numbers[i];
            numbers[i] = numbers[j]
            numbers[j] = temp
        }
    }
  }

  console.log(numbers.join(' ')); 

  rl.close(); 
});
