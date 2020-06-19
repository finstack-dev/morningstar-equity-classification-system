import { find } from '..';

test('Find by code 1', () =>
  expect(find(1)).toHaveProperty('superSector', 'Cyclical'));

test('Find by code 311', () =>
  expect(find(311)).toHaveProperty('sector', 'Technology'));

test('Find by code 10110', () =>
  expect(find(10110)).toHaveProperty('industryGroup', 'Agriculture'));

test('Find by code 10110010', () =>
  expect(find(10110010)).toHaveProperty('industry', 'Agricultural Inputs'));
