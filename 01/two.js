const theNumber = 2020;
let firstNum = null, secondNum = null, thirdNum = null, answer = null;
fetch('https://adventofcode.com/2020/day/1/input').then(r => {
  r.text().then(t => {
    let codes = t.split('\n').map(Number);
    for (let i = 0; i < codes.length; i++) {
      let n = codes[i];
      for (let ii = i+1; ii < codes.length; ii++) {
        let nn = codes[ii];
        let numToFind = theNumber - n - nn;
        if (numToFind > 0) {
            let found = codes.find(nnn => nnn === numToFind);
            if (found) {
                firstNum = n;
                secondNum = nn;
                thirdNum = numToFind;
                break;
            }
        }
      }
      if (firstNum && secondNum && thirdNum) {
        answer = firstNum * secondNum * thirdNum;
        console.log(`The answer is: ${answer}`);
        break;
      }
    }
  });
});