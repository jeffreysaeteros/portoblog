// components/CenterContent.tsx
import React from 'react';

export const CenterContent = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="basis-2/3 w-full">
            {children}
        </div>
    );
};
