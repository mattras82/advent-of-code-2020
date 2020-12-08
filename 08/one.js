//@ts-check

fetch('https://adventofcode.com/2020/day/8/input').then(r => {
    r.text().then(t => {
        const instructions = t.split('\n')
            .filter(s => s.trim());
        let answer = 0;
        for (let i = 0; i < instructions.length; i++) {
            let [op, arg] = instructions[i].split(' ');
            switch (op) {
                case 'acc':
                    answer += parseInt(arg);
                    break;
                case 'jmp':
                    i += parseInt(arg) - 1;
                    break;
                case 'visited':
                    i = instructions.length;
                    break;
            }
            instructions[i] = 'visited';
        }
        console.log(`The accumulator is at ${answer} before the code looped`);
    });
});