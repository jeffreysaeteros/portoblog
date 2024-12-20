import Link from 'next/link'
import React from "react";
import Image from 'next/image';

const navItems = {
    '/about': {
        name: 'about',
    },
    '/work': {
        name: 'work',
    },
    '/blog': {
        name: 'blog',
    },
}

export const Navbar = () => {
    return (
        <div className="sticky top-0 flex flex-col mr-32">
            <div className="text-4xl">
                <Link href="/">
                    jeffrey saeteros

                </Link>
            </div>
            <div className="flex flex-col gap-8 my-5">
                {Object.entries(navItems).map(([path, { name }]) => {
                    return (
                        <Link
                            key={path}
                            href={path}
                            className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 text-xl"
                        >
                            {name}
                        </Link>
                    );
                })}
            </div>
        </div>
    );
};