"use client";

import React, { useEffect, useRef } from "react";
import { useTheme } from "next-themes";

class Particle {
  x: number;
  y: number;
  directionX: number;
  directionY: number;
  size: number;
  canvasWidth: number;
  canvasHeight: number;

  constructor(x: number, y: number, directionX: number, directionY: number, size: number, canvasWidth: number, canvasHeight: number) {
    this.x = x;
    this.y = y;
    this.directionX = directionX;
    this.directionY = directionY;
    this.size = size;
    this.canvasWidth = canvasWidth;
    this.canvasHeight = canvasHeight;
  }

  draw(ctx: CanvasRenderingContext2D, color: string) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
    ctx.fillStyle = color;
    ctx.fill();
  }

  update(ctx: CanvasRenderingContext2D, color: string, mouseX: number, mouseY: number) {
    if (this.x > this.canvasWidth || this.x < 0) this.directionX = -this.directionX;
    if (this.y > this.canvasHeight || this.y < 0) this.directionY = -this.directionY;

    // Interactive mouse pull
    const dx = mouseX - this.x;
    const dy = mouseY - this.y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    
    if (distance < 150) {
      this.x -= dx * 0.01;
      this.y -= dy * 0.01;
    }

    this.x += this.directionX;
    this.y += this.directionY;
    this.draw(ctx, color);
  }
}

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();
  const mousePosition = useRef({ x: -1000, y: -1000 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let particlesArray: Particle[] = [];
    let animationFrameId: number;

    const getPrimaryColor = () => {
      // Force return green hex for drawing the nodes
      return "#22c55e";
    };

    const particleColor = getPrimaryColor();


    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    const initParticles = () => {
      particlesArray = [];
      const numberOfParticles = (canvas.height * canvas.width) / 12000;
      for (let i = 0; i < numberOfParticles; i++) {
        const size = (Math.random() * 2) + 0.5;
        const x = (Math.random() * ((window.innerWidth - size * 2) - (size * 2)) + size * 2);
        const y = (Math.random() * ((window.innerHeight - size * 2) - (size * 2)) + size * 2);
        const directionX = (Math.random() * 1) - 0.5;
        const directionY = (Math.random() * 1) - 0.5;
        particlesArray.push(new Particle(x, y, directionX, directionY, size, canvas.width, canvas.height));
      }
    };

    const animateParticles = () => {
      animationFrameId = requestAnimationFrame(animateParticles);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update(ctx, particleColor, mousePosition.current.x, mousePosition.current.y);
        
        // Connect lines
        for (let j = i; j < particlesArray.length; j++) {
          const dx = particlesArray[i].x - particlesArray[j].x;
          const dy = particlesArray[i].y - particlesArray[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 100) {
            ctx.beginPath();
            
            // Force valid rgba for testing lines
            const opacity = 1 - distance / 100;
            ctx.strokeStyle = `rgba(34, 197, 94, ${opacity})`; 
            
            ctx.lineWidth = 0.5;
            ctx.moveTo(particlesArray[i].x, particlesArray[i].y);
            ctx.lineTo(particlesArray[j].x, particlesArray[j].y);
            ctx.stroke();
          }
        }
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      mousePosition.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseLeave = () => {
      mousePosition.current = { x: -1000, y: -1000 };
    };

    window.addEventListener("resize", resizeCanvas);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    resizeCanvas();
    animateParticles();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, [theme]); // Re-run effect if theme changes to update color if needed

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-60"
    />
  );
}
