const uniqeNumber = (numbers) =>{
    let bigNumbers = numbers[0];

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > bigNumbers) {
            bigNumbers = numbers[i];
        }
    }

    return bigNumbers;
};


const numbers = [1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9, 10];
const uniqeNumbers = uniqeNumber(numbers);
console.log(uniqeNumbers);
