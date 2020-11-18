import React from 'react';
import { NavLink } from 'react-router-dom';

const Header =()=>(
    <header>
        <h1>Get Gif</h1>
        <NavLink to='/public/' activeClassName='is-active' exact={true} >Go Home</NavLink>
        <NavLink to='/public/RandGif' activeClassName='is-active'>Random</NavLink>
        <NavLink to='/public/GifSearch' activeClassName='is-active'>Search a Gif</NavLink>
 
    </header>
 );
 export default Header;