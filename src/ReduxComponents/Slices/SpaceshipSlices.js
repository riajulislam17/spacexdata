// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import SpaceshipFeatures from "../Features/SpaceshipFeatures";

// const initialState = [];

// export const retrieveSpaceships = createAsyncThunk(
//   "spaceships/retrieve",
//   async () => {
//     const response = await SpaceshipFeatures.spaceshipsList();
//     return response.data;
//   }
// );

// export const searchSpaceships = createAsyncThunk(
//   "spaceships/search",
//   async ({ searchText }) => {
//     const response = await SpaceshipFeatures.searchSpaceshipsList(searchText);
//     console.log(response);
//     return response;
//   }
// );

// const spaceshipsSlice = createSlice({
//   name: "spaceships",
//   initialState: {
//     spaceshipList: [],
//     searchSpaceshipList: [],
// },
//   extraReducers: {
//     [retrieveSpaceships.fulfilled]: (state, action) => {
//       return [...action.payload];
//       state.readingList.push(payload)
//     },
//     [searchSpaceships.fulfilled]: (state, action) => {
//       return [...action.payload];
//     },
//   },
// });

// const { reducer } = spaceshipsSlice;
// export default reducer;





//\\********** new **********//\\

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchSpaceships = createAsyncThunk(
  "spaceship/fetchSpaceships",
  async () => {
    const response = await fetch("https://api.spacexdata.com/v3/launches")
    .then(
      (res) => res.json()
    );
    return response;
  }
);

export const searchSpaceships = createAsyncThunk(
  "spaceship/searchSpaceships",
  async () => {
    const response = await fetch("https://api.spacexdata.com/v3/launches")
    .then(
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
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchSpaceships.fulfilled, (state, action) => {
      state.spaceshipList = (action.payload);
    });
    builder.addCase(searchSpaceships.fulfilled, (state, action) => {
      state.status = "idle";
      state.value += action.payload;
    });
  },
});

export const { reducer } = spaceshipSlice.actions;
export default spaceshipSlice.reducer;
