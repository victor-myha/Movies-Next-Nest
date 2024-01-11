import { Body, Controller, Get, Post } from '@nestjs/common';
import { Movie } from './dto/movie.dto';
import { MoviesService } from './movies.service';

@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @Get('getAll')
  getAll(): Movie[] {
    return this.moviesService.getAll();
  }

  @Post('create')
  create(@Body() movieData: Movie) {
    console.log('movieData 1', movieData);
    return this.moviesService.create(movieData);
  }

  @Post('edit')
  edit(@Body() movieData: Movie) {
    return this.moviesService.edit(movieData);
  }
}
