import { Controller, Get } from '@nestjs/common';
import { Neo4jService } from '../services/neo4j/neo4j.service';

@Controller('sample')
export class SampleController {
  constructor(private readonly neo4jService: Neo4jService) {}

  @Get('query')
  async queryNeo4j(): Promise<any> {
    const result = await this.neo4jService.runQuery(
      'MATCH (n) RETURN count(n) as count',
    );
    return result.records.map((record) => record.toObject());
  }
}
