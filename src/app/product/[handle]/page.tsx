import { ProductView } from "app/components/product/ProductView"
import { getProducts } from "app/app/services/shopify/products"
import { redirect } from "next/navigation"

interface ProductPageProps {
    searchParams: {
        id: string
    }
}

export async function generateMetadata({ searchParams }: ProductPageProps) {

    const id = searchParams.id
    const products = await getProducts(id)

    // Verificar si products es undefined o tiene al menos un elemento
    const product = products && products.length > 0 ? products[0] : null

    // Si products es null, puedes manejar este caso según tus necesidades
    if (product === null) {
        // Manejar el caso en el que no se encuentren productos
        // Por ejemplo, puedes mostrar un mensaje de error o redirigir a otra página
        return <div>No se encontraron productos.</div>
    }

    return {
        title: product.title,
        description: product.description,
        keyword: product.tags,
        openGraph: {
            images: [product.image]
        }
    }

}

export default async function ProductPage({ searchParams }: ProductPageProps) {
    const id = searchParams.id
    const products = await getProducts(id)

    // Verificar si products es undefined o tiene al menos un elemento
    const product = products && products.length > 0 ? products[0] : null

    // Si products es null, puedes manejar este caso según tus necesidades
    if (product === null) {
        // Manejar el caso en el que no se encuentren productos
        // Por ejemplo, puedes mostrar un mensaje de error o redirigir a otra página
        return <div>No se encontraron productos.</div>
    }

    /* if (!id) {
        redirect('/')
    } */

    return <ProductView product={product} />
}
