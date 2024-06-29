import Link from "next/link"
import { Barlow } from "next/font/google"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"

const barlow = Barlow({ subsets: ["latin"], weight: ["600"] })

export function About() {
  return (
    <section
      id="info"
      className="relative z-40 flex flex-col items-center justify-center space-y-6 pb-8 pt-6 text-center md:pb-12 md:pt-10 lg:py-32"
    >
      <h3
        className={
          barlow.className +
          " font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl"
        }
      >
        {'"Keep Learning Keep Building"'}
        {/* SOFTWARE ENGINEER */}
      </h3>
      <h4>Who am I?</h4>
      <h4 className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
        Building and learning are two sides of the same coin for me.
        <br />
        Fueled by curiosity, I started building things for the{" "}
        <HoverCard>
          <HoverCardTrigger asChild>
            <span className="cursor-pointer rounded-sm bg-green-500 px-1 font-bold text-green-900">
              Web
            </span>
          </HoverCardTrigger>
          <HoverCardContent className=" border-2 border-slate-700 bg-slate-900">
            <ul className="text-left text-sm">
              <li>React/NextJS</li>
              <li>HTML/CSS/JS/TS</li>
              <li>NodeJS/API Rest/Graphql</li>
              <li>PostgreSQL/MongoDB/MySql</li>
            </ul>
          </HoverCardContent>
        </HoverCard>{" "}
        at a young age.
        <br /> <br />I believe in the power of sharing knowledge and am
        passionate about fostering strong leadership skills.
      </h4>

      <div className="space-x-4 pt-8">
        <Link
          href="https://www.linkedin.com/in/kushwaha-vikash"
          target="_blank"
          rel="noreferrer"
          className={cn(buttonVariants({ size: "lg" }))}
        >
          See on Linkedin
        </Link>

        <Link
          href={"https://github.com/KushwahaVikashJ"}
          target="_blank"
          rel="noreferrer"
          className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
        >
          GitHub
        </Link>
      </div>
    </section>
  )
}
