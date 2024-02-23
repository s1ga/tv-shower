import { Injectable } from '@nestjs/common';
import { CreateShowDto } from './dto/create-show.dto';
import { UpdateShowDto } from './dto/update-show.dto';
import { Show } from 'src/shows/entities/show.entity';

@Injectable()
export class ShowsService {
  private showsList: Show[] = [
    {
      id: '0',
      title: 'Peaky Blinders',
      coverUrl:
        'https://m.media-amazon.com/images/M/MV5BZjYzZDgzMmYtYjY5Zi00YTk1LThhMDYtNjFlNzM4MTZhYzgyXkEyXkFqcGdeQXVyMTE5NDQ1MzQ3._V1_.jpg',
      rating: 5,
    },
  ];

  create(createShowDto: CreateShowDto) {
    return 'This action adds a new show';
  }

  findAll(): Show[] {
    return this.showsList;
  }

  findOne(id: string): Show | undefined {
    return this.showsList.find((s: Show) => s.id === id);
  }

  update(id: number, updateShowDto: UpdateShowDto) {
    return `This action updates a #${id} show`;
  }

  remove(id: number) {
    return `This action removes a #${id} show`;
  }
}
