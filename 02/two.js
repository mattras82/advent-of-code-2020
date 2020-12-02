//@ts-check
fetch('https://adventofcode.com/2020/day/2/input').then(r => {
    r.text().then(t => {
        const passwords = t.split('\n');
        let answer = passwords.reduce((total, p) => {
            if (!p) return total;
            let [nums, rule, password] = p.split(' ');
            let char = rule[0];
            let [first, second] = nums.split('-').map(v => parseInt(v) - 1);
            if ((password.substr(first, 1) === char
                && password.substr(second, 1) !== char)
                || (password.substr(first, 1) !== char
                    && password.substr(second, 1) === char)) {
                total++;
            }
            return total;
        }, 0);
        console.log(`There are ${answer} valid passwords`);
    });
});