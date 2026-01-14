"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import Image from "next/image";

export const InfiniteMovingLogos = ({
  items,
  direction = "left",
  speed = "slow",
  pauseOnHover = true,
  className,
}: {
  items: {
    logo: string;
    name: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  const [start, setStart] = useState(false);

  useEffect(() => {
    if (containerRef.current && scrollerRef.current && !start) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      // Clone existing items for infinite scrolling effect
      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        scrollerRef.current?.appendChild(duplicatedItem);
      });

      // Apply animation settings
      getDirection();
      getSpeed();
      setStart(true);
    }
  }, [start]); // Run only once

  const getDirection = () => {
    if (containerRef.current) {
      const animationDirection =
        direction === "left" ? "forwards" : "reverse";
      containerRef.current.style.setProperty(
        "--animation-direction",
        animationDirection
      );
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      const duration =
        speed === "fast"
          ? "20s"
          : speed === "normal"
          ? "40s"
          : "100s"; // Default to "slow"
      containerRef.current.style.setProperty(
        "--animation-duration",
        duration
      );
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => (
          <li
            className="flex items-center flex-shrink-0 px-8"
            style={{
              background:
                "linear-gradient(180deg, var(--slate-800), var(--slate-900))",
            }}
            key={`${item.name}-${idx}`} // Unique key to avoid warnings
          >
            <div>
              <Image
                src={item.logo}
                alt={item.name}
                width={200} // Optimized size
                height={200}
                className="w-40 md:w-60"
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
