import React from "react";
import Login from "./components/auth/Login";
import {Route, Routes, Link,  useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import {Getuser} from "./components/auth/Getuser";
import classes from "./App.module.css";




function App(){
    const succes = useSelector((state) => state.login.isSuccess)
    const navigate = useNavigate();
    const submitHandlerr = () => {
        localStorage.removeItem('token');

        return navigate("/")
    }
    return (
        <div className="App">
            <div className={classes.head}>
                <Link className={classes.head} to='/'>Login</Link>
                {localStorage.getItem('token') === 'undefined'||  localStorage.getItem('token') === null ? ("")
                     :(<Link className={classes.head} to='/profile'>Profile</Link>) }
            </div>
            <div className='Appp'>
                <Routes>
                    <Route path='/' element={
                        <Login
                            submitHandlerr={submitHandlerr}
                            succes={succes}
                            navigate={navigate}
                        />
                    }/>
                    <Route path='/profile' element={<Getuser
                        submitHandlerr={submitHandlerr}
                        succes={succes}

                    />}/>)
                </Routes>
            </div>
        </div>
    );
}
export default App