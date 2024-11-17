import { useState, useEffect, useRef, useCallback } from "react";
import { useIsVisible } from "@/lib/useIsVisible";
import { XMarkIcon } from '@heroicons/react/24/outline';
import { SvgIcon } from '@mui/material';
import ProductCard from "./productCard";

export default function Products() {
    const [groups, setGroups] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [products, setProducts] = useState(null);

    const [buttonVisible, setButtonVisible] = useState(false);
    const ref = useRef();
    const isVisible = useIsVisible(ref);

    const handleCategoryClick = useCallback((group) => {
        setSelectedCategory(group.name);
    }, [products]);

    const filteredProducts = selectedCategory && products
        ? products[selectedCategory]
        : [];

    const fetchGroups = async () => {
        try {
            const response = await fetch('/api/billgang-categories');
            if (!response.ok) throw new Error('Failed to Fetch Groups');

            const allGroups = await response.json();
            const selfCreatedGroups = allGroups.filter(group => !group.name.includes('All'));
            setGroups(selfCreatedGroups);

            const productResponses = await Promise.all(
                selfCreatedGroups.map(group =>
                    fetch(`/api/billgang-products?categoryId=${group.id}`)
                )
            );

            let data = {};
            for (let i = 0; i < productResponses.length; i++) {
                const response = productResponses[i];
                if (!response.ok) throw new Error('Failed to Fetch Products');
                const products = await response.json();
                data[selfCreatedGroups[i].name] = products;
            }

            setProducts(data);
            handleCategoryClick(selfCreatedGroups[0]);
        } catch (error) {
            console.error('Error Fetching Groups:', error);
        }
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
                        <ProductCard
                            key={product.id}
                            product={product}
                            onPurchase={() => setButtonVisible(true)}
                        />
                    ))
                ) : (
                    <>
                    </>
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
