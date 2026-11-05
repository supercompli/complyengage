'use client';

import { motion } from 'motion/react';

// Re-mounts on every navigation, so each page fades in like the old PageWrapper did.
export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className="flex-grow"
    >
      {children}
    </motion.div>
  );
}
