import {Route, Routes} from "react-router-dom";
import React from "react";
import Home from "./Pages/Home";
import Login from './Pages/Login';
import Products from './Pages/Products';
import User from "./Pages/User";
import ProductCreate from "./Pages/ProductCreate";






const AppRouter = (
    <Routes>
        <Route index element={<Home/>}></Route>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/user" element={<User/>}></Route>
        <Route path="/create" element={<ProductCreate/>}></Route>

        <Route path="/products" element={<Products/>}></Route>

        <Route path="/login" element={<Login/>}/>

        ,
    </Routes>
);

export default AppRouter;