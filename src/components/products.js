import { useState, useEffect, useRef } from "react";
import { useIsVisible } from "@/lib/useIsVisible";
import OneMonthBoost from "./productComponents/oneMonthBoost";
import ThreeMonthBoost from "./productComponents/threeMonthBoost";
import SixMonthBoost from "./productComponents/sixMonthBoost";
import YearBoost from "./productComponents/yearBoost";
import LifetimeBoost from "./productComponents/lifetimeBoost";
import Members from "./productComponents/members";
import Nitro from "./productComponents/nitro";
import YouTube from "./productComponents/youtube";

export default function Products() {
    const [groups, setGroups] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const ref = useRef();
    const isVisible = useIsVisible(ref);

    useEffect(() => {
        fetchGroups();
    }, []);

    const fetchGroups = async () => {
        try {
            const response = await fetch('/api/sellix-groups');
            if (!response.ok) {
                throw new Error('Failed to Fetch Groups');
            }
            const groups = await response.json();

            if (groups && groups.length > 0) {
                setGroups(groups);
                setSelectedCategory(groups[0].title);
                const sortedProducts = [...groups[0].products_bound].sort((a, b) => Number(a.price) - Number(b.price));
                setFilteredProducts(sortedProducts);
            } else {
                console.error("No groups found");
            }
        } catch (error) {
            console.error('Error Fetching Groups:', error);
        }
    };

    const handleCategoryClick = (group) => {
        setSelectedCategory(group.title);
        const sortedProducts = [...group.products_bound].sort((a, b) => Number(a.price) - Number(b.price));
        if (group.title =="Nitro")
            setFilteredProducts(group.products_bound);
        else
            setFilteredProducts(sortedProducts);
    };

    return (
        <div ref={ref} id="products" className={`${isVisible ? "opacity-100" : "opacity-0"} transition-opacity ease-in duration-1000 flex flex-col items-center justify-center py-12 xl:py-24 mx-4`}>
            <div className="max-w-7xl pb-12 items-center flex flex-col text-white">
                <h1 className="font-headings text-4xl font-bold uppercase text-center mb-6">Get Started Today</h1>
            </div>

            {/* Groups */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 mx-auto mb-8">
                {groups && groups.length > 0 ? (
                    groups.map((group, index) => (
                        <div
                            key={index}
                            onClick={() => handleCategoryClick(group)}
                            className={`px-8 py-2 flex text-lg text-white font-main font-semibold items-center justify-center rounded-full cursor-pointer ${selectedCategory === group.title ? 'bg-nitroPink' : 'bg-white/10 hover:bg-white/20'} shadow-lg select-none`}>
                            {group.title}
                        </div>
                    ))
                ) : null}
            </div>

            {/* Products for Selected Group */}
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 mx-auto my-8 max-w-7xl">
                {selectedCategory === '1 Month Boost' ? (
                    <OneMonthBoost products={filteredProducts} />
                ) : selectedCategory === '3 Month Boost' ? (
                    <ThreeMonthBoost products={filteredProducts} />
                ) : selectedCategory === '6 Month Boost' ? (
                    <SixMonthBoost products={filteredProducts} />
                ) : selectedCategory === '1 Year Boost' ? (
                    <YearBoost products={filteredProducts} />
                ) : selectedCategory === 'Lifetime Boost' ? (
                    <LifetimeBoost products={filteredProducts} />
                ) : selectedCategory === 'Members' ? (
                    <Members products={filteredProducts} />
                ) : selectedCategory === 'Nitro' ? (
                    <Nitro products={filteredProducts} />
                ) : selectedCategory === 'YouTube' ? (
                    <YouTube products={filteredProducts} />
                ) : null}
            </div>
        </div>
    )
}
