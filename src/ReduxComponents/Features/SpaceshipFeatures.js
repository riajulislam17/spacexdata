import SpaceshipRestAPI from "../RestAPI/SpaceshipRestAPI";

class SpaceshipFeatures {
  spaceshipsList() {
    return SpaceshipRestAPI.get("/spaceships");
  }

  searchSpaceshipsList(searchText) {
    return SpaceshipRestAPI.get(`/spaceships?search=${searchText}`);
  }
}

export default new SpaceshipFeatures();
