const latestClock = (a, b, c, d) => {
    const validTimeReg = /(?:[01]\d|2[0-3]):[0-5]\d/;
    
    const allCombos = [];
    const makeCombos = (dgts, str = '') => {
      !dgts.length && validTimeReg.test(str) && allCombos.push(str);
      dgts.length === 2 && (str += ':');
      dgts.forEach((dgt, idx) => makeCombos(dgts.filter((_, i) => i !== idx), str + dgt));
    }
    
    makeCombos([a, b, c, d]);
    
    return allCombos.sort().at(-1) || '';
  }

  console.log(latestClock(1, 2, 3, 4))

  console.log(latestClock(1, 2, 3, 'a'));