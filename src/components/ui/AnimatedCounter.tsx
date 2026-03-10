"use client";

import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

interface Props {
  end: number;
  suffix?: string;
  duration?: number;
}

export default function AnimatedCounter({ end, suffix = "", duration = 2 }: Props) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <span ref={ref} className="stat-value">
      {inView ? <CountUp end={end} duration={duration} separator="." /> : "0"}
      {suffix}
    </span>
  );
}
