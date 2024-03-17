import { Module } from '@nestjs/common';
import { FraudController } from './fraud.controller';
import { FraudService } from './fraud.service';
import { Neo4jService } from '../services/neo4j/neo4j.service';

@Module({
  controllers: [FraudController],
  providers: [FraudService, Neo4jService],
})
export class FraudModule {}
