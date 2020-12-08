//@ts-check

fetch('https://adventofcode.com/2020/day/8/input').then(r => {
    r.text().then(t => {
        const instructions = t.split('\n')
            .filter(s => s.trim());
        const checkVariation = (instructions) => {
            let answer = 0;
            for (let i = 0; i < instructions.length; i++) {
                let [op, arg] = instructions[i].split(' ');
                instructions[i] = 'visited';
                switch (op) {
                    case 'acc':
                        answer += parseInt(arg);
                        break;
                    case 'jmp':
                        i += parseInt(arg) - 1;
                        break;
                    case 'visited':
                        return false;
                }
            }
            return answer;
        };
        let answer = 0;
        for (let i = 0; i < instructions.length; i++) {
            let [op, arg] = instructions[i].split(' ');
            if (['jmp', 'nop'].includes(op)) {
                let newInstructions = [...instructions];
                let newOp = op === 'jmp' ? 'nop' : 'jmp';
                newInstructions[i] = `${newOp} ${arg}`;
                let check = checkVariation(newInstructions);
                if (check !== false) {
                    answer = check;
                    break;
                }
            }
        }
        console.log(`The accumulator is at ${answer} with the code fixed`);
    });
});