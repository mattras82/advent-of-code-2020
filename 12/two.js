//@ts-check

fetch('https://adventofcode.com/2020/day/12/input').then(r => {
    r.text().then(t => {
        const instructions = t.split('\n')
            .filter(s => s.trim());
        let east = 0, north = 0, waypoint = [10,1];
        const rotateWaypoint = (dir, val, w) => {
            let negIndex = dir === 'R' ? 1 : 0;
            while (val > 0) {
                let newWp = [...w];
                newWp[0] = w[1];
                newWp[1] = w[0];
                newWp[negIndex] *= -1;
                w = [...newWp];
                val -= 90;
            }
            return w;
        };
        instructions.forEach(set => {
            let move = set[0];
            let value = parseInt(set.substr(1));
            switch (move) {
                case 'F':
                    east += waypoint[0] * value;
                    north += waypoint[1] * value;
                    break;
                case 'N':
                    waypoint[1] += value;
                    break;
                case 'S':
                    waypoint[1] -= value;
                    break;
                case 'E':
                    waypoint[0] += value;
                    break;
                case 'W':
                    waypoint[0] -= value;
                    break;
                case 'L':
                case 'R':
                    waypoint = rotateWaypoint(move, value, waypoint);
                    break;
            }
        });
        let answer = Math.abs(north) + Math.abs(east);
        console.log(`The Manhattan distance is ${answer}`);
    });
});