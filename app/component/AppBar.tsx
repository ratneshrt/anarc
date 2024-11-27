'use client';

import { motion } from 'framer-motion';
import { Button } from './Button';
import { useSession, signIn, signOut } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link';

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
        <Link href='/'>
          <div className='flex items-center space-x-2'>
              <Image width={1} height={1} src='/anarc.svg' alt='ANARC logo' className='h-18 w-32 md:h-18 md:w-18 object-contain' />
          </div>
        </Link>
          {session.data?.user && <Button label='Sign Out' onClick={() => signOut({ callbackUrl: "/" })} />}
          {!session.data?.user && <Button label='Sign In' onClick={() => signIn()} />}
      </motion.div>
    </nav>
  );
}
