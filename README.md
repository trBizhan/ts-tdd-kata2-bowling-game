# TypeScript project with Tests

This repository can be used as a template for creating a TypeScript project using Jest for testing.

## Instructions

- Click the "Use this template" button

- Click "Create new repository"

- Give your repository a name and click "Create repository from template"

- Clone down your new repository to your computer

- Navigate to the directory on your command line

- Run `npm install` followed by `npm test` to run the tests

## Additional information gathered before attempting to solve the problem

A game or line of bowling = 10 frames
in total there are 10 pins

2 tries in each frame

1st try , all pins knocked -> a strike and end of frame

2 tries and all pins knocked -> a spare

scores:
no strike or spare, just total number of pins

spare, 10 + number of pins knocked in next throw
For example, you if score a spare in the first frame,
say an 6 and a 4, then got an 8 and a 1 in the second frame,
you would score 18 (6+4+8) for the first frame,
and 9 for the second frame, making a total of 27 after two frames.

strike, 10 + total of pins knocked in next two throws
in additon to total of pins in your next thows
eg. throw 1 -> a stirk
throw 2 and 3 in next frame -> 7, 1 pins
therefore after two frames 10 + 8 + 8

last frame, a spare, gets to throw one more bonus roll
last frame, a strike, get to throw two more bonus rolls

bonus throws are not repeated, it is only given once as per condition
above

    Multiple strikes would be scored like so:

        Frame 1, ball 1: 10 pins (strike)
        Frame 2, ball 1: 10 pins (strike)
        Frame 3, ball 1: 4 pins
        Frame 3, ball 2: 2 pins
        The score from these throws is:

                Frame one: 10 + (10 + 4)= 24
                Frame two: 10 + (4 + 2) = 16
                Frame three: 4 + 2 = 6

                TOTAL = 46

With the simpler non-standard system of scoring, the above example would be scored as below:

                Frame one: 10
                Frame two: 10 x 2 = 20
                Frame three: (4 x 3) + (2 x 2) = 16

                TOTAL = 46

    The most points that can be scored in one frame is 30 points
    (10 for the original strike, plus strikes in the two following frames)
    The most points that can be scored in one game is 300 points which is a perfect game.

    A player who bowls a strike in the tenth (final) frame is awarded two extra
    balls so as to allow the awarding of bonus points.
    If both these balls also result in ten pins knocked down each,
    a total of 30 points (10 + 10 + 10) is awarded for the frame.
    These bonus points only count as the bonus for the strike and not on their own.

Suggested Test Cases

(When scoring “X” indicates a strike, “/” indicates a spare, “-” indicates a miss)

    X X X X X X X X X X X X (12 rolls: 12 strikes) = 10 frames * 30 points = 300
    9- 9- 9- 9- 9- 9- 9- 9- 9- 9- (20 rolls: 10 pairs of 9 and miss) = 10 frames * 9 points = 90
    5/ 5/ 5/ 5/ 5/ 5/ 5/ 5/ 5/ 5/5 (21 rolls: 10 pairs of 5 and spare, with a final 5) = 10 frames * 15 points = 150

===========

simpler frames:

    23 45 34 56 00 12 56 67 00 03 ==== 20 rolls, 10 pairs score 62

==============

# spare in each frame

10 x 10 = 100
10 x 5 = 50
total = 150

# All strikes

1 [0] + [1] + [2] 10+10+10 and so on 10 x 30 = 300
2 [1] + [2] + [3]
until 10th frame or iteration
10 _ 10 = 100
20 _ 9 = 180
2 \* 10 = 20
total 300

the rest just count the scores in each frame.

need to loop an array of frames/rolls
if strike, add next two throws
if spare, add next throw
all other cases, just add the total number of pins knocked
end loop at the 10th iteration
