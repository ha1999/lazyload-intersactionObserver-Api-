import React, {useCallback, useRef} from 'react'
import {useSelector} from 'react-redux'
import AirlineItem from "./AirlineItem";
export default function ListAirline({page, setPage}){
    const listAirline = useSelector(state => state.airline)
    const observer = useRef()

    const lastAirlineElement = useCallback((node)=>{
        if(observer.current)observer.current.disconnect()
        observer.current = new IntersectionObserver(entries =>{
            entries.forEach(entry => {
                if (entry.intersectionRatio > 0) {
                    setPage(page+1)
                    observer.current.unobserve(node)
                }
            });
        }, {
            root: null,
            rootMargin: "0px",
            threshold: 0
        })
        if(node) observer.current.observe(node)
    },[page, setPage])

    return <div className="list-airline w-100 d-flex flex-row flex-wrap justify-content-around">
        {
            listAirline.map((airline, index) => {
                if(listAirline.length === index + 5) return <AirlineItem ref={lastAirlineElement} key={index} airline={airline} />
                else return <AirlineItem key={index} airline={airline} />
            })
        }
    </div>
}