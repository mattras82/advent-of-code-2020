//@ts-check
fetch('https://adventofcode.com/2020/day/3/input').then(r => {
    r.text().then(t => {
        const tree = '#';
        const slopes = t.split('\n').filter(s => s.trim().length);
        const template = [
            {r:1,d:1},
            {r:3,d:1},
            {r:5,d:1},
            {r:7,d:1},
            {r:1,d:2}
        ];
        let totals = [];
        template.forEach(t => {
            let x = 0, y = 0;
            let treeCount = 0;
            while(y < slopes.length) {
                let s = slopes[y];
                if (s[x] === tree) {
                    treeCount++;
                }
                x += t.r;
                y += t.d;
                if (x >= s.length) {
                    x -= s.length;
                }
            }
            totals.push(treeCount);
        });
        let answer = totals.reduce((t, s) => t * s, 1);
        console.log(`There are ${answer} trees in your path`);
    });
});