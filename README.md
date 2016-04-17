# mlb-game-day

A JavaScript wrapper around the MLB Game Day API that can be used on the server or browser.

# Install

```bash
$ npm install mlb-game-day -S
```

# Use with TypeScript

You can use this library with TypeScript. To do this, you'll also need to grab a couple
external type definition dependencies ([axios](https://github.com/mzabriskie/axios) and [es6-promise](https://github.com/stefanpenner/es6-promise)).

I use [typings](https://github.com/typings/typings) to handle TypeScript type definition dependencies.

```bash
$ npm install typings -g
```

then from the directory of your application

```bash
$ typings install axios es6-promise --ambient
```

typings will install the type definitions to a ```typings``` folder which contains a 
```main.d.ts``` file which can referenced from your project's typescript config.

# API

### Methods

- [`gameIds()`](#gameIds)
- [`getGameBoxScoreById(id)`](#getGameBoxScoreById)
- [`getGameEventsById(id)`](#getGameEventsById)

## Methods

### <a id='gameIds'></a>[`gameIds(date)`](#gameIds)

Retrieves a list of game id's for a given date. If no date is provided, the current date is used.

#### Arguments

1. `date` (*Date*): A date for which game id's will be retrieved.

##### Returns

(*Axios.IPromise<string[]>*): A list of string id's.

##### Example

```ts
import { gameIds } from 'mlb-game-day';

const date = new Date('4/8/2016');

gameIds(date).then(console.log);

// ['2016_04_08_nyamlb_detmlb_1', ... ]
```

<hr>

### <a id='getGameBoxScoreById'></a>[`getGameBoxScoreById(id)`](#getGameBoxScoreById)

Retrieves the box score for the given game id.

#### Arguments

1. `id` (*String*): The game id

##### Returns

(*Promise<BoxScore>*): The box score for the given id.

##### Example

```ts
import { gameIds, getGameBoxScoreById } from 'mlb-game-day';

const date = new Date('4/8/2016');

gameIds(date).then(ids => {
  getGameBoxScoreById(ids[0]).then(console.log)
});

// { home_sname: 'San Francisco', ... }
```

<hr>

### <a id='getGameEventsById'></a>[`getGameEventsById(id)`](#getGameEventsById)

Retrieves the game events for the given game id.

#### Arguments

1. `id` (*String*): The game id

##### Returns

(*Promise<Events>*): The events for the given id.

##### Example

```ts
import { gameIds, getGameEventsById } from 'mlb-game-day';

const date = new Date('4/8/2016');

gameIds(date).then(ids => {
  getGameEventsById(ids[0]).then(console.log)
});

// { inning: [ { num: 1, ... }, ... ], ... }
```

# Use Locally

```bash
$ npm install && npm run typings
```

# LICENSE

MIT