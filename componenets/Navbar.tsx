import Image from "next/image"
import Link from "next/link"

const Navbar = () => {
  return (
    <div className="w-full flex items-center justify-between border-b border-gray-200 pb-4">
      {/* LEFT */}
        <Link href="/" className="flex items-center">
            <Image
                src="/logo.png"
                alt ="ME"
                width={36}
                height={36}
                className="h-6 w-6 md:h-9 md:w-9 "/>
            <p className="text:md font-medium tracking-wider">TRENDLAMA</p>
                
        </Link>
        {/* RIGHT */}
        <div className="">
            Right
        </div>
    </div>
  )
}

export default Navbar