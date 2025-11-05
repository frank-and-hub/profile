import React from "react";
import SocialMedia from "../socail-media/socail-media";
import Link from "next/link";

export default function Footer() {
    const navigation = {
        main: [
            { name: 'Works', href: '#works' },
            { name: 'Experience', href: '#experience' },
            { name: 'Services', href: '#price' },
            { name: 'Contact', href: '#contact' },
        ],
    };

    return (
        <footer className={`bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800`} >
            <div className={`max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8`} >
                <div className={`xl:grid xl:grid-cols-3 xl:gap-8`} >
                    <div className={`space-y-8 xl:col-span-1`} >
                        <div>
                            <Link href={`#`} className={`text-2xl font-bold gradient-text`} >
                                Frank Dev
                            </Link>
                            <p className={`mt-2 text-sm text-gray-600 dark:text-gray-300`} >
                                Full-stack developer & designer crafting exceptional digital experiences.
                            </p>
                        </div>
                        <div className={`flex space-x-6`} >
                            <SocialMedia />
                        </div>
                    </div>
                    <div className={`mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2`} >
                        <div className={`md:grid md:grid-cols-2 md:gap-8`} >
                            <div>
                                <h3 className={`text-sm font-semibold text-gray-900 dark:text-white tracking-wider uppercase`} >
                                    Navigation
                                </h3>
                                <ul className={`mt-4 space-y-4`} >
                                    {navigation.main.map((item) => (
                                        <li key={item.name}>
                                            <Link
                                                href={item.href}
                                                className={`text-base text-gray-600 hover:text-purple-600 dark:text-gray-300 dark:hover:text-purple-400 transition-colors duration-200`}
                                            >
                                                {item.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className={`mt-12 md:mt-0`} >
                                <h3 className={`text-sm font-semibold text-gray-900 dark:text-white tracking-wider uppercase`} >
                                    Contact
                                </h3>
                                <ul className={`mt-4 space-y-4`} >
                                    <li>
                                        <Link href={`mailto:sourabbiswas000x@gmail.com`} className={`text-base text-gray-600 hover:text-purple-600 dark:text-gray-300 dark:hover:text-purple-400 transition-colors duration-200`}>
                                            sourabbiswas000x@gmail.com
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`mt-12 border-t border-gray-200 dark:border-gray-800 pt-8`} >
                    <p className={`text-base text-gray-500 dark:text-gray-400 text-center`} >
                        © {new Date().getFullYear()} Frank Dev. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
