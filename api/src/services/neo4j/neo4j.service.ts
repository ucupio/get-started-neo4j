import { Injectable } from '@nestjs/common';
import neo4j, { Driver, Session, Result } from 'neo4j-driver';

@Injectable()
export class Neo4jService {
  private readonly driver: Driver;

  constructor() {
    this.driver = neo4j.driver(
      'bolt://localhost:7687',
      neo4j.auth.basic('neo4j', 'ddi12345!'),
    );
  }

  async runQuery(query: string, params?: Record<string, any>): Promise<Result> {
    const session: Session = this.driver.session();
    try {
      return await session.run(query, params);
    } finally {
      await session.close();
    }
  }

  async close() {
    await this.driver.close();
  }
}
