"use client";

import React from 'react'
import { CustomButtonProps } from "@/Types";

const CustomButton = ({ title, containerStyles, handleClick, btnType}: CustomButtonProps):JSX.Element => {
  return (
    <button
        disabled={false}
        type={btnType || "button"}
        className={`custom-btn ${containerStyles}`}
        onClick={handleClick}
        >
          <span className={`flex-1`}>
            {title}
          </span>
        </button>
  )
}

export default CustomButton


//Notes:
// Explicit return type - const CustomButton = ({ title, containerStyles, handleClick}: CustomButtonProps):JSX.Element => {...