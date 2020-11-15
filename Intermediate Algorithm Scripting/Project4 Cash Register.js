function checkCashRegister(price, cash, cid) {

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

    // change sum which is due
    var change = (cash - price).toFixed(2);

    // getting cid sum:
    const cidSum = cid.reduce((sum, element)=>
        sum + element[1]
    , 0).toFixed(2);
    
    // if cid sum is not enough, exit
    if (parseFloat(cidSum) < parseFloat(change)) {
        return {status: "INSUFFICIENT_FUNDS", change: []}
    }

    if (parseFloat(cidSum) === parseFloat(change)) {
        return {status: "CLOSED", change: cid}
    }

    // cid to use:
    let usableCid = cid.filter(element => billValues[element[0]] <= change);
    let sortedCid = usableCid.sort((a,b)=> billValues[b[0]] - billValues[a[0]]);

    function getObjectKey(obj){
        const keys = Object.keys(obj);
        return keys[0];
    }

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

    let sumLeft = change;
    let changeArr = [];

    while (sortedCid.length > 0 && sumLeft > 0) {
        changeArr.push([sortedCid[0][0], getSumInBills(sumLeft, billValues[sortedCid[0][0]] , sortedCid[0][1])]);
        sumLeft = sumLeft - getSumInBills(change, billValues[sortedCid[0][0]] , sortedCid[0][1]);
        
        sortedCid.pop(sortedCid[0]);
        sortedCid = sortedCid.filter(element => billValues[element[0]] <= sumLeft);
        
    }



    
    return {status: "OPEN", changeArr};
  }
  
checkCashRegister(
    19.5, 
    20, 
    [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]
    );


console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])); 
// should return {status: "OPEN", change: [["QUARTER", 0.5]]}.
/*
checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]) 
// should return {status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]}.

checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) 
// should return {status: "INSUFFICIENT_FUNDS", change: []}.

checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) 
// should return {status: "INSUFFICIENT_FUNDS", change: []}.

checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) 
// should return {status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]}


*/

/*

Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

cid is a 2D array listing available currency.

The checkCashRegister() function should always return an object with a status key and a change key.

Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.

Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.

Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.

Currency Unit	Amount
Penny	$0.01 (PENNY)
Nickel	$0.05 (NICKEL)
Dime	$0.1 (DIME)
Quarter	$0.25 (QUARTER)
Dollar	$1 (ONE)
Five Dollars	$5 (FIVE)
Ten Dollars	$10 (TEN)
Twenty Dollars	$20 (TWENTY)
One-hundred Dollars	$100 (ONE HUNDRED)
See below for an example of a cash-in-drawer array:

[
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100]
] */