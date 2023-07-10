import { WebScraper } from '../classes/WebScraper';
import { Movie } from 'src/interfaces/Movie';

describe('WebScraper', () => {
  let webScraper: WebScraper;

  beforeEach(() => (webScraper = new WebScraper()));
  afterEach(() => jest.resetAllMocks());

  describe('deduplicateMovies', () => {
    it('should deduplicate movies based on title and keep the one with the highest rating', () => {
      const movies: Movie[] = [
        { title: 'Movie 1', service: 'Service 1', rating: 8.5 },
        { title: 'Movie 2', service: 'Service 2', rating: 7.9 },
        { title: 'Movie 1', service: 'Service 3', rating: 9.1 },
      ];

      const deduplicatedMovies = webScraper.deduplicateMovies(movies);

      expect(deduplicatedMovies).toEqual([
        { title: 'Movie 1', service: 'Service 3', rating: 9.1 },
        { title: 'Movie 2', service: 'Service 2', rating: 7.9 },
      ]);
    });
  });

  describe('sortMoviesByRating', () => {
    const movies: Movie[] = [
      { title: 'Movie 1', service: 'Service 1', rating: 8.5 },
      { title: 'Movie 2', service: 'Service 2', rating: 7.9 },
    ];

    it('should sort movies by rating in ascending order', () => {
      const sortedMovies = webScraper.sortMoviesByRating(movies, 'ascending');

      expect(sortedMovies).toEqual([
        { title: 'Movie 2', service: 'Service 2', rating: 7.9 },
        { title: 'Movie 1', service: 'Service 1', rating: 8.5 },
      ]);
    });

    it('should sort movies by rating in descending order', () => {
      const sortedMovies = webScraper.sortMoviesByRating(movies, 'descending');

      expect(sortedMovies).toEqual([
        { title: 'Movie 1', service: 'Service 1', rating: 8.5 },
        { title: 'Movie 2', service: 'Service 2', rating: 7.9 },
      ]);
    });

    it('should return movies as-is when sorting parameter is not provided', () => {
      const sortedMovies = webScraper.sortMoviesByRating(movies);

      expect(sortedMovies).toEqual([
        { title: 'Movie 1', service: 'Service 1', rating: 8.5 },
        { title: 'Movie 2', service: 'Service 2', rating: 7.9 },
      ]);
    });
  });
});
