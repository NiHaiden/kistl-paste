import {pgTable, timestamp, uuid, varchar} from "drizzle-orm/pg-core";
import { z } from "zod";

export const pasteTable = pgTable("pastes", {
    id: uuid("id").primaryKey().defaultRandom().unique(),
    content: varchar(),
    language: varchar(),
    createdAt: timestamp('created_at').notNull().defaultNow(),
})

export const pasteSchema = z.object({
    id: z.string().uuid().optional(),
    content: z.string(),
    language: z.string(),
    createdAt: z.date().optional(),
});

export type Paste = z.infer<typeof pasteSchema>;