'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';

interface ButtonProps {
  children: React.ReactNode;
  to?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'vibrant' | 'outline' | 'ghost';
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

export default function Button({
  children,
  to,
  onClick,
  variant = 'primary',
  className = '',
  type = 'button',
  disabled = false,
}: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center px-6 py-3 rounded-md text-sm font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-vibrant-amber focus:ring-offset-2 focus:ring-offset-warm-white disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-[#14283F] text-white hover:bg-[#14283F]/90",
    secondary: "bg-[#24766C] text-white hover:bg-[#24766C]/90",
    vibrant: "bg-vibrant-amber text-[#14283F] font-semibold hover:bg-vibrant-amber/90 shadow-sm",
    outline: "border border-[#E2E7E8] bg-white text-[#263544] hover:bg-[#FAF9F6]",
    ghost: "text-[#263544] hover:bg-[#E2E7E8]/30",
  };

  const combinedClassName = `${baseStyles} ${variants[variant]} ${className}`;

  if (to) {
    return (
      <Link href={to} className={combinedClassName}>
        {children}
      </Link>
    );
  }

  return (
    <motion.button
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.99 }}
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={combinedClassName}
    >
      {children}
    </motion.button>
  );
}
