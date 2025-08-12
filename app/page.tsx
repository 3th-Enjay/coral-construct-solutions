import Hero from "./components/Hero"
import About from "./components/About"
import IncomingProjects from "./components/IncomingProjects"
import CompletedProjects from "./components/CompletedProjects"
import Contact from "./components/Contact"

export default function Home() {
  return (
    <main className="min-h-screen w-full max-w-full overflow-x-hidden">
      <Hero />
      <About />
      <IncomingProjects />
      <CompletedProjects />
      <Contact />
    </main>
  )
}
