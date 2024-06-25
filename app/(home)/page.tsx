import { allProjects } from "@/.contentlayer/generated"
import { compareDesc } from "date-fns"

import SectionFrameworksNStak from "@/components/Home/SectionFrameworksNStack"
import ProjectList from "@/components/Home/project-list"
import SectionOpenSource from "@/components/Home/SectionOpenSource"
import SectionBento from "@/components/Home/SectionBento"
import SectionInspiration from "@/components/Home/SectionInspiration"
import { About } from "@/components/Home/about"
import { Hero } from "@/components/Home/hero"

export default async function IndexPage() {
  const projects = allProjects
    .filter((project) => project.published && project.highlight)
    .sort((a, b) => {
      return compareDesc(new Date(a.date), new Date(b.date))
    })

  return (
    <div>
      <Hero />

      <About />

      <SectionBento />

      <ProjectList projects={projects} />

      <SectionFrameworksNStak />

      <SectionInspiration />

      <SectionOpenSource />
    </div>
  )
}
