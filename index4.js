const exp = require("constants");


const expenses  = [
    {des:"ada" , amount:50},
    {des:"ada" , amount:400},
    {des:"ada" , amount:80}
]
 
const initialval = 0;


const total = expenses.reduce((acc, currval) => acc + currval.amount , initialval  );

console.log(total);


const totalAmount = expenses.reduce((acc, currval) => acc + currval.amount,0)
 
const arr = [3,4,4,5,5,5,5,5]

const totalsum =  arr.reduce((acc, curr) => acc + curr , 0)

console.log(totalsum)