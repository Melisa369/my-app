import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import './Style.css';
import image from './img/BlogImg.jpg';
import { useTranslation } from "react-i18next";
import LanguageSelect from "./languageSelect";
import './Lan.css';


export default function FixedContainer() {
  const { t } = useTranslation();
  return (
    <React.Fragment>
      <CssBaseline />
      <Container fixed>
     
    <div className="language-select">
        <LanguageSelect />
    </div>
        <div className="img">

        <img src={image} alt="nice"/>
        
        <h1 className="h1">
         {t("create_your_blog")}
        </h1>

        <p className="p">{t("bring_your_ideas_to_life_by_writing_and_managing_your_blog_whenever_inspiration_strikes,_on_your_desktop_or_on_the_go")}</p>
        
        </div> 
        
      </Container>
    </React.Fragment>
    );           
}

