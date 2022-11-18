import { useParams } from 'react-router-dom'

export function AirportDetailPage() {
    const params = useParams<'id'>()

    return (
        <div className='container max-w-[760px] mx-auto pt-5'>
            <h1>Airport {params.id}</h1>
        </div>
    )
}
