import { eq } from 'drizzle-orm'
import { pasteTable } from '@/db/schema.ts'
import { db } from '@/db/index.ts'

export async function fetchPaste(pasteId: string) {
  const result = await db
    .select({
      id: pasteTable.id,
      content: pasteTable.content,
      language: pasteTable.language,
      createdAt: pasteTable.createdAt,
    })
    .from(pasteTable)
    .where(eq(pasteTable.id, pasteId))
    .limit(1)

  return result[0]
}
