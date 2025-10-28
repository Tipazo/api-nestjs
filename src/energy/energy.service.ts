import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import { ConfigService } from '@nestjs/config';
import { extractFields } from '../utils/extract-fields';
import { energuateFieldMap } from './mappers/energuate.mapper';
import { 
  EnerguateResponse, 
  EnerguateResponseResult 
} from './interfaces/billing-response.interface';

@Injectable()
export class EnergyService {

  constructor(private readonly httpService: HttpService, private configService: ConfigService) {}

  async getEnerguateBilling(nisID: Number): Promise<EnerguateResponseResult> {

    const url = `${this.configService.get<string>('ENERGUATE_URL')}=${nisID}`;

    try {
      const response = await firstValueFrom(this.httpService.get(url));
      const data = response.data;

      if (data.error === true) {
        return {
          success: false,
          message: data.message || 'Check the values of parameters',
        };
      }

      return {
        success: true,
        message: "complete successfully",
        data: extractFields<EnerguateResponse>(data, energuateFieldMap),
      };

    } catch (error) {

      console.error('Error on response API Energuate:', error.message);

      throw new Error('Error on response API Energuate');
    }
  }

  async getEegsaBilling(contador: string, correlativo: Number) {
    return "To-do"
  }
  
}
