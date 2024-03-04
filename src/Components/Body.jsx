import React, { useEffect, useState } from 'react';
import Card from './Card';
import axios from 'axios';

const Body = ({setId}) => {

    const [data, setData] = useState([])

    useEffect(() => {
        fetchData()
    })


    const fetchData = async () => {
        await axios.get("https://65e480343070132b3b24d97f.mockapi.io/books")
            .then(res => setData(res.data))
            .catch((err) => console.log(err))
    }


    return (
        <div>
            Body

            {data.map((item, index) => {
                return (
                    <div key={index}>
                        <Card item={item} setId = {setId} />
                    </div>

                )
            })}
        </div>
    );
};

export default Body;