"use client"

import { cn } from "@/lib/utils"
import { buttonVariants } from "./ui/button"
import { Icons } from "./icons"
import { useRouter } from "next/navigation"

export default function GoBackButton({ path }: { path: string }) {
  const router = useRouter()
  return (
    <button
      type="button"
      onClick={() => {
        router.push(path)
      }}
      className={cn(
        buttonVariants({ variant: "ghost" }),
        "absolute left-[-200px] top-14 hidden xl:inline-flex"
      )}
    >
      <Icons.chevronLeft className="mr-2 h-4 w-4" />
      Go back
    </button>
  )
}
