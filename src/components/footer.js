import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-gray-200 font-headings dark:bg-midnight-black">
            <div className="mx-auto flex max-w-7xl items-center justify-center p-8">
                <div className="text-xl font-medium text-gray-900 dark:text-artic-blue text-center">
                    <Link href={'https://www.rezpoint.xyz/'} target='_blank' className='mr-2'>
                        &#169;
                    </Link>
                    2024 BonzaBoost
                </div>
            </div>
        </footer >
    )
}