import React, { useState } from "react";
import { NavLinkRow } from "./components/navLinkRow";
import pictureProfile from "../../assets/nav-icons/profile.png";
import pictureMessages from "../../assets/nav-icons/messages.png";

const NavBar = () => {
    const [activeButton, setActiveButton] = useState('Profile');
    const [navButtons] = useState({
        profile: {name:"Profile", picture: pictureProfile},
        messages: {name:"Messages", picture: pictureMessages},
    })

    const highLightButton = (btn) => {
        if(activeButton === btn) return "text-blue";
        return "";
    }

    const changeActiveButton = (btn) => {
        setActiveButton(btn?.target.text);
        return;
    }

    return (
        <div className="h-full w-1/5 flex bg-white z-10">
            <div className="px-10 h-full w-full flex flex-col" >
                <h3 className="h-1/5 pt-10 text-3xl tracking-widest text-blue font-bold">RGroup</h3>
                <div className="h-3/6 w-full flex flex-col justify-center font-semibold text-xl">
                    {
                    Object.keys(navButtons).map((btnKey, index) => {
                        return (
                            <NavLinkRow
                            navButtons={navButtons}
                            linkKey={btnKey}
                            picture={navButtons[btnKey].picture}
                            highLightButton={highLightButton}
                            changeActiveButton={changeActiveButton}
                            key={index}
                            />
                        )
                    })
                    }
                </div>
            </div>
        </div>
    )
}

export { NavBar }