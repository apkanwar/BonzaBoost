import { CheckIcon } from "@heroicons/react/24/outline";
import { SvgIcon } from "@mui/material";
import { useState, useEffect } from "react";

export default function Products() {
    const [products, setProducts] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [filteredProducts, setFilteredProducts] = useState([]);

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
        <div id="products" className="flex flex-col items-center justify-center py-12 xl:py-24 mx-4">
            <div className="max-w-7xl pb-12 items-center flex flex-col text-white">
                <h1 className="font-headings text-4xl font-bold uppercase text-center mb-6">Get Started Today</h1>
            </div>

            {/* Categories */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 mx-auto mb-8">
                {products.map((p, index) => (
                    <div
                        key={index}
                        onClick={() => handleCategoryClick(p.category)}
                        className={`px-8 py-2 flex text-lg text-white items-center justify-center rounded-full cursor-pointer ${selectedCategory === p.category ? 'bg-nitroPink' : 'bg-white/10 hover:bg-white/20'} shadow-lg select-none`}>
                        {p.category}
                    </div>
                ))}
            </div>

            {/* Products for Selected Category */}
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 mx-auto my-8 max-w-7xl">
                {filteredProducts.length > 0 && (
                    filteredProducts.map((product, index) => (
                        <div key={index} className="flex flex-col gap-6 bg-purple-900 text-white p-6 rounded-lg shadow-lg">
                            <h2 className="text-lg font-headings">{product.name}</h2>
                            <p className="text-5xl font-numbers">{product.price}</p>
                            <a href={'/'} className="text-lg text-white px-20 py-2 rounded-full bg-nitroPink transition ease-in-out hover:-translate-y-1 hover:shadow-xl hover:bg-nitroPink/80 duration-300">
                                Purchase
                            </a>
                            {product.desc && (
                                <ul className="flex flex-col gap-2 font-semibold">
                                    {product.desc.map((d, i) => (
                                        <li key={i} className="flex items-center gap-2">
                                            <SvgIcon>
                                                <CheckIcon />
                                            </SvgIcon>
                                            <span>{d}</span>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    ))
                )}
            </div>
        </div>
    )
}