// TEMPORARY

import ProductInteraction from "@/componenets/ProductInteraction";
import { ProductType } from "@/types"
import Image from "next/image";
import { title } from "process";

const product: ProductType =
{
    id: 1,
    name: "Adidas CoreFit T-Shirt",
    shortDescription:
        "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
    description:
        "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
    price: 39.9,
    sizes: ["s", "m", "l", "xl", "xxl"],
    colors: ["gray", "purple", "green"],
    images: {
        gray: "/products/1g.png",
        purple: "/products/1p.png",
        green: "/products/1gr.png",
    },
};

export const generateMetadata = async ({ params }: { params: { id: string } }) => {
    return {
        title: product.name,
        description: product.description,
    }
}
const ProductPage = async ({ params, searchParams }: { params: { id: string }; searchParams: { color?: string; size?: string } }) => {

    const { size, color } = (await searchParams)
    const selectedSize = (size || product.sizes[0] as string)
    const selectedColor = (color || product.colors[0] as string)

    return (
        <div className="flex flex-col gap-4 lg:flex-row md:gap-12 mt-12">
            {/* IMAGE */}
            <div className="relative aspect-2/3 w-full lg:w-5/12">
                <Image src={product.images[selectedColor]} alt={product.name} fill className="object-contain rounded-md" />
            </div>


            {/* PRODUCT DETAILS SECTION */}
            <div className="w-full lg:w-7/12 flex flex-col gap-4">

                {/* Product Name */}
                <h1 className="text-2xl font-medium">{product.name}</h1>

                {/* Product Description */}
                <p className="text-gray-500">{product.description}</p>

                {/* Product Price */}
                <h2 className="text-2xl font-semibold">${product.price.toFixed(2)}</h2>
                <ProductInteraction product={product} selectedSize={selectedSize} selectedColor={selectedColor} />
                {/* Payment Icons */}
                <div className="flex items-center gap-2 mt-4">
                    <Image
                        src="/klarna.png"
                        alt="Klarna payment option"
                        width={50}
                        height={25}
                        className="rounded-md"
                    />
                    <Image
                        src="/cards.png"
                        alt="Credit card payment options"
                        width={50}
                        height={25}
                        className="rounded-md"
                    />
                    <Image
                        src="/stripe.png"
                        alt="Credit card payment options"
                        width={50}
                        height={25}
                        className="rounded-md"
                    />
                </div>
                <p className="text-gray-500 text-xs">
                    By clicking Pay Now, you agree to our{" "}
                    <span className="underline hover:text-black">Terms & Conditions</span>{" "}
                    and <span className="underline hover:text-black">Privacy Policy</span>
                    . You authorize us to charge your selected payment method for the
                    total amount shown. All sales are subject to our return and{" "}
                    <span className="underline hover:text-black">Refund Policies</span>.
                </p>
            </div>

        </div>
    )
}

export default ProductPage