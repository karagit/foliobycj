import { DocumentTextIcon } from "@heroicons/react/24/outline";
import Card from "./Card";

export default function About() {
  return (
    <div id="about" className="section about">
      <div className="mx-auto max-w-7xl px-6 lg-px-8">
        <h2 className="section-title text-center">About <span className="text-blue">Me</span></h2>
        <p className="text-center lg:text-xl">
          I&apos;m a frontend developer who has a keen eye for design details and a passion for clean, maintainable code. <br className="hidden lg:block"/> I also ensure that I deliver high-quality solutions that meet both user needs and business objectives.
        </p>
        <div className="flex justify-between mt-12 flex-wrap space-x-0 lg:space-x-4 lg:flex-nowrap lg:mb-12">
          <Card />
        </div>
        <div className="text-center text-sm">
          <div className="inline-block">
            <a
              href="/CJPantaleon_CV.pdf"
              className="underline flex items-center justify-center mx-auto mb-2 hover:transition-all hover:duration-700 hover:text-blue"
              download
            >
              <DocumentTextIcon className="h-3.5 w-3.5 mr-1" />
              Download CV
            </a>
          </div>
          <p>For full information about me and my experience</p>
        </div>
      </div>
    </div>
  )
}