'use client';

import { useTypewriter, Cursor } from 'react-simple-typewriter';

export function Head({ preText }: { preText: string }) {
    const [text] = useTypewriter({
        words: [
            'create more',
            'stay sharp',
            'own it',
        ],
        loop: true,
    });

    return (
        <div className={`flex items-center justify-center px-6 sm:px-12 md:px-24 lg:px-32 xl:px-48 pb-24`}>
            <div className="text-center text-4xl sm:text-5xl md:text-6xl  text-white break-words font-mono leading-tight">
                {preText}
                <span className='text-blue-500'>{text}</span>
                <Cursor />
            </div>
        </div>
    );
}
