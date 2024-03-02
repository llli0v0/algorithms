function isNumber(s: string): boolean {
  let inf = ['Infinity', '-Infinity', '+Infinity'];
  if (inf.indexOf(s) > -1) return false;
  return !isNaN(Number(s));
};