import Header from "./Header";

export default function Banner() {
  return (
    <div className="banner h-screen">
      <div className="px-20 py-5 h-full">
        <div className="flex items-center justify-center banner-title">
          <h2 className="text-center font-vogue-text-italic">PORTFOLIO.</h2>
        </div>
        <Header />
      </div>
    </div>
  )
}