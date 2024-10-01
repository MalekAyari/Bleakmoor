import React from "react"

const HeaderButton = ({text, link}) => {
    return(
        <a href={link} className="text-white hover:bg-slate-700 transition rounded px-4 py-2">
            {text}
        </a>
    )
}

export default HeaderButton