import About from "@/components/About"
import Header from "@/components/Header"
import Hero from "@/components/Hero"
import Skills from "@/components/Skills"
import WorkExperience from "@/components/WorkExperience"
import type { NextPage } from "next"
import Head from "next/head"

export default function Home() {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll z-0">
      <Head>
        <title>Portfolio</title>
      </Head>

      <Header />

      <section id="hero" className="snap-start">
        <Hero />
      </section>

      <section id="about" className="snap-center">
        <About />
      </section>

      <section id="experience" className="snap-center">
        <WorkExperience />
      </section>

      <section id="skills" className="snap-center">
        <Skills />
      </section>

      {/* Projects */}

      {/* Contact Me */}
    </div>
  )
}
