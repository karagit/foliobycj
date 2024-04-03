import { Companies } from "../data/Companies";

export default function Card() {
  return (
    <>
      {Companies.map((item, index) => (
        <div key={index} className="card bg-dark-blue py-10 px-8 shadow-lg rounded-3xl flex flex-col justify-between w-full mb-11 lg:w-1/3 lg:mb-0">
          <div>
            <h3 className="text-lg mb-1">{item.name}</h3>
            <p className="text-blue text-xs mb-5">{item.year}</p>
          </div>
          <p>{item.description}</p>
          <ul className="flex flex-wrap mt-5">
            {item.tech.map((item, index) => (
              <li key={index} className="rounded py-1 px-2 mx-1 text-xs mt-2 bg-blue">{item.name}</li>
            ))}
          </ul>
        </div>
      ))}
    </>
  )
}