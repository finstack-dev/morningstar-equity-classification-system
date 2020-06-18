import { search } from '..';

test('Search', () => expect(Array.isArray(search('Finance'))).toBe(true));

test('Search for super sector: Cyclical', () =>
  expect(search('Cyclical')).toHaveLength(91));

test('Search for sector: Basic Materials', () =>
  expect(search('Basic Materials')).toHaveLength(21));

test('Search for industry group: Metals & Mining', () =>
  expect(search('Metals & Mining')).toHaveLength(7));

test('Search for industry: Copper', () =>
  expect(search('Copper')).toHaveLength(1));

test('Search for industry: Other Industrial Metals & Mining', () =>
  expect(search('Other Industrial Metals & Mining')).toMatchObject([
    {
      description:
        'Companies that mine, refine, produce, smelt, and mill industrial ores, including copper, lead, zinc, radium, vanadium, nickel, tin, titanium, and other related materials.',
      industry: 'Other Industrial Metals & Mining',
      industryGroup: 'Metals & Mining',
      industryGroupId: 10150,
      industryId: 10150030,
      sector: 'Basic Materials',
      sectorId: 101,
      superSector: 'Cyclical',
      superSectorId: 1,
    },
  ]));

test('Search for nothing', () => expect(search('')).toHaveLength(0));
test('Search for nothing', () => expect(search('Unknown')).toHaveLength(0));
