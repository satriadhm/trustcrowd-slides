"use client";

import React, { JSX } from "react";
import { motion } from "framer-motion";

const TYPOGRAPHY = {
  // Slide titles - Main heading for each slide
  slideTitle: "text-3xl sm:text-4xl lg:text-5xl xl:text-6xl",
  
  // Section titles - Major sections within slides
  sectionTitle: "text-xl sm:text-2xl lg:text-2xl xl:text-3xl",
  
  // Card titles - Titles for content cards
  cardTitle: "text-lg sm:text-xl lg:text-xl xl:text-2xl",
  
  // Sub headings - Minor headings and labels
  subHeading: "text-base sm:text-lg lg:text-lg xl:text-xl",
  
  // Body text - Main readable content
  bodyText: "text-sm sm:text-base lg:text-base xl:text-lg",
  
  // Small text - Captions, metadata, fine print
  smallText: "text-xs sm:text-sm lg:text-sm xl:text-base",
  
  // Extra small - Very fine details (increased size)
  extraSmall: "text-sm sm:text-sm lg:text-base xl:text-base",
  
  // Formula text - Mathematical expressions
  formulaText: "text-lg sm:text-xl lg:text-2xl xl:text-3xl",
  
  // Metric numbers - Large display numbers
  metricNumber: "text-2xl sm:text-3xl lg:text-4xl xl:text-5xl",
} as const;

// Section Grid untuk layout 2 kolom yang konsisten
interface SectionGridProps {
  children: React.ReactNode;
  className?: string;
  columns?: 1 | 2 | 3 | 4 | 5;
  gap?: string;
}

export const SectionGrid: React.FC<SectionGridProps> = ({
  children,
  className = "",
  columns = 2,
  gap = "gap-4 sm:gap-6 lg:gap-8",
}) => {
  const gridClass = {
    1: "grid grid-cols-1",
    2: "grid lg:grid-cols-2",
    3: "grid md:grid-cols-2 lg:grid-cols-3",
    4: "grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4",
    5: "grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5" 
  };

  return (
    <div className={`${gridClass[columns]} ${gap} ${className}`}>
      {children}
    </div>
  );
};

// Content Card yang konsisten
interface ContentCardProps {
  children: React.ReactNode;
  title?: string;
  className?: string;
  highlight?: boolean;
  animationDelay?: number;
}

export const ContentCard: React.FC<ContentCardProps> = ({
  children,
  title,
  className = "",
  highlight = false,
  animationDelay = 0,
}) => {
  const baseClasses = highlight
    ? "bg-gradient-to-br from-[#24ce2a]/20 to-[#25da9e]/20 border-2 border-[#24ce2a]/30"
    : "bg-white/10 backdrop-blur-sm";

  return (
    <motion.div
      className={`${baseClasses} p-4 sm:p-6 lg:p-6 rounded-xl ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: animationDelay }}
      viewport={{ once: true }}
    >
      {title && (
        <h3 className={`${TYPOGRAPHY.cardTitle} font-semibold mb-4 text-[#24ce2a]`}>
          {title}
        </h3>
      )}
      {children}
    </motion.div>
  );
};

