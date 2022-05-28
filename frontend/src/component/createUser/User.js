import React from 'react';
import {useForm} from 'react-hook-form';
import axios from 'axios';
import {c_user} from '../../config/apis';
import { useNavigate } from 'react-router-dom';

const User = () => {

    const {handleSubmit, register} = useForm();
    const navigate = useNavigate();

    const onSubmit = (data) => {
        axios.post(c_user, {
            name: data.name,
            email: data.email,
            mob_no: data.mob_no,
            desc: data.desc
        }).then((res) => {
            navigate('/');
        }).catch((err) => {
            console.log(err);
        })
    };

    const submit = () => {
        navigate('/')
    }

    return (
        <>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <h1>Enter user details</h1>
                <input placeholder='Name'
                    type='text'
                    {...register("name", {
                        required: true
                    })} 
                />
                <input placeholder='Email'
                    type='email'
                    {...register("email", {
                        required: true
                    })} 
                />
                <input placeholder='Mobile Number'
                    type='Number'
                    {...register("mob_no", {
                        required: true
                    })} 
                />
                <input placeholder='Description'
                    type='text'
                    {...register("desc", {
                        required: true
                    })} 
                />
                <button type='submit'>Submit</button>
            </div>
        </form>
        <button type='submit' onClick={submit}>Home</button>
        </>
    );
};

export default User;