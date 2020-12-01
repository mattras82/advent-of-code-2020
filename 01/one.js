const theNumber = 2020;
let firstNum = null, secondNum = null, answer = null;
fetch('https://adventofcode.com/2020/day/1/input').then(r => {
  r.text().then(t => {
    let codes = t.split('\n').map(Number);
    let length = Math.round(codes.length / 2);
    for (let i = 0; i <= length; i++) {
      let n = codes[i];
      for (let ii = i+1; ii < codes.length; ii++) {
        let nn = codes[ii];
        if (n + nn === theNumber) {
          firstNum = n;
          secondNum = nn;
          break;
        }
      }
      if (firstNum && secondNum) {
        answer = firstNum * secondNum;
        console.log(`The answer is: ${answer}`);
        break;
      }
    }
  });
});