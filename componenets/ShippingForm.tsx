import { ShippingFormInputs, shippingFormSchema } from "@/types"
import { zodResolver } from "@hookform/resolvers/zod"
import { ArrowRight } from "lucide-react"
import { useRouter } from "next/navigation"
import { SubmitHandler, useForm } from "react-hook-form"

const ShippingForm = ({setShippingForm}:{setShippingForm:(data:ShippingFormInputs) => void}) => {
    const { register, handleSubmit, formState: { errors } } = useForm<ShippingFormInputs>(
        {
            resolver: zodResolver(shippingFormSchema),

        }
    )
    const router = useRouter();

    const handeleShippingForm:SubmitHandler<ShippingFormInputs> = (data) => {
        setShippingForm(data)
        router.push("/cart?step=3", {scroll: false})
    }

    return (
        <form className='flex flex-col gap-4' onSubmit={handleSubmit(handeleShippingForm)}>
            <div className="flex flex-col gap-1">
                <label htmlFor="name" className="text-sm text-gray-500 font-medium">Name</label>
                <input className="border-b border-gray-200 outline-none py-2 text-sm" type="text" id="name" placeholder="Mohsine EL Merniss" {...register("name")} />
                {errors.name && (
                    <p className="text-xs text-red-500">{errors.name.message}</p>
                )}
            </div>
            <div className="flex flex-col gap-1">
                <label htmlFor="email" className="text-sm text-gray-500 font-medium">Email</label>
                <input className="border-b border-gray-200 outline-none py-2 text-sm" type="email" id="email" placeholder="mohsine@gmail.com" {...register("email")} />
                {errors.email && (
                    <p className="text-xs text-red-500">{errors.email.message}</p>
                )}
            </div>
            <div className="flex flex-col gap-1">
                <label htmlFor="phone" className="text-sm text-gray-500 font-medium">Phone</label>
                <input className="border-b border-gray-200 outline-none py-2 text-sm" type="text" id="phone" placeholder="123456789123" {...register("phone")} />
                {errors.phone && (
                    <p className="text-xs text-red-500">{errors.phone.message}</p>
                )}
            </div>
            <div className="flex flex-col gap-1">
                <label htmlFor="adress" className="text-sm text-gray-500 font-medium">Adress</label>
                <input className="border-b border-gray-200 outline-none py-2 text-sm" type="text" id="adress" placeholder="test adress casablanca" {...register("adress")} />
                {errors.adress && (
                    <p className="text-xs text-red-500">{errors.adress.message}</p>
                )}
            </div>
            <div className="flex flex-col gap-1">
                <label htmlFor="city" className="text-sm text-gray-500 font-medium">City</label>
                <input className="border-b border-gray-200 outline-none py-2 text-sm" type="text" id="city" placeholder="Rabat" {...register("city")} />
                {errors.city && (
                    <p className="text-xs text-red-500">{errors.city.message}</p>
                )}
            </div>
            <button type="submit" className="w-full bg-gray-800 hover:bg-gray-900 transition-all duration-300 text-white p-2 rounded-lg cursor-pointer flex items-center justify-center gap-2">
                Continue
                <ArrowRight />
            </button>
        </form>
    )
}

export default ShippingForm