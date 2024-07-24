import Image from "next/image"
import Link from "next/link"

import CardTopTools from "./SectionBento/TopTools"

const resumeLink =
  "https://drive.google.com/file/d/1IUTK7mUL4Mg2NsppalQJzFiI3HKKTg24/view?usp=sharing"

export default function SectionBento() {
  return (
    <section
      id="main"
      className="mx-auto grid max-w-5xl grid-cols-1 gap-4 px-8 md:grid-cols-3 lg:grid-cols-3 lg:px-0"
    >
      <a
        target="_blank"
        rel="noreferrer"
        href={resumeLink}
        className="group relative h-96 w-full cursor-pointer overflow-hidden rounded-xl "
      >
        <Image
          alt=""
          className="absolute inset-0 h-full w-full object-cover transition-transform ease-out group-hover:scale-110 group-hover:blur-sm"
          src={"/images/home/resume.webp"}
          width={700}
          height={900}
        />
        <div className="absolute inset-0 z-10 flex h-full w-full flex-col justify-between bg-black/50 transition-all group-hover:bg-black/70 ">
          <div className="p-4 font-bold">
            <p className="text-md text-gray-300">RESUME</p>
            <p className="text-3xl ">View or Download Resume in PDF</p>
          </div>

          <div className="flex items-center justify-between gap-3  p-2 backdrop-blur-md">
            <div className="flex items-center gap-3 p-2">
              <Image
                className="h-12 w-12"
                src={"/images/GDrive-logo.png"}
                width={150}
                height={150}
                alt=""
              />
              <div className="w-full overflow-hidden">
                <p className="font-bold">PDF Resume </p>
                <p
                  className="truncate text-sm"
                  title="Google Drive External Link"
                >
                  Google Drive External Link
                </p>
              </div>
            </div>
            <div className="rounded-full bg-white/10 px-4 py-2  text-sm font-semibold">
              Visit
            </div>
          </div>
          <Image
            alt=""
            className="absolute -right-[270px] h-full w-full  rotate-45 object-cover opacity-0 transition-all duration-300 ease-out group-hover:right-0 group-hover:rotate-0 group-hover:opacity-100"
            src={"/images/home/me.webp"}
            width={700}
            height={900}
          />
        </div>
      </a>

      <Link
        href={"/#stack"}
        className="group relative h-[500px] w-full cursor-pointer overflow-hidden rounded-xl bg-[#23293C] sm:h-[800px] md:h-full lg:h-96 "
      >
        <div
          className="p-4 font-bold"
          style={{
            zIndex: 14,
            position: "absolute",
            background: "linear-gradient(180deg, #23293c, transparent)",
            width: "100%",
          }}
        >
          <p className="text-md text-white/75">TECHNOLOGIES</p>
          <p className="text-3xl ">Tools and Frameworks</p>
        </div>
        <Image
          alt=""
          className="absolute -bottom-8 -right-8 w-full  -rotate-12 scale-125 transition-transform ease-out group-hover:scale-150"
          src={"/images/IconsTech.png"}
          width={800}
          height={800}
        />
      </Link>

      <div className=" grid w-full cursor-pointer grid-cols-1 gap-4 ">
        <CardTopTools />
      </div>
    </section>
  )
}
