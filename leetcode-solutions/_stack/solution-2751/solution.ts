function survivedRobotsHealths(positions: number[], healths: number[], directions: string): number[] {
  type Robot = [number, number, string, number];
  let robots: Robot[] = [];
  for (let i = 0; i < positions.length; i++) {
    robots.push([positions[i], healths[i], directions[i], i]);
  }
  robots.sort((a, b) => a[0] - b[0]);
  let stack: Robot[] = [];
  let res: (number | null)[] = new Array(robots.length).fill(null);
  for (let i = 0; i < robots.length; i++) {
    let robot: Robot | null = robots[i];
    if (robot[2] === 'R') {
      stack.push(robot);
    } else {
      while (stack.length) {
        let robotR = stack[stack.length - 1];
        if (robotR[1] > robot[1]) {
          robotR[1]--;
          robot = null;
          break;
        } else if (robotR[1] < robot[1]) {
          stack.pop();
          robot[1]--;
        } else {
          stack.pop();
          robot = null;
          break;
        }
      }
      if (robot) {
        res[robot[3]] = robot[1];
      }
    }
  }
  for (let i = 0; i < stack.length; i++) {
    res[stack[i][3]] = stack[i][1];
  }
  return res.filter(item => item !== null) as number[];
};