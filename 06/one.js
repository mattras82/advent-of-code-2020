//@ts-check

fetch('https://adventofcode.com/2020/day/6/input').then(r => {
    r.text().then(t => {
        const groups = t.split('\n\n').map(s => s.trim());
        const pattern = new RegExp('([a-z])(?!.*\\1)', 'g');
        let answer = groups.reduce((total, g) => {
            let count = g.replace(/\n/g,'').match(pattern).length;
            return total + count;
        }, 0);
        console.log(`The sum of the question counts is ${answer}`);
    });
});