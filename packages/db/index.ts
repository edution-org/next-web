import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";

import * as post from "./schema/post";

export const schema = { ...post };

export { pgTable as tableCreator } from "./schema/_table";

export * from "drizzle-orm";

const client = new Pool({
  connectionString: process.env.DATABASE_URL,
});

await client.connect();

export const db = drizzle(client, { schema });
