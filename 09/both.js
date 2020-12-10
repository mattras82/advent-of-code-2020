//@ts-check

fetch('https://adventofcode.com/2020/day/9/input').then(r => {
    r.text().then(t => {
        const originalNumbers = t.split('\n')
            .filter(s => s.trim()).map(Number);
        let numbers = [...originalNumbers];
        let validNums = numbers.splice(0, 25);
        let invalidNum = undefined;
        while (invalidNum === undefined && numbers.length > 0) {
            let num = numbers[0];
            if (!validNums.some(v => validNums.includes(num - v))) {
                invalidNum = num;
            } else {
                validNums.shift();
                validNums.push(numbers.shift());
            }
        }
        console.log(`The first number that doesn't work is ${invalidNum}`);
        let answer;
        for (let i = 0; i < originalNumbers.length; i++) {
            let num = originalNumbers[i];
            if (num < invalidNum) {
                let x = i + 1;
                let testNum = invalidNum - num;
                while (testNum > 0) {
                    testNum -= originalNumbers[x];
                    x++;
                }
                if (testNum === 0) {
                    validNums = originalNumbers.splice(i, x - i)
                        .sort((a,b) => a - b);
                    answer = validNums[0] + validNums[validNums.length - 1];
                    break;
                }
            }
        }
        console.log(`The encryption weakness is ${answer}`);
    });
});