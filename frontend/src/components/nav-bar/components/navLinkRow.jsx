import React from "react";
import { NavLink } from "react-router-dom";

const NavLinkRow = ({
    navButtons,
    linkKey,
    picture,
    highLightButton,
    changeActiveButton,
}) => {
    return (
        <div className="flex items-center w-full mt-3">
            <img className="h-6 mr-2" src={picture} alt={linkKey} />
            <NavLink 
            to={linkKey} 
            className={highLightButton(navButtons[linkKey].name)} 
            onClick={changeActiveButton}>
                {navButtons[linkKey].name}
            </NavLink>
        </div>
    )
}

export { NavLinkRow }