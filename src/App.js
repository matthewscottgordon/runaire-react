import 'regenerator-runtime/runtime'
import React, { useState, useEffect } from 'react'

export default function App () {
    const [items, setItems] = useState([])
    const [error, setError] = useState(false)

    useEffect(() => {
        fetchDayList()
            .then(setItems)
            .catch(err => setError(true))
    }, [])

    if (error) { return 'ERROR' }
    if (items.length == 0) { return 'No Items.' }
    return <DayList items={items} />
}

function DayList ({ items }) {
    return (
            <ul>
            {items.map((item, i) => (
                    <DayListItem key={i} {...item} />
            ))}
        </ul>
    )
}

function DayListItem ({ name, is_done }) {
    return (
            <li>
            <input type='checkbox' checked={is_done} />
            {name}
        </li>
    )
}

async function fetchDayList () {
    const response = await fetch('/api/list')
    return await response.json()
};
