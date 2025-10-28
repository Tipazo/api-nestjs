import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EnergyModule } from './energy/energy.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    EnergyModule,
        ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
