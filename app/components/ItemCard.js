"use client";

import Image from "next/image";
import { getImagePathForItem, formatCountRange, formatMoneyRange } from "../data/gachapon";

import { memo } from "react";

function ItemCardComponent({ data, onClick }) {
  const { types, item, count, chance } = data;
  const imageSrc = getImagePathForItem(types, item);
  const unitLabel = types === "money" ? "บาท" : "ชิ้น";
  const formattedRange = types === "money" ? formatMoneyRange(count) : formatCountRange(count);

  return (
    <button type="button" onClick={() => onClick?.(data)} className="cursor-pointer text-left bg-white/80 backdrop-blur-sm dark:bg-zinc-900/80 rounded-xl shadow-sm hover:shadow-md transition-all p-4 border border-zinc-200/60 dark:border-zinc-800/60 flex flex-col gap-3 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-emerald-500">
      <div className="flex items-start gap-3">
        <div className="relative w-14 h-14 shrink-0">
          <Image
            src={imageSrc}
            alt={item || types}
            fill
            sizes="56px"
            className="object-contain rounded"
            onError={(e) => {
              const img = e.currentTarget;
              if (img.dataset.fallback !== "1") {
                img.src = "/items/unknown.png";
                img.dataset.fallback = "1";
              }
            }}
          />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-start gap-2">
            <div className="font-semibold truncate leading-snug" title={item || types}>{item || types}</div>
            <span className="shrink-0 inline-flex items-center rounded-full border border-zinc-200 dark:border-zinc-700 px-2 py-0.5 text-[10px] uppercase tracking-wide text-zinc-600 dark:text-zinc-300 bg-white/60 dark:bg-zinc-800/60">
              {types}
            </span>
          </div>
          <div className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">จำนวน: {formattedRange} {unitLabel}</div>
        </div>
      </div>
      <div className="flex items-center justify-end">
        <span className="inline-flex items-center rounded-full bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 px-3 py-1 text-sm font-semibold">
          {chance}%
        </span>
      </div>
    </button>
  );
}

const ItemCard = memo(ItemCardComponent);
export default ItemCard;