// Section Title yang konsisten
interface SectionTitleProps {
  children: React.ReactNode;
  level?: 2 | 3 | 4;
  color?: "primary" | "secondary" | "white";
  className?: string;
  centered?: boolean;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({
  children,
  level = 3,
  color = "primary",
  className = "",
  centered = false,
}) => {
  const colorClasses = {
    primary: "text-[#24ce2a]",
    secondary: "text-[#25da9e]",
    white: "text-white",
  };

  const sizeClasses = {
    2: TYPOGRAPHY.slideTitle,
    3: TYPOGRAPHY.sectionTitle,
    4: TYPOGRAPHY.subHeading,
  };

  const Tag = `h${level}` as keyof JSX.IntrinsicElements;

  return (
    <Tag
      className={`${sizeClasses[level]} ${colorClasses[color]} font-semibold mb-4 ${
        centered ? "text-center" : ""
      } ${className}`}
    >
      {children}
    </Tag>
  );
};

// Text Content yang konsisten
interface TextContentProps {
  children: React.ReactNode;
  size?: "extraSmall" | "small" | "base" | "large" | "metric";
  className?: string;
}

export const TextContent: React.FC<TextContentProps> = ({
  children,
  size = "base",
  className = "",
}) => {
  const sizeClasses = {
    extraSmall: TYPOGRAPHY.extraSmall,
    small: TYPOGRAPHY.smallText,
    base: TYPOGRAPHY.bodyText,
    large: TYPOGRAPHY.subHeading,
    metric: TYPOGRAPHY.metricNumber,
  };

  return (
    <div className={`${sizeClasses[size]} text-gray-200 leading-relaxed ${className}`}>
      {children}
    </div>
  );
};

// List Item yang konsisten
interface ListItemProps {
  children: React.ReactNode;
  icon?: React.ReactNode;
  className?: string;
}

export const ListItem: React.FC<ListItemProps> = ({
  children,
  icon,
  className = "",
}) => {
  const defaultIcon = (
    <div className="bg-[#24ce2a]/20 p-1 rounded-full mt-1 flex-shrink-0">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="12"
        height="12"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-[#24ce2a]"
      >
        <path d="M20 6 9 17l-5-5" />
      </svg>
    </div>
  );

  return (
    <li className={`flex items-start gap-3 ${className}`}>
      {icon || defaultIcon}
      <span className={`${TYPOGRAPHY.bodyText} text-gray-200 leading-relaxed`}>
        {children}
      </span>
    </li>
  );
};

// Highlight Box yang konsisten
interface HighlightBoxProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "warning" | "info";
  className?: string;
}

export const HighlightBox: React.FC<HighlightBoxProps> = ({
  children,
  variant = "primary",
  className = "",
}) => {
  const variants = {
    primary: "bg-gradient-to-r from-[#24ce2a]/20 to-[#25da9e]/20",
    secondary: "bg-white/10",
    warning: "bg-gradient-to-r from-orange-500/20 to-red-500/20",
    info: "bg-gradient-to-r from-blue-500/20 to-purple-500/20",
  };

  return (
    <div
      className={`${variants[variant]} p-4 sm:p-6 lg:p-6 rounded-xl backdrop-blur-sm ${className}`}
    >
      {children}
    </div>
  );
};

// Formula Box untuk rumus matematika
interface FormulaBoxProps {
  children: React.ReactNode;
  title?: string;
  className?: string;
}

export const FormulaBox: React.FC<FormulaBoxProps> = ({
  children,
  title,
  className = "",
}) => {
  return (
    <div className={`bg-white/15 p-4 sm:p-6 lg:p-6 rounded-xl border border-[#24ce2a]/20 ${className}`}>
      {title && (
        <h4 className={`${TYPOGRAPHY.subHeading} font-semibold mb-4 text-[#24ce2a] text-center`}>
          {title}
        </h4>
      )}
      <div className={`text-center font-mono ${TYPOGRAPHY.formulaText} text-[#24ce2a] font-bold leading-tight`}>
        {children}
      </div>
    </div>
  );
};

// UTILITY COMPONENTS FOR SPECIFIC USE CASES

// Metric Display - For large numbers/percentages
interface MetricDisplayProps {
  value: string | number;
  label: string;
  color?: string;
  className?: string;
}

export const MetricDisplay: React.FC<MetricDisplayProps> = ({
  value,
  label,
  color = "text-[#24ce2a]",
  className = "",
}) => {
  return (
    <div className={`text-center ${className}`}>
      <div className={`${TYPOGRAPHY.metricNumber} font-bold ${color} mb-1`}>
        {value}
      </div>
      <div className={`${TYPOGRAPHY.smallText} text-gray-300`}>
        {label}
      </div>
    </div>
  );
};

// Subtitle component for consistent section subtitles
interface SubtitleProps {
  children: React.ReactNode;
  className?: string;
}

export const Subtitle: React.FC<SubtitleProps> = ({
  children,
  className = "",
}) => {
  return (
    <p className={`${TYPOGRAPHY.subHeading} text-gray-300 leading-relaxed ${className}`}>
      {children}
    </p>
  );
};

interface CaptionProps {
  children: React.ReactNode;
  className?: string;
}

export const Caption: React.FC<CaptionProps> = ({
  children,
  className = "",
}) => {
  return (
    <p className={`${TYPOGRAPHY.smallText} text-gray-400 ${className}`}>
      {children}
    </p>
  );
};

export { TYPOGRAPHY };