import { fetchPaste } from '@/db/fetch'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/paste/$pasteid')({
  component: RouteComponent,
  loader: async ({ params: { pasteid } }) => {
    return await fetchPaste(pasteid)
  },
})

function RouteComponent() {
  const { pasteid } = Route.useParams()
  const data = Route.useLoaderData()
  console.log(pasteid)

  return <div>Hello {data.content}</div>
}
