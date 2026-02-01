"use client"

import { ProductType } from "@/types"
import { ShoppingBag, ShoppingCart } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

const ProductCard = ({ product }: { product: ProductType }) => {
    const [producTypes, setproductTypes] = useState({
        size: product.sizes[0],
        color: product.colors[0],
    })

    const handelProductType = ({ type, value }: { type: "size" | "color", value: string }) => {
        setproductTypes((prev) => ({
            ...prev,
            [type]: value
        }))

    }
    return (
        <div className="shadow-lg rounded-lg overflow-hidden">
            {/* IMAGE */}
            <Link href={`/products/${product.id}`}>
                <div className="relative aspect-2/3">
                    <Image src={product.images[producTypes.color]} alt={product.name} fill className="object-cover hover:scale-105 transition-all duration-300" />
                </div>
            </Link>
            {/* PRODUCTDETAILS */}
            <div className="flex flex-col gap-4 p-4">
                <h1 className="font-medium">
                    {product.name}
                </h1>
                <p className="text-sm text-gray-500">{product.description}</p>
                {/* PRODUCTS TYPES */}
                <div className="flex items-center gap-4 text-sm">
                    {/* SIZES */}
                    <div className="flex flex-col gap-1">
                        <span className="text-gray-500">Sizes</span>
                        <select
                            name="size"
                            id="size"
                            className="ring ring-gray-300 rounded-md px-2 py-1"
                            onChange={(e) => handelProductType({ type: "size", value: e.target.value })}
                        >
                            {
                                product.sizes.map(size => (
                                    <option key={size} value={size}>{size.toUpperCase()}</option>
                                ))
                            }

                        </select>
                    </div>
                    {/* COLORS */}
                    <div className="flex flex-col gap-1">
                        <span className="text-gray-500">Color</span>
                        <div className="flex items-center gap-2">
                            {
                                product.colors.map(color => (
                                    <div className={`cursor-pointer border ${producTypes.color === color ? "border-gray-800" : "border-gray-200"} 
                                                rounded-full p-[1.2px]`}
                                        key={color}
                                        onClick={() => handelProductType({ type: "color", value: color })}>
                                        <div className="w-3.5 h-3.5 rounded-full"
                                            style={{ backgroundColor: color }} />
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
                {/* PRICE AND ADD TO CART BUTTON */}
                <div className="flex items-center justify-between">
                    <p className="font-medium">${product.price.toFixed(2)}</p>
                    <button className="ring-1 ring-gray-200 shadow-lg rounded-md px-2 py-1 text-sm cursor-pointer hover:text-white hover:bg-black transition-all duration-300 flex items-center gap-4">
                        <ShoppingCart className="w-4 h-4" />
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ProductCard