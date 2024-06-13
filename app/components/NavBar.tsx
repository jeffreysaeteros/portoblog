import Link from 'next/link'

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

export function Navbar() {
    return (
        <div className="min-h-screen flex flex-row px-8 mt-8 ">
            <div className="flex flex-col w-56 overflow-hidden">
                <div className="my-10 flex w-40 items-center justify-center h-20 shadow-md">
                    <h1 className="text-4xl text-wrap text-white">jeffrey saeteros</h1>
                </div>
                <div className="flex flex-col">
                    {Object.entries(navItems).map(([path, { name }]) => {
                        return (
                            <Link
                                key={path}
                                href={path}
                                className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 py-3"
                            >
                                {name}
                            </Link>
                        )
                    })}
                </div>
            </div>
        </div>

    )
}
