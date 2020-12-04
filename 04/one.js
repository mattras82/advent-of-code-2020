//@ts-check
fetch('https://adventofcode.com/2020/day/4/input').then(r => {
    r.text().then(t => {
        const required = ['byr','iyr','eyr','hgt','hcl','ecl','pid'];
        const documents = t.split('\n\n').map(s => s.trim());
        let answer = documents.reduce((total, d) => {
            if (!required.some(r => !d.includes(`${r}:`))) {
                total++;
            }
            return total;
        }, 0);
        console.log(`There are ${answer} valid passports`);
    });
});