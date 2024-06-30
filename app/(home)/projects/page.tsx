import Image from "next/image"
import Link from "next/link"
import { allProjects } from "contentlayer/generated"
import { compareDesc } from "date-fns"

import { formatDate } from "@/lib/utils"
import GoBackButton from "@/components/GoBackButton"

export const metadata = {
  title: "Projects | Vikash Kushwaha",
}

const getColorOfStatus = {
  building: "bg-amber-500 text-amber-800",
  live: "bg-green-500 text-green-800",
  dead: "bg-red-500 text-red-800",
  "open source": "bg-gray-500 text-gray-800",
  proposal: "bg-blue-500 text-blue-800",
  mvp: "border bg-white/10",
}

async function ProjectsPage() {
  const projects = allProjects
    .filter((project) => project.published)
    .sort((a, b) => {
      return compareDesc(new Date(a.date), new Date(b.date))
    })

  return (
    <div className="container relative max-w-3xl py-6 lg:py-10">
      <GoBackButton path="/" />
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-y-4">
          <h1 className="inline-block font-heading text-4xl tracking-tight lg:text-5xl">
            Projects
          </h1>
        </div>
      </div>
      <hr className="my-8" />
      {projects?.length ? (
        <div className="grid gap-10 sm:grid-cols-2">
          {projects.map((project, index) => (
            <article
              key={project._id}
              className="group relative flex flex-col space-y-2"
            >
              {project.image && (
                <Image
                  src={project.image}
                  alt={project.title}
                  width={804}
                  height={452}
                  className="rounded-md border bg-muted transition-colors"
                  priority={index <= 1}
                />
              )}
              <h2 className="text-2xl font-extrabold">{project.title}</h2>
              {project.description && (
                <p className="text-muted-foreground">{project.description}</p>
              )}
              {project.status && (
                <div className="flex items-center gap-3">
                  {project.status.map((chip) => {
                    return (
                      <span
                        key={"status-" + project._id + "-" + index}
                        className={
                          " max-w-fit truncate rounded-full px-3 py-1 text-sm font-bold uppercase " +
                          (getColorOfStatus[chip] || "")
                        }
                      >
                        {chip}
                      </span>
                    )
                  })}
                </div>
              )}
              {project.date && (
                <p className="text-sm text-muted-foreground">
                  {formatDate(project.date)}
                </p>
              )}
              <Link href={project.slug} className="absolute inset-0">
                <span className="sr-only">View Project</span>
              </Link>
            </article>
          ))}
        </div>
      ) : (
        <p>No projects.</p>
      )}
    </div>
  )
}

export default ProjectsPage
