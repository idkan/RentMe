import Link from "next/link";
import { Disclosure, } from "@headlessui/react"
import { HiOutlineHome, HiMenuAlt1, HiOutlineX } from "react-icons/hi";
import { FcHome } from "react-icons/fc";

const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Rent Property', href: '/search?purpose=for-rent' },
    { name: 'Buy Property', href: '/search?purpose=for-sale' },
    { name: 'Search', href: '/search' },
]

const Navbar = () => (
    <Disclosure as="nav" className="bg-gray-100 rounded">
        {({ open }) => (
            <>
                <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                    <div className="relative flex items-center justify-between h-16">
                        <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                            <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                <span className="sr-only">Open main menu</span>
                                {open ? (<HiOutlineX className="block h-6 w-6" aria-hidden="true" />) : (<HiMenuAlt1 className="block h-6 w-6" aria-hidden="true" />)}
                            </Disclosure.Button>
                        </div>
                        <div className="flex-1 flex items-center justify-center sm:items-center sm:justify-start">
                            <div className="flex-shrink-0 flex items-center">
                                <HiOutlineHome color="black" className="block lg:hidden h-8 w-auto" />
                                <div className="flex-shrink-0 flex items-center">
                                    <FcHome color="white" className="hidden lg:block h-8 w-auto" />
                                    <p className="hidden lg:block text-black text-2xl font-medium title-font ml-1">RentMe</p>
                                </div>
                            </div>
                            <div className="hidden sm:block sm:ml-6">
                                <div className="flex space-x-4">
                                    {navigation.map((item) => (
                                        <Link key={item.name} href={item.href}>
                                            <p className='text-black hover:bg-gray-400 hover:text-white px-3 py-2 rounded-md text-base font-medium cursor-pointer'>
                                                {item.name}
                                            </p>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <Disclosure.Panel className="sm:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1">
                        {navigation.map((item) => (
                            <Disclosure.Button key={item.name} as="a" href={item.href}
                                className='text-gray-700 hover:bg-gray-400 hover:text-white block px-3 py-2 rounded-md text-base font-medium'
                            >
                                {item.name}
                            </Disclosure.Button>
                        ))}
                    </div>
                </Disclosure.Panel>
            </>
        )}
    </Disclosure>
);


export default Navbar;