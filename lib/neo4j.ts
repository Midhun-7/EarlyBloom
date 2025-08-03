// /lib/neo4j.ts

import neo4j from 'neo4j-driver';

const driver = neo4j.driver(
  'bolt://localhost:7687', // Update if using remote URI
  neo4j.auth.basic('neo4j', 'appu9677')
);

// ✅ Verify connection is active on startup
async function verifyConnection() {
  try {
    const session = driver.session();
    await session.run('RETURN 1');
    console.log('✅ Connected to Neo4j successfully');
    await session.close();
  } catch (error) {
    console.error('❌ Failed to connect to Neo4j:', error);
  }
}

verifyConnection(); // Run once during startup

export default driver;
