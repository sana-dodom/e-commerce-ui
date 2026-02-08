"use client"

import { ProductType } from "@/types"
import { useRouter, usePathname, useSearchParams } from "next/navigation";

const ProductInteraction = ({ product, selectedSize, selectedColor }: { product: ProductType, selectedSize: string, selectedColor: string }) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handelTypeChange = (type: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString())
    params.set(type, value)
    router.push(`${pathname}?${params.toString()}`, { scroll: false })
  }
  return (
    <div className="flex flex-col gap-4 mt-4">
      {/* SIZE */}
      <div className="flex flex-col gap-2 text-xs">
        <span className="text-gray-500">SIZE</span>
        <div className="flex items-center gap-2">
          {
            product.sizes.map((size) => (
              <div className={`cursor-pointer border p-0.5 ${selectedSize === size ? "border-gray-600" : "border-gray-200"}`}
                key={size}
                onClick={() => handelTypeChange("size", size)}>
                <div className={`w-6 h-6 flex items-center justify-center ${selectedSize === size ? "bg-black text-white" : "bg-white text-black"}`}>
                  {size.toUpperCase()}
                </div>

              </div>
            ))
          }
        </div>

      </div>
      {/* COLOR */}
      <div className="flex flex-col gap-2 text-sm"></div>
      {/* QUANTITY */}
      <div className="flex flex-col gap-2 text-sm"></div>

    </div>
  )
}

export default ProductInteraction