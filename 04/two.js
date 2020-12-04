//@ts-check
const fieldCheck = (field, val) => {
    let passes = false;
    switch (field) {
        case 'byr':
            if (val.length === 4) {
                let num = parseInt(val);
                passes = num > 1919 && num < 2003;
            }
            break;
        case 'iyr':
            if (val.length === 4) {
                let num = parseInt(val);
                passes = num > 2009 && num < 2021;
            }
            break;
        case 'eyr':
            if (val.length === 4) {
                let num = parseInt(val);
                passes = num > 2019 && num < 2031;
            }
            break;
        case 'hgt':
            if (val.endsWith('cm')) {
                let num = parseInt(val.replace('cm', ''));
                passes = num > 149 && num < 194;
            }
            if (val.endsWith('in')) {
                let num = parseInt(val.replace('in', ''));
                passes = num > 58 && num < 77;
            }
            break;
        case 'hcl':
            passes = /^#[0-9a-f]{6}$/.test(val);
            break;
        case 'ecl':
            passes = ['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth'].indexOf(val) > -1;
            break;
        case 'pid':
            passes = val.length === 9 && /^[0-9]{9}$/.test(val);
            break;
        case 'cid':
            passes = true;
            break;
    }
    return passes;
};
const filterFields = p => {
    let [field, val] = p.trim().split(':');
    return fieldCheck(field, val);
}
fetch('https://adventofcode.com/2020/day/4/input').then(r => {
    r.text().then(t => {
        const documents = t.split('\n\n').map(s => s.trim());
        let answer = documents.reduce((total, d) => {
            let validFields = d.split(/[\s]+/).filter(filterFields);
            let validCount = /cid:/g.test(d) ? 8 : 7;
            if (validFields.length === validCount) {
                total++;
            }
            return total;
        }, 0);
        console.log(`There are ${answer} valid passports`);
    });
});