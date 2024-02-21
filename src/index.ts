import { WebScraper } from './classes/WebScraper.js';

(async () => {
  const webScraper = new WebScraper();

  const movies = await webScraper.scrapeMoviesFromSelectedYear(new Date().getFullYear());
  const deduplicatedMovies = webScraper.deduplicateMovies(movies);
  const sortedMovies = webScraper.sortMoviesByRating(deduplicatedMovies, 'descending');
  await webScraper.saveMoviesToCsv(sortedMovies, 'movies.csv');

  process.exit(0);
})().catch(error => {
  console.error(`[ERROR] ${error.message || error}`);
  process.exit(1);
});
