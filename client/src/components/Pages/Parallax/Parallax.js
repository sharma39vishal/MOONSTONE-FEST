import React from 'react'
import DayEvent from './DayEvent'
import NightEvent from './NightEvent'
import { NavLink } from 'react-router-dom'
import "./Parallax.css"
function Parallax() {
    return (
        <>
            <div className='d-flex justify-content-end me-2' style={{ position: "fixed", bottom: "58px", right: "5px" }}>
                <NavLink to="/map" className="floatingButton">
                    <img src="Videos/telescope.gif" style={{ borderRadius: "50%" }} />
                </NavLink>
            </div>
            <DayEvent DayNum={1} id="DayOne"/>
            <NightEvent DayNum={1} />
            <DayEvent DayNum={2} />
            <NightEvent DayNum={2} />
            <DayEvent DayNum={3} />
            <NightEvent DayNum={3} />
        </>
    )
}




export default Parallax
