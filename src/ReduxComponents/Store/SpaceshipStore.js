import { configureStore } from "@reduxjs/toolkit";
import spaceshipsReducer from "../Slices/SpaceshipSlices";

export const SpaceshipStore = configureStore({
  reducer: {
    spaceships: spaceshipsReducer,
  },
});
