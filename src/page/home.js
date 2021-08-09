import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { json } from '../redux/action/json'

function Index() {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(json()) 
    }, [])
    const state = useSelector(state => state)
    console.log(state);
    return (

        <div>
            <ul>
                {state && state.data.map((item)=>{return(
                    <li>{item.title}</li> 
                )})
            }
            </ul>
        </div>
    )
}

export default Index
