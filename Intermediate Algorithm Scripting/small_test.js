const billValues = {
    "ONE HUNDRED": 100,
    "TWENTY": 20,
    "TEN": 10,
    "FIVE": 5,
    "ONE": 1,
    "QUARTER": 0.25,
    "DIME": 0.1,
    "NICKEL": 0.05,
    "PENNY": 0.01
};

const cid = [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]];

// cid.map(element => console.log(billValues[element[0]]));
const usableCid = cid.filter(element => billValues[element[0]] <= 20);

let sortedCid = usableCid.sort((a,b)=> billValues[b[0]] - billValues[a[0]]);
console.log(sortedCid[1]);
// console.log(billValues[usableCid[3][0]]);

function getSumInBills(some_sum, some_bill, sumInBills){
    if (some_sum > some_bill) {
        if (some_sum < sumInBills) {
            const changeInBills = some_bill * parseInt(some_sum/some_bill);
            return changeInBills;
        }else if (some_sum >= sumInBills) {
            return sumInBills;
        } 
    }
}

const change = 60.5;

// console.log(getSumInBills(0.5, billValues[cid[0][0]], 3.1));

let sumLeft = change;
let changeArr = [];

while (sortedCid.length > 0 && sumLeft > 0) {
    changeArr.push([sortedCid[0][0], getSumInBills(sumLeft, billValues[sortedCid[0][0]] , sortedCid[0][1])]);
    sumLeft = sumLeft - getSumInBills(change, billValues[sortedCid[0][0]] , sortedCid[0][1]);
    
    sortedCid.pop(sortedCid[0]);
    console.log(sumLeft);
    sortedCid = sortedCid.filter(element => billValues[element[0]] <= sumLeft);
    console.log(changeArr.toString());

}