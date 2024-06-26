"use client"; // this is a client component

import React, { useEffect, useRef, ReactNode } from "react";

interface Props {
  offset?: string;
  children?: ReactNode;
}

const SlideUp: React.FC<Props> = ({ children, offset = "0px" }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("opacity-0");
            entry.target.classList.add("animate-slideUpCubiBezier");
          }
        });
      },
      { rootMargin: offset }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    // Cleanup the observer
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [offset]); // Include offset in the dependency array

  return (
    <div ref={ref} className="relative opacity-0">
      {children}
    </div>
  );
};

export default SlideUp;
