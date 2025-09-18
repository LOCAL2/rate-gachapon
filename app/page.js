"use client";
import Image from "next/image";
import { useDeferredValue, useMemo, useState } from "react";
import ItemCard from "./components/ItemCard";
import ChanceTable from "./components/ChanceTable";
import ItemModal from "./components/ItemModal";
import { GACHAPON_DATA, GACHAPON_ORDER } from "./data/gachapon";

export default function Home() {
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(null);
  const deferredQuery = useDeferredValue(query);
  return (
    <div className="min-h-screen p-6 sm:p-8 lg:p-10 bg-gradient-to-b from-white to-zinc-50 dark:from-zinc-950 dark:to-zinc-900">
      <div className="mx-auto w-full max-w-7xl">
        <header className="mb-10">
          <div className="flex items-center gap-3">
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
                Gachapon Rates <span className="text-purple-600 dark:text-purple-400">Star 2.0</span> 
              </h1>
            <div className="mt-2 text-xs text-zinc-400 select-none">
              Hash checksum <span className="font-mono text-emerald-600 dark:text-emerald-400">e3b0c44298fc1c149afbf4c8996fb924</span>
            </div>
            <div className="mt-2 text-sm font-bold text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-900/40 rounded-lg px-4 py-2 shadow-sm border border-emerald-200 dark:border-emerald-800 inline-block">
              ข้อมูลนี้อัปเดตล่าสุดเมื่อวันที่ <span className="underline decoration-emerald-400 underline-offset-2">วันพฤหัสบดี ที่ 18 กันยายน 2568</span> <span className="text-emerald-900 dark:text-emerald-200 font-normal"></span>
            </div>
            </div>
          </div>
          <div className="mt-6">
            <div className="relative max-w-xl">
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="ค้นหา Gachapon เช่น Gachaponmoney_ss1"
                className="w-full rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm px-4 py-2 outline-none focus:ring-2 focus:ring-emerald-500"
              />
              <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400">⌕</span>
            </div>
          </div>
        </header>

        <main className="space-y-12">
          {useMemo(() => GACHAPON_ORDER.filter((k) => k.toLowerCase().includes(deferredQuery.toLowerCase())), [deferredQuery]).map((sectionKey) => {
          let items = GACHAPON_DATA[sectionKey] || [];
          if (sectionKey === "Gachapon_ss1") {
            items = items.filter((it) => it.item !== "Gachaponcar_ss1");
          }
          return (
            <section key={sectionKey} className="space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-xl sm:text-2xl font-semibold tracking-tight">{sectionKey}</h2>
                <div className="h-px flex-1 mx-4 bg-gradient-to-r from-zinc-200 to-transparent dark:from-zinc-700" />
              </div>

              {/* Grid of cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                {items.length > 0 ? (
                  items.map((it, idx) => <ItemCard key={idx} data={it} onClick={setSelected} />)
                ) : (
                  <div className="text-sm text-zinc-500">No items</div>
                )}
              </div>

              {/* Chance Table */}
              <ChanceTable items={items} />
            </section>
          );
        })}
        </main>

        <ItemModal open={!!selected} item={selected} onClose={() => setSelected(null)} />
      </div>
    </div>
  );
}
