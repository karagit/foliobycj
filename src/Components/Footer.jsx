export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="section footer">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg-px-8">
        <div className="flex justify-between flex-col items-center text-center lg:flex-row">
          <p>&copy; {currentYear} Portfolio by Carla Jean. All rights reserved. </p>
          <div className="flex justify-center items-center space-x-5 mt-5 lg:mt-0">
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
    </footer>
  )
}