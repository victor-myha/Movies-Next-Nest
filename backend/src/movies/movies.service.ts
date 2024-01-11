import { Injectable } from '@nestjs/common';
import { Movie } from './dto/movie.dto';

@Injectable()
export class MoviesService {
  movies: Movie[] = [
    {
      id: '1',
      title: 'The Shawshank Redemption',
      year: 1994,
      img: 'https://upload.wikimedia.org/wikipedia/uk/8/87/%D0%92%D1%82%D0%B5%D1%87%D0%B0_%D0%B7_%D0%A8%D0%BE%D1%83%D1%88%D0%B5%D0%BD%D0%BA%D0%B0.jpg',
    },
    {
      id: '2',
      title: 'The Godfather',
      year: 1972,
      img: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSjHTmjQb_Zr4_J4UyzgbTFHg6cf6KAT9EPIPu43lxLu3YfJR1l',
    },
  ];

  getAll() {
    return this.movies;
  }

  create(movieData) {
    console.log('movieData', movieData);
    this.movies.push({
      id: (this.movies.length + 1).toString(),
      ...movieData,
    });
    return this.movies;
  }

  edit(movieData) {
    const index = this.movies.findIndex((movie) => movie.id === movieData.id);
    this.movies.splice(index, 1, { ...this.movies[index], ...movieData });
    return this.movies;
  }
}
