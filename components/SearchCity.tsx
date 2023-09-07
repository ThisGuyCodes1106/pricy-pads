'use client'

import React, { useState, Fragment } from 'react'
import { SearchCityProps } from "@/Types";
import { Combobox, Transition } from '@headlessui/react'
import { CheckIcon } from '@heroicons/react/20/solid'
import { cities } from "@/constants";

function SearchCity({city, setCity}: SearchCityProps) {

    const [selectedCity, setSelectedCity] = useState(cities[0])
    const [query, setQuery] = useState('')

    const filteredCities = 
        query === ''
            ? cities
            : cities.filter((city) => {
                return city.name.toLowerCase().includes(query.toLowerCase())
            })

  return (
    <div className="search-manufacturer">
        <Combobox value={selectedCity} onChange={setSelectedCity}>
        <Combobox.Input
            onChange={(event) => setQuery(event.target.value)}
            displayValue={(city) => city.name}
        />
        <Combobox.Options>
            {filteredCities.map((city) => (
            /* Use the `active` state to conditionally style the active option. */
            /* Use the `selected` state to conditionally style the selected option. */
            <Combobox.Option key={city.id} value={city} as={Fragment}>
                {({ active, selected }) => (
                <li
                    className={`${
                    active ? 'bg-blue-500 text-white' : 'bg-white text-black'
                    }`}
                >
                    {selected && <CheckIcon />}
                    {city.name}
                </li>
                )}
            </Combobox.Option>
            ))}
        </Combobox.Options>
        </Combobox>
    </div>
  )
}

export default SearchCity