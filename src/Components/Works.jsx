import Tile from "./Tile";

export default function Works() {
  return (
    <div id="works" className="section works">
      <div className="mx-auto max-w-7xl px-6 lg-px-8">
        <div className="flex flex-col sm:flex-row">
          <div className="flex flex-col w-full pr-0 lg:w-1/2 lg:pr-12">
            <h2 className="section-title text-center leading-tight lg:text-left">What <br className="hidden lg:block"/> <span className="text-blue">I Do</span></h2>
            <p className="mb-5">
              I do not own any of the works displayed here. Projects are intellectual property of each client or previous employer.
              The sole purpose is to showcase the skills and expertise of the developer.
            </p>
            <p className="mb-10">
              If you wish to remove the project, please contact me <a href="mailto:carlajeanmp@gmail.com" className="text-blue hover:transition-all hover:duration-700 hover:text-white">here</a>. Thank you!
            </p>
          </div>
          <div className="w-full lg:w-1/2">
            <Tile />
          </div>
        </div>
      </div>
      
    </div>
  )
}