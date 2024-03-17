import { Controller, Get } from '@nestjs/common';
import { FraudService } from './fraud.service';

@Controller('fraud')
export class FraudController {
  constructor(private readonly fraudService: FraudService) {}

  @Get()
  async detectFraud(): Promise<string> {
    return this.fraudService.detectFraud();
  }
}
