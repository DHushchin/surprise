import React from "react";

const Header = ({value}) => {
    return (
        <div className="h-20 w-full shadow z-0">
            <h3>{value}</h3>
        </div>
    )
}

export { Header }