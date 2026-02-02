import ProductList from "@/componenets/ProductList"

const ProductsPage = async ({searchParams}:{searchParams:Promise<{category:string}>}) => {

    // searchParams est une promesse qui va retourner :{ category: "shoes" | ....}
    
  const category = (await searchParams).category
  return (
    <div>
        <ProductList category={category} params="products"/>
    </div>
  )
}

export default ProductsPage