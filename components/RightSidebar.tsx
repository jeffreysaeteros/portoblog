import React from 'react';
import Link from 'next/link';

export const RightSidebar = () => {
    return (
        <div className="basis-1/3 w-full">
            <div className="prose prose-neutral dark:prose-invert">
                <div className="flex flex-col items-center space-y-4 text-sm">
                    <Link href={'https://github.com/jeffreysaeteros'}>GitHub</Link>
                    <Link href={'https://www.linkedin.com/in/jeffrey-saeteros/'}>LinkedIn</Link>
                </div>
            </div>
        </div>
    );
};
