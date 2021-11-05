import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { TriageDto } from './dto/triage.dto';
import { Triage } from './triage.entity';
import { TriagesService } from './triages.service';

@UseGuards(AuthGuard('jwt'))
@Controller('triages')
export class TriagesController {
  constructor(private readonly triagesService: TriagesService) {}

  @Post()
  async create(@Body() triage: TriageDto): Promise<Triage> {
    return await this.triagesService.create(triage);
  }

  @Get()
  async findAll() {
    return await this.triagesService.findAll();
  }

  @Get(':id')
  async findOneById(@Param('id') id: number): Promise<Triage> {
    const post = await this.triagesService.findOneById(id);

    if (!post) {
      throw new NotFoundException('Essa triagem não existe');
    }

    return post;
  }

  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() triage: TriageDto,
  ): Promise<Triage> {
    const { numberOfAffectedRows, updatedTriage }: any =
      await this.triagesService.update(id, triage);

    if (numberOfAffectedRows === 0) {
      throw new NotFoundException('Essa triagem não existe');
    }

    return updatedTriage;
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    const deleted = await this.triagesService.delete(id);

    if (deleted === 0) {
      throw new NotFoundException('Essa triagem não existe');
    }

    return 'Excluído com sucesso';
  }
}
