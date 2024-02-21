import { VODService } from '../interfaces/VODService.js';

export class VODServices {
  public static readonly vodServices: VODService[] = [
    { name: 'Netflix', url: 'https://www.filmweb.pl/ranking/vod/netflix/film' },
    { name: 'HBO Max', url: 'https://www.filmweb.pl/ranking/vod/hbo_max/film' },
    { name: 'Canal+', url: 'https://www.filmweb.pl/ranking/vod/canal_plus_manual/film' },
    { name: 'Disney+', url: 'https://www.filmweb.pl/ranking/vod/disney/film' },
  ];
}
