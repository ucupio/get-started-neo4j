import { Module } from '@nestjs/common';
import { Neo4jService } from '../services/neo4j/neo4j.service';
import { SampleController } from './sample.controller';

@Module({
  controllers: [SampleController],
  providers: [Neo4jService],
})
export class SampleModule {}
