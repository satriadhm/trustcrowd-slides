// src/app/components/thesis-slides/SlideLayout.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";

interface SlideLayoutProps {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
  className?: string;
  contentClassName?: string;
  animationDelay?: number;
  showTitle?: boolean;
}

/**
 * Standardized layout wrapper for all thesis defense slides
 * Ensures consistent spacing, typography, and responsive behavior
 */
const SlideLayout: React.FC<SlideLayoutProps> = ({
  children,
  title,
  subtitle,
  className = "",
  contentClassName = "",
  animationDelay = 0,
  showTitle = true,
}) => {
  return (
    <div className={`w-full min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-8 ${className}`}>
      <div className="max-w-7xl mx-auto w-full">
        {/* Title Section - Consistent across all slides */}
        {showTitle && title && (
          <motion.div
            className="mb-8 sm:mb-10 lg:mb-12 text-center"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: animationDelay }}
            viewport={{ once: true }}
          >
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 text-white leading-tight">
              {title}
            </h1>
            {subtitle && (
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                {subtitle}
              </p>
            )}
          </motion.div>
        )}

        {/* Main Content Area */}
        <motion.div
          className={`${contentClassName}`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: animationDelay + 0.2 }}
          viewport={{ once: true }}
        >
          {children}
        </motion.div>
      </div>
    </div>
  );
};

export default SlideLayout;