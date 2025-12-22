import React, { useEffect, useRef, useState } from "react";
import "../../styles/homePage/StatsSection.css";

const StatItem = ({ value, label, start, suffix = "+" }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    const duration = 1500;
    const startTime = performance.now();

    const animate = (currentTime) => {
      const progress = Math.min((currentTime - startTime) / duration, 1);
      setCount(Math.floor(progress * value));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [start, value]);

  return (
    <div className="stat-item">
      <div className="stat-value">
        {count}
        {suffix}
      </div>
      <div className="stat-label">{label}</div>
    </div>
  );
};

const StatsSection = () => {
  const sectionRef = useRef(null);
  const [startAnimation, setStartAnimation] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartAnimation(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="stats-section" ref={sectionRef}>
      <div className="stats-container">
        <StatItem value={257} label="ساعت کار" start={startAnimation} />
        <StatItem value={738} label="پروژه موفق" start={startAnimation} />
        <StatItem value={1000} label="خریدار خوشحال" start={startAnimation} />
      </div>
    </section>
  );
};

export default StatsSection;
