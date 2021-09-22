import React, {useEffect, useState} from 'react'
import {useDispatch} from "react-redux";
import {fetchPageAirline} from "../../redux/actions/airline";
import ListAirline from "./ListAirline";
import {changeRoutePage} from "../../redux/actions/common";

export default function Airline(){
    const dispatch = useDispatch()
    const [page, setPage] = useState(0)
    useEffect(()=>{
        dispatch(fetchPageAirline(page))
    },[page, dispatch])
    useEffect(()=>{
        dispatch(changeRoutePage('airline'))
    },[dispatch])

    return <ListAirline page={page} setPage={setPage} />
}