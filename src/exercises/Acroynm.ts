// "Convert a long phrase to its acronym"

const toAcronym = (str: string): string =>
  str
    .toLowerCase()
    .split(" ")
    .map((i) => i.charAt(0))
    .reduce((acc, cur) => acc + cur);

export { toAcronym };
