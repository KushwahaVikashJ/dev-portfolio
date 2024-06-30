"use client"
import StripeColorIcon from "@/components/Icons/brands/StripeColorIcon"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { LinkIcon } from "lucide-react"
import Image from "next/image"
import FigmaColorIcon from "@/components/Icons/brands/FigmaColorIcon"
import AWSColorIcon from "@/components/Icons/brands/AWSColorIcon"
import PinterestColorIcon from "@/components/Icons/brands/PinterestColorIcon"
import OpenAIColorIcon from "@/components/Icons/brands/OpenAIColorIcon"
import VercelColorIcon from "@/components/Icons/brands/VercelColorIcon"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"
import ReactColorIcon from "@/components/Icons/brands/ReactColorIcon"
import NextColorIcon from "@/components/Icons/brands/NextColorIcon"
import NodeColorIcon from "@/components/Icons/brands/NodeColorIcon"
import MongodbColorIcon from "@/components/Icons/brands/MongodbColorIcon"
import GraphqlColorIcon from "@/components/Icons/brands/GraphqlColorIcon"
import PostmanColorIcon from "@/components/Icons/brands/PostmanColorIcon"
import UnsplashColorIcon from "@/components/Icons/brands/UnsplashColorIcon"
import ShadcnColorIcon from "@/components/Icons/brands/ShadcnColorIcon"
import TailwindColorIcon from "@/components/Icons/brands/TailwindColorIcon"

const itemsGeneral = [
  {
    title: "Open AI",
    description: "AI development environment",
    icon: <OpenAIColorIcon className="h-10 w-10" />,
  },
  {
    title: "React",
    description: "Frontend development",
    icon: <ReactColorIcon className="h-10 w-10" />,
  },
  {
    title: "Next.js",
    description: "Frontend development",
    icon: <NextColorIcon className="h-10 w-10" />,
  },
  {
    title: "Node.js",
    description: "Backend development",
    icon: <NodeColorIcon className="h-10 w-10" />,
  },
  {
    title: "Mongodb",
    description: "Backend development",
    icon: <MongodbColorIcon className="h-10 w-10" />,
  },
  {
    title: "Graphql",
    description: "Backend development",
    icon: <GraphqlColorIcon className="h-10 w-10" />,
  },
  {
    title: "Postman",
    description: "Backend development",
    icon: <PostmanColorIcon className="h-10 w-10" />,
  },
  {
    title: "Figma",
    description: "Design",
    icon: <FigmaColorIcon className="h-10 w-10" />,
    theme: "ligth",
  },
  {
    title: "Vercel",
    description: "Frontend Deployment",
    icon: <VercelColorIcon className="m-3 h-10 w-10" />,
  },
  {
    title: "AWS",
    description: "EC2, Lambdas, ECS, S3",
    icon: <AWSColorIcon className="h-10 w-10" />,
    theme: "ligth",
  },
  {
    title: "Stripe",
    description: "Payments",
    icon: <StripeColorIcon className="h-10 w-10" />,
    theme: "ligth",
  },
]

const itemsInspiration = [
  {
    title: "ShadcnUi",
    description: "Beautifully designed components",
    url: "https://ui.shadcn.com/",
    icon: <ShadcnColorIcon className="h-10 w-10" />,
    theme: "dark",
  },
  {
    title: "TailwindCss",
    description: "A utility-first CSS framework",
    url: "https://tailwindcss.com/",
    icon: <TailwindColorIcon className="h-10 w-10" />,
    theme: "dark",
  },
  {
    title: "React Icons",
    description: "Include popular icons",
    url: "https://react-icons.github.io/react-icons/",
    icon: <ReactColorIcon className="h-10 w-10" />,
    theme: "dark",
  },
  {
    title: "Unsplash",
    description: "Beatiful free images",
    url: "https://unsplash.com/",
    icon: <UnsplashColorIcon className="h-10 w-10" />,
    theme: "dark",
  },
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
]

const goodDesign = [
  {
    title: "Makepill",
    description: "Inspiration",
    url: "https://makepill.com/",
  },
  {
    title: "Stripe",
    description: "Payments",
    icon: <StripeColorIcon className="h-10 w-10" />,
    theme: "ligth",
  },
  {
    title: "gsap",
    url: "https://gsap.com/",
  },
  {
    url: "https://mintlify.com/",
  },
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
]

const ItemTop = ({
  item,
}: {
  item: {
    title?: string
    description?: string
    url?: string
    icon?: JSX.Element | undefined
    theme?: string | undefined
  }
}) => {
  return (
    <div
      className={
        "flex w-full items-center justify-between gap-4 rounded-lg  bg-slate-800 p-4 " +
        (!item.title ? "opacity-30" : "")
      }
    >
      <div className="flex items-center gap-4">
        <div
          className={
            "flex h-16 w-16 items-center justify-center rounded-xl p-2 " +
            (item.theme && item.theme === "ligth"
              ? "bg-white/95"
              : "bg-slate-900")
          }
        >
          {item.icon}
        </div>
        <div className="grid flex-1">
          <p className="font-bold">{item.title}</p>
          <label title={item.description} className="truncate text-white/50">
            {item.description}
          </label>
        </div>
      </div>
      <div>
        {item.url && (
          <Link href={item.url} target="_blank">
            <LinkIcon className="text-white/70" />
          </Link>
        )}
      </div>
    </div>
  )
}

export default function CardTopTools() {
  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <div className="group relative flex items-center justify-center overflow-hidden rounded-xl border text-center">
            <div className="z-20 m-auto p-4 font-bold">
              <div className="m-4 mx-auto flex h-24 w-24 items-center justify-center rounded-3xl bg-white">
                <Image
                  alt="Logo Vikash Kushwaha"
                  src={"/images/logo-vikash.png"}
                  width={100}
                  height={100}
                  className="rounded-xl"
                />
              </div>
              <p className="text-md border-b-2 border-dashed border-white/30 p-2 text-white/75">
                TOP
              </p>
              <p className="mt-4 text-3xl text-white">Best Webs & Tools</p>
              <p className="mt-2 text-lg uppercase text-white">
                List of My Favorites
              </p>
            </div>
            <div className="absolute top-0 z-10 h-full w-full bg-[rgba(35,41,60,0.3)]"></div>

            <Image
              alt=""
              className="absolute inset-0 h-full w-full object-cover opacity-75 transition-all ease-out group-hover:scale-110 group-hover:blur-sm"
              src={
                "https://images.unsplash.com/photo-1664448007527-2c49742dbb24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80"
              }
              width={700}
              height={900}
            />
          </div>
        </DialogTrigger>
        <DialogContent className="min-h-[700px] sm:max-w-3xl">
          {/* <DialogHeader>
            <DialogTitle>My favorites</DialogTitle>
            <DialogDescription>
              List of my favorite websites and tools
            </DialogDescription>
          </DialogHeader> */}
          <Tabs defaultValue="general" className="h-full">
            <TabsList>
              <TabsTrigger value="general">General</TabsTrigger>
              <TabsTrigger value="inspiration">Inspiration</TabsTrigger>
            </TabsList>
            <TabsContent value="general">
              <div className="grid gap-2 md:grid-cols-2">
                {itemsGeneral.map((item) => (
                  <ItemTop item={item} key={item.title} />
                ))}
              </div>
            </TabsContent>
            <TabsContent value="inspiration">
              <div className="grid gap-2 md:grid-cols-2">
                {itemsInspiration.map((item) => (
                  <ItemTop item={item} key={item.title} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </DialogContent>
      </Dialog>
    </>
  )
}
