import React from "react";
import myImage from '../images/landing-page.jpg';
import Header from '../components/layout/Header'
import Typography from '@material-ui/core/Typography';
import Paper from "@material-ui/core/Paper";
import RecipeBrowse from './RecipeBrowse';
import Container from '@material-ui/core/Container';



const landingStyles = {
    header:{
        height: '100vh',
        'background-image': "url(" +myImage+")",
        'background-size': 'auto',
        display: 'flex',
        'flex-direction': 'column',
        'align-items': 'center',
        'justify-content': 'center',
        'background-size': 'cover', 
        'margin-bottom': '30px',
    },
    h1:{
      'text-shadow': "4px 4px 5px white"
    }
}

const Landing = () => {
  return (
    <div>
        <Header color={'transparent'}/>
      <header style={landingStyles.header}>
      <Typography variant="h1" component="h1" gutterBottom  color={"white"}>
        FoodPal
      </Typography>
        <p>This is a test</p>
      </header>
      <Container fixed> 
      <Paper>
        <Typography align="center" variant="h3" color={"white"} >
          {"Recipes"}
        </Typography>
        <br/>
        <RecipeBrowse/>
      </Paper>
      
      </Container>
      
    </div>
  );
};

export default Landing;
