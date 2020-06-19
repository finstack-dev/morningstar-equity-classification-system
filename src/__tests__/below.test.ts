import { below } from '..';

test('Below 1', () => expect(Array.isArray(below(1))).toBe(true));

test('Below 1', () => expect(below(1)).toHaveLength(92));

test('Below 101', () => expect(below(101)).toHaveLength(21));

test('Below 10150', () => expect(below(10150)).toHaveLength(7));

test('Below 10150060', () => expect(below(10150060)).toHaveLength(1));
