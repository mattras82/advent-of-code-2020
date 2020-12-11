//@ts-check

fetch('https://adventofcode.com/2020/day/11/input').then(r => {
    r.text().then(t => {
        const startArrangement = () => t.split('\n')
            .filter(s => s.trim());
        /**
         * 
         * @param {String[]} r 
         * @returns {Number}
         */
        const countOccupied = r => (r.join('').match(/#/g) || []).length;
        /**
         * 
         * @param {String} seat 
         * @param {String[]} layout 
         * @param {Number} x 
         * @param {Number} y 
         * @param {boolean} partTwo
         * @returns {String}
         */
        const processSeat = (seat, layout, x, y, partTwo) => {
            if (seat !== '.') {
                let yy = y > 0 ? y - 1 : y;
                let occupiedCount = 0;
                while (yy < y + 2
                    && yy < layout.length) {
                    let xx = x > 0 ? x - 1 : x;
                    while (xx < x + 2
                        && xx < layout[y].length) {
                        if (!(xx === x && yy === y)) {
                            let xxx = xx, yyy = yy;
                            if (partTwo) {
                                while (layout[yyy][xxx] === '.') {
                                    if (xx < x && yy === y) {
                                        xxx--;
                                        if (xxx < 0) {
                                            xxx = 0; 
                                            break;
                                        }
                                    } else if (xx < x && yy < y) {
                                        xxx--;
                                        yyy--;
                                        if (xxx < 0 || yyy < 0) {
                                            xxx++;
                                            yyy++;
                                            break;
                                        }
                                    } else if (xx === x && yy < y) {
                                        yyy--;
                                        if (yyy < 0) {
                                            yyy = 0;
                                            break;
                                        }
                                    } else if (xx > x && yy < y) {
                                        xxx++;
                                        yyy--;
                                        if (yyy < 0 || xxx > layout[y].length - 1) {
                                            yyy++;
                                            xxx--;
                                            break;
                                        }
                                    } else if (xx > x && yy === y) {
                                        xxx++;
                                        if (xxx > layout[y].length - 1) {
                                            xxx--;
                                            break;
                                        }
                                    } else if (xx < x && yy > y) {
                                        xxx--;
                                        yyy++;
                                        if (xxx < 0 || yyy > layout.length - 1) {
                                            xxx++;
                                            yyy--;
                                            break;
                                        }
                                    } else if (xx === x && yy > y) {
                                        yyy++;
                                        if (yyy > layout.length - 1) {
                                            yyy--;
                                            break;
                                        }
                                    } else if (xx > x && yy > y) {
                                        xxx++;
                                        yyy++;
                                        if (xxx > layout[y].length - 1 || yyy > layout.length - 1) {
                                            xxx--;
                                            yyy--;
                                            break;
                                        }
                                    }
                                }
                            }
                            if (layout[yyy][xxx] === '#') {
                                occupiedCount++;
                            }
                        }
                        xx++;
                    }
                    yy++;
                }
                if (seat === '#' && occupiedCount >= (partTwo ? 5 : 4)) {
                    seat = 'L';
                } else if (seat === 'L' && occupiedCount === 0) {
                    seat = '#';
                }
            }
            return seat;
        };
        /**
         * 
         * @param {String[]} rows 
         * @param {boolean} partTwo 
         */
        const cycle = (rows, partTwo = false) => {
            return [...rows].map((seats, y) => {
                return seats.split('').map((s, x) => {
                    return processSeat(s, rows, x, y, partTwo);
                }).join('');
            });
        };
        let oldCount = 0, newCount = 1, arrangement = startArrangement();
        while (oldCount !== newCount) {
            oldCount = countOccupied(arrangement);
            arrangement = cycle(arrangement);
            newCount = countOccupied(arrangement);
        }
        console.log(`There are ${newCount} seats occupied once the area stabilizes`);
        oldCount = 0, newCount = 1, arrangement = startArrangement();
        while (oldCount !== newCount) {
            oldCount = countOccupied(arrangement);
            arrangement = cycle(arrangement, true);
            newCount = countOccupied(arrangement);
        }
        console.log(`There are ${newCount} seats occupied once the area stabilizes with the new rules`);
    });
});