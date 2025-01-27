import { useState, useEffect, useRef } from "react";
import { useIsVisible } from "@/lib/useIsVisible";
import ProductCard from "./productCard";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBitcoin, faPaypal } from "@fortawesome/free-brands-svg-icons";
import { faCreditCard } from "@fortawesome/free-solid-svg-icons";

export default function Products() {
    const [groups, setGroups] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState([null]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const ref = useRef();
    const isVisible = useIsVisible(ref);
    const [paymentMethod, setPaymentMethod] = useState("Crypto/Stripe");

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

            {/* Payment Switch */}
            <div className="flex w-full max-w-7xl">
                <div
                    className={`flex ml-auto flex-row p-1 rounded-full items-center transition-colors duration-300 ${paymentMethod === "PayPal" ? "bg-blue-700" : "bg-bitcoin"
                        }`}
                >
                    {/* Switch */}
                    <div
                        className="relative w-28 h-10 flex items-center bg-gray-600 rounded-full cursor-pointer"
                        onClick={() =>
                            setPaymentMethod((prev) => (prev === "Crypto/Stripe" ? "PayPal" : "Crypto/Stripe"))
                        }
                    >
                        {/* Circle with Icon */}
                        <div
                            className={`absolute h-10 w-10 rounded-full transform transition-transform duration-300 flex items-center justify-center ${paymentMethod === "PayPal"
                                    ? "translate-x-[4.5rem] bg-blue-700"
                                    : "translate-x-0 bg-bitcoin w-16"
                                }`}
                        >
                            {paymentMethod === "PayPal" ? (
                                <FontAwesomeIcon icon={faPaypal} className="text-white h-5" />
                            ) : (
                                <span
                                    className={`flex flex-row gap-2 transition-opacity duration-300 ${paymentMethod === "PayPal" ? "opacity-0" : "opacity-100"
                                        }`}
                                >
                                    <FontAwesomeIcon icon={faCreditCard} className="text-white h-5" />
                                    <FontAwesomeIcon icon={faBitcoin} className="text-white h-5" />
                                </span>
                            )}
                        </div>
                    </div>
                </div>
            </div>



            {/* Products */}
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 mx-auto my-8 max-w-7xl">
                {filteredProducts && filteredProducts.length > 0 ? (
                    filteredProducts.map((product) => (
                        <ProductCard
                            key={product.uniqid} // Use a unique key
                            product={product}
                            paymentType={paymentMethod} // Pass paymentMethod as paymentType
                        />
                    ))
                ) : (
                    <p>No Products Available</p>
                )}
            </div>
        </div>
    )
}