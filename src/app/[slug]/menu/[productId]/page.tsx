import { notFound } from "next/navigation";

import { db } from "@/lib/prisma";

import ProductHeader from "./components/products-header";

interface ProductPageProps{
    params: Promise<{ slug: string; productId: string }>;
}

const ProductsPage = async ({ params }: ProductPageProps) => {
    const { slug, productId } = await params;
    const product = await db.product.findUnique({ where: { id: productId } });
    if (!product){
        return notFound();
    }
    return ( 
        <>
        <div className="relative w-full h-[300px]">
            <ProductHeader product={product}/>
        </div>
        </>
     );
}
 
export default ProductsPage;