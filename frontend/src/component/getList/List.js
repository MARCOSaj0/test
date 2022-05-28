import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {get_list} from '../../config/apis';


const List = () => {
    const [list, setList] = useState();

    const navigate = useNavigate();
    
    useEffect(() => {
        const fetch_list = async() => { 
            const user_list = await axios.get(get_list);
            setList(user_list.data);
        };
        fetch_list();
    }, []);
    
    const submit = () => {
        navigate('/create');
    };

    return (
        <div>
            <div>
                {list?.map((item) => {
                    return <p>Name - {item.name}, Email - {item.email}, Mobile Number - {item.mob_no}, Description - {item.desc}</p>
                })}
            </div>
            <button type='submit' onClick={submit}>Create User</button>
        </div>
    );
};

export default List;