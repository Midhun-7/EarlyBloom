import { NextResponse } from 'next/server';
import driver from '@/lib/neo4j';

export async function POST(req: Request) {
  const session = driver.session();
  const body = await req.json();

  const {
    name,
    relationships,
    hasNeuroCondition,
    neuroConditionDetails,
    disorders,
    geneticDisorder
  } = body;

  try {
    const result = await session.run(
  `
  CREATE (p:Person {
    id: randomUUID(),
    name: $name,
    relationships: $relationships,
    hasNeuroCondition: $hasNeuroCondition,
    neuroConditionDetails: $neuroConditionDetails,
    disorders: $disordersJson,
    geneticDisorder: $geneticDisorder
  })
  RETURN p
  `,
  {
    name,
    relationships,
    hasNeuroCondition,
    neuroConditionDetails: neuroConditionDetails || '',
    disordersJson: JSON.stringify(disorders || {}),
    geneticDisorder: geneticDisorder || '',
  }
);

    const node = result.records[0].get('p').properties;
    // Optionally parse disorders back before sending to client
    node.disorders = JSON.parse(node.disorders);

    console.log('Node created:', node);

    return NextResponse.json({ success: true, node });
  } catch (e: any) {
    console.error('Neo4j Error:', e);
    return NextResponse.json({ error: e.message }, { status: 500 });
  } finally {
    await session.close();
  }
}
