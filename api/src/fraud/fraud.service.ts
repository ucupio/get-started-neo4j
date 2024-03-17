import { Injectable } from '@nestjs/common';
import { Neo4jService } from '../services/neo4j/neo4j.service';
import { Record as Neo4jRecord } from 'neo4j-driver';

@Injectable()
export class FraudService {
  constructor(private readonly neo4jService: Neo4jService) {}

  async detectFraud(): Promise<string> {
    const result = await this.neo4jService.runQuery(
      'MATCH (n) RETURN count(n) as count',
    );
    const record: Neo4jRecord | undefined = result.records[0];

    if (record && record.has('count')) {
      const count = record.get('count').toString();
      return `Total nodes in Neo4j: ${count}`;
    } else {
      return 'No nodes found in Neo4j';
    }
  }
}
