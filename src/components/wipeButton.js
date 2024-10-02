import React from "react";
import styles from "@/styles/wipeButton.module.css";

const WipeButton = ({ text, color, link }) => {
    return (
        <a href={link} target="_blank" className={`relative w-fit py-5 px-10 font-main text-white bg-${color} font-semibold text-lg border-inherit border-${color} border-4 ${styles.wipeButton}`} >
            <span>{text}</span>
        </a>
    );
};

export default WipeButton;
