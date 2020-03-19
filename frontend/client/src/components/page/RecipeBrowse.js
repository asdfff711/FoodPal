import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import RecipeCard from "../layout/RecipeCard";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  },
  marginAutoItem: {
    margin: 'auto'
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container>
      <Grid container spacing={3} >
        <Grid container item xs={12} sm={6} md={3} justify='center'>
          <RecipeCard />
        </Grid>
        <Grid container item xs={12} sm={6} md={3} justify='center'>
          <RecipeCard />
        </Grid>
        <Grid container item xs={12} sm={6} md={3} justify='center'>
          <RecipeCard />
        </Grid>
        <Grid container item xs={12} sm={6} md={3} justify='center'>
          <RecipeCard />
        </Grid>
      </Grid>
      </Container>
    </div>
  );
}
