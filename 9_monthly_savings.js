const monthlySavings = ([incomes,expense]) =>{
    if(!Array.isArray(incomes)){
        return `Invalid Input`
    }
    let total_income = 0;

    for (let i = 0; i < incomes.length; i++) {
        if (incomes[i] >= 3000){
            const after_tax = incomes[i] - incomes[i] * 0.2;
            total_income += after_tax;
        }
        else{
            total_income += incomes[i];
        }
    }
    
    const savings = total_income - expense;

    if (savings === expense){
        return`0 taka savings this month.`;
    }
    else if (savings > 0){
        return`Your saving is ${savings} taka`;
    }
    else{
        return`Earn More`;
    }
};


const income1 = [[1000,2000,3000], 5400];
const income2 = [[1000,2000,2500], 5000];
const income3 = [[900,2700,3400], 10000];
const income4 = [100,[900,2000,3000]];

const monthlySaving = monthlySavings(income4)
console.log(monthlySaving);
