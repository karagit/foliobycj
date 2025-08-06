import { ChevronDownIcon } from "@heroicons/react/24/outline";

export default function Banner() {
  return (
    <div className="banner bg-dark pt-20 lg:h-screen">
      <div className="mx-auto max-w-9xl px-6 lg-px-8 h-full relative py-20">
        <div className="flex items-center justify-center flex-col h-full text-center">
          <div className="w-full">
            <p className="text-base font-light mb-4 lg:text-3xl">I am</p>
            <h1 className="text-5xl font-bold lg:text-8xl">Carla Jean</h1>
            <p className="text-base font-light mt-5 mb-8 lg:text-3xl">An experienced frontend developer based in Manila PH, <br className="hidden lg:block"/> who specializes in web development. Interested in working with me?</p>
            <a href="mailto:carlajeanmp@gmail.com" className="btn uppercase inline-block tracking-wider">Message me</a>
            <hr className="text-light-gray w-60 mx-auto my-10" />
            <div className="flex justify-center items-center space-x-5">
              <a
                href="https://www.linkedin.com/in/carlajeanmp/"
                target="_blank"
                className="w-6 h-6 hover:opacity-70 hover:transition-all hover:duration-700"
              >
                <img src="/img/img-linkedin.svg" alt="Linkedin"/>
              </a>
              <a
                href="https://github.com/karagit"
                target="_blank"
                className="w-6 h-6 hover:opacity-70 hover:transition-all hover:duration-700"
              >
                <img src="/img/img-github.svg" alt="Github"/>
              </a>
            </div>
          </div>
        </div>
        <ChevronDownIcon className="h-6 w-6 absolute bottom-5 left-0 right-0 mx-auto arrow-down" />
      </div>
    </div>
  )
}