import { Controller, Get, Query } from '@nestjs/common';
import { EnergyService } from './energy.service';
import { ApiTags, ApiQuery } from '@nestjs/swagger';

@ApiTags('EnergyService')
@Controller('energy')
export class EnergyController {

  constructor(private readonly energyService: EnergyService) {}

  @Get('billing-energuate')
  @ApiQuery({ name: 'nisID', required: true, type: Number })
  getEnerguateBilling(@Query('nisID') nisID: number) {
    return this.energyService.getEnerguateBilling(nisID);
  }

  @Get('billing-eegsa')
  @ApiQuery({ name: 'contador', required: true, type: String })
  @ApiQuery({ name: 'correlativo', required: true, type: Number })
  getEegsaBilling(
    @Query('contador') contador: string,
    @Query('correlativo') correlativo: Number
  ) {
    return this.energyService.getEegsaBilling(contador, correlativo);
  }
}
