import Image from "next/image"
import Link from "next/link"
import SearchBar from "./SearchBar"
import { Bell, Home, ShoppingBag } from "lucide-react"

const Navbar = () => {
  return (
    <div className="w-full flex items-center justify-between border-b border-gray-200 pb-4">
      {/* LEFT */}
        <Link href="/" className="flex items-center">
            <Image
                src="/logo.png"
                alt ="M"
                width={36}
                height={36}
                className="h-6 w-6 md:h-9 md:w-9 "/>
            <p className="hidden md:block text:md font-bold tracking-wider">TRENDLAMA</p>
                
        </Link>
        {/* RIGHT */}
        <div className="flex items-center gap-6">
            <SearchBar />
            <Link href="/">
              <Home className="w-4 h-4 text-gray-500"/>
            </Link>
            <Bell className="w-4 h-4 text-gray-500"/>
            <ShoppingBag className="w-4 h-4 text-gray-500"/>
            <Link href="/login">Sign in</Link>
        </div>
    </div>
  )
}

export default Navbar