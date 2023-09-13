'use client'

import React, { useState, Fragment } from 'react'
import { SearchCityProps } from "@/Types";
import { Combobox, Transition } from '@headlessui/react'
import { cities } from "@/constants";
import Image from "next/image";

const SearchCity = ({city, setCity}: SearchCityProps) => {

    const [query, setQuery] = useState('')

    const filteredCities = 
        query === ''
            ? cities
            : cities.filter((city) => {
                return city.name.toLowerCase().replace(/\s+/g, "").includes(query.toLowerCase().replace(/\s+/g, ""))
            })

  return (
    <div className="search-property">
        <Combobox value={city} onChange={setCity}>
            <div className="relative w-full">
                <Combobox.Button className="absolute top-[14px]">
                    <Image
                        src="/home-logo.svg"
                        width={20}
                        height={20}
                        className="ml-4"
                        alt="Property logo"  
                    />
                </Combobox.Button>
                <Combobox.Input
                    className="search-property__input"
                    displayValue={(city: {name: string}) => city.name}
                    placeholder='Leeds'
                    onChange={(event) => setQuery(event.target.value)}
                />

                <Transition
                    as={Fragment}
                    leave='transition ease-in duration-100'
                    leaveFrom='opacity-100'
                    leaveTo='opacity-0'
                    afterLeave={() => setQuery('')}
                >
                    <Combobox.Options className="search-property__options">
                        {
                            filteredCities.map((city) => (
                                <Combobox.Option
                                    key={city.id}
                                    className={({active}) => `
                                       realtive search-property__option
                                       ${active ? 'bg-primary-blue text-white' : 'text-gray-900'}`}
                                    value={city}
                                >
                                    {city.name}
                                </Combobox.Option>
                            ))
                        }
                    </Combobox.Options>
                </Transition>   
            </div>
        </Combobox>
    </div>
  )
}

export default SearchCity