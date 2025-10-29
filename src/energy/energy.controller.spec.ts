import { Test, TestingModule } from '@nestjs/testing';
import { EnergyController } from './energy.controller';
import { EnergyService } from './energy.service';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule } from '@nestjs/config';

describe('EnergyController (integración)', () => {
  let controller: EnergyController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        HttpModule,
        ConfigModule.forRoot({
          isGlobal: true
        }),
      ],
      controllers: [EnergyController],
      providers: [EnergyService],
    }).compile();

    controller = module.get<EnergyController>(EnergyController);
  });

  it('debería retornar datos reales desde el servicio Energuate', async () => {
    const nisID = 6191010;

    const result = await controller.getEnerguateBilling(nisID);
    expect(result).toHaveProperty('success', true);
    expect(result).toHaveProperty('data');
    expect(result.data).toHaveProperty('nombreEmpresa');
  });

});
