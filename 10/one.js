//@ts-check

fetch('https://adventofcode.com/2020/day/10/input').then(r => {
    r.text().then(t => {
        const adapters = t.split('\n')
            .filter(s => s.trim())
            .map(Number)
            .sort((a,b) => a > b ? 1 : (b > a ? -1 : 0));
        let oneDiff = 0, threeDiff = 0, joltage = 0;
        adapters.forEach(j => {
            let diff = j - joltage;
            switch (diff) {
                case 1:
                    oneDiff++;
                    break;
                case 3:
                    threeDiff++;
            }
            joltage = j;
        });
        threeDiff++;
        let answer = oneDiff * threeDiff;
        console.log(`The product of the differences is ${answer}`);
    });
});