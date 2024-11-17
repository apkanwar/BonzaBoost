import { CheckIcon } from "@heroicons/react/24/outline";
import { SvgIcon } from "@mui/material";

const ProductCard = ({ product, onPurchase }) => {
    return (
        <div className="flex flex-col gap-6 bg-purple-900 text-white p-6 rounded-lg shadow-lg">
            <h2 className="text-lg font-headings">{product.name}</h2>
            <p className="text-4xl font-numbers">${product.minPrice.amount}</p>
            {product.isInStock ? (
                <button
                    data-billgang-product-path={product.uniquePath}
                    data-billgang-domain="bonzaboost.bgng.io"
                    onClick={onPurchase}
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
    );
};

export default ProductCard;
