// import React, { useEffect, useState } from "react";
// import "./StatsSection.css";

// const StatItem = ({ value, label, suffix = "+" }) => {
//   const [count, setCount] = useState(0);

//   useEffect(() => {

//     if (!start) return;

//     const duration = 2500;
//     const startTime = performance.now();

//     const animate = (currentTime) => {
//       const progress = Math.min((currentTime - startTime) / duration, 1);
//       const currentValue = Math.floor(progress * value);
//       setCount(currentValue);

//       if (progress < 1) {
//         requestAnimationFrame(animate);
//       }
//     };

//     requestAnimationFrame(animate);
//   }, [start, value]);

//   return (
//     <div className="stat-item">
//       <div className="stat-value">
//         {count}
//         {suffix}
//       </div>
//       <div className="stat-label">{label}</div>
//     </div>
//   );
// };

// // const StatsSection = () => {
// //   return (
// //     <section className="stats-section">
// //       <div className="stats-container">
// //         <StatItem value={257} label="ساعت کار" />
// //         <StatItem value={738} label="پروژه موفق" />
// //         <StatItem value={1000} label="خریدار خوشحال" />
// //       </div>
// //     </section>
// //   );
// // };

// // export default StatsSection;

// const StatsSection = () => {
//     const sectionRef = useRef(null);
//     const [startAnimation, setStartAnimation] = useState(false);
  
//     useEffect(() => {
//       const observer = new IntersectionObserver(
//         ([entry]) => {
//           if (entry.isIntersecting) {
//             setStartAnimation(true);
//             observer.disconnect(); // فقط یک بار اجرا بشه
//           }
//         },
//         { threshold: 0.3 } // 30٪ بخش دیده شد → شروع
//       );
  
//       if (sectionRef.current) {
//         observer.observe(sectionRef.current);
//       }
  
//       return () => observer.disconnect();
//     }, []);
  
//     return (
//       <section className="stats-section" ref={sectionRef}>
//         <div className="stats-container">
//           <StatItem value={257} label="ساعت کار" start={startAnimation} />
//           <StatItem value={738} label="پروژه موفق" start={startAnimation} />
//           <StatItem value={1000} label="خریدار خوشحال" start={startAnimation} />
//         </div>
//       </section>
//     );
//   };
  
//   export default StatsSection;



import React, { useEffect, useRef, useState } from "react";
import "./StatsSection.css";

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
          observer.disconnect(); // فقط یک بار اجرا بشه
        }
      },
      { threshold: 0.3 } // 30٪ بخش دیده شد → شروع
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
