const billValues = [
    {"ONE HUNDRED": 100},
    {"TWENTY": 20},
    {"TEN": 10},
    {"FIVE": 5},
    {"ONE": 1},
    {"QUARTER": 0.25},
    {"DIME": 0.1},
    {"NICKEL": 0.05},
    {"PENNY": 0.01}
]

function getObjectKey(obj){
    const keys = Object.keys(obj);
    return keys[0];
}

const bill = {"QUARTER": 0.25};

function getSumInBills(some_sum, some_bill, sumInBills){
    if (some_sum > some_bill[getObjectKey(some_bill)]) {
        if (some_sum < sumInBills) {
            const changeInBills = some_bill[getObjectKey(some_bill)] * parseInt(some_sum/some_bill[getObjectKey(some_bill)]);
            return changeInBills;
        }else if (some_sum >= sumInBills) {
            return sumInBills;
        } 
    }
}

console.log(getSumInBills(7.75, bill, 7.75));


const cid = [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]];
// cid to use:
function getCidToUse(change_sum, cid, billValues){
    
    let new_cid = cid.filter(element => element[0]);

    return new_cid;
}