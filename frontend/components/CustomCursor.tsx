"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [isMounted, setIsMounted] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    // Track when hovering over interactive elements
    const handleElementsHover = () => {
      const interactiveElements = document.querySelectorAll(
        "a, button, input, textarea, select, .interactive, .card, .skill-badge"
      );

      interactiveElements.forEach((el) => {
        el.addEventListener("mouseenter", () => setIsHovering(true));
        el.addEventListener("mouseleave", () => setIsHovering(false));
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    // Short delay to ensure DOM is ready
    setTimeout(handleElementsHover, 100);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [isVisible]);

  if (!isMounted) return null;

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full pointer-events-none z-[9999] mix-blend-screen"
        animate={{
          x: mousePosition.x - 4, // center dot (8px / 2 = 4)
          y: mousePosition.y - 4,
          scale: isHovering ? 1.5 : 1,
          backgroundColor: isHovering ? "rgb(var(--accent))" : "rgb(var(--primary))",
        }}
        transition={{
          type: "tween",
          ease: "linear",
          duration: 0, // Instantly follow cursor for the dot
        }}
        style={{ opacity: isVisible ? 1 : 0 }}
      />
      
      <motion.div
        className="fixed top-0 left-0 border pointer-events-none z-[9998] rounded-full mix-blend-screen"
        animate={{
          x: mousePosition.x - (isHovering ? 30 : 20), // Center ring (size / 2)
          y: mousePosition.y - (isHovering ? 30 : 20),
          width: isHovering ? 60 : 40,
          height: isHovering ? 60 : 40,
          backgroundColor: isHovering ? "rgba(var(--accent), 0.1)" : "transparent",
          borderColor: isHovering ? "transparent" : "rgb(var(--primary))",
        }}
        transition={{
          type: "spring",
          stiffness: 150,
          damping: 20,
          mass: 0.5,
        }}
        style={{ opacity: isVisible ? 1 : 0 }}
      />
      
      {/* Hide default cursor */}
      <style dangerouslySetInnerHTML={{ __html: `
        body, *, a {
          cursor: none !important;
        }
      `}} />
    </>
  );
}
