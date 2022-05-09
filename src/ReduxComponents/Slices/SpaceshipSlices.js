import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchSpaceships = createAsyncThunk(
  "spaceship/fetchSpaceships",
  async () => {
    const response = await fetch("https://api.spacexdata.com/v3/launches").then(
      (res) => res.json()
    );
    return response;
  }
);

export const spaceshipSlice = createSlice({
  name: "spaceships",
  initialState: {
    spaceshipList: [],
    searchSpaceshipsList: [],
  },
  reducers: {
    findSpaceships: (state, actions) => {
      state.searchSpaceshipsList = state.spaceshipList.filter((Spaceship) => Spaceship.rocket.rocket_name.toLowerCase() === actions.payload.toLowerCase());
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchSpaceships.fulfilled, (state, actions) => {
      state.spaceshipList = actions.payload;
    });
  },
});

export const { reducer, findSpaceships, searchSpaceships } = spaceshipSlice.actions;
export default spaceshipSlice.reducer;
