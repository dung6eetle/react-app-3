import React from 'react';
import './Header.css'

function Header() {
    const date = new Date()
    const hours = date.getHours()
    let timeOfDay
    const styles ={}
    

    if (hours < 12) {
        timeOfDay = "morning"
        styles.color = "#FFFA5A"
    } else if (hours >= 12 && hours <17) {
        timeOfDay = "afternoon"
        styles.color = "#F08D1D"
    } else {
        timeOfDay = 'night'
        styles.color = "#EE5306"
    }

    return (
        <header className='navbar'>
           <h1>TODO by BUG-DOR</h1>
           <p style={styles}>Good {timeOfDay}!</p>
        </header>
    )
}
export default Header