import Link from "next/link";
import { FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Rent Property', href: '/search?purpose=for-rent' },
    { name: 'Buy Property', href: '/search?purpose=for-sale' },
    { name: 'Search', href: '/search' },
]

const Footer = () => (
    <footer class="bg-gray-100 pt-10 sm:mt-10">
        <div class="max-w-6xl m-auto text-gray-800 flex flex-wrap justify-evenly items-center">
            {navigation.map((item) => (
                <Link key={item.name} href={item.href}>
                    <p className="text-xs uppercase text-gray-400 font-medium mb-6 cursor-pointer">{item.name}</p>
                </Link>
            ))}
        </div>

        <div class="pt-2">
            <div class="flex pb-5 px-3 m-auto pt-5 border-t border-gray-500 text-gray-400 text-sm flex-col md:flex-row max-w-6xl">
                <div class="mt-2">
                    © Copyright 2022 RentMe. All Rights Reserved.
                </div>
                <div class="md:flex-auto md:flex-row-reverse mt-2 flex-row flex">
                    <a href="https://twitter.com/idkantv" target="_blank"  class="w-6 mx-1">
                        <FaTwitter />
                    </a>
                    <a href="https://www.linkedin.com/in/abraham-serena/" target="_blank"  class="w-6 mx-1">
                        <FaLinkedin />
                    </a>
                    <a href="https://www.instagram.com/abraham_salk/" target="_blank"  class="w-6 mx-1">
                        <FaInstagram />
                    </a>
                </div>
            </div>
        </div>
    </footer>
)

export default Footer;