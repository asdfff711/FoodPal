import React from "react";
import backgroundImage from "../images/landing-page.jpg";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import RecipeBrowse from "./RecipeBrowse";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";

const landingStyles = {
  header: {
    height: "100vh",
    "background-image": "url(" + backgroundImage + ")",
    "background-size": "auto",
    display: "flex",
    "flex-direction": "column",
    "align-items": "center",
    "justify-content": "center",
    "background-size": "cover",
    "margin-bottom": "30px"
  }
};

const useStyles = makeStyles({
  h1: {
    "font-size": "900",
    // "color": "white",
    'text-shadow': '0px 2px 3px #555'
  }
});

const Landing = () => {
  const classes = useStyles();
  return (
    <div>
      <header style={landingStyles.header}>
        <Typography variant="h1" component="h1" gutterBottom color={"white"} className={classes.h1}>
          FoodPal
        </Typography>
        <p>This is a test</p>
      </header>
      <Container fixed>
        <Typography
          align="center"
          variant="h3"
          // color={"white"}
          className={classes.h2}
        >
          {"Recipes"}
        </Typography>
        <br />
        <RecipeBrowse />
      </Container>
    </div>
  );
};

export default Landing;
