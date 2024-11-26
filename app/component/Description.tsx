"use client"


import { signIn, signOut, useSession } from "next-auth/react";
import { Button } from "./Button";

export function Description({ text }: { text: string }) {
    const session = useSession()
    return (
        <div className="text-center text-white leading-snug flex flex-col justify-center items-center px-6 sm:px-12 md:px-24 lg:px-32 xl:px-40 md:text-3xl py-16 space-y-8">
            <p className="max-w-4xl">{text}</p>
            <div className="mt-6 pb-24 pt-4">
                {session.data?.user && <Button label="Sign Out" onClick={() => signOut({callbackUrl: "/"})} />}
                {!session.data?.user && <Button label="Sign In" onClick={() => signIn()} />}
            </div>
        </div>
    );
}
