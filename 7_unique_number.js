const uniqeNumber = (numbers) =>{
    const uniqeNumbers = [];

    for (let i = 0; i < numbers.length; i++) {
        let isDuplicate = false;
    
        for (let j = 0; j < uniqeNumbers.length; j++) {
            if (numbers[i] === uniqeNumbers[j]) {
            isDuplicate = true;
            break;
            }
        }

        if (!isDuplicate) {
            uniqeNumbers.push(numbers[i]);
        }
    }

    return uniqeNumbers;
};


const numbers = [1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9, 10];
const uniqeNumbers = uniqeNumber(numbers);
console.log(uniqeNumbers.join(' '));
