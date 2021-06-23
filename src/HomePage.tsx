import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import './Style.css'
import image from './img/BlogImg.jpg';



export default function FixedContainer() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container fixed>
        <div className="img">

        <img src={image}/>
        
        <h1 className="h1">
          Create your blog
        </h1>

        <p className="p">Bring your ideas to life by writing and managing your blog whenever inspiration strikes, on your desktop or on the go.</p>
        
        </div> 
      </Container>
    </React.Fragment>
    );           
}

