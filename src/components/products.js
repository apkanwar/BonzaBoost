import { useState, useEffect, useRef } from "react";
import { useIsVisible } from "@/lib/useIsVisible";
import { CheckIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { SvgIcon } from '@mui/material';

export default function Products() {
    const [groups, setGroups] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [filteredProducts, setFilteredProducts] = useState(null);
    const [buttonVisible, setButtonVisible] = useState(false);
    const ref = useRef();
    const isVisible = useIsVisible(ref);

    const fetchGroups = async () => {
        try {
            const response = await fetch('/api/billgang-categories');
            if (!response.ok) {
                throw new Error('Failed to Fetch Groups');
            }
            const allGroups = await response.json();
            const selfCreatedGroups = allGroups.filter(group => !group.name.includes('All'));
            console.log(selfCreatedGroups)
            setGroups(selfCreatedGroups);
            handleCategoryClick(selfCreatedGroups[0]);
        } catch (error) {
            console.error('Error Fetching Groups:', error);
        }
    };

    const fetchProductsForGroup = async (categoryId) => {
        try {
            const response = await fetch(`/api/billgang-products?categoryId=${encodeURIComponent(categoryId)}`);
            console.log(categoryId)
            if (!response.ok) {
                throw new Error('Failed to Fetch Products');
            }
            const selectedProducts = await response.json();
            setFilteredProducts(selectedProducts);
            console.log(selectedProducts)
        } catch (error) {
            console.error('Error Fetching Groups:', error);
        }
    };

    const handleCategoryClick = (group) => {
        setSelectedCategory(group.name);
        fetchProductsForGroup(group.id);
    };

    const handleCloseModal = () => {
        setButtonVisible(false);
        const billgangElement = document.getElementById("billgang-container");
        billgangElement.innerHTML = '';
        const bodyElement = document.getElementsByClassName("bg-dMode")[0]; // Access the first element in the collection
        if (bodyElement) {
            bodyElement.style.overflow = "auto";
        }
    };

    useEffect(() => {
        fetchGroups();
        const handleEscapeKey = (event) => {
            if (event.key === 'Escape')
                handleCloseModal();
        };
        window.addEventListener('keydown', handleEscapeKey);
        return () => window.removeEventListener('keydown', handleEscapeKey);
    }, []);

    return (
        <div ref={ref} id="products" className={`${isVisible ? "opacity-100" : "opacity-0"} transition-opacity ease-in duration-1000 flex flex-col items-center justify-center py-12 xl:py-24 mx-4`}>
            <div className="max-w-7xl pb-12 items-center flex flex-col text-white">
                <h1 className="font-headings text-4xl font-bold uppercase text-center mb-6">Get Started Today</h1>
            </div>

            {/* Groups */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 mx-auto mb-8">
                {groups && groups.length > 0 ? (
                    groups.map((group) => (
                        <div
                            key={group.id}
                            onClick={() => handleCategoryClick(group)}
                            className={`px-8 py-2 flex text-lg text-white font-main font-semibold items-center text-center justify-center rounded-full cursor-pointer ${selectedCategory === group.name ? 'bg-nitroPink' : 'bg-white/10 hover:bg-white/20'} shadow-lg select-none`}>
                            {group.name.substring(3)}
                        </div>
                    ))
                ) : null}
            </div>

            {/* Products for Selected Group */}
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 mx-auto my-8 max-w-7xl">
                {filteredProducts && filteredProducts.length > 0 ? (
                    filteredProducts.map((product, index) => (
                        <div key={index} className="flex flex-col gap-6 bg-purple-900 text-white p-6 rounded-lg shadow-lg">
                            <h2 className="text-lg font-headings">{product.name}</h2>
                            <p className="text-4xl font-numbers">${product.minPrice.amount}</p>
                            {product.isInStock ? (
                                <button
                                    data-billgang-product-path={product.uniquePath}
                                    data-billgang-domain="bonzaboost.bgng.io"
                                    onClick={() => setButtonVisible(true)}
                                    className="text-lg text-white font-headings font-semibold px-20 py-2 rounded-full bg-nitroPink transition ease-in-out hover:-translate-y-1 hover:shadow-xl hover:bg-nitroPink/80 duration-300"
                                >
                                    Purchase
                                </button>
                            ) :
                                <div
                                    className="text-lg text-white font-headings font-semibold px-20 py-2 rounded-full bg-gray-600 transition ease-in-out hover:-translate-y-1 hover:shadow-xl hover:bg-gray-500 duration-300"
                                >
                                    Sold Out
                                </div>
                            }
                            {product.shortDescription && (
                                <ul className="flex flex-col gap-2 font-semibold font-main">
                                    {product.shortDescription.split(', ').map((d, i) => (
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
                ) : (
                    <div className="grid grid-cols-subgrid gap-4 col-span-1 md:col-span-3 lg:col-span-4 text-center">
                        <p className="text-2xl font-main font-bold text-white">
                            No products available for this category.
                        </p>
                        <p className="text-2xl font-main font-bold text-white">
                            Check back soon!
                        </p>
                    </div>
                )}
            </div>
            {buttonVisible && (
                <div
                    className="z-[9999] fixed top-8 right-8 bg-nitroPink text-white hover:bg-dMode hover:border-white border-2 border-transparent cursor-pointer transition ease-in duration-200 rounded-lg p-4"
                    onClick={handleCloseModal}
                >
                    <SvgIcon>
                        <XMarkIcon className="stroke-[3]" />
                    </SvgIcon>
                </div>
            )}
        </div>
    )
}
