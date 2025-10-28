import { Test, TestingModule } from '@nestjs/testing';
import { EnergyController } from './energy.controller';
import { EnergyService } from './energy.service';

describe('EnergyController', () => {
  let controller: EnergyController;
  let service: EnergyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EnergyController],
      providers: [
        {
          provide: EnergyService,
          useValue: {
            getEnerguateBilling: jest.fn().mockResolvedValue({
              accountId: 5183007,
            }),
          },
        },
      ],
    }).compile();

    controller = module.get<EnergyController>(EnergyController);
    service = module.get<EnergyService>(EnergyService);
  });

  it('debería retornar la facturación de Energuate para un nisID válido', async () => {
    const result = await controller.getEnerguateBilling(5183007);

    expect(service.getEnerguateBilling).toHaveBeenCalledWith(5183007);
    expect(result).toEqual({
      accountId: 5183007,
      status: 'Activo',
      lastPayment: '2025-10-01',
      nextDue: '2025-11-01',
    });
  });
});