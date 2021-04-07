/*Provide change, flag if there's not enough funds in the drawer
*/
function checkCashRegister(price, cash, cid) {
  var cidCopy = [...cid]
  var change = cash - price;
  const fixedChg = cash - price
  var tracker = { "PENNY": cid[0][1],
                  "NICKEL": cid[1][1],
                  "DIME": cid[2][1],
                  "QUARTER": cid[3][1],
                  "ONE": cid[4][1],
                  "FIVE": cid[5][1],
                  "TEN": cid[6][1],
                  "TWENTY": cid[7][1],
                  "ONE HUNDRED": cid[8][1]  };
  
  var qtyTracker = {  "PENNY": Math.round(cid[0][1] / 0.01),
                      "NICKEL": Math.round(cid[1][1] / 0.05),
                      "DIME": Math.round(cid[2][1]  / 0.1),
                      "QUARTER": Math.round(cid[3][1] / 0.25),
                      "ONE": Math.round(cid[4][1] / 1),
                      "FIVE": Math.round(cid[5][1] / 5),
                      "TEN": Math.round(cid[6][1] / 10),
                      "TWENTY": Math.round(cid[7][1] / 20),
                      "ONE HUNDRED": Math.round(cid[8][1] / 100)  };

  var chgTracker = [["PENNY", 0], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]
  var chgRev = chgTracker.reverse()
  
  
  var tried = 0

  while (change >= 0) {
    //if change is bigger than hundred, give out changes from there
    if (change >= 100 && qtyTracker["ONE HUNDRED"] > 0) {
      change -= 100
      tracker["ONE HUNDRED"] -= 100;
      qtyTracker["ONE HUNDRED"] -= 1;
      tried += 100
      chgRev[0][1] += 100
    } else if (change >= 20 && qtyTracker["TWENTY"] > 0) {
      change -= 20
      tracker["TWENTY"] -= 20;
      qtyTracker["TWENTY"] -= 1
      tried += 20
      chgRev[1][1] += 20
    } else if (change >= 10 && qtyTracker["TEN"] > 0) {
      change -= 10
      tracker["TEN"] -= 10;
      qtyTracker["TEN"] -= 1;
      tried += 10
      chgRev[2][1] += 10
    } else if (change >= 5 && qtyTracker["FIVE"] > 0) {
      change -= 5
      tracker["FIVE"] -= 5;
      qtyTracker["FIVE"] -= 1;
      tried += 5
      chgRev[3][1] += 5
    } else if (change >= 1 && qtyTracker["ONE"] > 0) {
      change -= 1;
      tracker["ONE"] -= 1;
      qtyTracker["ONE"] -= 1;
      tried += 1
      chgRev[4][1] += 1
    } else if (change >= 0.25 && qtyTracker["QUARTER"] > 0) {
      change -= 0.25;
      tracker["QUARTER"] -= 0.25;
      qtyTracker["QUARTER"] -= 1;
      tried += 0.25
      chgRev[5][1] += 0.25
    } else if (change >= 0.1 && qtyTracker["DIME"] > 0) {
      change -= 0.1;
      tracker["DIME"] -= 0.1;
      qtyTracker["DIME"] -= 1;
      tried += 0.1
      chgRev[6][1] += 0.1
    } else if (change >= 0.05 && qtyTracker["NICKEL"] > 0) {
      change -= 0.05;
      tracker["NICKEL"] -= 0.05;
      qtyTracker["NICKEL"] -= 1;
      tried += 0.05
      chgRev[7][1] += 0.05
    } else if (change >= 0.01 && qtyTracker["PENNY"] > 0) {
      change -= 0.01;
      tracker["PENNY"] -= 0.01;
      qtyTracker["PENNY"] -= 1
      tried += 0.01
      chgRev[8][1] += 0.01
    } else {
      break
    }
    change = Math.round(change * 100) / 100
  }
 
  
  let chgFilter = chgRev.filter(element => element[1] > 0)
  
  let result = {}
  
  
  let truthArr = []
  for (const property in qtyTracker) {

    truthArr.push(qtyTracker[property] == 0)
  }
  
  tried = Math.round(tried * 100) / 100
  
  if (fixedChg !== tried) {
    result = {status: "INSUFFICIENT_FUNDS", change: []}
  };


  
  if (truthArr.includes(false) && change == 0) {
    result = {status: "OPEN", change: chgFilter}
  }
  

  if (!truthArr.includes(false) && change == 0) {
    result = {status: "CLOSED", change: cidCopy}
  }
  return result


}

checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])
