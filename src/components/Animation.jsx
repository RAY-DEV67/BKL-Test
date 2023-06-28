import { useState, useEffect, useRef } from "react";

const AnimatedDiv = ({ children }) => {
    const [isVisible, setIsVisible] = useState(false);
    const animatedRef = useRef(null);
  
    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(animatedRef.current);
          }
        },
        {
          root: null,
          rootMargin: "0px",
          threshold: 0.5, // Change this to change when the animation fires
        }
      );
  
      if (animatedRef.current) {
        observer.observe(animatedRef.current);
      }
  
      return () => {
        if (animatedRef.current) {
          observer.unobserve(animatedRef.current);
        }
      };
    }, []);
  
    return (
      <div className={`${isVisible ? "showAnimation" : "noAnimation"}`} ref={animatedRef}>
        {children}
      </div>
    );
  };

  export default AnimatedDiv