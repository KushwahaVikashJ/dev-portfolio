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
        {'"To teach is to learn twice"'}
        {/* SOFTWARE ENGINEER */}
      </h3>
      <h4>Who am I?</h4>
      <h4 className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
        Software Engineer with several years of experience as a Freelancer.
        <br />I began tinkering with{" "}
        <HoverCard>
          <HoverCardTrigger asChild>
            <span className="cursor-pointer rounded-sm bg-[#FF512F] px-1 font-bold text-amber-900">
              Mobile
            </span>
          </HoverCardTrigger>
          <HoverCardContent className=" border-2 border-slate-700 bg-slate-900">
            <ul className="text-left text-sm">
              <li>Android/iOS</li>
              <li>React Native/Flutter</li>
              <li>Java/Kotlin/Js&Ts/Swift</li>
            </ul>
          </HoverCardContent>
        </HoverCard>{" "}
        stuff when I was 12. Some time later I decided to pivot my focus to{" "}
        <HoverCard>
          <HoverCardTrigger asChild>
            <span className="cursor-pointer rounded-sm  border px-1 font-bold ">
              Web
            </span>
          </HoverCardTrigger>
          <HoverCardContent className=" border-2 border-slate-700 bg-slate-900">
            <ul className="text-left text-sm">
              <li>React/NextJS</li>
              <li>Angular</li>
              <li>HTML/CSS/JS/TS</li>
              <li>NodeJS/API Rest/Graphql</li>
              <li>PostgreSQL/MongoDB/MySql</li>
            </ul>
          </HoverCardContent>
        </HoverCard>{" "}
        Development,{" "}
        <HoverCard>
          <HoverCardTrigger asChild>
            <span className="cursor-pointer rounded-sm bg-green-500 px-1 font-bold text-green-900">
              UI/UX
            </span>
          </HoverCardTrigger>
          <HoverCardContent className=" border-2 border-slate-700 bg-slate-900">
            <ul className="text-left text-sm">
              <li>Figma/Adobe Suite</li>
              <li>Wireframes</li>
              <li>Responsive UIs</li>
              <li>Motion & Microinteractions</li>
              <li>Web Accessibility</li>
            </ul>
          </HoverCardContent>
        </HoverCard>{" "}
        and of course, I learned about{" "}
        <HoverCard>
          <HoverCardTrigger asChild>
            <span className="cursor-pointer rounded-sm border bg-white/10 px-1 font-bold ">
              Cloud
            </span>
          </HoverCardTrigger>
          <HoverCardContent className=" border-2 border-slate-700 bg-slate-900">
            <ul className="text-left text-sm">
              <li>AWS/GCP/Azure/DO</li>
              <li>CI/CD/DevOps</li>
              <li>Linux/Unix</li>
              <li>Docker/ECS/Serverless</li>
            </ul>
          </HoverCardContent>
        </HoverCard>
        .
        <br /> <br />
        Passionate about traveling and naturally curious. Currently, I am
        focused on becoming a great leader and continuing to share.
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
