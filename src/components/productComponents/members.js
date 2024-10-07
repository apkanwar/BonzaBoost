import { CheckIcon } from '@heroicons/react/24/outline';
import { SvgIcon } from '@mui/material';

const Members = ({ products }) => {
    return (
        <>
            {products.map((p, index) => (
                <div key={index} className="flex flex-col gap-6 bg-purple-900 text-white p-6 rounded-lg shadow-lg">
                    <h2 className="text-lg font-headings">{p.title}</h2>
                    <div className='flex flex-row justify-between items-center'>
                        <p className="text-4xl font-numbers">${p.price}</p>
                        {p.price_discount !== 0 && (
                            <div className={`px-2 h-fit w-fit uppercase bg-green-100 text-green-700 border border-green-700 rounded`}>
                                {p.price_discount}% Off
                            </div>
                        )}
                    </div>
                    {p.stock > 0 ? (
                        <button
                            data-sellix-product={p.uniqid}
                            type="submit"
                            className="text-lg text-white font-headings font-semibold px-20 py-2 rounded-full bg-nitroPink transition ease-in-out hover:-translate-y-1 hover:shadow-xl hover:bg-nitroPink/80 duration-300"
                            alt="Buy Now with sellix.io"
                        >
                            Purchase
                        </button>
                    ) :
                        <div
                            data-sellix-product={p.uniqid}
                            type="submit"
                            className="text-lg text-white font-headings font-semibold px-20 py-2 rounded-full bg-gray-600 transition ease-in-out hover:-translate-y-1 hover:shadow-xl hover:bg-gray-500 duration-300"
                            alt="Buy Now with sellix.io"
                        >
                            Sold Out
                        </div>
                    }

                    {p.description && (
                        <ul className="flex flex-col gap-2 font-semibold">
                            {p.description.split(', ').map((d, i) => (
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
            ))}
        </>
    )
}

export default Members;