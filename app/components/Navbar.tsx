import Link from 'next/link'
import React from "react";
import Image from 'next/image';

const navItems = {
    '/about': { name: 'about', title: 'About Jeffrey' },
    '/work': { name: 'work', title: '/work' },
    '/blog': { name: 'blog', title: '/blog' },
};
const links = [
    { name: 'read.cv', url: 'https://read.cv/jeffreysaeteros' },
    { name: 'linkedin', url: 'https://www.linkedin.com/in/jeffrey-saeteros' },
    { name: 'github', url: 'https://github.com/jeffreysaeteros' },
];

export const Navbar = () => {
    return (
        <div className="sticky top-0 flex flex-col mr-20 w-40 pt-6">
            <div className="text-3xl">
                <Link href="/">jeffrey saeteros</Link>
            </div>
            <div className="flex flex-col gap-8 py-5 ">
                {Object.entries(navItems).map(([path, { name }]) => (
                    <Link
                        key={path}
                        href={path}
                        className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 text-xl"
                    >
                        {name}
                    </Link>
                ))}
            </div>

            <div className="flex flex-col gap-8 py-5">
                {
                    links.map((link) => (
                        <a
                            key={link.name}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="dark:text-white text-black hover:text-blue-500 transition-colors duration-200"
                        >
                            {link.name}
                        </a>
                    ))
                }
            </div>
        </div>
    );
};