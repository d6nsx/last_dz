import React, { useEffect, useState } from 'react';
import { BASE_URL } from './TodoPage';
import User from '../components/user/User';
import classes from './UserPage.module.scss';


const UserPage = () => {
    const [users, setUsers] =useState([])
    const [userOne, setUserOne] =useState({})
    console.log(userOne);
    const getApi = async(API) => {
        const response = await fetch(`${BASE_URL}/${API}`);
        const data = await response.json();
        return data;
    };
    const getApiUser = async(API, id) => {
        const response = await fetch(`${BASE_URL}/${API}/${id}`);
        const data = await response.json();
        setUserOne(data)
    };
    useEffect(() => {
        getApi('users').then(users=> setUsers(users))
    }, []);
    return (
        <div className={classes.list}>
            {
                users.map(user=><User user={user} getApiUser={getApiUser} userOne={userOne}/>)
            }
        </div>
    );
};

export default UserPage;