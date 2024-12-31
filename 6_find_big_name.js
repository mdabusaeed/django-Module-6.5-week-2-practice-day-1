const bigName = (arry) =>{
    let biggestName = arry[0];
    
    for(let i=0; i<arry.length; i++){
        const big_name = arry[i];
        if(big_name.length > biggestName.length){
            biggestName = big_name;
        }
    }
    return biggestName
}

const friends = ["rahim", "karim", "abdul", "sadsd", "heroAlom"];
const names = bigName(friends);
console.log(names);