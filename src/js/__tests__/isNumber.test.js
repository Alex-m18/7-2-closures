import { isNumber } from '../basic';

test('should return number', () => {
  expect(isNumber('10')).toBe(10);
  expect(isNumber('10.0')).toBe(10);
  expect(isNumber('10.5')).toBe(10.5);
  expect(isNumber('10,5')).toBe(10);
  expect(isNumber('10.5 lkj')).toBe(10.5);
});

test('should return error', () => {
  expect(() => { isNumber(''); }).toThrow();
  expect(() => { isNumber('sdf123'); }).toThrow();
  expect(() => { isNumber('asd'); }).toThrow();
  expect(() => { isNumber('-10'); }).toThrow();
  expect(() => { isNumber('Infinity'); }).toThrow();
});
