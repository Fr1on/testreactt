
import React, {useEffect, useState} from 'react';

import axios from 'axios';
import Login from "./Login";
export function Getuser ({data, user} ){


        return (
            <div>
                <img width='100px' src={user.avatar}/>
                <p>Никнейм: {user.username}</p>
                <p>Имя: {user.firstName}</p>
                <p>Фамилия: {user.lastName}</p>
                <p>День рождения: {user.birthdayTimestamp}</p>
                <p>Роль: {user.userRole}</p>
                <p>Страна: {user.country}</p>
                <p>Город: {user.city}</p>
                <p>Email:  {user.email}</p>
                <p>Номер: {user.phone}</p>
                <p>Время: {user.timestamp}</p>
                <p>Время создания: {user.createdTimestamp}</p>
                <p>Время обновления: {user.updatedTimestamp}</p>
                <p>Id:  {user.id}</p>
            </div>
        )

}

