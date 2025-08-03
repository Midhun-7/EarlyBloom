// /app/api/family/get-graph/route.ts
import { NextResponse } from 'next/server';
import driver from '@/lib/neo4j';

export async function GET() {
  const session = driver.session();
  try {
    const result = await session.run(`
      MATCH (p:Person)
      OPTIONAL MATCH (p)-[r]->(q:Person)
      RETURN p, r, q
    `);

    const nodes = new Map<string, any>();
    const edges: any[] = [];

    for (const record of result.records) {
      const p = record.get('p');
      const q = record.get('q');
      const r = record.get('r');

      nodes.set(p.identity.toString(), {
        id: p.identity.toString(),
        ...p.properties,
      });

      if (q && r) {
        nodes.set(q.identity.toString(), {
          id: q.identity.toString(),
          ...q.properties,
        });

        edges.push({
          from: p.identity.toString(),
          to: q.identity.toString(),
          type: r.type,
        });
      }
    }

    return NextResponse.json({
      nodes: Array.from(nodes.values()),
      edges,
    });
  } catch (e: any) {
    return NextResponse.json({ error: e.message }, { status: 500 });
  } finally {
    await session.close();
  }
}
