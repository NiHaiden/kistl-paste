import {pgTable, timestamp, uuid, varchar} from "drizzle-orm/pg-core";

export const pasteTable = pgTable("pastes", {
    id: uuid("id").primaryKey().defaultRandom().unique(),
    content: varchar(),
    language: varchar(),
    createdAt: timestamp('created_at').notNull().defaultNow(),
})