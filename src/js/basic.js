export default function getHealth({ name, health }) {
  if (health > 50) return 'healthy';
  if (health >= 15) return 'wounded';
  return 'critical';
}

export function sortByHealth(heroes) {
  return heroes.sort((a, b) => (a.health < b.health ? 1 : -1));
}

export function isNumber(string) {
  if (string === '') throw new Error('Error isNumber: input string is empty');
  const number = Number.parseFloat(string);
  if (!number) throw new Error('Error isNumber: input string is not a number');
  if (!Number.isFinite(number)) throw new Error('Error isNumber: number is not finite');
  if (number < 0) throw new Error('Error isNumber: input number smaller then 0');
  return number;
}

export function findBy(property, name) {
  return function (element) {
    return element[property] === name;
  };
}
