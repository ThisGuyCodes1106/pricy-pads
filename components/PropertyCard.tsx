'use client'

import React, { useState } from 'react'
import Image from "next/image";
import { PropertyProps } from "@/Types/index";
import { CustomButton, PropertyDetails } from "@/components";

interface PropertyCardProps {
    property: PropertyProps;
}

const PropertyCard = ({property}: PropertyCardProps) => {
    const { bathrooms, bedrooms, price, city, country, imgSrc, streetAddress, livingArea } = property

    const [isSelected, setIsSelected] = useState(false)

    return (
        <div className='property-card group'>
            <div className="property-card__content">
                <h2 className="property-card__content-title">
                    {bedrooms} bedroom, {bathrooms} bathroom, {city}
                </h2>
            </div>

            <p className='flex mt-6 text-[32px] font-extrabold'>
                <span className='self-start text-[14px] font-semibold'>
                    $
                </span>
                    {price}
                <span className='self-end text-[14px] font-medium'>
                    /month
                </span>
            </p>

            <div className="relative w-full h-30 my-3 object-contain">
                {/* <Image src="/beach-house.jpg" alt='property-image' fill priority className='object-contain' /> */}
                <img className='rounded-lg object-contain' src={imgSrc} alt="" />
            </div>

            <div className='relative flex w-full mt-2'>
                <div className="flex group-hover:invisible w-full justify-between text-gray">
                    <div className='flex flex-col justify-center items-center gap-2'>
                        <Image src="/bed-logo.png" alt='' width={25} height={25} />
                        <p className='text-[16px] font-bold'>{bedrooms} bed</p>
                    </div>
                    <div className='flex flex-col justify-center items-center gap-2'>
                        <Image src="/bath-logo.png" alt='' width={25} height={25} />
                        <p className='text-[16px] font-bold'>{bathrooms} bath</p>
                    </div>
                    <div className='flex flex-col justify-center items-center gap-2'>
                        <Image src="/area-logo.png" alt='' width={25} height={25} />
                        <p className='text-[16px] font-bold'>{livingArea} sqft</p>
                    </div>
                </div>

                <div className="property-card__btn-container">
                    <CustomButton
                        title='More info'
                        containerStyles='w-full py-[16px] rounded-full bg-primary-blue'
                        textStyles='text-white text-[14px] leading-[17px] font-bold'
                        rightIcon='/right-arrow.svg'
                        handleClick={() => setIsSelected(true)}
                    />
                </div>
            </div>

            <PropertyDetails 
                isSelected={isSelected}
                closeModal={() => setIsSelected(false)}
                property={property}
            />
        </div>
    )
}

export default PropertyCard