export const GACHAPON_ORDER = [
  "Gachapon_ss1",
  "Gachaponmoney_ss1",
  "Gachaponblackmoney_ss1",
  "Gachaponusedplay_ss1",
  "Gachaponweapon_ss1",
  "Gachaponfashion_ss1",
  "Gachaponcar_ss1",
  "Box_Car_Parts",
  "Gachapon_ss2",
  "Gachaponmoney_ss2",
  "Gachaponblackmoney_ss2",
  "Gachaponusedplay_ss2",
  "Gachaponweapon_ss2",
  "Gachaponfashion_ss2",
  "Gachaponcar_ss2",
];

// Core data: include ss1 fully and ss2 root group as provided.
// For sections not fully specified in the prompt sample (e.g., detailed ss2 groups), keep them empty arrays so UI still renders.
export const GACHAPON_DATA = {
  Gachapon_ss1: [
    { types: "item", item: "Gachaponmoney_ss1", count: [1, 1], chance: 80 },
    { types: "item", item: "Gachaponblackmoney_ss1", count: [1, 1], chance: 80 },
    { types: "item", item: "Gachaponusedplay_ss1", count: [1, 1], chance: 75 },
    { types: "item", item: "Gachaponweapon_ss1", count: [1, 1], chance: 60 },
    { types: "item", item: "Gachaponfashion_ss1", count: [1, 1], chance: 1 },
    { types: "item", item: "Gachaponcar_ss1", count: [1, 1], chance: 0.1 },
  ],
  Gachaponmoney_ss1: [
    { types: "money", count: [3000, 3500], chance: 95 },
    { types: "money", count: [3500, 4000], chance: 95 },
    { types: "money", count: [4000, 5000], chance: 40 },
    { types: "money", count: [5000, 6000], chance: 15 },
    { types: "money", count: [6000, 7000], chance: 15 },
    { types: "money", count: [8000, 10000], chance: 15 },
    { types: "money", count: [20000, 25000], chance: 7 },
  ],
  Gachaponblackmoney_ss1: [
    { types: "black_money", count: [800, 1000], chance: 95 },
    { types: "black_money", count: [1000, 1500], chance: 95 },
    { types: "black_money", count: [1500, 1800], chance: 40 },
    { types: "black_money", count: [1800, 2000], chance: 15 },
    { types: "black_money", count: [2000, 3000], chance: 15 },
    { types: "black_money", count: [3000, 4000], chance: 15 },
  ],
  Gachaponusedplay_ss1: [
    { types: "item", item: "exp", count: [5, 10], chance: 87 },
    { types: "item", item: "steel_p", count: [1, 2], chance: 87 },
    { types: "item", item: "steel_p", count: [5, 6], chance: 87 },
    { types: "item", item: "gold", count: [8, 10], chance: 25 },
    { types: "item", item: "gold", count: [10, 12], chance: 25 },
    { types: "item", item: "copper", count: [8, 10], chance: 25 },
    { types: "item", item: "copper", count: [10, 12], chance: 25 },
    { types: "item", item: "cement", count: [4, 6], chance: 40 },
    { types: "item", item: "aed", count: [1, 2], chance: 30 },
    { types: "item", item: "aed", count: [2, 3], chance: 20 },
    { types: "item", item: "HeavyArmor", count: [3, 5], chance: 50 },
    { types: "item", item: "HeavyArmor", count: [5, 6], chance: 30 },
  ],
  Gachaponweapon_ss1: [
    { types: "item", item: "jade", count: [8, 10], chance: 70 },
    { types: "item", item: "diamond", count: [8, 10], chance: 70 },
    { types: "item", item: "cement", count: [3, 4], chance: 70 },
    { types: "item", item: "wood_p", count: [10, 12], chance: 60 },
    { types: "item", item: "steel_p", count: [10, 12], chance: 30 },
    { types: "item", item: "gold", count: [5, 6], chance: 30 },
    { types: "item", item: "copper", count: [5, 6], chance: 30 },
    { types: "item", item: "weaponbox", count: [3, 4], chance: 40 },
    { types: "item", item: "weaponbox", count: [2, 3], chance: 15 },
    { types: "item", item: "weaponbox", count: [1, 2], chance: 8 },
    { types: "item", item: "vibranium", count: [1, 2], chance: 20 },
    { types: "item", item: "vibranium", count: [2, 4], chance: 10 },
  ],
  Gachaponfashion_ss1: [
    { types: "item", item: "Card_Fashion_gold", count: [1, 2], chance: 80 },
    { types: "item", item: "Card_Fashion_gold", count: [3, 5], chance: 80 },
  ],
  Gachaponcar_ss1: [
    { types: "item", item: "Car_Parts_Engine", count: [1, 1], chance: 50 },
    { types: "item", item: "Car_Parts_Frame", count: [1, 1], chance: 50 },
    { types: "item", item: "Car_Parts_SteeringWheel", count: [1, 1], chance: 20 },
    { types: "item", item: "Car_Parts_Tires", count: [1, 1], chance: 20 },
  ],
  Box_Car_Parts: [
    { types: "item", item: "Car_Parts_Engine", count: [1, 1], chance: 50 },
    { types: "item", item: "Car_Parts_Frame", count: [1, 1], chance: 50 },
    { types: "item", item: "Car_Parts_SteeringWheel", count: [1, 1], chance: 20 },
    { types: "item", item: "Car_Parts_Tires", count: [1, 1], chance: 20 },
  ],
  Gachapon_ss2: [
    { types: "item", item: "Gachaponmoney_ss2", count: [1, 1], chance: 80 },
    { types: "item", item: "Gachaponblackmoney_ss2", count: [1, 1], chance: 80 },
    { types: "item", item: "Gachaponusedplay_ss2", count: [1, 1], chance: 75 },
    { types: "item", item: "Gachaponweapon_ss2", count: [1, 1], chance: 60 },
    { types: "item", item: "Gachaponfashion_ss2", count: [1, 1], chance: 1 },
    { types: "item", item: "Gachaponcar_ss2", count: [1, 1], chance: 0.2 },
  ],
  // Season 2 detailed groups
  Gachaponmoney_ss2: [
    { types: "money", count: [3000, 3500], chance: 95 },
    { types: "money", count: [3500, 4000], chance: 95 },
    { types: "money", count: [4000, 5000], chance: 40 },
    { types: "money", count: [5000, 6000], chance: 15 },
    { types: "money", count: [6000, 7000], chance: 15 },
    { types: "money", count: [8000, 10000], chance: 15 },
    { types: "money", count: [20000, 25000], chance: 7 },
  ],
  Gachaponblackmoney_ss2: [
    { types: "black_money", count: [800, 1000], chance: 95 },
    { types: "black_money", count: [1000, 1500], chance: 95 },
    { types: "black_money", count: [1500, 1800], chance: 40 },
    { types: "black_money", count: [1800, 2000], chance: 15 },
    { types: "black_money", count: [2000, 3000], chance: 15 },
    { types: "black_money", count: [3000, 4000], chance: 15 },
  ],
  Gachaponusedplay_ss2: [
    { types: "item", item: "exp", count: [5, 10], chance: 87 },
    { types: "item", item: "steel_p", count: [1, 2], chance: 87 },
    { types: "item", item: "steel_p", count: [5, 6], chance: 87 },
    { types: "item", item: "gold", count: [8, 10], chance: 25 },
    { types: "item", item: "gold", count: [10, 12], chance: 25 },
    { types: "item", item: "copper", count: [8, 10], chance: 25 },
    { types: "item", item: "copper", count: [10, 12], chance: 25 },
    { types: "item", item: "cement", count: [4, 6], chance: 40 },
    { types: "item", item: "aed", count: [2, 3], chance: 30 },
    { types: "item", item: "aed", count: [3, 4], chance: 20 },
    { types: "item", item: "HeavyArmor", count: [4, 6], chance: 50 },
    { types: "item", item: "HeavyArmor", count: [6, 7], chance: 30 },
  ],
  Gachaponweapon_ss2: [
    { types: "item", item: "jade", count: [8, 10], chance: 70 },
    { types: "item", item: "diamond", count: [8, 10], chance: 70 },
    { types: "item", item: "cement", count: [3, 4], chance: 70 },
    { types: "item", item: "wood_p", count: [10, 12], chance: 60 },
    { types: "item", item: "steel_p", count: [10, 12], chance: 30 },
    { types: "item", item: "gold", count: [5, 6], chance: 30 },
    { types: "item", item: "copper", count: [5, 6], chance: 30 },
    { types: "item", item: "weaponbox", count: [3, 4], chance: 40 },
    { types: "item", item: "weaponbox", count: [2, 3], chance: 15 },
    { types: "item", item: "weaponbox", count: [1, 2], chance: 8 },
    { types: "item", item: "vibranium", count: [1, 2], chance: 20 },
    { types: "item", item: "vibranium", count: [2, 4], chance: 10 },
  ],
  Gachaponfashion_ss2: [
    { types: "item", item: "Card_Fashion_gold", count: [1, 2], chance: 80 },
    { types: "item", item: "Card_Fashion_gold", count: [3, 5], chance: 80 },
  ],
  Gachaponcar_ss2: [
    { types: "item", item: "Car_Parts_Engine", count: [1, 1], chance: 50 },
    { types: "item", item: "Car_Parts_Frame", count: [1, 1], chance: 50 },
    { types: "item", item: "Car_Parts_SteeringWheel", count: [1, 1], chance: 20 },
    { types: "item", item: "Car_Parts_Tires", count: [1, 1], chance: 20 },
  ],
};

export function getImagePathForItem(types, item) {
  // Mapping for special types
  if (types === "money") return "/items/money.png";
  if (types === "black_money") return "/items/black_money.png";

  // If normal item, try by item name
  if (item) return `/items/${item}.png`;

  // Fallback placeholder
  return "/items/unknown.png";
}

export function formatCountRange(count) {
  if (!Array.isArray(count) || count.length !== 2) return "-";
  const [min, max] = count;
  return `${min}-${max}`;
}

export function formatMoneyRange(count) {
  if (!Array.isArray(count) || count.length !== 2) return "-";
  const [min, max] = count;
  const formatter = new Intl.NumberFormat("en-US");
  return `${formatter.format(min)}-${formatter.format(max)}`;
}


