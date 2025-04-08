import { Link } from '@tanstack/react-router'

export default function Header() {
  return (
    <header className="p-4 flex gap-2 bg-white text-black justify-between shadow-sm">
      <div className={"flex flex-row gap-3 items-center justify-center"}>
        <h1 className={"font-bold text-3xl"}>Kistl Paste</h1>
        <Link to="/">Home</Link>
      </div>
    </header>
  )
}
