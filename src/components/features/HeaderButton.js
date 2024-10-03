import React from "react";

const HeaderButton = ({ text, link }) => {
    return (
        <a
            href={link}
            className="hover:bg-slate-300 align-middle text-xl hover:text-slate-900 transform-transition duration-300 ease-out rounded-t-lg p-4 hover:-mt-[0.4rem]"
        >
            {text}
        </a>
    );
};

export default HeaderButton;
