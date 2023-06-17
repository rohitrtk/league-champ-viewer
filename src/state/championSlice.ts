import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

import { ChampionData } from "./../types";

export interface ChampionState {
  data: ChampionData | null;
  rotation: number;
}

const initialState: ChampionState = {
  data: null,
  rotation: 0
}

export const championSlice = createSlice({
  name: "champion",
  initialState,
  reducers: {
    setChampionData: (state, action: PayloadAction<ChampionData>) => {
      state.data = action.payload;
    },
    clearChampionData: (state) => {
      state.data = null;
    },
    setChampionRotation: (state, action: PayloadAction<number>) => {
      state.rotation = action.payload;
    }
  }
});

export const { setChampionData, clearChampionData, setChampionRotation } = championSlice.actions;
export default championSlice.reducer;