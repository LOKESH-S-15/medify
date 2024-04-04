import React, { useState, useEffect } from "react";

import Autocomplete from "@mui/material/Autocomplete";
import { CityApi, StateApi } from "../../Api/Api";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";
import style from "./SearchSection.module.css";
import {
  Docter,
  Lab,
  Ambulance,
  MedicalStore,
  Hospital,
} from "./../../Image/Image";
import InputAdornment from "@mui/material/InputAdornment";
const SearchSection = ({}) => {
  const [selectTab, setSelectTab] = useState("");
  const [searchValue, setSearchValue] = useState({ state: "", city: "" });
  const [cityList, setCityList] = useState([]);
  const [stateList, setStateList] = useState([]);

  const getStates = async () => {
    const states = await StateApi();

    return states;
  };
  const getCities = async (state) => {
    const cities = await CityApi(state);
    return cities;
  };
  function handleClick(value) {
    setSelectTab(value);
  }
  const handleInput = (state, city) => {
    console.log(city);
    if (city || city === null) {
      setSearchValue({ ...searchValue, city: city });
    } else {
      handleStateInput(state);
      setSearchValue({ ...searchValue, state: state });
    }
  };
  useEffect(() => {
    const fetchData = async () => {
      const state = await getStates();
      setStateList(state);
    };
    fetchData();
  }, []);

  const handleStateInput = async (state) => {
    const cities = await getCities(state);
    setCityList(cities);
  };
  const serachCardDetails = [
    { img: Docter, label: "Docter" },
    { img: Lab, label: "Lab" },
    { img: Ambulance, label: "Ambulance" },
    { img: MedicalStore, label: "Medical Store" },
    { img: Hospital, label: "Hospital" },
  ];

  const handleSearch = (searchValue) => {
    console.log("handle search", searchValue);
  };

  const SearchSectionTab = ({ item }) => {
    const select = () => {
      return selectTab === item.label
        ? style.SearchSectionSelectedTabCon
        : style.SearchSectionTabCon;
    };
    console.log(select());
    return (
      <div className={select()} onClick={() => handleClick(item.label)}>
        <div className={style.SearchSectionTabImg}>
          <item.img />
        </div>
        {selectTab === item.label ? (
          <h1
            className={style.SearchSectionTabText}
            style={{ color: "#2AA7FF" }}
          >
            {item.label}
          </h1>
        ) : (
          <h1 className={style.SearchSectionTabText}> {item.label}</h1>
        )}
      </div>
    );
  };
  console.log(searchValue.state);
  console.log(searchValue.city);

  return (
    <div className={style.SearchSectionCon}>
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
      <div className={style.SearchSectionDetailsCardCon}>
        <h4 className={style.SearchSectionDetailsCardhead}>
          You may be looking for
        </h4>
        <div className={style.SearchSectionDetailsCon}>
          {serachCardDetails.map((each, index) => {
            return <SearchSectionTab item={each} key={index} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default SearchSection;
