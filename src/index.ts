import { WebScraper } from './classes/WebScraper';

(async () => {
  const webScraper = new WebScraper();

  const movies = await webScraper.scrapeMoviesFromSelectedYear(new Date().getFullYear());
  const deduplicatedMovies = webScraper.deduplicateMovies(movies);
  const sortedMovies = webScraper.sortMoviesByRating(deduplicatedMovies, 'descending');
  webScraper.saveMoviesToCsv(sortedMovies, 'movies.csv');
})().catch(error => {
  console.error(`[ERROR] ${error.message || error}`);
  process.exit(1);
});
