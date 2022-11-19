import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IAirportCountry, IAirportRegion, IAirportType } from '../../models/models'

interface HandbookPayload {
    countries: IAirportCountry[]
    regions: IAirportRegion[]
    types: IAirportType[]
}

interface HandbookState {
    loading: boolean
    countries: IAirportCountry[]
    regions: IAirportRegion[]
    types: IAirportType[]
}

const initialState: HandbookState = {
    loading: false,
    countries: [],
    regions: [],
    types: []
}

export const handbookSlice = createSlice({
    name: 'handbook',
    initialState,
    reducers: {
        fetching(state) {
            state.loading = true
        },
        fetchSuccess(state, action: PayloadAction<HandbookPayload>) {
            state.loading = false
            state.countries = action.payload.countries
            state.regions = action.payload.regions
            state.types = action.payload.types
        }
    }
})

export default handbookSlice.reducer
