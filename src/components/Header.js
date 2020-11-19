import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => (
  <div>
    <h1>Get Gif</h1>

      <div>
        <NavLink to='/public/' activeClassName='is-active' exact={true}>
          Go Home
        </NavLink>
        {location.pathname !== '/public/RandGif' && (
          <NavLink to='/public/RandGif' activeClassName='is-active'>
            Random
          </NavLink>
        )}
        {location.pathname !== '/public/GifSearch' && (
          <NavLink to='/public/GifSearch' activeClassName='is-active'>
            Search a Gif
          </NavLink>
        )}
      </div>

  </div>
)
export default Header
