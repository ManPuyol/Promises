import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom'
import React from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GIFSearch'
import NotFoundPage from '../components/NotFoundPage'
import DashboardPage from '../components/DashboardPage'
import Header from '../components/Header'

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Switch>
        <Route path='/public/' component={DashboardPage} exact={true} />
        <Route path='/public/RandGif' component={GifList} exact={true} />
        <Route path='/public/GifSearch' component={GifSearch} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
)

export default AppRouter
