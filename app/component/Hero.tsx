'use client';

import { useState } from 'react';
import styles from '../page.module.scss';
import useMousePosition from '../lib/utils/useMousePostion';
import { motion } from 'framer-motion';
import { Spotlight } from './ui/Soptlight';
import { AuroraBackground } from './ui/Aurora-Background';

export function Hero({ anarc, desc1, desc21, desc22 }: { anarc: string; desc1: string; desc21: string; desc22: string }) {
  const [isHovered, setHovered] = useState(false);
  const { x, y } = useMousePosition();
  const size = isHovered ? 400 : 40;

  return (
    <>
      <div className="bg-black/[0.96] antialiased">
          <div
          className={`${styles.hero} flex flex-col items-center justify-center`}>
            <motion.div
              className={styles.mask}
              animate={{
                WebkitMaskPosition: `${x - size / 2}px ${y - size / 2}px`,
                WebkitMaskSize: `${size}px`,
              }}
              transition={{ type: 'tween', ease: 'backOut', duration: 0.5 }}
            >
              <p
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                className="text-center"
              >
                <span className={styles['white-text']}>{anarc}</span> {desc1}
              </p>
            </motion.div>
            <div className={`${styles.body} flex flex-col items-center`}>
              <p className="text-center">
                {desc21} <span>{anarc}</span> {desc22}
              </p>
              <div className="mt-4">
                <svg
                  className="h-8 w-8 text-white animate-bounce"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="8 12 12 16 16 12" />
                  <line x1="12" y1="8" x2="12" y2="16" />
                </svg>
              </div>
            </div>
          </div>
          <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="blue"></Spotlight>
          <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="blue"></Spotlight>
      </div>
    </>
  );
}
