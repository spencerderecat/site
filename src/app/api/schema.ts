import { pgTable, serial, varchar, doublePrecision } from 'drizzle-orm/pg-core';

export const pins = pgTable('pins', {
  id: serial('id').primaryKey(),
  lat: doublePrecision('lat').notNull(),
  lng: doublePrecision('lng').notNull(),
  name: varchar('name', { length: 100 }).notNull(),
  spot: varchar('spot', { length: 100 }).notNull(),
  note: varchar('note', { length: 500 }).notNull(),
});

export type Pin = typeof pins.$inferSelect;
export type NewPin = typeof pins.$inferInsert; 