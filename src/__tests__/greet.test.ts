import { greet } from '..';

test('Greeter', () => {
  expect(greet('Finstack')).toBe('Hello Finstack');
});
