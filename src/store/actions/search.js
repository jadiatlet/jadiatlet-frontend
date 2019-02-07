import Endpoint from "../apis/Endpoint";

export const setSearchValue = value => ({
  type: "SEARCH_VALUE",
  payload: value
});

export const searchValue = data => dispatch => {
  Endpoint.get(`/users?city=${data.city}&sport=${data.sport}&user_type=Coach`, data)
    .then(response => {
      if (response.status === 200) {
        console.log(response);
        dispatch(setSearchValue(response.data));
      }
    })
    .catch(err => {
      console.log(err);
    });
};