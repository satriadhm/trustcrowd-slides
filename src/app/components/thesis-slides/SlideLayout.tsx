"use client";

import React from "react";
import { motion } from "framer-motion";

// Import typography system
const TYPOGRAPHY = {
  slideTitle: "text-3xl sm:text-4xl lg:text-5xl xl:text-6xl",
  subtitle: "text-base sm:text-lg lg:text-xl xl:text-2xl",
} as const;

interface SlideLayoutProps {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
  className?: string;
  contentClassName?: string;
  animationDelay?: number;
  showTitle?: boolean;
}

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
        {showTitle && title && (
          <motion.div
            className="mb-6 sm:mb-8 lg:mb-10 text-center"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: animationDelay }}
            viewport={{ once: true }}
          >
            <h1 className={`${TYPOGRAPHY.slideTitle} font-bold mb-3 sm:mb-4 text-white leading-tight`}>
              {title}
            </h1>
            {subtitle && (
              <p className={`${TYPOGRAPHY.subtitle} text-gray-300 max-w-4xl mx-auto leading-relaxed`}>
                {subtitle}
              </p>
            )}
          </motion.div>
        )}

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