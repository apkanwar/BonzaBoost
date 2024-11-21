import { Telegram } from '@mui/icons-material';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="font-headings select-none border-t border-dPurple">
            <div className="mx-auto flex max-w-7xl items-center justify-between pt-16 px-16 lg:px-8">
                <div className="flex flex-col gap-5 lg:gap-2">
                    <div className="text-2xl font-medium text-white">
                        <Link href={'/purchase-successful'} className='mr-2'>
                            &#169;
                        </Link>
                        2024 BonzaBoost
                    </div>
                    <div className="text-xl font-normal text-white inline-block lg:pl-6">
                        <Link href={'/terms-of-service'} className="inline-block cursor-pointer pr-3 hover:text-gray-400">
                            Terms of Service
                        </Link>
                    </div>
                </div>

                <div>
                    <div className="flex flex-col lg:flex-row">
                        <Link href={'https://www.discord.gg/U2y7tVqrp5'} target='_blank' className="p-2 hover:bg-artic-blue rounded-md mx-2 cursor-pointer transition ease-in duration-200">
                            <Image src={'/discord.svg'} width={'56'} height={'56'} className='my-2.5' alt='Discord Icon' />
                        </Link>
                        <Link href={'https://t.me/bonzaboost'} target='_blank' className="p-2 hover:bg-artic-blue rounded-md mx-2 cursor-pointer transition ease-in duration-200">
                            <Telegram style={{ fontSize: 56 }} sx={{ color: "#24A1DE" }} />
                        </Link>
                    </div>
                </div>
            </div>
            <div className="flex-col mx-auto flex max-w-7xl justify-between pb-16 px-16 lg:px-8">
                <div className="text-sm font-normal text-white inline-block mt-4 text-left">
                    <div className="inline-block pr-3">
                        Disclaimer: This website is in no way affiliated with, authorized, maintained, sponsored or endorsed by Discord Inc. (discord.com) or any of its affiliates or subsidiaries.
                    </div>
                </div>
                <h1 className='text-center text-white pt-6'>
                    Created By <Link href={'https://www.rezpoint.xyz'} className='hover:underline hover:underline-offset-4'>RezPoint</Link>
                </h1>
            </div>
        </footer >
    )
}