import { MouseEventHandler, SetStateAction } from "react";

export interface CustomButtonProps {
    title: string;
    containerStyles?: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>
    btnType?: "button" | "submit";
}

export interface SearchCityProps{
    city: string,
    setCity: (city: string) => void
}