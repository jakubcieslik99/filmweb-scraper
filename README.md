## Filmweb Scraper 🤖

📌 Simple scraper used to scrape data from Filmweb service related to best rated movies from most popular polish VOD
platforms (Netflix, Disney+, HBO Max, Canal+).

![GitHub top language](https://img.shields.io/github/languages/top/jakubcieslik99/filmweb-scraper)
![GitHub repo size](https://img.shields.io/github/repo-size/jakubcieslik99/filmweb-scraper)

## Features

- Getting lists of titles and ratings of at most top 10 movies from top 4 VOD platforms
- Deduplicating titles if they are available on more than one platform
- Sorting titles by rating
- Saving list of titles, ratings and platforms to .csv file

## Run scraper in development mode

- Clone repository

```bash
  git clone https://github.com/jakubcieslik99/filmweb-scraper.git
```

ℹ️ Instructions for running scraper locally:

- Navigate to the scraper directory and install dependencies

```bash
  cd filmweb-scraper
  pnpm install
```

- Run scraper in development mode

```bash
  pnpm run dev
```

- Scrape data and save to .csv file in development mode

```bash
  pnpm run start
```

- Run unit tests

```bash
  pnpm run test
```

## Run scraper in transpiled mode

ℹ️ Instructions for building and running scraper in transpiled mode

- Transpile

```bash
  pnpm run build
```

- Scrape data and save to .csv file in transpiled mode

```bash
  pnpm install --prod
  pnpm run prod
```

## Feedback

If you have any feedback, please reach out to me at ✉️ contact@jakubcieslik.com

## Authors

- [@jakubcieslik99](https://www.github.com/jakubcieslik99)
