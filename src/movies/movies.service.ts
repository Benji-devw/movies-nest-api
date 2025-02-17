import { Injectable } from '@nestjs/common';

@Injectable()
export class MoviesService {
  private readonly movies = [
    {
      id: 1,
      title: 'Inception',
      director: 'Christopher Nolan',
      categories: ['Sci-Fi', 'Thriller'],
      videoLink: 'https://example.com/inception',
    },
    {
      id: 2,
      title: 'The Matrix',
      director: 'Lana Wachowski, Lilly Wachowski',
      categories: ['Sci-Fi', 'Action'],
      videoLink: 'https://example.com/the-matrix',
    },
    {
      id: 3,
      title: 'Interstellar',
      director: 'Christopher Nolan',
      categories: ['Sci-Fi', 'Drama'],
      videoLink: 'https://example.com/interstellar',
    },
  ];

  getMovies(): any[] {
    return this.movies;
  }

  getMovie(id: number): any {
    return this.movies.find((movie) => movie.id === id);
  }
}
