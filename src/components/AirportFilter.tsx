import { ChangeEvent, useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../hook/redux'
import { IFilter } from '../models/models'
import { airportSlice } from '../store/slices/airportSlice'

export function AirportFilter() {
    const [filter, setFilter] = useState<IFilter>({ country: '', region: '', type: '' })
    const [hasFilter, setHasFilter] = useState(false)

    const { regions, countries, types, loading } = useAppSelector(state => state.handbook)

    const dispatch = useAppDispatch()

    const isFilterEnabled = () => {
        return filter.type || filter.region || filter.country
    }

    const changeHandler = (event: ChangeEvent<HTMLSelectElement>) => {
        setFilter(prev => ({ ...prev, [event.target.name]: event.target.value }))
    }

    const clearFilter = () => {
        setFilter({ country: '', region: '', type: '' })
    }

    useEffect(() => {
        if (isFilterEnabled()) {
            setHasFilter(true)
        } else {
            setHasFilter(false)
        }
        dispatch(airportSlice.actions.filter(filter))
    }, [filter])

    if (loading) return <p className='text-center'>Loading...</p>

    return (
        <div className='mb-2 px-4 py-2 border'>
            <span className='mr-2 font-bold'>Filter</span>
            <select name='type' className='mr-2 px-2 py-1 border' value={filter.type} onChange={changeHandler}>
                <option value="" disabled>Type</option>
                {types.map(t => <option key={t}>{t}</option>)}
            </select>
            <select name='country' className='mr-2 px-2 py-1 border' value={filter.country} onChange={changeHandler}>
                <option value="" disabled>Country</option>
                {countries.map(c => <option key={c}>{c}</option>)}
            </select>
            <select name='region' className='mr-4 px-2 py-1 border' value={filter.region} onChange={changeHandler}>
                <option value="" disabled>Region</option>
                {regions.map(r => <option key={r}>{r}</option>)}
            </select>
            {hasFilter && <button className='px-4 py-1 text-white bg-red-700 rounded' onClick={clearFilter}>&times;</button>}
        </div>
    )
}
