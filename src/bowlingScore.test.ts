import { calculateScore } from "./bowlingScore";
/******************************************
 A line contains 10 frames and max of 20 throws + bonus throws
 a bonus throw is give at the 10th frame
 for simplicity the folling format of scoring to be used:
(When scoring “X” indicates a strike, “/” indicates a spare, “-” indicates a miss)

    X X X X X X X X X X X X (12 rolls: 12 strikes) = 10 frames * 30 points = 300
    9- 9- 9- 9- 9- 9- 9- 9- 9- 9- (20 rolls: 10 pairs of 9 and miss) = 10 frames * 9 points = 90
    5/ 5/ 5/ 5/ 5/ 5/ 5/ 5/ 5/ 5/5 (21 rolls: 10 pairs of 5 and spare, with a final 5) = 10 frames * 15 points = 150
['X','X','X','X','X','X','X','X','X','X','X','X']  //score =300
['9-','9-','9-','9-','9-','9-','9-','9-','9-','9-',]  //score = 90
['5/','5/','5/','5/','5/','5/','5/','5/','5/','5/',5]  //score =150
['55','28','5-','51','22','--','46','5-','45','34']   //score =66
**********************************************/
describe("test calculateScore", () => {
  it("should return score = 300", () => {
    // a line is a max of 20 throw
    const rolls: Array<string> = [
      "X",
      "X",
      "X",
      "X",
      "X",
      "X",
      "X",
      "X",
      "X",
      "X",
      "X",
      "X",
    ];
    expect(calculateScore(rolls)).toBe(300);
  });

  it("should return score = 99", () => {
    const rolls: Array<string> = [
      "9-",
      "9-",
      "9-",
      "9-",
      "9-",
      "9-",
      "9-",
      "9-",
      "9-",
      "9-",
    ];
    expect(calculateScore(rolls)).toBe(90);
  });

  it("should return score = 150", () => {
    const rolls: Array<string> = [
      "5/",
      "5/",
      "5/",
      "5/",
      "5/",
      "5/",
      "5/",
      "5/",
      "5/",
      "5/",
      "5",
    ];
    expect(calculateScore(rolls)).toBe(150);
  });

  it("should return score = 66", () => {
    const rolls: Array<string> = [
      "55",
      "28",
      "5-",
      "51",
      "22",
      "--",
      "46",
      "5-",
      "45",
      "34",
    ];
    expect(calculateScore(rolls)).toBe(66);
  });
});
