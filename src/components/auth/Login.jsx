import React, {Component, useEffect, useState} from 'react';
import classes from './Login.module.css'
import styled from "styled-components";
import axios from "axios";
import {useRouteMatch} from "react-router-dom";
import App from "../../App";


function Login({submitHandler, data, changeHandler, token, submitHandlerr, erro }){



    return (

        <div className={classes.column}>

            { token !== undefined  ? (
                <section>
                <div>
                    <form action="" onSubmit={submitHandlerr}>
                    <p>Вы авторизовались</p>
                        <button type='submit' className={classes.button}> Выйти</button>
                    </form>
                </div>
                </section>
            ) : (
                <section>
                <form action="" onSubmit={submitHandler}>
                    <h3>Авторизация</h3>
                    <div className={classes.qwe}>
                        <p>Email
                            <input className={classes.input} type='email' name='email' value={data.email}
                                   onChange={changeHandler}/>

                        </p>
                    </div>
                    <div className={classes.qwe}>
                        <p>Password
                            <input className={classes.input} name='password' type='password' value={data.password}
                                   onChange={changeHandler}/>
                        </p>
                        {erro}
                    </div>
                    <button type='submit' className={classes.button}> Войти</button>
                </form>
                </section>

            )}
        </div>

    );

}


export default Login;