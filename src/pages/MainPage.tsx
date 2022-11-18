import { useEffect, useRef } from 'react'
import { AirportCard } from '../components/AirportCard'
import { AirportFilter } from '../components/AirportFilter'
import { AirportSearch } from '../components/AirportSearch'
import { useAppDispatch, useAppSelector } from '../hook/redux'
import { fetchAirports } from '../store/actions/airportActions'
import ReactPaginate from 'react-paginate'

const ITEMS_PER_PAGE = 50

export function MainPage() {
    const page = useRef(1)

    const { error, loading, airports, count } = useAppSelector(state => state.airport)

    const dispatch = useAppDispatch()
    const pageCount = Math.ceil(count / ITEMS_PER_PAGE)

    const pageChangeHandler = ({ selected }: { selected: number }) => {                                           // const pageChangeHandler = (event: { selected: number }) => {
        page.current = selected + 1
    }

    useEffect(() => {
        dispatch(fetchAirports(page.current, ITEMS_PER_PAGE))
    }, [dispatch, page])

    return (
        <div className="container max-w-[760px] mx-auto pt-5">
            <AirportSearch />
            <AirportFilter />
            {loading && <p className='text-center text-lg'>Loading...</p>}
            {error && <p className='text-center text-lg text-red-600'>{error}</p>}
            {airports.map(airport => <AirportCard key={airport.id} airport={airport} />)}
            <ReactPaginate
                breakLabel="..."
                nextLabel=">"
                onPageChange={pageChangeHandler}
                pageRangeDisplayed={3}
                pageCount={pageCount}
                previousLabel="<"
                forcePage={page.current - 1}
                containerClassName='flex'
                pageClassName='mr-2 px-2 py-1 border'
                previousClassName='mr-2 px-2 py-1 border'
                nextClassName='px-2 py-1 border'
                activeClassName='text-white bg-gray-500'
            />
        </div>
    )
}
