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

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: {
      x: number;
      y: number;
      radius: number;
      dx: number;
      dy: number;
    }[] = [];
    const numParticles = 800;
    const mouse = { x: 0, y: 0 };

    for (let i = 0; i < numParticles; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2 + 1,
        dx: Math.random() * 2 - 1,
        dy: Math.random() * 2 - 1,
      });
    }

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((particle) => {
        const distX = particle.x - mouse.x;
        const distY = particle.y - mouse.y;
        const distance = Math.sqrt(distX ** 2 + distY ** 2);

        if (distance < 100) {
          particle.x += distX / 10;
          particle.y += distY / 10;
        }

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = "#fff";
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
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    animate();
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="relative h-screen bg-gradient-to-r from-[#0a1e5e] to-[#001333] text-white overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0"></canvas>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10">
        <motion.h1
          className="text-6xl font-extrabold mb-6 leading-tight"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <div>TrustCrowd</div>
          <div className="bg-clip-text text-transparent bg-gradient-to-r from-[#24ce2a] to-[#25da9e]">
            PRESENTATION
          </div>
        </motion.h1>
        <motion.div
          className="text-xl mb-8 space-y-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <motion.div
            className="flex items-center space-x-4 justify-center"
            whileHover={{ scale: 1.05 }}
          >
            <span className="p-3 bg-white bg-opacity-20 rounded-full text-white">
              🚀
            </span>
            <span className="font-medium">Business Pitch Deck</span>
          </motion.div>
          <motion.div
            className="flex items-center space-x-4 justify-center"
            whileHover={{ scale: 1.05 }}
          >
            <span className="p-3 bg-white bg-opacity-20 rounded-full text-white">
              🎓
            </span>
            <span className="font-medium">Thesis Defense</span>
          </motion.div>
        </motion.div>
        
        <div className="flex flex-col md:flex-row gap-6">
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="/components/pitch-deck"
              className="block px-8 py-4 bg-gradient-to-r from-[#24ce2a] to-[#25da9e] text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-300 text-center"
            >
              Business Pitch Deck
            </Link>
          </motion.div>
          
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="/thesis-defense"
              className="block px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all duration-200 rounded-lg text-center font-semibold"
            >
              Thesis Defense
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}