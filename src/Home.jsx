import React from "react";
import { NavLink } from "react-router-dom";
import web from "../src/images/1.svg";
import Common from "./Common";

const Home = () => {

    return (
        <>
            
        <Common name='Increase your skill with ' imgsrc={web} visit="/service" btname="Learn now" />
        </>
    );
};

export default Home;
