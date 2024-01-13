import Image from 'next/image'
import Link from 'next/link'

const Header: React.FC = () => {
  return (
    <div className=" md:block bg-indigo-700 rounded-full text-center py-1 mx-auto my-3 w-3/4 md:w-fit px-5 shadow-xl">
      <div className="container mx-auto py-2">
        <div className="flex md:items-center md:justify-center">
          <Link href={'/'}>
            <Image
              className="mb-2 md:mb-0 md:mr-4"
              src="https://www.svgrepo.com/show/448244/pack.svg"
              loading="lazy"
              width={30}
              height={30}
              alt="Your Website Icon"
            />
          </Link>
          <nav className="flex justify-between md:space-x-6 text-gray-300 ml-5 w-full">
            <Link
              href={'/games/sudoku'}
              className="text-sm font-medium hover:text-white flex items-center"
            >
              Games
            </Link>
            <Link
              href={'/guides/sudoku'}
              className="text-sm font-medium hover:text-white flex items-center"
            >
              Guides
            </Link>
            <Link
              href={'/'}
              className="text-sm font-medium hover:text-white flex items-center"
            >
              Community
            </Link>
          </nav>
        </div>
      </div>
    </div>
  )
}

export default Header
