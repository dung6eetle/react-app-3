import React from 'react';
import './Header.css'

function Header() {
    const date = new Date()
    const hours = date.getHours()
    let timeOfDay

    if (hours < 12) {
        timeOfDay = "morning"
    } else if (hours >= 12 && hours <17) {
        timeOfDay = "afternoon"
    } else {
        timeOfDay = 'night'
    }

    return (
        <header className='navbar'>
           <h1>TODO BUG-DOR</h1>
           <p>Good {timeOfDay}!</p>
        </header>
    )
}
export default Header