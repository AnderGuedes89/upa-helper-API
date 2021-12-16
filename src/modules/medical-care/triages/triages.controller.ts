import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { TriageDto } from './dto/triage.dto';
import { Triage } from './triage.entity';
import { TriagesService } from './triages.service';

@UseGuards(AuthGuard('jwt'))
@Controller('triages')
@ApiTags('Triages')
export class TriagesController {
  constructor(private readonly triagesService: TriagesService) {}

  @Post()
  @ApiOperation({ summary: 'Cadastra uma Triagem' })
  async createTriage(@Body() triage: TriageDto): Promise<Triage> {
    return await this.triagesService.createTriage(triage);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Retorna uma Triagem especifica' })
  async getTriageById(@Param('id') id: number): Promise<Triage> {
    const triage = await this.triagesService.getTriageById(id);

    if (!triage) {
      throw new NotFoundException('Essa triagem não existe');
    }

    return triage;
  }

  @Put(':id')
  @ApiOperation({ summary: 'Altera os dados de uma Triagem especifica' })
  async updateTriage(
    @Param('id') id: number,
    @Body() triage: TriageDto,
  ): Promise<Triage> {
    const { numberOfAffectedRows, updatedTriage }: any =
      await this.triagesService.updateTriage(id, triage);

    if (numberOfAffectedRows === 0) {
      throw new NotFoundException('Essa triagem não existe');
    }

    return updatedTriage;
  }
}
