import { MouseEventHandler, SetStateAction } from "react";

export interface CustomButtonProps {
    title: string;
    containerStyles?: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>
    btnType?: "button" | "submit";
    textStyles?: string;
    rightIcon?: string;
    isDisabled?: boolean;
}

export interface SearchCityProps{
    city: string,
    setCity: (city: string) => void
}

export interface PropertyProps {
    bathrooms: number,
    bedrooms: number,
    city: string,
    country: string,
    currency: string,
    datePriceChanged?: number,
    daysOnZillow?: number,
    homeStatus?: string,
    homeStatusForHDP?: string,
    homeType?: string,
    imgSrc: string,
    isFeatured?: boolean,
    isNonOwnerOccupied?: boolean,
    isPreforeclosureAuction?: boolean,
    isPremierBuilder?: boolean,
    isRentalWithBasePrice?: boolean,
    isShowcaseListing?: boolean,
    isUnmappable?: boolean,
    isZillowOwned?: boolean,
    latitude?: number,
    livingArea?: number,
    longitude?: number,
    price: number,
    priceChange?: number,
    priceForHDP?: number,
    priceReduction?: string,
    rentZestimate?: number,
    shouldHighlight?: boolean,
    state: string,
    streetAddress: string,
    taxAssessedValue?: number,
    zestimate?: number,
    zipcode: string,
    zpid: number,
}