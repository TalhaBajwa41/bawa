"use client";
import { useEffect, useState } from "react";

export default function ProfileStats() {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    fetch("/api/profile/stats", {
      headers: { Authorization: "Bearer TOKEN" }
    })
      .then(res => res.json())
      .then(setStats);
  }, []);

  if (!stats) return null;

  return (
    <div className="bg-slate-900 p-4 rounded">
      <p>Total Trades: {stats.totalTrades}</p>
      <p>Profit: ${stats.profit}</p>
      <p>Win Rate: {stats.winRate}</p>
    </div>
  );
}
