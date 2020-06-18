<p align="center">
  <a href="https://www.morningstar.com">
    <img alt="Morningstar" src="https://images.contentstack.io/v3/assets/blt4eb669caa7dc65b2/bltb383cfbf7fca7e83/5cae95f6529a88e3487efd50/AuthorPlaceholder_1x1.png" width="60" />
  </a>
</p>

<h1 align="center">
  Morningstar Equity Classification System
</h1>

This NPM package aims to enable lookups in the reference table of Morningstar as published on their [website](https://advisor.morningstar.com/Enterprise/VTC/MorningstarGlobalEquityClassStructure2019v3.pdf).

<p align="center">
  <a href="https://github.com/finstack-dev/morningstar-equity-classification-system/blob/master/LICENSE">
    <img src="https://img.shields.io/github/license/finstack-dev/morningstar-equity-classification-system?style=for-the-badge" alt="GitHub license" />
  </a>

  <a href="https://www.npmjs.com/package/morningstar-equity-classification-system">
    <img src="https://img.shields.io/npm/v/morningstar-equity-classification-system.svg?style=for-the-badge" alt="Current npm package version." />
  </a>

  <a href="https://www.npmjs.com/package/morningstar-equity-classification-system">
    <img src="https://img.shields.io/npm/dm/morningstar-equity-classification-system?style=for-the-badge" alt="NPM downloads" />
  </a>

  <a href="https://github.com/finstack-dev/morningstar-equity-classification-system/stargazers">
    <img src="https://img.shields.io/github/stars/finstack-dev/morningstar-equity-classification-system?style=for-the-badge" alt="GitHub stars" />
  </a>

  <a href="https://github.com/finstack-dev/morningstar-equity-classification-system/network">
    <img src="https://img.shields.io/github/forks/finstack-dev/morningstar-equity-classification-system?style=for-the-badge" alt="GitHub forks" />
  </a>

  <a href="https://github.com/finstack-dev/morningstar-equity-classification-system/issues">
    <img src="https://img.shields.io/github/issues/finstack-dev/morningstar-equity-classification-system?style=for-the-badge" alt="Current open issues" />
  </a>

  <a href="https://github.com/finstack-dev/morningstar-equity-classification-system/pulls">
    <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=for-the-badge" alt="PRs welcome!" />
  </a>

</p>

## Installation

### Yarn
```shell
yarn add morningstar-equity-classification-system
```

### NPM
```shell
npm install morningstar-equity-classification-system
```

## Usage

```javascript
import mecs from 'morningstar-equity-classification-system';

mecs.all()

/** Output:
 
  [
    { 
      "superSector": "Cyclical",
      "superSectorId": 1,
      "description": "..."
    },
    {
      ...
    }
  ] 
 
**/

mecs.search('finance');

/** Output:
 
  [
    { 
      "superSector": "...",
      "superSectorId": ...,
      "sector": "...",
      "sectorId": ...,
      "industryGroup": "...",
      "industryGroupId": ...,
      "industry": "...",
      "industryId": ...,
      "description": "..."
    },
    {
      ...
    }
  ] 
 
**/

mecs.find('31169148');

/** Output:
 
  { 
    "superSector": "...",
    "superSectorId": ...,
    "sector": "...",
    "sectorId": ...,
    "industryGroup": "...",
    "industryGroupId": ...,
    "industry": "...",
    "industryId": ...,
    "description": "..."
  }
 
**/

mecs.above('31169148');

/** Output:
 
  [
    { 
      "superSector": "...",
      "superSectorId": ...,
      "sector": "...",
      "sectorId": ...,
      "industryGroup": "...",
      "industryGroupId": ...,
      "industry": "...",
      "industryId": 31169148,
      "description": "..."
    },
    { 
      "superSector": "...",
      "superSectorId": ...,
      "sector": "...",
      "sectorId": ...,
      "industryGroup": "...",
      "industryGroupId": 31169,
      "description": "..."
    },
    { 
      "superSector": "...",
      "superSectorId": ...,
      "sector": "...",
      "sectorId": 311,
      "description": "..."
    },
    { 
      "superSector": "...",
      "superSectorId": 3,
      "description": "..."
    }
  ] 
 
**/


mecs.below('311');

/** Output:
 
  [
    { 
      "superSector": "...",
      "superSectorId": ...,
      "sector": "...",
      "sectorId": ...,
      "industryGroup": "...",
      "industryGroupId": 31169,
      "description": "..."
    },
    { 
      "superSector": "...",
      "superSectorId": ...,
      "sector": "...",
      "sectorId": ...,
      "industryGroup": "...",
      "industryGroupId": ...,
      "industry": "...",
      "industryId": 31169148,
      "description": "..."
    }
  ] 
 
**/


```

<p align="center" style="margin-top: 4rem">
  <a href="#">
    <img src="https://forthebadge.com/images/badges/built-with-love.svg?style=for-the-badge" alt="Build with love" />
  </a>
  <a href="#">
    <img src="https://forthebadge.com/images/badges/made-with-javascript.svg?style=for-the-badge" alt="Made with JavaScript" />
  </a>
  <br>
  <a href="#">
    <img src="https://forthebadge.com/images/badges/check-it-out.svg?style=for-the-badge" alt="Check it out!" />
  </a>
  <a href="#">
    <img src="https://forthebadge.com/images/badges/you-didnt-ask-for-this.svg?style=for-the-badge" alt="Check it out!" />
  </a>
</p>
