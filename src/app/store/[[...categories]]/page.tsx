import { getProducts } from "app/app/services/shopify"
import { ProductsWrapper } from "app/components/Store/ProductsWrapper"

interface CategoryProps {
    params: {
        categories: string[],
        searchParams?: string
    }
}

export default async function Category(props: CategoryProps) {
    const products = await getProducts()
    const { categories } = props.params
    console.log(props)
    return (
        <ProductsWrapper products={products} />
    )
}