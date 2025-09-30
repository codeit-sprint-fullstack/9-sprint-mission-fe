import { useContext } from "react";
import { MarketContext } from "@/context/MarketContext";

export function useMarket() {
  const context = useContext(MarketContext);
  return context;
}
