"use client";

import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();

    const particles: {
      x: number;
      y: number;
      radius: number;
      dx: number;
      dy: number;
    }[] = [];
    const numParticles = 150;
    const mouse = { x: 0, y: 0 };

    for (let i = 0; i < numParticles; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2 + 1,
        dx: (Math.random() - 0.5) * 2,
        dy: (Math.random() - 0.5) * 2,
      });
    }

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach((particle) => {
        const distX = particle.x - mouse.x;
        const distY = particle.y - mouse.y;
        const distance = Math.sqrt(distX ** 2 + distY ** 2);

        if (distance < 100) {
          particle.x += distX / 20;
          particle.y += distY / 20;
        }

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(255, 255, 255, 0.6)";
        ctx.fill();
        
        particle.x += particle.dx;
        particle.y += particle.dy;

        if (particle.x < 0 || particle.x > canvas.width) particle.dx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.dy *= -1;
      });
    };

    const animate = () => {
      drawParticles();
      requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const handleResize = () => {
      resizeCanvas();
    };

    animate();
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#0a1e5e] via-[#001333] to-[#21074f] text-white overflow-hidden">
      {/* Background Canvas */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 pointer-events-none"
        style={{ zIndex: 1 }}
      />
      
      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main Title */}
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <div className="mb-2">TrustCrowd</div>
            <div className="bg-clip-text text-transparent bg-gradient-to-r from-[#24ce2a] to-[#25da9e]">
              PRESENTATION
            </div>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
          >
            Quality Control Mechanism for Crowdsourcing
          </motion.p>

          {/* Features */}
          <motion.div
            className="mb-12 space-y-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
            <motion.div
              className="flex items-center justify-center space-x-4 p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20"
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.15)" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <span className="p-3 bg-[#24ce2a]/20 rounded-full text-[#24ce2a]">
                🚀
              </span>
              <span className="font-medium text-lg">Business Pitch Deck</span>
            </motion.div>
            
            <motion.div
              className="flex items-center justify-center space-x-4 p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20"
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.15)" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <span className="p-3 bg-[#25da9e]/20 rounded-full text-[#25da9e]">
                🎓
              </span>
              <span className="font-medium text-lg">Thesis Defense</span>
            </motion.div>
          </motion.div>
          
          {/* Action Buttons */}
          <motion.div
            className="flex flex-col md:flex-row gap-6 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/components/pitch-deck"
                className="inline-block px-8 py-4 bg-gradient-to-r from-[#24ce2a] to-[#25da9e] text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 text-center min-w-[200px]"
              >
                View Business Pitch
              </Link>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/thesis-defense"
                className="inline-block px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/30 text-white hover:bg-white/20 transition-all duration-300 rounded-lg text-center font-semibold min-w-[200px]"
              >
                View Thesis Defense
              </Link>
            </motion.div>
          </motion.div>

          {/* Footer Info */}
          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.8 }}
          >
            <p className="text-gray-400 text-sm">
              Glorious Satria Dhamang Aji • Telkom University • 2025
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}