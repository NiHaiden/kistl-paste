import { createFileRoute } from '@tanstack/react-router'
import { Textarea } from '@/components/ui/textarea.tsx'
import { Button } from '@/components/ui/button.tsx'
import { createServerFn } from '@tanstack/react-start'
import fs from 'node:fs'
import { type Paste, pasteSchema } from '@/db/schema.ts'

const insertPaste = createServerFn({ method: 'POST' })
  .validator((newPaste: Paste) => pasteSchema.parse(newPaste))
  .handler(async ({ data: Paste }) => {

  })

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  return (
    <main
      className={'w-dvw h-dvh flex flex-col items-center justify-center gap-5'}
    >
      <h1 className={'text-2xl font-bold'}>Paste your content here.</h1>
      <div className={'w-2/3 min-h-[500px]'}>
        <Textarea className={'w-full h-full'} />
      </div>
      <div className={'w-2/3'}>
        <Button>Upload Paste</Button>
      </div>
    </main>
  )
}
