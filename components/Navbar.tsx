import Link from 'next/link'
import React from "react";

const navItems = {
    '/': {
        name: 'home',
    },
    '/work': {
        name: 'work',
    },
    '/blog': {
        name: 'blog',
    },
}

export function NameTransition() {
    return (
        <h1 className="transition-element text-3xl">
            <span className="sr-only">jeffrey saeteros</span>
            <span aria-hidden="true" className="block overflow-hidden  group relative">
                {/* 'jeffrey saeteros' remains as white */}
                <span className="inline-block transition-all duration-300 ease-in-out group-hover:-translate-y-full">
                    {'jeffrey saeteros'.split('').map((letter, index) => (
                        <span
                            key={index}
                            className="inline-block text-red-50"
                            style={{ transitionDelay: `${index * 25}ms` }}
                        >
                            {letter === ' ' ? '\u00A0' : letter}
                        </span>
                    ))}
                </span>
                {/* 'jeffsaet' will be black when hidden and transition to white when revealed */}
                <span className="inline-block absolute left-0 top-0 transition-all duration-300 ease-in-out translate-y-full group-hover:translate-y-0">
                    {'jeffsaet'.split('').map((letter, index) => (
                        <span
                            key={index}
                            className="inline-block transition-colors duration-300 ease-in-out"
                            style={{
                                transitionDelay: `${index * 25}ms`,
                            }}
                        >
                            {letter}
                        </span>
                    ))}
                </span>
            </span>
        </h1>
    );
}



export const Navbar = () => {
    return (
        <div className="flex flex-col px-8">
            {/* <div className="w-40 shadow-md"> */}
            <NameTransition />
            {/* </div> */}
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
                    )
                })}
            </div>
        </div>
    )
}
