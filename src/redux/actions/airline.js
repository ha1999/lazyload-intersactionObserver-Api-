import axios from "axios";
export const FETCH_PAGE_AIRLINE = 'FETCH_PAGE_AIRLINE'
export const ADD_PAGE_AIRLINE = 'ADD_PAGE_AIRLINE'


export const addPageAirline = pageAirline =>({
    type: ADD_PAGE_AIRLINE,
    payload: pageAirline
})

export const fetchPageAirline = page => async dispatch => {
    try{
        const {data} = await axios.get(`https://api.instantwebtools.net/v1/passenger?page=${page}&size=20`)
        dispatch(addPageAirline(data.data))
    } catch (error){
        console.log('Error is ', error.message)
    }
}

