import React from 'react'
import { AirportCard } from '../components/AirportCard'
import { AirportFilter } from '../components/AirportFilter'
import { AirportSearch } from '../components/AirportSearch'

export function MainPage() {
    return (
        <div className="container max-w-[760px] mx-auto pt-5">
            <AirportSearch />
            <AirportFilter />
            <AirportCard />
        </div>
    )
}
