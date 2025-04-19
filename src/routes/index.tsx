import { createFileRoute } from '@tanstack/react-router'
import { createServerFn } from '@tanstack/react-start'
import {useState} from "react";
import type {Paste} from '@/db/schema.ts';
import { pasteTable} from '@/db/schema.ts';
import { Textarea } from '@/components/ui/textarea.tsx'
import { Button } from '@/components/ui/button.tsx'
import {  pasteSchema } from '@/db/schema.ts'
import { db } from '@/db'

const insertPaste = createServerFn({ method: 'POST' })
  .validator((newPaste: Paste) => pasteSchema.parse(newPaste))
  .handler(async ({ data }) => {
    await db.insert(pasteTable).values(data);

  })

export const Route = createFileRoute('/')({
  component: App,
})

function App() {

  const [pasteContent, setPasteContent] = useState<string>('')

  const handleTextareaChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    setPasteContent(event.target.value)
  }
  
  return (
    <main
      className={'w-dvw h-dvh flex flex-col items-center justify-center gap-5'}
    >
      <h1 className={'text-2xl font-bold'}>Paste your content here.</h1>
      <div className={'w-2/3 min-h-[500px]'}>
        <Textarea className={'w-full h-full'} onChange={handleTextareaChange} />
      </div>
      <div className={'w-2/3'}>
        <Button onClick={() => insertPaste({data: {content: pasteContent, language: "js"}})}>Upload Paste</Button>
      </div>
    </main>
  )
}
