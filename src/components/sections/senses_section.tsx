import { Link } from "@/i18n/routing"

export default function SensesSection() {
  return (
    <div className="">
      <h1 className="text-4xl font-fancy">Senses</h1>
      <div className="flex flex-col gap-4">
        <Link className="text-xl" href="/sight">
          Sight
        </Link>
        <Link className="text-xl" href="/hearing">
          Hearing
        </Link>
        <Link className="text-xl" href="/smell">
          Smell
        </Link>
        <Link className="text-xl" href="/taste">
          Taste
        </Link>
        <Link className="text-xl" href="/touch">
          Touch
        </Link>
      </div>
    </div>
  )
}
