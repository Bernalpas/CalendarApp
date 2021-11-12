

import React from 'react'

const CalendarEvent = ({event}) => {


    const {title, user} = event;

    return (
        <div>
            <span>Evento: </span>
            <span>{ title }</span>
            <span> - { user.name }</span>
        </div>
    )
}

export default CalendarEvent;
