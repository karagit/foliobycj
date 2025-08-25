import Tile from "./Tile";

export default function Works() {
  return (
    <div id="works" className="section works">
      <div className="mx-auto max-w-7xl px-6 lg-px-8">
          <h2 className="section-title text-center leading-tight">What <span className="text-blue">I Do</span></h2>
      </div>
        <div className="w-full mt-10">
          <Tile />
        </div>
      <div className="mx-auto max-w-7xl px-6 lg-px-8 mt-10">
        <p className="mb-5 opacity-70">I do not own any of the works displayed here. Projects are intellectual property of each client or previous employer. The sole purpose is to showcase my skills and expertise. If you wish to remove the project, please contact me <a href="mailto:carlajeanmp@gmail.com" className="text-blue hover:transition-all hover:duration-700 hover:text-white">here</a>. Thank you.</p>
      </div>
    </div>
  )
}