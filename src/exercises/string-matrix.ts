//Given a string representing a matrix of numbers, return the rows and columns of that matrix.

const stringToMatrix = (str: string): number[][] =>
  str
    .split(`\n`)
    .map((i) => i.split(" "))
    .map((i) => i.map((i) => parseInt(i)));

export { stringToMatrix };
