"use client";
import React, { useEffect, useState } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface TimerProps {
  targetDate: number;
}

const Timer1: React.FC<TimerProps> = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const updateTimer = () => {
    const now = new Date().getTime();
    const timeDiff = targetDate - now;
    if (timeDiff <= 0) {
      setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      return;
    }
    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const hours = Math.floor(timeDiff % (1000 * 60 * 60) / (1000 * 60));
    const minutes = Math.floor(timeDiff % (1000 * 60 * 60) / (1000 * 60));
    const seconds = Math.floor(timeDiff % (1000 * 60) / 1000);
    setTimeLeft({ days, hours, minutes, seconds });
  };

  useEffect(
    () => {
      const interval = setInterval(updateTimer, 1000);
      return () => clearInterval(interval);
    },
    [targetDate]
  );

  return (
    <div className="flex flex-row lg:justify-start w-full gap-[24px] justify-center">
      <div className="flex flex-col w-[62px] h-[62px] bg-white rounded-full items-center justify-center">
        <p className="text-2xl font-bold">
          {timeLeft.days}{" "}
        </p>
        <p className="text-xs">Days</p>
      </div>
      <div className="flex flex-col w-[62px] h-[62px] bg-white rounded-full items-center justify-center">
        <p className="text-2xl font-bold">
          {timeLeft.hours}{" "}
        </p>
        <p className="text-xs">Hours</p>
      </div>
      <div className="flex flex-col w-[62px] h-[62px] bg-white rounded-full items-center justify-center">
        <p className="text-2xl font-bold">
          {timeLeft.minutes}{" "}
        </p>
        <p className="text-xs">Minutes</p>
      </div>
      <div className="flex flex-col w-[62px] h-[62px] bg-white rounded-full items-center justify-center">
        <p className="text-2xl font-bold">
          {timeLeft.seconds}{" "}
        </p>
        <p className="text-xs">Seconds</p>
      </div>
    </div>
  );
};

export default Timer1;
