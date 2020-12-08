//@ts-check

fetch('https://adventofcode.com/2020/day/6/input').then(r => {
    r.text().then(t => {
        const groups = t.split('\n\n').map(s => s.trim());
        const pattern = new RegExp('([a-z])(?!.*\\1)', 'g');
        const answer = groups.reduce((total, g) => {
            const people = g.split('\n');
            let list = people[0].match(pattern);
            for (let i = 1; i < people.length; i++) {
                list = list.filter(c => people[i].includes(c));
            }
            return total + list.length;
        }, 0);
        console.log(`The sum of the popular question counts is ${answer}`);
    });
});