//@ts-check

fetch('https://adventofcode.com/2020/day/7/input').then(r => {
    r.text().then(t => {
        const rules = t.split('\n')
            .filter(s => s.trim() && !s.includes('no other bags'))
            .map(s => {
                return s.split(' bags contain ');
            });
        const bagCheck = (rules, list) => {
            let newList = [...list];
            rules = rules.filter(r => {
                if (list.some(b => r[1].includes(b))) {
                    newList.push(r[0]);
                    return false;
                }
                return true;
            });
            if (newList.length > list.length) {
                return bagCheck(rules, newList);
            }
            return list;
        };
        const myBag = ['shiny gold'];
        let acceptableBags = bagCheck(rules, myBag);
        let answer = acceptableBags.length - 1;
        console.log(`You can use ${answer} bags to hold your ${myBag[0]} bag`);
    });
});