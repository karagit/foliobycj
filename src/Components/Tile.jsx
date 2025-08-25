import Link from "next/link";
import { Works } from "../data/Works";

export default function Tile() {
  return (
    <div className="flex flex-wrap flex-row">
      {Works.map((item, index) => (
        <div key={index} className="tile w-1/2 lg:w-1/4">
          <div className="lg:min-h-32 overflow-hidden">
            <Link href={item.href} target="_blank" rel="noreferrer nofollow" className="tile-link relative">
              <span className="rounded py-1 px-2 text-xs bg-blue absolute z-10 top-2 right-2">{item.tag}</span>
              <img src={item.src} className="object-cover object-left h-full w-full" />
            </Link>
          </div>
        </div>
      ))}
    </div>
  )
}