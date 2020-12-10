//@ts-check

fetch('https://adventofcode.com/2020/day/10/input').then(r => {
    r.text().then(t => {
        const adapters = t.split('\n')
            .filter(s => s.trim())
            .map(Number)
            .sort((a, b) => a - b);
        adapters.unshift(0);
        adapters.push(adapters[adapters.length - 1] + 3);
        let permutations = [...adapters].map(v => 0);
        permutations[0] = 1;
        adapters.forEach((v, i) => {
            for (let x = i+1; x < adapters.length; x++) {
                if (adapters[x] - v > 3) break;
                permutations[x] += permutations[i];
            }
        });
        let answer = permutations.pop();
        console.log(`The number of distinct arrangements is ${answer}`);
    });
});