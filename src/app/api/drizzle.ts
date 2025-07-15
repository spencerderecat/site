import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import * as schema from './schema';

const connectionString = process.env.DATABASE_URL!;
console.log("here + ", connectionString);
const client = postgres(connectionString, { ssl: 'require' });

export const db = drizzle(client, { schema }); 