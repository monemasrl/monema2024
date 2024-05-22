"use client";
import {
  useScroll,
  useSpring,
  useTransform,
  motion,
  useMotionValueEvent,
} from "framer-motion";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

function SmoothScroll({
  children,
  top,
}: {
  children: React.ReactNode;
  top: number | null;
}) {
  const contentRef = React.useRef<HTMLDivElement>(null);
  const [contentHeight, setContentHeight] = React.useState(0);
  const [windowHeight, setWindowHeight] = React.useState(0);
  const [isLoading, setIsLoading] = React.useState(true);

  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "instant" as any,
      });
    }, 0);
  }, [router]);

  useEffect(() => {
    const handleResize = () => {
      if (contentRef.current != null) {
        setContentHeight(contentRef.current.scrollHeight);
      }
      setWindowHeight(window.innerHeight);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [contentRef]);

  // sostituisce lo scroll di default con uno più fluido
  const { scrollYProgress } = useScroll({});
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 200,
    mass: 0.1,
    damping: 30,
    restDelta: 0.001,
  });

  useMotionValueEvent(smoothProgress, "change", (value) => {
    if ((value = 0)) {
      setIsLoading(true);
    } else {
      setIsLoading(false);
    }
  });

  const y = useTransform(
    smoothProgress,
    [0, 1],
    [0, windowHeight - contentHeight]
  );

  return (
    <>
      <div style={{ height: contentHeight }} />
      <motion.div
        ref={contentRef}
        style={{
          position: "absolute",
          top: top ? top : 0,
          width: "100%",
          y: y,
        }}
      >
        {children}
      </motion.div>
    </>
  );
}

export default SmoothScroll;
