import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { CreateShowDto } from './dto/create-show.dto';
import { UpdateShowDto } from './dto/update-show.dto';
import { Show } from 'src/shows/entities/show.entity';

@Injectable()
export class ShowsService {
  private showsList: Show[] = [
    {
      id: uuidv4(),
      title: 'Peaky Blinders',
      coverUrl:
        'https://m.media-amazon.com/images/M/MV5BZjYzZDgzMmYtYjY5Zi00YTk1LThhMDYtNjFlNzM4MTZhYzgyXkEyXkFqcGdeQXVyMTE5NDQ1MzQ3._V1_.jpg',
      rating: 5,
    },
  ];

  create(createShowDto: CreateShowDto): Show {
    const newShow = {
      id: uuidv4(),
      ...createShowDto,
    };
    this.showsList.push(newShow);
    return newShow;
  }

  findAll(): Show[] {
    return this.showsList;
  }

  findOne(id: string): Show | undefined {
    return this.showsList.find((s: Show) => s.id === id);
  }

  update(id: string, updateShowDto: UpdateShowDto): Show {
    const idx = this.showsList.findIndex((s: Show) => s.id === id);
    if (idx < 0) throw new Error(`No TV show with id: ${id} found`);

    const updatedShow = {
      ...this.showsList[idx],
      ...updateShowDto,
    };
    this.showsList[idx] = updatedShow;
    return updatedShow;
  }

  remove(id: string): void {
    const idx = this.showsList.findIndex((s: Show) => s.id === id);
    if (idx < 0) throw new Error(`No TV show with id: ${id} found`);

    this.showsList.splice(idx, 1);
  }
}
