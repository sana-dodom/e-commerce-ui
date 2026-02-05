import z from "zod";

export type ProductType = {
    id: string | number;
    name: string;
    shortDescription: string;
    description: string;
    price: number;
    sizes: string[];
    colors: string[];
    images: Record<string, string>;

};

export type ProductsType = ProductType[];

export type CartItemType = ProductType & {
    quantity: number;
    selectedSize: string;
    selectedClor: string;
};

export type CartItemsType = CartItemType[]

export const shippingFormSchema = z.object({
    name: z.string().min(1, "Name is required"),
    email: z.string().min(1, "Email is required"),
    phone: z
        .string()
        .min(7, "Phone number must be between 7 and 10 digits!")
        .max(10, "Phone number must be between 7 and 10 digits!")
        .regex(/^\d+$/, "Phone number must contain onlynumbers"),
    
    adress: z.string().min(1, "Adress is required"),
    city: z.string().min(1, "City is required"),
    
})

export type ShippingFormInputs = z.infer<typeof shippingFormSchema>