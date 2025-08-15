import NavigationBar from "./NavigationBar";

export default function Header() {
  return (
    <header className="flex items-center justify-between w-full">
      <a href="#" className="font-vogue-text-italic text-4xl w-1/2">CJMP</a>
      <div className="flex justify-end items-center w-1/2 space-x-16">
        <div className="flex space-x-16">
          <div>
            <p className="italic font-medium">EMAIL:</p>
            <p>CARLAJEANMP@GMAIL.COM</p>
          </div>
          <div>
            <p className="italic font-medium">LOCATION:</p>
            <p>MANILA, PHILIPPINES</p>
          </div>
        </div>
        <NavigationBar />
      </div>
    </header>
  )
}