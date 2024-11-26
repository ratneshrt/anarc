'use client';

import { motion } from 'framer-motion';
import { Button } from './Button';
import { useSession, signIn, signOut } from 'next-auth/react'
import Image from 'next/image'

export function AppBar() {
  const session = useSession()
  return (
    <nav className="sticky top-0 z-20 w-full bg-black/30 backdrop-blur-md shadow-lg border border-neutral-200/10 p-4">
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
        className="flex items-center justify-between max-w-7xl mx-auto"
      >
        <div className='flex items-center space-x-2'>
            <Image src='/anarc.svg' alt='ANARC logo' className='h-8 w-8 md:h-10 md:w-10 object-contain' />
            <span className="text-lg md:text-2xl font-bold tracking-tight text-foreground">
            ANARC
            </span>
        </div>
          {session.data?.user && <Button label='Sign Out' onClick={() => signOut({ callbackUrl: "/" })} />}
          {!session.data?.user && <Button label='Sign In' onClick={() => signIn()} />}
      </motion.div>
    </nav>
  );
}
