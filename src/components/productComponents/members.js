import { CheckIcon } from '@heroicons/react/24/outline';
import { SvgIcon } from '@mui/material';

const Members = ({ products }) => {
    return (
        <>
            {products.map((p, index) => (
                <div key={index} className="flex flex-col gap-6 bg-purple-900 text-white p-6 rounded-lg shadow-lg">
                    <h2 className="text-lg font-headings">{p.name}</h2>
                    <p className="text-5xl font-numbers">{p.price}</p>
                    <button
                        data-sellix-product={p.id}
                        type="submit"
                        className="text-lg text-white px-20 py-2 rounded-full bg-nitroPink transition ease-in-out hover:-translate-y-1 hover:shadow-xl hover:bg-nitroPink/80 duration-300"
                        alt="Buy Now with sellix.io"
                    >
                        Purchase
                    </button>

                    {p.desc && (
                        <ul className="flex flex-col gap-2 font-semibold">
                            {p.desc.map((d, i) => (
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