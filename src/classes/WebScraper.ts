import axios from 'axios';
import * as cheerio from 'cheerio';
import { VODServices } from './VODServices';
import { VODService } from 'src/interfaces/VODService';
import { Movie } from 'src/interfaces/Movie';

export class WebScraper {
  constructor(private vodServices: VODService[] = VODServices.vodServices) {}

  private scrapeMoviesFromWeb = async (service: VODService, year: number): Promise<Movie[]> => {
    const { data } = await axios.get(`${service.url}/${year}`);
    const $ = cheerio.load(data);

    const titles = $('.rankingType__title')
      .map((_index, element) => $(element).text().trim())
      .get();

    const ratings = $('.rankingType__rate--value')
      .map((_index, element) => parseFloat($(element).text().trim().replace(',', '.')))
      .get();

    const movies = titles
      .map((title, index) => ({
        title: title,
        service: service.name,
        rating: ratings[index],
      }))
      .slice(0, 10);

    console.log(`[LOG] Scraped ${movies.length} movies from ${service.name}.`);
    return movies;
  };

  public scrapeMoviesFromSelectedYear = async (year: number): Promise<Movie[]> => {
    const scrapePromises = this.vodServices.map(service => this.scrapeMoviesFromWeb(service, year));
    const moviesPerService = await Promise.all(scrapePromises);

    const movies = moviesPerService.reduce((acc, serviceMovies) => {
      acc.push(...serviceMovies);
      return acc;
    }, []);

    console.log(`[LOG] Scraped ${movies.length} movies in total from ${year} year.`);
    return movies;
  };

  public deduplicateMovies = (movies: Movie[]): Movie[] => {
    const deduplicatedMovies: { [title: string]: Movie } = {};

    for (const movie of movies) {
      if (!deduplicatedMovies[movie.title] || deduplicatedMovies[movie.title].rating < movie.rating) {
        deduplicatedMovies[movie.title] = movie;
      }
    }

    console.log(`[LOG] Deduplicated ${movies.length} movies to ${Object.keys(deduplicatedMovies).length}.`);
    return Object.values(deduplicatedMovies);
  };
}
