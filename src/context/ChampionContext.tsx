import { createContext, ReactNode } from "react";

import { ChampionData } from "../types";

export const ChampionContext = createContext<ChampionData | null>(null);

interface Props {
  children: ReactNode;
}

const ChamptionContextProvider = ({ children }: Props) => {
  <ChampionContext.Provider value={null}>{children}</ChampionContext.Provider>;
};

export default ChamptionContextProvider;
