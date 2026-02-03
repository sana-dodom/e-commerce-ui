"use client"

import { usePathname, useRouter, useSearchParams } from "next/navigation"

const Filter = () => {

    const searchParameters = useSearchParams()
    const router = useRouter()
    const pathname = usePathname()

    const handelFilter = (value: string) => {
    const params = new URLSearchParams(searchParameters)
    params.set("sort", value)
    router.push(`${pathname}?${params.toString()}`, { scroll: false })
  }

    return ( 
        <div className="flex items-center justify-end gap-2 text-sm text-gray-500 my-6">
            <span>Sort by</span>
            <select name="sort" id="sort" className="ring-1 shadow-md ring-gray-200 p-1 rounded-sm" 
                    onChange={(e) =>{handelFilter(e.target.value)}}>
                <option value="newest">Newest</option>
                <option value="oldest">Oldest</option>
                <option value="asc">Price: Low To Hight</option>
                <option value="desc">Price: Hight To Low</option>
            </select>
        </div>
    )
}

export default Filter