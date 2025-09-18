"use client";

import Image from "next/image";
import { memo, useEffect } from "react";
import { formatCountRange, formatMoneyRange, getImagePathForItem } from "../data/gachapon";

function ItemModalComponent({ open, item, onClose }) {
  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") onClose?.();
    }
    if (open) {
      document.addEventListener("keydown", onKey);
      return () => document.removeEventListener("keydown", onKey);
    }
  }, [open, onClose]);

  if (!open || !item) return null;

  const { types, item: itemName, count, chance } = item;
  const imageSrc = getImagePathForItem(types, itemName);
  const unitLabel = types === "money" ? "บาท" : "ชิ้น";
  const formattedRange = types === "money" ? formatMoneyRange(count) : formatCountRange(count);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      <div className="relative w-full max-w-lg rounded-2xl bg-white dark:bg-zinc-950 shadow-xl border border-zinc-200/60 dark:border-zinc-800/60 overflow-hidden">
        <div className="flex items-center justify-between px-5 py-4 border-b border-zinc-200/60 dark:border-zinc-800/60">
          <h3 className="text-lg font-semibold">รายละเอียดไอเท็ม</h3>
          <button onClick={onClose} className="rounded-md px-2 py-1 text-zinc-600 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-900">✕</button>
        </div>
        <div className="p-5 flex gap-4">
          <div className="relative w-24 h-24 shrink-0 rounded-lg overflow-hidden bg-white dark:bg-zinc-900 border border-zinc-200/60 dark:border-zinc-800/60">
            <Image src={imageSrc} alt={itemName || types} fill sizes="96px" className="object-contain" />
          </div>
          <div className="flex-1 min-w-0 space-y-2">
            <div className="flex items-center gap-2">
              <div className="font-semibold truncate" title={itemName || types}>{itemName || types}</div>
              <span className="shrink-0 inline-flex items-center rounded-full border border-zinc-200 dark:border-zinc-700 px-2 py-0.5 text-[10px] uppercase tracking-wide text-zinc-600 dark:text-zinc-300 bg-white/60 dark:bg-zinc-800/60">
                {types}
              </span>
            </div>
            <div className="text-sm text-zinc-600 dark:text-zinc-400">จำนวน: {formattedRange} {unitLabel}</div>
            <div className="flex items-center gap-3">
              <div className="text-sm text-zinc-600 dark:text-zinc-400">Chance:</div>
              <span className="inline-flex items-center rounded-full bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 px-3 py-1 text-sm font-semibold">{chance}%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const ItemModal = memo(ItemModalComponent);
export default ItemModal;


