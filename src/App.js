import React, {useEffect, useState} from "react";
import styled from 'styled-components'
import axios from "axios";
import Login from "./components/auth/Login";
import {Route, Routes, Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {Getuser} from "./components/auth/Getuser";

import classes from "./App.module.css";





function App(){

    const [user, setUser] = useState([])
    const [token, setToken] = useState()
    const [data, setData] = useState({
        email: "",
        password: ""
    })

    const [erro, setErro] = useState()
    const [success, setSuccess] = useState(false);

    const [acc, setAcc] = useState(0)





    function changeHandler (e) {
        const newData={...data}
        newData [e.target.name] = e.target.value
        setData(newData)
    }
    useEffect(() =>
    {
        axios.get('https://api.englishpatient.org/users/me ', {
            headers: {
                header: 'Content-Type: application/json',
                authorization: `${token}`
            }
        },)

            .then(response => {
                setUser(response.data)


            })
            .catch(error => {
                console.log(error)

            })

    },[token])

    const submitHandler = (e) => {
        e.preventDefault()
        axios
            .post('https://api.englishpatient.org/login',
                {
                    email: data.email,
                    password: data.password,
                }
            )
            .then(response => {
                console.log(response.data)
                setToken(response.data.token)

            })
            .catch(error => {
                console.log(error)

            })


    }
    const submitHandlerr = () => {
      setToken('')
        setSuccess(false);
    }


    return (

            <div className="App">
                {erro}
                <div className={classes.head}>
                    <Link className={classes.head} to='/'>Login</Link>
                    { token !== undefined  ?
                        (<Link className={classes.head} to='/profile'>Profile</Link>) : ('')}


                </div>
                <div className='Appp'>
                <Routes>
                    <Route path='/' element={
                        <Login
                            acc={acc}
                            submitHandler={submitHandler}
                            data={data}
                            changeHandler={changeHandler}
                            success={success}
                            token={token}
                            submitHandlerr={submitHandlerr}
                            erro={erro}


                        />

                    }/>

                            <Route path='/profile' element={<Getuser
                            data={data}
                            token={token}
                            user={user}
                    />}/>)

                </Routes>
                </div>
            </div>


    );


}
export default App