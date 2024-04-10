import React, { useState, useEffect } from "react";
import style from "./SearchCard.module.css";
import Autocomplete from "@mui/material/Autocomplete";
import { CityApi, StateApi, MedicalCentersApi } from "../../Api/Api";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";
const SearchCard = ({ handleMedicalCenters, handleProgess }) => {
  const [searchValue, setSearchValue] = useState({ state: "", city: "" });
  const [cityList, setCityList] = useState([]);
  const [stateList, setStateList] = useState([]);
  const [medicalCenters, setmedicalCenters] = useState([]);

  const getStates = async () => {
    const states = await StateApi();

    return states;
  };
  const getMedicalCenters = async (state, city) => {
    const MedicalCenters = await MedicalCentersApi(state, city);
    return MedicalCenters;
  };
  const getCities = async (state) => {
    const cities = await CityApi(state);
    return cities;
  };

  useEffect(() => {
    getfromLocalStorage();
    const fetchData = async () => {
      const state = await getStates();
      setStateList(state);
    };
    fetchData();
  }, []);
  const getfromLocalStorage = () => {
    const search = localStorage.getItem("search");
    if (search) {
      const data = JSON.parse(search);
      handleSearch(data);
      handleStateInput(data.state);

      setSearchValue({ ...data });
    }
  };
  const handleStateInput = async (state) => {
    const cities = await getCities(state);
    setCityList(cities);
  };
  const handleInput = (state, city) => {
    console.log(city);
    if (city || city === null) {
      setSearchValue({ ...searchValue, city: city });
    } else {
      handleStateInput(state);
      setSearchValue({ ...searchValue, state: state });
    }
  };
  const handleSearch = async (searchValue) => {
    handleProgess(true);

    const MedicalCenters = await getMedicalCenters(
      searchValue.state,
      searchValue.city
    );
    handleMedicalCenters(MedicalCenters);
    handleProgess(false);
  };

  return (
    <div className={style.SearchCardCon}>
      <div className={style.SearchSectionInputCardCon}>
        <div className={style.SearchSectionInputCon}>
          <Autocomplete
            value={searchValue.state}
            id="controlled-demo"
            includeInputInList
            options={stateList}
            sx={{ width: 300 }}
            onChange={(event, newValue) => {
              handleInput(newValue);
            }}
            startIcon={<SearchIcon />}
            className={style.SearchSectionInput}
            renderInput={(params) => (
              <TextField {...params} label="State" startIcon={<SearchIcon />} />
            )}
          />
          <Autocomplete
            id="controlled-demo"
            includeInputInList
            value={searchValue.city}
            options={cityList}
            sx={{ width: 300 }}
            onChange={(event, newValue) => {
              handleInput(searchValue.state, newValue);
            }}
            className={style.SearchSectionInput}
            renderInput={(params) => (
              <TextField {...params} label="city" startIcon={<SearchIcon />} />
            )}
          />
        </div>
        <Button
          startIcon={<SearchIcon />}
          variant="contained"
          className={style.SearchSectionInputBtn}
          onClick={() => {
            handleSearch(searchValue);
          }}
        >
          Search
        </Button>
      </div>
    </div>
  );
};

export default SearchCard;
