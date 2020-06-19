import { above } from '..';

test('Above 1', () => expect(Array.isArray(above(1))).toBe(true));

test('Above 1', () => expect(above(1)).toHaveLength(1));

test('Above 102', () => expect(above(102)).toHaveLength(2));

test('Above 10260', () => expect(above(10260)).toHaveLength(3));

test('Above 10250010', () => expect(above(10250010)).toHaveLength(4));
