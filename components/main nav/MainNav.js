"use client"
import React, { useState } from "react";
import Nav from "./nav/Nav";
import Aside from "./aside/Aside";

const MainNav = () => {
    const [showAside, setShowAside] = useState(false);
    const funHideAside = () => {
        setShowAside(false);
    };

    const funShowAside = () => {
        setShowAside(true);
    };

    return (
        <>
            <Nav onShowAside={funShowAside} />
            {showAside && <Aside onHideAside={funHideAside} />}
        </>
    );
};

export default MainNav;
