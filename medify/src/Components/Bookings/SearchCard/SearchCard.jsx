import React, { useState, useEffect } from "react";
import style from "./SearchCard.module.css";
import Autocomplete from "@mui/material/Autocomplete";
import { CityApi, StateApi, MedicalCentersApi } from "../../Api/Api";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";
const SearchCard = ({ handleMedicalCenters }) => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = (searchValue) => {
    handleMedicalCenters(searchValue);
  };

  return (
    <div className={style.SearchCardCon}>
      <div className={style.SearchSectionInputCardCon}>
        <div className={style.SearchSectionInputCon}>
          <TextField
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            className={style.SearchSectionInput}
            label="Medical centers"
            startIcon={<SearchIcon />}
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
