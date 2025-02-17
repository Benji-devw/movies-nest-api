import { Injectable } from '@nestjs/common';

@Injectable()
export class MoviesService {
  private readonly movies = [
    {
      id: 1,
      title: 'Inception',
      director: 'Christopher Nolan',
      categories: ['Sci-Fi', 'Thriller'],
    },
    {
      id: 2,
      title: 'The Matrix',
      director: 'Lana Wachowski, Lilly Wachowski',
      categories: ['Sci-Fi', 'Action'],
    },
    {
      id: 3,
      title: 'Interstellar',
      director: 'Christopher Nolan',
      categories: ['Sci-Fi', 'Drama'],
    },
  ];

  getMovies(): any[] {
    return this.movies;
  }
}
