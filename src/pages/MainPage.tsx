import { useEffect } from 'react'
import { AirportCard } from '../components/AirportCard'
import { AirportFilter } from '../components/AirportFilter'
import { AirportSearch } from '../components/AirportSearch'
import { useAppDispatch, useAppSelector } from '../hook/redux'
import { fetchAirports } from '../store/actions/airportActions'

export function MainPage() {
    const dispatch = useAppDispatch()

    const { error, loading, airports } = useAppSelector(state => state.airport)

    useEffect(() => {
        dispatch(fetchAirports())
    }, [])

    return (
        <div className="container max-w-[760px] mx-auto pt-5">
            <AirportSearch />
            <AirportFilter />
            {airports.map(airport => <AirportCard key={airport.id} airport={airport} />)}
        </div>
    )
}
