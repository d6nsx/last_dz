import React from 'react';
import classes from './User.module.scss';
import Button from '../button/Button';


const User = ({ user, getApiUser, userOne }) => {
    return (
        <div className={classes.user}>
            <div>name: {user.name}</div>
            <div>email: {user.email}</div>
            <Button title={'Подробнее'} action={() => {
                getApiUser('users', user.id);
            }}/>
            {
                userOne.id === user.id && <div>
                    <div>company name: {user.company.name}</div>
                    <div>phone: {user.phone}</div>
                </div>
            }
        </div>
    );
};

export default User;