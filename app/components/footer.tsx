import Link from "next/link";


export default function Footer() {
  return (
    <footer>
      <div className="container mb-10 mx-auto px-4">
        <div className="flex justify-center">
          <Link 
            href='https://ohori-pc.kalonade.com/ohori-pc'
            className="inline-block text-white font-bold rounded-full shadow-lg bg-gradient-to-r from-yellow-300 to-yellow-400 hover:bg-gradient-to-r from-yellow-400 to-yellow-500 transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-opacity-50 w-full sm:w-auto sm:min-w-[200px] md:min-w-[250px] lg:min-w-[300px]"
          >
            <span className="block px-6 py-3 text-sm sm:text-base md:text-lg lg:text-xl text-center">
              予約へ進む
            </span>
          </Link>
        </div>
      </div>
    </footer>
  )
}