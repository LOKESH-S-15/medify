import axios from "axios";
export const StateApi = async () => {
  try {
    const states = await axios.get(
      `https://meddata-backend.onrender.com/states`
    );
    return states.data;
  } catch (error) {
    console.log(error);
  }
};
export const CityApi = async (state) => {
  try {
    const states = await axios.get(
      `https://meddata-backend.onrender.com/cities/${state}`
    );
    return states.data;
  } catch (error) {
    console.log(error);
  }
};
export const MedicalCentersApi = async (state, city) => {
  try {
    const states = await axios.get(
      `https://meddata-backend.onrender.com/data?state=${state}&city=${city}`
    );
    return states.data;
  } catch (error) {
    console.log(error);
  }
};
