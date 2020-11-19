import React, {useEffect, useState} from 'react';
import axios from 'axios';

export default function List() {

    const [list, setList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        if (!(list.length > 0)) {
            getList();
        }
    }, [])


    const getList = async () => {
        const response = await axios.get('http://localhost:9000/users/list');
        console.log(response)
        setList(response.data.list);
        setIsLoading(false);
        return;
    }


    const getUserData = async () => {
        await axios.get('http://localhost:9000/users/get-user-info').then(res => console.log(res));
    }

    const renderList = () => {
        return list.map((el, idx) => 
            <div key={idx}>
                {el.name}
                {el.age}
            </div>
        )
    }

    return (
        <div>
            {isLoading ? 'Loading...' : renderList()}
            <button onClick={getUserData}>get User Data</button>
        </div>
    )
}