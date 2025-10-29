import { Test, TestingModule } from '@nestjs/testing';
import { EnergyService } from './energy.service';

describe('EnergyService', () => {
  let service: EnergyService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        {
          provide: EnergyService,
          useValue: {
            getEnerguateBilling: jest.fn(),
          },
        },
      ],
    }).compile();

    service = module.get(EnergyService);
  });


  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
