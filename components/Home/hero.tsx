import Image from "next/image"
import { Barlow } from "next/font/google"

import ArrowFigma from "@/components/Icons/ArrowFigma"

import HeaderImage from "@/components/Home/header-image"

// If loading a variable font, you don't need to specify the font weight
const barlow = Barlow({ subsets: ["latin"], weight: ["600"] })

export function Hero() {
  return (
    <section
      id="header"
      className="custom-cursor container flex h-[100dvh]  max-w-[64rem] flex-col items-center justify-center gap-4  text-center"
    >
      <div className="w-full max-w-5xl ">
        <div className="relative z-20 flex w-full flex-col  items-center justify-center gap-4">
          <Image
            src="/images/react-icon.png"
            alt="Blur"
            className="absolute -right-20 bottom-32 z-0 w-24 rounded-2xl md:bottom-32 md:right-16"
            width={120}
            height={120}
          />
          <Image
            src="/images/next_icon.png"
            alt="Blur"
            className="absolute -left-32 bottom-32 z-0 w-32 md:bottom-32 md:left-0 "
            width={120}
            height={120}
          />
          <Image
            src="/images/vercel_icon.png"
            alt="Blur"
            className="absolute -left-8 top-16 z-0 w-16 md:left-32 md:top-16 "
            width={120}
            height={120}
          />
          <Image
            src="/images/figma_icon.png"
            alt="Blur"
            className="absolute -right-20 top-16 z-0 w-24 md:right-0 md:top-16 "
            width={120}
            height={120}
          />
          <h2 className="relative rounded-md bg-gray-50 px-4 py-2 text-center font-semibold text-black">
            <ArrowFigma className="absolute -left-8 -top-6" />
            <span>Vikash Kushwaha</span>
          </h2>

          <h1
            className={
              barlow.className +
              " z-10 flex max-w-3xl flex-col text-center text-6xl  font-extrabold  md:text-8xl "
            }
          >
            <span>CREATIVE</span> <span>DEVELOPER</span> <span>SINCE</span>
            <span className="text-[#FF512F]">2020</span>
          </h1>
          {/* SOFTWARE ENGINEER */}
          <h3 className="flex flex-col text-center text-lg">
            Experienced software engineer
            <span className="hidden max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8 md:block">
              with a focus on building engaging and accessible digital
              experiences.
            </span>
          </h3>

          <div className="mt-8 flex gap-4">
            <a
              title="Linkedin"
              className="rounded-lg p-2 hover:bg-white/25"
              href="https://www.linkedin.com/in/kushwaha-vikash"
              target="_blank"
              rel="noreferrer noopener"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 0 252 65"
                fill="currentColor"
              >
                <title>Linkedin</title>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M10.1111 9.53333H0V54.8889H28.0222V45.9333H10.1111V9.53333Z"
                />
                <path d="M37.2667 19.6444C40.2982 19.6444 42.7556 17.187 42.7556 14.1556C42.7556 11.1241 40.2982 8.66666 37.2667 8.66666C34.2353 8.66666 31.7778 11.1241 31.7778 14.1556C31.7778 17.187 34.2353 19.6444 37.2667 19.6444Z" />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M32.3556 23.9778H41.8889V54.8889H32.3556V23.9778Z"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M113.244 23.9778H101.4L91 36.6889V9.53333H81.1778V54.8889H91V39.8667L101.111 54.8889H113.244L100.822 38.1333L113.244 23.9778ZM65.2889 23.4C60.6666 23.4 57.7778 25.7111 56.3333 28.3111H56.0444V23.9778H47.0889V54.8889H56.6222V39.8667C56.6222 35.8222 57.4889 31.7778 62.4 31.7778C67.0222 31.7778 67.3111 36.6889 67.3111 40.1556V55.1778H76.8444V38.4222C76.5555 29.7556 74.8222 23.4 65.2889 23.4Z"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M128.267 23.4C118.733 23.4 111.222 29.7556 111.222 39.5778C111.222 49.4 118.733 55.7556 128.267 55.7556C133.178 55.7556 138.378 53.7333 141.267 49.6889L134.622 44.4889C132.889 46.8 130.867 48.2444 127.689 48.2444C123.933 48.2444 121.333 45.9333 120.467 42.4667H142.422V39.2889C142.422 29.4667 136.933 23.4 128.267 23.4ZM120.756 36.1111C121.044 33.2222 123.067 30.3333 127.689 30.3333C131.156 30.3333 133.467 32.9333 133.467 36.1111H120.756ZM169 27.1556C166.689 24.2667 163.222 22.8222 159.178 22.8222C150.511 22.8222 145.311 30.9111 145.311 39.2889C145.311 48.5333 151.378 55.1778 160.333 55.1778C164.667 55.1778 168.133 52.5778 169.867 50.2667H170.155V54.6H178.822V9.24445H169.289L169 27.1556ZM162.067 47.3778C157.444 47.3778 154.556 43.9111 154.556 39.2889C154.556 34.6667 157.444 31.2 162.067 31.2C166.689 31.2 169.578 34.3778 169.578 39.2889C169.578 44.2 166.978 47.3778 162.067 47.3778Z"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M247 0H192.689C190.089 0 188.067 2.02222 188.067 4.91111V60.0889C188.067 62.4 190.089 65 192.689 65H247C249.6 65 251.622 62.9778 251.622 60.0889V4.62222C251.911 2.02222 249.889 0 247 0ZM206.844 54.8889H197.311V23.9778H206.844V54.8889ZM202.222 19.9333C199.333 19.9333 196.733 17.6222 196.733 14.4444C196.733 11.5556 199.044 8.95555 202.222 8.95555C205.111 8.95555 207.711 11.2667 207.711 14.4444C207.711 17.6222 205.4 19.9333 202.222 19.9333ZM242.378 54.8889H232.844V39.8667C232.844 36.4 232.844 31.4889 227.933 31.4889C223.022 31.4889 222.156 35.5333 222.156 39.5778V54.6H212.911V23.9778H221.867V28.3111H222.156C223.6 26 226.489 23.4 231.111 23.4C240.644 23.4 242.378 29.7556 242.378 38.1333V54.8889Z"
                />
              </svg>
            </a>

            <a
              title="Dribbble"
              className="flex items-center gap-2 rounded-lg p-2 hover:bg-white/25"
              href="https://github.com/KushwahaVikashJ"
              target="_blank"
              rel="noreferrer noopener"
            >
              <svg
                height="24px"
                width="24px"
                version="1.1"
                viewBox="0 0 512 512"
                fill="currentColor"
              >
                <title>Github</title>
                <g>
                  <path
                    clipRule="evenodd"
                    d="M296.133,354.174c49.885-5.891,102.942-24.029,102.942-110.192   c0-24.49-8.624-44.448-22.67-59.869c2.266-5.89,9.515-28.114-2.734-58.947c0,0-18.139-5.898-60.759,22.669   c-18.139-4.983-38.09-8.163-56.682-8.163c-19.053,0-39.011,3.18-56.697,8.163c-43.082-28.567-61.22-22.669-61.22-22.669   c-12.241,30.833-4.983,53.057-2.718,58.947c-14.061,15.42-22.677,35.379-22.677,59.869c0,86.163,53.057,104.301,102.942,110.192   c-6.344,5.452-12.241,15.873-14.507,30.387c-12.702,5.438-45.808,15.873-65.758-18.592c0,0-11.795-21.31-34.012-22.669   c0,0-22.224-0.453-1.813,13.592c0,0,14.96,6.812,24.943,32.653c0,0,13.6,43.089,76.179,29.48v38.543   c0,5.906-4.53,12.702-15.865,10.89C96.139,438.977,32.2,354.626,32.2,255.77c0-123.807,100.216-224.022,224.03-224.022   c123.347,0,224.023,100.216,223.57,224.022c0,98.856-63.946,182.754-152.828,212.688c-11.342,2.266-15.873-4.53-15.873-10.89   V395.45C311.1,374.577,304.288,360.985,296.133,354.174L296.133,354.174z M512,256.23C512,114.73,397.263,0,256.23,0   C114.73,0,0,114.73,0,256.23C0,397.263,114.73,512,256.23,512C397.263,512,512,397.263,512,256.23L512,256.23z"
                    fillRule="evenodd"
                  />
                </g>
              </svg>
              <span className="text-lg font-bold">Github</span>
            </a>
          </div>
        </div>
      </div>

      <HeaderImage />
    </section>
  )
}
