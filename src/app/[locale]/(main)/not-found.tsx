"use client"

import { Link } from "@/i18n/routing"

export default function NotFound() {
  return (
    <div className="px-4">
      <h1 className="text-3xl font-fancy text-center md:text-left">
        Not Found
      </h1>
      <hr className="my-2" />
      <p className="text-lg">This page does not exist.</p>
      <Link href="/"></Link>
    </div>
  )
}
