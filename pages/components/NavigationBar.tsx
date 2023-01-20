import Image from 'next/image'

export default function NavigationBar() {
    return (
      <header aria-label="Site Header" className="border-b border-gray-100">
        <div className="mx-auto flex h-16 max-w-screen-2xl items-center justify-between sm:px-6 lg:px-8">
          <div className="flex items-center">
            <button type="button" className="p-2 sm:mr-4 lg:hidden">
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <a href="#" className="flex">
              {/* <span className="sr-only">Logo</span>
              <span className="inline-block h-10 w-32 rounded-lg bg-gray-200"></span> */}
              <h1>Will Mingus</h1>
            </a>
          </div>
          <div className="flex flex-1 items-center justify-end">
            <nav aria-label="Site Nav" className="hidden lg:flex lg:gap-4 lg:text-xs lg:font-bold lg:uppercase lg:tracking-wide lg:text-gray-500">
              <a 
              href="/about" 
              className="block h-16 border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-red-700">
                About
              </a>
              <a href="/blog" 
              className="block h-16 border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-red-700">
                Blog
              </a>
              <a
                href="/projects" 
                className="block h-16 border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-red-700">
                Projects
              </a>
              <a
                href="/resume"
                className="block h-16 border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-red-700"
              >
                Resume
              </a>
            </nav>
            <div className="ml-8 flex items-center">
              <div className="flex items-center divide-x divide-gray-100 border-x border-gray-100">
                <span>
                  <a href="https://github.com/w45272" className="block border-b-4 border-transparent p-6 hover:border-red-700">
                    <Image alt="GH"src="/github.svg" width="16" height="16"/>
                    <span className="sr-only">GitHub</span>
                  </a>
                </span>
                <span>
                  <a href="https://www.linkedin.com/in/will-mingus/" className="block border-b-4 border-transparent p-6 hover:border-red-700">
                  <Image alt="LI"src="/linkedin.svg" width="16" height="16"/>
                    <span className="sr-only">LinkedIn</span>
                  </a>
                </span>
                <span className="hidden sm:block">
                  <a href="mailto:wdmingu@gmail.com" className="block border-b-4 border-transparent p-6 hover:border-red-700" >
                  <Image alt="LI"src="/email.svg" width="16" height="16"/>
                    <span className="sr-only">Email</span>
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }