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
  status: "idle",
  initialState: {
    spaceshipList: [],
    displayResultList: [],
    searchSpaceshipsList: [],
    filterLaunchStatusSpaceshipsList: [],
    filterUpcomingStatusSpaceshipsList: [],
    filterLaunchDateSpaceshipsList: [],
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
      state.filterLaunchDateSpaceshipsList = state.displayResultList;
    },

    filterUpcomingStatus: (state, actions) => {
      state.displayResultList = state.spaceshipList.filter((Spaceship) => {
        let selectedValue = parseInt(actions.payload) === 0 ? false : true;
        return Spaceship.upcoming === selectedValue;
      });
      state.filterUpcomingStatusSpaceshipsList = state.displayResultList;
    },

    filterLaunchDateStatus: (state, actions) => {
      state.displayResultList = state.spaceshipList.filter(
        (Spaceship) => Spaceship.launch_date_unix === actions.payload
      );
      state.filterLaunchStatusSpaceshipsList = state.displayResultList;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchSpaceships.pending, (state, actions) => {
      state.status = "pending";
    });
    builder.addCase(fetchSpaceships.fulfilled, (state, actions) => {
      state.spaceshipList = actions.payload;
      state.displayResultList = actions.payload;
      state.status = "success";
    });
    builder.addCase(fetchSpaceships.rejected, (state, actions) => {
      state.status = "rejected";
    });
  },
});

export const {
  reducer,
  findSpaceships,
  filterLaunchStatus,
  filterUpcomingStatus,
  filterLaunchDateStatus,
} = spaceshipSlice.actions;
export default spaceshipSlice.reducer;
