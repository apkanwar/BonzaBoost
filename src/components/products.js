import { useIsVisible } from "@/lib/useIsVisible";
import { useState, useEffect, useRef } from "react";
import OneMonthBoost from "./productComponents/oneMonthBoost";
import ThreeMonthBoost from "./productComponents/threeMonthBoost";
import SixMonthBoost from "./productComponents/sixMonthBoost";
import YearBoost from "./productComponents/yearBoost";
import LifetimeBoost from "./productComponents/lifetimeBoost";
import Members from "./productComponents/members";
import Nitro from "./productComponents/nitro";
import YouTube from "./productComponents/youtube";

export default function Products() {
    const [products, setProducts] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [filteredProducts, setFilteredProducts] = useState([]);

    const ref = useRef();
    const isVisible = useIsVisible(ref);

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        try {
            const response = await fetch('/api/products');
            if (!response.ok) {
                throw new Error('Failed to Fetch Data');
            }
            const { products } = await response.json();
            setProducts(products);
            if (products.length > 0) {
                setSelectedCategory(products[0].category);
                setFilteredProducts(products[0].type);
            }
        } catch (error) {
            console.error('Error Fetching Data:', error);
        }
    };

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
        const filtered = products.find(p => p.category === category)?.type || [];
        setFilteredProducts(filtered);
    };

    return (
        <div ref={ref} id="products" className={`${isVisible ? "opacity-100" : "opacity-0"} transition-opacity ease-in duration-1000 flex flex-col items-center justify-center py-12 xl:py-24 mx-4`}>
            <div className="max-w-7xl pb-12 items-center flex flex-col text-white">
                <h1 className="font-headings text-4xl font-bold uppercase text-center mb-6">Get Started Today</h1>
            </div>

            {/* Categories */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 mx-auto mb-8">
                {products.map((p, index) => (
                    <div
                        key={index}
                        onClick={() => handleCategoryClick(p.category)}
                        className={`px-8 py-2 flex text-lg text-white font-main font-semibold items-center justify-center rounded-full cursor-pointer ${selectedCategory === p.category ? 'bg-nitroPink' : 'bg-white/10 hover:bg-white/20'} shadow-lg select-none`}>
                        {p.category}
                    </div>
                ))}
            </div>

            {/* Products for Selected Category */}
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 mx-auto my-8 max-w-7xl">
                {selectedCategory == '1 Month Boost' ? (
                    <OneMonthBoost products={filteredProducts} />
                ) : selectedCategory == '3 Month Boost' ? (
                    <ThreeMonthBoost products={filteredProducts} />
                ) : selectedCategory == '6 Month Boost' ? (
                    <SixMonthBoost products={filteredProducts} />
                ) : selectedCategory == '1 Year Boost' ? (
                    <YearBoost products={filteredProducts} />
                ) : selectedCategory == 'Lifetime Boost' ? (
                    <LifetimeBoost products={filteredProducts} />
                ) : selectedCategory == 'Members' ? (
                    <Members products={filteredProducts} />
                ) : selectedCategory == 'Nitro' ? (
                    <Nitro products={filteredProducts} />
                ) : selectedCategory == 'YouTube' ? (
                    <YouTube products={filteredProducts} />
                ) : null}
            </div>
        </div>
    )
}