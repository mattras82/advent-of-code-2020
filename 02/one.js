//@ts-check
fetch('https://adventofcode.com/2020/day/2/input').then(r => {
    r.text().then(t => {
        const passwords = t.split('\n');
        let answer = passwords.reduce((total, p) => {
            if (!p) return total;
            let pieces = p.split(' ');
            let rule = pieces[1].substr(0, 1);
            let reg = new RegExp(rule, 'g');
            let matches = pieces[2].match(reg);
            if (matches) {
                let minMax = pieces[0].split('-');
                let min = parseInt(minMax[0]), 
                    max = parseInt(minMax[1]);
                if (matches.length >= min 
                    && matches.length <= max) {
                    total++;
                }
            }
            return total;
        }, 0);
        console.log(`There are ${answer} valid passwords`);
    });
});