import { useEffect } from 'react'
import { AirportCard } from '../components/AirportCard'
import { AirportFilter } from '../components/AirportFilter'
import { AirportSearch } from '../components/AirportSearch'
import { useAppDispatch } from '../hook/redux'
import { fetchAirports } from '../store/actions/airportActions'

export function MainPage() {
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchAirports())
    }, [])

    return (
        <div className="container max-w-[760px] mx-auto pt-5">
            <AirportSearch />
            <AirportFilter />
            <AirportCard />
        </div>
    )
}
