//@ts-check

fetch('https://adventofcode.com/2020/day/12/input').then(r => {
    r.text().then(t => {
        const instructions = t.split('\n')
            .filter(s => s.trim());
        let east = 0, north = 0, facing = 90;
        const getFacingDirection = f => {
            if (f === 90) return 'E';
            if (f === 180) return 'S';
            if (f === 270) return 'W';
            return 'N';
        };
        const setFacingDirection = (dir, val, f) => {
            val *= dir === 'L' ? -1 : 1;
            f += val;
            while (f >= 360) {
                f -= 360;
            }
            while (f < 0) {
                f += 360;
            }
            return f;
        };
        instructions.forEach(set => {
            let move = set[0];
            let value = parseInt(set.substr(1));
            if (move === 'F') {
                move = getFacingDirection(facing);
            }
            switch (move) {
                case 'N':
                    north += value;
                    break;
                case 'S':
                    north -= value;
                    break;
                case 'E':
                    east += value;
                    break;
                case 'W':
                    east -= value;
                    break;
                case 'L':
                case 'R':
                    facing = setFacingDirection(move, value, facing);
                    break;
            }
        });
        let answer = Math.abs(north) + Math.abs(east);
        console.log(`The Manhattan distance is ${answer}`);
    });
});