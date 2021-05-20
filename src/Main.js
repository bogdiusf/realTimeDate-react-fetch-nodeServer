import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Time = styled.div`
    font-size: 30px;
    padding: 40px;
    border: 3px solid black;
`;

export default function Main() {

    const [time, setTime] = useState('')

    useEffect(() => {
        async function getDate() {
            await axios.get('/gettime')
                .then(response => { console.log(response.data); setTime(response.data) })
                .catch(error => console.log(error))

            setTimeout(getDate, 1000)
        }

        getDate();

    }, [])


    return (
        <Time>{time}</Time>
    )
}