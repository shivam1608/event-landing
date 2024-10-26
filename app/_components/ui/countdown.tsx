"use client";

export const dynamic = true;

import React, { useEffect, useState } from 'react';

interface CountdownTimerProps {
  targetEpoch: number;
  secondaryFont: { className: string };
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetEpoch, secondaryFont }) => {
  const [timeLeft, setTimeLeft] = useState(targetEpoch - Math.floor(Date.now() / 1000));

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(targetEpoch - Math.floor(Date.now() / 1000));
    }, 1000);

    return () => clearInterval(interval);
  }, [targetEpoch]);

  const formatTime = (seconds: number) => {
    const hrs = Math.floor(seconds / 3600)
      .toString()
      .padStart(2, '0');
    const mins = Math.floor((seconds % 3600) / 60)
      .toString()
      .padStart(2, '0');
    const secs = (seconds % 60).toString().padStart(2, '0');
    return `${hrs}:${mins}:${secs}`;
  };

  return (
    <h1 className={`${secondaryFont.className} text-[256px] -my-24 select-none`}>
      {formatTime(timeLeft > 0 ? timeLeft : 0)}
    </h1>
  );
};

export default CountdownTimer;
