import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import demo from "../../../Assests/demo.png";
import doctor from "../../../Assests/doctor.png";
import style from "./LatestNews.module.css";
const LastNews = () => {
  const ImgCard = () => {
    return (
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia sx={{ height: 140 }} image={demo} title="demo" />
        <CardContent>
          <CardActions>
            <Typography variant="body2" color="text.secondary">
              Medical
            </Typography>
            <Typography variant="body2" color="text.secondary">
              March 31, 2022
            </Typography>
          </CardActions>

          <Typography
            variant="body2"
            sx={{ color: "#1B3C74", fontWeight: "500" }}
          >
            6 Tips To Protect Your Mental Health When You’re Sick
          </Typography>
        </CardContent>
        <CardActions>
          <img src={doctor} title="doctor" />
          <Typography
            variant="body2"
            sx={{ color: "#1B3C74", fontWeight: "500" }}
          >
            Rebecca Lee
          </Typography>
        </CardActions>
      </Card>
    );
  };
  return (
    <div className={style.LastNewsCon}>
      <p className={style.LastNewsPara}>Blog & News</p>
      <h1 className={style.LastNewsHead}>Read Our Latest News</h1>
      <div className={style.LastNewsCardCon}>
        <ImgCard />
        <ImgCard />
        <ImgCard />
      </div>
    </div>
  );
};

export default LastNews;
