import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => (
  <div>
    <h1>Get Gif</h1>

      <div>
        <NavLink to='/' activeClassName='is-active' exact={true}>
          Go Home
        </NavLink>
        {location.pathname !== '/RandGif' && (
          <NavLink to='/RandGif' activeClassName='is-active'>
            Random
          </NavLink>
        )}
        {location.pathname !== '/GifSearch' && (
          <NavLink to='/GifSearch' activeClassName='is-active'>
            Search a Gif
          </NavLink>
        )}
      </div>

  </div>
)
export default Header
