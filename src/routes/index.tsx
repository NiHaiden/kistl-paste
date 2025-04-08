import { createFileRoute } from '@tanstack/react-router'
import { Textarea } from '@/components/ui/textarea.tsx'
import {Button} from "@/components/ui/button.tsx";

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  return (
    <main className={'w-dvw h-dvh flex flex-col items-center justify-center gap-5'}>
      <h1 className={'text-2xl font-bold'}>Paste your content here.</h1>
      <div className={'w-2/3 min-h-[500px]'}>
        <Textarea className={"w-full h-full"} />
      </div>
        <div className={"w-2/3"}>
            <Button>Upload Paste</Button>
        </div>
    </main>
  )
}
