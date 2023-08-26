import { API_URL } from "./url";

export const fetchDataFromApi = async (endpoint) => {
  const options = {
    method: "GET",
    headers: {
      Authorization:
        "Bearer " +
        "a6de48cccf7950ed070d83d4e02252b5e53559c49fb44f981f41a53b217fb5ba1c2b38782fa894136deb971f1f661621bfa604faa42392365d9fc3f4a341a21934044a914ab5c9f6ce671ba67b7df95f5af1a3c2b46aa76a5434f344dfd02278b6307fb0289f5764cbcb81dfd003c111ce1b3837ab5388a0efbaf7e0403d9614",
    },
  };

  const res = await fetch(`${API_URL}${endpoint}`, options);
  const data = await res.json();

  return data;
};
