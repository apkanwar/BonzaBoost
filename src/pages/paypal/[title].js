import RoundedNavbar from "@/components/roundedNavbar";
import Footer from "@/components/footer";
import { NextSeo } from "next-seo";
import Contact from "@/components/contact";
import { useRouter } from "next/router";
import { useState } from "react";
import Image from 'next/image'
import styles from '@/styles/description.module.css'
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaypal } from "@fortawesome/free-brands-svg-icons";

export default function ProductPaypal({ product }) {
    const [quantity, setQuantity] = useState(1);

    if (!product) {
        return (
            <div className="text-center text-white mt-20">
                <h1>Product Not Found</h1>
            </div>
        );
    }

    const handleIncrease = () => {
        setQuantity((prev) => Math.min(prev + 1, 2000)); // Limit to 2000
    };

    const handleDecrease = () => {
        setQuantity((prev) => Math.max(prev - 1, 1)); // Minimum is 1
    };

    const totalPrice = (product.price * quantity).toFixed(2);

    return (
        <>
            <NextSeo
                title={`${product.title} | Bonza Boost`}
                description='Bonza Boost is the place to safely purchase cheap and affordable server boosts.'
                canonical='https://www.bonzaboost.cc/products'
                openGraph={{
                    url: 'https://www.bonzaboost.cc/products',
                    title: "Bonza Boost | ",
                    description: 'Bonza Boost is the place to safely purchase cheap and affordable server boosts.',
                    images: [
                        {
                            url: '/logo.png',
                            width: 500,
                            height: 500,
                            alt: `${product.title} | Bonza Boost`,
                            type: 'image/png'
                        }
                    ],
                    siteName: 'Bonza Boost'
                }}
            />

            <RoundedNavbar />
            <div className="font-headings pt-24 mx-auto flex max-w-5xl px-6 lg:px-8">
                <div className={styles.imageBox}>
                    <Image src={'/logo.png'} height={400} width={400} alt="Product Image" priority={true} />
                </div>

                <div className={styles.info}>
                    <h2 className="text-white text-4xl font-medium m-0">{product.title}</h2>
                    <div className="rounded-md text-white px-4 py-2 bg-nitroPink w-fit">
                        <h3 className="text-2xl font-medium mt-1">$ {product.price}</h3>
                    </div>
                    <div className="font-medium text-sm flex flex-col gap-16">
                        <div className="flex flex-row items-center gap-4">
                            <label className="text-xl font-medium mt-1 text-white">Quantity:</label>
                            <div className="flex items-center border border-white rounded-md w-fit text-lg">
                                {/* Decrease Button */}
                                <button
                                    onClick={handleDecrease}
                                    className="px-4 py-2 text-white disabled:text-gray-400"
                                    disabled={quantity === 1}
                                >
                                    –
                                </button>
                                {/* Quantity Input */}
                                <input
                                    type="number"
                                    value={quantity}
                                    onChange={(e) => {
                                        const value = parseInt(e.target.value, 10);
                                        if (!isNaN(value) && value > 0 && value <= 2000) {
                                            setQuantity(value);
                                        }
                                    }}
                                    className="w-16 text-center px-2 py-2 bg-transparent text-white outline-none appearance-none"
                                    min="1"
                                    max="2000"
                                />
                                {/* Increase Button */}
                                <button
                                    onClick={handleIncrease}
                                    className="px-4 py-2 text-white disabled:text-gray-400"
                                    disabled={quantity === 2000}
                                >
                                    +
                                </button>
                            </div>
                        </div>

                        {/* Total Price */}
                        <div className="flex flex-row">
                            <div className="text-white py-3 px-3 pl-5 w-fit text-xl font-bold border-l border-y border-white">
                                Total
                            </div>
                            <div className="text-white py-3 px-3 pr-5 w-fit text-xl font-bold bg-nitroPink border-r border-y border-white">
                                $ {totalPrice}
                            </div>

                            <Link href={'https://paypal.me/BonzaBoost?country.x=CA&locale.x=en_US'} target="_blank"
                                className="flex flex-row justify-center items-center ml-8 text-xl text-white bg-blue-700 hover:shadow-xl hover:bg-blue-900 hover:translate-x-1 transition ease-in-out duration-300 rounded-md px-4 py-2">
                                <FontAwesomeIcon icon={faPaypal} className="text-white h-5 mr-4" />
                                Purchase
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
                    </div>
                </div>
            </div>
            <Contact />
            <Footer />
        </>
    )
}

export async function getServerSideProps(context) {
    const productData = context.query.data ? JSON.parse(context.query.data) : null;

    return {
        props: {
            product: productData || null, // Default to null if no data is provided
        },
    };
}