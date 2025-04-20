import { useState } from 'react'
import { createFileRoute } from '@tanstack/react-router'
import { createServerFn } from '@tanstack/react-start'
import type { Paste } from '@/db/schema.ts'
import { pasteSchema, pasteTable } from '@/db/schema.ts'
import { Textarea } from '@/components/ui/textarea.tsx'
import { Button } from '@/components/ui/button.tsx'
import { db } from '@/db'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

// List of programming languages
const programmingLanguages = [
  { value: 'javascript', label: 'JavaScript' },
  { value: 'typescript', label: 'TypeScript' },
  { value: 'python', label: 'Python' },
  { value: 'java', label: 'Java' },
  { value: 'csharp', label: 'C#' },
  { value: 'cpp', label: 'C++' },
  { value: 'php', label: 'PHP' },
  { value: 'ruby', label: 'Ruby' },
  { value: 'go', label: 'Go' },
  { value: 'rust', label: 'Rust' },
  { value: 'swift', label: 'Swift' },
  { value: 'kotlin', label: 'Kotlin' },
  { value: 'dart', label: 'Dart' },
]

const insertPaste = createServerFn({ method: 'POST' })
  .validator((newPaste: Paste) => pasteSchema.parse(newPaste))
  .handler(async ({ data }) => {
    await db.insert(pasteTable).values(data)
  })

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  const [pasteContent, setPasteContent] = useState<string>('')
  const [language, setLanguage] = useState<string>('javascript')

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
      <div className={'w-2/3 flex gap-4'}>
        <Select value={language} onValueChange={setLanguage}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select a language" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {programmingLanguages.map((language) => (
                <SelectItem key={language.value} value={language.value}>
                  {language.label}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
        <Button
          className="ml-auto"
          onClick={() =>
            insertPaste({ data: { content: pasteContent, language: language } })
          }
        >
          Upload Paste
        </Button>
      </div>
    </main>
  )
}
