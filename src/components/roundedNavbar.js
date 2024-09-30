import { Popover } from '@headlessui/react'
import HelpIcon from '@mui/icons-material/Help';
import Image from 'next/image';
import Link from 'next/link'

const RoundedNavbar = ({ links }) => {
    return (
        <div className='transition-none mt-4'>
            <header className="bg-dPurple text-white rounded-full w-[95vw] m-auto shadow-lg">
                <div className='bg-white/20 rounded-full ring-2 ring-black backdrop-blur-3xl'>
                    <nav className="w-full flex items-center justify-between p-2 px-4">
                        {/* Logo */}
                        <div className="flex lg:flex-1">
                            <Link href={"/"} className='flex flex-row items-center gap-4'>
                                <Image width={48} height={48} src="/favicon.ico" alt="" />
                                <h1 className='font-bold font-headings text-xl'>BonzaBoost</h1>
                            </Link>
                        </div>
                        <div className="flex lg:hidden">
                            <Link href={"/faq"} className='xl:hidden my-0 p-1 hover:bg-gray-800 rounded-full'>
                                <HelpIcon fontSize='large' />
                            </Link>
                        </div>

                        {/* Middle Icons */}
                        {links && (
                            <Popover.Group className="hidden lg:flex lg:gap-x-14 font-semibold leading-6 text-lg">
                                <div className="relative transition-none">
                                    <a href={"#about"} className='group transition duration-300'>
                                        About
                                        <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-white"></span>
                                    </a>
                                </div>
                                <div className="relative transition-none">
                                    <a href={"#features"} className='group transition duration-300'>
                                        Features
                                        <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-white"></span>
                                    </a>
                                </div>
                                <div className="relative transition-none">
                                    <a href={"#products"} className='group transition duration-300'>
                                        Products
                                        <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-white"></span>
                                    </a>
                                </div>
                                <div className="relative transition-none">
                                    <Link href={"/faq"} className='group transition duration-300'>
                                        FAQ
                                        <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-white"></span>
                                    </Link>
                                </div>
                            </Popover.Group>
                        )}

                        {/* Right Buttons */}
                        {links && (
                            <div className="hidden lg:flex lg:flex-1 lg:justify-end font-headings">
                                <Link href={'/'} className="font-bold text-lg px-6 py-1 border-solid border-4 rounded-full hover:bg-dMode transition ease-in duration-200">
                                    Join the Discord
                                </Link>
                            </div>
                        )}
                    </nav>
                </div>
            </header>
        </div>
    )
}

export default RoundedNavbar;