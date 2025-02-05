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

const Timer: React.FC<TimerProps> = ({ targetDate }) => {
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
    <div className="flex sm:flex-row flex-col justify-between gap-8 sm:gap-4 w-full">
      <span className="text-3xl w-[151px] mt-3">Flash Sales</span>
      <div>
        <p className="text-xs">Days</p>
        <p className="text-2xl font-bold">
          {timeLeft.days}{" "}
        </p>
      </div>
      <div className="text-3xl text-[#E07575] mt-2">:</div>
      <div>
        <p className="text-xs">Hours</p>
        <p className="text-2xl font-bold">
          {timeLeft.hours}{" "}
        </p>
      </div>
      <div className="text-3xl text-[#E07575] mt-2">:</div>
      <div>
        <p className="text-xs">Minutes</p>
        <p className="text-2xl font-bold w-[46px] h-[28px]">
          {timeLeft.minutes}{" "}
        </p>
      </div>
      <div className="text-3xl text-[#E07575] mt-2">:</div>
      <div>
        <p className="text-xs">Seconds</p>
        <p className="text-2xl font-bold">
          {timeLeft.seconds}{" "}
        </p>
      </div>
    </div>
  );
};

export default Timer;
