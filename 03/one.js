//@ts-check
fetch('https://adventofcode.com/2020/day/3/input').then(r => {
    r.text().then(t => {
        const tree = '#';
        const slopes = t.split('\n').map(s => s.trim());
        let i = 0;
        let answer = slopes.reduce((total, s) => {
            if (!s) return total;
            if (s[i] === tree) {
                total++;
            }
            i += 3;
            if (i >= s.length) {
                i -= s.length;
            }
            return total;
        }, 0);
        console.log(`There are ${answer} trees in your path`);
    });
});