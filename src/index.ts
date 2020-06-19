import data from './data/data.json';

export const all = () => data;

export const search = (keyword: string) => {
  if (!keyword) {
    return [];
  }

  return data.filter(
    (item) =>
      item.superSector.toLowerCase().includes(keyword.toLowerCase()) ||
      item.sector?.toLowerCase().includes(keyword.toLowerCase()) ||
      item.industryGroup?.toLowerCase().includes(keyword.toLowerCase()) ||
      item.industry?.toLowerCase().includes(keyword.toLowerCase()),
  );
};

export const find = (id: number | string) => {
  const $id = typeof id === 'string' ? parseInt(id) : id;

  return data.find(
    (item) =>
      item.superSectorId === $id ||
      item.sectorId === $id ||
      item.industryGroupId === $id ||
      item.industryId === $id,
  );
};

export const above = (id: number | string) => {
  const MIN_CODE_LEN = 1;
  const $id = id.toString();

  const results = [];
  for (let i = $id.length; i >= MIN_CODE_LEN; i--) {
    const result = find($id.substr(0, i));
    if (result) {
      results.push(result);
    }
  }
  return results;
};

export const below = (id: number | string) => {
  let ids: Array<number> = [];
  const $id = id.toString();

  for (let i = 0; i < data.length; i++) {
    const item = data[i];

    if (item.industryId) {
      ids.push(item.industryId);
    } else if (item.industryGroupId) {
      ids.push(item.industryGroupId);
    } else if (item.sectorId) {
      ids.push(item.sectorId);
    } else {
      ids.push(item.superSectorId);
    }
  }

  ids = Array.from(new Set(ids));
  ids = ids.sort((a, b) => a - b);

  const results = [];

  for (let p = 0; p < ids.length; p++) {
    const _id = ids[p];

    if (new RegExp('^' + $id.toString()).test(_id.toString())) {
      const result = find(_id);
      results.push(result);
    }
  }

  return results;
};
