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
    displayResultList: [],
    searchSpaceshipsList: [],
    filterLaunchStatusSpaceshipsList: [],
    filterUpcomingStatusSpaceshipsList: [],
  },
  reducers: {
    findSpaceships: (state, actions) => {
      state.displayResultList = state.spaceshipList.filter(
        (Spaceship) =>
          Spaceship.rocket.rocket_name.toLowerCase() ===
          actions.payload.toLowerCase()
      );
      state.searchSpaceshipsList = state.displayResultList;
    },

    filterLaunchStatus: (state, actions) => {
      state.displayResultList = state.spaceshipList.filter((Spaceship) => {
        let selectedValue = parseInt(actions.payload) === 0 ? false : true;
        return Spaceship.launch_success === selectedValue;
      });
      state.filterLaunchStatusSpaceshipsList = state.displayResultList;
    },

    filterUpcomingStatus: (state, actions) => {
      state.displayResultList = state.spaceshipList.filter((Spaceship) => {
        let selectedValue = parseInt(actions.payload) === 0 ? false : true;
        return Spaceship.upcoming === selectedValue;
      });
      state.filterUpcomingStatusSpaceshipsList = state.displayResultList;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchSpaceships.fulfilled, (state, actions) => {
      state.spaceshipList = actions.payload;
      state.displayResultList = actions.payload;
    });
  },
});

export const {
  reducer,
  findSpaceships,
  filterLaunchStatus,
  filterUpcomingStatus,
} = spaceshipSlice.actions;
export default spaceshipSlice.reducer;
