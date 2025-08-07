import NavigationBar from "../Components/NavigationBar";

export default function Banner() {
  return (
    <div className="banner lg:h-screen">
      <div className="mx-auto max-w-9xl px-6 lg-px-8 h-full">
        <div className="h-full flex items-center justify-center">
          <h2 className="text-center font-vogue-text-italic">PORTFOLIO.</h2>
        </div>
        <NavigationBar />
      </div>
    </div>
  )
}