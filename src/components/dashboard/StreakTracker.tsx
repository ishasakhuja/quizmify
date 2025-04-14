"use client";

import React, { useMemo } from "react";

type Props = {
  games: { timeEnded: Date | null }[];
};

const StreakTracker = ({ games }: Props) => {
  const streak = useMemo(() => {
    const days = new Set(
      games
        .map((g) => g.timeEnded && new Date(g.timeEnded).toDateString())
        .filter(Boolean)
    );

    let current = new Date();
    let count = 0;

    while (days.has(current.toDateString())) {
      count++;
      current.setDate(current.getDate() - 1);
    }

    return count;
  }, [games]);

  return (
    <div className="flex">
        <div className="mt-1 text-2xl">
        🔥
        </div>
        <div className="px-4 py-2 text-black rounded-lg bg-gradient-to-r from-orange-500 to-pink-500 shadow-md w-fit">
           Streak: <strong>{streak}</strong> day{streak !== 1 ? "s" : ""}
        </div>
    </div>
  );
};

export default StreakTracker;
