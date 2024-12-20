import { Link } from "@/i18n/routing";

export default function SeeMoreButton({
  href,
  label,
}: {
  href: string
  label: string
}) {
  return (
    <div className="flex justify-end w-full">
      <Link
        href={href}
        className="text-xl text-blue-500 font-semibold underline hover:text-blue-700 transition-colors"
      >
        {label}
      </Link>
    </div>
  );
}
