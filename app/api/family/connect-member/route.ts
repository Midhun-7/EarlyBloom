// app/api/family/connect-members/route.ts
import { NextResponse } from 'next/server';
import driver from '@/lib/neo4j';

export async function POST(req: Request) {
  const session = driver.session();
  const { sourceId, targetId, relationshipType } = await req.json();

  try {
    await session.run(
      `
      MATCH (a:Person {id: $sourceId}), (b:Person {id: $targetId})
      MERGE (a)-[r:${relationshipType.toUpperCase().replace(/ /g, '_')}]->(b)
      RETURN type(r)
      `,
      { sourceId, targetId }
    );

    return NextResponse.json({ success: true });
  } catch (e: any) {
    return NextResponse.json({ error: e.message }, { status: 500 });
  } finally {
    await session.close();
  }
}
