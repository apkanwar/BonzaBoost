import { useState, useEffect, useRef } from "react";
import { useIsVisible } from "@/lib/useIsVisible";
import ProductCard from "./productCard";
import Link from "next/link";

export default function Products() {
    const [groups, setGroups] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState([null]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const ref = useRef();
    const isVisible = useIsVisible(ref);
    const [buttonVisible, setButtonVisible] = useState(false);

    const handleCategoryClick = (group) => {
        setSelectedCategory(group.title);
        const sortedProducts = [...group.products_bound].sort((a, b) => Number(a.price) - Number(b.price));
        if (group.title == "Nitro")
            setFilteredProducts(group.products_bound);
        else
            setFilteredProducts(sortedProducts);
    };

    const fetchGroups = async () => {
        try {
            const response = await fetch('/api/fetch-sellix-groups');
            if (!response.ok) throw new Error('Failed to Fetch Groups');

            const groups = await response.json();
            if (groups && groups.length > 0) {
                setGroups(groups);
                setSelectedCategory(groups[0].title);
                const sortedProducts = [...groups[0].products_bound].sort((a, b) => Number(a.price) - Number(b.price));
                setFilteredProducts(sortedProducts);
                console.log(groups)
            } else {
                console.error("No groups found");
            }
        } catch (error) {
            console.error('Error Fetching Groups:', error);
        }
    };

    useEffect(() => {
        fetchGroups();
    }, []);

    useEffect(() => {
        const observer = new MutationObserver(() => {
            const sellixBackdrop = document.getElementById('backdrop');
            if (!sellixBackdrop) {
                setButtonVisible(false);
            }
        });
        observer.observe(document.body, {
            childList: true,
            subtree: true,
        });
        return () => {
            observer.disconnect();
        };
    }, [setButtonVisible]);

    return (
        <div ref={ref} id="products" className={`${isVisible ? "opacity-100" : "opacity-0"} transition-opacity ease-in duration-1000 flex flex-col items-center justify-center py-12 xl:py-24 mx-4`}>
            <div className="max-w-7xl pb-12 items-center flex flex-col text-white">
                <h2 className="font-headings text-4xl font-bold uppercase text-center mb-6">Get Started Today</h2>
            </div>

            {/* Groups */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 mx-auto mb-8">
                {groups && groups.length > 0 ? (
                    groups.map((group, index) => (
                        <div
                            key={index}
                            onClick={() => handleCategoryClick(group)}
                            className={`px-8 py-2 flex text-lg text-white font-main font-semibold items-center text-center justify-center rounded-full cursor-pointer ${selectedCategory === group.title ? 'bg-nitroPink' : 'bg-white/10 hover:bg-white/20'} shadow-lg select-none`}>
                            {group.title.substring(3)}
                        </div>
                    ))
                ) : null}
            </div>

            {/* Products */}
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 mx-auto my-8 max-w-7xl">
                {filteredProducts && filteredProducts.length > 0 ? (
                    filteredProducts.map((product, index) => (
                        <ProductCard
                            key={index}
                            product={product}
                            onPurchaseClick={() => setButtonVisible(true)}
                        />
                    ))
                ) : (
                    <>
                    </>
                )}
            </div>
            <div className="flex flex-col gap-4 items-center justify-center">
                <p className="font-headings text-lg text-white bg-gray-600 rounded p-4">
                    If you want to pay using <span className="font-bold">Paypal</span>, please using
                    the link below. We're in the process of creating a better solution in the coming
                    future.
                </p>
                <Link href={'https://paypal.me/BonzaBoost?country.x=CA&locale.x=en_US'} target="_blank" className="max-w-[400px] w-full bg-nitroPink text-white hover:bg-nitroPink/80 border-2 border-transparent cursor-pointer transition ease-in duration-200 rounded-lg text-center font-headings font-medium text-sm py-1.5 flex items-center justify-center">
                    Purchase Using PayPal F&F
                    <svg
                        width="20"
                        height="20"
                        className="ml-2 w-[1.1rem] h-[1.1rem] min-w-[1.1rem]"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M4.16675 10H15.8334"
                            stroke="currentColor"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        ></path>
                        <path
                            d="M10.8333 15L15.8333 10"
                            stroke="currentColor"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        ></path>
                        <path
                            d="M10.8333 5L15.8333 10"
                            stroke="currentColor"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        ></path>
                    </svg>
                </Link>
            </div>

            {/* {buttonVisible && (
                <div
                    className="z-[999999] fixed top-2/3 ml-[1px] left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-[436px] w-full bg-white text-gray-900 hover:bg-gray-300 border-2 border-transparent cursor-pointer transition ease-in duration-200 rounded-lg text-center font-headings font-medium text-sm py-1.5 flex items-center justify-center"
                >
                    Purchase Using PayPal F&F
                    <svg
                        width="20"
                        height="20"
                        className="ml-2 w-[1.1rem] h-[1.1rem] min-w-[1.1rem]"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M4.16675 10H15.8334"
                            stroke="currentColor"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        ></path>
                        <path
                            d="M10.8333 15L15.8333 10"
                            stroke="currentColor"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        ></path>
                        <path
                            d="M10.8333 5L15.8333 10"
                            stroke="currentColor"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        ></path>
                    </svg>
                </div>
            )} */}
        </div>
    )
}