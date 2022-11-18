import axios from '../axios'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDebounce } from '../hook/debounce'
import { useInput } from '../hook/input'
import { IAirport, ServerResponse } from '../models/models'

export function AirportSearch() {
    const [airports, setAirports] = useState<IAirport[]>([])
    const [dropdown, setDropdown] = useState(false)

    const input = useInput()
    const navigate = useNavigate()
    const debounced = useDebounce<string>(input.value, 400)

    async function searchAirports() {
        const response = await axios.get<ServerResponse<IAirport>>(`airports`, {
            params: {
                search: debounced,
                count: 10
            }
        })
        setAirports(response.data.results)
    }

    useEffect(() => {
        if (debounced.length > 3) {
            searchAirports().then(() => setDropdown(true))
        } else {
            setDropdown(false)
        }
    }, [debounced])

    return (
        <div className='relative mb-4'>
            <input type='text' className='w-full px-4 py-2 border outline-0' placeholder='Type something here...' {...input} />
            {dropdown && <ul className='absolute top-[42px] right-0 left-0 h-[200px] bg-white list-none overflow-y-scroll'>
                {airports.map(airport => (
                    <li
                        className='mb-2 px-4 py-2 hover:text-white hover:bg-gray-500 hover:transition-colors cursor-pointer'
                        key={airport.id}
                        onClick={() => navigate(`/airport/${airport.id}`)}
                    >
                        {airport.name}
                    </li>))}
            </ul>}
        </div>
    )
}
