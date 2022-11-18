import { IAirport } from '../models/models'
import classes from './AirportCard.module.css'

interface AirportCardProps {
    airport: IAirport
}

export function AirportCard({ airport }: AirportCardProps) {
    return (
        <div className={classes.card}>
            <p className='text-lg font-bold'>{airport.name}</p>
            <p>{airport?.region}</p>
            <p>{airport?.type}</p>
            <p>{airport?.country}</p>
            <p>{airport?.local_code}</p>
            <p>{airport?.ident}</p>
        </div>
    )
}
