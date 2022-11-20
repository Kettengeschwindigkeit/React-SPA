import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from '../axios'
import { IAirportDetail } from '../models/models'

export function AirportDetailPage() {
    const [airport, setAirport] = useState<IAirportDetail | null>(null)
    const [loading, setLoading] = useState(true)

    const params = useParams<'id'>()

    async function fetchDetailAirport() {
        const response = await axios.get<IAirportDetail>(`/airports/${params.id}`)
        setAirport(response.data)
        setLoading(false)
    }

    useEffect(() => {
        fetchDetailAirport()
    }, [])

    if (loading) return <p className='text-center'>Loading...</p>

    return (
        <div className='container max-w-[760px] mx-auto pt-5'>
            <h1 className='text-center text-2xl'>{airport?.name}</h1>
            <p>{airport?.coordinates}</p>
            <p>{airport?.country}</p>
            <p>{airport?.region}</p>
        </div>
    )
}
