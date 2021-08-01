var str='bankPanNumber';
// product-details
// bankName =>  bank-name
// bankPanNumber => bank-pan-number
let newStr = ''
str.split('').forEach((ele) => {  
    if(ele === ele.toUpperCase()){
        newStr += `-`+ ele.toLocaleLowerCase();
    }else{
    newStr+=ele;
    }
}
)

console.log(newStr);