//@ts-check

fetch('https://adventofcode.com/2020/day/7/input').then(r => {
    r.text().then(t => {
        const rules = new Map();
        t.split('\n')
            .filter(s => s.trim())
            .forEach(s => {
                let [bag, contents] = s.split(' bags contain ');
                let contentsArr = [];
                if (contents !== 'no other bags.') {
                    let contentStrings = contents.split(', ');
                    contentsArr = contentStrings.map(c => {
                        let [num, bag1, bag2] = c.split(' ');
                        return {
                            bag: `${bag1} ${bag2}`,
                            num: parseInt(num)
                        };
                    });
                };
                rules.set(bag, contentsArr);
            });
        const bagCount = (bag, acc = 0) => {
            let bagList = rules.get(bag);
            if (bagList.length) {
                bagList.forEach(b => {
                    acc += b.num;
                    acc += b.num * bagCount(b.bag);
                });
            }
            return acc;
        };
        const myBag = 'shiny gold';
        const answer = bagCount(myBag);
        console.log(`A single ${myBag} bag contains ${answer} other bags`);
    });
});