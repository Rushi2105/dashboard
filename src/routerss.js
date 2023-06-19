import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from './home';
import { Sign } from './signin';
import { Login } from './loginin';

export function Routers() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/signin' element={<Sign/>}/>
                <Route path='/loginin' element={<Login/>}/>
            </Routes>
        </BrowserRouter>
    )
}