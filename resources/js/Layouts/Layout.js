// import "../Pages/App.css";
import React, { useEffect } from 'react';
// import ScrollToTop from "../Components/ScrollToTop";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import setSeoData from "./SetSeoData";
// import {Fragment} from "react";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


export default function Layout({children, seo=null}) {
    if (seo){
        setSeoData(seo);
    }

    return (
        <>
            {/*<Router>*/}
            {/*<Fragment>*/}
                <Header/>
                {children}
                <Footer/>
            {/*</Fragment>*/}
            {/*</Router>*/}
        </>
    );
}
