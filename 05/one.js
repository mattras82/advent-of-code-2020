//@ts-check

const getReduction = (str, min, max, i = 0) => {
    const char = str[i];
    const half = (max - min + 1) / 2;
    const higher = ['B','R'].includes(char);
    if (half > 1) {
        min = higher ? (min + half) : min;
        max = higher ? max : (min + half - 1);
        return getReduction(str, min, max, i+1);
    }
    return higher ? max : min;
};

fetch('https://adventofcode.com/2020/day/5/input').then(r => {
    r.text().then(t => {
        const passes = t.split('\n').map(s => s.trim());
        let answer = passes.reduce((total, p) => {
            let row = getReduction(p, 0, 127);
            let col = getReduction(p, 0, 7, 7);
            let id = row * 8 + col;
            return id > total ? id : total;
        }, 0);
        console.log(`The highest set ID is ${answer}`);
    });
});