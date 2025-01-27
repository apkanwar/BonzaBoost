import { Check } from "@mui/icons-material";
import { SvgIcon } from "@mui/material";
import Link from "next/link";

const ProductCard = ({ product, paymentType }) => {
    return (
        <div className="flex flex-col gap-6 bg-purple-900 text-white p-6 rounded-lg shadow-lg">
            <h2 className="text-lg font-headings">{product.title}</h2>
            {/* Price and Discount */}
            <div className='flex flex-row justify-between items-center'>
                <p className="text-4xl font-numbers">${product.price}</p>
                {product.price_discount !== 0 && (
                    <div className={`px-2 h-fit w-fit uppercase bg-green-100 text-green-700 border border-green-700 rounded`}>
                        {product.price_discount}% Off
                    </div>
                )}
            </div>

            {/* Stock and Purchase Button */}
            {product.stock !== 0 ? (
                paymentType === "Crypto/Stripe" ? (
                    <div key={product.uniqid} className="product-container">
                        <button
                            data-sellix-product={product.uniqid}
                            type="submit"
                            alt="Buy Now with sellix.io"
                            className="text-lg text-white font-headings font-semibold px-20 py-2 rounded-full bg-nitroPink transition ease-in-out hover:-translate-y-1 hover:shadow-xl hover:bg-nitroPink/80 duration-300"
                        >
                            Purchase
                        </button>
                    </div>
                ) : (
                    <Link key={product.uniqid} className="text-lg text-white font-headings font-semibold px-20 py-2 rounded-full bg-blue-500 transition ease-in-out hover:-translate-y-1 hover:shadow-xl hover:bg-blue-900 duration-300"
                        href={{
                            pathname: `/paypal/${product.uniqid}`,
                            query: { data: JSON.stringify(product) }, // Pass product data as a query param
                        }}>
                        Purchase
                    </Link>
                )
            ) : (
                <div className="text-lg text-white font-headings font-semibold px-20 py-2 rounded-full bg-gray-600 transition ease-in-out hover:-translate-y-1 hover:shadow-xl hover:bg-gray-500 duration-300">
                    Sold Out
                </div>
            )}

            {/* Description */}
            {product.description && (
                <ul className="flex flex-col gap-2 font-semibold font-main">
                    {product.description.split(', ').map((d, i) => (
                        <li key={i} className="flex items-center gap-2">
                            <SvgIcon className="font-bold">
                                <Check />
                            </SvgIcon>
                            <span>{d}</span>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default ProductCard;
