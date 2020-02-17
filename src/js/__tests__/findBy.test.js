import { findBy } from '../basic';

test('should return right object', () => {
  const expected = (property, name) => {
    const finder = findBy(property, name);
    return [
      { name: 'маг', type: 'character', description: 'Персонаж, обладающий магическими способностями' },
      { name: 'заклинание', type: 'attack', description: 'Атака магическим заклинанием' },
      { name: 'урон', type: 'help', description: 'Страница описания элемента интерфейса' },
    ].filter(finder);
  };

  expect(expected('name', 'урон')).toEqual(
    [{ name: 'урон', type: 'help', description: 'Страница описания элемента интерфейса' }],
  );

  expect(expected('type', 'attack')).toEqual(
    [{ name: 'заклинание', type: 'attack', description: 'Атака магическим заклинанием' }],
  );

  expect(expected('description', 'Персонаж, обладающий магическими способностями')).toEqual(
    [{ name: 'маг', type: 'character', description: 'Персонаж, обладающий магическими способностями' }],
  );
});
