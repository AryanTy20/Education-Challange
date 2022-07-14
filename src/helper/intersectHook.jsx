import { useState, useEffect } from "react";

export const useIntersectHook = (refItem, option) => {
  const [isIntersect, setIsIntersect] = useState(false);
  useEffect(() => {
    const Intersection = new IntersectionObserver(
      (enteries, observer) => {
        enteries.forEach((el) => {
          if (el.isIntersecting == true) {
            setIsIntersect(true);
            observer.unobserve(el.target);
          }
        });
      },
      option
        ? option
        : {
            rootMargin: "-10px 0px 0px 0px",
            threshold: 0.2,
          }
    );
    refItem.current && Intersection.observe(refItem.current);
  }, [refItem]);
  return [isIntersect];
};
