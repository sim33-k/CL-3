const {getWindowIdx} = require('../src/solution');


// test code given in the question

// for (let m = -5; m <= 15; m++) {
//  const noOfPeriods = 4; // possible values: 1, 2, 4, 12
//  const currentMonth = m;
//  const windowIdx = getWindowIdx(noOfPeriods, currentMonth);
//  console.log(`<p>currentMonth=${currentMonth} : noOfPeriods=${noOfPeriods} : window=${windowIdx}</p>`);
// }

// test case for all 4 scenarios

for (let period of [1, 2, 4, 12]) {
 const noOfPeriods = period;
    console.log(`---------------noOfPeriods=${noOfPeriods}---------------`);
    for (let m = -5; m <= 15; m++) {
    const currentMonth = m;
    const windowIdx = getWindowIdx(noOfPeriods, currentMonth);
    console.log(`currentMonth=${currentMonth} : noOfPeriods=${noOfPeriods} : window=${windowIdx}`);
    }
}