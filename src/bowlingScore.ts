export function calculateScore(rolls: Array<string>): number {
  let score: number = 0;
  for (let i = 0; i < 10; i++) {
    //iterate the input array only upto 10th frame inclusive
    // create an array containing bonus throws to get total / frame
    // for each iteration the frameRolls need to be empty
    let frameRolls: Array<string> = [];
    frameRolls.push(rolls[i]);
    if (rolls[i].length === 1) {
      //strike, get two more throws
      frameRolls.push(rolls[i + 1]);
      if (rolls[i + 1].length === 1) {
        // strike again
        // now just get the first roll of next frame
        frameRolls.push(rolls[i + 2].charAt(0));
      }
    }
    // not a strike but check for spare
    else if (rolls[i].includes("/")) frameRolls.push(rolls[i + 1].charAt(0));

    // neither a strike nor a spare
    score += addFrameRolls(frameRolls);
  }

  return score;
}

function addFrameRolls(frameRolls: Array<string>): number {
  let sum: number = 0;
  //iterate over input array
  frameRolls.forEach((item) => {
    if (item.includes("X")) sum += 10;
    else if (item.includes("/")) sum += 10;
    else {
      // read each throw
      sum += item.charAt(0) !== "-" ? parseInt(item.charAt(0)) : 0;
      if (item.length !== 1)
        sum += item.charAt(1) !== "-" ? parseInt(item.charAt(1)) : 0;
    }
  });

  return sum;
}
