"use client";

import { memo } from "react";
import { formatCountRange, formatMoneyRange } from "../data/gachapon";

function ChanceTableComponent({ items }) {
  if (!items || items.length === 0) return (
    <div className="text-sm text-zinc-500">No data</div>
  );

  return (
    <div className="overflow-x-auto rounded-xl border border-zinc-200/60 dark:border-zinc-800/60 bg-white/70 dark:bg-zinc-900/70 backdrop-blur-sm">
      <table className="min-w-full text-sm">
        <thead className="bg-zinc-100/80 dark:bg-zinc-800/60 text-zinc-700 dark:text-zinc-200">
          <tr>
            <th className="text-left px-4 py-2 font-semibold">Item / Type</th>
            <th className="text-left px-4 py-2 font-semibold">Count</th>
            <th className="text-right px-4 py-2 font-semibold">โอกาส (%)</th>
          </tr>
        </thead>
        <tbody>
          {items.map((row, idx) => {
            const clamped = Math.max(0, Math.min(100, Number(row.chance)));
            return (
              <tr key={idx} className="border-t border-zinc-100 dark:border-zinc-800">
                <td className="px-4 py-3 whitespace-nowrap">{row.item || row.types}</td>
                <td className="px-4 py-3">{row.types === "money" ? formatMoneyRange(row.count) : formatCountRange(row.count)} {row.types === "money" ? "บาท" : "ชิ้น"}</td>
                <td className="px-4 py-3 text-right">
                  <div className="flex items-center gap-3 justify-end">
                    <div className="w-28 h-2 rounded-full bg-zinc-200 dark:bg-zinc-800 overflow-hidden">
                      <div className="h-full bg-emerald-500 dark:bg-emerald-400" style={{ width: `${clamped}%` }} />
                    </div>
                    <span className="font-semibold text-emerald-700 dark:text-emerald-400">{row.chance}%</span>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

const ChanceTable = memo(ChanceTableComponent);
export default ChanceTable;


